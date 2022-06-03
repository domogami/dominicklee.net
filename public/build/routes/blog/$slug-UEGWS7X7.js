import {
  ClientOnly
} from "/build/_shared/chunk-ITZ5GJUX.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/editorjs-react-renderer/dist/index.min.js
var require_index_min = __commonJS({
  "node_modules/editorjs-react-renderer/dist/index.min.js"(exports, module) {
    init_react();
    !function(e, t) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = t();
      else if (typeof define == "function" && define.amd)
        define([], t);
      else {
        var n = t();
        for (var r in n)
          (typeof exports == "object" ? exports : e)[r] = n[r];
      }
    }(typeof self != "undefined" ? self : exports, () => (() => {
      var e = { 313: (e2, t2, n2) => {
        var r2;
        function o(e3) {
          return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, o(e3);
        }
        !function() {
          "use strict";
          var i = {}.hasOwnProperty;
          function a() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              if (n3) {
                var r3 = o(n3);
                if (r3 === "string" || r3 === "number")
                  e3.push(n3);
                else if (Array.isArray(n3)) {
                  if (n3.length) {
                    var l = a.apply(null, n3);
                    l && e3.push(l);
                  }
                } else if (r3 === "object")
                  if (n3.toString === Object.prototype.toString)
                    for (var c in n3)
                      i.call(n3, c) && n3[c] && e3.push(c);
                  else
                    e3.push(n3.toString());
              }
            }
            return e3.join(" ");
          }
          e2.exports ? (a.default = a, e2.exports = a) : o(n2.amdO) === "object" && n2.amdO ? (r2 = function() {
            return a;
          }.apply(t2, [])) === void 0 || (e2.exports = r2) : window.classNames = a;
        }();
      }, 681: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          var t2 = [];
          return t2.toString = function() {
            return this.map(function(t3) {
              var n2 = "", r2 = t3[5] !== void 0;
              return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), r2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), r2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
            }).join("");
          }, t2.i = function(e4, n2, r2, o, i) {
            typeof e4 == "string" && (e4 = [[null, e4, void 0]]);
            var a = {};
            if (r2)
              for (var l = 0; l < this.length; l++) {
                var c = this[l][0];
                c != null && (a[c] = true);
              }
            for (var s = 0; s < e4.length; s++) {
              var u = [].concat(e4[s]);
              r2 && a[u[0]] || (i !== void 0 && (u[5] === void 0 || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t2.push(u));
            }
          }, t2;
        };
      }, 973: (e2) => {
        "use strict";
        e2.exports = function(e3) {
          return e3[1];
        };
      }, 905: (e2, t2) => {
        "use strict";
        var n2;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Doctype = t2.CDATA = t2.Tag = t2.Style = t2.Script = t2.Comment = t2.Directive = t2.Text = t2.Root = t2.isTag = t2.ElementType = void 0, function(e3) {
          e3.Root = "root", e3.Text = "text", e3.Directive = "directive", e3.Comment = "comment", e3.Script = "script", e3.Style = "style", e3.Tag = "tag", e3.CDATA = "cdata", e3.Doctype = "doctype";
        }(n2 = t2.ElementType || (t2.ElementType = {})), t2.isTag = function(e3) {
          return e3.type === n2.Tag || e3.type === n2.Script || e3.type === n2.Style;
        }, t2.Root = n2.Root, t2.Text = n2.Text, t2.Directive = n2.Directive, t2.Comment = n2.Comment, t2.Script = n2.Script, t2.Style = n2.Style, t2.Tag = n2.Tag, t2.CDATA = n2.CDATA, t2.Doctype = n2.Doctype;
      }, 497: function(e2, t2, n2) {
        "use strict";
        var r2, o = this && this.__extends || (r2 = function(e3, t3) {
          return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var n3 in t4)
              Object.prototype.hasOwnProperty.call(t4, n3) && (e4[n3] = t4[n3]);
          }, r2(e3, t3);
        }, function(e3, t3) {
          if (typeof t3 != "function" && t3 !== null)
            throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
          function n3() {
            this.constructor = e3;
          }
          r2(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (n3.prototype = t3.prototype, new n3());
        }), i = this && this.__assign || function() {
          return i = Object.assign || function(e3) {
            for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o2 in t3 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, i.apply(this, arguments);
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.cloneNode = t2.hasChildren = t2.isDocument = t2.isDirective = t2.isComment = t2.isText = t2.isCDATA = t2.isTag = t2.Element = t2.Document = t2.NodeWithChildren = t2.ProcessingInstruction = t2.Comment = t2.Text = t2.DataNode = t2.Node = void 0;
        var a = n2(905), l = /* @__PURE__ */ new Map([[a.ElementType.Tag, 1], [a.ElementType.Script, 1], [a.ElementType.Style, 1], [a.ElementType.Directive, 1], [a.ElementType.Text, 3], [a.ElementType.CDATA, 4], [a.ElementType.Comment, 8], [a.ElementType.Root, 9]]), c = function() {
          function e3(e4) {
            this.type = e4, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
          }
          return Object.defineProperty(e3.prototype, "nodeType", { get: function() {
            var e4;
            return (e4 = l.get(this.type)) !== null && e4 !== void 0 ? e4 : 1;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "parentNode", { get: function() {
            return this.parent;
          }, set: function(e4) {
            this.parent = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "previousSibling", { get: function() {
            return this.prev;
          }, set: function(e4) {
            this.prev = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(e3.prototype, "nextSibling", { get: function() {
            return this.next;
          }, set: function(e4) {
            this.next = e4;
          }, enumerable: false, configurable: true }), e3.prototype.cloneNode = function(e4) {
            return e4 === void 0 && (e4 = false), w(this, e4);
          }, e3;
        }();
        t2.Node = c;
        var s = function(e3) {
          function t3(t4, n3) {
            var r3 = e3.call(this, t4) || this;
            return r3.data = n3, r3;
          }
          return o(t3, e3), Object.defineProperty(t3.prototype, "nodeValue", { get: function() {
            return this.data;
          }, set: function(e4) {
            this.data = e4;
          }, enumerable: false, configurable: true }), t3;
        }(c);
        t2.DataNode = s;
        var u = function(e3) {
          function t3(t4) {
            return e3.call(this, a.ElementType.Text, t4) || this;
          }
          return o(t3, e3), t3;
        }(s);
        t2.Text = u;
        var f = function(e3) {
          function t3(t4) {
            return e3.call(this, a.ElementType.Comment, t4) || this;
          }
          return o(t3, e3), t3;
        }(s);
        t2.Comment = f;
        var p = function(e3) {
          function t3(t4, n3) {
            var r3 = e3.call(this, a.ElementType.Directive, n3) || this;
            return r3.name = t4, r3;
          }
          return o(t3, e3), t3;
        }(s);
        t2.ProcessingInstruction = p;
        var d = function(e3) {
          function t3(t4, n3) {
            var r3 = e3.call(this, t4) || this;
            return r3.children = n3, r3;
          }
          return o(t3, e3), Object.defineProperty(t3.prototype, "firstChild", { get: function() {
            var e4;
            return (e4 = this.children[0]) !== null && e4 !== void 0 ? e4 : null;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "lastChild", { get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "childNodes", { get: function() {
            return this.children;
          }, set: function(e4) {
            this.children = e4;
          }, enumerable: false, configurable: true }), t3;
        }(c);
        t2.NodeWithChildren = d;
        var y = function(e3) {
          function t3(t4) {
            return e3.call(this, a.ElementType.Root, t4) || this;
          }
          return o(t3, e3), t3;
        }(d);
        t2.Document = y;
        var m = function(e3) {
          function t3(t4, n3, r3, o2) {
            r3 === void 0 && (r3 = []), o2 === void 0 && (o2 = t4 === "script" ? a.ElementType.Script : t4 === "style" ? a.ElementType.Style : a.ElementType.Tag);
            var i2 = e3.call(this, o2, r3) || this;
            return i2.name = t4, i2.attribs = n3, i2;
          }
          return o(t3, e3), Object.defineProperty(t3.prototype, "tagName", { get: function() {
            return this.name;
          }, set: function(e4) {
            this.name = e4;
          }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "attributes", { get: function() {
            var e4 = this;
            return Object.keys(this.attribs).map(function(t4) {
              var n3, r3;
              return { name: t4, value: e4.attribs[t4], namespace: (n3 = e4["x-attribsNamespace"]) === null || n3 === void 0 ? void 0 : n3[t4], prefix: (r3 = e4["x-attribsPrefix"]) === null || r3 === void 0 ? void 0 : r3[t4] };
            });
          }, enumerable: false, configurable: true }), t3;
        }(d);
        function h(e3) {
          return (0, a.isTag)(e3);
        }
        function g(e3) {
          return e3.type === a.ElementType.CDATA;
        }
        function b(e3) {
          return e3.type === a.ElementType.Text;
        }
        function v(e3) {
          return e3.type === a.ElementType.Comment;
        }
        function x(e3) {
          return e3.type === a.ElementType.Directive;
        }
        function S(e3) {
          return e3.type === a.ElementType.Root;
        }
        function w(e3, t3) {
          var n3;
          if (t3 === void 0 && (t3 = false), b(e3))
            n3 = new u(e3.data);
          else if (v(e3))
            n3 = new f(e3.data);
          else if (h(e3)) {
            var r3 = t3 ? E(e3.children) : [], o2 = new m(e3.name, i({}, e3.attribs), r3);
            r3.forEach(function(e4) {
              return e4.parent = o2;
            }), e3.namespace != null && (o2.namespace = e3.namespace), e3["x-attribsNamespace"] && (o2["x-attribsNamespace"] = i({}, e3["x-attribsNamespace"])), e3["x-attribsPrefix"] && (o2["x-attribsPrefix"] = i({}, e3["x-attribsPrefix"])), n3 = o2;
          } else if (g(e3)) {
            r3 = t3 ? E(e3.children) : [];
            var l2 = new d(a.ElementType.CDATA, r3);
            r3.forEach(function(e4) {
              return e4.parent = l2;
            }), n3 = l2;
          } else if (S(e3)) {
            r3 = t3 ? E(e3.children) : [];
            var c2 = new y(r3);
            r3.forEach(function(e4) {
              return e4.parent = c2;
            }), e3["x-mode"] && (c2["x-mode"] = e3["x-mode"]), n3 = c2;
          } else {
            if (!x(e3))
              throw new Error("Not implemented yet: ".concat(e3.type));
            var s2 = new p(e3.name, e3.data);
            e3["x-name"] != null && (s2["x-name"] = e3["x-name"], s2["x-publicId"] = e3["x-publicId"], s2["x-systemId"] = e3["x-systemId"]), n3 = s2;
          }
          return n3.startIndex = e3.startIndex, n3.endIndex = e3.endIndex, e3.sourceCodeLocation != null && (n3.sourceCodeLocation = e3.sourceCodeLocation), n3;
        }
        function E(e3) {
          for (var t3 = e3.map(function(e4) {
            return w(e4, true);
          }), n3 = 1; n3 < t3.length; n3++)
            t3[n3].prev = t3[n3 - 1], t3[n3 - 1].next = t3[n3];
          return t3;
        }
        t2.Element = m, t2.isTag = h, t2.isCDATA = g, t2.isText = b, t2.isComment = v, t2.isDirective = x, t2.isDocument = S, t2.hasChildren = function(e3) {
          return Object.prototype.hasOwnProperty.call(e3, "children");
        }, t2.cloneNode = w;
      }, 692: (e2) => {
        e2.exports = { CASE_SENSITIVE_TAG_NAMES: ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussainBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"] };
      }, 253: (e2, t2, n2) => {
        var r2 = "html", o = "head", i = "body", a = /<([a-zA-Z]+[0-9]?)/, l = /<head.*>/i, c = /<body.*>/i, s = function() {
          throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
        }, u = function() {
          throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
        };
        if (typeof window.DOMParser == "function") {
          var f = new window.DOMParser();
          s = u = function(e3, t3) {
            return t3 && (e3 = "<" + t3 + ">" + e3 + "</" + t3 + ">"), f.parseFromString(e3, "text/html");
          };
        }
        if (document.implementation) {
          var p = n2(755).isIE, d = document.implementation.createHTMLDocument(p() ? "html-dom-parser" : void 0);
          s = function(e3, t3) {
            return t3 ? (d.documentElement.getElementsByTagName(t3)[0].innerHTML = e3, d) : (d.documentElement.innerHTML = e3, d);
          };
        }
        var y, m = document.createElement("template");
        m.content && (y = function(e3) {
          return m.innerHTML = e3, m.content.childNodes;
        }), e2.exports = function(e3) {
          var t3, n3, f2, p2, d2 = e3.match(a);
          switch (d2 && d2[1] && (t3 = d2[1].toLowerCase()), t3) {
            case r2:
              return n3 = u(e3), l.test(e3) || (f2 = n3.getElementsByTagName(o)[0]) && f2.parentNode.removeChild(f2), c.test(e3) || (f2 = n3.getElementsByTagName(i)[0]) && f2.parentNode.removeChild(f2), n3.getElementsByTagName(r2);
            case o:
            case i:
              return p2 = s(e3).getElementsByTagName(t3), c.test(e3) && l.test(e3) ? p2[0].parentNode.childNodes : p2;
            default:
              return y ? y(e3) : s(e3, i).getElementsByTagName(i)[0].childNodes;
          }
        };
      }, 995: (e2, t2, n2) => {
        var r2 = n2(253), o = n2(755).formatDOM, i = /<(![a-zA-Z\s]+)>/;
        e2.exports = function(e3) {
          if (typeof e3 != "string")
            throw new TypeError("First argument must be a string");
          if (e3 === "")
            return [];
          var t3, n3 = e3.match(i);
          return n3 && n3[1] && (t3 = n3[1]), o(r2(e3), null, t3);
        };
      }, 755: (e2, t2, n2) => {
        for (var r2, o = n2(692), i = n2(497), a = o.CASE_SENSITIVE_TAG_NAMES, l = i.Comment, c = i.Element, s = i.ProcessingInstruction, u = i.Text, f = {}, p = 0, d = a.length; p < d; p++)
          r2 = a[p], f[r2.toLowerCase()] = r2;
        function y(e3) {
          for (var t3, n3 = {}, r3 = 0, o2 = e3.length; r3 < o2; r3++)
            n3[(t3 = e3[r3]).name] = t3.value;
          return n3;
        }
        function m(e3) {
          return function(e4) {
            return f[e4];
          }(e3 = e3.toLowerCase()) || e3;
        }
        e2.exports = { formatAttributes: y, formatDOM: function e3(t3, n3, r3) {
          n3 = n3 || null;
          for (var o2 = [], i2 = 0, a2 = t3.length; i2 < a2; i2++) {
            var f2, p2 = t3[i2];
            switch (p2.nodeType) {
              case 1:
                (f2 = new c(m(p2.nodeName), y(p2.attributes))).children = e3(p2.childNodes, f2);
                break;
              case 3:
                f2 = new u(p2.nodeValue);
                break;
              case 8:
                f2 = new l(p2.nodeValue);
                break;
              default:
                continue;
            }
            var d2 = o2[i2 - 1] || null;
            d2 && (d2.next = f2), f2.parent = n3, f2.prev = d2, f2.next = null, o2.push(f2);
          }
          return r3 && ((f2 = new s(r3.substring(0, r3.indexOf(" ")).toLowerCase(), r3)).next = o2[0] || null, f2.parent = n3, o2.unshift(f2), o2[1] && (o2[1].prev = o2[0])), o2;
        }, isIE: function() {
          return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
        } };
      }, 356: (e2, t2, n2) => {
        var r2 = n2(495), o = n2(578), i = n2(995);
        i = typeof i.default == "function" ? i.default : i;
        var a = { lowerCaseAttributeNames: false };
        function l(e3, t3) {
          if (typeof e3 != "string")
            throw new TypeError("First argument must be a string");
          return e3 === "" ? [] : r2(i(e3, (t3 = t3 || {}).htmlparser2 || a), t3);
        }
        l.domToReact = r2, l.htmlToDOM = i, l.attributesToProps = o, l.Element = n2(497).Element, e2.exports = l, e2.exports.default = l;
      }, 578: (e2, t2, n2) => {
        var r2 = n2(583), o = n2(370);
        function i(e3) {
          return r2.possibleStandardNames[e3];
        }
        e2.exports = function(e3) {
          var t3, n3, a, l, c, s = {}, u = (e3 = e3 || {}).type && { reset: true, submit: true }[e3.type];
          for (t3 in e3)
            if (a = e3[t3], r2.isCustomAttribute(t3))
              s[t3] = a;
            else if (l = i(n3 = t3.toLowerCase()))
              switch (c = r2.getPropertyInfo(l), l !== "checked" && l !== "value" || u || (l = i("default" + n3)), s[l] = a, c && c.type) {
                case r2.BOOLEAN:
                  s[l] = true;
                  break;
                case r2.OVERLOADED_BOOLEAN:
                  a === "" && (s[l] = true);
              }
            else
              o.PRESERVE_CUSTOM_ATTRIBUTES && (s[t3] = a);
          return o.setStyleProp(e3.style, s), s;
        };
      }, 495: (e2, t2, n2) => {
        var r2 = n2(597), o = n2(578), i = n2(370), a = i.setStyleProp, l = i.canTextBeChildOfNode;
        function c(e3) {
          return i.PRESERVE_CUSTOM_ATTRIBUTES && e3.type === "tag" && i.isCustomComponent(e3.name, e3.attribs);
        }
        e2.exports = function e3(t3, n3) {
          for (var i2, s, u, f, p, d = (n3 = n3 || {}).library || r2, y = d.cloneElement, m = d.createElement, h = d.isValidElement, g = [], b = typeof n3.replace == "function", v = n3.trim, x = 0, S = t3.length; x < S; x++)
            if (i2 = t3[x], b && h(u = n3.replace(i2)))
              S > 1 && (u = y(u, { key: u.key || x })), g.push(u);
            else if (i2.type !== "text") {
              switch (f = i2.attribs, c(i2) ? a(f.style, f) : f && (f = o(f)), p = null, i2.type) {
                case "script":
                case "style":
                  i2.children[0] && (f.dangerouslySetInnerHTML = { __html: i2.children[0].data });
                  break;
                case "tag":
                  i2.name === "textarea" && i2.children[0] ? f.defaultValue = i2.children[0].data : i2.children && i2.children.length && (p = e3(i2.children, n3));
                  break;
                default:
                  continue;
              }
              S > 1 && (f.key = x), g.push(m(i2.name, f, p));
            } else {
              if ((s = !i2.data.trim().length) && i2.parent && !l(i2.parent))
                continue;
              if (v && s)
                continue;
              g.push(i2.data);
            }
          return g.length === 1 ? g[0] : g;
        };
      }, 370: (e2, t2, n2) => {
        function r2(e3) {
          return r2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, r2(e3);
        }
        var o = n2(597), i = n2(405).default, a = { reactCompat: true }, l = o.version.split(".")[0] >= 16, c = /* @__PURE__ */ new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]);
        e2.exports = { PRESERVE_CUSTOM_ATTRIBUTES: l, invertObject: function(e3, t3) {
          if (!e3 || r2(e3) !== "object")
            throw new TypeError("First argument must be an object");
          var n3, o2, i2 = typeof t3 == "function", a2 = {}, l2 = {};
          for (n3 in e3)
            o2 = e3[n3], i2 && (a2 = t3(n3, o2)) && a2.length === 2 ? l2[a2[0]] = a2[1] : typeof o2 == "string" && (l2[o2] = n3);
          return l2;
        }, isCustomComponent: function(e3, t3) {
          if (e3.indexOf("-") === -1)
            return t3 && typeof t3.is == "string";
          switch (e3) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }, setStyleProp: function(e3, t3) {
          if (e3 != null)
            try {
              t3.style = i(e3, a);
            } catch (e4) {
              t3.style = {};
            }
        }, canTextBeChildOfNode: function(e3) {
          return !c.has(e3.name);
        }, elementsWithNoTextChildren: c };
      }, 242: (e2) => {
        var t2 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n2 = /\n/g, r2 = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, c = /^\s+|\s+$/g, s = "";
        function u(e3) {
          return e3 ? e3.replace(c, s) : s;
        }
        e2.exports = function(e3, c2) {
          if (typeof e3 != "string")
            throw new TypeError("First argument must be a string");
          if (!e3)
            return [];
          c2 = c2 || {};
          var f = 1, p = 1;
          function d(e4) {
            var t3 = e4.match(n2);
            t3 && (f += t3.length);
            var r3 = e4.lastIndexOf("\n");
            p = ~r3 ? e4.length - r3 : p + e4.length;
          }
          function y() {
            var e4 = { line: f, column: p };
            return function(t3) {
              return t3.position = new m(e4), v(), t3;
            };
          }
          function m(e4) {
            this.start = e4, this.end = { line: f, column: p }, this.source = c2.source;
          }
          m.prototype.content = e3;
          var h = [];
          function g(t3) {
            var n3 = new Error(c2.source + ":" + f + ":" + p + ": " + t3);
            if (n3.reason = t3, n3.filename = c2.source, n3.line = f, n3.column = p, n3.source = e3, !c2.silent)
              throw n3;
            h.push(n3);
          }
          function b(t3) {
            var n3 = t3.exec(e3);
            if (n3) {
              var r3 = n3[0];
              return d(r3), e3 = e3.slice(r3.length), n3;
            }
          }
          function v() {
            b(r2);
          }
          function x(e4) {
            var t3;
            for (e4 = e4 || []; t3 = S(); )
              t3 !== false && e4.push(t3);
            return e4;
          }
          function S() {
            var t3 = y();
            if (e3.charAt(0) == "/" && e3.charAt(1) == "*") {
              for (var n3 = 2; s != e3.charAt(n3) && (e3.charAt(n3) != "*" || e3.charAt(n3 + 1) != "/"); )
                ++n3;
              if (n3 += 2, s === e3.charAt(n3 - 1))
                return g("End of comment missing");
              var r3 = e3.slice(2, n3 - 2);
              return p += 2, d(r3), e3 = e3.slice(n3), p += 2, t3({ type: "comment", comment: r3 });
            }
          }
          function w() {
            var e4 = y(), n3 = b(o);
            if (n3) {
              if (S(), !b(i))
                return g("property missing ':'");
              var r3 = b(a), c3 = e4({ type: "declaration", property: u(n3[0].replace(t2, s)), value: r3 ? u(r3[0].replace(t2, s)) : s });
              return b(l), c3;
            }
          }
          return v(), function() {
            var e4, t3 = [];
            for (x(t3); e4 = w(); )
              e4 !== false && (t3.push(e4), x(t3));
            return t3;
          }();
        };
      }, 180: (e2) => {
        "use strict";
        var t2 = Object.getOwnPropertySymbols, n2 = Object.prototype.hasOwnProperty, r2 = Object.prototype.propertyIsEnumerable;
        function o(e3) {
          if (e3 == null)
            throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e3);
        }
        e2.exports = function() {
          try {
            if (!Object.assign)
              return false;
            var e3 = new String("abc");
            if (e3[5] = "de", Object.getOwnPropertyNames(e3)[0] === "5")
              return false;
            for (var t3 = {}, n3 = 0; n3 < 10; n3++)
              t3["_" + String.fromCharCode(n3)] = n3;
            if (Object.getOwnPropertyNames(t3).map(function(e4) {
              return t3[e4];
            }).join("") !== "0123456789")
              return false;
            var r3 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e4) {
              r3[e4] = e4;
            }), Object.keys(Object.assign({}, r3)).join("") === "abcdefghijklmnopqrst";
          } catch (e4) {
            return false;
          }
        }() ? Object.assign : function(e3, i) {
          for (var a, l, c = o(e3), s = 1; s < arguments.length; s++) {
            for (var u in a = Object(arguments[s]))
              n2.call(a, u) && (c[u] = a[u]);
            if (t2) {
              l = t2(a);
              for (var f = 0; f < l.length; f++)
                r2.call(a, l[f]) && (c[l[f]] = a[l[f]]);
            }
          }
          return c;
        };
      }, 583: (e2, t2, n2) => {
        "use strict";
        function r2(e3, t3) {
          (t3 == null || t3 > e3.length) && (t3 = e3.length);
          for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++)
            r3[n3] = e3[n3];
          return r3;
        }
        function o(e3, t3, n3, r3, o2, i2, a2) {
          this.acceptsBooleans = t3 === 2 || t3 === 3 || t3 === 4, this.attributeName = r3, this.attributeNamespace = o2, this.mustUseProperty = n3, this.propertyName = e3, this.type = t3, this.sanitizeURL = i2, this.removeEmptyString = a2;
        }
        Object.defineProperty(t2, "__esModule", { value: true });
        var i = {};
        ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(function(e3) {
          i[e3] = new o(e3, 0, false, e3, null, false, false);
        }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e3) {
          var t3, n3, a2 = (n3 = 2, function(e4) {
            if (Array.isArray(e4))
              return e4;
          }(t3 = e3) || function(e4, t4) {
            var n4 = e4 == null ? null : typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
            if (n4 != null) {
              var r3, o2, i2 = [], a3 = true, l3 = false;
              try {
                for (n4 = n4.call(e4); !(a3 = (r3 = n4.next()).done) && (i2.push(r3.value), !t4 || i2.length !== t4); a3 = true)
                  ;
              } catch (e5) {
                l3 = true, o2 = e5;
              } finally {
                try {
                  a3 || n4.return == null || n4.return();
                } finally {
                  if (l3)
                    throw o2;
                }
              }
              return i2;
            }
          }(t3, n3) || function(e4, t4) {
            if (e4) {
              if (typeof e4 == "string")
                return r2(e4, t4);
              var n4 = Object.prototype.toString.call(e4).slice(8, -1);
              return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? r2(e4, t4) : void 0;
            }
          }(t3, n3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }()), l2 = a2[0], c2 = a2[1];
          i[l2] = new o(l2, 1, false, c2, null, false, false);
        }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e3) {
          i[e3] = new o(e3, 2, false, e3.toLowerCase(), null, false, false);
        }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e3) {
          i[e3] = new o(e3, 2, false, e3, null, false, false);
        }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function(e3) {
          i[e3] = new o(e3, 3, false, e3.toLowerCase(), null, false, false);
        }), ["checked", "multiple", "muted", "selected"].forEach(function(e3) {
          i[e3] = new o(e3, 3, true, e3, null, false, false);
        }), ["capture", "download"].forEach(function(e3) {
          i[e3] = new o(e3, 4, false, e3, null, false, false);
        }), ["cols", "rows", "size", "span"].forEach(function(e3) {
          i[e3] = new o(e3, 6, false, e3, null, false, false);
        }), ["rowSpan", "start"].forEach(function(e3) {
          i[e3] = new o(e3, 5, false, e3.toLowerCase(), null, false, false);
        });
        var a = /[\-\:]([a-z])/g, l = function(e3) {
          return e3[1].toUpperCase();
        };
        ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function(e3) {
          var t3 = e3.replace(a, l);
          i[t3] = new o(t3, 1, false, e3, null, false, false);
        }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function(e3) {
          var t3 = e3.replace(a, l);
          i[t3] = new o(t3, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
        }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e3) {
          var t3 = e3.replace(a, l);
          i[t3] = new o(t3, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
        }), ["tabIndex", "crossOrigin"].forEach(function(e3) {
          i[e3] = new o(e3, 1, false, e3.toLowerCase(), null, false, false);
        }), i.xlinkHref = new o("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e3) {
          i[e3] = new o(e3, 1, false, e3.toLowerCase(), null, true, true);
        });
        var c = n2(256), s = c.CAMELCASE, u = c.SAME, f = c.possibleStandardNames, p = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), d = Object.keys(f).reduce(function(e3, t3) {
          var n3 = f[t3];
          return n3 === u ? e3[t3] = t3 : n3 === s ? e3[t3.toLowerCase()] = t3 : e3[t3] = n3, e3;
        }, {});
        t2.BOOLEAN = 3, t2.BOOLEANISH_STRING = 2, t2.NUMERIC = 5, t2.OVERLOADED_BOOLEAN = 4, t2.POSITIVE_NUMERIC = 6, t2.RESERVED = 0, t2.STRING = 1, t2.getPropertyInfo = function(e3) {
          return i.hasOwnProperty(e3) ? i[e3] : null;
        }, t2.isCustomAttribute = p, t2.possibleStandardNames = d;
      }, 256: (e2, t2) => {
        t2.SAME = 0, t2.CAMELCASE = 1, t2.possibleStandardNames = { accept: 0, acceptCharset: 1, "accept-charset": "acceptCharset", accessKey: 1, action: 0, allowFullScreen: 1, alt: 0, as: 0, async: 0, autoCapitalize: 1, autoComplete: 1, autoCorrect: 1, autoFocus: 1, autoPlay: 1, autoSave: 1, capture: 0, cellPadding: 1, cellSpacing: 1, challenge: 0, charSet: 1, checked: 0, children: 0, cite: 0, class: "className", classID: 1, className: 1, cols: 0, colSpan: 1, content: 0, contentEditable: 1, contextMenu: 1, controls: 0, controlsList: 1, coords: 0, crossOrigin: 1, dangerouslySetInnerHTML: 1, data: 0, dateTime: 1, default: 0, defaultChecked: 1, defaultValue: 1, defer: 0, dir: 0, disabled: 0, disablePictureInPicture: 1, disableRemotePlayback: 1, download: 0, draggable: 0, encType: 1, enterKeyHint: 1, for: "htmlFor", form: 0, formMethod: 1, formAction: 1, formEncType: 1, formNoValidate: 1, formTarget: 1, frameBorder: 1, headers: 0, height: 0, hidden: 0, high: 0, href: 0, hrefLang: 1, htmlFor: 1, httpEquiv: 1, "http-equiv": "httpEquiv", icon: 0, id: 0, innerHTML: 1, inputMode: 1, integrity: 0, is: 0, itemID: 1, itemProp: 1, itemRef: 1, itemScope: 1, itemType: 1, keyParams: 1, keyType: 1, kind: 0, label: 0, lang: 0, list: 0, loop: 0, low: 0, manifest: 0, marginWidth: 1, marginHeight: 1, max: 0, maxLength: 1, media: 0, mediaGroup: 1, method: 0, min: 0, minLength: 1, multiple: 0, muted: 0, name: 0, noModule: 1, nonce: 0, noValidate: 1, open: 0, optimum: 0, pattern: 0, placeholder: 0, playsInline: 1, poster: 0, preload: 0, profile: 0, radioGroup: 1, readOnly: 1, referrerPolicy: 1, rel: 0, required: 0, reversed: 0, role: 0, rows: 0, rowSpan: 1, sandbox: 0, scope: 0, scoped: 0, scrolling: 0, seamless: 0, selected: 0, shape: 0, size: 0, sizes: 0, span: 0, spellCheck: 1, src: 0, srcDoc: 1, srcLang: 1, srcSet: 1, start: 0, step: 0, style: 0, summary: 0, tabIndex: 1, target: 0, title: 0, type: 0, useMap: 1, value: 0, width: 0, wmode: 0, wrap: 0, about: 0, accentHeight: 1, "accent-height": "accentHeight", accumulate: 0, additive: 0, alignmentBaseline: 1, "alignment-baseline": "alignmentBaseline", allowReorder: 1, alphabetic: 0, amplitude: 0, arabicForm: 1, "arabic-form": "arabicForm", ascent: 0, attributeName: 1, attributeType: 1, autoReverse: 1, azimuth: 0, baseFrequency: 1, baselineShift: 1, "baseline-shift": "baselineShift", baseProfile: 1, bbox: 0, begin: 0, bias: 0, by: 0, calcMode: 1, capHeight: 1, "cap-height": "capHeight", clip: 0, clipPath: 1, "clip-path": "clipPath", clipPathUnits: 1, clipRule: 1, "clip-rule": "clipRule", color: 0, colorInterpolation: 1, "color-interpolation": "colorInterpolation", colorInterpolationFilters: 1, "color-interpolation-filters": "colorInterpolationFilters", colorProfile: 1, "color-profile": "colorProfile", colorRendering: 1, "color-rendering": "colorRendering", contentScriptType: 1, contentStyleType: 1, cursor: 0, cx: 0, cy: 0, d: 0, datatype: 0, decelerate: 0, descent: 0, diffuseConstant: 1, direction: 0, display: 0, divisor: 0, dominantBaseline: 1, "dominant-baseline": "dominantBaseline", dur: 0, dx: 0, dy: 0, edgeMode: 1, elevation: 0, enableBackground: 1, "enable-background": "enableBackground", end: 0, exponent: 0, externalResourcesRequired: 1, fill: 0, fillOpacity: 1, "fill-opacity": "fillOpacity", fillRule: 1, "fill-rule": "fillRule", filter: 0, filterRes: 1, filterUnits: 1, floodOpacity: 1, "flood-opacity": "floodOpacity", floodColor: 1, "flood-color": "floodColor", focusable: 0, fontFamily: 1, "font-family": "fontFamily", fontSize: 1, "font-size": "fontSize", fontSizeAdjust: 1, "font-size-adjust": "fontSizeAdjust", fontStretch: 1, "font-stretch": "fontStretch", fontStyle: 1, "font-style": "fontStyle", fontVariant: 1, "font-variant": "fontVariant", fontWeight: 1, "font-weight": "fontWeight", format: 0, from: 0, fx: 0, fy: 0, g1: 0, g2: 0, glyphName: 1, "glyph-name": "glyphName", glyphOrientationHorizontal: 1, "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphOrientationVertical: 1, "glyph-orientation-vertical": "glyphOrientationVertical", glyphRef: 1, gradientTransform: 1, gradientUnits: 1, hanging: 0, horizAdvX: 1, "horiz-adv-x": "horizAdvX", horizOriginX: 1, "horiz-origin-x": "horizOriginX", ideographic: 0, imageRendering: 1, "image-rendering": "imageRendering", in2: 0, in: 0, inlist: 0, intercept: 0, k1: 0, k2: 0, k3: 0, k4: 0, k: 0, kernelMatrix: 1, kernelUnitLength: 1, kerning: 0, keyPoints: 1, keySplines: 1, keyTimes: 1, lengthAdjust: 1, letterSpacing: 1, "letter-spacing": "letterSpacing", lightingColor: 1, "lighting-color": "lightingColor", limitingConeAngle: 1, local: 0, markerEnd: 1, "marker-end": "markerEnd", markerHeight: 1, markerMid: 1, "marker-mid": "markerMid", markerStart: 1, "marker-start": "markerStart", markerUnits: 1, markerWidth: 1, mask: 0, maskContentUnits: 1, maskUnits: 1, mathematical: 0, mode: 0, numOctaves: 1, offset: 0, opacity: 0, operator: 0, order: 0, orient: 0, orientation: 0, origin: 0, overflow: 0, overlinePosition: 1, "overline-position": "overlinePosition", overlineThickness: 1, "overline-thickness": "overlineThickness", paintOrder: 1, "paint-order": "paintOrder", panose1: 0, "panose-1": "panose1", pathLength: 1, patternContentUnits: 1, patternTransform: 1, patternUnits: 1, pointerEvents: 1, "pointer-events": "pointerEvents", points: 0, pointsAtX: 1, pointsAtY: 1, pointsAtZ: 1, prefix: 0, preserveAlpha: 1, preserveAspectRatio: 1, primitiveUnits: 1, property: 0, r: 0, radius: 0, refX: 1, refY: 1, renderingIntent: 1, "rendering-intent": "renderingIntent", repeatCount: 1, repeatDur: 1, requiredExtensions: 1, requiredFeatures: 1, resource: 0, restart: 0, result: 0, results: 0, rotate: 0, rx: 0, ry: 0, scale: 0, security: 0, seed: 0, shapeRendering: 1, "shape-rendering": "shapeRendering", slope: 0, spacing: 0, specularConstant: 1, specularExponent: 1, speed: 0, spreadMethod: 1, startOffset: 1, stdDeviation: 1, stemh: 0, stemv: 0, stitchTiles: 1, stopColor: 1, "stop-color": "stopColor", stopOpacity: 1, "stop-opacity": "stopOpacity", strikethroughPosition: 1, "strikethrough-position": "strikethroughPosition", strikethroughThickness: 1, "strikethrough-thickness": "strikethroughThickness", string: 0, stroke: 0, strokeDasharray: 1, "stroke-dasharray": "strokeDasharray", strokeDashoffset: 1, "stroke-dashoffset": "strokeDashoffset", strokeLinecap: 1, "stroke-linecap": "strokeLinecap", strokeLinejoin: 1, "stroke-linejoin": "strokeLinejoin", strokeMiterlimit: 1, "stroke-miterlimit": "strokeMiterlimit", strokeWidth: 1, "stroke-width": "strokeWidth", strokeOpacity: 1, "stroke-opacity": "strokeOpacity", suppressContentEditableWarning: 1, suppressHydrationWarning: 1, surfaceScale: 1, systemLanguage: 1, tableValues: 1, targetX: 1, targetY: 1, textAnchor: 1, "text-anchor": "textAnchor", textDecoration: 1, "text-decoration": "textDecoration", textLength: 1, textRendering: 1, "text-rendering": "textRendering", to: 0, transform: 0, typeof: 0, u1: 0, u2: 0, underlinePosition: 1, "underline-position": "underlinePosition", underlineThickness: 1, "underline-thickness": "underlineThickness", unicode: 0, unicodeBidi: 1, "unicode-bidi": "unicodeBidi", unicodeRange: 1, "unicode-range": "unicodeRange", unitsPerEm: 1, "units-per-em": "unitsPerEm", unselectable: 0, vAlphabetic: 1, "v-alphabetic": "vAlphabetic", values: 0, vectorEffect: 1, "vector-effect": "vectorEffect", version: 0, vertAdvY: 1, "vert-adv-y": "vertAdvY", vertOriginX: 1, "vert-origin-x": "vertOriginX", vertOriginY: 1, "vert-origin-y": "vertOriginY", vHanging: 1, "v-hanging": "vHanging", vIdeographic: 1, "v-ideographic": "vIdeographic", viewBox: 1, viewTarget: 1, visibility: 0, vMathematical: 1, "v-mathematical": "vMathematical", vocab: 0, widths: 0, wordSpacing: 1, "word-spacing": "wordSpacing", writingMode: 1, "writing-mode": "writingMode", x1: 0, x2: 0, x: 0, xChannelSelector: 1, xHeight: 1, "x-height": "xHeight", xlinkActuate: 1, "xlink:actuate": "xlinkActuate", xlinkArcrole: 1, "xlink:arcrole": "xlinkArcrole", xlinkHref: 1, "xlink:href": "xlinkHref", xlinkRole: 1, "xlink:role": "xlinkRole", xlinkShow: 1, "xlink:show": "xlinkShow", xlinkTitle: 1, "xlink:title": "xlinkTitle", xlinkType: 1, "xlink:type": "xlinkType", xmlBase: 1, "xml:base": "xmlBase", xmlLang: 1, "xml:lang": "xmlLang", xmlns: 0, "xml:space": "xmlSpace", xmlnsXlink: 1, "xmlns:xlink": "xmlnsXlink", xmlSpace: 1, y1: 0, y2: 0, y: 0, yChannelSelector: 1, z: 0, zoomAndPan: 1 };
      }, 318: (e2, t2, n2) => {
        "use strict";
        function r2(e3) {
          return r2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, r2(e3);
        }
        var o = n2(180), i = 60103, a = 60106;
        t2.Fragment = 60107, t2.StrictMode = 60108, t2.Profiler = 60114;
        var l = 60109, c = 60110, s = 60112;
        t2.Suspense = 60113;
        var u = 60115, f = 60116;
        if (typeof Symbol == "function" && Symbol.for) {
          var p = Symbol.for;
          i = p("react.element"), a = p("react.portal"), t2.Fragment = p("react.fragment"), t2.StrictMode = p("react.strict_mode"), t2.Profiler = p("react.profiler"), l = p("react.provider"), c = p("react.context"), s = p("react.forward_ref"), t2.Suspense = p("react.suspense"), u = p("react.memo"), f = p("react.lazy");
        }
        var d = typeof Symbol == "function" && Symbol.iterator;
        function y(e3) {
          for (var t3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, n3 = 1; n3 < arguments.length; n3++)
            t3 += "&args[]=" + encodeURIComponent(arguments[n3]);
          return "Minified React error #" + e3 + "; visit " + t3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var m = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, h = {};
        function g(e3, t3, n3) {
          this.props = e3, this.context = t3, this.refs = h, this.updater = n3 || m;
        }
        function b() {
        }
        function v(e3, t3, n3) {
          this.props = e3, this.context = t3, this.refs = h, this.updater = n3 || m;
        }
        g.prototype.isReactComponent = {}, g.prototype.setState = function(e3, t3) {
          if (r2(e3) !== "object" && typeof e3 != "function" && e3 != null)
            throw Error(y(85));
          this.updater.enqueueSetState(this, e3, t3, "setState");
        }, g.prototype.forceUpdate = function(e3) {
          this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
        }, b.prototype = g.prototype;
        var x = v.prototype = new b();
        x.constructor = v, o(x, g.prototype), x.isPureReactComponent = true;
        var S = { current: null }, w = Object.prototype.hasOwnProperty, E = { key: true, ref: true, __self: true, __source: true };
        function k(e3, t3, n3) {
          var r3, o2 = {}, a2 = null, l2 = null;
          if (t3 != null)
            for (r3 in t3.ref !== void 0 && (l2 = t3.ref), t3.key !== void 0 && (a2 = "" + t3.key), t3)
              w.call(t3, r3) && !E.hasOwnProperty(r3) && (o2[r3] = t3[r3]);
          var c2 = arguments.length - 2;
          if (c2 === 1)
            o2.children = n3;
          else if (1 < c2) {
            for (var s2 = Array(c2), u2 = 0; u2 < c2; u2++)
              s2[u2] = arguments[u2 + 2];
            o2.children = s2;
          }
          if (e3 && e3.defaultProps)
            for (r3 in c2 = e3.defaultProps)
              o2[r3] === void 0 && (o2[r3] = c2[r3]);
          return { $$typeof: i, type: e3, key: a2, ref: l2, props: o2, _owner: S.current };
        }
        function j(e3) {
          return r2(e3) === "object" && e3 !== null && e3.$$typeof === i;
        }
        var O = /\/+/g;
        function C(e3, t3) {
          return r2(e3) === "object" && e3 !== null && e3.key != null ? function(e4) {
            var t4 = { "=": "=0", ":": "=2" };
            return "$" + e4.replace(/[=:]/g, function(e5) {
              return t4[e5];
            });
          }("" + e3.key) : t3.toString(36);
        }
        function N(e3, t3, n3, o2, l2) {
          var c2 = r2(e3);
          c2 !== "undefined" && c2 !== "boolean" || (e3 = null);
          var s2 = false;
          if (e3 === null)
            s2 = true;
          else
            switch (c2) {
              case "string":
              case "number":
                s2 = true;
                break;
              case "object":
                switch (e3.$$typeof) {
                  case i:
                  case a:
                    s2 = true;
                }
            }
          if (s2)
            return l2 = l2(s2 = e3), e3 = o2 === "" ? "." + C(s2, 0) : o2, Array.isArray(l2) ? (n3 = "", e3 != null && (n3 = e3.replace(O, "$&/") + "/"), N(l2, t3, n3, "", function(e4) {
              return e4;
            })) : l2 != null && (j(l2) && (l2 = function(e4, t4) {
              return { $$typeof: i, type: e4.type, key: t4, ref: e4.ref, props: e4.props, _owner: e4._owner };
            }(l2, n3 + (!l2.key || s2 && s2.key === l2.key ? "" : ("" + l2.key).replace(O, "$&/") + "/") + e3)), t3.push(l2)), 1;
          if (s2 = 0, o2 = o2 === "" ? "." : o2 + ":", Array.isArray(e3))
            for (var u2 = 0; u2 < e3.length; u2++) {
              var f2 = o2 + C(c2 = e3[u2], u2);
              s2 += N(c2, t3, n3, f2, l2);
            }
          else if (f2 = function(e4) {
            return e4 === null || r2(e4) !== "object" ? null : typeof (e4 = d && e4[d] || e4["@@iterator"]) == "function" ? e4 : null;
          }(e3), typeof f2 == "function")
            for (e3 = f2.call(e3), u2 = 0; !(c2 = e3.next()).done; )
              s2 += N(c2 = c2.value, t3, n3, f2 = o2 + C(c2, u2++), l2);
          else if (c2 === "object")
            throw t3 = "" + e3, Error(y(31, t3 === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t3));
          return s2;
        }
        function T(e3, t3, n3) {
          if (e3 == null)
            return e3;
          var r3 = [], o2 = 0;
          return N(e3, r3, "", "", function(e4) {
            return t3.call(n3, e4, o2++);
          }), r3;
        }
        function D(e3) {
          if (e3._status === -1) {
            var t3 = e3._result;
            t3 = t3(), e3._status = 0, e3._result = t3, t3.then(function(t4) {
              e3._status === 0 && (t4 = t4.default, e3._status = 1, e3._result = t4);
            }, function(t4) {
              e3._status === 0 && (e3._status = 2, e3._result = t4);
            });
          }
          if (e3._status === 1)
            return e3._result;
          throw e3._result;
        }
        var A = { current: null };
        function P() {
          var e3 = A.current;
          if (e3 === null)
            throw Error(y(321));
          return e3;
        }
        var _ = { ReactCurrentDispatcher: A, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: S, IsSomeRendererActing: { current: false }, assign: o };
        t2.Children = { map: T, forEach: function(e3, t3, n3) {
          T(e3, function() {
            t3.apply(this, arguments);
          }, n3);
        }, count: function(e3) {
          var t3 = 0;
          return T(e3, function() {
            t3++;
          }), t3;
        }, toArray: function(e3) {
          return T(e3, function(e4) {
            return e4;
          }) || [];
        }, only: function(e3) {
          if (!j(e3))
            throw Error(y(143));
          return e3;
        } }, t2.Component = g, t2.PureComponent = v, t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _, t2.cloneElement = function(e3, t3, n3) {
          if (e3 == null)
            throw Error(y(267, e3));
          var r3 = o({}, e3.props), a2 = e3.key, l2 = e3.ref, c2 = e3._owner;
          if (t3 != null) {
            if (t3.ref !== void 0 && (l2 = t3.ref, c2 = S.current), t3.key !== void 0 && (a2 = "" + t3.key), e3.type && e3.type.defaultProps)
              var s2 = e3.type.defaultProps;
            for (u2 in t3)
              w.call(t3, u2) && !E.hasOwnProperty(u2) && (r3[u2] = t3[u2] === void 0 && s2 !== void 0 ? s2[u2] : t3[u2]);
          }
          var u2 = arguments.length - 2;
          if (u2 === 1)
            r3.children = n3;
          else if (1 < u2) {
            s2 = Array(u2);
            for (var f2 = 0; f2 < u2; f2++)
              s2[f2] = arguments[f2 + 2];
            r3.children = s2;
          }
          return { $$typeof: i, type: e3.type, key: a2, ref: l2, props: r3, _owner: c2 };
        }, t2.createContext = function(e3, t3) {
          return t3 === void 0 && (t3 = null), (e3 = { $$typeof: c, _calculateChangedBits: t3, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: l, _context: e3 }, e3.Consumer = e3;
        }, t2.createElement = k, t2.createFactory = function(e3) {
          var t3 = k.bind(null, e3);
          return t3.type = e3, t3;
        }, t2.createRef = function() {
          return { current: null };
        }, t2.forwardRef = function(e3) {
          return { $$typeof: s, render: e3 };
        }, t2.isValidElement = j, t2.lazy = function(e3) {
          return { $$typeof: f, _payload: { _status: -1, _result: e3 }, _init: D };
        }, t2.memo = function(e3, t3) {
          return { $$typeof: u, type: e3, compare: t3 === void 0 ? null : t3 };
        }, t2.useCallback = function(e3, t3) {
          return P().useCallback(e3, t3);
        }, t2.useContext = function(e3, t3) {
          return P().useContext(e3, t3);
        }, t2.useDebugValue = function() {
        }, t2.useEffect = function(e3, t3) {
          return P().useEffect(e3, t3);
        }, t2.useImperativeHandle = function(e3, t3, n3) {
          return P().useImperativeHandle(e3, t3, n3);
        }, t2.useLayoutEffect = function(e3, t3) {
          return P().useLayoutEffect(e3, t3);
        }, t2.useMemo = function(e3, t3) {
          return P().useMemo(e3, t3);
        }, t2.useReducer = function(e3, t3, n3) {
          return P().useReducer(e3, t3, n3);
        }, t2.useRef = function(e3) {
          return P().useRef(e3);
        }, t2.useState = function(e3) {
          return P().useState(e3);
        }, t2.version = "17.0.2";
      }, 597: (e2, t2, n2) => {
        "use strict";
        e2.exports = n2(318);
      }, 405: function(e2, t2, n2) {
        "use strict";
        var r2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        t2.__esModule = true;
        var o = r2(n2(558)), i = n2(207);
        t2.default = function(e3, t3) {
          var n3 = {};
          return e3 && typeof e3 == "string" ? (o.default(e3, function(e4, r3) {
            e4 && r3 && (n3[i.camelCase(e4, t3)] = r3);
          }), n3) : n3;
        };
      }, 207: (e2, t2) => {
        "use strict";
        t2.__esModule = true, t2.camelCase = void 0;
        var n2 = /^--[a-zA-Z0-9-]+$/, r2 = /-([a-z])/g, o = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = function(e3, t3) {
          return t3.toUpperCase();
        }, l = function(e3, t3) {
          return t3 + "-";
        };
        t2.camelCase = function(e3, t3) {
          return t3 === void 0 && (t3 = {}), function(e4) {
            return !e4 || o.test(e4) || n2.test(e4);
          }(e3) ? e3 : (e3 = e3.toLowerCase(), t3.reactCompat || (e3 = e3.replace(i, l)), e3.replace(r2, a));
        };
      }, 558: (e2, t2, n2) => {
        var r2 = n2(242);
        e2.exports = function(e3, t3) {
          var n3, o = null;
          if (!e3 || typeof e3 != "string")
            return o;
          for (var i, a, l = r2(e3), c = typeof t3 == "function", s = 0, u = l.length; s < u; s++)
            i = (n3 = l[s]).property, a = n3.value, c ? t3(i, a, n3) : a && (o || (o = {}), o[i] = a);
          return o;
        };
      }, 787: (e2, t2, n2) => {
        "use strict";
        n2.r(t2), n2.d(t2, { default: () => l });
        var r2 = n2(973), o = n2.n(r2), i = n2(681), a = n2.n(i)()(o());
        a.push([e2.id, "@supports (-webkit-appearance: none) or (-moz-appearance: none) {\n  input[type='checkbox'] {\n    --active: #275EFE;\n    --active-inner: #fff;\n    --focus: 2px rgba(39, 94, 254, .3);\n    --border: #BBC1E1;\n    --border-hover: #275EFE;\n    --background: #fff;\n    --disabled: #F6F8FF;\n    --disabled-inner: #E1E6F9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-transition: background .3s, border-color .3s, box-shadow .2s;\n  }\n  input[type='checkbox']:after {\n    content: '';\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    -webkit-transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    width: 5px;\n    height: 9px;\n    border: 2px solid var(--active-inner);\n    border-top: 0;\n    border-left: 0;\n    left: 7px;\n    top: 4px;\n    opacity: var(--o, 0);\n    -webkit-transform: rotate(var(--r, 20deg));\n    transform: rotate(var(--r, 20deg));\n  }\n  input[type='checkbox']:checked {\n    --b: var(--active);\n    --bc: var(--active);\n    --d-o: .3s;\n    --d-t: .6s;\n    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);\n    --r: 43deg;\n    --o: 1;\n  }\n  input[type='checkbox']:disabled {\n    --b: var(--disabled);\n    cursor: not-allowed;\n    opacity: .9;\n  }\n  input[type='checkbox']:disabled:checked  {\n    --b: var(--disabled-inner);\n    --bc: var(--border);\n  }\n  input[type='checkbox']:disabled + label  {\n    cursor: not-allowed;\n  }\n  input[type='checkbox']:hover:not(:checked):not(:disabled) {\n    --bc: var(--border-hover);\n  }\n  input[type='checkbox']:focus {\n    box-shadow: 0 0 0 var(--focus);\n  }\n}\nul {\n  margin: 12px;\n  padding: 0;\n  list-style: none;\n  width: 100%;\n  max-width: 320px;\n}\nul li {\n  margin: 16px 0;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nhtml { box-sizing: border-box; }\n* { box-sizing: inherit; }\n*:before, *:after { box-sizing: inherit; }\n", ""]);
        const l = a;
      }, 962: (e2, t2, n2) => {
        var r2 = n2(787), o = n2(718), i = typeof r2 == "string" ? [[e2.id, r2, ""]] : r2;
        (t2 = e2.exports = r2.locals || {})._getContent = function() {
          return i;
        }, t2._getCss = function() {
          return "" + r2;
        }, t2._insertCss = function(e3) {
          return o(i, e3);
        };
      }, 718: (e2) => {
        "use strict";
        var t2 = {};
        function n2(e3) {
          e3.forEach(function(e4) {
            if (--t2[e4] <= 0) {
              var n3 = document.getElementById(e4);
              n3 && n3.parentNode.removeChild(n3);
            }
          });
        }
        e2.exports = function(e3, r2) {
          for (var o, i = r2 === void 0 ? {} : r2, a = i.replace, l = a !== void 0 && a, c = i.prepend, s = c !== void 0 && c, u = i.prefix, f = u === void 0 ? "s" : u, p = [], d = 0; d < e3.length; d++) {
            var y = e3[d], m = y[0], h = y[1], g = y[2], b = y[3], v = "" + f + m + "-" + d;
            if (p.push(v), !t2[v] || l) {
              t2[v] = 1;
              var x = document.getElementById(v), S = false;
              x || (S = true, (x = document.createElement("style")).setAttribute("type", "text/css"), x.id = v, g && x.setAttribute("media", g));
              var w = h;
              b && typeof btoa == "function" && (w += "\n/*# sourceMappingURL=data:application/json;base64," + (o = JSON.stringify(b), btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g, function(e4, t3) {
                return String.fromCharCode("0x" + t3);
              })) + "*/"), w += "\n/*# sourceURL=" + b.file + "?" + v + "*/"), "textContent" in x ? x.textContent = w : x.styleSheet.cssText = w, S && (s ? document.head.insertBefore(x, document.head.childNodes[0]) : document.head.appendChild(x));
            } else
              t2[v]++;
          }
          return n2.bind(null, p);
        };
      } }, t = {};
      function n(r2) {
        var o = t[r2];
        if (o !== void 0)
          return o.exports;
        var i = t[r2] = { id: r2, exports: {} };
        return e[r2].call(i.exports, i, i.exports, n), i.exports;
      }
      n.amdO = {}, n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        "use strict";
        n.r(r), n.d(r, { ChecklistOutput: () => re, CodeBoxOutput: () => Pe, DelimiterOutput: () => ke, EmbedOutput: () => R, HeaderOutput: () => s, ImageOutput: () => x, LinkToolOutput: () => Ue, ListOutput: () => H, ParagraphOutput: () => d, PersonalityOutput: () => Ke, QuoteOutput: () => X, TableOutput: () => ge, VideoOutput: () => C, WarningOutput: () => se, default: () => et });
        var e2 = n(597), t2 = n(356);
        t2.domToReact, t2.htmlToDOM, t2.attributesToProps, t2.Element;
        const o = t2, i = { margin: "8px 0", marginTop: "15px" };
        function a(e3) {
          return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, a(e3);
        }
        var l = function() {
          return l = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, l.apply(this, arguments);
        }, c = ["h1", "h2", "h3", "h4", "h5", "h6"];
        const s = function(t3) {
          var n2 = t3.data, r2 = t3.style, s2 = t3.classNames, u2 = t3.config;
          if (!n2)
            return e2.createElement(e2.Fragment, null);
          r2 && a(r2) === "object" || (r2 = {}), u2 && a(u2) === "object" || (u2 = { disableDefaultStyle: false }), s2 && typeof s2 == "string" || (s2 = {}), c.forEach(function(e3) {
            r2[e3] && a(r2[e3]) === "object" || (r2[e3] = {}), s2[e3] && typeof s2[e3] == "string" || (s2[e3] = "");
          });
          var f2 = u2.disableDefaultStyle ? r2.h1 : l(l({}, i), r2.h1), p2 = u2.disableDefaultStyle ? r2.h2 : l(l({}, i), r2.h2), d2 = u2.disableDefaultStyle ? r2.h3 : l(l({}, i), r2.h3), y2 = u2.disableDefaultStyle ? r2.h4 : l(l({}, i), r2.h4), m2 = u2.disableDefaultStyle ? r2.h5 : l(l({}, i), r2.h5), h2 = u2.disableDefaultStyle ? r2.h6 : l(l({}, i), r2.h6), g2 = null;
          if (typeof n2 == "string" ? g2 = n2 : a(n2) === "object" && n2.text && typeof n2.text == "string" && (g2 = n2.text), !g2)
            return e2.createElement(e2.Fragment, null);
          if (a(n2) === "object" && n2.level && typeof n2.level == "number")
            switch (n2.level) {
              case 1:
                return e2.createElement("h1", { style: f2, className: s2 }, o(g2));
              case 2:
                return e2.createElement("h2", { style: p2, className: s2 }, o(g2));
              case 3:
                return e2.createElement("h3", { style: d2, className: s2 }, o(g2));
              case 4:
              default:
                return e2.createElement("h4", { style: y2, className: s2 }, o(g2));
              case 5:
                return e2.createElement("h5", { style: m2, className: s2 }, o(g2));
              case 6:
                return e2.createElement("h6", { style: h2, className: s2 }, o(g2));
            }
          return e2.createElement("h4", { style: y2, className: s2 }, o(g2));
        }, u = { margin: "5px 0", textAlign: "left" };
        function f(e3) {
          return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, f(e3);
        }
        var p = function() {
          return p = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, p.apply(this, arguments);
        };
        const d = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2)
            return "";
          r2 && f(r2) === "object" || (r2 = {}), a2 && f(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && typeof i2 == "string" || (i2 = {});
          var l2 = a2.disableDefaultStyle ? r2 : p(p({}, u), r2), c2 = null;
          return typeof n2 == "string" ? c2 = n2 : f(n2) === "object" && n2.text && typeof n2.text == "string" && (c2 = n2.text), c2 ? e2.createElement("p", { style: l2, className: i2 }, o(c2)) : "";
        }, y = { maxWidth: "100%", maxHeight: "400px" }, m = { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", maxHeight: "400px", overflow: "hidden", backgroundColor: "aliceblue", border: "1px solid #eee" }, h = { position: "absolute", top: "8px", right: "8px", padding: "5px 10px", fontSize: "12px", backgroundColor: "#2d333a", color: "white", borderRadius: "2px", cursor: "default" };
        function g(e3) {
          return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, g(e3);
        }
        var b = function() {
          return b = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, b.apply(this, arguments);
        }, v = ["img", "figure", "figcaption"];
        const x = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2 || !n2.file || !n2.file.url)
            return "";
          r2 && g(r2) === "object" || (r2 = {}), a2 && g(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && g(i2) === "object" || (i2 = {}), v.forEach(function(e3) {
            r2[e3] && g(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.img : b(b({}, y), r2.img);
          l2.width = n2.stretched ? "100%" : "";
          var c2 = a2.disableDefaultStyle ? r2.figure : b(b({}, m), r2.figure);
          n2.withBorder || (c2.border = "none"), n2.withBackground || (c2.backgroundColor = "none");
          var s2 = a2.disableDefaultStyle ? r2.figcaption : b(b({}, h), r2.figcaption);
          return e2.createElement("figure", { style: c2, className: i2.figure }, e2.createElement("img", { src: n2.file.url, alt: n2.caption || "", style: l2, className: i2.img }), n2.caption && e2.createElement("figcaption", { style: s2, className: i2.figcaption }, o(n2.caption)));
        }, S = { maxWidth: "100%" }, w = { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", overflow: "hidden", backgroundColor: "aliceblue", border: "1px solid #eee" }, E = { position: "absolute", top: "8px", right: "8px", padding: "5px 10px", fontSize: "12px", backgroundColor: "#2d333a", color: "white", borderRadius: "2px", cursor: "default" };
        function k(e3) {
          return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, k(e3);
        }
        var j = function() {
          return j = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, j.apply(this, arguments);
        }, O = ["video", "figure", "figcaption"];
        const C = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2 || !n2.url)
            return "";
          r2 && k(r2) === "object" || (r2 = {}), a2 && k(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && k(i2) === "object" || (i2 = {}), O.forEach(function(e3) {
            r2[e3] && k(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.video : j(j({}, S), r2.video);
          l2.width = n2.stretched ? "100%" : "";
          var c2 = a2.disableDefaultStyle ? r2.figure : j(j({}, w), r2.figure);
          n2.withBorder || (c2.border = "none"), n2.withBackground || (c2.backgroundColor = "none");
          var s2 = a2.disableDefaultStyle ? r2.figcaption : j(j({}, E), r2.figcaption);
          return e2.createElement("figure", { style: c2, className: i2.figure }, e2.createElement("video", { style: l2, className: i2.video, autoPlay: n2.autoPlay, muted: n2.muted, controls: n2.controls }, e2.createElement("source", { src: n2.url }), "Your browser does not support the video tag."), n2.caption && e2.createElement("figcaption", { style: s2, className: i2.figcaption }, o(n2.caption)));
        }, N = { maxWidth: "100%", width: "100%", height: "400px", maxHeight: "400px", borderRadius: "5px", boxShadow: "none", outline: "none", border: "none" }, T = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", height: "400px", maxHeight: "400px", overflow: "hidden" }, D = { padding: "5px 10px", fontSize: "12px", borderRadius: "2px", cursor: "default" };
        function A(e3) {
          return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, A(e3);
        }
        var P = function() {
          return P = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, P.apply(this, arguments);
        }, _ = ["video", "figure", "figcaption"];
        const R = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2 || !n2.embed)
            return "";
          r2 && A(r2) === "object" || (r2 = {}), a2 && A(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && A(i2) === "object" || (i2 = {}), _.forEach(function(e3) {
            r2[e3] && A(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.video : P(P({}, N), r2.video);
          n2.width && (l2.width = n2.width), n2.height && (l2.height = n2.height);
          var c2 = a2.disableDefaultStyle ? r2.figure : P(P({}, T), r2.figure), s2 = a2.disableDefaultStyle ? r2.figcaption : P(P({}, D), r2.figcaption);
          return e2.createElement("figure", { style: c2, className: i2.figure }, e2.createElement("iframe", { src: n2.embed, style: l2, className: i2.video }), n2.caption && e2.createElement("figcaption", { style: s2, className: i2.figcaption }, o(n2.caption)));
        }, I = { margin: "5px 0" }, M = {};
        function F(e3) {
          return F = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, F(e3);
        }
        var L = function() {
          return L = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, L.apply(this, arguments);
        }, z = ["ordered", "unordered"], B = ["container", "listItem"];
        const H = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2)
            return "";
          r2 && F(r2) === "object" || (r2 = {}), a2 && F(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && F(i2) === "object" || (i2 = {}), B.forEach(function(e3) {
            r2[e3] && F(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.container : L(L({}, I), r2.container), c2 = a2.disableDefaultStyle ? r2.listItem : L(L({}, M), r2.listItem), s2 = [], u2 = "unordered";
          return typeof n2 == "string" ? s2.push(n2) : F(n2) === "object" && (n2.items && Array.isArray(n2.items) && (s2 = n2.items.map(function(t4, n3) {
            return e2.createElement("li", { key: n3, style: c2, className: i2.listItem }, o(t4));
          })), n2.style && z.includes(n2.style) && (u2 = n2.style)), s2.length <= 0 ? "" : u2 === "ordered" ? e2.createElement("ol", { style: l2, className: i2.container }, s2) : e2.createElement("ul", { style: l2, className: i2.container }, s2);
        }, U = { quoteStyle: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 0", textAlign: "left" }, contentStyle: { minWidth: "240px", width: "80%", margin: "5px 0", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", border: "1px solid var(--primary-grey)", backgroundColor: "var(--secondary-white)", borderRadius: "var(--default-radius)" }, authorStyle: { fontWeight: "bold", margin: "0 5px 5px 5px" }, messageStyle: {} };
        var W = function() {
          return W = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, W.apply(this, arguments);
        };
        const q = function(t3) {
          var n2 = t3.author, r2 = n2 === void 0 ? "Unknown" : n2, o2 = t3.message, i2 = t3.config, a2 = t3.classNames, l2 = t3.style, c2 = l2.container, s2 = l2.content, u2 = l2.message, f2 = l2.author;
          return e2.createElement("div", { style: i2.disableDefaultStyle ? U.quoteStyle : W(W({}, U.quoteStyle), c2), className: a2.container }, e2.createElement("span", { style: i2.disableDefaultStyle ? U.contentStyle : W(W({}, U.contentStyle), s2), className: a2.content }, e2.createElement("p", { style: i2.disableDefaultStyle ? U.messageStyle : W(W({}, U.messageStyle), u2), className: a2.message }, e2.createElement("strong", null, '"'), o2, e2.createElement("strong", null, '"')), e2.createElement("p", { style: i2.disableDefaultStyle ? U.authorStyle : W(W({}, U.authorStyle), f2), className: a2.author }, e2.createElement("strong", null, e2.createElement("small", null, r2)))));
        };
        function V(e3) {
          return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, V(e3);
        }
        var $ = ["container", "content", "author", "message"];
        const X = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2)
            return "";
          r2 && V(r2) === "object" || (r2 = {}), a2 && V(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && V(i2) === "object" || (i2 = {}), $.forEach(function(e3) {
            r2[e3] && V(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = null, c2 = "Unknown";
          return typeof n2 == "string" ? l2 = n2 : V(n2) === "object" && n2.text && typeof n2.text == "string" && (l2 = n2.text, n2.caption && typeof n2.caption == "string" && (c2 = n2.caption), n2.alignment && typeof n2.alignment == "string" && (r2.textAlign = n2.alignment)), l2 ? e2.createElement(q, { author: o(c2), message: o(l2), style: r2, classNames: i2, config: a2 }) : "";
        };
        var G = n(313), Y = n.n(G);
        const J = { margin: "5px 0" }, Z = { display: "flex", justifyContent: "flex-start", alignItems: "center" }, K = { height: "17px", width: "17px", outline: "none", display: "inline-block", verticalAlign: "top", position: "relative", margin: 0, marginRight: "5px", cursor: "pointer", border: "1px solid var(--bc, var(--border))", background: "var(--b, var(--background))", transition: "background .3s, border-color .3s, box-shadow .2s" }, Q = { fontSize: "14px", lineHeight: "21px", display: "inline-block", verticalAlign: "top", cursor: "pointer", marginLeft: "4px" };
        function ee(e3) {
          return ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, ee(e3);
        }
        n(962);
        var te = function() {
          return te = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, te.apply(this, arguments);
        }, ne = ["container", "item", "checkbox", "label"];
        const re = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2 || !n2.items || !Array.isArray(n2.items) || n2.items.length < 1)
            return "";
          r2 && ee(r2) === "object" || (r2 = {}), a2 && ee(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && ee(i2) === "object" || (i2 = {}), ne.forEach(function(e3) {
            r2[e3] && ee(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.container : te(te({}, J), r2.container), c2 = a2.disableDefaultStyle ? r2.item : te(te({}, Z), r2.item), s2 = a2.disableDefaultStyle ? r2.checkbox : te(te({}, K), r2.checkbox), u2 = a2.disableDefaultStyle ? r2.label : te(te({}, Q), r2.label), f2 = [];
          return ee(n2) === "object" && n2.items && Array.isArray(n2.items) && (f2 = n2.items.map(function(t4, n3) {
            return e2.createElement("div", { key: n3, style: c2, className: i2.item }, e2.createElement("input", { id: n3, style: s2, className: i2.checkbox, type: "checkbox", checked: t4.checked, readOnly: true }), e2.createElement("label", { htmlFor: n3, style: u2, className: i2.label }, o(t4.text)));
          })), f2.length <= 0 ? "" : e2.createElement("ul", { style: l2, className: Y()("checklistUL", i2.container) }, f2);
        }, oe = { container: { width: "100%", margin: "20px 8px", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }, icon: { width: "30px", enableBackground: "new 0 0 50 50" }, title: { fontWeight: 400, textTransform: "uppercase", margin: 0, marginRight: "15px", marginLeft: "5px", fontSize: "90%" }, message: { color: "goldenrod", textAlight: "left", fontSize: "90%", margin: 0 }, circle: { fill: "#EFCE4A" }, line: { fill: "none", stroke: "#FFFFFF", strokeWidth: 5, strokeLinecap: "round", strokeMiterlimit: 10 } };
        var ie = function() {
          return ie = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, ie.apply(this, arguments);
        };
        const ae = function(t3) {
          var n2 = t3.title, r2 = t3.message, o2 = t3.classNames, i2 = t3.customStyle, a2 = i2 === void 0 ? {} : i2, l2 = t3.config, c2 = l2.disableDefaultStyle ? a2.container : ie(ie({}, oe.container), a2.container), s2 = l2.disableDefaultStyle ? a2.icon : ie(ie({}, oe.icon), a2.icon), u2 = l2.disableDefaultStyle ? a2.title : ie(ie({}, oe.title), a2.title), f2 = l2.disableDefaultStyle ? a2.message : ie(ie({}, oe.message), a2.message);
          return e2.createElement("div", { style: c2, className: o2.container }, e2.createElement("svg", { style: s2, className: o2.icon, version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 50 50", xmlSpace: "preserve" }, e2.createElement("circle", { style: oe.circle, cx: "25", cy: "25", r: "25" }), e2.createElement("line", { style: oe.line, x1: "25", y1: "10", x2: "25", y2: "28" }), e2.createElement("line", { style: oe.line, x1: "25", y1: "37", x2: "25", y2: "39" }), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null), e2.createElement("g", null)), e2.createElement("p", { style: u2, className: o2.title }, n2, ":"), e2.createElement("p", { style: f2, className: o2.message }, r2));
        };
        function le(e3) {
          return le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, le(e3);
        }
        var ce = ["container", "icon", "title", "message"];
        const se = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2)
            return "";
          r2 && le(r2) === "object" || (r2 = {}), a2 && le(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && le(i2) === "object" || (i2 = {}), ce.forEach(function(e3) {
            r2[e3] && le(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = null, c2 = "Warning";
          return typeof n2 == "string" ? l2 = n2 : le(n2) === "object" && (n2.message && typeof n2.message == "string" && (l2 = n2.message), n2.title && typeof n2.title == "string" && (c2 = n2.title)), l2 ? e2.createElement(ae, { title: o(c2), message: o(l2), customStyle: r2, config: a2, classNames: i2 }) : "";
        }, ue = { borderSpacing: "1px 2px", margin: "5px 0" }, fe = { minWidth: "100px", padding: "8px 15px", borderRadius: "2px", backgroundColor: "lightcoral" }, pe = { minWidth: "100px", padding: "8px 15px", borderRadius: "2px", textAlign: "left" }, de = {};
        function ye(e3) {
          return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, ye(e3);
        }
        var me = function() {
          return me = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, me.apply(this, arguments);
        }, he = ["table", "tr", "th", "td"];
        const ge = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2)
            return "";
          r2 && ye(r2) === "object" || (r2 = {}), a2 && ye(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && ye(i2) === "object" || (i2 = {}), he.forEach(function(e3) {
            r2[e3] && ye(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.table : me(me({}, ue), r2.table), c2 = a2.disableDefaultStyle ? r2.tr : me(me({}, de), r2.tr), s2 = a2.disableDefaultStyle ? r2.th : me(me({}, fe), r2.th), u2 = a2.disableDefaultStyle ? r2.td : me(me({}, pe), r2.td), f2 = n2.content || [];
          if (!Array.isArray(f2) || f2.length < 1)
            return "";
          var p2 = f2.shift();
          return e2.createElement("table", { style: l2, className: i2.table }, e2.createElement("thead", null, e2.createElement("tr", { style: c2, className: i2.tr }, p2.map(function(t4, n3) {
            return e2.createElement("th", { key: n3, style: s2, className: i2.th }, o(t4));
          }))), e2.createElement("tbody", null, f2.map(function(t4, n3) {
            return e2.createElement("tr", { key: n3, style: a2.disableDefaultStyle ? c2 : me({ backgroundColor: n3 % 2 == 0 ? "white" : "#f9f9f9" }, c2), className: i2.tr }, Array.isArray(t4) && t4.length > 1 && t4.map(function(t5, n4) {
              return e2.createElement("td", { key: n4, style: u2, className: i2.td }, o(t5));
            }));
          })));
        }, be = { width: "100%", margin: "8px 0", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", enableBackground: "new 0 0 100.353 100.353" }, ve = { width: "20px", height: "20px", margin: "5px" }, xe = { fill: "#231F20" };
        function Se(e3) {
          return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Se(e3);
        }
        var we = function() {
          return we = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, we.apply(this, arguments);
        }, Ee = ["container", "svg", "path"];
        const ke = function(t3) {
          var n2 = t3.style, r2 = t3.classNames, o2 = t3.config;
          n2 && Se(n2) === "object" || (n2 = {}), o2 && Se(o2) === "object" || (o2 = { disableDefaultStyle: false }), r2 && Se(r2) === "object" || (r2 = {}), Ee.forEach(function(e3) {
            n2[e3] && Se(n2[e3]) === "object" || (n2[e3] = {}), r2[e3] && typeof r2[e3] == "string" || (r2[e3] = "");
          });
          var i2 = o2.disableDefaultStyle ? n2.container : we(we({}, be), n2.container), a2 = o2.disableDefaultStyle ? n2.svg : we(we({}, ve), n2.svg), l2 = o2.disableDefaultStyle ? n2.path : we(we({}, xe), n2.path);
          return e2.createElement("div", { style: i2, className: r2.container }, e2.createElement("svg", { style: a2, className: r2.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e2.createElement("path", { style: l2, className: r2.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })), e2.createElement("svg", { style: a2, className: r2.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e2.createElement("path", { style: l2, className: r2.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })), e2.createElement("svg", { style: a2, className: r2.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e2.createElement("path", { style: l2, className: r2.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })));
        }, je = { width: "100%" }, Oe = { width: "100%", minHeight: "30px", boxSizing: "border-box", textAlign: "left", margin: "8px 0", marginTop: "15px", padding: "10px", borderRadius: "2px 2px 2px 0", border: "none !important", outline: "none !important", fontSize: "14px" };
        function Ce(e3) {
          return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Ce(e3);
        }
        var Ne, Te = (Ne = function(e3, t3) {
          return Ne = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var n2 in t4)
              Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
          }, Ne(e3, t3);
        }, function(e3, t3) {
          if (typeof t3 != "function" && t3 !== null)
            throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
          function n2() {
            this.constructor = e3;
          }
          Ne(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
        }), De = function() {
          return De = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, De.apply(this, arguments);
        }, Ae = function(t3) {
          function n2(n3) {
            var r2 = t3.call(this, n3) || this;
            return r2.highlightBlock = function() {
              window.hljs !== void 0 ? window.hljs.highlightBlock(r2.codeAreaRef.current) : setTimeout(r2.highlightBlock, 250);
            }, r2.injectHighlightJSScriptElement = function() {
              for (var e3 = document.querySelectorAll("script"), t4 = false, n4 = 0; n4 < e3.length; n4++)
                if (e3[n4].src.includes("highlight.min.js")) {
                  t4 = true;
                  break;
                }
              if (!t4) {
                var r3 = document.createElement("script"), o2 = document.querySelector("head");
                r3.setAttribute("src", "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js"), o2 && o2.appendChild(r3);
              }
            }, r2.injectHighlightJSCSSElement = function(e3) {
              if (e3 && typeof e3 == "string") {
                for (var t4 = document.querySelectorAll("link"), n4 = false, r3 = 0; r3 < t4.length; r3++)
                  if (t4[r3].href === e3) {
                    n4 = true;
                    break;
                  }
                if (!n4) {
                  var o2 = document.createElement("link"), i2 = document.querySelector("head");
                  o2.setAttribute("rel", "stylesheet"), o2.setAttribute("href", e3), i2 && i2.appendChild(o2);
                }
              }
            }, r2.codeAreaRef = e2.createRef(), r2.supportedKeys = ["container", "code"], r2;
          }
          return Te(n2, t3), n2.prototype.componentDidMount = function() {
            var e3 = this.props.data;
            e3 && e3.theme && this.codeAreaRef.current && (this.injectHighlightJSCSSElement(e3.theme), this.injectHighlightJSScriptElement(), this.highlightBlock());
          }, n2.prototype.render = function() {
            var t4 = this.props, n3 = t4.data, r2 = t4.style, i2 = t4.classNames, a2 = t4.config;
            if (!n3)
              return "";
            r2 && Ce(r2) === "object" || (r2 = {}), a2 && Ce(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && Ce(i2) === "object" || (i2 = {}), this.supportedKeys.forEach(function(e3) {
              r2[e3] && Ce(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
            });
            var l2 = a2.disableDefaultStyle ? r2.container : De(De({}, je), r2.container), c2 = a2.disableDefaultStyle ? r2.code : De(De({}, Oe), r2.code), s2 = null, u2 = null;
            return typeof n3 == "string" ? s2 = n3 : Ce(n3) === "object" && (n3.code && typeof n3.code == "string" && (s2 = n3.code), n3.language && typeof n3.language == "string" && (u2 = n3.language)), s2 ? e2.createElement("pre", { style: l2, className: i2.container }, e2.createElement("code", { ref: this.codeAreaRef, style: c2, className: Y()(u2, i2.code) }, o(s2))) : "";
          }, n2;
        }(e2.PureComponent);
        const Pe = Ae, _e = { display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", minWidth: "280px", flexWrap: "wrap-reverse", border: "1px solid #eee", boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)", borderRadius: "4px", cursor: "pointer" }, Re = { display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "80%", padding: "12px 20px" }, Ie = { fontSize: "18px", fontWeight: "bold", margin: 0, cursor: "pointer" }, Me = { textAlign: "left", lineHeight: "1.7", fontWeight: 200, fontSize: "15px", cursor: "pointer" }, Fe = { width: "15%", borderRadius: "4px", cursor: "pointer", flexGrow: 1 }, Le = { color: "grey", cursor: "pointer", margin: 0, fontSize: "12px" };
        function ze(e3) {
          return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, ze(e3);
        }
        var Be = function() {
          return Be = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, Be.apply(this, arguments);
        }, He = ["container", "textHolder", "title", "description", "image", "siteName"];
        const Ue = function(t3) {
          var n2, r2, i2, a2, l2, c2, s2, u2, f2 = t3.data, p2 = t3.style, d2 = t3.classNames, y2 = t3.config;
          if (!f2 || !f2.link)
            return "";
          p2 && ze(p2) === "object" || (p2 = {}), y2 && ze(y2) === "object" || (y2 = { disableDefaultStyle: false }), d2 && ze(d2) === "object" || (d2 = {}), He.forEach(function(e3) {
            p2[e3] && ze(p2[e3]) === "object" || (p2[e3] = {}), d2[e3] && typeof d2[e3] == "string" || (d2[e3] = "");
          });
          var m2 = y2.disableDefaultStyle ? p2.container : Be(Be({}, _e), p2.container), h2 = y2.disableDefaultStyle ? p2.textHolder : Be(Be({}, Re), p2.textHolder), g2 = y2.disableDefaultStyle ? p2.title : Be(Be({}, Ie), p2.title), b2 = y2.disableDefaultStyle ? p2.description : Be(Be({}, Me), p2.description), v2 = y2.disableDefaultStyle ? p2.siteName : Be(Be({}, Le), p2.siteName), x2 = y2.disableDefaultStyle ? p2.image : Be(Be({}, Fe), p2.image);
          return e2.createElement("div", { style: m2, className: d2.container, onClick: function() {
            var e3 = window.open(f2.link, "_blank");
            e3 == null || e3.focus();
          } }, e2.createElement("div", { style: h2, className: d2.textHolder }, ((n2 = f2.meta) === null || n2 === void 0 ? void 0 : n2.title) && e2.createElement("p", { style: g2, className: d2.title }, o((r2 = f2.meta) === null || r2 === void 0 ? void 0 : r2.title)), ((i2 = f2.meta) === null || i2 === void 0 ? void 0 : i2.description) && e2.createElement("p", { style: b2, className: d2.description }, o((a2 = f2.meta) === null || a2 === void 0 ? void 0 : a2.description)), ((l2 = f2.meta) === null || l2 === void 0 ? void 0 : l2.site_name) && e2.createElement("p", { style: v2, className: d2.siteName }, o((c2 = f2.meta) === null || c2 === void 0 ? void 0 : c2.site_name))), ((s2 = f2.meta) === null || s2 === void 0 ? void 0 : s2.image.url) && e2.createElement("img", { src: (u2 = f2.meta) === null || u2 === void 0 ? void 0 : u2.image.url, alt: "image of link", style: x2, className: d2.image }));
        }, We = { display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", minWidth: "280px", flexWrap: "wrap-reverse", border: "1px solid #eee", boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)", borderRadius: "4px", cursor: "pointer" }, qe = { display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "80%", padding: "12px 20px" }, Ve = { fontSize: "18px", fontWeight: "bold", cursor: "pointer", margin: 0 }, $e = { textAlign: "left", lineHeight: "1.7", cursor: "pointer", fontWeight: 200, fontSize: "15px" }, Xe = { width: "15%", borderRadius: "4px", flexGrow: 1 }, Ge = { textDecoration: "none", color: "#42A5F5", cursor: "pointer", fontSize: "12px" };
        function Ye(e3) {
          return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Ye(e3);
        }
        var Je = function() {
          return Je = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, Je.apply(this, arguments);
        }, Ze = ["container", "textHolder", "name", "description", "photo", "link"];
        const Ke = function(t3) {
          var n2 = t3.data, r2 = t3.style, i2 = t3.classNames, a2 = t3.config;
          if (!n2 || !n2.link)
            return "";
          r2 && Ye(r2) === "object" || (r2 = {}), a2 && Ye(a2) === "object" || (a2 = { disableDefaultStyle: false }), i2 && Ye(i2) === "object" || (i2 = {}), Ze.forEach(function(e3) {
            r2[e3] && Ye(r2[e3]) === "object" || (r2[e3] = {}), i2[e3] && typeof i2[e3] == "string" || (i2[e3] = "");
          });
          var l2 = a2.disableDefaultStyle ? r2.container : Je(Je({}, We), r2.container), c2 = a2.disableDefaultStyle ? r2.textHolder : Je(Je({}, qe), r2.textHolder), s2 = a2.disableDefaultStyle ? r2.name : Je(Je({}, Ve), r2.name), u2 = a2.disableDefaultStyle ? r2.description : Je(Je({}, $e), r2.description), f2 = a2.disableDefaultStyle ? r2.link : Je(Je({}, Ge), r2.link), p2 = a2.disableDefaultStyle ? r2.photo : Je(Je({}, Xe), r2.photo);
          return e2.createElement("div", { style: l2, className: i2.container, onClick: function() {
            var e3 = window.open(n2.link, "_blank");
            e3 == null || e3.focus();
          } }, e2.createElement("div", { style: c2, className: i2.textHolder }, n2.name && e2.createElement("p", { style: s2, className: i2.name }, o(n2.name)), n2.description && e2.createElement("p", { style: u2, className: i2.description }, o(n2.description)), e2.createElement("a", { href: n2.link, style: f2, className: i2.link }, n2.link)), n2.photo && e2.createElement("img", { src: n2.photo, alt: "image of person", style: p2, className: i2.photo }));
        };
        function Qe(e3) {
          return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Qe(e3);
        }
        var et = function(t3) {
          var n2 = t3.data, r2 = t3.style, o2 = t3.classNames, i2 = t3.config, a2 = t3.renderers;
          return n2 && Qe(n2) === "object" ? (r2 && Qe(r2) === "object" || (r2 = {}), o2 && Qe(o2) === "object" || (o2 = {}), i2 && Qe(i2) === "object" || (i2 = {}), a2 && Qe(a2) === "object" || (a2 = {}), n2.blocks.map(function(t4, n3) {
            var l2 = null;
            switch (t4.type.toLowerCase()) {
              case "codebox":
                return l2 = a2.codeBox || Pe, e2.createElement(l2, { key: n3, data: t4.data, style: r2.codeBox || {}, config: i2.codeBox || {}, classNames: o2.codeBox || {} });
              case "header":
                return l2 = a2.header || s, e2.createElement(l2, { key: n3, data: t4.data, style: r2.header || {}, config: i2.header || {}, classNames: o2.header || {} });
              case "paragraph":
                return l2 = a2.paragraph || d, e2.createElement(l2, { key: n3, data: t4.data, style: r2.paragraph || {}, config: i2.paragraph || {}, classNames: o2.paragraph || {} });
              case "image":
                return l2 = a2.image || x, e2.createElement(l2, { key: n3, data: t4.data, style: r2.image || {}, config: i2.image || {}, classNames: o2.image || {} });
              case "video":
                return l2 = a2.video || C, e2.createElement(l2, { key: n3, data: t4.data, style: r2.video || {}, config: i2.video || {}, classNames: o2.video || {} });
              case "embed":
                return l2 = a2.embed || R, e2.createElement(l2, { key: n3, data: t4.data, style: r2.embed || {}, config: i2.embed || {}, classNames: o2.embed || {} });
              case "table":
                return l2 = a2.table || ge, e2.createElement(l2, { key: n3, data: t4.data, style: r2.table || {}, config: i2.table || {}, classNames: o2.table || {} });
              case "list":
                return l2 = a2.list || H, e2.createElement(l2, { key: n3, data: t4.data, style: r2.list || {}, config: i2.list || {}, classNames: o2.list || {} });
              case "checklist":
                return l2 = a2.checklist || re, e2.createElement(l2, { key: n3, data: t4.data, style: r2.checklist || {}, config: i2.checklist || {}, classNames: o2.checklist || {} });
              case "quote":
                return l2 = a2.quote || X, e2.createElement(l2, { key: n3, data: t4.data, style: r2.quote || {}, config: i2.quote || {}, classNames: o2.quote || {} });
              case "warning":
                return l2 = a2.warning || se, e2.createElement(l2, { key: n3, data: t4.data, style: r2.warning || {}, config: i2.warning || {}, classNames: o2.warning || {} });
              case "linktool":
                return l2 = a2.linktool || Ue, e2.createElement(l2, { key: n3, data: t4.data, style: r2.linktool || {}, config: i2.linktool || {}, classNames: o2.linktool || {} });
              case "personality":
                return l2 = a2.personality || Ke, e2.createElement(l2, { key: n3, data: t4.data, style: r2.personality || {}, config: i2.personality || {}, classNames: o2.personality || {} });
              case "delimiter":
                return l2 = a2.delimiter || ke, e2.createElement(l2, { key: n3, style: r2.delimiter || {}, config: i2.delimiter || {}, classNames: o2.delimiter || {} });
              default:
                return e2.createElement(e2.Fragment, null);
            }
          })) : "";
        };
      })(), r;
    })());
  }
});

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();

// app/components/editorjsReact.client.tsx
init_react();
var import_react = __toESM(require_react());
var import_editorjs_react_renderer = __toESM(require_index_min());
function EditorjsReact(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_editorjs_react_renderer.default, {
    data: JSON.parse(props.previousData)
  }));
}

// app/routes/blog/$slug.tsx
function PostSlug() {
  let post = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(EditorjsReact, {
    previousData: post.editorjs
  }))));
}
export {
  PostSlug as default
};
/*! For license information please see index.min.js.LICENSE.txt */
//# sourceMappingURL=/build/routes/blog/$slug-UEGWS7X7.js.map
