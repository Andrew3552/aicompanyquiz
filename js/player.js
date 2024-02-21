/*!@vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js*/ !(function (
  e,
  t
) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (((e = "undefined" != typeof globalThis ? globalThis : e || self).Vimeo =
        e.Vimeo || {}),
      (e.Vimeo.Player = t()));
})(this, function () {
  "use strict";
  function e(e, t) {
    var n,
      r = Object.keys(e);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(e)),
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function t(t) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? e(Object(r), !0).forEach(function (e) {
            c(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : e(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function n() {
    n = function () {
      return e;
    };
    var e = {},
      t = Object.prototype,
      r = t.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      u = i.asyncIterator || "@@asyncIterator",
      c = i.toStringTag || "@@toStringTag";
    function l(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      l({}, "");
    } catch (t) {
      l = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(e, t, n, r) {
      var i,
        a,
        u,
        c,
        l = t && t.prototype instanceof h ? t : h,
        s = Object.create(l.prototype),
        p = new P(r || []);
      return (
        o(s, "_invoke", {
          value:
            ((i = e),
            (a = n),
            (u = p),
            (c = "suspendedStart"),
            function (e, t) {
              if ("executing" === c)
                throw new Error("Generator is already running");
              if ("completed" === c) {
                if ("throw" === e) throw t;
                return { value: void 0, done: !0 };
              }
              for (u.method = e, u.arg = t; ; ) {
                var n = u.delegate;
                if (n) {
                  var r = (function e(t, n) {
                    var r = n.method,
                      o = t.iterator[r];
                    if (void 0 === o)
                      return (
                        (n.delegate = null),
                        ("throw" === r &&
                          t.iterator.return &&
                          ((n.method = "return"),
                          (n.arg = void 0),
                          e(t, n),
                          "throw" === n.method)) ||
                          ("return" !== r &&
                            ((n.method = "throw"),
                            (n.arg = new TypeError(
                              "The iterator does not provide a '" +
                                r +
                                "' method"
                            )))),
                        d
                      );
                    var i = f(o, t.iterator, n.arg);
                    if ("throw" === i.type)
                      return (
                        (n.method = "throw"),
                        (n.arg = i.arg),
                        (n.delegate = null),
                        d
                      );
                    var a = i.arg;
                    return a
                      ? a.done
                        ? ((n[t.resultName] = a.value),
                          (n.next = t.nextLoc),
                          "return" !== n.method &&
                            ((n.method = "next"), (n.arg = void 0)),
                          (n.delegate = null),
                          d)
                        : a
                      : ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "iterator result is not an object"
                        )),
                        (n.delegate = null),
                        d);
                  })(n, u);
                  if (r) {
                    if (r === d) continue;
                    return r;
                  }
                }
                if ("next" === u.method) u.sent = u._sent = u.arg;
                else if ("throw" === u.method) {
                  if ("suspendedStart" === c) throw ((c = "completed"), u.arg);
                  u.dispatchException(u.arg);
                } else "return" === u.method && u.abrupt("return", u.arg);
                c = "executing";
                var o = f(i, a, u);
                if ("normal" === o.type) {
                  if (
                    ((c = u.done ? "completed" : "suspendedYield"), o.arg === d)
                  )
                    continue;
                  return { value: o.arg, done: u.done };
                }
                "throw" === o.type &&
                  ((c = "completed"), (u.method = "throw"), (u.arg = o.arg));
              }
            }),
        }),
        s
      );
    }
    function f(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    e.wrap = s;
    var d = {};
    function h() {}
    function p() {}
    function v() {}
    var y = {};
    l(y, a, function () {
      return this;
    });
    var m = Object.getPrototypeOf,
      g = m && m(m(T([])));
    g && g !== t && r.call(g, a) && (y = g);
    var w = (v.prototype = h.prototype = Object.create(y));
    function b(e) {
      ["next", "throw", "return"].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function k(e, t) {
      var n;
      o(this, "_invoke", {
        value: function (o, i) {
          function a() {
            return new t(function (n, a) {
              !(function n(o, i, a, u) {
                var c = f(e[o], e, i);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    s = l.value;
                  return s && "object" == typeof s && r.call(s, "__await")
                    ? t.resolve(s.__await).then(
                        function (e) {
                          n("next", e, a, u);
                        },
                        function (e) {
                          n("throw", e, a, u);
                        }
                      )
                    : t.resolve(s).then(
                        function (e) {
                          (l.value = e), a(l);
                        },
                        function (e) {
                          return n("throw", e, a, u);
                        }
                      );
                }
                u(c.arg);
              })(o, i, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        },
      });
    }
    function E(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function x(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function P(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(E, this),
        this.reset(!0);
    }
    function T(e) {
      if (e) {
        var t = e[a];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var n = -1,
            o = function t() {
              for (; ++n < e.length; )
                if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
              return (t.value = void 0), (t.done = !0), t;
            };
          return (o.next = o);
        }
      }
      return { next: j };
    }
    function j() {
      return { value: void 0, done: !0 };
    }
    return (
      o(w, "constructor", { value: (p.prototype = v), configurable: !0 }),
      o(v, "constructor", { value: p, configurable: !0 }),
      (p.displayName = l(v, c, "GeneratorFunction")),
      (e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, v)
            : ((e.__proto__ = v), l(e, c, "GeneratorFunction")),
          (e.prototype = Object.create(w)),
          e
        );
      }),
      (e.awrap = function (e) {
        return { __await: e };
      }),
      b(k.prototype),
      l(k.prototype, u, function () {
        return this;
      }),
      (e.AsyncIterator = k),
      (e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var a = new k(s(t, n, r, o), i);
        return e.isGeneratorFunction(n)
          ? a
          : a.next().then(function (e) {
              return e.done ? e.value : a.next();
            });
      }),
      b(w),
      l(w, c, "Generator"),
      l(w, a, function () {
        return this;
      }),
      l(w, "toString", function () {
        return "[object Generator]";
      }),
      (e.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (e.values = T),
      (P.prototype = {
        constructor: P,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(x),
            !e)
          )
            for (var t in this)
              "t" === t.charAt(0) &&
                r.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var t = this;
          function n(n, r) {
            return (
              (a.type = "throw"),
              (a.arg = e),
              (t.next = n),
              r && ((t.method = "next"), (t.arg = void 0)),
              !!r
            );
          }
          for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
            var i = this.tryEntries[o],
              a = i.completion;
            if ("root" === i.tryLoc) return n("end");
            if (i.tryLoc <= this.prev) {
              var u = r.call(i, "catchLoc"),
                c = r.call(i, "finallyLoc");
              if (u && c) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              } else if (u) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
              } else {
                if (!c)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
            var o = this.tryEntries[n];
            if (
              o.tryLoc <= this.prev &&
              r.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e),
            (a.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), d)
              : this.complete(a)
          );
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            d
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), x(n), d;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r,
                o = n.completion;
              return "throw" === o.type && ((r = o.arg), x(n)), r;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, t, n) {
          return (
            (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
            "next" === this.method && (this.arg = void 0),
            d
          );
        },
      }),
      e
    );
  }
  function r(e, t, n, r, o, i, a) {
    try {
      var u = e[i](a),
        c = u.value;
    } catch (e) {
      return void n(e);
    }
    u.done ? t(c) : Promise.resolve(c).then(r, o);
  }
  function o(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (o, i) {
        var a = e.apply(t, n);
        function u(e) {
          r(a, o, i, u, c, "next", e);
        }
        function c(e) {
          r(a, o, i, u, c, "throw", e);
        }
        u(void 0);
      });
    };
  }
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, y(r.key), r);
    }
  }
  function u(e, t, n) {
    return (
      t && a(e.prototype, t),
      n && a(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function c(e, t, n) {
    return (
      (t = y(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function l(e) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function s(e, t) {
    return (s = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function f() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function d(e, t, n) {
    return (d = f()
      ? Reflect.construct.bind()
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r))();
          return n && s(o, n.prototype), o;
        }).apply(null, arguments);
  }
  function h(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (h = function (e) {
      if (
        null === e ||
        ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return d(e, arguments, l(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        s(r, e)
      );
    })(e);
  }
  function p(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function v(e) {
    var t = f();
    return function () {
      var n,
        r = l(e);
      return (function (e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return p(e);
      })(
        this,
        t
          ? ((n = l(this).constructor), Reflect.construct(r, arguments, n))
          : r.apply(this, arguments)
      );
    };
  }
  function y(e) {
    var t = (function (e, t) {
      if ("object" != typeof e || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 === n) return String(e);
      var r = n.call(e, "string");
      if ("object" != typeof r) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(e);
    return "symbol" == typeof t ? t : String(t);
  }
  var m =
    "undefined" != typeof global &&
    "[object global]" === {}.toString.call(global);
  function g(e, t) {
    return 0 === e.indexOf(t.toLowerCase())
      ? e
      : ""
          .concat(t.toLowerCase())
          .concat(e.substr(0, 1).toUpperCase())
          .concat(e.substr(1));
  }
  function w(e) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e);
  }
  function b(e) {
    return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e);
  }
  function k(e) {
    var t,
      n = 0 < arguments.length && void 0 !== e ? e : {},
      r = n.id,
      o = n.url,
      i = r || o;
    if (!i)
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    if (((t = i), !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t))
      return "https://vimeo.com/".concat(i);
    if (w(i)) return i.replace("http:", "https:");
    if (r) throw new TypeError("“".concat(r, "” is not a valid video id."));
    throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
  }
  function E(e, t, n, r, o) {
    var i = 3 < arguments.length && void 0 !== r ? r : "addEventListener",
      a = 4 < arguments.length && void 0 !== o ? o : "removeEventListener",
      u = "string" == typeof t ? [t] : t;
    return (
      u.forEach(function (t) {
        e[i](t, n);
      }),
      {
        cancel: function () {
          return u.forEach(function (t) {
            return e[a](t, n);
          });
        },
      }
    );
  }
  var x = void 0 !== Array.prototype.indexOf,
    P = "undefined" != typeof window && void 0 !== window.postMessage;
  if (!(m || (x && P)))
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  var T,
    j,
    O,
    _,
    M =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function S() {
    if (void 0 === this)
      throw new TypeError("Constructor WeakMap requires 'new'");
    if ((_(this, "_id", "_WeakMap_" + F() + "." + F()), 0 < arguments.length))
      throw new TypeError("WeakMap iterable is not supported");
  }
  function C(e, t) {
    if (!N(e) || !j.call(e, "_id"))
      throw new TypeError(
        t + " method called on incompatible receiver " + typeof e
      );
  }
  function F() {
    return Math.random().toString().substring(2);
  }
  function N(e) {
    return Object(e) === e;
  }
  (T =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : M).WeakMap ||
    ((j = Object.prototype.hasOwnProperty),
    (O =
      Object.defineProperty &&
      (function () {
        try {
          return 1 === Object.defineProperty({}, "x", { value: 1 }).x;
        } catch (e) {}
      })()),
    (_ = function (e, t, n) {
      O
        ? Object.defineProperty(e, t, {
            configurable: !0,
            writable: !0,
            value: n,
          })
        : (e[t] = n);
    }),
    (T.WeakMap =
      (_(S.prototype, "delete", function (e) {
        if ((C(this, "delete"), !N(e))) return !1;
        var t = e[this._id];
        return !(!t || t[0] !== e || (delete e[this._id], 0));
      }),
      _(S.prototype, "get", function (e) {
        if ((C(this, "get"), N(e))) {
          var t = e[this._id];
          return t && t[0] === e ? t[1] : void 0;
        }
      }),
      _(S.prototype, "has", function (e) {
        if ((C(this, "has"), !N(e))) return !1;
        var t = e[this._id];
        return !(!t || t[0] !== e);
      }),
      _(S.prototype, "set", function (e, t) {
        if ((C(this, "set"), !N(e)))
          throw new TypeError("Invalid value used as weak map key");
        var n = e[this._id];
        return n && n[0] === e ? (n[1] = t) : _(e, this._id, [e, t]), this;
      }),
      _(S, "_polyfill", !0),
      S)));
  var L,
    A =
      ((function (e) {
        var t, n, r;
        (r = function () {
          var e,
            t,
            n,
            r,
            o,
            i,
            a = Object.prototype.toString,
            u =
              "undefined" != typeof setImmediate
                ? function (e) {
                    return setImmediate(e);
                  }
                : setTimeout;
          try {
            Object.defineProperty({}, "x", {}),
              (e = function (e, t, n, r) {
                return Object.defineProperty(e, t, {
                  value: n,
                  writable: !0,
                  configurable: !1 !== r,
                });
              });
          } catch (a) {
            e = function (e, t, n) {
              return (e[t] = n), e;
            };
          }
          function c(e, t) {
            (this.fn = e), (this.self = t), (this.next = void 0);
          }
          function l(e, r) {
            n.add(e, r), (t = t || u(n.drain));
          }
          function s(e) {
            var t,
              n = typeof e;
            return (
              null == e || ("object" != n && "function" != n) || (t = e.then),
              "function" == typeof t && t
            );
          }
          function f() {
            for (var e = 0; e < this.chain.length; e++)
              !(function (e, t, n) {
                var r, o;
                try {
                  !1 === t
                    ? n.reject(e.msg)
                    : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) ===
                      n.promise
                    ? n.reject(TypeError("Promise-chain cycle"))
                    : (o = s(r))
                    ? o.call(r, n.resolve, n.reject)
                    : n.resolve(r);
                } catch (e) {
                  n.reject(e);
                }
              })(
                this,
                1 === this.state
                  ? this.chain[e].success
                  : this.chain[e].failure,
                this.chain[e]
              );
            this.chain.length = 0;
          }
          function d(e) {
            var t,
              n = this;
            if (!n.triggered) {
              (n.triggered = !0), n.def && (n = n.def);
              try {
                (t = s(e))
                  ? l(function () {
                      var r = new v(n);
                      try {
                        t.call(
                          e,
                          function () {
                            d.apply(r, arguments);
                          },
                          function () {
                            h.apply(r, arguments);
                          }
                        );
                      } catch (e) {
                        h.call(r, e);
                      }
                    })
                  : ((n.msg = e), (n.state = 1), 0 < n.chain.length && l(f, n));
              } catch (e) {
                h.call(new v(n), e);
              }
            }
          }
          function h(e) {
            var t = this;
            t.triggered ||
              ((t.triggered = !0),
              t.def && (t = t.def),
              (t.msg = e),
              (t.state = 2),
              0 < t.chain.length && l(f, t));
          }
          function p(e, t, n, r) {
            for (var o = 0; o < t.length; o++)
              !(function (o) {
                e.resolve(t[o]).then(function (e) {
                  n(o, e);
                }, r);
              })(o);
          }
          function v(e) {
            (this.def = e), (this.triggered = !1);
          }
          function y(e) {
            (this.promise = e),
              (this.state = 0),
              (this.triggered = !1),
              (this.chain = []),
              (this.msg = void 0);
          }
          function m(e) {
            if ("function" != typeof e) throw TypeError("Not a function");
            if (0 !== this.__NPO__) throw TypeError("Not a promise");
            this.__NPO__ = 1;
            var t = new y(this);
            (this.then = function (e, n) {
              var r = {
                success: "function" != typeof e || e,
                failure: "function" == typeof n && n,
              };
              return (
                (r.promise = new this.constructor(function (e, t) {
                  if ("function" != typeof e || "function" != typeof t)
                    throw TypeError("Not a function");
                  (r.resolve = e), (r.reject = t);
                })),
                t.chain.push(r),
                0 !== t.state && l(f, t),
                r.promise
              );
            }),
              (this.catch = function (e) {
                return this.then(void 0, e);
              });
            try {
              e.call(
                void 0,
                function (e) {
                  d.call(t, e);
                },
                function (e) {
                  h.call(t, e);
                }
              );
            } catch (e) {
              h.call(t, e);
            }
          }
          var g = e(
            {},
            "constructor",
            m,
            !(n = {
              add: function (e, t) {
                (i = new c(e, t)),
                  o ? (o.next = i) : (r = i),
                  (o = i),
                  (i = void 0);
              },
              drain: function () {
                var e = r;
                for (r = o = t = void 0; e; ) e.fn.call(e.self), (e = e.next);
              },
            })
          );
          return (
            e((m.prototype = g), "__NPO__", 0, !1),
            e(m, "resolve", function (e) {
              return e && "object" == typeof e && 1 === e.__NPO__
                ? e
                : new this(function (t, n) {
                    if ("function" != typeof t || "function" != typeof n)
                      throw TypeError("Not a function");
                    t(e);
                  });
            }),
            e(m, "reject", function (e) {
              return new this(function (t, n) {
                if ("function" != typeof t || "function" != typeof n)
                  throw TypeError("Not a function");
                n(e);
              });
            }),
            e(m, "all", function (e) {
              var t = this;
              return "[object Array]" != a.call(e)
                ? t.reject(TypeError("Not an array"))
                : 0 === e.length
                ? t.resolve([])
                : new t(function (n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                      throw TypeError("Not a function");
                    var o = e.length,
                      i = Array(o),
                      a = 0;
                    p(
                      t,
                      e,
                      function (e, t) {
                        (i[e] = t), ++a === o && n(i);
                      },
                      r
                    );
                  });
            }),
            e(m, "race", function (e) {
              var t = this;
              return "[object Array]" != a.call(e)
                ? t.reject(TypeError("Not an array"))
                : new t(function (n, r) {
                    if ("function" != typeof n || "function" != typeof r)
                      throw TypeError("Not a function");
                    p(
                      t,
                      e,
                      function (e, t) {
                        n(t);
                      },
                      r
                    );
                  });
            }),
            m
          );
        }),
          ((n = M)[(t = "Promise")] = n[t] || r()),
          e.exports && (e.exports = n[t]);
      })((L = { exports: {} })),
      L.exports),
    R = new WeakMap();
  function q(e, t, n) {
    var r = R.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), R.set(e.element, r);
  }
  function I(e, t) {
    return (R.get(e.element) || {})[t] || [];
  }
  function V(e, t, n) {
    var r = R.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return (r[t] = []), R.set(e.element, r), !0;
    var o = r[t].indexOf(n);
    return (
      -1 !== o && r[t].splice(o, 1),
      R.set(e.element, r),
      r[t] && 0 === r[t].length
    );
  }
  function D(e) {
    if ("string" == typeof e)
      try {
        e = JSON.parse(e);
      } catch (e) {
        return console.warn(e), {};
      }
    return e;
  }
  function W(e, t, n) {
    var r, o;
    e.element.contentWindow &&
      e.element.contentWindow.postMessage &&
      ((r = { method: t }),
      void 0 !== n && (r.value = n),
      8 <=
        (o = parseFloat(
          navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
        )) &&
        o < 10 &&
        (r = JSON.stringify(r)),
      e.element.contentWindow.postMessage(r, e.origin));
  }
  var z = [
    "autopause",
    "autoplay",
    "background",
    "byline",
    "color",
    "colors",
    "controls",
    "dnt",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "playsinline",
    "portrait",
    "responsive",
    "speed",
    "texttrack",
    "title",
    "transparent",
    "url",
    "width",
  ];
  function U(e, t) {
    var n = 1 < arguments.length && void 0 !== t ? t : {};
    return z.reduce(function (t, n) {
      var r = e.getAttribute("data-vimeo-".concat(n));
      return (!r && "" !== r) || (t[n] = "" === r ? 1 : r), t;
    }, n);
  }
  function G(e, t) {
    var n = e.html;
    if (!t) throw new TypeError("An element must be provided");
    if (null !== t.getAttribute("data-vimeo-initialized"))
      return t.querySelector("iframe");
    var r = document.createElement("div");
    return (
      (r.innerHTML = n),
      t.appendChild(r.firstChild),
      t.setAttribute("data-vimeo-initialized", "true"),
      t.querySelector("iframe")
    );
  }
  function B(e, t, n) {
    var r = 1 < arguments.length && void 0 !== t ? t : {},
      o = 2 < arguments.length ? n : void 0;
    return new Promise(function (t, n) {
      if (!w(e))
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
      var i = "https://vimeo.com/api/oembed.json?url=".concat(
        encodeURIComponent(e)
      );
      for (var a in r)
        r.hasOwnProperty(a) &&
          (i += "&".concat(a, "=").concat(encodeURIComponent(r[a])));
      var u = new (
        "XDomainRequest" in window ? XDomainRequest : XMLHttpRequest
      )();
      u.open("GET", i, !0),
        (u.onload = function () {
          if (404 !== u.status)
            if (403 !== u.status)
              try {
                var r = JSON.parse(u.responseText);
                if (403 === r.domain_status_code)
                  return (
                    G(r, o),
                    void n(new Error("“".concat(e, "” is not embeddable.")))
                  );
                t(r);
              } catch (r) {
                n(r);
              }
            else n(new Error("“".concat(e, "” is not embeddable.")));
          else n(new Error("“".concat(e, "” was not found.")));
        }),
        (u.onerror = function () {
          var e = u.status ? " (".concat(u.status, ")") : "";
          n(
            new Error(
              "There was an error fetching the embed code from Vimeo".concat(
                e,
                "."
              )
            )
          );
        }),
        u.send();
    });
  }
  var H,
    Y,
    Q,
    J = {
      role: "viewer",
      autoPlayMuted: !0,
      allowedDrift: 0.3,
      maxAllowedDrift: 1,
      minCheckInterval: 0.1,
      maxRateAdjustment: 0.2,
      maxTimeToCatchUp: 1,
    },
    X = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && s(e, t);
      })(f, h(EventTarget));
      var e,
        r,
        a,
        l = v(f);
      function f(e, r) {
        var a,
          u =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
          s = 3 < arguments.length ? arguments[3] : void 0;
        return (
          i(this, f),
          c(p((a = l.call(this))), "logger", void 0),
          c(p(a), "speedAdjustment", 0),
          c(
            p(a),
            "adjustSpeed",
            (function () {
              var e = o(
                n().mark(function e(t, r) {
                  var o;
                  return n().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (a.speedAdjustment === r)
                            return e.abrupt("return");
                          e.next = 2;
                          break;
                        case 2:
                          return (e.next = 4), t.getPlaybackRate();
                        case 4:
                          return (
                            (e.t0 = e.sent),
                            (e.t1 = a.speedAdjustment),
                            (e.t2 = e.t0 - e.t1),
                            (e.t3 = r),
                            (o = e.t2 + e.t3),
                            a.log("New playbackRate:  ".concat(o)),
                            (e.next = 12),
                            t.setPlaybackRate(o)
                          );
                        case 12:
                          a.speedAdjustment = r;
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })()
          ),
          (a.logger = s),
          a.init(r, e, t(t({}, J), u)),
          a
        );
      }
      return (
        u(f, [
          {
            key: "disconnect",
            value: function () {
              this.dispatchEvent(new Event("disconnect"));
            },
          },
          {
            key: "init",
            value:
              ((a = o(
                n().mark(function e(t, r, o) {
                  var i,
                    a,
                    u,
                    c = this;
                  return n().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), this.waitForTOReadyState(t, "open")
                            );
                          case 2:
                            if ("viewer" === o.role)
                              return (e.next = 5), this.updatePlayer(t, r, o);
                            e.next = 10;
                            break;
                          case 5:
                            (i = E(t, "change", function () {
                              return c.updatePlayer(t, r, o);
                            })),
                              (a = this.maintainPlaybackPosition(t, r, o)),
                              this.addEventListener("disconnect", function () {
                                a.cancel(), i.cancel();
                              }),
                              (e.next = 14);
                            break;
                          case 10:
                            return (e.next = 12), this.updateTimingObject(t, r);
                          case 12:
                            (u = E(
                              r,
                              ["seeked", "play", "pause", "ratechange"],
                              function () {
                                return c.updateTimingObject(t, r);
                              },
                              "on",
                              "off"
                            )),
                              this.addEventListener("disconnect", function () {
                                return u.cancel();
                              });
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, t, n) {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "updateTimingObject",
            value:
              ((r = o(
                n().mark(function e(t, r) {
                  return n().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.t0 = t), (e.next = 3), r.getCurrentTime();
                        case 3:
                          return (e.t1 = e.sent), (e.next = 6), r.getPaused();
                        case 6:
                          if (!e.sent) {
                            e.next = 10;
                            break;
                          }
                          (e.t2 = 0), (e.next = 13);
                          break;
                        case 10:
                          return (e.next = 12), r.getPlaybackRate();
                        case 12:
                          e.t2 = e.sent;
                        case 13:
                          (e.t3 = e.t2),
                            (e.t4 = { position: e.t1, velocity: e.t3 }),
                            e.t0.update.call(e.t0, e.t4);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e, t) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "updatePlayer",
            value:
              ((e = o(
                n().mark(function e(t, r, i) {
                  var a, u, c;
                  return n().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = t.query()),
                              (u = a.position),
                              (c = a.velocity),
                              "number" == typeof u && r.setCurrentTime(u),
                              "number" != typeof c)
                            ) {
                              e.next = 25;
                              break;
                            }
                            if (0 === c) return (e.next = 6), r.getPaused();
                            e.next = 11;
                            break;
                          case 6:
                            if (((e.t0 = e.sent), !1 !== e.t0)) {
                              e.next = 9;
                              break;
                            }
                            r.pause();
                          case 9:
                            e.next = 25;
                            break;
                          case 11:
                            if (0 < c) return (e.next = 14), r.getPaused();
                            e.next = 25;
                            break;
                          case 14:
                            if (((e.t1 = e.sent), !0 === e.t1))
                              return (
                                (e.next = 18),
                                r.play().catch(
                                  (function () {
                                    var e = o(
                                      n().mark(function e(t) {
                                        return n().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  "NotAllowedError" ===
                                                    t.name &&
                                                  i.autoPlayMuted
                                                )
                                                  return (
                                                    (e.next = 3), r.setMuted(!0)
                                                  );
                                                e.next = 5;
                                                break;
                                              case 3:
                                                return (
                                                  (e.next = 5),
                                                  r.play().catch(function (e) {
                                                    return console.error(
                                                      "Couldn't play the video from TimingSrcConnector. Error:",
                                                      e
                                                    );
                                                  })
                                                );
                                              case 5:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            e.next = 19;
                            break;
                          case 18:
                            this.updatePlayer(t, r, i);
                          case 19:
                            return (e.next = 21), r.getPlaybackRate();
                          case 21:
                            if (((e.t2 = e.sent), (e.t3 = c), e.t2 === e.t3)) {
                              e.next = 25;
                              break;
                            }
                            r.setPlaybackRate(c);
                          case 25:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (t, n, r) {
                return e.apply(this, arguments);
              }),
          },
          {
            key: "maintainPlaybackPosition",
            value: function (e, t, r) {
              var i = this,
                a = r.allowedDrift,
                u = r.maxAllowedDrift,
                c = r.minCheckInterval,
                l = r.maxRateAdjustment,
                s = r.maxTimeToCatchUp,
                f = 1e3 * Math.min(s, Math.max(c, u)),
                d = (function () {
                  var r = o(
                    n().mark(function r() {
                      var o, c, f, d, h;
                      return n().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((n.t0 = 0 === e.query().velocity), n.t0)) {
                                n.next = 6;
                                break;
                              }
                              return (n.next = 4), t.getPaused();
                            case 4:
                              (n.t1 = n.sent), (n.t0 = !0 === n.t1);
                            case 6:
                              if (n.t0) return n.abrupt("return");
                              n.next = 8;
                              break;
                            case 8:
                              return (
                                (n.t2 = e.query().position),
                                (n.next = 11),
                                t.getCurrentTime()
                              );
                            case 11:
                              if (
                                ((n.t3 = n.sent),
                                (o = n.t2 - n.t3),
                                (c = Math.abs(o)),
                                i.log("Drift: ".concat(o)),
                                u < c)
                              )
                                return (n.next = 18), i.adjustSpeed(t, 0);
                              n.next = 22;
                              break;
                            case 18:
                              t.setCurrentTime(e.query().position),
                                i.log("Resync by currentTime"),
                                (n.next = 29);
                              break;
                            case 22:
                              if (a < c)
                                return (
                                  (h = (f = c / s) < (d = l) ? (d - f) / 2 : d),
                                  (n.next = 28),
                                  i.adjustSpeed(t, h * Math.sign(o))
                                );
                              n.next = 29;
                              break;
                            case 28:
                              i.log("Resync by playbackRate");
                            case 29:
                            case "end":
                              return n.stop();
                          }
                      }, r);
                    })
                  );
                  return function () {
                    return r.apply(this, arguments);
                  };
                })(),
                h = setInterval(function () {
                  return d();
                }, f);
              return {
                cancel: function () {
                  return clearInterval(h);
                },
              };
            },
          },
          {
            key: "log",
            value: function (e) {
              var t;
              null !== (t = this.logger) &&
                void 0 !== t &&
                t.call(this, "TimingSrcConnector: ".concat(e));
            },
          },
          {
            key: "waitForTOReadyState",
            value: function (e, t) {
              return new Promise(function (n) {
                !(function r() {
                  e.readyState === t
                    ? n()
                    : e.addEventListener("readystatechange", r, { once: !0 });
                })();
              });
            },
          },
        ]),
        f
      );
    })(),
    $ = new WeakMap(),
    K = new WeakMap(),
    Z = {},
    ee = (function () {
      function e(t) {
        var n,
          r,
          o = this,
          a =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (i(this, e),
          window.jQuery &&
            t instanceof jQuery &&
            (1 < t.length &&
              window.console &&
              console.warn &&
              console.warn(
                "A jQuery object with multiple elements was passed, using the first element."
              ),
            (t = t[0])),
          "undefined" != typeof document &&
            "string" == typeof t &&
            (t = document.getElementById(t)),
          (n = t),
          !Boolean(
            n &&
              1 === n.nodeType &&
              "nodeName" in n &&
              n.ownerDocument &&
              n.ownerDocument.defaultView
          ))
        )
          throw new TypeError(
            "You must pass either a valid element or a valid id."
          );
        if (
          ("IFRAME" === t.nodeName ||
            ((r = t.querySelector("iframe")) && (t = r)),
          "IFRAME" === t.nodeName && !w(t.getAttribute("src") || ""))
        )
          throw new Error("The player element passed isn’t a Vimeo embed.");
        if ($.has(t)) return $.get(t);
        (this._window = t.ownerDocument.defaultView),
          (this.element = t),
          (this.origin = "*");
        var u,
          c = new A(function (e, n) {
            var r;
            (o._onMessage = function (t) {
              if (w(t.origin) && o.element.contentWindow === t.source) {
                "*" === o.origin && (o.origin = t.origin);
                var r = D(t.data);
                if (
                  r &&
                  "error" === r.event &&
                  r.data &&
                  "ready" === r.data.method
                ) {
                  var i = new Error(r.data.message);
                  return (i.name = r.data.name), void n(i);
                }
                var a = r && "ready" === r.event,
                  u = r && "ping" === r.method;
                if (a || u)
                  return o.element.setAttribute("data-ready", "true"), void e();
                !(function (e, t) {
                  var n,
                    r,
                    o = [];
                  (t = D(t)).event
                    ? ("error" === t.event &&
                        I(e, t.data.method).forEach(function (n) {
                          var r = new Error(t.data.message);
                          (r.name = t.data.name),
                            n.reject(r),
                            V(e, t.data.method, n);
                        }),
                      (o = I(e, "event:".concat(t.event))),
                      (n = t.data))
                    : !t.method ||
                      ((r = (function (e, t) {
                        var n = I(e, t);
                        if (n.length < 1) return !1;
                        var r = n.shift();
                        return V(e, t, r), r;
                      })(e, t.method)) &&
                        (o.push(r), (n = t.value))),
                    o.forEach(function (t) {
                      try {
                        if ("function" == typeof t) return void t.call(e, n);
                        t.resolve(n);
                      } catch (t) {}
                    });
                })(o, r);
              }
            }),
              o._window.addEventListener("message", o._onMessage),
              "IFRAME" !== o.element.nodeName &&
                B(k((r = U(t, a))), r, t)
                  .then(function (e) {
                    var n,
                      r,
                      i,
                      a = G(e, t);
                    return (
                      (o.element = a),
                      (o._originalElement = t),
                      (n = t),
                      (r = a),
                      (i = R.get(n)),
                      R.set(r, i),
                      R.delete(n),
                      $.set(o.element, o),
                      e
                    );
                  })
                  .catch(n);
          });
        return (
          K.set(this, c),
          $.set(this.element, this),
          "IFRAME" === this.element.nodeName && W(this, "ping"),
          Z.isEnabled &&
            ((u = function () {
              return Z.exit();
            }),
            (this.fullscreenchangeHandler = function () {
              (Z.isFullscreen ? q : V)(o, "event:exitFullscreen", u),
                o.ready().then(function () {
                  W(o, "fullscreenchange", Z.isFullscreen);
                });
            }),
            Z.on("fullscreenchange", this.fullscreenchangeHandler)),
          this
        );
      }
      var t;
      return (
        u(e, [
          {
            key: "callMethod",
            value: function (e, t) {
              var n = this,
                r = 1 < arguments.length && void 0 !== t ? t : {};
              return new A(function (t, o) {
                return n
                  .ready()
                  .then(function () {
                    q(n, e, { resolve: t, reject: o }), W(n, e, r);
                  })
                  .catch(o);
              });
            },
          },
          {
            key: "get",
            value: function (e) {
              var t = this;
              return new A(function (n, r) {
                return (
                  (e = g(e, "get")),
                  t
                    .ready()
                    .then(function () {
                      q(t, e, { resolve: n, reject: r }), W(t, e);
                    })
                    .catch(r)
                );
              });
            },
          },
          {
            key: "set",
            value: function (e, t) {
              var n = this;
              return new A(function (r, o) {
                if (((e = g(e, "set")), null == t))
                  throw new TypeError("There must be a value to set.");
                return n
                  .ready()
                  .then(function () {
                    q(n, e, { resolve: r, reject: o }), W(n, e, t);
                  })
                  .catch(o);
              });
            },
          },
          {
            key: "on",
            value: function (e, t) {
              if (!e) throw new TypeError("You must pass an event name.");
              if (!t) throw new TypeError("You must pass a callback function.");
              if ("function" != typeof t)
                throw new TypeError("The callback must be a function.");
              0 === I(this, "event:".concat(e)).length &&
                this.callMethod("addEventListener", e).catch(function () {}),
                q(this, "event:".concat(e), t);
            },
          },
          {
            key: "off",
            value: function (e, t) {
              if (!e) throw new TypeError("You must pass an event name.");
              if (t && "function" != typeof t)
                throw new TypeError("The callback must be a function.");
              V(this, "event:".concat(e), t) &&
                this.callMethod("removeEventListener", e).catch(function (
                  e
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (e) {
              return this.callMethod("loadVideo", e);
            },
          },
          {
            key: "ready",
            value: function () {
              var e =
                K.get(this) ||
                new A(function (e, t) {
                  t(new Error("Unknown player. Probably unloaded."));
                });
              return A.resolve(e);
            },
          },
          {
            key: "addCuePoint",
            value: function (e, t) {
              var n = 1 < arguments.length && void 0 !== t ? t : {};
              return this.callMethod("addCuePoint", { time: e, data: n });
            },
          },
          {
            key: "removeCuePoint",
            value: function (e) {
              return this.callMethod("removeCuePoint", e);
            },
          },
          {
            key: "enableTextTrack",
            value: function (e, t) {
              if (!e) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: e,
                kind: t,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "requestFullscreen",
            value: function () {
              return Z.isEnabled
                ? Z.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return Z.isEnabled ? Z.exit() : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return Z.isEnabled
                ? A.resolve(Z.isFullscreen)
                : this.get("fullscreen");
            },
          },
          {
            key: "requestPictureInPicture",
            value: function () {
              return this.callMethod("requestPictureInPicture");
            },
          },
          {
            key: "exitPictureInPicture",
            value: function () {
              return this.callMethod("exitPictureInPicture");
            },
          },
          {
            key: "getPictureInPicture",
            value: function () {
              return this.get("pictureInPicture");
            },
          },
          {
            key: "remotePlaybackPrompt",
            value: function () {
              return this.callMethod("remotePlaybackPrompt");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "destroy",
            value: function () {
              var e = this;
              return new A(function (t) {
                var n;
                K.delete(e),
                  $.delete(e.element),
                  e._originalElement &&
                    ($.delete(e._originalElement),
                    e._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  e.element &&
                    "IFRAME" === e.element.nodeName &&
                    e.element.parentNode &&
                    (e.element.parentNode.parentNode &&
                    e._originalElement &&
                    e._originalElement !== e.element.parentNode
                      ? e.element.parentNode.parentNode.removeChild(
                          e.element.parentNode
                        )
                      : e.element.parentNode.removeChild(e.element)),
                  e.element &&
                    "DIV" === e.element.nodeName &&
                    e.element.parentNode &&
                    (e.element.removeAttribute("data-vimeo-initialized"),
                    (n = e.element.querySelector("iframe")) &&
                      n.parentNode &&
                      (n.parentNode.parentNode &&
                      e._originalElement &&
                      e._originalElement !== n.parentNode
                        ? n.parentNode.parentNode.removeChild(n.parentNode)
                        : n.parentNode.removeChild(n))),
                  e._window.removeEventListener("message", e._onMessage),
                  Z.isEnabled &&
                    Z.off("fullscreenchange", e.fullscreenchangeHandler),
                  t();
              });
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (e) {
              return this.set("autopause", e);
            },
          },
          {
            key: "getBuffered",
            value: function () {
              return this.get("buffered");
            },
          },
          {
            key: "getCameraProps",
            value: function () {
              return this.get("cameraProps");
            },
          },
          {
            key: "setCameraProps",
            value: function (e) {
              return this.set("cameraProps", e);
            },
          },
          {
            key: "getChapters",
            value: function () {
              return this.get("chapters");
            },
          },
          {
            key: "getCurrentChapter",
            value: function () {
              return this.get("currentChapter");
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "getColors",
            value: function () {
              return A.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (e) {
              return this.set("color", e);
            },
          },
          {
            key: "setColors",
            value: function (e) {
              if (!Array.isArray(e))
                return new A(function (e, t) {
                  return t(new TypeError("Argument must be an array."));
                });
              var t = new A(function (e) {
                  return e(null);
                }),
                n = [
                  e[0] ? this.set("colorOne", e[0]) : t,
                  e[1] ? this.set("colorTwo", e[1]) : t,
                  e[2] ? this.set("colorThree", e[2]) : t,
                  e[3] ? this.set("colorFour", e[3]) : t,
                ];
              return A.all(n);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (e) {
              return this.set("currentTime", e);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (e) {
              return this.set("loop", e);
            },
          },
          {
            key: "setMuted",
            value: function (e) {
              return this.set("muted", e);
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.get("muted");
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getPlaybackRate",
            value: function () {
              return this.get("playbackRate");
            },
          },
          {
            key: "setPlaybackRate",
            value: function (e) {
              return this.set("playbackRate", e);
            },
          },
          {
            key: "getPlayed",
            value: function () {
              return this.get("played");
            },
          },
          {
            key: "getQualities",
            value: function () {
              return this.get("qualities");
            },
          },
          {
            key: "getQuality",
            value: function () {
              return this.get("quality");
            },
          },
          {
            key: "setQuality",
            value: function (e) {
              return this.set("quality", e);
            },
          },
          {
            key: "getRemotePlaybackAvailability",
            value: function () {
              return this.get("remotePlaybackAvailability");
            },
          },
          {
            key: "getRemotePlaybackState",
            value: function () {
              return this.get("remotePlaybackState");
            },
          },
          {
            key: "getSeekable",
            value: function () {
              return this.get("seekable");
            },
          },
          {
            key: "getSeeking",
            value: function () {
              return this.get("seeking");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (e) {
              return this.set("volume", e);
            },
          },
          {
            key: "setTimingSrc",
            value:
              ((t = o(
                n().mark(function e(t, r) {
                  var o,
                    i = this;
                  return n().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (e.next = 4), this.ready();
                          case 4:
                            return (
                              (o = new X(this, t, r)),
                              W(this, "notifyTimingObjectConnect"),
                              o.addEventListener("disconnect", function () {
                                return W(i, "notifyTimingObjectDisconnect");
                              }),
                              e.abrupt("return", o)
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, n) {
                return t.apply(this, arguments);
              }),
          },
        ]),
        e
      );
    })();
  return (
    m ||
      ((H = (function () {
        for (
          var e,
            t = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            n = 0,
            r = t.length,
            o = {};
          n < r;
          n++
        )
          if ((e = t[n]) && e[1] in document) {
            for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
            return o;
          }
        return !1;
      })()),
      (Y = {
        fullscreenchange: H.fullscreenchange,
        fullscreenerror: H.fullscreenerror,
      }),
      (Q = {
        request: function (e) {
          return new Promise(function (t, n) {
            function r() {
              Q.off("fullscreenchange", r), t();
            }
            Q.on("fullscreenchange", r);
            var o = (e = e || document.documentElement)[H.requestFullscreen]();
            o instanceof Promise && o.then(r).catch(n);
          });
        },
        exit: function () {
          return new Promise(function (e, t) {
            var n, r;
            Q.isFullscreen
              ? ((n = function t() {
                  Q.off("fullscreenchange", t), e();
                }),
                Q.on("fullscreenchange", n),
                (r = document[H.exitFullscreen]()) instanceof Promise &&
                  r.then(n).catch(t))
              : e();
          });
        },
        on: function (e, t) {
          var n = Y[e];
          n && document.addEventListener(n, t);
        },
        off: function (e, t) {
          var n = Y[e];
          n && document.removeEventListener(n, t);
        },
      }),
      Object.defineProperties(Q, {
        isFullscreen: {
          get: function () {
            return Boolean(document[H.fullscreenElement]);
          },
        },
        element: {
          enumerable: !0,
          get: function () {
            return document[H.fullscreenElement];
          },
        },
        isEnabled: {
          enumerable: !0,
          get: function () {
            return Boolean(document[H.fullscreenEnabled]);
          },
        },
      }),
      (Z = Q),
      (function (e) {
        function t(e) {
          "console" in window &&
            console.error &&
            console.error("There was an error creating an embed: ".concat(e));
        }
        var n = 0 < arguments.length && void 0 !== e ? e : document;
        [].slice
          .call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
          .forEach(function (e) {
            try {
              if (null !== e.getAttribute("data-vimeo-defer")) return;
              var n = U(e);
              B(k(n), n, e)
                .then(function (t) {
                  return G(t, e);
                })
                .catch(t);
            } catch (n) {
              t(n);
            }
          });
      })(),
      (function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoPlayerResizeEmbeds_ ||
          ((window.VimeoPlayerResizeEmbeds_ = !0),
          window.addEventListener("message", function (e) {
            if (w(e.origin) && e.data && "spacechange" === e.data.event)
              for (
                var n = t.querySelectorAll("iframe"), r = 0;
                r < n.length;
                r++
              )
                if (n[r].contentWindow === e.source) {
                  n[r].parentElement.style.paddingBottom = "".concat(
                    e.data.data[0].bottom,
                    "px"
                  );
                  break;
                }
          }));
      })(),
      (function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoSeoMetadataAppended ||
          ((window.VimeoSeoMetadataAppended = !0),
          window.addEventListener("message", function (e) {
            if (w(e.origin)) {
              var n = D(e.data);
              if (n && "ready" === n.event)
                for (
                  var r = t.querySelectorAll("iframe"), o = 0;
                  o < r.length;
                  o++
                ) {
                  var i = r[o],
                    a = i.contentWindow === e.source;
                  b(i.src) &&
                    a &&
                    new ee(i).callMethod(
                      "appendVideoMetadata",
                      window.location.href
                    );
                }
            }
          }));
      })(),
      (function (e) {
        var t,
          n = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoCheckedUrlTimeParam ||
          ((window.VimeoCheckedUrlTimeParam = !0),
          (t = function (e) {
            "console" in window &&
              console.error &&
              console.error("There was an error getting video Id: ".concat(e));
          }),
          window.addEventListener("message", function (e) {
            if (w(e.origin)) {
              var r = D(e.data);
              if (r && "ready" === r.event)
                for (
                  var o = n.querySelectorAll("iframe"), i = 0;
                  i < o.length;
                  i++
                )
                  !(function () {
                    var n,
                      r = o[i],
                      a = r.contentWindow === e.source;
                    b(r.src) &&
                      a &&
                      (n = new ee(r))
                        .getVideoId()
                        .then(function (e) {
                          var t,
                            r = new RegExp(
                              "[?&]vimeo_t_".concat(e, "=([^&#]*)")
                            ).exec(window.location.href);
                          r &&
                            r[1] &&
                            ((t = decodeURI(r[1])), n.setCurrentTime(t));
                        })
                        .catch(t);
                  })();
            }
          }));
      })()),
    ee
  );
});
