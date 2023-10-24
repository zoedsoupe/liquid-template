var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/inputmask/dist/inputmask.js
var require_inputmask = __commonJS({
  "node_modules/inputmask/dist/inputmask.js"(exports, module2) {
    !function(e, t) {
      if ("object" == typeof exports && "object" == typeof module2)
        module2.exports = t();
      else if ("function" == typeof define && define.amd)
        define([], t);
      else {
        var i = t();
        for (var n in i)
          ("object" == typeof exports ? exports : e)[n] = i[n];
      }
    }("undefined" != typeof self ? self : exports, function() {
      return function() {
        "use strict";
        var e = {
          8741: function(e2, t2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            var i2 = !("undefined" == typeof window || !window.document || !window.document.createElement);
            t2.default = i2;
          },
          3976: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            var n2 = i2(2839), a = {
              _maxTestPos: 500,
              placeholder: "_",
              optionalmarker: ["[", "]"],
              quantifiermarker: ["{", "}"],
              groupmarker: ["(", ")"],
              alternatormarker: "|",
              escapeChar: "\\",
              mask: null,
              regex: null,
              oncomplete: function() {
              },
              onincomplete: function() {
              },
              oncleared: function() {
              },
              repeat: 0,
              greedy: false,
              autoUnmask: false,
              removeMaskOnSubmit: false,
              clearMaskOnLostFocus: true,
              insertMode: true,
              insertModeVisual: true,
              clearIncomplete: false,
              alias: null,
              onKeyDown: function() {
              },
              onBeforeMask: null,
              onBeforePaste: function(e3, t3) {
                return "function" == typeof t3.onBeforeMask ? t3.onBeforeMask.call(this, e3, t3) : e3;
              },
              onBeforeWrite: null,
              onUnMask: null,
              showMaskOnFocus: true,
              showMaskOnHover: true,
              onKeyValidation: function() {
              },
              skipOptionalPartCharacter: " ",
              numericInput: false,
              rightAlign: false,
              undoOnEscape: true,
              radixPoint: "",
              _radixDance: false,
              groupSeparator: "",
              keepStatic: null,
              positionCaretOnTab: true,
              tabThrough: false,
              supportsInputType: ["text", "tel", "url", "password", "search"],
              ignorables: [n2.keys.Backspace, n2.keys.Tab, n2.keys.Pause, n2.keys.Escape, n2.keys.PageUp, n2.keys.PageDown, n2.keys.End, n2.keys.Home, n2.keys.ArrowLeft, n2.keys.ArrowUp, n2.keys.ArrowRight, n2.keys.ArrowDown, n2.keys.Insert, n2.keys.Delete, n2.keys.ContextMenu, n2.keys.F1, n2.keys.F2, n2.keys.F3, n2.keys.F4, n2.keys.F5, n2.keys.F6, n2.keys.F7, n2.keys.F8, n2.keys.F9, n2.keys.F10, n2.keys.F11, n2.keys.F12, n2.keys.Process, n2.keys.Unidentified, n2.keys.Shift, n2.keys.Control, n2.keys.Alt, n2.keys.Tab, n2.keys.AltGraph, n2.keys.CapsLock],
              isComplete: null,
              preValidation: null,
              postValidation: null,
              staticDefinitionSymbol: void 0,
              jitMasking: false,
              nullable: true,
              inputEventOnly: false,
              noValuePatching: false,
              positionCaretOnClick: "lvp",
              casing: null,
              inputmode: "text",
              importDataAttributes: true,
              shiftPositions: true,
              usePrototypeDefinitions: true,
              validationEventTimeOut: 3e3,
              substitutes: {}
            };
            t2.default = a;
          },
          7392: function(e2, t2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            t2.default = {
              9: {
                validator: "[0-9\uFF10-\uFF19]",
                definitionSymbol: "*"
              },
              a: {
                validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                definitionSymbol: "*"
              },
              "*": {
                validator: "[0-9\uFF10-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]"
              }
            };
          },
          253: function(e2, t2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = function(e3, t3, i2) {
              if (void 0 === i2)
                return e3.__data ? e3.__data[t3] : null;
              e3.__data = e3.__data || {}, e3.__data[t3] = i2;
            };
          },
          3776: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.Event = void 0, t2.off = function(e3, t3) {
              var i3, n3;
              f(this[0]) && e3 && (i3 = this[0].eventRegistry, n3 = this[0], e3.split(" ").forEach(function(e4) {
                var a2 = l(e4.split("."), 2);
                (function(e5, n4) {
                  var a3, r2, o2 = [];
                  if (e5.length > 0)
                    if (void 0 === t3)
                      for (a3 = 0, r2 = i3[e5][n4].length; a3 < r2; a3++)
                        o2.push({
                          ev: e5,
                          namespace: n4 && n4.length > 0 ? n4 : "global",
                          handler: i3[e5][n4][a3]
                        });
                    else
                      o2.push({
                        ev: e5,
                        namespace: n4 && n4.length > 0 ? n4 : "global",
                        handler: t3
                      });
                  else if (n4.length > 0) {
                    for (var s2 in i3)
                      for (var l2 in i3[s2])
                        if (l2 === n4)
                          if (void 0 === t3)
                            for (a3 = 0, r2 = i3[s2][l2].length; a3 < r2; a3++)
                              o2.push({
                                ev: s2,
                                namespace: l2,
                                handler: i3[s2][l2][a3]
                              });
                          else
                            o2.push({
                              ev: s2,
                              namespace: l2,
                              handler: t3
                            });
                  }
                  return o2;
                })(a2[0], a2[1]).forEach(function(e5) {
                  var t4 = e5.ev, a3 = e5.handler;
                  !function(e6, t5, a4) {
                    if (e6 in i3 == 1)
                      if (n3.removeEventListener ? n3.removeEventListener(e6, a4, false) : n3.detachEvent && n3.detachEvent("on".concat(e6), a4), "global" === t5)
                        for (var r2 in i3[e6])
                          i3[e6][r2].splice(i3[e6][r2].indexOf(a4), 1);
                      else
                        i3[e6][t5].splice(i3[e6][t5].indexOf(a4), 1);
                  }(t4, e5.namespace, a3);
                });
              }));
              return this;
            }, t2.on = function(e3, t3) {
              if (f(this[0])) {
                var i3 = this[0].eventRegistry, n3 = this[0];
                e3.split(" ").forEach(function(e4) {
                  var a2 = l(e4.split("."), 2), r2 = a2[0], o2 = a2[1];
                  !function(e5, a3) {
                    n3.addEventListener ? n3.addEventListener(e5, t3, false) : n3.attachEvent && n3.attachEvent("on".concat(e5), t3), i3[e5] = i3[e5] || {}, i3[e5][a3] = i3[e5][a3] || [], i3[e5][a3].push(t3);
                  }(r2, void 0 === o2 ? "global" : o2);
                });
              }
              return this;
            }, t2.trigger = function(e3) {
              var t3 = arguments;
              if (f(this[0]))
                for (var i3 = this[0].eventRegistry, n3 = this[0], r2 = "string" == typeof e3 ? e3.split(" ") : [e3.type], s2 = 0; s2 < r2.length; s2++) {
                  var l2 = r2[s2].split("."), c2 = l2[0], u2 = l2[1] || "global";
                  if (void 0 !== document && "global" === u2) {
                    var d, p = {
                      bubbles: true,
                      cancelable: true,
                      composed: true,
                      detail: arguments[1]
                    };
                    if (document.createEvent) {
                      try {
                        if ("input" === c2)
                          p.inputType = "insertText", d = new InputEvent(c2, p);
                        else
                          d = new CustomEvent(c2, p);
                      } catch (e4) {
                        (d = document.createEvent("CustomEvent")).initCustomEvent(c2, p.bubbles, p.cancelable, p.detail);
                      }
                      e3.type && (0, a.default)(d, e3), n3.dispatchEvent(d);
                    } else
                      (d = document.createEventObject()).eventType = c2, d.detail = arguments[1], e3.type && (0, a.default)(d, e3), n3.fireEvent("on" + d.eventType, d);
                  } else if (void 0 !== i3[c2]) {
                    arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                    var h = i3[c2];
                    ("global" === u2 ? Object.values(h).flat() : h[u2]).forEach(function(e4) {
                      return e4.apply(n3, t3);
                    });
                  }
                }
              return this;
            };
            var n2, a = u(i2(600)), r = u(i2(9380)), o = u(i2(4963)), s = u(i2(8741));
            function l(e3, t3) {
              return function(e4) {
                if (Array.isArray(e4))
                  return e4;
              }(e3) || function(e4, t4) {
                var i3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (null != i3) {
                  var n3, a2, r2, o2, s2 = [], l2 = true, c2 = false;
                  try {
                    if (r2 = (i3 = i3.call(e4)).next, 0 === t4) {
                      if (Object(i3) !== i3)
                        return;
                      l2 = false;
                    } else
                      for (; !(l2 = (n3 = r2.call(i3)).done) && (s2.push(n3.value), s2.length !== t4); l2 = true)
                        ;
                  } catch (e5) {
                    c2 = true, a2 = e5;
                  } finally {
                    try {
                      if (!l2 && null != i3.return && (o2 = i3.return(), Object(o2) !== o2))
                        return;
                    } finally {
                      if (c2)
                        throw a2;
                    }
                  }
                  return s2;
                }
              }(e3, t3) || function(e4, t4) {
                if (!e4)
                  return;
                if ("string" == typeof e4)
                  return c(e4, t4);
                var i3 = Object.prototype.toString.call(e4).slice(8, -1);
                "Object" === i3 && e4.constructor && (i3 = e4.constructor.name);
                if ("Map" === i3 || "Set" === i3)
                  return Array.from(e4);
                if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
                  return c(e4, t4);
              }(e3, t3) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function c(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var i3 = 0, n3 = new Array(t3); i3 < t3; i3++)
                n3[i3] = e3[i3];
              return n3;
            }
            function u(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            function f(e3) {
              return e3 instanceof Element;
            }
            t2.Event = n2, "function" == typeof r.default.CustomEvent ? t2.Event = n2 = r.default.CustomEvent : s.default && (t2.Event = n2 = function(e3, t3) {
              t3 = t3 || {
                bubbles: false,
                cancelable: false,
                composed: true,
                detail: void 0
              };
              var i3 = document.createEvent("CustomEvent");
              return i3.initCustomEvent(e3, t3.bubbles, t3.cancelable, t3.detail), i3;
            }, n2.prototype = r.default.Event.prototype);
          },
          600: function(e2, t2) {
            function i2(e3) {
              return i2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, i2(e3);
            }
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = function e3() {
              var t3, n2, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = false;
              "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
              "object" !== i2(l) && "function" != typeof l && (l = {});
              for (; c < u; c++)
                if (null != (t3 = arguments[c]))
                  for (n2 in t3)
                    a = l[n2], l !== (r = t3[n2]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = false, s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, l[n2] = e3(f, s, r)) : void 0 !== r && (l[n2] = r));
              return l;
            };
          },
          4963: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            var n2 = s(i2(600)), a = s(i2(9380)), r = s(i2(253)), o = i2(3776);
            function s(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            var l = a.default.document;
            function c(e3) {
              return e3 instanceof c ? e3 : this instanceof c ? void (null != e3 && e3 !== a.default && (this[0] = e3.nodeName ? e3 : void 0 !== e3[0] && e3[0].nodeName ? e3[0] : l.querySelector(e3), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e3);
            }
            c.prototype = {
              on: o.on,
              off: o.off,
              trigger: o.trigger
            }, c.extend = n2.default, c.data = r.default, c.Event = o.Event;
            var u = c;
            t2.default = u;
          },
          9845: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.mobile = t2.iphone = t2.ie = void 0;
            var n2, a = (n2 = i2(9380)) && n2.__esModule ? n2 : {
              default: n2
            };
            var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
            t2.iphone = l, t2.mobile = s, t2.ie = o;
          },
          7184: function(e2, t2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = function(e3) {
              return e3.replace(i2, "\\$1");
            };
            var i2 = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
          },
          6030: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.EventHandlers = void 0;
            var n2 = i2(8711), a = i2(2839), r = i2(9845), o = i2(7215), s = i2(7760), l = i2(4713);
            function c(e3, t3) {
              var i3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
              if (!i3) {
                if (Array.isArray(e3) || (i3 = function(e4, t4) {
                  if (!e4)
                    return;
                  if ("string" == typeof e4)
                    return u(e4, t4);
                  var i4 = Object.prototype.toString.call(e4).slice(8, -1);
                  "Object" === i4 && e4.constructor && (i4 = e4.constructor.name);
                  if ("Map" === i4 || "Set" === i4)
                    return Array.from(e4);
                  if ("Arguments" === i4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i4))
                    return u(e4, t4);
                }(e3)) || t3 && e3 && "number" == typeof e3.length) {
                  i3 && (e3 = i3);
                  var n3 = 0, a2 = function() {
                  };
                  return {
                    s: a2,
                    n: function() {
                      return n3 >= e3.length ? {
                        done: true
                      } : {
                        done: false,
                        value: e3[n3++]
                      };
                    },
                    e: function(e4) {
                      throw e4;
                    },
                    f: a2
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var r2, o2 = true, s2 = false;
              return {
                s: function() {
                  i3 = i3.call(e3);
                },
                n: function() {
                  var e4 = i3.next();
                  return o2 = e4.done, e4;
                },
                e: function(e4) {
                  s2 = true, r2 = e4;
                },
                f: function() {
                  try {
                    o2 || null == i3.return || i3.return();
                  } finally {
                    if (s2)
                      throw r2;
                  }
                }
              };
            }
            function u(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var i3 = 0, n3 = new Array(t3); i3 < t3; i3++)
                n3[i3] = e3[i3];
              return n3;
            }
            var f = {
              keyEvent: function(e3, t3, i3, c2, u2) {
                var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e3.key, k = n2.caret.call(d, m), b = p.onKeyDown.call(this, e3, n2.getBuffer.call(d), k, p);
                if (void 0 !== b)
                  return b;
                if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e3.ctrlKey && y === a.keys.x && !("oncut" in m))
                  e3.preventDefault(), o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n2.getBuffer.call(d, true), v.p, e3, m.inputmask._valueGet() !== n2.getBuffer.call(d).join(""));
                else if (y === a.keys.End || y === a.keys.PageDown) {
                  e3.preventDefault();
                  var x = n2.seekNext.call(d, n2.getLastValidPosition.call(d));
                  n2.caret.call(d, m, e3.shiftKey ? k.begin : x, x, true);
                } else
                  y === a.keys.Home && !e3.shiftKey || y === a.keys.PageUp ? (e3.preventDefault(), n2.caret.call(d, m, 0, e3.shiftKey ? k.begin : 0, true)) : p.undoOnEscape && y === a.keys.Escape && true !== e3.altKey ? ((0, s.checkVal)(m, true, false, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e3.shiftKey || e3.ctrlKey || void 0 !== d.userOptions.insertMode ? true === p.tabThrough && y === a.keys.Tab ? true === e3.shiftKey ? (k.end = n2.seekPrevious.call(d, k.end, true), true === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n2.seekPrevious.call(d, k.end, true), k.begin >= 0 && k.end > 0 && (e3.preventDefault(), n2.caret.call(d, m, k.begin, k.end))) : (k.begin = n2.seekNext.call(d, k.begin, true), k.end = n2.seekNext.call(d, k.begin, true), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e3.preventDefault(), n2.caret.call(d, m, k.begin, k.end))) : e3.shiftKey || p.insertModeVisual && false === p.insertMode && (y === a.keys.ArrowRight ? setTimeout(function() {
                    var e4 = n2.caret.call(d, m);
                    n2.caret.call(d, m, e4.begin);
                  }, 0) : y === a.keys.ArrowLeft && setTimeout(function() {
                    var e4 = n2.translatePosition.call(d, m.inputmask.caretPos.begin);
                    n2.translatePosition.call(d, m.inputmask.caretPos.end);
                    d.isRTL ? n2.caret.call(d, m, e4 + (e4 === v.maskLength ? 0 : 1)) : n2.caret.call(d, m, e4 - (0 === e4 ? 0 : 1));
                  }, 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, n2.caret.call(d, m, k.begin, k.begin));
                return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), f.keypressEvent.call(this, e3, t3, i3, c2, u2);
              },
              keypressEvent: function(e3, t3, i3, r2, l2) {
                var c2 = this.inputmask || this, u2 = c2.opts, f2 = c2.dependencyLib, d = c2.maskset, p = c2.el, h = f2(p), v = e3.key;
                if (true === t3 || e3.ctrlKey && e3.altKey || !(e3.ctrlKey || e3.metaKey || c2.ignorable)) {
                  if (v) {
                    var m, g = t3 ? {
                      begin: l2,
                      end: l2
                    } : n2.caret.call(c2, p);
                    v = u2.substitutes[v] || v, d.writeOutBuffer = true;
                    var y = o.isValid.call(c2, g, v, r2, void 0, void 0, void 0, t3);
                    if (false !== y && (n2.resetMaskSet.call(c2, true), m = void 0 !== y.caret ? y.caret : n2.seekNext.call(c2, y.pos.begin ? y.pos.begin : y.pos), d.p = m), m = u2.numericInput && void 0 === y.caret ? n2.seekPrevious.call(c2, m) : m, false !== i3 && (setTimeout(function() {
                      u2.onKeyValidation.call(p, v, y);
                    }, 0), d.writeOutBuffer && false !== y)) {
                      var k = n2.getBuffer.call(c2);
                      (0, s.writeBuffer)(p, k, m, e3, true !== t3);
                    }
                    if (e3.preventDefault(), t3)
                      return false !== y && (y.forwardPosition = m), y;
                  }
                } else
                  v === a.keys.Enter && c2.undoValue !== c2._valueGet(true) && (c2.undoValue = c2._valueGet(true), setTimeout(function() {
                    h.trigger("change");
                  }, 0));
              },
              pasteEvent: function(e3) {
                var t3, i3 = this.inputmask, a2 = i3.opts, r2 = i3._valueGet(true), o2 = n2.caret.call(i3, this);
                i3.isRTL && (t3 = o2.end, o2.end = n2.translatePosition.call(i3, o2.begin), o2.begin = n2.translatePosition.call(i3, t3));
                var l2 = r2.substr(0, o2.begin), u2 = r2.substr(o2.end, r2.length);
                if (l2 == (i3.isRTL ? n2.getBufferTemplate.call(i3).slice().reverse() : n2.getBufferTemplate.call(i3)).slice(0, o2.begin).join("") && (l2 = ""), u2 == (i3.isRTL ? n2.getBufferTemplate.call(i3).slice().reverse() : n2.getBufferTemplate.call(i3)).slice(o2.end).join("") && (u2 = ""), window.clipboardData && window.clipboardData.getData)
                  r2 = l2 + window.clipboardData.getData("Text") + u2;
                else {
                  if (!e3.clipboardData || !e3.clipboardData.getData)
                    return true;
                  r2 = l2 + e3.clipboardData.getData("text/plain") + u2;
                }
                var f2 = r2;
                if (i3.isRTL) {
                  f2 = f2.split("");
                  var d, p = c(n2.getBufferTemplate.call(i3));
                  try {
                    for (p.s(); !(d = p.n()).done; ) {
                      var h = d.value;
                      f2[0] === h && f2.shift();
                    }
                  } catch (e4) {
                    p.e(e4);
                  } finally {
                    p.f();
                  }
                  f2 = f2.join("");
                }
                if ("function" == typeof a2.onBeforePaste) {
                  if (false === (f2 = a2.onBeforePaste.call(i3, f2, a2)))
                    return false;
                  f2 || (f2 = r2);
                }
                (0, s.checkVal)(this, true, false, f2.toString().split(""), e3), e3.preventDefault();
              },
              inputFallBackEvent: function(e3) {
                var t3 = this.inputmask, i3 = t3.opts, o2 = t3.dependencyLib;
                var c2, u2 = this, d = u2.inputmask._valueGet(true), p = (t3.isRTL ? n2.getBuffer.call(t3).slice().reverse() : n2.getBuffer.call(t3)).join(""), h = n2.caret.call(t3, u2, void 0, void 0, true);
                if (p !== d) {
                  if (c2 = function(e4, a2, r2) {
                    for (var o3, s2, c3, u3 = e4.substr(0, r2.begin).split(""), f2 = e4.substr(r2.begin).split(""), d2 = a2.substr(0, r2.begin).split(""), p2 = a2.substr(r2.begin).split(""), h2 = u3.length >= d2.length ? u3.length : d2.length, v2 = f2.length >= p2.length ? f2.length : p2.length, m = "", g = [], y = "~"; u3.length < h2; )
                      u3.push(y);
                    for (; d2.length < h2; )
                      d2.push(y);
                    for (; f2.length < v2; )
                      f2.unshift(y);
                    for (; p2.length < v2; )
                      p2.unshift(y);
                    var k = u3.concat(f2), b = d2.concat(p2);
                    for (s2 = 0, o3 = k.length; s2 < o3; s2++)
                      switch (c3 = l.getPlaceholder.call(t3, n2.translatePosition.call(t3, s2)), m) {
                        case "insertText":
                          b[s2 - 1] === k[s2] && r2.begin == k.length - 1 && g.push(k[s2]), s2 = o3;
                          break;
                        case "insertReplacementText":
                        case "deleteContentBackward":
                          k[s2] === y ? r2.end++ : s2 = o3;
                          break;
                        default:
                          k[s2] !== b[s2] && (k[s2 + 1] !== y && k[s2 + 1] !== c3 && void 0 !== k[s2 + 1] || (b[s2] !== c3 || b[s2 + 1] !== y) && b[s2] !== y ? b[s2 + 1] === y && b[s2] === k[s2 + 1] ? (m = "insertText", g.push(k[s2]), r2.begin--, r2.end--) : k[s2] !== c3 && k[s2] !== y && (k[s2 + 1] === y || b[s2] !== k[s2] && b[s2 + 1] === k[s2 + 1]) ? (m = "insertReplacementText", g.push(k[s2]), r2.begin--) : k[s2] === y ? (m = "deleteContentBackward", (n2.isMask.call(t3, n2.translatePosition.call(t3, s2), true) || b[s2] === i3.radixPoint) && r2.end++) : s2 = o3 : (m = "insertText", g.push(k[s2]), r2.begin--, r2.end--));
                      }
                    return {
                      action: m,
                      data: g,
                      caret: r2
                    };
                  }(d, p, h), (u2.inputmask.shadowRoot || u2.ownerDocument).activeElement !== u2 && u2.focus(), (0, s.writeBuffer)(u2, n2.getBuffer.call(t3)), n2.caret.call(t3, u2, h.begin, h.end, true), !r.mobile && t3.skipNextInsert && "insertText" === e3.inputType && "insertText" === c2.action && t3.isComposing)
                    return false;
                  switch ("insertCompositionText" === e3.inputType && "insertText" === c2.action && t3.isComposing ? t3.skipNextInsert = true : t3.skipNextInsert = false, c2.action) {
                    case "insertText":
                    case "insertReplacementText":
                      c2.data.forEach(function(e4, i4) {
                        var n3 = new o2.Event("keypress");
                        n3.key = e4, t3.ignorable = false, f.keypressEvent.call(u2, n3);
                      }), setTimeout(function() {
                        t3.$el.trigger("keyup");
                      }, 0);
                      break;
                    case "deleteContentBackward":
                      var v = new o2.Event("keydown");
                      v.key = a.keys.Backspace, f.keyEvent.call(u2, v);
                      break;
                    default:
                      (0, s.applyInputValue)(u2, d), n2.caret.call(t3, u2, h.begin, h.end, true);
                  }
                  e3.preventDefault();
                }
              },
              setValueEvent: function(e3) {
                var t3 = this.inputmask, i3 = this, a2 = e3 && e3.detail ? e3.detail[0] : arguments[1];
                void 0 === a2 && (a2 = i3.inputmask._valueGet(true)), (0, s.applyInputValue)(i3, a2), (e3.detail && void 0 !== e3.detail[1] || void 0 !== arguments[2]) && n2.caret.call(t3, i3, e3.detail ? e3.detail[1] : arguments[2]);
              },
              focusEvent: function(e3) {
                var t3 = this.inputmask, i3 = t3.opts, a2 = null == t3 ? void 0 : t3._valueGet();
                i3.showMaskOnFocus && a2 !== n2.getBuffer.call(t3).join("") && (0, s.writeBuffer)(this, n2.getBuffer.call(t3), n2.seekNext.call(t3, n2.getLastValidPosition.call(t3))), true !== i3.positionCaretOnTab || false !== t3.mouseEnter || o.isComplete.call(t3, n2.getBuffer.call(t3)) && -1 !== n2.getLastValidPosition.call(t3) || f.clickEvent.apply(this, [e3, true]), t3.undoValue = null == t3 ? void 0 : t3._valueGet(true);
              },
              invalidEvent: function(e3) {
                this.inputmask.validationEvent = true;
              },
              mouseleaveEvent: function() {
                var e3 = this.inputmask, t3 = e3.opts, i3 = this;
                e3.mouseEnter = false, t3.clearMaskOnLostFocus && (i3.inputmask.shadowRoot || i3.ownerDocument).activeElement !== i3 && (0, s.HandleNativePlaceholder)(i3, e3.originalPlaceholder);
              },
              clickEvent: function(e3, t3) {
                var i3 = this.inputmask;
                i3.clicked++;
                var a2 = this;
                if ((a2.inputmask.shadowRoot || a2.ownerDocument).activeElement === a2) {
                  var r2 = n2.determineNewCaretPosition.call(i3, n2.caret.call(i3, a2), t3);
                  void 0 !== r2 && n2.caret.call(i3, a2, r2);
                }
              },
              cutEvent: function(e3) {
                var t3 = this.inputmask, i3 = t3.maskset, r2 = this, l2 = n2.caret.call(t3, r2), c2 = t3.isRTL ? n2.getBuffer.call(t3).slice(l2.end, l2.begin) : n2.getBuffer.call(t3).slice(l2.begin, l2.end), u2 = t3.isRTL ? c2.reverse().join("") : c2.join("");
                window.navigator.clipboard ? window.navigator.clipboard.writeText(u2) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u2), o.handleRemove.call(t3, r2, a.keys.Delete, l2), (0, s.writeBuffer)(r2, n2.getBuffer.call(t3), i3.p, e3, t3.undoValue !== t3._valueGet(true));
              },
              blurEvent: function(e3) {
                var t3 = this.inputmask, i3 = t3.opts, a2 = t3.dependencyLib;
                t3.clicked = 0;
                var r2 = a2(this), l2 = this;
                if (l2.inputmask) {
                  (0, s.HandleNativePlaceholder)(l2, t3.originalPlaceholder);
                  var c2 = l2.inputmask._valueGet(), u2 = n2.getBuffer.call(t3).slice();
                  "" !== c2 && (i3.clearMaskOnLostFocus && (-1 === n2.getLastValidPosition.call(t3) && c2 === n2.getBufferTemplate.call(t3).join("") ? u2 = [] : s.clearOptionalTail.call(t3, u2)), false === o.isComplete.call(t3, u2) && (setTimeout(function() {
                    r2.trigger("incomplete");
                  }, 0), i3.clearIncomplete && (n2.resetMaskSet.call(t3), u2 = i3.clearMaskOnLostFocus ? [] : n2.getBufferTemplate.call(t3).slice())), (0, s.writeBuffer)(l2, u2, void 0, e3)), t3.undoValue !== t3._valueGet(true) && (t3.undoValue = t3._valueGet(true), r2.trigger("change"));
                }
              },
              mouseenterEvent: function() {
                var e3 = this.inputmask, t3 = e3.opts.showMaskOnHover, i3 = this;
                if (e3.mouseEnter = true, (i3.inputmask.shadowRoot || i3.ownerDocument).activeElement !== i3) {
                  var a2 = (e3.isRTL ? n2.getBufferTemplate.call(e3).slice().reverse() : n2.getBufferTemplate.call(e3)).join("");
                  t3 && (0, s.HandleNativePlaceholder)(i3, a2);
                }
              },
              submitEvent: function() {
                var e3 = this.inputmask, t3 = e3.opts;
                e3.undoValue !== e3._valueGet(true) && e3.$el.trigger("change"), -1 === n2.getLastValidPosition.call(e3) && e3._valueGet && e3._valueGet() === n2.getBufferTemplate.call(e3).join("") && e3._valueSet(""), t3.clearIncomplete && false === o.isComplete.call(e3, n2.getBuffer.call(e3)) && e3._valueSet(""), t3.removeMaskOnSubmit && (e3._valueSet(e3.unmaskedvalue(), true), setTimeout(function() {
                  (0, s.writeBuffer)(e3.el, n2.getBuffer.call(e3));
                }, 0));
              },
              resetEvent: function() {
                var e3 = this.inputmask;
                e3.refreshValue = true, setTimeout(function() {
                  (0, s.applyInputValue)(e3.el, e3._valueGet(true));
                }, 0);
              }
            };
            t2.EventHandlers = f;
          },
          9716: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.EventRuler = void 0;
            var n2, a = (n2 = i2(2394)) && n2.__esModule ? n2 : {
              default: n2
            }, r = i2(2839), o = i2(8711), s = i2(7760);
            var l = {
              on: function(e3, t3, i3) {
                var n3 = e3.inputmask.dependencyLib, l2 = function(t4) {
                  t4.originalEvent && (t4 = t4.originalEvent || t4, arguments[0] = t4);
                  var l3, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                  if (void 0 === u && "FORM" !== this.nodeName) {
                    var d = n3.data(c, "_inputmask_opts");
                    n3(c).off(), d && new a.default(d).mask(c);
                  } else {
                    if (["submit", "reset", "setvalue"].includes(t4.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t4.type && t4.ctrlKey && t4.key === r.keys.c || false === f.tabThrough && t4.key === r.keys.Tab))) {
                      switch (t4.type) {
                        case "input":
                          if (true === u.skipInputEvent)
                            return u.skipInputEvent = false, t4.preventDefault();
                          break;
                        case "click":
                        case "focus":
                          return u.validationEvent ? (u.validationEvent = false, e3.blur(), (0, s.HandleNativePlaceholder)(e3, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), setTimeout(function() {
                            e3.focus();
                          }, f.validationEventTimeOut), false) : (l3 = arguments, void setTimeout(function() {
                            e3.inputmask && i3.apply(c, l3);
                          }, 0));
                      }
                      var p = i3.apply(c, arguments);
                      return false === p && (t4.preventDefault(), t4.stopPropagation()), p;
                    }
                    t4.preventDefault();
                  }
                };
                ["submit", "reset"].includes(t3) ? (l2 = l2.bind(e3), null !== e3.form && n3(e3.form).on(t3, l2)) : n3(e3).on(t3, l2), e3.inputmask.events[t3] = e3.inputmask.events[t3] || [], e3.inputmask.events[t3].push(l2);
              },
              off: function(e3, t3) {
                if (e3.inputmask && e3.inputmask.events) {
                  var i3 = e3.inputmask.dependencyLib, n3 = e3.inputmask.events;
                  for (var a2 in t3 && ((n3 = [])[t3] = e3.inputmask.events[t3]), n3) {
                    for (var r2 = n3[a2]; r2.length > 0; ) {
                      var o2 = r2.pop();
                      ["submit", "reset"].includes(a2) ? null !== e3.form && i3(e3.form).off(a2, o2) : i3(e3).off(a2, o2);
                    }
                    delete e3.inputmask.events[a2];
                  }
                }
              }
            };
            t2.EventRuler = l;
          },
          219: function(e2, t2, i2) {
            var n2 = d(i2(2394)), a = i2(2839), r = d(i2(7184)), o = i2(8711), s = i2(4713);
            function l(e3, t3) {
              return function(e4) {
                if (Array.isArray(e4))
                  return e4;
              }(e3) || function(e4, t4) {
                var i3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (null != i3) {
                  var n3, a2, r2, o2, s2 = [], l2 = true, c2 = false;
                  try {
                    if (r2 = (i3 = i3.call(e4)).next, 0 === t4) {
                      if (Object(i3) !== i3)
                        return;
                      l2 = false;
                    } else
                      for (; !(l2 = (n3 = r2.call(i3)).done) && (s2.push(n3.value), s2.length !== t4); l2 = true)
                        ;
                  } catch (e5) {
                    c2 = true, a2 = e5;
                  } finally {
                    try {
                      if (!l2 && null != i3.return && (o2 = i3.return(), Object(o2) !== o2))
                        return;
                    } finally {
                      if (c2)
                        throw a2;
                    }
                  }
                  return s2;
                }
              }(e3, t3) || function(e4, t4) {
                if (!e4)
                  return;
                if ("string" == typeof e4)
                  return c(e4, t4);
                var i3 = Object.prototype.toString.call(e4).slice(8, -1);
                "Object" === i3 && e4.constructor && (i3 = e4.constructor.name);
                if ("Map" === i3 || "Set" === i3)
                  return Array.from(e4);
                if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
                  return c(e4, t4);
              }(e3, t3) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function c(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var i3 = 0, n3 = new Array(t3); i3 < t3; i3++)
                n3[i3] = e3[i3];
              return n3;
            }
            function u(e3) {
              return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, u(e3);
            }
            function f(e3, t3) {
              for (var i3 = 0; i3 < t3.length; i3++) {
                var n3 = t3[i3];
                n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, (a2 = n3.key, r2 = void 0, r2 = function(e4, t4) {
                  if ("object" !== u(e4) || null === e4)
                    return e4;
                  var i4 = e4[Symbol.toPrimitive];
                  if (void 0 !== i4) {
                    var n4 = i4.call(e4, t4 || "default");
                    if ("object" !== u(n4))
                      return n4;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return ("string" === t4 ? String : Number)(e4);
                }(a2, "string"), "symbol" === u(r2) ? r2 : String(r2)), n3);
              }
              var a2, r2;
            }
            function d(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            var p = n2.default.dependencyLib, h = function() {
              function e3(t4, i4, n4) {
                !function(e4, t5) {
                  if (!(e4 instanceof t5))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e3), this.mask = t4, this.format = i4, this.opts = n4, this._date = new Date(1, 0, 1), this.initDateObject(t4, this.opts);
              }
              var t3, i3, n3;
              return t3 = e3, (i3 = [{
                key: "date",
                get: function() {
                  return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date;
                }
              }, {
                key: "initDateObject",
                value: function(e4, t4) {
                  var i4;
                  for (P(t4).lastIndex = 0; i4 = P(t4).exec(this.format); ) {
                    var n4 = new RegExp("\\d+$").exec(i4[0]), a2 = n4 ? i4[0][0] + "x" : i4[0], r2 = void 0;
                    if (void 0 !== e4) {
                      if (n4) {
                        var o2 = P(t4).lastIndex, s2 = E(i4.index, t4);
                        P(t4).lastIndex = o2, r2 = e4.slice(0, e4.indexOf(s2.nextMatch[0]));
                      } else
                        r2 = e4.slice(0, g[a2] && g[a2][4] || a2.length);
                      e4 = e4.slice(r2.length);
                    }
                    Object.prototype.hasOwnProperty.call(g, a2) && this.setValue(this, r2, a2, g[a2][2], g[a2][1]);
                  }
                }
              }, {
                key: "setValue",
                value: function(e4, t4, i4, n4, a2) {
                  if (void 0 !== t4 && (e4[n4] = "ampm" === n4 ? t4 : t4.replace(/[^0-9]/g, "0"), e4["raw" + n4] = t4.replace(/\s/g, "_")), void 0 !== a2) {
                    var r2 = e4[n4];
                    ("day" === n4 && 29 === parseInt(r2) || "month" === n4 && 2 === parseInt(r2)) && (29 !== parseInt(e4.day) || 2 !== parseInt(e4.month) || "" !== e4.year && void 0 !== e4.year || e4._date.setFullYear(2012, 1, 29)), "day" === n4 && (m = true, 0 === parseInt(r2) && (r2 = 1)), "month" === n4 && (m = true), "year" === n4 && (m = true, r2.length < 4 && (r2 = M(r2, 4, true))), "" === r2 || isNaN(r2) || a2.call(e4._date, r2), "ampm" === n4 && a2.call(e4._date, r2);
                  }
                }
              }, {
                key: "reset",
                value: function() {
                  this._date = new Date(1, 0, 1);
                }
              }, {
                key: "reInit",
                value: function() {
                  this._date = void 0, this.date;
                }
              }]) && f(t3.prototype, i3), n3 && f(t3, n3), Object.defineProperty(t3, "prototype", {
                writable: false
              }), e3;
            }(), v = (/* @__PURE__ */ new Date()).getFullYear(), m = false, g = {
              d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
              dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return M(Date.prototype.getDate.call(this), 2);
              }],
              ddd: [""],
              dddd: [""],
              m: ["[1-9]|1[012]", function(e3) {
                var t3 = e3 ? parseInt(e3) : 0;
                return t3 > 0 && t3--, Date.prototype.setMonth.call(this, t3);
              }, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
              }],
              mm: ["0[1-9]|1[012]", function(e3) {
                var t3 = e3 ? parseInt(e3) : 0;
                return t3 > 0 && t3--, Date.prototype.setMonth.call(this, t3);
              }, "month", function() {
                return M(Date.prototype.getMonth.call(this) + 1, 2);
              }],
              mmm: [""],
              mmmm: [""],
              yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return M(Date.prototype.getFullYear.call(this), 2);
              }],
              yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return M(Date.prototype.getFullYear.call(this), 4);
              }],
              h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return M(Date.prototype.getHours.call(this), 2);
              }],
              hx: [function(e3) {
                return "[0-9]{".concat(e3, "}");
              }, Date.prototype.setHours, "hours", function(e3) {
                return Date.prototype.getHours;
              }],
              H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return M(Date.prototype.getHours.call(this), 2);
              }],
              Hx: [function(e3) {
                return "[0-9]{".concat(e3, "}");
              }, Date.prototype.setHours, "hours", function(e3) {
                return function() {
                  return M(Date.prototype.getHours.call(this), e3);
                };
              }],
              M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
              MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return M(Date.prototype.getMinutes.call(this), 2);
              }],
              s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
              ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return M(Date.prototype.getSeconds.call(this), 2);
              }],
              l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return M(Date.prototype.getMilliseconds.call(this), 3);
              }, 3],
              L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return M(Date.prototype.getMilliseconds.call(this), 2);
              }, 2],
              t: ["[ap]", k, "ampm", b, 1],
              tt: ["[ap]m", k, "ampm", b, 2],
              T: ["[AP]", k, "ampm", b, 1],
              TT: ["[AP]M", k, "ampm", b, 2],
              Z: [".*", void 0, "Z", function() {
                var e3 = this.toString().match(/\((.+)\)/)[1];
                e3.includes(" ") && (e3 = (e3 = e3.replace("-", " ").toUpperCase()).split(" ").map(function(e4) {
                  return l(e4, 1)[0];
                }).join(""));
                return e3;
              }],
              o: [""],
              S: [""]
            }, y = {
              isoDate: "yyyy-mm-dd",
              isoTime: "HH:MM:ss",
              isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
              isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
            function k(e3) {
              var t3 = this.getHours();
              e3.toLowerCase().includes("p") ? this.setHours(t3 + 12) : e3.toLowerCase().includes("a") && t3 >= 12 && this.setHours(t3 - 12);
            }
            function b() {
              var e3 = this.getHours();
              return (e3 = e3 || 12) >= 12 ? "PM" : "AM";
            }
            function x(e3) {
              var t3 = new RegExp("\\d+$").exec(e3[0]);
              if (t3 && void 0 !== t3[0]) {
                var i3 = g[e3[0][0] + "x"].slice("");
                return i3[0] = i3[0](t3[0]), i3[3] = i3[3](t3[0]), i3;
              }
              if (g[e3[0]])
                return g[e3[0]];
            }
            function P(e3) {
              if (!e3.tokenizer) {
                var t3 = [], i3 = [];
                for (var n3 in g)
                  if (/\.*x$/.test(n3)) {
                    var a2 = n3[0] + "\\d+";
                    -1 === i3.indexOf(a2) && i3.push(a2);
                  } else
                    -1 === t3.indexOf(n3[0]) && t3.push(n3[0]);
                e3.tokenizer = "(" + (i3.length > 0 ? i3.join("|") + "|" : "") + t3.join("+|") + ")+?|.", e3.tokenizer = new RegExp(e3.tokenizer, "g");
              }
              return e3.tokenizer;
            }
            function w(e3, t3, i3) {
              if (!m)
                return true;
              if (void 0 === e3.rawday || !isFinite(e3.rawday) && new Date(e3.date.getFullYear(), isFinite(e3.rawmonth) ? e3.month : e3.date.getMonth() + 1, 0).getDate() >= e3.day || "29" == e3.day && (!isFinite(e3.rawyear) || void 0 === e3.rawyear || "" === e3.rawyear) || new Date(e3.date.getFullYear(), isFinite(e3.rawmonth) ? e3.month : e3.date.getMonth() + 1, 0).getDate() >= e3.day)
                return t3;
              if ("29" == e3.day) {
                var n3 = E(t3.pos, i3);
                if ("yyyy" === n3.targetMatch[0] && t3.pos - n3.targetMatchIndex == 2)
                  return t3.remove = t3.pos + 1, t3;
              } else if ("02" == e3.month && "30" == e3.day && void 0 !== t3.c)
                return e3.day = "03", e3.date.setDate(3), e3.date.setMonth(1), t3.insert = [{
                  pos: t3.pos,
                  c: "0"
                }, {
                  pos: t3.pos + 1,
                  c: t3.c
                }], t3.caret = o.seekNext.call(this, t3.pos + 1), t3;
              return false;
            }
            function S(e3, t3, i3, n3) {
              var a2, o2, s2 = "";
              for (P(i3).lastIndex = 0; a2 = P(i3).exec(e3); ) {
                if (void 0 === t3)
                  if (o2 = x(a2))
                    s2 += "(" + o2[0] + ")";
                  else
                    switch (a2[0]) {
                      case "[":
                        s2 += "(";
                        break;
                      case "]":
                        s2 += ")?";
                        break;
                      default:
                        s2 += (0, r.default)(a2[0]);
                    }
                else if (o2 = x(a2))
                  if (true !== n3 && o2[3])
                    s2 += o2[3].call(t3.date);
                  else
                    o2[2] ? s2 += t3["raw" + o2[2]] : s2 += a2[0];
                else
                  s2 += a2[0];
              }
              return s2;
            }
            function M(e3, t3, i3) {
              for (e3 = String(e3), t3 = t3 || 2; e3.length < t3; )
                e3 = i3 ? e3 + "0" : "0" + e3;
              return e3;
            }
            function _(e3, t3, i3) {
              return "string" == typeof e3 ? new h(e3, t3, i3) : e3 && "object" === u(e3) && Object.prototype.hasOwnProperty.call(e3, "date") ? e3 : void 0;
            }
            function O(e3, t3) {
              return S(t3.inputFormat, {
                date: e3
              }, t3);
            }
            function E(e3, t3) {
              var i3, n3, a2 = 0, r2 = 0;
              for (P(t3).lastIndex = 0; n3 = P(t3).exec(t3.inputFormat); ) {
                var o2 = new RegExp("\\d+$").exec(n3[0]);
                if ((a2 += r2 = o2 ? parseInt(o2[0]) : n3[0].length) >= e3 + 1) {
                  i3 = n3, n3 = P(t3).exec(t3.inputFormat);
                  break;
                }
              }
              return {
                targetMatchIndex: a2 - r2,
                nextMatch: n3,
                targetMatch: i3
              };
            }
            n2.default.extendAliases({
              datetime: {
                mask: function(e3) {
                  return e3.numericInput = false, g.S = e3.i18n.ordinalSuffix.join("|"), e3.inputFormat = y[e3.inputFormat] || e3.inputFormat, e3.displayFormat = y[e3.displayFormat] || e3.displayFormat || e3.inputFormat, e3.outputFormat = y[e3.outputFormat] || e3.outputFormat || e3.inputFormat, e3.placeholder = "" !== e3.placeholder ? e3.placeholder : e3.inputFormat.replace(/[[\]]/, ""), e3.regex = S(e3.inputFormat, void 0, e3), e3.min = _(e3.min, e3.inputFormat, e3), e3.max = _(e3.max, e3.inputFormat, e3), null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: null,
                outputFormat: null,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                  dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                  ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function(e3, t3, i3, n3, a2, r2, o2, s2) {
                  if (s2)
                    return true;
                  if (isNaN(i3) && e3[t3] !== i3) {
                    var l2 = E(t3, a2);
                    if (l2.nextMatch && l2.nextMatch[0] === i3 && l2.targetMatch[0].length > 1) {
                      var c2 = g[l2.targetMatch[0]][0];
                      if (new RegExp(c2).test("0" + e3[t3 - 1]))
                        return e3[t3] = e3[t3 - 1], e3[t3 - 1] = "0", {
                          fuzzy: true,
                          buffer: e3,
                          refreshFromBuffer: {
                            start: t3 - 1,
                            end: t3 + 1
                          },
                          pos: t3 + 1
                        };
                    }
                  }
                  return true;
                },
                postValidation: function(e3, t3, i3, n3, a2, r2, o2, l2) {
                  var c2, u2;
                  if (o2)
                    return true;
                  if (false === n3 && (((c2 = E(t3 + 1, a2)).targetMatch && c2.targetMatchIndex === t3 && c2.targetMatch[0].length > 1 && void 0 !== g[c2.targetMatch[0]] || (c2 = E(t3 + 2, a2)).targetMatch && c2.targetMatchIndex === t3 + 1 && c2.targetMatch[0].length > 1 && void 0 !== g[c2.targetMatch[0]]) && (u2 = g[c2.targetMatch[0]][0]), void 0 !== u2 && (void 0 !== r2.validPositions[t3 + 1] && new RegExp(u2).test(i3 + "0") ? (e3[t3] = i3, e3[t3 + 1] = "0", n3 = {
                    pos: t3 + 2,
                    caret: t3
                  }) : new RegExp(u2).test("0" + i3) && (e3[t3] = "0", e3[t3 + 1] = i3, n3 = {
                    pos: t3 + 2
                  })), false === n3))
                    return n3;
                  if (n3.fuzzy && (e3 = n3.buffer, t3 = n3.pos), (c2 = E(t3, a2)).targetMatch && c2.targetMatch[0] && void 0 !== g[c2.targetMatch[0]]) {
                    var f2 = g[c2.targetMatch[0]];
                    u2 = f2[0];
                    var d2 = e3.slice(c2.targetMatchIndex, c2.targetMatchIndex + c2.targetMatch[0].length);
                    if (false === new RegExp(u2).test(d2.join("")) && 2 === c2.targetMatch[0].length && r2.validPositions[c2.targetMatchIndex] && r2.validPositions[c2.targetMatchIndex + 1] && (r2.validPositions[c2.targetMatchIndex + 1].input = "0"), "year" == f2[2])
                      for (var p2 = s.getMaskTemplate.call(this, false, 1, void 0, true), h2 = t3 + 1; h2 < e3.length; h2++)
                        e3[h2] = p2[h2], delete r2.validPositions[h2];
                  }
                  var m2 = n3, y2 = _(e3.join(""), a2.inputFormat, a2);
                  return m2 && !isNaN(y2.date.getTime()) && (a2.prefillYear && (m2 = function(e4, t4, i4) {
                    if (e4.year !== e4.rawyear) {
                      var n4 = v.toString(), a3 = e4.rawyear.replace(/[^0-9]/g, ""), r3 = n4.slice(0, a3.length), o3 = n4.slice(a3.length);
                      if (2 === a3.length && a3 === r3) {
                        var s2 = new Date(v, e4.month - 1, e4.day);
                        e4.day == s2.getDate() && (!i4.max || i4.max.date.getTime() >= s2.getTime()) && (e4.date.setFullYear(v), e4.year = n4, t4.insert = [{
                          pos: t4.pos + 1,
                          c: o3[0]
                        }, {
                          pos: t4.pos + 2,
                          c: o3[1]
                        }]);
                      }
                    }
                    return t4;
                  }(y2, m2, a2)), m2 = function(e4, t4, i4, n4, a3) {
                    if (!t4)
                      return t4;
                    if (t4 && i4.min && !isNaN(i4.min.date.getTime())) {
                      var r3;
                      for (e4.reset(), P(i4).lastIndex = 0; r3 = P(i4).exec(i4.inputFormat); ) {
                        var o3;
                        if ((o3 = x(r3)) && o3[3]) {
                          for (var s2 = o3[1], l3 = e4[o3[2]], c3 = i4.min[o3[2]], u3 = i4.max ? i4.max[o3[2]] : c3, f3 = [], d3 = false, p3 = 0; p3 < c3.length; p3++)
                            void 0 !== n4.validPositions[p3 + r3.index] || d3 ? (f3[p3] = l3[p3], d3 = d3 || l3[p3] > c3[p3]) : (f3[p3] = c3[p3], "year" === o3[2] && l3.length - 1 == p3 && c3 != u3 && (f3 = (parseInt(f3.join("")) + 1).toString().split("")), "ampm" === o3[2] && c3 != u3 && i4.min.date.getTime() > e4.date.getTime() && (f3[p3] = u3[p3]));
                          s2.call(e4._date, f3.join(""));
                        }
                      }
                      t4 = i4.min.date.getTime() <= e4.date.getTime(), e4.reInit();
                    }
                    return t4 && i4.max && (isNaN(i4.max.date.getTime()) || (t4 = i4.max.date.getTime() >= e4.date.getTime())), t4;
                  }(y2, m2 = w.call(this, y2, m2, a2), a2, r2)), void 0 !== t3 && m2 && n3.pos !== t3 ? {
                    buffer: S(a2.inputFormat, y2, a2).split(""),
                    refreshFromBuffer: {
                      start: t3,
                      end: n3.pos
                    },
                    pos: n3.caret || n3.pos
                  } : m2;
                },
                onKeyDown: function(e3, t3, i3, n3) {
                  e3.ctrlKey && e3.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(/* @__PURE__ */ new Date(), n3)), p(this).trigger("setvalue"));
                },
                onUnMask: function(e3, t3, i3) {
                  return t3 ? S(i3.outputFormat, _(e3, i3.inputFormat, i3), i3, true) : t3;
                },
                casing: function(e3, t3, i3, n3) {
                  return 0 == t3.nativeDef.indexOf("[ap]") ? e3.toLowerCase() : 0 == t3.nativeDef.indexOf("[AP]") ? e3.toUpperCase() : e3;
                },
                onBeforeMask: function(e3, t3) {
                  return "[object Date]" === Object.prototype.toString.call(e3) && (e3 = O(e3, t3)), e3;
                },
                insertMode: false,
                insertModeVisual: false,
                shiftPositions: false,
                keepStatic: false,
                inputmode: "numeric",
                prefillYear: true
              }
            });
          },
          3851: function(e2, t2, i2) {
            var n2, a = (n2 = i2(2394)) && n2.__esModule ? n2 : {
              default: n2
            }, r = i2(8711), o = i2(4713);
            a.default.extendDefinitions({
              A: {
                validator: "[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                casing: "upper"
              },
              "&": {
                validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]",
                casing: "upper"
              },
              "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
              }
            });
            var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
            function l(e3, t3, i3, n3, a2) {
              return i3 - 1 > -1 && "." !== t3.buffer[i3 - 1] ? (e3 = t3.buffer[i3 - 1] + e3, e3 = i3 - 2 > -1 && "." !== t3.buffer[i3 - 2] ? t3.buffer[i3 - 2] + e3 : "0" + e3) : e3 = "00" + e3, s.test(e3);
            }
            a.default.extendAliases({
              cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
              },
              url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: false,
                keepStatic: false,
                tabThrough: true
              },
              ip: {
                mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                definitions: {
                  i: {
                    validator: l
                  },
                  j: {
                    validator: l
                  },
                  k: {
                    validator: l
                  },
                  l: {
                    validator: l
                  }
                },
                onUnMask: function(e3, t3, i3) {
                  return e3;
                },
                inputmode: "decimal",
                substitutes: {
                  ",": "."
                }
              },
              email: {
                mask: function(e3) {
                  var t3 = e3.separator, i3 = e3.quantifier, n3 = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a2 = n3;
                  if (t3)
                    for (var r2 = 0; r2 < i3; r2++)
                      a2 += "[".concat(t3).concat(n3, "]");
                  return a2;
                },
                greedy: false,
                casing: "lower",
                separator: null,
                quantifier: 5,
                skipOptionalPartCharacter: "",
                onBeforePaste: function(e3, t3) {
                  return (e3 = e3.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                  "*": {
                    validator: "[0-9\uFF11-\uFF19A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5!#$%&'*+/=?^_`{|}~-]"
                  },
                  "-": {
                    validator: "[0-9A-Za-z-]"
                  }
                },
                onUnMask: function(e3, t3, i3) {
                  return e3;
                },
                inputmode: "email"
              },
              mac: {
                mask: "##:##:##:##:##:##"
              },
              vin: {
                mask: "V{13}9{4}",
                definitions: {
                  V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    casing: "upper"
                  }
                },
                clearIncomplete: true,
                autoUnmask: true
              },
              ssn: {
                mask: "999-99-9999",
                postValidation: function(e3, t3, i3, n3, a2, s2, l2) {
                  var c = o.getMaskTemplate.call(this, true, r.getLastValidPosition.call(this), true, true);
                  return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                }
              }
            });
          },
          207: function(e2, t2, i2) {
            var n2 = s(i2(2394)), a = s(i2(7184)), r = i2(8711), o = i2(2839);
            function s(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            var l = n2.default.dependencyLib;
            function c(e3, t3) {
              for (var i3 = "", a2 = 0; a2 < e3.length; a2++)
                n2.default.prototype.definitions[e3.charAt(a2)] || t3.definitions[e3.charAt(a2)] || t3.optionalmarker[0] === e3.charAt(a2) || t3.optionalmarker[1] === e3.charAt(a2) || t3.quantifiermarker[0] === e3.charAt(a2) || t3.quantifiermarker[1] === e3.charAt(a2) || t3.groupmarker[0] === e3.charAt(a2) || t3.groupmarker[1] === e3.charAt(a2) || t3.alternatormarker === e3.charAt(a2) ? i3 += "\\" + e3.charAt(a2) : i3 += e3.charAt(a2);
              return i3;
            }
            function u(e3, t3, i3, n3) {
              if (e3.length > 0 && t3 > 0 && (!i3.digitsOptional || n3)) {
                var a2 = e3.indexOf(i3.radixPoint), r2 = false;
                i3.negationSymbol.back === e3[e3.length - 1] && (r2 = true, e3.length--), -1 === a2 && (e3.push(i3.radixPoint), a2 = e3.length - 1);
                for (var o2 = 1; o2 <= t3; o2++)
                  isFinite(e3[a2 + o2]) || (e3[a2 + o2] = "0");
              }
              return r2 && e3.push(i3.negationSymbol.back), e3;
            }
            function f(e3, t3) {
              var i3 = 0;
              for (var n3 in "+" === e3 && (i3 = r.seekNext.call(this, t3.validPositions.length - 1)), t3.tests)
                if ((n3 = parseInt(n3)) >= i3) {
                  for (var a2 = 0, o2 = t3.tests[n3].length; a2 < o2; a2++)
                    if ((void 0 === t3.validPositions[n3] || "-" === e3) && t3.tests[n3][a2].match.def === e3)
                      return n3 + (void 0 !== t3.validPositions[n3] && "-" !== e3 ? 1 : 0);
                }
              return i3;
            }
            function d(e3, t3) {
              for (var i3 = -1, n3 = 0, a2 = t3.validPositions.length; n3 < a2; n3++) {
                var r2 = t3.validPositions[n3];
                if (r2 && r2.match.def === e3) {
                  i3 = n3;
                  break;
                }
              }
              return i3;
            }
            function p(e3, t3, i3, n3, a2) {
              var r2 = t3.buffer ? t3.buffer.indexOf(a2.radixPoint) : -1, o2 = (-1 !== r2 || n3 && a2.jitMasking) && new RegExp(a2.definitions[9].validator).test(e3);
              return a2._radixDance && -1 !== r2 && o2 && null == t3.validPositions[r2] ? {
                insert: {
                  pos: r2 === i3 ? r2 + 1 : r2,
                  c: a2.radixPoint
                },
                pos: i3
              } : o2;
            }
            n2.default.extendAliases({
              numeric: {
                mask: function(e3) {
                  e3.repeat = 0, e3.groupSeparator === e3.radixPoint && e3.digits && "0" !== e3.digits && ("." === e3.radixPoint ? e3.groupSeparator = "," : "," === e3.radixPoint ? e3.groupSeparator = "." : e3.groupSeparator = ""), " " === e3.groupSeparator && (e3.skipOptionalPartCharacter = void 0), e3.placeholder.length > 1 && (e3.placeholder = e3.placeholder.charAt(0)), "radixFocus" === e3.positionCaretOnClick && "" === e3.placeholder && (e3.positionCaretOnClick = "lvp");
                  var t3 = "0", i3 = e3.radixPoint;
                  true === e3.numericInput && void 0 === e3.__financeInput ? (t3 = "1", e3.positionCaretOnClick = "radixFocus" === e3.positionCaretOnClick ? "lvp" : e3.positionCaretOnClick, e3.digitsOptional = false, isNaN(e3.digits) && (e3.digits = 2), e3._radixDance = false, i3 = "," === e3.radixPoint ? "?" : "!", "" !== e3.radixPoint && void 0 === e3.definitions[i3] && (e3.definitions[i3] = {}, e3.definitions[i3].validator = "[" + e3.radixPoint + "]", e3.definitions[i3].placeholder = e3.radixPoint, e3.definitions[i3].static = true, e3.definitions[i3].generated = true)) : (e3.__financeInput = false, e3.numericInput = true);
                  var n3, r2 = "[+]";
                  if (r2 += c(e3.prefix, e3), "" !== e3.groupSeparator ? (void 0 === e3.definitions[e3.groupSeparator] && (e3.definitions[e3.groupSeparator] = {}, e3.definitions[e3.groupSeparator].validator = "[" + e3.groupSeparator + "]", e3.definitions[e3.groupSeparator].placeholder = e3.groupSeparator, e3.definitions[e3.groupSeparator].static = true, e3.definitions[e3.groupSeparator].generated = true), r2 += e3._mask(e3)) : r2 += "9{+}", void 0 !== e3.digits && 0 !== e3.digits) {
                    var o2 = e3.digits.toString().split(",");
                    isFinite(o2[0]) && o2[1] && isFinite(o2[1]) ? r2 += i3 + t3 + "{" + e3.digits + "}" : (isNaN(e3.digits) || parseInt(e3.digits) > 0) && (e3.digitsOptional || e3.jitMasking ? (n3 = r2 + i3 + t3 + "{0," + e3.digits + "}", e3.keepStatic = true) : r2 += i3 + t3 + "{" + e3.digits + "}");
                  } else
                    e3.inputmode = "numeric";
                  return r2 += c(e3.suffix, e3), r2 += "[-]", n3 && (r2 = [n3 + c(e3.suffix, e3) + "[-]", r2]), e3.greedy = false, function(e4) {
                    void 0 === e4.parseMinMaxOptions && (null !== e4.min && (e4.min = e4.min.toString().replace(new RegExp((0, a.default)(e4.groupSeparator), "g"), ""), "," === e4.radixPoint && (e4.min = e4.min.replace(e4.radixPoint, ".")), e4.min = isFinite(e4.min) ? parseFloat(e4.min) : NaN, isNaN(e4.min) && (e4.min = Number.MIN_VALUE)), null !== e4.max && (e4.max = e4.max.toString().replace(new RegExp((0, a.default)(e4.groupSeparator), "g"), ""), "," === e4.radixPoint && (e4.max = e4.max.replace(e4.radixPoint, ".")), e4.max = isFinite(e4.max) ? parseFloat(e4.max) : NaN, isNaN(e4.max) && (e4.max = Number.MAX_VALUE)), e4.parseMinMaxOptions = "done");
                  }(e3), "" !== e3.radixPoint && e3.substituteRadixPoint && (e3.substitutes["." == e3.radixPoint ? "," : "."] = e3.radixPoint), r2;
                },
                _mask: function(e3) {
                  return "(" + e3.groupSeparator + "999){+|1}";
                },
                digits: "*",
                digitsOptional: true,
                enforceDigitsOnBlur: false,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: true,
                groupSeparator: "",
                allowMinus: true,
                negationSymbol: {
                  front: "-",
                  back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: false,
                step: 1,
                inputType: "text",
                unmaskAsNumber: false,
                roundingFN: Math.round,
                inputmode: "decimal",
                shortcuts: {
                  k: "1000",
                  m: "1000000"
                },
                placeholder: "0",
                greedy: false,
                rightAlign: true,
                insertMode: true,
                autoUnmask: false,
                skipOptionalPartCharacter: "",
                usePrototypeDefinitions: false,
                stripLeadingZeroes: true,
                substituteRadixPoint: true,
                definitions: {
                  0: {
                    validator: p
                  },
                  1: {
                    validator: p,
                    definitionSymbol: "9"
                  },
                  9: {
                    validator: "[0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9]",
                    definitionSymbol: "*"
                  },
                  "+": {
                    validator: function(e3, t3, i3, n3, a2) {
                      return a2.allowMinus && ("-" === e3 || e3 === a2.negationSymbol.front);
                    }
                  },
                  "-": {
                    validator: function(e3, t3, i3, n3, a2) {
                      return a2.allowMinus && e3 === a2.negationSymbol.back;
                    }
                  }
                },
                preValidation: function(e3, t3, i3, n3, a2, r2, o2, s2) {
                  if (false !== a2.__financeInput && i3 === a2.radixPoint)
                    return false;
                  var l2 = e3.indexOf(a2.radixPoint), c2 = t3;
                  if (t3 = function(e4, t4, i4, n4, a3) {
                    return a3._radixDance && a3.numericInput && t4 !== a3.negationSymbol.back && e4 <= i4 && (i4 > 0 || t4 == a3.radixPoint) && (void 0 === n4.validPositions[e4 - 1] || n4.validPositions[e4 - 1].input !== a3.negationSymbol.back) && (e4 -= 1), e4;
                  }(t3, i3, l2, r2, a2), "-" === i3 || i3 === a2.negationSymbol.front) {
                    if (true !== a2.allowMinus)
                      return false;
                    var u2 = false, p2 = d("+", r2), h = d("-", r2);
                    return -1 !== p2 && (u2 = [p2, h]), false !== u2 ? {
                      remove: u2,
                      caret: c2 - a2.negationSymbol.back.length
                    } : {
                      insert: [{
                        pos: f.call(this, "+", r2),
                        c: a2.negationSymbol.front,
                        fromIsValid: true
                      }, {
                        pos: f.call(this, "-", r2),
                        c: a2.negationSymbol.back,
                        fromIsValid: void 0
                      }],
                      caret: c2 + a2.negationSymbol.back.length
                    };
                  }
                  if (i3 === a2.groupSeparator)
                    return {
                      caret: c2
                    };
                  if (s2)
                    return true;
                  if (-1 !== l2 && true === a2._radixDance && false === n3 && i3 === a2.radixPoint && void 0 !== a2.digits && (isNaN(a2.digits) || parseInt(a2.digits) > 0) && l2 !== t3)
                    return {
                      caret: a2._radixDance && t3 === l2 - 1 ? l2 + 1 : l2
                    };
                  if (false === a2.__financeInput) {
                    if (n3) {
                      if (a2.digitsOptional)
                        return {
                          rewritePosition: o2.end
                        };
                      if (!a2.digitsOptional) {
                        if (o2.begin > l2 && o2.end <= l2)
                          return i3 === a2.radixPoint ? {
                            insert: {
                              pos: l2 + 1,
                              c: "0",
                              fromIsValid: true
                            },
                            rewritePosition: l2
                          } : {
                            rewritePosition: l2 + 1
                          };
                        if (o2.begin < l2)
                          return {
                            rewritePosition: o2.begin - 1
                          };
                      }
                    } else if (!a2.showMaskOnHover && !a2.showMaskOnFocus && !a2.digitsOptional && a2.digits > 0 && "" === this.__valueGet.call(this.el))
                      return {
                        rewritePosition: l2
                      };
                  }
                  return {
                    rewritePosition: t3
                  };
                },
                postValidation: function(e3, t3, i3, n3, a2, r2, o2) {
                  if (false === n3)
                    return n3;
                  if (o2)
                    return true;
                  if (null !== a2.min || null !== a2.max) {
                    var s2 = a2.onUnMask(e3.slice().reverse().join(""), void 0, l.extend({}, a2, {
                      unmaskAsNumber: true
                    }));
                    if (null !== a2.min && s2 < a2.min && (s2.toString().length > a2.min.toString().length || s2 < 0))
                      return false;
                    if (null !== a2.max && s2 > a2.max)
                      return !!a2.SetMaxOnOverflow && {
                        refreshFromBuffer: true,
                        buffer: u(a2.max.toString().replace(".", a2.radixPoint).split(""), a2.digits, a2).reverse()
                      };
                  }
                  return n3;
                },
                onUnMask: function(e3, t3, i3) {
                  if ("" === t3 && true === i3.nullable)
                    return t3;
                  var n3 = e3.replace(i3.prefix, "");
                  return n3 = (n3 = n3.replace(i3.suffix, "")).replace(new RegExp((0, a.default)(i3.groupSeparator), "g"), ""), "" !== i3.placeholder.charAt(0) && (n3 = n3.replace(new RegExp(i3.placeholder.charAt(0), "g"), "0")), i3.unmaskAsNumber ? ("" !== i3.radixPoint && -1 !== n3.indexOf(i3.radixPoint) && (n3 = n3.replace(a.default.call(this, i3.radixPoint), ".")), n3 = (n3 = n3.replace(new RegExp("^" + (0, a.default)(i3.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(i3.negationSymbol.back) + "$"), ""), Number(n3)) : n3;
                },
                isComplete: function(e3, t3) {
                  var i3 = (t3.numericInput ? e3.slice().reverse() : e3).join("");
                  return i3 = (i3 = (i3 = (i3 = (i3 = i3.replace(new RegExp("^" + (0, a.default)(t3.negationSymbol.front)), "-")).replace(new RegExp((0, a.default)(t3.negationSymbol.back) + "$"), "")).replace(t3.prefix, "")).replace(t3.suffix, "")).replace(new RegExp((0, a.default)(t3.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t3.radixPoint && (i3 = i3.replace((0, a.default)(t3.radixPoint), ".")), isFinite(i3);
                },
                onBeforeMask: function(e3, t3) {
                  var i3 = t3.radixPoint || ",";
                  isFinite(t3.digits) && (t3.digits = parseInt(t3.digits)), "number" != typeof e3 && "number" !== t3.inputType || "" === i3 || (e3 = e3.toString().replace(".", i3));
                  var n3 = "-" === e3.charAt(0) || e3.charAt(0) === t3.negationSymbol.front, r2 = e3.split(i3), o2 = r2[0].replace(/[^\-0-9]/g, ""), s2 = r2.length > 1 ? r2[1].replace(/[^0-9]/g, "") : "", l2 = r2.length > 1;
                  e3 = o2 + ("" !== s2 ? i3 + s2 : s2);
                  var c2 = 0;
                  if ("" !== i3 && (c2 = t3.digitsOptional ? t3.digits < s2.length ? t3.digits : s2.length : t3.digits, "" !== s2 || !t3.digitsOptional)) {
                    var f2 = Math.pow(10, c2 || 1);
                    e3 = e3.replace((0, a.default)(i3), "."), isNaN(parseFloat(e3)) || (e3 = (t3.roundingFN(parseFloat(e3) * f2) / f2).toFixed(c2)), e3 = e3.toString().replace(".", i3);
                  }
                  if (0 === t3.digits && -1 !== e3.indexOf(i3) && (e3 = e3.substring(0, e3.indexOf(i3))), null !== t3.min || null !== t3.max) {
                    var d2 = e3.toString().replace(i3, ".");
                    null !== t3.min && d2 < t3.min ? e3 = t3.min.toString().replace(".", i3) : null !== t3.max && d2 > t3.max && (e3 = t3.max.toString().replace(".", i3));
                  }
                  return n3 && "-" !== e3.charAt(0) && (e3 = "-" + e3), u(e3.toString().split(""), c2, t3, l2).join("");
                },
                onBeforeWrite: function(e3, t3, i3, n3) {
                  function r2(e4, t4) {
                    if (false !== n3.__financeInput || t4) {
                      var i4 = e4.indexOf(n3.radixPoint);
                      -1 !== i4 && e4.splice(i4, 1);
                    }
                    if ("" !== n3.groupSeparator)
                      for (; -1 !== (i4 = e4.indexOf(n3.groupSeparator)); )
                        e4.splice(i4, 1);
                    return e4;
                  }
                  var o2, s2;
                  if (n3.stripLeadingZeroes && (s2 = function(e4, t4) {
                    var i4 = new RegExp("(^" + ("" !== t4.negationSymbol.front ? (0, a.default)(t4.negationSymbol.front) + "?" : "") + (0, a.default)(t4.prefix) + ")(.*)(" + (0, a.default)(t4.suffix) + ("" != t4.negationSymbol.back ? (0, a.default)(t4.negationSymbol.back) + "?" : "") + "$)").exec(e4.slice().reverse().join("")), n4 = i4 ? i4[2] : "", r3 = false;
                    return n4 && (n4 = n4.split(t4.radixPoint.charAt(0))[0], r3 = new RegExp("^[0" + t4.groupSeparator + "]*").exec(n4)), !(!r3 || !(r3[0].length > 1 || r3[0].length > 0 && r3[0].length < n4.length)) && r3;
                  }(t3, n3)))
                    for (var c2 = t3.join("").lastIndexOf(s2[0].split("").reverse().join("")) - (s2[0] == s2.input ? 0 : 1), f2 = s2[0] == s2.input ? 1 : 0, d2 = s2[0].length - f2; d2 > 0; d2--)
                      delete this.maskset.validPositions[c2 + d2], delete t3[c2 + d2];
                  if (e3)
                    switch (e3.type) {
                      case "blur":
                      case "checkval":
                        if (null !== n3.min) {
                          var p2 = n3.onUnMask(t3.slice().reverse().join(""), void 0, l.extend({}, n3, {
                            unmaskAsNumber: true
                          }));
                          if (null !== n3.min && p2 < n3.min)
                            return {
                              refreshFromBuffer: true,
                              buffer: u(n3.min.toString().replace(".", n3.radixPoint).split(""), n3.digits, n3).reverse()
                            };
                        }
                        if (t3[t3.length - 1] === n3.negationSymbol.front) {
                          var h = new RegExp("(^" + ("" != n3.negationSymbol.front ? (0, a.default)(n3.negationSymbol.front) + "?" : "") + (0, a.default)(n3.prefix) + ")(.*)(" + (0, a.default)(n3.suffix) + ("" != n3.negationSymbol.back ? (0, a.default)(n3.negationSymbol.back) + "?" : "") + "$)").exec(r2(t3.slice(), true).reverse().join(""));
                          0 == (h ? h[2] : "") && (o2 = {
                            refreshFromBuffer: true,
                            buffer: [0]
                          });
                        } else if ("" !== n3.radixPoint) {
                          t3.indexOf(n3.radixPoint) === n3.suffix.length && (o2 && o2.buffer ? o2.buffer.splice(0, 1 + n3.suffix.length) : (t3.splice(0, 1 + n3.suffix.length), o2 = {
                            refreshFromBuffer: true,
                            buffer: r2(t3)
                          }));
                        }
                        if (n3.enforceDigitsOnBlur) {
                          var v = (o2 = o2 || {}) && o2.buffer || t3.slice().reverse();
                          o2.refreshFromBuffer = true, o2.buffer = u(v, n3.digits, n3, true).reverse();
                        }
                    }
                  return o2;
                },
                onKeyDown: function(e3, t3, i3, n3) {
                  var a2, r2 = l(this);
                  if (3 != e3.location) {
                    var s2, c2 = e3.key;
                    if ((s2 = n3.shortcuts && n3.shortcuts[c2]) && s2.length > 1)
                      return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s2)), r2.trigger("setvalue"), false;
                  }
                  if (e3.ctrlKey)
                    switch (e3.key) {
                      case o.keys.ArrowUp:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n3.step)), r2.trigger("setvalue"), false;
                      case o.keys.ArrowDown:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n3.step)), r2.trigger("setvalue"), false;
                    }
                  if (!e3.shiftKey && (e3.key === o.keys.Delete || e3.key === o.keys.Backspace || e3.key === o.keys.BACKSPACE_SAFARI) && i3.begin !== t3.length) {
                    if (t3[e3.key === o.keys.Delete ? i3.begin - 1 : i3.end] === n3.negationSymbol.front)
                      return a2 = t3.slice().reverse(), "" !== n3.negationSymbol.front && a2.shift(), "" !== n3.negationSymbol.back && a2.pop(), r2.trigger("setvalue", [a2.join(""), i3.begin]), false;
                    if (true === n3._radixDance) {
                      var f2 = t3.indexOf(n3.radixPoint);
                      if (n3.digitsOptional) {
                        if (0 === f2)
                          return (a2 = t3.slice().reverse()).pop(), r2.trigger("setvalue", [a2.join(""), i3.begin >= a2.length ? a2.length : i3.begin]), false;
                      } else if (-1 !== f2 && (i3.begin < f2 || i3.end < f2 || e3.key === o.keys.Delete && (i3.begin === f2 || i3.begin - 1 === f2))) {
                        var d2 = void 0;
                        return i3.begin === i3.end && (e3.key === o.keys.Backspace || e3.key === o.keys.BACKSPACE_SAFARI ? i3.begin++ : e3.key === o.keys.Delete && i3.begin - 1 === f2 && (d2 = l.extend({}, i3), i3.begin--, i3.end--)), (a2 = t3.slice().reverse()).splice(a2.length - i3.begin, i3.begin - i3.end + 1), a2 = u(a2, n3.digits, n3).join(""), d2 && (i3 = d2), r2.trigger("setvalue", [a2, i3.begin >= a2.length ? f2 + 1 : i3.begin]), false;
                      }
                    }
                  }
                }
              },
              currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: false
              },
              decimal: {
                alias: "numeric"
              },
              integer: {
                alias: "numeric",
                inputmode: "numeric",
                digits: 0
              },
              percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: false
              },
              indianns: {
                alias: "numeric",
                _mask: function(e3) {
                  return "(" + e3.groupSeparator + "99){*|1}(" + e3.groupSeparator + "999){1|1}";
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: false
              }
            });
          },
          9380: function(e2, t2, i2) {
            var n2;
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            var a = ((n2 = i2(8741)) && n2.__esModule ? n2 : {
              default: n2
            }).default ? window : {};
            t2.default = a;
          },
          7760: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.HandleNativePlaceholder = function(e3, t3) {
              var i3 = e3 ? e3.inputmask : this;
              if (s.ie) {
                if (e3.inputmask._valueGet() !== t3 && (e3.placeholder !== t3 || "" === e3.placeholder)) {
                  var n3 = r.getBuffer.call(i3).slice(), a2 = e3.inputmask._valueGet();
                  if (a2 !== t3) {
                    var o2 = r.getLastValidPosition.call(i3);
                    -1 === o2 && a2 === r.getBufferTemplate.call(i3).join("") ? n3 = [] : -1 !== o2 && u.call(i3, n3), d(e3, n3);
                  }
                }
              } else
                e3.placeholder !== t3 && (e3.placeholder = t3, "" === e3.placeholder && e3.removeAttribute("placeholder"));
            }, t2.applyInputValue = c, t2.checkVal = f, t2.clearOptionalTail = u, t2.unmaskedvalue = function(e3) {
              var t3 = e3 ? e3.inputmask : this, i3 = t3.opts, n3 = t3.maskset;
              if (e3) {
                if (void 0 === e3.inputmask)
                  return e3.value;
                e3.inputmask && e3.inputmask.refreshValue && c(e3, e3.inputmask._valueGet(true));
              }
              for (var a2 = [], o2 = n3.validPositions, s2 = 0, l2 = o2.length; s2 < l2; s2++)
                o2[s2] && o2[s2].match && (1 != o2[s2].match.static || Array.isArray(n3.metadata) && true !== o2[s2].generatedInput) && a2.push(o2[s2].input);
              var u2 = 0 === a2.length ? "" : (t3.isRTL ? a2.reverse() : a2).join("");
              if ("function" == typeof i3.onUnMask) {
                var f2 = (t3.isRTL ? r.getBuffer.call(t3).slice().reverse() : r.getBuffer.call(t3)).join("");
                u2 = i3.onUnMask.call(t3, f2, u2, i3);
              }
              return u2;
            }, t2.writeBuffer = d;
            var n2 = i2(2839), a = i2(4713), r = i2(8711), o = i2(7215), s = i2(9845), l = i2(6030);
            function c(e3, t3) {
              var i3 = e3 ? e3.inputmask : this, n3 = i3.opts;
              e3.inputmask.refreshValue = false, "function" == typeof n3.onBeforeMask && (t3 = n3.onBeforeMask.call(i3, t3, n3) || t3), f(e3, true, false, t3 = (t3 || "").toString().split("")), i3.undoValue = i3._valueGet(true), (n3.clearMaskOnLostFocus || n3.clearIncomplete) && e3.inputmask._valueGet() === r.getBufferTemplate.call(i3).join("") && -1 === r.getLastValidPosition.call(i3) && e3.inputmask._valueSet("");
            }
            function u(e3) {
              e3.length = 0;
              for (var t3, i3 = a.getMaskTemplate.call(this, true, 0, true, void 0, true); void 0 !== (t3 = i3.shift()); )
                e3.push(t3);
              return e3;
            }
            function f(e3, t3, i3, n3, s2) {
              var c2 = e3 ? e3.inputmask : this, u2 = c2.maskset, f2 = c2.opts, p = c2.dependencyLib, h = n3.slice(), v = "", m = -1, g = void 0, y = f2.skipOptionalPartCharacter;
              f2.skipOptionalPartCharacter = "", r.resetMaskSet.call(c2), u2.tests = {}, m = f2.radixPoint ? r.determineNewCaretPosition.call(c2, {
                begin: 0,
                end: 0
              }, false, false === f2.__financeInput ? "radixFocus" : void 0).begin : 0, u2.p = m, c2.caretPos = {
                begin: m
              };
              var k = [], b = c2.caretPos;
              if (h.forEach(function(e4, t4) {
                if (void 0 !== e4) {
                  var n4 = new p.Event("_checkval");
                  n4.key = e4, v += e4;
                  var o2 = r.getLastValidPosition.call(c2, void 0, true);
                  !function(e5, t5) {
                    for (var i4 = a.getMaskTemplate.call(c2, true, 0).slice(e5, r.seekNext.call(c2, e5, false, false)).join("").replace(/'/g, ""), n5 = i4.indexOf(t5); n5 > 0 && " " === i4[n5 - 1]; )
                      n5--;
                    var o3 = 0 === n5 && !r.isMask.call(c2, e5) && (a.getTest.call(c2, e5).match.nativeDef === t5.charAt(0) || true === a.getTest.call(c2, e5).match.static && a.getTest.call(c2, e5).match.nativeDef === "'" + t5.charAt(0) || " " === a.getTest.call(c2, e5).match.nativeDef && (a.getTest.call(c2, e5 + 1).match.nativeDef === t5.charAt(0) || true === a.getTest.call(c2, e5 + 1).match.static && a.getTest.call(c2, e5 + 1).match.nativeDef === "'" + t5.charAt(0)));
                    if (!o3 && n5 > 0 && !r.isMask.call(c2, e5, false, true)) {
                      var s3 = r.seekNext.call(c2, e5);
                      c2.caretPos.begin < s3 && (c2.caretPos = {
                        begin: s3
                      });
                    }
                    return o3;
                  }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c2, n4, true, false, i3, c2.caretPos.begin)) && (m = c2.caretPos.begin + 1, v = "") : g = l.EventHandlers.keypressEvent.call(c2, n4, true, false, i3, o2 + 1), g ? (void 0 !== g.pos && u2.validPositions[g.pos] && true === u2.validPositions[g.pos].match.static && void 0 === u2.validPositions[g.pos].alternation && (k.push(g.pos), c2.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c2, void 0, r.getBuffer.call(c2), g.forwardPosition, n4, false), c2.caretPos = {
                    begin: g.forwardPosition,
                    end: g.forwardPosition
                  }, b = c2.caretPos) : void 0 === u2.validPositions[t4] && h[t4] === a.getPlaceholder.call(c2, t4) && r.isMask.call(c2, t4, true) ? c2.caretPos.begin++ : c2.caretPos = b;
                }
              }), k.length > 0) {
                var x, P, w = r.seekNext.call(c2, -1, void 0, false);
                if (!o.isComplete.call(c2, r.getBuffer.call(c2)) && k.length <= w || o.isComplete.call(c2, r.getBuffer.call(c2)) && k.length > 0 && k.length !== w && 0 === k[0])
                  for (var S = w; void 0 !== (x = k.shift()); ) {
                    var M = new p.Event("_checkval");
                    if ((P = u2.validPositions[x]).generatedInput = true, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c2, M, true, false, i3, S)) && void 0 !== g.pos && g.pos !== x && u2.validPositions[g.pos] && true === u2.validPositions[g.pos].match.static)
                      k.push(g.pos);
                    else if (!g)
                      break;
                    S++;
                  }
              }
              t3 && d.call(c2, e3, r.getBuffer.call(c2), g ? g.forwardPosition : c2.caretPos.begin, s2 || new p.Event("checkval"), s2 && ("input" === s2.type && c2.undoValue !== r.getBuffer.call(c2).join("") || "paste" === s2.type)), f2.skipOptionalPartCharacter = y;
            }
            function d(e3, t3, i3, a2, s2) {
              var l2 = e3 ? e3.inputmask : this, c2 = l2.opts, u2 = l2.dependencyLib;
              if (a2 && "function" == typeof c2.onBeforeWrite) {
                var f2 = c2.onBeforeWrite.call(l2, a2, t3, i3, c2);
                if (f2) {
                  if (f2.refreshFromBuffer) {
                    var d2 = f2.refreshFromBuffer;
                    o.refreshFromBuffer.call(l2, true === d2 ? d2 : d2.start, d2.end, f2.buffer || t3), t3 = r.getBuffer.call(l2, true);
                  }
                  void 0 !== i3 && (i3 = void 0 !== f2.caret ? f2.caret : i3);
                }
              }
              if (void 0 !== e3 && (e3.inputmask._valueSet(t3.join("")), void 0 === i3 || void 0 !== a2 && "blur" === a2.type || r.caret.call(l2, e3, i3, void 0, void 0, void 0 !== a2 && "keydown" === a2.type && (a2.key === n2.keys.Delete || a2.key === n2.keys.Backspace)), true === s2)) {
                var p = u2(e3), h = e3.inputmask._valueGet();
                e3.inputmask.skipInputEvent = true, p.trigger("input"), setTimeout(function() {
                  h === r.getBufferTemplate.call(l2).join("") ? p.trigger("cleared") : true === o.isComplete.call(l2, t3) && p.trigger("complete");
                }, 0);
              }
            }
          },
          2394: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = void 0;
            var n2 = i2(157), a = m(i2(4963)), r = m(i2(9380)), o = i2(2391), s = i2(4713), l = i2(8711), c = i2(7215), u = i2(7760), f = i2(9716), d = m(i2(7392)), p = m(i2(3976)), h = m(i2(8741));
            function v(e3) {
              return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, v(e3);
            }
            function m(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            var g = r.default.document, y = "_inputmask_opts";
            function k(e3, t3, i3) {
              if (h.default) {
                if (!(this instanceof k))
                  return new k(e3, t3, i3);
                this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, true !== i3 && ("[object Object]" === Object.prototype.toString.call(e3) ? t3 = e3 : (t3 = t3 || {}, e3 && (t3.alias = e3)), this.opts = a.default.extend(true, {}, this.defaults, t3), this.noMasksCache = t3 && void 0 !== t3.definitions, this.userOptions = t3 || {}, b(this.opts.alias, t3, this.opts)), this.refreshValue = false, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = false, this.validationEvent = false, this.ignorable = false, this.maxLength, this.mouseEnter = false, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = false, this.hasAlternator = false;
              }
            }
            function b(e3, t3, i3) {
              var n3 = k.prototype.aliases[e3];
              return n3 ? (n3.alias && b(n3.alias, void 0, i3), a.default.extend(true, i3, n3), a.default.extend(true, i3, t3), true) : (null === i3.mask && (i3.mask = e3), false);
            }
            k.prototype = {
              dataAttribute: "data-inputmask",
              defaults: p.default,
              definitions: d.default,
              aliases: {},
              masksCache: {},
              get isRTL() {
                return this.opts.isRTL || this.opts.numericInput;
              },
              mask: function(e3) {
                var t3 = this;
                return "string" == typeof e3 && (e3 = g.getElementById(e3) || g.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : Array.isArray(e3) ? e3 : [].slice.call(e3)).forEach(function(e4, i3) {
                  var s2 = a.default.extend(true, {}, t3.opts);
                  if (function(e5, t4, i4, n3) {
                    function o2(t5, a2) {
                      var o3 = "" === n3 ? t5 : n3 + "-" + t5;
                      null !== (a2 = void 0 !== a2 ? a2 : e5.getAttribute(o3)) && ("string" == typeof a2 && (0 === t5.indexOf("on") ? a2 = r.default[a2] : "false" === a2 ? a2 = false : "true" === a2 && (a2 = true)), i4[t5] = a2);
                    }
                    if (true === t4.importDataAttributes) {
                      var s3, l3, c2, u2, f2 = e5.getAttribute(n3);
                      if (f2 && "" !== f2 && (f2 = f2.replace(/'/g, '"'), l3 = JSON.parse("{" + f2 + "}")), l3) {
                        for (u2 in c2 = void 0, l3)
                          if ("alias" === u2.toLowerCase()) {
                            c2 = l3[u2];
                            break;
                          }
                      }
                      for (s3 in o2("alias", c2), i4.alias && b(i4.alias, i4, t4), t4) {
                        if (l3) {
                          for (u2 in c2 = void 0, l3)
                            if (u2.toLowerCase() === s3.toLowerCase()) {
                              c2 = l3[u2];
                              break;
                            }
                        }
                        o2(s3, c2);
                      }
                    }
                    a.default.extend(true, t4, i4), ("rtl" === e5.dir || t4.rightAlign) && (e5.style.textAlign = "right");
                    ("rtl" === e5.dir || t4.numericInput) && (e5.dir = "ltr", e5.removeAttribute("dir"), t4.isRTL = true);
                    return Object.keys(i4).length;
                  }(e4, s2, a.default.extend(true, {}, t3.userOptions), t3.dataAttribute)) {
                    var l2 = (0, o.generateMaskSet)(s2, t3.noMasksCache);
                    void 0 !== l2 && (void 0 !== e4.inputmask && (e4.inputmask.opts.autoUnmask = true, e4.inputmask.remove()), e4.inputmask = new k(void 0, void 0, true), e4.inputmask.opts = s2, e4.inputmask.noMasksCache = t3.noMasksCache, e4.inputmask.userOptions = a.default.extend(true, {}, t3.userOptions), e4.inputmask.el = e4, e4.inputmask.$el = (0, a.default)(e4), e4.inputmask.maskset = l2, a.default.data(e4, y, t3.userOptions), n2.mask.call(e4.inputmask));
                  }
                }), e3 && e3[0] && e3[0].inputmask || this;
              },
              option: function(e3, t3) {
                return "string" == typeof e3 ? this.opts[e3] : "object" === v(e3) ? (a.default.extend(this.userOptions, e3), this.el && true !== t3 && this.mask(this.el), this) : void 0;
              },
              unmaskedvalue: function(e3) {
                if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e3) {
                  var t3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                  u.checkVal.call(this, void 0, false, false, t3), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                }
                return u.unmaskedvalue.call(this, this.el);
              },
              remove: function() {
                if (this.el) {
                  a.default.data(this.el, y, null);
                  var e3 = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                  e3 !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e3, this.opts.autoUnmask) : this._valueSet(""), f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                    get: this.__valueGet,
                    set: this.__valueSet,
                    configurable: true
                  }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                }
                return this.el;
              },
              getemptymask: function() {
                return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
              },
              hasMaskedValue: function() {
                return !this.opts.autoUnmask;
              },
              isComplete: function() {
                return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), c.isComplete.call(this, l.getBuffer.call(this));
              },
              getmetadata: function() {
                if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                  var e3 = s.getMaskTemplate.call(this, true, 0, false).join("");
                  return this.maskset.metadata.forEach(function(t3) {
                    return t3.mask !== e3 || (e3 = t3, false);
                  }), e3;
                }
                return this.maskset.metadata;
              },
              isValid: function(e3) {
                if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), e3) {
                  var t3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                  u.checkVal.call(this, void 0, true, false, t3);
                } else
                  e3 = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                for (var i3 = l.getBuffer.call(this), n3 = l.determineLastRequiredPosition.call(this), a2 = i3.length - 1; a2 > n3 && !l.isMask.call(this, a2); a2--)
                  ;
                return i3.splice(n3, a2 + 1 - n3), c.isComplete.call(this, i3) && e3 === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
              },
              format: function(e3, t3) {
                this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                var i3 = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e3, this.opts) || e3).split("");
                u.checkVal.call(this, void 0, true, false, i3);
                var n3 = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                return t3 ? {
                  value: n3,
                  metadata: this.getmetadata()
                } : n3;
              },
              setValue: function(e3) {
                this.el && (0, a.default)(this.el).trigger("setvalue", [e3]);
              },
              analyseMask: o.analyseMask
            }, k.extendDefaults = function(e3) {
              a.default.extend(true, k.prototype.defaults, e3);
            }, k.extendDefinitions = function(e3) {
              a.default.extend(true, k.prototype.definitions, e3);
            }, k.extendAliases = function(e3) {
              a.default.extend(true, k.prototype.aliases, e3);
            }, k.format = function(e3, t3, i3) {
              return k(t3).format(e3, i3);
            }, k.unmask = function(e3, t3) {
              return k(t3).unmaskedvalue(e3);
            }, k.isValid = function(e3, t3) {
              return k(t3).isValid(e3);
            }, k.remove = function(e3) {
              "string" == typeof e3 && (e3 = g.getElementById(e3) || g.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : e3).forEach(function(e4) {
                e4.inputmask && e4.inputmask.remove();
              });
            }, k.setValue = function(e3, t3) {
              "string" == typeof e3 && (e3 = g.getElementById(e3) || g.querySelectorAll(e3)), (e3 = e3.nodeName ? [e3] : e3).forEach(function(e4) {
                e4.inputmask ? e4.inputmask.setValue(t3) : (0, a.default)(e4).trigger("setvalue", [t3]);
              });
            }, k.dependencyLib = a.default, r.default.Inputmask = k;
            var x = k;
            t2.default = x;
          },
          5296: function(e2, t2, i2) {
            function n2(e3) {
              return n2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, n2(e3);
            }
            var a = h(i2(9380)), r = h(i2(2394)), o = h(i2(8741));
            function s(e3, t3) {
              for (var i3 = 0; i3 < t3.length; i3++) {
                var a2 = t3[i3];
                a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e3, (r2 = a2.key, o2 = void 0, o2 = function(e4, t4) {
                  if ("object" !== n2(e4) || null === e4)
                    return e4;
                  var i4 = e4[Symbol.toPrimitive];
                  if (void 0 !== i4) {
                    var a3 = i4.call(e4, t4 || "default");
                    if ("object" !== n2(a3))
                      return a3;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return ("string" === t4 ? String : Number)(e4);
                }(r2, "string"), "symbol" === n2(o2) ? o2 : String(o2)), a2);
              }
              var r2, o2;
            }
            function l(e3) {
              var t3 = f();
              return function() {
                var i3, a2 = p(e3);
                if (t3) {
                  var r2 = p(this).constructor;
                  i3 = Reflect.construct(a2, arguments, r2);
                } else
                  i3 = a2.apply(this, arguments);
                return function(e4, t4) {
                  if (t4 && ("object" === n2(t4) || "function" == typeof t4))
                    return t4;
                  if (void 0 !== t4)
                    throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e5) {
                    if (void 0 === e5)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e5;
                  }(e4);
                }(this, i3);
              };
            }
            function c(e3) {
              var t3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
              return c = function(e4) {
                if (null === e4 || (i3 = e4, -1 === Function.toString.call(i3).indexOf("[native code]")))
                  return e4;
                var i3;
                if ("function" != typeof e4)
                  throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t3) {
                  if (t3.has(e4))
                    return t3.get(e4);
                  t3.set(e4, n3);
                }
                function n3() {
                  return u(e4, arguments, p(this).constructor);
                }
                return n3.prototype = Object.create(e4.prototype, {
                  constructor: {
                    value: n3,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                }), d(n3, e4);
              }, c(e3);
            }
            function u(e3, t3, i3) {
              return u = f() ? Reflect.construct.bind() : function(e4, t4, i4) {
                var n3 = [null];
                n3.push.apply(n3, t4);
                var a2 = new (Function.bind.apply(e4, n3))();
                return i4 && d(a2, i4.prototype), a2;
              }, u.apply(null, arguments);
            }
            function f() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e3) {
                return false;
              }
            }
            function d(e3, t3) {
              return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
                return e4.__proto__ = t4, e4;
              }, d(e3, t3);
            }
            function p(e3) {
              return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
                return e4.__proto__ || Object.getPrototypeOf(e4);
              }, p(e3);
            }
            function h(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
            var v = a.default.document;
            if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
              var m = function(e3) {
                !function(e4, t4) {
                  if ("function" != typeof t4 && null !== t4)
                    throw new TypeError("Super expression must either be null or a function");
                  e4.prototype = Object.create(t4 && t4.prototype, {
                    constructor: {
                      value: e4,
                      writable: true,
                      configurable: true
                    }
                  }), Object.defineProperty(e4, "prototype", {
                    writable: false
                  }), t4 && d(e4, t4);
                }(o2, e3);
                var t3, i3, n3, a2 = l(o2);
                function o2() {
                  var e4;
                  !function(e5, t5) {
                    if (!(e5 instanceof t5))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, o2);
                  var t4 = (e4 = a2.call(this)).getAttributeNames(), i4 = e4.attachShadow({
                    mode: "closed"
                  }), n4 = v.createElement("input");
                  for (var s2 in n4.type = "text", i4.appendChild(n4), t4)
                    Object.prototype.hasOwnProperty.call(t4, s2) && n4.setAttribute(t4[s2], e4.getAttribute(t4[s2]));
                  var l2 = new r.default();
                  return l2.dataAttribute = "", l2.mask(n4), n4.inputmask.shadowRoot = i4, e4;
                }
                return t3 = o2, i3 && s(t3.prototype, i3), n3 && s(t3, n3), Object.defineProperty(t3, "prototype", {
                  writable: false
                }), t3;
              }(c(HTMLElement));
              a.default.customElements.define("input-mask", m);
            }
          },
          2839: function(e2, t2) {
            function i2(e3, t3) {
              return function(e4) {
                if (Array.isArray(e4))
                  return e4;
              }(e3) || function(e4, t4) {
                var i3 = null == e4 ? null : "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (null != i3) {
                  var n3, a2, r2, o2, s = [], l = true, c = false;
                  try {
                    if (r2 = (i3 = i3.call(e4)).next, 0 === t4) {
                      if (Object(i3) !== i3)
                        return;
                      l = false;
                    } else
                      for (; !(l = (n3 = r2.call(i3)).done) && (s.push(n3.value), s.length !== t4); l = true)
                        ;
                  } catch (e5) {
                    c = true, a2 = e5;
                  } finally {
                    try {
                      if (!l && null != i3.return && (o2 = i3.return(), Object(o2) !== o2))
                        return;
                    } finally {
                      if (c)
                        throw a2;
                    }
                  }
                  return s;
                }
              }(e3, t3) || function(e4, t4) {
                if (!e4)
                  return;
                if ("string" == typeof e4)
                  return n2(e4, t4);
                var i3 = Object.prototype.toString.call(e4).slice(8, -1);
                "Object" === i3 && e4.constructor && (i3 = e4.constructor.name);
                if ("Map" === i3 || "Set" === i3)
                  return Array.from(e4);
                if ("Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3))
                  return n2(e4, t4);
              }(e3, t3) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function n2(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var i3 = 0, n3 = new Array(t3); i3 < t3; i3++)
                n3[i3] = e3[i3];
              return n3;
            }
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.keys = t2.keyCode = void 0, t2.toKey = function(e3, t3) {
              return r[e3] || (t3 ? String.fromCharCode(e3) : String.fromCharCode(e3).toLowerCase());
            }, t2.toKeyCode = function(e3) {
              return a[e3];
            };
            var a = {
              AltGraph: 18,
              ArrowDown: 40,
              ArrowLeft: 37,
              ArrowRight: 39,
              ArrowUp: 38,
              Backspace: 8,
              BACKSPACE_SAFARI: 127,
              CapsLock: 20,
              Delete: 46,
              End: 35,
              Enter: 13,
              Escape: 27,
              Home: 36,
              Insert: 45,
              PageDown: 34,
              PageUp: 33,
              Space: 32,
              Tab: 9,
              c: 67,
              x: 88,
              z: 90,
              Shift: 16,
              Control: 17,
              Alt: 18,
              Pause: 19,
              Meta_LEFT: 91,
              Meta_RIGHT: 92,
              ContextMenu: 93,
              Process: 229,
              Unidentified: 229,
              F1: 112,
              F2: 113,
              F3: 114,
              F4: 115,
              F5: 116,
              F6: 117,
              F7: 118,
              F8: 119,
              F9: 120,
              F10: 121,
              F11: 122,
              F12: 123
            };
            t2.keyCode = a;
            var r = Object.entries(a).reduce(function(e3, t3) {
              var n3 = i2(t3, 2), a2 = n3[0], r2 = n3[1];
              return e3[r2] = void 0 === e3[r2] ? a2 : e3[r2], e3;
            }, {}), o = Object.entries(a).reduce(function(e3, t3) {
              var n3 = i2(t3, 2), a2 = n3[0];
              n3[1];
              return e3[a2] = "Space" === a2 ? " " : a2, e3;
            }, {});
            t2.keys = o;
          },
          2391: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.analyseMask = function(e3, t3, i3) {
              var n3, o2, s2, l2, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = false, h = new a.default(), v = [], m = [], g = false;
              function y(e4, n4, a2) {
                a2 = void 0 !== a2 ? a2 : e4.matches.length;
                var o3 = e4.matches[a2 - 1];
                if (t3) {
                  if (0 === n4.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n4) || "." === n4) {
                    var s3 = i3.casing ? "i" : "";
                    /^\\p\{.*}$/i.test(n4) && (s3 += "u"), e4.matches.splice(a2++, 0, {
                      fn: new RegExp(n4, s3),
                      static: false,
                      optionality: false,
                      newBlockMarker: void 0 === o3 ? "master" : o3.def !== n4,
                      casing: null,
                      def: n4,
                      placeholder: void 0,
                      nativeDef: n4
                    });
                  } else
                    p && (n4 = n4[n4.length - 1]), n4.split("").forEach(function(t4, n5) {
                      o3 = e4.matches[a2 - 1], e4.matches.splice(a2++, 0, {
                        fn: /[a-z]/i.test(i3.staticDefinitionSymbol || t4) ? new RegExp("[" + (i3.staticDefinitionSymbol || t4) + "]", i3.casing ? "i" : "") : null,
                        static: true,
                        optionality: false,
                        newBlockMarker: void 0 === o3 ? "master" : o3.def !== t4 && true !== o3.static,
                        casing: null,
                        def: i3.staticDefinitionSymbol || t4,
                        placeholder: void 0 !== i3.staticDefinitionSymbol ? t4 : void 0,
                        nativeDef: (p ? "'" : "") + t4
                      });
                    });
                  p = false;
                } else {
                  var l3 = i3.definitions && i3.definitions[n4] || i3.usePrototypeDefinitions && r.default.prototype.definitions[n4];
                  l3 && !p ? e4.matches.splice(a2++, 0, {
                    fn: l3.validator ? "string" == typeof l3.validator ? new RegExp(l3.validator, i3.casing ? "i" : "") : new function() {
                      this.test = l3.validator;
                    }() : new RegExp("."),
                    static: l3.static || false,
                    optionality: l3.optional || false,
                    defOptionality: l3.optional || false,
                    newBlockMarker: void 0 === o3 || l3.optional ? "master" : o3.def !== (l3.definitionSymbol || n4),
                    casing: l3.casing,
                    def: l3.definitionSymbol || n4,
                    placeholder: l3.placeholder,
                    nativeDef: n4,
                    generated: l3.generated
                  }) : (e4.matches.splice(a2++, 0, {
                    fn: /[a-z]/i.test(i3.staticDefinitionSymbol || n4) ? new RegExp("[" + (i3.staticDefinitionSymbol || n4) + "]", i3.casing ? "i" : "") : null,
                    static: true,
                    optionality: false,
                    newBlockMarker: void 0 === o3 ? "master" : o3.def !== n4 && true !== o3.static,
                    casing: null,
                    def: i3.staticDefinitionSymbol || n4,
                    placeholder: void 0 !== i3.staticDefinitionSymbol ? n4 : void 0,
                    nativeDef: (p ? "'" : "") + n4
                  }), p = false);
                }
              }
              function k() {
                if (v.length > 0) {
                  if (y(l2 = v[v.length - 1], o2), l2.isAlternator) {
                    c = v.pop();
                    for (var e4 = 0; e4 < c.matches.length; e4++)
                      c.matches[e4].isGroup && (c.matches[e4].isGroup = false);
                    v.length > 0 ? (l2 = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                  }
                } else
                  y(h, o2);
              }
              function b(e4) {
                var t4 = new a.default(true);
                return t4.openGroup = false, t4.matches = e4, t4;
              }
              function x() {
                if ((s2 = v.pop()).openGroup = false, void 0 !== s2)
                  if (v.length > 0) {
                    if ((l2 = v[v.length - 1]).matches.push(s2), l2.isAlternator) {
                      for (var e4 = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t4 = 0; t4 < c.matches.length; t4++)
                        c.matches[t4].isGroup = false, c.matches[t4].alternatorGroup = false, null === i3.keepStatic && e4 < (c.matches[t4].matches ? c.matches[t4].matches.length : 1) && (i3.keepStatic = true), e4 = c.matches[t4].matches ? c.matches[t4].matches.length : 1;
                      v.length > 0 ? (l2 = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                    }
                  } else
                    h.matches.push(s2);
                else
                  k();
              }
              function P(e4) {
                var t4 = e4.pop();
                return t4.isQuantifier && (t4 = b([e4.pop(), t4])), t4;
              }
              t3 && (i3.optionalmarker[0] = void 0, i3.optionalmarker[1] = void 0);
              for (; n3 = t3 ? d.exec(e3) : f.exec(e3); ) {
                if (o2 = n3[0], t3) {
                  switch (o2.charAt(0)) {
                    case "?":
                      o2 = "{0,1}";
                      break;
                    case "+":
                    case "*":
                      o2 = "{" + o2 + "}";
                      break;
                    case "|":
                      if (0 === v.length) {
                        var w = b(h.matches);
                        w.openGroup = true, v.push(w), h.matches = [], g = true;
                      }
                  }
                  switch (o2) {
                    case "\\d":
                      o2 = "[0-9]";
                      break;
                    case "\\p":
                      o2 += d.exec(e3)[0], o2 += d.exec(e3)[0];
                  }
                }
                if (p)
                  k();
                else
                  switch (o2.charAt(0)) {
                    case "$":
                    case "^":
                      t3 || k();
                      break;
                    case i3.escapeChar:
                      p = true, t3 && k();
                      break;
                    case i3.optionalmarker[1]:
                    case i3.groupmarker[1]:
                      x();
                      break;
                    case i3.optionalmarker[0]:
                      v.push(new a.default(false, true));
                      break;
                    case i3.groupmarker[0]:
                      v.push(new a.default(true));
                      break;
                    case i3.quantifiermarker[0]:
                      var S = new a.default(false, false, true), M = (o2 = o2.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                      "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                        min: O,
                        max: E,
                        jit: T
                      };
                      var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                      (n3 = j.pop()).isGroup || (n3 = b([n3])), j.push(n3), j.push(S);
                      break;
                    case i3.alternatormarker:
                      if (v.length > 0) {
                        var A = (l2 = v[v.length - 1]).matches[l2.matches.length - 1];
                        u = l2.openGroup && (void 0 === A.matches || false === A.isGroup && false === A.isAlternator) ? v.pop() : P(l2.matches);
                      } else
                        u = P(h.matches);
                      if (u.isAlternator)
                        v.push(u);
                      else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = false) : c = new a.default(false, false, false, true), c.matches.push(u), v.push(c), u.openGroup) {
                        u.openGroup = false;
                        var D = new a.default(true);
                        D.alternatorGroup = true, v.push(D);
                      }
                      break;
                    default:
                      k();
                  }
              }
              g && x();
              for (; v.length > 0; )
                s2 = v.pop(), h.matches.push(s2);
              h.matches.length > 0 && (!function e4(n4) {
                n4 && n4.matches && n4.matches.forEach(function(a2, r2) {
                  var o3 = n4.matches[r2 + 1];
                  (void 0 === o3 || void 0 === o3.matches || false === o3.isQuantifier) && a2 && a2.isGroup && (a2.isGroup = false, t3 || (y(a2, i3.groupmarker[0], 0), true !== a2.openGroup && y(a2, i3.groupmarker[1]))), e4(a2);
                });
              }(h), m.push(h));
              (i3.numericInput || i3.isRTL) && function e4(t4) {
                for (var n4 in t4.matches = t4.matches.reverse(), t4.matches)
                  if (Object.prototype.hasOwnProperty.call(t4.matches, n4)) {
                    var a2 = parseInt(n4);
                    if (t4.matches[n4].isQuantifier && t4.matches[a2 + 1] && t4.matches[a2 + 1].isGroup) {
                      var r2 = t4.matches[n4];
                      t4.matches.splice(n4, 1), t4.matches.splice(a2 + 1, 0, r2);
                    }
                    void 0 !== t4.matches[n4].matches ? t4.matches[n4] = e4(t4.matches[n4]) : t4.matches[n4] = ((o3 = t4.matches[n4]) === i3.optionalmarker[0] ? o3 = i3.optionalmarker[1] : o3 === i3.optionalmarker[1] ? o3 = i3.optionalmarker[0] : o3 === i3.groupmarker[0] ? o3 = i3.groupmarker[1] : o3 === i3.groupmarker[1] && (o3 = i3.groupmarker[0]), o3);
                  }
                var o3;
                return t4;
              }(m[0]);
              return m;
            }, t2.generateMaskSet = function(e3, t3) {
              var i3;
              function a2(e4, t4) {
                var i4 = t4.repeat, n3 = t4.groupmarker, a3 = t4.quantifiermarker, r2 = t4.keepStatic;
                if (i4 > 0 || "*" === i4 || "+" === i4) {
                  var l3 = "*" === i4 ? 0 : "+" === i4 ? 1 : i4;
                  e4 = n3[0] + e4 + n3[1] + a3[0] + l3 + "," + i4 + a3[1];
                }
                if (true === r2) {
                  var c2 = e4.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                  c2 && c2.forEach(function(t5, i5) {
                    var n4 = function(e5, t6) {
                      return function(e6) {
                        if (Array.isArray(e6))
                          return e6;
                      }(e5) || function(e6, t7) {
                        var i6 = null == e6 ? null : "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
                        if (null != i6) {
                          var n5, a5, r4, o2, s2 = [], l4 = true, c3 = false;
                          try {
                            if (r4 = (i6 = i6.call(e6)).next, 0 === t7) {
                              if (Object(i6) !== i6)
                                return;
                              l4 = false;
                            } else
                              for (; !(l4 = (n5 = r4.call(i6)).done) && (s2.push(n5.value), s2.length !== t7); l4 = true)
                                ;
                          } catch (e7) {
                            c3 = true, a5 = e7;
                          } finally {
                            try {
                              if (!l4 && null != i6.return && (o2 = i6.return(), Object(o2) !== o2))
                                return;
                            } finally {
                              if (c3)
                                throw a5;
                            }
                          }
                          return s2;
                        }
                      }(e5, t6) || function(e6, t7) {
                        if (!e6)
                          return;
                        if ("string" == typeof e6)
                          return s(e6, t7);
                        var i6 = Object.prototype.toString.call(e6).slice(8, -1);
                        "Object" === i6 && e6.constructor && (i6 = e6.constructor.name);
                        if ("Map" === i6 || "Set" === i6)
                          return Array.from(e6);
                        if ("Arguments" === i6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i6))
                          return s(e6, t7);
                      }(e5, t6) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                      }();
                    }(t5.split("["), 2), a4 = n4[0], r3 = n4[1];
                    r3 = r3.replace("]", ""), e4 = e4.replace(new RegExp("".concat((0, o.default)(a4), "\\[").concat((0, o.default)(r3), "\\]")), a4.charAt(0) === r3.charAt(0) ? "(".concat(a4, "|").concat(a4).concat(r3, ")") : "".concat(a4, "[").concat(r3, "]"));
                  });
                }
                return e4;
              }
              function l2(e4, i4, o2) {
                var s2, l3, c2 = false;
                return null !== e4 && "" !== e4 || ((c2 = null !== o2.regex) ? e4 = (e4 = o2.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c2 = true, e4 = ".*")), 1 === e4.length && false === o2.greedy && 0 !== o2.repeat && (o2.placeholder = ""), e4 = a2(e4, o2), l3 = c2 ? "regex_" + o2.regex : o2.numericInput ? e4.split("").reverse().join("") : e4, null !== o2.keepStatic && (l3 = "ks_" + o2.keepStatic + l3), void 0 === r.default.prototype.masksCache[l3] || true === t3 ? (s2 = {
                  mask: e4,
                  maskToken: r.default.prototype.analyseMask(e4, c2, o2),
                  validPositions: [],
                  _buffer: void 0,
                  buffer: void 0,
                  tests: {},
                  excludes: {},
                  metadata: i4,
                  maskLength: void 0,
                  jitOffset: {}
                }, true !== t3 && (r.default.prototype.masksCache[l3] = s2, s2 = n2.default.extend(true, {}, r.default.prototype.masksCache[l3]))) : s2 = n2.default.extend(true, {}, r.default.prototype.masksCache[l3]), s2;
              }
              "function" == typeof e3.mask && (e3.mask = e3.mask(e3));
              if (Array.isArray(e3.mask)) {
                if (e3.mask.length > 1) {
                  null === e3.keepStatic && (e3.keepStatic = true);
                  var c = e3.groupmarker[0];
                  return (e3.isRTL ? e3.mask.reverse() : e3.mask).forEach(function(t4) {
                    c.length > 1 && (c += e3.alternatormarker), void 0 !== t4.mask && "function" != typeof t4.mask ? c += t4.mask : c += t4;
                  }), l2(c += e3.groupmarker[1], e3.mask, e3);
                }
                e3.mask = e3.mask.pop();
              }
              i3 = e3.mask && void 0 !== e3.mask.mask && "function" != typeof e3.mask.mask ? l2(e3.mask.mask, e3.mask, e3) : l2(e3.mask, e3.mask, e3);
              null === e3.keepStatic && (e3.keepStatic = false);
              return i3;
            };
            var n2 = l(i2(4963)), a = l(i2(9695)), r = l(i2(2394)), o = l(i2(7184));
            function s(e3, t3) {
              (null == t3 || t3 > e3.length) && (t3 = e3.length);
              for (var i3 = 0, n3 = new Array(t3); i3 < t3; i3++)
                n3[i3] = e3[i3];
              return n3;
            }
            function l(e3) {
              return e3 && e3.__esModule ? e3 : {
                default: e3
              };
            }
          },
          157: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.mask = function() {
              var e3 = this, t3 = this.opts, i3 = this.el, u = this.dependencyLib;
              o.EventRuler.off(i3);
              var f = function(t4, i4) {
                "textarea" !== t4.tagName.toLowerCase() && i4.ignorables.push(n2.keys.Enter);
                var s2 = t4.getAttribute("type"), l2 = "input" === t4.tagName.toLowerCase() && i4.supportsInputType.includes(s2) || t4.isContentEditable || "textarea" === t4.tagName.toLowerCase();
                if (!l2)
                  if ("input" === t4.tagName.toLowerCase()) {
                    var c2 = document.createElement("input");
                    c2.setAttribute("type", s2), l2 = "text" === c2.type, c2 = null;
                  } else
                    l2 = "partial";
                return false !== l2 ? function(t5) {
                  var n3, s3;
                  function l3() {
                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e3) || true !== i4.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i4.clearMaskOnLostFocus ? (e3.isRTL ? r.clearOptionalTail.call(e3, a.getBuffer.call(e3).slice()).reverse() : r.clearOptionalTail.call(e3, a.getBuffer.call(e3).slice())).join("") : n3.call(this) : "" : n3.call(this);
                  }
                  function c3(e4) {
                    s3.call(this, e4), this.inputmask && (0, r.applyInputValue)(this, e4);
                  }
                  if (!t5.inputmask.__valueGet) {
                    if (true !== i4.noValuePatching) {
                      if (Object.getOwnPropertyDescriptor) {
                        var f2 = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t5), "value") : void 0;
                        f2 && f2.get && f2.set ? (n3 = f2.get, s3 = f2.set, Object.defineProperty(t5, "value", {
                          get: l3,
                          set: c3,
                          configurable: true
                        })) : "input" !== t5.tagName.toLowerCase() && (n3 = function() {
                          return this.textContent;
                        }, s3 = function(e4) {
                          this.textContent = e4;
                        }, Object.defineProperty(t5, "value", {
                          get: l3,
                          set: c3,
                          configurable: true
                        }));
                      } else
                        document.__lookupGetter__ && t5.__lookupGetter__("value") && (n3 = t5.__lookupGetter__("value"), s3 = t5.__lookupSetter__("value"), t5.__defineGetter__("value", l3), t5.__defineSetter__("value", c3));
                      t5.inputmask.__valueGet = n3, t5.inputmask.__valueSet = s3;
                    }
                    t5.inputmask._valueGet = function(t6) {
                      return e3.isRTL && true !== t6 ? n3.call(this.el).split("").reverse().join("") : n3.call(this.el);
                    }, t5.inputmask._valueSet = function(t6, i5) {
                      s3.call(this.el, null == t6 ? "" : true !== i5 && e3.isRTL ? t6.split("").reverse().join("") : t6);
                    }, void 0 === n3 && (n3 = function() {
                      return this.value;
                    }, s3 = function(e4) {
                      this.value = e4;
                    }, function(t6) {
                      if (u.valHooks && (void 0 === u.valHooks[t6] || true !== u.valHooks[t6].inputmaskpatch)) {
                        var n4 = u.valHooks[t6] && u.valHooks[t6].get ? u.valHooks[t6].get : function(e4) {
                          return e4.value;
                        }, o2 = u.valHooks[t6] && u.valHooks[t6].set ? u.valHooks[t6].set : function(e4, t7) {
                          return e4.value = t7, e4;
                        };
                        u.valHooks[t6] = {
                          get: function(t7) {
                            if (t7.inputmask) {
                              if (t7.inputmask.opts.autoUnmask)
                                return t7.inputmask.unmaskedvalue();
                              var r2 = n4(t7);
                              return -1 !== a.getLastValidPosition.call(e3, void 0, void 0, t7.inputmask.maskset.validPositions) || true !== i4.nullable ? r2 : "";
                            }
                            return n4(t7);
                          },
                          set: function(e4, t7) {
                            var i5 = o2(e4, t7);
                            return e4.inputmask && (0, r.applyInputValue)(e4, t7), i5;
                          },
                          inputmaskpatch: true
                        };
                      }
                    }(t5.type), function(e4) {
                      o.EventRuler.on(e4, "mouseenter", function() {
                        var e5 = this, t6 = e5.inputmask._valueGet(true);
                        t6 != (e5.inputmask.isRTL ? a.getBuffer.call(e5.inputmask).slice().reverse() : a.getBuffer.call(e5.inputmask)).join("") && (0, r.applyInputValue)(e5, t6);
                      });
                    }(t5));
                  }
                }(t4) : t4.inputmask = void 0, l2;
              }(i3, t3);
              if (false !== f) {
                e3.originalPlaceholder = i3.placeholder, e3.maxLength = void 0 !== i3 ? i3.maxLength : void 0, -1 === e3.maxLength && (e3.maxLength = void 0), "inputMode" in i3 && null === i3.getAttribute("inputmode") && (i3.inputMode = t3.inputmode, i3.setAttribute("inputmode", t3.inputmode)), true === f && (t3.showMaskOnFocus = t3.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(i3.autocomplete), s.iphone && (t3.insertModeVisual = false, i3.setAttribute("autocorrect", "off")), o.EventRuler.on(i3, "submit", c.EventHandlers.submitEvent), o.EventRuler.on(i3, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i3, "blur", c.EventHandlers.blurEvent), o.EventRuler.on(i3, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i3, "invalid", c.EventHandlers.invalidEvent), o.EventRuler.on(i3, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i3, "mouseleave", c.EventHandlers.mouseleaveEvent), o.EventRuler.on(i3, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i3, "paste", c.EventHandlers.pasteEvent), o.EventRuler.on(i3, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i3, "complete", t3.oncomplete), o.EventRuler.on(i3, "incomplete", t3.onincomplete), o.EventRuler.on(i3, "cleared", t3.oncleared), true !== t3.inputEventOnly && o.EventRuler.on(i3, "keydown", c.EventHandlers.keyEvent), (s.mobile || t3.inputEventOnly) && i3.removeAttribute("maxLength"), o.EventRuler.on(i3, "input", c.EventHandlers.inputFallBackEvent)), o.EventRuler.on(i3, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e3).join(""), e3.undoValue = e3._valueGet(true);
                var d = (i3.inputmask.shadowRoot || i3.ownerDocument).activeElement;
                if ("" !== i3.inputmask._valueGet(true) || false === t3.clearMaskOnLostFocus || d === i3) {
                  (0, r.applyInputValue)(i3, i3.inputmask._valueGet(true), t3);
                  var p = a.getBuffer.call(e3).slice();
                  false === l.isComplete.call(e3, p) && t3.clearIncomplete && a.resetMaskSet.call(e3), t3.clearMaskOnLostFocus && d !== i3 && (-1 === a.getLastValidPosition.call(e3) ? p = [] : r.clearOptionalTail.call(e3, p)), (false === t3.clearMaskOnLostFocus || t3.showMaskOnFocus && d === i3 || "" !== i3.inputmask._valueGet(true)) && (0, r.writeBuffer)(i3, p), d === i3 && a.caret.call(e3, i3, a.seekNext.call(e3, a.getLastValidPosition.call(e3)));
                }
              }
            };
            var n2 = i2(2839), a = i2(8711), r = i2(7760), o = i2(9716), s = i2(9845), l = i2(7215), c = i2(6030);
          },
          9695: function(e2, t2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.default = function(e3, t3, i2, n2) {
              this.matches = [], this.openGroup = e3 || false, this.alternatorGroup = false, this.isGroup = e3 || false, this.isOptional = t3 || false, this.isQuantifier = i2 || false, this.isAlternator = n2 || false, this.quantifier = {
                min: 1,
                max: 1
              };
            };
          },
          3194: function() {
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
              value: function(e2, t2) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var i2 = Object(this), n2 = i2.length >>> 0;
                if (0 === n2)
                  return false;
                for (var a = 0 | t2, r = Math.max(a >= 0 ? a : n2 - Math.abs(a), 0); r < n2; ) {
                  if (i2[r] === e2)
                    return true;
                  r++;
                }
                return false;
              }
            });
          },
          9302: function() {
            var e2 = Function.bind.call(Function.call, Array.prototype.reduce), t2 = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i2 = Function.bind.call(Function.call, Array.prototype.concat), n2 = Object.keys;
            Object.entries || (Object.entries = function(a) {
              return e2(n2(a), function(e3, n3) {
                return i2(e3, "string" == typeof n3 && t2(a, n3) ? [[n3, a[n3]]] : []);
              }, []);
            });
          },
          7149: function() {
            function e2(t2) {
              return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
                return typeof e3;
              } : function(e3) {
                return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
              }, e2(t2);
            }
            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e2("test".__proto__) ? function(e3) {
              return e3.__proto__;
            } : function(e3) {
              return e3.constructor.prototype;
            });
          },
          4013: function() {
            String.prototype.includes || (String.prototype.includes = function(e2, t2) {
              return "number" != typeof t2 && (t2 = 0), !(t2 + e2.length > this.length) && -1 !== this.indexOf(e2, t2);
            });
          },
          8711: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.caret = function(e3, t3, i3, n3, a2) {
              var r2, o2 = this, s2 = this.opts;
              if (void 0 === t3)
                return "selectionStart" in e3 && "selectionEnd" in e3 ? (t3 = e3.selectionStart, i3 = e3.selectionEnd) : window.getSelection ? (r2 = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e3 && r2.commonAncestorContainer !== e3 || (t3 = r2.startOffset, i3 = r2.endOffset) : document.selection && document.selection.createRange && (i3 = (t3 = 0 - (r2 = document.selection.createRange()).duplicate().moveStart("character", -e3.inputmask._valueGet().length)) + r2.text.length), {
                  begin: n3 ? t3 : c.call(o2, t3),
                  end: n3 ? i3 : c.call(o2, i3)
                };
              if (Array.isArray(t3) && (i3 = o2.isRTL ? t3[0] : t3[1], t3 = o2.isRTL ? t3[1] : t3[0]), void 0 !== t3.begin && (i3 = o2.isRTL ? t3.begin : t3.end, t3 = o2.isRTL ? t3.end : t3.begin), "number" == typeof t3) {
                t3 = n3 ? t3 : c.call(o2, t3), i3 = "number" == typeof (i3 = n3 ? i3 : c.call(o2, i3)) ? i3 : t3;
                var l2 = parseInt(((e3.ownerDocument.defaultView || window).getComputedStyle ? (e3.ownerDocument.defaultView || window).getComputedStyle(e3, null) : e3.currentStyle).fontSize) * i3;
                if (e3.scrollLeft = l2 > e3.scrollWidth ? l2 : 0, e3.inputmask.caretPos = {
                  begin: t3,
                  end: i3
                }, s2.insertModeVisual && false === s2.insertMode && t3 === i3 && (a2 || i3++), e3 === (e3.inputmask.shadowRoot || e3.ownerDocument).activeElement)
                  if ("setSelectionRange" in e3)
                    e3.setSelectionRange(t3, i3);
                  else if (window.getSelection) {
                    if (r2 = document.createRange(), void 0 === e3.firstChild || null === e3.firstChild) {
                      var u = document.createTextNode("");
                      e3.appendChild(u);
                    }
                    r2.setStart(e3.firstChild, t3 < e3.inputmask._valueGet().length ? t3 : e3.inputmask._valueGet().length), r2.setEnd(e3.firstChild, i3 < e3.inputmask._valueGet().length ? i3 : e3.inputmask._valueGet().length), r2.collapse(true);
                    var f = window.getSelection();
                    f.removeAllRanges(), f.addRange(r2);
                  } else
                    e3.createTextRange && ((r2 = e3.createTextRange()).collapse(true), r2.moveEnd("character", i3), r2.moveStart("character", t3), r2.select());
              }
            }, t2.determineLastRequiredPosition = function(e3) {
              var t3, i3, r2 = this, s2 = r2.maskset, l2 = r2.dependencyLib, c2 = n2.getMaskTemplate.call(r2, true, o.call(r2), true, true), u = c2.length, f = o.call(r2), d = {}, p = s2.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
              for (t3 = f + 1; t3 < c2.length; t3++)
                h = (i3 = n2.getTestTemplate.call(r2, t3, h, t3 - 1)).locator.slice(), d[t3] = l2.extend(true, {}, i3);
              var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
              for (t3 = u - 1; t3 > f && (((i3 = d[t3]).match.optionality || i3.match.optionalQuantifier && i3.match.newBlockMarker || v && (v !== d[t3].locator[p.alternation] && 1 != i3.match.static || true === i3.match.static && i3.locator[p.alternation] && a.checkAlternationMatch.call(r2, i3.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n2.getTests.call(r2, t3)[0].def)) && c2[t3] === n2.getPlaceholder.call(r2, t3, i3.match)); t3--)
                u--;
              return e3 ? {
                l: u,
                def: d[u] ? d[u].match : void 0
              } : u;
            }, t2.determineNewCaretPosition = function(e3, t3, i3) {
              var a2 = this, c2 = a2.maskset, u = a2.opts;
              t3 && (a2.isRTL ? e3.end = e3.begin : e3.begin = e3.end);
              if (e3.begin === e3.end) {
                switch (i3 = i3 || u.positionCaretOnClick) {
                  case "none":
                    break;
                  case "select":
                    e3 = {
                      begin: 0,
                      end: r.call(a2).length
                    };
                    break;
                  case "ignore":
                    e3.end = e3.begin = l.call(a2, o.call(a2));
                    break;
                  case "radixFocus":
                    if (a2.clicked > 1 && 0 == c2.validPositions.length)
                      break;
                    if (function(e4) {
                      if ("" !== u.radixPoint && 0 !== u.digits) {
                        var t4 = c2.validPositions;
                        if (void 0 === t4[e4] || t4[e4].input === n2.getPlaceholder.call(a2, e4)) {
                          if (e4 < l.call(a2, -1))
                            return true;
                          var i4 = r.call(a2).indexOf(u.radixPoint);
                          if (-1 !== i4) {
                            for (var o2 = 0, s2 = t4.length; o2 < s2; o2++)
                              if (t4[o2] && i4 < o2 && t4[o2].input !== n2.getPlaceholder.call(a2, o2))
                                return false;
                            return true;
                          }
                        }
                      }
                      return false;
                    }(e3.begin)) {
                      var f = r.call(a2).join("").indexOf(u.radixPoint);
                      e3.end = e3.begin = u.numericInput ? l.call(a2, f) : f;
                      break;
                    }
                  default:
                    var d = e3.begin, p = o.call(a2, d, true), h = l.call(a2, -1 !== p || s.call(a2, 0) ? p : -1);
                    if (d <= h)
                      e3.end = e3.begin = s.call(a2, d, false, true) ? d : l.call(a2, d);
                    else {
                      var v = c2.validPositions[p], m = n2.getTestTemplate.call(a2, h, v ? v.match.locator : void 0, v), g = n2.getPlaceholder.call(a2, h, m.match);
                      if ("" !== g && r.call(a2)[h] !== g && true !== m.match.optionalQuantifier && true !== m.match.newBlockMarker || !s.call(a2, h, u.keepStatic, true) && m.match.def === g) {
                        var y = l.call(a2, h);
                        (d >= y || d === h) && (h = y);
                      }
                      e3.end = e3.begin = h;
                    }
                }
                return e3;
              }
            }, t2.getBuffer = r, t2.getBufferTemplate = function() {
              var e3 = this.maskset;
              void 0 === e3._buffer && (e3._buffer = n2.getMaskTemplate.call(this, false, 1), void 0 === e3.buffer && (e3.buffer = e3._buffer.slice()));
              return e3._buffer;
            }, t2.getLastValidPosition = o, t2.isMask = s, t2.resetMaskSet = function(e3) {
              var t3 = this.maskset;
              t3.buffer = void 0, true !== e3 && (t3.validPositions = [], t3.p = 0);
            }, t2.seekNext = l, t2.seekPrevious = function(e3, t3) {
              var i3 = this, a2 = e3 - 1;
              if (e3 <= 0)
                return 0;
              for (; a2 > 0 && (true === t3 && (true !== n2.getTest.call(i3, a2).match.newBlockMarker || !s.call(i3, a2, void 0, true)) || true !== t3 && !s.call(i3, a2, void 0, true)); )
                a2--;
              return a2;
            }, t2.translatePosition = c;
            var n2 = i2(4713), a = i2(7215);
            function r(e3) {
              var t3 = this, i3 = t3.maskset;
              return void 0 !== i3.buffer && true !== e3 || (i3.buffer = n2.getMaskTemplate.call(t3, true, o.call(t3), true), void 0 === i3._buffer && (i3._buffer = i3.buffer.slice())), i3.buffer;
            }
            function o(e3, t3, i3) {
              var n3 = this.maskset, a2 = -1, r2 = -1, o2 = i3 || n3.validPositions;
              void 0 === e3 && (e3 = -1);
              for (var s2 = 0, l2 = o2.length; s2 < l2; s2++)
                o2[s2] && (t3 || true !== o2[s2].generatedInput) && (s2 <= e3 && (a2 = s2), s2 >= e3 && (r2 = s2));
              return -1 === a2 || a2 == e3 ? r2 : -1 == r2 || e3 - a2 < r2 - e3 ? a2 : r2;
            }
            function s(e3, t3, i3) {
              var a2 = this, r2 = this.maskset, o2 = n2.getTestTemplate.call(a2, e3).match;
              if ("" === o2.def && (o2 = n2.getTest.call(a2, e3).match), true !== o2.static)
                return o2.fn;
              if (true === i3 && void 0 !== r2.validPositions[e3] && true !== r2.validPositions[e3].generatedInput)
                return true;
              if (true !== t3 && e3 > -1) {
                if (i3) {
                  var s2 = n2.getTests.call(a2, e3);
                  return s2.length > 1 + ("" === s2[s2.length - 1].match.def ? 1 : 0);
                }
                var l2 = n2.determineTestTemplate.call(a2, e3, n2.getTests.call(a2, e3)), c2 = n2.getPlaceholder.call(a2, e3, l2.match);
                return l2.match.def !== c2;
              }
              return false;
            }
            function l(e3, t3, i3) {
              var a2 = this;
              void 0 === i3 && (i3 = true);
              for (var r2 = e3 + 1; "" !== n2.getTest.call(a2, r2).match.def && (true === t3 && (true !== n2.getTest.call(a2, r2).match.newBlockMarker || !s.call(a2, r2, void 0, true)) || true !== t3 && !s.call(a2, r2, void 0, i3)); )
                r2++;
              return r2;
            }
            function c(e3) {
              var t3 = this.opts, i3 = this.el;
              return !this.isRTL || "number" != typeof e3 || t3.greedy && "" === t3.placeholder || !i3 || (e3 = this._valueGet().length - e3) < 0 && (e3 = 0), e3;
            }
          },
          4713: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.determineTestTemplate = c, t2.getDecisionTaker = o, t2.getMaskTemplate = function(e3, t3, i3, n3, a2) {
              var r2 = this, o2 = this.opts, u2 = this.maskset, f2 = o2.greedy;
              a2 && o2.greedy && (o2.greedy = false, r2.maskset.tests = {});
              t3 = t3 || 0;
              var p, h, v, m, g = [], y = 0;
              do {
                if (true === e3 && u2.validPositions[y])
                  h = (v = a2 && u2.validPositions[y].match.optionality && void 0 === u2.validPositions[y + 1] && (true === u2.validPositions[y].generatedInput || u2.validPositions[y].input == o2.skipOptionalPartCharacter && y > 0) ? c.call(r2, y, d.call(r2, y, p, y - 1)) : u2.validPositions[y]).match, p = v.locator.slice(), g.push(true === i3 ? v.input : false === i3 ? h.nativeDef : s.call(r2, y, h));
                else {
                  h = (v = l.call(r2, y, p, y - 1)).match, p = v.locator.slice();
                  var k = true !== n3 && (false !== o2.jitMasking ? o2.jitMasking : h.jit);
                  (m = (m && h.static && h.def !== o2.groupSeparator && null === h.fn || u2.validPositions[y - 1] && h.static && h.def !== o2.groupSeparator && null === h.fn) && u2.tests[y]) || false === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(false === i3 ? h.nativeDef : s.call(r2, g.length, h)) : m = false;
                }
                y++;
              } while (true !== h.static || "" !== h.def || t3 > y);
              "" === g[g.length - 1] && g.pop();
              false === i3 && void 0 !== u2.maskLength || (u2.maskLength = y - 1);
              return o2.greedy = f2, g;
            }, t2.getPlaceholder = s, t2.getTest = u, t2.getTestTemplate = l, t2.getTests = d, t2.isSubsetOf = f;
            var n2, a = (n2 = i2(2394)) && n2.__esModule ? n2 : {
              default: n2
            };
            function r(e3, t3) {
              var i3 = (null != e3.alternation ? e3.mloc[o(e3)] : e3.locator).join("");
              if ("" !== i3)
                for (; i3.length < t3; )
                  i3 += "0";
              return i3;
            }
            function o(e3) {
              var t3 = e3.locator[e3.alternation];
              return "string" == typeof t3 && t3.length > 0 && (t3 = t3.split(",")[0]), void 0 !== t3 ? t3.toString() : "";
            }
            function s(e3, t3, i3) {
              var n3 = this.opts, a2 = this.maskset;
              if (void 0 !== (t3 = t3 || u.call(this, e3).match).placeholder || true === i3)
                return "function" == typeof t3.placeholder ? t3.placeholder(n3) : t3.placeholder;
              if (true === t3.static) {
                if (e3 > -1 && void 0 === a2.validPositions[e3]) {
                  var r2, o2 = d.call(this, e3), s2 = [];
                  if (o2.length > 1 + ("" === o2[o2.length - 1].match.def ? 1 : 0)) {
                    for (var l2 = 0; l2 < o2.length; l2++)
                      if ("" !== o2[l2].match.def && true !== o2[l2].match.optionality && true !== o2[l2].match.optionalQuantifier && (true === o2[l2].match.static || void 0 === r2 || false !== o2[l2].match.fn.test(r2.match.def, a2, e3, true, n3)) && (s2.push(o2[l2]), true === o2[l2].match.static && (r2 = o2[l2]), s2.length > 1 && /[0-9a-bA-Z]/.test(s2[0].match.def)))
                        return n3.placeholder.charAt(e3 % n3.placeholder.length);
                  }
                }
                return t3.def;
              }
              return n3.placeholder.charAt(e3 % n3.placeholder.length);
            }
            function l(e3, t3, i3) {
              return this.maskset.validPositions[e3] || c.call(this, e3, d.call(this, e3, t3 ? t3.slice() : t3, i3));
            }
            function c(e3, t3) {
              var i3 = this.opts, n3 = 0, a2 = function(e4, t4) {
                var i4 = 0, n4 = false;
                t4.forEach(function(e5) {
                  e5.match.optionality && (0 !== i4 && i4 !== e5.match.optionality && (n4 = true), (0 === i4 || i4 > e5.match.optionality) && (i4 = e5.match.optionality));
                }), i4 && (0 == e4 || 1 == t4.length ? i4 = 0 : n4 || (i4 = 0));
                return i4;
              }(e3, t3);
              e3 = e3 > 0 ? e3 - 1 : 0;
              var o2, s2, l2, c2 = r(u.call(this, e3));
              i3.greedy && t3.length > 1 && "" === t3[t3.length - 1].match.def && (n3 = 1);
              for (var f2 = 0; f2 < t3.length - n3; f2++) {
                var d2 = t3[f2];
                o2 = r(d2, c2.length);
                var p = Math.abs(o2 - c2);
                (void 0 === s2 || "" !== o2 && p < s2 || l2 && !i3.greedy && l2.match.optionality && l2.match.optionality - a2 > 0 && "master" === l2.match.newBlockMarker && (!d2.match.optionality || d2.match.optionality - a2 < 1 || !d2.match.newBlockMarker) || l2 && !i3.greedy && l2.match.optionalQuantifier && !d2.match.optionalQuantifier) && (s2 = p, l2 = d2);
              }
              return l2;
            }
            function u(e3, t3) {
              var i3 = this.maskset;
              return i3.validPositions[e3] ? i3.validPositions[e3] : (t3 || d.call(this, e3))[0];
            }
            function f(e3, t3, i3) {
              function n3(e4) {
                for (var t4, i4 = [], n4 = -1, a2 = 0, r2 = e4.length; a2 < r2; a2++)
                  if ("-" === e4.charAt(a2))
                    for (t4 = e4.charCodeAt(a2 + 1); ++n4 < t4; )
                      i4.push(String.fromCharCode(n4));
                  else
                    n4 = e4.charCodeAt(a2), i4.push(e4.charAt(a2));
                return i4.join("");
              }
              return e3.match.def === t3.match.nativeDef || !(!(i3.regex || e3.match.fn instanceof RegExp && t3.match.fn instanceof RegExp) || true === e3.match.static || true === t3.match.static) && -1 !== n3(t3.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n3(e3.match.fn.toString().replace(/[[\]/]/g, "")));
            }
            function d(e3, t3, i3) {
              var n3, r2, o2 = this, s2 = this.dependencyLib, l2 = this.maskset, u2 = this.opts, d2 = this.el, p = l2.maskToken, h = t3 ? i3 : 0, v = t3 ? t3.slice() : [0], m = [], g = false, y = t3 ? t3.join("") : "";
              function k(t4, i4, r3, s3) {
                function c2(r4, s4, p3) {
                  function v3(e4, t5) {
                    var i5 = 0 === t5.matches.indexOf(e4);
                    return i5 || t5.matches.every(function(n4, a2) {
                      return true === n4.isQuantifier ? i5 = v3(e4, t5.matches[a2 - 1]) : Object.prototype.hasOwnProperty.call(n4, "matches") && (i5 = v3(e4, n4)), !i5;
                    }), i5;
                  }
                  function x2(e4, t5, i5) {
                    var n4, a2;
                    if ((l2.tests[e4] || l2.validPositions[e4]) && (l2.tests[e4] || [l2.validPositions[e4]]).every(function(e5, r6) {
                      if (e5.mloc[t5])
                        return n4 = e5, false;
                      var o3 = void 0 !== i5 ? i5 : e5.alternation, s5 = void 0 !== e5.locator[o3] ? e5.locator[o3].toString().indexOf(t5) : -1;
                      return (void 0 === a2 || s5 < a2) && -1 !== s5 && (n4 = e5, a2 = s5), true;
                    }), n4) {
                      var r5 = n4.locator[n4.alternation];
                      return (n4.mloc[t5] || n4.mloc[r5] || n4.locator).slice((void 0 !== i5 ? i5 : n4.alternation) + 1);
                    }
                    return void 0 !== i5 ? x2(e4, t5) : void 0;
                  }
                  function P2(e4, t5) {
                    var i5 = e4.alternation, n4 = void 0 === t5 || i5 === t5.alternation && -1 === e4.locator[i5].toString().indexOf(t5.locator[i5]);
                    if (!n4 && i5 > t5.alternation) {
                      for (var a2 = t5.alternation; a2 < i5; a2++)
                        if (e4.locator[a2] !== t5.locator[a2]) {
                          i5 = a2, n4 = true;
                          break;
                        }
                    }
                    if (n4) {
                      e4.mloc = e4.mloc || {};
                      var r5 = e4.locator[i5];
                      if (void 0 !== r5) {
                        if ("string" == typeof r5 && (r5 = r5.split(",")[0]), void 0 === e4.mloc[r5] && (e4.mloc[r5] = e4.locator.slice()), void 0 !== t5) {
                          for (var o3 in t5.mloc)
                            "string" == typeof o3 && (o3 = o3.split(",")[0]), void 0 === e4.mloc[o3] && (e4.mloc[o3] = t5.mloc[o3]);
                          e4.locator[i5] = Object.keys(e4.mloc).join(",");
                        }
                        return true;
                      }
                      e4.alternation = void 0;
                    }
                    return false;
                  }
                  function w2(e4, t5) {
                    if (e4.locator.length !== t5.locator.length)
                      return false;
                    for (var i5 = e4.alternation + 1; i5 < e4.locator.length; i5++)
                      if (e4.locator[i5] !== t5.locator[i5])
                        return false;
                    return true;
                  }
                  if (h > e3 + u2._maxTestPos)
                    throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l2.mask;
                  if (h === e3 && void 0 === r4.matches) {
                    if (m.push({
                      match: r4,
                      locator: s4.reverse(),
                      cd: y,
                      mloc: {}
                    }), !r4.optionality || void 0 !== p3 || !(u2.definitions && u2.definitions[r4.nativeDef] && u2.definitions[r4.nativeDef].optional || a.default.prototype.definitions[r4.nativeDef] && a.default.prototype.definitions[r4.nativeDef].optional))
                      return true;
                    g = true, h = e3;
                  } else if (void 0 !== r4.matches) {
                    if (r4.isGroup && p3 !== r4)
                      return function() {
                        if (r4 = c2(t4.matches[t4.matches.indexOf(r4) + 1], s4, p3))
                          return true;
                      }();
                    if (r4.isOptional)
                      return function() {
                        var t5 = r4, a2 = m.length;
                        if (r4 = k(r4, i4, s4, p3), m.length > 0) {
                          if (m.forEach(function(e4, t6) {
                            t6 >= a2 && (e4.match.optionality = e4.match.optionality ? e4.match.optionality + 1 : 1);
                          }), n3 = m[m.length - 1].match, void 0 !== p3 || !v3(n3, t5))
                            return r4;
                          g = true, h = e3;
                        }
                      }();
                    if (r4.isAlternator)
                      return function() {
                        o2.hasAlternator = true;
                        var n4, a2, v4, y2 = r4, k2 = [], b2 = m.slice(), S = s4.length, M = false, _ = i4.length > 0 ? i4.shift() : -1;
                        if (-1 === _ || "string" == typeof _) {
                          var O, E = h, T = i4.slice(), j = [];
                          if ("string" == typeof _)
                            j = _.split(",");
                          else
                            for (O = 0; O < y2.matches.length; O++)
                              j.push(O.toString());
                          if (void 0 !== l2.excludes[e3]) {
                            for (var A = j.slice(), D = 0, B = l2.excludes[e3].length; D < B; D++) {
                              var C = l2.excludes[e3][D].toString().split(":");
                              s4.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                            }
                            0 === j.length && (delete l2.excludes[e3], j = A);
                          }
                          (true === u2.keepStatic || isFinite(parseInt(u2.keepStatic)) && E >= u2.keepStatic) && (j = j.slice(0, 1));
                          for (var R = 0; R < j.length; R++) {
                            O = parseInt(j[R]), m = [], i4 = "string" == typeof _ && x2(h, O, S) || T.slice();
                            var L = y2.matches[O];
                            if (L && c2(L, [O].concat(s4), p3))
                              r4 = true;
                            else if (0 === R && (M = true), L && L.matches && L.matches.length > y2.matches[0].matches.length)
                              break;
                            n4 = m.slice(), h = E, m = [];
                            for (var F = 0; F < n4.length; F++) {
                              var I = n4[F], N = false;
                              I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P2(I);
                              for (var V = 0; V < k2.length; V++) {
                                var G = k2[V];
                                if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                  if (I.match.nativeDef === G.match.nativeDef) {
                                    N = true, P2(G, I);
                                    break;
                                  }
                                  if (f(I, G, u2)) {
                                    P2(I, G) && (N = true, k2.splice(k2.indexOf(G), 0, I));
                                    break;
                                  }
                                  if (f(G, I, u2)) {
                                    P2(G, I);
                                    break;
                                  }
                                  if (v4 = G, true === (a2 = I).match.static && true !== v4.match.static && v4.match.fn.test(a2.match.def, l2, e3, false, u2, false)) {
                                    w2(I, G) || void 0 !== d2.inputmask.userOptions.keepStatic ? P2(I, G) && (N = true, k2.splice(k2.indexOf(G), 0, I)) : u2.keepStatic = true;
                                    break;
                                  }
                                }
                              }
                              N || k2.push(I);
                            }
                          }
                          m = b2.concat(k2), h = e3, g = m.length > 0, r4 = k2.length > 0, i4 = T.slice();
                        } else
                          r4 = c2(y2.matches[_] || t4.matches[_], [_].concat(s4), p3);
                        if (r4)
                          return true;
                      }();
                    if (r4.isQuantifier && p3 !== t4.matches[t4.matches.indexOf(r4) - 1])
                      return function() {
                        for (var a2 = r4, o3 = false, f2 = i4.length > 0 ? i4.shift() : 0; f2 < (isNaN(a2.quantifier.max) ? f2 + 1 : a2.quantifier.max) && h <= e3; f2++) {
                          var d3 = t4.matches[t4.matches.indexOf(a2) - 1];
                          if (r4 = c2(d3, [f2].concat(s4), d3)) {
                            if (m.forEach(function(t5, i5) {
                              (n3 = b(d3, t5.match) ? t5.match : m[m.length - 1].match).optionalQuantifier = f2 >= a2.quantifier.min, n3.jit = (f2 + 1) * (d3.matches.indexOf(n3) + 1) > a2.quantifier.jit, n3.optionalQuantifier && v3(n3, d3) && (g = true, h = e3, u2.greedy && null == l2.validPositions[e3 - 1] && f2 > a2.quantifier.min && -1 != ["*", "+"].indexOf(a2.quantifier.max) && (m.pop(), y = void 0), o3 = true, r4 = false), !o3 && n3.jit && (l2.jitOffset[e3] = d3.matches.length - d3.matches.indexOf(n3));
                            }), o3)
                              break;
                            return true;
                          }
                        }
                      }();
                    if (r4 = k(r4, i4, s4, p3))
                      return true;
                  } else
                    h++;
                }
                for (var p2 = i4.length > 0 ? i4.shift() : 0; p2 < t4.matches.length; p2++)
                  if (true !== t4.matches[p2].isQuantifier) {
                    var v2 = c2(t4.matches[p2], [p2].concat(r3), s3);
                    if (v2 && h === e3)
                      return v2;
                    if (h > e3)
                      break;
                  }
              }
              function b(e4, t4) {
                var i4 = -1 != e4.matches.indexOf(t4);
                return i4 || e4.matches.forEach(function(e5, n4) {
                  void 0 === e5.matches || i4 || (i4 = b(e5, t4));
                }), i4;
              }
              if (e3 > -1) {
                if (void 0 === t3) {
                  for (var x, P = e3 - 1; void 0 === (x = l2.validPositions[P] || l2.tests[P]) && P > -1; )
                    P--;
                  void 0 !== x && P > -1 && (v = function(e4, t4) {
                    var i4, n4 = [];
                    return Array.isArray(t4) || (t4 = [t4]), t4.length > 0 && (void 0 === t4[0].alternation || true === u2.keepStatic ? 0 === (n4 = c.call(o2, e4, t4.slice()).locator.slice()).length && (n4 = t4[0].locator.slice()) : t4.forEach(function(e5) {
                      "" !== e5.def && (0 === n4.length ? (i4 = e5.alternation, n4 = e5.locator.slice()) : e5.locator[i4] && -1 === n4[i4].toString().indexOf(e5.locator[i4]) && (n4[i4] += "," + e5.locator[i4]));
                    })), n4;
                  }(P, x), y = v.join(""), h = P);
                }
                if (l2.tests[e3] && l2.tests[e3][0].cd === y)
                  return l2.tests[e3];
                for (var w = v.shift(); w < p.length; w++) {
                  if (k(p[w], v, [w]) && h === e3 || h > e3)
                    break;
                }
              }
              return (0 === m.length || g) && m.push({
                match: {
                  fn: null,
                  static: true,
                  optionality: false,
                  casing: null,
                  def: "",
                  placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: y
              }), void 0 !== t3 && l2.tests[e3] ? r2 = s2.extend(true, [], m) : (l2.tests[e3] = s2.extend(true, [], m), r2 = l2.tests[e3]), m.forEach(function(e4) {
                e4.match.optionality = e4.match.defOptionality || false;
              }), r2;
            }
          },
          7215: function(e2, t2, i2) {
            Object.defineProperty(t2, "__esModule", {
              value: true
            }), t2.alternate = s, t2.checkAlternationMatch = function(e3, t3, i3) {
              for (var n3, a2 = this.opts.greedy ? t3 : t3.slice(0, 1), r2 = false, o2 = void 0 !== i3 ? i3.split(",") : [], s2 = 0; s2 < o2.length; s2++)
                -1 !== (n3 = e3.indexOf(o2[s2])) && e3.splice(n3, 1);
              for (var l2 = 0; l2 < e3.length; l2++)
                if (a2.includes(e3[l2])) {
                  r2 = true;
                  break;
                }
              return r2;
            }, t2.handleRemove = function(e3, t3, i3, o2, l2) {
              var c2 = this, u2 = this.maskset, f2 = this.opts;
              if ((f2.numericInput || c2.isRTL) && (t3 === a.keys.Backspace ? t3 = a.keys.Delete : t3 === a.keys.Delete && (t3 = a.keys.Backspace), c2.isRTL)) {
                var d2 = i3.end;
                i3.end = i3.begin, i3.begin = d2;
              }
              var p2, h2 = r.getLastValidPosition.call(c2, void 0, true);
              i3.end >= r.getBuffer.call(c2).length && h2 >= i3.end && (i3.end = h2 + 1);
              t3 === a.keys.Backspace ? i3.end - i3.begin < 1 && (i3.begin = r.seekPrevious.call(c2, i3.begin)) : t3 === a.keys.Delete && i3.begin === i3.end && (i3.end = r.isMask.call(c2, i3.end, true, true) ? i3.end + 1 : r.seekNext.call(c2, i3.end) + 1);
              if (false !== (p2 = v.call(c2, i3))) {
                if (true !== o2 && false !== f2.keepStatic || null !== f2.regex && -1 !== n2.getTest.call(c2, i3.begin).match.def.indexOf("|")) {
                  var m = s.call(c2, true);
                  if (m) {
                    var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c2, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c2, -1, true);
                    (t3 !== a.keys.Delete || i3.begin > g) && i3.begin;
                  }
                }
                true !== o2 && (u2.p = t3 === a.keys.Delete ? i3.begin + p2 : i3.begin, u2.p = r.determineNewCaretPosition.call(c2, {
                  begin: u2.p,
                  end: u2.p
                }, false, false === f2.insertMode && t3 === a.keys.Backspace ? "none" : void 0).begin);
              }
            }, t2.isComplete = c, t2.isSelection = u, t2.isValid = f, t2.refreshFromBuffer = p, t2.revalidateMask = v;
            var n2 = i2(4713), a = i2(2839), r = i2(8711), o = i2(6030);
            function s(e3, t3, i3, a2, o2, l2) {
              var c2, u2, d2, p2, h2, v2, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(true, [], S.validPositions), _ = P.extend(true, {}, S.tests), O = false, E = false, T = void 0 !== o2 ? o2 : r.getLastValidPosition.call(x);
              if (l2 && (k = l2.begin, b = l2.end, l2.begin > l2.end && (k = l2.end, b = l2.begin)), -1 === T && void 0 === o2)
                c2 = 0, u2 = (p2 = n2.getTest.call(x, c2)).alternation;
              else
                for (; T >= 0; T--)
                  if ((d2 = S.validPositions[T]) && void 0 !== d2.alternation) {
                    if (T <= (e3 || 0) && p2 && p2.locator[d2.alternation] !== d2.locator[d2.alternation])
                      break;
                    c2 = T, u2 = S.validPositions[c2].alternation, p2 = d2;
                  }
              if (void 0 !== u2) {
                m = parseInt(c2), S.excludes[m] = S.excludes[m] || [], true !== e3 && S.excludes[m].push((0, n2.getDecisionTaker)(p2) + ":" + p2.alternation);
                var j = [], A = -1;
                for (h2 = m; h2 < r.getLastValidPosition.call(x, void 0, true) + 1; h2++)
                  -1 === A && e3 <= h2 && void 0 !== t3 && (j.push(t3), A = j.length - 1), (v2 = S.validPositions[h2]) && true !== v2.generatedInput && (void 0 === l2 || h2 < k || h2 >= b) && j.push(v2.input), delete S.validPositions[h2];
                for (-1 === A && void 0 !== t3 && (j.push(t3), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                  for (S.tests = {}, r.resetMaskSet.call(x, true), O = true, h2 = 0; h2 < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, true) + 1, y = j[h2], O = f.call(x, g, y, false, a2, true)); h2++)
                    h2 === A && (E = O), 1 == e3 && O && (E = {
                      caretPos: h2
                    });
                  if (O)
                    break;
                  if (r.resetMaskSet.call(x), p2 = n2.getTest.call(x, m), S.validPositions = P.extend(true, [], M), S.tests = P.extend(true, {}, _), !S.excludes[m]) {
                    E = s.call(x, e3, t3, i3, a2, m - 1, l2);
                    break;
                  }
                  var D = (0, n2.getDecisionTaker)(p2);
                  if (-1 !== S.excludes[m].indexOf(D + ":" + p2.alternation)) {
                    E = s.call(x, e3, t3, i3, a2, m - 1, l2);
                    break;
                  }
                  for (S.excludes[m].push(D + ":" + p2.alternation), h2 = m; h2 < r.getLastValidPosition.call(x, void 0, true) + 1; h2++)
                    delete S.validPositions[h2];
                }
              }
              return E && false === w.keepStatic || delete S.excludes[m], E;
            }
            function l(e3, t3, i3) {
              var n3 = this.opts, r2 = this.maskset;
              switch (n3.casing || t3.casing) {
                case "upper":
                  e3 = e3.toUpperCase();
                  break;
                case "lower":
                  e3 = e3.toLowerCase();
                  break;
                case "title":
                  var o2 = r2.validPositions[i3 - 1];
                  e3 = 0 === i3 || o2 && o2.input === String.fromCharCode(a.keyCode.Space) ? e3.toUpperCase() : e3.toLowerCase();
                  break;
                default:
                  if ("function" == typeof n3.casing) {
                    var s2 = Array.prototype.slice.call(arguments);
                    s2.push(r2.validPositions), e3 = n3.casing.apply(this, s2);
                  }
              }
              return e3;
            }
            function c(e3) {
              var t3 = this, i3 = this.opts, a2 = this.maskset;
              if ("function" == typeof i3.isComplete)
                return i3.isComplete(e3, i3);
              if ("*" !== i3.repeat) {
                var o2 = false, s2 = r.determineLastRequiredPosition.call(t3, true), l2 = r.seekPrevious.call(t3, s2.l);
                if (void 0 === s2.def || s2.def.newBlockMarker || s2.def.optionality || s2.def.optionalQuantifier) {
                  o2 = true;
                  for (var c2 = 0; c2 <= l2; c2++) {
                    var u2 = n2.getTestTemplate.call(t3, c2).match;
                    if (true !== u2.static && void 0 === a2.validPositions[c2] && true !== u2.optionality && true !== u2.optionalQuantifier || true === u2.static && e3[c2] !== n2.getPlaceholder.call(t3, c2, u2)) {
                      o2 = false;
                      break;
                    }
                  }
                }
                return o2;
              }
            }
            function u(e3) {
              var t3 = this.opts.insertMode ? 0 : 1;
              return this.isRTL ? e3.begin - e3.end > t3 : e3.end - e3.begin > t3;
            }
            function f(e3, t3, i3, a2, o2, d2, m) {
              var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
              i3 = true === i3;
              var x = e3;
              function P(e4) {
                if (void 0 !== e4) {
                  if (void 0 !== e4.remove && (Array.isArray(e4.remove) || (e4.remove = [e4.remove]), e4.remove.sort(function(e5, t5) {
                    return g.isRTL ? e5.pos - t5.pos : t5.pos - e5.pos;
                  }).forEach(function(e5) {
                    v.call(g, {
                      begin: e5,
                      end: e5 + 1
                    });
                  }), e4.remove = void 0), void 0 !== e4.insert && (Array.isArray(e4.insert) || (e4.insert = [e4.insert]), e4.insert.sort(function(e5, t5) {
                    return g.isRTL ? t5.pos - e5.pos : e5.pos - t5.pos;
                  }).forEach(function(e5) {
                    "" !== e5.c && f.call(g, e5.pos, e5.c, void 0 === e5.strict || e5.strict, void 0 !== e5.fromIsValid ? e5.fromIsValid : a2);
                  }), e4.insert = void 0), e4.refreshFromBuffer && e4.buffer) {
                    var t4 = e4.refreshFromBuffer;
                    p.call(g, true === t4 ? t4 : t4.start, t4.end, e4.buffer), e4.refreshFromBuffer = void 0;
                  }
                  void 0 !== e4.rewritePosition && (x = e4.rewritePosition, e4 = true);
                }
                return e4;
              }
              function w(t4, i4, o3) {
                var s2 = false;
                return n2.getTests.call(g, t4).every(function(c2, f2) {
                  var d3 = c2.match;
                  if (r.getBuffer.call(g, true), false !== (s2 = (!d3.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t4)]) && (null != d3.fn ? d3.fn.test(i4, b, t4, o3, k, u.call(g, e3)) : (i4 === d3.def || i4 === k.skipOptionalPartCharacter) && "" !== d3.def && {
                    c: n2.getPlaceholder.call(g, t4, d3, true) || d3.def,
                    pos: t4
                  }))) {
                    var p2 = void 0 !== s2.c ? s2.c : i4, h2 = t4;
                    return p2 = p2 === k.skipOptionalPartCharacter && true === d3.static ? n2.getPlaceholder.call(g, t4, d3, true) || d3.def : p2, true !== (s2 = P(s2)) && void 0 !== s2.pos && s2.pos !== t4 && (h2 = s2.pos), true !== s2 && void 0 === s2.pos && void 0 === s2.c ? false : (false === v.call(g, e3, y.extend({}, c2, {
                      input: l.call(g, p2, d3, h2)
                    }), a2, h2) && (s2 = false), false);
                  }
                  return true;
                }), s2;
              }
              void 0 !== e3.begin && (x = g.isRTL ? e3.end : e3.begin);
              var S = true, M = y.extend(true, {}, b.validPositions);
              if (false === k.keepStatic && void 0 !== b.excludes[x] && true !== o2 && true !== a2)
                for (var _ = x; _ < (g.isRTL ? e3.begin : e3.end); _++)
                  void 0 !== b.excludes[_] && (b.excludes[_] = void 0, delete b.tests[_]);
              if ("function" == typeof k.preValidation && true !== a2 && true !== d2 && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t3, u.call(g, e3), k, b, e3, i3 || o2))), true === S) {
                if (S = w(x, t3, i3), (!i3 || true === a2) && false === S && true !== d2) {
                  var O = b.validPositions[x];
                  if (!O || true !== O.match.static || O.match.def !== t3 && t3 !== k.skipOptionalPartCharacter) {
                    if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e3.end > x) {
                      var E = false;
                      if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && false !== (S = f.call(g, x + b.jitOffset[x], t3, true, true)) && (true !== o2 && (S.caret = x), E = true), e3.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) {
                        for (var T = x + 1, j = r.seekNext.call(g, x, false, 0 !== x); T <= j; T++)
                          if (false !== (S = w(T, t3, i3))) {
                            S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                            break;
                          }
                      }
                    }
                  } else
                    S = {
                      caret: r.seekNext.call(g, x)
                    };
                }
                g.hasAlternator && true !== o2 && !i3 && (false === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t3, i3, a2, void 0, e3) : (u.call(g, e3) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && true !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, true) > x) && (S = s.call(g, true))), true === S && (S = {
                  pos: x
                });
              }
              if ("function" == typeof k.postValidation && true !== a2 && true !== d2) {
                var A = k.postValidation.call(g, r.getBuffer.call(g, true), void 0 !== e3.begin ? g.isRTL ? e3.end : e3.begin : e3, t3, S, k, b, i3, m);
                void 0 !== A && (S = true === A ? S : A);
              }
              S && void 0 === S.pos && (S.pos = x), false === S || true === d2 ? (r.resetMaskSet.call(g, true), b.validPositions = y.extend(true, [], M)) : h.call(g, void 0, x, true);
              var D = P(S);
              void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a2 && (r.resetMaskSet.call(g, true), b.validPositions = y.extend(true, [], M), D = false));
              return D;
            }
            function d(e3, t3, i3) {
              for (var a2 = this.maskset, r2 = false, o2 = n2.getTests.call(this, e3), s2 = 0; s2 < o2.length; s2++) {
                if (o2[s2].match && (o2[s2].match.nativeDef === t3.match[i3.shiftPositions ? "def" : "nativeDef"] && (!i3.shiftPositions || !t3.match.static) || o2[s2].match.nativeDef === t3.match.nativeDef || i3.regex && !o2[s2].match.static && o2[s2].match.fn.test(t3.input, a2, e3, false, i3))) {
                  r2 = true;
                  break;
                }
                if (o2[s2].match && o2[s2].match.def === t3.match.nativeDef) {
                  r2 = void 0;
                  break;
                }
              }
              return false === r2 && void 0 !== a2.jitOffset[e3] && (r2 = d.call(this, e3 + a2.jitOffset[e3], t3, i3)), r2;
            }
            function p(e3, t3, i3) {
              var n3, a2, s2 = this, l2 = this.maskset, c2 = this.opts, u2 = this.dependencyLib, f2 = c2.skipOptionalPartCharacter, d2 = s2.isRTL ? i3.slice().reverse() : i3;
              if (c2.skipOptionalPartCharacter = "", true === e3)
                r.resetMaskSet.call(s2), l2.tests = {}, e3 = 0, t3 = i3.length, a2 = r.determineNewCaretPosition.call(s2, {
                  begin: 0,
                  end: 0
                }, false).begin;
              else {
                for (n3 = e3; n3 < t3; n3++)
                  delete l2.validPositions[n3];
                a2 = e3;
              }
              var p2 = new u2.Event("keypress");
              for (n3 = e3; n3 < t3; n3++) {
                p2.key = d2[n3].toString(), s2.ignorable = false;
                var h2 = o.EventHandlers.keypressEvent.call(s2, p2, true, false, false, a2);
                false !== h2 && void 0 !== h2 && (a2 = h2.forwardPosition);
              }
              c2.skipOptionalPartCharacter = f2;
            }
            function h(e3, t3, i3) {
              var a2 = this, o2 = this.maskset, s2 = this.dependencyLib;
              if (void 0 === e3)
                for (e3 = t3 - 1; e3 > 0 && !o2.validPositions[e3]; e3--)
                  ;
              for (var l2 = e3; l2 < t3; l2++) {
                if (void 0 === o2.validPositions[l2] && !r.isMask.call(a2, l2, false)) {
                  if (0 == l2 ? n2.getTest.call(a2, l2) : o2.validPositions[l2 - 1]) {
                    var c2 = n2.getTests.call(a2, l2).slice();
                    "" === c2[c2.length - 1].match.def && c2.pop();
                    var u2, d2 = n2.determineTestTemplate.call(a2, l2, c2);
                    if (d2 && (true !== d2.match.jit || "master" === d2.match.newBlockMarker && (u2 = o2.validPositions[l2 + 1]) && true === u2.match.optionalQuantifier) && ((d2 = s2.extend({}, d2, {
                      input: n2.getPlaceholder.call(a2, l2, d2.match, true) || d2.match.def
                    })).generatedInput = true, v.call(a2, l2, d2, true), true !== i3)) {
                      var p2 = o2.validPositions[t3].input;
                      return o2.validPositions[t3] = void 0, f.call(a2, t3, p2, true, true);
                    }
                  }
                }
              }
            }
            function v(e3, t3, i3, a2) {
              var o2 = this, s2 = this.maskset, l2 = this.opts, c2 = this.dependencyLib;
              function u2(e4, t4, i4) {
                var n3 = t4[e4];
                if (void 0 !== n3 && true === n3.match.static && true !== n3.match.optionality && (void 0 === t4[0] || void 0 === t4[0].alternation)) {
                  var a3 = i4.begin <= e4 - 1 ? t4[e4 - 1] && true === t4[e4 - 1].match.static && t4[e4 - 1] : t4[e4 - 1], r2 = i4.end > e4 + 1 ? t4[e4 + 1] && true === t4[e4 + 1].match.static && t4[e4 + 1] : t4[e4 + 1];
                  return a3 && r2;
                }
                return false;
              }
              var p2 = 0, h2 = void 0 !== e3.begin ? e3.begin : e3, v2 = void 0 !== e3.end ? e3.end : e3, m = true;
              if (e3.begin > e3.end && (h2 = e3.end, v2 = e3.begin), a2 = void 0 !== a2 ? a2 : h2, void 0 === i3 && (h2 !== v2 || l2.insertMode && void 0 !== s2.validPositions[a2] || void 0 === t3 || t3.match.optionalQuantifier || t3.match.optionality)) {
                var g, y = c2.extend(true, {}, s2.validPositions), k = r.getLastValidPosition.call(o2, void 0, true);
                for (s2.p = h2, g = k; g >= h2; g--)
                  delete s2.validPositions[g], void 0 === t3 && delete s2.tests[g + 1];
                var b, x, P = a2, w = P;
                for (t3 && (s2.validPositions[a2] = c2.extend(true, {}, t3), w++, P++), g = t3 ? v2 : v2 - 1; g <= k; g++) {
                  if (void 0 !== (b = y[g]) && true !== b.generatedInput && (g >= v2 || g >= h2 && u2(g, y, {
                    begin: h2,
                    end: v2
                  }))) {
                    for (; "" !== n2.getTest.call(o2, w).match.def; ) {
                      if (false !== (x = d.call(o2, w, b, l2)) || "+" === b.match.def) {
                        "+" === b.match.def && r.getBuffer.call(o2, true);
                        var S = f.call(o2, w, b.input, "+" !== b.match.def, true);
                        if (m = false !== S, P = (S.pos || w) + 1, !m && x)
                          break;
                      } else
                        m = false;
                      if (m) {
                        void 0 === t3 && b.match.static && g === e3.begin && p2++;
                        break;
                      }
                      if (!m && r.getBuffer.call(o2), w > s2.maskLength)
                        break;
                      w++;
                    }
                    "" == n2.getTest.call(o2, w).match.def && (m = false), w = P;
                  }
                  if (!m)
                    break;
                }
                if (!m)
                  return s2.validPositions = c2.extend(true, [], y), r.resetMaskSet.call(o2, true), false;
              } else
                t3 && n2.getTest.call(o2, a2).match.cd === t3.match.cd && (s2.validPositions[a2] = c2.extend(true, {}, t3));
              return r.resetMaskSet.call(o2, true), p2;
            }
          }
        }, t = {};
        function i(n2) {
          var a = t[n2];
          if (void 0 !== a)
            return a.exports;
          var r = t[n2] = {
            exports: {}
          };
          return e[n2](r, r.exports, i), r.exports;
        }
        var n = {};
        return function() {
          var e2, t2 = n;
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), i(5296);
          var a = ((e2 = i(2394)) && e2.__esModule ? e2 : {
            default: e2
          }).default;
          t2.default = a;
        }(), n;
      }();
    });
  }
});

// node_modules/topbar/topbar.min.js
var require_topbar_min = __commonJS({
  "node_modules/topbar/topbar.min.js"(exports, module2) {
    (function(window2, document2) {
      "use strict";
      !function() {
        for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length && !window2.requestAnimationFrame; ++x)
          window2.requestAnimationFrame = window2[vendors[x] + "RequestAnimationFrame"], window2.cancelAnimationFrame = window2[vendors[x] + "CancelAnimationFrame"] || window2[vendors[x] + "CancelRequestAnimationFrame"];
        window2.requestAnimationFrame || (window2.requestAnimationFrame = function(callback, element) {
          var currTime = (/* @__PURE__ */ new Date()).getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window2.setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
          return lastTime = currTime + timeToCall, id;
        }), window2.cancelAnimationFrame || (window2.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        });
      }();
      function repaint() {
        canvas.width = window2.innerWidth, canvas.height = 5 * options.barThickness;
        var ctx = canvas.getContext("2d");
        ctx.shadowBlur = options.shadowBlur, ctx.shadowColor = options.shadowColor;
        var stop, lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        for (stop in options.barColors)
          lineGradient.addColorStop(stop, options.barColors[stop]);
        ctx.lineWidth = options.barThickness, ctx.beginPath(), ctx.moveTo(0, options.barThickness / 2), ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2), ctx.strokeStyle = lineGradient, ctx.stroke();
      }
      var canvas, progressTimerId, fadeTimerId, currentProgress, showing, options = { autoRun: true, barThickness: 3, barColors: { 0: "rgba(26,  188, 156, .9)", ".25": "rgba(52,  152, 219, .9)", ".50": "rgba(241, 196, 15,  .9)", ".75": "rgba(230, 126, 34,  .9)", "1.0": "rgba(211, 84,  0,   .9)" }, shadowBlur: 10, shadowColor: "rgba(0,   0,   0,   .6)", className: null }, topbar2 = { config: function(opts) {
        for (var key in opts)
          options.hasOwnProperty(key) && (options[key] = opts[key]);
      }, show: function() {
        var type, handler, elem;
        showing || (showing = true, null !== fadeTimerId && window2.cancelAnimationFrame(fadeTimerId), canvas || ((elem = (canvas = document2.createElement("canvas")).style).position = "fixed", elem.top = elem.left = elem.right = elem.margin = elem.padding = 0, elem.zIndex = 100001, elem.display = "none", options.className && canvas.classList.add(options.className), document2.body.appendChild(canvas), type = "resize", handler = repaint, (elem = window2).addEventListener ? elem.addEventListener(type, handler, false) : elem.attachEvent ? elem.attachEvent("on" + type, handler) : elem["on" + type] = handler), canvas.style.opacity = 1, canvas.style.display = "block", topbar2.progress(0), options.autoRun && function loop() {
          progressTimerId = window2.requestAnimationFrame(loop), topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
        }());
      }, progress: function(to) {
        return void 0 === to || ("string" == typeof to && (to = (0 <= to.indexOf("+") || 0 <= to.indexOf("-") ? currentProgress : 0) + parseFloat(to)), currentProgress = 1 < to ? 1 : to, repaint()), currentProgress;
      }, hide: function() {
        showing && (showing = false, null != progressTimerId && (window2.cancelAnimationFrame(progressTimerId), progressTimerId = null), function loop() {
          return 1 <= topbar2.progress("+.1") && (canvas.style.opacity -= 0.05, canvas.style.opacity <= 0.05) ? (canvas.style.display = "none", void (fadeTimerId = null)) : void (fadeTimerId = window2.requestAnimationFrame(loop));
        }());
      } };
      "object" == typeof module2 && "object" == typeof module2.exports ? module2.exports = topbar2 : "function" == typeof define && define.amd ? define(function() {
        return topbar2;
      }) : this.topbar = topbar2;
    }).call(exports, window, document);
  }
});

// ../deps/phoenix_html/priv/static/phoenix_html.js
(function() {
  var PolyfillEvent = eventConstructor();
  function eventConstructor() {
    if (typeof window.CustomEvent === "function")
      return window.CustomEvent;
    function CustomEvent2(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: void 0 };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent2.prototype = window.Event.prototype;
    return CustomEvent2;
  }
  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }
  function handleClick(element, targetModifierKey) {
    var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), submit = document.createElement("input"), target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "none";
    if (target)
      form.target = target;
    else if (targetModifierKey)
      form.target = "_blank";
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    submit.type = "submit";
    form.appendChild(submit);
    submit.click();
  }
  window.addEventListener("click", function(e) {
    var element = e.target;
    if (e.defaultPrevented)
      return;
    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
        "bubbles": true,
        "cancelable": true
      });
      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }
      if (element.getAttribute("data-method")) {
        handleClick(element, e.metaKey || e.shiftKey);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener("phoenix.link.click", function(e) {
    var message = e.target.getAttribute("data-confirm");
    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

// js/app.js
var import_inputmask = __toESM(require_inputmask());

// ../deps/phoenix/priv/static/phoenix.mjs
var closure = (value) => {
  if (typeof value === "function") {
    return value;
  } else {
    let closure22 = function() {
      return value;
    };
    return closure22;
  }
};
var globalSelf = typeof self !== "undefined" ? self : null;
var phxWindow = typeof window !== "undefined" ? window : null;
var global = globalSelf || phxWindow || global;
var DEFAULT_VSN = "2.0.0";
var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var CHANNEL_STATES = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var TRANSPORTS = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var XHR_STATES = {
  complete: 4
};
var Push = class {
  constructor(channel, event, payload, timeout) {
    this.channel = channel;
    this.event = event;
    this.payload = payload || function() {
      return {};
    };
    this.receivedResp = null;
    this.timeout = timeout;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(timeout) {
    this.timeout = timeout;
    this.reset();
    this.send();
  }
  /**
   *
   */
  send() {
    if (this.hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    });
  }
  /**
   *
   * @param {*} status
   * @param {*} callback
   */
  receive(status, callback) {
    if (this.hasReceived(status)) {
      callback(this.receivedResp.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  /**
   * @private
   */
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  /**
   * @private
   */
  matchReceive({ status, response, _ref }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel.off(this.refEvent);
  }
  /**
   * @private
   */
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  /**
   * @private
   */
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, (payload) => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = payload;
      this.matchReceive(payload);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
  /**
   * @private
   */
  trigger(status, response) {
    this.channel.trigger(this.refEvent, { status, response });
  }
};
var Timer = class {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = null;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var Channel = class {
  constructor(topic, params, socket) {
    this.state = CHANNEL_STATES.closed;
    this.topic = topic;
    this.params = closure(params || {});
    this.socket = socket;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Timer(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      })
    );
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", () => {
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger())
        this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
      leavePush.send();
      this.state = CHANNEL_STATES.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  /**
   * Join the channel
   * @param {integer} timeout
   * @returns {Push}
   */
  join(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    } else {
      this.timeout = timeout;
      this.joinedOnce = true;
      this.rejoin();
      return this.joinPush;
    }
  }
  /**
   * Hook into channel close
   * @param {Function} callback
   */
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, callback);
  }
  /**
   * Hook into channel errors
   * @param {Function} callback
   */
  onError(callback) {
    return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {Function} callback
   * @returns {integer} ref
   */
  on(event, callback) {
    let ref = this.bindingRef++;
    this.bindings.push({ event, ref, callback });
    return ref;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {integer} ref
   */
  off(event, ref) {
    this.bindings = this.bindings.filter((bind) => {
      return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
    });
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(event, payload, timeout = this.timeout) {
    payload = payload || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let pushEvent = new Push(this, event, function() {
      return payload;
    }, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {integer} timeout
   * @returns {Push}
   */
  leave(timeout = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = CHANNEL_STATES.leaving;
    let onClose = () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave");
    };
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @param {string} event
   * @param {Object} payload
   * @param {integer} ref
   * @returns {Object}
   */
  onMessage(_event, payload, _ref) {
    return payload;
  }
  /**
   * @private
   */
  isMember(topic, event, payload, joinRef) {
    if (this.topic !== topic) {
      return false;
    }
    if (joinRef && joinRef !== this.joinRef()) {
      if (this.socket.hasLogger())
        this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
      return false;
    } else {
      return true;
    }
  }
  /**
   * @private
   */
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  /**
   * @private
   */
  trigger(event, payload, ref, joinRef) {
    let handledPayload = this.onMessage(event, payload, ref, joinRef);
    if (payload && !handledPayload) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let eventBindings = this.bindings.filter((bind) => bind.event === event);
    for (let i = 0; i < eventBindings.length; i++) {
      let bind = eventBindings[i];
      bind.callback(handledPayload, ref, joinRef || this.joinRef());
    }
  }
  /**
   * @private
   */
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  /**
   * @private
   */
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  /**
   * @private
   */
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  /**
   * @private
   */
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  /**
   * @private
   */
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  /**
   * @private
   */
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
};
var Ajax = class {
  static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
    if (global.XDomainRequest) {
      let req = new global.XDomainRequest();
      return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
    } else {
      let req = new global.XMLHttpRequest();
      return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
    }
  }
  static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
    req.timeout = timeout;
    req.open(method, endPoint);
    req.onload = () => {
      let response = this.parseJSON(req.responseText);
      callback && callback(response);
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.onprogress = () => {
    };
    req.send(body);
    return req;
  }
  static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
    req.open(method, endPoint, true);
    req.timeout = timeout;
    req.setRequestHeader("Content-Type", accept);
    req.onerror = () => callback && callback(null);
    req.onreadystatechange = () => {
      if (req.readyState === XHR_STATES.complete && callback) {
        let response = this.parseJSON(req.responseText);
        callback(response);
      }
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.send(body);
    return req;
  }
  static parseJSON(resp) {
    if (!resp || resp === "") {
      return null;
    }
    try {
      return JSON.parse(resp);
    } catch (e) {
      console && console.log("failed to parse JSON response", resp);
      return null;
    }
  }
  static serialize(obj, parentKey) {
    let queryStr = [];
    for (var key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }
      let paramKey = parentKey ? `${parentKey}[${key}]` : key;
      let paramVal = obj[key];
      if (typeof paramVal === "object") {
        queryStr.push(this.serialize(paramVal, paramKey));
      } else {
        queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
      }
    }
    return queryStr.join("&");
  }
  static appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    let prefix = url.match(/\?/) ? "&" : "?";
    return `${url}${prefix}${this.serialize(params)}`;
  }
};
var arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var LongPoll = class {
  constructor(endPoint) {
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = /* @__PURE__ */ new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function() {
    };
    this.onerror = function() {
    };
    this.onmessage = function() {
    };
    this.onclose = function() {
    };
    this.pollEndpoint = this.normalizeEndpoint(endPoint);
    this.readyState = SOCKET_STATES.connecting;
    this.poll();
  }
  normalizeEndpoint(endPoint) {
    return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
  }
  endpointURL() {
    return Ajax.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(code, reason, wasClean) {
    this.close(code, reason, wasClean);
    this.readyState = SOCKET_STATES.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry(1005, "timeout", false);
  }
  isActive() {
    return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
  }
  poll() {
    this.ajax("GET", "application/json", null, () => this.ontimeout(), (resp) => {
      if (resp) {
        var { status, token, messages } = resp;
        this.token = token;
      } else {
        status = 0;
      }
      switch (status) {
        case 200:
          messages.forEach((msg) => {
            setTimeout(() => this.onmessage({ data: msg }), 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = SOCKET_STATES.open;
          this.onopen({});
          this.poll();
          break;
        case 403:
          this.onerror(403);
          this.close(1008, "forbidden", false);
          break;
        case 0:
        case 500:
          this.onerror(500);
          this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${status}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(body) {
    if (typeof body !== "string") {
      body = arrayBufferToBase64(body);
    }
    if (this.currentBatch) {
      this.currentBatch.push(body);
    } else if (this.awaitingBatchAck) {
      this.batchBuffer.push(body);
    } else {
      this.currentBatch = [body];
      this.currentBatchTimer = setTimeout(() => {
        this.batchSend(this.currentBatch);
        this.currentBatch = null;
      }, 0);
    }
  }
  batchSend(messages) {
    this.awaitingBatchAck = true;
    this.ajax("POST", "application/x-ndjson", messages.join("\n"), () => this.onerror("timeout"), (resp) => {
      this.awaitingBatchAck = false;
      if (!resp || resp.status !== 200) {
        this.onerror(resp && resp.status);
        this.closeAndRetry(1011, "internal server error", false);
      } else if (this.batchBuffer.length > 0) {
        this.batchSend(this.batchBuffer);
        this.batchBuffer = [];
      }
    });
  }
  close(code, reason, wasClean) {
    for (let req of this.reqs) {
      req.abort();
    }
    this.readyState = SOCKET_STATES.closed;
    let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
    this.batchBuffer = [];
    clearTimeout(this.currentBatchTimer);
    this.currentBatchTimer = null;
    if (typeof CloseEvent !== "undefined") {
      this.onclose(new CloseEvent("close", opts));
    } else {
      this.onclose(opts);
    }
  }
  ajax(method, contentType, body, onCallerTimeout, callback) {
    let req;
    let ontimeout = () => {
      this.reqs.delete(req);
      onCallerTimeout();
    };
    req = Ajax.request(method, this.endpointURL(), contentType, body, this.timeout, ontimeout, (resp) => {
      this.reqs.delete(req);
      if (this.isActive()) {
        callback(resp);
      }
    });
    this.reqs.add(req);
  }
};
var serializer_default = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  encode(msg, callback) {
    if (msg.payload.constructor === ArrayBuffer) {
      return callback(this.binaryEncode(msg));
    } else {
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  },
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this.binaryDecode(rawPayload));
    } else {
      let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
      return callback({ join_ref, ref, topic, event, payload });
    }
  },
  // private
  binaryEncode(message) {
    let { join_ref, ref, event, topic, payload } = message;
    let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
    let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
    let view = new DataView(header);
    let offset = 0;
    view.setUint8(offset++, this.KINDS.push);
    view.setUint8(offset++, join_ref.length);
    view.setUint8(offset++, ref.length);
    view.setUint8(offset++, topic.length);
    view.setUint8(offset++, event.length);
    Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    var combined = new Uint8Array(header.byteLength + payload.byteLength);
    combined.set(new Uint8Array(header), 0);
    combined.set(new Uint8Array(payload), header.byteLength);
    return combined.buffer;
  },
  binaryDecode(buffer) {
    let view = new DataView(buffer);
    let kind = view.getUint8(0);
    let decoder = new TextDecoder();
    switch (kind) {
      case this.KINDS.push:
        return this.decodePush(buffer, view, decoder);
      case this.KINDS.reply:
        return this.decodeReply(buffer, view, decoder);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(buffer, view, decoder);
    }
  },
  decodePush(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let topicSize = view.getUint8(2);
    let eventSize = view.getUint8(3);
    let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: joinRef, ref: null, topic, event, payload: data };
  },
  decodeReply(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let refSize = view.getUint8(2);
    let topicSize = view.getUint8(3);
    let eventSize = view.getUint8(4);
    let offset = this.HEADER_LENGTH + this.META_LENGTH;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let ref = decoder.decode(buffer.slice(offset, offset + refSize));
    offset = offset + refSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    let payload = { status: event, response: data };
    return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
  },
  decodeBroadcast(buffer, view, decoder) {
    let topicSize = view.getUint8(1);
    let eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return { join_ref: null, ref: null, topic, event, payload: data };
  }
};
var Socket = class {
  constructor(endPoint, opts = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.timeout = opts.timeout || DEFAULT_TIMEOUT;
    this.transport = opts.transport || global.WebSocket || LongPoll;
    this.establishedConnections = 0;
    this.defaultEncoder = serializer_default.encode.bind(serializer_default);
    this.defaultDecoder = serializer_default.decode.bind(serializer_default);
    this.closeWasClean = false;
    this.binaryType = opts.binaryType || "arraybuffer";
    this.connectClock = 1;
    if (this.transport !== LongPoll) {
      this.encode = opts.encode || this.defaultEncoder;
      this.decode = opts.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let awaitingConnectionOnPageShow = null;
    if (phxWindow && phxWindow.addEventListener) {
      phxWindow.addEventListener("pagehide", (_e) => {
        if (this.conn) {
          this.disconnect();
          awaitingConnectionOnPageShow = this.connectClock;
        }
      });
      phxWindow.addEventListener("pageshow", (_e) => {
        if (awaitingConnectionOnPageShow === this.connectClock) {
          awaitingConnectionOnPageShow = null;
          this.connect();
        }
      });
    }
    this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
    this.rejoinAfterMs = (tries) => {
      if (opts.rejoinAfterMs) {
        return opts.rejoinAfterMs(tries);
      } else {
        return [1e3, 2e3, 5e3][tries - 1] || 1e4;
      }
    };
    this.reconnectAfterMs = (tries) => {
      if (opts.reconnectAfterMs) {
        return opts.reconnectAfterMs(tries);
      } else {
        return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
      }
    };
    this.logger = opts.logger || null;
    this.longpollerTimeout = opts.longpollerTimeout || 2e4;
    this.params = closure(opts.params || {});
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.vsn = opts.vsn || DEFAULT_VSN;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Timer(() => {
      this.teardown(() => this.connect());
    }, this.reconnectAfterMs);
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return LongPoll;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {Function} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(newTransport) {
    this.connectClock++;
    this.closeWasClean = true;
    this.reconnectTimer.reset();
    this.sendBuffer = [];
    if (this.conn) {
      this.conn.close();
      this.conn = null;
    }
    this.transport = newTransport;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {string}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let uri = Ajax.appendParams(
      Ajax.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    if (uri.charAt(0) !== "/") {
      return uri;
    }
    if (uri.charAt(1) === "/") {
      return `${this.protocol()}:${uri}`;
    }
    return `${this.protocol()}://${location.host}${uri}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {Function} callback - Optional callback which is called after socket is disconnected.
   * @param {integer} code - A status code for disconnection (Optional).
   * @param {string} reason - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(callback, code, reason) {
    this.connectClock++;
    this.closeWasClean = true;
    this.reconnectTimer.reset();
    this.teardown(callback, code, reason);
  }
  /**
   *
   * @param {Object} params - The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(params) {
    if (params) {
      console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      this.params = closure(params);
    }
    if (this.conn) {
      return;
    }
    this.connectClock++;
    this.closeWasClean = false;
    this.conn = new this.transport(this.endPointURL());
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = (error) => this.onConnError(error);
    this.conn.onmessage = (event) => this.onConnMessage(event);
    this.conn.onclose = (event) => this.onConnClose(event);
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(kind, msg, data) {
    this.logger(kind, msg, data);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {Function} callback
   */
  onOpen(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.open.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection close events
   * @param {Function} callback
   */
  onClose(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.close.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {Function} callback
   */
  onError(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.error.push([ref, callback]);
    return ref;
  }
  /**
   * Registers callbacks for connection message events
   * @param {Function} callback
   */
  onMessage(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.message.push([ref, callback]);
    return ref;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {Function} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(callback) {
    if (!this.isConnected()) {
      return false;
    }
    let ref = this.makeRef();
    let startTime = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
    let onMsgRef = this.onMessage((msg) => {
      if (msg.ref === ref) {
        this.off([onMsgRef]);
        callback(Date.now() - startTime);
      }
    });
    return true;
  }
  /**
   * @private
   */
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer);
    clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    if (this.hasLogger())
      this.log("transport", `connected to ${this.endPointURL()}`);
    this.closeWasClean = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    this.resetHeartbeat();
    this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      this.triggerChanError();
      this.closeWasClean = false;
      this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (this.conn && this.conn.skipHeartbeat) {
      return;
    }
    this.pendingHeartbeatRef = null;
    this.clearHeartbeats();
    this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  teardown(callback, code, reason) {
    if (!this.conn) {
      return callback && callback();
    }
    this.waitForBufferDone(() => {
      if (this.conn) {
        if (code) {
          this.conn.close(code, reason || "");
        } else {
          this.conn.close();
        }
      }
      this.waitForSocketClosed(() => {
        if (this.conn) {
          this.conn.onopen = function() {
          };
          this.conn.onerror = function() {
          };
          this.conn.onmessage = function() {
          };
          this.conn.onclose = function() {
          };
          this.conn = null;
        }
        callback && callback();
      });
    });
  }
  waitForBufferDone(callback, tries = 1) {
    if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(callback, tries + 1);
    }, 150 * tries);
  }
  waitForSocketClosed(callback, tries = 1) {
    if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(callback, tries + 1);
    }, 150 * tries);
  }
  onConnClose(event) {
    let closeCode = event && event.code;
    if (this.hasLogger())
      this.log("transport", "close", event);
    this.triggerChanError();
    this.clearHeartbeats();
    if (!this.closeWasClean && closeCode !== 1e3) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
  }
  /**
   * @private
   */
  onConnError(error) {
    if (this.hasLogger())
      this.log("transport", error);
    let transportBefore = this.transport;
    let establishedBefore = this.establishedConnections;
    this.stateChangeCallbacks.error.forEach(([, callback]) => {
      callback(error, transportBefore, establishedBefore);
    });
    if (transportBefore === this.transport || establishedBefore > 0) {
      this.triggerChanError();
    }
  }
  /**
   * @private
   */
  triggerChanError() {
    this.channels.forEach((channel) => {
      if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
        channel.trigger(CHANNEL_EVENTS.error);
      }
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return "connecting";
      case SOCKET_STATES.open:
        return "open";
      case SOCKET_STATES.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   * @private
   *
   * @param {Channel}
   */
  remove(channel) {
    this.off(channel.stateChangeRefs);
    this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {refs} - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(refs) {
    for (let key in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
        return refs.indexOf(ref) === -1;
      });
    }
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Object} chanParams - Parameters for the channel
   * @returns {Channel}
   */
  channel(topic, chanParams = {}) {
    let chan = new Channel(topic, chanParams, this);
    this.channels.push(chan);
    return chan;
  }
  /**
   * @param {Object} data
   */
  push(data) {
    if (this.hasLogger()) {
      let { topic, event, payload, ref, join_ref } = data;
      this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(data, (result) => this.conn.send(result));
    } else {
      this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
    }
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (this.pendingHeartbeatRef && !this.isConnected()) {
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event, payload, ref, join_ref } = msg;
      if (ref && ref === this.pendingHeartbeatRef) {
        this.clearHeartbeats();
        this.pendingHeartbeatRef = null;
        this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
      }
      if (this.hasLogger())
        this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
      for (let i = 0; i < this.channels.length; i++) {
        const channel = this.channels[i];
        if (!channel.isMember(topic, event, payload, join_ref)) {
          continue;
        }
        channel.trigger(event, payload, ref, join_ref);
      }
      for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
        let [, callback] = this.stateChangeCallbacks.message[i];
        callback(msg);
      }
    });
  }
  leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
    if (dupChannel) {
      if (this.hasLogger())
        this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.leave();
    }
  }
};

// ../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js
var CONSECUTIVE_RELOADS = "consecutive-reloads";
var MAX_RELOADS = 10;
var RELOAD_JITTER_MIN = 5e3;
var RELOAD_JITTER_MAX = 1e4;
var FAILSAFE_JITTER = 3e4;
var PHX_EVENT_CLASSES = [
  "phx-click-loading",
  "phx-change-loading",
  "phx-submit-loading",
  "phx-keydown-loading",
  "phx-keyup-loading",
  "phx-blur-loading",
  "phx-focus-loading"
];
var PHX_COMPONENT = "data-phx-component";
var PHX_LIVE_LINK = "data-phx-link";
var PHX_TRACK_STATIC = "track-static";
var PHX_LINK_STATE = "data-phx-link-state";
var PHX_REF = "data-phx-ref";
var PHX_REF_SRC = "data-phx-ref-src";
var PHX_TRACK_UPLOADS = "track-uploads";
var PHX_UPLOAD_REF = "data-phx-upload-ref";
var PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
var PHX_DONE_REFS = "data-phx-done-refs";
var PHX_DROP_TARGET = "drop-target";
var PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
var PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
var PHX_SKIP = "data-phx-skip";
var PHX_PRUNE = "data-phx-prune";
var PHX_PAGE_LOADING = "page-loading";
var PHX_CONNECTED_CLASS = "phx-connected";
var PHX_LOADING_CLASS = "phx-loading";
var PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
var PHX_ERROR_CLASS = "phx-error";
var PHX_CLIENT_ERROR_CLASS = "phx-client-error";
var PHX_SERVER_ERROR_CLASS = "phx-server-error";
var PHX_PARENT_ID = "data-phx-parent-id";
var PHX_MAIN = "data-phx-main";
var PHX_ROOT_ID = "data-phx-root-id";
var PHX_VIEWPORT_TOP = "viewport-top";
var PHX_VIEWPORT_BOTTOM = "viewport-bottom";
var PHX_TRIGGER_ACTION = "trigger-action";
var PHX_FEEDBACK_FOR = "feedback-for";
var PHX_HAS_FOCUSED = "phx-has-focused";
var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"];
var CHECKABLE_INPUTS = ["checkbox", "radio"];
var PHX_HAS_SUBMITTED = "phx-has-submitted";
var PHX_SESSION = "data-phx-session";
var PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
var PHX_STICKY = "data-phx-sticky";
var PHX_STATIC = "data-phx-static";
var PHX_READONLY = "data-phx-readonly";
var PHX_DISABLED = "data-phx-disabled";
var PHX_DISABLE_WITH = "disable-with";
var PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
var PHX_HOOK = "hook";
var PHX_DEBOUNCE = "debounce";
var PHX_THROTTLE = "throttle";
var PHX_UPDATE = "update";
var PHX_STREAM = "stream";
var PHX_STREAM_REF = "data-phx-stream";
var PHX_KEY = "key";
var PHX_PRIVATE = "phxPrivate";
var PHX_AUTO_RECOVER = "auto-recover";
var PHX_LV_DEBUG = "phx:live-socket:debug";
var PHX_LV_PROFILE = "phx:live-socket:profiling";
var PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
var PHX_PROGRESS = "progress";
var PHX_MOUNTED = "mounted";
var LOADER_TIMEOUT = 1;
var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
var BINDING_PREFIX = "phx-";
var PUSH_TIMEOUT = 3e4;
var DEBOUNCE_TRIGGER = "debounce-trigger";
var THROTTLED = "throttled";
var DEBOUNCE_PREV_KEY = "debounce-prev-key";
var DEFAULTS = {
  debounce: 300,
  throttle: 300
};
var DYNAMICS = "d";
var STATIC = "s";
var COMPONENTS = "c";
var EVENTS = "e";
var REPLY = "r";
var TITLE = "t";
var TEMPLATES = "p";
var STREAM = "stream";
var EntryUploader = class {
  constructor(entry, chunkSize, liveSocket2) {
    this.liveSocket = liveSocket2;
    this.entry = entry;
    this.offset = 0;
    this.chunkSize = chunkSize;
    this.chunkTimer = null;
    this.errored = false;
    this.uploadChannel = liveSocket2.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
  }
  error(reason) {
    if (this.errored) {
      return;
    }
    this.errored = true;
    clearTimeout(this.chunkTimer);
    this.entry.error(reason);
  }
  upload() {
    this.uploadChannel.onError((reason) => this.error(reason));
    this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
  }
  isDone() {
    return this.offset >= this.entry.file.size;
  }
  readNextChunk() {
    let reader = new window.FileReader();
    let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
    reader.onload = (e) => {
      if (e.target.error === null) {
        this.offset += e.target.result.byteLength;
        this.pushChunk(e.target.result);
      } else {
        return logError("Read error: " + e.target.error);
      }
    };
    reader.readAsArrayBuffer(blob);
  }
  pushChunk(chunk) {
    if (!this.uploadChannel.isJoined()) {
      return;
    }
    this.uploadChannel.push("chunk", chunk).receive("ok", () => {
      this.entry.progress(this.offset / this.entry.file.size * 100);
      if (!this.isDone()) {
        this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
      }
    }).receive("error", ({ reason }) => this.error(reason));
  }
};
var logError = (msg, obj) => console.error && console.error(msg, obj);
var isCid = (cid) => {
  let type = typeof cid;
  return type === "number" || type === "string" && /^(0|[1-9]\d*)$/.test(cid);
};
function detectDuplicateIds() {
  let ids = /* @__PURE__ */ new Set();
  let elems = document.querySelectorAll("*[id]");
  for (let i = 0, len = elems.length; i < len; i++) {
    if (ids.has(elems[i].id)) {
      console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
    } else {
      ids.add(elems[i].id);
    }
  }
}
var debug = (view, kind, msg, obj) => {
  if (view.liveSocket.isDebugEnabled()) {
    console.log(`${view.id} ${kind}: ${msg} - `, obj);
  }
};
var closure2 = (val) => typeof val === "function" ? val : function() {
  return val;
};
var clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
var closestPhxBinding = (el, binding, borderEl) => {
  do {
    if (el.matches(`[${binding}]`) && !el.disabled) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
  return null;
};
var isObject = (obj) => {
  return obj !== null && typeof obj === "object" && !(obj instanceof Array);
};
var isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
var isEmpty = (obj) => {
  for (let x in obj) {
    return false;
  }
  return true;
};
var maybe = (el, callback) => el && callback(el);
var channelUploader = function(entries, onError, resp, liveSocket2) {
  entries.forEach((entry) => {
    let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket2);
    entryUploader.upload();
  });
};
var Browser = {
  canPushState() {
    return typeof history.pushState !== "undefined";
  },
  dropLocal(localStorage, namespace, subkey) {
    return localStorage.removeItem(this.localKey(namespace, subkey));
  },
  updateLocal(localStorage, namespace, subkey, initial, func) {
    let current = this.getLocal(localStorage, namespace, subkey);
    let key = this.localKey(namespace, subkey);
    let newVal = current === null ? initial : func(current);
    localStorage.setItem(key, JSON.stringify(newVal));
    return newVal;
  },
  getLocal(localStorage, namespace, subkey) {
    return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
  },
  updateCurrentState(callback) {
    if (!this.canPushState()) {
      return;
    }
    history.replaceState(callback(history.state || {}), "", window.location.href);
  },
  pushState(kind, meta, to) {
    if (this.canPushState()) {
      if (to !== window.location.href) {
        if (meta.type == "redirect" && meta.scroll) {
          let currentState = history.state || {};
          currentState.scroll = meta.scroll;
          history.replaceState(currentState, "", window.location.href);
        }
        delete meta.scroll;
        history[kind + "State"](meta, "", to || null);
        let hashEl = this.getHashTargetEl(window.location.hash);
        if (hashEl) {
          hashEl.scrollIntoView();
        } else if (meta.type === "redirect") {
          window.scroll(0, 0);
        }
      }
    } else {
      this.redirect(to);
    }
  },
  setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  },
  getCookie(name) {
    return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
  },
  redirect(toURL, flash) {
    if (flash) {
      Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
    }
    window.location = toURL;
  },
  localKey(namespace, subkey) {
    return `${namespace}-${subkey}`;
  },
  getHashTargetEl(maybeHash) {
    let hash = maybeHash.toString().substring(1);
    if (hash === "") {
      return;
    }
    return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
  }
};
var browser_default = Browser;
var DOM = {
  byId(id) {
    return document.getElementById(id) || logError(`no id found for ${id}`);
  },
  removeClass(el, className) {
    el.classList.remove(className);
    if (el.classList.length === 0) {
      el.removeAttribute("class");
    }
  },
  all(node, query, callback) {
    if (!node) {
      return [];
    }
    let array = Array.from(node.querySelectorAll(query));
    return callback ? array.forEach(callback) : array;
  },
  childNodeLength(html) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return template.content.childElementCount;
  },
  isUploadInput(el) {
    return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
  },
  isAutoUpload(inputEl) {
    return inputEl.hasAttribute("data-phx-auto-upload");
  },
  findUploadInputs(node) {
    return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
  },
  findComponentNodeList(node, cid) {
    return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
  },
  isPhxDestroyed(node) {
    return node.id && DOM.private(node, "destroyed") ? true : false;
  },
  wantsNewTab(e) {
    let wantsNewTab = e.ctrlKey || e.shiftKey || e.metaKey || e.button && e.button === 1;
    let isDownload = e.target instanceof HTMLAnchorElement && e.target.hasAttribute("download");
    let isTargetBlank = e.target.hasAttribute("target") && e.target.getAttribute("target").toLowerCase() === "_blank";
    return wantsNewTab || isTargetBlank || isDownload;
  },
  isUnloadableFormSubmit(e) {
    let isDialogSubmit = e.target && e.target.getAttribute("method") === "dialog" || e.submitter && e.submitter.getAttribute("formmethod") === "dialog";
    if (isDialogSubmit) {
      return false;
    } else {
      return !e.defaultPrevented && !this.wantsNewTab(e);
    }
  },
  isNewPageClick(e, currentLocation) {
    let href = e.target instanceof HTMLAnchorElement ? e.target.getAttribute("href") : null;
    let url;
    if (e.defaultPrevented || href === null || this.wantsNewTab(e)) {
      return false;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      return false;
    }
    if (e.target.isContentEditable) {
      return false;
    }
    try {
      url = new URL(href);
    } catch (e2) {
      try {
        url = new URL(href, currentLocation);
      } catch (e3) {
        return true;
      }
    }
    if (url.host === currentLocation.host && url.protocol === currentLocation.protocol) {
      if (url.pathname === currentLocation.pathname && url.search === currentLocation.search) {
        return url.hash === "" && !url.href.endsWith("#");
      }
    }
    return url.protocol.startsWith("http");
  },
  markPhxChildDestroyed(el) {
    if (this.isPhxChild(el)) {
      el.setAttribute(PHX_SESSION, "");
    }
    this.putPrivate(el, "destroyed", true);
  },
  findPhxChildrenInFragment(html, parentId) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return this.findPhxChildren(template.content, parentId);
  },
  isIgnored(el, phxUpdate) {
    return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
  },
  isPhxUpdate(el, phxUpdate, updateTypes) {
    return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
  },
  findPhxSticky(el) {
    return this.all(el, `[${PHX_STICKY}]`);
  },
  findPhxChildren(el, parentId) {
    return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
  },
  findParentCIDs(node, cids) {
    let initial = new Set(cids);
    let parentCids = cids.reduce((acc, cid) => {
      let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
      this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
      return acc;
    }, initial);
    return parentCids.size === 0 ? new Set(cids) : parentCids;
  },
  filterWithinSameLiveView(nodes, parent) {
    if (parent.querySelector(PHX_VIEW_SELECTOR)) {
      return nodes.filter((el) => this.withinSameLiveView(el, parent));
    } else {
      return nodes;
    }
  },
  withinSameLiveView(node, parent) {
    while (node = node.parentNode) {
      if (node.isSameNode(parent)) {
        return true;
      }
      if (node.getAttribute(PHX_SESSION) !== null) {
        return false;
      }
    }
  },
  private(el, key) {
    return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
  },
  deletePrivate(el, key) {
    el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
  },
  putPrivate(el, key, value) {
    if (!el[PHX_PRIVATE]) {
      el[PHX_PRIVATE] = {};
    }
    el[PHX_PRIVATE][key] = value;
  },
  updatePrivate(el, key, defaultVal, updateFunc) {
    let existing = this.private(el, key);
    if (existing === void 0) {
      this.putPrivate(el, key, updateFunc(defaultVal));
    } else {
      this.putPrivate(el, key, updateFunc(existing));
    }
  },
  copyPrivates(target, source) {
    if (source[PHX_PRIVATE]) {
      target[PHX_PRIVATE] = source[PHX_PRIVATE];
    }
  },
  putTitle(str) {
    let titleEl = document.querySelector("title");
    if (titleEl) {
      let { prefix, suffix } = titleEl.dataset;
      document.title = `${prefix || ""}${str}${suffix || ""}`;
    } else {
      document.title = str;
    }
  },
  debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, callback) {
    let debounce = el.getAttribute(phxDebounce);
    let throttle = el.getAttribute(phxThrottle);
    if (debounce === "") {
      debounce = defaultDebounce;
    }
    if (throttle === "") {
      throttle = defaultThrottle;
    }
    let value = debounce || throttle;
    switch (value) {
      case null:
        return callback();
      case "blur":
        if (this.once(el, "debounce-blur")) {
          el.addEventListener("blur", () => callback());
        }
        return;
      default:
        let timeout = parseInt(value);
        let trigger = () => throttle ? this.deletePrivate(el, THROTTLED) : callback();
        let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
        if (isNaN(timeout)) {
          return logError(`invalid throttle/debounce value: ${value}`);
        }
        if (throttle) {
          let newKeyDown = false;
          if (event.type === "keydown") {
            let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
            this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
            newKeyDown = prevKey !== event.key;
          }
          if (!newKeyDown && this.private(el, THROTTLED)) {
            return false;
          } else {
            callback();
            this.putPrivate(el, THROTTLED, true);
            setTimeout(() => {
              if (asyncFilter()) {
                this.triggerCycle(el, DEBOUNCE_TRIGGER);
              }
            }, timeout);
          }
        } else {
          setTimeout(() => {
            if (asyncFilter()) {
              this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle);
            }
          }, timeout);
        }
        let form = el.form;
        if (form && this.once(form, "bind-debounce")) {
          form.addEventListener("submit", () => {
            Array.from(new FormData(form).entries(), ([name]) => {
              let input = form.querySelector(`[name="${name}"]`);
              this.incCycle(input, DEBOUNCE_TRIGGER);
              this.deletePrivate(input, THROTTLED);
            });
          });
        }
        if (this.once(el, "bind-debounce")) {
          el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
        }
    }
  },
  triggerCycle(el, key, currentCycle) {
    let [cycle, trigger] = this.private(el, key);
    if (!currentCycle) {
      currentCycle = cycle;
    }
    if (currentCycle === cycle) {
      this.incCycle(el, key);
      trigger();
    }
  },
  once(el, key) {
    if (this.private(el, key) === true) {
      return false;
    }
    this.putPrivate(el, key, true);
    return true;
  },
  incCycle(el, key, trigger = function() {
  }) {
    let [currentCycle] = this.private(el, key) || [0, trigger];
    currentCycle++;
    this.putPrivate(el, key, [currentCycle, trigger]);
    return currentCycle;
  },
  maybeAddPrivateHooks(el, phxViewportTop, phxViewportBottom) {
    if (el.hasAttribute && (el.hasAttribute(phxViewportTop) || el.hasAttribute(phxViewportBottom))) {
      el.setAttribute("data-phx-hook", "Phoenix.InfiniteScroll");
    }
  },
  maybeHideFeedback(container, input, phxFeedbackFor) {
    if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input, PHX_HAS_SUBMITTED))) {
      let feedbacks = [input.name];
      if (input.name.endsWith("[]")) {
        feedbacks.push(input.name.slice(0, -2));
      }
      let selector = feedbacks.map((f) => `[${phxFeedbackFor}="${f}"]`).join(", ");
      DOM.all(container, selector, (el) => el.classList.add(PHX_NO_FEEDBACK_CLASS));
    }
  },
  resetForm(form, phxFeedbackFor) {
    Array.from(form.elements).forEach((input) => {
      let query = `[${phxFeedbackFor}="${input.id}"],
                   [${phxFeedbackFor}="${input.name}"],
                   [${phxFeedbackFor}="${input.name.replace(/\[\]$/, "")}"]`;
      this.deletePrivate(input, PHX_HAS_FOCUSED);
      this.deletePrivate(input, PHX_HAS_SUBMITTED);
      this.all(document, query, (feedbackEl) => {
        feedbackEl.classList.add(PHX_NO_FEEDBACK_CLASS);
      });
    });
  },
  showError(inputEl, phxFeedbackFor) {
    if (inputEl.id || inputEl.name) {
      this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
        this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
      });
    }
  },
  isPhxChild(node) {
    return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
  },
  isPhxSticky(node) {
    return node.getAttribute && node.getAttribute(PHX_STICKY) !== null;
  },
  firstPhxChild(el) {
    return this.isPhxChild(el) ? el : this.all(el, `[${PHX_PARENT_ID}]`)[0];
  },
  dispatchEvent(target, name, opts = {}) {
    let bubbles = opts.bubbles === void 0 ? true : !!opts.bubbles;
    let eventOpts = { bubbles, cancelable: true, detail: opts.detail || {} };
    let event = name === "click" ? new MouseEvent("click", eventOpts) : new CustomEvent(name, eventOpts);
    target.dispatchEvent(event);
  },
  cloneNode(node, html) {
    if (typeof html === "undefined") {
      return node.cloneNode(true);
    } else {
      let cloned = node.cloneNode(false);
      cloned.innerHTML = html;
      return cloned;
    }
  },
  mergeAttrs(target, source, opts = {}) {
    let exclude = opts.exclude || [];
    let isIgnored = opts.isIgnored;
    let sourceAttrs = source.attributes;
    for (let i = sourceAttrs.length - 1; i >= 0; i--) {
      let name = sourceAttrs[i].name;
      if (exclude.indexOf(name) < 0) {
        target.setAttribute(name, source.getAttribute(name));
      }
    }
    let targetAttrs = target.attributes;
    for (let i = targetAttrs.length - 1; i >= 0; i--) {
      let name = targetAttrs[i].name;
      if (isIgnored) {
        if (name.startsWith("data-") && !source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      } else {
        if (!source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      }
    }
  },
  mergeFocusedInput(target, source) {
    if (!(target instanceof HTMLSelectElement)) {
      DOM.mergeAttrs(target, source, { exclude: ["value"] });
    }
    if (source.readOnly) {
      target.setAttribute("readonly", true);
    } else {
      target.removeAttribute("readonly");
    }
  },
  hasSelectionRange(el) {
    return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
  },
  restoreFocus(focused, selectionStart, selectionEnd) {
    if (!DOM.isTextualInput(focused)) {
      return;
    }
    let wasFocused = focused.matches(":focus");
    if (focused.readOnly) {
      focused.blur();
    }
    if (!wasFocused) {
      focused.focus();
    }
    if (this.hasSelectionRange(focused)) {
      focused.setSelectionRange(selectionStart, selectionEnd);
    }
  },
  isFormInput(el) {
    return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
  },
  syncAttrsToProps(el) {
    if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
      el.checked = el.getAttribute("checked") !== null;
    }
  },
  isTextualInput(el) {
    return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
  },
  isNowTriggerFormExternal(el, phxTriggerExternal) {
    return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
  },
  syncPendingRef(fromEl, toEl, disableWith) {
    let ref = fromEl.getAttribute(PHX_REF);
    if (ref === null) {
      return true;
    }
    let refSrc = fromEl.getAttribute(PHX_REF_SRC);
    if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
      if (DOM.isUploadInput(fromEl)) {
        DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
      }
      DOM.putPrivate(fromEl, PHX_REF, toEl);
      return false;
    } else {
      PHX_EVENT_CLASSES.forEach((className) => {
        fromEl.classList.contains(className) && toEl.classList.add(className);
      });
      toEl.setAttribute(PHX_REF, ref);
      toEl.setAttribute(PHX_REF_SRC, refSrc);
      return true;
    }
  },
  cleanChildNodes(container, phxUpdate) {
    if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
      let toRemove = [];
      container.childNodes.forEach((childNode) => {
        if (!childNode.id) {
          let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
          if (!isEmptyTextNode) {
            logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
          }
          toRemove.push(childNode);
        }
      });
      toRemove.forEach((childNode) => childNode.remove());
    }
  },
  replaceRootContainer(container, tagName, attrs) {
    let retainedAttrs = /* @__PURE__ */ new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
    if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
      Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
      Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
      return container;
    } else {
      let newContainer = document.createElement(tagName);
      Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
      retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
      newContainer.innerHTML = container.innerHTML;
      container.replaceWith(newContainer);
      return newContainer;
    }
  },
  getSticky(el, name, defaultVal) {
    let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
    if (op) {
      let [_name, _op, stashedResult] = op;
      return stashedResult;
    } else {
      return typeof defaultVal === "function" ? defaultVal() : defaultVal;
    }
  },
  deleteSticky(el, name) {
    this.updatePrivate(el, "sticky", [], (ops) => {
      return ops.filter(([existingName, _]) => existingName !== name);
    });
  },
  putSticky(el, name, op) {
    let stashedResult = op(el);
    this.updatePrivate(el, "sticky", [], (ops) => {
      let existingIndex = ops.findIndex(([existingName]) => name === existingName);
      if (existingIndex >= 0) {
        ops[existingIndex] = [name, op, stashedResult];
      } else {
        ops.push([name, op, stashedResult]);
      }
      return ops;
    });
  },
  applyStickyOperations(el) {
    let ops = DOM.private(el, "sticky");
    if (!ops) {
      return;
    }
    ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
  }
};
var dom_default = DOM;
var UploadEntry = class {
  static isActive(fileEl, file) {
    let isNew = file._phxRef === void 0;
    let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return file.size > 0 && (isNew || isActive);
  }
  static isPreflighted(fileEl, file) {
    let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
    let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return isPreflighted && this.isActive(fileEl, file);
  }
  constructor(fileEl, file, view) {
    this.ref = LiveUploader.genFileRef(file);
    this.fileEl = fileEl;
    this.file = file;
    this.view = view;
    this.meta = null;
    this._isCancelled = false;
    this._isDone = false;
    this._progress = 0;
    this._lastProgressSent = -1;
    this._onDone = function() {
    };
    this._onElUpdated = this.onElUpdated.bind(this);
    this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
  }
  metadata() {
    return this.meta;
  }
  progress(progress) {
    this._progress = Math.floor(progress);
    if (this._progress > this._lastProgressSent) {
      if (this._progress >= 100) {
        this._progress = 100;
        this._lastProgressSent = 100;
        this._isDone = true;
        this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
          LiveUploader.untrackFile(this.fileEl, this.file);
          this._onDone();
        });
      } else {
        this._lastProgressSent = this._progress;
        this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
      }
    }
  }
  cancel() {
    this._isCancelled = true;
    this._isDone = true;
    this._onDone();
  }
  isDone() {
    return this._isDone;
  }
  error(reason = "failed") {
    this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
    this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
    if (!dom_default.isAutoUpload(this.fileEl)) {
      LiveUploader.clearFiles(this.fileEl);
    }
  }
  onDone(callback) {
    this._onDone = () => {
      this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
      callback();
    };
  }
  onElUpdated() {
    let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    if (activeRefs.indexOf(this.ref) === -1) {
      this.cancel();
    }
  }
  toPreflightPayload() {
    return {
      last_modified: this.file.lastModified,
      name: this.file.name,
      relative_path: this.file.webkitRelativePath,
      size: this.file.size,
      type: this.file.type,
      ref: this.ref,
      meta: typeof this.file.meta === "function" ? this.file.meta() : void 0
    };
  }
  uploader(uploaders) {
    if (this.meta.uploader) {
      let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
      return { name: this.meta.uploader, callback };
    } else {
      return { name: "channel", callback: channelUploader };
    }
  }
  zipPostFlight(resp) {
    this.meta = resp.entries[this.ref];
    if (!this.meta) {
      logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
    }
  }
};
var liveUploaderFileRef = 0;
var LiveUploader = class {
  static genFileRef(file) {
    let ref = file._phxRef;
    if (ref !== void 0) {
      return ref;
    } else {
      file._phxRef = (liveUploaderFileRef++).toString();
      return file._phxRef;
    }
  }
  static getEntryDataURL(inputEl, ref, callback) {
    let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
    callback(URL.createObjectURL(file));
  }
  static hasUploadsInProgress(formEl) {
    let active = 0;
    dom_default.findUploadInputs(formEl).forEach((input) => {
      if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
        active++;
      }
    });
    return active > 0;
  }
  static serializeUploads(inputEl) {
    let files = this.activeFiles(inputEl);
    let fileData = {};
    files.forEach((file) => {
      let entry = { path: inputEl.name };
      let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
      fileData[uploadRef] = fileData[uploadRef] || [];
      entry.ref = this.genFileRef(file);
      entry.last_modified = file.lastModified;
      entry.name = file.name || entry.ref;
      entry.relative_path = file.webkitRelativePath;
      entry.type = file.type;
      entry.size = file.size;
      if (typeof file.meta === "function") {
        entry.meta = file.meta();
      }
      fileData[uploadRef].push(entry);
    });
    return fileData;
  }
  static clearFiles(inputEl) {
    inputEl.value = null;
    inputEl.removeAttribute(PHX_UPLOAD_REF);
    dom_default.putPrivate(inputEl, "files", []);
  }
  static untrackFile(inputEl, file) {
    dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
  }
  static trackFiles(inputEl, files, dataTransfer) {
    if (inputEl.getAttribute("multiple") !== null) {
      let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
      dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
      inputEl.value = null;
    } else {
      if (dataTransfer && dataTransfer.files.length > 0) {
        inputEl.files = dataTransfer.files;
      }
      dom_default.putPrivate(inputEl, "files", files);
    }
  }
  static activeFileInputs(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
  }
  static activeFiles(input) {
    return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
  }
  static inputsAwaitingPreflight(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
  }
  static filesAwaitingPreflight(input) {
    return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
  }
  constructor(inputEl, view, onComplete) {
    this.view = view;
    this.onComplete = onComplete;
    this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
    this.numEntriesInProgress = this._entries.length;
  }
  entries() {
    return this._entries;
  }
  initAdapterUpload(resp, onError, liveSocket2) {
    this._entries = this._entries.map((entry) => {
      entry.zipPostFlight(resp);
      entry.onDone(() => {
        this.numEntriesInProgress--;
        if (this.numEntriesInProgress === 0) {
          this.onComplete();
        }
      });
      return entry;
    });
    let groupedEntries = this._entries.reduce((acc, entry) => {
      if (!entry.meta) {
        return acc;
      }
      let { name, callback } = entry.uploader(liveSocket2.uploaders);
      acc[name] = acc[name] || { callback, entries: [] };
      acc[name].entries.push(entry);
      return acc;
    }, {});
    for (let name in groupedEntries) {
      let { callback, entries } = groupedEntries[name];
      callback(entries, onError, resp, liveSocket2);
    }
  }
};
var ARIA = {
  focusMain() {
    let target = document.querySelector("main h1, main, h1");
    if (target) {
      let origTabIndex = target.tabIndex;
      target.tabIndex = -1;
      target.focus();
      target.tabIndex = origTabIndex;
    }
  },
  anyOf(instance, classes) {
    return classes.find((name) => instance instanceof name);
  },
  isFocusable(el, interactiveOnly) {
    return el instanceof HTMLAnchorElement && el.rel !== "ignore" || el instanceof HTMLAreaElement && el.href !== void 0 || !el.disabled && this.anyOf(el, [HTMLInputElement, HTMLSelectElement, HTMLTextAreaElement, HTMLButtonElement]) || el instanceof HTMLIFrameElement || (el.tabIndex > 0 || !interactiveOnly && el.tabIndex === 0 && el.getAttribute("tabindex") !== null && el.getAttribute("aria-hidden") !== "true");
  },
  attemptFocus(el, interactiveOnly) {
    if (this.isFocusable(el, interactiveOnly)) {
      try {
        el.focus();
      } catch (e) {
      }
    }
    return !!document.activeElement && document.activeElement.isSameNode(el);
  },
  focusFirstInteractive(el) {
    let child = el.firstElementChild;
    while (child) {
      if (this.attemptFocus(child, true) || this.focusFirstInteractive(child, true)) {
        return true;
      }
      child = child.nextElementSibling;
    }
  },
  focusFirst(el) {
    let child = el.firstElementChild;
    while (child) {
      if (this.attemptFocus(child) || this.focusFirst(child)) {
        return true;
      }
      child = child.nextElementSibling;
    }
  },
  focusLast(el) {
    let child = el.lastElementChild;
    while (child) {
      if (this.attemptFocus(child) || this.focusLast(child)) {
        return true;
      }
      child = child.previousElementSibling;
    }
  }
};
var aria_default = ARIA;
var Hooks2 = {
  LiveFileUpload: {
    activeRefs() {
      return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
    },
    preflightedRefs() {
      return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
    },
    mounted() {
      this.preflightedWas = this.preflightedRefs();
    },
    updated() {
      let newPreflights = this.preflightedRefs();
      if (this.preflightedWas !== newPreflights) {
        this.preflightedWas = newPreflights;
        if (newPreflights === "") {
          this.__view.cancelSubmit(this.el.form);
        }
      }
      if (this.activeRefs() === "") {
        this.el.value = null;
      }
      this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
    }
  },
  LiveImgPreview: {
    mounted() {
      this.ref = this.el.getAttribute("data-phx-entry-ref");
      this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
      LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
        this.url = url;
        this.el.src = url;
      });
    },
    destroyed() {
      URL.revokeObjectURL(this.url);
    }
  },
  FocusWrap: {
    mounted() {
      this.focusStart = this.el.firstElementChild;
      this.focusEnd = this.el.lastElementChild;
      this.focusStart.addEventListener("focus", () => aria_default.focusLast(this.el));
      this.focusEnd.addEventListener("focus", () => aria_default.focusFirst(this.el));
      this.el.addEventListener("phx:show-end", () => this.el.focus());
      if (window.getComputedStyle(this.el).display !== "none") {
        aria_default.focusFirst(this.el);
      }
    }
  }
};
var scrollTop = () => document.documentElement.scrollTop || document.body.scrollTop;
var winHeight = () => window.innerHeight || document.documentElement.clientHeight;
var isAtViewportTop = (el) => {
  let rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.top <= winHeight();
};
var isAtViewportBottom = (el) => {
  let rect = el.getBoundingClientRect();
  return rect.right >= 0 && rect.left >= 0 && rect.bottom <= winHeight();
};
var isWithinViewport = (el) => {
  let rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.top <= winHeight();
};
Hooks2.InfiniteScroll = {
  mounted() {
    let scrollBefore = scrollTop();
    let topOverran = false;
    let throttleInterval = 500;
    let pendingOp = null;
    let onTopOverrun = this.throttle(throttleInterval, (topEvent, firstChild) => {
      pendingOp = () => true;
      this.liveSocket.execJSHookPush(this.el, topEvent, { id: firstChild.id, _overran: true }, () => {
        pendingOp = null;
      });
    });
    let onFirstChildAtTop = this.throttle(throttleInterval, (topEvent, firstChild) => {
      pendingOp = () => firstChild.scrollIntoView({ block: "start" });
      this.liveSocket.execJSHookPush(this.el, topEvent, { id: firstChild.id }, () => {
        pendingOp = null;
        if (!isWithinViewport(firstChild)) {
          firstChild.scrollIntoView({ block: "start" });
        }
      });
    });
    let onLastChildAtBottom = this.throttle(throttleInterval, (bottomEvent, lastChild) => {
      pendingOp = () => lastChild.scrollIntoView({ block: "end" });
      this.liveSocket.execJSHookPush(this.el, bottomEvent, { id: lastChild.id }, () => {
        pendingOp = null;
        if (!isWithinViewport(lastChild)) {
          lastChild.scrollIntoView({ block: "end" });
        }
      });
    });
    this.onScroll = (e) => {
      let scrollNow = scrollTop();
      if (pendingOp) {
        scrollBefore = scrollNow;
        return pendingOp();
      }
      let rect = this.el.getBoundingClientRect();
      let topEvent = this.el.getAttribute(this.liveSocket.binding("viewport-top"));
      let bottomEvent = this.el.getAttribute(this.liveSocket.binding("viewport-bottom"));
      let lastChild = this.el.lastElementChild;
      let firstChild = this.el.firstElementChild;
      let isScrollingUp = scrollNow < scrollBefore;
      let isScrollingDown = scrollNow > scrollBefore;
      if (isScrollingUp && topEvent && !topOverran && rect.top >= 0) {
        topOverran = true;
        onTopOverrun(topEvent, firstChild);
      } else if (isScrollingDown && topOverran && rect.top <= 0) {
        topOverran = false;
      }
      if (topEvent && isScrollingUp && isAtViewportTop(firstChild)) {
        onFirstChildAtTop(topEvent, firstChild);
      } else if (bottomEvent && isScrollingDown && isAtViewportBottom(lastChild)) {
        onLastChildAtBottom(bottomEvent, lastChild);
      }
      scrollBefore = scrollNow;
    };
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  throttle(interval, callback) {
    let lastCallAt = 0;
    let timer;
    return (...args) => {
      let now = Date.now();
      let remainingTime = interval - (now - lastCallAt);
      if (remainingTime <= 0 || remainingTime > interval) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        lastCallAt = now;
        callback(...args);
      } else if (!timer) {
        timer = setTimeout(() => {
          lastCallAt = Date.now();
          timer = null;
          callback(...args);
        }, remainingTime);
      }
    };
  }
};
var hooks_default = Hooks2;
var DOMPostMorphRestorer = class {
  constructor(containerBefore, containerAfter, updateType) {
    let idsBefore = /* @__PURE__ */ new Set();
    let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
    let elementsToModify = [];
    Array.from(containerBefore.children).forEach((child) => {
      if (child.id) {
        idsBefore.add(child.id);
        if (idsAfter.has(child.id)) {
          let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
          elementsToModify.push({ elementId: child.id, previousElementId });
        }
      }
    });
    this.containerId = containerAfter.id;
    this.updateType = updateType;
    this.elementsToModify = elementsToModify;
    this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
  }
  perform() {
    let container = dom_default.byId(this.containerId);
    this.elementsToModify.forEach((elementToModify) => {
      if (elementToModify.previousElementId) {
        maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
          maybe(document.getElementById(elementToModify.elementId), (elem) => {
            let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
            if (!isInRightPlace) {
              previousElem.insertAdjacentElement("afterend", elem);
            }
          });
        });
      } else {
        maybe(document.getElementById(elementToModify.elementId), (elem) => {
          let isInRightPlace = elem.previousElementSibling == null;
          if (!isInRightPlace) {
            container.insertAdjacentElement("afterbegin", elem);
          }
        });
      }
    });
    if (this.updateType == "prepend") {
      this.elementIdsToAdd.reverse().forEach((elemId) => {
        maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
      });
    }
  }
};
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === "xmlns") {
          attrName = attr.name;
        }
        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range;
var NS_XHTML = "http://www.w3.org/1999/xhtml";
var doc = typeof document === "undefined" ? void 0 : document;
var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement("template");
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement("body");
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, "");
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === "OPTGROUP") {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
        if (fromEl.hasAttribute("selected") && !toEl.selected) {
          fromEl.setAttribute("selected", "selected");
          fromEl.removeAttribute("selected");
        }
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, "selected");
  },
  INPUT: function(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "checked");
    syncBooleanAttrProp(fromEl, toEl, "disabled");
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute("value")) {
      fromEl.removeAttribute("value");
    }
  },
  TEXTAREA: function(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function(fromEl, toEl) {
    if (!toEl.hasAttribute("multiple")) {
      var selectedIndex = -1;
      var i = 0;
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === "OPTGROUP") {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === "OPTION") {
            if (curChild.hasAttribute("selected")) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {
}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute("id") || node.id;
  }
}
function morphdomFactory(morphAttrs2) {
  return function morphdom2(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === "string") {
      if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
        var toNodeHtml = toNode;
        toNode = doc.createElement("html");
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    } else if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
      toNode = toNode.firstElementChild;
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var skipFromChildren = options.skipFromChildren || noop;
    var addChild = options.addChild || function(parent, child) {
      return parent.appendChild(child);
    };
    var childrenOnly = options.childrenOnly === true;
    var fromNodesLookup = /* @__PURE__ */ Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = void 0;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            addKeyedRemoval(key);
          } else {
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }
    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          addKeyedRemoval(curFromNodeKey);
        } else {
          removeNode(curFromNodeChild, fromEl, true);
        }
        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly2) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly2) {
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }
        morphAttrs2(fromEl, toEl);
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== "TEXTAREA") {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var skipFrom = skipFromChildren(fromEl);
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;
      outer:
        while (curToNodeChild) {
          toNextSibling = curToNodeChild.nextSibling;
          curToNodeKey = getNodeKey(curToNodeChild);
          while (!skipFrom && curFromNodeChild) {
            fromNextSibling = curFromNodeChild.nextSibling;
            if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            curFromNodeKey = getNodeKey(curFromNodeChild);
            var curFromNodeType = curFromNodeChild.nodeType;
            var isCompatible = void 0;
            if (curFromNodeType === curToNodeChild.nodeType) {
              if (curFromNodeType === ELEMENT_NODE) {
                if (curToNodeKey) {
                  if (curToNodeKey !== curFromNodeKey) {
                    if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                      if (fromNextSibling === matchingFromEl) {
                        isCompatible = false;
                      } else {
                        fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                        if (curFromNodeKey) {
                          addKeyedRemoval(curFromNodeKey);
                        } else {
                          removeNode(curFromNodeChild, fromEl, true);
                        }
                        curFromNodeChild = matchingFromEl;
                      }
                    } else {
                      isCompatible = false;
                    }
                  }
                } else if (curFromNodeKey) {
                  isCompatible = false;
                }
                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                if (isCompatible) {
                  morphEl(curFromNodeChild, curToNodeChild);
                }
              } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                isCompatible = true;
                if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                  curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                }
              }
            }
            if (isCompatible) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            if (curFromNodeKey) {
              addKeyedRemoval(curFromNodeKey);
            } else {
              removeNode(curFromNodeChild, fromEl, true);
            }
            curFromNodeChild = fromNextSibling;
          }
          if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
            if (!skipFrom) {
              addChild(fromEl, matchingFromEl);
            }
            morphEl(matchingFromEl, curToNodeChild);
          } else {
            var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
            if (onBeforeNodeAddedResult !== false) {
              if (onBeforeNodeAddedResult) {
                curToNodeChild = onBeforeNodeAddedResult;
              }
              if (curToNodeChild.actualize) {
                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
              }
              addChild(fromEl, curToNodeChild);
              handleNodeAdded(curToNodeChild);
            }
          }
          curToNodeChild = toNextSibling;
          curFromNodeChild = fromNextSibling;
        }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    }
    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
var morphdom_esm_default = morphdom;
var DOMPatch = class {
  static patchEl(fromEl, toEl, activeElement) {
    morphdom_esm_default(fromEl, toEl, {
      childrenOnly: false,
      onBeforeElUpdated: (fromEl2, toEl2) => {
        if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
          dom_default.mergeFocusedInput(fromEl2, toEl2);
          return false;
        }
      }
    });
  }
  constructor(view, container, id, html, streams, targetCID) {
    this.view = view;
    this.liveSocket = view.liveSocket;
    this.container = container;
    this.id = id;
    this.rootID = view.root.id;
    this.html = html;
    this.streams = streams;
    this.streamInserts = {};
    this.targetCID = targetCID;
    this.cidPatch = isCid(this.targetCID);
    this.pendingRemoves = [];
    this.phxRemove = this.liveSocket.binding("remove");
    this.callbacks = {
      beforeadded: [],
      beforeupdated: [],
      beforephxChildAdded: [],
      afteradded: [],
      afterupdated: [],
      afterdiscarded: [],
      afterphxChildAdded: [],
      aftertransitionsDiscarded: []
    };
  }
  before(kind, callback) {
    this.callbacks[`before${kind}`].push(callback);
  }
  after(kind, callback) {
    this.callbacks[`after${kind}`].push(callback);
  }
  trackBefore(kind, ...args) {
    this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
  }
  trackAfter(kind, ...args) {
    this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
  }
  markPrunableContentForRemoval() {
    let phxUpdate = this.liveSocket.binding(PHX_UPDATE);
    dom_default.all(this.container, `[${phxUpdate}=${PHX_STREAM}]`, (el) => el.innerHTML = "");
    dom_default.all(this.container, `[${phxUpdate}=append] > *, [${phxUpdate}=prepend] > *`, (el) => {
      el.setAttribute(PHX_PRUNE, "");
    });
  }
  perform() {
    let { view, liveSocket: liveSocket2, container, html } = this;
    let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
    if (this.isCIDPatch() && !targetContainer) {
      return;
    }
    let focused = liveSocket2.getActiveElement();
    let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
    let phxUpdate = liveSocket2.binding(PHX_UPDATE);
    let phxFeedbackFor = liveSocket2.binding(PHX_FEEDBACK_FOR);
    let disableWith = liveSocket2.binding(PHX_DISABLE_WITH);
    let phxViewportTop = liveSocket2.binding(PHX_VIEWPORT_TOP);
    let phxViewportBottom = liveSocket2.binding(PHX_VIEWPORT_BOTTOM);
    let phxTriggerExternal = liveSocket2.binding(PHX_TRIGGER_ACTION);
    let added = [];
    let trackedInputs = [];
    let updates = [];
    let appendPrependUpdates = [];
    let externalFormTriggered = null;
    let diffHTML = liveSocket2.time("premorph container prep", () => {
      return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
    });
    this.trackBefore("added", container);
    this.trackBefore("updated", container, container);
    liveSocket2.time("morphdom", () => {
      this.streams.forEach(([ref, inserts, deleteIds, reset]) => {
        Object.entries(inserts).forEach(([key, [streamAt, limit]]) => {
          this.streamInserts[key] = { ref, streamAt, limit };
        });
        if (reset !== void 0) {
          dom_default.all(container, `[${PHX_STREAM_REF}="${ref}"]`, (child) => {
            if (!inserts[child.id]) {
              this.removeStreamChildElement(child);
            }
          });
        }
        deleteIds.forEach((id) => {
          let child = container.querySelector(`[id="${id}"]`);
          if (child) {
            this.removeStreamChildElement(child);
          }
        });
      });
      morphdom_esm_default(targetContainer, diffHTML, {
        childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
        getNodeKey: (node) => {
          return dom_default.isPhxDestroyed(node) ? null : node.id;
        },
        skipFromChildren: (from) => {
          return from.getAttribute(phxUpdate) === PHX_STREAM;
        },
        addChild: (parent, child) => {
          let { ref, streamAt, limit } = this.getStreamInsert(child);
          if (ref === void 0) {
            return parent.appendChild(child);
          }
          dom_default.putSticky(child, PHX_STREAM_REF, (el) => el.setAttribute(PHX_STREAM_REF, ref));
          if (streamAt === 0) {
            parent.insertAdjacentElement("afterbegin", child);
          } else if (streamAt === -1) {
            parent.appendChild(child);
          } else if (streamAt > 0) {
            let sibling = Array.from(parent.children)[streamAt];
            parent.insertBefore(child, sibling);
          }
          let children = limit !== null && Array.from(parent.children);
          let childrenToRemove = [];
          if (limit && limit < 0 && children.length > limit * -1) {
            childrenToRemove = children.slice(0, children.length + limit);
          } else if (limit && limit >= 0 && children.length > limit) {
            childrenToRemove = children.slice(limit);
          }
          childrenToRemove.forEach((removeChild) => {
            if (!this.streamInserts[removeChild.id]) {
              this.removeStreamChildElement(removeChild);
            }
          });
        },
        onBeforeNodeAdded: (el) => {
          dom_default.maybeAddPrivateHooks(el, phxViewportTop, phxViewportBottom);
          this.trackBefore("added", el);
          return el;
        },
        onNodeAdded: (el) => {
          if (el.getAttribute) {
            this.maybeReOrderStream(el);
          }
          if (el instanceof HTMLImageElement && el.srcset) {
            el.srcset = el.srcset;
          } else if (el instanceof HTMLVideoElement && el.autoplay) {
            el.play();
          }
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          if (el.getAttribute && el.getAttribute("name") && dom_default.isFormInput(el)) {
            trackedInputs.push(el);
          }
          if (dom_default.isPhxChild(el) && view.ownsElement(el) || dom_default.isPhxSticky(el) && view.ownsElement(el.parentNode)) {
            this.trackAfter("phxChildAdded", el);
          }
          added.push(el);
        },
        onNodeDiscarded: (el) => this.onNodeDiscarded(el),
        onBeforeNodeDiscarded: (el) => {
          if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
            return true;
          }
          if (el.parentElement !== null && el.id && dom_default.isPhxUpdate(el.parentElement, phxUpdate, [PHX_STREAM, "append", "prepend"])) {
            return false;
          }
          if (this.maybePendingRemove(el)) {
            return false;
          }
          if (this.skipCIDSibling(el)) {
            return false;
          }
          return true;
        },
        onElUpdated: (el) => {
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          updates.push(el);
          this.maybeReOrderStream(el);
        },
        onBeforeElUpdated: (fromEl, toEl) => {
          dom_default.maybeAddPrivateHooks(toEl, phxViewportTop, phxViewportBottom);
          dom_default.cleanChildNodes(toEl, phxUpdate);
          if (this.skipCIDSibling(toEl)) {
            return false;
          }
          if (dom_default.isPhxSticky(fromEl)) {
            return false;
          }
          if (dom_default.isIgnored(fromEl, phxUpdate) || fromEl.form && fromEl.form.isSameNode(externalFormTriggered)) {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
            return false;
          }
          if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
            if (dom_default.isUploadInput(fromEl)) {
              this.trackBefore("updated", fromEl, toEl);
              updates.push(fromEl);
            }
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (dom_default.isPhxChild(toEl)) {
            let prevSession = fromEl.getAttribute(PHX_SESSION);
            dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
            if (prevSession !== "") {
              fromEl.setAttribute(PHX_SESSION, prevSession);
            }
            fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          dom_default.copyPrivates(toEl, fromEl);
          let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
          if (isFocusedFormEl && fromEl.type !== "hidden") {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeFocusedInput(fromEl, toEl);
            dom_default.syncAttrsToProps(fromEl);
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            trackedInputs.push(fromEl);
            return false;
          } else {
            if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
              appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
            }
            dom_default.syncAttrsToProps(toEl);
            dom_default.applyStickyOperations(toEl);
            if (toEl.getAttribute("name") && dom_default.isFormInput(toEl)) {
              trackedInputs.push(toEl);
            }
            this.trackBefore("updated", fromEl, toEl);
            return true;
          }
        }
      });
    });
    if (liveSocket2.isDebugEnabled()) {
      detectDuplicateIds();
    }
    if (appendPrependUpdates.length > 0) {
      liveSocket2.time("post-morph append/prepend restoration", () => {
        appendPrependUpdates.forEach((update) => update.perform());
      });
    }
    trackedInputs.forEach((input) => {
      dom_default.maybeHideFeedback(targetContainer, input, phxFeedbackFor);
    });
    liveSocket2.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
    dom_default.dispatchEvent(document, "phx:update");
    added.forEach((el) => this.trackAfter("added", el));
    updates.forEach((el) => this.trackAfter("updated", el));
    this.transitionPendingRemoves();
    if (externalFormTriggered) {
      liveSocket2.unload();
      Object.getPrototypeOf(externalFormTriggered).submit.call(externalFormTriggered);
    }
    return true;
  }
  onNodeDiscarded(el) {
    if (dom_default.isPhxChild(el) || dom_default.isPhxSticky(el)) {
      this.liveSocket.destroyViewByEl(el);
    }
    this.trackAfter("discarded", el);
  }
  maybePendingRemove(node) {
    if (node.getAttribute && node.getAttribute(this.phxRemove) !== null) {
      this.pendingRemoves.push(node);
      return true;
    } else {
      return false;
    }
  }
  removeStreamChildElement(child) {
    if (!this.maybePendingRemove(child)) {
      child.remove();
      this.onNodeDiscarded(child);
    }
  }
  getStreamInsert(el) {
    let insert = el.id ? this.streamInserts[el.id] : {};
    return insert || {};
  }
  maybeReOrderStream(el) {
    let { ref, streamAt, limit } = this.getStreamInsert(el);
    if (streamAt === void 0) {
      return;
    }
    dom_default.putSticky(el, PHX_STREAM_REF, (el2) => el2.setAttribute(PHX_STREAM_REF, ref));
    if (streamAt === 0) {
      el.parentElement.insertBefore(el, el.parentElement.firstElementChild);
    } else if (streamAt > 0) {
      let children = Array.from(el.parentElement.children);
      let oldIndex = children.indexOf(el);
      if (streamAt >= children.length - 1) {
        el.parentElement.appendChild(el);
      } else {
        let sibling = children[streamAt];
        if (oldIndex > streamAt) {
          el.parentElement.insertBefore(el, sibling);
        } else {
          el.parentElement.insertBefore(el, sibling.nextElementSibling);
        }
      }
    }
  }
  transitionPendingRemoves() {
    let { pendingRemoves, liveSocket: liveSocket2 } = this;
    if (pendingRemoves.length > 0) {
      liveSocket2.transitionRemoves(pendingRemoves);
      liveSocket2.requestDOMUpdate(() => {
        pendingRemoves.forEach((el) => {
          let child = dom_default.firstPhxChild(el);
          if (child) {
            liveSocket2.destroyViewByEl(child);
          }
          el.remove();
        });
        this.trackAfter("transitionsDiscarded", pendingRemoves);
      });
    }
  }
  isCIDPatch() {
    return this.cidPatch;
  }
  skipCIDSibling(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
  }
  targetCIDContainer(html) {
    if (!this.isCIDPatch()) {
      return;
    }
    let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
    if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
      return first;
    } else {
      return first && first.parentNode;
    }
  }
  buildDiffHTML(container, html, phxUpdate, targetContainer) {
    let isCIDPatch = this.isCIDPatch();
    let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
    if (!isCIDPatch || isCIDWithSingleRoot) {
      return html;
    } else {
      let diffContainer = null;
      let template = document.createElement("template");
      diffContainer = dom_default.cloneNode(targetContainer);
      let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
      template.innerHTML = html;
      rest.forEach((el) => el.remove());
      Array.from(diffContainer.childNodes).forEach((child) => {
        if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
      });
      Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
      firstComponent.remove();
      return diffContainer.outerHTML;
    }
  }
  indexOf(parent, child) {
    return Array.from(parent.children).indexOf(child);
  }
};
var Rendered = class {
  static extract(diff) {
    let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
    delete diff[REPLY];
    delete diff[EVENTS];
    delete diff[TITLE];
    return { diff, title, reply: reply || null, events: events || [] };
  }
  constructor(viewId, rendered) {
    this.viewId = viewId;
    this.rendered = {};
    this.mergeDiff(rendered);
  }
  parentViewId() {
    return this.viewId;
  }
  toString(onlyCids) {
    let [str, streams] = this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
    return [str, streams];
  }
  recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
    onlyCids = onlyCids ? new Set(onlyCids) : null;
    let output = { buffer: "", components, onlyCids, streams: /* @__PURE__ */ new Set() };
    this.toOutputBuffer(rendered, null, output);
    return [output.buffer, output.streams];
  }
  componentCIDs(diff) {
    return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
  }
  isComponentOnlyDiff(diff) {
    if (!diff[COMPONENTS]) {
      return false;
    }
    return Object.keys(diff).length === 1;
  }
  getComponent(diff, cid) {
    return diff[COMPONENTS][cid];
  }
  mergeDiff(diff) {
    let newc = diff[COMPONENTS];
    let cache = {};
    delete diff[COMPONENTS];
    this.rendered = this.mutableMerge(this.rendered, diff);
    this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
    if (newc) {
      let oldc = this.rendered[COMPONENTS];
      for (let cid in newc) {
        newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
      }
      for (let cid in newc) {
        oldc[cid] = newc[cid];
      }
      diff[COMPONENTS] = newc;
    }
  }
  cachedFindComponent(cid, cdiff, oldc, newc, cache) {
    if (cache[cid]) {
      return cache[cid];
    } else {
      let ndiff, stat, scid = cdiff[STATIC];
      if (isCid(scid)) {
        let tdiff;
        if (scid > 0) {
          tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
        } else {
          tdiff = oldc[-scid];
        }
        stat = tdiff[STATIC];
        ndiff = this.cloneMerge(tdiff, cdiff);
        ndiff[STATIC] = stat;
      } else {
        ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
      }
      cache[cid] = ndiff;
      return ndiff;
    }
  }
  mutableMerge(target, source) {
    if (source[STATIC] !== void 0) {
      return source;
    } else {
      this.doMutableMerge(target, source);
      return target;
    }
  }
  doMutableMerge(target, source) {
    for (let key in source) {
      let val = source[key];
      let targetVal = target[key];
      let isObjVal = isObject(val);
      if (isObjVal && val[STATIC] === void 0 && isObject(targetVal)) {
        this.doMutableMerge(targetVal, val);
      } else {
        target[key] = val;
      }
    }
  }
  cloneMerge(target, source) {
    let merged = __spreadValues(__spreadValues({}, target), source);
    for (let key in merged) {
      let val = source[key];
      let targetVal = target[key];
      if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
        merged[key] = this.cloneMerge(targetVal, val);
      }
    }
    return merged;
  }
  componentToString(cid) {
    let [str, streams] = this.recursiveCIDToString(this.rendered[COMPONENTS], cid, null, false);
    return [str, streams];
  }
  pruneCIDs(cids) {
    cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
  }
  get() {
    return this.rendered;
  }
  isNewFingerprint(diff = {}) {
    return !!diff[STATIC];
  }
  templateStatic(part, templates) {
    if (typeof part === "number") {
      return templates[part];
    } else {
      return part;
    }
  }
  toOutputBuffer(rendered, templates, output) {
    if (rendered[DYNAMICS]) {
      return this.comprehensionToBuffer(rendered, templates, output);
    }
    let { [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    output.buffer += statics[0];
    for (let i = 1; i < statics.length; i++) {
      this.dynamicToBuffer(rendered[i - 1], templates, output);
      output.buffer += statics[i];
    }
  }
  comprehensionToBuffer(rendered, templates, output) {
    let { [DYNAMICS]: dynamics, [STATIC]: statics, [STREAM]: stream } = rendered;
    let [_ref, _inserts, deleteIds, reset] = stream || [null, {}, [], null];
    statics = this.templateStatic(statics, templates);
    let compTemplates = templates || rendered[TEMPLATES];
    for (let d = 0; d < dynamics.length; d++) {
      let dynamic = dynamics[d];
      output.buffer += statics[0];
      for (let i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
        output.buffer += statics[i];
      }
    }
    if (stream !== void 0 && (rendered[DYNAMICS].length > 0 || deleteIds.length > 0 || reset)) {
      delete rendered[STREAM];
      rendered[DYNAMICS] = [];
      output.streams.add(stream);
    }
  }
  dynamicToBuffer(rendered, templates, output) {
    if (typeof rendered === "number") {
      let [str, streams] = this.recursiveCIDToString(output.components, rendered, output.onlyCids);
      output.buffer += str;
      output.streams = /* @__PURE__ */ new Set([...output.streams, ...streams]);
    } else if (isObject(rendered)) {
      this.toOutputBuffer(rendered, templates, output);
    } else {
      output.buffer += rendered;
    }
  }
  recursiveCIDToString(components, cid, onlyCids, allowRootComments = true) {
    let component = components[cid] || logError(`no component for CID ${cid}`, components);
    let template = document.createElement("template");
    let [html, streams] = this.recursiveToString(component, components, onlyCids);
    template.innerHTML = html;
    let container = template.content;
    let skip = onlyCids && !onlyCids.has(cid);
    let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.getAttribute(PHX_COMPONENT)) {
          return [hasNodes, true];
        }
        child.setAttribute(PHX_COMPONENT, cid);
        if (!child.id) {
          child.id = `${this.parentViewId()}-${cid}-${i}`;
        }
        if (skip) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
        return [true, hasComponents];
      } else if (child.nodeType === Node.COMMENT_NODE) {
        if (!allowRootComments) {
          child.remove();
        }
        return [hasNodes, hasComponents];
      } else {
        if (child.nodeValue.trim() !== "") {
          logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
          child.replaceWith(this.createSpan(child.nodeValue, cid));
          return [true, hasComponents];
        } else {
          child.remove();
          return [hasNodes, hasComponents];
        }
      }
    }, [false, false]);
    if (!hasChildNodes && !hasChildComponents) {
      logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
      return [this.createSpan("", cid).outerHTML, streams];
    } else if (!hasChildNodes && hasChildComponents) {
      logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
      return [template.innerHTML, streams];
    } else {
      return [template.innerHTML, streams];
    }
  }
  createSpan(text, cid) {
    let span = document.createElement("span");
    span.innerText = text;
    span.setAttribute(PHX_COMPONENT, cid);
    return span;
  }
};
var viewHookID = 1;
var ViewHook = class {
  static makeID() {
    return viewHookID++;
  }
  static elementID(el) {
    return el.phxHookId;
  }
  constructor(view, el, callbacks) {
    this.__view = view;
    this.liveSocket = view.liveSocket;
    this.__callbacks = callbacks;
    this.__listeners = /* @__PURE__ */ new Set();
    this.__isDisconnected = false;
    this.el = el;
    this.el.phxHookId = this.constructor.makeID();
    for (let key in this.__callbacks) {
      this[key] = this.__callbacks[key];
    }
  }
  __mounted() {
    this.mounted && this.mounted();
  }
  __updated() {
    this.updated && this.updated();
  }
  __beforeUpdate() {
    this.beforeUpdate && this.beforeUpdate();
  }
  __destroyed() {
    this.destroyed && this.destroyed();
  }
  __reconnected() {
    if (this.__isDisconnected) {
      this.__isDisconnected = false;
      this.reconnected && this.reconnected();
    }
  }
  __disconnected() {
    this.__isDisconnected = true;
    this.disconnected && this.disconnected();
  }
  pushEvent(event, payload = {}, onReply = function() {
  }) {
    return this.__view.pushHookEvent(this.el, null, event, payload, onReply);
  }
  pushEventTo(phxTarget, event, payload = {}, onReply = function() {
  }) {
    return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
      return view.pushHookEvent(this.el, targetCtx, event, payload, onReply);
    });
  }
  handleEvent(event, callback) {
    let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
    window.addEventListener(`phx:${event}`, callbackRef);
    this.__listeners.add(callbackRef);
    return callbackRef;
  }
  removeHandleEvent(callbackRef) {
    let event = callbackRef(null, true);
    window.removeEventListener(`phx:${event}`, callbackRef);
    this.__listeners.delete(callbackRef);
  }
  upload(name, files) {
    return this.__view.dispatchUploads(null, name, files);
  }
  uploadTo(phxTarget, name, files) {
    return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
      view.dispatchUploads(targetCtx, name, files);
    });
  }
  __cleanup__() {
    this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
  }
};
var focusStack = null;
var JS = {
  exec(eventType, phxEvent, view, sourceEl, defaults) {
    let [defaultKind, defaultArgs] = defaults || [null, { callback: defaults && defaults.callback }];
    let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
    commands.forEach(([kind, args]) => {
      if (kind === defaultKind && defaultArgs.data) {
        args.data = Object.assign(args.data || {}, defaultArgs.data);
        args.callback = args.callback || defaultArgs.callback;
      }
      this.filterToEls(sourceEl, args).forEach((el) => {
        this[`exec_${kind}`](eventType, phxEvent, view, sourceEl, el, args);
      });
    });
  },
  isVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length > 0);
  },
  exec_exec(eventType, phxEvent, view, sourceEl, el, [attr, to]) {
    let nodes = to ? dom_default.all(document, to) : [sourceEl];
    nodes.forEach((node) => {
      let encodedJS = node.getAttribute(attr);
      if (!encodedJS) {
        throw new Error(`expected ${attr} to contain JS command on "${to}"`);
      }
      view.liveSocket.execJS(node, encodedJS, eventType);
    });
  },
  exec_dispatch(eventType, phxEvent, view, sourceEl, el, { to, event, detail, bubbles }) {
    detail = detail || {};
    detail.dispatcher = sourceEl;
    dom_default.dispatchEvent(el, event, { detail, bubbles });
  },
  exec_push(eventType, phxEvent, view, sourceEl, el, args) {
    if (!view.isConnected()) {
      return;
    }
    let { event, data, target, page_loading, loading, value, dispatcher, callback } = args;
    let pushOpts = { loading, value, target, page_loading: !!page_loading };
    let targetSrc = eventType === "change" && dispatcher ? dispatcher : sourceEl;
    let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
    view.withinTargets(phxTarget, (targetView, targetCtx) => {
      if (eventType === "change") {
        let { newCid, _target } = args;
        _target = _target || (dom_default.isFormInput(sourceEl) ? sourceEl.name : void 0);
        if (_target) {
          pushOpts._target = _target;
        }
        targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
      } else if (eventType === "submit") {
        let { submitter } = args;
        targetView.submitForm(sourceEl, targetCtx, event || phxEvent, submitter, pushOpts, callback);
      } else {
        targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data, pushOpts, callback);
      }
    });
  },
  exec_navigate(eventType, phxEvent, view, sourceEl, el, { href, replace }) {
    view.liveSocket.historyRedirect(href, replace ? "replace" : "push");
  },
  exec_patch(eventType, phxEvent, view, sourceEl, el, { href, replace }) {
    view.liveSocket.pushHistoryPatch(href, replace ? "replace" : "push", sourceEl);
  },
  exec_focus(eventType, phxEvent, view, sourceEl, el) {
    window.requestAnimationFrame(() => aria_default.attemptFocus(el));
  },
  exec_focus_first(eventType, phxEvent, view, sourceEl, el) {
    window.requestAnimationFrame(() => aria_default.focusFirstInteractive(el) || aria_default.focusFirst(el));
  },
  exec_push_focus(eventType, phxEvent, view, sourceEl, el) {
    window.requestAnimationFrame(() => focusStack = el || sourceEl);
  },
  exec_pop_focus(eventType, phxEvent, view, sourceEl, el) {
    window.requestAnimationFrame(() => {
      if (focusStack) {
        focusStack.focus();
      }
      focusStack = null;
    });
  },
  exec_add_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
    this.addOrRemoveClasses(el, names, [], transition, time, view);
  },
  exec_remove_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
    this.addOrRemoveClasses(el, [], names, transition, time, view);
  },
  exec_transition(eventType, phxEvent, view, sourceEl, el, { time, transition }) {
    this.addOrRemoveClasses(el, [], [], transition, time, view);
  },
  exec_toggle(eventType, phxEvent, view, sourceEl, el, { display, ins, outs, time }) {
    this.toggle(eventType, view, el, display, ins, outs, time);
  },
  exec_show(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
    this.show(eventType, view, el, display, transition, time);
  },
  exec_hide(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
    this.hide(eventType, view, el, display, transition, time);
  },
  exec_set_attr(eventType, phxEvent, view, sourceEl, el, { attr: [attr, val] }) {
    this.setOrRemoveAttrs(el, [[attr, val]], []);
  },
  exec_remove_attr(eventType, phxEvent, view, sourceEl, el, { attr }) {
    this.setOrRemoveAttrs(el, [], [attr]);
  },
  show(eventType, view, el, display, transition, time) {
    if (!this.isVisible(el)) {
      this.toggle(eventType, view, el, display, transition, null, time);
    }
  },
  hide(eventType, view, el, display, transition, time) {
    if (this.isVisible(el)) {
      this.toggle(eventType, view, el, display, null, transition, time);
    }
  },
  toggle(eventType, view, el, display, ins, outs, time) {
    let [inClasses, inStartClasses, inEndClasses] = ins || [[], [], []];
    let [outClasses, outStartClasses, outEndClasses] = outs || [[], [], []];
    if (inClasses.length > 0 || outClasses.length > 0) {
      if (this.isVisible(el)) {
        let onStart = () => {
          this.addOrRemoveClasses(el, outStartClasses, inClasses.concat(inStartClasses).concat(inEndClasses));
          window.requestAnimationFrame(() => {
            this.addOrRemoveClasses(el, outClasses, []);
            window.requestAnimationFrame(() => this.addOrRemoveClasses(el, outEndClasses, outStartClasses));
          });
        };
        el.dispatchEvent(new Event("phx:hide-start"));
        view.transition(time, onStart, () => {
          this.addOrRemoveClasses(el, [], outClasses.concat(outEndClasses));
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
          el.dispatchEvent(new Event("phx:hide-end"));
        });
      } else {
        if (eventType === "remove") {
          return;
        }
        let onStart = () => {
          this.addOrRemoveClasses(el, inStartClasses, outClasses.concat(outStartClasses).concat(outEndClasses));
          let stickyDisplay = display || this.defaultDisplay(el);
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = stickyDisplay);
          window.requestAnimationFrame(() => {
            this.addOrRemoveClasses(el, inClasses, []);
            window.requestAnimationFrame(() => this.addOrRemoveClasses(el, inEndClasses, inStartClasses));
          });
        };
        el.dispatchEvent(new Event("phx:show-start"));
        view.transition(time, onStart, () => {
          this.addOrRemoveClasses(el, [], inClasses.concat(inEndClasses));
          el.dispatchEvent(new Event("phx:show-end"));
        });
      }
    } else {
      if (this.isVisible(el)) {
        window.requestAnimationFrame(() => {
          el.dispatchEvent(new Event("phx:hide-start"));
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
          el.dispatchEvent(new Event("phx:hide-end"));
        });
      } else {
        window.requestAnimationFrame(() => {
          el.dispatchEvent(new Event("phx:show-start"));
          let stickyDisplay = display || this.defaultDisplay(el);
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = stickyDisplay);
          el.dispatchEvent(new Event("phx:show-end"));
        });
      }
    }
  },
  addOrRemoveClasses(el, adds, removes, transition, time, view) {
    let [transitionRun, transitionStart, transitionEnd] = transition || [[], [], []];
    if (transitionRun.length > 0) {
      let onStart = () => {
        this.addOrRemoveClasses(el, transitionStart, [].concat(transitionRun).concat(transitionEnd));
        window.requestAnimationFrame(() => {
          this.addOrRemoveClasses(el, transitionRun, []);
          window.requestAnimationFrame(() => this.addOrRemoveClasses(el, transitionEnd, transitionStart));
        });
      };
      let onDone = () => this.addOrRemoveClasses(el, adds.concat(transitionEnd), removes.concat(transitionRun).concat(transitionStart));
      return view.transition(time, onStart, onDone);
    }
    window.requestAnimationFrame(() => {
      let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
      let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
      let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
      let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
      let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
      dom_default.putSticky(el, "classes", (currentEl) => {
        currentEl.classList.remove(...newRemoves);
        currentEl.classList.add(...newAdds);
        return [newAdds, newRemoves];
      });
    });
  },
  setOrRemoveAttrs(el, sets, removes) {
    let [prevSets, prevRemoves] = dom_default.getSticky(el, "attrs", [[], []]);
    let alteredAttrs = sets.map(([attr, _val]) => attr).concat(removes);
    let newSets = prevSets.filter(([attr, _val]) => !alteredAttrs.includes(attr)).concat(sets);
    let newRemoves = prevRemoves.filter((attr) => !alteredAttrs.includes(attr)).concat(removes);
    dom_default.putSticky(el, "attrs", (currentEl) => {
      newRemoves.forEach((attr) => currentEl.removeAttribute(attr));
      newSets.forEach(([attr, val]) => currentEl.setAttribute(attr, val));
      return [newSets, newRemoves];
    });
  },
  hasAllClasses(el, classes) {
    return classes.every((name) => el.classList.contains(name));
  },
  isToggledOut(el, outClasses) {
    return !this.isVisible(el) || this.hasAllClasses(el, outClasses);
  },
  filterToEls(sourceEl, { to }) {
    return to ? dom_default.all(document, to) : [sourceEl];
  },
  defaultDisplay(el) {
    return { tr: "table-row", td: "table-cell" }[el.tagName.toLowerCase()] || "block";
  }
};
var js_default = JS;
var serializeForm = (form, metadata, onlyNames = []) => {
  let _a = metadata, { submitter } = _a, meta = __objRest(_a, ["submitter"]);
  let formData = new FormData(form);
  if (submitter && submitter.hasAttribute("name") && submitter.form && submitter.form === form) {
    formData.append(submitter.name, submitter.value);
  }
  let toRemove = [];
  formData.forEach((val, key, _index) => {
    if (val instanceof File) {
      toRemove.push(key);
    }
  });
  toRemove.forEach((key) => formData.delete(key));
  let params = new URLSearchParams();
  for (let [key, val] of formData.entries()) {
    if (onlyNames.length === 0 || onlyNames.indexOf(key) >= 0) {
      params.append(key, val);
    }
  }
  for (let metaKey in meta) {
    params.append(metaKey, meta[metaKey]);
  }
  return params.toString();
};
var View = class {
  constructor(el, liveSocket2, parentView, flash, liveReferer) {
    this.isDead = false;
    this.liveSocket = liveSocket2;
    this.flash = flash;
    this.parent = parentView;
    this.root = parentView ? parentView.root : this;
    this.el = el;
    this.id = this.el.id;
    this.ref = 0;
    this.childJoins = 0;
    this.loaderTimer = null;
    this.pendingDiffs = [];
    this.pruningCIDs = [];
    this.redirect = false;
    this.href = null;
    this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
    this.joinPending = true;
    this.destroyed = false;
    this.joinCallback = function(onDone) {
      onDone && onDone();
    };
    this.stopCallback = function() {
    };
    this.pendingJoinOps = this.parent ? null : [];
    this.viewHooks = {};
    this.uploaders = {};
    this.formSubmits = [];
    this.children = this.parent ? null : {};
    this.root.children[this.id] = {};
    this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
      let url = this.href && this.expandURL(this.href);
      return {
        redirect: this.redirect ? url : void 0,
        url: this.redirect ? void 0 : url || void 0,
        params: this.connectParams(liveReferer),
        session: this.getSession(),
        static: this.getStatic(),
        flash: this.flash
      };
    });
  }
  setHref(href) {
    this.href = href;
  }
  setRedirect(href) {
    this.redirect = true;
    this.href = href;
  }
  isMain() {
    return this.el.hasAttribute(PHX_MAIN);
  }
  connectParams(liveReferer) {
    let params = this.liveSocket.params(this.el);
    let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
    if (manifest.length > 0) {
      params["_track_static"] = manifest;
    }
    params["_mounts"] = this.joinCount;
    params["_live_referer"] = liveReferer;
    return params;
  }
  isConnected() {
    return this.channel.canPush();
  }
  getSession() {
    return this.el.getAttribute(PHX_SESSION);
  }
  getStatic() {
    let val = this.el.getAttribute(PHX_STATIC);
    return val === "" ? null : val;
  }
  destroy(callback = function() {
  }) {
    this.destroyAllChildren();
    this.destroyed = true;
    delete this.root.children[this.id];
    if (this.parent) {
      delete this.root.children[this.parent.id][this.id];
    }
    clearTimeout(this.loaderTimer);
    let onFinished = () => {
      callback();
      for (let id in this.viewHooks) {
        this.destroyHook(this.viewHooks[id]);
      }
    };
    dom_default.markPhxChildDestroyed(this.el);
    this.log("destroyed", () => ["the child has been removed from the parent"]);
    this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
  }
  setContainerClasses(...classes) {
    this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_CLIENT_ERROR_CLASS, PHX_SERVER_ERROR_CLASS);
    this.el.classList.add(...classes);
  }
  showLoader(timeout) {
    clearTimeout(this.loaderTimer);
    if (timeout) {
      this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
    } else {
      for (let id in this.viewHooks) {
        this.viewHooks[id].__disconnected();
      }
      this.setContainerClasses(PHX_LOADING_CLASS);
    }
  }
  execAll(binding) {
    dom_default.all(this.el, `[${binding}]`, (el) => this.liveSocket.execJS(el, el.getAttribute(binding)));
  }
  hideLoader() {
    clearTimeout(this.loaderTimer);
    this.setContainerClasses(PHX_CONNECTED_CLASS);
    this.execAll(this.binding("connected"));
  }
  triggerReconnected() {
    for (let id in this.viewHooks) {
      this.viewHooks[id].__reconnected();
    }
  }
  log(kind, msgCallback) {
    this.liveSocket.log(this, kind, msgCallback);
  }
  transition(time, onStart, onDone = function() {
  }) {
    this.liveSocket.transition(time, onStart, onDone);
  }
  withinTargets(phxTarget, callback) {
    if (phxTarget instanceof HTMLElement || phxTarget instanceof SVGElement) {
      return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
    }
    if (isCid(phxTarget)) {
      let targets = dom_default.findComponentNodeList(this.el, phxTarget);
      if (targets.length === 0) {
        logError(`no component found matching phx-target of ${phxTarget}`);
      } else {
        callback(this, parseInt(phxTarget));
      }
    } else {
      let targets = Array.from(document.querySelectorAll(phxTarget));
      if (targets.length === 0) {
        logError(`nothing found matching the phx-target selector "${phxTarget}"`);
      }
      targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
    }
  }
  applyDiff(type, rawDiff, callback) {
    this.log(type, () => ["", clone(rawDiff)]);
    let { diff, reply, events, title } = Rendered.extract(rawDiff);
    callback({ diff, reply, events });
    if (title) {
      window.requestAnimationFrame(() => dom_default.putTitle(title));
    }
  }
  onJoin(resp) {
    let { rendered, container } = resp;
    if (container) {
      let [tag, attrs] = container;
      this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
    }
    this.childJoins = 0;
    this.joinPending = true;
    this.flash = null;
    browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
    this.applyDiff("mount", rendered, ({ diff, events }) => {
      this.rendered = new Rendered(this.id, diff);
      let [html, streams] = this.renderContainer(null, "join");
      this.dropPendingRefs();
      let forms = this.formsForRecovery(html);
      this.joinCount++;
      if (forms.length > 0) {
        forms.forEach(([form, newForm, newCid], i) => {
          this.pushFormRecovery(form, newCid, (resp2) => {
            if (i === forms.length - 1) {
              this.onJoinComplete(resp2, html, streams, events);
            }
          });
        });
      } else {
        this.onJoinComplete(resp, html, streams, events);
      }
    });
  }
  dropPendingRefs() {
    dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}]`, (el) => {
      el.removeAttribute(PHX_REF);
      el.removeAttribute(PHX_REF_SRC);
    });
  }
  onJoinComplete({ live_patch }, html, streams, events) {
    if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
      return this.applyJoinPatch(live_patch, html, streams, events);
    }
    let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
      let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
      let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
      if (phxStatic) {
        toEl.setAttribute(PHX_STATIC, phxStatic);
      }
      return this.joinChild(toEl);
    });
    if (newChildren.length === 0) {
      if (this.parent) {
        this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, streams, events)]);
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
        this.applyJoinPatch(live_patch, html, streams, events);
      }
    } else {
      this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, streams, events)]);
    }
  }
  attachTrueDocEl() {
    this.el = dom_default.byId(this.id);
    this.el.setAttribute(PHX_ROOT_ID, this.root.id);
  }
  execNewMounted() {
    let phxViewportTop = this.binding(PHX_VIEWPORT_TOP);
    let phxViewportBottom = this.binding(PHX_VIEWPORT_BOTTOM);
    dom_default.all(this.el, `[${phxViewportTop}], [${phxViewportBottom}]`, (hookEl) => {
      dom_default.maybeAddPrivateHooks(hookEl, phxViewportTop, phxViewportBottom);
      this.maybeAddNewHook(hookEl);
    });
    dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
      this.maybeAddNewHook(hookEl);
    });
    dom_default.all(this.el, `[${this.binding(PHX_MOUNTED)}]`, (el) => this.maybeMounted(el));
  }
  applyJoinPatch(live_patch, html, streams, events) {
    this.attachTrueDocEl();
    let patch = new DOMPatch(this, this.el, this.id, html, streams, null);
    patch.markPrunableContentForRemoval();
    this.performPatch(patch, false);
    this.joinNewChildren();
    this.execNewMounted();
    this.joinPending = false;
    this.liveSocket.dispatchEvents(events);
    this.applyPendingUpdates();
    if (live_patch) {
      let { kind, to } = live_patch;
      this.liveSocket.historyPatch(to, kind);
    }
    this.hideLoader();
    if (this.joinCount > 1) {
      this.triggerReconnected();
    }
    this.stopCallback();
  }
  triggerBeforeUpdateHook(fromEl, toEl) {
    this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
    let hook = this.getHook(fromEl);
    let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
    if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
      hook.__beforeUpdate();
      return hook;
    }
  }
  maybeMounted(el) {
    let phxMounted = el.getAttribute(this.binding(PHX_MOUNTED));
    let hasBeenInvoked = phxMounted && dom_default.private(el, "mounted");
    if (phxMounted && !hasBeenInvoked) {
      this.liveSocket.execJS(el, phxMounted);
      dom_default.putPrivate(el, "mounted", true);
    }
  }
  maybeAddNewHook(el, force) {
    let newHook = this.addHook(el);
    if (newHook) {
      newHook.__mounted();
    }
  }
  performPatch(patch, pruneCids) {
    let removedEls = [];
    let phxChildrenAdded = false;
    let updatedHookIds = /* @__PURE__ */ new Set();
    patch.after("added", (el) => {
      this.liveSocket.triggerDOM("onNodeAdded", [el]);
      this.maybeAddNewHook(el);
      if (el.getAttribute) {
        this.maybeMounted(el);
      }
    });
    patch.after("phxChildAdded", (el) => {
      if (dom_default.isPhxSticky(el)) {
        this.liveSocket.joinRootViews();
      } else {
        phxChildrenAdded = true;
      }
    });
    patch.before("updated", (fromEl, toEl) => {
      let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
      if (hook) {
        updatedHookIds.add(fromEl.id);
      }
    });
    patch.after("updated", (el) => {
      if (updatedHookIds.has(el.id)) {
        this.getHook(el).__updated();
      }
    });
    patch.after("discarded", (el) => {
      if (el.nodeType === Node.ELEMENT_NODE) {
        removedEls.push(el);
      }
    });
    patch.after("transitionsDiscarded", (els) => this.afterElementsRemoved(els, pruneCids));
    patch.perform();
    this.afterElementsRemoved(removedEls, pruneCids);
    return phxChildrenAdded;
  }
  afterElementsRemoved(elements, pruneCids) {
    let destroyedCIDs = [];
    elements.forEach((parent) => {
      let components = dom_default.all(parent, `[${PHX_COMPONENT}]`);
      let hooks = dom_default.all(parent, `[${this.binding(PHX_HOOK)}]`);
      components.concat(parent).forEach((el) => {
        let cid = this.componentID(el);
        if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
          destroyedCIDs.push(cid);
        }
      });
      hooks.concat(parent).forEach((hookEl) => {
        let hook = this.getHook(hookEl);
        hook && this.destroyHook(hook);
      });
    });
    if (pruneCids) {
      this.maybePushComponentsDestroyed(destroyedCIDs);
    }
  }
  joinNewChildren() {
    dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
  }
  getChildById(id) {
    return this.root.children[this.id][id];
  }
  getDescendentByEl(el) {
    if (el.id === this.id) {
      return this;
    } else {
      return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
    }
  }
  destroyDescendent(id) {
    for (let parentId in this.root.children) {
      for (let childId in this.root.children[parentId]) {
        if (childId === id) {
          return this.root.children[parentId][childId].destroy();
        }
      }
    }
  }
  joinChild(el) {
    let child = this.getChildById(el.id);
    if (!child) {
      let view = new View(el, this.liveSocket, this);
      this.root.children[this.id][view.id] = view;
      view.join();
      this.childJoins++;
      return true;
    }
  }
  isJoinPending() {
    return this.joinPending;
  }
  ackJoin(_child) {
    this.childJoins--;
    if (this.childJoins === 0) {
      if (this.parent) {
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
      }
    }
  }
  onAllChildJoinsComplete() {
    this.joinCallback(() => {
      this.pendingJoinOps.forEach(([view, op]) => {
        if (!view.isDestroyed()) {
          op();
        }
      });
      this.pendingJoinOps = [];
    });
  }
  update(diff, events) {
    if (this.isJoinPending() || this.liveSocket.hasPendingLink() && this.root.isMain()) {
      return this.pendingDiffs.push({ diff, events });
    }
    this.rendered.mergeDiff(diff);
    let phxChildrenAdded = false;
    if (this.rendered.isComponentOnlyDiff(diff)) {
      this.liveSocket.time("component patch complete", () => {
        let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
        parentCids.forEach((parentCID) => {
          if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
            phxChildrenAdded = true;
          }
        });
      });
    } else if (!isEmpty(diff)) {
      this.liveSocket.time("full patch complete", () => {
        let [html, streams] = this.renderContainer(diff, "update");
        let patch = new DOMPatch(this, this.el, this.id, html, streams, null);
        phxChildrenAdded = this.performPatch(patch, true);
      });
    }
    this.liveSocket.dispatchEvents(events);
    if (phxChildrenAdded) {
      this.joinNewChildren();
    }
  }
  renderContainer(diff, kind) {
    return this.liveSocket.time(`toString diff (${kind})`, () => {
      let tag = this.el.tagName;
      let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
      let [html, streams] = this.rendered.toString(cids);
      return [`<${tag}>${html}</${tag}>`, streams];
    });
  }
  componentPatch(diff, cid) {
    if (isEmpty(diff))
      return false;
    let [html, streams] = this.rendered.componentToString(cid);
    let patch = new DOMPatch(this, this.el, this.id, html, streams, cid);
    let childrenAdded = this.performPatch(patch, true);
    return childrenAdded;
  }
  getHook(el) {
    return this.viewHooks[ViewHook.elementID(el)];
  }
  addHook(el) {
    if (ViewHook.elementID(el) || !el.getAttribute) {
      return;
    }
    let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
    if (hookName && !this.ownsElement(el)) {
      return;
    }
    let callbacks = this.liveSocket.getHookCallbacks(hookName);
    if (callbacks) {
      if (!el.id) {
        logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
      }
      let hook = new ViewHook(this, el, callbacks);
      this.viewHooks[ViewHook.elementID(hook.el)] = hook;
      return hook;
    } else if (hookName !== null) {
      logError(`unknown hook found for "${hookName}"`, el);
    }
  }
  destroyHook(hook) {
    hook.__destroyed();
    hook.__cleanup__();
    delete this.viewHooks[ViewHook.elementID(hook.el)];
  }
  applyPendingUpdates() {
    this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
    this.pendingDiffs = [];
    this.eachChild((child) => child.applyPendingUpdates());
  }
  eachChild(callback) {
    let children = this.root.children[this.id] || {};
    for (let id in children) {
      callback(this.getChildById(id));
    }
  }
  onChannel(event, cb) {
    this.liveSocket.onChannel(this.channel, event, (resp) => {
      if (this.isJoinPending()) {
        this.root.pendingJoinOps.push([this, () => cb(resp)]);
      } else {
        this.liveSocket.requestDOMUpdate(() => cb(resp));
      }
    });
  }
  bindChannel() {
    this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
      this.liveSocket.requestDOMUpdate(() => {
        this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
      });
    });
    this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
    this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
    this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
    this.channel.onError((reason) => this.onError(reason));
    this.channel.onClose((reason) => this.onClose(reason));
  }
  destroyAllChildren() {
    this.eachChild((child) => child.destroy());
  }
  onLiveRedirect(redir) {
    let { to, kind, flash } = redir;
    let url = this.expandURL(to);
    this.liveSocket.historyRedirect(url, kind, flash);
  }
  onLivePatch(redir) {
    let { to, kind } = redir;
    this.href = this.expandURL(to);
    this.liveSocket.historyPatch(to, kind);
  }
  expandURL(to) {
    return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
  }
  onRedirect({ to, flash }) {
    this.liveSocket.redirect(to, flash);
  }
  isDestroyed() {
    return this.destroyed;
  }
  joinDead() {
    this.isDead = true;
  }
  join(callback) {
    this.showLoader(this.liveSocket.loaderTimeout);
    this.bindChannel();
    if (this.isMain()) {
      this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
    }
    this.joinCallback = (onDone) => {
      onDone = onDone || function() {
      };
      callback ? callback(this.joinCount, onDone) : onDone();
    };
    this.liveSocket.wrapPush(this, { timeout: false }, () => {
      return this.channel.join().receive("ok", (data) => {
        if (!this.isDestroyed()) {
          this.liveSocket.requestDOMUpdate(() => this.onJoin(data));
        }
      }).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
    });
  }
  onJoinError(resp) {
    if (resp.reason === "reload") {
      this.log("error", () => [`failed mount with ${resp.status}. Falling back to page request`, resp]);
      if (this.isMain()) {
        this.onRedirect({ to: this.href });
      }
      return;
    } else if (resp.reason === "unauthorized" || resp.reason === "stale") {
      this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
      if (this.isMain()) {
        this.onRedirect({ to: this.href });
      }
      return;
    }
    if (resp.redirect || resp.live_redirect) {
      this.joinPending = false;
      this.channel.leave();
    }
    if (resp.redirect) {
      return this.onRedirect(resp.redirect);
    }
    if (resp.live_redirect) {
      return this.onLiveRedirect(resp.live_redirect);
    }
    this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_SERVER_ERROR_CLASS]);
    this.log("error", () => ["unable to join", resp]);
    if (this.liveSocket.isConnected()) {
      this.liveSocket.reloadWithJitter(this);
    }
  }
  onClose(reason) {
    if (this.isDestroyed()) {
      return;
    }
    if (this.liveSocket.hasPendingLink() && reason !== "leave") {
      return this.liveSocket.reloadWithJitter(this);
    }
    this.destroyAllChildren();
    this.liveSocket.dropActiveElement(this);
    if (document.activeElement) {
      document.activeElement.blur();
    }
    if (this.liveSocket.isUnloaded()) {
      this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
    }
  }
  onError(reason) {
    this.onClose(reason);
    if (this.liveSocket.isConnected()) {
      this.log("error", () => ["view crashed", reason]);
    }
    if (!this.liveSocket.isUnloaded()) {
      if (this.liveSocket.isConnected()) {
        this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_SERVER_ERROR_CLASS]);
      } else {
        this.displayError([PHX_LOADING_CLASS, PHX_ERROR_CLASS, PHX_CLIENT_ERROR_CLASS]);
      }
    }
  }
  displayError(classes) {
    if (this.isMain()) {
      dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: { to: this.href, kind: "error" } });
    }
    this.showLoader();
    this.setContainerClasses(...classes);
    this.execAll(this.binding("disconnected"));
  }
  pushWithReply(refGenerator, event, payload, onReply = function() {
  }) {
    if (!this.isConnected()) {
      return;
    }
    let [ref, [el], opts] = refGenerator ? refGenerator() : [null, [], {}];
    let onLoadingDone = function() {
    };
    if (opts.page_loading || el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
      onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
    }
    if (typeof payload.cid !== "number") {
      delete payload.cid;
    }
    return this.liveSocket.wrapPush(this, { timeout: true }, () => {
      return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
        let finish = (hookReply) => {
          if (resp.redirect) {
            this.onRedirect(resp.redirect);
          }
          if (resp.live_patch) {
            this.onLivePatch(resp.live_patch);
          }
          if (resp.live_redirect) {
            this.onLiveRedirect(resp.live_redirect);
          }
          onLoadingDone();
          onReply(resp, hookReply);
        };
        if (resp.diff) {
          this.liveSocket.requestDOMUpdate(() => {
            this.applyDiff("update", resp.diff, ({ diff, reply, events }) => {
              if (ref !== null) {
                this.undoRefs(ref);
              }
              this.update(diff, events);
              finish(reply);
            });
          });
        } else {
          if (ref !== null) {
            this.undoRefs(ref);
          }
          finish(null);
        }
      });
    });
  }
  undoRefs(ref) {
    if (!this.isConnected()) {
      return;
    }
    dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}="${ref}"]`, (el) => {
      let disabledVal = el.getAttribute(PHX_DISABLED);
      el.removeAttribute(PHX_REF);
      el.removeAttribute(PHX_REF_SRC);
      if (el.getAttribute(PHX_READONLY) !== null) {
        el.readOnly = false;
        el.removeAttribute(PHX_READONLY);
      }
      if (disabledVal !== null) {
        el.disabled = disabledVal === "true" ? true : false;
        el.removeAttribute(PHX_DISABLED);
      }
      PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
      let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
      if (disableRestore !== null) {
        el.innerText = disableRestore;
        el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
      }
      let toEl = dom_default.private(el, PHX_REF);
      if (toEl) {
        let hook = this.triggerBeforeUpdateHook(el, toEl);
        DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
        if (hook) {
          hook.__updated();
        }
        dom_default.deletePrivate(el, PHX_REF);
      }
    });
  }
  putRef(elements, event, opts = {}) {
    let newRef = this.ref++;
    let disableWith = this.binding(PHX_DISABLE_WITH);
    if (opts.loading) {
      elements = elements.concat(dom_default.all(document, opts.loading));
    }
    elements.forEach((el) => {
      el.classList.add(`phx-${event}-loading`);
      el.setAttribute(PHX_REF, newRef);
      el.setAttribute(PHX_REF_SRC, this.el.id);
      let disableText = el.getAttribute(disableWith);
      if (disableText !== null) {
        if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
          el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
        }
        if (disableText !== "") {
          el.innerText = disableText;
        }
        el.setAttribute("disabled", "");
      }
    });
    return [newRef, elements, opts];
  }
  componentID(el) {
    let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
    return cid ? parseInt(cid) : null;
  }
  targetComponentID(target, targetCtx, opts = {}) {
    if (isCid(targetCtx)) {
      return targetCtx;
    }
    let cidOrSelector = target.getAttribute(this.binding("target"));
    if (isCid(cidOrSelector)) {
      return parseInt(cidOrSelector);
    } else if (targetCtx && (cidOrSelector !== null || opts.target)) {
      return this.closestComponentID(targetCtx);
    } else {
      return null;
    }
  }
  closestComponentID(targetCtx) {
    if (isCid(targetCtx)) {
      return targetCtx;
    } else if (targetCtx) {
      return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
    } else {
      return null;
    }
  }
  pushHookEvent(el, targetCtx, event, payload, onReply) {
    if (!this.isConnected()) {
      this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
      return false;
    }
    let [ref, els, opts] = this.putRef([el], "hook");
    this.pushWithReply(() => [ref, els, opts], "event", {
      type: "hook",
      event,
      value: payload,
      cid: this.closestComponentID(targetCtx)
    }, (resp, reply) => onReply(reply, ref));
    return ref;
  }
  extractMeta(el, meta, value) {
    let prefix = this.binding("value-");
    for (let i = 0; i < el.attributes.length; i++) {
      if (!meta) {
        meta = {};
      }
      let name = el.attributes[i].name;
      if (name.startsWith(prefix)) {
        meta[name.replace(prefix, "")] = el.getAttribute(name);
      }
    }
    if (el.value !== void 0 && !(el instanceof HTMLFormElement)) {
      if (!meta) {
        meta = {};
      }
      meta.value = el.value;
      if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
        delete meta.value;
      }
    }
    if (value) {
      if (!meta) {
        meta = {};
      }
      for (let key in value) {
        meta[key] = value[key];
      }
    }
    return meta;
  }
  pushEvent(type, el, targetCtx, phxEvent, meta, opts = {}, onReply) {
    this.pushWithReply(() => this.putRef([el], type, opts), "event", {
      type,
      event: phxEvent,
      value: this.extractMeta(el, meta, opts.value),
      cid: this.targetComponentID(el, targetCtx, opts)
    }, (resp, reply) => onReply && onReply(reply));
  }
  pushFileProgress(fileEl, entryRef, progress, onReply = function() {
  }) {
    this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
      view.pushWithReply(null, "progress", {
        event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
        ref: fileEl.getAttribute(PHX_UPLOAD_REF),
        entry_ref: entryRef,
        progress,
        cid: view.targetComponentID(fileEl.form, targetCtx)
      }, onReply);
    });
  }
  pushInput(inputEl, targetCtx, forceCid, phxEvent, opts, callback) {
    let uploads;
    let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
    let refGenerator = () => this.putRef([inputEl, inputEl.form], "change", opts);
    let formData;
    let meta = this.extractMeta(inputEl.form);
    if (inputEl.getAttribute(this.binding("change"))) {
      formData = serializeForm(inputEl.form, __spreadValues({ _target: opts._target }, meta), [inputEl.name]);
    } else {
      formData = serializeForm(inputEl.form, __spreadValues({ _target: opts._target }, meta));
    }
    if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
      LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
    }
    uploads = LiveUploader.serializeUploads(inputEl);
    let event = {
      type: "form",
      event: phxEvent,
      value: formData,
      uploads,
      cid
    };
    this.pushWithReply(refGenerator, "event", event, (resp) => {
      dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
      if (dom_default.isUploadInput(inputEl) && dom_default.isAutoUpload(inputEl)) {
        if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
          let [ref, _els] = refGenerator();
          this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
            callback && callback(resp);
            this.triggerAwaitingSubmit(inputEl.form);
          });
        }
      } else {
        callback && callback(resp);
      }
    });
  }
  triggerAwaitingSubmit(formEl) {
    let awaitingSubmit = this.getScheduledSubmit(formEl);
    if (awaitingSubmit) {
      let [_el, _ref, _opts, callback] = awaitingSubmit;
      this.cancelSubmit(formEl);
      callback();
    }
  }
  getScheduledSubmit(formEl) {
    return this.formSubmits.find(([el, _ref, _opts, _callback]) => el.isSameNode(formEl));
  }
  scheduleSubmit(formEl, ref, opts, callback) {
    if (this.getScheduledSubmit(formEl)) {
      return true;
    }
    this.formSubmits.push([formEl, ref, opts, callback]);
  }
  cancelSubmit(formEl) {
    this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
      if (el.isSameNode(formEl)) {
        this.undoRefs(ref);
        return false;
      } else {
        return true;
      }
    });
  }
  disableForm(formEl, opts = {}) {
    let filterIgnored = (el) => {
      let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
      return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
    };
    let filterDisables = (el) => {
      return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
    };
    let filterButton = (el) => el.tagName == "BUTTON";
    let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
    let formElements = Array.from(formEl.elements);
    let disables = formElements.filter(filterDisables);
    let buttons = formElements.filter(filterButton).filter(filterIgnored);
    let inputs = formElements.filter(filterInput).filter(filterIgnored);
    buttons.forEach((button) => {
      button.setAttribute(PHX_DISABLED, button.disabled);
      button.disabled = true;
    });
    inputs.forEach((input) => {
      input.setAttribute(PHX_READONLY, input.readOnly);
      input.readOnly = true;
      if (input.files) {
        input.setAttribute(PHX_DISABLED, input.disabled);
        input.disabled = true;
      }
    });
    formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
    return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit", opts);
  }
  pushFormSubmit(formEl, targetCtx, phxEvent, submitter, opts, onReply) {
    let refGenerator = () => this.disableForm(formEl, opts);
    let cid = this.targetComponentID(formEl, targetCtx);
    if (LiveUploader.hasUploadsInProgress(formEl)) {
      let [ref, _els] = refGenerator();
      let push = () => this.pushFormSubmit(formEl, submitter, targetCtx, phxEvent, opts, onReply);
      return this.scheduleSubmit(formEl, ref, opts, push);
    } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
      let [ref, els] = refGenerator();
      let proxyRefGen = () => [ref, els, opts];
      this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
        let meta = this.extractMeta(formEl);
        let formData = serializeForm(formEl, __spreadValues({ submitter }, meta));
        this.pushWithReply(proxyRefGen, "event", {
          type: "form",
          event: phxEvent,
          value: formData,
          cid
        }, onReply);
      });
    } else if (!(formEl.hasAttribute(PHX_REF) && formEl.classList.contains("phx-submit-loading"))) {
      let meta = this.extractMeta(formEl);
      let formData = serializeForm(formEl, __spreadValues({ submitter }, meta));
      this.pushWithReply(refGenerator, "event", {
        type: "form",
        event: phxEvent,
        value: formData,
        cid
      }, onReply);
    }
  }
  uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
    let joinCountAtUpload = this.joinCount;
    let inputEls = LiveUploader.activeFileInputs(formEl);
    let numFileInputsInProgress = inputEls.length;
    inputEls.forEach((inputEl) => {
      let uploader = new LiveUploader(inputEl, this, () => {
        numFileInputsInProgress--;
        if (numFileInputsInProgress === 0) {
          onComplete();
        }
      });
      this.uploaders[inputEl] = uploader;
      let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
      let payload = {
        ref: inputEl.getAttribute(PHX_UPLOAD_REF),
        entries,
        cid: this.targetComponentID(inputEl.form, targetCtx)
      };
      this.log("upload", () => ["sending preflight request", payload]);
      this.pushWithReply(null, "allow_upload", payload, (resp) => {
        this.log("upload", () => ["got preflight response", resp]);
        if (resp.error) {
          this.undoRefs(ref);
          let [entry_ref, reason] = resp.error;
          this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
        } else {
          let onError = (callback) => {
            this.channel.onError(() => {
              if (this.joinCount === joinCountAtUpload) {
                callback();
              }
            });
          };
          uploader.initAdapterUpload(resp, onError, this.liveSocket);
        }
      });
    });
  }
  dispatchUploads(targetCtx, name, filesOrBlobs) {
    let targetElement = this.targetCtxElement(targetCtx) || this.el;
    let inputs = dom_default.findUploadInputs(targetElement).filter((el) => el.name === name);
    if (inputs.length === 0) {
      logError(`no live file inputs found matching the name "${name}"`);
    } else if (inputs.length > 1) {
      logError(`duplicate live file inputs found matching the name "${name}"`);
    } else {
      dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { detail: { files: filesOrBlobs } });
    }
  }
  targetCtxElement(targetCtx) {
    if (isCid(targetCtx)) {
      let [target] = dom_default.findComponentNodeList(this.el, targetCtx);
      return target;
    } else if (targetCtx) {
      return targetCtx;
    } else {
      return null;
    }
  }
  pushFormRecovery(form, newCid, callback) {
    this.liveSocket.withinOwners(form, (view, targetCtx) => {
      let phxChange = this.binding("change");
      let inputs = Array.from(form.elements).filter((el) => dom_default.isFormInput(el) && el.name && !el.hasAttribute(phxChange));
      if (inputs.length === 0) {
        return;
      }
      inputs.forEach((input2) => input2.hasAttribute(PHX_UPLOAD_REF) && LiveUploader.clearFiles(input2));
      let input = inputs.find((el) => el.type !== "hidden") || inputs[0];
      let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
      js_default.exec("change", phxEvent, view, input, ["push", { _target: input.name, newCid, callback }]);
    });
  }
  pushLinkPatch(href, targetEl, callback) {
    let linkRef = this.liveSocket.setPendingLink(href);
    let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
    let fallback = () => this.liveSocket.redirect(window.location.href);
    let url = href.startsWith("/") ? `${location.protocol}//${location.host}${href}` : href;
    let push = this.pushWithReply(refGen, "live_patch", { url }, (resp) => {
      this.liveSocket.requestDOMUpdate(() => {
        if (resp.link_redirect) {
          this.liveSocket.replaceMain(href, null, callback, linkRef);
        } else {
          if (this.liveSocket.commitPendingLink(linkRef)) {
            this.href = href;
          }
          this.applyPendingUpdates();
          callback && callback(linkRef);
        }
      });
    });
    if (push) {
      push.receive("timeout", fallback);
    } else {
      fallback();
    }
  }
  formsForRecovery(html) {
    if (this.joinCount === 0) {
      return [];
    }
    let phxChange = this.binding("change");
    let template = document.createElement("template");
    template.innerHTML = html;
    return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
      const phxChangeValue = form.getAttribute(phxChange).replaceAll(/([\[\]"])/g, "\\$1");
      let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${phxChangeValue}"]`);
      if (newForm) {
        return [form, newForm, this.targetComponentID(newForm)];
      } else {
        return [form, form, this.targetComponentID(form)];
      }
    }).filter(([form, newForm, newCid]) => newForm);
  }
  maybePushComponentsDestroyed(destroyedCIDs) {
    let willDestroyCIDs = destroyedCIDs.filter((cid) => {
      return dom_default.findComponentNodeList(this.el, cid).length === 0;
    });
    if (willDestroyCIDs.length > 0) {
      this.pruningCIDs.push(...willDestroyCIDs);
      this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
        this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
        let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
          return dom_default.findComponentNodeList(this.el, cid).length === 0;
        });
        if (completelyDestroyCIDs.length > 0) {
          this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
            this.rendered.pruneCIDs(resp.cids);
          });
        }
      });
    }
  }
  ownsElement(el) {
    let parentViewEl = el.closest(PHX_VIEW_SELECTOR);
    return el.getAttribute(PHX_PARENT_ID) === this.id || parentViewEl && parentViewEl.id === this.id || !parentViewEl && this.isDead;
  }
  submitForm(form, targetCtx, phxEvent, submitter, opts = {}) {
    dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
    let phxFeedback = this.liveSocket.binding(PHX_FEEDBACK_FOR);
    let inputs = Array.from(form.elements);
    inputs.forEach((input) => dom_default.putPrivate(input, PHX_HAS_SUBMITTED, true));
    this.liveSocket.blurActiveElement(this);
    this.pushFormSubmit(form, targetCtx, phxEvent, submitter, opts, () => {
      inputs.forEach((input) => dom_default.showError(input, phxFeedback));
      this.liveSocket.restorePreviouslyActiveFocus();
    });
  }
  binding(kind) {
    return this.liveSocket.binding(kind);
  }
};
var LiveSocket = class {
  constructor(url, phxSocket, opts = {}) {
    this.unloaded = false;
    if (!phxSocket || phxSocket.constructor.name === "Object") {
      throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import {LiveSocket} from "phoenix_live_view"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
    }
    this.socket = new phxSocket(url, opts);
    this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
    this.opts = opts;
    this.params = closure2(opts.params || {});
    this.viewLogger = opts.viewLogger;
    this.metadataCallbacks = opts.metadata || {};
    this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
    this.activeElement = null;
    this.prevActive = null;
    this.silenced = false;
    this.main = null;
    this.outgoingMainEl = null;
    this.clickStartedAtTarget = null;
    this.linkRef = 1;
    this.roots = {};
    this.href = window.location.href;
    this.pendingLink = null;
    this.currentLocation = clone(window.location);
    this.hooks = opts.hooks || {};
    this.uploaders = opts.uploaders || {};
    this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
    this.reloadWithJitterTimer = null;
    this.maxReloads = opts.maxReloads || MAX_RELOADS;
    this.reloadJitterMin = opts.reloadJitterMin || RELOAD_JITTER_MIN;
    this.reloadJitterMax = opts.reloadJitterMax || RELOAD_JITTER_MAX;
    this.failsafeJitter = opts.failsafeJitter || FAILSAFE_JITTER;
    this.localStorage = opts.localStorage || window.localStorage;
    this.sessionStorage = opts.sessionStorage || window.sessionStorage;
    this.boundTopLevelEvents = false;
    this.domCallbacks = Object.assign({ onNodeAdded: closure2(), onBeforeElUpdated: closure2() }, opts.dom || {});
    this.transitions = new TransitionSet();
    window.addEventListener("pagehide", (_e) => {
      this.unloaded = true;
    });
    this.socket.onOpen(() => {
      if (this.isUnloaded()) {
        window.location.reload();
      }
    });
  }
  isProfileEnabled() {
    return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
  }
  isDebugEnabled() {
    return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
  }
  isDebugDisabled() {
    return this.sessionStorage.getItem(PHX_LV_DEBUG) === "false";
  }
  enableDebug() {
    this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
  }
  enableProfiling() {
    this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
  }
  disableDebug() {
    this.sessionStorage.setItem(PHX_LV_DEBUG, "false");
  }
  disableProfiling() {
    this.sessionStorage.removeItem(PHX_LV_PROFILE);
  }
  enableLatencySim(upperBoundMs) {
    this.enableDebug();
    console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
    this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
  }
  disableLatencySim() {
    this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
  }
  getLatencySim() {
    let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
    return str ? parseInt(str) : null;
  }
  getSocket() {
    return this.socket;
  }
  connect() {
    if (window.location.hostname === "localhost" && !this.isDebugDisabled()) {
      this.enableDebug();
    }
    let doConnect = () => {
      if (this.joinRootViews()) {
        this.bindTopLevelEvents();
        this.socket.connect();
      } else if (this.main) {
        this.socket.connect();
      } else {
        this.bindTopLevelEvents({ dead: true });
      }
      this.joinDeadView();
    };
    if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", () => doConnect());
    }
  }
  disconnect(callback) {
    clearTimeout(this.reloadWithJitterTimer);
    this.socket.disconnect(callback);
  }
  replaceTransport(transport) {
    clearTimeout(this.reloadWithJitterTimer);
    this.socket.replaceTransport(transport);
    this.connect();
  }
  execJS(el, encodedJS, eventType = null) {
    this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
  }
  execJSHookPush(el, phxEvent, data, callback) {
    this.withinOwners(el, (view) => {
      js_default.exec("hook", phxEvent, view, el, ["push", { data, callback }]);
    });
  }
  unload() {
    if (this.unloaded) {
      return;
    }
    if (this.main && this.isConnected()) {
      this.log(this.main, "socket", () => ["disconnect for page nav"]);
    }
    this.unloaded = true;
    this.destroyAllViews();
    this.disconnect();
  }
  triggerDOM(kind, args) {
    this.domCallbacks[kind](...args);
  }
  time(name, func) {
    if (!this.isProfileEnabled() || !console.time) {
      return func();
    }
    console.time(name);
    let result = func();
    console.timeEnd(name);
    return result;
  }
  log(view, kind, msgCallback) {
    if (this.viewLogger) {
      let [msg, obj] = msgCallback();
      this.viewLogger(view, kind, msg, obj);
    } else if (this.isDebugEnabled()) {
      let [msg, obj] = msgCallback();
      debug(view, kind, msg, obj);
    }
  }
  requestDOMUpdate(callback) {
    this.transitions.after(callback);
  }
  transition(time, onStart, onDone = function() {
  }) {
    this.transitions.addTransition(time, onStart, onDone);
  }
  onChannel(channel, event, cb) {
    channel.on(event, (data) => {
      let latency = this.getLatencySim();
      if (!latency) {
        cb(data);
      } else {
        setTimeout(() => cb(data), latency);
      }
    });
  }
  wrapPush(view, opts, push) {
    let latency = this.getLatencySim();
    let oldJoinCount = view.joinCount;
    if (!latency) {
      if (this.isConnected() && opts.timeout) {
        return push().receive("timeout", () => {
          if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
            this.reloadWithJitter(view, () => {
              this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
            });
          }
        });
      } else {
        return push();
      }
    }
    let fakePush = {
      receives: [],
      receive(kind, cb) {
        this.receives.push([kind, cb]);
      }
    };
    setTimeout(() => {
      if (view.isDestroyed()) {
        return;
      }
      fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
    }, latency);
    return fakePush;
  }
  reloadWithJitter(view, log) {
    clearTimeout(this.reloadWithJitterTimer);
    this.disconnect();
    let minMs = this.reloadJitterMin;
    let maxMs = this.reloadJitterMax;
    let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
    if (tries > this.maxReloads) {
      afterMs = this.failsafeJitter;
    }
    this.reloadWithJitterTimer = setTimeout(() => {
      if (view.isDestroyed() || view.isConnected()) {
        return;
      }
      view.destroy();
      log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
      if (tries > this.maxReloads) {
        this.log(view, "join", () => [`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`]);
      }
      if (this.hasPendingLink()) {
        window.location = this.pendingLink;
      } else {
        window.location.reload();
      }
    }, afterMs);
  }
  getHookCallbacks(name) {
    return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
  }
  isUnloaded() {
    return this.unloaded;
  }
  isConnected() {
    return this.socket.isConnected();
  }
  getBindingPrefix() {
    return this.bindingPrefix;
  }
  binding(kind) {
    return `${this.getBindingPrefix()}${kind}`;
  }
  channel(topic, params) {
    return this.socket.channel(topic, params);
  }
  joinDeadView() {
    let body = document.body;
    if (body && !this.isPhxView(body) && !this.isPhxView(document.firstElementChild)) {
      let view = this.newRootView(body);
      view.setHref(this.getHref());
      view.joinDead();
      if (!this.main) {
        this.main = view;
      }
      window.requestAnimationFrame(() => view.execNewMounted());
    }
  }
  joinRootViews() {
    let rootsFound = false;
    dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
      if (!this.getRootById(rootEl.id)) {
        let view = this.newRootView(rootEl);
        view.setHref(this.getHref());
        view.join();
        if (rootEl.hasAttribute(PHX_MAIN)) {
          this.main = view;
        }
      }
      rootsFound = true;
    });
    return rootsFound;
  }
  redirect(to, flash) {
    this.unload();
    browser_default.redirect(to, flash);
  }
  replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
    let liveReferer = this.currentLocation.href;
    this.outgoingMainEl = this.outgoingMainEl || this.main.el;
    let newMainEl = dom_default.cloneNode(this.outgoingMainEl, "");
    this.main.showLoader(this.loaderTimeout);
    this.main.destroy();
    this.main = this.newRootView(newMainEl, flash, liveReferer);
    this.main.setRedirect(href);
    this.transitionRemoves();
    this.main.join((joinCount, onDone) => {
      if (joinCount === 1 && this.commitPendingLink(linkRef)) {
        this.requestDOMUpdate(() => {
          dom_default.findPhxSticky(document).forEach((el) => newMainEl.appendChild(el));
          this.outgoingMainEl.replaceWith(newMainEl);
          this.outgoingMainEl = null;
          callback && requestAnimationFrame(() => callback(linkRef));
          onDone();
        });
      }
    });
  }
  transitionRemoves(elements) {
    let removeAttr = this.binding("remove");
    elements = elements || dom_default.all(document, `[${removeAttr}]`);
    elements.forEach((el) => {
      this.execJS(el, el.getAttribute(removeAttr), "remove");
    });
  }
  isPhxView(el) {
    return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
  }
  newRootView(el, flash, liveReferer) {
    let view = new View(el, this, null, flash, liveReferer);
    this.roots[view.id] = view;
    return view;
  }
  owner(childEl, callback) {
    let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el)) || this.main;
    if (view) {
      callback(view);
    }
  }
  withinOwners(childEl, callback) {
    this.owner(childEl, (view) => callback(view, childEl));
  }
  getViewByEl(el) {
    let rootId = el.getAttribute(PHX_ROOT_ID);
    return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
  }
  getRootById(id) {
    return this.roots[id];
  }
  destroyAllViews() {
    for (let id in this.roots) {
      this.roots[id].destroy();
      delete this.roots[id];
    }
    this.main = null;
  }
  destroyViewByEl(el) {
    let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
    if (root && root.id === el.id) {
      root.destroy();
      delete this.roots[root.id];
    } else if (root) {
      root.destroyDescendent(el.id);
    }
  }
  setActiveElement(target) {
    if (this.activeElement === target) {
      return;
    }
    this.activeElement = target;
    let cancel = () => {
      if (target === this.activeElement) {
        this.activeElement = null;
      }
      target.removeEventListener("mouseup", this);
      target.removeEventListener("touchend", this);
    };
    target.addEventListener("mouseup", cancel);
    target.addEventListener("touchend", cancel);
  }
  getActiveElement() {
    if (document.activeElement === document.body) {
      return this.activeElement || document.activeElement;
    } else {
      return document.activeElement || document.body;
    }
  }
  dropActiveElement(view) {
    if (this.prevActive && view.ownsElement(this.prevActive)) {
      this.prevActive = null;
    }
  }
  restorePreviouslyActiveFocus() {
    if (this.prevActive && this.prevActive !== document.body) {
      this.prevActive.focus();
    }
  }
  blurActiveElement() {
    this.prevActive = this.getActiveElement();
    if (this.prevActive !== document.body) {
      this.prevActive.blur();
    }
  }
  bindTopLevelEvents({ dead } = {}) {
    if (this.boundTopLevelEvents) {
      return;
    }
    this.boundTopLevelEvents = true;
    this.socket.onClose((event) => {
      if (event && event.code === 1e3 && this.main) {
        return this.reloadWithJitter(this.main);
      }
    });
    document.body.addEventListener("click", function() {
    });
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        this.getSocket().disconnect();
        this.withPageLoading({ to: window.location.href, kind: "redirect" });
        window.location.reload();
      }
    }, true);
    if (!dead) {
      this.bindNav();
    }
    this.bindClicks();
    if (!dead) {
      this.bindForms();
    }
    this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
      let pressedKey = e.key && e.key.toLowerCase();
      if (matchKey && matchKey.toLowerCase() !== pressedKey) {
        return;
      }
      let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
      js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
    });
    this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      if (!eventTarget) {
        let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
      if (phxTarget === "window") {
        let data = this.eventMeta(type, e, targetEl);
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    window.addEventListener("dragover", (e) => e.preventDefault());
    window.addEventListener("drop", (e) => {
      e.preventDefault();
      let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
        return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
      });
      let dropTarget = dropTargetId && document.getElementById(dropTargetId);
      let files = Array.from(e.dataTransfer.files || []);
      if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
        return;
      }
      LiveUploader.trackFiles(dropTarget, files, e.dataTransfer);
      dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
    this.on(PHX_TRACK_UPLOADS, (e) => {
      let uploadTarget = e.target;
      if (!dom_default.isUploadInput(uploadTarget)) {
        return;
      }
      let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
      LiveUploader.trackFiles(uploadTarget, files);
      uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
  eventMeta(eventName, e, targetEl) {
    let callback = this.metadataCallbacks[eventName];
    return callback ? callback(e, targetEl) : {};
  }
  setPendingLink(href) {
    this.linkRef++;
    this.pendingLink = href;
    return this.linkRef;
  }
  commitPendingLink(linkRef) {
    if (this.linkRef !== linkRef) {
      return false;
    } else {
      this.href = this.pendingLink;
      this.pendingLink = null;
      return true;
    }
  }
  getHref() {
    return this.href;
  }
  hasPendingLink() {
    return !!this.pendingLink;
  }
  bind(events, callback) {
    for (let event in events) {
      let browserEventName = events[event];
      this.on(browserEventName, (e) => {
        let binding = this.binding(event);
        let windowBinding = this.binding(`window-${event}`);
        let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
        if (targetPhxEvent) {
          this.debounce(e.target, e, browserEventName, () => {
            this.withinOwners(e.target, (view) => {
              callback(e, event, view, e.target, targetPhxEvent, null);
            });
          });
        } else {
          dom_default.all(document, `[${windowBinding}]`, (el) => {
            let phxEvent = el.getAttribute(windowBinding);
            this.debounce(el, e, browserEventName, () => {
              this.withinOwners(el, (view) => {
                callback(e, event, view, el, phxEvent, "window");
              });
            });
          });
        }
      });
    }
  }
  bindClicks() {
    window.addEventListener("click", (e) => this.clickStartedAtTarget = e.target);
    this.bindClick("click", "click", false);
    this.bindClick("mousedown", "capture-click", true);
  }
  bindClick(eventName, bindingName, capture) {
    let click = this.binding(bindingName);
    window.addEventListener(eventName, (e) => {
      let target = null;
      if (capture) {
        target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
      } else {
        let clickStartedAtTarget = this.clickStartedAtTarget || e.target;
        target = closestPhxBinding(clickStartedAtTarget, click);
        this.dispatchClickAway(e, clickStartedAtTarget);
        this.clickStartedAtTarget = null;
      }
      let phxEvent = target && target.getAttribute(click);
      if (!phxEvent) {
        if (!capture && dom_default.isNewPageClick(e, window.location)) {
          this.unload();
        }
        return;
      }
      if (target.getAttribute("href") === "#") {
        e.preventDefault();
      }
      if (target.hasAttribute(PHX_REF)) {
        return;
      }
      this.debounce(target, e, "click", () => {
        this.withinOwners(target, (view) => {
          js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
        });
      });
    }, capture);
  }
  dispatchClickAway(e, clickStartedAt) {
    let phxClickAway = this.binding("click-away");
    dom_default.all(document, `[${phxClickAway}]`, (el) => {
      if (!(el.isSameNode(clickStartedAt) || el.contains(clickStartedAt))) {
        this.withinOwners(e.target, (view) => {
          let phxEvent = el.getAttribute(phxClickAway);
          if (js_default.isVisible(el)) {
            js_default.exec("click", phxEvent, view, el, ["push", { data: this.eventMeta("click", e, e.target) }]);
          }
        });
      }
    });
  }
  bindNav() {
    if (!browser_default.canPushState()) {
      return;
    }
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    let scrollTimer = null;
    window.addEventListener("scroll", (_e) => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
      }, 100);
    });
    window.addEventListener("popstate", (event) => {
      if (!this.registerNewLocation(window.location)) {
        return;
      }
      let { type, id, root, scroll } = event.state || {};
      let href = window.location.href;
      dom_default.dispatchEvent(window, "phx:navigate", { detail: { href, patch: type === "patch", pop: true } });
      this.requestDOMUpdate(() => {
        if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
          this.main.pushLinkPatch(href, null, () => {
            this.maybeScroll(scroll);
          });
        } else {
          this.replaceMain(href, null, () => {
            if (root) {
              this.replaceRootHistory();
            }
            this.maybeScroll(scroll);
          });
        }
      });
    }, false);
    window.addEventListener("click", (e) => {
      let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
      let type = target && target.getAttribute(PHX_LIVE_LINK);
      if (!type || !this.isConnected() || !this.main || dom_default.wantsNewTab(e)) {
        return;
      }
      let href = target.href;
      let linkState = target.getAttribute(PHX_LINK_STATE);
      e.preventDefault();
      e.stopImmediatePropagation();
      if (this.pendingLink === href) {
        return;
      }
      this.requestDOMUpdate(() => {
        if (type === "patch") {
          this.pushHistoryPatch(href, linkState, target);
        } else if (type === "redirect") {
          this.historyRedirect(href, linkState);
        } else {
          throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
        }
        let phxClick = target.getAttribute(this.binding("click"));
        if (phxClick) {
          this.requestDOMUpdate(() => this.execJS(target, phxClick, "click"));
        }
      });
    }, false);
  }
  maybeScroll(scroll) {
    if (typeof scroll === "number") {
      requestAnimationFrame(() => {
        window.scrollTo(0, scroll);
      });
    }
  }
  dispatchEvent(event, payload = {}) {
    dom_default.dispatchEvent(window, `phx:${event}`, { detail: payload });
  }
  dispatchEvents(events) {
    events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
  }
  withPageLoading(info, callback) {
    dom_default.dispatchEvent(window, "phx:page-loading-start", { detail: info });
    let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", { detail: info });
    return callback ? callback(done) : done;
  }
  pushHistoryPatch(href, linkState, targetEl) {
    if (!this.isConnected()) {
      return browser_default.redirect(href);
    }
    this.withPageLoading({ to: href, kind: "patch" }, (done) => {
      this.main.pushLinkPatch(href, targetEl, (linkRef) => {
        this.historyPatch(href, linkState, linkRef);
        done();
      });
    });
  }
  historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
    if (!this.commitPendingLink(linkRef)) {
      return;
    }
    browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
    dom_default.dispatchEvent(window, "phx:navigate", { detail: { patch: true, href, pop: false } });
    this.registerNewLocation(window.location);
  }
  historyRedirect(href, linkState, flash) {
    if (!this.isConnected()) {
      return browser_default.redirect(href, flash);
    }
    if (/^\/$|^\/[^\/]+.*$/.test(href)) {
      let { protocol, host } = window.location;
      href = `${protocol}//${host}${href}`;
    }
    let scroll = window.scrollY;
    this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
      this.replaceMain(href, flash, (linkRef) => {
        if (linkRef === this.linkRef) {
          browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
          dom_default.dispatchEvent(window, "phx:navigate", { detail: { href, patch: false, pop: false } });
          this.registerNewLocation(window.location);
        }
        done();
      });
    });
  }
  replaceRootHistory() {
    browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
  }
  registerNewLocation(newLocation) {
    let { pathname, search } = this.currentLocation;
    if (pathname + search === newLocation.pathname + newLocation.search) {
      return false;
    } else {
      this.currentLocation = clone(newLocation);
      return true;
    }
  }
  bindForms() {
    let iterations = 0;
    let externalFormSubmitted = false;
    this.on("submit", (e) => {
      let phxSubmit = e.target.getAttribute(this.binding("submit"));
      let phxChange = e.target.getAttribute(this.binding("change"));
      if (!externalFormSubmitted && phxChange && !phxSubmit) {
        externalFormSubmitted = true;
        e.preventDefault();
        this.withinOwners(e.target, (view) => {
          view.disableForm(e.target);
          window.requestAnimationFrame(() => {
            if (dom_default.isUnloadableFormSubmit(e)) {
              this.unload();
            }
            e.target.submit();
          });
        });
      }
    }, true);
    this.on("submit", (e) => {
      let phxEvent = e.target.getAttribute(this.binding("submit"));
      if (!phxEvent) {
        if (dom_default.isUnloadableFormSubmit(e)) {
          this.unload();
        }
        return;
      }
      e.preventDefault();
      e.target.disabled = true;
      this.withinOwners(e.target, (view) => {
        js_default.exec("submit", phxEvent, view, e.target, ["push", { submitter: e.submitter }]);
      });
    }, false);
    for (let type of ["change", "input"]) {
      this.on(type, (e) => {
        let phxChange = this.binding("change");
        let input = e.target;
        let inputEvent = input.getAttribute(phxChange);
        let formEvent = input.form && input.form.getAttribute(phxChange);
        let phxEvent = inputEvent || formEvent;
        if (!phxEvent) {
          return;
        }
        if (input.type === "number" && input.validity && input.validity.badInput) {
          return;
        }
        let dispatcher = inputEvent ? input : input.form;
        let currentIterations = iterations;
        iterations++;
        let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
        if (at === currentIterations - 1 && type === "change" && lastType === "input") {
          return;
        }
        dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
        this.debounce(input, e, type, () => {
          this.withinOwners(dispatcher, (view) => {
            dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
            if (!dom_default.isTextualInput(input)) {
              this.setActiveElement(input);
            }
            js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name, dispatcher }]);
          });
        });
      }, false);
    }
    this.on("reset", (e) => {
      let form = e.target;
      dom_default.resetForm(form, this.binding(PHX_FEEDBACK_FOR));
      let input = Array.from(form.elements).find((el) => el.type === "reset");
      window.requestAnimationFrame(() => {
        input.dispatchEvent(new Event("input", { bubbles: true, cancelable: false }));
      });
    });
  }
  debounce(el, event, eventType, callback) {
    if (eventType === "blur" || eventType === "focusout") {
      return callback();
    }
    let phxDebounce = this.binding(PHX_DEBOUNCE);
    let phxThrottle = this.binding(PHX_THROTTLE);
    let defaultDebounce = this.defaults.debounce.toString();
    let defaultThrottle = this.defaults.throttle.toString();
    this.withinOwners(el, (view) => {
      let asyncFilter = () => !view.isDestroyed() && document.body.contains(el);
      dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, asyncFilter, () => {
        callback();
      });
    });
  }
  silenceEvents(callback) {
    this.silenced = true;
    callback();
    this.silenced = false;
  }
  on(event, callback) {
    window.addEventListener(event, (e) => {
      if (!this.silenced) {
        callback(e);
      }
    });
  }
};
var TransitionSet = class {
  constructor() {
    this.transitions = /* @__PURE__ */ new Set();
    this.pendingOps = [];
  }
  reset() {
    this.transitions.forEach((timer) => {
      clearTimeout(timer);
      this.transitions.delete(timer);
    });
    this.flushPendingOps();
  }
  after(callback) {
    if (this.size() === 0) {
      callback();
    } else {
      this.pushPendingOp(callback);
    }
  }
  addTransition(time, onStart, onDone) {
    onStart();
    let timer = setTimeout(() => {
      this.transitions.delete(timer);
      onDone();
      this.flushPendingOps();
    }, time);
    this.transitions.add(timer);
  }
  pushPendingOp(op) {
    this.pendingOps.push(op);
  }
  size() {
    return this.transitions.size;
  }
  flushPendingOps() {
    if (this.size() > 0) {
      return;
    }
    let op = this.pendingOps.shift();
    if (op) {
      op();
      this.flushPendingOps();
    }
  }
};

// js/app.js
var import_topbar = __toESM(require_topbar_min());
var cpf = document.querySelector("#user_cpf");
if (cpf)
  (0, import_inputmask.default)({ mask: "999.999.999-99" }).mask(cpf);
var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
var liveSocket = new LiveSocket("/live", Socket, {
  params: { _csrf_token: csrfToken },
  hooks: Hooks
});
liveSocket.connect();
window.liveSocket = liveSocket;
import_topbar.default.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
window.addEventListener("phx:page-loading-start", (info) => import_topbar.default.show());
window.addEventListener("phx:page-loading-stop", (info) => import_topbar.default.hide());
/*! Bundled license information:

inputmask/dist/inputmask.js:
  (*!
   * dist/inputmask
   * https://github.com/RobinHerbots/Inputmask
   * Copyright (c) 2010 - 2023 Robin Herbots
   * Licensed under the MIT license
   * Version: 5.0.8
   *)

topbar/topbar.min.js:
  (**
   * @license MIT
   * topbar 1.0.0, 2021-01-06
   * http://buunguyen.github.io/topbar
   * Copyright (c) 2021 Buu Nguyen
   *)
*/