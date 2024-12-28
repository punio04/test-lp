"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5864], {
  7186: function (e, t, n) {
    n.d(t, {
      h: function () {
        return l
      },
      t: function () {
        return p
      }
    });
    var i, o, r = n(1383), s = n(1686), a = n(777), p = s.ZP.div.withConfig({
      displayName: "backgrounds__BackgroundMain",
      componentId: "sc-1y9nvix-0"
    })(["width:100%;margin:0 auto;margin-top:-68px;background-position:top;background-repeat:no-repeat;background-size:contain;background-image:url('/images/homepage/background_a.png');", " ", ""], a.BC.lessThan("sp")(i || (i = (0,
      r.Z)(["\n    margin-top: -26px;\n  "]))), a.rT.lessThan("sp")(o || (o = (0,
        r.Z)(["\n    margin-top: revert;\n    background-image: url('/images/homepage/background_a_sp.png');\n  "])))), c = {
          green: "/images/homepage/background_green.png",
          beige: "/images/homepage/background_beige.png",
          blue: "/images/homepage/background_blue.png",
          gray: "/images/bg_gray.png",
          white: "/images/homepage/background_white.png"
        }, l = s.ZP.div.withConfig({
          displayName: "backgrounds__BackgroundTexture",
          componentId: "sc-1y9nvix-1"
        })(["width:100%;margin:0 auto;background-position:top;background-repeat:repeat;background-image:url('", "');"], (function (e) {
          var t = e.color;
          return c[t]
        }
        ))
  },
  9372: function (e, t, n) {
    n.d(t, {
      $: function () {
        return y
      }
    });
    var i, o, r, s, a, p = n(1383), c = n(1686), l = n(958), g = n(1520), m = n(777), u = c.ZP.section.withConfig({
      displayName: "styles__FooterSection",
      componentId: "sc-13akm17-0"
    })(["padding:65px 35px 60px 35px;", ";", ""], l.U, m.BC.lessThan("sp")(i || (i = (0,
      p.Z)(["\n     padding: 37px 27px 29px 27px;\n  "])))), d = c.ZP.div.withConfig({
        displayName: "styles__IconArea",
        componentId: "sc-13akm17-1"
      })(["display:flex;justify-content:center;align-items:center;gap:26px;"]), h = c.ZP.img.withConfig({
        displayName: "styles__IconImage",
        componentId: "sc-13akm17-2"
      })(["width:30px;"]), _ = c.ZP.ul.withConfig({
        displayName: "styles__LinkList",
        componentId: "sc-13akm17-3"
      })(["display:flex;justify-content:center;margin-top:47px;> * + *:before{content:'|';font-size:14px;margin:0 10px;}a{font-weight:400;font-size:14px;line-height:16px;letter-spacing:1px;}", ""], m.BC.lessThan("sp")(o || (o = (0,
        p.Z)(["\n    margin-top: 32px;\n    > * + *:before {\n      font-size: 11px;\n      margin: 0 4px;\n    }\n    \n    a {\n      font-size: 11px;\n      letter-spacing: 0.5px;\n    }\n  "])))), f = c.ZP.div.withConfig({
          displayName: "styles__ButtonArea",
          componentId: "sc-13akm17-4"
        })(["margin-top:52px;", ""], m.BC.lessThan("sp")(r || (r = (0,
          p.Z)(["\n    margin-top: 16px;\n  "])))), x = c.ZP.div.withConfig({
            displayName: "styles__LogoArea",
            componentId: "sc-13akm17-5"
          })(["display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:182px;p{font-weight:400;font-size:11px;line-height:16px;letter-spacing:1px;color:", ";}", ""], g.I.GRAY_DARK, m.BC.lessThan("sp")(s || (s = (0,
            p.Z)(["\n    margin-top: 75px;\n    \n    p {\n      font-size: 9px;\n    }\n  "])))), b = c.ZP.img.withConfig({
              displayName: "styles__LogoImage",
              componentId: "sc-13akm17-6"
            })(["width:201px;margin-bottom:34px;", ""], m.BC.lessThan("sp")(a || (a = (0,
              p.Z)(["\n    width: 118px;\n    margin-bottom: 15px;\n  "])))), v = n(8308), w = n(5893), y = function (e) {
                var t = e.snsList
                  , n = e.linkList
                  , i = e.contact;
                return (0,
                  w.jsxs)(u, {
                    children: [(0,
                      w.jsx)(d, {
                        children: t.map((function (e) {
                          var t = e.media
                            , n = e.url;
                          return (0,
                            w.jsx)("a", {
                              href: n,
                              target: "_brank",
                              rel: "noreferrer",
                              children: (0,
                                w.jsx)(h, {
                                  src: "/images/homepage/icon_".concat(t, ".png"),
                                  alt: t,
                                  loading: "lazy"
                                })
                            }, t)
                        }
                        ))
                      }), (0,
                        w.jsx)(_, {
                          children: n.map((function (e) {
                            var t = e.name
                              , n = e.url;
                            return (0,
                              w.jsx)("li", {
                                children: (0,
                                  w.jsx)("a", {
                                    href: n,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: t
                                  })
                              }, t)
                          }
                          ))
                        }), (0,
                          w.jsx)(f, {
                            children: (0,
                              w.jsx)(v.Q, {
                                variant: "tertiary",
                                size: "large",
                                shadow: !1,
                                href: i.url,
                                target: "_blank",
                                rel: "noreferrer",
                                children: i.name
                              })
                          }), (0,
                            w.jsxs)(x, {
                              children: [(0,
                                w.jsx)(b, {
                                  src: "/images/homepage/logo_30min.svg",
                                  alt: "30min."
                                }), (0,
                                  w.jsx)("p", {
                                    children: "Copyright \xa9 MITSUBISHI ESTATE Co., Ltd. All Rights Reserved."
                                  })]
                            })]
                  })
              }
  },
  7627: function (e, t, n) {
    n.d(t, {
      h: function () {
        return z
      }
    });
    var i, o, r, s, a, p, c, l = n(1383), g = n(1686), m = n(777), u = n(1520), d = g.ZP.header.withConfig({
      displayName: "styles__Container",
      componentId: "sc-l2rlcr-0"
    })(["position:relative;height:144px;max-width:1920px;margin:0 auto;", ""], m.BC.lessThan("sp")(i || (i = (0,
      l.Z)(["\n    max-width: revert;\n    height: 52px;\n    margin: revert;\n  "])))), h = g.ZP.div.withConfig({
        displayName: "styles__LogoContainer",
        componentId: "sc-l2rlcr-1"
      })(["position:absolute;width:329px;bottom:27px;left:35px;", ""], m.BC.lessThan("sp")(o || (o = (0,
        l.Z)(["\n    top: 14px;\n    left: 11px;\n  "])))), _ = g.ZP.img.withConfig({
          displayName: "styles__LogoImage",
          componentId: "sc-l2rlcr-2"
        })(["width:148px;margin-left:25px;", ""], m.BC.lessThan("sp")(r || (r = (0,
          l.Z)(["\n    width: 66px;\n    margin-left: 9px;\n  "])))), f = g.ZP.img.withConfig({
            displayName: "styles__JishoLogoImage",
            componentId: "sc-l2rlcr-3"
          })(["width:154px;", ""], m.BC.lessThan("sp")(s || (s = (0,
            l.Z)(["\n    width: 67px;\n  "])))), x = g.ZP.div.withConfig({
              displayName: "styles__KeeperButtonArea",
              componentId: "sc-l2rlcr-4"
            })(["position:absolute;right:44px;bottom:74px;margin:0 10px;", ""], m.BC.lessThan("sp")(a || (a = (0,
              l.Z)(["\n    display: none;\n  "])))), b = g.ZP.nav.withConfig({
                displayName: "styles__GlobalNav",
                componentId: "sc-l2rlcr-5"
              })(["position:absolute;right:44px;bottom:25px;", ""], m.BC.lessThan("sp")(p || (p = (0,
                l.Z)(["\n    display: none;\n  "])))), v = g.ZP.ul.withConfig({
                  displayName: "styles__NavList",
                  componentId: "sc-l2rlcr-6"
                })(["font-size:14px;display:flex;align-items:baseline;"]), w = g.ZP.li.withConfig({
                  shouldForwardProp: function (e) {
                    return "type" !== e
                  }
                }).withConfig({
                  displayName: "styles__NavItem",
                  componentId: "sc-l2rlcr-7"
                })(["margin:", ";"], (function (e) {
                  return "button" === e.type ? "0 6px" : "0 10px;"
                }
                )), y = g.ZP.a.withConfig({
                  displayName: "styles__NavLink",
                  componentId: "sc-l2rlcr-8"
                })(["text-decoration:none;color:", ";transition:color 0.1s ease;display:flex;align-items:flex-start;justify-content:center;padding-bottom:3px;border-bottom:3px solid transparent;&:hover{color:", ";border-bottom:2px solid ", ";}font-weight:500;font-size:14px;line-height:16px;text-align:center;letter-spacing:1.5px;"], u.I.GRAY_DARK, u.I.GRAY_DARK, u.I.GRAY_DARK), I = g.ZP.button.withConfig({
                  displayName: "styles__HamburgerIcon",
                  componentId: "sc-l2rlcr-9"
                })(["display:none;appearance:none;-webkit-appearance:button;border:none;padding:0;background:transparent;", " & img{width:100%;object-fit:contain;}"], m.BC.lessThan("sp")(c || (c = (0,
                  l.Z)(["\n    display: inline-block;\n    position: absolute;\n    width: 36px;\n    right: 10px;\n    bottom: 5px;;\n  "])))), j = g.ZP.div.withConfig({
                    shouldForwardProp: function (e) {
                      return "isShow" !== e
                    }
                  }).withConfig({
                    displayName: "styles__HamburgerMenuContainer",
                    componentId: "sc-l2rlcr-10"
                  })(["visibility:", ";opacity:", ";transition:visibility 0.3s,opacity 0.3s ease;position:absolute;background-color:", ";right:0;z-index:1;top:52px;"], (function (e) {
                    return e.isShow ? "visible" : "hidden"
                  }
                  ), (function (e) {
                    return e.isShow ? 1 : 0
                  }
                  ), u.I.WHITE), k = g.ZP.div.withConfig({
                    displayName: "styles__SpMenuContainer",
                    componentId: "sc-l2rlcr-11"
                  })(["margin:auto;"]), C = g.ZP.ul.withConfig({
                    displayName: "styles__SpMenuList",
                    componentId: "sc-l2rlcr-12"
                  })(["display:flex;flex-direction:column;width:230px;"]), E = g.ZP.li.withConfig({
                    displayName: "styles__SpMenuListItem",
                    componentId: "sc-l2rlcr-13"
                  })(["box-sizing:border-box;width:100%;padding:15px;border-top:1px dashed ", ";& > a{font-size:14px;width:100%;display:inline-block;}"], u.I.GRAY_LIGHT), R = n(8308), A = n(1664), T = n.n(A), N = n(7294), L = n(8194), S = n(5893), Z = function (e) {
                    var t = e.navContent;
                    return (0,
                      S.jsx)(w, {
                        type: t.type,
                        children: (0,
                          S.jsx)(T(), {
                            href: t.url,
                            passHref: !0,
                            children: "button" === t.type && t.buttonVariant ? (0,
                              S.jsx)(R.Q, {
                                size: "small",
                                variant: t.buttonVariant,
                                children: t.title
                              }) : (0,
                                S.jsx)(y, {
                                  children: t.title
                                })
                          })
                      })
                  }, P = function (e) {
                    var t = e.navContents;
                    return (0,
                      S.jsx)(k, {
                        children: (0,
                          S.jsx)(C, {
                            children: t.map((function (e) {
                              return (0,
                                S.jsx)(E, {
                                  children: (0,
                                    S.jsx)(T(), {
                                      href: e.url,
                                      children: e.title
                                    })
                                }, e.url)
                            }
                            ))
                          })
                      })
                  }, B = function (e) {
                    var t = e.navContents;
                    return (0,
                      S.jsx)(v, {
                        children: t.map((function (e) {
                          return (0,
                            S.jsx)(Z, {
                              navContent: e
                            }, e.title)
                        }
                        ))
                      })
                  }, z = function (e) {
                    var t = e.navContents
                      , n = e.jishoLogoLinkUrl
                      , i = e.logoLinkUrl
                      , o = e.recruitButtonLinkUrl
                      , r = (0,
                        N.useState)(!1)
                      , s = r[0]
                      , a = r[1];
                    return (0,
                      S.jsxs)(d, {
                        children: [(0,
                          S.jsxs)(h, {
                            children: [(0,
                              S.jsx)("a", {
                                href: n,
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0,
                                  S.jsx)(f, {
                                    src: "/images/homepage/logo_jisho.png",
                                    alt: "\u4e09\u83f1\u5730\u6240"
                                  })
                              }), (0,
                                S.jsx)("a", {
                                  href: i,
                                  children: (0,
                                    S.jsx)(_, {
                                      src: "/images/homepage/logo_30min.svg",
                                      alt: "30min."
                                    })
                                })]
                          }), (0,
                            S.jsx)(x, {
                              children: (0,
                                S.jsx)(R.K, {
                                  target: "_blank",
                                  href: o,
                                  rel: "noreferrer"
                                })
                            }), (0,
                              S.jsx)(b, {
                                children: (0,
                                  S.jsx)(B, {
                                    navContents: t
                                  })
                              }), (0,
                                S.jsx)(I, {
                                  onClick: function () {
                                    a(!s)
                                  },
                                  children: (0,
                                    S.jsx)(L.E, {
                                      src: "/images/icon_hamburger.svg",
                                      alt: ""
                                    })
                                }), (0,
                                  S.jsx)(j, {
                                    isShow: s,
                                    children: (0,
                                      S.jsx)(P, {
                                        navContents: t
                                      })
                                  })]
                      })
                  }
  },
  561: function (e, t, n) {
    n.d(t, {
      V: function () {
        return m
      }
    });
    var i, o, r = n(1383), s = n(1686), a = n(958), p = n(777), c = s.ZP.section.withConfig({
      displayName: "styles__MecFooterSection",
      componentId: "sc-1ghkrhl-0"
    })(["width:100%;padding:42px 0 139px 0;", ";", ""], a.U, p.BC.lessThan("sp")(i || (i = (0,
      r.Z)(["\n    padding: 17px 0 100px 0;\n  "])))), l = s.ZP.img.withConfig({
        displayName: "styles__MecLogo",
        componentId: "sc-1ghkrhl-1"
      })(["width:202px;", ""], p.BC.lessThan("sp")(o || (o = (0,
        r.Z)(["\n    width: 150px;\n  "])))), g = n(5893), m = function (e) {
          var t = e.link;
          return (0,
            g.jsx)(c, {
              children: (0,
                g.jsx)("a", {
                  href: t,
                  target: "_blank",
                  rel: "noreferrer",
                  children: (0,
                    g.jsx)(l, {
                      src: "/images/mitsubishi_jisyo_phrase.png",
                      alt: "\u4e09\u83f1\u5730\u6240"
                    })
                })
            })
        }
  },
  8308: function (e, t, n) {
    n.d(t, {
      K: function () {
        return k
      },
      Q: function () {
        return j
      }
    });
    var i, o, r = n(9499), s = n(1383), a = n(1686), p = n(1520), c = n(777), l = {
      primary: {
        background: p.I.GREEN_X_DARK,
        fontColor: p.I.WHITE,
        hoverFontColor: p.I.WHITE
      },
      secondary: {
        background: p.I.GREEN_BLUE,
        fontColor: p.I.WHITE,
        hoverFontColor: p.I.WHITE
      },
      tertiary: {
        background: p.I.WHITE,
        fontColor: p.I.GRAY_DARK,
        hoverFontColor: p.I.GRAY_DARK
      }
    }, g = {
      small: {
        pc: {
          width: "108px",
          padding: "11px 0 12px 4px",
          fontWeight: "500",
          fontSize: "14px",
          letterSpacing: "2px",
          borderRadius: "20px"
        },
        sp: {
          width: "128px",
          padding: "12px 0 12px 4px",
          fontWeight: "500",
          fontSize: "14px",
          letterSpacing: "2px",
          borderRadius: "20px"
        }
      },
      medium: {
        pc: {
          width: "222px",
          padding: "11px 0",
          fontWeight: "700",
          fontSize: "14px",
          letterSpacing: "1.5px",
          borderRadius: "80px"
        },
        sp: {
          width: "189px",
          padding: "11px 0",
          fontWeight: "700",
          fontSize: "14px",
          letterSpacing: "1.5px",
          borderRadius: "80px"
        }
      },
      large: {
        pc: {
          width: "440px",
          padding: "21px 0",
          fontWeight: "700",
          fontSize: "18px",
          letterSpacing: "2px",
          borderRadius: "80px"
        },
        sp: {
          width: "320px",
          padding: "15px 0",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "1px",
          borderRadius: "80px"
        }
      }
    }, m = {
      s: "/images/homepage/arrow_white_right_small.svg",
      m: "/images/homepage/arrow_white_right.svg"
    }, u = {
      s: "/images/homepage/arrow_green_right_small.svg",
      m: "/images/homepage/arrow_green_right.svg"
    }, d = {
      medium: {
        pc: {
          white: {
            content: "url(".concat(m.s, ")")
          },
          green: {
            content: "url(".concat(u.s, ")")
          }
        },
        sp: {
          white: {
            content: "url(".concat(m.s, ")")
          },
          green: {
            content: "url(".concat(u.s, ")")
          }
        }
      },
      large: {
        pc: {
          white: {
            content: "url(".concat(m.m, ")")
          },
          green: {
            content: "url(".concat(u.m, ")")
          }
        },
        sp: {
          white: {
            content: "url(".concat(m.s, ")")
          },
          green: {
            content: "url(".concat(u.s, ")")
          }
        }
      }
    }, h = {
      medium: {
        pc: {
          right: "11px",
          top: "11px"
        },
        sp: {
          right: "11px",
          top: "11px"
        }
      },
      large: {
        pc: {
          right: "20px",
          top: "20px"
        },
        sp: {
          right: "15px",
          top: "16px"
        }
      }
    }, _ = (0,
      a.iv)(["width:", ";padding:", ";font-size:", ";font-weight:", ";letter-spacing:", ";border-radius:", ";", " transition:all 0.2s ease;&:hover{opacity:0.8;}&:visited{color:", ";}", " font-feature-settings:'palt';"], (function (e) {
        return g[e.size].pc.width
      }
      ), (function (e) {
        return g[e.size].pc.padding
      }
      ), (function (e) {
        return g[e.size].pc.fontSize
      }
      ), (function (e) {
        return g[e.size].pc.fontWeight
      }
      ), (function (e) {
        return g[e.size].pc.letterSpacing
      }
      ), (function (e) {
        return g[e.size].pc.borderRadius
      }
      ), (function (e) {
        var t = e.size;
        return c.BC.lessThan("sp")(i || (i = (0,
          s.Z)(["\n    width: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    letter-spacing: ", ";\n    border-radius: ", ";\n  "])), g[t].sp.width, g[t].sp.padding, g[t].sp.fontSize, g[t].sp.fontWeight, g[t].sp.letterSpacing, g[t].sp.borderRadius)
      }
      ), p.I.WHITE, (function (e) {
        var t = e.shadow;
        return (void 0 === t || t) && "filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));"
      }
      )), f = (0,
        a.iv)(["color:", ";background:", ";&:hover{color:", ";}"], (function (e) {
          return l[e.variant].fontColor
        }
        ), (function (e) {
          return l[e.variant].background
        }
        ), (function (e) {
          return l[e.variant].hoverFontColor
        }
        )), x = (0,
          a.iv)(["&:after{position:absolute;", " ", "}", ""], (function (e) {
            var t = e.size;
            return "small" !== t && h[t].pc
          }
          ), (function (e) {
            var t = e.size
              , n = e.arrowColor
              , i = void 0 === n ? "white" : n;
            return "small" !== t && d[t].pc[i]
          }
          ), (function (e) {
            var t = e.size
              , n = e.arrowColor
              , i = void 0 === n ? "white" : n;
            return "small" !== t && c.BC.lessThan("sp")(o || (o = (0,
              s.Z)(["\n      &:after {\n        ", "\n        ", "\n      }\n    "])), h[t].sp, d[t].sp[i])
          }
          )), b = a.ZP.a.withConfig({
            shouldForwardProp: function (e) {
              return !["variant", "size", "arrowColor", "shadow"].includes(e)
            }
          }).withConfig({
            displayName: "styles__BaseLinkButton",
            componentId: "sc-1v2983o-0"
          })(["border:0;cursor:pointer;display:inline-block;position:relative;text-align:center;", " ", " ", ""], _, f, x), v = a.ZP.a.withConfig({
            shouldForwardProp: function (e) {
              return !["size", "shadow", "arrowColor", "src"].includes(e)
            }
          }).withConfig({
            displayName: "styles__BaseBackgroundLinkButton",
            componentId: "sc-1v2983o-1"
          })(["cursor:pointer;display:inline-block;text-align:center;", ";background-image:url('", "');background-size:cover;border:1px solid ", ";color:", ";&:hover{color:", ";}&:visited{color:", ";}", ""], _, (function (e) {
            return e.src
          }
          ), p.I.GREEN_X_DARK, p.I.GREEN_X_DARK, p.I.GREEN_X_DARK, p.I.GREEN_X_DARK, x), w = n(5893);
    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
          n.push.apply(n, i)
      }
      return n
    }
    function I(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? y(Object(n), !0).forEach((function (t) {
          (0,
            r.Z)(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
      }
      return e
    }
    var j = b
      , k = function (e) {
        return (0,
          w.jsx)(v, I(I({
            size: "medium",
            shadow: !0,
            src: "/images/homepage/button_housekeeper_background.png",
            arrowColor: "green"
          }, e), {}, {
            children: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u52df\u96c6"
          }))
      }
  },
  6566: function (e, t, n) {
    n.d(t, {
      E: function () {
        return p
      }
    });
    var i = n(1686)
      , o = i.ZP.img.withConfig({
        displayName: "styles__Img",
        componentId: "sc-m4k9ps-0"
      })(["width:100%;"])
      , r = i.ZP.picture.withConfig({
        displayName: "styles__Picture",
        componentId: "sc-m4k9ps-1"
      })(["display:block;height:auto;overflow:auto;", "{display:block;line-height:0;}"], o)
      , s = n(777)
      , a = (n(7294),
        n(5893))
      , p = function (e) {
        var t = e.className
          , n = e.src
          , i = e.alt
          , p = e.pcSrc
          , c = e.loading;
        return (0,
          a.jsxs)(r, {
            className: t,
            children: [p && (0,
              a.jsx)("source", {
                srcSet: n,
                media: "(max-width: ".concat(s.AV.sp, ")")
              }), (0,
                a.jsx)(o, {
                  src: null !== p && void 0 !== p ? p : n,
                  alt: i,
                  loading: c
                })]
          })
      }
  },
  564: function (e, t, n) {
    var i = n(1686)
      , o = n(6532)
      , r = n(1520)
      , s = (0,
        i.vJ)(["", " *{font-family:'Noto Sans JP',sans-serif !important;box-sizing:border-box;}body{color:", ";}a,a:hover,a:active,a:visited{color:", ";text-decoration:none;}"], o.ZP, r.I.GRAY_DARK, r.I.GRAY_DARK);
    t.Z = s
  },
  958: function (e, t, n) {
    n.d(t, {
      U: function () {
        return i
      }
    });
    var i = (0,
      n(1686).iv)(["display:flex;flex-direction:column;justify-content:center;align-items:center;"])
  },
  3477: function (e, t, n) {
    var i = n(9008)
      , o = n.n(i)
      , r = n(2942)
      , s = n(5893);
    t.Z = function (e) {
      var t = e.children
        , n = e.title
        , i = void 0 === n ? "" : n;
      return (0,
        s.jsxs)("div", {
          children: [(0,
            s.jsxs)(o(), {
              children: [(0,
                s.jsxs)("title", {
                  children: [i, "\uff5c", r.I.BASE_TITLE]
                }), (0,
                  s.jsx)("meta", {
                    charSet: "utf-8"
                  }), (0,
                    s.jsx)("meta", {
                      name: "viewport",
                      content: "initial-scale=1.0, width=device-width"
                    }), (0,
                      s.jsx)("meta", {
                        name: "description",
                        content: r.I.DESCRIPTION
                      }), (0,
                        s.jsx)("meta", {
                          property: "og:image",
                          content: "/ogp/30min.jpg"
                        }), (0,
                          s.jsx)("meta", {
                            property: "og:site_name",
                            content: "".concat(i, "\uff5c").concat(r.I.BASE_TITLE)
                          }), (0,
                            s.jsx)("meta", {
                              property: "og:title",
                              content: "".concat(i, "\uff5c").concat(r.I.BASE_TITLE)
                            }), (0,
                              s.jsx)("meta", {
                                property: "og:description",
                                content: r.I.DESCRIPTION
                              })]
            }), t]
        })
    }
  },
  3537: function (e, t, n) {
    n.d(t, {
      At: function () {
        return g
      },
      CD: function () {
        return p
      },
      DY: function () {
        return x
      },
      GX: function () {
        return b
      },
      NN: function () {
        return m
      },
      NX: function () {
        return s
      },
      TJ: function () {
        return a
      },
      Tm: function () {
        return _
      },
      To: function () {
        return r
      },
      _v: function () {
        return h
      },
      bE: function () {
        return f
      },
      il: function () {
        return l
      },
      lo: function () {
        return o
      },
      lu: function () {
        return c
      },
      ub: function () {
        return d
      },
      w: function () {
        return u
      }
    });
    var i = "https://recruiting.30min.page/"
      , o = {
        abouts: [{
          title: "\u5de1\u56de\u578b",
          description: "30min.\u306e\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u304c\u304a\u4f4f\u3044\u306e\u30de\u30f3\u30b7\u30e7\u30f3\u5185\u3084\u30a8\u30ea\u30a2\u3092\u5de1\u56de\u3057\u3066\u30b5\u30fc\u30d3\u30b9\u3092\u884c\u3046\u3001\u65b0\u3057\u3044\u304b\u305f\u3061\u306e\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",
          variant: "repeat",
          isRising: !1,
          letterSpacing: "5px"
        }, {
          title: "\u77ed\u6642\u9593",
          description: "\u30a8\u30ea\u30a2\u5185\u306e\u30b5\u30fc\u30d3\u30b9\u3054\u5229\u7528\u65e5\u3092\u307e\u3068\u3081\u308b\u3053\u3068\u3067\u3001\u3053\u308c\u307e\u3067\u306e\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u306b\u306f\u306a\u304b\u3063\u305f\u3001\u300c\u77ed\u6642\u9593\u304b\u3089\u306e\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u300d\u3092\u5b9f\u73fe\u3057\u307e\u3057\u305f\u3002",
          variant: "time",
          isRising: !0,
          letterSpacing: "5px"
        }, {
          title: "\u30d4\u30f3\u30dd\u30a4\u30f3\u30c8",
          description: "\u77ed\u6642\u9593\u3067\u306e\u5229\u7528\u304c\u53ef\u80fd\u306a\u3053\u3068\u3067\u3001\u300c\u304a\u98a8\u5442\u3060\u3051\u300d\u3068\u8a00\u3063\u305f\u8ca0\u62c5\u3068\u306a\u308b\u5bb6\u4e8b\u3060\u3051\u3092\u30d4\u30f3\u30dd\u30a4\u30f3\u30c8\u3067\u983c\u3093\u3067\u3044\u305f\u3060\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",
          variant: "pinpoint",
          isRising: !1
        }]
      }
      , r = {
        voices: [{
          variant: "primary",
          layout: "left",
          title: "\u6bce\u903160\u5206\uff0f\u30ea\u30d3\u30f3\u30b0\u30c0\u30a4\u30cb\u30f3\u30b0",
          subtitle: "30min.\u3092\u4f7f\u3044\u59cb\u3081\u3066\u3001\u5b50\u4f9b\u3068\u904a\u3076\u6642\u9593\u3068\u3001\u5fc3\u306e\u4f59\u88d5\u304c\u751f\u307e\u308c\u307e\u3057\u305f",
          imageUrl: "/images/homepage/voice1_illust.svg",
          description: "\u5b50\u4f9b\u304c\u7523\u307e\u308c\u3066\u304b\u3089\u3001\u30ea\u30d3\u30f3\u30b0\u306e\u6c5a\u308c\u304c\u6c17\u306b\u306a\u308a\u300160\u5206\u3060\u3051\u304a\u9858\u3044\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u30ea\u30d3\u30f3\u30b0\u30c0\u30a4\u30cb\u30f3\u30b0\u306b\u6563\u3089\u304b\u3063\u305f\u304a\u3082\u3061\u3083\u306e\u7247\u4ed8\u3051\u3068\u3001\u57c3\u53d6\u308a\u3001\u6383\u9664\u6a5f\u639b\u3051\u306e\u5f8c\u306b\u3001\u306a\u304b\u306a\u304b\u624b\u306e\u56de\u3089\u306a\u3044\u5e8a\u306e\u6c34\u62ed\u304d\u307e\u3067\u3057\u3066\u3082\u3089\u3063\u3066\u3044\u307e\u3059\u3002"
        }, {
          variant: "secondary",
          layout: "right",
          title: "\u6bce\u903160\u5206\uff0f\u6c34\u56de\u308a\u30eb\u30fc\u30c6\u30a3\u30f3",
          subtitle: "\u6c17\u306b\u306a\u308b\u6c34\u56de\u308a\u3060\u3051\u30d4\u30f3\u30dd\u30a4\u30f3\u30c8\u3067\u304a\u9858\u3044\u3057\u3066\u3044\u307e\u3059",
          imageUrl: "/images/homepage/voice2_illust.svg",
          description: "\u6bce\u903160\u5206\u3067\u3001\u306a\u304b\u306a\u304b\u624b\u306e\u56de\u3089\u306a\u3044\u30ad\u30c3\u30c1\u30f3\u3068\u304a\u98a8\u5442\u3092\u4ea4\u4e92\u306b\u304a\u9858\u3044\u3057\u3066\u3044\u307e\u3059\u3002\u6700\u8fd1\u306f\u3001\u5947\u9e97\u306a\u72b6\u614b\u304c\u30ad\u30fc\u30d7\u51fa\u6765\u308b\u69d8\u306b\u306a\u308a\u3001\u4f59\u3063\u305f\u6642\u9593\u3067\u3001\u6d17\u9762\u6240\u3001\u304a\u624b\u6d17\u3044\u3001\u7384\u95a2\u306a\u3069\u3001\u305d\u306e\u6642\u306b\u6c17\u306b\u306a\u3063\u3066\u3044\u308b\u7b87\u6240\u3082\u304a\u6383\u9664\u3044\u305f\u3060\u3066\u3044\u307e\u3059\u3002"
        }, {
          variant: "tertiary",
          layout: "left",
          title: "\u6bce\u9031120\u5206\uff0f\u5bb6\u306e\u4e2d\u3092\u3072\u3068\u901a\u308a",
          subtitle: "\u9031\u306b\u4e00\u5ea6\u3001\u5bb6\u306e\u4e2d\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u3082\u3089\u3044\u6c17\u6301\u3061\u3088\u304f\u904e\u3054\u305b\u3066\u3044\u307e\u3059",
          imageUrl: "/images/homepage/voice3_illust.svg",
          description: "\u81ea\u5b85\u3067\u4ed5\u4e8b\u3092\u3057\u3066\u3044\u308b\u6642\u3082\u3001\u90e8\u5c4b\u304c\u6563\u3089\u304b\u3063\u3066\u3044\u308b\u3068\u96c6\u4e2d\u3067\u304d\u306a\u304b\u3063\u305f\u308a\u6182\u9b31\u3060\u3063\u305f\u308a\u2026\u3002\u7279\u306b\u6c34\u56de\u308a\u306f\u9031\u672b\u306b\u307e\u3068\u3081\u3066\u3084\u308d\u3046\u3001\u3068\u601d\u3063\u3066\u3044\u3066\u3082\u51fa\u6765\u306a\u3044\u4e8b\u304c\u591a\u3044\u306e\u3067\u3001\u5b9a\u671f\u7684\u306b\u90e8\u5c4b\u5168\u4f53\u306e\u304a\u6383\u9664\u3092\u304a\u9858\u3044\u3059\u308b\u4e8b\u306b\u3057\u307e\u3057\u305f\u3002"
        }]
      }
      , s = {
        voices: [{
          layout: "left",
          housekeeperImage: "/images/homepage/housekeeper_voice_1.jpg",
          housekeeperAlt: "I\u3055\u3093",
          titleImage: "/images/homepage/housekeeper_voice_title_1.svg",
          titleAlt: "\u6c17\u306b\u306a\u308b\u30dd\u30a4\u30f3\u30c8\u3092\u3057\u3063\u304b\u308a\u3068",
          subtitle: "\u304a\u5ba2\u69d8\u306b\u300c\u697d\u306b\u306a\u3063\u305f\u300d\u3068\u601d\u3063\u3066\u3044\u305f\u3060\u3051\u308b\u4e8b\u304c\u3001\u4f55\u3088\u308a\u3082\u5b09\u3057\u3044\u3067\u3059",
          description: "\u304a\u5ba2\u69d8\u306b\u300c\u697d\u306b\u306a\u3063\u305f\u300d\u3068\u601d\u3063\u3066\u9802\u304f\u4e8b\u304c\u4e00\u756a\u306e\u559c\u3073\u3067\u3059\u3002\u304a\u6383\u9664\u4ee5\u5916\u306e\u304a\u4ed5\u4e8b\u3082\u67d4\u8edf\u306b\u5bfe\u5fdc\u81f4\u3057\u307e\u3059\u306e\u3067\u3001\u662f\u975e\u3054\u8981\u671b\u3092\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044\uff01"
        }, {
          layout: "right",
          housekeeperImage: "/images/homepage/housekeeper_voice_4.jpg",
          housekeeperAlt: "S\u3055\u3093",
          titleImage: "/images/homepage/housekeeper_voice_title_2.svg",
          titleAlt: "\u4ed5\u4e0a\u304c\u308a\u3092\u7f8e\u3057\u304f",
          subtitle: "\u304a\u5ba2\u69d8\u306b\u9a5a\u3044\u3066\u3044\u305f\u3060\u3051\u308b\u69d8\u306a\u4ed5\u4e0a\u304c\u308a\u3092\u76ee\u6307\u3057\u3066",
          description: "100\u4ef6\u4ee5\u4e0a\u306e\u8a2a\u554f\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u3002\u4ed5\u4e0a\u304c\u308a\u306e\u7f8e\u3057\u3055\u306b\u3053\u3060\u308f\u3063\u3066\u3001\u304a\u6383\u9664\u3057\u3066\u3044\u307e\u3059\u3002\u300c\u4e01\u5be7\u306a\u304a\u6383\u9664\u3092\u3001\u30b9\u30d4\u30fc\u30c7\u30a3\u306b\u300d\u3092\u30e2\u30c3\u30c8\u30fc\u306b\u3001\u304a\u5ba2\u3055\u307e\u306b\u3054\u6e80\u8db3\u3044\u305f\u3060\u304d\u305f\u3051\u308b\u3088\u3046\u3001\u65e5\u3005\u7cbe\u9032\u3057\u3066\u53c2\u308a\u305f\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"
        }, {
          layout: "left",
          housekeeperImage: "/images/homepage/housekeeper_voice_3.jpg",
          housekeeperAlt: "F\u3055\u3093",
          titleImage: "/images/homepage/housekeeper_voice_title_3.svg",
          titleAlt: "\u304d\u3081\u7d30\u3084\u304b\u306a\u30b5\u30fc\u30d3\u30b9\u3092",
          subtitle: "\u304a\u5ba2\u69d8\u306b\u300c\u697d\u306b\u306a\u3063\u305f\u300d\u3068\u601d\u3063\u3066\u3044\u305f\u3060\u3051\u308b\u4e8b\u304c\u3001\u4f55\u3088\u308a\u3082\u5b09\u3057\u3044\u3067\u3059",
          description: "\u5b50\u80b2\u3066\u304c\u843d\u3061\u3064\u3044\u3066\u304b\u3089\u9031\uff13\u56de\u306e\u30da\u30fc\u30b9\u3067\u5bb6\u4e8b\u4ee3\u884c\u306e\u304a\u4ed5\u4e8b\u3092\u3057\u3066\u3044\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306b\u5bc4\u308a\u6dfb\u3044\u306a\u304c\u3089\u304d\u3081\u7d30\u304b\u3044\u30b5\u30fc\u30d3\u30b9\u304c\u51fa\u6765\u308b\u3088\u3046\u306b\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u3002\u5fc3\u5730\u3088\u3044\u66ae\u3089\u3057\u3001\u305d\u3093\u306a\u304a\u624b\u4f1d\u3044\u304c\u51fa\u6765\u305f\u3089\u5e78\u3044\u3067\u3059\u3002"
        }],
        description: "30min.\u306e\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306f\u3001\u4e09\u83f1\u5730\u6240\u306b\u3066\u4e00\u4eba\u4e00\u4eba\u9762\u63a5\u30fb\u7814\u4fee\u3092\u884c\u3044\u3001\u53b3\u6b63\u306a\u5be9\u67fb\u57fa\u6e96\u306b\u5408\u683c\u3057\u305f\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306e\u307f\u7686\u69d8\u306e\u3054\u81ea\u5b85\u306b\u3054\u8a2a\u554f\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u3044\u307e\u3059\u300230min.\u306b\u6240\u5c5e\u3059\u308b\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u4e00\u90e8\u3054\u7d39\u4ecb\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002",
        recruitButtonLinkUrl: i
      }
      , a = {
        navContents: [{
          title: "\u30b5\u30fc\u30d3\u30b9",
          url: "/#service",
          type: "text"
        }, {
          title: "\u30b3\u30fc\u30b9\u30fb\u6599\u91d1",
          url: "/#course-and-fees",
          type: "text"
        }, {
          title: "\u30a8\u30ea\u30a2",
          url: "/#area",
          type: "text"
        }, {
          title: "\u304a\u77e5\u3089\u305b",
          url: "/#news",
          type: "text"
        }, {
          title: "\u3088\u304f\u3042\u308b\u8cea\u554f",
          url: "/#faq",
          type: "text"
        }, {
          title: "\u521d\u56de\u304a\u8a66\u3057",
          url: "/signup",
          type: "button",
          buttonVariant: "primary"
        }, {
          title: "\u30ed\u30b0\u30a4\u30f3",
          url: "/login",
          type: "button",
          buttonVariant: "secondary"
        }],
        jishoLogoLinkUrl: "https://www.mec.co.jp/",
        logoLinkUrl: "/",
        recruitButtonLinkUrl: i
      }
      , p = {
        slideImages: [{
          src: "/images/top_image_1.jpg",
          srcSp: "/images/homepage/top_image_1-sp.jpg",
          alt: "\u4e09\u83f1\u5730\u6240\u306e\u59cb\u3081\u308b30\u5206\u304b\u3089\u983c\u3081\u308b\u5b9a\u671f\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9"
        }, {
          src: "/images/homepage/top_image_5.png",
          srcSp: "/images/homepage/top_image_5-sp.png",
          alt: "\u696d\u754c\u6700\u77ed\u306e30\u5206\u304b\u308930\u5206\u5358\u4f4d\u3067\u983c\u3081\u308b\u4e09\u83f1\u5730\u6240\u306e\u5bb6\u4e8b\u4ee3\u884c 30min"
        }, {
          src: "/images/top_image_3.jpg",
          srcSp: "/images/homepage/top_image_3-sp.jpg",
          alt: "\u3042\u306a\u305f\u3068\u4e00\u7dd2\u306b\u904e\u3054\u3057\u305f\u3044 - \u5927\u5207\u306a\u6642\u9593\u3092\u5927\u4e8b\u306a\u4eba\u3068\u3002"
        }, {
          src: "/images/top_image_4.jpg",
          srcSp: "/images/homepage/top_image_4-sp.jpg",
          alt: "\u66ae\u3089\u3057\u3092\u8c4a\u304b\u306b - \u5fd9\u3057\u3044\u6bce\u65e5\u306b\u6642\u9593\u3068\u4f59\u88d5\u3092\u4f5c\u308a\u305f\u3044\u3002"
        }],
        duration: 5e3
      }
      , c = {
        bannerImage: "/images/homepage/banner_keeper_recruit.png",
        bannerAlt: "\u304a\u8a66\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\uff01",
        signupUrl: "/signup",
        loginUrl: "/login"
      }
      , l = {
        steps: [{
          number: 1,
          title: "\u30de\u30a4\u30da\u30fc\u30b8\u306e\u65b0\u898f\u767b\u9332",
          description: "30min.\u3092\u521d\u3081\u3066\u3054\u5229\u7528\u306e\u65b9\u306f\u65b0\u898f\u4f1a\u54e1\u767b\u9332\u3092\u304a\u3053\u306a\u3063\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002",
          icon: "/images/homepage/service_step_icon_1.png",
          registration: {
            title: "\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089",
            href: "/signup"
          }
        }, {
          number: 2,
          title: "\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306e\u304a\u7533\u3057\u8fbc\u307f",
          description: "\u521d\u56de\u9650\u5b9a\u3067\u304a\u8a66\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3092\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002\n\u3054\u5e0c\u671b\u306e\u65e5\u6642\u3092\u7b2c\uff13\u5e0c\u671b\u307e\u3067\u3054\u5165\u529b\u304f\u3060\u3055\u3044\u3002",
          icon: "/images/homepage/service_step_icon_2.svg"
        }, {
          number: 3,
          title: "\u3054\u8a2a\u554f\u65e5\u306e\u63d0\u6848\u3068\u78ba\u5b9a",
          description: "\u8a2a\u554f\u65e5\u306e\u3054\u63d0\u6848\u3092\u30de\u30a4\u30da\u30fc\u30b8\u306b\u304a\u77e5\u3089\u305b\u3057\u307e\u3059\u3002\n\u627f\u8a8d\u3044\u305f\u3060\u304d\u307e\u3059\u3068\u65e5\u6642\u304c\u78ba\u5b9a\u3057\u307e\u3059\u3002",
          icon: "/images/homepage/service_step_icon_3.svg"
        }, {
          number: 4,
          title: "\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306e\u3054\u8a2a\u554f",
          description: "\u3054\u4e0d\u660e\u306a\u70b9\u306f\u30c1\u30e3\u30c3\u30c8\u304b\u3089\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002\u4e8b\u52d9\u5c40\u3084\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306b\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u4e0b\u3055\u3044\u3002\u307e\u305f\u3001\u4e0b\u8a18\u306e\u300c\u3054\u7528\u610f\u3044\u305f\u3060\u304d\u305f\u3044\u3082\u306e\u300d\u3092\u53c2\u8003\u306b\u304a\u6383\u9664\u9053\u5177\u306e\u3054\u7528\u610f\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002",
          icon: "/images/homepage/service_step_icon_4.svg"
        }, {
          number: 5,
          title: "\u5b9a\u671f\u5951\u7d04\u306e\u304a\u7533\u3057\u8fbc\u307f",
          description: "\u304a\u8a66\u3057\u5229\u7528\u5f8c\u3001\u30de\u30a4\u30da\u30fc\u30b8\u306e\u5b9a\u671f\u5951\u7d04\u304b\u3089\u304a\u7533\u8fbc\u307f\u304f\u3060\u3055\u3044\u3002\u3054\u5e0c\u671b\u983b\u5ea6\u3084\u304a\u7533\u3057\u8fbc\u307f\u5185\u5bb9\u306b\u5fdc\u3058\u3001\u6539\u3081\u3066\u8a2a\u554f\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3092\u63d0\u6848\u3044\u305f\u3057\u307e\u3059\u3002",
          icon: "/images/homepage/service_step_icon_5.png"
        }],
        description: "\u4e00\u5ea6\u3001\u304a\u8a66\u3057\u3067\u3054\u5229\u7528\u3044\u305f\u3060\u3044\u305f\u5f8c\u306b\u3001\u5b9a\u671f\u3067\u306e\u304a\u7533\u3057\u8fbc\u307f\u3092\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002\u307e\u305a\u30de\u30a4\u30da\u30fc\u30b8\u306b\u767b\u9332\u3057\u3066\u3001\u304a\u8a66\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u3092\u304a\u7533\u8fbc\u304f\u3060\u3055\u3044\u3002",
        note: "\u203b\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u30a8\u30ea\u30a2\u5916\u306b\u304a\u4f4f\u307e\u3044\u306e\u65b9\uff1a\u65b0\u898f\u767b\u9332\u3057\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3068\u3001\u304a\u4f4f\u307e\u3044\u306e\u30a8\u30ea\u30a2\u3067\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u304c\u958b\u59cb\u3055\u308c\u305f\u6642\u70b9\u3067\u3001\u767b\u9332\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u958b\u59cb\u306e\u3054\u6848\u5185\u3092\u914d\u4fe1\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059"
      }
      , g = {
        content: "\u4eca\u306e\u5bb6\u4e8b\u4ee3\u884c\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u5909\u3048\u3001\u8ab0\u3082\u304c\u6c17\u8efd\u306b\u5bb6\u4e8b\u4ee3\u884c\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3002\u69d8\u3005\u306a\u8996\u70b9\u304b\u3089\u5bb6\u4e8b\u4ee3\u884c\u3092\u898b\u3064\u3081\u76f4\u3057\u3066\u3044\u304f\u3002"
      }
      , m = {
        menuItems: [{
          title: "\u65e5\u7a0b\u306b\u3064\u3044\u3066",
          messages: [{
            text: "\u6708\uff12\u56de\u306e\u3054\u5229\u7528\u306e\u5834\u5408\u3001\u7b2c\uff11\u30fb\uff13\u9031\u76ee\u53c8\u306f\u7b2c\uff12\u30fb\uff14\u9031\u76ee\u306e\u8a2a\u554f\u3068\u306a\u308a\u3001\u7b2c\uff15\u9031\u76ee\u306e\u8a2a\u554f\u306f\u3054\u3056\u3044\u307e\u305b\u3093\u3002\uff08\uff12\u9031\u304a\u304d\u306e\u8a2a\u554f\u306f\u3067\u304d\u304b\u306d\u307e\u3059\u3002\uff09"
          }, {
            text: "\u9031\u306e\u6570\u3048\u65b9",
            weekDefinitions: [{
              week: "\u7b2c1\u9031\u76ee",
              definition: "\u6bce\u67081\u65e5\uff5e7\u65e5"
            }, {
              week: "\u7b2c2\u9031\u76ee",
              definition: "\u6bce\u67088\u65e5\uff5e14\u65e5"
            }, {
              week: "\u7b2c3\u9031\u76ee",
              definition: "\u6bce\u670815\u65e5\uff5e12\u65e5"
            }, {
              week: "\u7b2c4\u9031\u76ee",
              definition: "\u6bce\u670822\u65e5\uff5e28\u65e5"
            }]
          }, {
            text: "\u3054\u5951\u7d04\u306e\u9014\u4e2d\u3067\u30d7\u30e9\u30f3\uff08\u983b\u5ea6\u30fb\u6642\u9593\uff09\u3084\u5229\u7528\u65e5\u6642\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u304c\u5909\u66f4\u306b\u306a\u308b\u3053\u3068\u3084\u3054\u5e0c\u671b\u65e5\u6642\u306b\u7a7a\u304d\u304c\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u3001\u3054\u5229\u7528\u3092\u304a\u5f85\u3061\u3044\u305f\u3060\u304f\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002"
          }, {
            text: "\u5f53\u65e5\u306e\u304a\u7533\u3057\u51fa\u306b\u3088\u308b\u6642\u9593\u5ef6\u9577\u306f\u3054\u5bfe\u5fdc\u3067\u304d\u304b\u306d\u307e\u3059\u3002"
          }]
        }, {
          title: "\u304a\u4f11\u307f\u30fb\u632f\u66ff\u306b\u3064\u3044\u3066",
          messages: [{
            text: "\u795d\u65e5\u3001\u5e74\u672b\u5e74\u59cb\u306f\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u3092\u304a\u4f11\u307f\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
          }, {
            text: "\u632f\u66ff\u306f\u62c5\u5f53\u8005\u304c\u5bfe\u5fdc\u53ef\u80fd\u306a\u5834\u5408\u306e\u307f\u627f\u308a\u307e\u3059\u3002\u203b"
          }]
        }, {
          title: "\u304a\u652f\u6255\u3044\u306b\u3064\u3044\u3066",
          messages: [{
            text: "\u3054\u767b\u9332\u306e\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u3088\u308a\u3001\u3054\u5229\u7528\u306e\u90fd\u5ea6\u3001\u6c7a\u6e08\u3044\u305f\u3057\u307e\u3059\u3002"
          }, {
            text: "\u9818\u53ce\u66f8\u306f\u30de\u30a4\u30da\u30fc\u30b8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u3059\u3002"
          }]
        }, {
          title: "\u30ad\u30e3\u30f3\u30bb\u30eb\u306b\u3064\u3044\u3066",
          messages: [{
            text: "\u3054\u5229\u7528\u65e5\uff13\u65e5\u524d\u6b63\u5348\u4ee5\u964d\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u306f1\u56de\u5206\u306e\u3054\u5229\u7528\u6599\u91d1\uff08\u7a0e\u8fbc\uff09\u306e50%\u3092\u3054\u8ca0\u62c5\u3044\u305f\u3060\u304d\u307e\u3059\u3002\u5229\u7528\u958b\u59cb\u6642\u523b\u304b\u308915\u5206\u9023\u7d61\u306e\u53d6\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u3001\u3054\u5229\u7528\u6599\u91d1\u5168\u984d\u8ca0\u62c5\u3067\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u6271\u3044\u3068\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
          }]
        }]
      }
      , u = {
        cleaningToolMain: {
          size: "normal",
          title: {
            title: "\u5404\u7a2e\u5171\u901a\u7b87\u6240",
            fill: !0
          },
          tools: [{
            src: "/images/homepage/cleaningtools_icon_garbage_bag.png",
            caption: "\u30b4\u30df\u888b"
          }, {
            src: "/images/homepage/cleaningtools_icon_dust_cloth.png",
            caption: "\u96d1\u5dfe",
            note: "\u203b\u6383\u9664\u7b87\u6240\u5206\u306e\u679a\u6570"
          }, {
            src: "/images/homepage/cleaningtools_icon_microfiber_cloth.png",
            caption: "\u30de\u30a4\u30af\u30ed\u30d5\u30a1\u30a4\u30d0\u30fc\u30af\u30ed\u30b9",
            note: "\u203b\u6383\u9664\u7b87\u6240\u5206\u306e\u679a\u6570"
          }]
        },
        cleaningToolSubs: [{
          size: "small",
          title: {
            title: "\u30ea\u30d3\u30f3\u30b0\u30fb\u30c0\u30a4\u30cb\u30f3\u30b0",
            fill: !1
          },
          tools: [{
            src: "/images/homepage/cleaningtools_icon_cleaner.png",
            caption: "\u6383\u9664\u6a5f"
          }, {
            src: "/images/homepage/cleaningtools_icon_flooring_wiper.png",
            caption: "\u30d5\u30ed\u30fc\u30ea\u30f3\u30b0\u30ef\u30a4\u30d1\u30fc"
          }, {
            src: "/images/homepage/cleaningtools_icon_handy_mop.png",
            caption: "\u30cf\u30f3\u30c7\u30a3\u30e2\u30c3\u30d7"
          }]
        }, {
          size: "small",
          title: {
            title: "\u30ad\u30c3\u30c1\u30f3",
            fill: !1
          },
          tools: [{
            src: "/images/homepage/cleaningtools_icon_oil_cleaner.png",
            caption: "\u6cb9\u6c5a\u308c\u7528\u6d17\u5264"
          }, {
            src: "/images/homepage/cleaningtools_icon_kitchen_sponge.png",
            caption: "\u30b9\u30dd\u30f3\u30b8"
          }, {
            src: "/images/homepage/cleaningtools_icon_kitchen_paper.png",
            caption: "\u30ad\u30c3\u30c1\u30f3\u30da\u30fc\u30d1\u30fc"
          }]
        }, {
          size: "small",
          title: {
            title: "\u304a\u98a8\u5442\u30fb\u6d17\u9762\u6240",
            fill: !1
          },
          tools: [{
            src: "/images/homepage/cleaningtools_icon_bath_cleaner.png",
            caption: "\u304a\u98a8\u5442\u7528\u6d17\u5264"
          }, {
            src: "/images/homepage/cleaningtools_icon_bath_brush.png",
            caption: "\u304a\u98a8\u5442\u7528\u30d6\u30e9\u30b7"
          }, {
            src: "/images/homepage/cleaningtools_icon_bath_sponge.png",
            caption: "\u30b9\u30dd\u30f3\u30b8"
          }]
        }, {
          size: "small",
          title: {
            title: "\u304a\u624b\u6d17\u3044",
            fill: !1
          },
          tools: [{
            src: "/images/homepage/cleaningtools_icon_bath_cleaner.png",
            caption: "\u30c8\u30a4\u30ec\u7528\u6d17\u5264"
          }, {
            src: "/images/homepage/cleaningtools_icon_bath_brush.png",
            caption: "\u30c8\u30a4\u30ec\u7528\u30d6\u30e9\u30b7"
          }, {
            src: "/images/homepage/cleaningtools_icon_bath_sponge.png",
            caption: "\u30c8\u30a4\u30ec\u7528\u30a6\u30a8\u30c3\u30c8\u30b7\u30fc\u30c8"
          }]
        }],
        noticeMessages: [{
          message: "\u3054\u63d0\u4f9b\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306f\u300c\u5bb6\u4e8b\u4ee3\u884c\u300d\u3067\u3042\u308a\u3001\u5c02\u9580\u6a5f\u5668\u3092\u4f7f\u7528\u3057\u5c02\u9580\u696d\u8005\u304c\u304a\u3053\u306a\u3046\u300c\u30cf\u30a6\u30b9\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u300d\u3068\u306f\u7570\u306a\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u30e1\u30cb\u30e5\u30fc\u306f\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u5bfe\u8c61\u5916\u3068\u306a\u308a\u307e\u3059\u3002",
          caution: "\u30fb\u30a8\u30a2\u30b3\u30f3\u6383\u9664\u3000\u30fb\u30ad\u30c3\u30c1\u30f3\u30ec\u30f3\u30b8\u30d5\u30fc\u30c9\uff08\u62ed\u304d\u6383\u9664\u306e\u307f\u306f\u53ef\uff09\u30fb\u6d74\u69fd\u30a8\u30d7\u30ed\u30f3\u5185\u6d17\u6d44\u3000\u30fb\u6d74\u5ba4\u93e1\u306e\u3046\u308d\u3053\u53d6\u308a \u30fb\u53f0\u306b\u4e57\u3063\u3066\u4f5c\u696d\u3092\u3059\u308b\u69d8\u306a\u9ad8\u6240\u4f5c\u696d\uff08\u9ad8\u6240\u7a93\u3084\u6d74\u69fd\u5929\u4e95\u306a\u3069\uff09"
        }, {
          message: "\u30da\u30c3\u30c8\u3092\u5ba4\u5185\u306b\u3066\u98fc\u308f\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b1\u30fc\u30b8\u306b\u5165\u308c\u3066\u3044\u305f\u3060\u304f\u3053\u3068\u3067\u30b5\u30fc\u30d3\u30b9\u306e\u63d0\u4f9b\u304c\u53ef\u80fd\u3067\u3059\u3002\uff08\u5ba4\u5185\u3067\u653e\u3057\u98fc\u3044\u306b\u3055\u308c\u3066\u3044\u308b\u72b6\u614b\u3067\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\uff09"
        }, {
          message: "\u73fe\u91d1\u3001\u6709\u4fa1\u8a3c\u5238\u3001\u8cb4\u91d1\u5c5e\u3001\u7f8e\u8853\u54c1\u3001\u8cb4\u91cd\u54c1\u7b49\u306b\u3064\u3044\u3066\u306f\u3001\u4f9d\u983c\u8005\u306e\u8cac\u4efb\u306b\u304a\u3044\u3066\u53b3\u91cd\u306a\u7ba1\u7406\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"
        }, {
          message: "30min.\u5229\u7528\u306e\u524d\u5f8c\u3092\u554f\u308f\u305a\u3001\u5f0a\u793e\u306e\u7d39\u4ecb\u306b\u3088\u3063\u3066\u77e5\u308a\u5f97\u305f\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306b\u5bfe\u3057\u3066\u3001\u76f4\u63a5\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u3092\u4f9d\u983c\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"
        }]
      }
      , d = {
        keyBoxes: [{
          title: "__\u8a2a\u554f\u6642\u306b\u3054\u5728\u5b85__\u306e\u5834\u5408",
          description: "\u8a2a\u554f\u3057\u305f\u62c5\u5f53\u30cf\u30a6\u30b9\u30ad\u30fc\u30d1\u30fc\u306b\u9375\u3092\u304a\u9810\u3051\u304f\u3060\u3055\u3044\u3002",
          color: "green"
        }, {
          title: "__\u8a2a\u554f\u6642\u306b\u3054\u4e0d\u5728__\u306e\u5834\u5408",
          description: "\u8a18\u9332\u30fb\u8ffd\u8de1\u306e\u3067\u304d\u308b\u65b9\u6cd5\u3067\u3001\u9375\u309230min.\u4e8b\u52d9\u5c40\u307e\u3067\u304a\u9001\u308a\u304f\u3060\u3055\u3044\u3002",
          color: "yellow"
        }]
      }
      , h = {
        snsList: [{
          media: "instagram",
          url: "https://www.instagram.com/30min._official/"
        }, {
          media: "facebook",
          url: "https://www.facebook.com/30min.HousekeepingService"
        }],
        linkList: [{
          name: "\u7279\u5b9a\u5546\u53d6\u5f15\u306b\u57fa\u3065\u304f\u8868\u8a18",
          url: "https://f.hubspotusercontent30.net/hubfs/7085787/%E7%89%B9%E5%AE%9A%E5%95%86%E5%8F%96%E5%BC%95%E3%81%AB%E4%BF%82%E3%82%8B%E6%A8%99%E8%A8%98.pdf"
        }, {
          name: "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
          url: "https://www.mec.co.jp/privacy/"
        }, {
          name: "\u904b\u55b6\u4f1a\u793e",
          url: "https://www.mec.co.jp/"
        }],
        contact: {
          name: "\u304a\u554f\u5408\u305b\u306f\u30b3\u30c1\u30e9",
          url: "mailto: thirty-min@mec.co.jp"
        }
      }
      , _ = {
        link: "https://www.mec.co.jp/"
      }
      , f = {
        courseMenuBlocks: [{
          title: "30\u5206\u30b3\u30fc\u30b9",
          message: "__\u3069\u3061\u3089\u304b\uff11\u7b87\u6240__\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002",
          courseMenus: [{
            name: "\u30ea\u30d3\u30f3\u30b0\u30fb\u30c0\u30a4\u30cb\u30f3\u30b0",
            time: "30\u5206"
          }, {
            name: "\u6d17\u9762\u6240\u30fb\u304a\u624b\u6d17\u3044",
            time: "30\u5206"
          }]
        }, {
          title: "60\u301c180\u5206\u30b3\u30fc\u30b9",
          message: "\uff14\u7b87\u6240\u304b\u3089\u304a\u6383\u9664\u6642\u9593\u306b\u5fdc\u3058__\u8907\u6570\u7b87\u6240__\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002",
          courseMenus: [{
            name: "\u30ea\u30d3\u30f3\u30b0\u30fb\u30c0\u30a4\u30cb\u30f3\u30b0",
            time: "30\u5206"
          }, {
            name: "\u6d17\u9762\u6240\u30fb\u304a\u624b\u6d17\u3044",
            time: "30\u5206"
          }, {
            name: "\u304a\u98a8\u5442",
            time: "45\u5206~60\u5206"
          }, {
            name: "\u30ad\u30c3\u30c1\u30f3",
            time: "45\u5206~60\u5206"
          }]
        }],
        serviceMenus: [{
          title: "\u30ea\u30d3\u30f3\u30b0\u30fb\u30c0\u30a4\u30cb\u30f3\u30b0",
          time: "30\u5206",
          menus: [{
            src: "/images/homepage/service_menu_1_1.jpg",
            text: "\u7247\u4ed8\u3051 \uff08\u53ce\u7d0d\u30fb\u6574\u9813\uff09"
          }, {
            src: "/images/homepage/service_menu_1_2.jpg",
            text: "\u6383\u9664\u6a5f\u304c\u3051"
          }, {
            src: "/images/homepage/service_menu_1_3.jpg",
            text: "\u30d5\u30ed\u30fc\u30ea\u30f3\u30b0\u30ef\u30a4\u30d1\u30fc\u304c\u3051"
          }, {
            src: "/images/homepage/service_menu_1_4.jpg",
            text: "\u307b\u3053\u308a\u53d6\u308a"
          }]
        }, {
          title: "\u30ad\u30c3\u30c1\u30f3",
          time: "45~60\u5206",
          menus: [{
            src: "/images/homepage/service_menu_2_1.jpg",
            text: "\u30b7\u30f3\u30af\u307e\u308f\u308a"
          }, {
            src: "/images/homepage/service_menu_2_2.jpg",
            text: "\u30b3\u30f3\u30ed\u307e\u308f\u308a"
          }, {
            src: "/images/homepage/service_menu_2_3.jpg",
            text: "\u4f5c\u696d\u53f0"
          }, {
            src: "/images/homepage/service_menu_2_4.jpg",
            text: "\u58c1\u30fb\u68da\u62ed\u304d\u6383\u9664"
          }]
        }, {
          title: "\u304a\u98a8\u5442",
          time: "45~60\u5206",
          menus: [{
            src: "/images/homepage/service_menu_3_1.jpg",
            text: "\u6d74\u69fd"
          }, {
            src: "/images/homepage/service_menu_3_2.jpg",
            text: "\u6392\u6c34\u6e9d"
          }, {
            src: "/images/homepage/service_menu_3_3.jpg",
            text: "\u86c7\u53e3"
          }, {
            src: "/images/homepage/service_menu_3_4.jpg",
            text: "\u30c9\u30a2\uff0f\u5e8a\uff0f\u58c1"
          }]
        }, {
          title: "\u6d17\u9762\u6240\u30fb\u304a\u624b\u6d17\u3044",
          time: "30\u5206",
          menus: [{
            src: "/images/homepage/service_menu_4_1.jpg",
            text: "\u6d17\u9762\u30dc\u30a6\u30eb"
          }, {
            src: "/images/homepage/service_menu_4_5.jpg",
            text: "\u93e1"
          }, {
            src: "/images/homepage/service_menu_4_3.jpg",
            text: "\u4fbf\u5ea7\u30fb\u4fbf\u5668"
          }, {
            src: "/images/homepage/service_menu_4_4.jpg",
            text: "\u68da\uff0f\u5e8a"
          }]
        }],
        serviceCards: [{
          title: "\u7a93\u62ed\u304d",
          description: "\u5c4b\u5185\u306e\u624b\u304c\u5c4a\u304f\u7bc4\u56f2\uff08\u5b50\u3069\u3082\u306e\u624b\u57a2\u306a\u3069\uff09\u306f\u5bfe\u5fdc\u53ef\u80fd\u3067\u3059\u3002",
          note: "\u203b\u5b9a\u671f\u5951\u7d04\u3055\u308c\u3066\u3044\u308b\u304a\u5ba2\u69d8\u306e\u307f\u306e\u5bfe\u5fdc\u3068\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
        }, {
          title: "\u6d17\u6fef\u7269\u7573\u307f",
          description: "\u6642\u9593\u5185\u3067\u51fa\u6765\u308b\u7bc4\u56f2\u307e\u3067\u5bfe\u5fdc\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002"
        }, {
          title: "\u30ec\u30f3\u30b8\u30d5\u30fc\u30c9",
          description: "\u53d6\u308a\u5916\u3057\u3084\u5206\u89e3\u306f\u51fa\u6765\u307e\u305b\u3093\u3002\u624b\u304c\u5c4a\u304f\u7bc4\u56f2\u306e\u62ed\u304d\u6383\u9664\u307e\u3067\u5bfe\u5fdc\u53ef\u80fd\u3067\u3059\u3002"
        }, {
          title: "\u96d1\u5dfe\u304c\u3051",
          description: "\u30c0\u30a4\u30cb\u30f3\u30b0\u30c6\u30fc\u30d6\u30eb\u4e0b\u306a\u3069\u6c5a\u308c\u304c\u5f37\u3044\u90e8\u5206\u306f\u5bfe\u5fdc\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002\u5168\u9762\u306e\u5e8a\u62ed\u304d\u306f\u5e8a\u7528\u30a6\u30a7\u30c3\u30c8\u30b7\u30fc\u30c8\u3092\u63a8\u5968\u3057\u3066\u3044\u307e\u3059\u3002"
        }]
      }
      , x = {
        banner: {
          href: "/signup",
          image: "/images/homepage/sticky_banner_campaign_sp.png",
          pcImage: "/images/homepage/sticky_banner_campaign.png",
          alt: "\u304a\u8a66\u3057\u30ad\u30e3\u30f3\u30da\u30fc\u30f3"
        }
      }
      , b = {
        link: i
      }
  },
  2942: function (e, t, n) {
    n.d(t, {
      I: function () {
        return i
      }
    });
    var i = {
      BASE_TITLE: "\u4e09\u83f1\u5730\u6240\u306e\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9",
      DESCRIPTION: "30\u5206\u304b\u3089\u6c17\u8efd\u306b\u983c\u3081\u308b\u5b9a\u671f\u5bb6\u4e8b\u4ee3\u884c\u30b5\u30fc\u30d3\u30b9\u3002\u30ad\u30c3\u30c1\u30f3\u3060\u3051\u3001\u304a\u98a8\u5442\u3060\u3051\u3001\u305d\u3093\u306a\u30d4\u30f3\u30dd\u30a4\u30f3\u30c8\u306a\u3054\u4f9d\u983c\u3082OK\u3067\u3059\u3002\u3054\u5229\u7528\u983b\u5ea6\u3084\u3054\u5229\u7528\u6642\u9593\u306f\u30e9\u30a4\u30d5\u30b9\u30bf\u30a4\u30eb\u306b\u5408\u308f\u305b\u3066\u304a\u9078\u3073\u3044\u305f\u3060\u3051\u307e\u3059\u3002"
    }
  },
  1520: function (e, t, n) {
    var i;
    n.d(t, {
      I: function () {
        return i
      }
    }),
      function (e) {
        e.WHITE = "#fff",
          e.YELLOW = "#fff500",
          e.ALERT_RED = "#eb5757",
          e.READ_LIGHT = "#FF6F56",
          e.YELLOW_5 = "#C8C500",
          e.YELLOW_X_LIGHT = "#F2F1DF",
          e.YELLOW_X_DARK = "#736326",
          e.GREEN_BLUE = "#90cdc2",
          e.GREEN_X_DARK = "#75AC6C",
          e.GREEN_DARK = "#A5BE5F",
          e.ALERT_GREEN = "#3C964A",
          e.GREEN_LIGHT = "#e9f4e5",
          e.GREEN_DARK_LIGHT = "#a1ba72",
          e.GRAY_X_LIGHT = "#ebebeb",
          e.GRAY_LIGHT = "#ccc",
          e.GRAY_DARK = "#333333",
          e.GRAY_X_DARK = "#666666",
          e.TEXT_DARK = "#313233",
          e.NEWS_RED = "#FF6F56",
          e.BLUE_LIGHT = "#00a0fb"
      }(i || (i = {}))
  },
  777: function (e, t, n) {
    n.d(t, {
      AV: function () {
        return o
      },
      BC: function () {
        return r
      },
      rT: function () {
        return s
      }
    });
    var i = n(605)
      , o = {
        sp: "1116px"
      }
      , r = (0,
        i.Jq)(o)
      , s = (0,
        i.Jq)({
          sp: "490px"
        })
  }
}]);
