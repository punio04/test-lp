(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
  4036: function (e, t, n) {
    "use strict";
    n.d(t, {
      k1: function () {
        return c
      },
      l0: function () {
        return a
      }
    });
    var r, i = n(7294);
    !function (e) {
      e.ENGLISH = "en",
        e.DANISH = "da",
        e.GERMAN = "de",
        e.SPANISH = "es",
        e.SPANISH_MEXICO = "es-mx",
        e.FINNISH = "fi",
        e.FRENCH = "fr",
        e.ITALIAN = "it",
        e.JAPANESE = "ja",
        e.DUTCH = "nl",
        e.POLISH = "pl",
        e.PORTUGUESE = "pt-br",
        e.SWEDISH = "sv",
        e.CHINESE = "zh-cn",
        e.CHINESE_HONG_KONG = "zh-hk"
    }(r || (r = {}));
    var o = [];
    var s = (0,
      i.createContext)({
        loaded: !1,
        error: !1
      })
      , a = function (e) {
        var t = e.async
          , n = e.addToHead
          , r = e.children
          , a = function (e, t, n) {
            void 0 === t && (t = !0),
              void 0 === n && (n = !1);
            var r = (0,
              i.useState)(!1)
              , s = r[0]
              , a = r[1]
              , c = (0,
                i.useState)(!1)
              , u = c[0]
              , l = c[1];
            return (0,
              i.useEffect)((function () {
                if (!o.includes(e)) {
                  o.push(e);
                  var r = document.createElement("script");
                  r.src = e,
                    r.async = t;
                  var i = function () {
                    a(!0),
                      l(!1)
                  }
                    , s = function () {
                      var t = o.indexOf(e);
                      t >= 0 && o.splice(t, 1),
                        r.remove(),
                        a(!0),
                        l(!0)
                    };
                  return r.addEventListener("load", i),
                    r.addEventListener("error", s),
                    n ? document.head.appendChild(r) : document.body.appendChild(r),
                    function () {
                      r.removeEventListener("load", i),
                        r.removeEventListener("error", s)
                    }
                }
                a(!0),
                  l(!1)
              }
              ), [e]),
              [s, u]
          }("https://js.hsforms.net/forms/v2.js", t, n)
          , c = a[0]
          , u = a[1];
        return i.createElement(s.Provider, {
          value: {
            loaded: c,
            error: u
          }
        }, r)
      }
      , c = function (e) {
        var t = (0,
          i.useContext)(s)
          , n = t.loaded
          , r = t.error
          , o = (0,
            i.useState)(!1)
          , a = o[0]
          , c = o[1];
        return (0,
          i.useEffect)((function () {
            if ("undefined" !== typeof window && window) {
              var t = window;
              n && t.hbspt && !a && (t.hbspt.forms.create(e),
                c(!0))
            }
          }
          ), [n, a, c]),
        {
          loaded: n,
          formCreated: a,
          error: r
        }
      }
  },
  4444: function (e, t, n) {
    "use strict";
    n.d(t, {
      BH: function () {
        return p
      },
      L: function () {
        return a
      },
      LL: function () {
        return T
      },
      L_: function () {
        return _
      },
      Pz: function () {
        return f
      },
      ZR: function () {
        return S
      },
      aH: function () {
        return h
      },
      b$: function () {
        return y
      },
      eu: function () {
        return w
      },
      hl: function () {
        return E
      },
      m9: function () {
        return L
      },
      ne: function () {
        return P
      },
      pd: function () {
        return A
      },
      q4: function () {
        return d
      },
      ru: function () {
        return v
      },
      tV: function () {
        return c
      },
      uI: function () {
        return g
      },
      vZ: function () {
        return O
      },
      w1: function () {
        return b
      },
      xO: function () {
        return C
      },
      xb: function () {
        return I
      },
      z$: function () {
        return m
      },
      zd: function () {
        return N
      }
    });
    var r = n(4155);
    const i = function (e) {
      const t = [];
      let n = 0;
      for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
          t[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < e.length && 56320 === (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)),
            t[n++] = i >> 18 | 240,
            t[n++] = i >> 12 & 63 | 128,
            t[n++] = i >> 6 & 63 | 128,
            t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224,
              t[n++] = i >> 6 & 63 | 128,
              t[n++] = 63 & i | 128)
      }
      return t
    }
      , o = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" === typeof atob,
        encodeByteArray(e, t) {
          if (!Array.isArray(e))
            throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
            , r = [];
          for (let i = 0; i < e.length; i += 3) {
            const t = e[i]
              , o = i + 1 < e.length
              , s = o ? e[i + 1] : 0
              , a = i + 2 < e.length
              , c = a ? e[i + 2] : 0
              , u = t >> 2
              , l = (3 & t) << 4 | s >> 4;
            let d = (15 & s) << 2 | c >> 6
              , h = 63 & c;
            a || (h = 64,
              o || (d = 64)),
              r.push(n[u], n[l], n[d], n[h])
          }
          return r.join("")
        },
        encodeString(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(i(e), t)
        },
        decodeString(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) {
            const t = [];
            let n = 0
              , r = 0;
            for (; n < e.length;) {
              const i = e[n++];
              if (i < 128)
                t[r++] = String.fromCharCode(i);
              else if (i > 191 && i < 224) {
                const o = e[n++];
                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
              } else if (i > 239 && i < 365) {
                const o = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                t[r++] = String.fromCharCode(55296 + (o >> 10)),
                  t[r++] = String.fromCharCode(56320 + (1023 & o))
              } else {
                const o = e[n++]
                  , s = e[n++];
                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s)
              }
            }
            return t.join("")
          }(this.decodeStringToByteArray(e, t))
        },
        decodeStringToByteArray(e, t) {
          this.init_();
          const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
            , r = [];
          for (let i = 0; i < e.length;) {
            const t = n[e.charAt(i++)]
              , o = i < e.length ? n[e.charAt(i)] : 0;
            ++i;
            const a = i < e.length ? n[e.charAt(i)] : 64;
            ++i;
            const c = i < e.length ? n[e.charAt(i)] : 64;
            if (++i,
              null == t || null == o || null == a || null == c)
              throw new s;
            const u = t << 2 | o >> 4;
            if (r.push(u),
              64 !== a) {
              const e = o << 4 & 240 | a >> 2;
              if (r.push(e),
                64 !== c) {
                const e = a << 6 & 192 | c;
                r.push(e)
              }
            }
          }
          return r
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {},
              this.charToByteMap_ = {},
              this.byteToCharMapWebSafe_ = {},
              this.charToByteMapWebSafe_ = {};
            for (let e = 0; e < this.ENCODED_VALS.length; e++)
              this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                this.charToByteMap_[this.byteToCharMap_[e]] = e,
                this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                  this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
          }
        }
      };
    class s extends Error {
      constructor() {
        super(...arguments),
          this.name = "DecodeBase64StringError"
      }
    }
    const a = function (e) {
      return function (e) {
        const t = i(e);
        return o.encodeByteArray(t, !0)
      }(e).replace(/\./g, "")
    }
      , c = function (e) {
        try {
          return o.decodeString(e, !0)
        } catch (t) {
          console.error("base64Decode failed: ", t)
        }
        return null
      };
    const u = () => function () {
      if ("undefined" !== typeof self)
        return self;
      if ("undefined" !== typeof window)
        return window;
      if ("undefined" !== typeof n.g)
        return n.g;
      throw new Error("Unable to locate global object.")
    }().__FIREBASE_DEFAULTS__
      , l = () => {
        try {
          return u() || (() => {
            if ("undefined" === typeof r || "undefined" === typeof r.env)
              return;
            const e = r.env.__FIREBASE_DEFAULTS__;
            return e ? JSON.parse(e) : void 0
          }
          )() || (() => {
            if ("undefined" === typeof document)
              return;
            let e;
            try {
              e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (n) {
              return
            }
            const t = e && c(e[1]);
            return t && JSON.parse(t)
          }
          )()
        } catch (e) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
        }
      }
      , d = e => {
        var t, n;
        return null === (n = null === (t = l()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
      }
      , h = () => {
        var e;
        return null === (e = l()) || void 0 === e ? void 0 : e.config
      }
      , f = e => {
        var t;
        return null === (t = l()) || void 0 === t ? void 0 : t[`_${e}`]
      }
      ;
    class p {
      constructor() {
        this.reject = () => { }
          ,
          this.resolve = () => { }
          ,
          this.promise = new Promise(((e, t) => {
            this.resolve = e,
              this.reject = t
          }
          ))
      }
      wrapCallback(e) {
        return (t, n) => {
          t ? this.reject(t) : this.resolve(n),
            "function" === typeof e && (this.promise.catch((() => { }
            )),
              1 === e.length ? e(t) : e(t, n))
        }
      }
    }
    function m() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }
    function g() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())
    }
    function _() {
      return "undefined" !== typeof navigator && "Cloudflare-Workers" === navigator.userAgent
    }
    function v() {
      const e = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof e && void 0 !== e.id
    }
    function y() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }
    function b() {
      const e = m();
      return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
    }
    function E() {
      try {
        return "object" === typeof indexedDB
      } catch (e) {
        return !1
      }
    }
    function w() {
      return new Promise(((e, t) => {
        try {
          let n = !0;
          const r = "validate-browser-context-for-indexeddb-analytics-module"
            , i = self.indexedDB.open(r);
          i.onsuccess = () => {
            i.result.close(),
              n || self.indexedDB.deleteDatabase(r),
              e(!0)
          }
            ,
            i.onupgradeneeded = () => {
              n = !1
            }
            ,
            i.onerror = () => {
              var e;
              t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
            }
        } catch (n) {
          t(n)
        }
      }
      ))
    }
    class S extends Error {
      constructor(e, t, n) {
        super(t),
          this.code = e,
          this.customData = n,
          this.name = "FirebaseError",
          Object.setPrototypeOf(this, S.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, T.prototype.create)
      }
    }
    class T {
      constructor(e, t, n) {
        this.service = e,
          this.serviceName = t,
          this.errors = n
      }
      create(e, ...t) {
        const n = t[0] || {}
          , r = `${this.service}/${e}`
          , i = this.errors[e]
          , o = i ? function (e, t) {
            return e.replace(R, ((e, n) => {
              const r = t[n];
              return null != r ? String(r) : `<${n}?>`
            }
            ))
          }(i, n) : "Error"
          , s = `${this.serviceName}: ${o} (${r}).`;
        return new S(r, s, n)
      }
    }
    const R = /\{\$([^}]+)}/g;
    function I(e) {
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
          return !1;
      return !0
    }
    function O(e, t) {
      if (e === t)
        return !0;
      const n = Object.keys(e)
        , r = Object.keys(t);
      for (const i of n) {
        if (!r.includes(i))
          return !1;
        const n = e[i]
          , o = t[i];
        if (k(n) && k(o)) {
          if (!O(n, o))
            return !1
        } else if (n !== o)
          return !1
      }
      for (const i of r)
        if (!n.includes(i))
          return !1;
      return !0
    }
    function k(e) {
      return null !== e && "object" === typeof e
    }
    function C(e) {
      const t = [];
      for (const [n, r] of Object.entries(e))
        Array.isArray(r) ? r.forEach((e => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
        }
        )) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
      return t.length ? "&" + t.join("&") : ""
    }
    function N(e) {
      const t = {};
      return e.replace(/^\?/, "").split("&").forEach((e => {
        if (e) {
          const [n, r] = e.split("=");
          t[decodeURIComponent(n)] = decodeURIComponent(r)
        }
      }
      )),
        t
    }
    function A(e) {
      const t = e.indexOf("?");
      if (!t)
        return "";
      const n = e.indexOf("#", t);
      return e.substring(t, n > 0 ? n : void 0)
    }
    function P(e, t) {
      const n = new D(e, t);
      return n.subscribe.bind(n)
    }
    class D {
      constructor(e, t) {
        this.observers = [],
          this.unsubscribes = [],
          this.observerCount = 0,
          this.task = Promise.resolve(),
          this.finalized = !1,
          this.onNoObservers = t,
          this.task.then((() => {
            e(this)
          }
          )).catch((e => {
            this.error(e)
          }
          ))
      }
      next(e) {
        this.forEachObserver((t => {
          t.next(e)
        }
        ))
      }
      error(e) {
        this.forEachObserver((t => {
          t.error(e)
        }
        )),
          this.close(e)
      }
      complete() {
        this.forEachObserver((e => {
          e.complete()
        }
        )),
          this.close()
      }
      subscribe(e, t, n) {
        let r;
        if (void 0 === e && void 0 === t && void 0 === n)
          throw new Error("Missing Observer.");
        r = function (e, t) {
          if ("object" !== typeof e || null === e)
            return !1;
          for (const n of t)
            if (n in e && "function" === typeof e[n])
              return !0;
          return !1
        }(e, ["next", "error", "complete"]) ? e : {
          next: e,
          error: t,
          complete: n
        },
          void 0 === r.next && (r.next = x),
          void 0 === r.error && (r.error = x),
          void 0 === r.complete && (r.complete = x);
        const i = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? r.error(this.finalError) : r.complete()
          } catch (e) { }
        }
        )),
          this.observers.push(r),
          i
      }
      unsubscribeOne(e) {
        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
          this.observerCount -= 1,
          0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(e) {
        if (!this.finalized)
          for (let t = 0; t < this.observers.length; t++)
            this.sendOne(t, e)
      }
      sendOne(e, t) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[e])
            try {
              t(this.observers[e])
            } catch (n) {
              "undefined" !== typeof console && console.error && console.error(n)
            }
        }
        ))
      }
      close(e) {
        this.finalized || (this.finalized = !0,
          void 0 !== e && (this.finalError = e),
          this.task.then((() => {
            this.observers = void 0,
              this.onNoObservers = void 0
          }
          )))
      }
    }
    function x() { }
    function L(e) {
      return e && e._delegate ? e._delegate : e
    }
  },
  1131: function (e, t, n) {
    "use strict";
    n.d(t, {
      J: function () {
        return r
      }
    });
    const r = "production"
  },
  1195: function (e, t, n) {
    "use strict";
    n.d(t, {
      RP: function () {
        return u
      },
      cc: function () {
        return c
      },
      fH: function () {
        return a
      }
    });
    var r = n(1235)
      , i = n(6893)
      , o = n(2343)
      , s = n(7597);
    function a() {
      return (0,
        r.YO)("globalEventProcessors", (() => []))
    }
    function c(e) {
      a().push(e)
    }
    function u(e, t, n, r = 0) {
      return new i.cW(((i, a) => {
        const c = e[r];
        if (null === t || "function" !== typeof c)
          i(t);
        else {
          const l = c({
            ...t
          }, n);
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === l && o.kg.log(`Event processor "${c.id}" dropped event`),
            (0,
              s.J8)(l) ? l.then((t => u(e, t, n, r + 1).then(i))).then(null, a) : u(e, l, n, r + 1).then(i).then(null, a)
        }
      }
      ))
    }
  },
  4487: function (e, t, n) {
    "use strict";
    n.d(t, {
      $e: function () {
        return s
      },
      Tb: function () {
        return i
      },
      e: function () {
        return o
      }
    });
    var r = n(5659);
    function i(e, t) {
      return (0,
        r.Gd)().captureException(e, {
          captureContext: t
        })
    }
    function o(e) {
      (0,
        r.Gd)().configureScope(e)
    }
    function s(e) {
      (0,
        r.Gd)().withScope(e)
    }
  },
  5659: function (e, t, n) {
    "use strict";
    n.d(t, {
      Gd: function () {
        return p
      },
      cu: function () {
        return h
      }
    });
    var r = n(2844)
      , i = n(1170)
      , o = n(2343)
      , s = n(1235)
      , a = n(1131)
      , c = n(350)
      , u = n(9015);
    const l = 100;
    class d {
      constructor(e, t = new c.s, n = 4) {
        this._version = n,
          this._stack = [{
            scope: t
          }],
          e && this.bindClient(e)
      }
      isOlderThan(e) {
        return this._version < e
      }
      bindClient(e) {
        this.getStackTop().client = e,
          e && e.setupIntegrations && e.setupIntegrations()
      }
      pushScope() {
        const e = c.s.clone(this.getScope());
        return this.getStack().push({
          client: this.getClient(),
          scope: e
        }),
          e
      }
      popScope() {
        return !(this.getStack().length <= 1) && !!this.getStack().pop()
      }
      withScope(e) {
        const t = this.pushScope();
        try {
          e(t)
        } finally {
          this.popScope()
        }
      }
      getClient() {
        return this.getStackTop().client
      }
      getScope() {
        return this.getStackTop().scope
      }
      getStack() {
        return this._stack
      }
      getStackTop() {
        return this._stack[this._stack.length - 1]
      }
      captureException(e, t) {
        const n = this._lastEventId = t && t.event_id ? t.event_id : (0,
          r.DM)()
          , i = new Error("Sentry syntheticException");
        return this._withClient(((r, o) => {
          r.captureException(e, {
            originalException: e,
            syntheticException: i,
            ...t,
            event_id: n
          }, o)
        }
        )),
          n
      }
      captureMessage(e, t, n) {
        const i = this._lastEventId = n && n.event_id ? n.event_id : (0,
          r.DM)()
          , o = new Error(e);
        return this._withClient(((r, s) => {
          r.captureMessage(e, t, {
            originalException: e,
            syntheticException: o,
            ...n,
            event_id: i
          }, s)
        }
        )),
          i
      }
      captureEvent(e, t) {
        const n = t && t.event_id ? t.event_id : (0,
          r.DM)();
        return e.type || (this._lastEventId = n),
          this._withClient(((r, i) => {
            r.captureEvent(e, {
              ...t,
              event_id: n
            }, i)
          }
          )),
          n
      }
      lastEventId() {
        return this._lastEventId
      }
      addBreadcrumb(e, t) {
        const { scope: n, client: r } = this.getStackTop();
        if (!r)
          return;
        const { beforeBreadcrumb: s = null, maxBreadcrumbs: a = l } = r.getOptions && r.getOptions() || {};
        if (a <= 0)
          return;
        const c = {
          timestamp: (0,
            i.yW)(),
          ...e
        }
          , u = s ? (0,
            o.Cf)((() => s(c, t))) : c;
        null !== u && (r.emit && r.emit("beforeAddBreadcrumb", u, t),
          n.addBreadcrumb(u, a))
      }
      setUser(e) {
        this.getScope().setUser(e)
      }
      setTags(e) {
        this.getScope().setTags(e)
      }
      setExtras(e) {
        this.getScope().setExtras(e)
      }
      setTag(e, t) {
        this.getScope().setTag(e, t)
      }
      setExtra(e, t) {
        this.getScope().setExtra(e, t)
      }
      setContext(e, t) {
        this.getScope().setContext(e, t)
      }
      configureScope(e) {
        const { scope: t, client: n } = this.getStackTop();
        n && e(t)
      }
      run(e) {
        const t = f(this);
        try {
          e(this)
        } finally {
          f(t)
        }
      }
      getIntegration(e) {
        const t = this.getClient();
        if (!t)
          return null;
        try {
          return t.getIntegration(e)
        } catch (n) {
          return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
            null
        }
      }
      startTransaction(e, t) {
        const n = this._callExtensionMethod("startTransaction", e, t);
        if (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n) {
          this.getClient() ? console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : console.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
        }
        return n
      }
      traceHeaders() {
        return this._callExtensionMethod("traceHeaders")
      }
      captureSession(e = !1) {
        if (e)
          return this.endSession();
        this._sendSessionUpdate()
      }
      endSession() {
        const e = this.getStackTop().scope
          , t = e.getSession();
        t && (0,
          u.RJ)(t),
          this._sendSessionUpdate(),
          e.setSession()
      }
      startSession(e) {
        const { scope: t, client: n } = this.getStackTop()
          , { release: r, environment: i = a.J } = n && n.getOptions() || {}
          , { userAgent: o } = s.n2.navigator || {}
          , c = (0,
            u.Hv)({
              release: r,
              environment: i,
              user: t.getUser(),
              ...o && {
                userAgent: o
              },
              ...e
            })
          , l = t.getSession && t.getSession();
        return l && "ok" === l.status && (0,
          u.CT)(l, {
            status: "exited"
          }),
          this.endSession(),
          t.setSession(c),
          c
      }
      shouldSendDefaultPii() {
        const e = this.getClient()
          , t = e && e.getOptions();
        return Boolean(t && t.sendDefaultPii)
      }
      _sendSessionUpdate() {
        const { scope: e, client: t } = this.getStackTop()
          , n = e.getSession();
        n && t && t.captureSession && t.captureSession(n)
      }
      _withClient(e) {
        const { scope: t, client: n } = this.getStackTop();
        n && e(n, t)
      }
      _callExtensionMethod(e, ...t) {
        const n = h().__SENTRY__;
        if (n && n.extensions && "function" === typeof n.extensions[e])
          return n.extensions[e].apply(this, t);
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn(`Extension method ${e} couldn't be found, doing nothing.`)
      }
    }
    function h() {
      return s.n2.__SENTRY__ = s.n2.__SENTRY__ || {
        extensions: {},
        hub: void 0
      },
        s.n2
    }
    function f(e) {
      const t = h()
        , n = _(t);
      return v(t, e),
        n
    }
    function p() {
      const e = h();
      if (e.__SENTRY__ && e.__SENTRY__.acs) {
        const t = e.__SENTRY__.acs.getCurrentHub();
        if (t)
          return t
      }
      return m(e)
    }
    function m(e = h()) {
      return g(e) && !_(e).isOlderThan(4) || v(e, new d),
        _(e)
    }
    function g(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }
    function _(e) {
      return (0,
        s.YO)("hub", (() => new d), e)
    }
    function v(e, t) {
      if (!e)
        return !1;
      return (e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
        !0
    }
  },
  350: function (e, t, n) {
    "use strict";
    n.d(t, {
      s: function () {
        return c
      }
    });
    var r = n(7597)
      , i = n(1170)
      , o = n(2844)
      , s = n(1195)
      , a = n(9015);
    class c {
      constructor() {
        this._notifyingListeners = !1,
          this._scopeListeners = [],
          this._eventProcessors = [],
          this._breadcrumbs = [],
          this._attachments = [],
          this._user = {},
          this._tags = {},
          this._extra = {},
          this._contexts = {},
          this._sdkProcessingMetadata = {},
          this._propagationContext = u()
      }
      static clone(e) {
        const t = new c;
        return e && (t._breadcrumbs = [...e._breadcrumbs],
          t._tags = {
            ...e._tags
          },
          t._extra = {
            ...e._extra
          },
          t._contexts = {
            ...e._contexts
          },
          t._user = e._user,
          t._level = e._level,
          t._span = e._span,
          t._session = e._session,
          t._transactionName = e._transactionName,
          t._fingerprint = e._fingerprint,
          t._eventProcessors = [...e._eventProcessors],
          t._requestSession = e._requestSession,
          t._attachments = [...e._attachments],
          t._sdkProcessingMetadata = {
            ...e._sdkProcessingMetadata
          },
          t._propagationContext = {
            ...e._propagationContext
          }),
          t
      }
      addScopeListener(e) {
        this._scopeListeners.push(e)
      }
      addEventProcessor(e) {
        return this._eventProcessors.push(e),
          this
      }
      setUser(e) {
        return this._user = e || {},
          this._session && (0,
            a.CT)(this._session, {
              user: e
            }),
          this._notifyScopeListeners(),
          this
      }
      getUser() {
        return this._user
      }
      getRequestSession() {
        return this._requestSession
      }
      setRequestSession(e) {
        return this._requestSession = e,
          this
      }
      setTags(e) {
        return this._tags = {
          ...this._tags,
          ...e
        },
          this._notifyScopeListeners(),
          this
      }
      setTag(e, t) {
        return this._tags = {
          ...this._tags,
          [e]: t
        },
          this._notifyScopeListeners(),
          this
      }
      setExtras(e) {
        return this._extra = {
          ...this._extra,
          ...e
        },
          this._notifyScopeListeners(),
          this
      }
      setExtra(e, t) {
        return this._extra = {
          ...this._extra,
          [e]: t
        },
          this._notifyScopeListeners(),
          this
      }
      setFingerprint(e) {
        return this._fingerprint = e,
          this._notifyScopeListeners(),
          this
      }
      setLevel(e) {
        return this._level = e,
          this._notifyScopeListeners(),
          this
      }
      setTransactionName(e) {
        return this._transactionName = e,
          this._notifyScopeListeners(),
          this
      }
      setContext(e, t) {
        return null === t ? delete this._contexts[e] : this._contexts[e] = t,
          this._notifyScopeListeners(),
          this
      }
      setSpan(e) {
        return this._span = e,
          this._notifyScopeListeners(),
          this
      }
      getSpan() {
        return this._span
      }
      getTransaction() {
        const e = this.getSpan();
        return e && e.transaction
      }
      setSession(e) {
        return e ? this._session = e : delete this._session,
          this._notifyScopeListeners(),
          this
      }
      getSession() {
        return this._session
      }
      update(e) {
        if (!e)
          return this;
        if ("function" === typeof e) {
          const t = e(this);
          return t instanceof c ? t : this
        }
        return e instanceof c ? (this._tags = {
          ...this._tags,
          ...e._tags
        },
          this._extra = {
            ...this._extra,
            ...e._extra
          },
          this._contexts = {
            ...this._contexts,
            ...e._contexts
          },
          e._user && Object.keys(e._user).length && (this._user = e._user),
          e._level && (this._level = e._level),
          e._fingerprint && (this._fingerprint = e._fingerprint),
          e._requestSession && (this._requestSession = e._requestSession),
          e._propagationContext && (this._propagationContext = e._propagationContext)) : (0,
            r.PO)(e) && (this._tags = {
              ...this._tags,
              ...e.tags
            },
              this._extra = {
                ...this._extra,
                ...e.extra
              },
              this._contexts = {
                ...this._contexts,
                ...e.contexts
              },
              e.user && (this._user = e.user),
              e.level && (this._level = e.level),
              e.fingerprint && (this._fingerprint = e.fingerprint),
              e.requestSession && (this._requestSession = e.requestSession),
              e.propagationContext && (this._propagationContext = e.propagationContext)),
          this
      }
      clear() {
        return this._breadcrumbs = [],
          this._tags = {},
          this._extra = {},
          this._user = {},
          this._contexts = {},
          this._level = void 0,
          this._transactionName = void 0,
          this._fingerprint = void 0,
          this._requestSession = void 0,
          this._span = void 0,
          this._session = void 0,
          this._notifyScopeListeners(),
          this._attachments = [],
          this._propagationContext = u(),
          this
      }
      addBreadcrumb(e, t) {
        const n = "number" === typeof t ? t : 100;
        if (n <= 0)
          return this;
        const r = {
          timestamp: (0,
            i.yW)(),
          ...e
        }
          , o = this._breadcrumbs;
        return o.push(r),
          this._breadcrumbs = o.length > n ? o.slice(-n) : o,
          this._notifyScopeListeners(),
          this
      }
      getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
      }
      clearBreadcrumbs() {
        return this._breadcrumbs = [],
          this._notifyScopeListeners(),
          this
      }
      addAttachment(e) {
        return this._attachments.push(e),
          this
      }
      getAttachments() {
        return this._attachments
      }
      clearAttachments() {
        return this._attachments = [],
          this
      }
      applyToEvent(e, t = {}, n) {
        if (this._extra && Object.keys(this._extra).length && (e.extra = {
          ...this._extra,
          ...e.extra
        }),
          this._tags && Object.keys(this._tags).length && (e.tags = {
            ...this._tags,
            ...e.tags
          }),
          this._user && Object.keys(this._user).length && (e.user = {
            ...this._user,
            ...e.user
          }),
          this._contexts && Object.keys(this._contexts).length && (e.contexts = {
            ...this._contexts,
            ...e.contexts
          }),
          this._level && (e.level = this._level),
          this._transactionName && (e.transaction = this._transactionName),
          this._span) {
          e.contexts = {
            trace: this._span.getTraceContext(),
            ...e.contexts
          };
          const t = this._span.transaction;
          if (t) {
            e.sdkProcessingMetadata = {
              dynamicSamplingContext: t.getDynamicSamplingContext(),
              ...e.sdkProcessingMetadata
            };
            const n = t.name;
            n && (e.tags = {
              transaction: n,
              ...e.tags
            })
          }
        }
        this._applyFingerprint(e);
        const r = this._getBreadcrumbs()
          , i = [...e.breadcrumbs || [], ...r];
        return e.breadcrumbs = i.length > 0 ? i : void 0,
          e.sdkProcessingMetadata = {
            ...e.sdkProcessingMetadata,
            ...this._sdkProcessingMetadata,
            propagationContext: this._propagationContext
          },
          (0,
            s.RP)([...n || [], ...(0,
              s.fH)(), ...this._eventProcessors], e, t)
      }
      setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata,
          ...e
        },
          this
      }
      setPropagationContext(e) {
        return this._propagationContext = e,
          this
      }
      getPropagationContext() {
        return this._propagationContext
      }
      _getBreadcrumbs() {
        return this._breadcrumbs
      }
      _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
          this._scopeListeners.forEach((e => {
            e(this)
          }
          )),
          this._notifyingListeners = !1)
      }
      _applyFingerprint(e) {
        e.fingerprint = e.fingerprint ? (0,
          o.lE)(e.fingerprint) : [],
          this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
          e.fingerprint && !e.fingerprint.length && delete e.fingerprint
      }
    }
    function u() {
      return {
        traceId: (0,
          o.DM)(),
        spanId: (0,
          o.DM)().substring(16)
      }
    }
  },
  9015: function (e, t, n) {
    "use strict";
    n.d(t, {
      CT: function () {
        return a
      },
      Hv: function () {
        return s
      },
      RJ: function () {
        return c
      }
    });
    var r = n(1170)
      , i = n(2844)
      , o = n(535);
    function s(e) {
      const t = (0,
        r.ph)()
        , n = {
          sid: (0,
            i.DM)(),
          init: !0,
          timestamp: t,
          started: t,
          duration: 0,
          status: "ok",
          errors: 0,
          ignoreDuration: !1,
          toJSON: () => function (e) {
            return (0,
              o.Jr)({
                sid: `${e.sid}`,
                init: e.init,
                started: new Date(1e3 * e.started).toISOString(),
                timestamp: new Date(1e3 * e.timestamp).toISOString(),
                status: e.status,
                errors: e.errors,
                did: "number" === typeof e.did || "string" === typeof e.did ? `${e.did}` : void 0,
                duration: e.duration,
                abnormal_mechanism: e.abnormal_mechanism,
                attrs: {
                  release: e.release,
                  environment: e.environment,
                  ip_address: e.ipAddress,
                  user_agent: e.userAgent
                }
              })
          }(n)
        };
      return e && a(n, e),
        n
    }
    function a(e, t = {}) {
      if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
        e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        e.timestamp = t.timestamp || (0,
          r.ph)(),
        t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0,
          i.DM)()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        "number" === typeof t.started && (e.started = t.started),
        e.ignoreDuration)
        e.duration = void 0;
      else if ("number" === typeof t.duration)
        e.duration = t.duration;
      else {
        const t = e.timestamp - e.started;
        e.duration = t >= 0 ? t : 0
      }
      t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        "number" === typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status)
    }
    function c(e, t) {
      let n = {};
      t ? n = {
        status: t
      } : "ok" === e.status && (n = {
        status: "exited"
      }),
        a(e, n)
    }
  },
  8464: function (e, t, n) {
    "use strict";
    n.d(t, {
      Rt: function () {
        return o
      },
      l4: function () {
        return a
      },
      qT: function () {
        return c
      }
    });
    var r = n(7597);
    const i = (0,
      n(1235).Rf)();
    function o(e, t = {}) {
      if (!e)
        return "<unknown>";
      try {
        let n = e;
        const r = 5
          , i = [];
        let o = 0
          , a = 0;
        const c = " > "
          , u = c.length;
        let l;
        const d = Array.isArray(t) ? t : t.keyAttrs
          , h = !Array.isArray(t) && t.maxStringLength || 80;
        for (; n && o++ < r && (l = s(n, d),
          !("html" === l || o > 1 && a + i.length * u + l.length >= h));)
          i.push(l),
            a += l.length,
            n = n.parentNode;
        return i.reverse().join(c)
      } catch (n) {
        return "<unknown>"
      }
    }
    function s(e, t) {
      const n = e
        , i = [];
      let o, s, a, c, u;
      if (!n || !n.tagName)
        return "";
      i.push(n.tagName.toLowerCase());
      const l = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [e, n.getAttribute(e)])) : null;
      if (l && l.length)
        l.forEach((e => {
          i.push(`[${e[0]}="${e[1]}"]`)
        }
        ));
      else if (n.id && i.push(`#${n.id}`),
        o = n.className,
        o && (0,
          r.HD)(o))
        for (s = o.split(/\s+/),
          u = 0; u < s.length; u++)
          i.push(`.${s[u]}`);
      const d = ["aria-label", "type", "name", "title", "alt"];
      for (u = 0; u < d.length; u++)
        a = d[u],
          c = n.getAttribute(a),
          c && i.push(`[${a}="${c}"]`);
      return i.join("")
    }
    function a() {
      try {
        return i.document.location.href
      } catch (e) {
        return ""
      }
    }
    function c(e) {
      return i.document && i.document.querySelector ? i.document.querySelector(e) : null
    }
  },
  8518: function (e, t, n) {
    "use strict";
    function r() {
      return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
    }
    function i() {
      return "npm"
    }
    n.d(t, {
      S: function () {
        return i
      },
      n: function () {
        return r
      }
    })
  },
  7597: function (e, t, n) {
    "use strict";
    n.d(t, {
      Cy: function () {
        return g
      },
      HD: function () {
        return u
      },
      J8: function () {
        return m
      },
      Kj: function () {
        return p
      },
      PO: function () {
        return d
      },
      TX: function () {
        return a
      },
      V9: function () {
        return v
      },
      VW: function () {
        return s
      },
      VZ: function () {
        return i
      },
      cO: function () {
        return h
      },
      fm: function () {
        return c
      },
      i2: function () {
        return _
      },
      kK: function () {
        return f
      },
      pt: function () {
        return l
      },
      y1: function () {
        return y
      }
    });
    const r = Object.prototype.toString;
    function i(e) {
      switch (r.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return v(e, Error)
      }
    }
    function o(e, t) {
      return r.call(e) === `[object ${t}]`
    }
    function s(e) {
      return o(e, "ErrorEvent")
    }
    function a(e) {
      return o(e, "DOMError")
    }
    function c(e) {
      return o(e, "DOMException")
    }
    function u(e) {
      return o(e, "String")
    }
    function l(e) {
      return null === e || "object" !== typeof e && "function" !== typeof e
    }
    function d(e) {
      return o(e, "Object")
    }
    function h(e) {
      return "undefined" !== typeof Event && v(e, Event)
    }
    function f(e) {
      return "undefined" !== typeof Element && v(e, Element)
    }
    function p(e) {
      return o(e, "RegExp")
    }
    function m(e) {
      return Boolean(e && e.then && "function" === typeof e.then)
    }
    function g(e) {
      return d(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }
    function _(e) {
      return "number" === typeof e && e !== e
    }
    function v(e, t) {
      try {
        return e instanceof t
      } catch (n) {
        return !1
      }
    }
    function y(e) {
      return !("object" !== typeof e || null === e || !e.__isVue && !e._isVue)
    }
  },
  2343: function (e, t, n) {
    "use strict";
    n.d(t, {
      Cf: function () {
        return s
      },
      LD: function () {
        return o
      },
      RU: function () {
        return i
      },
      kg: function () {
        return a
      }
    });
    var r = n(1235);
    const i = ["debug", "info", "warn", "error", "log", "assert", "trace"]
      , o = {};
    function s(e) {
      if (!("console" in r.n2))
        return e();
      const t = r.n2.console
        , n = {}
        , i = Object.keys(o);
      i.forEach((e => {
        const r = o[e];
        n[e] = t[e],
          t[e] = r
      }
      ));
      try {
        return e()
      } finally {
        i.forEach((e => {
          t[e] = n[e]
        }
        ))
      }
    }
    const a = function () {
      let e = !1;
      const t = {
        enable: () => {
          e = !0
        }
        ,
        disable: () => {
          e = !1
        }
        ,
        isEnabled: () => e
      };
      return "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? i.forEach((n => {
        t[n] = (...t) => {
          e && s((() => {
            r.n2.console[n](`Sentry Logger [${n}]:`, ...t)
          }
          ))
        }
      }
      )) : i.forEach((e => {
        t[e] = () => { }
      }
      )),
        t
    }()
  },
  2844: function (e, t, n) {
    "use strict";
    n.d(t, {
      DM: function () {
        return o
      },
      Db: function () {
        return c
      },
      EG: function () {
        return u
      },
      YO: function () {
        return l
      },
      jH: function () {
        return a
      },
      lE: function () {
        return d
      }
    });
    var r = n(535)
      , i = n(1235);
    function o() {
      const e = i.n2
        , t = e.crypto || e.msCrypto;
      let n = () => 16 * Math.random();
      try {
        if (t && t.randomUUID)
          return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = () => t.getRandomValues(new Uint8Array(1))[0])
      } catch (r) { }
      return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)))
    }
    function s(e) {
      return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }
    function a(e) {
      const { message: t, event_id: n } = e;
      if (t)
        return t;
      const r = s(e);
      return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
    }
    function c(e, t, n) {
      const r = e.exception = e.exception || {}
        , i = r.values = r.values || []
        , o = i[0] = i[0] || {};
      o.value || (o.value = t || ""),
        o.type || (o.type = n || "Error")
    }
    function u(e, t) {
      const n = s(e);
      if (!n)
        return;
      const r = n.mechanism;
      if (n.mechanism = {
        type: "generic",
        handled: !0,
        ...r,
        ...t
      },
        t && "data" in t) {
        const e = {
          ...r && r.data,
          ...t.data
        };
        n.mechanism.data = e
      }
    }
    function l(e) {
      if (e && e.__sentry_captured__)
        return !0;
      try {
        (0,
          r.xp)(e, "__sentry_captured__", !0)
      } catch (t) { }
      return !1
    }
    function d(e) {
      return Array.isArray(e) ? e : [e]
    }
  },
  1422: function (e, t, n) {
    "use strict";
    n.d(t, {
      KV: function () {
        return o
      },
      l$: function () {
        return s
      }
    });
    var r = n(8518);
    e = n.hmd(e);
    var i = n(4155);
    function o() {
      return !(0,
        r.n)() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof i ? i : 0)
    }
    function s(e, t) {
      return e.require(t)
    }
  },
  535: function (e, t, n) {
    "use strict";
    n.d(t, {
      $Q: function () {
        return u
      },
      HK: function () {
        return l
      },
      Jr: function () {
        return g
      },
      Sh: function () {
        return h
      },
      _j: function () {
        return d
      },
      hl: function () {
        return a
      },
      xp: function () {
        return c
      },
      zf: function () {
        return m
      }
    });
    var r = n(8464)
      , i = n(7597)
      , o = n(2343)
      , s = n(7321);
    function a(e, t, n) {
      if (!(t in e))
        return;
      const r = e[t]
        , i = n(r);
      "function" === typeof i && u(i, r),
        e[t] = i
    }
    function c(e, t, n) {
      try {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        })
      } catch (r) {
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Failed to add non-enumerable property "${t}" to object`, e)
      }
    }
    function u(e, t) {
      try {
        const n = t.prototype || {};
        e.prototype = t.prototype = n,
          c(e, "__sentry_original__", t)
      } catch (n) { }
    }
    function l(e) {
      return e.__sentry_original__
    }
    function d(e) {
      return Object.keys(e).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)).join("&")
    }
    function h(e) {
      if ((0,
        i.VZ)(e))
        return {
          message: e.message,
          name: e.name,
          stack: e.stack,
          ...p(e)
        };
      if ((0,
        i.cO)(e)) {
        const t = {
          type: e.type,
          target: f(e.target),
          currentTarget: f(e.currentTarget),
          ...p(e)
        };
        return "undefined" !== typeof CustomEvent && (0,
          i.V9)(e, CustomEvent) && (t.detail = e.detail),
          t
      }
      return e
    }
    function f(e) {
      try {
        return (0,
          i.kK)(e) ? (0,
            r.Rt)(e) : Object.prototype.toString.call(e)
      } catch (t) {
        return "<unknown>"
      }
    }
    function p(e) {
      if ("object" === typeof e && null !== e) {
        const t = {};
        for (const n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
      }
      return {}
    }
    function m(e, t = 40) {
      const n = Object.keys(h(e));
      if (n.sort(),
        !n.length)
        return "[object has no keys]";
      if (n[0].length >= t)
        return (0,
          s.$G)(n[0], t);
      for (let r = n.length; r > 0; r--) {
        const e = n.slice(0, r).join(", ");
        if (!(e.length > t))
          return r === n.length ? e : (0,
            s.$G)(e, t)
      }
      return ""
    }
    function g(e) {
      return _(e, new Map)
    }
    function _(e, t) {
      if ((0,
        i.PO)(e)) {
        const n = t.get(e);
        if (void 0 !== n)
          return n;
        const r = {};
        t.set(e, r);
        for (const i of Object.keys(e))
          "undefined" !== typeof e[i] && (r[i] = _(e[i], t));
        return r
      }
      if (Array.isArray(e)) {
        const n = t.get(e);
        if (void 0 !== n)
          return n;
        const r = [];
        return t.set(e, r),
          e.forEach((e => {
            r.push(_(e, t))
          }
          )),
          r
      }
      return e
    }
  },
  7321: function (e, t, n) {
    "use strict";
    n.d(t, {
      $G: function () {
        return i
      },
      U0: function () {
        return s
      },
      nK: function () {
        return o
      }
    });
    var r = n(7597);
    function i(e, t = 0) {
      return "string" !== typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`
    }
    function o(e, t) {
      if (!Array.isArray(e))
        return "";
      const n = [];
      for (let o = 0; o < e.length; o++) {
        const t = e[o];
        try {
          (0,
            r.y1)(t) ? n.push("[VueViewModel]") : n.push(String(t))
        } catch (i) {
          n.push("[value cannot be serialized]")
        }
      }
      return n.join(t)
    }
    function s(e, t = [], n = !1) {
      return t.some((t => function (e, t, n = !1) {
        return !!(0,
          r.HD)(e) && ((0,
            r.Kj)(t) ? t.test(e) : !!(0,
              r.HD)(t) && (n ? e === t : e.includes(t)))
      }(e, t, n)))
    }
  },
  6893: function (e, t, n) {
    "use strict";
    n.d(t, {
      $2: function () {
        return s
      },
      WD: function () {
        return o
      },
      cW: function () {
        return a
      }
    });
    var r, i = n(7597);
    function o(e) {
      return new a((t => {
        t(e)
      }
      ))
    }
    function s(e) {
      return new a(((t, n) => {
        n(e)
      }
      ))
    }
    !function (e) {
      e[e.PENDING = 0] = "PENDING";
      e[e.RESOLVED = 1] = "RESOLVED";
      e[e.REJECTED = 2] = "REJECTED"
    }(r || (r = {}));
    class a {
      constructor(e) {
        a.prototype.__init.call(this),
          a.prototype.__init2.call(this),
          a.prototype.__init3.call(this),
          a.prototype.__init4.call(this),
          this._state = r.PENDING,
          this._handlers = [];
        try {
          e(this._resolve, this._reject)
        } catch (t) {
          this._reject(t)
        }
      }
      then(e, t) {
        return new a(((n, r) => {
          this._handlers.push([!1, t => {
            if (e)
              try {
                n(e(t))
              } catch (i) {
                r(i)
              }
            else
              n(t)
          }
            , e => {
              if (t)
                try {
                  n(t(e))
                } catch (i) {
                  r(i)
                }
              else
                r(e)
            }
          ]),
            this._executeHandlers()
        }
        ))
      }
      catch(e) {
        return this.then((e => e), e)
      }
      finally(e) {
        return new a(((t, n) => {
          let r, i;
          return this.then((t => {
            i = !1,
              r = t,
              e && e()
          }
          ), (t => {
            i = !0,
              r = t,
              e && e()
          }
          )).then((() => {
            i ? n(r) : t(r)
          }
          ))
        }
        ))
      }
      __init() {
        this._resolve = e => {
          this._setResult(r.RESOLVED, e)
        }
      }
      __init2() {
        this._reject = e => {
          this._setResult(r.REJECTED, e)
        }
      }
      __init3() {
        this._setResult = (e, t) => {
          this._state === r.PENDING && ((0,
            i.J8)(t) ? t.then(this._resolve, this._reject) : (this._state = e,
              this._value = t,
              this._executeHandlers()))
        }
      }
      __init4() {
        this._executeHandlers = () => {
          if (this._state === r.PENDING)
            return;
          const e = this._handlers.slice();
          this._handlers = [],
            e.forEach((e => {
              e[0] || (this._state === r.RESOLVED && e[1](this._value),
                this._state === r.REJECTED && e[2](this._value),
                e[0] = !0)
            }
            ))
        }
      }
    }
  },
  1170: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z1: function () {
        return h
      },
      ph: function () {
        return l
      },
      yW: function () {
        return u
      }
    });
    var r = n(1422)
      , i = n(1235);
    e = n.hmd(e);
    const o = (0,
      i.Rf)()
      , s = {
        nowSeconds: () => Date.now() / 1e3
      };
    const a = (0,
      r.KV)() ? function () {
        try {
          return (0,
            r.l$)(e, "perf_hooks").performance
        } catch (t) {
          return
        }
      }() : function () {
        const { performance: e } = o;
        if (!e || !e.now)
          return;
        return {
          now: () => e.now(),
          timeOrigin: Date.now() - e.now()
        }
      }()
      , c = void 0 === a ? s : {
        nowSeconds: () => (a.timeOrigin + a.now()) / 1e3
      }
      , u = s.nowSeconds.bind(s)
      , l = c.nowSeconds.bind(c);
    let d;
    const h = (() => {
      const { performance: e } = o;
      if (!e || !e.now)
        return void (d = "none");
      const t = 36e5
        , n = e.now()
        , r = Date.now()
        , i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t
        , s = i < t
        , a = e.timing && e.timing.navigationStart
        , c = "number" === typeof a ? Math.abs(a + n - r) : t;
      return s || c < t ? i <= c ? (d = "timeOrigin",
        e.timeOrigin) : (d = "navigationStart",
          a) : (d = "dateNow",
            r)
    }
    )()
  },
  1235: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.Math == Math ? e : void 0
    }
    n.d(t, {
      Rf: function () {
        return o
      },
      YO: function () {
        return s
      },
      n2: function () {
        return i
      }
    });
    const i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function () {
      return this
    }() || {};
    function o() {
      return i
    }
    function s(e, t, n) {
      const r = n || i
        , o = r.__SENTRY__ = r.__SENTRY__ || {};
      return o[e] || (o[e] = t())
    }
  },
  9742: function (e, t) {
    "use strict";
    t.byteLength = function (e) {
      var t = c(e)
        , n = t[0]
        , r = t[1];
      return 3 * (n + r) / 4 - r
    }
      ,
      t.toByteArray = function (e) {
        var t, n, o = c(e), s = o[0], a = o[1], u = new i(function (e, t, n) {
          return 3 * (t + n) / 4 - n
        }(0, s, a)), l = 0, d = a > 0 ? s - 4 : s;
        for (n = 0; n < d; n += 4)
          t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)],
            u[l++] = t >> 16 & 255,
            u[l++] = t >> 8 & 255,
            u[l++] = 255 & t;
        2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4,
          u[l++] = 255 & t);
        1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2,
          u[l++] = t >> 8 & 255,
          u[l++] = 255 & t);
        return u
      }
      ,
      t.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, c = r - i; a < c; a += s)
          o.push(u(e, a, a + s > c ? c : a + s));
        1 === i ? (t = e[r - 1],
          o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
            o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
        return o.join("")
      }
      ;
    for (var n = [], r = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
      n[s] = o[s],
        r[o.charCodeAt(s)] = s;
    function c(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t),
        [n, n === t ? 0 : 4 - n % 4]
    }
    function u(e, t, r) {
      for (var i, o, s = [], a = t; a < r; a += 3)
        i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
          s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
      return s.join("")
    }
    r["-".charCodeAt(0)] = 62,
      r["_".charCodeAt(0)] = 63
  },
  8764: function (e, t, n) {
    "use strict";
    var r = n(9742)
      , i = n(645)
      , o = n(7300);
    function s() {
      return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }
    function a(e, t) {
      if (s() < t)
        throw new RangeError("Invalid typed array length");
      return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)),
        e.length = t),
        e
    }
    function c(e, t, n) {
      if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
        return new c(e, t, n);
      if ("number" === typeof e) {
        if ("string" === typeof t)
          throw new Error("If encoding is specified then the first argument must be a string");
        return d(this, e)
      }
      return u(this, e, t, n)
    }
    function u(e, t, n, r) {
      if ("number" === typeof t)
        throw new TypeError('"value" argument must not be a number');
      return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
        if (t.byteLength,
          n < 0 || t.byteLength < n)
          throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0))
          throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = h(e, t);
        return e
      }(e, t, n, r) : "string" === typeof t ? function (e, t, n) {
        "string" === typeof n && "" !== n || (n = "utf8");
        if (!c.isEncoding(n))
          throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | p(t, n)
          , i = (e = a(e, r)).write(t, n);
        i !== r && (e = e.slice(0, i));
        return e
      }(e, t, n) : function (e, t) {
        if (c.isBuffer(t)) {
          var n = 0 | f(t.length);
          return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n),
            e
        }
        if (t) {
          if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t)
            return "number" !== typeof t.length || (r = t.length) !== r ? a(e, 0) : h(e, t);
          if ("Buffer" === t.type && o(t.data))
            return h(e, t.data)
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }(e, t)
    }
    function l(e) {
      if ("number" !== typeof e)
        throw new TypeError('"size" argument must be a number');
      if (e < 0)
        throw new RangeError('"size" argument must not be negative')
    }
    function d(e, t) {
      if (l(t),
        e = a(e, t < 0 ? 0 : 0 | f(t)),
        !c.TYPED_ARRAY_SUPPORT)
        for (var n = 0; n < t; ++n)
          e[n] = 0;
      return e
    }
    function h(e, t) {
      var n = t.length < 0 ? 0 : 0 | f(t.length);
      e = a(e, n);
      for (var r = 0; r < n; r += 1)
        e[r] = 255 & t[r];
      return e
    }
    function f(e) {
      if (e >= s())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
      return 0 | e
    }
    function p(e, t) {
      if (c.isBuffer(e))
        return e.length;
      if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
        return e.byteLength;
      "string" !== typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n)
        return 0;
      for (var r = !1; ;)
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return n;
          case "utf8":
          case "utf-8":
          case void 0:
            return $(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n;
          case "hex":
            return n >>> 1;
          case "base64":
            return G(e).length;
          default:
            if (r)
              return $(e).length;
            t = ("" + t).toLowerCase(),
              r = !0
        }
    }
    function m(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0),
        t > this.length)
        return "";
      if ((void 0 === n || n > this.length) && (n = this.length),
        n <= 0)
        return "";
      if ((n >>>= 0) <= (t >>>= 0))
        return "";
      for (e || (e = "utf8"); ;)
        switch (e) {
          case "hex":
            return N(this, t, n);
          case "utf8":
          case "utf-8":
            return I(this, t, n);
          case "ascii":
            return k(this, t, n);
          case "latin1":
          case "binary":
            return C(this, t, n);
          case "base64":
            return R(this, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return A(this, t, n);
          default:
            if (r)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(),
              r = !0
        }
    }
    function g(e, t, n) {
      var r = e[t];
      e[t] = e[n],
        e[n] = r
    }
    function _(e, t, n, r, i) {
      if (0 === e.length)
        return -1;
      if ("string" === typeof n ? (r = n,
        n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
        n = +n,
        isNaN(n) && (n = i ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length) {
        if (i)
          return -1;
        n = e.length - 1
      } else if (n < 0) {
        if (!i)
          return -1;
        n = 0
      }
      if ("string" === typeof t && (t = c.from(t, r)),
        c.isBuffer(t))
        return 0 === t.length ? -1 : v(e, t, n, r, i);
      if ("number" === typeof t)
        return t &= 255,
          c.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, i);
      throw new TypeError("val must be string, number or Buffer")
    }
    function v(e, t, n, r, i) {
      var o, s = 1, a = e.length, c = t.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2)
          return -1;
        s = 2,
          a /= 2,
          c /= 2,
          n /= 2
      }
      function u(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s)
      }
      if (i) {
        var l = -1;
        for (o = n; o < a; o++)
          if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
            if (-1 === l && (l = o),
              o - l + 1 === c)
              return l * s
          } else
            -1 !== l && (o -= o - l),
              l = -1
      } else
        for (n + c > a && (n = a - c),
          o = n; o >= 0; o--) {
          for (var d = !0, h = 0; h < c; h++)
            if (u(e, o + h) !== u(t, h)) {
              d = !1;
              break
            }
          if (d)
            return o
        }
      return -1
    }
    function y(e, t, n, r) {
      n = Number(n) || 0;
      var i = e.length - n;
      r ? (r = Number(r)) > i && (r = i) : r = i;
      var o = t.length;
      if (o % 2 !== 0)
        throw new TypeError("Invalid hex string");
      r > o / 2 && (r = o / 2);
      for (var s = 0; s < r; ++s) {
        var a = parseInt(t.substr(2 * s, 2), 16);
        if (isNaN(a))
          return s;
        e[n + s] = a
      }
      return s
    }
    function b(e, t, n, r) {
      return Y($(t, e.length - n), e, n, r)
    }
    function E(e, t, n, r) {
      return Y(function (e) {
        for (var t = [], n = 0; n < e.length; ++n)
          t.push(255 & e.charCodeAt(n));
        return t
      }(t), e, n, r)
    }
    function w(e, t, n, r) {
      return E(e, t, n, r)
    }
    function S(e, t, n, r) {
      return Y(G(t), e, n, r)
    }
    function T(e, t, n, r) {
      return Y(function (e, t) {
        for (var n, r, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = (n = e.charCodeAt(s)) >> 8,
            i = n % 256,
            o.push(i),
            o.push(r);
        return o
      }(t, e.length - n), e, n, r)
    }
    function R(e, t, n) {
      return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
    }
    function I(e, t, n) {
      n = Math.min(e.length, n);
      for (var r = [], i = t; i < n;) {
        var o, s, a, c, u = e[i], l = null, d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + d <= n)
          switch (d) {
            case 1:
              u < 128 && (l = u);
              break;
            case 2:
              128 === (192 & (o = e[i + 1])) && (c = (31 & u) << 6 | 63 & o) > 127 && (l = c);
              break;
            case 3:
              o = e[i + 1],
                s = e[i + 2],
                128 === (192 & o) && 128 === (192 & s) && (c = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (l = c);
              break;
            case 4:
              o = e[i + 1],
                s = e[i + 2],
                a = e[i + 3],
                128 === (192 & o) && 128 === (192 & s) && 128 === (192 & a) && (c = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (l = c)
          }
        null === l ? (l = 65533,
          d = 1) : l > 65535 && (l -= 65536,
            r.push(l >>> 10 & 1023 | 55296),
            l = 56320 | 1023 & l),
          r.push(l),
          i += d
      }
      return function (e) {
        var t = e.length;
        if (t <= O)
          return String.fromCharCode.apply(String, e);
        var n = ""
          , r = 0;
        for (; r < t;)
          n += String.fromCharCode.apply(String, e.slice(r, r += O));
        return n
      }(r)
    }
    t.lW = c,
      t.h2 = 50,
      c.TYPED_ARRAY_SUPPORT = void 0 !== n.g.TYPED_ARRAY_SUPPORT ? n.g.TYPED_ARRAY_SUPPORT : function () {
        try {
          var e = new Uint8Array(1);
          return e.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
              return 42
            }
          },
            42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
        } catch (t) {
          return !1
        }
      }(),
      s(),
      c.poolSize = 8192,
      c._augment = function (e) {
        return e.__proto__ = c.prototype,
          e
      }
      ,
      c.from = function (e, t, n) {
        return u(null, e, t, n)
      }
      ,
      c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype,
        c.__proto__ = Uint8Array,
        "undefined" !== typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
          value: null,
          configurable: !0
        })),
      c.alloc = function (e, t, n) {
        return function (e, t, n, r) {
          return l(t),
            t <= 0 ? a(e, t) : void 0 !== n ? "string" === typeof r ? a(e, t).fill(n, r) : a(e, t).fill(n) : a(e, t)
        }(null, e, t, n)
      }
      ,
      c.allocUnsafe = function (e) {
        return d(null, e)
      }
      ,
      c.allocUnsafeSlow = function (e) {
        return d(null, e)
      }
      ,
      c.isBuffer = function (e) {
        return !(null == e || !e._isBuffer)
      }
      ,
      c.compare = function (e, t) {
        if (!c.isBuffer(e) || !c.isBuffer(t))
          throw new TypeError("Arguments must be Buffers");
        if (e === t)
          return 0;
        for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
          if (e[i] !== t[i]) {
            n = e[i],
              r = t[i];
            break
          }
        return n < r ? -1 : r < n ? 1 : 0
      }
      ,
      c.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }
      ,
      c.concat = function (e, t) {
        if (!o(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length)
          return c.alloc(0);
        var n;
        if (void 0 === t)
          for (t = 0,
            n = 0; n < e.length; ++n)
            t += e[n].length;
        var r = c.allocUnsafe(t)
          , i = 0;
        for (n = 0; n < e.length; ++n) {
          var s = e[n];
          if (!c.isBuffer(s))
            throw new TypeError('"list" argument must be an Array of Buffers');
          s.copy(r, i),
            i += s.length
        }
        return r
      }
      ,
      c.byteLength = p,
      c.prototype._isBuffer = !0,
      c.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2)
          g(this, t, t + 1);
        return this
      }
      ,
      c.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4)
          g(this, t, t + 3),
            g(this, t + 1, t + 2);
        return this
      }
      ,
      c.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8)
          g(this, t, t + 7),
            g(this, t + 1, t + 6),
            g(this, t + 2, t + 5),
            g(this, t + 3, t + 4);
        return this
      }
      ,
      c.prototype.toString = function () {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : m.apply(this, arguments)
      }
      ,
      c.prototype.equals = function (e) {
        if (!c.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === c.compare(this, e)
      }
      ,
      c.prototype.inspect = function () {
        var e = ""
          , n = t.h2;
        return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
          this.length > n && (e += " ... ")),
          "<Buffer " + e + ">"
      }
      ,
      c.prototype.compare = function (e, t, n, r, i) {
        if (!c.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0),
          void 0 === n && (n = e ? e.length : 0),
          void 0 === r && (r = 0),
          void 0 === i && (i = this.length),
          t < 0 || n > e.length || r < 0 || i > this.length)
          throw new RangeError("out of range index");
        if (r >= i && t >= n)
          return 0;
        if (r >= i)
          return -1;
        if (t >= n)
          return 1;
        if (this === e)
          return 0;
        for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), u = this.slice(r, i), l = e.slice(t, n), d = 0; d < a; ++d)
          if (u[d] !== l[d]) {
            o = u[d],
              s = l[d];
            break
          }
        return o < s ? -1 : s < o ? 1 : 0
      }
      ,
      c.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n)
      }
      ,
      c.prototype.indexOf = function (e, t, n) {
        return _(this, e, t, n, !0)
      }
      ,
      c.prototype.lastIndexOf = function (e, t, n) {
        return _(this, e, t, n, !1)
      }
      ,
      c.prototype.write = function (e, t, n, r) {
        if (void 0 === t)
          r = "utf8",
            n = this.length,
            t = 0;
        else if (void 0 === n && "string" === typeof t)
          r = t,
            n = this.length,
            t = 0;
        else {
          if (!isFinite(t))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          t |= 0,
            isFinite(n) ? (n |= 0,
              void 0 === r && (r = "utf8")) : (r = n,
                n = void 0)
        }
        var i = this.length - t;
        if ((void 0 === n || n > i) && (n = i),
          e.length > 0 && (n < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        for (var o = !1; ;)
          switch (r) {
            case "hex":
              return y(this, e, t, n);
            case "utf8":
            case "utf-8":
              return b(this, e, t, n);
            case "ascii":
              return E(this, e, t, n);
            case "latin1":
            case "binary":
              return w(this, e, t, n);
            case "base64":
              return S(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return T(this, e, t, n);
            default:
              if (o)
                throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(),
                o = !0
          }
      }
      ,
      c.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      }
      ;
    var O = 4096;
    function k(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i)
        r += String.fromCharCode(127 & e[i]);
      return r
    }
    function C(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i)
        r += String.fromCharCode(e[i]);
      return r
    }
    function N(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0),
        (!n || n < 0 || n > r) && (n = r);
      for (var i = "", o = t; o < n; ++o)
        i += F(e[o]);
      return i
    }
    function A(e, t, n) {
      for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
        i += String.fromCharCode(r[o] + 256 * r[o + 1]);
      return i
    }
    function P(e, t, n) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > n)
        throw new RangeError("Trying to access beyond buffer length")
    }
    function D(e, t, n, r, i, o) {
      if (!c.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length)
        throw new RangeError("Index out of range")
    }
    function x(e, t, n, r) {
      t < 0 && (t = 65535 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
        e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
    }
    function L(e, t, n, r) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
        e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
    }
    function U(e, t, n, r, i, o) {
      if (n + r > e.length)
        throw new RangeError("Index out of range");
      if (n < 0)
        throw new RangeError("Index out of range")
    }
    function j(e, t, n, r, o) {
      return o || U(e, 0, n, 4),
        i.write(e, t, n, r, 23, 4),
        n + 4
    }
    function B(e, t, n, r, o) {
      return o || U(e, 0, n, 8),
        i.write(e, t, n, r, 52, 8),
        n + 8
    }
    c.prototype.slice = function (e, t) {
      var n, r = this.length;
      if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
        (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
        t < e && (t = e),
        c.TYPED_ARRAY_SUPPORT)
        (n = this.subarray(e, t)).__proto__ = c.prototype;
      else {
        var i = t - e;
        n = new c(i, void 0);
        for (var o = 0; o < i; ++o)
          n[o] = this[o + e]
      }
      return n
    }
      ,
      c.prototype.readUIntLE = function (e, t, n) {
        e |= 0,
          t |= 0,
          n || P(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
          r += this[e + o] * i;
        return r
      }
      ,
      c.prototype.readUIntBE = function (e, t, n) {
        e |= 0,
          t |= 0,
          n || P(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);)
          r += this[e + --t] * i;
        return r
      }
      ,
      c.prototype.readUInt8 = function (e, t) {
        return t || P(e, 1, this.length),
          this[e]
      }
      ,
      c.prototype.readUInt16LE = function (e, t) {
        return t || P(e, 2, this.length),
          this[e] | this[e + 1] << 8
      }
      ,
      c.prototype.readUInt16BE = function (e, t) {
        return t || P(e, 2, this.length),
          this[e] << 8 | this[e + 1]
      }
      ,
      c.prototype.readUInt32LE = function (e, t) {
        return t || P(e, 4, this.length),
          (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
      }
      ,
      c.prototype.readUInt32BE = function (e, t) {
        return t || P(e, 4, this.length),
          16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
      }
      ,
      c.prototype.readIntLE = function (e, t, n) {
        e |= 0,
          t |= 0,
          n || P(e, t, this.length);
        for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);)
          r += this[e + o] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)),
          r
      }
      ,
      c.prototype.readIntBE = function (e, t, n) {
        e |= 0,
          t |= 0,
          n || P(e, t, this.length);
        for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);)
          o += this[e + --r] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)),
          o
      }
      ,
      c.prototype.readInt8 = function (e, t) {
        return t || P(e, 1, this.length),
          128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
      }
      ,
      c.prototype.readInt16LE = function (e, t) {
        t || P(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
      }
      ,
      c.prototype.readInt16BE = function (e, t) {
        t || P(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return 32768 & n ? 4294901760 | n : n
      }
      ,
      c.prototype.readInt32LE = function (e, t) {
        return t || P(e, 4, this.length),
          this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
      }
      ,
      c.prototype.readInt32BE = function (e, t) {
        return t || P(e, 4, this.length),
          this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
      }
      ,
      c.prototype.readFloatLE = function (e, t) {
        return t || P(e, 4, this.length),
          i.read(this, e, !0, 23, 4)
      }
      ,
      c.prototype.readFloatBE = function (e, t) {
        return t || P(e, 4, this.length),
          i.read(this, e, !1, 23, 4)
      }
      ,
      c.prototype.readDoubleLE = function (e, t) {
        return t || P(e, 8, this.length),
          i.read(this, e, !0, 52, 8)
      }
      ,
      c.prototype.readDoubleBE = function (e, t) {
        return t || P(e, 8, this.length),
          i.read(this, e, !1, 52, 8)
      }
      ,
      c.prototype.writeUIntLE = function (e, t, n, r) {
        (e = +e,
          t |= 0,
          n |= 0,
          r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = 1
          , o = 0;
        for (this[t] = 255 & e; ++o < n && (i *= 256);)
          this[t + o] = e / i & 255;
        return t + n
      }
      ,
      c.prototype.writeUIntBE = function (e, t, n, r) {
        (e = +e,
          t |= 0,
          n |= 0,
          r) || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
        var i = n - 1
          , o = 1;
        for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);)
          this[t + i] = e / o & 255;
        return t + n
      }
      ,
      c.prototype.writeUInt8 = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 1, 255, 0),
          c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
          this[t] = 255 & e,
          t + 1
      }
      ,
      c.prototype.writeUInt16LE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 2, 65535, 0),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : x(this, e, t, !0),
          t + 2
      }
      ,
      c.prototype.writeUInt16BE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 2, 65535, 0),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : x(this, e, t, !1),
          t + 2
      }
      ,
      c.prototype.writeUInt32LE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 4, 4294967295, 0),
          c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : L(this, e, t, !0),
          t + 4
      }
      ,
      c.prototype.writeUInt32BE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 4, 4294967295, 0),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : L(this, e, t, !1),
          t + 4
      }
      ,
      c.prototype.writeIntLE = function (e, t, n, r) {
        if (e = +e,
          t |= 0,
          !r) {
          var i = Math.pow(2, 8 * n - 1);
          D(this, e, t, n, i - 1, -i)
        }
        var o = 0
          , s = 1
          , a = 0;
        for (this[t] = 255 & e; ++o < n && (s *= 256);)
          e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
            this[t + o] = (e / s >> 0) - a & 255;
        return t + n
      }
      ,
      c.prototype.writeIntBE = function (e, t, n, r) {
        if (e = +e,
          t |= 0,
          !r) {
          var i = Math.pow(2, 8 * n - 1);
          D(this, e, t, n, i - 1, -i)
        }
        var o = n - 1
          , s = 1
          , a = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);)
          e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
            this[t + o] = (e / s >> 0) - a & 255;
        return t + n
      }
      ,
      c.prototype.writeInt8 = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 1, 127, -128),
          c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
          e < 0 && (e = 255 + e + 1),
          this[t] = 255 & e,
          t + 1
      }
      ,
      c.prototype.writeInt16LE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 2, 32767, -32768),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : x(this, e, t, !0),
          t + 2
      }
      ,
      c.prototype.writeInt16BE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 2, 32767, -32768),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : x(this, e, t, !1),
          t + 2
      }
      ,
      c.prototype.writeInt32LE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 4, 2147483647, -2147483648),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : L(this, e, t, !0),
          t + 4
      }
      ,
      c.prototype.writeInt32BE = function (e, t, n) {
        return e = +e,
          t |= 0,
          n || D(this, e, t, 4, 2147483647, -2147483648),
          e < 0 && (e = 4294967295 + e + 1),
          c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : L(this, e, t, !1),
          t + 4
      }
      ,
      c.prototype.writeFloatLE = function (e, t, n) {
        return j(this, e, t, !0, n)
      }
      ,
      c.prototype.writeFloatBE = function (e, t, n) {
        return j(this, e, t, !1, n)
      }
      ,
      c.prototype.writeDoubleLE = function (e, t, n) {
        return B(this, e, t, !0, n)
      }
      ,
      c.prototype.writeDoubleBE = function (e, t, n) {
        return B(this, e, t, !1, n)
      }
      ,
      c.prototype.copy = function (e, t, n, r) {
        if (n || (n = 0),
          r || 0 === r || (r = this.length),
          t >= e.length && (t = e.length),
          t || (t = 0),
          r > 0 && r < n && (r = n),
          r === n)
          return 0;
        if (0 === e.length || 0 === this.length)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
          throw new RangeError("sourceStart out of bounds");
        if (r < 0)
          throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length),
          e.length - t < r - n && (r = e.length - t + n);
        var i, o = r - n;
        if (this === e && n < t && t < r)
          for (i = o - 1; i >= 0; --i)
            e[i + t] = this[i + n];
        else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
          for (i = 0; i < o; ++i)
            e[i + t] = this[i + n];
        else
          Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
        return o
      }
      ,
      c.prototype.fill = function (e, t, n, r) {
        if ("string" === typeof e) {
          if ("string" === typeof t ? (r = t,
            t = 0,
            n = this.length) : "string" === typeof n && (r = n,
              n = this.length),
            1 === e.length) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i)
          }
          if (void 0 !== r && "string" !== typeof r)
            throw new TypeError("encoding must be a string");
          if ("string" === typeof r && !c.isEncoding(r))
            throw new TypeError("Unknown encoding: " + r)
        } else
          "number" === typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < n)
          throw new RangeError("Out of range index");
        if (n <= t)
          return this;
        var o;
        if (t >>>= 0,
          n = void 0 === n ? this.length : n >>> 0,
          e || (e = 0),
          "number" === typeof e)
          for (o = t; o < n; ++o)
            this[o] = e;
        else {
          var s = c.isBuffer(e) ? e : $(new c(e, r).toString())
            , a = s.length;
          for (o = 0; o < n - t; ++o)
            this[o + t] = s[o % a]
        }
        return this
      }
      ;
    var M = /[^+\/0-9A-Za-z-_]/g;
    function F(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }
    function $(e, t) {
      var n;
      t = t || 1 / 0;
      for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            if (s + 1 === r) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue
            }
            i = n;
            continue
          }
          if (n < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189),
              i = n;
            continue
          }
          n = 65536 + (i - 55296 << 10 | n - 56320)
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null,
          n < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(n < 1114112))
            throw new Error("Invalid code point");
          if ((t -= 4) < 0)
            break;
          o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return o
    }
    function G(e) {
      return r.toByteArray(function (e) {
        if ((e = function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }(e).replace(M, "")).length < 2)
          return "";
        for (; e.length % 4 !== 0;)
          e += "=";
        return e
      }(e))
    }
    function Y(e, t, n, r) {
      for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
        t[i + n] = e[i];
      return i
    }
  },
  7300: function (e) {
    var t = {}.toString;
    e.exports = Array.isArray || function (e) {
      return "[object Array]" == t.call(e)
    }
  },
  8875: function (e, t, n) {
    var r;
    !function () {
      "use strict";
      var i = !("undefined" === typeof window || !window.document || !window.document.createElement)
        , o = {
          canUseDOM: i,
          canUseWorkers: "undefined" !== typeof Worker,
          canUseEventListeners: i && !(!window.addEventListener && !window.attachEvent),
          canUseViewport: i && !!window.screen
        };
      void 0 === (r = function () {
        return o
      }
        .call(t, n, t, e)) || (e.exports = r)
    }()
  },
  645: function (e, t) {
    t.read = function (e, t, n, r, i) {
      var o, s, a = 8 * i - r - 1, c = (1 << a) - 1, u = c >> 1, l = -7, d = n ? i - 1 : 0, h = n ? -1 : 1, f = e[t + d];
      for (d += h,
        o = f & (1 << -l) - 1,
        f >>= -l,
        l += a; l > 0; o = 256 * o + e[t + d],
        d += h,
        l -= 8)
        ;
      for (s = o & (1 << -l) - 1,
        o >>= -l,
        l += r; l > 0; s = 256 * s + e[t + d],
        d += h,
        l -= 8)
        ;
      if (0 === o)
        o = 1 - u;
      else {
        if (o === c)
          return s ? NaN : 1 / 0 * (f ? -1 : 1);
        s += Math.pow(2, r),
          o -= u
      }
      return (f ? -1 : 1) * s * Math.pow(2, o - r)
    }
      ,
      t.write = function (e, t, n, r, i, o) {
        var s, a, c, u = 8 * o - i - 1, l = (1 << u) - 1, d = l >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : o - 1, p = r ? 1 : -1, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
          isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            s = l) : (s = Math.floor(Math.log(t) / Math.LN2),
              t * (c = Math.pow(2, -s)) < 1 && (s--,
                c *= 2),
              (t += s + d >= 1 ? h / c : h * Math.pow(2, 1 - d)) * c >= 2 && (s++,
                c /= 2),
              s + d >= l ? (a = 0,
                s = l) : s + d >= 1 ? (a = (t * c - 1) * Math.pow(2, i),
                  s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i),
                    s = 0)); i >= 8; e[n + f] = 255 & a,
                    f += p,
                    a /= 256,
          i -= 8)
          ;
        for (s = s << i | a,
          u += i; u > 0; e[n + f] = 255 & s,
          f += p,
          s /= 256,
          u -= 8)
          ;
        e[n + f - p] |= 128 * m
      }
  },
  4603: function (e, t, n) {
    "use strict";
    var r = n(6687);
    var i = n(5659);
    function o(e) {
      if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
        return !1;
      const t = (0,
        i.Gd)().getClient()
        , n = e || t && t.getOptions();
      return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
    }
    function s(e, t) {
      let n = 0;
      for (let r = e.length - 1; r >= 0; r--) {
        const t = e[r];
        "." === t ? e.splice(r, 1) : ".." === t ? (e.splice(r, 1),
          n++) : n && (e.splice(r, 1),
            n--)
      }
      if (t)
        for (; n--; n)
          e.unshift("..");
      return e
    }
    const a = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
    function c(e) {
      const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e
        , n = a.exec(t);
      return n ? n.slice(1) : []
    }
    function u(...e) {
      let t = ""
        , n = !1;
      for (let r = e.length - 1; r >= -1 && !n; r--) {
        const i = r >= 0 ? e[r] : "/";
        i && (t = `${i}/${t}`,
          n = "/" === i.charAt(0))
      }
      return t = s(t.split("/").filter((e => !!e)), !n).join("/"),
        (n ? "/" : "") + t || "."
    }
    function l(e) {
      let t = 0;
      for (; t < e.length && "" === e[t]; t++)
        ;
      let n = e.length - 1;
      for (; n >= 0 && "" === e[n]; n--)
        ;
      return t > n ? [] : e.slice(t, n - t + 1)
    }
    class d {
      static __initStatic() {
        this.id = "RewriteFrames"
      }
      constructor(e = {}) {
        d.prototype.__init.call(this),
          this.name = d.id,
          e.root && (this._root = e.root),
          this._prefix = e.prefix || "app:///",
          e.iteratee && (this._iteratee = e.iteratee)
      }
      setupOnce(e, t) { }
      processEvent(e) {
        return this.process(e)
      }
      process(e) {
        let t = e;
        return e.exception && Array.isArray(e.exception.values) && (t = this._processExceptionsEvent(t)),
          t
      }
      __init() {
        this._iteratee = e => {
          if (!e.filename)
            return e;
          const t = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/")
            , n = /^\//.test(e.filename);
          if (t || n) {
            const n = t ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename
              , r = this._root ? function (e, t) {
                e = u(e).slice(1),
                  t = u(t).slice(1);
                const n = l(e.split("/"))
                  , r = l(t.split("/"))
                  , i = Math.min(n.length, r.length);
                let o = i;
                for (let a = 0; a < i; a++)
                  if (n[a] !== r[a]) {
                    o = a;
                    break
                  }
                let s = [];
                for (let a = o; a < n.length; a++)
                  s.push("..");
                return s = s.concat(r.slice(o)),
                  s.join("/")
              }(this._root, n) : function (e, t) {
                let n = c(e)[2];
                return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)),
                  n
              }(n);
            e.filename = `${this._prefix}${r}`
          }
          return e
        }
      }
      _processExceptionsEvent(e) {
        try {
          return {
            ...e,
            exception: {
              ...e.exception,
              values: e.exception.values.map((e => ({
                ...e,
                ...e.stacktrace && {
                  stacktrace: this._processStacktrace(e.stacktrace)
                }
              })))
            }
          }
        } catch (t) {
          return e
        }
      }
      _processStacktrace(e) {
        return {
          ...e,
          frames: e && e.frames && e.frames.map((e => this._iteratee(e)))
        }
      }
    }
    d.__initStatic();
    const h = "7.80.1";
    var f = n(2343)
      , p = n(2844)
      , m = n(7321);
    const g = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
      , _ = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/];
    class v {
      static __initStatic() {
        this.id = "InboundFilters"
      }
      constructor(e = {}) {
        this.name = v.id,
          this._options = e
      }
      setupOnce(e, t) { }
      processEvent(e, t, n) {
        const r = n.getOptions()
          , i = function (e = {}, t = {}) {
            return {
              allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
              denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
              ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : g],
              ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : _],
              ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
            }
          }(this._options, r);
        return function (e, t) {
          if (t.ignoreInternal && function (e) {
            try {
              return "SentryError" === e.exception.values[0].type
            } catch (t) { }
            return !1
          }(e))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0,
              p.jH)(e)}`),
              !0;
          if (function (e, t) {
            if (e.type || !t || !t.length)
              return !1;
            return function (e) {
              const t = [];
              e.message && t.push(e.message);
              let n;
              try {
                n = e.exception.values[e.exception.values.length - 1]
              } catch (r) { }
              n && n.value && (t.push(n.value),
                n.type && t.push(`${n.type}: ${n.value}`));
              "undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__ || 0 !== t.length || f.kg.error(`Could not extract message for event ${(0,
                p.jH)(e)}`);
              return t
            }(e).some((e => (0,
              m.U0)(e, t)))
          }(e, t.ignoreErrors))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0,
              p.jH)(e)}`),
              !0;
          if (function (e, t) {
            if ("transaction" !== e.type || !t || !t.length)
              return !1;
            const n = e.transaction;
            return !!n && (0,
              m.U0)(n, t)
          }(e, t.ignoreTransactions))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0,
              p.jH)(e)}`),
              !0;
          if (function (e, t) {
            if (!t || !t.length)
              return !1;
            const n = y(e);
            return !!n && (0,
              m.U0)(n, t)
          }(e, t.denyUrls))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0,
              p.jH)(e)}.\nUrl: ${y(e)}`),
              !0;
          if (!function (e, t) {
            if (!t || !t.length)
              return !0;
            const n = y(e);
            return !n || (0,
              m.U0)(n, t)
          }(e, t.allowUrls))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0,
              p.jH)(e)}.\nUrl: ${y(e)}`),
              !0;
          return !1
        }(e, i) ? null : e
      }
    }
    function y(e) {
      try {
        let n;
        try {
          n = e.exception.values[0].stacktrace.frames
        } catch (t) { }
        return n ? function (e = []) {
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
              return n.filename || null
          }
          return null
        }(n) : null
      } catch (n) {
        return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error(`Cannot extract url for event ${(0,
          p.jH)(e)}`),
          null
      }
    }
    v.__initStatic();
    var b = n(535);
    let E;
    class w {
      static __initStatic() {
        this.id = "FunctionToString"
      }
      constructor() {
        this.name = w.id
      }
      setupOnce() {
        E = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...e) {
            const t = (0,
              b.HK)(this) || this;
            return E.apply(t, e)
          }
        } catch (e) { }
      }
    }
    w.__initStatic();
    var S = n(1195);
    const T = [];
    function R(e) {
      const t = e.defaultIntegrations || []
        , n = e.integrations;
      let r;
      t.forEach((e => {
        e.isDefaultInstance = !0
      }
      )),
        r = Array.isArray(n) ? [...t, ...n] : "function" === typeof n ? (0,
          p.lE)(n(t)) : t;
      const i = function (e) {
        const t = {};
        return e.forEach((e => {
          const { name: n } = e
            , r = t[n];
          r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
        }
        )),
          Object.keys(t).map((e => t[e]))
      }(r)
        , o = function (e, t) {
          for (let n = 0; n < e.length; n++)
            if (!0 === t(e[n]))
              return n;
          return -1
        }(i, (e => "Debug" === e.name));
      if (-1 !== o) {
        const [e] = i.splice(o, 1);
        i.push(e)
      }
      return i
    }
    function I(e, t, n) {
      if (n[t.name] = t,
        -1 === T.indexOf(t.name) && (t.setupOnce(S.cc, i.Gd),
          T.push(t.name)),
        e.on && "function" === typeof t.preprocessEvent) {
        const n = t.preprocessEvent.bind(t);
        e.on("preprocessEvent", ((t, r) => n(t, r, e)))
      }
      if (e.addEventProcessor && "function" === typeof t.processEvent) {
        const n = t.processEvent.bind(t)
          , r = Object.assign(((t, r) => n(t, r, e)), {
            id: t.name
          });
        e.addEventProcessor(r)
      }
      ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`Integration installed: ${t.name}`)
    }
    const O = /\(error: (.*)\)/
      , k = /captureMessage|captureException/;
    function C(...e) {
      const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
      return (e, n = 0) => {
        const r = []
          , i = e.split("\n");
        for (let o = n; o < i.length; o++) {
          const e = i[o];
          if (e.length > 1024)
            continue;
          const n = O.test(e) ? e.replace(O, "$1") : e;
          if (!n.match(/\S*Error: /)) {
            for (const e of t) {
              const t = e(n);
              if (t) {
                r.push(t);
                break
              }
            }
            if (r.length >= 50)
              break
          }
        }
        return function (e) {
          if (!e.length)
            return [];
          const t = Array.from(e);
          /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop();
          t.reverse(),
            k.test(t[t.length - 1].function || "") && (t.pop(),
              k.test(t[t.length - 1].function || "") && t.pop());
          return t.slice(0, 50).map((e => ({
            ...e,
            filename: e.filename || t[t.length - 1].filename,
            function: e.function || "?"
          })))
        }(r)
      }
    }
    const N = "<anonymous>";
    function A(e) {
      try {
        return e && "function" === typeof e && e.name || N
      } catch (t) {
        return N
      }
    }
    var P = n(1235);
    const D = (0,
      P.Rf)();
    function x() {
      if (!("fetch" in D))
        return !1;
      try {
        return new Headers,
          new Request("http://www.example.com"),
          new Response,
          !0
      } catch (e) {
        return !1
      }
    }
    function L(e) {
      return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    var U = n(7597);
    const j = (0,
      P.Rf)();
    const B = (0,
      P.Rf)()
      , M = {}
      , F = {};
    function $(e) {
      if (!F[e])
        switch (F[e] = !0,
        e) {
          case "console":
            !function () {
              if (!("console" in P.n2))
                return;
              f.RU.forEach((function (e) {
                e in P.n2.console && (0,
                  b.hl)(P.n2.console, e, (function (t) {
                    return f.LD[e] = t,
                      function (...t) {
                        Y("console", {
                          args: t,
                          level: e
                        });
                        const n = f.LD[e];
                        n && n.apply(P.n2.console, t)
                      }
                  }
                  ))
              }
              ))
            }();
            break;
          case "dom":
            !function () {
              if (!B.document)
                return;
              const e = Y.bind(null, "dom")
                , t = J(e, !0);
              B.document.addEventListener("click", t, !1),
                B.document.addEventListener("keypress", t, !1),
                ["EventTarget", "Node"].forEach((t => {
                  const n = B[t] && B[t].prototype;
                  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                    b.hl)(n, "addEventListener", (function (t) {
                      return function (n, r, i) {
                        if ("click" === n || "keypress" == n)
                          try {
                            const r = this
                              , o = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}
                              , s = o[n] = o[n] || {
                                refCount: 0
                              };
                            if (!s.handler) {
                              const r = J(e);
                              s.handler = r,
                                t.call(this, n, r, i)
                            }
                            s.refCount++
                          } catch (o) { }
                        return t.call(this, n, r, i)
                      }
                    }
                    )),
                    (0,
                      b.hl)(n, "removeEventListener", (function (e) {
                        return function (t, n, r) {
                          if ("click" === t || "keypress" == t)
                            try {
                              const n = this
                                , i = n.__sentry_instrumentation_handlers__ || {}
                                , o = i[t];
                              o && (o.refCount--,
                                o.refCount <= 0 && (e.call(this, t, o.handler, r),
                                  o.handler = void 0,
                                  delete i[t]),
                                0 === Object.keys(i).length && delete n.__sentry_instrumentation_handlers__)
                            } catch (i) { }
                          return e.call(this, t, n, r)
                        }
                      }
                      )))
                }
                ))
            }();
            break;
          case "xhr":
            !function () {
              if (!B.XMLHttpRequest)
                return;
              const e = XMLHttpRequest.prototype;
              (0,
                b.hl)(e, "open", (function (e) {
                  return function (...t) {
                    const n = Date.now()
                      , r = t[1]
                      , i = this.__sentry_xhr_v2__ = {
                        method: (0,
                          U.HD)(t[0]) ? t[0].toUpperCase() : t[0],
                        url: t[1],
                        request_headers: {}
                      };
                    (0,
                      U.HD)(r) && "POST" === i.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    const o = () => {
                      const e = this.__sentry_xhr_v2__;
                      if (e && 4 === this.readyState) {
                        try {
                          e.status_code = this.status
                        } catch (r) { }
                        Y("xhr", {
                          args: t,
                          endTimestamp: Date.now(),
                          startTimestamp: n,
                          xhr: this
                        })
                      }
                    }
                      ;
                    return "onreadystatechange" in this && "function" === typeof this.onreadystatechange ? (0,
                      b.hl)(this, "onreadystatechange", (function (e) {
                        return function (...t) {
                          return o(),
                            e.apply(this, t)
                        }
                      }
                      )) : this.addEventListener("readystatechange", o),
                      (0,
                        b.hl)(this, "setRequestHeader", (function (e) {
                          return function (...t) {
                            const [n, r] = t
                              , i = this.__sentry_xhr_v2__;
                            return i && (i.request_headers[n.toLowerCase()] = r),
                              e.apply(this, t)
                          }
                        }
                        )),
                      e.apply(this, t)
                  }
                }
                )),
                (0,
                  b.hl)(e, "send", (function (e) {
                    return function (...t) {
                      const n = this.__sentry_xhr_v2__;
                      return n && void 0 !== t[0] && (n.body = t[0]),
                        Y("xhr", {
                          args: t,
                          startTimestamp: Date.now(),
                          xhr: this
                        }),
                        e.apply(this, t)
                    }
                  }
                  ))
            }();
            break;
          case "fetch":
            !function () {
              if (!function () {
                if (!x())
                  return !1;
                if (L(D.fetch))
                  return !0;
                let e = !1;
                const t = D.document;
                if (t && "function" === typeof t.createElement)
                  try {
                    const n = t.createElement("iframe");
                    n.hidden = !0,
                      t.head.appendChild(n),
                      n.contentWindow && n.contentWindow.fetch && (e = L(n.contentWindow.fetch)),
                      t.head.removeChild(n)
                  } catch (n) {
                    ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
                  }
                return e
              }())
                return;
              (0,
                b.hl)(P.n2, "fetch", (function (e) {
                  return function (...t) {
                    const { method: n, url: r } = function (e) {
                      if (0 === e.length)
                        return {
                          method: "GET",
                          url: ""
                        };
                      if (2 === e.length) {
                        const [t, n] = e;
                        return {
                          url: W(t),
                          method: H(n, "method") ? String(n.method).toUpperCase() : "GET"
                        }
                      }
                      const t = e[0];
                      return {
                        url: W(t),
                        method: H(t, "method") ? String(t.method).toUpperCase() : "GET"
                      }
                    }(t)
                      , i = {
                        args: t,
                        fetchData: {
                          method: n,
                          url: r
                        },
                        startTimestamp: Date.now()
                      };
                    return Y("fetch", {
                      ...i
                    }),
                      e.apply(P.n2, t).then((e => (Y("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        response: e
                      }),
                        e)), (e => {
                          throw Y("fetch", {
                            ...i,
                            endTimestamp: Date.now(),
                            error: e
                          }),
                          e
                        }
                      ))
                  }
                }
                ))
            }();
            break;
          case "history":
            !function () {
              if (!function () {
                const e = j.chrome
                  , t = e && e.app && e.app.runtime
                  , n = "history" in j && !!j.history.pushState && !!j.history.replaceState;
                return !t && n
              }())
                return;
              const e = B.onpopstate;
              function t(e) {
                return function (...t) {
                  const n = t.length > 2 ? t[2] : void 0;
                  if (n) {
                    const e = q
                      , t = String(n);
                    q = t,
                      Y("history", {
                        from: e,
                        to: t
                      })
                  }
                  return e.apply(this, t)
                }
              }
              B.onpopstate = function (...t) {
                const n = B.location.href
                  , r = q;
                if (q = n,
                  Y("history", {
                    from: r,
                    to: n
                  }),
                  e)
                  try {
                    return e.apply(this, t)
                  } catch (i) { }
              }
                ,
                (0,
                  b.hl)(B.history, "pushState", t),
                (0,
                  b.hl)(B.history, "replaceState", t)
            }();
            break;
          case "error":
            Z = B.onerror,
              B.onerror = function (e, t, n, r, i) {
                return Y("error", {
                  column: r,
                  error: i,
                  line: n,
                  msg: e,
                  url: t
                }),
                  !(!Z || Z.__SENTRY_LOADER__) && Z.apply(this, arguments)
              }
              ,
              B.onerror.__SENTRY_INSTRUMENTED__ = !0;
            break;
          case "unhandledrejection":
            X = B.onunhandledrejection,
              B.onunhandledrejection = function (e) {
                return Y("unhandledrejection", e),
                  !(X && !X.__SENTRY_LOADER__) || X.apply(this, arguments)
              }
              ,
              B.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
            break;
          default:
            return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("unknown instrumentation type:", e))
        }
    }
    function G(e, t) {
      M[e] = M[e] || [],
        M[e].push(t),
        $(e)
    }
    function Y(e, t) {
      if (e && M[e])
        for (const r of M[e] || [])
          try {
            r(t)
          } catch (n) {
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${A(r)}\nError:`, n)
          }
    }
    function H(e, t) {
      return !!e && "object" === typeof e && !!e[t]
    }
    function W(e) {
      return "string" === typeof e ? e : e ? H(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
    }
    let q;
    let V, z, K;
    function J(e, t = !1) {
      return n => {
        if (!n || n._sentryCaptured)
          return;
        const r = function (e) {
          try {
            return e.target
          } catch (t) {
            return null
          }
        }(n);
        if (function (e, t) {
          return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
        }(n.type, r))
          return;
        (0,
          b.xp)(n, "_sentryCaptured", !0),
          r && !r._sentryId && (0,
            b.xp)(r, "_sentryId", (0,
              p.DM)());
        const i = "keypress" === n.type ? "input" : n.type;
        (function (e) {
          if (e.type !== z)
            return !1;
          try {
            if (!e.target || e.target._sentryId !== K)
              return !1
          } catch (t) { }
          return !0
        }
        )(n) || (e({
          event: n,
          name: i,
          global: t
        }),
          z = n.type,
          K = r ? r._sentryId : void 0),
          clearTimeout(V),
          V = B.setTimeout((() => {
            K = void 0,
              z = void 0
          }
          ), 1e3)
      }
    }
    let Z = null;
    let X = null;
    const Q = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function ee(e, t = !1) {
      const { host: n, path: r, pass: i, port: o, projectId: s, protocol: a, publicKey: c } = e;
      return `${a}://${c}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${s}`
    }
    function te(e) {
      const t = Q.exec(e);
      if (!t)
        return void console.error(`Invalid Sentry Dsn: ${e}`);
      const [n, r, i = "", o, s = "", a] = t.slice(1);
      let c = ""
        , u = a;
      const l = u.split("/");
      if (l.length > 1 && (c = l.slice(0, -1).join("/"),
        u = l.pop()),
        u) {
        const e = u.match(/^\d+/);
        e && (u = e[0])
      }
      return ne({
        host: o,
        pass: i,
        path: c,
        projectId: u,
        port: s,
        protocol: n,
        publicKey: r
      })
    }
    function ne(e) {
      return {
        protocol: e.protocol,
        publicKey: e.publicKey || "",
        pass: e.pass || "",
        host: e.host,
        port: e.port || "",
        path: e.path || "",
        projectId: e.projectId
      }
    }
    function re(e) {
      const t = "string" === typeof e ? te(e) : ne(e);
      if (t && function (e) {
        if ("undefined" !== typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__)
          return !0;
        const { port: t, projectId: n, protocol: r } = e;
        return !["protocol", "publicKey", "host", "projectId"].find((t => !e[t] && (f.kg.error(`Invalid Sentry Dsn: ${t} missing`),
          !0))) && (n.match(/^\d+$/) ? function (e) {
            return "http" === e || "https" === e
          }(r) ? !t || !isNaN(parseInt(t, 10)) || (f.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`),
            !1) : (f.kg.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
              !1) : (f.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                !1))
      }(t))
        return t
    }
    var ie = n(6893);
    function oe(e, t = 100, n = 1 / 0) {
      try {
        return ae("", e, t, n)
      } catch (r) {
        return {
          ERROR: `**non-serializable** (${r})`
        }
      }
    }
    function se(e, t = 3, n = 102400) {
      const r = oe(e, t);
      return i = r,
        function (e) {
          return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(i)) > n ? se(e, t - 1, n) : r;
      var i
    }
    function ae(e, t, r = 1 / 0, i = 1 / 0, o = function () {
      const e = "function" === typeof WeakSet
        , t = e ? new WeakSet : [];
      return [function (n) {
        if (e)
          return !!t.has(n) || (t.add(n),
            !1);
        for (let e = 0; e < t.length; e++)
          if (t[e] === n)
            return !0;
        return t.push(n),
          !1
      }
        , function (n) {
          if (e)
            t.delete(n);
          else
            for (let e = 0; e < t.length; e++)
              if (t[e] === n) {
                t.splice(e, 1);
                break
              }
        }
      ]
    }()) {
      const [s, a] = o;
      if (null == t || ["number", "boolean", "string"].includes(typeof t) && !(0,
        U.i2)(t))
        return t;
      const c = function (e, t) {
        try {
          if ("domain" === e && t && "object" === typeof t && t._events)
            return "[Domain]";
          if ("domainEmitter" === e)
            return "[DomainEmitter]";
          if ("undefined" !== typeof n.g && t === n.g)
            return "[Global]";
          if ("undefined" !== typeof window && t === window)
            return "[Window]";
          if ("undefined" !== typeof document && t === document)
            return "[Document]";
          if ((0,
            U.y1)(t))
            return "[VueViewModel]";
          if ((0,
            U.Cy)(t))
            return "[SyntheticEvent]";
          if ("number" === typeof t && t !== t)
            return "[NaN]";
          if ("function" === typeof t)
            return `[Function: ${A(t)}]`;
          if ("symbol" === typeof t)
            return `[${String(t)}]`;
          if ("bigint" === typeof t)
            return `[BigInt: ${String(t)}]`;
          const r = function (e) {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : "null prototype"
          }(t);
          return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
          return `**non-serializable** (${r})`
        }
      }(e, t);
      if (!c.startsWith("[object "))
        return c;
      if (t.__sentry_skip_normalization__)
        return t;
      const u = "number" === typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : r;
      if (0 === u)
        return c.replace("object ", "");
      if (s(t))
        return "[Circular ~]";
      const l = t;
      if (l && "function" === typeof l.toJSON)
        try {
          return ae("", l.toJSON(), u - 1, i, o)
        } catch (p) { }
      const d = Array.isArray(t) ? [] : {};
      let h = 0;
      const f = (0,
        b.Sh)(t);
      for (const n in f) {
        if (!Object.prototype.hasOwnProperty.call(f, n))
          continue;
        if (h >= i) {
          d[n] = "[MaxProperties ~]";
          break
        }
        const e = f[n];
        d[n] = ae(n, e, u - 1, i, o),
          h++
      }
      return a(t),
        d
    }
    function ce(e, t = []) {
      return [e, t]
    }
    function ue(e, t) {
      const [n, r] = e;
      return [n, [...r, t]]
    }
    function le(e, t) {
      const n = e[1];
      for (const r of n) {
        if (t(r, r[0].type))
          return !0
      }
      return !1
    }
    function de(e, t) {
      return (t || new TextEncoder).encode(e)
    }
    function he(e, t) {
      const [n, r] = e;
      let i = JSON.stringify(n);
      function o(e) {
        "string" === typeof i ? i = "string" === typeof e ? i + e : [de(i, t), e] : i.push("string" === typeof e ? de(e, t) : e)
      }
      for (const a of r) {
        const [e, t] = a;
        if (o(`\n${JSON.stringify(e)}\n`),
          "string" === typeof t || t instanceof Uint8Array)
          o(t);
        else {
          let e;
          try {
            e = JSON.stringify(t)
          } catch (s) {
            e = JSON.stringify(oe(t))
          }
          o(e)
        }
      }
      return "string" === typeof i ? i : function (e) {
        const t = e.reduce(((e, t) => e + t.length), 0)
          , n = new Uint8Array(t);
        let r = 0;
        for (const i of e)
          n.set(i, r),
            r += i.length;
        return n
      }(i)
    }
    function fe(e, t) {
      const n = "string" === typeof e.data ? de(e.data, t) : e.data;
      return [(0,
        b.Jr)({
          type: "attachment",
          length: n.length,
          filename: e.filename,
          content_type: e.contentType,
          attachment_type: e.attachmentType
        }), n]
    }
    const pe = {
      session: "session",
      sessions: "session",
      attachment: "attachment",
      transaction: "transaction",
      event: "error",
      client_report: "internal",
      user_report: "default",
      profile: "profile",
      replay_event: "replay",
      replay_recording: "replay",
      check_in: "monitor",
      feedback: "feedback",
      statsd: "unknown"
    };
    function me(e) {
      return pe[e]
    }
    function ge(e) {
      if (!e || !e.sdk)
        return;
      const { name: t, version: n } = e.sdk;
      return {
        name: t,
        version: n
      }
    }
    class _e extends Error {
      constructor(e, t = "warn") {
        super(e),
          this.message = e,
          this.name = new.target.prototype.constructor.name,
          Object.setPrototypeOf(this, new.target.prototype),
          this.logLevel = t
      }
    }
    function ve(e) {
      const t = e.protocol ? `${e.protocol}:` : ""
        , n = e.port ? `:${e.port}` : "";
      return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
    }
    function ye(e, t = {}) {
      const n = "string" === typeof t ? t : t.tunnel
        , r = "string" !== typeof t && t._metadata ? t._metadata.sdk : void 0;
      return n || `${function (e) {
        return `${ve(e)}${e.projectId}/envelope/`
      }(e)}?${function (e, t) {
        return (0,
          b._j)({
            sentry_key: e.publicKey,
            sentry_version: "7",
            ...t && {
              sentry_client: `${t.name}/${t.version}`
            }
          })
      }(e, r)}`
    }
    function be(e, t, n, r) {
      const i = ge(n)
        , o = e.type && "replay_event" !== e.type ? e.type : "event";
      !function (e, t) {
        t && (e.sdk = e.sdk || {},
          e.sdk.name = e.sdk.name || t.name,
          e.sdk.version = e.sdk.version || t.version,
          e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []],
          e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []])
      }(e, n && n.sdk);
      const s = function (e, t, n, r) {
        const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: e.event_id,
          sent_at: (new Date).toISOString(),
          ...t && {
            sdk: t
          },
          ...!!n && r && {
            dsn: ee(r)
          },
          ...i && {
            trace: (0,
              b.Jr)({
                ...i
              })
          }
        }
      }(e, i, r, t);
      delete e.sdkProcessingMetadata;
      return ce(s, [[{
        type: o
      }, e]])
    }
    var Ee = n(9015)
      , we = n(1131);
    function Se(e, t, n) {
      const r = t.getOptions()
        , { publicKey: i } = t.getDsn() || {}
        , { segment: o } = n && n.getUser() || {}
        , s = (0,
          b.Jr)({
            environment: r.environment || we.J,
            release: r.release,
            user_segment: o,
            public_key: i,
            trace_id: e
          });
      return t.emit && t.emit("createDsc", s),
        s
    }
    var Te = n(1170)
      , Re = n(350);
    function Ie(e, t, n, r, i) {
      const { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e
        , a = {
          ...t,
          event_id: t.event_id || n.event_id || (0,
            p.DM)(),
          timestamp: t.timestamp || (0,
            Te.yW)()
        }
        , c = n.integrations || e.integrations.map((e => e.name));
      !function (e, t) {
        const { environment: n, release: r, dist: i, maxValueLength: o = 250 } = t;
        "environment" in e || (e.environment = "environment" in t ? n : we.J);
        void 0 === e.release && void 0 !== r && (e.release = r);
        void 0 === e.dist && void 0 !== i && (e.dist = i);
        e.message && (e.message = (0,
          m.$G)(e.message, o));
        const s = e.exception && e.exception.values && e.exception.values[0];
        s && s.value && (s.value = (0,
          m.$G)(s.value, o));
        const a = e.request;
        a && a.url && (a.url = (0,
          m.$G)(a.url, o))
      }(a, e),
        function (e, t) {
          t.length > 0 && (e.sdk = e.sdk || {},
            e.sdk.integrations = [...e.sdk.integrations || [], ...t])
        }(a, c),
        void 0 === t.type && function (e, t) {
          const n = P.n2._sentryDebugIds;
          if (!n)
            return;
          let r;
          const i = Oe.get(t);
          i ? r = i : (r = new Map,
            Oe.set(t, r));
          const o = Object.keys(n).reduce(((e, i) => {
            let o;
            const s = r.get(i);
            s ? o = s : (o = t(i),
              r.set(i, o));
            for (let t = o.length - 1; t >= 0; t--) {
              const r = o[t];
              if (r.filename) {
                e[r.filename] = n[i];
                break
              }
            }
            return e
          }
          ), {});
          try {
            e.exception.values.forEach((e => {
              e.stacktrace.frames.forEach((e => {
                e.filename && (e.debug_id = o[e.filename])
              }
              ))
            }
            ))
          } catch (s) { }
        }(a, e.stackParser);
      let u = r;
      n.captureContext && (u = Re.s.clone(u).update(n.captureContext));
      let l = (0,
        ie.WD)(a);
      const d = i && i.getEventProcessors ? i.getEventProcessors() : [];
      if (u) {
        if (u.getAttachments) {
          const e = [...n.attachments || [], ...u.getAttachments()];
          e.length && (n.attachments = e)
        }
        l = u.applyToEvent(a, n, d)
      } else
        l = (0,
          S.RP)([...d, ...(0,
            S.fH)()], a, n);
      return l.then((e => (e && function (e) {
        const t = {};
        try {
          e.exception.values.forEach((e => {
            e.stacktrace.frames.forEach((e => {
              e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                delete e.debug_id)
            }
            ))
          }
          ))
        } catch (r) { }
        if (0 === Object.keys(t).length)
          return;
        e.debug_meta = e.debug_meta || {},
          e.debug_meta.images = e.debug_meta.images || [];
        const n = e.debug_meta.images;
        Object.keys(t).forEach((e => {
          n.push({
            type: "sourcemap",
            code_file: e,
            debug_id: t[e]
          })
        }
        ))
      }(e),
        "number" === typeof o && o > 0 ? function (e, t, n) {
          if (!e)
            return null;
          const r = {
            ...e,
            ...e.breadcrumbs && {
              breadcrumbs: e.breadcrumbs.map((e => ({
                ...e,
                ...e.data && {
                  data: oe(e.data, t, n)
                }
              })))
            },
            ...e.user && {
              user: oe(e.user, t, n)
            },
            ...e.contexts && {
              contexts: oe(e.contexts, t, n)
            },
            ...e.extra && {
              extra: oe(e.extra, t, n)
            }
          };
          e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
            e.contexts.trace.data && (r.contexts.trace.data = oe(e.contexts.trace.data, t, n)));
          e.spans && (r.spans = e.spans.map((e => (e.data && (e.data = oe(e.data, t, n)),
            e))));
          return r
        }(e, o, s) : e)))
    }
    const Oe = new WeakMap;
    const ke = "Not capturing exception because it's already been captured.";
    function Ce(e) {
      return void 0 === e.type
    }
    function Ne(e) {
      return "transaction" === e.type
    }
    var Ae = n(8518);
    function Pe(e, t) {
      const n = xe(e, t)
        , r = {
          type: t && t.name,
          value: Ue(t)
        };
      return n.length && (r.stacktrace = {
        frames: n
      }),
        void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
        r
    }
    function De(e, t) {
      return {
        exception: {
          values: [Pe(e, t)]
        }
      }
    }
    function xe(e, t) {
      const n = t.stacktrace || t.stack || ""
        , r = function (e) {
          if (e) {
            if ("number" === typeof e.framesToPop)
              return e.framesToPop;
            if (Le.test(e.message))
              return 1
          }
          return 0
        }(t);
      try {
        return e(n, r)
      } catch (i) { }
      return []
    }
    const Le = /Minified React error #\d+;/i;
    function Ue(e) {
      const t = e && e.message;
      return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
    }
    function je(e, t, n, r, o) {
      let s;
      if ((0,
        U.VW)(t) && t.error) {
        return De(e, t.error)
      }
      if ((0,
        U.TX)(t) || (0,
          U.fm)(t)) {
        const i = t;
        if ("stack" in t)
          s = De(e, t);
        else {
          const t = i.name || ((0,
            U.TX)(i) ? "DOMError" : "DOMException")
            , o = i.message ? `${t}: ${i.message}` : t;
          s = Be(e, o, n, r),
            (0,
              p.Db)(s, o)
        }
        return "code" in i && (s.tags = {
          ...s.tags,
          "DOMException.code": `${i.code}`
        }),
          s
      }
      if ((0,
        U.VZ)(t))
        return De(e, t);
      if ((0,
        U.PO)(t) || (0,
          U.cO)(t)) {
        return s = function (e, t, n, r) {
          const o = (0,
            i.Gd)().getClient()
            , s = o && o.getOptions().normalizeDepth
            , a = {
              exception: {
                values: [{
                  type: (0,
                    U.cO)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                  value: Me(t, {
                    isUnhandledRejection: r
                  })
                }]
              },
              extra: {
                __serialized__: se(t, s)
              }
            };
          if (n) {
            const t = xe(e, n);
            t.length && (a.exception.values[0].stacktrace = {
              frames: t
            })
          }
          return a
        }(e, t, n, o),
          (0,
            p.EG)(s, {
              synthetic: !0
            }),
          s
      }
      return s = Be(e, t, n, r),
        (0,
          p.Db)(s, `${t}`, void 0),
        (0,
          p.EG)(s, {
            synthetic: !0
          }),
        s
    }
    function Be(e, t, n, r) {
      const i = {
        message: t
      };
      if (r && n) {
        const r = xe(e, n);
        r.length && (i.exception = {
          values: [{
            value: t,
            stacktrace: {
              frames: r
            }
          }]
        })
      }
      return i
    }
    function Me(e, { isUnhandledRejection: t }) {
      const n = (0,
        b.zf)(e)
        , r = t ? "promise rejection" : "exception";
      if ((0,
        U.VW)(e))
        return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
      if ((0,
        U.cO)(e)) {
        return `Event \`${function (e) {
          try {
            const t = Object.getPrototypeOf(e);
            return t ? t.constructor.name : void 0
          } catch (t) { }
        }(e)}\` (type=${e.type}) captured as ${r}`
      }
      return `Object captured as ${r} with keys: ${n}`
    }
    var Fe = n(4487);
    const $e = P.n2;
    let Ge = 0;
    function Ye() {
      return Ge > 0
    }
    function He() {
      Ge++,
        setTimeout((() => {
          Ge--
        }
        ))
    }
    function We(e, t = {}, n) {
      if ("function" !== typeof e)
        return e;
      try {
        const t = e.__sentry_wrapped__;
        if (t)
          return t;
        if ((0,
          b.HK)(e))
          return e
      } catch (i) {
        return e
      }
      const r = function () {
        const r = Array.prototype.slice.call(arguments);
        try {
          n && "function" === typeof n && n.apply(this, arguments);
          const i = r.map((e => We(e, t)));
          return e.apply(this, i)
        } catch (i) {
          throw He(),
          (0,
            Fe.$e)((e => {
              e.addEventProcessor((e => (t.mechanism && ((0,
                p.Db)(e, void 0, void 0),
                (0,
                  p.EG)(e, t.mechanism)),
                e.extra = {
                  ...e.extra,
                  arguments: r
                },
                e))),
                (0,
                  Fe.Tb)(i)
            }
            )),
          i
        }
      };
      try {
        for (const t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
      } catch (o) { }
      (0,
        b.$Q)(r, e),
        (0,
          b.xp)(e, "__sentry_wrapped__", r);
      try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
          get: () => e.name
        })
      } catch (o) { }
      return r
    }
    class qe extends class {
      constructor(e) {
        if (this._options = e,
          this._integrations = {},
          this._integrationsInitialized = !1,
          this._numProcessing = 0,
          this._outcomes = {},
          this._hooks = {},
          this._eventProcessors = [],
          e.dsn ? this._dsn = re(e.dsn) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("No DSN provided, client will not send events."),
          this._dsn) {
          const t = ye(this._dsn, e);
          this._transport = e.transport({
            recordDroppedEvent: this.recordDroppedEvent.bind(this),
            ...e.transportOptions,
            url: t
          })
        }
      }
      captureException(e, t, n) {
        if ((0,
          p.YO)(e))
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(ke));
        let r = t && t.event_id;
        return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, n))).then((e => {
          r = e
        }
        ))),
          r
      }
      captureMessage(e, t, n, r) {
        let i = n && n.event_id;
        const o = (0,
          U.pt)(e) ? this.eventFromMessage(String(e), t, n) : this.eventFromException(e, n);
        return this._process(o.then((e => this._captureEvent(e, n, r))).then((e => {
          i = e
        }
        ))),
          i
      }
      captureEvent(e, t, n) {
        if (t && t.originalException && (0,
          p.YO)(t.originalException))
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(ke));
        let r = t && t.event_id;
        return this._process(this._captureEvent(e, t, n).then((e => {
          r = e
        }
        ))),
          r
      }
      captureSession(e) {
        "string" !== typeof e.release ? ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
          (0,
            Ee.CT)(e, {
              init: !1
            }))
      }
      getDsn() {
        return this._dsn
      }
      getOptions() {
        return this._options
      }
      getSdkMetadata() {
        return this._options._metadata
      }
      getTransport() {
        return this._transport
      }
      flush(e) {
        const t = this._transport;
        return t ? this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e)))) : (0,
          ie.WD)(!0)
      }
      close(e) {
        return this.flush(e).then((e => (this.getOptions().enabled = !1,
          e)))
      }
      getEventProcessors() {
        return this._eventProcessors
      }
      addEventProcessor(e) {
        this._eventProcessors.push(e)
      }
      setupIntegrations(e) {
        (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && (this._integrations = function (e, t) {
          const n = {};
          return t.forEach((t => {
            t && I(e, t, n)
          }
          )),
            n
        }(this, this._options.integrations),
          this._integrationsInitialized = !0)
      }
      getIntegrationById(e) {
        return this._integrations[e]
      }
      getIntegration(e) {
        try {
          return this._integrations[e.id] || null
        } catch (t) {
          return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Cannot retrieve integration ${e.id} from the current Client`),
            null
        }
      }
      addIntegration(e) {
        I(this, e, this._integrations)
      }
      sendEvent(e, t = {}) {
        this.emit("beforeSendEvent", e, t);
        let n = be(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (const i of t.attachments || [])
          n = ue(n, fe(i, this._options.transportOptions && this._options.transportOptions.textEncoder));
        const r = this._sendEnvelope(n);
        r && r.then((t => this.emit("afterSendEvent", e, t)), null)
      }
      sendSession(e) {
        const t = function (e, t, n, r) {
          const i = ge(n);
          return ce({
            sent_at: (new Date).toISOString(),
            ...i && {
              sdk: i
            },
            ...!!r && t && {
              dsn: ee(t)
            }
          }, ["aggregates" in e ? [{
            type: "sessions"
          }, e] : [{
            type: "session"
          }, e.toJSON()]])
        }(e, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(t)
      }
      recordDroppedEvent(e, t, n) {
        if (this._options.sendClientReports) {
          const n = `${e}:${t}`;
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`Adding outcome: "${n}"`),
            this._outcomes[n] = this._outcomes[n] + 1 || 1
        }
      }
      on(e, t) {
        this._hooks[e] || (this._hooks[e] = []),
          this._hooks[e].push(t)
      }
      emit(e, ...t) {
        this._hooks[e] && this._hooks[e].forEach((e => e(...t)))
      }
      _updateSessionFromEvent(e, t) {
        let n = !1
          , r = !1;
        const i = t.exception && t.exception.values;
        if (i) {
          r = !0;
          for (const e of i) {
            const t = e.mechanism;
            if (t && !1 === t.handled) {
              n = !0;
              break
            }
          }
        }
        const o = "ok" === e.status;
        (o && 0 === e.errors || o && n) && ((0,
          Ee.CT)(e, {
            ...n && {
              status: "crashed"
            },
            errors: e.errors || Number(r || n)
          }),
          this.captureSession(e))
      }
      _isClientDoneProcessing(e) {
        return new ie.cW((t => {
          let n = 0;
          const r = setInterval((() => {
            0 == this._numProcessing ? (clearInterval(r),
              t(!0)) : (n += 1,
                e && n >= e && (clearInterval(r),
                  t(!1)))
          }
          ), 1)
        }
        ))
      }
      _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._transport
      }
      _prepareEvent(e, t, n) {
        const r = this.getOptions()
          , i = Object.keys(this._integrations);
        return !t.integrations && i.length > 0 && (t.integrations = i),
          this.emit("preprocessEvent", e, t),
          Ie(r, e, t, n, this).then((e => {
            if (null === e)
              return e;
            const { propagationContext: t } = e.sdkProcessingMetadata || {};
            if (!(e.contexts && e.contexts.trace) && t) {
              const { traceId: r, spanId: i, parentSpanId: o, dsc: s } = t;
              e.contexts = {
                trace: {
                  trace_id: r,
                  span_id: i,
                  parent_span_id: o
                },
                ...e.contexts
              };
              const a = s || Se(r, this, n);
              e.sdkProcessingMetadata = {
                dynamicSamplingContext: a,
                ...e.sdkProcessingMetadata
              }
            }
            return e
          }
          ))
      }
      _captureEvent(e, t = {}, n) {
        return this._processEvent(e, t, n).then((e => e.event_id), (e => {
          if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
            const t = e;
            "log" === t.logLevel ? f.kg.log(t.message) : f.kg.warn(t)
          }
        }
        ))
      }
      _processEvent(e, t, n) {
        const r = this.getOptions()
          , { sampleRate: i } = r
          , o = Ne(e)
          , s = Ce(e)
          , a = e.type || "error"
          , c = `before send for type \`${a}\``;
        if (s && "number" === typeof i && Math.random() > i)
          return this.recordDroppedEvent("sample_rate", "error", e),
            (0,
              ie.$2)(new _e(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
        const u = "replay_event" === a ? "replay" : a;
        return this._prepareEvent(e, t, n).then((n => {
          if (null === n)
            throw this.recordDroppedEvent("event_processor", u, e),
            new _e("An event processor returned `null`, will not send event.", "log");
          if (t.data && !0 === t.data.__sentry__)
            return n;
          const i = function (e, t, n) {
            const { beforeSend: r, beforeSendTransaction: i } = e;
            if (Ce(t) && r)
              return r(t, n);
            if (Ne(t) && i)
              return i(t, n);
            return t
          }(r, n, t);
          return function (e, t) {
            const n = `${t} must return \`null\` or a valid event.`;
            if ((0,
              U.J8)(e))
              return e.then((e => {
                if (!(0,
                  U.PO)(e) && null !== e)
                  throw new _e(n);
                return e
              }
              ), (e => {
                throw new _e(`${t} rejected with ${e}`)
              }
              ));
            if (!(0,
              U.PO)(e) && null !== e)
              throw new _e(n);
            return e
          }(i, c)
        }
        )).then((r => {
          if (null === r)
            throw this.recordDroppedEvent("before_send", u, e),
            new _e(`${c} returned \`null\`, will not send event.`, "log");
          const i = n && n.getSession();
          !o && i && this._updateSessionFromEvent(i, r);
          const s = r.transaction_info;
          if (o && s && r.transaction !== e.transaction) {
            const e = "custom";
            r.transaction_info = {
              ...s,
              source: e
            }
          }
          return this.sendEvent(r, t),
            r
        }
        )).then(null, (e => {
          if (e instanceof _e)
            throw e;
          throw this.captureException(e, {
            data: {
              __sentry__: !0
            },
            originalException: e
          }),
          new _e(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`)
        }
        ))
      }
      _process(e) {
        this._numProcessing++,
          e.then((e => (this._numProcessing--,
            e)), (e => (this._numProcessing--,
              e)))
      }
      _sendEnvelope(e) {
        if (this.emit("beforeEnvelope", e),
          this._isEnabled() && this._transport)
          return this._transport.send(e).then(null, (e => {
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error("Error while sending event:", e)
          }
          ));
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error("Transport disabled")
      }
      _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {},
          Object.keys(e).map((t => {
            const [n, r] = t.split(":");
            return {
              reason: n,
              category: r,
              quantity: e[t]
            }
          }
          ))
      }
    }
    {
      constructor(e) {
        const t = $e.SENTRY_SDK_SOURCE || (0,
          Ae.S)();
        e._metadata = e._metadata || {},
          e._metadata.sdk = e._metadata.sdk || {
            name: "sentry.javascript.browser",
            packages: [{
              name: `${t}:@sentry/browser`,
              version: h
            }],
            version: h
          },
          super(e),
          e.sendClientReports && $e.document && $e.document.addEventListener("visibilitychange", (() => {
            "hidden" === $e.document.visibilityState && this._flushOutcomes()
          }
          ))
      }
      eventFromException(e, t) {
        return function (e, t, n, r) {
          const i = je(e, t, n && n.syntheticException || void 0, r);
          return (0,
            p.EG)(i),
            i.level = "error",
            n && n.event_id && (i.event_id = n.event_id),
            (0,
              ie.WD)(i)
        }(this._options.stackParser, e, t, this._options.attachStacktrace)
      }
      eventFromMessage(e, t = "info", n) {
        return function (e, t, n = "info", r, i) {
          const o = Be(e, t, r && r.syntheticException || void 0, i);
          return o.level = n,
            r && r.event_id && (o.event_id = r.event_id),
            (0,
              ie.WD)(o)
        }(this._options.stackParser, e, t, n, this._options.attachStacktrace)
      }
      captureUserFeedback(e) {
        if (!this._isEnabled())
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("SDK not enabled, will not capture user feedback."));
        const t = function (e, { metadata: t, tunnel: n, dsn: r }) {
          const i = {
            event_id: e.event_id,
            sent_at: (new Date).toISOString(),
            ...t && t.sdk && {
              sdk: {
                name: t.sdk.name,
                version: t.sdk.version
              }
            },
            ...!!n && !!r && {
              dsn: ee(r)
            }
          }
            , o = function (e) {
              return [{
                type: "user_report"
              }, e]
            }(e);
          return ce(i, [o])
        }(e, {
          metadata: this.getSdkMetadata(),
          dsn: this.getDsn(),
          tunnel: this.getOptions().tunnel
        });
        this._sendEnvelope(t)
      }
      _prepareEvent(e, t, n) {
        return e.platform = e.platform || "javascript",
          super._prepareEvent(e, t, n)
      }
      _flushOutcomes() {
        const e = this._clearOutcomes();
        if (0 === e.length)
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("No outcomes to send"));
        if (!this._dsn)
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("No dsn provided, will not send outcomes"));
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("Sending outcomes:", e);
        const t = (n = e,
          ce((r = this._options.tunnel && ee(this._dsn)) ? {
            dsn: r
          } : {}, [[{
            type: "client_report"
          }, {
            timestamp: i || (0,
              Te.yW)(),
            discarded_events: n
          }]]));
        var n, r, i;
        this._sendEnvelope(t)
      }
    }
    var Ve = n(8464);
    class ze {
      static __initStatic() {
        this.id = "GlobalHandlers"
      }
      constructor(e) {
        this.name = ze.id,
          this._options = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
          },
          this._installFunc = {
            onerror: Ke,
            onunhandledrejection: Je
          }
      }
      setupOnce() {
        Error.stackTraceLimit = 50;
        const e = this._options;
        for (const n in e) {
          const r = this._installFunc[n];
          r && e[n] && (t = n,
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`Global Handler attached: ${t}`),
            r(),
            this._installFunc[n] = void 0)
        }
        var t
      }
    }
    function Ke() {
      G("error", (e => {
        const [t, n, r] = Qe();
        if (!t.getIntegration(ze))
          return;
        const { msg: i, url: o, line: s, column: a, error: c } = e;
        if (Ye() || c && c.__sentry_own_request__)
          return;
        const u = void 0 === c && (0,
          U.HD)(i) ? function (e, t, n, r) {
            const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
            let o = (0,
              U.VW)(e) ? e.message : e
              , s = "Error";
            const a = o.match(i);
            a && (s = a[1],
              o = a[2]);
            return Ze({
              exception: {
                values: [{
                  type: s,
                  value: o
                }]
              }
            }, t, n, r)
          }(i, o, s, a) : Ze(je(n, c || i, void 0, r, !1), o, s, a);
        u.level = "error",
          Xe(t, c, u, "onerror")
      }
      ))
    }
    function Je() {
      G("unhandledrejection", (e => {
        const [t, n, r] = Qe();
        if (!t.getIntegration(ze))
          return;
        let i = e;
        try {
          "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
        } catch (s) { }
        if (Ye() || i && i.__sentry_own_request__)
          return !0;
        const o = (0,
          U.pt)(i) ? {
          exception: {
            values: [{
              type: "UnhandledRejection",
              value: `Non-Error promise rejection captured with value: ${String(i)}`
            }]
          }
        } : je(n, i, void 0, r, !0);
        o.level = "error",
          Xe(t, i, o, "onunhandledrejection")
      }
      ))
    }
    function Ze(e, t, n, r) {
      const i = e.exception = e.exception || {}
        , o = i.values = i.values || []
        , s = o[0] = o[0] || {}
        , a = s.stacktrace = s.stacktrace || {}
        , c = a.frames = a.frames || []
        , u = isNaN(parseInt(r, 10)) ? void 0 : r
        , l = isNaN(parseInt(n, 10)) ? void 0 : n
        , d = (0,
          U.HD)(t) && t.length > 0 ? t : (0,
            Ve.l4)();
      return 0 === c.length && c.push({
        colno: u,
        filename: d,
        function: "?",
        in_app: !0,
        lineno: l
      }),
        e
    }
    function Xe(e, t, n, r) {
      (0,
        p.EG)(n, {
          handled: !1,
          type: r
        }),
        e.captureEvent(n, {
          originalException: t
        })
    }
    function Qe() {
      const e = (0,
        i.Gd)()
        , t = e.getClient()
        , n = t && t.getOptions() || {
          stackParser: () => [],
          attachStacktrace: !1
        };
      return [e, n.stackParser, n.attachStacktrace]
    }
    ze.__initStatic();
    const et = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class tt {
      static __initStatic() {
        this.id = "TryCatch"
      }
      constructor(e) {
        this.name = tt.id,
          this._options = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...e
          }
      }
      setupOnce() {
        this._options.setTimeout && (0,
          b.hl)($e, "setTimeout", nt),
          this._options.setInterval && (0,
            b.hl)($e, "setInterval", nt),
          this._options.requestAnimationFrame && (0,
            b.hl)($e, "requestAnimationFrame", rt),
          this._options.XMLHttpRequest && "XMLHttpRequest" in $e && (0,
            b.hl)(XMLHttpRequest.prototype, "send", it);
        const e = this._options.eventTarget;
        if (e) {
          (Array.isArray(e) ? e : et).forEach(ot)
        }
      }
    }
    function nt(e) {
      return function (...t) {
        const n = t[0];
        return t[0] = We(n, {
          mechanism: {
            data: {
              function: A(e)
            },
            handled: !1,
            type: "instrument"
          }
        }),
          e.apply(this, t)
      }
    }
    function rt(e) {
      return function (t) {
        return e.apply(this, [We(t, {
          mechanism: {
            data: {
              function: "requestAnimationFrame",
              handler: A(e)
            },
            handled: !1,
            type: "instrument"
          }
        })])
      }
    }
    function it(e) {
      return function (...t) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
          e in n && "function" === typeof n[e] && (0,
            b.hl)(n, e, (function (t) {
              const n = {
                mechanism: {
                  data: {
                    function: e,
                    handler: A(t)
                  },
                  handled: !1,
                  type: "instrument"
                }
              }
                , r = (0,
                  b.HK)(t);
              return r && (n.mechanism.data.handler = A(r)),
                We(t, n)
            }
            ))
        }
        )),
          e.apply(this, t)
      }
    }
    function ot(e) {
      const t = $e
        , n = t[e] && t[e].prototype;
      n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
        b.hl)(n, "addEventListener", (function (t) {
          return function (n, r, i) {
            try {
              "function" === typeof r.handleEvent && (r.handleEvent = We(r.handleEvent, {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: A(r),
                    target: e
                  },
                  handled: !1,
                  type: "instrument"
                }
              }))
            } catch (o) { }
            return t.apply(this, [n, We(r, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: A(r),
                  target: e
                },
                handled: !1,
                type: "instrument"
              }
            }), i])
          }
        }
        )),
        (0,
          b.hl)(n, "removeEventListener", (function (e) {
            return function (t, n, r) {
              const i = n;
              try {
                const n = i && i.__sentry_wrapped__;
                n && e.call(this, t, n, r)
              } catch (o) { }
              return e.call(this, t, i, r)
            }
          }
          )))
    }
    tt.__initStatic();
    const st = ["fatal", "error", "warning", "log", "info", "debug"];
    function at(e) {
      return "warn" === e ? "warning" : st.includes(e) ? e : "log"
    }
    function ct(e) {
      if (!e)
        return {};
      const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
      if (!t)
        return {};
      const n = t[6] || ""
        , r = t[8] || "";
      return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
      }
    }
    const ut = 1024;
    class lt {
      static __initStatic() {
        this.id = "Breadcrumbs"
      }
      constructor(e) {
        this.name = lt.id,
          this.options = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
          }
      }
      setupOnce() {
        if (this.options.console && G("console", ht),
          this.options.dom && G("dom", function (e) {
            function t(t) {
              let n, r = "object" === typeof e ? e.serializeAttribute : void 0, o = "object" === typeof e && "number" === typeof e.maxStringLength ? e.maxStringLength : void 0;
              o && o > ut && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`),
                o = ut),
                "string" === typeof r && (r = [r]);
              try {
                const e = t.event;
                n = function (e) {
                  return !!e && !!e.target
                }(e) ? (0,
                  Ve.Rt)(e.target, {
                    keyAttrs: r,
                    maxStringLength: o
                  }) : (0,
                    Ve.Rt)(e, {
                      keyAttrs: r,
                      maxStringLength: o
                    })
              } catch (s) {
                n = "<unknown>"
              }
              0 !== n.length && (0,
                i.Gd)().addBreadcrumb({
                  category: `ui.${t.name}`,
                  message: n
                }, {
                  event: t.event,
                  name: t.name,
                  global: t.global
                })
            }
            return t
          }(this.options.dom)),
          this.options.xhr && G("xhr", ft),
          this.options.fetch && G("fetch", pt),
          this.options.history && G("history", mt),
          this.options.sentry) {
          const e = (0,
            i.Gd)().getClient();
          e && e.on && e.on("beforeSendEvent", dt)
        }
      }
    }
    function dt(e) {
      (0,
        i.Gd)().addBreadcrumb({
          category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
          event_id: e.event_id,
          level: e.level,
          message: (0,
            p.jH)(e)
        }, {
          event: e
        })
    }
    function ht(e) {
      const t = {
        category: "console",
        data: {
          arguments: e.args,
          logger: "console"
        },
        level: at(e.level),
        message: (0,
          m.nK)(e.args, " ")
      };
      if ("assert" === e.level) {
        if (!1 !== e.args[0])
          return;
        t.message = `Assertion failed: ${(0,
          m.nK)(e.args.slice(1), " ") || "console.assert"}`,
          t.data.arguments = e.args.slice(1)
      }
      (0,
        i.Gd)().addBreadcrumb(t, {
          input: e.args,
          level: e.level
        })
    }
    function ft(e) {
      const { startTimestamp: t, endTimestamp: n } = e
        , r = e.xhr.__sentry_xhr_v2__;
      if (!t || !n || !r)
        return;
      const { method: o, url: s, status_code: a, body: c } = r
        , u = {
          method: o,
          url: s,
          status_code: a
        }
        , l = {
          xhr: e.xhr,
          input: c,
          startTimestamp: t,
          endTimestamp: n
        };
      (0,
        i.Gd)().addBreadcrumb({
          category: "xhr",
          data: u,
          type: "http"
        }, l)
    }
    function pt(e) {
      const { startTimestamp: t, endTimestamp: n } = e;
      if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
        if (e.error) {
          const r = e.fetchData
            , o = {
              data: e.error,
              input: e.args,
              startTimestamp: t,
              endTimestamp: n
            };
          (0,
            i.Gd)().addBreadcrumb({
              category: "fetch",
              data: r,
              level: "error",
              type: "http"
            }, o)
        } else {
          const r = {
            ...e.fetchData,
            status_code: e.response && e.response.status
          }
            , o = {
              input: e.args,
              response: e.response,
              startTimestamp: t,
              endTimestamp: n
            };
          (0,
            i.Gd)().addBreadcrumb({
              category: "fetch",
              data: r,
              type: "http"
            }, o)
        }
    }
    function mt(e) {
      let t = e.from
        , n = e.to;
      const r = ct($e.location.href);
      let o = ct(t);
      const s = ct(n);
      o.path || (o = r),
        r.protocol === s.protocol && r.host === s.host && (n = s.relative),
        r.protocol === o.protocol && r.host === o.host && (t = o.relative),
        (0,
          i.Gd)().addBreadcrumb({
            category: "navigation",
            data: {
              from: t,
              to: n
            }
          })
    }
    function gt(e, t, n = 250, r, i, o, s) {
      if (!o.exception || !o.exception.values || !s || !(0,
        U.V9)(s.originalException, Error))
        return;
      const a = o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0;
      var c, u;
      a && (o.exception.values = (c = _t(e, t, i, s.originalException, r, o.exception.values, a, 0),
        u = n,
        c.map((e => (e.value && (e.value = (0,
          m.$G)(e.value, u)),
          e)))))
    }
    function _t(e, t, n, r, i, o, s, a) {
      if (o.length >= n + 1)
        return o;
      let c = [...o];
      if ((0,
        U.V9)(r[i], Error)) {
        vt(s, a);
        const o = e(t, r[i])
          , u = c.length;
        yt(o, i, u, a),
          c = _t(e, t, n, r[i], i, [o, ...c], o, u)
      }
      return Array.isArray(r.errors) && r.errors.forEach(((r, o) => {
        if ((0,
          U.V9)(r, Error)) {
          vt(s, a);
          const u = e(t, r)
            , l = c.length;
          yt(u, `errors[${o}]`, l, a),
            c = _t(e, t, n, r, i, [u, ...c], u, l)
        }
      }
      )),
        c
    }
    function vt(e, t) {
      e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
      },
        e.mechanism = {
          ...e.mechanism,
          is_exception_group: !0,
          exception_id: t
        }
    }
    function yt(e, t, n, r) {
      e.mechanism = e.mechanism || {
        type: "generic",
        handled: !0
      },
        e.mechanism = {
          ...e.mechanism,
          type: "chained",
          source: t,
          exception_id: n,
          parent_id: r
        }
    }
    lt.__initStatic();
    class bt {
      static __initStatic() {
        this.id = "LinkedErrors"
      }
      constructor(e = {}) {
        this.name = bt.id,
          this._key = e.key || "cause",
          this._limit = e.limit || 5
      }
      setupOnce() { }
      preprocessEvent(e, t, n) {
        const r = n.getOptions();
        gt(Pe, r.stackParser, r.maxValueLength, this._key, this._limit, e, t)
      }
    }
    bt.__initStatic();
    class Et {
      static __initStatic() {
        this.id = "HttpContext"
      }
      constructor() {
        this.name = Et.id
      }
      setupOnce() { }
      preprocessEvent(e) {
        if (!$e.navigator && !$e.location && !$e.document)
          return;
        const t = e.request && e.request.url || $e.location && $e.location.href
          , { referrer: n } = $e.document || {}
          , { userAgent: r } = $e.navigator || {}
          , i = {
            ...e.request && e.request.headers,
            ...n && {
              Referer: n
            },
            ...r && {
              "User-Agent": r
            }
          }
          , o = {
            ...e.request,
            ...t && {
              url: t
            },
            headers: i
          };
        e.request = o
      }
    }
    Et.__initStatic();
    class wt {
      static __initStatic() {
        this.id = "Dedupe"
      }
      constructor() {
        this.name = wt.id
      }
      setupOnce(e, t) { }
      processEvent(e) {
        if (e.type)
          return e;
        try {
          if (function (e, t) {
            if (!t)
              return !1;
            if (function (e, t) {
              const n = e.message
                , r = t.message;
              if (!n && !r)
                return !1;
              if (n && !r || !n && r)
                return !1;
              if (n !== r)
                return !1;
              if (!Tt(e, t))
                return !1;
              if (!St(e, t))
                return !1;
              return !0
            }(e, t))
              return !0;
            if (function (e, t) {
              const n = Rt(t)
                , r = Rt(e);
              if (!n || !r)
                return !1;
              if (n.type !== r.type || n.value !== r.value)
                return !1;
              if (!Tt(e, t))
                return !1;
              if (!St(e, t))
                return !1;
              return !0
            }(e, t))
              return !0;
            return !1
          }(e, this._previousEvent))
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Event dropped due to being a duplicate of previously captured event."),
              null
        } catch (t) { }
        return this._previousEvent = e
      }
    }
    function St(e, t) {
      let n = It(e)
        , r = It(t);
      if (!n && !r)
        return !0;
      if (n && !r || !n && r)
        return !1;
      if (r.length !== n.length)
        return !1;
      for (let i = 0; i < r.length; i++) {
        const e = r[i]
          , t = n[i];
        if (e.filename !== t.filename || e.lineno !== t.lineno || e.colno !== t.colno || e.function !== t.function)
          return !1
      }
      return !0
    }
    function Tt(e, t) {
      let n = e.fingerprint
        , r = t.fingerprint;
      if (!n && !r)
        return !0;
      if (n && !r || !n && r)
        return !1;
      try {
        return !(n.join("") !== r.join(""))
      } catch (i) {
        return !1
      }
    }
    function Rt(e) {
      return e.exception && e.exception.values && e.exception.values[0]
    }
    function It(e) {
      const t = e.exception;
      if (t)
        try {
          return t.values[0].stacktrace.frames
        } catch (n) {
          return
        }
    }
    wt.__initStatic();
    const Ot = "?";
    function kt(e, t, n, r) {
      const i = {
        filename: e,
        function: t,
        in_app: !0
      };
      return void 0 !== n && (i.lineno = n),
        void 0 !== r && (i.colno = r),
        i
    }
    const Ct = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , Nt = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , At = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Pt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Dt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , xt = C(...[[30, e => {
        const t = Ct.exec(e);
        if (t) {
          if (t[2] && 0 === t[2].indexOf("eval")) {
            const e = Nt.exec(t[2]);
            e && (t[2] = e[1],
              t[3] = e[2],
              t[4] = e[3])
          }
          const [e, n] = Lt(t[1] || Ot, t[2]);
          return kt(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
        }
      }
      ], [50, e => {
        const t = At.exec(e);
        if (t) {
          if (t[3] && t[3].indexOf(" > eval") > -1) {
            const e = Pt.exec(t[3]);
            e && (t[1] = t[1] || "eval",
              t[3] = e[1],
              t[4] = e[2],
              t[5] = "")
          }
          let e = t[3]
            , n = t[1] || Ot;
          return [n, e] = Lt(n, e),
            kt(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
      }
      ], [40, e => {
        const t = Dt.exec(e);
        return t ? kt(t[2], t[1] || Ot, +t[3], t[4] ? +t[4] : void 0) : void 0
      }
      ]])
      , Lt = (e, t) => {
        const n = -1 !== e.indexOf("safari-extension")
          , r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : Ot, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
      }
      ;
    function Ut(e) {
      const t = [];
      function n(e) {
        return t.splice(t.indexOf(e), 1)[0]
      }
      return {
        $: t,
        add: function (r) {
          if (!(void 0 === e || t.length < e))
            return (0,
              ie.$2)(new _e("Not adding Promise because buffer limit was reached."));
          const i = r();
          return -1 === t.indexOf(i) && t.push(i),
            i.then((() => n(i))).then(null, (() => n(i).then(null, (() => { }
            )))),
            i
        },
        drain: function (e) {
          return new ie.cW(((n, r) => {
            let i = t.length;
            if (!i)
              return n(!0);
            const o = setTimeout((() => {
              e && e > 0 && n(!1)
            }
            ), e);
            t.forEach((e => {
              (0,
                ie.WD)(e).then((() => {
                  --i || (clearTimeout(o),
                    n(!0))
                }
                ), r)
            }
            ))
          }
          ))
        }
      }
    }
    function jt(e, { statusCode: t, headers: n }, r = Date.now()) {
      const i = {
        ...e
      }
        , o = n && n["x-sentry-rate-limits"]
        , s = n && n["retry-after"];
      if (o)
        for (const a of o.trim().split(",")) {
          const [e, t] = a.split(":", 2)
            , n = parseInt(e, 10)
            , o = 1e3 * (isNaN(n) ? 60 : n);
          if (t)
            for (const s of t.split(";"))
              i[s] = r + o;
          else
            i.all = r + o
        }
      else
        s ? i.all = r + function (e, t = Date.now()) {
          const n = parseInt(`${e}`, 10);
          if (!isNaN(n))
            return 1e3 * n;
          const r = Date.parse(`${e}`);
          return isNaN(r) ? 6e4 : r - t
        }(s, r) : 429 === t && (i.all = r + 6e4);
      return i
    }
    function Bt(e, t, n = Ut(e.bufferSize || 30)) {
      let r = {};
      function i(i) {
        const o = [];
        if (le(i, ((t, n) => {
          const i = me(n);
          if (function (e, t, n = Date.now()) {
            return function (e, t) {
              return e[t] || e.all || 0
            }(e, t) > n
          }(r, i)) {
            const r = Mt(t, n);
            e.recordDroppedEvent("ratelimit_backoff", i, r)
          } else
            o.push(t)
        }
        )),
          0 === o.length)
          return (0,
            ie.WD)();
        const s = ce(i[0], o)
          , a = t => {
            le(s, ((n, r) => {
              const i = Mt(n, r);
              e.recordDroppedEvent(t, me(r), i)
            }
            ))
          }
          ;
        return n.add((() => t({
          body: he(s, e.textEncoder)
        }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
          r = jt(r, e),
          e)), (e => {
            throw a("network_error"),
            e
          }
        )))).then((e => e), (e => {
          if (e instanceof _e)
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error("Skipped sending event because buffer is full."),
              a("queue_overflow"),
              (0,
                ie.WD)();
          throw e
        }
        ))
      }
      return i.__sentry__baseTransport__ = !0,
      {
        send: i,
        flush: e => n.drain(e)
      }
    }
    function Mt(e, t) {
      if ("event" === t || "transaction" === t)
        return Array.isArray(e) ? e[1] : void 0
    }
    let Ft;
    function $t(e, t = function () {
      if (Ft)
        return Ft;
      if (L($e.fetch))
        return Ft = $e.fetch.bind($e);
      const e = $e.document;
      let t = $e.fetch;
      if (e && "function" === typeof e.createElement)
        try {
          const n = e.createElement("iframe");
          n.hidden = !0,
            e.head.appendChild(n);
          const r = n.contentWindow;
          r && r.fetch && (t = r.fetch),
            e.head.removeChild(n)
        } catch (n) {
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
      return Ft = t.bind($e)
    }()) {
      let n = 0
        , r = 0;
      return Bt(e, (function (i) {
        const o = i.body.length;
        n += o,
          r++;
        const s = {
          body: i.body,
          method: "POST",
          referrerPolicy: "origin",
          headers: e.headers,
          keepalive: n <= 6e4 && r < 15,
          ...e.fetchOptions
        };
        try {
          return t(e.url, s).then((e => (n -= o,
            r--,
          {
            statusCode: e.status,
            headers: {
              "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": e.headers.get("Retry-After")
            }
          })))
        } catch (a) {
          return Ft = void 0,
            n -= o,
            r--,
            (0,
              ie.$2)(a)
        }
      }
      ))
    }
    function Gt(e) {
      return Bt(e, (function (t) {
        return new ie.cW(((n, r) => {
          const i = new XMLHttpRequest;
          i.onerror = r,
            i.onreadystatechange = () => {
              4 === i.readyState && n({
                statusCode: i.status,
                headers: {
                  "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": i.getResponseHeader("Retry-After")
                }
              })
            }
            ,
            i.open("POST", e.url);
          for (const t in e.headers)
            Object.prototype.hasOwnProperty.call(e.headers, t) && i.setRequestHeader(t, e.headers[t]);
          i.send(t.body)
        }
        ))
      }
      ))
    }
    const Yt = [new v, new w, new tt, new lt, new ze, new bt, new wt, new Et];
    function Ht(e = {}) {
      void 0 === e.defaultIntegrations && (e.defaultIntegrations = Yt),
        void 0 === e.release && ("string" === typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__),
          $e.SENTRY_RELEASE && $e.SENTRY_RELEASE.id && (e.release = $e.SENTRY_RELEASE.id)),
        void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
        void 0 === e.sendClientReports && (e.sendClientReports = !0);
      const t = {
        ...e,
        stackParser: (n = e.stackParser || xt,
          Array.isArray(n) ? C(...n) : n),
        integrations: R(e),
        transport: e.transport || (x() ? $t : Gt)
      };
      var n;
      !function (e, t) {
        !0 === t.debug && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? f.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const n = (0,
          i.Gd)();
        n.getScope().update(t.initialScope);
        const r = new e(t);
        n.bindClient(r)
      }(qe, t),
        e.autoSessionTracking && function () {
          if ("undefined" === typeof $e.document)
            return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
          const e = (0,
            i.Gd)();
          if (!e.captureSession)
            return;
          Wt(e),
            G("history", (({ from: e, to: t }) => {
              void 0 !== e && e !== t && Wt((0,
                i.Gd)())
            }
            ))
        }()
    }
    function Wt(e) {
      e.startSession({
        ignoreDuration: !0
      }),
        e.captureSession()
    }
    const qt = "baggage"
      , Vt = "sentry-"
      , zt = /^sentry-/;
    function Kt(e) {
      if (!e)
        return;
      return function (e) {
        if (0 === Object.keys(e).length)
          return;
        return Object.entries(e).reduce(((e, [t, n], r) => {
          const i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`
            , o = 0 === r ? i : `${e},${i}`;
          return o.length > 8192 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`),
            e) : o
        }
        ), "")
      }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`sentry-${t}`] = n),
        e)), {}))
    }
    function Jt(e) {
      return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, [t, n]) => (e[t] = n,
        e)), {})
    }
    const Zt = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function Xt(e, t) {
      const n = function (e) {
        if (!e)
          return;
        const t = e.match(Zt);
        if (!t)
          return;
        let n;
        return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1),
        {
          traceId: t[1],
          parentSampled: n,
          parentSpanId: t[2]
        }
      }(e)
        , r = function (e) {
          if (!(0,
            U.HD)(e) && !Array.isArray(e))
            return;
          let t = {};
          if (Array.isArray(e))
            t = e.reduce(((e, t) => ({
              ...e,
              ...Jt(t)
            })), {});
          else {
            if (!e)
              return;
            t = Jt(e)
          }
          const n = Object.entries(t).reduce(((e, [t, n]) => (t.match(zt) && (e[t.slice(Vt.length)] = n),
            e)), {});
          return Object.keys(n).length > 0 ? n : void 0
        }(t)
        , { traceId: i, parentSpanId: o, parentSampled: s } = n || {}
        , a = {
          traceId: i || (0,
            p.DM)(),
          spanId: (0,
            p.DM)().substring(16),
          sampled: s
        };
      return o && (a.parentSpanId = o),
        r && (a.dsc = r),
      {
        traceparentData: n,
        dynamicSamplingContext: r,
        propagationContext: a
      }
    }
    function Qt(e = (0,
      p.DM)(), t = (0,
        p.DM)().substring(16), n) {
      let r = "";
      return void 0 !== n && (r = n ? "-1" : "-0"),
        `${e}-${t}${r}`
    }
    class en {
      constructor(e = 1e3) {
        this._maxlen = e,
          this.spans = []
      }
      add(e) {
        this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
      }
    }
    class tn {
      constructor(e = {}) {
        this.traceId = e.traceId || (0,
          p.DM)(),
          this.spanId = e.spanId || (0,
            p.DM)().substring(16),
          this.startTimestamp = e.startTimestamp || (0,
            Te.ph)(),
          this.tags = e.tags || {},
          this.data = e.data || {},
          this.instrumenter = e.instrumenter || "sentry",
          this.origin = e.origin || "manual",
          e.parentSpanId && (this.parentSpanId = e.parentSpanId),
          "sampled" in e && (this.sampled = e.sampled),
          e.op && (this.op = e.op),
          e.description && (this.description = e.description),
          e.name && (this.description = e.name),
          e.status && (this.status = e.status),
          e.endTimestamp && (this.endTimestamp = e.endTimestamp)
      }
      get name() {
        return this.description || ""
      }
      set name(e) {
        this.setName(e)
      }
      startChild(e) {
        const t = new tn({
          ...e,
          parentSpanId: this.spanId,
          sampled: this.sampled,
          traceId: this.traceId
        });
        if (t.spanRecorder = this.spanRecorder,
          t.spanRecorder && t.spanRecorder.add(t),
          t.transaction = this.transaction,
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t.transaction) {
          const n = `[Tracing] Starting '${e && e.op || "< unknown op >"}' span on transaction '${t.transaction.name || "< unknown name >"}' (${t.transaction.spanId}).`;
          t.transaction.metadata.spanMetadata[t.spanId] = {
            logMessage: n
          },
            f.kg.log(n)
        }
        return t
      }
      setTag(e, t) {
        return this.tags = {
          ...this.tags,
          [e]: t
        },
          this
      }
      setData(e, t) {
        return this.data = {
          ...this.data,
          [e]: t
        },
          this
      }
      setStatus(e) {
        return this.status = e,
          this
      }
      setHttpStatus(e) {
        this.setTag("http.status_code", String(e)),
          this.setData("http.response.status_code", e);
        const t = function (e) {
          if (e < 400 && e >= 100)
            return "ok";
          if (e >= 400 && e < 500)
            switch (e) {
              case 401:
                return "unauthenticated";
              case 403:
                return "permission_denied";
              case 404:
                return "not_found";
              case 409:
                return "already_exists";
              case 413:
                return "failed_precondition";
              case 429:
                return "resource_exhausted";
              default:
                return "invalid_argument"
            }
          if (e >= 500 && e < 600)
            switch (e) {
              case 501:
                return "unimplemented";
              case 503:
                return "unavailable";
              case 504:
                return "deadline_exceeded";
              default:
                return "internal_error"
            }
          return "unknown_error"
        }(e);
        return "unknown_error" !== t && this.setStatus(t),
          this
      }
      setName(e) {
        this.description = e
      }
      isSuccess() {
        return "ok" === this.status
      }
      finish(e) {
        if (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
          const { logMessage: e } = this.transaction.metadata.spanMetadata[this.spanId];
          e && f.kg.log(e.replace("Starting", "Finishing"))
        }
        this.endTimestamp = "number" === typeof e ? e : (0,
          Te.ph)()
      }
      toTraceparent() {
        return Qt(this.traceId, this.spanId, this.sampled)
      }
      toContext() {
        return (0,
          b.Jr)({
            data: this.data,
            description: this.description,
            endTimestamp: this.endTimestamp,
            op: this.op,
            parentSpanId: this.parentSpanId,
            sampled: this.sampled,
            spanId: this.spanId,
            startTimestamp: this.startTimestamp,
            status: this.status,
            tags: this.tags,
            traceId: this.traceId
          })
      }
      updateWithContext(e) {
        return this.data = e.data || {},
          this.description = e.description,
          this.endTimestamp = e.endTimestamp,
          this.op = e.op,
          this.parentSpanId = e.parentSpanId,
          this.sampled = e.sampled,
          this.spanId = e.spanId || this.spanId,
          this.startTimestamp = e.startTimestamp || this.startTimestamp,
          this.status = e.status,
          this.tags = e.tags || {},
          this.traceId = e.traceId || this.traceId,
          this
      }
      getTraceContext() {
        return (0,
          b.Jr)({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            trace_id: this.traceId,
            origin: this.origin
          })
      }
      toJSON() {
        return (0,
          b.Jr)({
            data: Object.keys(this.data).length > 0 ? this.data : void 0,
            description: this.description,
            op: this.op,
            parent_span_id: this.parentSpanId,
            span_id: this.spanId,
            start_timestamp: this.startTimestamp,
            status: this.status,
            tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
            timestamp: this.endTimestamp,
            trace_id: this.traceId,
            origin: this.origin
          })
      }
    }
    class nn extends tn {
      constructor(e, t) {
        super(e),
          delete this.description,
          this._measurements = {},
          this._contexts = {},
          this._hub = t || (0,
            i.Gd)(),
          this._name = e.name || "",
          this.metadata = {
            source: "custom",
            ...e.metadata,
            spanMetadata: {}
          },
          this._trimEnd = e.trimEnd,
          this.transaction = this;
        const n = this.metadata.dynamicSamplingContext;
        n && (this._frozenDynamicSamplingContext = {
          ...n
        })
      }
      get name() {
        return this._name
      }
      set name(e) {
        this.setName(e)
      }
      setName(e, t = "custom") {
        this._name = e,
          this.metadata.source = t
      }
      initSpanRecorder(e = 1e3) {
        this.spanRecorder || (this.spanRecorder = new en(e)),
          this.spanRecorder.add(this)
      }
      setContext(e, t) {
        null === t ? delete this._contexts[e] : this._contexts[e] = t
      }
      setMeasurement(e, t, n = "") {
        this._measurements[e] = {
          value: t,
          unit: n
        }
      }
      setMetadata(e) {
        this.metadata = {
          ...this.metadata,
          ...e
        }
      }
      finish(e) {
        const t = this._finishTransaction(e);
        if (t)
          return this._hub.captureEvent(t)
      }
      toContext() {
        const e = super.toContext();
        return (0,
          b.Jr)({
            ...e,
            name: this.name,
            trimEnd: this._trimEnd
          })
      }
      updateWithContext(e) {
        return super.updateWithContext(e),
          this.name = e.name || "",
          this._trimEnd = e.trimEnd,
          this
      }
      getDynamicSamplingContext() {
        if (this._frozenDynamicSamplingContext)
          return this._frozenDynamicSamplingContext;
        const e = this._hub || (0,
          i.Gd)()
          , t = e.getClient();
        if (!t)
          return {};
        const n = e.getScope()
          , r = Se(this.traceId, t, n)
          , o = this.metadata.sampleRate;
        void 0 !== o && (r.sample_rate = `${o}`);
        const s = this.metadata.source;
        return s && "url" !== s && (r.transaction = this.name),
          void 0 !== this.sampled && (r.sampled = String(this.sampled)),
          r
      }
      setHub(e) {
        this._hub = e
      }
      _finishTransaction(e) {
        if (void 0 !== this.endTimestamp)
          return;
        this.name || (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
          this.name = "<unlabeled transaction>"),
          super.finish(e);
        const t = this._hub.getClient();
        if (t && t.emit && t.emit("finishTransaction", this),
          !0 !== this.sampled)
          return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
            void (t && t.recordDroppedEvent("sample_rate", "transaction"));
        const n = this.spanRecorder ? this.spanRecorder.spans.filter((e => e !== this && e.endTimestamp)) : [];
        this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce(((e, t) => e.endTimestamp && t.endTimestamp ? e.endTimestamp > t.endTimestamp ? e : t : e)).endTimestamp);
        const r = this.metadata
          , i = {
            contexts: {
              ...this._contexts,
              trace: this.getTraceContext()
            },
            spans: n,
            start_timestamp: this.startTimestamp,
            tags: this.tags,
            timestamp: this.endTimestamp,
            transaction: this.name,
            type: "transaction",
            sdkProcessingMetadata: {
              ...r,
              dynamicSamplingContext: this.getDynamicSamplingContext()
            },
            ...r.source && {
              transaction_info: {
                source: r.source
              }
            }
          };
        return Object.keys(this._measurements).length > 0 && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
          i.measurements = this._measurements),
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
          i
      }
    }
    const rn = {
      idleTimeout: 1e3,
      finalTimeout: 3e4,
      heartbeatInterval: 5e3
    }
      , on = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
    class sn extends en {
      constructor(e, t, n, r) {
        super(r),
          this._pushActivity = e,
          this._popActivity = t,
          this.transactionSpanId = n
      }
      add(e) {
        e.spanId !== this.transactionSpanId && (e.finish = t => {
          e.endTimestamp = "number" === typeof t ? t : (0,
            Te.ph)(),
            this._popActivity(e.spanId)
        }
          ,
          void 0 === e.endTimestamp && this._pushActivity(e.spanId)),
          super.add(e)
      }
    }
    class an extends nn {
      constructor(e, t, n = rn.idleTimeout, r = rn.finalTimeout, i = rn.heartbeatInterval, o = !1) {
        super(e, t),
          this._idleHub = t,
          this._idleTimeout = n,
          this._finalTimeout = r,
          this._heartbeatInterval = i,
          this._onScope = o,
          this.activities = {},
          this._heartbeatCounter = 0,
          this._finished = !1,
          this._idleTimeoutCanceledPermanently = !1,
          this._beforeFinishCallbacks = [],
          this._finishReason = on[4],
          o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
            t.configureScope((e => e.setSpan(this)))),
          this._restartIdleTimeout(),
          setTimeout((() => {
            this._finished || (this.setStatus("deadline_exceeded"),
              this._finishReason = on[3],
              this.finish())
          }
          ), this._finalTimeout)
      }
      finish(e = (0,
        Te.ph)()) {
        if (this._finished = !0,
          this.activities = {},
          "ui.action.click" === this.op && this.setTag("finishReason", this._finishReason),
          this.spanRecorder) {
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
          for (const t of this._beforeFinishCallbacks)
            t(this, e);
          this.spanRecorder.spans = this.spanRecorder.spans.filter((t => {
            if (t.spanId === this.spanId)
              return !0;
            t.endTimestamp || (t.endTimestamp = e,
              t.setStatus("cancelled"),
              ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
            const n = t.startTimestamp < e
              , r = (this._finalTimeout + this._idleTimeout) / 1e3
              , i = t.endTimestamp - this.startTimestamp < r;
            if ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
              const e = JSON.stringify(t, void 0, 2);
              n ? i || f.kg.log("[Tracing] discarding Span since it finished after Transaction final timeout", e) : f.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", e)
            }
            return n && i
          }
          )),
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] flushing IdleTransaction")
        } else
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] No active IdleTransaction");
        if (this._onScope) {
          const e = this._idleHub.getScope();
          e.getTransaction() === this && e.setSpan(void 0)
        }
        return super.finish(e)
      }
      registerBeforeFinishCallback(e) {
        this._beforeFinishCallbacks.push(e)
      }
      initSpanRecorder(e) {
        if (!this.spanRecorder) {
          const t = e => {
            this._finished || this._pushActivity(e)
          }
            , n = e => {
              this._finished || this._popActivity(e)
            }
            ;
          this.spanRecorder = new sn(t, n, this.spanId, e),
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("Starting heartbeat"),
            this._pingHeartbeat()
        }
        this.spanRecorder.add(this)
      }
      cancelIdleTimeout(e, { restartOnChildSpanChange: t } = {
        restartOnChildSpanChange: !0
      }) {
        this._idleTimeoutCanceledPermanently = !1 === t,
          this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
            this._idleTimeoutID = void 0,
            0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = on[5],
              this.finish(e)))
      }
      setFinishReason(e) {
        this._finishReason = e
      }
      _restartIdleTimeout(e) {
        this.cancelIdleTimeout(),
          this._idleTimeoutID = setTimeout((() => {
            this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = on[1],
              this.finish(e))
          }
          ), this._idleTimeout)
      }
      _pushActivity(e) {
        this.cancelIdleTimeout(void 0, {
          restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
        }),
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] pushActivity: ${e}`),
          this.activities[e] = !0,
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
      }
      _popActivity(e) {
        if (this.activities[e] && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] popActivity ${e}`),
          delete this.activities[e],
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
          0 === Object.keys(this.activities).length) {
          const e = (0,
            Te.ph)();
          this._idleTimeoutCanceledPermanently ? (this._finishReason = on[5],
            this.finish(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3)
        }
      }
      _beat() {
        if (this._finished)
          return;
        const e = Object.keys(this.activities).join("");
        e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1,
          this._prevHeartbeatString = e,
          this._heartbeatCounter >= 3 ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
            this.setStatus("deadline_exceeded"),
            this._finishReason = on[0],
            this.finish()) : this._pingHeartbeat()
      }
      _pingHeartbeat() {
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
          setTimeout((() => {
            this._beat()
          }
          ), this._heartbeatInterval)
      }
    }
    function cn(e) {
      return (e || (0,
        i.Gd)()).getScope().getTransaction()
    }
    let un = !1;
    function ln() {
      const e = cn();
      if (e) {
        const t = "internal_error";
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Transaction: ${t} -> Global error occured`),
          e.setStatus(t)
      }
    }
    function dn(e, t, n) {
      if (!o(t))
        return e.sampled = !1,
          e;
      if (void 0 !== e.sampled)
        return e.setMetadata({
          sampleRate: Number(e.sampled)
        }),
          e;
      let r;
      return "function" === typeof t.tracesSampler ? (r = t.tracesSampler(n),
        e.setMetadata({
          sampleRate: Number(r)
        })) : void 0 !== n.parentSampled ? r = n.parentSampled : "undefined" !== typeof t.tracesSampleRate ? (r = t.tracesSampleRate,
          e.setMetadata({
            sampleRate: Number(r)
          })) : (r = 1,
            e.setMetadata({
              sampleRate: r
            })),
        function (e) {
          if ((0,
            U.i2)(e) || "number" !== typeof e && "boolean" !== typeof e)
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`),
              !1;
          if (e < 0 || e > 1)
            return ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`),
              !1;
          return !0
        }(r) ? r ? (e.sampled = Math.random() < r,
          e.sampled ? (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] starting ${e.op} transaction - ${e.name}`),
            e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),
              e)) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] Discarding transaction because " + ("function" === typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")),
                e.sampled = !1,
                e) : (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
                  e.sampled = !1,
                  e)
    }
    function hn() {
      const e = this.getScope().getSpan();
      return e ? {
        "sentry-trace": e.toTraceparent()
      } : {}
    }
    function fn(e, t) {
      const n = this.getClient()
        , r = n && n.getOptions() || {}
        , i = r.instrumenter || "sentry"
        , o = e.instrumenter || "sentry";
      i !== o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${i}\` instrumenter.\nThe transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
        e.sampled = !1);
      let s = new nn(e, this);
      return s = dn(s, r, {
        parentSampled: e.parentSampled,
        transactionContext: e,
        ...t
      }),
        s.sampled && s.initSpanRecorder(r._experiments && r._experiments.maxSpans),
        n && n.emit && n.emit("startTransaction", s),
        s
    }
    function pn(e, t, n, r, i, o, s) {
      const a = e.getClient()
        , c = a && a.getOptions() || {};
      let u = new an(t, e, n, r, s, i);
      return u = dn(u, c, {
        parentSampled: t.parentSampled,
        transactionContext: t,
        ...o
      }),
        u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
        a && a.emit && a.emit("startTransaction", u),
        u
    }
    function mn() {
      const e = (0,
        i.cu)();
      e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {},
        e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = fn),
        e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = hn),
        un || (un = !0,
          G("error", ln),
          G("unhandledrejection", ln)))
    }
    ln.tag = "sentry_tracingErrorCallback";
    const gn = P.n2;
    const _n = (e, t, n) => {
      let r, i;
      return o => {
        t.value >= 0 && (o || n) && (i = t.value - (r || 0),
          (i || void 0 === r) && (r = t.value,
            t.delta = i,
            e(t)))
      }
    }
      , vn = () => gn.__WEB_VITALS_POLYFILL__ ? gn.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
        const e = gn.performance.timing
          , t = gn.performance.navigation.type
          , n = {
            entryType: "navigation",
            startTime: 0,
            type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
          };
        for (const r in e)
          "navigationStart" !== r && "toJSON" !== r && (n[r] = Math.max(e[r] - e.navigationStart, 0));
        return n
      }
      )()) : gn.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
      , yn = () => {
        const e = vn();
        return e && e.activationStart || 0
      }
      , bn = (e, t) => {
        const n = vn();
        let r = "navigate";
        return n && (r = gn.document.prerendering || yn() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
        {
          name: e,
          value: "undefined" === typeof t ? -1 : t,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
          navigationType: r
        }
      }
      , En = (e, t, n) => {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            const r = new PerformanceObserver((e => {
              t(e.getEntries())
            }
            ));
            return r.observe(Object.assign({
              type: e,
              buffered: !0
            }, n || {})),
              r
          }
        } catch (r) { }
      }
      , wn = (e, t) => {
        const n = r => {
          "pagehide" !== r.type && "hidden" !== gn.document.visibilityState || (e(r),
            t && (removeEventListener("visibilitychange", n, !0),
              removeEventListener("pagehide", n, !0)))
        }
          ;
        addEventListener("visibilitychange", n, !0),
          addEventListener("pagehide", n, !0)
      }
      ;
    let Sn = -1;
    const Tn = () => (Sn < 0 && (Sn = "hidden" !== gn.document.visibilityState || gn.document.prerendering ? 1 / 0 : 0,
      wn((({ timeStamp: e }) => {
        Sn = e
      }
      ), !0)),
    {
      get firstHiddenTime() {
        return Sn
      }
    })
      , Rn = {}
      , In = {}
      , On = {};
    let kn, Cn, Nn;
    function An(e, t) {
      return jn(e, t),
        On[e] || (!function (e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0);
          En(e, (t => {
            Pn(e, {
              entries: t
            })
          }
          ), t)
        }(e),
          On[e] = !0),
        Bn(e, t)
    }
    function Pn(e, t) {
      const n = In[e];
      if (n && n.length)
        for (const i of n)
          try {
            i(t)
          } catch (r) {
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${A(i)}\nError:`, r)
          }
    }
    function Dn() {
      (e => {
        const t = bn("CLS", 0);
        let n, r = 0, i = [];
        const o = e => {
          e.forEach((e => {
            if (!e.hadRecentInput) {
              const o = i[0]
                , s = i[i.length - 1];
              r && 0 !== i.length && e.startTime - s.startTime < 1e3 && e.startTime - o.startTime < 5e3 ? (r += e.value,
                i.push(e)) : (r = e.value,
                  i = [e]),
                r > t.value && (t.value = r,
                  t.entries = i,
                  n && n())
            }
          }
          ))
        }
          , s = En("layout-shift", o);
        if (s) {
          n = _n(e, t);
          const r = () => {
            o(s.takeRecords()),
              n(!0)
          }
            ;
          wn(r)
        }
      }
      )((e => {
        Pn("cls", {
          metric: e
        }),
          kn = e
      }
      ))
    }
    function xn() {
      (e => {
        const t = Tn()
          , n = bn("FID");
        let r;
        const i = e => {
          e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime,
            n.entries.push(e),
            r(!0))
        }
          , o = e => {
            e.forEach(i)
          }
          , s = En("first-input", o);
        r = _n(e, n),
          s && wn((() => {
            o(s.takeRecords()),
              s.disconnect()
          }
          ), !0)
      }
      )((e => {
        Pn("fid", {
          metric: e
        }),
          Cn = e
      }
      ))
    }
    function Ln() {
      (e => {
        const t = Tn()
          , n = bn("LCP");
        let r;
        const i = e => {
          const i = e[e.length - 1];
          if (i) {
            const e = Math.max(i.startTime - yn(), 0);
            e < t.firstHiddenTime && (n.value = e,
              n.entries = [i],
              r())
          }
        }
          , o = En("largest-contentful-paint", i);
        if (o) {
          r = _n(e, n);
          const t = () => {
            Rn[n.id] || (i(o.takeRecords()),
              o.disconnect(),
              Rn[n.id] = !0,
              r(!0))
          }
            ;
          ["keydown", "click"].forEach((e => {
            addEventListener(e, t, {
              once: !0,
              capture: !0
            })
          }
          )),
            wn(t, !0)
        }
      }
      )((e => {
        Pn("lcp", {
          metric: e
        }),
          Nn = e
      }
      ))
    }
    function Un(e, t, n, r) {
      return jn(e, t),
        On[e] || (n(),
          On[e] = !0),
        r && t({
          metric: r
        }),
        Bn(e, t)
    }
    function jn(e, t) {
      In[e] = In[e] || [],
        In[e].push(t)
    }
    function Bn(e, t) {
      return () => {
        const n = In[e];
        if (!n)
          return;
        const r = n.indexOf(t);
        -1 !== r && n.splice(r, 1)
      }
    }
    function Mn(e) {
      return "number" === typeof e && isFinite(e)
    }
    function Fn(e, { startTimestamp: t, ...n }) {
      return t && e.startTimestamp > t && (e.startTimestamp = t),
        e.startChild({
          startTimestamp: t,
          ...n
        })
    }
    function $n(e) {
      return e / 1e3
    }
    function Gn() {
      return gn && gn.addEventListener && gn.performance
    }
    let Yn, Hn, Wn = 0, qn = {};
    function Vn() {
      const e = Gn();
      if (e && Te.Z1) {
        e.mark && gn.performance.mark("sentry-tracing-init");
        const t = function () {
          return e = ({ metric: e }) => {
            const t = e.entries.pop();
            if (!t)
              return;
            const n = $n(Te.Z1)
              , r = $n(t.startTime);
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding FID"),
              qn.fid = {
                value: e.value,
                unit: "millisecond"
              },
              qn["mark.fid"] = {
                value: n + r,
                unit: "second"
              }
          }
            ,
            Un("fid", e, xn, Cn);
          var e
        }()
          , n = function () {
            return e = ({ metric: e }) => {
              const t = e.entries.pop();
              t && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding CLS"),
                qn.cls = {
                  value: e.value,
                  unit: ""
                },
                Hn = t)
            }
              ,
              Un("cls", e, Dn, kn);
            var e
          }()
          , r = function () {
            return e = ({ metric: e }) => {
              const t = e.entries.pop();
              t && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding LCP"),
                qn.lcp = {
                  value: e.value,
                  unit: "millisecond"
                },
                Yn = t)
            }
              ,
              Un("lcp", e, Ln, Nn);
            var e
          }();
        return () => {
          t(),
            n(),
            r()
        }
      }
      return () => { }
    }
    function zn(e) {
      const t = Gn();
      if (!t || !gn.performance.getEntries || !Te.Z1)
        return;
      ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Tracing] Adding & adjusting spans using Performance API");
      const n = $n(Te.Z1)
        , r = t.getEntries();
      let i, o;
      if (r.slice(Wn).forEach((t => {
        const r = $n(t.startTime)
          , s = $n(t.duration);
        if (!("navigation" === e.op && n + r < e.startTimestamp))
          switch (t.entryType) {
            case "navigation":
              !function (e, t, n) {
                ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                  Kn(e, t, r, n)
                }
                )),
                  Kn(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                  Kn(e, t, "fetch", n, "cache", "domainLookupStart"),
                  Kn(e, t, "domainLookup", n, "DNS"),
                  function (e, t, n) {
                    Fn(e, {
                      op: "browser",
                      origin: "auto.browser.browser.metrics",
                      description: "request",
                      startTimestamp: n + $n(t.requestStart),
                      endTimestamp: n + $n(t.responseEnd)
                    }),
                      Fn(e, {
                        op: "browser",
                        origin: "auto.browser.browser.metrics",
                        description: "response",
                        startTimestamp: n + $n(t.responseStart),
                        endTimestamp: n + $n(t.responseEnd)
                      })
                  }(e, t, n)
              }(e, t, n),
                i = n + $n(t.responseStart),
                o = n + $n(t.requestStart);
              break;
            case "mark":
            case "paint":
            case "measure":
              {
                !function (e, t, n, r, i) {
                  const o = i + n
                    , s = o + r;
                  Fn(e, {
                    description: t.name,
                    endTimestamp: s,
                    op: t.entryType,
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: o
                  })
                }(e, t, r, s, n);
                const i = Tn()
                  , o = t.startTime < i.firstHiddenTime;
                "first-paint" === t.name && o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding FP"),
                  qn.fp = {
                    value: t.startTime,
                    unit: "millisecond"
                  }),
                  "first-contentful-paint" === t.name && o && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding FCP"),
                    qn.fcp = {
                      value: t.startTime,
                      unit: "millisecond"
                    });
                break
              }
            case "resource":
              {
                const i = t.name.replace(gn.location.origin, "");
                !function (e, t, n, r, i, o) {
                  if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
                    return;
                  const s = {};
                  "transferSize" in t && (s["http.response_transfer_size"] = t.transferSize);
                  "encodedBodySize" in t && (s["http.response_content_length"] = t.encodedBodySize);
                  "decodedBodySize" in t && (s["http.decoded_response_content_length"] = t.decodedBodySize);
                  "renderBlockingStatus" in t && (s["resource.render_blocking_status"] = t.renderBlockingStatus);
                  const a = o + r;
                  Fn(e, {
                    description: n,
                    endTimestamp: a + i,
                    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                    origin: "auto.resource.browser.metrics",
                    startTimestamp: a,
                    data: s
                  })
                }(e, t, i, r, s, n);
                break
              }
          }
      }
      )),
        Wn = Math.max(r.length - 1, 0),
        function (e) {
          const t = gn.navigator;
          if (!t)
            return;
          const n = t.connection;
          n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
            n.type && e.setTag("connectionType", n.type),
            Mn(n.rtt) && (qn["connection.rtt"] = {
              value: n.rtt,
              unit: "millisecond"
            }));
          Mn(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`);
          Mn(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
        }(e),
        "pageload" === e.op) {
        "number" === typeof i && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding TTFB"),
          qn.ttfb = {
            value: 1e3 * (i - e.startTimestamp),
            unit: "millisecond"
          },
          "number" === typeof o && o <= i && (qn["ttfb.requestTime"] = {
            value: 1e3 * (i - o),
            unit: "millisecond"
          })),
          ["fcp", "fp", "lcp"].forEach((t => {
            if (!qn[t] || n >= e.startTimestamp)
              return;
            const r = qn[t].value
              , i = n + $n(r)
              , o = Math.abs(1e3 * (i - e.startTimestamp))
              , s = o - r;
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Measurements] Normalized ${t} from ${r} to ${o} (${s})`),
              qn[t].value = o
          }
          ));
        const t = qn["mark.fid"];
        t && qn.fid && (Fn(e, {
          description: "first input delay",
          endTimestamp: t.value + $n(qn.fid.value),
          op: "ui.action",
          origin: "auto.ui.browser.metrics",
          startTimestamp: t.value
        }),
          delete qn["mark.fid"]),
          "fcp" in qn || delete qn.cls,
          Object.keys(qn).forEach((t => {
            e.setMeasurement(t, qn[t].value, qn[t].unit)
          }
          )),
          function (e) {
            Yn && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding LCP Data"),
              Yn.element && e.setTag("lcp.element", (0,
                Ve.Rt)(Yn.element)),
              Yn.id && e.setTag("lcp.id", Yn.id),
              Yn.url && e.setTag("lcp.url", Yn.url.trim().slice(0, 200)),
              e.setTag("lcp.size", Yn.size));
            Hn && Hn.sources && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log("[Measurements] Adding CLS Data"),
              Hn.sources.forEach(((t, n) => e.setTag(`cls.source.${n + 1}`, (0,
                Ve.Rt)(t.node)))))
          }(e)
      }
      Yn = void 0,
        Hn = void 0,
        qn = {}
    }
    function Kn(e, t, n, r, i, o) {
      const s = o ? t[o] : t[`${n}End`]
        , a = t[`${n}Start`];
      a && s && Fn(e, {
        op: "browser",
        origin: "auto.browser.browser.metrics",
        description: i || n,
        startTimestamp: r + $n(a),
        endTimestamp: r + $n(s)
      })
    }
    const Jn = ["localhost", /^\/(?!\/)/]
      , Zn = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        tracingOrigins: Jn,
        tracePropagationTargets: Jn
      };
    function Xn(e) {
      const { traceFetch: t, traceXHR: n, tracePropagationTargets: r, tracingOrigins: s, shouldCreateSpanForRequest: a, enableHTTPTimings: c } = {
        traceFetch: Zn.traceFetch,
        traceXHR: Zn.traceXHR,
        ...e
      }
        , u = "function" === typeof a ? a : e => !0
        , l = e => function (e, t) {
          return (0,
            m.U0)(e, t || Jn)
        }(e, r || s)
        , d = {};
      t && G("fetch", (e => {
        const t = function (e, t, n, r) {
          if (!o() || !e.fetchData)
            return;
          const s = t(e.fetchData.url);
          if (e.endTimestamp && s) {
            const t = e.fetchData.__span;
            if (!t)
              return;
            const n = r[t];
            if (n) {
              if (e.response) {
                n.setHttpStatus(e.response.status);
                const t = e.response && e.response.headers && e.response.headers.get("content-length")
                  , r = parseInt(t);
                r > 0 && n.setData("http.response_content_length", r)
              } else
                e.error && n.setStatus("internal_error");
              n.finish(),
                delete r[t]
            }
            return
          }
          const a = (0,
            i.Gd)()
            , c = a.getScope()
            , u = a.getClient()
            , l = c.getSpan()
            , { method: d, url: h } = e.fetchData
            , f = s && l ? l.startChild({
              data: {
                url: h,
                type: "fetch",
                "http.method": d
              },
              description: `${d} ${h}`,
              op: "http.client",
              origin: "auto.http.browser"
            }) : void 0;
          f && (e.fetchData.__span = f.spanId,
            r[f.spanId] = f);
          if (n(e.fetchData.url) && u) {
            const t = e.args[0];
            e.args[1] = e.args[1] || {};
            const n = e.args[1];
            n.headers = function (e, t, n, r, i) {
              const o = i || n.getSpan()
                , s = o && o.transaction
                , { traceId: a, sampled: c, dsc: u } = n.getPropagationContext()
                , l = o ? o.toTraceparent() : Qt(a, void 0, c)
                , d = Kt(s ? s.getDynamicSamplingContext() : u || Se(a, t, n))
                , h = "undefined" !== typeof Request && (0,
                  U.V9)(e, Request) ? e.headers : r.headers;
              if (h) {
                if ("undefined" !== typeof Headers && (0,
                  U.V9)(h, Headers)) {
                  const e = new Headers(h);
                  return e.append("sentry-trace", l),
                    d && e.append(qt, d),
                    e
                }
                if (Array.isArray(h)) {
                  const e = [...h, ["sentry-trace", l]];
                  return d && e.push([qt, d]),
                    e
                }
                {
                  const e = "baggage" in h ? h.baggage : void 0
                    , t = [];
                  return Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    d && t.push(d),
                  {
                    ...h,
                    "sentry-trace": l,
                    baggage: t.length > 0 ? t.join(",") : void 0
                  }
                }
              }
              return {
                "sentry-trace": l,
                baggage: d
              }
            }(t, u, c, n, f)
          }
          return f
        }(e, u, l, d);
        c && t && Qn(t)
      }
      )),
        n && G("xhr", (e => {
          const t = function (e, t, n, r) {
            const s = e.xhr
              , a = s && s.__sentry_xhr_v2__;
            if (!o() || s && s.__sentry_own_request__ || !s || !a)
              return;
            const c = t(a.url);
            if (e.endTimestamp && c) {
              const e = s.__sentry_xhr_span_id__;
              if (!e)
                return;
              const t = r[e];
              return void (t && (t.setHttpStatus(a.status_code),
                t.finish(),
                delete r[e]))
            }
            const u = (0,
              i.Gd)()
              , l = u.getScope()
              , d = l.getSpan()
              , h = c && d ? d.startChild({
                data: {
                  ...a.data,
                  type: "xhr",
                  "http.method": a.method,
                  url: a.url
                },
                description: `${a.method} ${a.url}`,
                op: "http.client",
                origin: "auto.http.browser"
              }) : void 0;
            h && (s.__sentry_xhr_span_id__ = h.spanId,
              r[s.__sentry_xhr_span_id__] = h);
            if (s.setRequestHeader && n(a.url))
              if (h) {
                const e = h && h.transaction
                  , t = Kt(e && e.getDynamicSamplingContext());
                tr(s, h.toTraceparent(), t)
              } else {
                const e = u.getClient()
                  , { traceId: t, sampled: n, dsc: r } = l.getPropagationContext();
                tr(s, Qt(t, void 0, n), Kt(r || (e ? Se(t, e, l) : void 0)))
              }
            return h
          }(e, u, l, d);
          c && t && Qn(t)
        }
        ))
    }
    function Qn(e) {
      const t = e.data.url;
      if (!t)
        return;
      const n = An("resource", (({ entries: r }) => {
        r.forEach((r => {
          if (function (e) {
            return "resource" === e.entryType && "initiatorType" in e && "string" === typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
          }(r) && r.name.endsWith(t)) {
            (function (e) {
              const { name: t, version: n } = function (e) {
                let t = "unknown"
                  , n = "unknown"
                  , r = "";
                for (const i of e) {
                  if ("/" === i) {
                    [t, n] = e.split("/");
                    break
                  }
                  if (!isNaN(Number(i))) {
                    t = "h" === r ? "http" : r,
                      n = e.split(r)[1];
                    break
                  }
                  r += i
                }
                r === e && (t = r);
                return {
                  name: t,
                  version: n
                }
              }(e.nextHopProtocol)
                , r = [];
              if (r.push(["network.protocol.version", n], ["network.protocol.name", t]),
                !Te.Z1)
                return r;
              return [...r, ["http.request.redirect_start", er(e.redirectStart)], ["http.request.fetch_start", er(e.fetchStart)], ["http.request.domain_lookup_start", er(e.domainLookupStart)], ["http.request.domain_lookup_end", er(e.domainLookupEnd)], ["http.request.connect_start", er(e.connectStart)], ["http.request.secure_connection_start", er(e.secureConnectionStart)], ["http.request.connection_end", er(e.connectEnd)], ["http.request.request_start", er(e.requestStart)], ["http.request.response_start", er(e.responseStart)], ["http.request.response_end", er(e.responseEnd)]]
            }
            )(r).forEach((t => e.setData(...t))),
              setTimeout(n)
          }
        }
        ))
      }
      ))
    }
    function er(e = 0) {
      return ((Te.Z1 || performance.timeOrigin) + e) / 1e3
    }
    function tr(e, t, n) {
      try {
        e.setRequestHeader("sentry-trace", t),
          n && e.setRequestHeader(qt, n)
      } catch (r) { }
    }
    const nr = {
      ...rn,
      markBackgroundTransactions: !0,
      routingInstrumentation: function (e, t = !0, n = !0) {
        if (!gn || !gn.location)
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Could not initialize routing instrumentation due to invalid location"));
        let r, i = gn.location.href;
        t && (r = e({
          name: gn.location.pathname,
          startTimestamp: Te.Z1 ? Te.Z1 / 1e3 : void 0,
          op: "pageload",
          origin: "auto.pageload.browser",
          metadata: {
            source: "url"
          }
        })),
          n && G("history", (({ to: t, from: n }) => {
            void 0 === n && i && -1 !== i.indexOf(t) ? i = void 0 : n !== t && (i = void 0,
              r && (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
                r.finish()),
              r = e({
                name: gn.location.pathname,
                op: "navigation",
                origin: "auto.navigation.browser",
                metadata: {
                  source: "url"
                }
              }))
          }
          ))
      },
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      _experiments: {},
      ...Zn
    };
    class rr {
      constructor(e) {
        this.name = "BrowserTracing",
          this._hasSetTracePropagationTargets = !1,
          mn(),
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !(!e || !e.tracePropagationTargets && !e.tracingOrigins)),
          this.options = {
            ...nr,
            ...e
          },
          void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask),
          e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins),
          this._collectWebVitals = Vn(),
          this.options.enableLongTask && An("longtask", (({ entries: e }) => {
            for (const t of e) {
              const e = cn();
              if (!e)
                return;
              const n = $n(Te.Z1 + t.startTime)
                , r = $n(t.duration);
              e.startChild({
                description: "Main UI thread blocked",
                op: "ui.long-task",
                origin: "auto.ui.browser.metrics",
                startTimestamp: n,
                endTimestamp: n + r
              })
            }
          }
          )),
          this.options._experiments.enableInteractions && An("event", (({ entries: e }) => {
            for (const t of e) {
              const e = cn();
              if (!e)
                return;
              if ("click" === t.name) {
                const n = $n(Te.Z1 + t.startTime)
                  , r = $n(t.duration);
                e.startChild({
                  description: (0,
                    Ve.Rt)(t.target),
                  op: `ui.interaction.${t.name}`,
                  origin: "auto.ui.browser.metrics",
                  startTimestamp: n,
                  endTimestamp: n + r
                })
              }
            }
          }
          ))
      }
      setupOnce(e, t) {
        this._getCurrentHub = t;
        const n = t().getClient()
          , r = n && n.getOptions()
          , { routingInstrumentation: i, startTransactionOnLocationChange: o, startTransactionOnPageLoad: s, markBackgroundTransactions: a, traceFetch: c, traceXHR: u, shouldCreateSpanForRequest: l, enableHTTPTimings: d, _experiments: h } = this.options
          , p = r && r.tracePropagationTargets
          , m = p || this.options.tracePropagationTargets;
        ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && p && f.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),
          i((e => {
            const n = this._createRouteTransaction(e);
            return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t),
              n
          }
          ), s, o),
          a && (gn && gn.document ? gn.document.addEventListener("visibilitychange", (() => {
            const e = cn();
            if (gn.document.hidden && e) {
              const t = "cancelled";
              ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),
                e.status || e.setStatus(t),
                e.setTag("visibilitychange", "document.hidden"),
                e.finish()
            }
          }
          )) : ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
          h.enableInteractions && this._registerInteractionListener(),
          Xn({
            traceFetch: c,
            traceXHR: u,
            tracePropagationTargets: m,
            shouldCreateSpanForRequest: l,
            enableHTTPTimings: d
          })
      }
      _createRouteTransaction(e) {
        if (!this._getCurrentHub)
          return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
        const t = this._getCurrentHub()
          , { beforeNavigate: n, idleTimeout: r, finalTimeout: i, heartbeatInterval: o } = this.options
          , s = "pageload" === e.op
          , a = s ? ir("sentry-trace") : ""
          , c = s ? ir("baggage") : ""
          , { traceparentData: u, dynamicSamplingContext: l, propagationContext: d } = Xt(a, c)
          , h = {
            ...e,
            ...u,
            metadata: {
              ...e.metadata,
              dynamicSamplingContext: u && !l ? {} : l
            },
            trimEnd: !0
          }
          , p = "function" === typeof n ? n(h) : h
          , m = void 0 === p ? {
            ...h,
            sampled: !1
          } : p;
        m.metadata = m.name !== h.name ? {
          ...m.metadata,
          source: "custom"
        } : m.metadata,
          this._latestRouteName = m.name,
          this._latestRouteSource = m.metadata && m.metadata.source,
          !1 === m.sampled && ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`),
          ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.log(`[Tracing] Starting ${m.op} transaction on scope`);
        const { location: g } = gn
          , _ = pn(t, m, r, i, !0, {
            location: g
          }, o)
          , v = t.getScope();
        return s && u ? v.setPropagationContext(d) : v.setPropagationContext({
          traceId: _.traceId,
          spanId: _.spanId,
          parentSpanId: _.parentSpanId,
          sampled: _.sampled
        }),
          _.registerBeforeFinishCallback((e => {
            this._collectWebVitals(),
              zn(e)
          }
          )),
          _
      }
      _registerInteractionListener() {
        let e;
        const t = () => {
          const { idleTimeout: t, finalTimeout: n, heartbeatInterval: r } = this.options
            , i = "ui.action.click"
            , o = cn();
          if (o && o.op && ["navigation", "pageload"].includes(o.op))
            return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Did not create ${i} transaction because a pageload or navigation transaction is in progress.`));
          if (e && (e.setFinishReason("interactionInterrupted"),
            e.finish(),
            e = void 0),
            !this._getCurrentHub)
            return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Did not create ${i} transaction because _getCurrentHub is invalid.`));
          if (!this._latestRouteName)
            return void (("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn(`[Tracing] Did not create ${i} transaction because _latestRouteName is missing.`));
          const s = this._getCurrentHub()
            , { location: a } = gn
            , c = {
              name: this._latestRouteName,
              op: i,
              trimEnd: !0,
              metadata: {
                source: this._latestRouteSource || "url"
              }
            };
          e = pn(s, c, t, n, !0, {
            location: a
          }, r)
        }
          ;
        ["click"].forEach((e => {
          addEventListener(e, t, {
            once: !1,
            capture: !0
          })
        }
        ))
      }
    }
    function ir(e) {
      const t = (0,
        Ve.qT)(`meta[name=${e}]`);
      return t ? t.getAttribute("content") : void 0
    }
    function or(e, t, n) {
      const r = t.match(/([a-z_]+)\.(.*)/i);
      if (null === r)
        e[t] = n;
      else {
        or(e[r[1]], r[2], n)
      }
    }
    function sr(e, t, n = {}) {
      return Array.isArray(t) ? ar(e, t, n) : function (e, t, n) {
        const r = r => {
          const i = t(r);
          if (e.allowExclusionByUser) {
            if (!i.find((t => t.name === e.name)))
              return i
          }
          return ar(e, i, n)
        }
          ;
        return r
      }(e, t, n)
    }
    function ar(e, t, n) {
      const r = t.find((t => t.name === e.name));
      if (r) {
        for (const [e, t] of Object.entries(n))
          or(r, e, t);
        return t
      }
      return [...t, e]
    }
    var cr = n(4155);
    function ur(e) {
      const t = e ? "production" : cr.env.VERCEL_ENV;
      return t ? `vercel-${t}` : void 0
    }
    const lr = {
      "routing.instrumentation": "next-app-router"
    };
    function dr(e, t = !0, n = !0) {
      let r, i = $e.location.pathname;
      t && (r = e({
        name: i,
        op: "pageload",
        origin: "auto.pageload.nextjs.app_router_instrumentation",
        tags: lr,
        startTimestamp: Te.Z1 ? Te.Z1 / 1e3 : void 0,
        metadata: {
          source: "url"
        }
      })),
        n && G("fetch", (t => {
          if (void 0 !== t.endTimestamp)
            return;
          if ("GET" !== t.fetchData.method)
            return;
          const n = function (e) {
            if (!e[0] || "object" !== typeof e[0] || void 0 === e[0].searchParams)
              return null;
            if (!e[1] || "object" !== typeof e[1] || !("headers" in e[1]))
              return null;
            try {
              const t = e[0]
                , n = e[1].headers;
              return "1" !== n.RSC || "1" === n["Next-Router-Prefetch"] ? null : {
                targetPathname: t.pathname
              }
            } catch (t) {
              return null
            }
          }(t.args);
          if (null === n)
            return;
          const o = n.targetPathname
            , s = {
              ...lr,
              from: i
            };
          i = o,
            r && r.finish(),
            e({
              name: o,
              op: "navigation",
              origin: "auto.navigation.nextjs.app_router_instrumentation",
              tags: s,
              metadata: {
                source: "url"
              }
            })
        }
        ))
    }
    var hr = n(1163)
      , fr = n.n(hr);
    const pr = $e;
    const mr = {
      "routing.instrumentation": "next-pages-router"
    };
    let gr, _r;
    const vr = (0,
      i.Gd)().getClient();
    function yr(e, t = !0, n = !0) {
      const { route: r, params: o, sentryTrace: s, baggage: a } = function () {
        let e;
        const t = pr.document.getElementById("__NEXT_DATA__");
        if (t && t.innerHTML)
          try {
            e = JSON.parse(t.innerHTML)
          } catch (s) {
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Could not extract __NEXT_DATA__")
          }
        if (!e)
          return {};
        const n = {}
          , { page: r, query: i, props: o } = e;
        return n.route = r,
          n.params = i,
          o && o.pageProps && (n.sentryTrace = o.pageProps._sentryTraceData,
            n.baggage = o.pageProps._sentryBaggage),
          n
      }()
        , { traceparentData: c, dynamicSamplingContext: u, propagationContext: l } = Xt(s, a);
      if ((0,
        i.Gd)().getScope().setPropagationContext(l),
        _r = r || pr.location.pathname,
        t) {
        const t = r ? "route" : "url";
        gr = e({
          name: _r,
          op: "pageload",
          origin: "auto.pageload.nextjs.pages_router_instrumentation",
          tags: mr,
          startTimestamp: Te.Z1 ? Te.Z1 / 1e3 : void 0,
          ...o && vr && vr.getOptions().sendDefaultPii && {
            data: o
          },
          ...c,
          metadata: {
            source: t,
            dynamicSamplingContext: c && !u ? {} : u
          }
        })
      }
      n && fr().events.on("routeChangeStart", (t => {
        const n = t.split(/[\?#]/, 1)[0];
        const r = function (e) {
          const t = (pr.__BUILD_MANIFEST || {}).sortedPages;
          if (!t)
            return;
          return t.find((t => {
            const n = function (e) {
              const t = e.split("/");
              let n = "";
              t[t.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (t.pop(),
                n = "(?:/(.+?))?");
              const r = t.map((e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)"))).join("/");
              return new RegExp(`^${r}${n}(?:/)?$`)
            }(t);
            return e.match(n)
          }
          ))
        }(n);
        let i, o;
        r ? (i = r,
          o = "route") : (i = n,
            o = "url");
        const s = {
          ...mr,
          from: _r
        };
        _r = i,
          gr && gr.finish();
        const a = e({
          name: i,
          op: "navigation",
          origin: "auto.navigation.nextjs.pages_router_instrumentation",
          tags: s,
          metadata: {
            source: o
          }
        });
        if (a) {
          const e = a.startChild({
            op: "ui.nextjs.route-change",
            origin: "auto.ui.nextjs.pages_router_instrumentation",
            description: "Next.js Route Change"
          })
            , t = () => {
              e.finish(),
                fr().events.off("routeChangeComplete", t)
            }
            ;
          fr().events.on("routeChangeComplete", t)
        }
      }
      ))
    }
    function br(e, t = !0, n = !0) {
      !$e.document.getElementById("__NEXT_DATA__") ? dr(e, t, n) : yr(e, t, n)
    }
    const Er = n.g;
    const wr = n.g;
    var Sr = n(4155)
      , Tr = window;
    Tr.__sentryRewritesTunnelPath__ = void 0,
      Tr.SENTRY_RELEASE = {
        id: "47e90b4aea6f20ada976ac4a07a8507a9b70bd39"
      },
      Tr.__sentryBasePath = void 0,
      Tr.__rewriteFramesAssetPrefixPath__ = "";
    var Rr = Sr.env.SENTRY_DSN || "https://5ae8f39ebf8c410fb13faa9cc81d0ba0@o186437.ingest.sentry.io/4504814678704128"
      , Ir = Sr.env.VERCEL_ENV || "production";
    !function (e) {
      const t = {
        environment: ur(!0) || "production",
        ...e
      };
      !function (e) {
        const t = Er.__sentryRewritesTunnelPath__;
        if (t && e.dsn) {
          const n = te(e.dsn);
          if (!n)
            return;
          const r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
          if (r) {
            const i = `${t}?o=${r[1]}&p=${n.projectId}`;
            e.tunnel = i,
              ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.info(`Tunneling events to "${i}"`)
          } else
            ("undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && f.kg.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
        }
      }(t),
        function (e, t) {
          e._metadata = e._metadata || {},
            e._metadata.sdk = e._metadata.sdk || {
              name: "sentry.javascript.nextjs",
              packages: t.map((e => ({
                name: `npm:@sentry/${e}`,
                version: h
              }))),
              version: h
            }
        }(t, ["nextjs", "react"]),
        function (e) {
          let t = e.integrations || [];
          const n = wr.__rewriteFramesAssetPrefixPath__ || ""
            , r = new d({
              iteratee: e => {
                try {
                  const { origin: t } = new URL(e.filename);
                  e.filename = function (e) {
                    let t, n = e[0], r = 1;
                    for (; r < e.length;) {
                      const i = e[r]
                        , o = e[r + 1];
                      if (r += 2,
                        ("optionalAccess" === i || "optionalCall" === i) && null == n)
                        return;
                      "access" === i || "optionalAccess" === i ? (t = n,
                        n = o(n)) : "call" !== i && "optionalCall" !== i || (n = o(((...e) => n.call(t, ...e))),
                          t = void 0)
                    }
                    return n
                  }([e, "access", e => e.filename, "optionalAccess", e => e.replace, "call", e => e(t, "app://"), "access", e => e.replace, "call", e => e(n, "")])
                } catch (t) { }
                return e.filename && e.filename.startsWith("app:///_next") && (e.filename = decodeURI(e.filename)),
                  e.filename && e.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (e.in_app = !1),
                  e
              }
            });
          if (t = sr(r, t),
            ("undefined" === typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && o(e)) {
            t = sr(new rr({
              tracingOrigins: [...Zn.tracingOrigins, /^(api\/)/],
              routingInstrumentation: br
            }), t, {
              "options.routingInstrumentation": br
            })
          }
          e.integrations = t
        }(t),
        function (e) {
          const t = {
            _metadata: {},
            ...e
          };
          t._metadata.sdk = t._metadata.sdk || {
            name: "sentry.javascript.react",
            packages: [{
              name: "npm:@sentry/react",
              version: h
            }],
            version: h
          },
            Ht(t)
        }(t),
        (0,
          Fe.e)((e => {
            e.setTag("runtime", "browser");
            const t = e => "transaction" === e.type && "/404" === e.transaction ? null : e;
            t.id = "NextClient404Filter",
              e.addEventProcessor(t)
          }
          ))
    }({
      dsn: Rr || "https://5ae8f39ebf8c410fb13faa9cc81d0ba0@o186437.ingest.sentry.io/4504814678704128",
      tracesSampleRate: .3,
      environment: Ir,
      integrations: (0,
        r.Z)("development" === Ir ? [new rr({
          tracePropagationTargets: ["*"]
        })] : [])
    })
  },
  4216: function (e, t, n) {
    "use strict";
    n.d(t, {
      H: function () {
        return m
      },
      a: function () {
        return p
      }
    });
    var r = n(29)
      , i = n(7794)
      , o = n.n(i)
      , s = n(1833)
      , a = n(7294)
      , c = n(3859)
      , u = n(4444)
      , l = n(1163)
      , d = n(5893)
      , h = {
        "auth/wrong-password": "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",
        "auth/user-not-found": "\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",
        "auth/invalid-credential": "\u8a8d\u8a3c\u60c5\u5831\u304c\u7121\u52b9\u3067\u3059",
        "auth/invalid-email": "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u7121\u52b9\u3067\u3059"
      }
      , f = (0,
        a.createContext)(void 0)
      , p = function () {
        var e = (0,
          a.useContext)(f);
        if (!e)
          throw new Error("useAuth must be used within a AuthProvider");
        return e
      };
    function m(e) {
      var t = e.children
        , n = function () {
          var e = (0,
            a.useState)()
            , t = e[0]
            , n = e[1]
            , i = (0,
              a.useState)(!1)
            , d = i[0]
            , f = i[1]
            , p = (0,
              a.useState)(!1)
            , m = p[0]
            , g = p[1]
            , _ = (0,
              l.useRouter)()
            , v = function () {
              var e = (0,
                r.Z)(o().mark((function e(t) {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          if (!(t instanceof u.ZR)) {
                            e.next = 3;
                            break
                          }
                          if ("auth/network-request-failed" !== t.code) {
                            e.next = 3;
                            break
                          }
                          return e.abrupt("return", _.push("/500"));
                        case 3:
                          throw t;
                        case 4:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t) {
                return e.apply(this, arguments)
              }
            }()
            , y = function () {
              var e = (0,
                r.Z)(o().mark((function e(t, n) {
                  var r, i;
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2,
                            (0,
                              c.e5)(s.I, t, n);
                        case 2:
                          return r = e.sent,
                            i = r.user,
                            f(!0),
                            e.abrupt("return", i);
                        case 6:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()
            , b = function () {
              var e = (0,
                r.Z)(o().mark((function e(t, r) {
                  var i;
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2,
                            (0,
                              c.Xb)(s.I, t, r).catch((function (e) {
                                throw e
                              }
                              ));
                        case 2:
                          i = e.sent,
                            n(i.user),
                            f(!0);
                        case 5:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()
            , E = function () {
              var e = (0,
                r.Z)(o().mark((function e(n, r) {
                  var i, a, l;
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          if (!t || !t.email) {
                            e.next = 20;
                            break
                          }
                          return e.prev = 1,
                            e.next = 4,
                            c.w9.credential(t.email, r);
                        case 4:
                          return i = e.sent,
                            e.next = 7,
                            (0,
                              c.aF)(t, i);
                        case 7:
                          if (!s.I.currentUser) {
                            e.next = 13;
                            break
                          }
                          return e.next = 10,
                            (0,
                              c.s)(s.I.currentUser, n);
                        case 10:
                          return e.next = 12,
                            (0,
                              c.w$)(s.I.currentUser);
                        case 12:
                          return e.abrupt("return", {
                            updated: !0
                          });
                        case 13:
                          e.next = 20;
                          break;
                        case 15:
                          if (e.prev = 15,
                            e.t0 = e.catch(1),
                            !(e.t0 instanceof u.ZR)) {
                            e.next = 20;
                            break
                          }
                          return l = null !== (a = h[e.t0.code]) && void 0 !== a ? a : e.t0.message,
                            e.abrupt("return", {
                              updated: !1,
                              error: l
                            });
                        case 20:
                          return e.abrupt("return", {
                            updated: !1
                          });
                        case 21:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e, null, [[1, 15]])
                }
                )));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()
            , w = function () {
              var e = (0,
                r.Z)(o().mark((function e(n, r) {
                  var i;
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          if (!t || !t.email) {
                            e.next = 10;
                            break
                          }
                          return e.next = 3,
                            c.w9.credential(t.email, n);
                        case 3:
                          return i = e.sent,
                            e.next = 6,
                            (0,
                              c.aF)(t, i);
                        case 6:
                          if (!s.I.currentUser) {
                            e.next = 10;
                            break
                          }
                          return e.next = 9,
                            (0,
                              c.gQ)(s.I.currentUser, r);
                        case 9:
                          return e.abrupt("return", !0);
                        case 10:
                          return e.abrupt("return", !1);
                        case 11:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }()
            , S = function () {
              var e = (0,
                r.Z)(o().mark((function e() {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          if (!s.I.currentUser) {
                            e.next = 6;
                            break
                          }
                          return e.next = 3,
                            (0,
                              c.w$)(s.I.currentUser);
                        case 3:
                          return e.next = 5,
                            s.I.currentUser.reload();
                        case 5:
                          return e.abrupt("return", !0);
                        case 6:
                          return e.abrupt("return", Promise.reject("Error"));
                        case 7:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function () {
                return e.apply(this, arguments)
              }
            }()
            , T = function () {
              var e = (0,
                r.Z)(o().mark((function e(t) {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2,
                            (0,
                              c.iA)(s.I, t);
                        case 2:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t) {
                return e.apply(this, arguments)
              }
            }()
            , R = function () {
              var e = (0,
                r.Z)(o().mark((function e() {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return n(void 0),
                            f(!1),
                            e.prev = 2,
                            e.next = 5,
                            (0,
                              c.w7)(s.I);
                        case 5:
                          e.next = 10;
                          break;
                        case 7:
                          e.prev = 7,
                            e.t0 = e.catch(2),
                            v(e.t0);
                        case 10:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e, null, [[2, 7]])
                }
                )));
              return function () {
                return e.apply(this, arguments)
              }
            }()
            , I = function () {
              var e = (0,
                r.Z)(o().mark((function e(t) {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2,
                            (0,
                              c.LS)(s.I, t);
                        case 2:
                          return e.abrupt("return", !0);
                        case 3:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t) {
                return e.apply(this, arguments)
              }
            }()
            , O = function () {
              var e = (0,
                r.Z)(o().mark((function e(t, n) {
                  return o().wrap((function (e) {
                    for (; ;)
                      switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2,
                            (0,
                              c.LG)(s.I, t, n);
                        case 2:
                          return e.abrupt("return", !0);
                        case 3:
                        case "end":
                          return e.stop()
                      }
                  }
                  ), e)
                }
                )));
              return function (t, n) {
                return e.apply(this, arguments)
              }
            }();
          return (0,
            a.useEffect)((function () {
              try {
                (0,
                  c.Aj)(s.I, function () {
                    var e = (0,
                      r.Z)(o().mark((function e(t) {
                        return o().wrap((function (e) {
                          for (; ;)
                            switch (e.prev = e.next) {
                              case 0:
                                t ? (n(t),
                                  f(!0)) : (n(void 0),
                                    f(!1)),
                                  g(!0);
                              case 2:
                              case "end":
                                return e.stop()
                            }
                        }
                        ), e)
                      }
                      )));
                    return function (t) {
                      return e.apply(this, arguments)
                    }
                  }(), (function (e) {
                    v(e)
                  }
                  ))
              } catch (e) {
                v(e)
              }
            }
            ), []),
          {
            user: t,
            loaded: m,
            login: y,
            signup: b,
            updateEmail: E,
            updatePassword: w,
            logout: R,
            resendEmailVerification: S,
            verifyEmail: T,
            sendPasswordResetEmail: I,
            confirmPasswordReset: O,
            isLogin: d
          }
        }();
      return (0,
        d.jsx)(f.Provider, {
          value: n,
          children: t
        })
    }
  },
  8194: function (e, t, n) {
    "use strict";
    n.d(t, {
      E: function () {
        return c
      }
    });
    var r = n(6430)
      , i = n(1686)
      , o = n(5893)
      , s = i.ZP.img.withConfig({
        displayName: "Image__Img",
        componentId: "sc-1rpxflt-0"
      })(["width:100%;"])
      , a = i.ZP.picture.withConfig({
        displayName: "Image__Picture",
        componentId: "sc-1rpxflt-1"
      })(["display:block;height:auto;overflow:auto;", "{display:block;line-height:0;}"], s)
      , c = function (e) {
        var t = e.className
          , n = e.src
          , i = e.alt
          , c = e.pcSrc
          , u = e.loading;
        return (0,
          o.jsxs)(a, {
            className: t,
            children: [c && (0,
              o.jsx)("source", {
                srcSet: n,
                media: "(max-width: ".concat(r.AV.medium, ")")
              }), (0,
                o.jsx)(s, {
                  src: null !== c && void 0 !== c ? c : n,
                  alt: i,
                  loading: u
                })]
          })
      }
  },
  4136: function (e, t, n) {
    "use strict";
    n.d(t, {
      i: function () {
        return _
      },
      Z: function () {
        return y
      }
    });
    n(7294);
    var r, i, o, s = n(1686), a = n(3253), c = n.n(a);
    !function (e) {
      e[e.DIALOG_FADE_MS = 200] = "DIALOG_FADE_MS"
    }(r || (r = {})),
      function (e) {
        e[e.HEADER = 1] = "HEADER",
          e[e.BACKDROP = 2] = "BACKDROP",
          e[e.MENU = 3] = "MENU"
      }(i || (i = {})),
      function (e) {
        e.HEADER_HEIGHT = "40px"
      }(o || (o = {}));
    var u = n(8194)
      , l = "85vh"
      , d = n(4367)
      , h = n(6430)
      , f = n(5893)
      , p = s.ZP.div.withConfig({
        displayName: "BaseModal__Container",
        componentId: "sc-l984vp-0"
      })(["margin-top:20px;background-color:", ";border-radius:", ";overflow:hidden;"], d.I.WHITE, "20px")
      , m = s.ZP.button.withConfig({
        displayName: "BaseModal__CloseButton",
        componentId: "sc-l984vp-1"
      })(["display:block;margin-left:auto;background-color:transparent;border:none;cursor:pointer;appearance:none;margin-right:15px;margin-top:15px;"])
      , g = s.ZP.div.withConfig({
        displayName: "BaseModal__Content",
        componentId: "sc-l984vp-2"
      })(["max-height:calc(", " - 80px);overflow-y:auto;"], l)
      , _ = "app";
    c().setAppElement("#".concat(_));
    var v = c()
      , y = function (e) {
        var t = e.children
          , n = e.isOpen
          , i = e.onRequestClose
          , o = {
            content: {
              margin: "auto",
              maxWidth: "calc(".concat(h.AV.medium, " * 0.92)"),
              maxHeight: l
            },
            overlay: {
              background: "rgba(0,0,0,0.85)"
            }
          };
        return (0,
          f.jsx)(v, {
            closeTimeoutMS: r.DIALOG_FADE_MS,
            isOpen: n,
            onRequestClose: i,
            style: o,
            className: "Modal",
            children: (0,
              f.jsxs)(p, {
                children: [(0,
                  f.jsx)(m, {
                    onClick: i,
                    children: (0,
                      f.jsx)(u.E, {
                        src: "/images/close.svg",
                        alt: "\u9589\u3058\u308b"
                      })
                  }), (0,
                    f.jsx)(g, {
                      children: t
                    })]
              })
          })
      }
  },
  7189: function (e, t, n) {
    "use strict";
    n.d(t, {
      s: function () {
        return r
      }
    });
    var r = "payjp_checkout_box"
  },
  1833: function (e, t, n) {
    "use strict";
    n.d(t, {
      I: function () {
        return s
      }
    });
    var r = n(3977)
      , i = n(3859)
      , o = (0,
        r.C6)().length ? (0,
          r.Mq)() : (0,
            r.ZF)({
              apiKey: "AIzaSyCyjiNO6e2LFHb8WASTOzsWrOzFBmWWtdc",
              authDomain: "mec30min-2022.firebaseapp.com",
              projectId: "mec30min-2022",
              storageBucket: "mec30min-2022.appspot.com",
              messagingSenderId: "455555978363",
              appId: "1:455555978363:web:745c75932b03ea9f833ede"
            })
      , s = (0,
        i.v0)(o)
  },
  7047: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, {
        default: function () {
          return I
        }
      });
    var r = n(9499)
      , i = n(1686)
      , o = n(6532)
      , s = n(4367)
      , a = n(4036)
      , c = n(4216)
      , u = n(4136)
      , l = n(7189)
      , d = n(4298)
      , h = n.n(d)
      , f = (n(7294),
        n(5893))
      , p = function (e) {
        var t = e.ids;
        return (0,
          f.jsx)(f.Fragment, {
            children: t.map((function (e) {
              return (0,
                f.jsx)(h(), {
                  id: e,
                  strategy: "afterInteractive",
                  dangerouslySetInnerHTML: {
                    __html: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','".concat(e, "');\n      ")
                  }
                }, e)
            }
            ))
          })
      }
      , m = "GTM-5V7WDH5,GTM-P3P3RGK".split(",")
      , g = n(29)
      , _ = n(7794)
      , v = n.n(_)
      , y = n(1163)
      , b = n(7066)
      , E = n(8100)
      , w = function (e) {
        var t = e.children
          , n = (0,
            y.useRouter)()
          , r = (0,
            c.a)()
          , i = function () {
            var e = (0,
              g.Z)(v().mark((function e(t) {
                var i;
                return v().wrap((function (e) {
                  for (; ;)
                    switch (e.prev = e.next) {
                      case 0:
                        if (console.log("on Error"),
                          !b.Z.isAxiosError(t)) {
                          e.next = 7;
                          break
                        }
                        if (401 !== (null === (i = t.response) || void 0 === i ? void 0 : i.status)) {
                          e.next = 7;
                          break
                        }
                        return e.next = 5,
                          r.logout();
                      case 5:
                        return e.next = 7,
                          n.push("/login");
                      case 7:
                      case "end":
                        return e.stop()
                    }
                }
                ), e)
              }
              )));
            return function (t) {
              return e.apply(this, arguments)
            }
          }();
        return (0,
          f.jsx)(E.J$, {
            value: {
              onError: i
            },
            children: t
          })
      };
    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
          n.push.apply(n, r)
      }
      return n
    }
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(n), !0).forEach((function (t) {
          (0,
            r.Z)(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
      }
      return e
    }
    "true" === n(4155).env.NEXT_PUBLIC_USE_MSW && Promise.all([n.e(9436), n.e(2647)]).then(n.bind(n, 2647));
    var R = (0,
      i.vJ)(["", " *{font-family:'Noto Sans JP',sans-serif !important;}body{color:", ";> #", "{display:none;}&.modal-open{overflow:hidden;}}a,a:hover,a:active,a:visited{color:", ";text-decoration:none;}"], o.ZP, s.I.GRAY_DARK, l.s, s.I.GRAY_DARK)
      , I = function (e) {
        var t = e.Component
          , n = e.pageProps;
        return (0,
          f.jsxs)(f.Fragment, {
            children: [m && (0,
              f.jsx)(p, {
                ids: m
              }), (0,
                f.jsxs)("div", {
                  id: u.i,
                  children: [(0,
                    f.jsx)(c.H, {
                      children: (0,
                        f.jsx)(w, {
                          children: (0,
                            f.jsx)(a.l0, {
                              children: (0,
                                f.jsx)(t, T({}, n))
                            })
                        })
                    }), (0,
                      f.jsx)(R, {})]
                })]
          })
      }
  },
  4367: function (e, t, n) {
    "use strict";
    var r;
    n.d(t, {
      I: function () {
        return r
      }
    }),
      function (e) {
        e.WHITE = "#fff",
          e.YELLOW = "#fff500",
          e.YELLOW_LIGHT = "#f1ef70",
          e.YELLOW_GROUND = "#f7f7f0",
          e.YELLOW_GROUND_2 = "#F2F1DF",
          e.YELLOW_LABEL = "#eeebaf",
          e.YELLOW_DARK = "#d1cda9",
          e.YELLOW_DARK_2 = "#B6AF92",
          e.RED = "#FF6F56",
          e.RED_LIGHT = "#ffefef",
          e.ALERT_RED = "#eb5757",
          e.SERVICER = "#85CECF",
          e.BLUE = "#abe8ee",
          e.BLUE_1 = "#2f80ed",
          e.BLUE_2 = "#2d9ec1",
          e.BLUE_3 = "#207F9D",
          e.BLUE_GROUND = "#E8F7F5",
          e.BLUE_LIGHT = "#00a0fb",
          e.BROWN_1 = "#6E523D",
          e.GREEN = "#c1ea4e",
          e.GREEN_1 = "#5c9965",
          e.GREEN_2 = "#4c7246",
          e.GREEN_3 = "#53894A",
          e.GREEN_LIGHT = "#c8f26e",
          e.GREEN_X_LIGHT = "#f5ffe1",
          e.GREEN_BLUE = "#90cdc2",
          e.GREEN_BLUE2 = "#006256",
          e.GREEN_DARK = "#A5BE5F",
          e.GREEN_X_DARK = "#75AC6C",
          e.GREEN_GROUND = "#f1f5f0",
          e.GREEN_LABEL = "#DCEEAB",
          e.GRAY_X_LIGHT = "#ebebeb",
          e.GRAY_LIGHT = "#ccc",
          e.GRAY = "#b2b2b2",
          e.GRAY_20 = "#333333",
          e.GRAY_50 = "#808080",
          e.GRAY_60 = "#999999",
          e.GRAY_70 = "#B3B3B3",
          e.GRAY_88 = "#e0e0e0",
          e.GRAY_96 = "#FAFAFA",
          e.GRAY_3 = "#828282",
          e.GRAY_DARK = "#333333",
          e.GRAY_X_DARK = "#666666",
          e.GOLD = "#CDB973",
          e.TEXT_YELLOW = "#b6af92",
          e.TEXT_WHITE = "#ccc",
          e.TEXT_DARK = "#313233",
          e.TEXT_YELLOW_2 = "#A39C83",
          e.BASE_DARK_3 = "#88836a",
          e.MYPAGE_1 = "#F7F7F0"
      }(r || (r = {}))
  },
  6430: function (e, t, n) {
    "use strict";
    n.d(t, {
      AV: function () {
        return i
      },
      BC: function () {
        return o
      }
    });
    var r = n(605)
      , i = {
        huge: "1440px",
        large: "1170px",
        medium: "920px",
        small: "450px"
      }
      , o = (0,
        r.Jq)(i);
    (0,
      r.Jq)({
        sp: "550px"
      })
  },
  6840: function (e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
      return n(7047)
    }
    ])
  },
  1163: function (e, t, n) {
    e.exports = n(9898)
  },
  4298: function (e, t, n) {
    e.exports = n(2189)
  },
  4155: function (e) {
    var t, n, r = e.exports = {};
    function i() {
      throw new Error("setTimeout has not been defined")
    }
    function o() {
      throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
      if (t === setTimeout)
        return setTimeout(e, 0);
      if ((t === i || !t) && setTimeout)
        return t = setTimeout,
          setTimeout(e, 0);
      try {
        return t(e, 0)
      } catch (n) {
        try {
          return t.call(null, e, 0)
        } catch (n) {
          return t.call(this, e, 0)
        }
      }
    }
    !function () {
      try {
        t = "function" === typeof setTimeout ? setTimeout : i
      } catch (e) {
        t = i
      }
      try {
        n = "function" === typeof clearTimeout ? clearTimeout : o
      } catch (e) {
        n = o
      }
    }();
    var a, c = [], u = !1, l = -1;
    function d() {
      u && a && (u = !1,
        a.length ? c = a.concat(c) : l = -1,
        c.length && h())
    }
    function h() {
      if (!u) {
        var e = s(d);
        u = !0;
        for (var t = c.length; t;) {
          for (a = c,
            c = []; ++l < t;)
            a && a[l].run();
          l = -1,
            t = c.length
        }
        a = null,
          u = !1,
          function (e) {
            if (n === clearTimeout)
              return clearTimeout(e);
            if ((n === o || !n) && clearTimeout)
              return n = clearTimeout,
                clearTimeout(e);
            try {
              n(e)
            } catch (t) {
              try {
                return n.call(null, e)
              } catch (t) {
                return n.call(this, e)
              }
            }
          }(e)
      }
    }
    function f(e, t) {
      this.fun = e,
        this.array = t
    }
    function p() { }
    r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
      c.push(new f(e, t)),
        1 !== c.length || u || s(h)
    }
      ,
      f.prototype.run = function () {
        this.fun.apply(null, this.array)
      }
      ,
      r.title = "browser",
      r.browser = !0,
      r.env = {},
      r.argv = [],
      r.version = "",
      r.versions = {},
      r.on = p,
      r.addListener = p,
      r.once = p,
      r.off = p,
      r.removeListener = p,
      r.removeAllListeners = p,
      r.emit = p,
      r.prependListener = p,
      r.prependOnceListener = p,
      r.listeners = function (e) {
        return []
      }
      ,
      r.binding = function (e) {
        throw new Error("process.binding is not supported")
      }
      ,
      r.cwd = function () {
        return "/"
      }
      ,
      r.chdir = function (e) {
        throw new Error("process.chdir is not supported")
      }
      ,
      r.umask = function () {
        return 0
      }
  },
  2703: function (e, t, n) {
    "use strict";
    var r = n(414);
    function i() { }
    function o() { }
    o.resetWarningCache = i,
      e.exports = function () {
        function e(e, t, n, i, o, s) {
          if (s !== r) {
            var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation",
            a
          }
        }
        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: i
        };
        return n.PropTypes = n,
          n
      }
  },
  5697: function (e, t, n) {
    e.exports = n(2703)()
  },
  414: function (e) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6871: function (e, t, n) {
    "use strict";
    function r() {
      var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
      null !== e && void 0 !== e && this.setState(e)
    }
    function i(e) {
      this.setState(function (t) {
        var n = this.constructor.getDerivedStateFromProps(e, t);
        return null !== n && void 0 !== n ? n : null
      }
        .bind(this))
    }
    function o(e, t) {
      try {
        var n = this.props
          , r = this.state;
        this.props = e,
          this.state = t,
          this.__reactInternalSnapshotFlag = !0,
          this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r)
      } finally {
        this.props = n,
          this.state = r
      }
    }
    function s(e) {
      var t = e.prototype;
      if (!t || !t.isReactComponent)
        throw new Error("Can only polyfill class components");
      if ("function" !== typeof e.getDerivedStateFromProps && "function" !== typeof t.getSnapshotBeforeUpdate)
        return e;
      var n = null
        , s = null
        , a = null;
      if ("function" === typeof t.componentWillMount ? n = "componentWillMount" : "function" === typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"),
        "function" === typeof t.componentWillReceiveProps ? s = "componentWillReceiveProps" : "function" === typeof t.UNSAFE_componentWillReceiveProps && (s = "UNSAFE_componentWillReceiveProps"),
        "function" === typeof t.componentWillUpdate ? a = "componentWillUpdate" : "function" === typeof t.UNSAFE_componentWillUpdate && (a = "UNSAFE_componentWillUpdate"),
        null !== n || null !== s || null !== a) {
        var c = e.displayName || e.name
          , u = "function" === typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + c + " uses " + u + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== s ? "\n  " + s : "") + (null !== a ? "\n  " + a : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")
      }
      if ("function" === typeof e.getDerivedStateFromProps && (t.componentWillMount = r,
        t.componentWillReceiveProps = i),
        "function" === typeof t.getSnapshotBeforeUpdate) {
        if ("function" !== typeof t.componentDidUpdate)
          throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        t.componentWillUpdate = o;
        var l = t.componentDidUpdate;
        t.componentDidUpdate = function (e, t, n) {
          var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
          l.call(this, e, t, r)
        }
      }
      return e
    }
    n.r(t),
      n.d(t, {
        polyfill: function () {
          return s
        }
      }),
      r.__suppressDeprecationWarning = !0,
      i.__suppressDeprecationWarning = !0,
      o.__suppressDeprecationWarning = !0
  },
  9983: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.bodyOpenClassName = t.portalClassName = void 0;
    var r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
      , i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
      , o = n(7294)
      , s = p(o)
      , a = p(n(3935))
      , c = p(n(5697))
      , u = p(n(8747))
      , l = function (e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
          t
      }(n(7149))
      , d = n(1112)
      , h = p(d)
      , f = n(6871);
    function p(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function m(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function g(e, t) {
      if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }
    var _ = t.portalClassName = "ReactModalPortal"
      , v = t.bodyOpenClassName = "ReactModal__Body--open"
      , y = d.canUseDOM && void 0 !== a.default.createPortal
      , b = function (e) {
        return document.createElement(e)
      }
      , E = function () {
        return y ? a.default.createPortal : a.default.unstable_renderSubtreeIntoContainer
      };
    function w(e) {
      return e()
    }
    var S = function (e) {
      function t() {
        var e, n, i;
        m(this, t);
        for (var o = arguments.length, c = Array(o), l = 0; l < o; l++)
          c[l] = arguments[l];
        return n = i = g(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
          i.removePortal = function () {
            !y && a.default.unmountComponentAtNode(i.node);
            var e = w(i.props.parentSelector);
            e && e.contains(i.node) ? e.removeChild(i.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
          }
          ,
          i.portalRef = function (e) {
            i.portal = e
          }
          ,
          i.renderPortal = function (e) {
            var n = E()(i, s.default.createElement(u.default, r({
              defaultStyles: t.defaultStyles
            }, e)), i.node);
            i.portalRef(n)
          }
          ,
          g(i, n)
      }
      return function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e),
        i(t, [{
          key: "componentDidMount",
          value: function () {
            d.canUseDOM && (y || (this.node = b("div")),
              this.node.className = this.props.portalClassName,
              w(this.props.parentSelector).appendChild(this.node),
              !y && this.renderPortal(this.props))
          }
        }, {
          key: "getSnapshotBeforeUpdate",
          value: function (e) {
            return {
              prevParent: w(e.parentSelector),
              nextParent: w(this.props.parentSelector)
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function (e, t, n) {
            if (d.canUseDOM) {
              var r = this.props
                , i = r.isOpen
                , o = r.portalClassName;
              e.portalClassName !== o && (this.node.className = o);
              var s = n.prevParent
                , a = n.nextParent;
              a !== s && (s.removeChild(this.node),
                a.appendChild(this.node)),
                (e.isOpen || i) && !y && this.renderPortal(this.props)
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            if (d.canUseDOM && this.node && this.portal) {
              var e = this.portal.state
                , t = Date.now()
                , n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
              n ? (e.beforeClose || this.portal.closeWithTimeout(),
                setTimeout(this.removePortal, n - t)) : this.removePortal()
            }
          }
        }, {
          key: "render",
          value: function () {
            return d.canUseDOM && y ? (!this.node && y && (this.node = b("div")),
              E()(s.default.createElement(u.default, r({
                ref: this.portalRef,
                defaultStyles: t.defaultStyles
              }, this.props)), this.node)) : null
          }
        }], [{
          key: "setAppElement",
          value: function (e) {
            l.setElement(e)
          }
        }]),
        t
    }(o.Component);
    S.propTypes = {
      isOpen: c.default.bool.isRequired,
      style: c.default.shape({
        content: c.default.object,
        overlay: c.default.object
      }),
      portalClassName: c.default.string,
      bodyOpenClassName: c.default.string,
      htmlOpenClassName: c.default.string,
      className: c.default.oneOfType([c.default.string, c.default.shape({
        base: c.default.string.isRequired,
        afterOpen: c.default.string.isRequired,
        beforeClose: c.default.string.isRequired
      })]),
      overlayClassName: c.default.oneOfType([c.default.string, c.default.shape({
        base: c.default.string.isRequired,
        afterOpen: c.default.string.isRequired,
        beforeClose: c.default.string.isRequired
      })]),
      appElement: c.default.oneOfType([c.default.instanceOf(h.default), c.default.instanceOf(d.SafeHTMLCollection), c.default.instanceOf(d.SafeNodeList), c.default.arrayOf(c.default.instanceOf(h.default))]),
      onAfterOpen: c.default.func,
      onRequestClose: c.default.func,
      closeTimeoutMS: c.default.number,
      ariaHideApp: c.default.bool,
      shouldFocusAfterRender: c.default.bool,
      shouldCloseOnOverlayClick: c.default.bool,
      shouldReturnFocusAfterClose: c.default.bool,
      preventScroll: c.default.bool,
      parentSelector: c.default.func,
      aria: c.default.object,
      data: c.default.object,
      role: c.default.string,
      contentLabel: c.default.string,
      shouldCloseOnEsc: c.default.bool,
      overlayRef: c.default.func,
      contentRef: c.default.func,
      id: c.default.string,
      overlayElement: c.default.func,
      contentElement: c.default.func
    },
      S.defaultProps = {
        isOpen: !1,
        portalClassName: _,
        bodyOpenClassName: v,
        role: "dialog",
        ariaHideApp: !0,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: !0,
        shouldCloseOnEsc: !0,
        shouldCloseOnOverlayClick: !0,
        shouldReturnFocusAfterClose: !0,
        preventScroll: !1,
        parentSelector: function () {
          return document.body
        },
        overlayElement: function (e, t) {
          return s.default.createElement("div", e, t)
        },
        contentElement: function (e, t) {
          return s.default.createElement("div", e, t)
        }
      },
      S.defaultStyles = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px"
        }
      },
      (0,
        f.polyfill)(S),
      t.default = S
  },
  8747: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
      , i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
        return typeof e
      }
        : function (e) {
          return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
      , o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
      }()
      , s = n(7294)
      , a = g(n(5697))
      , c = m(n(9685))
      , u = g(n(8338))
      , l = m(n(7149))
      , d = m(n(2409))
      , h = n(1112)
      , f = g(h)
      , p = g(n(9623));
    function m(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e,
        t
    }
    function g(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    n(5063);
    var _ = {
      overlay: "ReactModal__Overlay",
      content: "ReactModal__Content"
    }
      , v = 0
      , y = function (e) {
        function t(e) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function (e, t) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.setOverlayRef = function (e) {
            n.overlay = e,
              n.props.overlayRef && n.props.overlayRef(e)
          }
            ,
            n.setContentRef = function (e) {
              n.content = e,
                n.props.contentRef && n.props.contentRef(e)
            }
            ,
            n.afterClose = function () {
              var e = n.props
                , t = e.appElement
                , r = e.ariaHideApp
                , i = e.htmlOpenClassName
                , o = e.bodyOpenClassName
                , s = e.parentSelector
                , a = s && s().ownerDocument || document;
              o && d.remove(a.body, o),
                i && d.remove(a.getElementsByTagName("html")[0], i),
                r && v > 0 && 0 === (v -= 1) && l.show(t),
                n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (c.returnFocus(n.props.preventScroll),
                  c.teardownScopedFocus()) : c.popWithoutFocus()),
                n.props.onAfterClose && n.props.onAfterClose(),
                p.default.deregister(n)
            }
            ,
            n.open = function () {
              n.beforeOpen(),
                n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer),
                  n.setState({
                    beforeClose: !1
                  })) : (n.props.shouldFocusAfterRender && (c.setupScopedFocus(n.node),
                    c.markForFocusLater()),
                    n.setState({
                      isOpen: !0
                    }, (function () {
                      n.openAnimationFrame = requestAnimationFrame((function () {
                        n.setState({
                          afterOpen: !0
                        }),
                          n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
                            overlayEl: n.overlay,
                            contentEl: n.content
                          })
                      }
                      ))
                    }
                    )))
            }
            ,
            n.close = function () {
              n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
            }
            ,
            n.focusContent = function () {
              return n.content && !n.contentHasFocus() && n.content.focus({
                preventScroll: !0
              })
            }
            ,
            n.closeWithTimeout = function () {
              var e = Date.now() + n.props.closeTimeoutMS;
              n.setState({
                beforeClose: !0,
                closesAt: e
              }, (function () {
                n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
              }
              ))
            }
            ,
            n.closeWithoutTimeout = function () {
              n.setState({
                beforeClose: !1,
                isOpen: !1,
                afterOpen: !1,
                closesAt: null
              }, n.afterClose)
            }
            ,
            n.handleKeyDown = function (e) {
              (function (e) {
                return "Tab" === e.code || 9 === e.keyCode
              }
              )(e) && (0,
                u.default)(n.content, e),
                n.props.shouldCloseOnEsc && function (e) {
                  return "Escape" === e.code || 27 === e.keyCode
                }(e) && (e.stopPropagation(),
                  n.requestClose(e))
            }
            ,
            n.handleOverlayOnClick = function (e) {
              null === n.shouldClose && (n.shouldClose = !0),
                n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()),
                n.shouldClose = null
            }
            ,
            n.handleContentOnMouseUp = function () {
              n.shouldClose = !1
            }
            ,
            n.handleOverlayOnMouseDown = function (e) {
              n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
            }
            ,
            n.handleContentOnClick = function () {
              n.shouldClose = !1
            }
            ,
            n.handleContentOnMouseDown = function () {
              n.shouldClose = !1
            }
            ,
            n.requestClose = function (e) {
              return n.ownerHandlesClose() && n.props.onRequestClose(e)
            }
            ,
            n.ownerHandlesClose = function () {
              return n.props.onRequestClose
            }
            ,
            n.shouldBeClosed = function () {
              return !n.state.isOpen && !n.state.beforeClose
            }
            ,
            n.contentHasFocus = function () {
              return document.activeElement === n.content || n.content.contains(document.activeElement)
            }
            ,
            n.buildClassName = function (e, t) {
              var r = "object" === ("undefined" === typeof t ? "undefined" : i(t)) ? t : {
                base: _[e],
                afterOpen: _[e] + "--after-open",
                beforeClose: _[e] + "--before-close"
              }
                , o = r.base;
              return n.state.afterOpen && (o = o + " " + r.afterOpen),
                n.state.beforeClose && (o = o + " " + r.beforeClose),
                "string" === typeof t && t ? o + " " + t : o
            }
            ,
            n.attributesFromObject = function (e, t) {
              return Object.keys(t).reduce((function (n, r) {
                return n[e + "-" + r] = t[r],
                  n
              }
              ), {})
            }
            ,
            n.state = {
              afterOpen: !1,
              beforeClose: !1
            },
            n.shouldClose = null,
            n.moveFromContentToOverlay = null,
            n
        }
        return function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e),
          o(t, [{
            key: "componentDidMount",
            value: function () {
              this.props.isOpen && this.open()
            }
          }, {
            key: "componentDidUpdate",
            value: function (e, t) {
              this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(),
                this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              this.state.isOpen && this.afterClose(),
                clearTimeout(this.closeTimer),
                cancelAnimationFrame(this.openAnimationFrame)
            }
          }, {
            key: "beforeOpen",
            value: function () {
              var e = this.props
                , t = e.appElement
                , n = e.ariaHideApp
                , r = e.htmlOpenClassName
                , i = e.bodyOpenClassName
                , o = e.parentSelector
                , s = o && o().ownerDocument || document;
              i && d.add(s.body, i),
                r && d.add(s.getElementsByTagName("html")[0], r),
                n && (v += 1,
                  l.hide(t)),
                p.default.register(this)
            }
          }, {
            key: "render",
            value: function () {
              var e = this.props
                , t = e.id
                , n = e.className
                , i = e.overlayClassName
                , o = e.defaultStyles
                , s = e.children
                , a = n ? {} : o.content
                , c = i ? {} : o.overlay;
              if (this.shouldBeClosed())
                return null;
              var u = {
                ref: this.setOverlayRef,
                className: this.buildClassName("overlay", i),
                style: r({}, c, this.props.style.overlay),
                onClick: this.handleOverlayOnClick,
                onMouseDown: this.handleOverlayOnMouseDown
              }
                , l = r({
                  id: t,
                  ref: this.setContentRef,
                  style: r({}, a, this.props.style.content),
                  className: this.buildClassName("content", n),
                  tabIndex: "-1",
                  onKeyDown: this.handleKeyDown,
                  onMouseDown: this.handleContentOnMouseDown,
                  onMouseUp: this.handleContentOnMouseUp,
                  onClick: this.handleContentOnClick,
                  role: this.props.role,
                  "aria-label": this.props.contentLabel
                }, this.attributesFromObject("aria", r({
                  modal: !0
                }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                  "data-testid": this.props.testId
                })
                , d = this.props.contentElement(l, s);
              return this.props.overlayElement(u, d)
            }
          }]),
          t
      }(s.Component);
    y.defaultProps = {
      style: {
        overlay: {},
        content: {}
      },
      defaultStyles: {}
    },
      y.propTypes = {
        isOpen: a.default.bool.isRequired,
        defaultStyles: a.default.shape({
          content: a.default.object,
          overlay: a.default.object
        }),
        style: a.default.shape({
          content: a.default.object,
          overlay: a.default.object
        }),
        className: a.default.oneOfType([a.default.string, a.default.object]),
        overlayClassName: a.default.oneOfType([a.default.string, a.default.object]),
        parentSelector: a.default.func,
        bodyOpenClassName: a.default.string,
        htmlOpenClassName: a.default.string,
        ariaHideApp: a.default.bool,
        appElement: a.default.oneOfType([a.default.instanceOf(f.default), a.default.instanceOf(h.SafeHTMLCollection), a.default.instanceOf(h.SafeNodeList), a.default.arrayOf(a.default.instanceOf(f.default))]),
        onAfterOpen: a.default.func,
        onAfterClose: a.default.func,
        onRequestClose: a.default.func,
        closeTimeoutMS: a.default.number,
        shouldFocusAfterRender: a.default.bool,
        shouldCloseOnOverlayClick: a.default.bool,
        shouldReturnFocusAfterClose: a.default.bool,
        preventScroll: a.default.bool,
        role: a.default.string,
        contentLabel: a.default.string,
        aria: a.default.object,
        data: a.default.object,
        children: a.default.node,
        shouldCloseOnEsc: a.default.bool,
        overlayRef: a.default.func,
        contentRef: a.default.func,
        id: a.default.string,
        overlayElement: a.default.func,
        contentElement: a.default.func,
        testId: a.default.string
      },
      t.default = y,
      e.exports = t.default
  },
  7149: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.resetState = function () {
        a && (a.removeAttribute ? a.removeAttribute("aria-hidden") : null != a.length ? a.forEach((function (e) {
          return e.removeAttribute("aria-hidden")
        }
        )) : document.querySelectorAll(a).forEach((function (e) {
          return e.removeAttribute("aria-hidden")
        }
        )));
        a = null
      }
      ,
      t.log = function () {
        0
      }
      ,
      t.assertNodeList = c,
      t.setElement = function (e) {
        var t = e;
        if ("string" === typeof t && s.canUseDOM) {
          var n = document.querySelectorAll(t);
          c(n, t),
            t = n
        }
        return a = t || a
      }
      ,
      t.validateElement = u,
      t.hide = function (e) {
        var t = !0
          , n = !1
          , r = void 0;
        try {
          for (var i, o = u(e)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
            i.value.setAttribute("aria-hidden", "true")
          }
        } catch (s) {
          n = !0,
            r = s
        } finally {
          try {
            !t && o.return && o.return()
          } finally {
            if (n)
              throw r
          }
        }
      }
      ,
      t.show = function (e) {
        var t = !0
          , n = !1
          , r = void 0;
        try {
          for (var i, o = u(e)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
            i.value.removeAttribute("aria-hidden")
          }
        } catch (s) {
          n = !0,
            r = s
        } finally {
          try {
            !t && o.return && o.return()
          } finally {
            if (n)
              throw r
          }
        }
      }
      ,
      t.documentNotReadyOrSSRTesting = function () {
        a = null
      }
      ;
    var r, i = n(2473), o = (r = i) && r.__esModule ? r : {
      default: r
    }, s = n(1112);
    var a = null;
    function c(e, t) {
      if (!e || !e.length)
        throw new Error("react-modal: No elements were found for selector " + t + ".")
    }
    function u(e) {
      var t = e || a;
      return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0,
        o.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")),
        [])
    }
  },
  5063: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.resetState = function () {
        for (var e = [s, a], t = 0; t < e.length; t++) {
          var n = e[t];
          n && (n.parentNode && n.parentNode.removeChild(n))
        }
        s = a = null,
          c = []
      }
      ,
      t.log = function () {
        console.log("bodyTrap ----------"),
          console.log(c.length);
        for (var e = [s, a], t = 0; t < e.length; t++) {
          var n = e[t] || {};
          console.log(n.nodeName, n.className, n.id)
        }
        console.log("edn bodyTrap ----------")
      }
      ;
    var r, i = n(9623), o = (r = i) && r.__esModule ? r : {
      default: r
    };
    var s = void 0
      , a = void 0
      , c = [];
    function u() {
      0 !== c.length && c[c.length - 1].focusContent()
    }
    o.default.subscribe((function (e, t) {
      s || a || ((s = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""),
        s.style.position = "absolute",
        s.style.opacity = "0",
        s.setAttribute("tabindex", "0"),
        s.addEventListener("focus", u),
        (a = s.cloneNode()).addEventListener("focus", u)),
        (c = t).length > 0 ? (document.body.firstChild !== s && document.body.insertBefore(s, document.body.firstChild),
          document.body.lastChild !== a && document.body.appendChild(a)) : (s.parentElement && s.parentElement.removeChild(s),
            a.parentElement && a.parentElement.removeChild(a))
    }
    ))
  },
  2409: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.resetState = function () {
        var e = document.getElementsByTagName("html")[0];
        for (var t in n)
          i(e, n[t]);
        var o = document.body;
        for (var s in r)
          i(o, r[s]);
        n = {},
          r = {}
      }
      ,
      t.log = function () {
        0
      }
      ;
    var n = {}
      , r = {};
    function i(e, t) {
      e.classList.remove(t)
    }
    t.add = function (e, t) {
      return i = e.classList,
        o = "html" == e.nodeName.toLowerCase() ? n : r,
        void t.split(" ").forEach((function (e) {
          !function (e, t) {
            e[t] || (e[t] = 0),
              e[t] += 1
          }(o, e),
            i.add(e)
        }
        ));
      var i, o
    }
      ,
      t.remove = function (e, t) {
        return i = e.classList,
          o = "html" == e.nodeName.toLowerCase() ? n : r,
          void t.split(" ").forEach((function (e) {
            !function (e, t) {
              e[t] && (e[t] -= 1)
            }(o, e),
              0 === o[e] && i.remove(e)
          }
          ));
        var i, o
      }
  },
  9685: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.resetState = function () {
        s = []
      }
      ,
      t.log = function () {
        0
      }
      ,
      t.handleBlur = u,
      t.handleFocus = l,
      t.markForFocusLater = function () {
        s.push(document.activeElement)
      }
      ,
      t.returnFocus = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          , t = null;
        try {
          return void (0 !== s.length && (t = s.pop()).focus({
            preventScroll: e
          }))
        } catch (n) {
          console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "))
        }
      }
      ,
      t.popWithoutFocus = function () {
        s.length > 0 && s.pop()
      }
      ,
      t.setupScopedFocus = function (e) {
        a = e,
          window.addEventListener ? (window.addEventListener("blur", u, !1),
            document.addEventListener("focus", l, !0)) : (window.attachEvent("onBlur", u),
              document.attachEvent("onFocus", l))
      }
      ,
      t.teardownScopedFocus = function () {
        a = null,
          window.addEventListener ? (window.removeEventListener("blur", u),
            document.removeEventListener("focus", l)) : (window.detachEvent("onBlur", u),
              document.detachEvent("onFocus", l))
      }
      ;
    var r, i = n(7845), o = (r = i) && r.__esModule ? r : {
      default: r
    };
    var s = []
      , a = null
      , c = !1;
    function u() {
      c = !0
    }
    function l() {
      if (c) {
        if (c = !1,
          !a)
          return;
        setTimeout((function () {
          a.contains(document.activeElement) || ((0,
            o.default)(a)[0] || a).focus()
        }
        ), 0)
      }
    }
  },
  9623: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.log = function () {
        console.log("portalOpenInstances ----------"),
          console.log(r.openInstances.length),
          r.openInstances.forEach((function (e) {
            return console.log(e)
          }
          )),
          console.log("end portalOpenInstances ----------")
      }
      ,
      t.resetState = function () {
        r = new n
      }
      ;
    var n = function e() {
      var t = this;
      !function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }(this, e),
        this.register = function (e) {
          -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e),
            t.emit("register"))
        }
        ,
        this.deregister = function (e) {
          var n = t.openInstances.indexOf(e);
          -1 !== n && (t.openInstances.splice(n, 1),
            t.emit("deregister"))
        }
        ,
        this.subscribe = function (e) {
          t.subscribers.push(e)
        }
        ,
        this.emit = function (e) {
          t.subscribers.forEach((function (n) {
            return n(e, t.openInstances.slice())
          }
          ))
        }
        ,
        this.openInstances = [],
        this.subscribers = []
    }
      , r = new n;
    t.default = r
  },
  1112: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0;
    var r, i = n(8875);
    var o = ((r = i) && r.__esModule ? r : {
      default: r
    }).default
      , s = o.canUseDOM ? window.HTMLElement : {};
    t.SafeHTMLCollection = o.canUseDOM ? window.HTMLCollection : {},
      t.SafeNodeList = o.canUseDOM ? window.NodeList : {},
      t.canUseDOM = o.canUseDOM;
    t.default = s
  },
  8338: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function (e, t) {
        var n = (0,
          o.default)(e);
        if (!n.length)
          return void t.preventDefault();
        var r = void 0
          , i = t.shiftKey
          , a = n[0]
          , c = n[n.length - 1]
          , u = s();
        if (e === u) {
          if (!i)
            return;
          r = c
        }
        c !== u || i || (r = a);
        a === u && i && (r = c);
        if (r)
          return t.preventDefault(),
            void r.focus();
        var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        if (null == l || "Chrome" == l[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent))
          return;
        var d = n.indexOf(u);
        d > -1 && (d += i ? -1 : 1);
        if ("undefined" === typeof (r = n[d]))
          return t.preventDefault(),
            void (r = i ? c : a).focus();
        t.preventDefault(),
          r.focus()
      }
      ;
    var r, i = n(7845), o = (r = i) && r.__esModule ? r : {
      default: r
    };
    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
      return e.activeElement.shadowRoot ? s(e.activeElement.shadowRoot) : e.activeElement
    }
    e.exports = t.default
  },
  7845: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function e(t) {
        var n = [].slice.call(t.querySelectorAll("*"), 0).reduce((function (t, n) {
          return t.concat(n.shadowRoot ? e(n.shadowRoot) : [n])
        }
        ), []);
        return n.filter(o)
      }
      ;
    var n = /input|select|textarea|button|object|iframe/;
    function r(e) {
      var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
      if (t && !e.innerHTML)
        return !0;
      try {
        var n = window.getComputedStyle(e)
          , r = n.getPropertyValue("display");
        return t ? "contents" !== r && function (e, t) {
          return "visible" !== t.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0
        }(e, n) : "none" === r
      } catch (i) {
        return console.warn("Failed to inspect element style"),
          !1
      }
    }
    function i(e, t) {
      var i = e.nodeName.toLowerCase();
      return (n.test(i) && !e.disabled || "a" === i && e.href || t) && function (e) {
        for (var t = e, n = e.getRootNode && e.getRootNode(); t && t !== document.body;) {
          if (n && t === n && (t = n.host.parentNode),
            r(t))
            return !1;
          t = t.parentNode
        }
        return !0
      }(e)
    }
    function o(e) {
      var t = e.getAttribute("tabindex");
      null === t && (t = void 0);
      var n = isNaN(t);
      return (n || t >= 0) && i(e, !n)
    }
    e.exports = t.default
  },
  3253: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r, i = n(9983), o = (r = i) && r.__esModule ? r : {
      default: r
    };
    t.default = o.default,
      e.exports = t.default
  },
  6774: function (e) {
    e.exports = function (e, t, n, r) {
      var i = n ? n.call(r, e, t) : void 0;
      if (void 0 !== i)
        return !!i;
      if (e === t)
        return !0;
      if ("object" !== typeof e || !e || "object" !== typeof t || !t)
        return !1;
      var o = Object.keys(e)
        , s = Object.keys(t);
      if (o.length !== s.length)
        return !1;
      for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
        var u = o[c];
        if (!a(u))
          return !1;
        var l = e[u]
          , d = t[u];
        if (!1 === (i = n ? n.call(r, l, d, u) : void 0) || void 0 === i && l !== d)
          return !1
      }
      return !0
    }
  },
  1686: function (e, t, n) {
    "use strict";
    n.d(t, {
      vJ: function () {
        return Kt
      },
      iv: function () {
        return Ht
      },
      ZP: function () {
        return Vt
      }
    });
    var r = function () {
      return r = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
      }
        ,
        r.apply(this, arguments)
    };
    Object.create;
    function i(e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
          !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)),
            r[i] = t[i]);
      return e.concat(r || Array.prototype.slice.call(t))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var o = n(7294)
      , s = n(6774)
      , a = n.n(s)
      , c = "-ms-"
      , u = "-moz-"
      , l = "-webkit-"
      , d = "comm"
      , h = "rule"
      , f = "decl"
      , p = "@keyframes"
      , m = Math.abs
      , g = String.fromCharCode
      , _ = Object.assign;
    function v(e) {
      return e.trim()
    }
    function y(e, t) {
      return (e = t.exec(e)) ? e[0] : e
    }
    function b(e, t, n) {
      return e.replace(t, n)
    }
    function E(e, t, n) {
      return e.indexOf(t, n)
    }
    function w(e, t) {
      return 0 | e.charCodeAt(t)
    }
    function S(e, t, n) {
      return e.slice(t, n)
    }
    function T(e) {
      return e.length
    }
    function R(e) {
      return e.length
    }
    function I(e, t) {
      return t.push(e),
        e
    }
    function O(e, t) {
      return e.filter((function (e) {
        return !y(e, t)
      }
      ))
    }
    var k = 1
      , C = 1
      , N = 0
      , A = 0
      , P = 0
      , D = "";
    function x(e, t, n, r, i, o, s, a) {
      return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: i,
        children: o,
        line: k,
        column: C,
        length: s,
        return: "",
        siblings: a
      }
    }
    function L(e, t) {
      return _(x("", null, null, "", null, null, 0, e.siblings), e, {
        length: -e.length
      }, t)
    }
    function U(e) {
      for (; e.root;)
        e = L(e.root, {
          children: [e]
        });
      I(e, e.siblings)
    }
    function j() {
      return P = A > 0 ? w(D, --A) : 0,
        C--,
        10 === P && (C = 1,
          k--),
        P
    }
    function B() {
      return P = A < N ? w(D, A++) : 0,
        C++,
        10 === P && (C = 1,
          k++),
        P
    }
    function M() {
      return w(D, A)
    }
    function F() {
      return A
    }
    function $(e, t) {
      return S(D, e, t)
    }
    function G(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1
      }
      return 0
    }
    function Y(e) {
      return k = C = 1,
        N = T(D = e),
        A = 0,
        []
    }
    function H(e) {
      return D = "",
        e
    }
    function W(e) {
      return v($(A - 1, z(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
    }
    function q(e) {
      for (; (P = M()) && P < 33;)
        B();
      return G(e) > 2 || G(P) > 3 ? "" : " "
    }
    function V(e, t) {
      for (; --t && B() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97);)
        ;
      return $(e, F() + (t < 6 && 32 == M() && 32 == B()))
    }
    function z(e) {
      for (; B();)
        switch (P) {
          case e:
            return A;
          case 34:
          case 39:
            34 !== e && 39 !== e && z(P);
            break;
          case 40:
            41 === e && z(e);
            break;
          case 92:
            B()
        }
      return A
    }
    function K(e, t) {
      for (; B() && e + P !== 57 && (e + P !== 84 || 47 !== M());)
        ;
      return "/*" + $(t, A - 1) + "*" + g(47 === e ? e : B())
    }
    function J(e) {
      for (; !G(M());)
        B();
      return $(e, A)
    }
    function Z(e, t) {
      for (var n = "", r = 0; r < e.length; r++)
        n += t(e[r], r, e, t) || "";
      return n
    }
    function X(e, t, n, r) {
      switch (e.type) {
        case "@layer":
          if (e.children.length)
            break;
        case "@import":
        case f:
          return e.return = e.return || e.value;
        case d:
          return "";
        case p:
          return e.return = e.value + "{" + Z(e.children, r) + "}";
        case h:
          if (!T(e.value = e.props.join(",")))
            return ""
      }
      return T(n = Z(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
    }
    function Q(e, t, n) {
      switch (function (e, t) {
        return 45 ^ w(e, 0) ? (((t << 2 ^ w(e, 0)) << 2 ^ w(e, 1)) << 2 ^ w(e, 2)) << 2 ^ w(e, 3) : 0
      }(e, t)) {
        case 5103:
          return l + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return l + e + e;
        case 4789:
          return u + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return l + e + u + e + c + e + e;
        case 5936:
          switch (w(e, t + 11)) {
            case 114:
              return l + e + c + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
            case 108:
              return l + e + c + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
            case 45:
              return l + e + c + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e
          }
        case 6828:
        case 4268:
        case 2903:
          return l + e + c + e + e;
        case 6165:
          return l + e + c + "flex-" + e + e;
        case 5187:
          return l + e + b(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
        case 5443:
          return l + e + c + "flex-item-" + b(e, /flex-|-self/g, "") + (y(e, /flex-|baseline/) ? "" : c + "grid-row-" + b(e, /flex-|-self/g, "")) + e;
        case 4675:
          return l + e + c + "flex-line-pack" + b(e, /align-content|flex-|-self/g, "") + e;
        case 5548:
          return l + e + c + b(e, "shrink", "negative") + e;
        case 5292:
          return l + e + c + b(e, "basis", "preferred-size") + e;
        case 6060:
          return l + "box-" + b(e, "-grow", "") + l + e + c + b(e, "grow", "positive") + e;
        case 4554:
          return l + b(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
        case 6187:
          return b(b(b(e, /(zoom-|grab)/, l + "$1"), /(image-set)/, l + "$1"), e, "") + e;
        case 5495:
        case 3959:
          return b(e, /(image-set\([^]*)/, l + "$1$`$1");
        case 4968:
          return b(b(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + l + e + e;
        case 4200:
          if (!y(e, /flex-|baseline/))
            return c + "grid-column-align" + S(e, t) + e;
          break;
        case 2592:
        case 3360:
          return c + b(e, "template-", "") + e;
        case 4384:
        case 3616:
          return n && n.some((function (e, n) {
            return t = n,
              y(e.props, /grid-\w+-end/)
          }
          )) ? ~E(e + (n = n[t].value), "span", 0) ? e : c + b(e, "-start", "") + e + c + "grid-row-span:" + (~E(n, "span", 0) ? y(n, /\d+/) : +y(n, /\d+/) - +y(e, /\d+/)) + ";" : c + b(e, "-start", "") + e;
        case 4896:
        case 4128:
          return n && n.some((function (e) {
            return y(e.props, /grid-\w+-start/)
          }
          )) ? e : c + b(b(e, "-end", "-span"), "span ", "") + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return b(e, /(.+)-inline(.+)/, l + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (T(e) - 1 - t > 6)
            switch (w(e, t + 1)) {
              case 109:
                if (45 !== w(e, t + 4))
                  break;
              case 102:
                return b(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + u + (108 == w(e, t + 3) ? "$3" : "$2-$3")) + e;
              case 115:
                return ~E(e, "stretch", 0) ? Q(b(e, "stretch", "fill-available"), t, n) + e : e
            }
          break;
        case 5152:
        case 5920:
          return b(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, (function (t, n, r, i, o, s, a) {
            return c + n + ":" + r + a + (i ? c + n + "-span:" + (o ? s : +s - +r) + a : "") + e
          }
          ));
        case 4949:
          if (121 === w(e, t + 6))
            return b(e, ":", ":" + l) + e;
          break;
        case 6444:
          switch (w(e, 45 === w(e, 14) ? 18 : 11)) {
            case 120:
              return b(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + l + (45 === w(e, 14) ? "inline-" : "") + "box$3$1" + l + "$2$3$1" + c + "$2box$3") + e;
            case 100:
              return b(e, ":", ":" + c) + e
          }
          break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
          return b(e, "scroll-", "scroll-snap-") + e
      }
      return e
    }
    function ee(e, t, n, r) {
      if (e.length > -1 && !e.return)
        switch (e.type) {
          case f:
            return void (e.return = Q(e.value, e.length, n));
          case p:
            return Z([L(e, {
              value: b(e.value, "@", "@" + l)
            })], r);
          case h:
            if (e.length)
              return function (e, t) {
                return e.map(t).join("")
              }(n = e.props, (function (t) {
                switch (y(t, r = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    U(L(e, {
                      props: [b(t, /:(read-\w+)/, ":-moz-$1")]
                    })),
                      U(L(e, {
                        props: [t]
                      })),
                      _(e, {
                        props: O(n, r)
                      });
                    break;
                  case "::placeholder":
                    U(L(e, {
                      props: [b(t, /:(plac\w+)/, ":-webkit-input-$1")]
                    })),
                      U(L(e, {
                        props: [b(t, /:(plac\w+)/, ":-moz-$1")]
                      })),
                      U(L(e, {
                        props: [b(t, /:(plac\w+)/, c + "input-$1")]
                      })),
                      U(L(e, {
                        props: [t]
                      })),
                      _(e, {
                        props: O(n, r)
                      })
                }
                return ""
              }
              ))
        }
    }
    function te(e) {
      return H(ne("", null, null, null, [""], e = Y(e), 0, [0], e))
    }
    function ne(e, t, n, r, i, o, s, a, c) {
      for (var u = 0, l = 0, d = s, h = 0, f = 0, p = 0, _ = 1, v = 1, y = 1, S = 0, R = "", O = i, k = o, C = r, N = R; v;)
        switch (p = S,
        S = B()) {
          case 40:
            if (108 != p && 58 == w(N, d - 1)) {
              -1 != E(N += b(W(S), "&", "&\f"), "&\f", m(u ? a[u - 1] : 0)) && (y = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            N += W(S);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            N += q(p);
            break;
          case 92:
            N += V(F() - 1, 7);
            continue;
          case 47:
            switch (M()) {
              case 42:
              case 47:
                I(ie(K(B(), F()), t, n, c), c);
                break;
              default:
                N += "/"
            }
            break;
          case 123 * _:
            a[u++] = T(N) * y;
          case 125 * _:
          case 59:
          case 0:
            switch (S) {
              case 0:
              case 125:
                v = 0;
              case 59 + l:
                -1 == y && (N = b(N, /\f/g, "")),
                  f > 0 && T(N) - d && I(f > 32 ? oe(N + ";", r, n, d - 1, c) : oe(b(N, " ", "") + ";", r, n, d - 2, c), c);
                break;
              case 59:
                N += ";";
              default:
                if (I(C = re(N, t, n, u, l, i, a, R, O = [], k = [], d, o), o),
                  123 === S)
                  if (0 === l)
                    ne(N, t, C, C, O, o, d, a, k);
                  else
                    switch (99 === h && 110 === w(N, 3) ? 100 : h) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        ne(e, C, C, r && I(re(e, C, C, 0, 0, i, a, R, i, O = [], d, k), k), i, k, d, a, r ? O : k);
                        break;
                      default:
                        ne(N, C, C, C, [""], k, 0, a, k)
                    }
            }
            u = l = f = 0,
              _ = y = 1,
              R = N = "",
              d = s;
            break;
          case 58:
            d = 1 + T(N),
              f = p;
          default:
            if (_ < 1)
              if (123 == S)
                --_;
              else if (125 == S && 0 == _++ && 125 == j())
                continue;
            switch (N += g(S),
            S * _) {
              case 38:
                y = l > 0 ? 1 : (N += "\f",
                  -1);
                break;
              case 44:
                a[u++] = (T(N) - 1) * y,
                  y = 1;
                break;
              case 64:
                45 === M() && (N += W(B())),
                  h = M(),
                  l = d = T(R = N += J(F())),
                  S++;
                break;
              case 45:
                45 === p && 2 == T(N) && (_ = 0)
            }
        }
      return o
    }
    function re(e, t, n, r, i, o, s, a, c, u, l, d) {
      for (var f = i - 1, p = 0 === i ? o : [""], g = R(p), _ = 0, y = 0, E = 0; _ < r; ++_)
        for (var w = 0, T = S(e, f + 1, f = m(y = s[_])), I = e; w < g; ++w)
          (I = v(y > 0 ? p[w] + " " + T : b(T, /&\f/g, p[w]))) && (c[E++] = I);
      return x(e, t, n, 0 === i ? h : a, c, u, l, d)
    }
    function ie(e, t, n, r) {
      return x(e, t, n, d, g(P), S(e, 2, -2), 0, r)
    }
    function oe(e, t, n, r, i) {
      return x(e, t, n, f, S(e, 0, r), S(e, r + 1, -1), r, i)
    }
    var se = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    }
      , ae = n(4155)
      , ce = "undefined" != typeof ae && void 0 !== ae.env && (ae.env.REACT_APP_SC_ATTR || ae.env.SC_ATTR) || "data-styled"
      , ue = "active"
      , le = "data-styled-version"
      , de = "6.1.13"
      , he = "/*!sc*/\n"
      , fe = "undefined" != typeof window && "HTMLElement" in window
      , pe = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof ae && void 0 !== ae.env && void 0 !== ae.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== ae.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== ae.env.REACT_APP_SC_DISABLE_SPEEDY && ae.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof ae && void 0 !== ae.env && void 0 !== ae.env.SC_DISABLE_SPEEDY && "" !== ae.env.SC_DISABLE_SPEEDY && ("false" !== ae.env.SC_DISABLE_SPEEDY && ae.env.SC_DISABLE_SPEEDY))
      , me = {}
      , ge = (new Set,
        Object.freeze([]))
      , _e = Object.freeze({});
    function ve(e, t, n) {
      return void 0 === n && (n = _e),
        e.theme !== n.theme && e.theme || t || n.theme
    }
    var ye = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"])
      , be = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
      , Ee = /(^-|-$)/g;
    function we(e) {
      return e.replace(be, "-").replace(Ee, "")
    }
    var Se = /(a)(d)/gi
      , Te = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
      };
    function Re(e) {
      var t, n = "";
      for (t = Math.abs(e); t > 52; t = t / 52 | 0)
        n = Te(t % 52) + n;
      return (Te(t % 52) + n).replace(Se, "$1-$2")
    }
    var Ie, Oe = function (e, t) {
      for (var n = t.length; n;)
        e = 33 * e ^ t.charCodeAt(--n);
      return e
    }, ke = function (e) {
      return Oe(5381, e)
    };
    function Ce(e) {
      return Re(ke(e) >>> 0)
    }
    function Ne(e) {
      return e.displayName || e.name || "Component"
    }
    function Ae(e) {
      return "string" == typeof e && !0
    }
    var Pe = "function" == typeof Symbol && Symbol.for
      , De = Pe ? Symbol.for("react.memo") : 60115
      , xe = Pe ? Symbol.for("react.forward_ref") : 60112
      , Le = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      }
      , Ue = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      }
      , je = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
      }
      , Be = ((Ie = {})[xe] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      },
        Ie[De] = je,
        Ie);
    function Me(e) {
      return ("type" in (t = e) && t.type.$$typeof) === De ? je : "$$typeof" in e ? Be[e.$$typeof] : Le;
      var t
    }
    var Fe = Object.defineProperty
      , $e = Object.getOwnPropertyNames
      , Ge = Object.getOwnPropertySymbols
      , Ye = Object.getOwnPropertyDescriptor
      , He = Object.getPrototypeOf
      , We = Object.prototype;
    function qe(e, t, n) {
      if ("string" != typeof t) {
        if (We) {
          var r = He(t);
          r && r !== We && qe(e, r, n)
        }
        var i = $e(t);
        Ge && (i = i.concat(Ge(t)));
        for (var o = Me(e), s = Me(t), a = 0; a < i.length; ++a) {
          var c = i[a];
          if (!(c in Ue || n && n[c] || s && c in s || o && c in o)) {
            var u = Ye(t, c);
            try {
              Fe(e, c, u)
            } catch (e) { }
          }
        }
      }
      return e
    }
    function Ve(e) {
      return "function" == typeof e
    }
    function ze(e) {
      return "object" == typeof e && "styledComponentId" in e
    }
    function Ke(e, t) {
      return e && t ? "".concat(e, " ").concat(t) : e || t || ""
    }
    function Je(e, t) {
      if (0 === e.length)
        return "";
      for (var n = e[0], r = 1; r < e.length; r++)
        n += t ? t + e[r] : e[r];
      return n
    }
    function Ze(e) {
      return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
    }
    function Xe(e, t, n) {
      if (void 0 === n && (n = !1),
        !n && !Ze(e) && !Array.isArray(e))
        return t;
      if (Array.isArray(t))
        for (var r = 0; r < t.length; r++)
          e[r] = Xe(e[r], t[r]);
      else if (Ze(t))
        for (var r in t)
          e[r] = Xe(e[r], t[r]);
      return e
    }
    function Qe(e, t) {
      Object.defineProperty(e, "toString", {
        value: t
      })
    }
    function et(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
    }
    var tt = function () {
      function e(e) {
        this.groupSizes = new Uint32Array(512),
          this.length = 512,
          this.tag = e
      }
      return e.prototype.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++)
          t += this.groupSizes[n];
        return t
      }
        ,
        e.prototype.insertRules = function (e, t) {
          if (e >= this.groupSizes.length) {
            for (var n = this.groupSizes, r = n.length, i = r; e >= i;)
              if ((i <<= 1) < 0)
                throw et(16, "".concat(e));
            this.groupSizes = new Uint32Array(i),
              this.groupSizes.set(n),
              this.length = i;
            for (var o = r; o < i; o++)
              this.groupSizes[o] = 0
          }
          for (var s = this.indexOfGroup(e + 1), a = (o = 0,
            t.length); o < a; o++)
            this.tag.insertRule(s, t[o]) && (this.groupSizes[e]++,
              s++)
        }
        ,
        e.prototype.clearGroup = function (e) {
          if (e < this.length) {
            var t = this.groupSizes[e]
              , n = this.indexOfGroup(e)
              , r = n + t;
            this.groupSizes[e] = 0;
            for (var i = n; i < r; i++)
              this.tag.deleteRule(n)
          }
        }
        ,
        e.prototype.getGroup = function (e) {
          var t = "";
          if (e >= this.length || 0 === this.groupSizes[e])
            return t;
          for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, o = r; o < i; o++)
            t += "".concat(this.tag.getRule(o)).concat(he);
          return t
        }
        ,
        e
    }()
      , nt = new Map
      , rt = new Map
      , it = 1
      , ot = function (e) {
        if (nt.has(e))
          return nt.get(e);
        for (; rt.has(it);)
          it++;
        var t = it++;
        return nt.set(e, t),
          rt.set(t, e),
          t
      }
      , st = function (e, t) {
        it = t + 1,
          nt.set(e, t),
          rt.set(t, e)
      }
      , at = "style[".concat(ce, "][").concat(le, '="').concat(de, '"]')
      , ct = new RegExp("^".concat(ce, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'))
      , ut = function (e, t, n) {
        for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
          (r = i[o]) && e.registerName(t, r)
      }
      , lt = function (e, t) {
        for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(he), i = [], o = 0, s = r.length; o < s; o++) {
          var a = r[o].trim();
          if (a) {
            var c = a.match(ct);
            if (c) {
              var u = 0 | parseInt(c[1], 10)
                , l = c[2];
              0 !== u && (st(l, u),
                ut(e, l, c[3]),
                e.getTag().insertRules(u, i)),
                i.length = 0
            } else
              i.push(a)
          }
        }
      }
      , dt = function (e) {
        for (var t = document.querySelectorAll(at), n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          i && i.getAttribute(ce) !== ue && (lt(e, i),
            i.parentNode && i.parentNode.removeChild(i))
        }
      };
    function ht() {
      return n.nc
    }
    var ft = function (e) {
      var t = document.head
        , n = e || t
        , r = document.createElement("style")
        , i = function (e) {
          var t = Array.from(e.querySelectorAll("style[".concat(ce, "]")));
          return t[t.length - 1]
        }(n)
        , o = void 0 !== i ? i.nextSibling : null;
      r.setAttribute(ce, ue),
        r.setAttribute(le, de);
      var s = ht();
      return s && r.setAttribute("nonce", s),
        n.insertBefore(r, o),
        r
    }
      , pt = function () {
        function e(e) {
          this.element = ft(e),
            this.element.appendChild(document.createTextNode("")),
            this.sheet = function (e) {
              if (e.sheet)
                return e.sheet;
              for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                if (i.ownerNode === e)
                  return i
              }
              throw et(17)
            }(this.element),
            this.length = 0
        }
        return e.prototype.insertRule = function (e, t) {
          try {
            return this.sheet.insertRule(t, e),
              this.length++,
              !0
          } catch (e) {
            return !1
          }
        }
          ,
          e.prototype.deleteRule = function (e) {
            this.sheet.deleteRule(e),
              this.length--
          }
          ,
          e.prototype.getRule = function (e) {
            var t = this.sheet.cssRules[e];
            return t && t.cssText ? t.cssText : ""
          }
          ,
          e
      }()
      , mt = function () {
        function e(e) {
          this.element = ft(e),
            this.nodes = this.element.childNodes,
            this.length = 0
        }
        return e.prototype.insertRule = function (e, t) {
          if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t);
            return this.element.insertBefore(n, this.nodes[e] || null),
              this.length++,
              !0
          }
          return !1
        }
          ,
          e.prototype.deleteRule = function (e) {
            this.element.removeChild(this.nodes[e]),
              this.length--
          }
          ,
          e.prototype.getRule = function (e) {
            return e < this.length ? this.nodes[e].textContent : ""
          }
          ,
          e
      }()
      , gt = function () {
        function e(e) {
          this.rules = [],
            this.length = 0
        }
        return e.prototype.insertRule = function (e, t) {
          return e <= this.length && (this.rules.splice(e, 0, t),
            this.length++,
            !0)
        }
          ,
          e.prototype.deleteRule = function (e) {
            this.rules.splice(e, 1),
              this.length--
          }
          ,
          e.prototype.getRule = function (e) {
            return e < this.length ? this.rules[e] : ""
          }
          ,
          e
      }()
      , _t = fe
      , vt = {
        isServer: !fe,
        useCSSOMInjection: !pe
      }
      , yt = function () {
        function e(e, t, n) {
          void 0 === e && (e = _e),
            void 0 === t && (t = {});
          var i = this;
          this.options = r(r({}, vt), e),
            this.gs = t,
            this.names = new Map(n),
            this.server = !!e.isServer,
            !this.server && fe && _t && (_t = !1,
              dt(this)),
            Qe(this, (function () {
              return function (e) {
                for (var t = e.getTag(), n = t.length, r = "", i = function (n) {
                  var i = function (e) {
                    return rt.get(e)
                  }(n);
                  if (void 0 === i)
                    return "continue";
                  var o = e.names.get(i)
                    , s = t.getGroup(n);
                  if (void 0 === o || !o.size || 0 === s.length)
                    return "continue";
                  var a = "".concat(ce, ".g").concat(n, '[id="').concat(i, '"]')
                    , c = "";
                  void 0 !== o && o.forEach((function (e) {
                    e.length > 0 && (c += "".concat(e, ","))
                  }
                  )),
                    r += "".concat(s).concat(a, '{content:"').concat(c, '"}').concat(he)
                }, o = 0; o < n; o++)
                  i(o);
                return r
              }(i)
            }
            ))
        }
        return e.registerId = function (e) {
          return ot(e)
        }
          ,
          e.prototype.rehydrate = function () {
            !this.server && fe && dt(this)
          }
          ,
          e.prototype.reconstructWithOptions = function (t, n) {
            return void 0 === n && (n = !0),
              new e(r(r({}, this.options), t), this.gs, n && this.names || void 0)
          }
          ,
          e.prototype.allocateGSInstance = function (e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
          }
          ,
          e.prototype.getTag = function () {
            return this.tag || (this.tag = (e = function (e) {
              var t = e.useCSSOMInjection
                , n = e.target;
              return e.isServer ? new gt(n) : t ? new pt(n) : new mt(n)
            }(this.options),
              new tt(e)));
            var e
          }
          ,
          e.prototype.hasNameForId = function (e, t) {
            return this.names.has(e) && this.names.get(e).has(t)
          }
          ,
          e.prototype.registerName = function (e, t) {
            if (ot(e),
              this.names.has(e))
              this.names.get(e).add(t);
            else {
              var n = new Set;
              n.add(t),
                this.names.set(e, n)
            }
          }
          ,
          e.prototype.insertRules = function (e, t, n) {
            this.registerName(e, t),
              this.getTag().insertRules(ot(e), n)
          }
          ,
          e.prototype.clearNames = function (e) {
            this.names.has(e) && this.names.get(e).clear()
          }
          ,
          e.prototype.clearRules = function (e) {
            this.getTag().clearGroup(ot(e)),
              this.clearNames(e)
          }
          ,
          e.prototype.clearTag = function () {
            this.tag = void 0
          }
          ,
          e
      }()
      , bt = /&/g
      , Et = /^\s*\/\/.*$/gm;
    function wt(e, t) {
      return e.map((function (e) {
        return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value),
          e.value = e.value.replaceAll(",", ",".concat(t, " ")),
          e.props = e.props.map((function (e) {
            return "".concat(t, " ").concat(e)
          }
          ))),
          Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = wt(e.children, t)),
          e
      }
      ))
    }
    function St(e) {
      var t, n, r, i = void 0 === e ? _e : e, o = i.options, s = void 0 === o ? _e : o, a = i.plugins, c = void 0 === a ? ge : a, u = function (e, r, i) {
        return i.startsWith(n) && i.endsWith(n) && i.replaceAll(n, "").length > 0 ? ".".concat(t) : e
      }, l = c.slice();
      l.push((function (e) {
        e.type === h && e.value.includes("&") && (e.props[0] = e.props[0].replace(bt, n).replace(r, u))
      }
      )),
        s.prefix && l.push(ee),
        l.push(X);
      var d = function (e, i, o, a) {
        void 0 === i && (i = ""),
          void 0 === o && (o = ""),
          void 0 === a && (a = "&"),
          t = a,
          n = i,
          r = new RegExp("\\".concat(n, "\\b"), "g");
        var c = e.replace(Et, "")
          , u = te(o || i ? "".concat(o, " ").concat(i, " { ").concat(c, " }") : c);
        s.namespace && (u = wt(u, s.namespace));
        var d, h = [];
        return Z(u, function (e) {
          var t = R(e);
          return function (n, r, i, o) {
            for (var s = "", a = 0; a < t; a++)
              s += e[a](n, r, i, o) || "";
            return s
          }
        }(l.concat((d = function (e) {
          return h.push(e)
        }
          ,
          function (e) {
            e.root || (e = e.return) && d(e)
          }
        )))),
          h
      };
      return d.hash = c.length ? c.reduce((function (e, t) {
        return t.name || et(15),
          Oe(e, t.name)
      }
      ), 5381).toString() : "",
        d
    }
    var Tt = new yt
      , Rt = St()
      , It = o.createContext({
        shouldForwardProp: void 0,
        styleSheet: Tt,
        stylis: Rt
      })
      , Ot = (It.Consumer,
        o.createContext(void 0));
    function kt() {
      return (0,
        o.useContext)(It)
    }
    function Ct(e) {
      var t = (0,
        o.useState)(e.stylisPlugins)
        , n = t[0]
        , r = t[1]
        , i = kt().styleSheet
        , s = (0,
          o.useMemo)((function () {
            var t = i;
            return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
              target: e.target
            }, !1)),
              e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                useCSSOMInjection: !1
              })),
              t
          }
          ), [e.disableCSSOMInjection, e.sheet, e.target, i])
        , c = (0,
          o.useMemo)((function () {
            return St({
              options: {
                namespace: e.namespace,
                prefix: e.enableVendorPrefixes
              },
              plugins: n
            })
          }
          ), [e.enableVendorPrefixes, e.namespace, n]);
      (0,
        o.useEffect)((function () {
          a()(n, e.stylisPlugins) || r(e.stylisPlugins)
        }
        ), [e.stylisPlugins]);
      var u = (0,
        o.useMemo)((function () {
          return {
            shouldForwardProp: e.shouldForwardProp,
            styleSheet: s,
            stylis: c
          }
        }
        ), [e.shouldForwardProp, s, c]);
      return o.createElement(It.Provider, {
        value: u
      }, o.createElement(Ot.Provider, {
        value: c
      }, e.children))
    }
    var Nt = function () {
      function e(e, t) {
        var n = this;
        this.inject = function (e, t) {
          void 0 === t && (t = Rt);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
        }
          ,
          this.name = e,
          this.id = "sc-keyframes-".concat(e),
          this.rules = t,
          Qe(this, (function () {
            throw et(12, String(n.name))
          }
          ))
      }
      return e.prototype.getName = function (e) {
        return void 0 === e && (e = Rt),
          this.name + e.hash
      }
        ,
        e
    }()
      , At = function (e) {
        return e >= "A" && e <= "Z"
      };
    function Pt(e) {
      for (var t = "", n = 0; n < e.length; n++) {
        var r = e[n];
        if (1 === n && "-" === r && "-" === e[0])
          return e;
        At(r) ? t += "-" + r.toLowerCase() : t += r
      }
      return t.startsWith("ms-") ? "-" + t : t
    }
    var Dt = function (e) {
      return null == e || !1 === e || "" === e
    }
      , xt = function (e) {
        var t, n, r = [];
        for (var o in e) {
          var s = e[o];
          e.hasOwnProperty(o) && !Dt(s) && (Array.isArray(s) && s.isCss || Ve(s) ? r.push("".concat(Pt(o), ":"), s, ";") : Ze(s) ? r.push.apply(r, i(i(["".concat(o, " {")], xt(s), !1), ["}"], !1)) : r.push("".concat(Pt(o), ": ").concat((t = o,
            null == (n = s) || "boolean" == typeof n || "" === n ? "" : "number" != typeof n || 0 === n || t in se || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")))
        }
        return r
      };
    function Lt(e, t, n, r) {
      return Dt(e) ? [] : ze(e) ? [".".concat(e.styledComponentId)] : Ve(e) ? !Ve(i = e) || i.prototype && i.prototype.isReactComponent || !t ? [e] : Lt(e(t), t, n, r) : e instanceof Nt ? n ? (e.inject(n, r),
        [e.getName(r)]) : [e] : Ze(e) ? xt(e) : Array.isArray(e) ? Array.prototype.concat.apply(ge, e.map((function (e) {
          return Lt(e, t, n, r)
        }
        ))) : [e.toString()];
      var i
    }
    function Ut(e) {
      for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (Ve(n) && !ze(n))
          return !1
      }
      return !0
    }
    var jt = ke(de)
      , Bt = function () {
        function e(e, t, n) {
          this.rules = e,
            this.staticRulesId = "",
            this.isStatic = (void 0 === n || n.isStatic) && Ut(e),
            this.componentId = t,
            this.baseHash = Oe(jt, t),
            this.baseStyle = n,
            yt.registerId(t)
        }
        return e.prototype.generateAndInjectStyles = function (e, t, n) {
          var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
          if (this.isStatic && !n.hash)
            if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
              r = Ke(r, this.staticRulesId);
            else {
              var i = Je(Lt(this.rules, e, t, n))
                , o = Re(Oe(this.baseHash, i) >>> 0);
              if (!t.hasNameForId(this.componentId, o)) {
                var s = n(i, ".".concat(o), void 0, this.componentId);
                t.insertRules(this.componentId, o, s)
              }
              r = Ke(r, o),
                this.staticRulesId = o
            }
          else {
            for (var a = Oe(this.baseHash, n.hash), c = "", u = 0; u < this.rules.length; u++) {
              var l = this.rules[u];
              if ("string" == typeof l)
                c += l;
              else if (l) {
                var d = Je(Lt(l, e, t, n));
                a = Oe(a, d + u),
                  c += d
              }
            }
            if (c) {
              var h = Re(a >>> 0);
              t.hasNameForId(this.componentId, h) || t.insertRules(this.componentId, h, n(c, ".".concat(h), void 0, this.componentId)),
                r = Ke(r, h)
            }
          }
          return r
        }
          ,
          e
      }()
      , Mt = o.createContext(void 0);
    Mt.Consumer;
    var Ft = {};
    new Set;
    function $t(e, t, n) {
      var i = ze(e)
        , s = e
        , a = !Ae(e)
        , c = t.attrs
        , u = void 0 === c ? ge : c
        , l = t.componentId
        , d = void 0 === l ? function (e, t) {
          var n = "string" != typeof e ? "sc" : we(e);
          Ft[n] = (Ft[n] || 0) + 1;
          var r = "".concat(n, "-").concat(Ce(de + n + Ft[n]));
          return t ? "".concat(t, "-").concat(r) : r
        }(t.displayName, t.parentComponentId) : l
        , h = t.displayName
        , f = void 0 === h ? function (e) {
          return Ae(e) ? "styled.".concat(e) : "Styled(".concat(Ne(e), ")")
        }(e) : h
        , p = t.displayName && t.componentId ? "".concat(we(t.displayName), "-").concat(t.componentId) : t.componentId || d
        , m = i && s.attrs ? s.attrs.concat(u).filter(Boolean) : u
        , g = t.shouldForwardProp;
      if (i && s.shouldForwardProp) {
        var _ = s.shouldForwardProp;
        if (t.shouldForwardProp) {
          var v = t.shouldForwardProp;
          g = function (e, t) {
            return _(e, t) && v(e, t)
          }
        } else
          g = _
      }
      var y = new Bt(n, p, i ? s.componentStyle : void 0);
      function b(e, t) {
        return function (e, t, n) {
          var i = e.attrs
            , s = e.componentStyle
            , a = e.defaultProps
            , c = e.foldedComponentIds
            , u = e.styledComponentId
            , l = e.target
            , d = o.useContext(Mt)
            , h = kt()
            , f = e.shouldForwardProp || h.shouldForwardProp
            , p = ve(t, d, a) || _e
            , m = function (e, t, n) {
              for (var i, o = r(r({}, t), {
                className: void 0,
                theme: n
              }), s = 0; s < e.length; s += 1) {
                var a = Ve(i = e[s]) ? i(o) : i;
                for (var c in a)
                  o[c] = "className" === c ? Ke(o[c], a[c]) : "style" === c ? r(r({}, o[c]), a[c]) : a[c]
              }
              return t.className && (o.className = Ke(o.className, t.className)),
                o
            }(i, t, p)
            , g = m.as || l
            , _ = {};
          for (var v in m)
            void 0 === m[v] || "$" === v[0] || "as" === v || "theme" === v && m.theme === p || ("forwardedAs" === v ? _.as = m.forwardedAs : f && !f(v, g) || (_[v] = m[v]));
          var y = function (e, t) {
            var n = kt();
            return e.generateAndInjectStyles(t, n.styleSheet, n.stylis)
          }(s, m)
            , b = Ke(c, u);
          return y && (b += " " + y),
            m.className && (b += " " + m.className),
            _[Ae(g) && !ye.has(g) ? "class" : "className"] = b,
            _.ref = n,
            (0,
              o.createElement)(g, _)
        }(E, e, t)
      }
      b.displayName = f;
      var E = o.forwardRef(b);
      return E.attrs = m,
        E.componentStyle = y,
        E.displayName = f,
        E.shouldForwardProp = g,
        E.foldedComponentIds = i ? Ke(s.foldedComponentIds, s.styledComponentId) : "",
        E.styledComponentId = p,
        E.target = i ? s.target : e,
        Object.defineProperty(E, "defaultProps", {
          get: function () {
            return this._foldedDefaultProps
          },
          set: function (e) {
            this._foldedDefaultProps = i ? function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              for (var r = 0, i = t; r < i.length; r++)
                Xe(e, i[r], !0);
              return e
            }({}, s.defaultProps, e) : e
          }
        }),
        Qe(E, (function () {
          return ".".concat(E.styledComponentId)
        }
        )),
        a && qe(E, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0
        }),
        E
    }
    function Gt(e, t) {
      for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
        n.push(t[r], e[r + 1]);
      return n
    }
    var Yt = function (e) {
      return Object.assign(e, {
        isCss: !0
      })
    };
    function Ht(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      if (Ve(e) || Ze(e))
        return Yt(Lt(Gt(ge, i([e], t, !0))));
      var r = e;
      return 0 === t.length && 1 === r.length && "string" == typeof r[0] ? Lt(r) : Yt(Lt(Gt(r, t)))
    }
    function Wt(e, t, n) {
      if (void 0 === n && (n = _e),
        !t)
        throw et(1, t);
      var o = function (r) {
        for (var o = [], s = 1; s < arguments.length; s++)
          o[s - 1] = arguments[s];
        return e(t, n, Ht.apply(void 0, i([r], o, !1)))
      };
      return o.attrs = function (i) {
        return Wt(e, t, r(r({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean)
        }))
      }
        ,
        o.withConfig = function (i) {
          return Wt(e, t, r(r({}, n), i))
        }
        ,
        o
    }
    var qt = function (e) {
      return Wt($t, e)
    }
      , Vt = qt;
    ye.forEach((function (e) {
      Vt[e] = qt(e)
    }
    ));
    var zt = function () {
      function e(e, t) {
        this.rules = e,
          this.componentId = t,
          this.isStatic = Ut(e),
          yt.registerId(this.componentId + 1)
      }
      return e.prototype.createStyles = function (e, t, n, r) {
        var i = r(Je(Lt(this.rules, t, n, r)), "")
          , o = this.componentId + e;
        n.insertRules(o, o, i)
      }
        ,
        e.prototype.removeStyles = function (e, t) {
          t.clearRules(this.componentId + e)
        }
        ,
        e.prototype.renderStyles = function (e, t, n, r) {
          e > 2 && yt.registerId(this.componentId + e),
            this.removeStyles(e, n),
            this.createStyles(e, t, n, r)
        }
        ,
        e
    }();
    function Kt(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var s = Ht.apply(void 0, i([e], t, !1))
        , a = "sc-global-".concat(Ce(JSON.stringify(s)))
        , c = new zt(s, a)
        , u = function (e) {
          var t = kt()
            , n = o.useContext(Mt)
            , r = o.useRef(t.styleSheet.allocateGSInstance(a)).current;
          return t.styleSheet.server && l(r, e, t.styleSheet, n, t.stylis),
            o.useLayoutEffect((function () {
              if (!t.styleSheet.server)
                return l(r, e, t.styleSheet, n, t.stylis),
                  function () {
                    return c.removeStyles(r, t.styleSheet)
                  }
            }
            ), [r, e, t.styleSheet, n, t.stylis]),
            null
        };
      function l(e, t, n, i, o) {
        if (c.isStatic)
          c.renderStyles(e, me, n, o);
        else {
          var s = r(r({}, t), {
            theme: ve(t, i, u.defaultProps)
          });
          c.renderStyles(e, s, n, o)
        }
      }
      return o.memo(u)
    }
    (function () {
      function e() {
        var e = this;
        this._emitSheetCSS = function () {
          var t = e.instance.toString();
          if (!t)
            return "";
          var n = ht()
            , r = Je([n && 'nonce="'.concat(n, '"'), "".concat(ce, '="true"'), "".concat(le, '="').concat(de, '"')].filter(Boolean), " ");
          return "<style ".concat(r, ">").concat(t, "</style>")
        }
          ,
          this.getStyleTags = function () {
            if (e.sealed)
              throw et(2);
            return e._emitSheetCSS()
          }
          ,
          this.getStyleElement = function () {
            var t;
            if (e.sealed)
              throw et(2);
            var n = e.instance.toString();
            if (!n)
              return [];
            var i = ((t = {})[ce] = "",
              t[le] = de,
              t.dangerouslySetInnerHTML = {
                __html: n
              },
              t)
              , s = ht();
            return s && (i.nonce = s),
              [o.createElement("style", r({}, i, {
                key: "sc-0-0"
              }))]
          }
          ,
          this.seal = function () {
            e.sealed = !0
          }
          ,
          this.instance = new yt({
            isServer: !0
          }),
          this.sealed = !1
      }
      e.prototype.collectStyles = function (e) {
        if (this.sealed)
          throw et(2);
        return o.createElement(Ct, {
          sheet: this.instance
        }, e)
      }
        ,
        e.prototype.interleaveWithNodeStream = function (e) {
          throw et(3)
        }
    }
    )(),
      "__sc-".concat(ce, "__")
  },
  605: function (e, t, n) {
    "use strict";
    n.d(t, {
      Jq: function () {
        return h
      }
    });
    var r = n(1686);
    function i(e, t) {
      return t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
    }
    function o() {
      var e = i(["\n          @media (min-width: ", ") {\n            ", "\n          }\n        "]);
      return o = function () {
        return e
      }
        ,
        e
    }
    function s() {
      var e = i(["\n          @media (max-width: ", ") {\n            ", "\n          }\n        "]);
      return s = function () {
        return e
      }
        ,
        e
    }
    function a() {
      var e = i(["\n    @media (min-width: ", ") and\n      (max-width: ", ") {\n      ", "\n    }\n  "]);
      return a = function () {
        return e
      }
        ,
        e
    }
    function c() {
      var e = i(["\n    @media (min-width: ", ") {\n      ", "\n    }\n  "]);
      return c = function () {
        return e
      }
        ,
        e
    }
    function u() {
      var e = i(["\n    @media (max-width: ", ") {\n      ", "\n    }\n  "]);
      return u = function () {
        return e
      }
        ,
        e
    }
    var l = {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px"
    };
    function d(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return t[e] ? t[e] : parseInt(e) ? e : (console.error("styled-media-query: No valid breakpoint or size specified for media."),
        "0")
    }
    function h() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
        , t = function (t) {
          return function () {
            return (0,
              r.iv)(u(), d(t, e), r.iv.apply(void 0, arguments))
          }
        }
        , n = function (t) {
          return function () {
            return (0,
              r.iv)(c(), d(t, e), r.iv.apply(void 0, arguments))
          }
        }
        , i = function (t, n) {
          return function () {
            return (0,
              r.iv)(a(), d(t, e), d(n, e), r.iv.apply(void 0, arguments))
          }
        }
        , h = Object.keys(e).reduce((function (t, n) {
          var i = e[n];
          return t.to[n] = function () {
            return console.warn("styled-media-query: Use media.lessThan('".concat(n, "') instead of old media.to.").concat(n, " (Probably we'll deprecate it)")),
              (0,
                r.iv)(s(), i, r.iv.apply(void 0, arguments))
          }
            ,
            t.from[n] = function () {
              return console.warn("styled-media-query: Use media.greaterThan('".concat(n, "') instead of old media.from.").concat(n, " (Probably we'll deprecate it)")),
                (0,
                  r.iv)(o(), i, r.iv.apply(void 0, arguments))
            }
            ,
            t
        }
        ), {
          to: {},
          from: {}
        });
      return Object.assign({
        lessThan: t,
        greaterThan: n,
        between: i
      }, h)
    }
    h()
  },
  6532: function (e, t, n) {
    "use strict";
    var r, i, o = n(1686), s = function (e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t,
        e
    }, a = (0,
      o.iv)(r || (r = s(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"], ["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));
    (0,
      o.vJ)(i || (i = s(["", ""], ["", ""])), a);
    t.ZP = a
  },
  2473: function (e) {
    "use strict";
    var t = function () { };
    e.exports = t
  },
  5816: function (e, t, n) {
    "use strict";
    n.d(t, {
      ZR: function () {
        return o.ZR
      },
      Jn: function () {
        return B
      },
      qX: function () {
        return D
      },
      rh: function () {
        return x
      },
      Xd: function () {
        return P
      },
      Mq: function () {
        return F
      },
      C6: function () {
        return $
      },
      ZF: function () {
        return M
      },
      KN: function () {
        return G
      }
    });
    var r = n(8463)
      , i = n(3333)
      , o = n(4444);
    let s, a;
    const c = new WeakMap
      , u = new WeakMap
      , l = new WeakMap
      , d = new WeakMap
      , h = new WeakMap;
    let f = {
      get(e, t, n) {
        if (e instanceof IDBTransaction) {
          if ("done" === t)
            return u.get(e);
          if ("objectStoreNames" === t)
            return e.objectStoreNames || l.get(e);
          if ("store" === t)
            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return g(e[t])
      },
      set: (e, t, n) => (e[t] = n,
        !0),
      has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };
    function p(e) {
      return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (a || (a = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function (...t) {
        return e.apply(_(this), t),
          g(c.get(this))
      }
        : function (...t) {
          return g(e.apply(_(this), t))
        }
        : function (t, ...n) {
          const r = e.call(_(this), t, ...n);
          return l.set(r, t.sort ? t.sort() : [t]),
            g(r)
        }
    }
    function m(e) {
      return "function" === typeof e ? p(e) : (e instanceof IDBTransaction && function (e) {
        if (u.has(e))
          return;
        const t = new Promise(((t, n) => {
          const r = () => {
            e.removeEventListener("complete", i),
              e.removeEventListener("error", o),
              e.removeEventListener("abort", o)
          }
            , i = () => {
              t(),
                r()
            }
            , o = () => {
              n(e.error || new DOMException("AbortError", "AbortError")),
                r()
            }
            ;
          e.addEventListener("complete", i),
            e.addEventListener("error", o),
            e.addEventListener("abort", o)
        }
        ));
        u.set(e, t)
      }(e),
        t = e,
        (s || (s = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, f) : e);
      var t
    }
    function g(e) {
      if (e instanceof IDBRequest)
        return function (e) {
          const t = new Promise(((t, n) => {
            const r = () => {
              e.removeEventListener("success", i),
                e.removeEventListener("error", o)
            }
              , i = () => {
                t(g(e.result)),
                  r()
              }
              , o = () => {
                n(e.error),
                  r()
              }
              ;
            e.addEventListener("success", i),
              e.addEventListener("error", o)
          }
          ));
          return t.then((t => {
            t instanceof IDBCursor && c.set(t, e)
          }
          )).catch((() => { }
          )),
            h.set(t, e),
            t
        }(e);
      if (d.has(e))
        return d.get(e);
      const t = m(e);
      return t !== e && (d.set(e, t),
        h.set(t, e)),
        t
    }
    const _ = e => h.get(e);
    const v = ["get", "getKey", "getAll", "getAllKeys", "count"]
      , y = ["put", "add", "delete", "clear"]
      , b = new Map;
    function E(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
        return;
      if (b.get(t))
        return b.get(t);
      const n = t.replace(/FromIndex$/, "")
        , r = t !== n
        , i = y.includes(n);
      if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !v.includes(n))
        return;
      const o = async function (e, ...t) {
        const o = this.transaction(e, i ? "readwrite" : "readonly");
        let s = o.store;
        return r && (s = s.index(t.shift())),
          (await Promise.all([s[n](...t), i && o.done]))[0]
      };
      return b.set(t, o),
        o
    }
    f = (e => ({
      ...e,
      get: (t, n, r) => E(t, n) || e.get(t, n, r),
      has: (t, n) => !!E(t, n) || e.has(t, n)
    }))(f);
    class w {
      constructor(e) {
        this.container = e
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((e => {
          if (function (e) {
            const t = e.getComponent();
            return "VERSION" === (null === t || void 0 === t ? void 0 : t.type)
          }(e)) {
            const t = e.getImmediate();
            return `${t.library}/${t.version}`
          }
          return null
        }
        )).filter((e => e)).join(" ")
      }
    }
    const S = "@firebase/app"
      , T = "0.10.17"
      , R = new i.Yd("@firebase/app")
      , I = "[DEFAULT]"
      , O = {
        [S]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/data-connect": "fire-data-connect",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "@firebase/vertexai": "fire-vertex",
        "fire-js": "fire-js",
        firebase: "fire-js-all"
      }
      , k = new Map
      , C = new Map
      , N = new Map;
    function A(e, t) {
      try {
        e.container.addComponent(t)
      } catch (n) {
        R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
      }
    }
    function P(e) {
      const t = e.name;
      if (N.has(t))
        return R.debug(`There were multiple attempts to register component ${t}.`),
          !1;
      N.set(t, e);
      for (const n of k.values())
        A(n, e);
      for (const n of C.values())
        A(n, e);
      return !0
    }
    function D(e, t) {
      const n = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return n && n.triggerHeartbeat(),
        e.container.getProvider(t)
    }
    function x(e) {
      return void 0 !== e.settings
    }
    const L = {
      "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}'",
      "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "server-app-deleted": "Firebase Server App has been deleted",
      "no-options": "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
      "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
      "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
    }
      , U = new o.LL("app", "Firebase", L);
    class j {
      constructor(e, t, n) {
        this._isDeleted = !1,
          this._options = Object.assign({}, e),
          this._config = Object.assign({}, t),
          this._name = t.name,
          this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled,
          this._container = n,
          this.container.addComponent(new r.wA("app", (() => this), "PUBLIC"))
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
          this._automaticDataCollectionEnabled
      }
      set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(),
          this._automaticDataCollectionEnabled = e
      }
      get name() {
        return this.checkDestroyed(),
          this._name
      }
      get options() {
        return this.checkDestroyed(),
          this._options
      }
      get config() {
        return this.checkDestroyed(),
          this._config
      }
      get container() {
        return this._container
      }
      get isDeleted() {
        return this._isDeleted
      }
      set isDeleted(e) {
        this._isDeleted = e
      }
      checkDestroyed() {
        if (this.isDeleted)
          throw U.create("app-deleted", {
            appName: this._name
          })
      }
    }
    const B = "11.1.0";
    function M(e, t = {}) {
      let n = e;
      if ("object" !== typeof t) {
        t = {
          name: t
        }
      }
      const i = Object.assign({
        name: I,
        automaticDataCollectionEnabled: !1
      }, t)
        , s = i.name;
      if ("string" !== typeof s || !s)
        throw U.create("bad-app-name", {
          appName: String(s)
        });
      if (n || (n = (0,
        o.aH)()),
        !n)
        throw U.create("no-options");
      const a = k.get(s);
      if (a) {
        if ((0,
          o.vZ)(n, a.options) && (0,
            o.vZ)(i, a.config))
          return a;
        throw U.create("duplicate-app", {
          appName: s
        })
      }
      const c = new r.H0(s);
      for (const r of N.values())
        c.addComponent(r);
      const u = new j(n, i, c);
      return k.set(s, u),
        u
    }
    function F(e = "[DEFAULT]") {
      const t = k.get(e);
      if (!t && e === I && (0,
        o.aH)())
        return M();
      if (!t)
        throw U.create("no-app", {
          appName: e
        });
      return t
    }
    function $() {
      return Array.from(k.values())
    }
    function G(e, t, n) {
      var i;
      let o = null !== (i = O[e]) && void 0 !== i ? i : e;
      n && (o += `-${n}`);
      const s = o.match(/\s|\//)
        , a = t.match(/\s|\//);
      if (s || a) {
        const e = [`Unable to register library "${o}" with version "${t}":`];
        return s && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),
          s && a && e.push("and"),
          a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
          void R.warn(e.join(" "))
      }
      P(new r.wA(`${o}-version`, (() => ({
        library: o,
        version: t
      })), "VERSION"))
    }
    const Y = "firebase-heartbeat-store";
    let H = null;
    function W() {
      return H || (H = function (e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
        const s = indexedDB.open(e, t)
          , a = g(s);
        return r && s.addEventListener("upgradeneeded", (e => {
          r(g(s.result), e.oldVersion, e.newVersion, g(s.transaction), e)
        }
        )),
          n && s.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))),
          a.then((e => {
            o && e.addEventListener("close", (() => o())),
              i && e.addEventListener("versionchange", (e => i(e.oldVersion, e.newVersion, e)))
          }
          )).catch((() => { }
          )),
          a
      }("firebase-heartbeat-database", 1, {
        upgrade: (e, t) => {
          if (0 === t)
            try {
              e.createObjectStore(Y)
            } catch (n) {
              console.warn(n)
            }
        }
      }).catch((e => {
        throw U.create("idb-open", {
          originalErrorMessage: e.message
        })
      }
      ))),
        H
    }
    async function q(e, t) {
      try {
        const n = (await W()).transaction(Y, "readwrite")
          , r = n.objectStore(Y);
        await r.put(t, V(e)),
          await n.done
      } catch (n) {
        if (n instanceof o.ZR)
          R.warn(n.message);
        else {
          const e = U.create("idb-set", {
            originalErrorMessage: null === n || void 0 === n ? void 0 : n.message
          });
          R.warn(e.message)
        }
      }
    }
    function V(e) {
      return `${e.name}!${e.options.appId}`
    }
    class z {
      constructor(e) {
        this.container = e,
          this._heartbeatsCache = null;
        const t = this.container.getProvider("app").getImmediate();
        this._storage = new J(t),
          this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e,
            e)))
      }
      async triggerHeartbeat() {
        var e, t;
        try {
          const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
            , r = K();
          if (null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) && (this._heartbeatsCache = await this._heartbeatsCachePromise,
            null == (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats)))
            return;
          if (this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((e => e.date === r)))
            return;
          return this._heartbeatsCache.heartbeats.push({
            date: r,
            agent: n
          }),
            this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
              const t = new Date(e.date).valueOf();
              return Date.now() - t <= 2592e6
            }
            )),
            this._storage.overwrite(this._heartbeatsCache)
        } catch (n) {
          R.warn(n)
        }
      }
      async getHeartbeatsHeader() {
        var e;
        try {
          if (null === this._heartbeatsCache && await this._heartbeatsCachePromise,
            null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
            return "";
          const t = K()
            , { heartbeatsToSend: n, unsentEntries: r } = function (e, t = 1024) {
              const n = [];
              let r = e.slice();
              for (const i of e) {
                const e = n.find((e => e.agent === i.agent));
                if (e) {
                  if (e.dates.push(i.date),
                    Z(n) > t) {
                    e.dates.pop();
                    break
                  }
                } else if (n.push({
                  agent: i.agent,
                  dates: [i.date]
                }),
                  Z(n) > t) {
                  n.pop();
                  break
                }
                r = r.slice(1)
              }
              return {
                heartbeatsToSend: n,
                unsentEntries: r
              }
            }(this._heartbeatsCache.heartbeats)
            , i = (0,
              o.L)(JSON.stringify({
                version: 2,
                heartbeats: n
              }));
          return this._heartbeatsCache.lastSentHeartbeatDate = t,
            r.length > 0 ? (this._heartbeatsCache.heartbeats = r,
              await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                this._storage.overwrite(this._heartbeatsCache)),
            i
        } catch (t) {
          return R.warn(t),
            ""
        }
      }
    }
    function K() {
      return (new Date).toISOString().substring(0, 10)
    }
    class J {
      constructor(e) {
        this.app = e,
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0,
          o.hl)() && (0,
            o.eu)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          const e = await async function (e) {
            try {
              const t = (await W()).transaction(Y)
                , n = await t.objectStore(Y).get(V(e));
              return await t.done,
                n
            } catch (t) {
              if (t instanceof o.ZR)
                R.warn(t.message);
              else {
                const e = U.create("idb-get", {
                  originalErrorMessage: null === t || void 0 === t ? void 0 : t.message
                });
                R.warn(e.message)
              }
            }
          }(this.app);
          return (null === e || void 0 === e ? void 0 : e.heartbeats) ? e : {
            heartbeats: []
          }
        }
        return {
          heartbeats: []
        }
      }
      async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return q(this.app, {
            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
            heartbeats: e.heartbeats
          })
        }
      }
      async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return q(this.app, {
            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
            heartbeats: [...n.heartbeats, ...e.heartbeats]
          })
        }
      }
    }
    function Z(e) {
      return (0,
        o.L)(JSON.stringify({
          version: 2,
          heartbeats: e
        })).length
    }
    var X;
    X = "",
      P(new r.wA("platform-logger", (e => new w(e)), "PRIVATE")),
      P(new r.wA("heartbeat", (e => new z(e)), "PRIVATE")),
      G(S, T, X),
      G(S, T, "esm2017"),
      G("fire-js", "")
  },
  8463: function (e, t, n) {
    "use strict";
    n.d(t, {
      H0: function () {
        return a
      },
      wA: function () {
        return i
      }
    });
    var r = n(4444);
    class i {
      constructor(e, t, n) {
        this.name = e,
          this.instanceFactory = t,
          this.type = n,
          this.multipleInstances = !1,
          this.serviceProps = {},
          this.instantiationMode = "LAZY",
          this.onInstanceCreated = null
      }
      setInstantiationMode(e) {
        return this.instantiationMode = e,
          this
      }
      setMultipleInstances(e) {
        return this.multipleInstances = e,
          this
      }
      setServiceProps(e) {
        return this.serviceProps = e,
          this
      }
      setInstanceCreatedCallback(e) {
        return this.onInstanceCreated = e,
          this
      }
    }
    const o = "[DEFAULT]";
    class s {
      constructor(e, t) {
        this.name = e,
          this.container = t,
          this.component = null,
          this.instances = new Map,
          this.instancesDeferred = new Map,
          this.instancesOptions = new Map,
          this.onInitCallbacks = new Map
      }
      get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          const e = new r.BH;
          if (this.instancesDeferred.set(t, e),
            this.isInitialized(t) || this.shouldAutoInitialize())
            try {
              const n = this.getOrInitializeService({
                instanceIdentifier: t
              });
              n && e.resolve(n)
            } catch (n) { }
        }
        return this.instancesDeferred.get(t).promise
      }
      getImmediate(e) {
        var t;
        const n = this.normalizeInstanceIdentifier(null === e || void 0 === e ? void 0 : e.identifier)
          , r = null !== (t = null === e || void 0 === e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
          if (r)
            return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: n
          })
        } catch (i) {
          if (r)
            return null;
          throw i
        }
      }
      getComponent() {
        return this.component
      }
      setComponent(e) {
        if (e.name !== this.name)
          throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
        if (this.component)
          throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = e,
          this.shouldAutoInitialize()) {
          if (function (e) {
            return "EAGER" === e.instantiationMode
          }(e))
            try {
              this.getOrInitializeService({
                instanceIdentifier: o
              })
            } catch (t) { }
          for (const [e, n] of this.instancesDeferred.entries()) {
            const r = this.normalizeInstanceIdentifier(e);
            try {
              const e = this.getOrInitializeService({
                instanceIdentifier: r
              });
              n.resolve(e)
            } catch (t) { }
          }
        }
      }
      clearInstance(e = "[DEFAULT]") {
        this.instancesDeferred.delete(e),
          this.instancesOptions.delete(e),
          this.instances.delete(e)
      }
      async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
      }
      isComponentSet() {
        return null != this.component
      }
      isInitialized(e = "[DEFAULT]") {
        return this.instances.has(e)
      }
      getOptions(e = "[DEFAULT]") {
        return this.instancesOptions.get(e) || {}
      }
      initialize(e = {}) {
        const { options: t = {} } = e
          , n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(n))
          throw Error(`${this.name}(${n}) has already been initialized`);
        if (!this.isComponentSet())
          throw Error(`Component ${this.name} has not been registered yet`);
        const r = this.getOrInitializeService({
          instanceIdentifier: n,
          options: t
        });
        for (const [i, o] of this.instancesDeferred.entries()) {
          n === this.normalizeInstanceIdentifier(i) && o.resolve(r)
        }
        return r
      }
      onInit(e, t) {
        var n;
        const r = this.normalizeInstanceIdentifier(t)
          , i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
        i.add(e),
          this.onInitCallbacks.set(r, i);
        const o = this.instances.get(r);
        return o && e(o, r),
          () => {
            i.delete(e)
          }
      }
      invokeOnInitCallbacks(e, t) {
        const n = this.onInitCallbacks.get(t);
        if (n)
          for (const i of n)
            try {
              i(e, t)
            } catch (r) { }
      }
      getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
        let n = this.instances.get(e);
        if (!n && this.component && (n = this.component.instanceFactory(this.container, {
          instanceIdentifier: (r = e,
            r === o ? void 0 : r),
          options: t
        }),
          this.instances.set(e, n),
          this.instancesOptions.set(e, t),
          this.invokeOnInitCallbacks(n, e),
          this.component.onInstanceCreated))
          try {
            this.component.onInstanceCreated(this.container, e, n)
          } catch (i) { }
        var r;
        return n || null
      }
      normalizeInstanceIdentifier(e = "[DEFAULT]") {
        return this.component ? this.component.multipleInstances ? e : o : e
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class a {
      constructor(e) {
        this.name = e,
          this.providers = new Map
      }
      addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
        t.setComponent(e)
      }
      addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
          this.addComponent(e)
      }
      getProvider(e) {
        if (this.providers.has(e))
          return this.providers.get(e);
        const t = new s(e, this);
        return this.providers.set(e, t),
          t
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  3333: function (e, t, n) {
    "use strict";
    n.d(t, {
      Yd: function () {
        return u
      },
      in: function () {
        return i
      }
    });
    const r = [];
    var i;
    !function (e) {
      e[e.DEBUG = 0] = "DEBUG",
        e[e.VERBOSE = 1] = "VERBOSE",
        e[e.INFO = 2] = "INFO",
        e[e.WARN = 3] = "WARN",
        e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
    }(i || (i = {}));
    const o = {
      debug: i.DEBUG,
      verbose: i.VERBOSE,
      info: i.INFO,
      warn: i.WARN,
      error: i.ERROR,
      silent: i.SILENT
    }
      , s = i.INFO
      , a = {
        [i.DEBUG]: "log",
        [i.VERBOSE]: "log",
        [i.INFO]: "info",
        [i.WARN]: "warn",
        [i.ERROR]: "error"
      }
      , c = (e, t, ...n) => {
        if (t < e.logLevel)
          return;
        const r = (new Date).toISOString()
          , i = a[t];
        if (!i)
          throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
        console[i](`[${r}]  ${e.name}:`, ...n)
      }
      ;
    class u {
      constructor(e) {
        this.name = e,
          this._logLevel = s,
          this._logHandler = c,
          this._userLogHandler = null,
          r.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(e) {
        if (!(e in i))
          throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e
      }
      setLogLevel(e) {
        this._logLevel = "string" === typeof e ? o[e] : e
      }
      get logHandler() {
        return this._logHandler
      }
      set logHandler(e) {
        if ("function" !== typeof e)
          throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = e
      }
      get userLogHandler() {
        return this._userLogHandler
      }
      set userLogHandler(e) {
        this._userLogHandler = e
      }
      debug(...e) {
        this._userLogHandler && this._userLogHandler(this, i.DEBUG, ...e),
          this._logHandler(this, i.DEBUG, ...e)
      }
      log(...e) {
        this._userLogHandler && this._userLogHandler(this, i.VERBOSE, ...e),
          this._logHandler(this, i.VERBOSE, ...e)
      }
      info(...e) {
        this._userLogHandler && this._userLogHandler(this, i.INFO, ...e),
          this._logHandler(this, i.INFO, ...e)
      }
      warn(...e) {
        this._userLogHandler && this._userLogHandler(this, i.WARN, ...e),
          this._logHandler(this, i.WARN, ...e)
      }
      error(...e) {
        this._userLogHandler && this._userLogHandler(this, i.ERROR, ...e),
          this._logHandler(this, i.ERROR, ...e)
      }
    }
  },
  7066: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z: function () {
        return wt
      }
    });
    var r = {};
    function i(e, t) {
      return function () {
        return e.apply(t, arguments)
      }
    }
    n.r(r),
      n.d(r, {
        hasBrowserEnv: function () {
          return de
        },
        hasStandardBrowserEnv: function () {
          return fe
        },
        hasStandardBrowserWebWorkerEnv: function () {
          return pe
        },
        navigator: function () {
          return he
        },
        origin: function () {
          return me
        }
      });
    var o = n(4155);
    const { toString: s } = Object.prototype
      , { getPrototypeOf: a } = Object
      , c = (u = Object.create(null),
        e => {
          const t = s.call(e);
          return u[t] || (u[t] = t.slice(8, -1).toLowerCase())
        }
      );
    var u;
    const l = e => (e = e.toLowerCase(),
      t => c(t) === e)
      , d = e => t => typeof t === e
      , { isArray: h } = Array
      , f = d("undefined");
    const p = l("ArrayBuffer");
    const m = d("string")
      , g = d("function")
      , _ = d("number")
      , v = e => null !== e && "object" === typeof e
      , y = e => {
        if ("object" !== c(e))
          return !1;
        const t = a(e);
        return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
      }
      , b = l("Date")
      , E = l("File")
      , w = l("Blob")
      , S = l("FileList")
      , T = l("URLSearchParams")
      , [R, I, O, k] = ["ReadableStream", "Request", "Response", "Headers"].map(l);
    function C(e, t, { allOwnKeys: n = !1 } = {}) {
      if (null === e || "undefined" === typeof e)
        return;
      let r, i;
      if ("object" !== typeof e && (e = [e]),
        h(e))
        for (r = 0,
          i = e.length; r < i; r++)
          t.call(null, e[r], r, e);
      else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , o = i.length;
        let s;
        for (r = 0; r < o; r++)
          s = i[r],
            t.call(null, e[s], s, e)
      }
    }
    function N(e, t) {
      t = t.toLowerCase();
      const n = Object.keys(e);
      let r, i = n.length;
      for (; i-- > 0;)
        if (r = n[i],
          t === r.toLowerCase())
          return r;
      return null
    }
    const A = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : global
      , P = e => !f(e) && e !== A;
    const D = (x = "undefined" !== typeof Uint8Array && a(Uint8Array),
      e => x && e instanceof x);
    var x;
    const L = l("HTMLFormElement")
      , U = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype)
      , j = l("RegExp")
      , B = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e)
          , r = {};
        C(n, ((n, i) => {
          let o;
          !1 !== (o = t(n, i, e)) && (r[i] = o || n)
        }
        )),
          Object.defineProperties(e, r)
      }
      , M = "abcdefghijklmnopqrstuvwxyz"
      , F = "0123456789"
      , $ = {
        DIGIT: F,
        ALPHA: M,
        ALPHA_DIGIT: M + M.toUpperCase() + F
      };
    const G = l("AsyncFunction")
      , Y = ((e, t) => {
        return e ? setImmediate : t ? (n = `axios@${Math.random()}`,
          r = [],
          A.addEventListener("message", (({ source: e, data: t }) => {
            e === A && t === n && r.length && r.shift()()
          }
          ), !1),
          e => {
            r.push(e),
              A.postMessage(n, "*")
          }
        ) : e => setTimeout(e);
        var n, r
      }
      )("function" === typeof setImmediate, g(A.postMessage))
      , H = "undefined" !== typeof queueMicrotask ? queueMicrotask.bind(A) : "undefined" !== typeof o && o.nextTick || Y;
    var W = {
      isArray: h,
      isArrayBuffer: p,
      isBuffer: function (e) {
        return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e)
      },
      isFormData: e => {
        let t;
        return e && ("function" === typeof FormData && e instanceof FormData || g(e.append) && ("formdata" === (t = c(e)) || "object" === t && g(e.toString) && "[object FormData]" === e.toString()))
      }
      ,
      isArrayBufferView: function (e) {
        let t;
        return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer),
          t
      },
      isString: m,
      isNumber: _,
      isBoolean: e => !0 === e || !1 === e,
      isObject: v,
      isPlainObject: y,
      isReadableStream: R,
      isRequest: I,
      isResponse: O,
      isHeaders: k,
      isUndefined: f,
      isDate: b,
      isFile: E,
      isBlob: w,
      isRegExp: j,
      isFunction: g,
      isStream: e => v(e) && g(e.pipe),
      isURLSearchParams: T,
      isTypedArray: D,
      isFileList: S,
      forEach: C,
      merge: function e() {
        const { caseless: t } = P(this) && this || {}
          , n = {}
          , r = (r, i) => {
            const o = t && N(n, i) || i;
            y(n[o]) && y(r) ? n[o] = e(n[o], r) : y(r) ? n[o] = e({}, r) : h(r) ? n[o] = r.slice() : n[o] = r
          }
          ;
        for (let i = 0, o = arguments.length; i < o; i++)
          arguments[i] && C(arguments[i], r);
        return n
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (C(t, ((t, r) => {
        n && g(t) ? e[r] = i(t, n) : e[r] = t
      }
      ), {
        allOwnKeys: r
      }),
        e),
      trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)),
        e),
      inherits: (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r),
          e.prototype.constructor = e,
          Object.defineProperty(e, "super", {
            value: t.prototype
          }),
          n && Object.assign(e.prototype, n)
      }
      ,
      toFlatObject: (e, t, n, r) => {
        let i, o, s;
        const c = {};
        if (t = t || {},
          null == e)
          return t;
        do {
          for (i = Object.getOwnPropertyNames(e),
            o = i.length; o-- > 0;)
            s = i[o],
              r && !r(s, e, t) || c[s] || (t[s] = e[s],
                c[s] = !0);
          e = !1 !== n && a(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
      }
      ,
      kindOf: c,
      kindOfTest: l,
      endsWith: (e, t, n) => {
        e = String(e),
          (void 0 === n || n > e.length) && (n = e.length),
          n -= t.length;
        const r = e.indexOf(t, n);
        return -1 !== r && r === n
      }
      ,
      toArray: e => {
        if (!e)
          return null;
        if (h(e))
          return e;
        let t = e.length;
        if (!_(t))
          return null;
        const n = new Array(t);
        for (; t-- > 0;)
          n[t] = e[t];
        return n
      }
      ,
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done;) {
          const n = r.value;
          t.call(e, n[0], n[1])
        }
      }
      ,
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t));)
          r.push(n);
        return r
      }
      ,
      isHTMLForm: L,
      hasOwnProperty: U,
      hasOwnProp: U,
      reduceDescriptors: B,
      freezeMethods: e => {
        B(e, ((t, n) => {
          if (g(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          g(r) && (t.enumerable = !1,
            "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'")
            }
            ))
        }
        ))
      }
      ,
      toObjectSet: (e, t) => {
        const n = {}
          , r = e => {
            e.forEach((e => {
              n[e] = !0
            }
            ))
          }
          ;
        return h(e) ? r(e) : r(String(e).split(t)),
          n
      }
      ,
      toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function (e, t, n) {
        return t.toUpperCase() + n
      }
      )),
      noop: () => { }
      ,
      toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
      findKey: N,
      global: A,
      isContextDefined: P,
      ALPHABET: $,
      generateString: (e = 16, t = $.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--;)
          n += t[Math.random() * r | 0];
        return n
      }
      ,
      isSpecCompliantForm: function (e) {
        return !!(e && g(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
      },
      toJSONObject: e => {
        const t = new Array(10)
          , n = (e, r) => {
            if (v(e)) {
              if (t.indexOf(e) >= 0)
                return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const i = h(e) ? [] : {};
                return C(e, ((e, t) => {
                  const o = n(e, r + 1);
                  !f(o) && (i[t] = o)
                }
                )),
                  t[r] = void 0,
                  i
              }
            }
            return e
          }
          ;
        return n(e, 0)
      }
      ,
      isAsyncFn: G,
      isThenable: e => e && (v(e) || g(e)) && g(e.then) && g(e.catch),
      setImmediate: Y,
      asap: H
    };
    function q(e, t, n, r, i) {
      Error.call(this),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
        this.message = e,
        this.name = "AxiosError",
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i,
          this.status = i.status ? i.status : null)
    }
    W.inherits(q, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: W.toJSONObject(this.config),
          code: this.code,
          status: this.status
        }
      }
    });
    const V = q.prototype
      , z = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
      z[e] = {
        value: e
      }
    }
    )),
      Object.defineProperties(q, z),
      Object.defineProperty(V, "isAxiosError", {
        value: !0
      }),
      q.from = (e, t, n, r, i, o) => {
        const s = Object.create(V);
        return W.toFlatObject(e, s, (function (e) {
          return e !== Error.prototype
        }
        ), (e => "isAxiosError" !== e)),
          q.call(s, e.message, t, n, r, i),
          s.cause = e,
          s.name = e.name,
          o && Object.assign(s, o),
          s
      }
      ;
    var K = q
      , J = n(8764).lW;
    function Z(e) {
      return W.isPlainObject(e) || W.isArray(e)
    }
    function X(e) {
      return W.endsWith(e, "[]") ? e.slice(0, -2) : e
    }
    function Q(e, t, n) {
      return e ? e.concat(t).map((function (e, t) {
        return e = X(e),
          !n && t ? "[" + e + "]" : e
      }
      )).join(n ? "." : "") : t
    }
    const ee = W.toFlatObject(W, {}, null, (function (e) {
      return /^is[A-Z]/.test(e)
    }
    ));
    var te = function (e, t, n) {
      if (!W.isObject(e))
        throw new TypeError("target must be an object");
      t = t || new FormData;
      const r = (n = W.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
      }, !1, (function (e, t) {
        return !W.isUndefined(t[e])
      }
      ))).metaTokens
        , i = n.visitor || u
        , o = n.dots
        , s = n.indexes
        , a = (n.Blob || "undefined" !== typeof Blob && Blob) && W.isSpecCompliantForm(t);
      if (!W.isFunction(i))
        throw new TypeError("visitor must be a function");
      function c(e) {
        if (null === e)
          return "";
        if (W.isDate(e))
          return e.toISOString();
        if (!a && W.isBlob(e))
          throw new K("Blob is not supported. Use a Buffer instead.");
        return W.isArrayBuffer(e) || W.isTypedArray(e) ? a && "function" === typeof Blob ? new Blob([e]) : J.from(e) : e
      }
      function u(e, n, i) {
        let a = e;
        if (e && !i && "object" === typeof e)
          if (W.endsWith(n, "{}"))
            n = r ? n : n.slice(0, -2),
              e = JSON.stringify(e);
          else if (W.isArray(e) && function (e) {
            return W.isArray(e) && !e.some(Z)
          }(e) || (W.isFileList(e) || W.endsWith(n, "[]")) && (a = W.toArray(e)))
            return n = X(n),
              a.forEach((function (e, r) {
                !W.isUndefined(e) && null !== e && t.append(!0 === s ? Q([n], r, o) : null === s ? n : n + "[]", c(e))
              }
              )),
              !1;
        return !!Z(e) || (t.append(Q(i, n, o), c(e)),
          !1)
      }
      const l = []
        , d = Object.assign(ee, {
          defaultVisitor: u,
          convertValue: c,
          isVisitable: Z
        });
      if (!W.isObject(e))
        throw new TypeError("data must be an object");
      return function e(n, r) {
        if (!W.isUndefined(n)) {
          if (-1 !== l.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          l.push(n),
            W.forEach(n, (function (n, o) {
              !0 === (!(W.isUndefined(n) || null === n) && i.call(t, n, W.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [o])
            }
            )),
            l.pop()
        }
      }(e),
        t
    };
    function ne(e) {
      const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
      };
      return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function (e) {
        return t[e]
      }
      ))
    }
    function re(e, t) {
      this._pairs = [],
        e && te(e, this, t)
    }
    const ie = re.prototype;
    ie.append = function (e, t) {
      this._pairs.push([e, t])
    }
      ,
      ie.toString = function (e) {
        const t = e ? function (t) {
          return e.call(this, t, ne)
        }
          : ne;
        return this._pairs.map((function (e) {
          return t(e[0]) + "=" + t(e[1])
        }
        ), "").join("&")
      }
      ;
    var oe = re;
    function se(e) {
      return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    function ae(e, t, n) {
      if (!t)
        return e;
      const r = n && n.encode || se;
      W.isFunction(n) && (n = {
        serialize: n
      });
      const i = n && n.serialize;
      let o;
      if (o = i ? i(t, n) : W.isURLSearchParams(t) ? t.toString() : new oe(t, n).toString(r),
        o) {
        const t = e.indexOf("#");
        -1 !== t && (e = e.slice(0, t)),
          e += (-1 === e.indexOf("?") ? "?" : "&") + o
      }
      return e
    }
    var ce = class {
      constructor() {
        this.handlers = []
      }
      use(e, t, n) {
        return this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null
        }),
          this.handlers.length - 1
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
      }
      clear() {
        this.handlers && (this.handlers = [])
      }
      forEach(e) {
        W.forEach(this.handlers, (function (t) {
          null !== t && e(t)
        }
        ))
      }
    }
      , ue = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
      }
      , le = {
        isBrowser: !0,
        classes: {
          URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : oe,
          FormData: "undefined" !== typeof FormData ? FormData : null,
          Blob: "undefined" !== typeof Blob ? Blob : null
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
    const de = "undefined" !== typeof window && "undefined" !== typeof document
      , he = "object" === typeof navigator && navigator || void 0
      , fe = de && (!he || ["ReactNative", "NativeScript", "NS"].indexOf(he.product) < 0)
      , pe = "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" === typeof self.importScripts
      , me = de && window.location.href || "http://localhost";
    var ge = {
      ...r,
      ...le
    };
    var _e = function (e) {
      function t(e, n, r, i) {
        let o = e[i++];
        if ("__proto__" === o)
          return !0;
        const s = Number.isFinite(+o)
          , a = i >= e.length;
        if (o = !o && W.isArray(r) ? r.length : o,
          a)
          return W.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n,
            !s;
        r[o] && W.isObject(r[o]) || (r[o] = []);
        return t(e, n, r[o], i) && W.isArray(r[o]) && (r[o] = function (e) {
          const t = {}
            , n = Object.keys(e);
          let r;
          const i = n.length;
          let o;
          for (r = 0; r < i; r++)
            o = n[r],
              t[o] = e[o];
          return t
        }(r[o])),
          !s
      }
      if (W.isFormData(e) && W.isFunction(e.entries)) {
        const n = {};
        return W.forEachEntry(e, ((e, r) => {
          t(function (e) {
            return W.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
          }(e), r, n, 0)
        }
        )),
          n
      }
      return null
    };
    const ve = {
      transitional: ue,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [function (e, t) {
        const n = t.getContentType() || ""
          , r = n.indexOf("application/json") > -1
          , i = W.isObject(e);
        i && W.isHTMLForm(e) && (e = new FormData(e));
        if (W.isFormData(e))
          return r ? JSON.stringify(_e(e)) : e;
        if (W.isArrayBuffer(e) || W.isBuffer(e) || W.isStream(e) || W.isFile(e) || W.isBlob(e) || W.isReadableStream(e))
          return e;
        if (W.isArrayBufferView(e))
          return e.buffer;
        if (W.isURLSearchParams(e))
          return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let o;
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return function (e, t) {
              return te(e, new ge.classes.URLSearchParams, Object.assign({
                visitor: function (e, t, n, r) {
                  return ge.isNode && W.isBuffer(e) ? (this.append(t, e.toString("base64")),
                    !1) : r.defaultVisitor.apply(this, arguments)
                }
              }, t))
            }(e, this.formSerializer).toString();
          if ((o = W.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return te(o ? {
              "files[]": e
            } : e, t && new t, this.formSerializer)
          }
        }
        return i || r ? (t.setContentType("application/json", !1),
          function (e, t, n) {
            if (W.isString(e))
              try {
                return (t || JSON.parse)(e),
                  W.trim(e)
              } catch (r) {
                if ("SyntaxError" !== r.name)
                  throw r
              }
            return (n || JSON.stringify)(e)
          }(e)) : e
      }
      ],
      transformResponse: [function (e) {
        const t = this.transitional || ve.transitional
          , n = t && t.forcedJSONParsing
          , r = "json" === this.responseType;
        if (W.isResponse(e) || W.isReadableStream(e))
          return e;
        if (e && W.isString(e) && (n && !this.responseType || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e)
          } catch (i) {
            if (n) {
              if ("SyntaxError" === i.name)
                throw K.from(i, K.ERR_BAD_RESPONSE, this, null, this.response);
              throw i
            }
          }
        }
        return e
      }
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: ge.classes.FormData,
        Blob: ge.classes.Blob
      },
      validateStatus: function (e) {
        return e >= 200 && e < 300
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
    W.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
      ve.headers[e] = {}
    }
    ));
    var ye = ve;
    const be = W.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
    const Ee = Symbol("internals");
    function we(e) {
      return e && String(e).trim().toLowerCase()
    }
    function Se(e) {
      return !1 === e || null == e ? e : W.isArray(e) ? e.map(Se) : String(e)
    }
    function Te(e, t, n, r, i) {
      return W.isFunction(r) ? r.call(this, t, n) : (i && (t = n),
        W.isString(t) ? W.isString(r) ? -1 !== t.indexOf(r) : W.isRegExp(r) ? r.test(t) : void 0 : void 0)
    }
    class Re {
      constructor(e) {
        e && this.set(e)
      }
      set(e, t, n) {
        const r = this;
        function i(e, t, n) {
          const i = we(t);
          if (!i)
            throw new Error("header name must be a non-empty string");
          const o = W.findKey(r, i);
          (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = Se(e))
        }
        const o = (e, t) => W.forEach(e, ((e, n) => i(e, n, t)));
        if (W.isPlainObject(e) || e instanceof this.constructor)
          o(e, t);
        else if (W.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
          o((e => {
            const t = {};
            let n, r, i;
            return e && e.split("\n").forEach((function (e) {
              i = e.indexOf(":"),
                n = e.substring(0, i).trim().toLowerCase(),
                r = e.substring(i + 1).trim(),
                !n || t[n] && be[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            }
            )),
              t
          }
          )(e), t);
        else if (W.isHeaders(e))
          for (const [s, a] of e.entries())
            i(a, s, n);
        else
          null != e && i(t, e, n);
        return this
      }
      get(e, t) {
        if (e = we(e)) {
          const n = W.findKey(this, e);
          if (n) {
            const e = this[n];
            if (!t)
              return e;
            if (!0 === t)
              return function (e) {
                const t = Object.create(null)
                  , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let r;
                for (; r = n.exec(e);)
                  t[r[1]] = r[2];
                return t
              }(e);
            if (W.isFunction(t))
              return t.call(this, e, n);
            if (W.isRegExp(t))
              return t.exec(e);
            throw new TypeError("parser must be boolean|regexp|function")
          }
        }
      }
      has(e, t) {
        if (e = we(e)) {
          const n = W.findKey(this, e);
          return !(!n || void 0 === this[n] || t && !Te(0, this[n], n, t))
        }
        return !1
      }
      delete(e, t) {
        const n = this;
        let r = !1;
        function i(e) {
          if (e = we(e)) {
            const i = W.findKey(n, e);
            !i || t && !Te(0, n[i], i, t) || (delete n[i],
              r = !0)
          }
        }
        return W.isArray(e) ? e.forEach(i) : i(e),
          r
      }
      clear(e) {
        const t = Object.keys(this);
        let n = t.length
          , r = !1;
        for (; n--;) {
          const i = t[n];
          e && !Te(0, this[i], i, e, !0) || (delete this[i],
            r = !0)
        }
        return r
      }
      normalize(e) {
        const t = this
          , n = {};
        return W.forEach(this, ((r, i) => {
          const o = W.findKey(n, i);
          if (o)
            return t[o] = Se(r),
              void delete t[i];
          const s = e ? function (e) {
            return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
          }(i) : String(i).trim();
          s !== i && delete t[i],
            t[s] = Se(r),
            n[s] = !0
        }
        )),
          this
      }
      concat(...e) {
        return this.constructor.concat(this, ...e)
      }
      toJSON(e) {
        const t = Object.create(null);
        return W.forEach(this, ((n, r) => {
          null != n && !1 !== n && (t[r] = e && W.isArray(n) ? n.join(", ") : n)
        }
        )),
          t
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
      }
      toString() {
        return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders"
      }
      static from(e) {
        return e instanceof this ? e : new this(e)
      }
      static concat(e, ...t) {
        const n = new this(e);
        return t.forEach((e => n.set(e))),
          n
      }
      static accessor(e) {
        const t = (this[Ee] = this[Ee] = {
          accessors: {}
        }).accessors
          , n = this.prototype;
        function r(e) {
          const r = we(e);
          t[r] || (!function (e, t) {
            const n = W.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, i) {
                  return this[r].call(this, t, e, n, i)
                },
                configurable: !0
              })
            }
            ))
          }(n, e),
            t[r] = !0)
        }
        return W.isArray(e) ? e.forEach(r) : r(e),
          this
      }
    }
    Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
      W.reduceDescriptors(Re.prototype, (({ value: e }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
          get: () => e,
          set(e) {
            this[n] = e
          }
        }
      }
      )),
      W.freezeMethods(Re);
    var Ie = Re;
    function Oe(e, t) {
      const n = this || ye
        , r = t || n
        , i = Ie.from(r.headers);
      let o = r.data;
      return W.forEach(e, (function (e) {
        o = e.call(n, o, i.normalize(), t ? t.status : void 0)
      }
      )),
        i.normalize(),
        o
    }
    function ke(e) {
      return !(!e || !e.__CANCEL__)
    }
    function Ce(e, t, n) {
      K.call(this, null == e ? "canceled" : e, K.ERR_CANCELED, t, n),
        this.name = "CanceledError"
    }
    W.inherits(Ce, K, {
      __CANCEL__: !0
    });
    var Ne = Ce;
    function Ae(e, t, n) {
      const r = n.config.validateStatus;
      n.status && r && !r(n.status) ? t(new K("Request failed with status code " + n.status, [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    var Pe = function (e, t) {
      e = e || 10;
      const n = new Array(e)
        , r = new Array(e);
      let i, o = 0, s = 0;
      return t = void 0 !== t ? t : 1e3,
        function (a) {
          const c = Date.now()
            , u = r[s];
          i || (i = c),
            n[o] = a,
            r[o] = c;
          let l = s
            , d = 0;
          for (; l !== o;)
            d += n[l++],
              l %= e;
          if (o = (o + 1) % e,
            o === s && (s = (s + 1) % e),
            c - i < t)
            return;
          const h = u && c - u;
          return h ? Math.round(1e3 * d / h) : void 0
        }
    };
    var De = function (e, t) {
      let n, r, i = 0, o = 1e3 / t;
      const s = (t, o = Date.now()) => {
        i = o,
          n = null,
          r && (clearTimeout(r),
            r = null),
          e.apply(null, t)
      }
        ;
      return [(...e) => {
        const t = Date.now()
          , a = t - i;
        a >= o ? s(e, t) : (n = e,
          r || (r = setTimeout((() => {
            r = null,
              s(n)
          }
          ), o - a)))
      }
        , () => n && s(n)]
    };
    const xe = (e, t, n = 3) => {
      let r = 0;
      const i = Pe(50, 250);
      return De((n => {
        const o = n.loaded
          , s = n.lengthComputable ? n.total : void 0
          , a = o - r
          , c = i(a);
        r = o;
        e({
          loaded: o,
          total: s,
          progress: s ? o / s : void 0,
          bytes: a,
          rate: c || void 0,
          estimated: c && s && o <= s ? (s - o) / c : void 0,
          event: n,
          lengthComputable: null != s,
          [t ? "download" : "upload"]: !0
        })
      }
      ), n)
    }
      , Le = (e, t) => {
        const n = null != e;
        return [r => t[0]({
          lengthComputable: n,
          total: e,
          loaded: r
        }), t[1]]
      }
      , Ue = e => (...t) => W.asap((() => e(...t)));
    var je = ge.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, ge.origin),
      e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(ge.origin), ge.navigator && /(msie|trident)/i.test(ge.navigator.userAgent)) : () => !0
      , Be = ge.hasStandardBrowserEnv ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          W.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            W.isString(r) && s.push("path=" + r),
            W.isString(i) && s.push("domain=" + i),
            !0 === o && s.push("secure"),
            document.cookie = s.join("; ")
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5)
        }
      } : {
        write() { },
        read: () => null,
        remove() { }
      };
    function Me(e, t) {
      return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function (e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
      }(e, t) : t
    }
    const Fe = e => e instanceof Ie ? {
      ...e
    } : e;
    function $e(e, t) {
      t = t || {};
      const n = {};
      function r(e, t, n, r) {
        return W.isPlainObject(e) && W.isPlainObject(t) ? W.merge.call({
          caseless: r
        }, e, t) : W.isPlainObject(t) ? W.merge({}, t) : W.isArray(t) ? t.slice() : t
      }
      function i(e, t, n, i) {
        return W.isUndefined(t) ? W.isUndefined(e) ? void 0 : r(void 0, e, 0, i) : r(e, t, 0, i)
      }
      function o(e, t) {
        if (!W.isUndefined(t))
          return r(void 0, t)
      }
      function s(e, t) {
        return W.isUndefined(t) ? W.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
      }
      function a(n, i, o) {
        return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0
      }
      const c = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (e, t, n) => i(Fe(e), Fe(t), 0, !0)
      };
      return W.forEach(Object.keys(Object.assign({}, e, t)), (function (r) {
        const o = c[r] || i
          , s = o(e[r], t[r], r);
        W.isUndefined(s) && o !== a || (n[r] = s)
      }
      )),
        n
    }
    var Ge = e => {
      const t = $e({}, e);
      let n, { data: r, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: c } = t;
      if (t.headers = a = Ie.from(a),
        t.url = ae(Me(t.baseURL, t.url), e.params, e.paramsSerializer),
        c && a.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))),
        W.isFormData(r))
        if (ge.hasStandardBrowserEnv || ge.hasStandardBrowserWebWorkerEnv)
          a.setContentType(void 0);
        else if (!1 !== (n = a.getContentType())) {
          const [e, ...t] = n ? n.split(";").map((e => e.trim())).filter(Boolean) : [];
          a.setContentType([e || "multipart/form-data", ...t].join("; "))
        }
      if (ge.hasStandardBrowserEnv && (i && W.isFunction(i) && (i = i(t)),
        i || !1 !== i && je(t.url))) {
        const e = o && s && Be.read(s);
        e && a.set(o, e)
      }
      return t
    }
      ;
    var Ye = "undefined" !== typeof XMLHttpRequest && function (e) {
      return new Promise((function (t, n) {
        const r = Ge(e);
        let i = r.data;
        const o = Ie.from(r.headers).normalize();
        let s, a, c, u, l, { responseType: d, onUploadProgress: h, onDownloadProgress: f } = r;
        function p() {
          u && u(),
            l && l(),
            r.cancelToken && r.cancelToken.unsubscribe(s),
            r.signal && r.signal.removeEventListener("abort", s)
        }
        let m = new XMLHttpRequest;
        function g() {
          if (!m)
            return;
          const r = Ie.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
          Ae((function (e) {
            t(e),
              p()
          }
          ), (function (e) {
            n(e),
              p()
          }
          ), {
            data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
            status: m.status,
            statusText: m.statusText,
            headers: r,
            config: e,
            request: m
          }),
            m = null
        }
        m.open(r.method.toUpperCase(), r.url, !0),
          m.timeout = r.timeout,
          "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function () {
            m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
          }
          ,
          m.onabort = function () {
            m && (n(new K("Request aborted", K.ECONNABORTED, e, m)),
              m = null)
          }
          ,
          m.onerror = function () {
            n(new K("Network Error", K.ERR_NETWORK, e, m)),
              m = null
          }
          ,
          m.ontimeout = function () {
            let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
            const i = r.transitional || ue;
            r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
              n(new K(t, i.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, e, m)),
              m = null
          }
          ,
          void 0 === i && o.setContentType(null),
          "setRequestHeader" in m && W.forEach(o.toJSON(), (function (e, t) {
            m.setRequestHeader(t, e)
          }
          )),
          W.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
          d && "json" !== d && (m.responseType = r.responseType),
          f && ([c, l] = xe(f, !0),
            m.addEventListener("progress", c)),
          h && m.upload && ([a, u] = xe(h),
            m.upload.addEventListener("progress", a),
            m.upload.addEventListener("loadend", u)),
          (r.cancelToken || r.signal) && (s = t => {
            m && (n(!t || t.type ? new Ne(null, e, m) : t),
              m.abort(),
              m = null)
          }
            ,
            r.cancelToken && r.cancelToken.subscribe(s),
            r.signal && (r.signal.aborted ? s() : r.signal.addEventListener("abort", s)));
        const _ = function (e) {
          const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return t && t[1] || ""
        }(r.url);
        _ && -1 === ge.protocols.indexOf(_) ? n(new K("Unsupported protocol " + _ + ":", K.ERR_BAD_REQUEST, e)) : m.send(i || null)
      }
      ))
    }
      ;
    var He = (e, t) => {
      const { length: n } = e = e ? e.filter(Boolean) : [];
      if (t || n) {
        let n, r = new AbortController;
        const i = function (e) {
          if (!n) {
            n = !0,
              s();
            const t = e instanceof Error ? e : this.reason;
            r.abort(t instanceof K ? t : new Ne(t instanceof Error ? t.message : t))
          }
        };
        let o = t && setTimeout((() => {
          o = null,
            i(new K(`timeout ${t} of ms exceeded`, K.ETIMEDOUT))
        }
        ), t);
        const s = () => {
          e && (o && clearTimeout(o),
            o = null,
            e.forEach((e => {
              e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i)
            }
            )),
            e = null)
        }
          ;
        e.forEach((e => e.addEventListener("abort", i)));
        const { signal: a } = r;
        return a.unsubscribe = () => W.asap(s),
          a
      }
    }
      ;
    const We = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t)
        return void (yield e);
      let r, i = 0;
      for (; i < n;)
        r = i + t,
          yield e.slice(i, r),
          i = r
    }
      , qe = async function* (e) {
        if (e[Symbol.asyncIterator])
          return void (yield* e);
        const t = e.getReader();
        try {
          for (; ;) {
            const { done: e, value: n } = await t.read();
            if (e)
              break;
            yield n
          }
        } finally {
          await t.cancel()
        }
      }
      , Ve = (e, t, n, r) => {
        const i = async function* (e, t) {
          for await (const n of qe(e))
            yield* We(n, t)
        }(e, t);
        let o, s = 0, a = e => {
          o || (o = !0,
            r && r(e))
        }
          ;
        return new ReadableStream({
          async pull(e) {
            try {
              const { done: t, value: r } = await i.next();
              if (t)
                return a(),
                  void e.close();
              let o = r.byteLength;
              if (n) {
                let e = s += o;
                n(e)
              }
              e.enqueue(new Uint8Array(r))
            } catch (t) {
              throw a(t),
              t
            }
          },
          cancel: e => (a(e),
            i.return())
        }, {
          highWaterMark: 2
        })
      }
      , ze = "function" === typeof fetch && "function" === typeof Request && "function" === typeof Response
      , Ke = ze && "function" === typeof ReadableStream
      , Je = ze && ("function" === typeof TextEncoder ? (Ze = new TextEncoder,
        e => Ze.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer()));
    var Ze;
    const Xe = (e, ...t) => {
      try {
        return !!e(...t)
      } catch (n) {
        return !1
      }
    }
      , Qe = Ke && Xe((() => {
        let e = !1;
        const t = new Request(ge.origin, {
          body: new ReadableStream,
          method: "POST",
          get duplex() {
            return e = !0,
              "half"
          }
        }).headers.has("Content-Type");
        return e && !t
      }
      ))
      , et = Ke && Xe((() => W.isReadableStream(new Response("").body)))
      , tt = {
        stream: et && (e => e.body)
      };
    var nt;
    ze && (nt = new Response,
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
        !tt[e] && (tt[e] = W.isFunction(nt[e]) ? t => t[e]() : (t, n) => {
          throw new K(`Response type '${e}' is not supported`, K.ERR_NOT_SUPPORT, n)
        }
        )
      }
      )));
    const rt = async (e, t) => {
      const n = W.toFiniteNumber(e.getContentLength());
      return null == n ? (async e => {
        if (null == e)
          return 0;
        if (W.isBlob(e))
          return e.size;
        if (W.isSpecCompliantForm(e)) {
          const t = new Request(ge.origin, {
            method: "POST",
            body: e
          });
          return (await t.arrayBuffer()).byteLength
        }
        return W.isArrayBufferView(e) || W.isArrayBuffer(e) ? e.byteLength : (W.isURLSearchParams(e) && (e += ""),
          W.isString(e) ? (await Je(e)).byteLength : void 0)
      }
      )(t) : n
    }
      ;
    const it = {
      http: null,
      xhr: Ye,
      fetch: ze && (async e => {
        let { url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: a, onUploadProgress: c, responseType: u, headers: l, withCredentials: d = "same-origin", fetchOptions: h } = Ge(e);
        u = u ? (u + "").toLowerCase() : "text";
        let f, p = He([i, o && o.toAbortSignal()], s);
        const m = p && p.unsubscribe && (() => {
          p.unsubscribe()
        }
        );
        let g;
        try {
          if (c && Qe && "get" !== n && "head" !== n && 0 !== (g = await rt(l, r))) {
            let e, n = new Request(t, {
              method: "POST",
              body: r,
              duplex: "half"
            });
            if (W.isFormData(r) && (e = n.headers.get("content-type")) && l.setContentType(e),
              n.body) {
              const [e, t] = Le(g, xe(Ue(c)));
              r = Ve(n.body, 65536, e, t)
            }
          }
          W.isString(d) || (d = d ? "include" : "omit");
          const i = "credentials" in Request.prototype;
          f = new Request(t, {
            ...h,
            signal: p,
            method: n.toUpperCase(),
            headers: l.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: i ? d : void 0
          });
          let o = await fetch(f);
          const s = et && ("stream" === u || "response" === u);
          if (et && (a || s && m)) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t => {
              e[t] = o[t]
            }
            ));
            const t = W.toFiniteNumber(o.headers.get("content-length"))
              , [n, r] = a && Le(t, xe(Ue(a), !0)) || [];
            o = new Response(Ve(o.body, 65536, n, (() => {
              r && r(),
                m && m()
            }
            )), e)
          }
          u = u || "text";
          let _ = await tt[W.findKey(tt, u) || "text"](o, e);
          return !s && m && m(),
            await new Promise(((t, n) => {
              Ae(t, n, {
                data: _,
                headers: Ie.from(o.headers),
                status: o.status,
                statusText: o.statusText,
                config: e,
                request: f
              })
            }
            ))
        } catch (_) {
          if (m && m(),
            _ && "TypeError" === _.name && /fetch/i.test(_.message))
            throw Object.assign(new K("Network Error", K.ERR_NETWORK, e, f), {
              cause: _.cause || _
            });
          throw K.from(_, _ && _.code, e, f)
        }
      }
      )
    };
    W.forEach(it, ((e, t) => {
      if (e) {
        try {
          Object.defineProperty(e, "name", {
            value: t
          })
        } catch (n) { }
        Object.defineProperty(e, "adapterName", {
          value: t
        })
      }
    }
    ));
    const ot = e => `- ${e}`
      , st = e => W.isFunction(e) || null === e || !1 === e;
    var at = e => {
      e = W.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        let t;
        if (n = e[o],
          r = n,
          !st(n) && (r = it[(t = String(n)).toLowerCase()],
            void 0 === r))
          throw new K(`Unknown adapter '${t}'`);
        if (r)
          break;
        i[t || "#" + o] = r
      }
      if (!r) {
        const e = Object.entries(i).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
        let n = t ? e.length > 1 ? "since :\n" + e.map(ot).join("\n") : " " + ot(e[0]) : "as no adapter specified";
        throw new K("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT")
      }
      return r
    }
      ;
    function ct(e) {
      if (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
        throw new Ne(null, e)
    }
    function ut(e) {
      ct(e),
        e.headers = Ie.from(e.headers),
        e.data = Oe.call(e, e.transformRequest),
        -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
      return at(e.adapter || ye.adapter)(e).then((function (t) {
        return ct(e),
          t.data = Oe.call(e, e.transformResponse, t),
          t.headers = Ie.from(t.headers),
          t
      }
      ), (function (t) {
        return ke(t) || (ct(e),
          t && t.response && (t.response.data = Oe.call(e, e.transformResponse, t.response),
            t.response.headers = Ie.from(t.response.headers))),
          Promise.reject(t)
      }
      ))
    }
    const lt = "1.7.9"
      , dt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
      dt[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
      }
    }
    ));
    const ht = {};
    dt.transitional = function (e, t, n) {
      function r(e, t) {
        return "[Axios v1.7.9] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
      }
      return (n, i, o) => {
        if (!1 === e)
          throw new K(r(i, " has been removed" + (t ? " in " + t : "")), K.ERR_DEPRECATED);
        return t && !ht[i] && (ht[i] = !0,
          console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))),
          !e || e(n, i, o)
      }
    }
      ,
      dt.spelling = function (e) {
        return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`),
          !0)
      }
      ;
    var ft = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0;) {
          const o = r[i]
            , s = t[o];
          if (s) {
            const t = e[o]
              , n = void 0 === t || s(t, o, e);
            if (!0 !== n)
              throw new K("option " + o + " must be " + n, K.ERR_BAD_OPTION_VALUE)
          } else if (!0 !== n)
            throw new K("Unknown option " + o, K.ERR_BAD_OPTION)
        }
      },
      validators: dt
    };
    const pt = ft.validators;
    class mt {
      constructor(e) {
        this.defaults = e,
          this.interceptors = {
            request: new ce,
            response: new ce
          }
      }
      async request(e, t) {
        try {
          return await this._request(e, t)
        } catch (n) {
          if (n instanceof Error) {
            let e = {};
            Error.captureStackTrace ? Error.captureStackTrace(e) : e = new Error;
            const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
            try {
              n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
            } catch (r) { }
          }
          throw n
        }
      }
      _request(e, t) {
        "string" === typeof e ? (t = t || {}).url = e : t = e || {},
          t = $e(this.defaults, t);
        const { transitional: n, paramsSerializer: r, headers: i } = t;
        void 0 !== n && ft.assertOptions(n, {
          silentJSONParsing: pt.transitional(pt.boolean),
          forcedJSONParsing: pt.transitional(pt.boolean),
          clarifyTimeoutError: pt.transitional(pt.boolean)
        }, !1),
          null != r && (W.isFunction(r) ? t.paramsSerializer = {
            serialize: r
          } : ft.assertOptions(r, {
            encode: pt.function,
            serialize: pt.function
          }, !0)),
          ft.assertOptions(t, {
            baseUrl: pt.spelling("baseURL"),
            withXsrfToken: pt.spelling("withXSRFToken")
          }, !0),
          t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let o = i && W.merge(i.common, i[t.method]);
        i && W.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
          delete i[e]
        }
        )),
          t.headers = Ie.concat(o, i);
        const s = [];
        let a = !0;
        this.interceptors.request.forEach((function (e) {
          "function" === typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous,
            s.unshift(e.fulfilled, e.rejected))
        }
        ));
        const c = [];
        let u;
        this.interceptors.response.forEach((function (e) {
          c.push(e.fulfilled, e.rejected)
        }
        ));
        let l, d = 0;
        if (!a) {
          const e = [ut.bind(this), void 0];
          for (e.unshift.apply(e, s),
            e.push.apply(e, c),
            l = e.length,
            u = Promise.resolve(t); d < l;)
            u = u.then(e[d++], e[d++]);
          return u
        }
        l = s.length;
        let h = t;
        for (d = 0; d < l;) {
          const e = s[d++]
            , t = s[d++];
          try {
            h = e(h)
          } catch (f) {
            t.call(this, f);
            break
          }
        }
        try {
          u = ut.call(this, h)
        } catch (f) {
          return Promise.reject(f)
        }
        for (d = 0,
          l = c.length; d < l;)
          u = u.then(c[d++], c[d++]);
        return u
      }
      getUri(e) {
        return ae(Me((e = $e(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
      }
    }
    W.forEach(["delete", "get", "head", "options"], (function (e) {
      mt.prototype[e] = function (t, n) {
        return this.request($e(n || {}, {
          method: e,
          url: t,
          data: (n || {}).data
        }))
      }
    }
    )),
      W.forEach(["post", "put", "patch"], (function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request($e(i || {}, {
              method: e,
              headers: t ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url: n,
              data: r
            }))
          }
        }
        mt.prototype[e] = t(),
          mt.prototype[e + "Form"] = t(!0)
      }
      ));
    var gt = mt;
    class _t {
      constructor(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise((function (e) {
          t = e
        }
        ));
        const n = this;
        this.promise.then((e => {
          if (!n._listeners)
            return;
          let t = n._listeners.length;
          for (; t-- > 0;)
            n._listeners[t](e);
          n._listeners = null
        }
        )),
          this.promise.then = e => {
            let t;
            const r = new Promise((e => {
              n.subscribe(e),
                t = e
            }
            )).then(e);
            return r.cancel = function () {
              n.unsubscribe(t)
            }
              ,
              r
          }
          ,
          e((function (e, r, i) {
            n.reason || (n.reason = new Ne(e, r, i),
              t(n.reason))
          }
          ))
      }
      throwIfRequested() {
        if (this.reason)
          throw this.reason
      }
      subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
      }
      unsubscribe(e) {
        if (!this._listeners)
          return;
        const t = this._listeners.indexOf(e);
        -1 !== t && this._listeners.splice(t, 1)
      }
      toAbortSignal() {
        const e = new AbortController
          , t = t => {
            e.abort(t)
          }
          ;
        return this.subscribe(t),
          e.signal.unsubscribe = () => this.unsubscribe(t),
          e.signal
      }
      static source() {
        let e;
        return {
          token: new _t((function (t) {
            e = t
          }
          )),
          cancel: e
        }
      }
    }
    var vt = _t;
    const yt = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511
    };
    Object.entries(yt).forEach((([e, t]) => {
      yt[t] = e
    }
    ));
    var bt = yt;
    const Et = function e(t) {
      const n = new gt(t)
        , r = i(gt.prototype.request, n);
      return W.extend(r, gt.prototype, n, {
        allOwnKeys: !0
      }),
        W.extend(r, n, null, {
          allOwnKeys: !0
        }),
        r.create = function (n) {
          return e($e(t, n))
        }
        ,
        r
    }(ye);
    Et.Axios = gt,
      Et.CanceledError = Ne,
      Et.CancelToken = vt,
      Et.isCancel = ke,
      Et.VERSION = lt,
      Et.toFormData = te,
      Et.AxiosError = K,
      Et.Cancel = Et.CanceledError,
      Et.all = function (e) {
        return Promise.all(e)
      }
      ,
      Et.spread = function (e) {
        return function (t) {
          return e.apply(null, t)
        }
      }
      ,
      Et.isAxiosError = function (e) {
        return W.isObject(e) && !0 === e.isAxiosError
      }
      ,
      Et.mergeConfig = $e,
      Et.AxiosHeaders = Ie,
      Et.formToJSON = e => _e(W.isHTMLForm(e) ? new FormData(e) : e),
      Et.getAdapter = at,
      Et.HttpStatusCode = bt,
      Et.default = Et;
    var wt = Et
  },
  3977: function (e, t, n) {
    "use strict";
    n.d(t, {
      C6: function () {
        return r.C6
      },
      Mq: function () {
        return r.Mq
      },
      ZF: function () {
        return r.ZF
      },
      ZR: function () {
        return r.ZR
      }
    });
    var r = n(5816);
    (0,
      r.KN)("firebase", "11.1.0", "app")
  },
  3859: function (e, t, n) {
    "use strict";
    n.d(t, {
      w9: function () {
        return Ve
      },
      iA: function () {
        return pt
      },
      LG: function () {
        return ft
      },
      S$: function () {
        return Ae
      },
      Xb: function () {
        return mt
      },
      v0: function () {
        return $n
      },
      Aj: function () {
        return Et
      },
      aF: function () {
        return ut
      },
      w$: function () {
        return _t
      },
      LS: function () {
        return ht
      },
      e5: function () {
        return gt
      },
      w7: function () {
        return wt
      },
      s: function () {
        return vt
      },
      gQ: function () {
        return yt
      }
    });
    var r = n(5816)
      , i = n(4444)
      , o = n(3333);
    function s(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
      }
      return n
    }
    Object.create;
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var a = n(8463);
    function c() {
      return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      }
    }
    const u = c
      , l = new i.LL("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      })
      , d = new o.Yd("@firebase/auth");
    function h(e, ...t) {
      d.logLevel <= o.in.ERROR && d.error(`Auth (${r.Jn}): ${e}`, ...t)
    }
    function f(e, ...t) {
      throw _(e, ...t)
    }
    function p(e, ...t) {
      return _(e, ...t)
    }
    function m(e, t, n) {
      const r = Object.assign(Object.assign({}, u()), {
        [t]: n
      });
      return new i.LL("auth", "Firebase", r).create(t, {
        appName: e.name
      })
    }
    function g(e) {
      return m(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
    }
    function _(e, ...t) {
      if ("string" !== typeof e) {
        const n = t[0]
          , r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name),
          e._errorFactory.create(n, ...r)
      }
      return l.create(e, ...t)
    }
    function v(e, t, ...n) {
      if (!e)
        throw _(t, ...n)
    }
    function y(e) {
      const t = "INTERNAL ASSERTION FAILED: " + e;
      throw h(t),
      new Error(t)
    }
    function b(e, t) {
      e || y(t)
    }
    function E() {
      var e;
      return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
    }
    function w() {
      return "http:" === S() || "https:" === S()
    }
    function S() {
      var e;
      return "undefined" !== typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
    }
    class T {
      constructor(e, t) {
        this.shortDelay = e,
          this.longDelay = t,
          b(t > e, "Short delay should be less than long delay!"),
          this.isMobile = (0,
            i.uI)() || (0,
              i.b$)()
      }
      get() {
        return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (w() || (0,
          i.ru)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
      }
    }
    function R(e, t) {
      b(e.emulator, "Emulator should always be set here");
      const { url: n } = e.emulator;
      return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
    }
    class I {
      static initialize(e, t, n) {
        this.fetchImpl = e,
          t && (this.headersImpl = t),
          n && (this.responseImpl = n)
      }
      static fetch() {
        return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : "undefined" !== typeof globalThis && globalThis.fetch ? globalThis.fetch : "undefined" !== typeof fetch ? fetch : void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
      }
      static headers() {
        return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : "undefined" !== typeof globalThis && globalThis.Headers ? globalThis.Headers : "undefined" !== typeof Headers ? Headers : void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
      }
      static response() {
        return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : "undefined" !== typeof globalThis && globalThis.Response ? globalThis.Response : "undefined" !== typeof Response ? Response : void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
      }
    }
    const O = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      INVALID_LOGIN_CREDENTIALS: "invalid-credential",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type"
    }
      , k = new T(3e4, 6e4);
    function C(e, t) {
      return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
        tenantId: e.tenantId
      }) : t
    }
    async function N(e, t, n, r, o = {}) {
      return A(e, o, (async () => {
        let o = {}
          , s = {};
        r && ("GET" === t ? s = r : o = {
          body: JSON.stringify(r)
        });
        const a = (0,
          i.xO)(Object.assign({
            key: e.config.apiKey
          }, s)).slice(1)
          , c = await e._getAdditionalHeaders();
        c["Content-Type"] = "application/json",
          e.languageCode && (c["X-Firebase-Locale"] = e.languageCode);
        const u = Object.assign({
          method: t,
          headers: c
        }, o);
        return (0,
          i.L_)() || (u.referrerPolicy = "no-referrer"),
          I.fetch()(D(e, e.config.apiHost, n, a), u)
      }
      ))
    }
    async function A(e, t, n) {
      e._canInitEmulator = !1;
      const r = Object.assign(Object.assign({}, O), t);
      try {
        const t = new L(e)
          , i = await Promise.race([n(), t.promise]);
        t.clearNetworkTimeout();
        const o = await i.json();
        if ("needConfirmation" in o)
          throw U(e, "account-exists-with-different-credential", o);
        if (i.ok && !("errorMessage" in o))
          return o;
        {
          const t = i.ok ? o.errorMessage : o.error.message
            , [n, s] = t.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
            throw U(e, "credential-already-in-use", o);
          if ("EMAIL_EXISTS" === n)
            throw U(e, "email-already-in-use", o);
          if ("USER_DISABLED" === n)
            throw U(e, "user-disabled", o);
          const a = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
          if (s)
            throw m(e, a, s);
          f(e, a)
        }
      } catch (o) {
        if (o instanceof i.ZR)
          throw o;
        f(e, "network-request-failed", {
          message: String(o)
        })
      }
    }
    async function P(e, t, n, r, i = {}) {
      const o = await N(e, t, n, r, i);
      return "mfaPendingCredential" in o && f(e, "multi-factor-auth-required", {
        _serverResponse: o
      }),
        o
    }
    function D(e, t, n, r) {
      const i = `${t}${n}?${r}`;
      return e.config.emulator ? R(e.config, i) : `${e.config.apiScheme}://${i}`
    }
    function x(e) {
      switch (e) {
        case "ENFORCE":
          return "ENFORCE";
        case "AUDIT":
          return "AUDIT";
        case "OFF":
          return "OFF";
        default:
          return "ENFORCEMENT_STATE_UNSPECIFIED"
      }
    }
    class L {
      clearNetworkTimeout() {
        clearTimeout(this.timer)
      }
      constructor(e) {
        this.auth = e,
          this.timer = null,
          this.promise = new Promise(((e, t) => {
            this.timer = setTimeout((() => t(p(this.auth, "network-request-failed"))), k.get())
          }
          ))
      }
    }
    function U(e, t, n) {
      const r = {
        appName: e.name
      };
      n.email && (r.email = n.email),
        n.phoneNumber && (r.phoneNumber = n.phoneNumber);
      const i = p(e, t, r);
      return i.customData._tokenResponse = n,
        i
    }
    function j(e) {
      return void 0 !== e && void 0 !== e.enterprise
    }
    class B {
      constructor(e) {
        if (this.siteKey = "",
          this.recaptchaEnforcementState = [],
          void 0 === e.recaptchaKey)
          throw new Error("recaptchaKey undefined");
        this.siteKey = e.recaptchaKey.split("/")[3],
          this.recaptchaEnforcementState = e.recaptchaEnforcementState
      }
      getProviderEnforcementState(e) {
        if (!this.recaptchaEnforcementState || 0 === this.recaptchaEnforcementState.length)
          return null;
        for (const t of this.recaptchaEnforcementState)
          if (t.provider && t.provider === e)
            return x(t.enforcementState);
        return null
      }
      isProviderEnabled(e) {
        return "ENFORCE" === this.getProviderEnforcementState(e) || "AUDIT" === this.getProviderEnforcementState(e)
      }
      isAnyProviderEnabled() {
        return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER")
      }
    }
    async function M(e, t) {
      return N(e, "GET", "/v2/recaptchaConfig", C(e, t))
    }
    async function F(e, t) {
      return N(e, "POST", "/v1/accounts:lookup", t)
    }
    function $(e) {
      if (e)
        try {
          const t = new Date(Number(e));
          if (!isNaN(t.getTime()))
            return t.toUTCString()
        } catch (t) { }
    }
    function G(e) {
      return 1e3 * Number(e)
    }
    function Y(e) {
      const [t, n, r] = e.split(".");
      if (void 0 === t || void 0 === n || void 0 === r)
        return h("JWT malformed, contained fewer than 3 sections"),
          null;
      try {
        const e = (0,
          i.tV)(n);
        return e ? JSON.parse(e) : (h("Failed to decode base64 JWT payload"),
          null)
      } catch (o) {
        return h("Caught error parsing JWT payload as JSON", null === o || void 0 === o ? void 0 : o.toString()),
          null
      }
    }
    function H(e) {
      const t = Y(e);
      return v(t, "internal-error"),
        v("undefined" !== typeof t.exp, "internal-error"),
        v("undefined" !== typeof t.iat, "internal-error"),
        Number(t.exp) - Number(t.iat)
    }
    async function W(e, t, n = !1) {
      if (n)
        return t;
      try {
        return await t
      } catch (r) {
        throw r instanceof i.ZR && function ({ code: e }) {
          return "auth/user-disabled" === e || "auth/user-token-expired" === e
        }(r) && e.auth.currentUser === e && await e.auth.signOut(),
        r
      }
    }
    class q {
      constructor(e) {
        this.user = e,
          this.isRunning = !1,
          this.timerId = null,
          this.errorBackoff = 3e4
      }
      _start() {
        this.isRunning || (this.isRunning = !0,
          this.schedule())
      }
      _stop() {
        this.isRunning && (this.isRunning = !1,
          null !== this.timerId && clearTimeout(this.timerId))
      }
      getInterval(e) {
        var t;
        if (e) {
          const e = this.errorBackoff;
          return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4),
            e
        }
        {
          this.errorBackoff = 3e4;
          const e = (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5;
          return Math.max(0, e)
        }
      }
      schedule(e = !1) {
        if (!this.isRunning)
          return;
        const t = this.getInterval(e);
        this.timerId = setTimeout((async () => {
          await this.iteration()
        }
        ), t)
      }
      async iteration() {
        try {
          await this.user.getIdToken(!0)
        } catch (e) {
          return void ("auth/network-request-failed" === (null === e || void 0 === e ? void 0 : e.code) && this.schedule(!0))
        }
        this.schedule()
      }
    }
    class V {
      constructor(e, t) {
        this.createdAt = e,
          this.lastLoginAt = t,
          this._initializeTime()
      }
      _initializeTime() {
        this.lastSignInTime = $(this.lastLoginAt),
          this.creationTime = $(this.createdAt)
      }
      _copy(e) {
        this.createdAt = e.createdAt,
          this.lastLoginAt = e.lastLoginAt,
          this._initializeTime()
      }
      toJSON() {
        return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
        }
      }
    }
    async function z(e) {
      var t;
      const n = e.auth
        , r = await e.getIdToken()
        , i = await W(e, F(n, {
          idToken: r
        }));
      v(null === i || void 0 === i ? void 0 : i.users.length, n, "internal-error");
      const o = i.users[0];
      e._notifyReloadListener(o);
      const s = (null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length) ? K(o.providerUserInfo) : []
        , a = (c = e.providerData,
          u = s,
          [...c.filter((e => !u.some((t => t.providerId === e.providerId)))), ...u]);
      var c, u;
      const l = e.isAnonymous
        , d = !(e.email && o.passwordHash) && !(null === a || void 0 === a ? void 0 : a.length)
        , h = !!l && d
        , f = {
          uid: o.localId,
          displayName: o.displayName || null,
          photoURL: o.photoUrl || null,
          email: o.email || null,
          emailVerified: o.emailVerified || !1,
          phoneNumber: o.phoneNumber || null,
          tenantId: o.tenantId || null,
          providerData: a,
          metadata: new V(o.createdAt, o.lastLoginAt),
          isAnonymous: h
        };
      Object.assign(e, f)
    }
    function K(e) {
      return e.map((e => {
        var { providerId: t } = e
          , n = s(e, ["providerId"]);
        return {
          providerId: t,
          uid: n.rawId || "",
          displayName: n.displayName || null,
          email: n.email || null,
          phoneNumber: n.phoneNumber || null,
          photoURL: n.photoUrl || null
        }
      }
      ))
    }
    class J {
      constructor() {
        this.refreshToken = null,
          this.accessToken = null,
          this.expirationTime = null
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
      }
      updateFromServerResponse(e) {
        v(e.idToken, "internal-error"),
          v("undefined" !== typeof e.idToken, "internal-error"),
          v("undefined" !== typeof e.refreshToken, "internal-error");
        const t = "expiresIn" in e && "undefined" !== typeof e.expiresIn ? Number(e.expiresIn) : H(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
      }
      updateFromIdToken(e) {
        v(0 !== e.length, "internal-error");
        const t = H(e);
        this.updateTokensAndExpiration(e, null, t)
      }
      async getToken(e, t = !1) {
        return t || !this.accessToken || this.isExpired ? (v(this.refreshToken, e, "user-token-expired"),
          this.refreshToken ? (await this.refresh(e, this.refreshToken),
            this.accessToken) : null) : this.accessToken
      }
      clearRefreshToken() {
        this.refreshToken = null
      }
      async refresh(e, t) {
        const { accessToken: n, refreshToken: r, expiresIn: o } = await async function (e, t) {
          const n = await A(e, {}, (async () => {
            const n = (0,
              i.xO)({
                grant_type: "refresh_token",
                refresh_token: t
              }).slice(1)
              , { tokenApiHost: r, apiKey: o } = e.config
              , s = D(e, r, "/v1/token", `key=${o}`)
              , a = await e._getAdditionalHeaders();
            return a["Content-Type"] = "application/x-www-form-urlencoded",
              I.fetch()(s, {
                method: "POST",
                headers: a,
                body: n
              })
          }
          ));
          return {
            accessToken: n.access_token,
            expiresIn: n.expires_in,
            refreshToken: n.refresh_token
          }
        }(e, t);
        this.updateTokensAndExpiration(n, r, Number(o))
      }
      updateTokensAndExpiration(e, t, n) {
        this.refreshToken = t || null,
          this.accessToken = e || null,
          this.expirationTime = Date.now() + 1e3 * n
      }
      static fromJSON(e, t) {
        const { refreshToken: n, accessToken: r, expirationTime: i } = t
          , o = new J;
        return n && (v("string" === typeof n, "internal-error", {
          appName: e
        }),
          o.refreshToken = n),
          r && (v("string" === typeof r, "internal-error", {
            appName: e
          }),
            o.accessToken = r),
          i && (v("number" === typeof i, "internal-error", {
            appName: e
          }),
            o.expirationTime = i),
          o
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
        }
      }
      _assign(e) {
        this.accessToken = e.accessToken,
          this.refreshToken = e.refreshToken,
          this.expirationTime = e.expirationTime
      }
      _clone() {
        return Object.assign(new J, this.toJSON())
      }
      _performRefresh() {
        return y("not implemented")
      }
    }
    function Z(e, t) {
      v("string" === typeof e || "undefined" === typeof e, "internal-error", {
        appName: t
      })
    }
    class X {
      constructor(e) {
        var { uid: t, auth: n, stsTokenManager: r } = e
          , i = s(e, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
          this.proactiveRefresh = new q(this),
          this.reloadUserInfo = null,
          this.reloadListener = null,
          this.uid = t,
          this.auth = n,
          this.stsTokenManager = r,
          this.accessToken = r.accessToken,
          this.displayName = i.displayName || null,
          this.email = i.email || null,
          this.emailVerified = i.emailVerified || !1,
          this.phoneNumber = i.phoneNumber || null,
          this.photoURL = i.photoURL || null,
          this.isAnonymous = i.isAnonymous || !1,
          this.tenantId = i.tenantId || null,
          this.providerData = i.providerData ? [...i.providerData] : [],
          this.metadata = new V(i.createdAt || void 0, i.lastLoginAt || void 0)
      }
      async getIdToken(e) {
        const t = await W(this, this.stsTokenManager.getToken(this.auth, e));
        return v(t, this.auth, "internal-error"),
          this.accessToken !== t && (this.accessToken = t,
            await this.auth._persistUserIfCurrent(this),
            this.auth._notifyListenersIfCurrent(this)),
          t
      }
      getIdTokenResult(e) {
        return async function (e, t = !1) {
          const n = (0,
            i.m9)(e)
            , r = await n.getIdToken(t)
            , o = Y(r);
          v(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error");
          const s = "object" === typeof o.firebase ? o.firebase : void 0
            , a = null === s || void 0 === s ? void 0 : s.sign_in_provider;
          return {
            claims: o,
            token: r,
            authTime: $(G(o.auth_time)),
            issuedAtTime: $(G(o.iat)),
            expirationTime: $(G(o.exp)),
            signInProvider: a || null,
            signInSecondFactor: (null === s || void 0 === s ? void 0 : s.sign_in_second_factor) || null
          }
        }(this, e)
      }
      reload() {
        return async function (e) {
          const t = (0,
            i.m9)(e);
          await z(t),
            await t.auth._persistUserIfCurrent(t),
            t.auth._notifyListenersIfCurrent(t)
        }(this)
      }
      _assign(e) {
        this !== e && (v(this.uid === e.uid, this.auth, "internal-error"),
          this.displayName = e.displayName,
          this.photoURL = e.photoURL,
          this.email = e.email,
          this.emailVerified = e.emailVerified,
          this.phoneNumber = e.phoneNumber,
          this.isAnonymous = e.isAnonymous,
          this.tenantId = e.tenantId,
          this.providerData = e.providerData.map((e => Object.assign({}, e))),
          this.metadata._copy(e.metadata),
          this.stsTokenManager._assign(e.stsTokenManager))
      }
      _clone(e) {
        const t = new X(Object.assign(Object.assign({}, this), {
          auth: e,
          stsTokenManager: this.stsTokenManager._clone()
        }));
        return t.metadata._copy(this.metadata),
          t
      }
      _onReload(e) {
        v(!this.reloadListener, this.auth, "internal-error"),
          this.reloadListener = e,
          this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
            this.reloadUserInfo = null)
      }
      _notifyReloadListener(e) {
        this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start()
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
      }
      async _updateTokensIfNecessary(e, t = !1) {
        let n = !1;
        e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e),
          n = !0),
          t && await z(this),
          await this.auth._persistUserIfCurrent(this),
          n && this.auth._notifyListenersIfCurrent(this)
      }
      async delete() {
        if ((0,
          r.rh)(this.auth.app))
          return Promise.reject(g(this.auth));
        const e = await this.getIdToken();
        return await W(this, async function (e, t) {
          return N(e, "POST", "/v1/accounts:delete", t)
        }(this.auth, {
          idToken: e
        })),
          this.stsTokenManager.clearRefreshToken(),
          this.auth.signOut()
      }
      toJSON() {
        return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e => Object.assign({}, e))),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
        })
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
      }
      static _fromJSON(e, t) {
        var n, r, i, o, s, a, c, u;
        const l = null !== (n = t.displayName) && void 0 !== n ? n : void 0
          , d = null !== (r = t.email) && void 0 !== r ? r : void 0
          , h = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0
          , f = null !== (o = t.photoURL) && void 0 !== o ? o : void 0
          , p = null !== (s = t.tenantId) && void 0 !== s ? s : void 0
          , m = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0
          , g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0
          , _ = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0
          , { uid: y, emailVerified: b, isAnonymous: E, providerData: w, stsTokenManager: S } = t;
        v(y && S, e, "internal-error");
        const T = J.fromJSON(this.name, S);
        v("string" === typeof y, e, "internal-error"),
          Z(l, e.name),
          Z(d, e.name),
          v("boolean" === typeof b, e, "internal-error"),
          v("boolean" === typeof E, e, "internal-error"),
          Z(h, e.name),
          Z(f, e.name),
          Z(p, e.name),
          Z(m, e.name),
          Z(g, e.name),
          Z(_, e.name);
        const R = new X({
          uid: y,
          auth: e,
          email: d,
          emailVerified: b,
          displayName: l,
          isAnonymous: E,
          photoURL: f,
          phoneNumber: h,
          tenantId: p,
          stsTokenManager: T,
          createdAt: g,
          lastLoginAt: _
        });
        return w && Array.isArray(w) && (R.providerData = w.map((e => Object.assign({}, e)))),
          m && (R._redirectEventId = m),
          R
      }
      static async _fromIdTokenResponse(e, t, n = !1) {
        const r = new J;
        r.updateFromServerResponse(t);
        const i = new X({
          uid: t.localId,
          auth: e,
          stsTokenManager: r,
          isAnonymous: n
        });
        return await z(i),
          i
      }
      static async _fromGetAccountInfoResponse(e, t, n) {
        const r = t.users[0];
        v(void 0 !== r.localId, "internal-error");
        const i = void 0 !== r.providerUserInfo ? K(r.providerUserInfo) : []
          , o = !(r.email && r.passwordHash) && !(null === i || void 0 === i ? void 0 : i.length)
          , s = new J;
        s.updateFromIdToken(n);
        const a = new X({
          uid: r.localId,
          auth: e,
          stsTokenManager: s,
          isAnonymous: o
        })
          , c = {
            uid: r.localId,
            displayName: r.displayName || null,
            photoURL: r.photoUrl || null,
            email: r.email || null,
            emailVerified: r.emailVerified || !1,
            phoneNumber: r.phoneNumber || null,
            tenantId: r.tenantId || null,
            providerData: i,
            metadata: new V(r.createdAt, r.lastLoginAt),
            isAnonymous: !(r.email && r.passwordHash) && !(null === i || void 0 === i ? void 0 : i.length)
          };
        return Object.assign(a, c),
          a
      }
    }
    const Q = new Map;
    function ee(e) {
      b(e instanceof Function, "Expected a class definition");
      let t = Q.get(e);
      return t ? (b(t instanceof e, "Instance stored in cache mismatched with class"),
        t) : (t = new e,
          Q.set(e, t),
          t)
    }
    class te {
      constructor() {
        this.type = "NONE",
          this.storage = {}
      }
      async _isAvailable() {
        return !0
      }
      async _set(e, t) {
        this.storage[e] = t
      }
      async _get(e) {
        const t = this.storage[e];
        return void 0 === t ? null : t
      }
      async _remove(e) {
        delete this.storage[e]
      }
      _addListener(e, t) { }
      _removeListener(e, t) { }
    }
    te.type = "NONE";
    const ne = te;
    function re(e, t, n) {
      return `firebase:${e}:${t}:${n}`
    }
    class ie {
      constructor(e, t, n) {
        this.persistence = e,
          this.auth = t,
          this.userKey = n;
        const { config: r, name: i } = this.auth;
        this.fullUserKey = re(this.userKey, r.apiKey, i),
          this.fullPersistenceKey = re("persistence", r.apiKey, i),
          this.boundEventHandler = t._onStorageEvent.bind(t),
          this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
      }
      setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON())
      }
      async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? X._fromJSON(this.auth, e) : null
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
      }
      savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
      }
      async setPersistence(e) {
        if (this.persistence === e)
          return;
        const t = await this.getCurrentUser();
        return await this.removeCurrentUser(),
          this.persistence = e,
          t ? this.setCurrentUser(t) : void 0
      }
      delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
      }
      static async create(e, t, n = "authUser") {
        if (!t.length)
          return new ie(ee(ne), e, n);
        const r = (await Promise.all(t.map((async e => {
          if (await e._isAvailable())
            return e
        }
        )))).filter((e => e));
        let i = r[0] || ee(ne);
        const o = re(n, e.config.apiKey, e.name);
        let s = null;
        for (const u of t)
          try {
            const t = await u._get(o);
            if (t) {
              const n = X._fromJSON(e, t);
              u !== i && (s = n),
                i = u;
              break
            }
          } catch (c) { }
        const a = r.filter((e => e._shouldAllowMigration));
        return i._shouldAllowMigration && a.length ? (i = a[0],
          s && await i._set(o, s.toJSON()),
          await Promise.all(t.map((async e => {
            if (e !== i)
              try {
                await e._remove(o)
              } catch (c) { }
          }
          ))),
          new ie(i, e, n)) : new ie(i, e, n)
      }
    }
    function oe(e) {
      const t = e.toLowerCase();
      if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
      if (ue(t))
        return "IEMobile";
      if (t.includes("msie") || t.includes("trident/"))
        return "IE";
      if (t.includes("edge/"))
        return "Edge";
      if (se(t))
        return "Firefox";
      if (t.includes("silk/"))
        return "Silk";
      if (de(t))
        return "Blackberry";
      if (he(t))
        return "Webos";
      if (ae(t))
        return "Safari";
      if ((t.includes("chrome/") || ce(t)) && !t.includes("edge/"))
        return "Chrome";
      if (le(t))
        return "Android";
      {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
          , n = e.match(t);
        if (2 === (null === n || void 0 === n ? void 0 : n.length))
          return n[1]
      }
      return "Other"
    }
    function se(e = (0,
      i.z$)()) {
      return /firefox\//i.test(e)
    }
    function ae(e = (0,
      i.z$)()) {
      const t = e.toLowerCase();
      return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
    }
    function ce(e = (0,
      i.z$)()) {
      return /crios\//i.test(e)
    }
    function ue(e = (0,
      i.z$)()) {
      return /iemobile/i.test(e)
    }
    function le(e = (0,
      i.z$)()) {
      return /android/i.test(e)
    }
    function de(e = (0,
      i.z$)()) {
      return /blackberry/i.test(e)
    }
    function he(e = (0,
      i.z$)()) {
      return /webos/i.test(e)
    }
    function fe(e = (0,
      i.z$)()) {
      return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
    }
    function pe(e = (0,
      i.z$)()) {
      return fe(e) || le(e) || he(e) || de(e) || /windows phone/i.test(e) || ue(e)
    }
    function me(e, t = []) {
      let n;
      switch (e) {
        case "Browser":
          n = oe((0,
            i.z$)());
          break;
        case "Worker":
          n = `${oe((0,
            i.z$)())}-${e}`;
          break;
        default:
          n = e
      }
      const o = t.length ? t.join(",") : "FirebaseCore-web";
      return `${n}/JsCore/${r.Jn}/${o}`
    }
    class ge {
      constructor(e) {
        this.auth = e,
          this.queue = []
      }
      pushCallback(e, t) {
        const n = t => new Promise(((n, r) => {
          try {
            n(e(t))
          } catch (i) {
            r(i)
          }
        }
        ));
        n.onAbort = t,
          this.queue.push(n);
        const r = this.queue.length - 1;
        return () => {
          this.queue[r] = () => Promise.resolve()
        }
      }
      async runMiddleware(e) {
        if (this.auth.currentUser === e)
          return;
        const t = [];
        try {
          for (const n of this.queue)
            await n(e),
              n.onAbort && t.push(n.onAbort)
        } catch (n) {
          t.reverse();
          for (const e of t)
            try {
              e()
            } catch (r) { }
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage: null === n || void 0 === n ? void 0 : n.message
          })
        }
      }
    }
    class _e {
      constructor(e) {
        var t, n, r, i;
        const o = e.customStrengthOptions;
        this.customStrengthOptions = {},
          this.customStrengthOptions.minPasswordLength = null !== (t = o.minPasswordLength) && void 0 !== t ? t : 6,
          o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
          void 0 !== o.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter),
          void 0 !== o.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter),
          void 0 !== o.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter),
          void 0 !== o.containsNonAlphanumericCharacter && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter),
          this.enforcementState = e.enforcementState,
          "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"),
          this.allowedNonAlphanumericCharacters = null !== (r = null === (n = e.allowedNonAlphanumericCharacters) || void 0 === n ? void 0 : n.join("")) && void 0 !== r ? r : "",
          this.forceUpgradeOnSignin = null !== (i = e.forceUpgradeOnSignin) && void 0 !== i && i,
          this.schemaVersion = e.schemaVersion
      }
      validatePassword(e) {
        var t, n, r, i, o, s;
        const a = {
          isValid: !0,
          passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(e, a),
          this.validatePasswordCharacterOptions(e, a),
          a.isValid && (a.isValid = null === (t = a.meetsMinPasswordLength) || void 0 === t || t),
          a.isValid && (a.isValid = null === (n = a.meetsMaxPasswordLength) || void 0 === n || n),
          a.isValid && (a.isValid = null === (r = a.containsLowercaseLetter) || void 0 === r || r),
          a.isValid && (a.isValid = null === (i = a.containsUppercaseLetter) || void 0 === i || i),
          a.isValid && (a.isValid = null === (o = a.containsNumericCharacter) || void 0 === o || o),
          a.isValid && (a.isValid = null === (s = a.containsNonAlphanumericCharacter) || void 0 === s || s),
          a
      }
      validatePasswordLengthOptions(e, t) {
        const n = this.customStrengthOptions.minPasswordLength
          , r = this.customStrengthOptions.maxPasswordLength;
        n && (t.meetsMinPasswordLength = e.length >= n),
          r && (t.meetsMaxPasswordLength = e.length <= r)
      }
      validatePasswordCharacterOptions(e, t) {
        let n;
        this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
        for (let r = 0; r < e.length; r++)
          n = e.charAt(r),
            this.updatePasswordCharacterOptionsStatuses(t, n >= "a" && n <= "z", n >= "A" && n <= "Z", n >= "0" && n <= "9", this.allowedNonAlphanumericCharacters.includes(n))
      }
      updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
        this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
          this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
          this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
          this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = i))
      }
    }
    class ve {
      constructor(e, t, n, r) {
        this.app = e,
          this.heartbeatServiceProvider = t,
          this.appCheckServiceProvider = n,
          this.config = r,
          this.currentUser = null,
          this.emulatorConfig = null,
          this.operations = Promise.resolve(),
          this.authStateSubscription = new be(this),
          this.idTokenSubscription = new be(this),
          this.beforeStateQueue = new ge(this),
          this.redirectUser = null,
          this.isProactiveRefreshEnabled = !1,
          this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
          this._canInitEmulator = !0,
          this._isInitialized = !1,
          this._deleted = !1,
          this._initializationPromise = null,
          this._popupRedirectResolver = null,
          this._errorFactory = l,
          this._agentRecaptchaConfig = null,
          this._tenantRecaptchaConfigs = {},
          this._projectPasswordPolicy = null,
          this._tenantPasswordPolicies = {},
          this.lastNotifiedUid = void 0,
          this.languageCode = null,
          this.tenantId = null,
          this.settings = {
            appVerificationDisabledForTesting: !1
          },
          this.frameworks = [],
          this.name = e.name,
          this.clientVersion = r.sdkClientVersion
      }
      _initializeWithPersistence(e, t) {
        return t && (this._popupRedirectResolver = ee(t)),
          this._initializationPromise = this.queue((async () => {
            var n, r;
            if (!this._deleted && (this.persistenceManager = await ie.create(this, e),
              !this._deleted)) {
              if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively)
                try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (i) { }
              await this.initializeCurrentUser(t),
                this.lastNotifiedUid = (null === (r = this.currentUser) || void 0 === r ? void 0 : r.uid) || null,
                this._deleted || (this._isInitialized = !0)
            }
          }
          )),
          this._initializationPromise
      }
      async _onStorageEvent() {
        if (this._deleted)
          return;
        const e = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || e ? this.currentUser && e && this.currentUser.uid === e.uid ? (this._currentUser._assign(e),
          void (await this.currentUser.getIdToken())) : void (await this._updateCurrentUser(e, !0)) : void 0
      }
      async initializeCurrentUserFromIdToken(e) {
        try {
          const t = await F(this, {
            idToken: e
          })
            , n = await X._fromGetAccountInfoResponse(this, t, e);
          await this.directlySetCurrentUser(n)
        } catch (t) {
          console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t),
            await this.directlySetCurrentUser(null)
        }
      }
      async initializeCurrentUser(e) {
        var t;
        if ((0,
          r.rh)(this.app)) {
          const e = this.app.settings.authIdToken;
          return e ? new Promise((t => {
            setTimeout((() => this.initializeCurrentUserFromIdToken(e).then(t, t)))
          }
          )) : this.directlySetCurrentUser(null)
        }
        const n = await this.assertedPersistence.getCurrentUser();
        let i = n
          , o = !1;
        if (e && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId
            , r = null === i || void 0 === i ? void 0 : i._redirectEventId
            , s = await this.tryRedirectSignIn(e);
          n && n !== r || !(null === s || void 0 === s ? void 0 : s.user) || (i = s.user,
            o = !0)
        }
        if (!i)
          return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
          if (o)
            try {
              await this.beforeStateQueue.runMiddleware(i)
            } catch (s) {
              i = n,
                this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(s)))
            }
          return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return v(this._popupRedirectResolver, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
      }
      async tryRedirectSignIn(e) {
        let t = null;
        try {
          t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
        } catch (n) {
          await this._setRedirectUser(null)
        }
        return t
      }
      async reloadAndSetCurrentUserOrClear(e) {
        try {
          await z(e)
        } catch (t) {
          if ("auth/network-request-failed" !== (null === t || void 0 === t ? void 0 : t.code))
            return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(e)
      }
      useDeviceLanguage() {
        this.languageCode = function () {
          if ("undefined" === typeof navigator)
            return null;
          const e = navigator;
          return e.languages && e.languages[0] || e.language || null
        }()
      }
      async _delete() {
        this._deleted = !0
      }
      async updateCurrentUser(e) {
        if ((0,
          r.rh)(this.app))
          return Promise.reject(g(this));
        const t = e ? (0,
          i.m9)(e) : null;
        return t && v(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
          this._updateCurrentUser(t && t._clone(this))
      }
      async _updateCurrentUser(e, t = !1) {
        if (!this._deleted)
          return e && v(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
            t || await this.beforeStateQueue.runMiddleware(e),
            this.queue((async () => {
              await this.directlySetCurrentUser(e),
                this.notifyAuthListeners()
            }
            ))
      }
      async signOut() {
        return (0,
          r.rh)(this.app) ? Promise.reject(g(this)) : (await this.beforeStateQueue.runMiddleware(null),
            (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
            this._updateCurrentUser(null, !0))
      }
      setPersistence(e) {
        return (0,
          r.rh)(this.app) ? Promise.reject(g(this)) : this.queue((async () => {
            await this.assertedPersistence.setPersistence(ee(e))
          }
          ))
      }
      _getRecaptchaConfig() {
        return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
      }
      async validatePassword(e) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        const t = this._getPasswordPolicyInternal();
        return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e)
      }
      _getPasswordPolicyInternal() {
        return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
      }
      async _updatePasswordPolicy() {
        const e = await async function (e, t = {}) {
          return N(e, "GET", "/v2/passwordPolicy", C(e, t))
        }(this)
          , t = new _e(e);
        null === this.tenantId ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type
      }
      _updateErrorMap(e) {
        this._errorFactory = new i.LL("auth", "Firebase", e())
      }
      onAuthStateChanged(e, t, n) {
        return this.registerStateListener(this.authStateSubscription, e, t, n)
      }
      beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t)
      }
      onIdTokenChanged(e, t, n) {
        return this.registerStateListener(this.idTokenSubscription, e, t, n)
      }
      authStateReady() {
        return new Promise(((e, t) => {
          if (this.currentUser)
            e();
          else {
            const n = this.onAuthStateChanged((() => {
              n(),
                e()
            }
            ), t)
          }
        }
        ))
      }
      async revokeAccessToken(e) {
        if (this.currentUser) {
          const t = {
            providerId: "apple.com",
            tokenType: "ACCESS_TOKEN",
            token: e,
            idToken: await this.currentUser.getIdToken()
          };
          null != this.tenantId && (t.tenantId = this.tenantId),
            await async function (e, t) {
              return N(e, "POST", "/v2/accounts:revokeToken", C(e, t))
            }(this, t)
        }
      }
      toJSON() {
        var e;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
        }
      }
      async _setRedirectUser(e, t) {
        const n = await this.getOrInitRedirectPersistenceManager(t);
        return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
      }
      async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
          const t = e && ee(e) || this._popupRedirectResolver;
          v(t, this, "argument-error"),
            this.redirectPersistenceManager = await ie.create(this, [ee(t._redirectPersistence)], "redirectUser"),
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
      }
      async _redirectUserForId(e) {
        var t, n;
        return this._isInitialized && await this.queue((async () => { }
        )),
          (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
      }
      async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
          return this.queue((async () => this.directlySetCurrentUser(e)))
      }
      _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners()
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
      }
      _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
          this.currentUser && this._currentUser._startProactiveRefresh()
      }
      _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
          this.currentUser && this._currentUser._stopProactiveRefresh()
      }
      get _currentUser() {
        return this.currentUser
      }
      notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized)
          return;
        this.idTokenSubscription.next(this.currentUser);
        const n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
        this.lastNotifiedUid !== n && (this.lastNotifiedUid = n,
          this.authStateSubscription.next(this.currentUser))
      }
      registerStateListener(e, t, n, r) {
        if (this._deleted)
          return () => { }
            ;
        const i = "function" === typeof t ? t : t.next.bind(t);
        let o = !1;
        const s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (v(s, this, "internal-error"),
          s.then((() => {
            o || i(this.currentUser)
          }
          )),
          "function" === typeof t) {
          const i = e.addObserver(t, n, r);
          return () => {
            o = !0,
              i()
          }
        }
        {
          const n = e.addObserver(t);
          return () => {
            o = !0,
              n()
          }
        }
      }
      async directlySetCurrentUser(e) {
        this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
          e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
          this.currentUser = e,
          e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
      }
      queue(e) {
        return this.operations = this.operations.then(e, e),
          this.operations
      }
      get assertedPersistence() {
        return v(this.persistenceManager, this, "internal-error"),
          this.persistenceManager
      }
      _logFramework(e) {
        e && !this.frameworks.includes(e) && (this.frameworks.push(e),
          this.frameworks.sort(),
          this.clientVersion = me(this.config.clientPlatform, this._getFrameworks()))
      }
      _getFrameworks() {
        return this.frameworks
      }
      async _getAdditionalHeaders() {
        var e;
        const t = {
          "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
        const n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
          optional: !0
        })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
        n && (t["X-Firebase-Client"] = n);
        const r = await this._getAppCheckToken();
        return r && (t["X-Firebase-AppCheck"] = r),
          t
      }
      async _getAppCheckToken() {
        var e;
        const t = await (null === (e = this.appCheckServiceProvider.getImmediate({
          optional: !0
        })) || void 0 === e ? void 0 : e.getToken());
        return (null === t || void 0 === t ? void 0 : t.error) && function (e, ...t) {
          d.logLevel <= o.in.WARN && d.warn(`Auth (${r.Jn}): ${e}`, ...t)
        }(`Error while retrieving App Check token: ${t.error}`),
          null === t || void 0 === t ? void 0 : t.token
      }
    }
    function ye(e) {
      return (0,
        i.m9)(e)
    }
    class be {
      constructor(e) {
        this.auth = e,
          this.observer = null,
          this.addObserver = (0,
            i.ne)((e => this.observer = e))
      }
      get next() {
        return v(this.observer, this.auth, "internal-error"),
          this.observer.next.bind(this.observer)
      }
    }
    let Ee = {
      async loadJS() {
        throw new Error("Unable to load external scripts")
      },
      recaptchaV2Script: "",
      recaptchaEnterpriseScript: "",
      gapiScript: ""
    };
    function we(e) {
      return Ee.loadJS(e)
    }
    function Se(e) {
      return `__${e}${Math.floor(1e6 * Math.random())}`
    }
    class Te {
      constructor() {
        this.enterprise = new Re
      }
      ready(e) {
        e()
      }
      execute(e, t) {
        return Promise.resolve("token")
      }
      render(e, t) {
        return ""
      }
    }
    class Re {
      ready(e) {
        e()
      }
      execute(e, t) {
        return Promise.resolve("token")
      }
      render(e, t) {
        return ""
      }
    }
    const Ie = "NO_RECAPTCHA";
    class Oe {
      constructor(e) {
        this.type = "recaptcha-enterprise",
          this.auth = ye(e)
      }
      async verify(e = "verify", t = !1) {
        function n(t, n, r) {
          const i = window.grecaptcha;
          j(i) ? i.enterprise.ready((() => {
            i.enterprise.execute(t, {
              action: e
            }).then((e => {
              n(e)
            }
            )).catch((() => {
              n(Ie)
            }
            ))
          }
          )) : r(Error("No reCAPTCHA enterprise script loaded."))
        }
        if (this.auth.settings.appVerificationDisabledForTesting) {
          return (new Te).execute("siteKey", {
            action: "verify"
          })
        }
        return new Promise(((e, r) => {
          (async function (e) {
            if (!t) {
              if (null == e.tenantId && null != e._agentRecaptchaConfig)
                return e._agentRecaptchaConfig.siteKey;
              if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId])
                return e._tenantRecaptchaConfigs[e.tenantId].siteKey
            }
            return new Promise((async (t, n) => {
              M(e, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }).then((r => {
                if (void 0 !== r.recaptchaKey) {
                  const n = new B(r);
                  return null == e.tenantId ? e._agentRecaptchaConfig = n : e._tenantRecaptchaConfigs[e.tenantId] = n,
                    t(n.siteKey)
                }
                n(new Error("recaptcha Enterprise site key undefined"))
              }
              )).catch((e => {
                n(e)
              }
              ))
            }
            ))
          }
          )(this.auth).then((i => {
            if (!t && j(window.grecaptcha))
              n(i, e, r);
            else {
              if ("undefined" === typeof window)
                return void r(new Error("RecaptchaVerifier is only supported in browser"));
              let t = Ee.recaptchaEnterpriseScript;
              0 !== t.length && (t += i),
                we(t).then((() => {
                  n(i, e, r)
                }
                )).catch((e => {
                  r(e)
                }
                ))
            }
          }
          )).catch((e => {
            r(e)
          }
          ))
        }
        ))
      }
    }
    async function ke(e, t, n, r = !1, i = !1) {
      const o = new Oe(e);
      let s;
      if (i)
        s = Ie;
      else
        try {
          s = await o.verify(n)
        } catch (c) {
          s = await o.verify(n, !0)
        }
      const a = Object.assign({}, t);
      if ("mfaSmsEnrollment" === n || "mfaSmsSignIn" === n) {
        if ("phoneEnrollmentInfo" in a) {
          const e = a.phoneEnrollmentInfo.phoneNumber
            , t = a.phoneEnrollmentInfo.recaptchaToken;
          Object.assign(a, {
            phoneEnrollmentInfo: {
              phoneNumber: e,
              recaptchaToken: t,
              captchaResponse: s,
              clientType: "CLIENT_TYPE_WEB",
              recaptchaVersion: "RECAPTCHA_ENTERPRISE"
            }
          })
        } else if ("phoneSignInInfo" in a) {
          const e = a.phoneSignInInfo.recaptchaToken;
          Object.assign(a, {
            phoneSignInInfo: {
              recaptchaToken: e,
              captchaResponse: s,
              clientType: "CLIENT_TYPE_WEB",
              recaptchaVersion: "RECAPTCHA_ENTERPRISE"
            }
          })
        }
        return a
      }
      return r ? Object.assign(a, {
        captchaResp: s
      }) : Object.assign(a, {
        captchaResponse: s
      }),
        Object.assign(a, {
          clientType: "CLIENT_TYPE_WEB"
        }),
        Object.assign(a, {
          recaptchaVersion: "RECAPTCHA_ENTERPRISE"
        }),
        a
    }
    async function Ce(e, t, n, r, i) {
      var o, s;
      if ("EMAIL_PASSWORD_PROVIDER" === i) {
        if (null === (o = e._getRecaptchaConfig()) || void 0 === o ? void 0 : o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
          const i = await ke(e, t, n, "getOobCode" === n);
          return r(e, i)
        }
        return r(e, t).catch((async i => {
          if ("auth/missing-recaptcha-token" === i.code) {
            console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
            const i = await ke(e, t, n, "getOobCode" === n);
            return r(e, i)
          }
          return Promise.reject(i)
        }
        ))
      }
      if ("PHONE_PROVIDER" === i) {
        if (null === (s = e._getRecaptchaConfig()) || void 0 === s ? void 0 : s.isProviderEnabled("PHONE_PROVIDER")) {
          const i = await ke(e, t, n);
          return r(e, i).catch((async i => {
            var o;
            if ("AUDIT" === (null === (o = e._getRecaptchaConfig()) || void 0 === o ? void 0 : o.getProviderEnforcementState("PHONE_PROVIDER")) && ("auth/missing-recaptcha-token" === i.code || "auth/invalid-app-credential" === i.code)) {
              console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);
              const i = await ke(e, t, n, !1, !0);
              return r(e, i)
            }
            return Promise.reject(i)
          }
          ))
        }
        {
          const i = await ke(e, t, n, !1, !0);
          return r(e, i)
        }
      }
      return Promise.reject(i + " provider is not supported.")
    }
    async function Ne(e) {
      const t = ye(e)
        , n = await M(t, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
        })
        , r = new B(n);
      if (null == t.tenantId ? t._agentRecaptchaConfig = r : t._tenantRecaptchaConfigs[t.tenantId] = r,
        r.isAnyProviderEnabled()) {
        new Oe(t).verify()
      }
    }
    function Ae(e, t, n) {
      const r = ye(e);
      v(r._canInitEmulator, r, "emulator-config-failed"),
        v(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
      const i = !!(null === n || void 0 === n ? void 0 : n.disableWarnings)
        , o = Pe(t)
        , { host: s, port: a } = function (e) {
          const t = Pe(e)
            , n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
          if (!n)
            return {
              host: "",
              port: null
            };
          const r = n[2].split("@").pop() || ""
            , i = /^(\[[^\]]+\])(:|$)/.exec(r);
          if (i) {
            const e = i[1];
            return {
              host: e,
              port: De(r.substr(e.length + 1))
            }
          }
          {
            const [e, t] = r.split(":");
            return {
              host: e,
              port: De(t)
            }
          }
        }(t)
        , c = null === a ? "" : `:${a}`;
      r.config.emulator = {
        url: `${o}//${s}${c}/`
      },
        r.settings.appVerificationDisabledForTesting = !0,
        r.emulatorConfig = Object.freeze({
          host: s,
          port: a,
          protocol: o.replace(":", ""),
          options: Object.freeze({
            disableWarnings: i
          })
        }),
        i || function () {
          function e() {
            const e = document.createElement("p")
              , t = e.style;
            e.innerText = "Running in emulator mode. Do not use with production credentials.",
              t.position = "fixed",
              t.width = "100%",
              t.backgroundColor = "#ffffff",
              t.border = ".1em solid #000000",
              t.color = "#b50000",
              t.bottom = "0px",
              t.left = "0px",
              t.margin = "0px",
              t.zIndex = "10000",
              t.textAlign = "center",
              e.classList.add("firebase-emulator-warning"),
              document.body.appendChild(e)
          }
          "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
          "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e())
        }()
    }
    function Pe(e) {
      const t = e.indexOf(":");
      return t < 0 ? "" : e.substr(0, t + 1)
    }
    function De(e) {
      if (!e)
        return null;
      const t = Number(e);
      return isNaN(t) ? null : t
    }
    class xe {
      constructor(e, t) {
        this.providerId = e,
          this.signInMethod = t
      }
      toJSON() {
        return y("not implemented")
      }
      _getIdTokenResponse(e) {
        return y("not implemented")
      }
      _linkToIdToken(e, t) {
        return y("not implemented")
      }
      _getReauthenticationResolver(e) {
        return y("not implemented")
      }
    }
    async function Le(e, t) {
      return N(e, "POST", "/v1/accounts:resetPassword", C(e, t))
    }
    async function Ue(e, t) {
      return N(e, "POST", "/v1/accounts:signUp", t)
    }
    async function je(e, t) {
      return P(e, "POST", "/v1/accounts:signInWithPassword", C(e, t))
    }
    async function Be(e, t) {
      return N(e, "POST", "/v1/accounts:sendOobCode", C(e, t))
    }
    async function Me(e, t) {
      return Be(e, t)
    }
    class Fe extends xe {
      constructor(e, t, n, r = null) {
        super("password", n),
          this._email = e,
          this._password = t,
          this._tenantId = r
      }
      static _fromEmailAndPassword(e, t) {
        return new Fe(e, t, "password")
      }
      static _fromEmailAndCode(e, t, n = null) {
        return new Fe(e, t, "emailLink", n)
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
        }
      }
      static fromJSON(e) {
        const t = "string" === typeof e ? JSON.parse(e) : e;
        if ((null === t || void 0 === t ? void 0 : t.email) && (null === t || void 0 === t ? void 0 : t.password)) {
          if ("password" === t.signInMethod)
            return this._fromEmailAndPassword(t.email, t.password);
          if ("emailLink" === t.signInMethod)
            return this._fromEmailAndCode(t.email, t.password, t.tenantId)
        }
        return null
      }
      async _getIdTokenResponse(e) {
        switch (this.signInMethod) {
          case "password":
            return Ce(e, {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB"
            }, "signInWithPassword", je, "EMAIL_PASSWORD_PROVIDER");
          case "emailLink":
            return async function (e, t) {
              return P(e, "POST", "/v1/accounts:signInWithEmailLink", C(e, t))
            }(e, {
              email: this._email,
              oobCode: this._password
            });
          default:
            f(e, "internal-error")
        }
      }
      async _linkToIdToken(e, t) {
        switch (this.signInMethod) {
          case "password":
            return Ce(e, {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB"
            }, "signUpPassword", Ue, "EMAIL_PASSWORD_PROVIDER");
          case "emailLink":
            return async function (e, t) {
              return P(e, "POST", "/v1/accounts:signInWithEmailLink", C(e, t))
            }(e, {
              idToken: t,
              email: this._email,
              oobCode: this._password
            });
          default:
            f(e, "internal-error")
        }
      }
      _getReauthenticationResolver(e) {
        return this._getIdTokenResponse(e)
      }
    }
    async function $e(e, t) {
      return P(e, "POST", "/v1/accounts:signInWithIdp", C(e, t))
    }
    class Ge extends xe {
      constructor() {
        super(...arguments),
          this.pendingToken = null
      }
      static _fromParams(e) {
        const t = new Ge(e.providerId, e.signInMethod);
        return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken,
            t.secret = e.oauthTokenSecret) : f("argument-error"),
          t
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        }
      }
      static fromJSON(e) {
        const t = "string" === typeof e ? JSON.parse(e) : e
          , { providerId: n, signInMethod: r } = t
          , i = s(t, ["providerId", "signInMethod"]);
        if (!n || !r)
          return null;
        const o = new Ge(n, r);
        return o.idToken = i.idToken || void 0,
          o.accessToken = i.accessToken || void 0,
          o.secret = i.secret,
          o.nonce = i.nonce,
          o.pendingToken = i.pendingToken || null,
          o
      }
      _getIdTokenResponse(e) {
        return $e(e, this.buildRequest())
      }
      _linkToIdToken(e, t) {
        const n = this.buildRequest();
        return n.idToken = t,
          $e(e, n)
      }
      _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return t.autoCreate = !1,
          $e(e, t)
      }
      buildRequest() {
        const e = {
          requestUri: "http://localhost",
          returnSecureToken: !0
        };
        if (this.pendingToken)
          e.pendingToken = this.pendingToken;
        else {
          const t = {};
          this.idToken && (t.id_token = this.idToken),
            this.accessToken && (t.access_token = this.accessToken),
            this.secret && (t.oauth_token_secret = this.secret),
            t.providerId = this.providerId,
            this.nonce && !this.pendingToken && (t.nonce = this.nonce),
            e.postBody = (0,
              i.xO)(t)
        }
        return e
      }
    }
    async function Ye(e, t) {
      return N(e, "POST", "/v1/accounts:sendVerificationCode", C(e, t))
    }
    const He = {
      USER_NOT_FOUND: "user-not-found"
    };
    class We extends xe {
      constructor(e) {
        super("phone", "phone"),
          this.params = e
      }
      static _fromVerification(e, t) {
        return new We({
          verificationId: e,
          verificationCode: t
        })
      }
      static _fromTokenResponse(e, t) {
        return new We({
          phoneNumber: e,
          temporaryProof: t
        })
      }
      _getIdTokenResponse(e) {
        return async function (e, t) {
          return P(e, "POST", "/v1/accounts:signInWithPhoneNumber", C(e, t))
        }(e, this._makeVerificationRequest())
      }
      _linkToIdToken(e, t) {
        return async function (e, t) {
          const n = await P(e, "POST", "/v1/accounts:signInWithPhoneNumber", C(e, t));
          if (n.temporaryProof)
            throw U(e, "account-exists-with-different-credential", n);
          return n
        }(e, Object.assign({
          idToken: t
        }, this._makeVerificationRequest()))
      }
      _getReauthenticationResolver(e) {
        return async function (e, t) {
          return P(e, "POST", "/v1/accounts:signInWithPhoneNumber", C(e, Object.assign(Object.assign({}, t), {
            operation: "REAUTH"
          })), He)
        }(e, this._makeVerificationRequest())
      }
      _makeVerificationRequest() {
        const { temporaryProof: e, phoneNumber: t, verificationId: n, verificationCode: r } = this.params;
        return e && t ? {
          temporaryProof: e,
          phoneNumber: t
        } : {
          sessionInfo: n,
          code: r
        }
      }
      toJSON() {
        const e = {
          providerId: this.providerId
        };
        return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
          this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof),
          this.params.verificationCode && (e.verificationCode = this.params.verificationCode),
          this.params.verificationId && (e.verificationId = this.params.verificationId),
          e
      }
      static fromJSON(e) {
        "string" === typeof e && (e = JSON.parse(e));
        const { verificationId: t, verificationCode: n, phoneNumber: r, temporaryProof: i } = e;
        return n || t || r || i ? new We({
          verificationId: t,
          verificationCode: n,
          phoneNumber: r,
          temporaryProof: i
        }) : null
      }
    }
    class qe {
      constructor(e) {
        var t, n, r, o, s, a;
        const c = (0,
          i.zd)((0,
            i.pd)(e))
          , u = null !== (t = c.apiKey) && void 0 !== t ? t : null
          , l = null !== (n = c.oobCode) && void 0 !== n ? n : null
          , d = function (e) {
            switch (e) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null
            }
          }(null !== (r = c.mode) && void 0 !== r ? r : null);
        v(u && l && d, "argument-error"),
          this.apiKey = u,
          this.operation = d,
          this.code = l,
          this.continueUrl = null !== (o = c.continueUrl) && void 0 !== o ? o : null,
          this.languageCode = null !== (s = c.languageCode) && void 0 !== s ? s : null,
          this.tenantId = null !== (a = c.tenantId) && void 0 !== a ? a : null
      }
      static parseLink(e) {
        const t = function (e) {
          const t = (0,
            i.zd)((0,
              i.pd)(e)).link
            , n = t ? (0,
              i.zd)((0,
                i.pd)(t)).deep_link_id : null
            , r = (0,
              i.zd)((0,
                i.pd)(e)).deep_link_id;
          return (r ? (0,
            i.zd)((0,
              i.pd)(r)).link : null) || r || n || t || e
        }(e);
        try {
          return new qe(t)
        } catch (n) {
          return null
        }
      }
    }
    class Ve {
      constructor() {
        this.providerId = Ve.PROVIDER_ID
      }
      static credential(e, t) {
        return Fe._fromEmailAndPassword(e, t)
      }
      static credentialWithLink(e, t) {
        const n = qe.parseLink(t);
        return v(n, "argument-error"),
          Fe._fromEmailAndCode(e, n.code, n.tenantId)
      }
    }
    Ve.PROVIDER_ID = "password",
      Ve.EMAIL_PASSWORD_SIGN_IN_METHOD = "password",
      Ve.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    class ze {
      constructor(e) {
        this.providerId = e,
          this.defaultLanguageCode = null,
          this.customParameters = {}
      }
      setDefaultLanguage(e) {
        this.defaultLanguageCode = e
      }
      setCustomParameters(e) {
        return this.customParameters = e,
          this
      }
      getCustomParameters() {
        return this.customParameters
      }
    }
    class Ke extends ze {
      constructor() {
        super(...arguments),
          this.scopes = []
      }
      addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e),
          this
      }
      getScopes() {
        return [...this.scopes]
      }
    }
    class Je extends Ke {
      constructor() {
        super("facebook.com")
      }
      static credential(e) {
        return Ge._fromParams({
          providerId: Je.PROVIDER_ID,
          signInMethod: Je.FACEBOOK_SIGN_IN_METHOD,
          accessToken: e
        })
      }
      static credentialFromResult(e) {
        return Je.credentialFromTaggedObject(e)
      }
      static credentialFromError(e) {
        return Je.credentialFromTaggedObject(e.customData || {})
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e))
          return null;
        if (!e.oauthAccessToken)
          return null;
        try {
          return Je.credential(e.oauthAccessToken)
        } catch (t) {
          return null
        }
      }
    }
    Je.FACEBOOK_SIGN_IN_METHOD = "facebook.com",
      Je.PROVIDER_ID = "facebook.com";
    class Ze extends Ke {
      constructor() {
        super("google.com"),
          this.addScope("profile")
      }
      static credential(e, t) {
        return Ge._fromParams({
          providerId: Ze.PROVIDER_ID,
          signInMethod: Ze.GOOGLE_SIGN_IN_METHOD,
          idToken: e,
          accessToken: t
        })
      }
      static credentialFromResult(e) {
        return Ze.credentialFromTaggedObject(e)
      }
      static credentialFromError(e) {
        return Ze.credentialFromTaggedObject(e.customData || {})
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e)
          return null;
        const { oauthIdToken: t, oauthAccessToken: n } = e;
        if (!t && !n)
          return null;
        try {
          return Ze.credential(t, n)
        } catch (r) {
          return null
        }
      }
    }
    Ze.GOOGLE_SIGN_IN_METHOD = "google.com",
      Ze.PROVIDER_ID = "google.com";
    class Xe extends Ke {
      constructor() {
        super("github.com")
      }
      static credential(e) {
        return Ge._fromParams({
          providerId: Xe.PROVIDER_ID,
          signInMethod: Xe.GITHUB_SIGN_IN_METHOD,
          accessToken: e
        })
      }
      static credentialFromResult(e) {
        return Xe.credentialFromTaggedObject(e)
      }
      static credentialFromError(e) {
        return Xe.credentialFromTaggedObject(e.customData || {})
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e))
          return null;
        if (!e.oauthAccessToken)
          return null;
        try {
          return Xe.credential(e.oauthAccessToken)
        } catch (t) {
          return null
        }
      }
    }
    Xe.GITHUB_SIGN_IN_METHOD = "github.com",
      Xe.PROVIDER_ID = "github.com";
    class Qe extends Ke {
      constructor() {
        super("twitter.com")
      }
      static credential(e, t) {
        return Ge._fromParams({
          providerId: Qe.PROVIDER_ID,
          signInMethod: Qe.TWITTER_SIGN_IN_METHOD,
          oauthToken: e,
          oauthTokenSecret: t
        })
      }
      static credentialFromResult(e) {
        return Qe.credentialFromTaggedObject(e)
      }
      static credentialFromError(e) {
        return Qe.credentialFromTaggedObject(e.customData || {})
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e)
          return null;
        const { oauthAccessToken: t, oauthTokenSecret: n } = e;
        if (!t || !n)
          return null;
        try {
          return Qe.credential(t, n)
        } catch (r) {
          return null
        }
      }
    }
    async function et(e, t) {
      return P(e, "POST", "/v1/accounts:signUp", C(e, t))
    }
    Qe.TWITTER_SIGN_IN_METHOD = "twitter.com",
      Qe.PROVIDER_ID = "twitter.com";
    class tt {
      constructor(e) {
        this.user = e.user,
          this.providerId = e.providerId,
          this._tokenResponse = e._tokenResponse,
          this.operationType = e.operationType
      }
      static async _fromIdTokenResponse(e, t, n, r = !1) {
        const i = await X._fromIdTokenResponse(e, n, r)
          , o = nt(n);
        return new tt({
          user: i,
          providerId: o,
          _tokenResponse: n,
          operationType: t
        })
      }
      static async _forOperation(e, t, n) {
        await e._updateTokensIfNecessary(n, !0);
        const r = nt(n);
        return new tt({
          user: e,
          providerId: r,
          _tokenResponse: n,
          operationType: t
        })
      }
    }
    function nt(e) {
      return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null
    }
    class rt extends i.ZR {
      constructor(e, t, n, r) {
        var i;
        super(t.code, t.message),
          this.operationType = n,
          this.user = r,
          Object.setPrototypeOf(this, rt.prototype),
          this.customData = {
            appName: e.name,
            tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: n
          }
      }
      static _fromErrorAndOperation(e, t, n, r) {
        return new rt(e, t, n, r)
      }
    }
    function it(e, t, n, r) {
      return ("reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((n => {
        if ("auth/multi-factor-auth-required" === n.code)
          throw rt._fromErrorAndOperation(e, n, t, r);
        throw n
      }
      ))
    }
    async function ot(e, t, n = !1) {
      const r = await W(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
      return tt._forOperation(e, "link", r)
    }
    async function st(e, t, n = !1) {
      const { auth: i } = e;
      if ((0,
        r.rh)(i.app))
        return Promise.reject(g(i));
      const o = "reauthenticate";
      try {
        const r = await W(e, it(i, o, t, e), n);
        v(r.idToken, i, "internal-error");
        const s = Y(r.idToken);
        v(s, i, "internal-error");
        const { sub: a } = s;
        return v(e.uid === a, i, "user-mismatch"),
          tt._forOperation(e, o, r)
      } catch (s) {
        throw "auth/user-not-found" === (null === s || void 0 === s ? void 0 : s.code) && f(i, "user-mismatch"),
        s
      }
    }
    async function at(e, t, n = !1) {
      if ((0,
        r.rh)(e.app))
        return Promise.reject(g(e));
      const i = "signIn"
        , o = await it(e, i, t)
        , s = await tt._fromIdTokenResponse(e, i, o);
      return n || await e._updateCurrentUser(s.user),
        s
    }
    async function ct(e, t) {
      return at(ye(e), t)
    }
    async function ut(e, t) {
      return st((0,
        i.m9)(e), t)
    }
    function lt(e, t, n) {
      var r;
      v((null === (r = n.url) || void 0 === r ? void 0 : r.length) > 0, e, "invalid-continue-uri"),
        v("undefined" === typeof n.dynamicLinkDomain || n.dynamicLinkDomain.length > 0, e, "invalid-dynamic-link-domain"),
        t.continueUrl = n.url,
        t.dynamicLinkDomain = n.dynamicLinkDomain,
        t.canHandleCodeInApp = n.handleCodeInApp,
        n.iOS && (v(n.iOS.bundleId.length > 0, e, "missing-ios-bundle-id"),
          t.iOSBundleId = n.iOS.bundleId),
        n.android && (v(n.android.packageName.length > 0, e, "missing-android-pkg-name"),
          t.androidInstallApp = n.android.installApp,
          t.androidMinimumVersionCode = n.android.minimumVersion,
          t.androidPackageName = n.android.packageName)
    }
    async function dt(e) {
      const t = ye(e);
      t._getPasswordPolicyInternal() && await t._updatePasswordPolicy()
    }
    async function ht(e, t, n) {
      const r = ye(e)
        , i = {
          requestType: "PASSWORD_RESET",
          email: t,
          clientType: "CLIENT_TYPE_WEB"
        };
      n && lt(r, i, n),
        await Ce(r, i, "getOobCode", Me, "EMAIL_PASSWORD_PROVIDER")
    }
    async function ft(e, t, n) {
      await Le((0,
        i.m9)(e), {
        oobCode: t,
        newPassword: n
      }).catch((async t => {
        throw "auth/password-does-not-meet-requirements" === t.code && dt(e),
        t
      }
      ))
    }
    async function pt(e, t) {
      await async function (e, t) {
        return N(e, "POST", "/v1/accounts:update", C(e, t))
      }((0,
        i.m9)(e), {
        oobCode: t
      })
    }
    async function mt(e, t, n) {
      if ((0,
        r.rh)(e.app))
        return Promise.reject(g(e));
      const i = ye(e)
        , o = Ce(i, {
          returnSecureToken: !0,
          email: t,
          password: n,
          clientType: "CLIENT_TYPE_WEB"
        }, "signUpPassword", et, "EMAIL_PASSWORD_PROVIDER")
        , s = await o.catch((t => {
          throw "auth/password-does-not-meet-requirements" === t.code && dt(e),
          t
        }
        ))
        , a = await tt._fromIdTokenResponse(i, "signIn", s);
      return await i._updateCurrentUser(a.user),
        a
    }
    function gt(e, t, n) {
      return (0,
        r.rh)(e.app) ? Promise.reject(g(e)) : ct((0,
          i.m9)(e), Ve.credential(t, n)).catch((async t => {
            throw "auth/password-does-not-meet-requirements" === t.code && dt(e),
            t
          }
          ))
    }
    async function _t(e, t) {
      const n = (0,
        i.m9)(e)
        , r = {
          requestType: "VERIFY_EMAIL",
          idToken: await e.getIdToken()
        };
      t && lt(n.auth, r, t);
      const { email: o } = await async function (e, t) {
        return Be(e, t)
      }(n.auth, r);
      o !== e.email && await e.reload()
    }
    function vt(e, t) {
      const n = (0,
        i.m9)(e);
      return (0,
        r.rh)(n.auth.app) ? Promise.reject(g(n.auth)) : bt(n, t, null)
    }
    function yt(e, t) {
      return bt((0,
        i.m9)(e), null, t)
    }
    async function bt(e, t, n) {
      const { auth: r } = e
        , i = {
          idToken: await e.getIdToken(),
          returnSecureToken: !0
        };
      t && (i.email = t),
        n && (i.password = n);
      const o = await W(e, async function (e, t) {
        return N(e, "POST", "/v1/accounts:update", t)
      }(r, i));
      await e._updateTokensIfNecessary(o, !0)
    }
    function Et(e, t, n, r) {
      return (0,
        i.m9)(e).onAuthStateChanged(t, n, r)
    }
    function wt(e) {
      return (0,
        i.m9)(e).signOut()
    }
    function St(e, t) {
      return N(e, "POST", "/v2/accounts/mfaEnrollment:start", C(e, t))
    }
    new WeakMap;
    const Tt = "__sak";
    class Rt {
      constructor(e, t) {
        this.storageRetriever = e,
          this.type = t
      }
      _isAvailable() {
        try {
          return this.storage ? (this.storage.setItem(Tt, "1"),
            this.storage.removeItem(Tt),
            Promise.resolve(!0)) : Promise.resolve(!1)
        } catch (e) {
          return Promise.resolve(!1)
        }
      }
      _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)),
          Promise.resolve()
      }
      _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null)
      }
      _remove(e) {
        return this.storage.removeItem(e),
          Promise.resolve()
      }
      get storage() {
        return this.storageRetriever()
      }
    }
    class It extends Rt {
      constructor() {
        super((() => window.localStorage), "LOCAL"),
          this.boundEventHandler = (e, t) => this.onStorageEvent(e, t),
          this.listeners = {},
          this.localCache = {},
          this.pollTimer = null,
          this.fallbackToPolling = pe(),
          this._shouldAllowMigration = !0
      }
      forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
          const n = this.storage.getItem(t)
            , r = this.localCache[t];
          n !== r && e(t, r, n)
        }
      }
      onStorageEvent(e, t = !1) {
        if (!e.key)
          return void this.forAllChangedKeys(((e, t, n) => {
            this.notifyListeners(e, n)
          }
          ));
        const n = e.key;
        t ? this.detachListener() : this.stopPolling();
        const r = () => {
          const e = this.storage.getItem(n);
          (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
        }
          , o = this.storage.getItem(n);
        (0,
          i.w1)() && 10 === document.documentMode && o !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n)
          for (const r of Array.from(n))
            r(t ? JSON.parse(t) : t)
      }
      startPolling() {
        this.stopPolling(),
          this.pollTimer = setInterval((() => {
            this.forAllChangedKeys(((e, t, n) => {
              this.onStorageEvent(new StorageEvent("storage", {
                key: e,
                oldValue: t,
                newValue: n
              }), !0)
            }
            ))
          }
          ), 1e3)
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
          this.pollTimer = null)
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler)
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler)
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
          this.listeners[e] || (this.listeners[e] = new Set,
            this.localCache[e] = this.storage.getItem(e)),
          this.listeners[e].add(t)
      }
      _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length && (this.detachListener(),
            this.stopPolling())
      }
      async _set(e, t) {
        await super._set(e, t),
          this.localCache[e] = JSON.stringify(t)
      }
      async _get(e) {
        const t = await super._get(e);
        return this.localCache[e] = JSON.stringify(t),
          t
      }
      async _remove(e) {
        await super._remove(e),
          delete this.localCache[e]
      }
    }
    It.type = "LOCAL";
    const Ot = It;
    class kt extends Rt {
      constructor() {
        super((() => window.sessionStorage), "SESSION")
      }
      _addListener(e, t) { }
      _removeListener(e, t) { }
    }
    kt.type = "SESSION";
    const Ct = kt;
    class Nt {
      constructor(e) {
        this.eventTarget = e,
          this.handlersMap = {},
          this.boundEventHandler = this.handleEvent.bind(this)
      }
      static _getInstance(e) {
        const t = this.receivers.find((t => t.isListeningto(e)));
        if (t)
          return t;
        const n = new Nt(e);
        return this.receivers.push(n),
          n
      }
      isListeningto(e) {
        return this.eventTarget === e
      }
      async handleEvent(e) {
        const t = e
          , { eventId: n, eventType: r, data: i } = t.data
          , o = this.handlersMap[r];
        if (!(null === o || void 0 === o ? void 0 : o.size))
          return;
        t.ports[0].postMessage({
          status: "ack",
          eventId: n,
          eventType: r
        });
        const s = Array.from(o).map((async e => e(t.origin, i)))
          , a = await function (e) {
            return Promise.all(e.map((async e => {
              try {
                return {
                  fulfilled: !0,
                  value: await e
                }
              } catch (t) {
                return {
                  fulfilled: !1,
                  reason: t
                }
              }
            }
            )))
          }(s);
        t.ports[0].postMessage({
          status: "done",
          eventId: n,
          eventType: r,
          response: a
        })
      }
      _subscribe(e, t) {
        0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[e] || (this.handlersMap[e] = new Set),
          this.handlersMap[e].add(t)
      }
      _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t),
          t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e],
          0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
      }
    }
    function At(e = "", t = 10) {
      let n = "";
      for (let r = 0; r < t; r++)
        n += Math.floor(10 * Math.random());
      return e + n
    }
    Nt.receivers = [];
    class Pt {
      constructor(e) {
        this.target = e,
          this.handlers = new Set
      }
      removeMessageHandler(e) {
        e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage),
          e.messageChannel.port1.close()),
          this.handlers.delete(e)
      }
      async _send(e, t, n = 50) {
        const r = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
        if (!r)
          throw new Error("connection_unavailable");
        let i, o;
        return new Promise(((s, a) => {
          const c = At("", 20);
          r.port1.start();
          const u = setTimeout((() => {
            a(new Error("unsupported_event"))
          }
          ), n);
          o = {
            messageChannel: r,
            onMessage(e) {
              const t = e;
              if (t.data.eventId === c)
                switch (t.data.status) {
                  case "ack":
                    clearTimeout(u),
                      i = setTimeout((() => {
                        a(new Error("timeout"))
                      }
                      ), 3e3);
                    break;
                  case "done":
                    clearTimeout(i),
                      s(t.data.response);
                    break;
                  default:
                    clearTimeout(u),
                      clearTimeout(i),
                      a(new Error("invalid_response"))
                }
            }
          },
            this.handlers.add(o),
            r.port1.addEventListener("message", o.onMessage),
            this.target.postMessage({
              eventType: e,
              eventId: c,
              data: t
            }, [r.port2])
        }
        )).finally((() => {
          o && this.removeMessageHandler(o)
        }
        ))
      }
    }
    function Dt() {
      return window
    }
    function xt() {
      return "undefined" !== typeof Dt().WorkerGlobalScope && "function" === typeof Dt().importScripts
    }
    const Lt = "firebaseLocalStorageDb"
      , Ut = "firebaseLocalStorage"
      , jt = "fbase_key";
    class Bt {
      constructor(e) {
        this.request = e
      }
      toPromise() {
        return new Promise(((e, t) => {
          this.request.addEventListener("success", (() => {
            e(this.request.result)
          }
          )),
            this.request.addEventListener("error", (() => {
              t(this.request.error)
            }
            ))
        }
        ))
      }
    }
    function Mt(e, t) {
      return e.transaction([Ut], t ? "readwrite" : "readonly").objectStore(Ut)
    }
    function Ft() {
      const e = indexedDB.open(Lt, 1);
      return new Promise(((t, n) => {
        e.addEventListener("error", (() => {
          n(e.error)
        }
        )),
          e.addEventListener("upgradeneeded", (() => {
            const t = e.result;
            try {
              t.createObjectStore(Ut, {
                keyPath: jt
              })
            } catch (r) {
              n(r)
            }
          }
          )),
          e.addEventListener("success", (async () => {
            const n = e.result;
            n.objectStoreNames.contains(Ut) ? t(n) : (n.close(),
              await function () {
                const e = indexedDB.deleteDatabase(Lt);
                return new Bt(e).toPromise()
              }(),
              t(await Ft()))
          }
          ))
      }
      ))
    }
    async function $t(e, t, n) {
      const r = Mt(e, !0).put({
        [jt]: t,
        value: n
      });
      return new Bt(r).toPromise()
    }
    function Gt(e, t) {
      const n = Mt(e, !0).delete(t);
      return new Bt(n).toPromise()
    }
    class Yt {
      constructor() {
        this.type = "LOCAL",
          this._shouldAllowMigration = !0,
          this.listeners = {},
          this.localCache = {},
          this.pollTimer = null,
          this.pendingWrites = 0,
          this.receiver = null,
          this.sender = null,
          this.serviceWorkerReceiverAvailable = !1,
          this.activeServiceWorker = null,
          this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => { }
          ), (() => { }
          ))
      }
      async _openDb() {
        return this.db || (this.db = await Ft()),
          this.db
      }
      async _withRetries(e) {
        let t = 0;
        for (; ;)
          try {
            const t = await this._openDb();
            return await e(t)
          } catch (n) {
            if (t++ > 3)
              throw n;
            this.db && (this.db.close(),
              this.db = void 0)
          }
      }
      async initializeServiceWorkerMessaging() {
        return xt() ? this.initializeReceiver() : this.initializeSender()
      }
      async initializeReceiver() {
        this.receiver = Nt._getInstance(xt() ? self : null),
          this.receiver._subscribe("keyChanged", (async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key)
          }))),
          this.receiver._subscribe("ping", (async (e, t) => ["keyChanged"]))
      }
      async initializeSender() {
        var e, t;
        if (this.activeServiceWorker = await async function () {
          if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker))
            return null;
          try {
            return (await navigator.serviceWorker.ready).active
          } catch (e) {
            return null
          }
        }(),
          !this.activeServiceWorker)
          return;
        this.sender = new Pt(this.activeServiceWorker);
        const n = await this.sender._send("ping", {}, 800);
        n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
      }
      async notifyServiceWorker(e) {
        if (this.sender && this.activeServiceWorker && function () {
          var e;
          return (null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === e ? void 0 : e.controller) || null
        }() === this.activeServiceWorker)
          try {
            await this.sender._send("keyChanged", {
              key: e
            }, this.serviceWorkerReceiverAvailable ? 800 : 50)
          } catch (t) { }
      }
      async _isAvailable() {
        try {
          if (!indexedDB)
            return !1;
          const e = await Ft();
          return await $t(e, Tt, "1"),
            await Gt(e, Tt),
            !0
        } catch (e) { }
        return !1
      }
      async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
          await e()
        } finally {
          this.pendingWrites--
        }
      }
      async _set(e, t) {
        return this._withPendingWrite((async () => (await this._withRetries((n => $t(n, e, t))),
          this.localCache[e] = t,
          this.notifyServiceWorker(e))))
      }
      async _get(e) {
        const t = await this._withRetries((t => async function (e, t) {
          const n = Mt(e, !1).get(t)
            , r = await new Bt(n).toPromise();
          return void 0 === r ? null : r.value
        }(t, e)));
        return this.localCache[e] = t,
          t
      }
      async _remove(e) {
        return this._withPendingWrite((async () => (await this._withRetries((t => Gt(t, e))),
          delete this.localCache[e],
          this.notifyServiceWorker(e))))
      }
      async _poll() {
        const e = await this._withRetries((e => {
          const t = Mt(e, !1).getAll();
          return new Bt(t).toPromise()
        }
        ));
        if (!e)
          return [];
        if (0 !== this.pendingWrites)
          return [];
        const t = []
          , n = new Set;
        if (0 !== e.length)
          for (const { fbase_key: r, value: i } of e)
            n.add(r),
              JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i),
                t.push(r));
        for (const r of Object.keys(this.localCache))
          this.localCache[r] && !n.has(r) && (this.notifyListeners(r, null),
            t.push(r));
        return t
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n)
          for (const r of Array.from(n))
            r(t)
      }
      startPolling() {
        this.stopPolling(),
          this.pollTimer = setInterval((async () => this._poll()), 800)
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer),
          this.pollTimer = null)
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[e] || (this.listeners[e] = new Set,
            this._get(e)),
          this.listeners[e].add(t)
      }
      _removeListener(e, t) {
        this.listeners[e] && (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length && this.stopPolling()
      }
    }
    Yt.type = "LOCAL";
    const Ht = Yt;
    function Wt(e, t) {
      return N(e, "POST", "/v2/accounts/mfaSignIn:start", C(e, t))
    }
    Se("rcb"),
      new T(3e4, 6e4);
    const qt = "recaptcha";
    async function Vt(e, t, n) {
      var r;
      if (!e._getRecaptchaConfig())
        try {
          await Ne(e)
        } catch (i) {
          console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")
        }
      try {
        let i;
        if (i = "string" === typeof t ? {
          phoneNumber: t
        } : t,
          "session" in i) {
          const t = i.session;
          if ("phoneNumber" in i) {
            v("enroll" === t.type, e, "internal-error");
            const r = {
              idToken: t.credential,
              phoneEnrollmentInfo: {
                phoneNumber: i.phoneNumber,
                clientType: "CLIENT_TYPE_WEB"
              }
            }
              , o = Ce(e, r, "mfaSmsEnrollment", (async (e, t) => {
                if (t.phoneEnrollmentInfo.captchaResponse === Ie) {
                  v((null === n || void 0 === n ? void 0 : n.type) === qt, e, "argument-error");
                  return St(e, await zt(e, t, n))
                }
                return St(e, t)
              }
              ), "PHONE_PROVIDER");
            return (await o.catch((e => Promise.reject(e)))).phoneSessionInfo.sessionInfo
          }
          {
            v("signin" === t.type, e, "internal-error");
            const o = (null === (r = i.multiFactorHint) || void 0 === r ? void 0 : r.uid) || i.multiFactorUid;
            v(o, e, "missing-multi-factor-info");
            const s = {
              mfaPendingCredential: t.credential,
              mfaEnrollmentId: o,
              phoneSignInInfo: {
                clientType: "CLIENT_TYPE_WEB"
              }
            }
              , a = Ce(e, s, "mfaSmsSignIn", (async (e, t) => {
                if (t.phoneSignInInfo.captchaResponse === Ie) {
                  v((null === n || void 0 === n ? void 0 : n.type) === qt, e, "argument-error");
                  return Wt(e, await zt(e, t, n))
                }
                return Wt(e, t)
              }
              ), "PHONE_PROVIDER");
            return (await a.catch((e => Promise.reject(e)))).phoneResponseInfo.sessionInfo
          }
        }
        {
          const t = {
            phoneNumber: i.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
          }
            , r = Ce(e, t, "sendVerificationCode", (async (e, t) => {
              if (t.captchaResponse === Ie) {
                v((null === n || void 0 === n ? void 0 : n.type) === qt, e, "argument-error");
                return Ye(e, await zt(e, t, n))
              }
              return Ye(e, t)
            }
            ), "PHONE_PROVIDER");
          return (await r.catch((e => Promise.reject(e)))).sessionInfo
        }
      } finally {
        null === n || void 0 === n || n._reset()
      }
    }
    async function zt(e, t, n) {
      v(n.type === qt, e, "argument-error");
      const r = await n.verify();
      v("string" === typeof r, e, "argument-error");
      const i = Object.assign({}, t);
      if ("phoneEnrollmentInfo" in i) {
        const e = i.phoneEnrollmentInfo.phoneNumber
          , t = i.phoneEnrollmentInfo.captchaResponse
          , n = i.phoneEnrollmentInfo.clientType
          , o = i.phoneEnrollmentInfo.recaptchaVersion;
        return Object.assign(i, {
          phoneEnrollmentInfo: {
            phoneNumber: e,
            recaptchaToken: r,
            captchaResponse: t,
            clientType: n,
            recaptchaVersion: o
          }
        }),
          i
      }
      if ("phoneSignInInfo" in i) {
        const e = i.phoneSignInInfo.captchaResponse
          , t = i.phoneSignInInfo.clientType
          , n = i.phoneSignInInfo.recaptchaVersion;
        return Object.assign(i, {
          phoneSignInInfo: {
            recaptchaToken: r,
            captchaResponse: e,
            clientType: t,
            recaptchaVersion: n
          }
        }),
          i
      }
      return Object.assign(i, {
        recaptchaToken: r
      }),
        i
    }
    class Kt {
      constructor(e) {
        this.providerId = Kt.PROVIDER_ID,
          this.auth = ye(e)
      }
      verifyPhoneNumber(e, t) {
        return Vt(this.auth, e, (0,
          i.m9)(t))
      }
      static credential(e, t) {
        return We._fromVerification(e, t)
      }
      static credentialFromResult(e) {
        const t = e;
        return Kt.credentialFromTaggedObject(t)
      }
      static credentialFromError(e) {
        return Kt.credentialFromTaggedObject(e.customData || {})
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e)
          return null;
        const { phoneNumber: t, temporaryProof: n } = e;
        return t && n ? We._fromTokenResponse(t, n) : null
      }
    }
    function Jt(e, t) {
      return t ? ee(t) : (v(e._popupRedirectResolver, e, "argument-error"),
        e._popupRedirectResolver)
    }
    Kt.PROVIDER_ID = "phone",
      Kt.PHONE_SIGN_IN_METHOD = "phone";
    class Zt extends xe {
      constructor(e) {
        super("custom", "custom"),
          this.params = e
      }
      _getIdTokenResponse(e) {
        return $e(e, this._buildIdpRequest())
      }
      _linkToIdToken(e, t) {
        return $e(e, this._buildIdpRequest(t))
      }
      _getReauthenticationResolver(e) {
        return $e(e, this._buildIdpRequest())
      }
      _buildIdpRequest(e) {
        const t = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0
        };
        return e && (t.idToken = e),
          t
      }
    }
    function Xt(e) {
      return at(e.auth, new Zt(e), e.bypassAuthState)
    }
    function Qt(e) {
      const { auth: t, user: n } = e;
      return v(n, t, "internal-error"),
        st(n, new Zt(e), e.bypassAuthState)
    }
    async function en(e) {
      const { auth: t, user: n } = e;
      return v(n, t, "internal-error"),
        ot(n, new Zt(e), e.bypassAuthState)
    }
    class tn {
      constructor(e, t, n, r, i = !1) {
        this.auth = e,
          this.resolver = n,
          this.user = r,
          this.bypassAuthState = i,
          this.pendingPromise = null,
          this.eventManager = null,
          this.filter = Array.isArray(t) ? t : [t]
      }
      execute() {
        return new Promise((async (e, t) => {
          this.pendingPromise = {
            resolve: e,
            reject: t
          };
          try {
            this.eventManager = await this.resolver._initialize(this.auth),
              await this.onExecution(),
              this.eventManager.registerConsumer(this)
          } catch (n) {
            this.reject(n)
          }
        }
        ))
      }
      async onAuthEvent(e) {
        const { urlResponse: t, sessionId: n, postBody: r, tenantId: i, error: o, type: s } = e;
        if (o)
          return void this.reject(o);
        const a = {
          auth: this.auth,
          requestUri: t,
          sessionId: n,
          tenantId: i || void 0,
          postBody: r || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(s)(a))
        } catch (c) {
          this.reject(c)
        }
      }
      onError(e) {
        this.reject(e)
      }
      getIdpTask(e) {
        switch (e) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return Xt;
          case "linkViaPopup":
          case "linkViaRedirect":
            return en;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return Qt;
          default:
            f(this.auth, "internal-error")
        }
      }
      resolve(e) {
        b(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.resolve(e),
          this.unregisterAndCleanUp()
      }
      reject(e) {
        b(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.reject(e),
          this.unregisterAndCleanUp()
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
          this.pendingPromise = null,
          this.cleanUp()
      }
    }
    const nn = new T(2e3, 1e4);
    class rn extends tn {
      constructor(e, t, n, r, i) {
        super(e, t, r, i),
          this.provider = n,
          this.authWindow = null,
          this.pollId = null,
          rn.currentPopupAction && rn.currentPopupAction.cancel(),
          rn.currentPopupAction = this
      }
      async executeNotNull() {
        const e = await this.execute();
        return v(e, this.auth, "internal-error"),
          e
      }
      async onExecution() {
        b(1 === this.filter.length, "Popup operations only handle one event");
        const e = At();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e),
          this.authWindow.associatedEvent = e,
          this.resolver._originValidation(this.auth).catch((e => {
            this.reject(e)
          }
          )),
          this.resolver._isIframeWebStorageSupported(this.auth, (e => {
            e || this.reject(p(this.auth, "web-storage-unsupported"))
          }
          )),
          this.pollUserCancellation()
      }
      get eventId() {
        var e;
        return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
      }
      cancel() {
        this.reject(p(this.auth, "cancelled-popup-request"))
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(),
          this.pollId && window.clearTimeout(this.pollId),
          this.authWindow = null,
          this.pollId = null,
          rn.currentPopupAction = null
      }
      pollUserCancellation() {
        const e = () => {
          var t, n;
          (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) ? this.pollId = window.setTimeout((() => {
            this.pollId = null,
              this.reject(p(this.auth, "popup-closed-by-user"))
          }
          ), 8e3) : this.pollId = window.setTimeout(e, nn.get())
        }
          ;
        e()
      }
    }
    rn.currentPopupAction = null;
    const on = new Map;
    class sn extends tn {
      constructor(e, t, n = !1) {
        super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n),
          this.eventId = null
      }
      async execute() {
        let e = on.get(this.auth._key());
        if (!e) {
          try {
            const t = await async function (e, t) {
              const n = un(t)
                , r = cn(e);
              if (!(await r._isAvailable()))
                return !1;
              const i = "true" === await r._get(n);
              return await r._remove(n),
                i
            }(this.resolver, this.auth) ? await super.execute() : null;
            e = () => Promise.resolve(t)
          } catch (t) {
            e = () => Promise.reject(t)
          }
          on.set(this.auth._key(), e)
        }
        return this.bypassAuthState || on.set(this.auth._key(), (() => Promise.resolve(null))),
          e()
      }
      async onAuthEvent(e) {
        if ("signInViaRedirect" === e.type)
          return super.onAuthEvent(e);
        if ("unknown" !== e.type) {
          if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t)
              return this.user = t,
                super.onAuthEvent(e);
            this.resolve(null)
          }
        } else
          this.resolve(null)
      }
      async onExecution() { }
      cleanUp() { }
    }
    function an(e, t) {
      on.set(e._key(), t)
    }
    function cn(e) {
      return ee(e._redirectPersistence)
    }
    function un(e) {
      return re("pendingRedirect", e.config.apiKey, e.name)
    }
    async function ln(e, t, n = !1) {
      if ((0,
        r.rh)(e.app))
        return Promise.reject(g(e));
      const i = ye(e)
        , o = Jt(i, t)
        , s = new sn(i, o, n)
        , a = await s.execute();
      return a && !n && (delete a.user._redirectEventId,
        await i._persistUserIfCurrent(a.user),
        await i._setRedirectUser(null, t)),
        a
    }
    class dn {
      constructor(e) {
        this.auth = e,
          this.cachedEventUids = new Set,
          this.consumers = new Set,
          this.queuedRedirectEvent = null,
          this.hasHandledPotentialRedirect = !1,
          this.lastProcessedEventTime = Date.now()
      }
      registerConsumer(e) {
        this.consumers.add(e),
          this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e),
            this.saveEventToCache(this.queuedRedirectEvent),
            this.queuedRedirectEvent = null)
      }
      unregisterConsumer(e) {
        this.consumers.delete(e)
      }
      onEvent(e) {
        if (this.hasEventBeenHandled(e))
          return !1;
        let t = !1;
        return this.consumers.forEach((n => {
          this.isEventForConsumer(e, n) && (t = !0,
            this.sendToConsumer(e, n),
            this.saveEventToCache(e))
        }
        )),
          this.hasHandledPotentialRedirect || !function (e) {
            switch (e.type) {
              case "signInViaRedirect":
              case "linkViaRedirect":
              case "reauthViaRedirect":
                return !0;
              case "unknown":
                return fn(e);
              default:
                return !1
            }
          }(e) || (this.hasHandledPotentialRedirect = !0,
            t || (this.queuedRedirectEvent = e,
              t = !0)),
          t
      }
      sendToConsumer(e, t) {
        var n;
        if (e.error && !fn(e)) {
          const r = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
          t.onError(p(this.auth, r))
        } else
          t.onAuthEvent(e)
      }
      isEventForConsumer(e, t) {
        const n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
        return t.filter.includes(e.type) && n
      }
      hasEventBeenHandled(e) {
        return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(),
          this.cachedEventUids.has(hn(e))
      }
      saveEventToCache(e) {
        this.cachedEventUids.add(hn(e)),
          this.lastProcessedEventTime = Date.now()
      }
    }
    function hn(e) {
      return [e.type, e.eventId, e.sessionId, e.tenantId].filter((e => e)).join("-")
    }
    function fn({ type: e, error: t }) {
      return "unknown" === e && "auth/no-auth-event" === (null === t || void 0 === t ? void 0 : t.code)
    }
    const pn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
      , mn = /^https?/;
    async function gn(e) {
      if (e.config.emulator)
        return;
      const { authorizedDomains: t } = await async function (e, t = {}) {
        return N(e, "GET", "/v1/projects", t)
      }(e);
      for (const r of t)
        try {
          if (_n(r))
            return
        } catch (n) { }
      f(e, "unauthorized-domain")
    }
    function _n(e) {
      const t = E()
        , { protocol: n, hostname: r } = new URL(t);
      if (e.startsWith("chrome-extension://")) {
        const i = new URL(e);
        return "" === i.hostname && "" === r ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && i.hostname === r
      }
      if (!mn.test(n))
        return !1;
      if (pn.test(e))
        return r === e;
      const i = e.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r)
    }
    const vn = new T(3e4, 6e4);
    function yn() {
      const e = Dt().___jsl;
      if (null === e || void 0 === e ? void 0 : e.H)
        for (const t of Object.keys(e.H))
          if (e.H[t].r = e.H[t].r || [],
            e.H[t].L = e.H[t].L || [],
            e.H[t].r = [...e.H[t].L],
            e.CP)
            for (let n = 0; n < e.CP.length; n++)
              e.CP[n] = null
    }
    function bn(e) {
      return new Promise(((t, n) => {
        var r, i, o;
        function s() {
          yn(),
            gapi.load("gapi.iframes", {
              callback: () => {
                t(gapi.iframes.getContext())
              }
              ,
              ontimeout: () => {
                yn(),
                  n(p(e, "network-request-failed"))
              }
              ,
              timeout: vn.get()
            })
        }
        if (null === (i = null === (r = Dt().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === i ? void 0 : i.Iframe)
          t(gapi.iframes.getContext());
        else {
          if (!(null === (o = Dt().gapi) || void 0 === o ? void 0 : o.load)) {
            const t = Se("iframefcb");
            return Dt()[t] = () => {
              gapi.load ? s() : n(p(e, "network-request-failed"))
            }
              ,
              we(`${Ee.gapiScript}?onload=${t}`).catch((e => n(e)))
          }
          s()
        }
      }
      )).catch((e => {
        throw En = null,
        e
      }
      ))
    }
    let En = null;
    const wn = new T(5e3, 15e3)
      , Sn = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
      }
      , Tn = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
    function Rn(e) {
      const t = e.config;
      v(t.authDomain, e, "auth-domain-config-required");
      const n = t.emulator ? R(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`
        , o = {
          apiKey: t.apiKey,
          appName: e.name,
          v: r.Jn
        }
        , s = Tn.get(e.config.apiHost);
      s && (o.eid = s);
      const a = e._getFrameworks();
      return a.length && (o.fw = a.join(",")),
        `${n}?${(0,
          i.xO)(o).slice(1)}`
    }
    async function In(e) {
      const t = await function (e) {
        return En = En || bn(e),
          En
      }(e)
        , n = Dt().gapi;
      return v(n, e, "internal-error"),
        t.open({
          where: document.body,
          url: Rn(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: Sn,
          dontclear: !0
        }, (t => new Promise((async (n, r) => {
          await t.restyle({
            setHideOnLeave: !1
          });
          const i = p(e, "network-request-failed")
            , o = Dt().setTimeout((() => {
              r(i)
            }
            ), wn.get());
          function s() {
            Dt().clearTimeout(o),
              n(t)
          }
          t.ping(s).then(s, (() => {
            r(i)
          }
          ))
        }
        ))))
    }
    const On = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
    };
    class kn {
      constructor(e) {
        this.window = e,
          this.associatedEvent = null
      }
      close() {
        if (this.window)
          try {
            this.window.close()
          } catch (e) { }
      }
    }
    function Cn(e, t, n, r = 500, o = 600) {
      const s = Math.max((window.screen.availHeight - o) / 2, 0).toString()
        , a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
      let c = "";
      const u = Object.assign(Object.assign({}, On), {
        width: r.toString(),
        height: o.toString(),
        top: s,
        left: a
      })
        , l = (0,
          i.z$)().toLowerCase();
      n && (c = ce(l) ? "_blank" : n),
        se(l) && (t = t || "http://localhost",
          u.scrollbars = "yes");
      const d = Object.entries(u).reduce(((e, [t, n]) => `${e}${t}=${n},`), "");
      if (function (e = (0,
        i.z$)()) {
        var t;
        return fe(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
      }(l) && "_self" !== c)
        return function (e, t) {
          const n = document.createElement("a");
          n.href = e,
            n.target = t;
          const r = document.createEvent("MouseEvent");
          r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
            n.dispatchEvent(r)
        }(t || "", c),
          new kn(null);
      const h = window.open(t || "", c, d);
      v(h, e, "popup-blocked");
      try {
        h.focus()
      } catch (f) { }
      return new kn(h)
    }
    const Nn = "__/auth/handler"
      , An = "emulator/auth/handler"
      , Pn = encodeURIComponent("fac");
    async function Dn(e, t, n, o, s, a) {
      v(e.config.authDomain, e, "auth-domain-config-required"),
        v(e.config.apiKey, e, "invalid-api-key");
      const c = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: o,
        v: r.Jn,
        eventId: s
      };
      if (t instanceof ze) {
        t.setDefaultLanguage(e.languageCode),
          c.providerId = t.providerId || "",
          (0,
            i.xb)(t.getCustomParameters()) || (c.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [e, t] of Object.entries(a || {}))
          c[e] = t
      }
      if (t instanceof Ke) {
        const e = t.getScopes().filter((e => "" !== e));
        e.length > 0 && (c.scopes = e.join(","))
      }
      e.tenantId && (c.tid = e.tenantId);
      const u = c;
      for (const r of Object.keys(u))
        void 0 === u[r] && delete u[r];
      const l = await e._getAppCheckToken()
        , d = l ? `#${Pn}=${encodeURIComponent(l)}` : "";
      return `${function ({ config: e }) {
        if (!e.emulator)
          return `https://${e.authDomain}/${Nn}`;
        return R(e, An)
      }(e)}?${(0,
        i.xO)(u).slice(1)}${d}`
    }
    const xn = "webStorageSupport";
    const Ln = class {
      constructor() {
        this.eventManagers = {},
          this.iframes = {},
          this.originValidationPromises = {},
          this._redirectPersistence = Ct,
          this._completeRedirectFn = ln,
          this._overrideRedirectResult = an
      }
      async _openPopup(e, t, n, r) {
        var i;
        b(null === (i = this.eventManagers[e._key()]) || void 0 === i ? void 0 : i.manager, "_initialize() not called before _openPopup()");
        return Cn(e, await Dn(e, t, n, E(), r), At())
      }
      async _openRedirect(e, t, n, r) {
        await this._originValidation(e);
        return function (e) {
          Dt().location.href = e
        }(await Dn(e, t, n, E(), r)),
          new Promise((() => { }
          ))
      }
      _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
          const { manager: e, promise: n } = this.eventManagers[t];
          return e ? Promise.resolve(e) : (b(n, "If manager is not set, promise should be"),
            n)
        }
        const n = this.initAndGetManager(e);
        return this.eventManagers[t] = {
          promise: n
        },
          n.catch((() => {
            delete this.eventManagers[t]
          }
          )),
          n
      }
      async initAndGetManager(e) {
        const t = await In(e)
          , n = new dn(e);
        return t.register("authEvent", (t => {
          v(null === t || void 0 === t ? void 0 : t.authEvent, e, "invalid-auth-event");
          return {
            status: n.onEvent(t.authEvent) ? "ACK" : "ERROR"
          }
        }
        ), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
          this.eventManagers[e._key()] = {
            manager: n
          },
          this.iframes[e._key()] = t,
          n
      }
      _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(xn, {
          type: xn
        }, (n => {
          var r;
          const i = null === (r = null === n || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.webStorageSupport;
          void 0 !== i && t(!!i),
            f(e, "internal-error")
        }
        ), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
      }
      _originValidation(e) {
        const t = e._key();
        return this.originValidationPromises[t] || (this.originValidationPromises[t] = gn(e)),
          this.originValidationPromises[t]
      }
      get _shouldInitProactively() {
        return pe() || ae() || fe()
      }
    }
      ;
    var Un = "@firebase/auth"
      , jn = "1.8.1";
    class Bn {
      constructor(e) {
        this.auth = e,
          this.internalListeners = new Map
      }
      getUid() {
        var e;
        return this.assertAuthConfigured(),
          (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
      }
      async getToken(e) {
        if (this.assertAuthConfigured(),
          await this.auth._initializationPromise,
          !this.auth.currentUser)
          return null;
        return {
          accessToken: await this.auth.currentUser.getIdToken(e)
        }
      }
      addAuthTokenListener(e) {
        if (this.assertAuthConfigured(),
          this.internalListeners.has(e))
          return;
        const t = this.auth.onIdTokenChanged((t => {
          e((null === t || void 0 === t ? void 0 : t.stsTokenManager.accessToken) || null)
        }
        ));
        this.internalListeners.set(e, t),
          this.updateProactiveRefresh()
      }
      removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t && (this.internalListeners.delete(e),
          t(),
          this.updateProactiveRefresh())
      }
      assertAuthConfigured() {
        v(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
      }
    }
    const Mn = (0,
      i.Pz)("authIdTokenMaxAge") || 300;
    let Fn = null;
    function $n(e = (0,
      r.Mq)()) {
      const t = (0,
        r.qX)(e, "auth");
      if (t.isInitialized())
        return t.getImmediate();
      const n = function (e, t) {
        const n = (0,
          r.qX)(e, "auth");
        if (n.isInitialized()) {
          const e = n.getImmediate()
            , r = n.getOptions();
          if ((0,
            i.vZ)(r, null !== t && void 0 !== t ? t : {}))
            return e;
          f(e, "already-initialized")
        }
        return n.initialize({
          options: t
        })
      }(e, {
        popupRedirectResolver: Ln,
        persistence: [Ht, Ot, Ct]
      })
        , o = (0,
          i.Pz)("authTokenSyncURL");
      if (o && "boolean" === typeof isSecureContext && isSecureContext) {
        const e = new URL(o, location.origin);
        if (location.origin === e.origin) {
          const t = (s = e.toString(),
            async e => {
              const t = e && await e.getIdTokenResult()
                , n = t && ((new Date).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
              if (n && n > Mn)
                return;
              const r = null === t || void 0 === t ? void 0 : t.token;
              Fn !== r && (Fn = r,
                await fetch(s, {
                  method: r ? "POST" : "DELETE",
                  headers: r ? {
                    Authorization: `Bearer ${r}`
                  } : {}
                }))
            }
          );
          !function (e, t, n) {
            (0,
              i.m9)(e).beforeAuthStateChanged(t, n)
          }(n, t, (() => t(n.currentUser))),
            function (e, t, n, r) {
              (0,
                i.m9)(e).onIdTokenChanged(t, n, r)
            }(n, (e => t(e)))
        }
      }
      var s;
      const a = (0,
        i.q4)("auth");
      return a && Ae(n, `http://${a}`),
        n
    }
    var Gn;
    Ee = {
      loadJS: e => new Promise(((t, n) => {
        const r = document.createElement("script");
        r.setAttribute("src", e),
          r.onload = t,
          r.onerror = e => {
            const t = p("internal-error");
            t.customData = e,
              n(t)
          }
          ,
          r.type = "text/javascript",
          r.charset = "UTF-8",
          function () {
            var e, t;
            return null !== (t = null === (e = document.getElementsByTagName("head")) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : document
          }().appendChild(r)
      }
      )),
      gapiScript: "https://apis.google.com/js/api.js",
      recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
      recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
    },
      Gn = "Browser",
      (0,
        r.Xd)(new a.wA("auth", ((e, { options: t }) => {
          const n = e.getProvider("app").getImmediate()
            , r = e.getProvider("heartbeat")
            , i = e.getProvider("app-check-internal")
            , { apiKey: o, authDomain: s } = n.options;
          v(o && !o.includes(":"), "invalid-api-key", {
            appName: n.name
          });
          const a = {
            apiKey: o,
            authDomain: s,
            clientPlatform: Gn,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: me(Gn)
          }
            , c = new ve(n, r, i, a);
          return function (e, t) {
            const n = (null === t || void 0 === t ? void 0 : t.persistence) || []
              , r = (Array.isArray(n) ? n : [n]).map(ee);
            (null === t || void 0 === t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap),
              e._initializeWithPersistence(r, null === t || void 0 === t ? void 0 : t.popupRedirectResolver)
          }(c, t),
            c
        }
        ), "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e, t, n) => {
          e.getProvider("auth-internal").initialize()
        }
        ))),
      (0,
        r.Xd)(new a.wA("auth-internal", (e => (e => new Bn(e))(ye(e.getProvider("auth").getImmediate()))), "PRIVATE").setInstantiationMode("EXPLICIT")),
      (0,
        r.KN)(Un, jn, function (e) {
          switch (e) {
            case "Node":
              return "node";
            case "ReactNative":
              return "rn";
            case "Worker":
              return "webworker";
            case "Cordova":
              return "cordova";
            case "WebExtension":
              return "web-extension";
            default:
              return
          }
        }(Gn)),
      (0,
        r.KN)(Un, jn, "esm2017")
  },
  29: function (e, t, n) {
    "use strict";
    function r(e, t, n, r, i, o, s) {
      try {
        var a = e[o](s)
          , c = a.value
      } catch (u) {
        return void n(u)
      }
      a.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    function i(e) {
      return function () {
        var t = this
          , n = arguments;
        return new Promise((function (i, o) {
          var s = e.apply(t, n);
          function a(e) {
            r(s, i, o, a, c, "next", e)
          }
          function c(e) {
            r(s, i, o, a, c, "throw", e)
          }
          a(void 0)
        }
        ))
      }
    }
    n.d(t, {
      Z: function () {
        return i
      }
    })
  },
  9499: function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }
    n.d(t, {
      Z: function () {
        return r
      }
    })
  },
  6687: function (e, t, n) {
    "use strict";
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r
    }
    function i(e) {
      return function (e) {
        if (Array.isArray(e))
          return r(e)
      }(e) || function (e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
          return Array.from(e)
      }(e) || function (e, t) {
        if (e) {
          if ("string" === typeof e)
            return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }
    n.d(t, {
      Z: function () {
        return i
      }
    })
  },
  8100: function (e, t, n) {
    "use strict";
    n.d(t, {
      J$: function () {
        return J
      },
      JG: function () {
        return G
      },
      ZP: function () {
        return Z
      }
    });
    var r = n(7294);
    function i(e, t, n, r) {
      return new (n || (n = Promise))((function (i, o) {
        function s(e) {
          try {
            c(r.next(e))
          } catch (t) {
            o(t)
          }
        }
        function a(e) {
          try {
            c(r.throw(e))
          } catch (t) {
            o(t)
          }
        }
        function c(e) {
          var t;
          e.done ? i(e.value) : (t = e.value,
            t instanceof n ? t : new n((function (e) {
              e(t)
            }
            ))).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
      }
      ))
    }
    function o(e, t) {
      var n, r, i, o, s = {
        label: 0,
        sent: function () {
          if (1 & i[0])
            throw i[1];
          return i[1]
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      },
        "function" === typeof Symbol && (o[Symbol.iterator] = function () {
          return this
        }
        ),
        o;
      function a(o) {
        return function (a) {
          return function (o) {
            if (n)
              throw new TypeError("Generator is already executing.");
            for (; s;)
              try {
                if (n = 1,
                  r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                    0) : r.next) && !(i = i.call(r, o[1])).done)
                  return i;
                switch (r = 0,
                i && (o = [2 & o[0], i.value]),
                o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return s.label++,
                    {
                      value: o[1],
                      done: !1
                    };
                  case 5:
                    s.label++,
                      r = o[1],
                      o = [0];
                    continue;
                  case 7:
                    o = s.ops.pop(),
                      s.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                      s.label = o[1];
                      break
                    }
                    if (6 === o[0] && s.label < i[1]) {
                      s.label = i[1],
                        i = o;
                      break
                    }
                    if (i && s.label < i[2]) {
                      s.label = i[2],
                        s.ops.push(o);
                      break
                    }
                    i[2] && s.ops.pop(),
                      s.trys.pop();
                    continue
                }
                o = t.call(e, s)
              } catch (a) {
                o = [6, a],
                  r = 0
              } finally {
                n = i = 0
              }
            if (5 & o[0])
              throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            }
          }([o, a])
        }
      }
    }
    var s, a = function () { }, c = a(), u = Object, l = function (e) {
      return e === c
    }, d = function (e) {
      return "function" == typeof e
    }, h = function (e, t) {
      return u.assign({}, e, t)
    }, f = "undefined", p = function () {
      return typeof window != f
    }, m = new WeakMap, g = 0, _ = function (e) {
      var t, n, r = typeof e, i = e && e.constructor, o = i == Date;
      if (u(e) !== e || o || i == RegExp)
        t = o ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
      else {
        if (t = m.get(e))
          return t;
        if (t = ++g + "~",
          m.set(e, t),
          i == Array) {
          for (t = "@",
            n = 0; n < e.length; n++)
            t += _(e[n]) + ",";
          m.set(e, t)
        }
        if (i == u) {
          t = "#";
          for (var s = u.keys(e).sort(); !l(n = s.pop());)
            l(e[n]) || (t += n + ":" + _(e[n]) + ",");
          m.set(e, t)
        }
      }
      return t
    }, v = !0, y = p(), b = typeof document != f, E = y && window.addEventListener ? window.addEventListener.bind(window) : a, w = b ? document.addEventListener.bind(document) : a, S = y && window.removeEventListener ? window.removeEventListener.bind(window) : a, T = b ? document.removeEventListener.bind(document) : a, R = {
      isOnline: function () {
        return v
      },
      isVisible: function () {
        var e = b && document.visibilityState;
        return l(e) || "hidden" !== e
      }
    }, I = {
      initFocus: function (e) {
        return w("visibilitychange", e),
          E("focus", e),
          function () {
            T("visibilitychange", e),
              S("focus", e)
          }
      },
      initReconnect: function (e) {
        var t = function () {
          v = !0,
            e()
        }
          , n = function () {
            v = !1
          };
        return E("online", t),
          E("offline", n),
          function () {
            S("online", t),
              S("offline", n)
          }
      }
    }, O = !p() || "Deno" in window, k = function (e) {
      return p() && typeof window.requestAnimationFrame != f ? window.requestAnimationFrame(e) : setTimeout(e, 1)
    }, C = O ? r.useEffect : r.useLayoutEffect, N = "undefined" !== typeof navigator && navigator.connection, A = !O && N && (["slow-2g", "2g"].includes(N.effectiveType) || N.saveData), P = function (e) {
      if (d(e))
        try {
          e = e()
        } catch (n) {
          e = ""
        }
      var t = [].concat(e);
      return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? _(e) : "", t, e ? "$swr$" + e : ""]
    }, D = new WeakMap, x = function (e, t, n, r, i, o, s) {
      void 0 === s && (s = !0);
      var a = D.get(e)
        , c = a[0]
        , u = a[1]
        , l = a[3]
        , d = c[t]
        , h = u[t];
      if (s && h)
        for (var f = 0; f < h.length; ++f)
          h[f](n, r, i);
      return o && (delete l[t],
        d && d[0]) ? d[0](2).then((function () {
          return e.get(t)
        }
        )) : e.get(t)
    }, L = 0, U = function () {
      return ++L
    }, j = function () {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      return i(void 0, void 0, void 0, (function () {
        var t, n, r, i, s, a, u, f, p, m, g, _, v, y, b, E, w, S, T, R, I;
        return o(this, (function (o) {
          switch (o.label) {
            case 0:
              if (t = e[0],
                n = e[1],
                r = e[2],
                i = e[3],
                a = !!l((s = "boolean" === typeof i ? {
                  revalidate: i
                } : i || {}).populateCache) || s.populateCache,
                u = !1 !== s.revalidate,
                f = !1 !== s.rollbackOnError,
                p = s.optimisticData,
                m = P(n),
                g = m[0],
                _ = m[2],
                !g)
                return [2];
              if (v = D.get(t),
                y = v[2],
                e.length < 3)
                return [2, x(t, g, t.get(g), c, c, u, !0)];
              if (b = r,
                w = U(),
                y[g] = [w, 0],
                S = !l(p),
                T = t.get(g),
                S && (R = d(p) ? p(T) : p,
                  t.set(g, R),
                  x(t, g, R)),
                d(b))
                try {
                  b = b(t.get(g))
                } catch (O) {
                  E = O
                }
              return b && d(b.then) ? [4, b.catch((function (e) {
                E = e
              }
              ))] : [3, 2];
            case 1:
              if (b = o.sent(),
                w !== y[g][0]) {
                if (E)
                  throw E;
                return [2, b]
              }
              E && S && f && (a = !0,
                b = T,
                t.set(g, T)),
                o.label = 2;
            case 2:
              return a && (E || (d(a) && (b = a(b, T)),
                t.set(g, b)),
                t.set(_, h(t.get(_), {
                  error: E
                }))),
                y[g][1] = U(),
                [4, x(t, g, b, E, c, u, !!a)];
            case 3:
              if (I = o.sent(),
                E)
                throw E;
              return [2, a ? I : b]
          }
        }
        ))
      }
      ))
    }, B = function (e, t) {
      for (var n in e)
        e[n][0] && e[n][0](t)
    }, M = function (e, t) {
      if (!D.has(e)) {
        var n = h(I, t)
          , r = {}
          , i = j.bind(c, e)
          , o = a;
        if (D.set(e, [r, {}, {}, {}, i]),
          !O) {
          var s = n.initFocus(setTimeout.bind(c, B.bind(c, r, 0)))
            , u = n.initReconnect(setTimeout.bind(c, B.bind(c, r, 1)));
          o = function () {
            s && s(),
              u && u(),
              D.delete(e)
          }
        }
        return [e, i, o]
      }
      return [e, D.get(e)[4]]
    }, F = M(new Map), $ = F[0], G = F[1], Y = h({
      onLoadingSlow: a,
      onSuccess: a,
      onError: a,
      onErrorRetry: function (e, t, n, r, i) {
        var o = n.errorRetryCount
          , s = i.retryCount
          , a = ~~((Math.random() + .5) * (1 << (s < 8 ? s : 8))) * n.errorRetryInterval;
        !l(o) && s > o || setTimeout(r, a, i)
      },
      onDiscarded: a,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: A ? 1e4 : 5e3,
      focusThrottleInterval: 5e3,
      dedupingInterval: 2e3,
      loadingTimeout: A ? 5e3 : 3e3,
      compare: function (e, t) {
        return _(e) == _(t)
      },
      isPaused: function () {
        return !1
      },
      cache: $,
      mutate: G,
      fallback: {}
    }, R), H = function (e, t) {
      var n = h(e, t);
      if (t) {
        var r = e.use
          , i = e.fallback
          , o = t.use
          , s = t.fallback;
        r && o && (n.use = r.concat(o)),
          i && s && (n.fallback = h(i, s))
      }
      return n
    }, W = (0,
      r.createContext)({}), q = function (e) {
        return d(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
      }, V = function () {
        return h(Y, (0,
          r.useContext)(W))
      }, z = function (e, t, n) {
        var r = t[e] || (t[e] = []);
        return r.push(n),
          function () {
            var e = r.indexOf(n);
            e >= 0 && (r[e] = r[r.length - 1],
              r.pop())
          }
      }, K = {
        dedupe: !0
      }, J = u.defineProperty((function (e) {
        var t = e.value
          , n = H((0,
            r.useContext)(W), t)
          , i = t && t.provider
          , o = (0,
            r.useState)((function () {
              return i ? M(i(n.cache || $), t) : c
            }
            ))[0];
        return o && (n.cache = o[0],
          n.mutate = o[1]),
          C((function () {
            return o ? o[2] : c
          }
          ), []),
          (0,
            r.createElement)(W.Provider, h(e, {
              value: n
            }))
      }
      ), "default", {
        value: Y
      }), Z = (s = function (e, t, n) {
        var s = n.cache
          , a = n.compare
          , u = n.fallbackData
          , f = n.suspense
          , p = n.revalidateOnMount
          , m = n.refreshInterval
          , g = n.refreshWhenHidden
          , _ = n.refreshWhenOffline
          , v = D.get(s)
          , y = v[0]
          , b = v[1]
          , E = v[2]
          , w = v[3]
          , S = P(e)
          , T = S[0]
          , R = S[1]
          , I = S[2]
          , N = (0,
            r.useRef)(!1)
          , A = (0,
            r.useRef)(!1)
          , L = (0,
            r.useRef)(T)
          , B = (0,
            r.useRef)(t)
          , M = (0,
            r.useRef)(n)
          , F = function () {
            return M.current
          }
          , $ = function () {
            return F().isVisible() && F().isOnline()
          }
          , G = function (e) {
            return s.set(I, h(s.get(I), e))
          }
          , Y = s.get(T)
          , H = l(u) ? n.fallback[T] : u
          , W = l(Y) ? H : Y
          , q = s.get(I) || {}
          , V = q.error
          , J = !N.current
          , Z = function () {
            return J && !l(p) ? p : !F().isPaused() && (f ? !l(W) && n.revalidateIfStale : l(W) || n.revalidateIfStale)
          }
          , X = !(!T || !t) && (!!q.isValidating || J && Z())
          , Q = function (e, t) {
            var n = (0,
              r.useState)({})[1]
              , i = (0,
                r.useRef)(e)
              , o = (0,
                r.useRef)({
                  data: !1,
                  error: !1,
                  isValidating: !1
                })
              , s = (0,
                r.useCallback)((function (e) {
                  var r = !1
                    , s = i.current;
                  for (var a in e) {
                    var c = a;
                    s[c] !== e[c] && (s[c] = e[c],
                      o.current[c] && (r = !0))
                  }
                  r && !t.current && n({})
                }
                ), []);
            return C((function () {
              i.current = e
            }
            )),
              [i, o.current, s]
          }({
            data: W,
            error: V,
            isValidating: X
          }, A)
          , ee = Q[0]
          , te = Q[1]
          , ne = Q[2]
          , re = (0,
            r.useCallback)((function (e) {
              return i(void 0, void 0, void 0, (function () {
                var t, r, i, u, h, f, p, m, g, _, v, y, b;
                return o(this, (function (o) {
                  switch (o.label) {
                    case 0:
                      if (t = B.current,
                        !T || !t || A.current || F().isPaused())
                        return [2, !1];
                      u = !0,
                        h = e || {},
                        f = !w[T] || !h.dedupe,
                        p = function () {
                          return !A.current && T === L.current && N.current
                        }
                        ,
                        m = function () {
                          var e = w[T];
                          e && e[1] === i && delete w[T]
                        }
                        ,
                        g = {
                          isValidating: !1
                        },
                        _ = function () {
                          G({
                            isValidating: !1
                          }),
                            p() && ne(g)
                        }
                        ,
                        G({
                          isValidating: !0
                        }),
                        ne({
                          isValidating: !0
                        }),
                        o.label = 1;
                    case 1:
                      return o.trys.push([1, 3, , 4]),
                        f && (x(s, T, ee.current.data, ee.current.error, !0),
                          n.loadingTimeout && !s.get(T) && setTimeout((function () {
                            u && p() && F().onLoadingSlow(T, n)
                          }
                          ), n.loadingTimeout),
                          w[T] = [t.apply(void 0, R), U()]),
                        b = w[T],
                        r = b[0],
                        i = b[1],
                        [4, r];
                    case 2:
                      return r = o.sent(),
                        f && setTimeout(m, n.dedupingInterval),
                        w[T] && w[T][1] === i ? (G({
                          error: c
                        }),
                          g.error = c,
                          v = E[T],
                          !l(v) && (i <= v[0] || i <= v[1] || 0 === v[1]) ? (_(),
                            f && p() && F().onDiscarded(T),
                            [2, !1]) : (a(ee.current.data, r) ? g.data = ee.current.data : g.data = r,
                              a(s.get(T), r) || s.set(T, r),
                              f && p() && F().onSuccess(r, T, n),
                              [3, 4])) : (f && p() && F().onDiscarded(T),
                                [2, !1]);
                    case 3:
                      return y = o.sent(),
                        m(),
                        F().isPaused() || (G({
                          error: y
                        }),
                          g.error = y,
                          f && p() && (F().onError(y, T, n),
                            ("boolean" === typeof n.shouldRetryOnError && n.shouldRetryOnError || d(n.shouldRetryOnError) && n.shouldRetryOnError(y)) && $() && F().onErrorRetry(y, T, n, re, {
                              retryCount: (h.retryCount || 0) + 1,
                              dedupe: !0
                            }))),
                        [3, 4];
                    case 4:
                      return u = !1,
                        _(),
                        p() && f && x(s, T, g.data, g.error, !1),
                        [2, !0]
                  }
                }
                ))
              }
              ))
            }
            ), [T])
          , ie = (0,
            r.useCallback)(j.bind(c, s, (function () {
              return L.current
            }
            )), []);
        if (C((function () {
          B.current = t,
            M.current = n
        }
        )),
          C((function () {
            if (T) {
              var e = T !== L.current
                , t = re.bind(c, K)
                , n = 0
                , r = z(T, b, (function (e, t, n) {
                  ne(h({
                    error: t,
                    isValidating: n
                  }, a(ee.current.data, e) ? c : {
                    data: e
                  }))
                }
                ))
                , i = z(T, y, (function (e) {
                  if (0 == e) {
                    var r = Date.now();
                    F().revalidateOnFocus && r > n && $() && (n = r + F().focusThrottleInterval,
                      t())
                  } else if (1 == e)
                    F().revalidateOnReconnect && $() && t();
                  else if (2 == e)
                    return re()
                }
                ));
              return A.current = !1,
                L.current = T,
                N.current = !0,
                e && ne({
                  data: W,
                  error: V,
                  isValidating: X
                }),
                Z() && (l(W) || O ? t() : k(t)),
                function () {
                  A.current = !0,
                    r(),
                    i()
                }
            }
          }
          ), [T, re]),
          C((function () {
            var e;
            function t() {
              var t = d(m) ? m(W) : m;
              t && -1 !== e && (e = setTimeout(n, t))
            }
            function n() {
              ee.current.error || !g && !F().isVisible() || !_ && !F().isOnline() ? t() : re(K).then(t)
            }
            return t(),
              function () {
                e && (clearTimeout(e),
                  e = -1)
              }
          }
          ), [m, g, _, re]),
          (0,
            r.useDebugValue)(W),
          f && l(W) && T)
          throw B.current = t,
          M.current = n,
          A.current = !1,
          l(V) ? re(K) : V;
        return {
          mutate: ie,
          get data() {
            return te.data = !0,
              W
          },
          get error() {
            return te.error = !0,
              V
          },
          get isValidating() {
            return te.isValidating = !0,
              X
          }
        }
      }
        ,
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = V()
            , r = q(e)
            , i = r[0]
            , o = r[1]
            , a = r[2]
            , c = H(n, a)
            , u = s
            , l = c.use;
          if (l)
            for (var d = l.length; d-- > 0;)
              u = l[d](u);
          return u(i, o || c.fetcher, c)
        }
      )
  }
}, function (e) {
  var t = function (t) {
    return e(e.s = t)
  };
  e.O(0, [9774, 179], (function () {
    return t(4603),
      t(6840),
      t(9898)
  }
  ));
  var n = e.O();
  _N_E = n
}
]);
