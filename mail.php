<?php
ini_set('display_errors', 0);
error_reporting(0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';
$config = require __DIR__ . '/env.php';

function val($k)
{
  return isset($_POST[$k]) ? trim($_POST[$k]) : '';
}
function strip_newlines($s)
{
  return str_replace(["\r", "\n"], '', $s);
}

// HoneyPot
if (!empty($_POST['website'])) {
  http_response_code(400);
  exit;
}

// ===== 生値（raw） =====
$company_raw  = val('会社名');
$name_raw     = val('ご担当者名');
$industry_raw = val('業種・業界');
$email_raw    = strip_newlines(val('メールアドレス'));
$phone_raw    = preg_replace('/[^\d]/', '', val('お電話番号'));
$content_raw  = val('集客に関するお悩みごと'); // 任意

// ===== 必須チェック =====
if ($company_raw === '' || $name_raw === '' || $industry_raw === '' || $email_raw === '' || $phone_raw === '') {
  http_response_code(422);
  exit;
}
if (!filter_var($email_raw, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  exit;
}
if (!preg_match('/^\d{10,11}$/', $phone_raw)) {
  http_response_code(422);
  exit;
}

// ===== メール表示用（エスケープ済）=====
$company  = htmlspecialchars($company_raw, ENT_QUOTES, 'UTF-8');
$name     = htmlspecialchars($name_raw, ENT_QUOTES, 'UTF-8');
$industry = htmlspecialchars($industry_raw, ENT_QUOTES, 'UTF-8');
$email    = htmlspecialchars($email_raw, ENT_QUOTES, 'UTF-8');
$phone    = htmlspecialchars($phone_raw, ENT_QUOTES, 'UTF-8');
$content  = htmlspecialchars($content_raw, ENT_QUOTES, 'UTF-8');

// ===== GAS WebアプリURL =====
$GAS_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwsPK_klhaatC_ZwDg_oAf92IevVV02R3KvyYU6HQ4nlzmlZ85RqhqcFK5ZvAgqz8NCgQ/exec';

// ===== シート連携（GASにPOST）=====
function sendToSheet($url, $payload)
{
  if ($url === '') return;

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload, JSON_UNESCAPED_UNICODE));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 8);
  curl_exec($ch);
  curl_close($ch);
}

$mail = new PHPMailer(true);

try {
  // --- SMTP ---
  $mail->CharSet  = 'UTF-8';
  $mail->Encoding = 'base64';
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = $config['GMAIL_USERNAME'];
  $mail->Password   = $config['GMAIL_APP_PASSWORD'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;

  // --- 管理者宛 ---
  $mail->setFrom($config['GMAIL_USERNAME'], '=?UTF-8?B?' . base64_encode('集客の柱') . '?=');
  $mail->addReplyTo($email_raw, $name_raw);

  $recipients = ['info@rover.co.jp'];
  foreach ($recipients as $rcpt) {
    $mail->addAddress($rcpt);
  }

  $mail->Subject = '=?UTF-8?B?' . base64_encode('【集客の柱】お問い合わせがありました') . '?=';

  $body  = "以下の内容でお問い合わせがありました。\n\n";
  $body .= "━━━━━━━━━━━━━━━━━━━\n";
  $body .= "■ 会社名\n{$company_raw}\n\n";
  $body .= "■ ご担当者名\n{$name_raw}\n\n";
  $body .= "■ 業種・業界\n{$industry_raw}\n\n";
  $body .= "■ メールアドレス\n{$email_raw}\n\n";
  $body .= "■ お電話番号\n{$phone_raw}\n\n";
  $body .= "■ 集客に関するお悩みごと\n{$content_raw}\n";
  $body .= "━━━━━━━━━━━━━━━━━━━\n\n";
  $body .= "送信元： https://rover.co.jp/shukyaku-no-hashira/\n";

  $mail->isHTML(false);
  $mail->Body = $body;
  $mail->send();

  // --- 自動返信 ---
  $autoReply = new PHPMailer(true);
  $autoReply->CharSet  = 'UTF-8';
  $autoReply->Encoding = 'base64';
  $autoReply->isSMTP();
  $autoReply->Host       = 'smtp.gmail.com';
  $autoReply->SMTPAuth   = true;
  $autoReply->Username   = $config['GMAIL_USERNAME'];
  $autoReply->Password   = $config['GMAIL_APP_PASSWORD'];
  $autoReply->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $autoReply->Port       = 587;

  $autoReply->setFrom($config['GMAIL_USERNAME'], '=?UTF-8?B?' . base64_encode('集客の柱') . '?=');
  $autoReply->addAddress($email_raw, $name_raw);
  $autoReply->Subject = '=?UTF-8?B?' . base64_encode('【集客の柱】お問い合わせありがとうございます') . '?=';

  $autoReplyBody  = "{$name_raw} 様\n\n";
  $autoReplyBody .= "この度はお問い合わせいただきありがとうございます。\n";
  $autoReplyBody .= "以下の内容でお問い合わせを受け付けました。\n\n";
  $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━\n";
  $autoReplyBody .= "■ 会社名\n{$company_raw}\n\n";
  $autoReplyBody .= "■ ご担当者名\n{$name_raw}\n\n";
  $autoReplyBody .= "■ 業種・業界\n{$industry_raw}\n\n";
  $autoReplyBody .= "■ メールアドレス\n{$email_raw}\n\n";
  $autoReplyBody .= "■ お電話番号\n{$phone_raw}\n\n";
  $autoReplyBody .= "■ 集客に関するお悩みごと\n{$content_raw}\n";
  $autoReplyBody .= "━━━━━━━━━━━━━━━━━━━\n\n";
  $autoReplyBody .= "担当者より折り返しご連絡させていただきます。\n";
  $autoReplyBody .= "※本メールは自動送信です。\n\n";
  $autoReplyBody .= "------------------------------------\n";
  $autoReplyBody .= "集客の柱 お問い合わせ窓口\n";
  $autoReplyBody .= "------------------------------------";

  $autoReply->isHTML(false);
  $autoReply->Body = $autoReplyBody;
  $autoReply->send();

  // --- シートにも送る ---
  $sheetPayload = [
    'company'  => $company_raw,
    'name'     => $name_raw,
    'industry' => $industry_raw,
    'phone'    => (string)$phone_raw,
    'email'    => $email_raw,
    'message'  => $content_raw,
  ];
  sendToSheet($GAS_WEBAPP_URL, $sheetPayload);

  // サンクスへ
  header('Location: https://rover.co.jp/shukyaku-no-hashira/thanks.html');
  exit;
} catch (Exception $e) {
  error_log('Mail Error: ' . $e->getMessage() . ' | ' . $mail->ErrorInfo);
  http_response_code(500);
  exit;
}
