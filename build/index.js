!function(e, t) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = t(require('react')) else if ('function' == typeof define && define.amd) define(['react'], t) else {
        var n = 'object' == typeof exports ? t(require('react')) : t(e.react)
        for (var r in n) ('object' == typeof exports ? exports : e)[r] = n[r]
    }
}(window, (function(e) {
    return function(e) {
        var t = {}

        function n(r) {
            if (t[r]) return t[r].exports
            var o = t[r] = { i: r, l: !1, exports: {} }
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }, n.r = function(e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var r = Object.create(null)
            if (n.r(r), Object.defineProperty(r, 'default', {
                enumerable: !0,
                value: e,
            }), 2 & t && 'string' != typeof e) for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o))
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            }
            return n.d(t, 'a', t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = '', n(n.s = 1)
    }([function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        'use strict'
        n.r(t)
        var r = n(0), o = n.n(r)

        function i(e, t) {
            var n = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e)
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
            }) : e[t] = n, e
        }

        function u(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))) return
                var n = [], r = !0, o = !1, i = void 0
                try {
                    for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0)
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
            }()
        }

        var a = {
            wizard: {
                width: 226,
                minHeight: 100,
                backgroundColor: 'white',
                padding: 10,
                border: '1px solid #d9d9d9',
                boxShadow: '0 3px 8px 0 rgba(0,0,0,.15)',
                transform: 'translate(22px, -50px)',
                zIndex: 2,
                position: 'relative',
            },
            closeButton: {
                position: 'absolute',
                top: 8,
                right: 10,
                padding: 0,
                cursor: 'pointer',
                color: 'grey',
                border: 0,
                outline: 'none',
                background: 'transparent',
            },
            footer: { padding: '10px 0 0', textAlign: 'right' },
            title: {
                marginBottom: 8,
                letterSpacing: 'normal',
                color: '#000000',
                fontSize: 14,
                fontWeight: 600,
                fontStyle: 'normal',
            },
            description: { marginBottom: 15, color: '#4d4d4d', fontSize: 12, lineHeight: 1.25 },
            info: { display: 'flex', width: '87%', marginBottom: 10, alignItems: 'center' },
            stepsCount: { width: '35%', fontSize: 12 },
            pin: {
                position: 'absolute',
                zIndex: 2,
                width: 15,
                height: 15,
                borderRadius: 50,
                background: '#1787fc',
                boxShadow: '0 0 0 2px white',
                top: '-7px',
                left: '-7px',
            },
            pinLine: { height: 1, width: 25, top: 1, position: 'absolute', zIndex: 1, background: '#1787fc' },
            button: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 300,
                cursor: 'pointer',
                height: 32,
                lineHeight: '32px',
                padding: '0 16px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                border: 0,
                borderRadius: 3,
                outline: 'none',
                backgroundColor: '#0084ff',
                color: '#fff',
                fontSize: 14,
                marginLeft: 10,
            },
        }

        function c(e, t) {
            return t[e]
        }

        function f(e) {
            var t = document.getElementById(e).getBoundingClientRect()
            return { top: t.top + t.height / 2, left: t.left + t.width }
        }

        var d = function(e) {
            var t = e.isShow, n = e.rule, d = e.defaultStepNumber, s = void 0 === d ? 0 : d, p = e.prevButtonTitle,
                b = void 0 === p ? 'Prev' : p, y = e.nextButtonTitle, g = void 0 === y ? 'Next' : y,
                m = u(Object(r.useState)(t), 2), h = m[0], v = m[1], x = u(Object(r.useState)(null), 2), j = x[0],
                O = x[1], w = u(Object(r.useState)(void 0), 2), S = w[0], E = w[1], P = u(Object(r.useState)(s), 2),
                I = P[0], z = P[1], _ = c(I, n), k = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                        t % 2 ? i(n, !0).forEach((function(t) {
                            l(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({ position: 'absolute', zIndex: 99, transition: j }, S)

            function B(e) {
                z(e), E(f(c(e, n).elementId)), O('all 100ms ease')
            }

            return Object(r.useEffect)((function() {
                E(f(c(I, n).elementId))
            }), []), h && S ? o.a.createElement('div', { style: k }, o.a.createElement('div', { style: a.wizard }, o.a.createElement('button', {
                onClick: function() {
                    return v(!1)
                }, style: a.closeButton,
            }, 'X'), o.a.createElement('div', { style: a.info }, o.a.createElement('div', { style: a.stepsCount }, I + 1, ' of ', n.length)), o.a.createElement('div', {
                dangerouslySetInnerHTML: { __html: _.title },
                style: a.title,
            }), o.a.createElement('div', {
                dangerouslySetInnerHTML: { __html: _.description },
                style: a.description,
            }), o.a.createElement('div', { style: a.footer }, 0 !== I && o.a.createElement('button', {
                onClick: function() {
                    return B(I - 1)
                }, style: a.button,
            }, b), o.a.createElement('button', {
                onClick: function() {
                    return B(I + 1)
                }, disabled: I + 1 === n.length, style: a.button,
            }, g))), o.a.createElement('div', { style: a.pin }), o.a.createElement('div', { style: a.pinLine })) : null
        }
        n.d(t, 'Wizard', (function() {
            return d
        }))
    }])
}))
