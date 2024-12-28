(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    6729: function(e, n, t) {
        "use strict";
        t.d(n, {
            o: function() {
                return y
            }
        });
        var i, s, o, r, p, a = t(1383), l = t(1686), c = t(1520), d = t(777), g = l.ZP.ul.withConfig({
            displayName: "styles__QuestionUl",
            componentId: "sc-1oa4uyq-0"
        })(["width:880px;border-top:2px solid ", ";border-bottom:2px solid ", ";& > * + *{border-top:2px dashed ", ";}", ""], c.I.GRAY_DARK, c.I.GRAY_DARK, c.I.GRAY_LIGHT, d.BC.lessThan("sp")(i || (i = (0,
        a.Z)(["\n    width: 320px;\n  "])))), h = l.ZP.li.withConfig({
            displayName: "styles__QuestionItem",
            componentId: "sc-1oa4uyq-1"
        })(["display:grid;justify-content:center;grid-template-columns:91px 1fr;grid-template-areas:'fqaNo question' 'fqaNo answer';gap:32px 30px;padding:30px 50px 30px 10px;", ""], d.BC.lessThan("sp")(s || (s = (0,
        a.Z)(["\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n      'fqaNo question'\n      'answer answer';\n\n    gap: 32px 24px;\n    padding: 38px 10px;\n  "])))), x = l.ZP.div.withConfig({
            displayName: "styles__FaqNo",
            componentId: "sc-1oa4uyq-2"
        })(["grid-area:fqaNo;font-family:'HelveticaNeue-Light','Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif !important;font-weight:bold;padding:0 15px;font-size:30px;letter-spacing:0.1em;text-align:center;", ""], d.BC.lessThan("sp")(o || (o = (0,
        a.Z)(["\n    padding: 0;\n    font-size: 22px;\n    letter-spacing: 0.1em;\n  "])))), m = l.ZP.div.withConfig({
            displayName: "styles__Question",
            componentId: "sc-1oa4uyq-3"
        })(["grid-area:question;font-weight:500;font-size:16px;line-height:30px;letter-spacing:1.5px;", ""], d.BC.lessThan("sp")(r || (r = (0,
        a.Z)(["\n    font-size: 14px;\n    line-height: 20px;\n  "])))), u = l.ZP.div.withConfig({
            displayName: "styles__Answer",
            componentId: "sc-1oa4uyq-4"
        })(["grid-area:answer;color:", ";font-size:14px;line-height:1.8em;letter-spacing:2px;word-break:break-all;overflow-wrap:break-word;", ""], c.I.GRAY_X_DARK, d.BC.lessThan("sp")(p || (p = (0,
        a.Z)(["\n    font-size: 12px;\n    line-height: 22px;\n    letter-spacing: 0.015em;\n  "])))), f = t(5893), y = function(e) {
            var n = e.questions;
            return (0,
            f.jsx)(g, {
                children: n.map((function(e) {
                    var n = e.question
                      , t = e.answer
                      , i = e.number;
                    return (0,
                    f.jsxs)(h, {
                        children: [(0,
                        f.jsxs)(x, {
                            children: ["Q", i, "."]
                        }), (0,
                        f.jsx)(m, {
                            children: n
                        }), (0,
                        f.jsx)(u, {
                            children: t
                        })]
                    }, i)
                }
                ))
            })
        }
    },
    2466: function(e, n, t) {
        "use strict";
        t.d(n, {
            B: function() {
                return s.a
            }
        });
        var i = t(7484)
          , s = t.n(i);
        s().locale("ja")
    },
    2071: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ft: function() {
                return r
            },
            _$: function() {
                return s
            },
            qE: function() {
                return o
            }
        });
        var i = "rd_code"
          , s = function(e) {
            e && window.sessionStorage && sessionStorage.setItem(i, e)
        }
          , o = function() {
            if (window.sessionStorage)
                return sessionStorage.getItem(i)
        }
          , r = function() {
            window.sessionStorage && sessionStorage.removeItem(i)
        }
    },
    9773: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSG: function() {
                return Sp
            },
            default: function() {
                return Gp
            }
        });
        var i, s, o, r, p, a, l, c, d, g, h, x, m, u, f, y, w, _, b, C, j, v, I = t(9499), Z = t(3477), P = t(1163), T = t(2071), N = t(1383), A = t(1686), z = t(777), B = t(958), R = "100px", O = A.ZP.section.withConfig({
            displayName: "styles__AboutSection",
            componentId: "sc-11uyna0-0"
        })(["padding:94px 0;", " ", ""], B.U, z.BC.lessThan("sp")(i || (i = (0,
        N.Z)(["\n    padding: 77px 0;\n  "])))), k = A.ZP.div.withConfig({
            displayName: "styles__BalloonContainer",
            componentId: "sc-11uyna0-1"
        })(["display:flex;justify-content:center;", ""], z.BC.lessThan("sp")(s || (s = (0,
        N.Z)(["\n    width: 100%;\n    justify-content: space-between;\n    flex-direction: column;\n  "])))), D = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["isRising"].includes(e)
            }
        }).withConfig({
            displayName: "styles__BalloonWrapper",
            componentId: "sc-11uyna0-2"
        })(["padding-top:", ";", ""], (function(e) {
            return e.isRising ? "0" : R
        }
        ), z.BC.lessThan("sp")(o || (o = (0,
        N.Z)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    padding-top: 0;\n    justify-content: center;\n  "])))), S = A.ZP.div.withConfig({
            displayName: "styles__Illustration",
            componentId: "sc-11uyna0-3"
        })(["margin-top:-", ";width:1021px;", ""], R, z.BC.lessThan("sp")(r || (r = (0,
        N.Z)(["\n    margin-top: 0;\n    width: 390px;\n  "])))), G = A.ZP.img.withConfig({
            displayName: "styles__LogoImage",
            componentId: "sc-11uyna0-4"
        })(["margin-bottom:28px;width:143px;", ""], z.BC.lessThan("sp")(p || (p = (0,
        N.Z)(["\n    width: 101px;\n    margin: 0 auto 18px auto;\n  "])))), E = A.ZP.img.withConfig({
            displayName: "styles__TitleImage",
            componentId: "sc-11uyna0-5"
        })(["width:367px;margin-bottom:71px;", ""], z.BC.lessThan("sp")(a || (a = (0,
        N.Z)(["\n    width: 257px;\n    margin-bottom: 30px;\n  "])))), Y = t(1520), M = {
            time: {
                color: Y.I.GREEN_X_DARK,
                background: "url('/images/homepage/service_balloon_circle_green.svg')"
            },
            repeat: {
                color: Y.I.GREEN_DARK,
                background: "url('/images/homepage/service_balloon_circle_litegreen.svg')"
            },
            pinpoint: {
                color: Y.I.YELLOW_5,
                background: "url('/images/homepage/service_balloon_circle_yellow.svg')"
            }
        }, K = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["variant"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Circle",
            componentId: "sc-8m5dct-0"
        })(["width:340px;height:340px;display:flex;flex-direction:column;background-image:", ";background-size:contain;background-repeat:no-repeat;", ""], (function(e) {
            return M[e.variant].background
        }
        ), z.BC.lessThan("sp")(l || (l = (0,
        N.Z)(["\n    width: 320px;\n    height: 320px;\n  "])))), F = A.ZP.img.withConfig({
            displayName: "styles__IconImage",
            componentId: "sc-8m5dct-1"
        })(["display:flex;justify-content:center;margin-top:33px;height:53px;"]), H = A.ZP.h3.withConfig({
            shouldForwardProp: function(e) {
                return !["variant", "letterSpacing"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Title",
            componentId: "sc-8m5dct-2"
        })(["display:flex;justify-content:center;width:100%;margin:24px auto;font-style:normal;font-weight:500;font-size:22px;line-height:16px;color:", ";", ""], (function(e) {
            return M[e.variant].color
        }
        ), (function(e) {
            var n = e.letterSpacing;
            return n && "letter-spacing: ".concat(n, ";")
        }
        )), q = A.ZP.div.withConfig({
            displayName: "styles__Content",
            componentId: "sc-8m5dct-3"
        })(["padding:0 75px;margin:10px 0;text-align:left;font-style:normal;font-weight:400;font-size:14px;line-height:26px;text-align:justify;letter-spacing:0.5px;color:", ";", ""], Y.I.GRAY_X_DARK, z.BC.lessThan("sp")(c || (c = (0,
        N.Z)(["\n     // font-size: 12px;\n     word-wrap: break-word;\n     overflow-wrap: break-word;\n\n     margin: 8px 0;\n     padding: 0 43px;\n  "])))), W = t(7294), L = t(5893), V = {
            repeat: "/images/homepage/service_balloon_icon_repeat.svg",
            pinpoint: "/images/homepage/service_balloon_icon_pinpoint.svg",
            time: "/images/homepage/service_balloon_icon_time.svg"
        }, X = function(e) {
            var n = e.variant
              , t = e.title
              , i = e.description
              , s = e.letterSpacing;
            return (0,
            L.jsxs)(K, {
                variant: n,
                children: [(0,
                L.jsx)(F, {
                    src: V[n]
                }), (0,
                L.jsx)(H, {
                    variant: n,
                    letterSpacing: s,
                    children: t
                }), (0,
                L.jsx)(q, {
                    children: i
                })]
            })
        }, U = t(615), J = (t(6703),
        A.ZP.div.withConfig({
            displayName: "styles__CarouselWrapper",
            componentId: "sc-17khp60-0"
        })(["width:100%;display:flex;justify-content:center;"])), Q = A.ZP.div.withConfig({
            displayName: "styles__CarouselWrapperInner",
            componentId: "sc-17khp60-1"
        })(["width:100%;", ""], z.BC.lessThan("sp")(d || (d = (0,
        N.Z)(["\n    max-width: 380px;\n  "])))), $ = A.ZP.button.withConfig({
            displayName: "styles__NextButton",
            componentId: "sc-17khp60-2"
        })(["margin:0;padding:0;position:absolute;top:0;bottom:0;right:0;background:none;border:0;cursor:pointer;z-index:10;&:before{content:url('/images/homepage/carousel_arrow_next.svg');}"]), ee = A.ZP.button.withConfig({
            displayName: "styles__PrevButton",
            componentId: "sc-17khp60-3"
        })(["margin:0;padding:0;position:absolute;top:0;bottom:0;left:0;background:none;border:0;cursor:pointer;z-index:10;&:before{content:url('/images/homepage/carousel_arrow_prev.svg');}"]), ne = function(e, n) {
            return n ? (0,
            L.jsx)(ee, {
                onClick: e
            }) : null
        }, te = function(e, n) {
            return n ? (0,
            L.jsx)($, {
                onClick: e
            }) : null
        }, ie = function(e) {
            var n = e.children;
            return (0,
            L.jsx)(J, {
                children: (0,
                L.jsx)(Q, {
                    children: (0,
                    L.jsx)(U.lr, {
                        autoPlay: !1,
                        showStatus: !1,
                        showIndicators: !1,
                        showThumbs: !1,
                        renderArrowNext: te,
                        renderArrowPrev: ne,
                        children: n
                    })
                })
            })
        }, se = A.ZP.div.withConfig({
            displayName: "Visible__VisiblePc",
            componentId: "sc-1gvwnzg-0"
        })(["", ""], z.BC.lessThan("sp")(g || (g = (0,
        N.Z)(["\n    display: none;\n  "])))), oe = A.ZP.div.withConfig({
            displayName: "Visible__VisibleSp",
            componentId: "sc-1gvwnzg-1"
        })(["display:none;", ""], z.BC.lessThan("sp")(h || (h = (0,
        N.Z)(["\n    display: block;\n  "])))), re = t(6566), pe = function(e) {
            var n = function(e) {
                return e.map((function(e) {
                    return (0,
                    L.jsx)(D, {
                        isRising: e.isRising,
                        children: (0,
                        L.jsx)(X, {
                            variant: e.variant,
                            title: e.title,
                            description: e.description,
                            letterSpacing: e.letterSpacing
                        })
                    }, e.title)
                }
                ))
            }(e.abouts);
            return (0,
            L.jsxs)(O, {
                children: [(0,
                L.jsx)(G, {
                    src: "/images/homepage/logo_30min.svg",
                    alt: "30min"
                }), (0,
                L.jsx)(E, {
                    src: "/images/homepage/heading_about_30min.png",
                    alt: "\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u3068\u306f\uff1f"
                }), (0,
                L.jsx)(se, {
                    children: (0,
                    L.jsx)(k, {
                        children: n
                    })
                }), (0,
                L.jsx)(oe, {
                    children: (0,
                    L.jsx)(ie, {
                        children: n
                    })
                }), (0,
                L.jsx)(S, {
                    children: (0,
                    L.jsx)(re.E, {
                        src: "/images/homepage/about_illustration_sp.svg",
                        pcSrc: "/images/homepage/about_illustration.svg",
                        alt: "30min. \u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u3068\u306f\uff1f",
                        loading: "lazy"
                    })
                })]
            })
        }, ae = A.ZP.section.withConfig({
            displayName: "styles__VoiceSection",
            componentId: "sc-n16b65-0"
        })(["padding:32px 0 42px 0;", " ", ""], B.U, z.BC.lessThan("sp")(x || (x = (0,
        N.Z)(["\n    padding: 12px 0 18px 0;\n  "])))), le = A.ZP.div.withConfig({
            displayName: "styles__VoiceArea",
            componentId: "sc-n16b65-1"
        })([""]), ce = A.ZP.div.withConfig({
            displayName: "styles__VoicePcContentWrapper",
            componentId: "sc-n16b65-2"
        })(["width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;", ""], z.BC.lessThan("sp")(m || (m = (0,
        N.Z)(["\n    width: 100%;\n    display: block;\n  "])))), de = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CustomerVoiceWrapper",
            componentId: "sc-n16b65-3"
        })(["display:flex;justify-content:center;padding-top:55px;padding-bottom:71px;border-bottom:1px dashed #b3b3b3;:last-child{border-bottom:none;}margin:", ";", ""], (function(e) {
            return "left" === e.layout ? "0 115px 0 0" : "0 0 0 115px"
        }
        ), z.BC.lessThan("sp")(u || (u = (0,
        N.Z)(["\n    margin: revert;\n    width: 100%;\n  "])))), ge = {
            primary: {
                color: Y.I.GREEN_DARK
            },
            secondary: {
                color: Y.I.GREEN_X_DARK
            },
            tertiary: {
                color: Y.I.YELLOW_5
            }
        }, he = {
            left: {
                gridTemplateColumns: "217px 410px",
                gridTemplateAreas: ['"VoiceImageArea VoiceTitleArea"', '"VoiceImageArea VoiceSubtitleArea"', '"VoiceImageArea VoiceDescriptionArea"'],
                imageJustifyItems: "left"
            },
            right: {
                gridTemplateColumns: "410px 217px",
                gridTemplateAreas: ['"VoiceTitleArea VoiceImageArea"', '"VoiceSubtitleArea VoiceImageArea"', '"VoiceDescriptionArea VoiceImageArea"'],
                imageJustifyItems: "right"
            }
        }, xe = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["variant", "layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceContainer",
            componentId: "sc-eblrrb-0"
        })(["display:grid;grid-template-columns:", ";grid-template-areas:", ";.titleHead{color:", ";}h3{color:", ";border:1px solid ", ";border-radius:8px;}grid-template-rows:84px 90px 1fr;", ""], (function(e) {
            return he[e.layout].gridTemplateColumns
        }
        ), (function(e) {
            return he[e.layout].gridTemplateAreas.join("\n")
        }
        ), (function(e) {
            return ge[e.variant].color
        }
        ), (function(e) {
            return ge[e.variant].color
        }
        ), (function(e) {
            return ge[e.variant].color
        }
        ), z.BC.lessThan("sp")(f || (f = (0,
        N.Z)(["\n    display: block;\n    text-align: left;\n    width: 320px;\n    margin: revert;\n  "])))), me = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceImageArea",
            componentId: "sc-eblrrb-1"
        })(["grid-area:VoiceImageArea;display:grid;justify-items:", ";", ""], (function(e) {
            return he[e.layout].imageJustifyItems
        }
        ), z.BC.lessThan("sp")(y || (y = (0,
        N.Z)(["\n    justify-items: center;\n  "])))), ue = A.ZP.div.withConfig({
            displayName: "styles__VoiceTitleArea",
            componentId: "sc-eblrrb-2"
        })(["grid-area:VoiceTitleArea;"]), fe = A.ZP.div.withConfig({
            displayName: "styles__VoiceSubtitleArea",
            componentId: "sc-eblrrb-3"
        })(["grid-area:VoiceSubtitleArea;"]), ye = A.ZP.div.withConfig({
            displayName: "styles__VoiceDescriptionArea",
            componentId: "sc-eblrrb-4"
        })(["grid-area:VoiceDescriptionArea;"]), we = A.ZP.div.withConfig({
            displayName: "styles__VoiceImageInner",
            componentId: "sc-eblrrb-5"
        })(["width:170px;", ""], z.BC.lessThan("sp")(w || (w = (0,
        N.Z)(["\n    && {\n      width: 128px;\n    }\n  "])))), _e = A.ZP.p.withConfig({
            displayName: "styles__TitleHead",
            componentId: "sc-eblrrb-6"
        })(["font-style:normal;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.05em;margin-bottom:8px;"]), be = A.ZP.h3.withConfig({
            displayName: "styles__Title",
            componentId: "sc-eblrrb-7"
        })(["padding:11px 24px;text-align:center;font-style:normal;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.1em;width:278px;height:36px;filter:drop-shadow(2px 2px 4px rgba(0,0,0,0.1));background:", ";", ""], Y.I.WHITE, z.BC.lessThan("sp")(_ || (_ = (0,
        N.Z)(["\n    width: 320px;\n  "])))), Ce = A.ZP.h4.withConfig({
            displayName: "styles__Subtitle",
            componentId: "sc-eblrrb-8"
        })(["font-style:normal;font-weight:500;font-size:18px;line-height:32px;letter-spacing:1.5px;color:#4d4d4d;", ""], z.BC.lessThan("sp")(b || (b = (0,
        N.Z)(["\n    margin: 22px 0 18px 0;\n  "])))), je = A.ZP.p.withConfig({
            displayName: "styles__Description",
            componentId: "sc-eblrrb-9"
        })(["font-style:normal;font-weight:400;font-size:14px;line-height:26px;letter-spacing:1px;color:", ";text-align:justify;"], Y.I.GRAY_X_DARK), ve = function(e) {
            var n = e.variant
              , t = void 0 === n ? "primary" : n
              , i = e.layout
              , s = void 0 === i ? "left" : i
              , o = e.imageUrl
              , r = e.title
              , p = e.subtitle
              , a = e.description;
            return (0,
            L.jsxs)(xe, {
                variant: t,
                layout: s,
                children: [(0,
                L.jsx)(me, {
                    layout: s,
                    children: (0,
                    L.jsx)(we, {
                        children: (0,
                        L.jsx)("img", {
                            src: o,
                            alt: r,
                            loading: "lazy"
                        })
                    })
                }), (0,
                L.jsxs)(ue, {
                    children: [(0,
                    L.jsx)(_e, {
                        className: "titleHead",
                        children: "Course"
                    }), (0,
                    L.jsx)(be, {
                        children: r
                    })]
                }), (0,
                L.jsx)(fe, {
                    children: (0,
                    L.jsx)(Ce, {
                        children: p
                    })
                }), (0,
                L.jsx)(ye, {
                    children: (0,
                    L.jsx)(je, {
                        children: a
                    })
                })]
            })
        }, Ie = A.ZP.div.withConfig({
            displayName: "styles__SectionTitleWrapper",
            componentId: "sc-1q2p1hs-0"
        })(["width:100%;display:flex;align-items:center;flex-direction:column;"]), Ze = A.ZP.h2.withConfig({
            displayName: "styles__Title",
            componentId: "sc-1q2p1hs-1"
        })(["font-style:normal;font-style:normal;font-weight:500;font-size:16px;line-height:16px;color:", ";text-align:center;letter-spacing:0.15em;"], Y.I.GREEN_X_DARK), Pe = A.ZP.p.withConfig({
            displayName: "styles__Description",
            componentId: "sc-1q2p1hs-2"
        })(["max-width:480px;margin:17px 10px;font-style:normal;font-weight:400;font-size:14px;line-height:32px;text-align:justify;letter-spacing:1px;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(C || (C = (0,
        N.Z)(["\n    width: 320px;\n    line-height: 26px;\n  "])))), Te = A.ZP.img.withConfig({
            displayName: "styles__LineImage",
            componentId: "sc-1q2p1hs-3"
        })(["width:312px;margin-bottom:20px;", ""], z.BC.lessThan("sp")(j || (j = (0,
        N.Z)(["\n    margin-bottom: 17px;\n    width: 187px;\n  "])))), Ne = A.ZP.img.withConfig({
            shouldForwardProp: function(e) {
                return "size" !== e && "marginTop" !== e
            }
        }).withConfig({
            displayName: "styles__TitleImage",
            componentId: "sc-1q2p1hs-4"
        })(["width:", ";margin-bottom:", ";", ""], (function(e) {
            return e.size.pc
        }
        ), (function(e) {
            return e.marginTop.pc
        }
        ), (function(e) {
            var n = e.size
              , t = e.marginTop;
            return z.BC.lessThan("sp")(v || (v = (0,
            N.Z)(["\n    margin-bottom: ", ";\n    width: ", ";\n  "])), t.sp, n.sp)
        }
        )), Ae = {
            title: "\u304a\u5ba2\u69d8\u306e\u58f0",
            titleImage: {
                src: "/images/homepage/section_title_voice.svg",
                alt: "Voice",
                size: {
                    pc: "106px",
                    sp: "100px"
                },
                marginTop: {
                    pc: "15px",
                    sp: "13px"
                }
            }
        }, ze = {
            titleImage: {
                src: "/images/homepage/section_title_housekeeper.svg",
                alt: "Housekeeper",
                size: {
                    sp: "247px",
                    pc: "261px"
                },
                marginTop: {
                    pc: "8.5px",
                    sp: "2.7px"
                }
            },
            title: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc",
            description: "30min.\u306e\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306f\u3001\u4e09\u83f1\u5730\u6240\u306b\u3066\u4e00\u4eba\u4e00\u4eba\u9762\u63a5\u30fb\u7814\u4fee\u3092\u884c\u3044\u3001\u53b3\u6b63\u306a\u5be9\u67fb\u57fa\u6e96\u306b\u5408\u683c\u3057\u305f\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306e\u307f\u7686\u69d8\u306e\u3054\u81ea\u5b85\u306b\u3054\u8a2a\u554f\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u3044\u307e\u3059\u300230min.\u306b\u6240\u5c5e\u3059\u308b\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4e00\u90e8\u3054\u7d39\u4ecb\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
        }, Be = {
            titleImage: {
                src: "/images/homepage/section_title_service.svg",
                alt: "Service",
                size: {
                    pc: "167px",
                    sp: "158px"
                },
                marginTop: {
                    pc: "15px",
                    sp: "11px"
                }
            },
            title: "\u30b5\u30fc\u30d3\u30b9\u3054\u5229\u7528\u306e\u6d41\u308c",
            description: "\u4e00\u5ea6\u3001\u304a\u8a66\u3057\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3044\u305f\u5f8c\u306b\u3001\u5b9a\u671f\u3067\u306e\u304a\u7533\u3057\u8fbc\u307f\u3092\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002\u307e\u305a\u30de\u30a4\u30da\u30fc\u30b8\u306b\u767b\u9332\u3057\u3066\u3001\u304a\u8a66\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3092\u304a\u7533\u8fbc\u304f\u3060\u3055\u3044\u3002"
        }, Re = {
            title: "\u30b3\u30f3\u30bb\u30d7\u30c8",
            titleImage: {
                src: "/images/homepage/section_title_concept.svg",
                alt: "Concept",
                size: {
                    pc: "166px",
                    sp: "157px"
                },
                marginTop: {
                    pc: "8.5px",
                    sp: "6px"
                }
            }
        }, Oe = {
            title: "\u30b3\u30fc\u30b9\u30fb\u6599\u91d1",
            titleImage: {
                src: "/images/homepage/section_title_courses_and_fees.svg",
                alt: "Courses and Fees",
                size: {
                    pc: "355px",
                    sp: "309px"
                },
                marginTop: {
                    pc: "27px",
                    sp: "12px"
                }
            }
        }, ke = {
            title: "\u30a8\u30ea\u30a2",
            titleImage: {
                src: "/images/homepage/section_title_area.svg",
                alt: "Area",
                size: {
                    pc: "90px",
                    sp: "85px"
                },
                marginTop: {
                    pc: "27px",
                    sp: "12px"
                }
            }
        };
        function De(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Se(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? De(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : De(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Ge = function(e) {
            var n = e.titleImage
              , t = e.title
              , i = e.description;
            return (0,
            L.jsxs)(Ie, {
                children: [(0,
                L.jsx)(Ne, Se({}, n)), (0,
                L.jsx)(Te, {
                    src: "/images/homepage/section_title_border.svg",
                    alt: ""
                }), (0,
                L.jsx)(Ze, {
                    children: t
                }), i && (0,
                L.jsx)(Pe, {
                    children: i
                })]
            })
        }
          , Ee = function() {
            return (0,
            L.jsx)(Ge, Se({}, Ae))
        }
          , Ye = function(e) {
            var n = e.description;
            return (0,
            L.jsx)(Ge, Se(Se({}, Be), {}, {
                description: n
            }))
        }
          , Me = function() {
            return (0,
            L.jsx)(Ge, Se({}, Re))
        }
          , Ke = function(e) {
            var n = e.description;
            return (0,
            L.jsx)(Ge, Se(Se({}, ze), {}, {
                description: n
            }))
        }
          , Fe = function(e) {
            var n = e.description;
            return (0,
            L.jsx)(Ge, Se(Se({}, Oe), {}, {
                description: n
            }))
        }
          , He = function(e) {
            var n = e.description;
            return (0,
            L.jsx)(Ge, Se(Se({}, ke), {}, {
                description: n
            }))
        };
        function qe(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function We(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? qe(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qe(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Le, Ve, Xe, Ue, Je, Qe, $e, en, nn, tn, sn, on, rn = function(e) {
            var n = function(e) {
                return e.map((function(e) {
                    return (0,
                    L.jsx)(de, {
                        layout: e.layout,
                        children: (0,
                        L.jsx)(ve, We({}, e))
                    }, e.title)
                }
                ))
            }(e.voices);
            return (0,
            L.jsx)(ae, {
                children: (0,
                L.jsxs)(le, {
                    children: [(0,
                    L.jsx)(Ee, {}), (0,
                    L.jsx)(se, {
                        children: (0,
                        L.jsx)(ce, {
                            children: n
                        })
                    }), (0,
                    L.jsx)(oe, {
                        children: (0,
                        L.jsx)(ie, {
                            children: n
                        })
                    })]
                })
            })
        }, pn = {
            left: {
                gridTemplateColumns: "340px 396px 80px",
                gridTemplateAreas: ['"VoiceImageArea VoiceTitleArea VoiceDummyArea"', '"VoiceImageArea VoiceContentArea VoiceDummyArea"'],
                contentMargin: "0 0 0 36px"
            },
            right: {
                gridTemplateColumns: "80px 431px 340px",
                gridTemplateAreas: ['"VoiceDummyArea VoiceTitleArea VoiceImageArea"', '"VoiceDummyArea VoiceContentArea VoiceImageArea"'],
                contentMargin: "0 36px 0 0"
            }
        }, an = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceContainer",
            componentId: "sc-g9t2d2-0"
        })(["display:grid;grid-template-columns:", ";grid-template-areas:", ";grid-template-rows:146px 1fr;", ""], (function(e) {
            return pn[e.layout].gridTemplateColumns
        }
        ), (function(e) {
            return pn[e.layout].gridTemplateAreas.join("\n")
        }
        ), z.BC.lessThan("sp")(Le || (Le = (0,
        N.Z)(["\n    display: block;\n    width: 320px;\n    margin: 0 auto;\n  "])))), ln = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceImageArea",
            componentId: "sc-g9t2d2-1"
        })(["grid-area:VoiceImageArea;", ""], z.BC.lessThan("sp")(Ve || (Ve = (0,
        N.Z)(["\n    display: flex;\n    justify-content: center;\n  "])))), cn = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceTitleArea",
            componentId: "sc-g9t2d2-2"
        })(["grid-area:VoiceTitleArea;margin:", ";", ""], (function(e) {
            return pn[e.layout].contentMargin
        }
        ), z.BC.lessThan("sp")(Xe || (Xe = (0,
        N.Z)(["\n    margin: 0 0 21px 0;\n    display: flex;\n    justify-content: center;\n  "])))), dn = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["layout"].includes(e)
            }
        }).withConfig({
            displayName: "styles__VoiceContentArea",
            componentId: "sc-g9t2d2-3"
        })(["grid-area:VoiceContentArea;margin:", ";", ""], (function(e) {
            return pn[e.layout].contentMargin
        }
        ), z.BC.lessThan("sp")(Ue || (Ue = (0,
        N.Z)(["\n    margin: 0;\n  "])))), gn = (A.ZP.div.withConfig({
            displayName: "styles__VoiceDummyArea",
            componentId: "sc-g9t2d2-4"
        })(["VoiceDummyArea"]),
        A.ZP.div.withConfig({
            displayName: "styles__VoiceImageInner",
            componentId: "sc-g9t2d2-5"
        })(["width:340px;", ""], z.BC.lessThan("sp")(Je || (Je = (0,
        N.Z)(["\n    && {\n      width: 198px;\n    }\n  "]))))), hn = A.ZP.img.withConfig({
            displayName: "styles__VoiceImage",
            componentId: "sc-g9t2d2-6"
        })(["width:340px;height:340px;border-radius:50%;", ""], z.BC.lessThan("sp")(Qe || (Qe = (0,
        N.Z)(["\n    width: 198px;\n    height: 198px;\n  "])))), xn = A.ZP.img.withConfig({
            displayName: "styles__VoiceTitle",
            componentId: "sc-g9t2d2-7"
        })(["margin-top:14px;width:363px;", ""], z.BC.lessThan("sp")($e || ($e = (0,
        N.Z)(["\n    width: 276px;\n    margin: 0;\n  "])))), mn = A.ZP.h4.withConfig({
            displayName: "styles__Subtitle",
            componentId: "sc-g9t2d2-8"
        })(["font-style:normal;font-weight:500;font-size:14px;line-height:1.6;letter-spacing:2px;font-feature-settings:'palt' on;color:#333333;", ""], z.BC.lessThan("sp")(en || (en = (0,
        N.Z)(["\n    margin: 22px 0 18px 0;\n    font-size: 16px;\n    letter-spacing: 1px;\n  "])))), un = A.ZP.p.withConfig({
            displayName: "styles__Description",
            componentId: "sc-g9t2d2-9"
        })(["margin-top:20px;font-style:normal;font-weight:400;font-size:14px;line-height:26px;letter-spacing:1px;color:", ";text-align:justify;"], Y.I.GRAY_X_DARK), fn = function(e) {
            var n = e.layout
              , t = void 0 === n ? "left" : n
              , i = e.housekeeperImage
              , s = e.housekeeperAlt
              , o = e.titleImage
              , r = e.titleAlt
              , p = e.subtitle
              , a = e.description;
            return (0,
            L.jsxs)(an, {
                layout: t,
                children: [(0,
                L.jsx)(cn, {
                    layout: t,
                    children: (0,
                    L.jsx)(xn, {
                        src: o,
                        alt: r,
                        loading: "lazy"
                    })
                }), (0,
                L.jsx)(ln, {
                    layout: t,
                    children: (0,
                    L.jsx)(gn, {
                        children: (0,
                        L.jsx)(hn, {
                            src: i,
                            alt: s,
                            loading: "lazy"
                        })
                    })
                }), (0,
                L.jsxs)(dn, {
                    layout: t,
                    children: [(0,
                    L.jsx)(mn, {
                        children: p
                    }), (0,
                    L.jsx)(un, {
                        children: a
                    })]
                })]
            })
        }, yn = A.ZP.section.withConfig({
            displayName: "styles__HousekeeperSection",
            componentId: "sc-48oc7k-0"
        })(["padding:20px 0 100px 0;", " ", ""], B.U, z.BC.lessThan("sp")(nn || (nn = (0,
        N.Z)(["\n    padding: 0 0 100px 0;\n  "])))), wn = A.ZP.div.withConfig({
            displayName: "styles__JobContent",
            componentId: "sc-48oc7k-1"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:214px;", ""], z.BC.lessThan("sp")(tn || (tn = (0,
        N.Z)(["\n    margin-top: 52px;\n  "])))), _n = A.ZP.div.withConfig({
            displayName: "styles__HousekeeperVoiceWrapper",
            componentId: "sc-48oc7k-2"
        })(["display:flex;justify-content:left;padding-bottom:89px;&:last-child{padding-bottom:0;}"]), bn = (A.ZP.div.withConfig({
            displayName: "styles__Title",
            componentId: "sc-48oc7k-3"
        })(["margin-top:44px;margin-bottom:11px;"]),
        A.ZP.div.withConfig({
            displayName: "styles__HousekeeperContent",
            componentId: "sc-48oc7k-4"
        })(["margin-top:90px;", ""], z.BC.lessThan("sp")(sn || (sn = (0,
        N.Z)(["\n    margin-top: 45px;\n  "]))))), Cn = A.ZP.img.withConfig({
            displayName: "styles__HousekeeperImage",
            componentId: "sc-48oc7k-5"
        })(["width:370px;margin-bottom:75px;", ""], z.BC.lessThan("sp")(on || (on = (0,
        N.Z)(["\n    width: 200px;\n    margin-bottom: 25px;\n  "])))), jn = t(8308);
        function vn(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function In(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? vn(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vn(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Zn, Pn, Tn, Nn, An, zn, Bn, Rn, On, kn, Dn, Sn, Gn, En, Yn, Mn, Kn, Fn, Hn, qn, Wn, Ln, Vn, Xn, Un, Jn, Qn, $n, et, nt, tt, it, st = function(e) {
            var n = e.voices
              , t = e.description
              , i = e.recruitButtonLinkUrl
              , s = function(e) {
                return e.map((function(e) {
                    return (0,
                    L.jsx)(_n, {
                        children: (0,
                        L.jsx)(fn, In({}, e))
                    }, e.titleAlt)
                }
                ))
            }(n);
            return (0,
            L.jsxs)(yn, {
                children: [(0,
                L.jsx)(Cn, {
                    src: "/images/homepage/title_image_housekeeper.svg",
                    alt: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc"
                }), (0,
                L.jsx)(Ke, {
                    description: t
                }), (0,
                L.jsxs)(bn, {
                    children: [(0,
                    L.jsx)(se, {
                        children: s
                    }), (0,
                    L.jsx)(oe, {
                        children: (0,
                        L.jsx)(ie, {
                            children: s
                        })
                    })]
                }), (0,
                L.jsx)(wn, {
                    children: (0,
                    L.jsx)(jn.Q, {
                        href: i,
                        variant: "primary",
                        size: "large",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u52df\u96c6"
                    })
                })]
            })
        }, ot = t(7627), rt = t(6114), pt = t(2222), at = t(4367), lt = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["height", "pcHeight"].includes(e)
            }
        }).withConfig({
            displayName: "styles__SlideContainer",
            componentId: "sc-1y2f0a7-0"
        })(["position:relative;height:", ";margin:0 auto;", ""], (function(e) {
            var n = e.pcHeight;
            return (0,
            rt.Z)(n, pt.t.PC)
        }
        ), (function(e) {
            var n = e.height;
            return z.BC.lessThan("sp")(Zn || (Zn = (0,
            N.Z)(["\n    height: ", ";\n    max-width: revert;\n    margin: revert;\n  "])), (0,
            rt.Z)(n, pt.t.SP))
        }
        )), ct = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["current"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Slide",
            componentId: "sc-1y2f0a7-1"
        })(["position:absolute;top:0;left:0;width:100%;height:100%;", " & picture{display:block;height:100%;width:100%;& img{display:block;height:100%;width:100%;object-fit:cover;}}"], (function(e) {
            return e.current ? (0,
            A.iv)(["opacity:1;transition:opacity 1s;"]) : (0,
            A.iv)(["opacity:0;transition:opacity 1s;"])
        }
        )), dt = A.ZP.div.withConfig({
            displayName: "styles__IndicatorContainer",
            componentId: "sc-1y2f0a7-2"
        })(["display:flex;align-items:center;align-content:center;justify-content:center;padding:27px 0;", ""], z.BC.lessThan("sp")(Pn || (Pn = (0,
        N.Z)(["\n    padding: 10px 0;    \n  "])))), gt = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["active"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Indicator",
            componentId: "sc-1y2f0a7-3"
        })(["background-color:", ";margin:4px;height:4px;width:120px;cursor:pointer;", ""], (function(e) {
            return e.active ? at.I.GRAY_DARK : at.I.GRAY_LIGHT
        }
        ), z.BC.lessThan("sp")(Tn || (Tn = (0,
        N.Z)(["\n    margin: 2px;\n    height: 2px;  \n    width: 44px;\n  "])))), ht = function(e) {
            var n = e.slideImages
              , t = e.height
              , i = e.pcHeight
              , s = e.duration
              , o = (0,
            W.useState)(0)
              , r = o[0]
              , p = o[1]
              , a = (0,
            W.useState)(!1)
              , l = a[0]
              , c = a[1];
            return (0,
            W.useEffect)((function() {
                var e = setInterval((function() {
                    p((function(e) {
                        return n.length - 1 === e ? 0 : e + 1
                    }
                    ))
                }
                ), s);
                return function() {
                    clearInterval(e)
                }
            }
            ), [s, n.length, l]),
            (0,
            L.jsxs)(L.Fragment, {
                children: [(0,
                L.jsx)(lt, {
                    height: t,
                    pcHeight: i,
                    children: n.map((function(e, n) {
                        return (0,
                        L.jsx)(ct, {
                            current: n === r,
                            children: (0,
                            L.jsx)(re.E, {
                                src: e.srcSp,
                                pcSrc: e.src,
                                alt: e.alt,
                                loading: 0 !== n ? "lazy" : void 0
                            })
                        }, e.src)
                    }
                    ))
                }), (0,
                L.jsx)(dt, {
                    children: n.map((function(e, n) {
                        return (0,
                        L.jsx)(gt, {
                            active: n === r,
                            onClick: function() {
                                return p(n),
                                void c((function(e) {
                                    return !e
                                }
                                ))
                            }
                        }, e.src)
                    }
                    ))
                })]
            })
        }, xt = function(e) {
            var n = e.slideImages
              , t = e.duration;
            return (0,
            L.jsx)(ht, {
                slideImages: n,
                height: 340,
                pcHeight: 1080,
                duration: t
            })
        }, mt = A.ZP.section.withConfig({
            displayName: "styles__TopBannerSection",
            componentId: "sc-1g2yszv-0"
        })(["padding:52px 0;", " ", ""], B.U, z.BC.lessThan("sp")(Nn || (Nn = (0,
        N.Z)(["\n    padding: 0;\n  "])))), ut = A.ZP.div.withConfig({
            displayName: "styles__BannerWrapper",
            componentId: "sc-1g2yszv-1"
        })(["margin:26px 0;text-align:center;", ""], z.BC.lessThan("sp")(An || (An = (0,
        N.Z)(["\n    margin: 0;\n  "])))), ft = A.ZP.img.withConfig({
            displayName: "styles__BannerImage",
            componentId: "sc-1g2yszv-2"
        })(["width:640px;", ""], z.BC.lessThan("sp")(zn || (zn = (0,
        N.Z)(["\n    width: 360px;\n    margin: 8px 0;\n  "])))), yt = function(e) {
            var n = e.bannerImage
              , t = e.bannerAlt
              , i = e.signupUrl
              , s = e.loginUrl;
            return (0,
            L.jsxs)(mt, {
                children: [(0,
                L.jsx)(ut, {
                    children: (0,
                    L.jsx)("a", {
                        href: i,
                        children: (0,
                        L.jsx)(ft, {
                            src: n,
                            alt: t
                        })
                    })
                }), (0,
                L.jsx)(ut, {
                    children: (0,
                    L.jsx)(jn.Q, {
                        href: s,
                        variant: "primary",
                        size: "large",
                        children: "\u30de\u30a4\u30da\u30fc\u30b8\u30fb\u30ed\u30b0\u30a4\u30f3\u306f\u3053\u3061\u3089"
                    })
                })]
            })
        }, wt = A.ZP.section.withConfig({
            displayName: "styles__ServiceSection",
            componentId: "sc-14v1xm9-0"
        })(["", ";padding-bottom:224px;", ""], B.U, z.BC.lessThan("sp")(Bn || (Bn = (0,
        N.Z)(["\n    padding-bottom: 53px;\n  "])))), _t = A.ZP.div.withConfig({
            displayName: "styles__StepContent",
            componentId: "sc-14v1xm9-1"
        })(["width:880px;", ""], z.BC.lessThan("sp")(Rn || (Rn = (0,
        N.Z)(["\n    width: 320px;\n  "])))), bt = A.ZP.p.withConfig({
            displayName: "styles__Note",
            componentId: "sc-14v1xm9-2"
        })(["font-weight:400;font-size:12px;line-height:20px;letter-spacing:1px;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(On || (On = (0,
        N.Z)(["\n    font-size: 10px;\n    line-height: 16px;\n    letter-spacing: 0.5px;\n    color: ", ";\n  "])), Y.I.GRAY_X_DARK)), Ct = A.ZP.img.withConfig({
            displayName: "styles__ServiceImage",
            componentId: "sc-14v1xm9-3"
        })(["margin-bottom:45px;", ""], z.BC.lessThan("sp")(kn || (kn = (0,
        N.Z)(["\n    width: 240px;\n    margin-top: 85px;\n    margin-bottom: 15px;\n  "])))), jt = A.ZP.ol.withConfig({
            displayName: "styles__ServiceStepOl",
            componentId: "sc-1owunww-0"
        })(["list-style:none;li{width:880px;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-items:center;justify-content:space-between;border:1px solid ", ";border-radius:20px;background-color:", ";margin:32px 0;padding:20px 34px;&:after{width:62px;position:absolute;bottom:-20px;left:408px;margin:auto;content:url('/images/homepage/service_step_end_icon.svg');}&:last-child:after{display:none;}&:last-child{margin:10px 0;}", "}"], Y.I.GRAY_LIGHT, Y.I.WHITE, z.BC.lessThan("sp")(Dn || (Dn = (0,
        N.Z)(["\n      width: 320px;\n      margin: 25px 0;\n      padding: 20px 34px;\n      \n      &:after {\n        width: 60px;\n        left: 128px;\n      }\n    "])))), vt = A.ZP.div.withConfig({
            displayName: "styles__StepArea",
            componentId: "sc-1owunww-1"
        })(["width:120px;text-align:center;border-right:1px solid ", ";padding:30px 0;", ""], Y.I.GRAY_LIGHT, z.BC.lessThan("sp")(Sn || (Sn = (0,
        N.Z)(["\n    padding: 20px 0;\n  "])))), It = A.ZP.div.withConfig({
            displayName: "styles__IconArea",
            componentId: "sc-1owunww-2"
        })(["width:96px;padding:33px 0 20px 0;margin:12px 32px;", ""], z.BC.lessThan("sp")(Gn || (Gn = (0,
        N.Z)(["\n    width: 59px;\n  "])))), Zt = A.ZP.div.withConfig({
            displayName: "styles__ContentArea",
            componentId: "sc-1owunww-3"
        })(["width:508px;"]), Pt = A.ZP.p.withConfig({
            displayName: "styles__StepTitle",
            componentId: "sc-1owunww-4"
        })(["font-weight:700;font-size:16px;line-height:16px;text-align:center;letter-spacing:0.1em;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(En || (En = (0,
        N.Z)(["\n    font-size: 11px;\n  "])))), Tt = A.ZP.p.withConfig({
            displayName: "styles__StepNumber",
            componentId: "sc-1owunww-5"
        })(["font-weight:700;font-size:40px;line-height:60px;text-align:center;letter-spacing:0.1em;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Yn || (Yn = (0,
        N.Z)(["\n    font-size: 32px;\n    line-height: 26px;  \n  "])))), Nt = A.ZP.img.withConfig({
            displayName: "styles__IconImage",
            componentId: "sc-1owunww-6"
        })(["width:96px;", ""], z.BC.lessThan("sp")(Mn || (Mn = (0,
        N.Z)(["\n    width: 57px;\n  "])))), At = A.ZP.h4.withConfig({
            displayName: "styles__ContentTitle",
            componentId: "sc-1owunww-7"
        })(["font-weight:700;font-size:18px;line-height:22px;letter-spacing:1.5px;font-feature-settings:'palt' on;color:", ";margin-bottom:20px;", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Kn || (Kn = (0,
        N.Z)(["\n    margin-top: 0;\n    text-align: center;\n    \n    font-size: 16px;\n  "])))), zt = A.ZP.p.withConfig({
            displayName: "styles__ContentDescription",
            componentId: "sc-1owunww-8"
        })(["font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;color:", ";"], Y.I.GRAY_X_DARK), Bt = A.ZP.div.withConfig({
            displayName: "styles__RegistrationArea",
            componentId: "sc-1owunww-9"
        })(["position:absolute;right:10px;bottom:10px;", ""], z.BC.lessThan("sp")(Fn || (Fn = (0,
        N.Z)(["\n    margin: 28px auto 18px auto;\n    position: static;\n  "])))), Rt = function(e) {
            var n = e.steps;
            return (0,
            L.jsx)(jt, {
                children: n.map((function(e) {
                    return (0,
                    L.jsxs)("li", {
                        children: [(0,
                        L.jsxs)(vt, {
                            children: [(0,
                            L.jsx)(Pt, {
                                children: "STEP"
                            }), (0,
                            L.jsx)(Tt, {
                                children: e.number
                            })]
                        }), (0,
                        L.jsx)(It, {
                            children: (0,
                            L.jsx)(Nt, {
                                src: e.icon,
                                alt: "step".concat(e.number)
                            })
                        }), (0,
                        L.jsxs)(Zt, {
                            children: [(0,
                            L.jsx)(At, {
                                children: e.title
                            }), (0,
                            L.jsx)(zt, {
                                children: e.description
                            })]
                        }), e.registration && (0,
                        L.jsx)(Bt, {
                            children: (0,
                            L.jsx)(jn.Q, {
                                variant: "primary",
                                size: "medium",
                                href: e.registration.href,
                                children: e.registration.title
                            })
                        })]
                    }, e.number)
                }
                ))
            })
        }, Ot = function(e) {
            var n = e.steps
              , t = e.note
              , i = e.description;
            return (0,
            L.jsxs)(wt, {
                id: "service",
                children: [(0,
                L.jsx)(Ct, {
                    src: "/images/homepage/title_image_service.svg",
                    alt: ""
                }), (0,
                L.jsx)(Ye, {
                    description: i
                }), (0,
                L.jsxs)(_t, {
                    children: [(0,
                    L.jsx)(Rt, {
                        steps: n
                    }), (0,
                    L.jsx)(bt, {
                        children: t
                    })]
                })]
            })
        }, kt = A.ZP.section.withConfig({
            displayName: "styles__ConceptSection",
            componentId: "sc-1jpj4e5-0"
        })(["padding:140px 0;", " ", ""], B.U, z.BC.lessThan("sp")(Hn || (Hn = (0,
        N.Z)(["\n    padding: 0;\n  "])))), Dt = A.ZP.img.withConfig({
            displayName: "styles__CaptionImage",
            componentId: "sc-1jpj4e5-1"
        })(["display:block;width:375px;margin:64px 0 70px 0;", ""], z.BC.lessThan("sp")(qn || (qn = (0,
        N.Z)(["\n    width: 274px;\n    margin: 42px 0 48px 0;\n  "])))), St = A.ZP.div.withConfig({
            displayName: "styles__ContentArea",
            componentId: "sc-1jpj4e5-2"
        })(["width:1080px;height:412px;display:flex;flex-direction:row;justify-items:center;background-image:url('/images/homepage/concept_background.jpg');background-repeat:no-repeat;background-size:cover;box-shadow:0px 2px 2px rgba(0,0,0,0.05);border-radius:600px;", ""], z.BC.lessThan("sp")(Wn || (Wn = (0,
        N.Z)(["\n    display: block;\n    width: 100%;\n    border-radius: revert;\n    box-shadow: revert;\n  "])))), Gt = A.ZP.div.withConfig({
            displayName: "styles__ContentAreaInner",
            componentId: "sc-1jpj4e5-3"
        })(["width:480px;margin:0 auto;font-weight:400;font-size:16px;line-height:32px;letter-spacing:4px;color:", ";padding:40px 35px;", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Ln || (Ln = (0,
        N.Z)(["\n    max-width: 480px;\n    width: 100%;\n    line-height: 26px;\n    font-size: 14px;\n  "])))), Et = function(e) {
            var n = e.content;
            return (0,
            L.jsxs)(kt, {
                children: [(0,
                L.jsx)(Me, {}), (0,
                L.jsx)(Dt, {
                    src: "/images/homepage/concept_caption.png"
                }), (0,
                L.jsx)(St, {
                    children: (0,
                    L.jsx)(Gt, {
                        children: n
                    })
                })]
            })
        }, Yt = A.ZP.section.withConfig({
            displayName: "styles__UsePrecautionsSection",
            componentId: "sc-s1zpw0-0"
        })(["padding:112px 0 130px 0;", " ", ""], B.U, z.BC.lessThan("sp")(Vn || (Vn = (0,
        N.Z)(["\n    padding: 38px 0;\n  "])))), Mt = A.ZP.h2.withConfig({
            displayName: "styles__Title",
            componentId: "sc-s1zpw0-1"
        })(["width:880px;padding:32px 0;font-weight:700;font-size:24px;line-height:22px;text-align:center;color:", ";border-top:2px solid ", ";border-bottom:2px solid ", ";", ""], Y.I.GREEN_X_DARK, Y.I.GREEN_X_DARK, Y.I.GREEN_X_DARK, z.BC.lessThan("sp")(Xn || (Xn = (0,
        N.Z)(["\n    width: 320px;\n    padding: 16px 0;\n  "])))), Kt = A.ZP.div.withConfig({
            displayName: "styles__NotifyListArea",
            componentId: "sc-s1zpw0-2"
        })(["width:640px;margin-top:29px;", ""], z.BC.lessThan("sp")(Un || (Un = (0,
        N.Z)(["\n    width: 320px;\n    margin-top: revert;\n  "])))), Ft = A.ZP.li.withConfig({
            displayName: "styles__WeekDefinitionsLi",
            componentId: "sc-s1zpw0-3"
        })(["display:flex;gap:8px;"]), Ht = A.ZP.div.withConfig({
            displayName: "styles__DecorationListText",
            componentId: "sc-s1zpw0-4"
        })(["font-weight:700;"]), qt = A.ZP.div.withConfig({
            displayName: "styles__WeekDefinitionsArea",
            componentId: "sc-s1zpw0-5"
        })(["width:420px;margin-left:32px;display:flex;flex-wrap:wrap;gap:8px;", ""], z.BC.lessThan("sp")(Jn || (Jn = (0,
        N.Z)(["\n    width: 174px;\n  "])))), Wt = A.ZP.div.withConfig({
            displayName: "styles__MenuArea",
            componentId: "sc-s1zpw0-6"
        })(["margin:48px 0;", ""], z.BC.lessThan("sp")(Qn || (Qn = (0,
        N.Z)(["\n    margin: 28px 0;\n  "])))), Lt = A.ZP.div.withConfig({
            displayName: "styles__MenuListArea",
            componentId: "sc-s1zpw0-7"
        })(["padding-top:18px;margin-left:2px;"]), Vt = A.ZP.h3.withConfig({
            displayName: "styles__MenuTitle",
            componentId: "sc-s1zpw0-8"
        })(["background:", ";border:1px solid ", ";border-radius:20px;font-style:normal;font-weight:700;font-size:16px;line-height:20px;text-align:center;letter-spacing:0.1em;font-feature-settings:'palt' on;color:", ";padding:8px;"], Y.I.WHITE, Y.I.GREEN_X_DARK, Y.I.GREEN_X_DARK), Xt = A.ZP.div.withConfig({
            displayName: "styles__CancelArea",
            componentId: "sc-s1zpw0-9"
        })(["width:880px;", ""], z.BC.lessThan("sp")($n || ($n = (0,
        N.Z)(["\n    width: 390px;\n  "])))), Ut = A.ZP.p.withConfig({
            displayName: "styles__Note",
            componentId: "sc-s1zpw0-10"
        })(["font-weight:400;font-size:12px;line-height:24px;letter-spacing:0.5px;padding:17px 0 0 0;", ""], z.BC.lessThan("sp")(et || (et = (0,
        N.Z)(["\n    font-size: 10px;\n    line-height: 16px;\n    \n    padding: 13px 32px;\n  "])))), Jt = {
            green: Y.I.ALERT_GREEN
        }, Qt = A.ZP.ul.withConfig({
            shouldForwardProp: function(e) {
                return !["color"].includes(e)
            }
        }).withConfig({
            displayName: "styltes__BaseList",
            componentId: "sc-p3v533-0"
        })(["list-style:none;li{position:relative;padding-left:17px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;margin-bottom:10px;&:before{position:absolute;content:'';width:11px;height:11px;border-radius:50%;background:", ";left:0px;top:6.5px;}", "}"], (function(e) {
            var n = e.color;
            return Jt[n]
        }
        ), z.BC.lessThan("sp")(nt || (nt = (0,
        N.Z)(["\n      font-size: 12px;\n      line-height: 22px;\n  \n      &:before {\n        top: 5.5px;\n      }\n    "])))), $t = function(e) {
            var n = e.color
              , t = void 0 === n ? "green" : n
              , i = e.children;
            return (0,
            L.jsx)(Qt, {
                color: t,
                children: i
            })
        }, ei = A.ZP.div.withConfig({
            displayName: "styles__Box",
            componentId: "sc-zv0jfd-0"
        })(["width:206px;border:1px solid ", ";border-radius:2px;display:flex;justify-content:flex-start;gap:2px;padding:10px 11px;", ""], Y.I.GREEN_X_DARK, z.BC.lessThan("sp")(tt || (tt = (0,
        N.Z)(["\n    width: 174px;\n    padding: 6px 0 6px 9px;\n  "])))), ni = (0,
        A.iv)(["font-weight:500;font-size:14px;line-height:16px;letter-spacing:0.5px;", ""], z.BC.lessThan("sp")(it || (it = (0,
        N.Z)(["\n      font-size: 12px;\n  "])))), ti = A.ZP.p.withConfig({
            displayName: "styles__Week",
            componentId: "sc-zv0jfd-1"
        })(["", ";color:", ";&:after{content:'\uff1a';}"], ni, Y.I.GREEN_X_DARK), ii = A.ZP.p.withConfig({
            displayName: "styles__Definition",
            componentId: "sc-zv0jfd-2"
        })(["", ";color:", ";"], ni, Y.I.GRAY_DARK), si = function(e) {
            var n = e.week
              , t = e.definition;
            return (0,
            L.jsxs)(ei, {
                children: [(0,
                L.jsx)(ti, {
                    children: n
                }), (0,
                L.jsx)(ii, {
                    children: t
                })]
            })
        };
        function oi(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function ri(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? oi(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : oi(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var pi, ai, li, ci, di, gi, hi, xi, mi, ui, fi, yi, wi, _i, bi, Ci, ji, vi, Ii, Zi, Pi = function(e) {
            var n = e.menuItems;
            return (0,
            L.jsxs)(Yt, {
                children: [(0,
                L.jsx)(Mt, {
                    children: "\u3054\u5229\u7528\u306b\u95a2\u3059\u308b\u6ce8\u610f\u4e8b\u9805\u7b49"
                }), (0,
                L.jsx)(Kt, {
                    children: n.map((function(e) {
                        var n = e.title
                          , t = e.messages;
                        return (0,
                        L.jsxs)(Wt, {
                            children: [(0,
                            L.jsx)(Vt, {
                                children: n
                            }), (0,
                            L.jsx)(Lt, {
                                children: (0,
                                L.jsx)($t, {
                                    children: t.map((function(e) {
                                        var n = e.text
                                          , t = e.weekDefinitions;
                                        return t ? (0,
                                        L.jsxs)(Ft, {
                                            children: [(0,
                                            L.jsx)(Ht, {
                                                children: n
                                            }), (0,
                                            L.jsx)(qt, {
                                                children: t.map((function(e) {
                                                    return (0,
                                                    W.createElement)(si, ri(ri({}, e), {}, {
                                                        key: e.week
                                                    }))
                                                }
                                                ))
                                            })]
                                        }, n) : (0,
                                        L.jsx)("li", {
                                            children: n
                                        }, n)
                                    }
                                    ))
                                })
                            })]
                        }, n)
                    }
                    ))
                }), (0,
                L.jsxs)(Xt, {
                    children: [(0,
                    L.jsx)(re.E, {
                        src: "/images/homepage/cancel_rule_sp.svg",
                        pcSrc: "/images/homepage/cancel_rule.png",
                        alt: "\u30ad\u30e3\u30f3\u30bb\u30eb\u898f\u5b9a"
                    }), (0,
                    L.jsx)(Ut, {
                        children: "\u203b\u30ad\u30e3\u30f3\u30bb\u30eb\u6599\u304c\u767a\u751f\u3059\u308b\u671f\u9593\u306b\u632f\u66ff\u306e\u304a\u7533\u3057\u51fa\u3092\u3044\u305f\u3060\u3044\u305f\u5834\u5408\u3001\u540c\u69d8\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u6599\u304c\u767a\u751f\u3044\u305f\u3057\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044"
                    })]
                })]
            })
        }, Ti = A.ZP.section.withConfig({
            displayName: "styles__AreaSection",
            componentId: "sc-q7vsxf-0"
        })(["padding:69px 0 140px 0;", " ", ""], B.U, z.BC.lessThan("sp")(pi || (pi = (0,
        N.Z)(["\n    padding: 25px 0 51px 0;\n  "])))), Ni = A.ZP.img.withConfig({
            displayName: "styles__AreaImage",
            componentId: "sc-q7vsxf-1"
        })(["width:653px;", ""], z.BC.lessThan("sp")(ai || (ai = (0,
        N.Z)(["\n    width: 336px;\n  "])))), Ai = A.ZP.div.withConfig({
            displayName: "styles__Caption",
            componentId: "sc-q7vsxf-2"
        })(["width:580px;margin-top:23px;font-weight:400;font-size:14px;line-height:32px;text-align:center;letter-spacing:1.5px;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(li || (li = (0,
        N.Z)(["\n    width: 390px;\n    padding: 39px 35px 37px 35px;\n    \n    font-weight: 400;\n    font-size: 14px;\n    line-height: 26px;\n    text-align: left;\n    letter-spacing: 1px;\n  "])))), zi = A.ZP.div.withConfig({
            displayName: "styles__AreaListWrapper",
            componentId: "sc-q7vsxf-3"
        })(["max-width:900px;margin:80px auto 0 auto;", ""], z.BC.lessThan("sp")(ci || (ci = (0,
        N.Z)(["\n    max-width: 320px;\n    margin: 31px auto 0 auto;\n  "])))), Bi = A.ZP.ul.withConfig({
            displayName: "styles__AreaUl",
            componentId: "sc-6k0b1k-0"
        })(["list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;justify-content:center;gap:20px;li{width:280px;padding:16px 3px;border:1px solid ", ";border-radius:16px;color:", ";font-weight:500;font-size:16px;line-height:20px;letter-spacing:2px;text-align:center;background-color:", ";}", ""], Y.I.GREEN_X_DARK, Y.I.GREEN_X_DARK, Y.I.WHITE, z.BC.lessThan("sp")(di || (di = (0,
        N.Z)(["\n    gap: 8px;\n  \n    li {\n      width: 156px;\n      padding: 10px 3px;\n      \n      font-size: 14px;\n    }\n  "])))), Ri = function(e) {
            var n = e.names;
            return (0,
            L.jsx)(Bi, {
                children: n.map((function(e) {
                    return (0,
                    L.jsx)("li", {
                        children: e
                    }, e)
                }
                ))
            })
        }, Oi = function(e) {
            var n = e.names;
            return (0,
            L.jsxs)(Ti, {
                id: "area",
                children: [(0,
                L.jsx)(Ni, {
                    src: "/images/homepage/title_image_area.png",
                    alt: "\u30a8\u30ea\u30a2",
                    loading: "lazy"
                }), (0,
                L.jsx)(He, {}), (0,
                L.jsx)(Ai, {
                    children: "\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u30a8\u30ea\u30a2\u306f\u9806\u6b21\u62e1\u5927\u4e2d\u3067\u3059\u3002\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u30a8\u30ea\u30a2\u5916\u306b\u304a\u4f4f\u307e\u3044\u306e\u5834\u5408\u3001\u4e8b\u524d\u767b\u9332\u8005\u304c\u591a\u304f\u96c6\u307e\u3063\u305f\u30a8\u30ea\u30a2\u304b\u3089\u30b5\u30fc\u30d3\u30b9\u3092\u30b9\u30bf\u30fc\u30c8\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u306e\u3067\u307e\u305a\u306f\u300c\u65b0\u898f\u767b\u9332\u300d\u30d5\u30a9\u30fc\u30e0\u3088\u308a\u3054\u767b\u9332\u304f\u3060\u3055\u3044\uff01"
                }), (0,
                L.jsx)(zi, {
                    children: (0,
                    L.jsx)(Ri, {
                        names: n
                    })
                })]
            })
        }, ki = A.ZP.section.withConfig({
            displayName: "styles__CleaningSection",
            componentId: "sc-ebl11f-0"
        })(["padding:137px 0;", " ", ""], B.U, z.BC.lessThan("sp")(gi || (gi = (0,
        N.Z)(["\n    padding: 27px 0;\n  "])))), Di = A.ZP.div.withConfig({
            displayName: "styles__Caption",
            componentId: "sc-ebl11f-1"
        })(["margin:34px 0 72px 0;text-align:center;width:520px;font-weight:400;font-size:14px;line-height:26px;letter-spacing:0.5px;color:", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(hi || (hi = (0,
        N.Z)(["\n    width: 390px;\n    text-align: left;\n    padding: 0 35px;\n  "])))), Si = A.ZP.span.withConfig({
            displayName: "styles__SpanGreen",
            componentId: "sc-ebl11f-2"
        })(["font-weight:700;font-size:14px;line-height:32px;letter-spacing:2px;color:", ";"], Y.I.ALERT_GREEN), Gi = A.ZP.span.withConfig({
            displayName: "styles__SpanGray",
            componentId: "sc-ebl11f-3"
        })(["font-weight:700;font-size:14px;line-height:32px;letter-spacing:2px;"]), Ei = A.ZP.div.withConfig({
            displayName: "styles__IconImage",
            componentId: "sc-ebl11f-4"
        })(["margin:28px 0;width:57px;height:57px;background-image:url('/images/homepage/cleaning_plus_icon.png');background-position:center;background-size:contain;"]), Yi = A.ZP.div.withConfig({
            displayName: "styles__CleaningToolSubsArea",
            componentId: "sc-ebl11f-5"
        })(["width:776px;padding-bottom:84px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:54px 0;", ""], z.BC.lessThan("sp")(xi || (xi = (0,
        N.Z)(["\n    width: 390px;\n    padding-bottom: 61px;\n\n    gap: 35px 0;\n    justify-content: center;\n  "])))), Mi = A.ZP.div.withConfig({
            displayName: "styles__CleaningNoticeMessageArea",
            componentId: "sc-ebl11f-6"
        })(["width:864px;", ""], z.BC.lessThan("sp")(mi || (mi = (0,
        N.Z)(["\n    width: 100%;\n  "])))), Ki = {
            normal: {
                pc: {
                    containerGap: "32px",
                    imageAreaWidth: "128px",
                    imageCircleWidth: "128px",
                    imageCircleheight: "128px",
                    imageCircleMarginBottom: "12px",
                    imageWidth: "72px",
                    imageHeight: "72px",
                    captionFontSize: "14px",
                    captionMarginBottom: "9px",
                    noteFrontSize: "12px"
                },
                sp: {
                    containerGap: "16px",
                    imageAreaWidth: "96px",
                    imageCircleWidth: "96px",
                    imageCircleheight: "96px",
                    imageCircleMarginBottom: "2px",
                    imageWidth: "64px",
                    imageHeight: "64px",
                    captionFontSize: "12px",
                    captionMarginBottom: "1px",
                    noteFrontSize: "10px"
                }
            },
            small: {
                pc: {
                    containerGap: "16px",
                    imageAreaWidth: "112px",
                    imageCircleWidth: "112px",
                    imageCircleheight: "112px",
                    imageCircleMarginBottom: "8px",
                    imageWidth: "80px",
                    imageHeight: "80px",
                    captionFontSize: "14px",
                    captionMarginBottom: "5px",
                    noteFrontSize: "12px"
                },
                sp: {
                    containerGap: "16px",
                    imageAreaWidth: "96px",
                    imageCircleWidth: "96px",
                    imageCircleheight: "96px",
                    imageCircleMarginBottom: "2px",
                    imageWidth: "64px",
                    imageHeight: "64px",
                    captionFontSize: "12px",
                    captionMarginBottom: "1px",
                    noteFrontSize: "10px"
                }
            }
        }, Fi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CleaningToolsContainer",
            componentId: "sc-1td6ams-0"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:", ";"], (function(e) {
            return "small" === e.size ? "24px" : "27px"
        }
        )), Hi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CleaningArea",
            componentId: "sc-1td6ams-1"
        })(["display:flex;gap:", ";flex-direction:row;justify-items:center;align-items:flex-start;", ""], (function(e) {
            return Ki[e.size].pc.containerGap
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(ui || (ui = (0,
            N.Z)(["\n    gap: ", ";\n  "])), Ki[n].sp.containerGap)
        }
        )), qi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CleaningToolsImageArea",
            componentId: "sc-1td6ams-2"
        })(["width:", ";", ""], (function(e) {
            return Ki[e.size].pc.imageAreaWidth
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(fi || (fi = (0,
            N.Z)(["\n    width: ", ";\n  "])), Ki[n].sp.imageAreaWidth)
        }
        )), Wi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CleaningToolsImageCircle",
            componentId: "sc-1td6ams-3"
        })(["border-radius:50%;background:", ";display:flex;justify-content:center;align-items:center;width:", ";height:", ";margin-bottom:", ";", ""], Y.I.WHITE, (function(e) {
            return Ki[e.size].pc.imageCircleWidth
        }
        ), (function(e) {
            return Ki[e.size].pc.imageCircleheight
        }
        ), (function(e) {
            return Ki[e.size].pc.imageCircleMarginBottom
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(yi || (yi = (0,
            N.Z)(["\n    width: ", ";\n    height: ", ";\n    margin-bottom: ", ";\n  "])), Ki[n].sp.imageCircleWidth, Ki[n].sp.imageCircleheight, Ki[n].sp.imageCircleMarginBottom)
        }
        )), Li = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__CleaningToolsImageSize",
            componentId: "sc-1td6ams-4"
        })(["width:", ";height:", ";", ""], (function(e) {
            return Ki[e.size].pc.imageWidth
        }
        ), (function(e) {
            return Ki[e.size].pc.imageHeight
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(wi || (wi = (0,
            N.Z)(["\n    width: ", ";\n    height: ", ";\n  "])), Ki[n].sp.imageWidth, Ki[n].sp.imageHeight)
        }
        )), Vi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Caption",
            componentId: "sc-1td6ams-5"
        })(["text-align:center;font-style:normal;font-weight:500;font-size:", ";line-height:22px;color:", ";letter-spacing:1px;font-feature-settings:'palt' on;padding:1.5px 0px;margin-bottom:", ";", ""], (function(e) {
            return Ki[e.size].pc.captionFontSize
        }
        ), Y.I.GRAY_DARK, (function(e) {
            return Ki[e.size].pc.captionMarginBottom
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(_i || (_i = (0,
            N.Z)(["\n    font-size: ", ";\n    margin-bottom: ", ";\n  "])), Ki[n].sp.captionFontSize, Ki[n].sp.captionMarginBottom)
        }
        )), Xi = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Note",
            componentId: "sc-1td6ams-6"
        })(["text-align:center;font-style:normal;font-weight:300;font-size:", ";line-height:12px;color:", ";", ""], (function(e) {
            return Ki[e.size].pc.noteFrontSize
        }
        ), Y.I.GRAY_DARK, (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(bi || (bi = (0,
            N.Z)(["\n    font-size: ", ";\n  "])), Ki[n].sp.noteFrontSize)
        }
        )), Ui = {
            contained: {
                background: Y.I.GREEN_X_DARK,
                fontColor: Y.I.WHITE
            },
            outlined: {
                background: Y.I.WHITE,
                fontColor: Y.I.GREEN_X_DARK
            }
        }, Ji = {
            small: {
                pc: {
                    width: "320px",
                    height: "40px",
                    padding: "12px 0",
                    fontWeight: "700",
                    fontSize: "16px",
                    letterSpacing: "0.1em",
                    borderRadius: "20px"
                },
                sp: {
                    width: "240px",
                    height: "40px",
                    padding: "12px 0",
                    fontWeight: "700",
                    fontSize: "16px",
                    letterSpacing: "0.1em",
                    borderRadius: "20px"
                }
            },
            medium: {
                pc: {
                    width: "640px",
                    height: "40px",
                    padding: "12px 0",
                    fontWeight: "700",
                    fontSize: "16px",
                    letterSpacing: "0.1em",
                    borderRadius: "20px"
                },
                sp: {
                    width: "320px",
                    height: "40px",
                    padding: "12px 0",
                    fontWeight: "700",
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    borderRadius: "20px"
                }
            }
        }, Qi = A.ZP.h3.withConfig({
            shouldForwardProp: function(e) {
                return !["variant", "size"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Title3Style",
            componentId: "sc-bdzks5-0"
        })(["border:1px solid ", ";border-radius:20px;text-align:center;white-space:nowrap;color:", ";background:", ";width:", ";height:", ";padding:", ";font-size:", ";font-weight:", ";letter-spacing:", ";border-radius:", ";", ""], Y.I.GREEN_X_DARK, (function(e) {
            return Ui[e.variant].fontColor
        }
        ), (function(e) {
            return Ui[e.variant].background
        }
        ), (function(e) {
            return Ji[e.size].pc.width
        }
        ), (function(e) {
            return Ji[e.size].pc.height
        }
        ), (function(e) {
            return Ji[e.size].pc.padding
        }
        ), (function(e) {
            return Ji[e.size].pc.fontSize
        }
        ), (function(e) {
            return Ji[e.size].pc.fontWeight
        }
        ), (function(e) {
            return Ji[e.size].pc.letterSpacing
        }
        ), (function(e) {
            return Ji[e.size].pc.borderRadius
        }
        ), (function(e) {
            var n = e.size;
            return z.BC.lessThan("sp")(Ci || (Ci = (0,
            N.Z)(["\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    letter-spacing: ", ";\n    border-radius: ", ";\n  "])), Ji[n].sp.width, Ji[n].sp.height, Ji[n].sp.padding, Ji[n].sp.fontSize, Ji[n].sp.fontWeight, Ji[n].sp.letterSpacing, Ji[n].sp.borderRadius)
        }
        )), $i = function(e) {
            var n = e.variant
              , t = void 0 === n ? "contained" : n
              , i = e.size
              , s = void 0 === i ? "small" : i
              , o = e.children;
            return (0,
            L.jsx)(Qi, {
                variant: t,
                size: s,
                children: o
            })
        }, es = function(e) {
            var n = e.size
              , t = void 0 === n ? "normal" : n
              , i = e.tools
              , s = e.title;
            return (0,
            L.jsxs)(Fi, {
                size: t,
                children: [(0,
                L.jsx)($i, {
                    variant: s.fill ? "contained" : "outlined",
                    children: s.title
                }), (0,
                L.jsx)(Hi, {
                    size: t,
                    children: i.map((function(e) {
                        return (0,
                        L.jsxs)(qi, {
                            size: t,
                            children: [(0,
                            L.jsx)(Wi, {
                                size: t,
                                children: (0,
                                L.jsx)(Li, {
                                    size: t,
                                    children: (0,
                                    L.jsx)(re.E, {
                                        src: e.src,
                                        alt: e.caption,
                                        loading: "lazy"
                                    })
                                })
                            }), (0,
                            L.jsx)(Vi, {
                                size: t,
                                children: e.caption
                            }), e.note && (0,
                            L.jsx)(Xi, {
                                size: t,
                                children: e.note
                            })]
                        }, e.src)
                    }
                    ))
                })]
            })
        }, ns = A.ZP.div.withConfig({
            displayName: "styles__HorizontalLine",
            componentId: "sc-fvm5hh-0"
        })(["width:100%;height:4px;background-image:url('/images/homepage/cleaning_notice_message_line.png');"]), ts = A.ZP.div.withConfig({
            displayName: "styles__NoticeMessageInnerContainer",
            componentId: "sc-fvm5hh-1"
        })(["width:791px;margin:0 auto;padding:38px 0 38px 0;", ""], z.BC.lessThan("sp")(ji || (ji = (0,
        N.Z)(["\n    width: 320px;\n    padding: 27px 0 27px 0;\n  "])))), is = A.ZP.div.withConfig({
            displayName: "styles__Title",
            componentId: "sc-fvm5hh-2"
        })(["text-align:center;font-style:normal;font-weight:700;font-size:16px;line-height:20px;color:", ";padding:4px 0px;background:", ";border-radius:20px;width:320px;margin:0 auto;margin-bottom:23px;", ""], Y.I.WHITE, Y.I.GREEN_X_DARK, z.BC.lessThan("sp")(vi || (vi = (0,
        N.Z)(["\n    margin-bottom: 17px;\n  "])))), ss = A.ZP.li.withConfig({
            displayName: "styles__Message",
            componentId: "sc-fvm5hh-3"
        })(["position:relative;padding-left:17px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;margin-bottom:8px;&:before{position:absolute;content:'';width:11px;height:11px;border-radius:50%;background:#3c964a;left:0px;top:6.5px;}", ""], z.BC.lessThan("sp")(Ii || (Ii = (0,
        N.Z)(["\n    font-size: 12px;\n    line-height: 22px;\n\n    &:before {\n      top: 5.5px;\n    }\n  "])))), os = A.ZP.div.withConfig({
            displayName: "styles__Caution",
            componentId: "sc-fvm5hh-4"
        })(["border:1px solid ", ";border-radius:8px;padding:14px 16px;margin:20px 0px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;color:", ";", ""], Y.I.ALERT_GREEN, Y.I.ALERT_GREEN, z.BC.lessThan("sp")(Zi || (Zi = (0,
        N.Z)(["\n    font-size: 12px;\n    line-height: 21px;\n    padding: 15px 16px 17px 17px;\n    margin-top: 15px;\n    margin-bottom: 22px;\n  "])))), rs = function(e) {
            var n = e.noticeMessages;
            return (0,
            L.jsxs)(L.Fragment, {
                children: [(0,
                L.jsx)(ns, {}), (0,
                L.jsx)(ts, {
                    children: (0,
                    L.jsxs)("div", {
                        children: [(0,
                        L.jsx)(is, {
                            children: "\u3054\u6ce8\u610f"
                        }), (0,
                        L.jsx)($t, {
                            children: n.map((function(e) {
                                return (0,
                                L.jsxs)(ss, {
                                    children: [e.message, e.caution && (0,
                                    L.jsx)(os, {
                                        children: e.caution
                                    })]
                                }, e.message)
                            }
                            ))
                        })]
                    })
                }), (0,
                L.jsx)(ns, {})]
            })
        };
        function ps(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function as(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? ps(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ps(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var ls, cs, ds, gs, hs, xs, ms, us, fs, ys = function(e) {
            var n = e.cleaningToolMain
              , t = e.cleaningToolSubs
              , i = e.noticeMessages;
            return (0,
            L.jsxs)(ki, {
                id: "cleaning",
                children: [(0,
                L.jsx)(re.E, {
                    src: "/images/homepage/cleaning_head_image_sp.png",
                    pcSrc: "/images/homepage/cleaning_head_image.png",
                    alt: "\u3054\u7528\u610f\u3044\u305f\u3060\u304d\u305f\u3044\u3082\u306e"
                }), (0,
                L.jsxs)(Di, {
                    children: ["\u304a\u6383\u9664\u306b\u306f\u3001", (0,
                    L.jsx)(Si, {
                        children: "\u304a\u5ba2\u69d8\u306e\u3054\u81ea\u5b85\u306b\u3042\u308b\u6383\u9664\u7528\u5177"
                    }), (0,
                    L.jsx)(Gi, {
                        children: "\u3092\u5229\u7528\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
                    }), "\u5fc5\u8981\u306a\u6383\u9664\u7528\u5177\u30fb\u6d17\u5264\u304c\u63c3\u3063\u3066\u3044\u308b\u3068\u3001\u3088\u308a\u52b9\u7387\u3088\u304f\u304a\u6383\u9664\u3092\u9032\u3081\u3089\u308c\u307e\u3059\u3002 \u305c\u3072\u3001\u4e0b\u8a18\u306b\u3042\u3052\u305f\u6383\u9664\u7528\u5177\u30fb\u6d17\u5264\u3092\u3054\u7528\u610f\u304f\u3060\u3055\u3044\u3002"]
                }), (0,
                L.jsx)(es, as({}, n)), (0,
                L.jsx)(Ei, {}), (0,
                L.jsx)(Yi, {
                    children: t.map((function(e) {
                        return (0,
                        W.createElement)(es, as(as({}, e), {}, {
                            key: e.title.title
                        }))
                    }
                    ))
                }), (0,
                L.jsx)(Mi, {
                    children: (0,
                    L.jsx)(rs, {
                        noticeMessages: i
                    })
                })]
            })
        }, ws = t(7186), _s = A.ZP.img.withConfig({
            displayName: "styles__TopImage",
            componentId: "sc-1luxzux-0"
        })(["display:block;width:423px;", ""], z.BC.lessThan("sp")(ls || (ls = (0,
        N.Z)(["\n    width: 332px;\n  "])))), bs = A.ZP.section.withConfig({
            displayName: "styles__KeyServiceSection",
            componentId: "sc-1luxzux-1"
        })(["padding:60px 0 72px 0;", ""], B.U), Cs = A.ZP.div.withConfig({
            displayName: "styles__KeyServiceBoxArea",
            componentId: "sc-1luxzux-2"
        })(["width:656px;display:flex;flex-wrap:wrap;justify-content:center;gap:16px;", ""], z.BC.lessThan("sp")(cs || (cs = (0,
        N.Z)(["\n    width: 320px;\n  "])))), js = A.ZP.div.withConfig({
            displayName: "styles__TopTextArea",
            componentId: "sc-1luxzux-3"
        })(["margin:23px 0 28px 0;text-align:center;p{font-weight:500;color:", ";}", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(ds || (ds = (0,
        N.Z)(["\n    p {\n      font-size: 12px;\n      line-height: 16px;    \n    }\n  "])))), vs = A.ZP.div.withConfig({
            displayName: "styles__TitleArea",
            componentId: "sc-1luxzux-4"
        })(["margin:19px 0 28px 0;display:flex;justify-content:center;align-items:baseline;h3{font-weight:700;font-size:24px;line-height:16px;letter-spacing:2px;font-feature-settings:'palt' on;color:", ";}p{font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.5px;font-feature-settings:'palt' on;color:", ";}", ""], Y.I.GREEN_X_DARK, Y.I.GRAY_DARK, z.BC.lessThan("sp")(gs || (gs = (0,
        N.Z)(["\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n  "])))), Is = A.ZP.span.withConfig({
            displayName: "styles__SpanGreen",
            componentId: "sc-1luxzux-5"
        })(["color:", ";"], Y.I.GREEN_X_DARK), Zs = A.ZP.p.withConfig({
            displayName: "styles__MarkerText",
            componentId: "sc-1luxzux-6"
        })(["font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;color:", ";", ""], Y.I.GRAY_X_DARK, z.BC.lessThan("sp")(hs || (hs = (0,
        N.Z)(["\n    line-height: 20px;\n  "])))), Ps = A.ZP.span.withConfig({
            displayName: "styles__Marker",
            componentId: "sc-1luxzux-7"
        })(["font-weight:700;font-size:14px;line-height:24px;background:linear-gradient(transparent 0%,#ffea00 0%);", ""], z.BC.lessThan("sp")(xs || (xs = (0,
        N.Z)(["\n    display: block;\n    letter-spacing: 0.5px;\n  "])))), Ts = A.ZP.div.withConfig({
            displayName: "styles__BottomTextArea",
            componentId: "sc-1luxzux-8"
        })(["width:656px;margin-top:16px;font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;color:", ";", ""], Y.I.GRAY_X_DARK, z.BC.lessThan("sp")(ms || (ms = (0,
        N.Z)(["\n    width: 320px;\n  "])))), Ns = A.ZP.div.withConfig({
            displayName: "styles__Note",
            componentId: "sc-1luxzux-9"
        })(["font-weight:400;font-size:12px;line-height:12px;letter-spacing:0.5px;color:", ";p{margin:10px 0;}", ""], Y.I.GRAY_X_DARK, z.BC.lessThan("sp")(us || (us = (0,
        N.Z)(["\n    font-weight: 400;\n    font-size: 10px;\n    line-height: 16px;\n    \n    p {\n      margin: 2px 0;\n    }\n  "])))), As = A.ZP.div.withConfig({
            shouldForwardProp: function(e) {
                return !["color"].includes(e)
            }
        }).withConfig({
            displayName: "styles__Box",
            componentId: "sc-hgpdcv-0"
        })(["width:320px;padding:4px;background:", ";border-radius:8px;h4,h5,h6{font-weight:500;font-size:14px;line-height:14px;letter-spacing:0.5px;color:", ";text-align:center;padding:14px;}"], (function(e) {
            return "green" === e.color ? Y.I.GREEN_LIGHT : Y.I.YELLOW_X_LIGHT
        }
        ), Y.I.GRAY_DARK), zs = A.ZP.div.withConfig({
            displayName: "styles__Description",
            componentId: "sc-hgpdcv-1"
        })(["font-weight:400;font-size:14px;line-height:24px;letter-spacing:0.5px;color:", ";background:", ";border-radius:6px;padding:19px;", ""], Y.I.GRAY_X_DARK, Y.I.WHITE, z.BC.lessThan("sp")(fs || (fs = (0,
        N.Z)(["\n    padding: 15px;\n  "])))), Bs = A.ZP.span.withConfig({
            shouldForwardProp: function(e) {
                return !["color"].includes(e)
            }
        }).withConfig({
            displayName: "styles__HighlightText",
            componentId: "sc-hgpdcv-2"
        })(["font-weight:700;color ", ";"], (function(e) {
            return "green" === e.color ? Y.I.GREEN_X_DARK : Y.I.YELLOW_X_DARK
        }
        )), Rs = function(e, n) {
            var t = e.match(/^(.*)__(.*)__(.*)/);
            return null === t || t.length < 3 ? e : (0,
            L.jsxs)(L.Fragment, {
                children: [t[1], (0,
                L.jsx)(Bs, {
                    color: n,
                    children: t[2]
                }), t[3]]
            })
        }, Os = function(e) {
            var n = e.title
              , t = e.description
              , i = e.color
              , s = void 0 === i ? "green" : i;
            return (0,
            L.jsxs)(As, {
                color: s,
                children: [(0,
                L.jsx)("h4", {
                    children: Rs(n, s)
                }), (0,
                L.jsx)(zs, {
                    children: t
                })]
            })
        };
        function ks(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        var Ds, Ss, Gs, Es, Ys, Ms, Ks, Fs, Hs, qs, Ws, Ls, Vs, Xs, Us, Js, Qs, $s, eo, no, to, io, so, oo, ro, po, ao, lo, co, go, ho, xo, mo, uo, fo, yo = function(e) {
            var n = e.keyBoxes;
            return (0,
            L.jsxs)(bs, {
                children: [(0,
                L.jsx)(_s, {
                    src: "/images/homepage/keyservice_image.png",
                    alt: "\u9375\u4fdd\u7ba1\u30b5\u30fc\u30d3\u30b9",
                    loading: "lazy"
                }), (0,
                L.jsxs)(js, {
                    children: [(0,
                    L.jsxs)("p", {
                        children: [(0,
                        L.jsx)(Is, {
                            children: "\u3054\u4e0d\u5728\u6642"
                        }), "\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u2026"]
                    }), (0,
                    L.jsxs)(vs, {
                        children: [(0,
                        L.jsx)("h3", {
                            children: "\u300c\u9375\u304a\u9810\u304b\u308a\u30b5\u30fc\u30d3\u30b9\u300d"
                        }), (0,
                        L.jsx)("p", {
                            children: "\u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"
                        })]
                    }), (0,
                    L.jsxs)(Zs, {
                        children: ["\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u3001", (0,
                        L.jsx)(Ps, {
                            children: "\u4e8b\u524d\u306b\u4e8b\u52d9\u5c40\u5b9b\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"
                        })]
                    })]
                }), (0,
                L.jsx)(Cs, {
                    children: n.map((function(e) {
                        return (0,
                        L.jsx)(Os, function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {};
                                n % 2 ? ks(Object(t), !0).forEach((function(n) {
                                    (0,
                                    I.Z)(e, n, t[n])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ks(Object(t)).forEach((function(n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                }
                                ))
                            }
                            return e
                        }({}, e), e.title)
                    }
                    ))
                }), (0,
                L.jsxs)(Ts, {
                    children: [(0,
                    L.jsx)("p", {
                        children: "\u304a\u9810\u304b\u308a\u3057\u305f\u9375\u306b\u306f\u300c\u9375\u9810\u304b\u308a\u8a3c\u300d\u3092\u767a\u884c\u3057\u3001\u3054\u81ea\u5b85\u307e\u3067\u304a\u9001\u308a\u3044\u305f\u3057\u307e\u3059\u3002"
                    }), (0,
                    L.jsxs)(Ns, {
                        children: [(0,
                        L.jsx)("p", {
                            children: "\u203b\u9375\u304a\u9810\u304b\u308a\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u5b9a\u671f\u5951\u7d04\u306e\u304a\u5ba2\u69d8\u306e\u307f\u3092\u5bfe\u8c61\u3068\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u3068\u306a\u308a\u307e\u3059"
                        }), (0,
                        L.jsx)("p", {
                            children: "\u203b\u8a73\u7d30\u306b\u3064\u304d\u307e\u3057\u3066\u306f\u3001\u4e8b\u52d9\u5c40\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044"
                        })]
                    })]
                })]
            })
        }, wo = t(9372), _o = t(561), bo = A.ZP.section.withConfig({
            displayName: "styles__NewsSection",
            componentId: "sc-11khbre-0"
        })(["padding:152px 0 80px 0;", ";", ""], B.U, z.BC.lessThan("sp")(Ds || (Ds = (0,
        N.Z)(["\n    width: 100%;\n    padding: 40px 0 32px 0;\n  "])))), Co = A.ZP.h2.withConfig({
            displayName: "styles__Title",
            componentId: "sc-11khbre-1"
        })(["font-weight:600;font-size:24px;line-height:24px;width:880px;padding-bottom:40px;", ""], z.BC.lessThan("sp")(Ss || (Ss = (0,
        N.Z)(["\n    width: 390px;\n\n    padding-left: 38px;\n    padding-bottom: 23px;\n  "])))), jo = A.ZP.img.withConfig({
            displayName: "styles__TitleImage",
            componentId: "sc-11khbre-2"
        })(["width:113px;margin:0;", ""], z.BC.lessThan("sp")(Gs || (Gs = (0,
        N.Z)(["\n    width: 73px;\n  "])))), vo = A.ZP.ol.withConfig({
            displayName: "styles__NewsListOl",
            componentId: "sc-1dv7o9z-0"
        })(["width:880px;", ""], z.BC.lessThan("sp")(Es || (Es = (0,
        N.Z)(["\n    width: 390px;\n  "])))), Io = A.ZP.li.withConfig({
            displayName: "styles__NewsItem",
            componentId: "sc-1dv7o9z-1"
        })(["display:flex;align-items:center;justify-items:center;gap:11px;border-top:1px solid ", ";padding:16px 0;font-weight:400;font-size:15px;line-height:15px;letter-spacing:1px;color:", ";&:last-child{border-bottom:1px solid ", ";}", ""], Y.I.GRAY_X_LIGHT, Y.I.GRAY_DARK, Y.I.GRAY_X_LIGHT, z.BC.lessThan("sp")(Ys || (Ys = (0,
        N.Z)(["\n    gap: 6px;\n    flex-wrap: wrap;\n    font-size: 11px;\n    letter-spacing: 0.5px;\n    padding: 18px 35px;\n  "])))), Zo = A.ZP.div.withConfig({
            displayName: "styles__Date",
            componentId: "sc-1dv7o9z-2"
        })(["color:", ";white-space:nowrap;"], Y.I.GRAY_DARK), Po = A.ZP.div.withConfig({
            displayName: "styles__Category",
            componentId: "sc-1dv7o9z-3"
        })(["color:", ";border:1px solid ", ";white-space:nowrap;font-size:12px;padding:2px 13px;", ""], Y.I.NEWS_RED, Y.I.NEWS_RED, z.BC.lessThan("sp")(Ms || (Ms = (0,
        N.Z)(["\n    font-size: 10px;\n    line-height: 16px;\n    \n    padding: 2px 8px;\n  "])))), To = A.ZP.h4.withConfig({
            displayName: "styles__Title",
            componentId: "sc-1dv7o9z-4"
        })(["display:flex;align-items:center;margin-top:0;font-weight:400;font-size:15px;line-height:15px;& > a{color:", ";text-decoration:none;}", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Ks || (Ks = (0,
        N.Z)(["\n    font-size: 11px;\n    line-height: 20px;  \n  "])))), No = t(2466), Ao = function(e) {
            var n = e.news;
            return (0,
            L.jsx)(vo, {
                children: n.map((function(e) {
                    var n = e.id
                      , t = e.title
                      , i = e.date
                      , s = e.category;
                    return (0,
                    L.jsxs)(Io, {
                        children: [(0,
                        L.jsx)(Zo, {
                            children: (0,
                            No.B)(i).format("YYYY.MM.DD")
                        }), (0,
                        L.jsx)(Po, {
                            children: s
                        }), (0,
                        L.jsx)(To, {
                            children: (0,
                            L.jsx)("a", {
                                href: "/news/".concat(n),
                                children: t
                            })
                        })]
                    }, t)
                }
                ))
            })
        }, zo = function(e) {
            var n = e.news;
            return (0,
            L.jsxs)(bo, {
                id: "news",
                children: [(0,
                L.jsx)(Co, {
                    children: (0,
                    L.jsx)(jo, {
                        src: "/images/homepage/section_title_news.png"
                    })
                }), (0,
                L.jsx)(Ao, {
                    news: n
                })]
            })
        }, Bo = A.ZP.section.withConfig({
            displayName: "styles__FaqSection",
            componentId: "sc-1g67z4x-0"
        })(["padding:80px 0 80px 0;", ";", ""], B.U, z.BC.lessThan("sp")(Fs || (Fs = (0,
        N.Z)(["\n    padding: 30px 0 30px 0;\n  "])))), Ro = A.ZP.div.withConfig({
            displayName: "styles__FqqInner",
            componentId: "sc-1g67z4x-1"
        })(["width:880px;justify-content:flex-start;", ""], z.BC.lessThan("sp")(Hs || (Hs = (0,
        N.Z)(["\n    width: 320px;\n  "])))), Oo = A.ZP.h2.withConfig({
            displayName: "styles__Title",
            componentId: "sc-1g67z4x-2"
        })(["font-weight:700;font-size:24px;line-height:16px;letter-spacing:0.1em;padding-bottom:40px;", ""], z.BC.lessThan("sp")(qs || (qs = (0,
        N.Z)(["\n    font-size: 18px;\n    line-height: 16px;\n    padding-bottom: 23px;\n  "])))), ko = A.ZP.div.withConfig({
            displayName: "styles__More",
            componentId: "sc-1g67z4x-3"
        })(["margin-top:32px;text-align:right;font-weight:500;font-size:16px;line-height:16px;letter-spacing:1px;text-decoration-line:underline;", ""], z.BC.lessThan("sp")(Ws || (Ws = (0,
        N.Z)(["\n    margin-top: 18px;\n    font-size: 12px;\n  "])))), Do = t(6729), So = t(1664), Go = t.n(So), Eo = function(e) {
            var n = e.questions
              , t = e.moreLink;
            return (0,
            L.jsx)(Bo, {
                id: "faq",
                children: (0,
                L.jsxs)(Ro, {
                    children: [(0,
                    L.jsx)(Oo, {
                        children: "\u3088\u304f\u3042\u308b\u8cea\u554f"
                    }), (0,
                    L.jsx)(Do.o, {
                        questions: n
                    }), t && (0,
                    L.jsx)(ko, {
                        children: (0,
                        L.jsx)(Go(), {
                            href: t,
                            children: "\u305d\u306e\u4ed6\u3088\u304f\u3042\u308b\u3054\u8cea\u554f\uff1e"
                        })
                    })]
                })
            })
        }, Yo = A.ZP.section.withConfig({
            displayName: "styles__CourseAndFeesSection",
            componentId: "sc-1bv667o-0"
        })(["padding:105px 0 176px 0;", ";", ""], B.U, z.BC.lessThan("sp")(Ls || (Ls = (0,
        N.Z)(["\n    padding: 58px 0 36px 0;\n  "])))), Mo = A.ZP.div.withConfig({
            displayName: "styles__TitleArea",
            componentId: "sc-1bv667o-1"
        })(["margin:42px 80px;"]), Ko = A.ZP.img.withConfig({
            displayName: "styles__CourseAndFeesImage",
            componentId: "sc-1bv667o-2"
        })(["width:114px;"]), Fo = A.ZP.div.withConfig({
            displayName: "styles__CourseMenuArea",
            componentId: "sc-1bv667o-3"
        })(["width:880px;display:flex;justify-content:space-between;margin:44px 0 0 0;padding-bottom:37px;border-bottom:1px solid ", ";", ""], Y.I.GRAY_LIGHT, z.BC.lessThan("sp")(Vs || (Vs = (0,
        N.Z)(["\n    width: 340px;\n    flex-direction: column;\n    margin: 32px 0 0 0;\n    padding-bottom: revert;\n    \n    & > div + div {\n      margin: 48px 0;\n    }\n  "])))), Ho = (A.ZP.div.withConfig({
            displayName: "styles__CourseMenuInnerArea",
            componentId: "sc-1bv667o-4"
        })(["", ""], z.BC.lessThan("sp")(Xs || (Xs = (0,
        N.Z)(["\n    margin: 24px 0;\n    \n  "])))),
        A.ZP.ul.withConfig({
            displayName: "styles__NoteList",
            componentId: "sc-1bv667o-5"
        })(["width:880px;margin-top:23px;li{font-weight:400;font-size:12px;line-height:20px;letter-spacing:1px;color:", ";&:before{content:'\u203b';}}", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Us || (Us = (0,
        N.Z)(["\n    width: 340px;\n    margin-top: 12px;\n    \n    li {\n      font-size: 10px;\n    }\n  "]))))), qo = A.ZP.div.withConfig({
            displayName: "styles__ServiceMenuArea",
            componentId: "sc-1bv667o-6"
        })(["margin-top:116px;width:880px;h3{font-weight:700;font-size:20px;line-height:20px;letter-spacing:1px;color:", ";padding-bottom:16px;margin-bottom:64px;border-bottom:1px solid ", ";}", ""], Y.I.GRAY_DARK, Y.I.GRAY_DARK, z.BC.lessThan("sp")(Js || (Js = (0,
        N.Z)(["\n    margin-top: 48px;\n    width: 340px;\n    \n    h3 {\n      margin-bottom: 32px;\n    }\n  "])))), Wo = A.ZP.div.withConfig({
            displayName: "styles__ServiceMenuInnerArea",
            componentId: "sc-1bv667o-7"
        })(["margin:56px 0;", ""], z.BC.lessThan("sp")(Qs || (Qs = (0,
        N.Z)(["\n    margin: 28px 0;\n  "])))), Lo = A.ZP.div.withConfig({
            displayName: "styles__OtherArea",
            componentId: "sc-1bv667o-8"
        })(["margin-top:45px;width:880px;display:flex;flex-wrap:wrap;justify-content:center;h3{width:147px;font-weight:700;font-size:16px;line-height:20px;letter-spacing:1px;color:", ";text-align:center;padding-bottom:13px;margin-bottom:26px;border-bottom:1px solid ", ";}", ""], Y.I.GRAY_DARK, Y.I.GRAY_DARK, z.BC.lessThan("sp")($s || ($s = (0,
        N.Z)(["\n    width: 340px;\n  "])))), Vo = A.ZP.div.withConfig({
            displayName: "styles__ServiceCardList",
            componentId: "sc-1bv667o-9"
        })(["width:880px;display:flex;flex-wrap:wrap;justify-content:space-between;", ""], z.BC.lessThan("sp")(eo || (eo = (0,
        N.Z)(["\n    width: 340px;\n  "])))), Xo = A.ZP.div.withConfig({
            displayName: "styles__ServiceCardInner",
            componentId: "sc-1bv667o-10"
        })(["", ""], z.BC.lessThan("sp")(no || (no = (0,
        N.Z)(["\n    margin: 4px 0;\n  "])))), Uo = A.ZP.div.withConfig({
            displayName: "styles__GridContainer",
            componentId: "sc-sf5gxl-0"
        })(["width:880px;padding:30px 37px;display:grid;justify-content:center;align-items:center;grid-template-columns:40px auto 1fr;gap:0 24px;grid-template-areas:'iconImage titleText caption';border-radius:20px;box-shadow:2px 2px 4px rgba(0,0,0,0.1);background:#ffffff;", ""], z.BC.lessThan("sp")(to || (to = (0,
        N.Z)(["\n    width: 330px;\n    padding: 20px;\n\n    gap: 8px 16px;\n\n    border-radius: 10px;\n    \n    grid-template-columns: 36px 240px;\n    grid-template-areas: \n      'iconImage titleText'\n      'iconImage caption'\n      ;\n      \n    // \u306a\u305e\u306b\u6a2a\u30b9\u30af\u30ed\u30fc\u30eb\u304c\u51fa\u308b\u306e\u3067\u5236\u5fa1\n    overflow-x: hidden;  \n  "])))), Jo = A.ZP.img.withConfig({
            displayName: "styles__IconImage",
            componentId: "sc-sf5gxl-1"
        })(["grid-area:iconImage;"]), Qo = A.ZP.h3.withConfig({
            displayName: "styles__TitleText",
            componentId: "sc-sf5gxl-2"
        })(["grid-area:titleText;font-weight:700;font-size:24px;letter-spacing:2px;", ""], z.BC.lessThan("sp")(io || (io = (0,
        N.Z)(["\n    padding: 0;\n    font-size: 18px;\n    width: 298px;\n  "])))), $o = A.ZP.div.withConfig({
            displayName: "styles__Caption",
            componentId: "sc-sf5gxl-3"
        })(["grid-area:caption;font-weight:400;font-size:14px;line-height:16px;letter-spacing:2px;", ""], z.BC.lessThan("sp")(so || (so = (0,
        N.Z)(["\n    font-size: 12px;\n    letter-spacing: 1px;\n  "])))), er = function(e) {
            var n = e.icon
              , t = e.title
              , i = e.caption;
            return (0,
            L.jsxs)(Uo, {
                children: [(0,
                L.jsx)(Jo, {
                    src: n,
                    alt: t
                }), (0,
                L.jsx)(Qo, {
                    children: t
                }), (0,
                L.jsx)($o, {
                    children: i
                })]
            })
        }, nr = A.ZP.div.withConfig({
            displayName: "styles__CourseMenuBox",
            componentId: "sc-98py4p-0"
        })(["width:400px;", ""], z.BC.lessThan("sp")(oo || (oo = (0,
        N.Z)(["\n    width: 100%;\n  "])))), tr = A.ZP.div.withConfig({
            displayName: "styles__CourseMessage",
            componentId: "sc-98py4p-1"
        })(["font-weight:500;font-size:16px;line-height:16px;letter-spacing:2px;color:", ";margin:32px 0;", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(ro || (ro = (0,
        N.Z)(["\n    font-size: 14px;\n    letter-spacing: 1px;\n    margin: 20px 0;\n  "])))), ir = A.ZP.h4.withConfig({
            displayName: "styles__CourseTitle",
            componentId: "sc-98py4p-2"
        })(["font-weight:700;font-size:20px;line-height:20px;letter-spacing:1px;color:", ";&:before{display:inline-block;width:30px;height:30px;content:'';background-image:url('/images/homepage/course_icon_check.png');background-repeat:no-repeat;background-size:contain;vertical-align:middle;margin-right:13px;", "}padding-bottom:22px;border-bottom:1px dashed ", ";", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(po || (po = (0,
        N.Z)(["\n      width: 21px;\n      height: 21px;\n      margin-right: 12px;\n    "]))), Y.I.GRAY_DARK, z.BC.lessThan("sp")(ao || (ao = (0,
        N.Z)(["\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20px;\n    padding-bottom: 10px;\n  "])))), sr = A.ZP.ul.withConfig({
            displayName: "styles__MenuList",
            componentId: "sc-98py4p-3"
        })(["list-style:none;li{display:flex;align-items:center;justify-content:space-between;background:rgba(169,225,65,0.2);mix-blend-mode:normal;border-radius:16px;padding:8px 0 8px 31px;margin-top:14px;margin-bottom:14px;}", ""], z.BC.lessThan("sp")(lo || (lo = (0,
        N.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 9px 4px;\n    justify-content: space-between;\n    \n    li {\n      display: block;\n      width: 49%;\n      padding: 8px 0;\n      margin-top: revert;\n      margin-bottom: revert;\n      border-radius: 8px;\n    }\n  "])))), or = A.ZP.div.withConfig({
            displayName: "styles__MenuName",
            componentId: "sc-98py4p-4"
        })(["font-weight:700;font-size:16px;line-height:20px;letter-spacing:0.05em;", ""], z.BC.lessThan("sp")(co || (co = (0,
        N.Z)(["\n    font-size: 14px;\n    line-height: 14px;\n    text-align: center;\n  "])))), rr = A.ZP.p.withConfig({
            displayName: "styles__Time",
            componentId: "sc-98py4p-5"
        })(["font-weight:500;font-size:16px;line-height:20px;background:", ";width:104px;height:32px;text-align:center;vertical-align:middle;border-radius:20px;padding:6px;margin:0 8px;", ""], Y.I.WHITE, z.BC.lessThan("sp")(go || (go = (0,
        N.Z)(["\n    display: none;\n  "])))), pr = A.ZP.span.withConfig({
            displayName: "styles__HighlightText",
            componentId: "sc-98py4p-6"
        })(["color ", ";"], Y.I.READ_LIGHT), ar = function(e) {
            var n = e.match(/^(.*)__(.*)__(.*)/);
            return null === n || n.length < 3 ? e : (0,
            L.jsxs)(L.Fragment, {
                children: [n[1], (0,
                L.jsx)(pr, {
                    children: n[2]
                }), n[3]]
            })
        }, lr = function(e) {
            var n = e.title
              , t = e.message
              , i = e.courseMenus;
            return (0,
            L.jsxs)(nr, {
                children: [(0,
                L.jsx)(ir, {
                    children: n
                }), (0,
                L.jsx)(tr, {
                    children: ar(t)
                }), (0,
                L.jsx)(sr, {
                    children: i.map((function(e) {
                        var n = e.name
                          , t = e.time;
                        return (0,
                        L.jsxs)("li", {
                            children: [(0,
                            L.jsx)(or, {
                                children: n
                            }), (0,
                            L.jsx)(rr, {
                                children: t
                            })]
                        }, n)
                    }
                    ))
                })]
            })
        }, cr = A.ZP.div.withConfig({
            displayName: "styles__ServiceMenuContainer",
            componentId: "sc-12neu8a-0"
        })(["width:881px;", ""], z.BC.lessThan("sp")(ho || (ho = (0,
        N.Z)(["\n    width: 340px;\n  "])))), dr = A.ZP.div.withConfig({
            displayName: "styles__ServiceMenuTitle",
            componentId: "sc-12neu8a-1"
        })(["display:flex;justify-content:space-between;align-items:baseline;width:320px;background:", ";border-radius:0px 20px 20px 0px;mix-blend-mode:multiply;padding:5px 5px 5px 22px;h4{font-weight:700;font-size:16px;line-height:20px;letter-spacing:0.005em;color:", ";margin:7px 0;}div{width:104px;padding:6px 8px;font-weight:500;font-size:16px;line-height:20px;text-align:center;background-image:url('/images/homepage/background_green.png');background-repeat:no-repeat;background-position:bottom;border-radius:20px;}", ""], Y.I.GREEN_DARK_LIGHT, Y.I.WHITE, z.BC.lessThan("sp")(xo || (xo = (0,
        N.Z)(["\n    width: 100%;\n  "])))), gr = A.ZP.ul.withConfig({
            displayName: "styles__ServiceMenuList",
            componentId: "sc-12neu8a-2"
        })(["display:flex;justify-content:center;flex-wrap:wrap;gap:16px;margin:16px 0;li{width:208px;background:", ";border-radius:8px;img{border-radius:8px 8px 0px 0px;width:100%;}p{font-size:14px;line-height:20px;letter-spacing:1px;font-feature-settings:'palt' on;text-align:center;padding:9px 0;}}", ""], Y.I.WHITE, z.BC.lessThan("sp")(mo || (mo = (0,
        N.Z)(["\n    gap: 12px;\n    \n    li {\n      width: 48%;\n    }\n  "])))), hr = function(e) {
            var n = e.title
              , t = e.time
              , i = e.menus;
            return (0,
            L.jsxs)(cr, {
                children: [(0,
                L.jsxs)(dr, {
                    children: [(0,
                    L.jsx)("h4", {
                        children: n
                    }), (0,
                    L.jsx)("div", {
                        children: t
                    })]
                }), (0,
                L.jsx)(gr, {
                    children: i.map((function(e, n) {
                        return (0,
                        L.jsxs)("li", {
                            children: [(0,
                            L.jsx)("img", {
                                src: e.src,
                                alt: e.text
                            }), (0,
                            L.jsx)("p", {
                                children: e.text
                            })]
                        }, n)
                    }
                    ))
                })]
            })
        }, xr = A.ZP.div.withConfig({
            displayName: "styles__Card",
            componentId: "sc-pxyp3e-0"
        })(["width:208px;height:208px;background-color:", ";border:1px solid ", ";border-radius:20px;padding:0 23px;", ""], Y.I.WHITE, Y.I.GRAY_LIGHT, z.BC.lessThan("sp")(uo || (uo = (0,
        N.Z)(["\n    width: 100%;\n    height: revert;\n    padding: 0 32px 20px 32px;\n  "])))), mr = A.ZP.div.withConfig({
            displayName: "styles__CardContent",
            componentId: "sc-pxyp3e-1"
        })(["margin-top:18px;font-weight:400;font-size:12px;line-height:20px;letter-spacing:1px;color:", ";"], Y.I.GRAY_X_DARK), ur = A.ZP.div.withConfig({
            displayName: "styles__CardHeader",
            componentId: "sc-pxyp3e-2"
        })(["padding:19px 0 13px 0;border-bottom:1px dashed ", ";h4,h5,h6{font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1em;font-feature-settings:'palt' on;text-align:center;", "}"], Y.I.GRAY_LIGHT, z.BC.lessThan("sp")(fo || (fo = (0,
        N.Z)(["\n      font-weight: 700;\n      letter-spacing: 0.02em;\n    "])))), fr = A.ZP.div.withConfig({
            displayName: "styles__CardNote",
            componentId: "sc-pxyp3e-3"
        })(["margin-top:10px;font-weight:400;font-size:10px;line-height:16px;letter-spacing:0.2px;color:", ";"], Y.I.GRAY_X_DARK), yr = function(e) {
            var n = e.title
              , t = e.description
              , i = e.note;
            return (0,
            L.jsxs)(xr, {
                children: [(0,
                L.jsx)(ur, {
                    children: (0,
                    L.jsx)("h6", {
                        children: n
                    })
                }), (0,
                L.jsx)(mr, {
                    children: t
                }), i && (0,
                L.jsx)(fr, {
                    children: i
                })]
            })
        };
        function wr(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function _r(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? wr(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : wr(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var br, Cr, jr, vr, Ir, Zr, Pr, Tr, Nr, Ar, zr, Br, Rr, Or, kr, Dr, Sr, Gr, Er, Yr, Mr, Kr, Fr = function(e) {
            var n = e.courseMenuBlocks
              , t = e.serviceMenus
              , i = e.serviceCards;
            return (0,
            L.jsxs)(Yo, {
                id: "course-and-fees",
                children: [(0,
                L.jsx)(Ko, {
                    src: "/images/homepage/title_image_courses_and_fees.svg",
                    alt: "\u30b3\u30fc\u30b9",
                    loading: "lazy"
                }), (0,
                L.jsx)(Mo, {
                    children: (0,
                    L.jsx)(Fe, {
                        description: "\u300c30min.\u300d\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u5b9a\u671f\u8a2a\u554f\u306e\u307f\u306e\u30b5\u30fc\u30d3\u30b9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u5bfe\u8c61\u306e\u304a\u6383\u9664\u7b87\u6240\u306b\u3064\u3044\u3066\u306f\u3001\u304a\u9078\u3073\u306e\u6642\u9593\u306b\u3088\u308a\u5909\u308f\u308a\u307e\u3059\u3002\u53c8\u3001\u6599\u91d1\u306b\u3064\u3044\u3066\u306f\u3001\u3054\u5229\u7528\u983b\u5ea6\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002"
                    })
                }), (0,
                L.jsx)(er, {
                    icon: "/images/homepage/icon_time_green.svg",
                    title: "\u304a\u6383\u9664\u30b3\u30fc\u30b9",
                    caption: "\u5404\u30b3\u30fc\u30b9\u304b\u3089\u304a\u9078\u3073\u3044\u305f\u3060\u3051\u307e\u3059"
                }), (0,
                L.jsx)(Fo, {
                    children: n.map((function(e) {
                        return (0,
                        L.jsx)(lr, _r({}, e), e.title)
                    }
                    ))
                }), (0,
                L.jsxs)(Ho, {
                    children: [(0,
                    L.jsx)("li", {
                        children: "30\u5206\u5358\u4f4d\u3067\u304a\u9078\u3073\u3044\u305f\u3060\u3051\u307e\u3059"
                    }), (0,
                    L.jsx)("li", {
                        children: "180\u5206\u4ee5\u4e0a\u306e\u3054\u4f9d\u983c\u3082\u304a\u53d7\u3051\u3057\u3066\u304a\u308a\u307e\u3059"
                    }), (0,
                    L.jsx)("li", {
                        children: "\u6642\u9593\u306f\u76ee\u5b89\u306b\u306a\u308a\u307e\u3059"
                    }), (0,
                    L.jsx)("li", {
                        children: "60\uff5e180\u5206\u30b3\u30fc\u30b9\u3067\u306e\u304a\u6383\u9664\u7b87\u6240\u6570\u306b\u3064\u304d\u307e\u3057\u3066\u306f\u3001\u304a\u90e8\u5c4b\u306e\u5e83\u3055\u3084\u666e\u6bb5\u306e\u304a\u6383\u9664\u983b\u5ea6\u7b49\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059"
                    }), (0,
                    L.jsx)("li", {
                        children: "\u672c\u30b5\u30fc\u30d3\u30b9\u306f\u6642\u9593\u3067\u306e\u5951\u7d04\u30fb\u30b5\u30fc\u30d3\u30b9\u306e\u3054\u63d0\u4f9b\u3068\u306a\u308a\u307e\u3059"
                    })]
                }), (0,
                L.jsxs)(qo, {
                    id: "course-and-fees-service-menu",
                    children: [(0,
                    L.jsx)("h3", {
                        children: "\u30b5\u30fc\u30d3\u30b9\u306e\u5185\u5bb9\u306b\u3064\u3044\u3066"
                    }), t.map((function(e) {
                        return (0,
                        L.jsx)(Wo, {
                            children: (0,
                            L.jsx)(hr, _r({}, e))
                        }, e.title)
                    }
                    ))]
                }), (0,
                L.jsxs)(Lo, {
                    children: [(0,
                    L.jsx)("h3", {
                        children: "\u305d\u306e\u4ed6"
                    }), (0,
                    L.jsx)(Vo, {
                        children: i.map((function(e) {
                            return (0,
                            L.jsx)(Xo, {
                                children: (0,
                                L.jsx)(yr, _r({}, e))
                            }, e.title)
                        }
                        ))
                    })]
                })]
            })
        }, Hr = A.ZP.section.withConfig({
            displayName: "styles__PricingSection",
            componentId: "sc-1ug45fm-0"
        })(["padding:114px 0 124px 0;", ";"], B.U), qr = A.ZP.div.withConfig({
            displayName: "styles__PriceTableContentArea",
            componentId: "sc-1ug45fm-1"
        })(["width:880px;padding:0 10px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;", ""], z.BC.lessThan("sp")(br || (br = (0,
        N.Z)(["\n    width: 370px;\n    overflow: scroll;\n  "])))), Wr = A.ZP.div.withConfig({
            displayName: "styles__PriceMessage",
            componentId: "sc-1ug45fm-2"
        })(["width:880px;background:rgba(117,172,108,0.13);border-radius:8px;margin:33px 0;padding:9px;text-align:center;color:rgba(117,172,108,1);", ""], z.BC.lessThan("sp")(Cr || (Cr = (0,
        N.Z)(["\n    width: 320px;\n  "])))), Lr = A.ZP.div.withConfig({
            displayName: "styles__SimulatorContentsArea",
            componentId: "sc-1ug45fm-3"
        })(["width:880px;padding-top:64px;", ""], z.BC.lessThan("sp")(jr || (jr = (0,
        N.Z)(["\n    width: 370px;\n    // width: revert;\n    // max-width: 370px;\n    padding-left: auto;\n    padding-right: auto;\n  "])))), Vr = A.ZP.p.withConfig({
            displayName: "styles__Note",
            componentId: "sc-1ug45fm-4"
        })(["font-weight:400;font-size:12px;line-height:1.5;letter-spacing:1px;color:", ";margin:10px 0;"], Y.I.GRAY_DARK), Xr = [{
            frequency: "weeksOnceOrMore",
            name: "\u90311\u56de\u4ee5\u4e0a",
            prices: [{
                value: 2750,
                time: 30
            }, {
                value: 4180,
                time: 60
            }, {
                value: 6270,
                time: 90
            }, {
                value: 7920,
                time: 120
            }, {
                value: 9900,
                time: 150
            }, {
                value: 11220,
                time: 180
            }]
        }, {
            frequency: "twiceAMonth",
            name: "\u67082\u56de",
            prices: [{
                value: 2750,
                time: 30
            }, {
                value: 4400,
                time: 60
            }, {
                value: 6600,
                time: 90
            }, {
                value: 8360,
                time: 120
            }, {
                value: 10450,
                time: 150
            }, {
                value: 11880,
                time: 180
            }]
        }, {
            frequency: "onceAMonth",
            name: "\u67081\u56de",
            prices: [{
                value: 8800,
                time: 120
            }, {
                value: 11e3,
                time: 150
            }, {
                value: 12650,
                time: 180
            }]
        }], Ur = [{
            timeUnit: "180\u5206\u4ee5\u4e0a 30\u5206\u3042\u305f\u308a",
            weeksOnceOrMore: "+1,870\u5186",
            twiceAMonth: "+1,980\u5186",
            onceAMonth: "+2,090\u5186",
            isAdditionalFee: !0
        }], Jr = Xr.map((function(e) {
            return {
                label: e.name,
                value: e.frequency
            }
        }
        )), Qr = function(e) {
            var n, t = null === (n = Xr.find((function(n) {
                return n.frequency === e
            }
            ))) || void 0 === n ? void 0 : n.prices.map((function(e) {
                return {
                    label: "".concat(e.time.toString(), "\u5206"),
                    value: e.time
                }
            }
            ));
            return null !== t && void 0 !== t ? t : []
        }, $r = function() {
            var e = (0,
            W.useState)(Jr[0].value)
              , n = e[0]
              , t = e[1]
              , i = (0,
            W.useState)(Qr(n))
              , s = i[0]
              , o = i[1]
              , r = (0,
            W.useState)(0)
              , p = r[0]
              , a = r[1]
              , l = (0,
            W.useState)(0)
              , c = l[0]
              , d = l[1];
            return (0,
            W.useEffect)((function() {
                return d(function(e, n) {
                    var t, i, s = null === (t = Xr.find((function(n) {
                        return n.frequency === e
                    }
                    ))) || void 0 === t ? void 0 : t.prices;
                    if (!s)
                        return 0;
                    var o = s.find((function(e) {
                        return e.time === n
                    }
                    ));
                    return null !== (i = null === o || void 0 === o ? void 0 : o.value) && void 0 !== i ? i : 0
                }(n, p))
            }
            ), [n, p, s]),
            (0,
            W.useEffect)((function() {
                var e = Qr(n);
                o(e),
                a(e[0].value)
            }
            ), [n]),
            {
                frequencies: Jr,
                frequency: n,
                times: s,
                time: p,
                usingPrice: c,
                setFrequency: t,
                setTime: a
            }
        }, ep = A.ZP.div.withConfig({
            displayName: "styles__Container",
            componentId: "sc-1c7xboy-0"
        })(["width:880px;background-color:", ";border-radius:30px;padding:72px 86px;", ""], Y.I.WHITE, z.BC.lessThan("sp")(vr || (vr = (0,
        N.Z)(["\n    width: 370px;\n    \n    padding: 36px 16px;\n  "])))), np = A.ZP.h4.withConfig({
            displayName: "styles__Title",
            componentId: "sc-1c7xboy-1"
        })(["color:", ";font-weight:bold;font-size:20px;line-height:16px;letter-spacing:2px;& > span{background:linear-gradient(transparent 70%,", " 0%);}", ""], Y.I.GRAY_DARK, Y.I.YELLOW, z.BC.lessThan("sp")(Ir || (Ir = (0,
        N.Z)(["\n    font-size: 14px;\n    line-height: 14px;\n    text-align: center;\n  "])))), tp = A.ZP.p.withConfig({
            displayName: "styles__Description",
            componentId: "sc-1c7xboy-2"
        })(["margin-top:24px;color:", ";font-size:14px;line-height:1.8em;letter-spacing:1.5px;", ""], Y.I.GRAY_DARK, z.BC.lessThan("sp")(Zr || (Zr = (0,
        N.Z)(["\n    margin-top: 12px;\n    font-size: 11px;\n    text-align: center;\n  "])))), ip = A.ZP.div.withConfig({
            displayName: "styles__Calculator",
            componentId: "sc-1c7xboy-3"
        })(["display:flex;margin-top:47px;", ""], z.BC.lessThan("sp")(Pr || (Pr = (0,
        N.Z)(["\n    margin-top: 28px;\n  "])))), sp = A.ZP.div.withConfig({
            displayName: "styles__Note",
            componentId: "sc-1c7xboy-4"
        })(["margin-top:26px;font-weight:300;font-size:12px;line-height:12px;letter-spacing:1px;color:", ";", ""], Y.I.GRAY_X_DARK, z.BC.lessThan("sp")(Tr || (Tr = (0,
        N.Z)(["\n    margin-top: 11px;\n    font-weight: 400;\n    font-size: 9px;\n  "])))), op = A.ZP.div.withConfig({
            displayName: "styles__CalculatorItemFrequency",
            componentId: "sc-1c7xboy-5"
        })(["flex-grow:4;", ""], z.BC.lessThan("sp")(Nr || (Nr = (0,
        N.Z)(["\n    min-width: 100px;\n  "])))), rp = A.ZP.div.withConfig({
            displayName: "styles__CalculatorItemTime",
            componentId: "sc-1c7xboy-6"
        })(["flex-grow:4;", ""], z.BC.lessThan("sp")(Ar || (Ar = (0,
        N.Z)(["\n    min-width: 60px;\n  "])))), pp = A.ZP.div.withConfig({
            displayName: "styles__CalculatorItemUnitPrice",
            componentId: "sc-1c7xboy-7"
        })(["flex-grow:4;", ""], z.BC.lessThan("sp")(zr || (zr = (0,
        N.Z)(["\n    min-width: 80px;\n  "])))), ap = A.ZP.div.withConfig({
            displayName: "styles__CalculatorLabel",
            componentId: "sc-1c7xboy-8"
        })(["text-align:center;font-size:15px;line-height:14px;letter-spacing:1px;margin-bottom:10px;", ""], z.BC.lessThan("sp")(Br || (Br = (0,
        N.Z)(["\n    font-weight: 300;\n    font-size: 11px;\n    line-height: 14px;\n  "])))), lp = A.ZP.select.withConfig({
            displayName: "styles__CalculatorSelectBox",
            componentId: "sc-1c7xboy-9"
        })(["width:100%;background-image:url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);background-repeat:no-repeat;background-position-x:95%;background-position-y:15px;appearance:none;border:none;background-color:", ";border-radius:10px;font-weight:bold;font-size:20px;margin:0;padding:15px 20px;letter-spacing:2px;color:", ";& > option{text-align:center;}", ""], Y.I.GRAY_X_LIGHT, Y.I.GRAY_DARK, z.BC.lessThan("sp")(Rr || (Rr = (0,
        N.Z)(["\n    background-position-x: 98%;\n    background-position-y: center;\n    font-size: 13px;\n    padding: 12px 15px;\n    text-align-last: left;\n  "])))), cp = A.ZP.div.withConfig({
            displayName: "styles__CalculatorOperator",
            componentId: "sc-1c7xboy-10"
        })(["flex-grow:1;text-align:center;font-size:32px;margin-top:auto;padding:0 1px 10px 1px;", ""], z.BC.lessThan("sp")(Or || (Or = (0,
        N.Z)(["\n    padding: 0 4px 15px 4px;\n    font-size: 13px;\n  "])))), dp = A.ZP.div.withConfig({
            displayName: "styles__CalculatorValue",
            componentId: "sc-1c7xboy-11"
        })(["text-align:center;background-color:", ";border-radius:10px;font-weight:bold;font-size:20px;padding:15px 0;letter-spacing:2px;", ""], Y.I.GRAY_X_LIGHT, z.BC.lessThan("sp")(kr || (kr = (0,
        N.Z)(["\n    font-size: 13px;\n    padding: 16px 0;\n  "])))), gp = function(e) {
            var n, t = e.frequencies, i = e.times, s = e.usingPrice, o = e.values, r = e.onChangeFrequency, p = e.onChangeTime;
            return (0,
            L.jsxs)(ep, {
                id: "price-simulator",
                children: [(0,
                L.jsx)(np, {
                    children: (0,
                    L.jsx)("span", {
                        children: "\u6599\u91d1\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3"
                    })
                }), (0,
                L.jsx)(tp, {
                    children: "\u3054\u5e0c\u671b\u306e\u5185\u5bb9\u3092\u9078\u629e\u3057\u3066\u3001\u3054\u5229\u7528\u6599\u91d1\u3092\u78ba\u8a8d\u3044\u305f\u3060\u3051\u307e\u3059"
                }), (0,
                L.jsxs)(ip, {
                    children: [(0,
                    L.jsxs)(op, {
                        children: [(0,
                        L.jsx)(ap, {
                            children: "\u983b\u5ea6\u9078\u629e"
                        }), (0,
                        L.jsx)(lp, {
                            value: o.frequency,
                            onChange: function(e) {
                                return r(e.target.value)
                            },
                            children: t.map((function(e) {
                                return (0,
                                L.jsx)("option", {
                                    value: e.value,
                                    children: e.label
                                }, e.label)
                            }
                            ))
                        })]
                    }), (0,
                    L.jsx)(cp, {
                        children: "\xd7"
                    }), (0,
                    L.jsxs)(rp, {
                        children: [(0,
                        L.jsx)(ap, {
                            children: "\u6642\u9593\u9078\u629e"
                        }), (0,
                        L.jsx)(lp, {
                            value: o.time,
                            onChange: function(e) {
                                return p(parseInt(e.target.value))
                            },
                            children: i.map((function(e) {
                                return (0,
                                L.jsx)("option", {
                                    value: e.value,
                                    children: e.label
                                }, e.label)
                            }
                            ))
                        })]
                    }), (0,
                    L.jsx)(cp, {
                        children: "="
                    }), (0,
                    L.jsxs)(pp, {
                        children: [(0,
                        L.jsx)(ap, {
                            children: "1\u56de\u3042\u305f\u308a\u306e\u91d1\u984d"
                        }), (0,
                        L.jsxs)(dp, {
                            children: [(n = s,
                            new Intl.NumberFormat("ja-JP").format(n)), "\u5186"]
                        })]
                    })]
                }), (0,
                L.jsx)(sp, {
                    children: "\u203b\u4e0a\u8a18\u306f\u3001\u4ea4\u901a\u8cbb\u30fb\u7a0e\u91d1\u8fbc\u306e\u91d1\u984d\u3068\u306a\u308a\u307e\u3059"
                })]
            })
        }, hp = t(6687), xp = function(e) {
            return new Intl.NumberFormat("ja-JP").format(e)
        }, mp = function() {
            return {
                prices: (0,
                W.useMemo)((function() {
                    return function() {
                        var e = Xr.reduce((function(e, n) {
                            var t = n.prices.map((function(e) {
                                var t = e.time
                                  , i = e.value;
                                return {
                                    time: t,
                                    frequency: n.frequency,
                                    value: i
                                }
                            }
                            ));
                            return [].concat((0,
                            hp.Z)(e), (0,
                            hp.Z)(t))
                        }
                        ), []);
                        return [].concat((0,
                        hp.Z)(e.map((function(e) {
                            return e.time
                        }
                        )).filter((function(e, n, t) {
                            return t.indexOf(e) === n
                        }
                        )).map((function(n) {
                            var t, i, s, o, r, p;
                            return {
                                time: n,
                                weeksOnceOrMore: null !== (t = null === (i = e.find((function(e) {
                                    return e.time === n && "weeksOnceOrMore" === e.frequency
                                }
                                ))) || void 0 === i ? void 0 : i.value) && void 0 !== t ? t : void 0,
                                twiceAMonth: null !== (s = null === (o = e.find((function(e) {
                                    return e.time === n && "twiceAMonth" === e.frequency
                                }
                                ))) || void 0 === o ? void 0 : o.value) && void 0 !== s ? s : void 0,
                                onceAMonth: null !== (r = null === (p = e.find((function(e) {
                                    return e.time === n && "onceAMonth" === e.frequency
                                }
                                ))) || void 0 === p ? void 0 : p.value) && void 0 !== r ? r : void 0
                            }
                        }
                        )).map((function(e) {
                            var n = e.time
                              , t = e.weeksOnceOrMore
                              , i = e.twiceAMonth
                              , s = e.onceAMonth;
                            return {
                                timeUnit: "".concat(n, "\u5206\uff0f\u56de"),
                                weeksOnceOrMore: t ? "".concat(xp(t), "\u5186") : "\u2014",
                                twiceAMonth: i ? "".concat(xp(i), "\u5186") : "\u2014",
                                onceAMonth: s ? "".concat(xp(s), "\u5186") : "\u2014"
                            }
                        }
                        ))), (0,
                        hp.Z)(Ur))
                    }()
                }
                ), [])
            }
        }, up = A.ZP.div.withConfig({
            displayName: "styles__PriceTableContainer",
            componentId: "sc-1v0xxme-0"
        })(["width:880px;& > table{width:100%;border-bottom:1px solid ", ";}& thead > tr{border-top:1px solid ", ";border-bottom:1px solid ", ";}& thead > tr > th:not(:first-child){border-left:1px solid ", ";}& tbody > tr{border-bottom:1px dashed ", ";}& th{width:220px;font-family:'Noto Sans JP';font-style:normal;font-weight:700;font-size:16px;line-height:20px;text-align:center;padding:23px 0px;letter-spacing:2px;}", ""], Y.I.GRAY_LIGHT, Y.I.GRAY_LIGHT, Y.I.GRAY_LIGHT, Y.I.GRAY_LIGHT, Y.I.GRAY_LIGHT, z.BC.lessThan("sp")(Dr || (Dr = (0,
        N.Z)(["\n    width: 632px;\n    overflow: scroll;\n    ::-webkit-scrollbar {\n      -webkit-appearance: none;\n      height: 5px;\n      width: 0;\n    }\n    ::-webkit-scrollbar-thumb {\n      border-radius: 4px;\n      background-color: rgba(0, 0, 0, .5);\n    }\n    & > table {\n      width: 632px;\n    }\n    & th {\n      padding: 15px 0px;\n      width: 158px;\n\n      font-size: 13px;\n      letter-spacing: 0.03em;\n      color: ", ";\n    }\n  "])), Y.I.GRAY_X_DARK)), fp = A.ZP.td.withConfig({
            shouldForwardProp: function(e) {
                return !["isAdditionalFee"].includes(e)
            }
        }).withConfig({
            displayName: "styles__PriceData",
            componentId: "sc-1v0xxme-1"
        })(["font-family:'Noto Sans JP';font-style:normal;font-weight:500;font-size:18px;line-height:20px;text-align:center;padding:23px 0px;letter-spacing:0.5px;border-left:1px solid ", ";color:", ";", ""], Y.I.GRAY_LIGHT, (function(e) {
            return e.isAdditionalFee ? Y.I.NEWS_RED : Y.I.GRAY_X_DARK
        }
        ), z.BC.lessThan("sp")(Sr || (Sr = (0,
        N.Z)(["\n    padding: 6px 0px;\n    font-size: 15px;\n  "])))), yp = "\u90311\u56de\u4ee5\u4e0a", wp = "\u67082\u56de", _p = "\u67081\u56de", bp = function(e) {
            var n = e.prices;
            return (0,
            L.jsx)(up, {
                children: (0,
                L.jsxs)("table", {
                    children: [(0,
                    L.jsx)("thead", {
                        children: (0,
                        L.jsxs)("tr", {
                            children: [(0,
                            L.jsx)("th", {
                                children: "\xa0"
                            }), (0,
                            L.jsx)("th", {
                                children: yp
                            }), (0,
                            L.jsx)("th", {
                                children: wp
                            }), (0,
                            L.jsx)("th", {
                                children: _p
                            })]
                        })
                    }), (0,
                    L.jsx)("tbody", {
                        children: n.map((function(e) {
                            return (0,
                            L.jsxs)("tr", {
                                children: [(0,
                                L.jsx)("th", {
                                    children: e.timeUnit
                                }), (0,
                                L.jsx)(fp, {
                                    isAdditionalFee: !!e.isAdditionalFee,
                                    children: e.weeksOnceOrMore
                                }), (0,
                                L.jsx)(fp, {
                                    isAdditionalFee: !!e.isAdditionalFee,
                                    children: e.twiceAMonth
                                }), (0,
                                L.jsx)(fp, {
                                    isAdditionalFee: !!e.isAdditionalFee,
                                    children: e.onceAMonth
                                })]
                            }, e.timeUnit)
                        }
                        ))
                    })]
                })
            })
        }, Cp = function() {
            var e = $r()
              , n = e.frequencies
              , t = e.frequency
              , i = e.times
              , s = e.time
              , o = e.usingPrice
              , r = e.setFrequency
              , p = e.setTime
              , a = mp().prices;
            return (0,
            L.jsxs)(Hr, {
                children: [(0,
                L.jsx)(er, {
                    icon: "/images/homepage/icon_money.svg",
                    title: "\u6599\u91d1\u30d7\u30e9\u30f3",
                    caption: "\u6642\u9593\u304c\u9577\u304f\u306a\u308b\u307b\u3069\u3001\u304a\u5f97\u306b\u306a\u308b\u6599\u91d1\u30d7\u30e9\u30f3"
                }), (0,
                L.jsx)(Wr, {
                    children: "\u6599\u91d1\u306f\u7a0e\u8fbc\u30fb\u4ea4\u901a\u8cbb\u8fbc\u306e\u91d1\u984d\u3068\u306a\u308a\u307e\u3059"
                }), (0,
                L.jsxs)(qr, {
                    children: [(0,
                    L.jsx)(bp, {
                        prices: a
                    }), (0,
                    L.jsxs)(Vr, {
                        children: ["\u203b\u56de\u6570\u306f\u9031\u8907\u6570\u56de\uff5e\u6708\uff11\u56de\u307e\u3067\u9078\u3079\u307e\u3059", (0,
                        L.jsx)("br", {}), "\u203b\u6708\uff11\u56de\u306e\u5834\u5408\u306b\u306f120\u5206\u4ee5\u4e0a\u3067\u306e\u304a\u7533\u8fbc\u307f\u306e\u307f\u627f\u3063\u3066\u304a\u308a\u307e\u3059"]
                    })]
                }), (0,
                L.jsx)(Lr, {
                    children: (0,
                    L.jsx)(gp, {
                        frequencies: n,
                        times: i,
                        usingPrice: o,
                        onChangeFrequency: function(e) {
                            return r(e)
                        },
                        onChangeTime: function(e) {
                            return p(e)
                        },
                        values: {
                            frequency: t,
                            time: s
                        }
                    })
                })]
            })
        }, jp = A.ZP.div.withConfig({
            displayName: "styles__Container",
            componentId: "sc-10kxwu0-0"
        })(["position:sticky;z-index:10;top:calc( 100vh - 92px );// 90px\u306f\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9ad8\u3055 = padding\u306e\u4e0a\u3068\u4e0b\u306e\u9ad8\u3055(1) + \u30dc\u30bf\u30f3\u306e\u9ad8\u3055(2) ", ""], z.BC.lessThan("sp")(Gr || (Gr = (0,
        N.Z)(["\n    top: calc(\n      100vh - 80px\n    ); \n  "])))), vp = A.ZP.div.withConfig({
            displayName: "styles__PageTopContent",
            componentId: "sc-10kxwu0-1"
        })(["position:absolute;top:-53px;right:25px;width:70px;& img{width:100%;object-fit:contain;}", ""], z.BC.lessThan("sp")(Er || (Er = (0,
        N.Z)(["\n    top: -34px; // height\u306e22px\u3068\u4f59\u767d\u306e12px\u306e\u5408\u7b97 \n    right: 17px;\n    width: 49px;\n    height: 22px;\n  "])))), Ip = A.ZP.div.withConfig({
            displayName: "styles__BannerContent",
            componentId: "sc-10kxwu0-2"
        })(["width:100%;padding:16px 0;display:flex;justify-content:center;align-content:center;backdrop-filter:blur(3px);background:rgba(255,255,255,0.5);", ""], z.BC.lessThan("sp")(Yr || (Yr = (0,
        N.Z)(["\n    padding: 10px 0 30px;\n    \n    & > a > picture {\n      width: 320px;\n    }\n  "])))), Zp = function(e) {
            var n = e.banner;
            return (0,
            L.jsxs)(jp, {
                children: [(0,
                L.jsx)(vp, {
                    children: (0,
                    L.jsx)("a", {
                        href: "#top",
                        children: (0,
                        L.jsx)(re.E, {
                            src: "/images/page_top.svg",
                            alt: "PAGE TOP"
                        })
                    })
                }), (0,
                L.jsx)(Ip, {
                    children: (0,
                    L.jsx)(Go(), {
                        href: n.href,
                        passHref: !0,
                        children: (0,
                        L.jsx)("a", {
                            children: (0,
                            L.jsx)(re.E, {
                                src: n.image,
                                pcSrc: n.pcImage,
                                alt: n.alt
                            })
                        })
                    })
                })]
            })
        }, Pp = A.ZP.section.withConfig({
            displayName: "styles__FooterBannerSection",
            componentId: "sc-gaw2z7-0"
        })(["padding:190px 0 156px 0;", ";", ""], B.U, z.BC.lessThan("sp")(Mr || (Mr = (0,
        N.Z)(["\n    padding: 30px 0 20px 0;\n  "])))), Tp = A.ZP.div.withConfig({
            displayName: "styles__FooterImageArea",
            componentId: "sc-gaw2z7-1"
        })(["padding:0 15px;", ""], z.BC.lessThan("sp")(Kr || (Kr = (0,
        N.Z)(["\n    width: 360px;\n  "])))), Np = function(e) {
            var n = e.link;
            return (0,
            L.jsx)(Pp, {
                children: (0,
                L.jsx)("a", {
                    href: n,
                    rel: "noreferrer",
                    target: "_blank",
                    children: (0,
                    L.jsx)(Tp, {
                        children: (0,
                        L.jsx)(re.E, {
                            src: "/images/homepage/footer_banner_housekeeper.jpg",
                            alt: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u52df\u96c6"
                        })
                    })
                })
            })
        }, Ap = t(3537);
        function zp(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Bp(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? zp(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : zp(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Rp = function(e) {
            var n = e.areaProps
              , t = e.newsProps
              , i = e.faqProps;
            return (0,
            L.jsxs)(L.Fragment, {
                children: [(0,
                L.jsx)(ot.h, Bp({}, Ap.TJ)), (0,
                L.jsx)(xt, Bp({}, Ap.CD)), (0,
                L.jsxs)(ws.t, {
                    children: [(0,
                    L.jsx)(yt, Bp({}, Ap.lu)), (0,
                    L.jsx)(pe, Bp({}, Ap.lo)), (0,
                    L.jsx)(Zp, Bp({}, Ap.DY)), (0,
                    L.jsx)(rn, Bp({}, Ap.To)), (0,
                    L.jsx)(st, Bp({}, Ap.NX)), (0,
                    L.jsx)(Et, Bp({}, Ap.At)), (0,
                    L.jsx)(Ot, Bp({}, Ap.il)), (0,
                    L.jsx)(ws.h, {
                        color: "green",
                        children: (0,
                        L.jsx)(Fr, Bp({}, Ap.bE))
                    }), (0,
                    L.jsx)(yo, Bp({}, Ap.ub)), (0,
                    L.jsx)(ws.h, {
                        color: "green",
                        children: (0,
                        L.jsx)(Cp, {})
                    }), (0,
                    L.jsx)(ws.h, {
                        color: "blue",
                        children: (0,
                        L.jsx)(ys, Bp({}, Ap.w))
                    }), (0,
                    L.jsx)(ws.h, {
                        color: "white",
                        children: (0,
                        L.jsx)(Oi, Bp({}, n))
                    }), (0,
                    L.jsx)(ws.h, {
                        color: "beige",
                        children: (0,
                        L.jsx)(Pi, Bp({}, Ap.NN))
                    }), (0,
                    L.jsx)(zo, Bp({}, t)), (0,
                    L.jsx)(Eo, Bp({}, i)), (0,
                    L.jsx)(Np, Bp({}, Ap.GX)), (0,
                    L.jsx)(ws.h, {
                        color: "gray",
                        children: (0,
                        L.jsx)(wo.$, Bp({}, Ap._v))
                    }), (0,
                    L.jsx)(_o.V, Bp({}, Ap.Tm))]
                })]
            })
        }
          , Op = t(564);
        function kp(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Dp(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? kp(Object(t), !0).forEach((function(n) {
                    (0,
                    I.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : kp(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var Sp = !0
          , Gp = function(e) {
            var n, t = e.areas, i = e.news, s = e.faq, o = (0,
            P.useRouter)();
            null !== (n = o.query) && void 0 !== n && n.rd_code && "string" === typeof o.query.rd_code && (0,
            T._$)(o.query.rd_code);
            var r = {
                areaProps: {
                    names: t.map((function(e) {
                        return e.name
                    }
                    ))
                },
                newsProps: {
                    news: i
                },
                faqProps: {
                    questions: s.slice(0, 3),
                    moreLink: s.length > 3 ? "/faq" : void 0
                }
            };
            return (0,
            L.jsxs)(L.Fragment, {
                children: [(0,
                L.jsx)(Op.Z, {}), (0,
                L.jsx)(Z.Z, {
                    title: "30min.\uff08\u30b5\u30fc\u30c6\u30a3\u30fc\u30df\u30cb\u30c3\u30c4\uff09",
                    children: (0,
                    L.jsx)(Rp, Dp({}, r))
                })]
            })
        }
    },
    2222: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, {
            t: function() {
                return i
            }
        }),
        function(e) {
            e[e.PC = 1920] = "PC",
            e[e.SP = 390] = "SP"
        }(i || (i = {}))
    },
    6114: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return i
            }
        });
        var i = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 320
              , t = "string" === typeof n ? Number(n.replace("px", "")) : n || 320;
            if (!t)
                throw new Error("Invalid base width provided to px2vw");
            return "".concat(100 / t * e, "vw")
        }
    },
    8312: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(9773)
        }
        ])
    }
}, function(e) {
    e.O(0, [6688, 5525, 5864, 9774, 2888, 179], (function() {
        return n = 8312,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
