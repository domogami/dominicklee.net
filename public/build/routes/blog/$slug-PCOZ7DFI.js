import {
  ClientOnly
} from "/build/_shared/chunk-ITZ5GJUX.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  _extends,
  init_extends,
  useLoaderData
} from "/build/_shared/chunk-R6VFUNZK.js";
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
    !function(e2, t2) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = t2();
      else if (typeof define == "function" && define.amd)
        define([], t2);
      else {
        var n2 = t2();
        for (var r2 in n2)
          (typeof exports == "object" ? exports : e2)[r2] = n2[r2];
      }
    }(typeof self != "undefined" ? self : exports, () => (() => {
      var e2 = { 313: (e3, t3, n3) => {
        var r3;
        function o2(e4) {
          return o2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, o2(e4);
        }
        !function() {
          "use strict";
          var i2 = {}.hasOwnProperty;
          function a2() {
            for (var e4 = [], t4 = 0; t4 < arguments.length; t4++) {
              var n4 = arguments[t4];
              if (n4) {
                var r4 = o2(n4);
                if (r4 === "string" || r4 === "number")
                  e4.push(n4);
                else if (Array.isArray(n4)) {
                  if (n4.length) {
                    var l2 = a2.apply(null, n4);
                    l2 && e4.push(l2);
                  }
                } else if (r4 === "object")
                  if (n4.toString === Object.prototype.toString)
                    for (var c2 in n4)
                      i2.call(n4, c2) && n4[c2] && e4.push(c2);
                  else
                    e4.push(n4.toString());
              }
            }
            return e4.join(" ");
          }
          e3.exports ? (a2.default = a2, e3.exports = a2) : o2(n3.amdO) === "object" && n3.amdO ? (r3 = function() {
            return a2;
          }.apply(t3, [])) === void 0 || (e3.exports = r3) : window.classNames = a2;
        }();
      }, 681: (e3) => {
        "use strict";
        e3.exports = function(e4) {
          var t3 = [];
          return t3.toString = function() {
            return this.map(function(t4) {
              var n3 = "", r3 = t4[5] !== void 0;
              return t4[4] && (n3 += "@supports (".concat(t4[4], ") {")), t4[2] && (n3 += "@media ".concat(t4[2], " {")), r3 && (n3 += "@layer".concat(t4[5].length > 0 ? " ".concat(t4[5]) : "", " {")), n3 += e4(t4), r3 && (n3 += "}"), t4[2] && (n3 += "}"), t4[4] && (n3 += "}"), n3;
            }).join("");
          }, t3.i = function(e5, n3, r3, o2, i2) {
            typeof e5 == "string" && (e5 = [[null, e5, void 0]]);
            var a2 = {};
            if (r3)
              for (var l2 = 0; l2 < this.length; l2++) {
                var c2 = this[l2][0];
                c2 != null && (a2[c2] = true);
              }
            for (var s2 = 0; s2 < e5.length; s2++) {
              var u2 = [].concat(e5[s2]);
              r3 && a2[u2[0]] || (i2 !== void 0 && (u2[5] === void 0 || (u2[1] = "@layer".concat(u2[5].length > 0 ? " ".concat(u2[5]) : "", " {").concat(u2[1], "}")), u2[5] = i2), n3 && (u2[2] ? (u2[1] = "@media ".concat(u2[2], " {").concat(u2[1], "}"), u2[2] = n3) : u2[2] = n3), o2 && (u2[4] ? (u2[1] = "@supports (".concat(u2[4], ") {").concat(u2[1], "}"), u2[4] = o2) : u2[4] = "".concat(o2)), t3.push(u2));
            }
          }, t3;
        };
      }, 973: (e3) => {
        "use strict";
        e3.exports = function(e4) {
          return e4[1];
        };
      }, 905: (e3, t3) => {
        "use strict";
        var n3;
        Object.defineProperty(t3, "__esModule", { value: true }), t3.Doctype = t3.CDATA = t3.Tag = t3.Style = t3.Script = t3.Comment = t3.Directive = t3.Text = t3.Root = t3.isTag = t3.ElementType = void 0, function(e4) {
          e4.Root = "root", e4.Text = "text", e4.Directive = "directive", e4.Comment = "comment", e4.Script = "script", e4.Style = "style", e4.Tag = "tag", e4.CDATA = "cdata", e4.Doctype = "doctype";
        }(n3 = t3.ElementType || (t3.ElementType = {})), t3.isTag = function(e4) {
          return e4.type === n3.Tag || e4.type === n3.Script || e4.type === n3.Style;
        }, t3.Root = n3.Root, t3.Text = n3.Text, t3.Directive = n3.Directive, t3.Comment = n3.Comment, t3.Script = n3.Script, t3.Style = n3.Style, t3.Tag = n3.Tag, t3.CDATA = n3.CDATA, t3.Doctype = n3.Doctype;
      }, 497: function(e3, t3, n3) {
        "use strict";
        var r3, o2 = this && this.__extends || (r3 = function(e4, t4) {
          return r3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e5, t5) {
            e5.__proto__ = t5;
          } || function(e5, t5) {
            for (var n4 in t5)
              Object.prototype.hasOwnProperty.call(t5, n4) && (e5[n4] = t5[n4]);
          }, r3(e4, t4);
        }, function(e4, t4) {
          if (typeof t4 != "function" && t4 !== null)
            throw new TypeError("Class extends value " + String(t4) + " is not a constructor or null");
          function n4() {
            this.constructor = e4;
          }
          r3(e4, t4), e4.prototype = t4 === null ? Object.create(t4) : (n4.prototype = t4.prototype, new n4());
        }), i2 = this && this.__assign || function() {
          return i2 = Object.assign || function(e4) {
            for (var t4, n4 = 1, r4 = arguments.length; n4 < r4; n4++)
              for (var o3 in t4 = arguments[n4])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, i2.apply(this, arguments);
        };
        Object.defineProperty(t3, "__esModule", { value: true }), t3.cloneNode = t3.hasChildren = t3.isDocument = t3.isDirective = t3.isComment = t3.isText = t3.isCDATA = t3.isTag = t3.Element = t3.Document = t3.NodeWithChildren = t3.ProcessingInstruction = t3.Comment = t3.Text = t3.DataNode = t3.Node = void 0;
        var a2 = n3(905), l2 = /* @__PURE__ */ new Map([[a2.ElementType.Tag, 1], [a2.ElementType.Script, 1], [a2.ElementType.Style, 1], [a2.ElementType.Directive, 1], [a2.ElementType.Text, 3], [a2.ElementType.CDATA, 4], [a2.ElementType.Comment, 8], [a2.ElementType.Root, 9]]), c2 = function() {
          function e4(e5) {
            this.type = e5, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
          }
          return Object.defineProperty(e4.prototype, "nodeType", { get: function() {
            var e5;
            return (e5 = l2.get(this.type)) !== null && e5 !== void 0 ? e5 : 1;
          }, enumerable: false, configurable: true }), Object.defineProperty(e4.prototype, "parentNode", { get: function() {
            return this.parent;
          }, set: function(e5) {
            this.parent = e5;
          }, enumerable: false, configurable: true }), Object.defineProperty(e4.prototype, "previousSibling", { get: function() {
            return this.prev;
          }, set: function(e5) {
            this.prev = e5;
          }, enumerable: false, configurable: true }), Object.defineProperty(e4.prototype, "nextSibling", { get: function() {
            return this.next;
          }, set: function(e5) {
            this.next = e5;
          }, enumerable: false, configurable: true }), e4.prototype.cloneNode = function(e5) {
            return e5 === void 0 && (e5 = false), w2(this, e5);
          }, e4;
        }();
        t3.Node = c2;
        var s2 = function(e4) {
          function t4(t5, n4) {
            var r4 = e4.call(this, t5) || this;
            return r4.data = n4, r4;
          }
          return o2(t4, e4), Object.defineProperty(t4.prototype, "nodeValue", { get: function() {
            return this.data;
          }, set: function(e5) {
            this.data = e5;
          }, enumerable: false, configurable: true }), t4;
        }(c2);
        t3.DataNode = s2;
        var u2 = function(e4) {
          function t4(t5) {
            return e4.call(this, a2.ElementType.Text, t5) || this;
          }
          return o2(t4, e4), t4;
        }(s2);
        t3.Text = u2;
        var f = function(e4) {
          function t4(t5) {
            return e4.call(this, a2.ElementType.Comment, t5) || this;
          }
          return o2(t4, e4), t4;
        }(s2);
        t3.Comment = f;
        var p = function(e4) {
          function t4(t5, n4) {
            var r4 = e4.call(this, a2.ElementType.Directive, n4) || this;
            return r4.name = t5, r4;
          }
          return o2(t4, e4), t4;
        }(s2);
        t3.ProcessingInstruction = p;
        var d2 = function(e4) {
          function t4(t5, n4) {
            var r4 = e4.call(this, t5) || this;
            return r4.children = n4, r4;
          }
          return o2(t4, e4), Object.defineProperty(t4.prototype, "firstChild", { get: function() {
            var e5;
            return (e5 = this.children[0]) !== null && e5 !== void 0 ? e5 : null;
          }, enumerable: false, configurable: true }), Object.defineProperty(t4.prototype, "lastChild", { get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          }, enumerable: false, configurable: true }), Object.defineProperty(t4.prototype, "childNodes", { get: function() {
            return this.children;
          }, set: function(e5) {
            this.children = e5;
          }, enumerable: false, configurable: true }), t4;
        }(c2);
        t3.NodeWithChildren = d2;
        var y2 = function(e4) {
          function t4(t5) {
            return e4.call(this, a2.ElementType.Root, t5) || this;
          }
          return o2(t4, e4), t4;
        }(d2);
        t3.Document = y2;
        var m = function(e4) {
          function t4(t5, n4, r4, o3) {
            r4 === void 0 && (r4 = []), o3 === void 0 && (o3 = t5 === "script" ? a2.ElementType.Script : t5 === "style" ? a2.ElementType.Style : a2.ElementType.Tag);
            var i3 = e4.call(this, o3, r4) || this;
            return i3.name = t5, i3.attribs = n4, i3;
          }
          return o2(t4, e4), Object.defineProperty(t4.prototype, "tagName", { get: function() {
            return this.name;
          }, set: function(e5) {
            this.name = e5;
          }, enumerable: false, configurable: true }), Object.defineProperty(t4.prototype, "attributes", { get: function() {
            var e5 = this;
            return Object.keys(this.attribs).map(function(t5) {
              var n4, r4;
              return { name: t5, value: e5.attribs[t5], namespace: (n4 = e5["x-attribsNamespace"]) === null || n4 === void 0 ? void 0 : n4[t5], prefix: (r4 = e5["x-attribsPrefix"]) === null || r4 === void 0 ? void 0 : r4[t5] };
            });
          }, enumerable: false, configurable: true }), t4;
        }(d2);
        function h2(e4) {
          return (0, a2.isTag)(e4);
        }
        function g2(e4) {
          return e4.type === a2.ElementType.CDATA;
        }
        function b2(e4) {
          return e4.type === a2.ElementType.Text;
        }
        function v2(e4) {
          return e4.type === a2.ElementType.Comment;
        }
        function x2(e4) {
          return e4.type === a2.ElementType.Directive;
        }
        function S2(e4) {
          return e4.type === a2.ElementType.Root;
        }
        function w2(e4, t4) {
          var n4;
          if (t4 === void 0 && (t4 = false), b2(e4))
            n4 = new u2(e4.data);
          else if (v2(e4))
            n4 = new f(e4.data);
          else if (h2(e4)) {
            var r4 = t4 ? E2(e4.children) : [], o3 = new m(e4.name, i2({}, e4.attribs), r4);
            r4.forEach(function(e5) {
              return e5.parent = o3;
            }), e4.namespace != null && (o3.namespace = e4.namespace), e4["x-attribsNamespace"] && (o3["x-attribsNamespace"] = i2({}, e4["x-attribsNamespace"])), e4["x-attribsPrefix"] && (o3["x-attribsPrefix"] = i2({}, e4["x-attribsPrefix"])), n4 = o3;
          } else if (g2(e4)) {
            r4 = t4 ? E2(e4.children) : [];
            var l3 = new d2(a2.ElementType.CDATA, r4);
            r4.forEach(function(e5) {
              return e5.parent = l3;
            }), n4 = l3;
          } else if (S2(e4)) {
            r4 = t4 ? E2(e4.children) : [];
            var c3 = new y2(r4);
            r4.forEach(function(e5) {
              return e5.parent = c3;
            }), e4["x-mode"] && (c3["x-mode"] = e4["x-mode"]), n4 = c3;
          } else {
            if (!x2(e4))
              throw new Error("Not implemented yet: ".concat(e4.type));
            var s3 = new p(e4.name, e4.data);
            e4["x-name"] != null && (s3["x-name"] = e4["x-name"], s3["x-publicId"] = e4["x-publicId"], s3["x-systemId"] = e4["x-systemId"]), n4 = s3;
          }
          return n4.startIndex = e4.startIndex, n4.endIndex = e4.endIndex, e4.sourceCodeLocation != null && (n4.sourceCodeLocation = e4.sourceCodeLocation), n4;
        }
        function E2(e4) {
          for (var t4 = e4.map(function(e5) {
            return w2(e5, true);
          }), n4 = 1; n4 < t4.length; n4++)
            t4[n4].prev = t4[n4 - 1], t4[n4 - 1].next = t4[n4];
          return t4;
        }
        t3.Element = m, t3.isTag = h2, t3.isCDATA = g2, t3.isText = b2, t3.isComment = v2, t3.isDirective = x2, t3.isDocument = S2, t3.hasChildren = function(e4) {
          return Object.prototype.hasOwnProperty.call(e4, "children");
        }, t3.cloneNode = w2;
      }, 692: (e3) => {
        e3.exports = { CASE_SENSITIVE_TAG_NAMES: ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussainBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"] };
      }, 253: (e3, t3, n3) => {
        var r3 = "html", o2 = "head", i2 = "body", a2 = /<([a-zA-Z]+[0-9]?)/, l2 = /<head.*>/i, c2 = /<body.*>/i, s2 = function() {
          throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
        }, u2 = function() {
          throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
        };
        if (typeof window.DOMParser == "function") {
          var f = new window.DOMParser();
          s2 = u2 = function(e4, t4) {
            return t4 && (e4 = "<" + t4 + ">" + e4 + "</" + t4 + ">"), f.parseFromString(e4, "text/html");
          };
        }
        if (document.implementation) {
          var p = n3(755).isIE, d2 = document.implementation.createHTMLDocument(p() ? "html-dom-parser" : void 0);
          s2 = function(e4, t4) {
            return t4 ? (d2.documentElement.getElementsByTagName(t4)[0].innerHTML = e4, d2) : (d2.documentElement.innerHTML = e4, d2);
          };
        }
        var y2, m = document.createElement("template");
        m.content && (y2 = function(e4) {
          return m.innerHTML = e4, m.content.childNodes;
        }), e3.exports = function(e4) {
          var t4, n4, f2, p2, d3 = e4.match(a2);
          switch (d3 && d3[1] && (t4 = d3[1].toLowerCase()), t4) {
            case r3:
              return n4 = u2(e4), l2.test(e4) || (f2 = n4.getElementsByTagName(o2)[0]) && f2.parentNode.removeChild(f2), c2.test(e4) || (f2 = n4.getElementsByTagName(i2)[0]) && f2.parentNode.removeChild(f2), n4.getElementsByTagName(r3);
            case o2:
            case i2:
              return p2 = s2(e4).getElementsByTagName(t4), c2.test(e4) && l2.test(e4) ? p2[0].parentNode.childNodes : p2;
            default:
              return y2 ? y2(e4) : s2(e4, i2).getElementsByTagName(i2)[0].childNodes;
          }
        };
      }, 995: (e3, t3, n3) => {
        var r3 = n3(253), o2 = n3(755).formatDOM, i2 = /<(![a-zA-Z\s]+)>/;
        e3.exports = function(e4) {
          if (typeof e4 != "string")
            throw new TypeError("First argument must be a string");
          if (e4 === "")
            return [];
          var t4, n4 = e4.match(i2);
          return n4 && n4[1] && (t4 = n4[1]), o2(r3(e4), null, t4);
        };
      }, 755: (e3, t3, n3) => {
        for (var r3, o2 = n3(692), i2 = n3(497), a2 = o2.CASE_SENSITIVE_TAG_NAMES, l2 = i2.Comment, c2 = i2.Element, s2 = i2.ProcessingInstruction, u2 = i2.Text, f = {}, p = 0, d2 = a2.length; p < d2; p++)
          r3 = a2[p], f[r3.toLowerCase()] = r3;
        function y2(e4) {
          for (var t4, n4 = {}, r4 = 0, o3 = e4.length; r4 < o3; r4++)
            n4[(t4 = e4[r4]).name] = t4.value;
          return n4;
        }
        function m(e4) {
          return function(e5) {
            return f[e5];
          }(e4 = e4.toLowerCase()) || e4;
        }
        e3.exports = { formatAttributes: y2, formatDOM: function e4(t4, n4, r4) {
          n4 = n4 || null;
          for (var o3 = [], i3 = 0, a3 = t4.length; i3 < a3; i3++) {
            var f2, p2 = t4[i3];
            switch (p2.nodeType) {
              case 1:
                (f2 = new c2(m(p2.nodeName), y2(p2.attributes))).children = e4(p2.childNodes, f2);
                break;
              case 3:
                f2 = new u2(p2.nodeValue);
                break;
              case 8:
                f2 = new l2(p2.nodeValue);
                break;
              default:
                continue;
            }
            var d3 = o3[i3 - 1] || null;
            d3 && (d3.next = f2), f2.parent = n4, f2.prev = d3, f2.next = null, o3.push(f2);
          }
          return r4 && ((f2 = new s2(r4.substring(0, r4.indexOf(" ")).toLowerCase(), r4)).next = o3[0] || null, f2.parent = n4, o3.unshift(f2), o3[1] && (o3[1].prev = o3[0])), o3;
        }, isIE: function() {
          return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
        } };
      }, 356: (e3, t3, n3) => {
        var r3 = n3(495), o2 = n3(578), i2 = n3(995);
        i2 = typeof i2.default == "function" ? i2.default : i2;
        var a2 = { lowerCaseAttributeNames: false };
        function l2(e4, t4) {
          if (typeof e4 != "string")
            throw new TypeError("First argument must be a string");
          return e4 === "" ? [] : r3(i2(e4, (t4 = t4 || {}).htmlparser2 || a2), t4);
        }
        l2.domToReact = r3, l2.htmlToDOM = i2, l2.attributesToProps = o2, l2.Element = n3(497).Element, e3.exports = l2, e3.exports.default = l2;
      }, 578: (e3, t3, n3) => {
        var r3 = n3(583), o2 = n3(370);
        function i2(e4) {
          return r3.possibleStandardNames[e4];
        }
        e3.exports = function(e4) {
          var t4, n4, a2, l2, c2, s2 = {}, u2 = (e4 = e4 || {}).type && { reset: true, submit: true }[e4.type];
          for (t4 in e4)
            if (a2 = e4[t4], r3.isCustomAttribute(t4))
              s2[t4] = a2;
            else if (l2 = i2(n4 = t4.toLowerCase()))
              switch (c2 = r3.getPropertyInfo(l2), l2 !== "checked" && l2 !== "value" || u2 || (l2 = i2("default" + n4)), s2[l2] = a2, c2 && c2.type) {
                case r3.BOOLEAN:
                  s2[l2] = true;
                  break;
                case r3.OVERLOADED_BOOLEAN:
                  a2 === "" && (s2[l2] = true);
              }
            else
              o2.PRESERVE_CUSTOM_ATTRIBUTES && (s2[t4] = a2);
          return o2.setStyleProp(e4.style, s2), s2;
        };
      }, 495: (e3, t3, n3) => {
        var r3 = n3(597), o2 = n3(578), i2 = n3(370), a2 = i2.setStyleProp, l2 = i2.canTextBeChildOfNode;
        function c2(e4) {
          return i2.PRESERVE_CUSTOM_ATTRIBUTES && e4.type === "tag" && i2.isCustomComponent(e4.name, e4.attribs);
        }
        e3.exports = function e4(t4, n4) {
          for (var i3, s2, u2, f, p, d2 = (n4 = n4 || {}).library || r3, y2 = d2.cloneElement, m = d2.createElement, h2 = d2.isValidElement, g2 = [], b2 = typeof n4.replace == "function", v2 = n4.trim, x2 = 0, S2 = t4.length; x2 < S2; x2++)
            if (i3 = t4[x2], b2 && h2(u2 = n4.replace(i3)))
              S2 > 1 && (u2 = y2(u2, { key: u2.key || x2 })), g2.push(u2);
            else if (i3.type !== "text") {
              switch (f = i3.attribs, c2(i3) ? a2(f.style, f) : f && (f = o2(f)), p = null, i3.type) {
                case "script":
                case "style":
                  i3.children[0] && (f.dangerouslySetInnerHTML = { __html: i3.children[0].data });
                  break;
                case "tag":
                  i3.name === "textarea" && i3.children[0] ? f.defaultValue = i3.children[0].data : i3.children && i3.children.length && (p = e4(i3.children, n4));
                  break;
                default:
                  continue;
              }
              S2 > 1 && (f.key = x2), g2.push(m(i3.name, f, p));
            } else {
              if ((s2 = !i3.data.trim().length) && i3.parent && !l2(i3.parent))
                continue;
              if (v2 && s2)
                continue;
              g2.push(i3.data);
            }
          return g2.length === 1 ? g2[0] : g2;
        };
      }, 370: (e3, t3, n3) => {
        function r3(e4) {
          return r3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, r3(e4);
        }
        var o2 = n3(597), i2 = n3(405).default, a2 = { reactCompat: true }, l2 = o2.version.split(".")[0] >= 16, c2 = /* @__PURE__ */ new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]);
        e3.exports = { PRESERVE_CUSTOM_ATTRIBUTES: l2, invertObject: function(e4, t4) {
          if (!e4 || r3(e4) !== "object")
            throw new TypeError("First argument must be an object");
          var n4, o3, i3 = typeof t4 == "function", a3 = {}, l3 = {};
          for (n4 in e4)
            o3 = e4[n4], i3 && (a3 = t4(n4, o3)) && a3.length === 2 ? l3[a3[0]] = a3[1] : typeof o3 == "string" && (l3[o3] = n4);
          return l3;
        }, isCustomComponent: function(e4, t4) {
          if (e4.indexOf("-") === -1)
            return t4 && typeof t4.is == "string";
          switch (e4) {
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
        }, setStyleProp: function(e4, t4) {
          if (e4 != null)
            try {
              t4.style = i2(e4, a2);
            } catch (e5) {
              t4.style = {};
            }
        }, canTextBeChildOfNode: function(e4) {
          return !c2.has(e4.name);
        }, elementsWithNoTextChildren: c2 };
      }, 242: (e3) => {
        var t3 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n3 = /\n/g, r3 = /^\s*/, o2 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i2 = /^:\s*/, a2 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l2 = /^[;\s]*/, c2 = /^\s+|\s+$/g, s2 = "";
        function u2(e4) {
          return e4 ? e4.replace(c2, s2) : s2;
        }
        e3.exports = function(e4, c3) {
          if (typeof e4 != "string")
            throw new TypeError("First argument must be a string");
          if (!e4)
            return [];
          c3 = c3 || {};
          var f = 1, p = 1;
          function d2(e5) {
            var t4 = e5.match(n3);
            t4 && (f += t4.length);
            var r4 = e5.lastIndexOf("\n");
            p = ~r4 ? e5.length - r4 : p + e5.length;
          }
          function y2() {
            var e5 = { line: f, column: p };
            return function(t4) {
              return t4.position = new m(e5), v2(), t4;
            };
          }
          function m(e5) {
            this.start = e5, this.end = { line: f, column: p }, this.source = c3.source;
          }
          m.prototype.content = e4;
          var h2 = [];
          function g2(t4) {
            var n4 = new Error(c3.source + ":" + f + ":" + p + ": " + t4);
            if (n4.reason = t4, n4.filename = c3.source, n4.line = f, n4.column = p, n4.source = e4, !c3.silent)
              throw n4;
            h2.push(n4);
          }
          function b2(t4) {
            var n4 = t4.exec(e4);
            if (n4) {
              var r4 = n4[0];
              return d2(r4), e4 = e4.slice(r4.length), n4;
            }
          }
          function v2() {
            b2(r3);
          }
          function x2(e5) {
            var t4;
            for (e5 = e5 || []; t4 = S2(); )
              t4 !== false && e5.push(t4);
            return e5;
          }
          function S2() {
            var t4 = y2();
            if (e4.charAt(0) == "/" && e4.charAt(1) == "*") {
              for (var n4 = 2; s2 != e4.charAt(n4) && (e4.charAt(n4) != "*" || e4.charAt(n4 + 1) != "/"); )
                ++n4;
              if (n4 += 2, s2 === e4.charAt(n4 - 1))
                return g2("End of comment missing");
              var r4 = e4.slice(2, n4 - 2);
              return p += 2, d2(r4), e4 = e4.slice(n4), p += 2, t4({ type: "comment", comment: r4 });
            }
          }
          function w2() {
            var e5 = y2(), n4 = b2(o2);
            if (n4) {
              if (S2(), !b2(i2))
                return g2("property missing ':'");
              var r4 = b2(a2), c4 = e5({ type: "declaration", property: u2(n4[0].replace(t3, s2)), value: r4 ? u2(r4[0].replace(t3, s2)) : s2 });
              return b2(l2), c4;
            }
          }
          return v2(), function() {
            var e5, t4 = [];
            for (x2(t4); e5 = w2(); )
              e5 !== false && (t4.push(e5), x2(t4));
            return t4;
          }();
        };
      }, 180: (e3) => {
        "use strict";
        var t3 = Object.getOwnPropertySymbols, n3 = Object.prototype.hasOwnProperty, r3 = Object.prototype.propertyIsEnumerable;
        function o2(e4) {
          if (e4 == null)
            throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e4);
        }
        e3.exports = function() {
          try {
            if (!Object.assign)
              return false;
            var e4 = new String("abc");
            if (e4[5] = "de", Object.getOwnPropertyNames(e4)[0] === "5")
              return false;
            for (var t4 = {}, n4 = 0; n4 < 10; n4++)
              t4["_" + String.fromCharCode(n4)] = n4;
            if (Object.getOwnPropertyNames(t4).map(function(e5) {
              return t4[e5];
            }).join("") !== "0123456789")
              return false;
            var r4 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e5) {
              r4[e5] = e5;
            }), Object.keys(Object.assign({}, r4)).join("") === "abcdefghijklmnopqrst";
          } catch (e5) {
            return false;
          }
        }() ? Object.assign : function(e4, i2) {
          for (var a2, l2, c2 = o2(e4), s2 = 1; s2 < arguments.length; s2++) {
            for (var u2 in a2 = Object(arguments[s2]))
              n3.call(a2, u2) && (c2[u2] = a2[u2]);
            if (t3) {
              l2 = t3(a2);
              for (var f = 0; f < l2.length; f++)
                r3.call(a2, l2[f]) && (c2[l2[f]] = a2[l2[f]]);
            }
          }
          return c2;
        };
      }, 583: (e3, t3, n3) => {
        "use strict";
        function r3(e4, t4) {
          (t4 == null || t4 > e4.length) && (t4 = e4.length);
          for (var n4 = 0, r4 = new Array(t4); n4 < t4; n4++)
            r4[n4] = e4[n4];
          return r4;
        }
        function o2(e4, t4, n4, r4, o3, i3, a3) {
          this.acceptsBooleans = t4 === 2 || t4 === 3 || t4 === 4, this.attributeName = r4, this.attributeNamespace = o3, this.mustUseProperty = n4, this.propertyName = e4, this.type = t4, this.sanitizeURL = i3, this.removeEmptyString = a3;
        }
        Object.defineProperty(t3, "__esModule", { value: true });
        var i2 = {};
        ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(function(e4) {
          i2[e4] = new o2(e4, 0, false, e4, null, false, false);
        }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e4) {
          var t4, n4, a3 = (n4 = 2, function(e5) {
            if (Array.isArray(e5))
              return e5;
          }(t4 = e4) || function(e5, t5) {
            var n5 = e5 == null ? null : typeof Symbol != "undefined" && e5[Symbol.iterator] || e5["@@iterator"];
            if (n5 != null) {
              var r4, o3, i3 = [], a4 = true, l4 = false;
              try {
                for (n5 = n5.call(e5); !(a4 = (r4 = n5.next()).done) && (i3.push(r4.value), !t5 || i3.length !== t5); a4 = true)
                  ;
              } catch (e6) {
                l4 = true, o3 = e6;
              } finally {
                try {
                  a4 || n5.return == null || n5.return();
                } finally {
                  if (l4)
                    throw o3;
                }
              }
              return i3;
            }
          }(t4, n4) || function(e5, t5) {
            if (e5) {
              if (typeof e5 == "string")
                return r3(e5, t5);
              var n5 = Object.prototype.toString.call(e5).slice(8, -1);
              return n5 === "Object" && e5.constructor && (n5 = e5.constructor.name), n5 === "Map" || n5 === "Set" ? Array.from(e5) : n5 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? r3(e5, t5) : void 0;
            }
          }(t4, n4) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }()), l3 = a3[0], c3 = a3[1];
          i2[l3] = new o2(l3, 1, false, c3, null, false, false);
        }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e4) {
          i2[e4] = new o2(e4, 2, false, e4.toLowerCase(), null, false, false);
        }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e4) {
          i2[e4] = new o2(e4, 2, false, e4, null, false, false);
        }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function(e4) {
          i2[e4] = new o2(e4, 3, false, e4.toLowerCase(), null, false, false);
        }), ["checked", "multiple", "muted", "selected"].forEach(function(e4) {
          i2[e4] = new o2(e4, 3, true, e4, null, false, false);
        }), ["capture", "download"].forEach(function(e4) {
          i2[e4] = new o2(e4, 4, false, e4, null, false, false);
        }), ["cols", "rows", "size", "span"].forEach(function(e4) {
          i2[e4] = new o2(e4, 6, false, e4, null, false, false);
        }), ["rowSpan", "start"].forEach(function(e4) {
          i2[e4] = new o2(e4, 5, false, e4.toLowerCase(), null, false, false);
        });
        var a2 = /[\-\:]([a-z])/g, l2 = function(e4) {
          return e4[1].toUpperCase();
        };
        ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function(e4) {
          var t4 = e4.replace(a2, l2);
          i2[t4] = new o2(t4, 1, false, e4, null, false, false);
        }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function(e4) {
          var t4 = e4.replace(a2, l2);
          i2[t4] = new o2(t4, 1, false, e4, "http://www.w3.org/1999/xlink", false, false);
        }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e4) {
          var t4 = e4.replace(a2, l2);
          i2[t4] = new o2(t4, 1, false, e4, "http://www.w3.org/XML/1998/namespace", false, false);
        }), ["tabIndex", "crossOrigin"].forEach(function(e4) {
          i2[e4] = new o2(e4, 1, false, e4.toLowerCase(), null, false, false);
        }), i2.xlinkHref = new o2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e4) {
          i2[e4] = new o2(e4, 1, false, e4.toLowerCase(), null, true, true);
        });
        var c2 = n3(256), s2 = c2.CAMELCASE, u2 = c2.SAME, f = c2.possibleStandardNames, p = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), d2 = Object.keys(f).reduce(function(e4, t4) {
          var n4 = f[t4];
          return n4 === u2 ? e4[t4] = t4 : n4 === s2 ? e4[t4.toLowerCase()] = t4 : e4[t4] = n4, e4;
        }, {});
        t3.BOOLEAN = 3, t3.BOOLEANISH_STRING = 2, t3.NUMERIC = 5, t3.OVERLOADED_BOOLEAN = 4, t3.POSITIVE_NUMERIC = 6, t3.RESERVED = 0, t3.STRING = 1, t3.getPropertyInfo = function(e4) {
          return i2.hasOwnProperty(e4) ? i2[e4] : null;
        }, t3.isCustomAttribute = p, t3.possibleStandardNames = d2;
      }, 256: (e3, t3) => {
        t3.SAME = 0, t3.CAMELCASE = 1, t3.possibleStandardNames = { accept: 0, acceptCharset: 1, "accept-charset": "acceptCharset", accessKey: 1, action: 0, allowFullScreen: 1, alt: 0, as: 0, async: 0, autoCapitalize: 1, autoComplete: 1, autoCorrect: 1, autoFocus: 1, autoPlay: 1, autoSave: 1, capture: 0, cellPadding: 1, cellSpacing: 1, challenge: 0, charSet: 1, checked: 0, children: 0, cite: 0, class: "className", classID: 1, className: 1, cols: 0, colSpan: 1, content: 0, contentEditable: 1, contextMenu: 1, controls: 0, controlsList: 1, coords: 0, crossOrigin: 1, dangerouslySetInnerHTML: 1, data: 0, dateTime: 1, default: 0, defaultChecked: 1, defaultValue: 1, defer: 0, dir: 0, disabled: 0, disablePictureInPicture: 1, disableRemotePlayback: 1, download: 0, draggable: 0, encType: 1, enterKeyHint: 1, for: "htmlFor", form: 0, formMethod: 1, formAction: 1, formEncType: 1, formNoValidate: 1, formTarget: 1, frameBorder: 1, headers: 0, height: 0, hidden: 0, high: 0, href: 0, hrefLang: 1, htmlFor: 1, httpEquiv: 1, "http-equiv": "httpEquiv", icon: 0, id: 0, innerHTML: 1, inputMode: 1, integrity: 0, is: 0, itemID: 1, itemProp: 1, itemRef: 1, itemScope: 1, itemType: 1, keyParams: 1, keyType: 1, kind: 0, label: 0, lang: 0, list: 0, loop: 0, low: 0, manifest: 0, marginWidth: 1, marginHeight: 1, max: 0, maxLength: 1, media: 0, mediaGroup: 1, method: 0, min: 0, minLength: 1, multiple: 0, muted: 0, name: 0, noModule: 1, nonce: 0, noValidate: 1, open: 0, optimum: 0, pattern: 0, placeholder: 0, playsInline: 1, poster: 0, preload: 0, profile: 0, radioGroup: 1, readOnly: 1, referrerPolicy: 1, rel: 0, required: 0, reversed: 0, role: 0, rows: 0, rowSpan: 1, sandbox: 0, scope: 0, scoped: 0, scrolling: 0, seamless: 0, selected: 0, shape: 0, size: 0, sizes: 0, span: 0, spellCheck: 1, src: 0, srcDoc: 1, srcLang: 1, srcSet: 1, start: 0, step: 0, style: 0, summary: 0, tabIndex: 1, target: 0, title: 0, type: 0, useMap: 1, value: 0, width: 0, wmode: 0, wrap: 0, about: 0, accentHeight: 1, "accent-height": "accentHeight", accumulate: 0, additive: 0, alignmentBaseline: 1, "alignment-baseline": "alignmentBaseline", allowReorder: 1, alphabetic: 0, amplitude: 0, arabicForm: 1, "arabic-form": "arabicForm", ascent: 0, attributeName: 1, attributeType: 1, autoReverse: 1, azimuth: 0, baseFrequency: 1, baselineShift: 1, "baseline-shift": "baselineShift", baseProfile: 1, bbox: 0, begin: 0, bias: 0, by: 0, calcMode: 1, capHeight: 1, "cap-height": "capHeight", clip: 0, clipPath: 1, "clip-path": "clipPath", clipPathUnits: 1, clipRule: 1, "clip-rule": "clipRule", color: 0, colorInterpolation: 1, "color-interpolation": "colorInterpolation", colorInterpolationFilters: 1, "color-interpolation-filters": "colorInterpolationFilters", colorProfile: 1, "color-profile": "colorProfile", colorRendering: 1, "color-rendering": "colorRendering", contentScriptType: 1, contentStyleType: 1, cursor: 0, cx: 0, cy: 0, d: 0, datatype: 0, decelerate: 0, descent: 0, diffuseConstant: 1, direction: 0, display: 0, divisor: 0, dominantBaseline: 1, "dominant-baseline": "dominantBaseline", dur: 0, dx: 0, dy: 0, edgeMode: 1, elevation: 0, enableBackground: 1, "enable-background": "enableBackground", end: 0, exponent: 0, externalResourcesRequired: 1, fill: 0, fillOpacity: 1, "fill-opacity": "fillOpacity", fillRule: 1, "fill-rule": "fillRule", filter: 0, filterRes: 1, filterUnits: 1, floodOpacity: 1, "flood-opacity": "floodOpacity", floodColor: 1, "flood-color": "floodColor", focusable: 0, fontFamily: 1, "font-family": "fontFamily", fontSize: 1, "font-size": "fontSize", fontSizeAdjust: 1, "font-size-adjust": "fontSizeAdjust", fontStretch: 1, "font-stretch": "fontStretch", fontStyle: 1, "font-style": "fontStyle", fontVariant: 1, "font-variant": "fontVariant", fontWeight: 1, "font-weight": "fontWeight", format: 0, from: 0, fx: 0, fy: 0, g1: 0, g2: 0, glyphName: 1, "glyph-name": "glyphName", glyphOrientationHorizontal: 1, "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphOrientationVertical: 1, "glyph-orientation-vertical": "glyphOrientationVertical", glyphRef: 1, gradientTransform: 1, gradientUnits: 1, hanging: 0, horizAdvX: 1, "horiz-adv-x": "horizAdvX", horizOriginX: 1, "horiz-origin-x": "horizOriginX", ideographic: 0, imageRendering: 1, "image-rendering": "imageRendering", in2: 0, in: 0, inlist: 0, intercept: 0, k1: 0, k2: 0, k3: 0, k4: 0, k: 0, kernelMatrix: 1, kernelUnitLength: 1, kerning: 0, keyPoints: 1, keySplines: 1, keyTimes: 1, lengthAdjust: 1, letterSpacing: 1, "letter-spacing": "letterSpacing", lightingColor: 1, "lighting-color": "lightingColor", limitingConeAngle: 1, local: 0, markerEnd: 1, "marker-end": "markerEnd", markerHeight: 1, markerMid: 1, "marker-mid": "markerMid", markerStart: 1, "marker-start": "markerStart", markerUnits: 1, markerWidth: 1, mask: 0, maskContentUnits: 1, maskUnits: 1, mathematical: 0, mode: 0, numOctaves: 1, offset: 0, opacity: 0, operator: 0, order: 0, orient: 0, orientation: 0, origin: 0, overflow: 0, overlinePosition: 1, "overline-position": "overlinePosition", overlineThickness: 1, "overline-thickness": "overlineThickness", paintOrder: 1, "paint-order": "paintOrder", panose1: 0, "panose-1": "panose1", pathLength: 1, patternContentUnits: 1, patternTransform: 1, patternUnits: 1, pointerEvents: 1, "pointer-events": "pointerEvents", points: 0, pointsAtX: 1, pointsAtY: 1, pointsAtZ: 1, prefix: 0, preserveAlpha: 1, preserveAspectRatio: 1, primitiveUnits: 1, property: 0, r: 0, radius: 0, refX: 1, refY: 1, renderingIntent: 1, "rendering-intent": "renderingIntent", repeatCount: 1, repeatDur: 1, requiredExtensions: 1, requiredFeatures: 1, resource: 0, restart: 0, result: 0, results: 0, rotate: 0, rx: 0, ry: 0, scale: 0, security: 0, seed: 0, shapeRendering: 1, "shape-rendering": "shapeRendering", slope: 0, spacing: 0, specularConstant: 1, specularExponent: 1, speed: 0, spreadMethod: 1, startOffset: 1, stdDeviation: 1, stemh: 0, stemv: 0, stitchTiles: 1, stopColor: 1, "stop-color": "stopColor", stopOpacity: 1, "stop-opacity": "stopOpacity", strikethroughPosition: 1, "strikethrough-position": "strikethroughPosition", strikethroughThickness: 1, "strikethrough-thickness": "strikethroughThickness", string: 0, stroke: 0, strokeDasharray: 1, "stroke-dasharray": "strokeDasharray", strokeDashoffset: 1, "stroke-dashoffset": "strokeDashoffset", strokeLinecap: 1, "stroke-linecap": "strokeLinecap", strokeLinejoin: 1, "stroke-linejoin": "strokeLinejoin", strokeMiterlimit: 1, "stroke-miterlimit": "strokeMiterlimit", strokeWidth: 1, "stroke-width": "strokeWidth", strokeOpacity: 1, "stroke-opacity": "strokeOpacity", suppressContentEditableWarning: 1, suppressHydrationWarning: 1, surfaceScale: 1, systemLanguage: 1, tableValues: 1, targetX: 1, targetY: 1, textAnchor: 1, "text-anchor": "textAnchor", textDecoration: 1, "text-decoration": "textDecoration", textLength: 1, textRendering: 1, "text-rendering": "textRendering", to: 0, transform: 0, typeof: 0, u1: 0, u2: 0, underlinePosition: 1, "underline-position": "underlinePosition", underlineThickness: 1, "underline-thickness": "underlineThickness", unicode: 0, unicodeBidi: 1, "unicode-bidi": "unicodeBidi", unicodeRange: 1, "unicode-range": "unicodeRange", unitsPerEm: 1, "units-per-em": "unitsPerEm", unselectable: 0, vAlphabetic: 1, "v-alphabetic": "vAlphabetic", values: 0, vectorEffect: 1, "vector-effect": "vectorEffect", version: 0, vertAdvY: 1, "vert-adv-y": "vertAdvY", vertOriginX: 1, "vert-origin-x": "vertOriginX", vertOriginY: 1, "vert-origin-y": "vertOriginY", vHanging: 1, "v-hanging": "vHanging", vIdeographic: 1, "v-ideographic": "vIdeographic", viewBox: 1, viewTarget: 1, visibility: 0, vMathematical: 1, "v-mathematical": "vMathematical", vocab: 0, widths: 0, wordSpacing: 1, "word-spacing": "wordSpacing", writingMode: 1, "writing-mode": "writingMode", x1: 0, x2: 0, x: 0, xChannelSelector: 1, xHeight: 1, "x-height": "xHeight", xlinkActuate: 1, "xlink:actuate": "xlinkActuate", xlinkArcrole: 1, "xlink:arcrole": "xlinkArcrole", xlinkHref: 1, "xlink:href": "xlinkHref", xlinkRole: 1, "xlink:role": "xlinkRole", xlinkShow: 1, "xlink:show": "xlinkShow", xlinkTitle: 1, "xlink:title": "xlinkTitle", xlinkType: 1, "xlink:type": "xlinkType", xmlBase: 1, "xml:base": "xmlBase", xmlLang: 1, "xml:lang": "xmlLang", xmlns: 0, "xml:space": "xmlSpace", xmlnsXlink: 1, "xmlns:xlink": "xmlnsXlink", xmlSpace: 1, y1: 0, y2: 0, y: 0, yChannelSelector: 1, z: 0, zoomAndPan: 1 };
      }, 318: (e3, t3, n3) => {
        "use strict";
        function r3(e4) {
          return r3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, r3(e4);
        }
        var o2 = n3(180), i2 = 60103, a2 = 60106;
        t3.Fragment = 60107, t3.StrictMode = 60108, t3.Profiler = 60114;
        var l2 = 60109, c2 = 60110, s2 = 60112;
        t3.Suspense = 60113;
        var u2 = 60115, f = 60116;
        if (typeof Symbol == "function" && Symbol.for) {
          var p = Symbol.for;
          i2 = p("react.element"), a2 = p("react.portal"), t3.Fragment = p("react.fragment"), t3.StrictMode = p("react.strict_mode"), t3.Profiler = p("react.profiler"), l2 = p("react.provider"), c2 = p("react.context"), s2 = p("react.forward_ref"), t3.Suspense = p("react.suspense"), u2 = p("react.memo"), f = p("react.lazy");
        }
        var d2 = typeof Symbol == "function" && Symbol.iterator;
        function y2(e4) {
          for (var t4 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e4, n4 = 1; n4 < arguments.length; n4++)
            t4 += "&args[]=" + encodeURIComponent(arguments[n4]);
          return "Minified React error #" + e4 + "; visit " + t4 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var m = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
        }, enqueueReplaceState: function() {
        }, enqueueSetState: function() {
        } }, h2 = {};
        function g2(e4, t4, n4) {
          this.props = e4, this.context = t4, this.refs = h2, this.updater = n4 || m;
        }
        function b2() {
        }
        function v2(e4, t4, n4) {
          this.props = e4, this.context = t4, this.refs = h2, this.updater = n4 || m;
        }
        g2.prototype.isReactComponent = {}, g2.prototype.setState = function(e4, t4) {
          if (r3(e4) !== "object" && typeof e4 != "function" && e4 != null)
            throw Error(y2(85));
          this.updater.enqueueSetState(this, e4, t4, "setState");
        }, g2.prototype.forceUpdate = function(e4) {
          this.updater.enqueueForceUpdate(this, e4, "forceUpdate");
        }, b2.prototype = g2.prototype;
        var x2 = v2.prototype = new b2();
        x2.constructor = v2, o2(x2, g2.prototype), x2.isPureReactComponent = true;
        var S2 = { current: null }, w2 = Object.prototype.hasOwnProperty, E2 = { key: true, ref: true, __self: true, __source: true };
        function k2(e4, t4, n4) {
          var r4, o3 = {}, a3 = null, l3 = null;
          if (t4 != null)
            for (r4 in t4.ref !== void 0 && (l3 = t4.ref), t4.key !== void 0 && (a3 = "" + t4.key), t4)
              w2.call(t4, r4) && !E2.hasOwnProperty(r4) && (o3[r4] = t4[r4]);
          var c3 = arguments.length - 2;
          if (c3 === 1)
            o3.children = n4;
          else if (1 < c3) {
            for (var s3 = Array(c3), u3 = 0; u3 < c3; u3++)
              s3[u3] = arguments[u3 + 2];
            o3.children = s3;
          }
          if (e4 && e4.defaultProps)
            for (r4 in c3 = e4.defaultProps)
              o3[r4] === void 0 && (o3[r4] = c3[r4]);
          return { $$typeof: i2, type: e4, key: a3, ref: l3, props: o3, _owner: S2.current };
        }
        function j2(e4) {
          return r3(e4) === "object" && e4 !== null && e4.$$typeof === i2;
        }
        var O = /\/+/g;
        function C(e4, t4) {
          return r3(e4) === "object" && e4 !== null && e4.key != null ? function(e5) {
            var t5 = { "=": "=0", ":": "=2" };
            return "$" + e5.replace(/[=:]/g, function(e6) {
              return t5[e6];
            });
          }("" + e4.key) : t4.toString(36);
        }
        function N2(e4, t4, n4, o3, l3) {
          var c3 = r3(e4);
          c3 !== "undefined" && c3 !== "boolean" || (e4 = null);
          var s3 = false;
          if (e4 === null)
            s3 = true;
          else
            switch (c3) {
              case "string":
              case "number":
                s3 = true;
                break;
              case "object":
                switch (e4.$$typeof) {
                  case i2:
                  case a2:
                    s3 = true;
                }
            }
          if (s3)
            return l3 = l3(s3 = e4), e4 = o3 === "" ? "." + C(s3, 0) : o3, Array.isArray(l3) ? (n4 = "", e4 != null && (n4 = e4.replace(O, "$&/") + "/"), N2(l3, t4, n4, "", function(e5) {
              return e5;
            })) : l3 != null && (j2(l3) && (l3 = function(e5, t5) {
              return { $$typeof: i2, type: e5.type, key: t5, ref: e5.ref, props: e5.props, _owner: e5._owner };
            }(l3, n4 + (!l3.key || s3 && s3.key === l3.key ? "" : ("" + l3.key).replace(O, "$&/") + "/") + e4)), t4.push(l3)), 1;
          if (s3 = 0, o3 = o3 === "" ? "." : o3 + ":", Array.isArray(e4))
            for (var u3 = 0; u3 < e4.length; u3++) {
              var f2 = o3 + C(c3 = e4[u3], u3);
              s3 += N2(c3, t4, n4, f2, l3);
            }
          else if (f2 = function(e5) {
            return e5 === null || r3(e5) !== "object" ? null : typeof (e5 = d2 && e5[d2] || e5["@@iterator"]) == "function" ? e5 : null;
          }(e4), typeof f2 == "function")
            for (e4 = f2.call(e4), u3 = 0; !(c3 = e4.next()).done; )
              s3 += N2(c3 = c3.value, t4, n4, f2 = o3 + C(c3, u3++), l3);
          else if (c3 === "object")
            throw t4 = "" + e4, Error(y2(31, t4 === "[object Object]" ? "object with keys {" + Object.keys(e4).join(", ") + "}" : t4));
          return s3;
        }
        function T2(e4, t4, n4) {
          if (e4 == null)
            return e4;
          var r4 = [], o3 = 0;
          return N2(e4, r4, "", "", function(e5) {
            return t4.call(n4, e5, o3++);
          }), r4;
        }
        function D2(e4) {
          if (e4._status === -1) {
            var t4 = e4._result;
            t4 = t4(), e4._status = 0, e4._result = t4, t4.then(function(t5) {
              e4._status === 0 && (t5 = t5.default, e4._status = 1, e4._result = t5);
            }, function(t5) {
              e4._status === 0 && (e4._status = 2, e4._result = t5);
            });
          }
          if (e4._status === 1)
            return e4._result;
          throw e4._result;
        }
        var A2 = { current: null };
        function P2() {
          var e4 = A2.current;
          if (e4 === null)
            throw Error(y2(321));
          return e4;
        }
        var _2 = { ReactCurrentDispatcher: A2, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: S2, IsSomeRendererActing: { current: false }, assign: o2 };
        t3.Children = { map: T2, forEach: function(e4, t4, n4) {
          T2(e4, function() {
            t4.apply(this, arguments);
          }, n4);
        }, count: function(e4) {
          var t4 = 0;
          return T2(e4, function() {
            t4++;
          }), t4;
        }, toArray: function(e4) {
          return T2(e4, function(e5) {
            return e5;
          }) || [];
        }, only: function(e4) {
          if (!j2(e4))
            throw Error(y2(143));
          return e4;
        } }, t3.Component = g2, t3.PureComponent = v2, t3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _2, t3.cloneElement = function(e4, t4, n4) {
          if (e4 == null)
            throw Error(y2(267, e4));
          var r4 = o2({}, e4.props), a3 = e4.key, l3 = e4.ref, c3 = e4._owner;
          if (t4 != null) {
            if (t4.ref !== void 0 && (l3 = t4.ref, c3 = S2.current), t4.key !== void 0 && (a3 = "" + t4.key), e4.type && e4.type.defaultProps)
              var s3 = e4.type.defaultProps;
            for (u3 in t4)
              w2.call(t4, u3) && !E2.hasOwnProperty(u3) && (r4[u3] = t4[u3] === void 0 && s3 !== void 0 ? s3[u3] : t4[u3]);
          }
          var u3 = arguments.length - 2;
          if (u3 === 1)
            r4.children = n4;
          else if (1 < u3) {
            s3 = Array(u3);
            for (var f2 = 0; f2 < u3; f2++)
              s3[f2] = arguments[f2 + 2];
            r4.children = s3;
          }
          return { $$typeof: i2, type: e4.type, key: a3, ref: l3, props: r4, _owner: c3 };
        }, t3.createContext = function(e4, t4) {
          return t4 === void 0 && (t4 = null), (e4 = { $$typeof: c2, _calculateChangedBits: t4, _currentValue: e4, _currentValue2: e4, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: l2, _context: e4 }, e4.Consumer = e4;
        }, t3.createElement = k2, t3.createFactory = function(e4) {
          var t4 = k2.bind(null, e4);
          return t4.type = e4, t4;
        }, t3.createRef = function() {
          return { current: null };
        }, t3.forwardRef = function(e4) {
          return { $$typeof: s2, render: e4 };
        }, t3.isValidElement = j2, t3.lazy = function(e4) {
          return { $$typeof: f, _payload: { _status: -1, _result: e4 }, _init: D2 };
        }, t3.memo = function(e4, t4) {
          return { $$typeof: u2, type: e4, compare: t4 === void 0 ? null : t4 };
        }, t3.useCallback = function(e4, t4) {
          return P2().useCallback(e4, t4);
        }, t3.useContext = function(e4, t4) {
          return P2().useContext(e4, t4);
        }, t3.useDebugValue = function() {
        }, t3.useEffect = function(e4, t4) {
          return P2().useEffect(e4, t4);
        }, t3.useImperativeHandle = function(e4, t4, n4) {
          return P2().useImperativeHandle(e4, t4, n4);
        }, t3.useLayoutEffect = function(e4, t4) {
          return P2().useLayoutEffect(e4, t4);
        }, t3.useMemo = function(e4, t4) {
          return P2().useMemo(e4, t4);
        }, t3.useReducer = function(e4, t4, n4) {
          return P2().useReducer(e4, t4, n4);
        }, t3.useRef = function(e4) {
          return P2().useRef(e4);
        }, t3.useState = function(e4) {
          return P2().useState(e4);
        }, t3.version = "17.0.2";
      }, 597: (e3, t3, n3) => {
        "use strict";
        e3.exports = n3(318);
      }, 405: function(e3, t3, n3) {
        "use strict";
        var r3 = this && this.__importDefault || function(e4) {
          return e4 && e4.__esModule ? e4 : { default: e4 };
        };
        t3.__esModule = true;
        var o2 = r3(n3(558)), i2 = n3(207);
        t3.default = function(e4, t4) {
          var n4 = {};
          return e4 && typeof e4 == "string" ? (o2.default(e4, function(e5, r4) {
            e5 && r4 && (n4[i2.camelCase(e5, t4)] = r4);
          }), n4) : n4;
        };
      }, 207: (e3, t3) => {
        "use strict";
        t3.__esModule = true, t3.camelCase = void 0;
        var n3 = /^--[a-zA-Z0-9-]+$/, r3 = /-([a-z])/g, o2 = /^[^-]+$/, i2 = /^-(webkit|moz|ms|o|khtml)-/, a2 = function(e4, t4) {
          return t4.toUpperCase();
        }, l2 = function(e4, t4) {
          return t4 + "-";
        };
        t3.camelCase = function(e4, t4) {
          return t4 === void 0 && (t4 = {}), function(e5) {
            return !e5 || o2.test(e5) || n3.test(e5);
          }(e4) ? e4 : (e4 = e4.toLowerCase(), t4.reactCompat || (e4 = e4.replace(i2, l2)), e4.replace(r3, a2));
        };
      }, 558: (e3, t3, n3) => {
        var r3 = n3(242);
        e3.exports = function(e4, t4) {
          var n4, o2 = null;
          if (!e4 || typeof e4 != "string")
            return o2;
          for (var i2, a2, l2 = r3(e4), c2 = typeof t4 == "function", s2 = 0, u2 = l2.length; s2 < u2; s2++)
            i2 = (n4 = l2[s2]).property, a2 = n4.value, c2 ? t4(i2, a2, n4) : a2 && (o2 || (o2 = {}), o2[i2] = a2);
          return o2;
        };
      }, 787: (e3, t3, n3) => {
        "use strict";
        n3.r(t3), n3.d(t3, { default: () => l2 });
        var r3 = n3(973), o2 = n3.n(r3), i2 = n3(681), a2 = n3.n(i2)()(o2());
        a2.push([e3.id, "@supports (-webkit-appearance: none) or (-moz-appearance: none) {\n  input[type='checkbox'] {\n    --active: #275EFE;\n    --active-inner: #fff;\n    --focus: 2px rgba(39, 94, 254, .3);\n    --border: #BBC1E1;\n    --border-hover: #275EFE;\n    --background: #fff;\n    --disabled: #F6F8FF;\n    --disabled-inner: #E1E6F9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-transition: background .3s, border-color .3s, box-shadow .2s;\n  }\n  input[type='checkbox']:after {\n    content: '';\n    display: block;\n    left: 0;\n    top: 0;\n    position: absolute;\n    -webkit-transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    transition: opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);\n    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s), -webkit-transform var(--d-t, 0.3s) var(--d-t-e, ease);\n    width: 5px;\n    height: 9px;\n    border: 2px solid var(--active-inner);\n    border-top: 0;\n    border-left: 0;\n    left: 7px;\n    top: 4px;\n    opacity: var(--o, 0);\n    -webkit-transform: rotate(var(--r, 20deg));\n    transform: rotate(var(--r, 20deg));\n  }\n  input[type='checkbox']:checked {\n    --b: var(--active);\n    --bc: var(--active);\n    --d-o: .3s;\n    --d-t: .6s;\n    --d-t-e: cubic-bezier(.2, .85, .32, 1.2);\n    --r: 43deg;\n    --o: 1;\n  }\n  input[type='checkbox']:disabled {\n    --b: var(--disabled);\n    cursor: not-allowed;\n    opacity: .9;\n  }\n  input[type='checkbox']:disabled:checked  {\n    --b: var(--disabled-inner);\n    --bc: var(--border);\n  }\n  input[type='checkbox']:disabled + label  {\n    cursor: not-allowed;\n  }\n  input[type='checkbox']:hover:not(:checked):not(:disabled) {\n    --bc: var(--border-hover);\n  }\n  input[type='checkbox']:focus {\n    box-shadow: 0 0 0 var(--focus);\n  }\n}\nul {\n  margin: 12px;\n  padding: 0;\n  list-style: none;\n  width: 100%;\n  max-width: 320px;\n}\nul li {\n  margin: 16px 0;\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nhtml { box-sizing: border-box; }\n* { box-sizing: inherit; }\n*:before, *:after { box-sizing: inherit; }\n", ""]);
        const l2 = a2;
      }, 962: (e3, t3, n3) => {
        var r3 = n3(787), o2 = n3(718), i2 = typeof r3 == "string" ? [[e3.id, r3, ""]] : r3;
        (t3 = e3.exports = r3.locals || {})._getContent = function() {
          return i2;
        }, t3._getCss = function() {
          return "" + r3;
        }, t3._insertCss = function(e4) {
          return o2(i2, e4);
        };
      }, 718: (e3) => {
        "use strict";
        var t3 = {};
        function n3(e4) {
          e4.forEach(function(e5) {
            if (--t3[e5] <= 0) {
              var n4 = document.getElementById(e5);
              n4 && n4.parentNode.removeChild(n4);
            }
          });
        }
        e3.exports = function(e4, r3) {
          for (var o2, i2 = r3 === void 0 ? {} : r3, a2 = i2.replace, l2 = a2 !== void 0 && a2, c2 = i2.prepend, s2 = c2 !== void 0 && c2, u2 = i2.prefix, f = u2 === void 0 ? "s" : u2, p = [], d2 = 0; d2 < e4.length; d2++) {
            var y2 = e4[d2], m = y2[0], h2 = y2[1], g2 = y2[2], b2 = y2[3], v2 = "" + f + m + "-" + d2;
            if (p.push(v2), !t3[v2] || l2) {
              t3[v2] = 1;
              var x2 = document.getElementById(v2), S2 = false;
              x2 || (S2 = true, (x2 = document.createElement("style")).setAttribute("type", "text/css"), x2.id = v2, g2 && x2.setAttribute("media", g2));
              var w2 = h2;
              b2 && typeof btoa == "function" && (w2 += "\n/*# sourceMappingURL=data:application/json;base64," + (o2 = JSON.stringify(b2), btoa(encodeURIComponent(o2).replace(/%([0-9A-F]{2})/g, function(e5, t4) {
                return String.fromCharCode("0x" + t4);
              })) + "*/"), w2 += "\n/*# sourceURL=" + b2.file + "?" + v2 + "*/"), "textContent" in x2 ? x2.textContent = w2 : x2.styleSheet.cssText = w2, S2 && (s2 ? document.head.insertBefore(x2, document.head.childNodes[0]) : document.head.appendChild(x2));
            } else
              t3[v2]++;
          }
          return n3.bind(null, p);
        };
      } }, t2 = {};
      function n2(r3) {
        var o2 = t2[r3];
        if (o2 !== void 0)
          return o2.exports;
        var i2 = t2[r3] = { id: r3, exports: {} };
        return e2[r3].call(i2.exports, i2, i2.exports, n2), i2.exports;
      }
      n2.amdO = {}, n2.n = (e3) => {
        var t3 = e3 && e3.__esModule ? () => e3.default : () => e3;
        return n2.d(t3, { a: t3 }), t3;
      }, n2.d = (e3, t3) => {
        for (var r3 in t3)
          n2.o(t3, r3) && !n2.o(e3, r3) && Object.defineProperty(e3, r3, { enumerable: true, get: t3[r3] });
      }, n2.o = (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3), n2.r = (e3) => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
      };
      var r2 = {};
      return (() => {
        "use strict";
        n2.r(r2), n2.d(r2, { ChecklistOutput: () => re2, CodeBoxOutput: () => Pe2, DelimiterOutput: () => ke2, EmbedOutput: () => R2, HeaderOutput: () => s2, ImageOutput: () => x2, LinkToolOutput: () => Ue, ListOutput: () => H2, ParagraphOutput: () => d2, PersonalityOutput: () => Ke, QuoteOutput: () => X2, TableOutput: () => ge2, VideoOutput: () => C, WarningOutput: () => se2, default: () => et });
        var e3 = n2(597), t3 = n2(356);
        t3.domToReact, t3.htmlToDOM, t3.attributesToProps, t3.Element;
        const o2 = t3, i2 = { margin: "8px 0", marginTop: "15px" };
        function a2(e4) {
          return a2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, a2(e4);
        }
        var l2 = function() {
          return l2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, l2.apply(this, arguments);
        }, c2 = ["h1", "h2", "h3", "h4", "h5", "h6"];
        const s2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, s3 = t4.classNames, u3 = t4.config;
          if (!n3)
            return e3.createElement(e3.Fragment, null);
          r3 && a2(r3) === "object" || (r3 = {}), u3 && a2(u3) === "object" || (u3 = { disableDefaultStyle: false }), s3 && typeof s3 == "string" || (s3 = {}), c2.forEach(function(e4) {
            r3[e4] && a2(r3[e4]) === "object" || (r3[e4] = {}), s3[e4] && typeof s3[e4] == "string" || (s3[e4] = "");
          });
          var f2 = u3.disableDefaultStyle ? r3.h1 : l2(l2({}, i2), r3.h1), p2 = u3.disableDefaultStyle ? r3.h2 : l2(l2({}, i2), r3.h2), d3 = u3.disableDefaultStyle ? r3.h3 : l2(l2({}, i2), r3.h3), y3 = u3.disableDefaultStyle ? r3.h4 : l2(l2({}, i2), r3.h4), m2 = u3.disableDefaultStyle ? r3.h5 : l2(l2({}, i2), r3.h5), h3 = u3.disableDefaultStyle ? r3.h6 : l2(l2({}, i2), r3.h6), g3 = null;
          if (typeof n3 == "string" ? g3 = n3 : a2(n3) === "object" && n3.text && typeof n3.text == "string" && (g3 = n3.text), !g3)
            return e3.createElement(e3.Fragment, null);
          if (a2(n3) === "object" && n3.level && typeof n3.level == "number")
            switch (n3.level) {
              case 1:
                return e3.createElement("h1", { style: f2, className: s3 }, o2(g3));
              case 2:
                return e3.createElement("h2", { style: p2, className: s3 }, o2(g3));
              case 3:
                return e3.createElement("h3", { style: d3, className: s3 }, o2(g3));
              case 4:
              default:
                return e3.createElement("h4", { style: y3, className: s3 }, o2(g3));
              case 5:
                return e3.createElement("h5", { style: m2, className: s3 }, o2(g3));
              case 6:
                return e3.createElement("h6", { style: h3, className: s3 }, o2(g3));
            }
          return e3.createElement("h4", { style: y3, className: s3 }, o2(g3));
        }, u2 = { margin: "5px 0", textAlign: "left" };
        function f(e4) {
          return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, f(e4);
        }
        var p = function() {
          return p = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, p.apply(this, arguments);
        };
        const d2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3)
            return "";
          r3 && f(r3) === "object" || (r3 = {}), a3 && f(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && typeof i3 == "string" || (i3 = {});
          var l3 = a3.disableDefaultStyle ? r3 : p(p({}, u2), r3), c3 = null;
          return typeof n3 == "string" ? c3 = n3 : f(n3) === "object" && n3.text && typeof n3.text == "string" && (c3 = n3.text), c3 ? e3.createElement("p", { style: l3, className: i3 }, o2(c3)) : "";
        }, y2 = { maxWidth: "100%", maxHeight: "400px" }, m = { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", maxHeight: "400px", overflow: "hidden", backgroundColor: "aliceblue", border: "1px solid #eee" }, h2 = { position: "absolute", top: "8px", right: "8px", padding: "5px 10px", fontSize: "12px", backgroundColor: "#2d333a", color: "white", borderRadius: "2px", cursor: "default" };
        function g2(e4) {
          return g2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, g2(e4);
        }
        var b2 = function() {
          return b2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, b2.apply(this, arguments);
        }, v2 = ["img", "figure", "figcaption"];
        const x2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3 || !n3.file || !n3.file.url)
            return "";
          r3 && g2(r3) === "object" || (r3 = {}), a3 && g2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && g2(i3) === "object" || (i3 = {}), v2.forEach(function(e4) {
            r3[e4] && g2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.img : b2(b2({}, y2), r3.img);
          l3.width = n3.stretched ? "100%" : "";
          var c3 = a3.disableDefaultStyle ? r3.figure : b2(b2({}, m), r3.figure);
          n3.withBorder || (c3.border = "none"), n3.withBackground || (c3.backgroundColor = "none");
          var s3 = a3.disableDefaultStyle ? r3.figcaption : b2(b2({}, h2), r3.figcaption);
          return e3.createElement("figure", { style: c3, className: i3.figure }, e3.createElement("img", { src: n3.file.url, alt: n3.caption || "", style: l3, className: i3.img }), n3.caption && e3.createElement("figcaption", { style: s3, className: i3.figcaption }, o2(n3.caption)));
        }, S2 = { maxWidth: "100%" }, w2 = { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", overflow: "hidden", backgroundColor: "aliceblue", border: "1px solid #eee" }, E2 = { position: "absolute", top: "8px", right: "8px", padding: "5px 10px", fontSize: "12px", backgroundColor: "#2d333a", color: "white", borderRadius: "2px", cursor: "default" };
        function k2(e4) {
          return k2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, k2(e4);
        }
        var j2 = function() {
          return j2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, j2.apply(this, arguments);
        }, O = ["video", "figure", "figcaption"];
        const C = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3 || !n3.url)
            return "";
          r3 && k2(r3) === "object" || (r3 = {}), a3 && k2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && k2(i3) === "object" || (i3 = {}), O.forEach(function(e4) {
            r3[e4] && k2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.video : j2(j2({}, S2), r3.video);
          l3.width = n3.stretched ? "100%" : "";
          var c3 = a3.disableDefaultStyle ? r3.figure : j2(j2({}, w2), r3.figure);
          n3.withBorder || (c3.border = "none"), n3.withBackground || (c3.backgroundColor = "none");
          var s3 = a3.disableDefaultStyle ? r3.figcaption : j2(j2({}, E2), r3.figcaption);
          return e3.createElement("figure", { style: c3, className: i3.figure }, e3.createElement("video", { style: l3, className: i3.video, autoPlay: n3.autoPlay, muted: n3.muted, controls: n3.controls }, e3.createElement("source", { src: n3.url }), "Your browser does not support the video tag."), n3.caption && e3.createElement("figcaption", { style: s3, className: i3.figcaption }, o2(n3.caption)));
        }, N2 = { maxWidth: "100%", width: "100%", height: "400px", maxHeight: "400px", borderRadius: "5px", boxShadow: "none", outline: "none", border: "none" }, T2 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px 0", width: "100%", maxWidth: "100%", height: "400px", maxHeight: "400px", overflow: "hidden" }, D2 = { padding: "5px 10px", fontSize: "12px", borderRadius: "2px", cursor: "default" };
        function A2(e4) {
          return A2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, A2(e4);
        }
        var P2 = function() {
          return P2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, P2.apply(this, arguments);
        }, _2 = ["video", "figure", "figcaption"];
        const R2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3 || !n3.embed)
            return "";
          r3 && A2(r3) === "object" || (r3 = {}), a3 && A2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && A2(i3) === "object" || (i3 = {}), _2.forEach(function(e4) {
            r3[e4] && A2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.video : P2(P2({}, N2), r3.video);
          n3.width && (l3.width = n3.width), n3.height && (l3.height = n3.height);
          var c3 = a3.disableDefaultStyle ? r3.figure : P2(P2({}, T2), r3.figure), s3 = a3.disableDefaultStyle ? r3.figcaption : P2(P2({}, D2), r3.figcaption);
          return e3.createElement("figure", { style: c3, className: i3.figure }, e3.createElement("iframe", { src: n3.embed, style: l3, className: i3.video }), n3.caption && e3.createElement("figcaption", { style: s3, className: i3.figcaption }, o2(n3.caption)));
        }, I2 = { margin: "5px 0" }, M2 = {};
        function F2(e4) {
          return F2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, F2(e4);
        }
        var L2 = function() {
          return L2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, L2.apply(this, arguments);
        }, z2 = ["ordered", "unordered"], B2 = ["container", "listItem"];
        const H2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3)
            return "";
          r3 && F2(r3) === "object" || (r3 = {}), a3 && F2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && F2(i3) === "object" || (i3 = {}), B2.forEach(function(e4) {
            r3[e4] && F2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.container : L2(L2({}, I2), r3.container), c3 = a3.disableDefaultStyle ? r3.listItem : L2(L2({}, M2), r3.listItem), s3 = [], u3 = "unordered";
          return typeof n3 == "string" ? s3.push(n3) : F2(n3) === "object" && (n3.items && Array.isArray(n3.items) && (s3 = n3.items.map(function(t5, n4) {
            return e3.createElement("li", { key: n4, style: c3, className: i3.listItem }, o2(t5));
          })), n3.style && z2.includes(n3.style) && (u3 = n3.style)), s3.length <= 0 ? "" : u3 === "ordered" ? e3.createElement("ol", { style: l3, className: i3.container }, s3) : e3.createElement("ul", { style: l3, className: i3.container }, s3);
        }, U2 = { quoteStyle: { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "5px 0", textAlign: "left" }, contentStyle: { minWidth: "240px", width: "80%", margin: "5px 0", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", border: "1px solid var(--primary-grey)", backgroundColor: "var(--secondary-white)", borderRadius: "var(--default-radius)" }, authorStyle: { fontWeight: "bold", margin: "0 5px 5px 5px" }, messageStyle: {} };
        var W2 = function() {
          return W2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, W2.apply(this, arguments);
        };
        const q2 = function(t4) {
          var n3 = t4.author, r3 = n3 === void 0 ? "Unknown" : n3, o3 = t4.message, i3 = t4.config, a3 = t4.classNames, l3 = t4.style, c3 = l3.container, s3 = l3.content, u3 = l3.message, f2 = l3.author;
          return e3.createElement("div", { style: i3.disableDefaultStyle ? U2.quoteStyle : W2(W2({}, U2.quoteStyle), c3), className: a3.container }, e3.createElement("span", { style: i3.disableDefaultStyle ? U2.contentStyle : W2(W2({}, U2.contentStyle), s3), className: a3.content }, e3.createElement("p", { style: i3.disableDefaultStyle ? U2.messageStyle : W2(W2({}, U2.messageStyle), u3), className: a3.message }, e3.createElement("strong", null, '"'), o3, e3.createElement("strong", null, '"')), e3.createElement("p", { style: i3.disableDefaultStyle ? U2.authorStyle : W2(W2({}, U2.authorStyle), f2), className: a3.author }, e3.createElement("strong", null, e3.createElement("small", null, r3)))));
        };
        function V2(e4) {
          return V2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, V2(e4);
        }
        var $2 = ["container", "content", "author", "message"];
        const X2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3)
            return "";
          r3 && V2(r3) === "object" || (r3 = {}), a3 && V2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && V2(i3) === "object" || (i3 = {}), $2.forEach(function(e4) {
            r3[e4] && V2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = null, c3 = "Unknown";
          return typeof n3 == "string" ? l3 = n3 : V2(n3) === "object" && n3.text && typeof n3.text == "string" && (l3 = n3.text, n3.caption && typeof n3.caption == "string" && (c3 = n3.caption), n3.alignment && typeof n3.alignment == "string" && (r3.textAlign = n3.alignment)), l3 ? e3.createElement(q2, { author: o2(c3), message: o2(l3), style: r3, classNames: i3, config: a3 }) : "";
        };
        var G2 = n2(313), Y2 = n2.n(G2);
        const J2 = { margin: "5px 0" }, Z2 = { display: "flex", justifyContent: "flex-start", alignItems: "center" }, K2 = { height: "17px", width: "17px", outline: "none", display: "inline-block", verticalAlign: "top", position: "relative", margin: 0, marginRight: "5px", cursor: "pointer", border: "1px solid var(--bc, var(--border))", background: "var(--b, var(--background))", transition: "background .3s, border-color .3s, box-shadow .2s" }, Q2 = { fontSize: "14px", lineHeight: "21px", display: "inline-block", verticalAlign: "top", cursor: "pointer", marginLeft: "4px" };
        function ee2(e4) {
          return ee2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, ee2(e4);
        }
        n2(962);
        var te2 = function() {
          return te2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, te2.apply(this, arguments);
        }, ne2 = ["container", "item", "checkbox", "label"];
        const re2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3 || !n3.items || !Array.isArray(n3.items) || n3.items.length < 1)
            return "";
          r3 && ee2(r3) === "object" || (r3 = {}), a3 && ee2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && ee2(i3) === "object" || (i3 = {}), ne2.forEach(function(e4) {
            r3[e4] && ee2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.container : te2(te2({}, J2), r3.container), c3 = a3.disableDefaultStyle ? r3.item : te2(te2({}, Z2), r3.item), s3 = a3.disableDefaultStyle ? r3.checkbox : te2(te2({}, K2), r3.checkbox), u3 = a3.disableDefaultStyle ? r3.label : te2(te2({}, Q2), r3.label), f2 = [];
          return ee2(n3) === "object" && n3.items && Array.isArray(n3.items) && (f2 = n3.items.map(function(t5, n4) {
            return e3.createElement("div", { key: n4, style: c3, className: i3.item }, e3.createElement("input", { id: n4, style: s3, className: i3.checkbox, type: "checkbox", checked: t5.checked, readOnly: true }), e3.createElement("label", { htmlFor: n4, style: u3, className: i3.label }, o2(t5.text)));
          })), f2.length <= 0 ? "" : e3.createElement("ul", { style: l3, className: Y2()("checklistUL", i3.container) }, f2);
        }, oe2 = { container: { width: "100%", margin: "20px 8px", display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }, icon: { width: "30px", enableBackground: "new 0 0 50 50" }, title: { fontWeight: 400, textTransform: "uppercase", margin: 0, marginRight: "15px", marginLeft: "5px", fontSize: "90%" }, message: { color: "goldenrod", textAlight: "left", fontSize: "90%", margin: 0 }, circle: { fill: "#EFCE4A" }, line: { fill: "none", stroke: "#FFFFFF", strokeWidth: 5, strokeLinecap: "round", strokeMiterlimit: 10 } };
        var ie2 = function() {
          return ie2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, ie2.apply(this, arguments);
        };
        const ae2 = function(t4) {
          var n3 = t4.title, r3 = t4.message, o3 = t4.classNames, i3 = t4.customStyle, a3 = i3 === void 0 ? {} : i3, l3 = t4.config, c3 = l3.disableDefaultStyle ? a3.container : ie2(ie2({}, oe2.container), a3.container), s3 = l3.disableDefaultStyle ? a3.icon : ie2(ie2({}, oe2.icon), a3.icon), u3 = l3.disableDefaultStyle ? a3.title : ie2(ie2({}, oe2.title), a3.title), f2 = l3.disableDefaultStyle ? a3.message : ie2(ie2({}, oe2.message), a3.message);
          return e3.createElement("div", { style: c3, className: o3.container }, e3.createElement("svg", { style: s3, className: o3.icon, version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 50 50", xmlSpace: "preserve" }, e3.createElement("circle", { style: oe2.circle, cx: "25", cy: "25", r: "25" }), e3.createElement("line", { style: oe2.line, x1: "25", y1: "10", x2: "25", y2: "28" }), e3.createElement("line", { style: oe2.line, x1: "25", y1: "37", x2: "25", y2: "39" }), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null), e3.createElement("g", null)), e3.createElement("p", { style: u3, className: o3.title }, n3, ":"), e3.createElement("p", { style: f2, className: o3.message }, r3));
        };
        function le2(e4) {
          return le2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, le2(e4);
        }
        var ce2 = ["container", "icon", "title", "message"];
        const se2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3)
            return "";
          r3 && le2(r3) === "object" || (r3 = {}), a3 && le2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && le2(i3) === "object" || (i3 = {}), ce2.forEach(function(e4) {
            r3[e4] && le2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = null, c3 = "Warning";
          return typeof n3 == "string" ? l3 = n3 : le2(n3) === "object" && (n3.message && typeof n3.message == "string" && (l3 = n3.message), n3.title && typeof n3.title == "string" && (c3 = n3.title)), l3 ? e3.createElement(ae2, { title: o2(c3), message: o2(l3), customStyle: r3, config: a3, classNames: i3 }) : "";
        }, ue2 = { borderSpacing: "1px 2px", margin: "5px 0" }, fe2 = { minWidth: "100px", padding: "8px 15px", borderRadius: "2px", backgroundColor: "lightcoral" }, pe2 = { minWidth: "100px", padding: "8px 15px", borderRadius: "2px", textAlign: "left" }, de2 = {};
        function ye2(e4) {
          return ye2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, ye2(e4);
        }
        var me2 = function() {
          return me2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, me2.apply(this, arguments);
        }, he2 = ["table", "tr", "th", "td"];
        const ge2 = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3)
            return "";
          r3 && ye2(r3) === "object" || (r3 = {}), a3 && ye2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && ye2(i3) === "object" || (i3 = {}), he2.forEach(function(e4) {
            r3[e4] && ye2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.table : me2(me2({}, ue2), r3.table), c3 = a3.disableDefaultStyle ? r3.tr : me2(me2({}, de2), r3.tr), s3 = a3.disableDefaultStyle ? r3.th : me2(me2({}, fe2), r3.th), u3 = a3.disableDefaultStyle ? r3.td : me2(me2({}, pe2), r3.td), f2 = n3.content || [];
          if (!Array.isArray(f2) || f2.length < 1)
            return "";
          var p2 = f2.shift();
          return e3.createElement("table", { style: l3, className: i3.table }, e3.createElement("thead", null, e3.createElement("tr", { style: c3, className: i3.tr }, p2.map(function(t5, n4) {
            return e3.createElement("th", { key: n4, style: s3, className: i3.th }, o2(t5));
          }))), e3.createElement("tbody", null, f2.map(function(t5, n4) {
            return e3.createElement("tr", { key: n4, style: a3.disableDefaultStyle ? c3 : me2({ backgroundColor: n4 % 2 == 0 ? "white" : "#f9f9f9" }, c3), className: i3.tr }, Array.isArray(t5) && t5.length > 1 && t5.map(function(t6, n5) {
              return e3.createElement("td", { key: n5, style: u3, className: i3.td }, o2(t6));
            }));
          })));
        }, be2 = { width: "100%", margin: "8px 0", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", enableBackground: "new 0 0 100.353 100.353" }, ve2 = { width: "20px", height: "20px", margin: "5px" }, xe2 = { fill: "#231F20" };
        function Se2(e4) {
          return Se2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, Se2(e4);
        }
        var we2 = function() {
          return we2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, we2.apply(this, arguments);
        }, Ee2 = ["container", "svg", "path"];
        const ke2 = function(t4) {
          var n3 = t4.style, r3 = t4.classNames, o3 = t4.config;
          n3 && Se2(n3) === "object" || (n3 = {}), o3 && Se2(o3) === "object" || (o3 = { disableDefaultStyle: false }), r3 && Se2(r3) === "object" || (r3 = {}), Ee2.forEach(function(e4) {
            n3[e4] && Se2(n3[e4]) === "object" || (n3[e4] = {}), r3[e4] && typeof r3[e4] == "string" || (r3[e4] = "");
          });
          var i3 = o3.disableDefaultStyle ? n3.container : we2(we2({}, be2), n3.container), a3 = o3.disableDefaultStyle ? n3.svg : we2(we2({}, ve2), n3.svg), l3 = o3.disableDefaultStyle ? n3.path : we2(we2({}, xe2), n3.path);
          return e3.createElement("div", { style: i3, className: r3.container }, e3.createElement("svg", { style: a3, className: r3.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e3.createElement("path", { style: l3, className: r3.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })), e3.createElement("svg", { style: a3, className: r3.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e3.createElement("path", { style: l3, className: r3.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })), e3.createElement("svg", { style: a3, className: r3.svg, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 100.353 100.353", xmlSpace: "preserve" }, e3.createElement("path", { style: l3, className: r3.path, d: "M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456 s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457 c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457 c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169 c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50 C68.528,54.411,54.378,68.419,49.94,86.169z" })));
        }, je2 = { width: "100%" }, Oe2 = { width: "100%", minHeight: "30px", boxSizing: "border-box", textAlign: "left", margin: "8px 0", marginTop: "15px", padding: "10px", borderRadius: "2px 2px 2px 0", border: "none !important", outline: "none !important", fontSize: "14px" };
        function Ce2(e4) {
          return Ce2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, Ce2(e4);
        }
        var Ne2, Te2 = (Ne2 = function(e4, t4) {
          return Ne2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e5, t5) {
            e5.__proto__ = t5;
          } || function(e5, t5) {
            for (var n3 in t5)
              Object.prototype.hasOwnProperty.call(t5, n3) && (e5[n3] = t5[n3]);
          }, Ne2(e4, t4);
        }, function(e4, t4) {
          if (typeof t4 != "function" && t4 !== null)
            throw new TypeError("Class extends value " + String(t4) + " is not a constructor or null");
          function n3() {
            this.constructor = e4;
          }
          Ne2(e4, t4), e4.prototype = t4 === null ? Object.create(t4) : (n3.prototype = t4.prototype, new n3());
        }), De2 = function() {
          return De2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, De2.apply(this, arguments);
        }, Ae2 = function(t4) {
          function n3(n4) {
            var r3 = t4.call(this, n4) || this;
            return r3.highlightBlock = function() {
              window.hljs !== void 0 ? window.hljs.highlightBlock(r3.codeAreaRef.current) : setTimeout(r3.highlightBlock, 250);
            }, r3.injectHighlightJSScriptElement = function() {
              for (var e4 = document.querySelectorAll("script"), t5 = false, n5 = 0; n5 < e4.length; n5++)
                if (e4[n5].src.includes("highlight.min.js")) {
                  t5 = true;
                  break;
                }
              if (!t5) {
                var r4 = document.createElement("script"), o3 = document.querySelector("head");
                r4.setAttribute("src", "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js"), o3 && o3.appendChild(r4);
              }
            }, r3.injectHighlightJSCSSElement = function(e4) {
              if (e4 && typeof e4 == "string") {
                for (var t5 = document.querySelectorAll("link"), n5 = false, r4 = 0; r4 < t5.length; r4++)
                  if (t5[r4].href === e4) {
                    n5 = true;
                    break;
                  }
                if (!n5) {
                  var o3 = document.createElement("link"), i3 = document.querySelector("head");
                  o3.setAttribute("rel", "stylesheet"), o3.setAttribute("href", e4), i3 && i3.appendChild(o3);
                }
              }
            }, r3.codeAreaRef = e3.createRef(), r3.supportedKeys = ["container", "code"], r3;
          }
          return Te2(n3, t4), n3.prototype.componentDidMount = function() {
            var e4 = this.props.data;
            e4 && e4.theme && this.codeAreaRef.current && (this.injectHighlightJSCSSElement(e4.theme), this.injectHighlightJSScriptElement(), this.highlightBlock());
          }, n3.prototype.render = function() {
            var t5 = this.props, n4 = t5.data, r3 = t5.style, i3 = t5.classNames, a3 = t5.config;
            if (!n4)
              return "";
            r3 && Ce2(r3) === "object" || (r3 = {}), a3 && Ce2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && Ce2(i3) === "object" || (i3 = {}), this.supportedKeys.forEach(function(e4) {
              r3[e4] && Ce2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
            });
            var l3 = a3.disableDefaultStyle ? r3.container : De2(De2({}, je2), r3.container), c3 = a3.disableDefaultStyle ? r3.code : De2(De2({}, Oe2), r3.code), s3 = null, u3 = null;
            return typeof n4 == "string" ? s3 = n4 : Ce2(n4) === "object" && (n4.code && typeof n4.code == "string" && (s3 = n4.code), n4.language && typeof n4.language == "string" && (u3 = n4.language)), s3 ? e3.createElement("pre", { style: l3, className: i3.container }, e3.createElement("code", { ref: this.codeAreaRef, style: c3, className: Y2()(u3, i3.code) }, o2(s3))) : "";
          }, n3;
        }(e3.PureComponent);
        const Pe2 = Ae2, _e2 = { display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", minWidth: "280px", flexWrap: "wrap-reverse", border: "1px solid #eee", boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)", borderRadius: "4px", cursor: "pointer" }, Re2 = { display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "80%", padding: "12px 20px" }, Ie2 = { fontSize: "18px", fontWeight: "bold", margin: 0, cursor: "pointer" }, Me2 = { textAlign: "left", lineHeight: "1.7", fontWeight: 200, fontSize: "15px", cursor: "pointer" }, Fe = { width: "15%", borderRadius: "4px", cursor: "pointer", flexGrow: 1 }, Le2 = { color: "grey", cursor: "pointer", margin: 0, fontSize: "12px" };
        function ze2(e4) {
          return ze2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, ze2(e4);
        }
        var Be2 = function() {
          return Be2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, Be2.apply(this, arguments);
        }, He2 = ["container", "textHolder", "title", "description", "image", "siteName"];
        const Ue = function(t4) {
          var n3, r3, i3, a3, l3, c3, s3, u3, f2 = t4.data, p2 = t4.style, d3 = t4.classNames, y3 = t4.config;
          if (!f2 || !f2.link)
            return "";
          p2 && ze2(p2) === "object" || (p2 = {}), y3 && ze2(y3) === "object" || (y3 = { disableDefaultStyle: false }), d3 && ze2(d3) === "object" || (d3 = {}), He2.forEach(function(e4) {
            p2[e4] && ze2(p2[e4]) === "object" || (p2[e4] = {}), d3[e4] && typeof d3[e4] == "string" || (d3[e4] = "");
          });
          var m2 = y3.disableDefaultStyle ? p2.container : Be2(Be2({}, _e2), p2.container), h3 = y3.disableDefaultStyle ? p2.textHolder : Be2(Be2({}, Re2), p2.textHolder), g3 = y3.disableDefaultStyle ? p2.title : Be2(Be2({}, Ie2), p2.title), b3 = y3.disableDefaultStyle ? p2.description : Be2(Be2({}, Me2), p2.description), v3 = y3.disableDefaultStyle ? p2.siteName : Be2(Be2({}, Le2), p2.siteName), x3 = y3.disableDefaultStyle ? p2.image : Be2(Be2({}, Fe), p2.image);
          return e3.createElement("div", { style: m2, className: d3.container, onClick: function() {
            var e4 = window.open(f2.link, "_blank");
            e4 == null || e4.focus();
          } }, e3.createElement("div", { style: h3, className: d3.textHolder }, ((n3 = f2.meta) === null || n3 === void 0 ? void 0 : n3.title) && e3.createElement("p", { style: g3, className: d3.title }, o2((r3 = f2.meta) === null || r3 === void 0 ? void 0 : r3.title)), ((i3 = f2.meta) === null || i3 === void 0 ? void 0 : i3.description) && e3.createElement("p", { style: b3, className: d3.description }, o2((a3 = f2.meta) === null || a3 === void 0 ? void 0 : a3.description)), ((l3 = f2.meta) === null || l3 === void 0 ? void 0 : l3.site_name) && e3.createElement("p", { style: v3, className: d3.siteName }, o2((c3 = f2.meta) === null || c3 === void 0 ? void 0 : c3.site_name))), ((s3 = f2.meta) === null || s3 === void 0 ? void 0 : s3.image.url) && e3.createElement("img", { src: (u3 = f2.meta) === null || u3 === void 0 ? void 0 : u3.image.url, alt: "image of link", style: x3, className: d3.image }));
        }, We = { display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", minWidth: "280px", flexWrap: "wrap-reverse", border: "1px solid #eee", boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)", borderRadius: "4px", cursor: "pointer" }, qe2 = { display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", width: "80%", padding: "12px 20px" }, Ve2 = { fontSize: "18px", fontWeight: "bold", cursor: "pointer", margin: 0 }, $e2 = { textAlign: "left", lineHeight: "1.7", cursor: "pointer", fontWeight: 200, fontSize: "15px" }, Xe2 = { width: "15%", borderRadius: "4px", flexGrow: 1 }, Ge2 = { textDecoration: "none", color: "#42A5F5", cursor: "pointer", fontSize: "12px" };
        function Ye2(e4) {
          return Ye2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, Ye2(e4);
        }
        var Je2 = function() {
          return Je2 = Object.assign || function(e4) {
            for (var t4, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
              for (var o3 in t4 = arguments[n3])
                Object.prototype.hasOwnProperty.call(t4, o3) && (e4[o3] = t4[o3]);
            return e4;
          }, Je2.apply(this, arguments);
        }, Ze = ["container", "textHolder", "name", "description", "photo", "link"];
        const Ke = function(t4) {
          var n3 = t4.data, r3 = t4.style, i3 = t4.classNames, a3 = t4.config;
          if (!n3 || !n3.link)
            return "";
          r3 && Ye2(r3) === "object" || (r3 = {}), a3 && Ye2(a3) === "object" || (a3 = { disableDefaultStyle: false }), i3 && Ye2(i3) === "object" || (i3 = {}), Ze.forEach(function(e4) {
            r3[e4] && Ye2(r3[e4]) === "object" || (r3[e4] = {}), i3[e4] && typeof i3[e4] == "string" || (i3[e4] = "");
          });
          var l3 = a3.disableDefaultStyle ? r3.container : Je2(Je2({}, We), r3.container), c3 = a3.disableDefaultStyle ? r3.textHolder : Je2(Je2({}, qe2), r3.textHolder), s3 = a3.disableDefaultStyle ? r3.name : Je2(Je2({}, Ve2), r3.name), u3 = a3.disableDefaultStyle ? r3.description : Je2(Je2({}, $e2), r3.description), f2 = a3.disableDefaultStyle ? r3.link : Je2(Je2({}, Ge2), r3.link), p2 = a3.disableDefaultStyle ? r3.photo : Je2(Je2({}, Xe2), r3.photo);
          return e3.createElement("div", { style: l3, className: i3.container, onClick: function() {
            var e4 = window.open(n3.link, "_blank");
            e4 == null || e4.focus();
          } }, e3.createElement("div", { style: c3, className: i3.textHolder }, n3.name && e3.createElement("p", { style: s3, className: i3.name }, o2(n3.name)), n3.description && e3.createElement("p", { style: u3, className: i3.description }, o2(n3.description)), e3.createElement("a", { href: n3.link, style: f2, className: i3.link }, n3.link)), n3.photo && e3.createElement("img", { src: n3.photo, alt: "image of person", style: p2, className: i3.photo }));
        };
        function Qe(e4) {
          return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          }, Qe(e4);
        }
        var et = function(t4) {
          var n3 = t4.data, r3 = t4.style, o3 = t4.classNames, i3 = t4.config, a3 = t4.renderers;
          return n3 && Qe(n3) === "object" ? (r3 && Qe(r3) === "object" || (r3 = {}), o3 && Qe(o3) === "object" || (o3 = {}), i3 && Qe(i3) === "object" || (i3 = {}), a3 && Qe(a3) === "object" || (a3 = {}), n3.blocks.map(function(t5, n4) {
            var l3 = null;
            switch (t5.type.toLowerCase()) {
              case "codebox":
                return l3 = a3.codeBox || Pe2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.codeBox || {}, config: i3.codeBox || {}, classNames: o3.codeBox || {} });
              case "header":
                return l3 = a3.header || s2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.header || {}, config: i3.header || {}, classNames: o3.header || {} });
              case "paragraph":
                return l3 = a3.paragraph || d2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.paragraph || {}, config: i3.paragraph || {}, classNames: o3.paragraph || {} });
              case "image":
                return l3 = a3.image || x2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.image || {}, config: i3.image || {}, classNames: o3.image || {} });
              case "video":
                return l3 = a3.video || C, e3.createElement(l3, { key: n4, data: t5.data, style: r3.video || {}, config: i3.video || {}, classNames: o3.video || {} });
              case "embed":
                return l3 = a3.embed || R2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.embed || {}, config: i3.embed || {}, classNames: o3.embed || {} });
              case "table":
                return l3 = a3.table || ge2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.table || {}, config: i3.table || {}, classNames: o3.table || {} });
              case "list":
                return l3 = a3.list || H2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.list || {}, config: i3.list || {}, classNames: o3.list || {} });
              case "checklist":
                return l3 = a3.checklist || re2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.checklist || {}, config: i3.checklist || {}, classNames: o3.checklist || {} });
              case "quote":
                return l3 = a3.quote || X2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.quote || {}, config: i3.quote || {}, classNames: o3.quote || {} });
              case "warning":
                return l3 = a3.warning || se2, e3.createElement(l3, { key: n4, data: t5.data, style: r3.warning || {}, config: i3.warning || {}, classNames: o3.warning || {} });
              case "linktool":
                return l3 = a3.linktool || Ue, e3.createElement(l3, { key: n4, data: t5.data, style: r3.linktool || {}, config: i3.linktool || {}, classNames: o3.linktool || {} });
              case "personality":
                return l3 = a3.personality || Ke, e3.createElement(l3, { key: n4, data: t5.data, style: r3.personality || {}, config: i3.personality || {}, classNames: o3.personality || {} });
              case "delimiter":
                return l3 = a3.delimiter || ke2, e3.createElement(l3, { key: n4, style: r3.delimiter || {}, config: i3.delimiter || {}, classNames: o3.delimiter || {} });
              default:
                return e3.createElement(e3.Fragment, null);
            }
          })) : "";
        };
      })(), r2;
    })());
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    init_react();
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    init_react();
    var reactIs = require_react_is2();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i2 = 0; i2 < keys.length; ++i2) {
          var key = keys[i2];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    init_react();
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(obj);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    init_react();
    var _typeof2 = require_typeof()["default"];
    function _regeneratorRuntime3() {
      "use strict";
      module.exports = _regeneratorRuntime3 = function _regeneratorRuntime4() {
        return exports2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var exports2 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = typeof Symbol == "function" ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define2(obj, key, value) {
        return Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        }), obj[key];
      }
      try {
        define2({}, "");
      } catch (err) {
        define2 = function define3(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return generator._invoke = function(innerFn2, self3, context2) {
          var state = "suspendedStart";
          return function(method, arg) {
            if (state === "executing")
              throw new Error("Generator is already running");
            if (state === "completed") {
              if (method === "throw")
                throw arg;
              return doneResult();
            }
            for (context2.method = method, context2.arg = arg; ; ) {
              var delegate = context2.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context2);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if (context2.method === "next")
                context2.sent = context2._sent = context2.arg;
              else if (context2.method === "throw") {
                if (state === "suspendedStart")
                  throw state = "completed", context2.arg;
                context2.dispatchException(context2.arg);
              } else
                context2.method === "return" && context2.abrupt("return", context2.arg);
              state = "executing";
              var record = tryCatch(innerFn2, self3, context2);
              if (record.type === "normal") {
                if (state = context2.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                  continue;
                return {
                  value: record.arg,
                  done: context2.done
                };
              }
              record.type === "throw" && (state = "completed", context2.method = "throw", context2.arg = record.arg);
            }
          };
        }(innerFn, self2, context), generator;
      }
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      exports2.wrap = wrap;
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define2(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define2(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type !== "throw") {
            var result = record.arg, value = result.value;
            return value && _typeof2(value) == "object" && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
          reject(record.arg);
        }
        var previousPromise;
        this._invoke = function(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === void 0) {
          if (context.delegate = null, context.method === "throw") {
            if (delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), context.method === "throw"))
              return ContinueSentinel;
            context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw")
          return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, context.method !== "return" && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{
          tryLoc: "root"
        }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod)
            return iteratorMethod.call(iterable);
          if (typeof iterable.next == "function")
            return iterable;
          if (!isNaN(iterable.length)) {
            var i2 = -1, next = function next2() {
              for (; ++i2 < iterable.length; ) {
                if (hasOwn.call(iterable, i2))
                  return next2.value = iterable[i2], next2.done = false, next2;
              }
              return next2.value = void 0, next2.done = true, next2;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      function doneResult() {
        return {
          value: void 0,
          done: true
        };
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, define2(Gp, "constructor", GeneratorFunctionPrototype), define2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun == "function" && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction");
      }, exports2.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports2.awrap = function(arg) {
        return {
          __await: arg
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        PromiseImpl === void 0 && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
        return this;
      }), define2(Gp, "toString", function() {
        return "[object Generator]";
      }), exports2.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        return keys.reverse(), function next() {
          for (; keys.length; ) {
            var key2 = keys.pop();
            if (key2 in object)
              return next.value = key2, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, exports2.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
            for (var name in this) {
              name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
            }
        },
        stop: function stop() {
          this.done = true;
          var rootRecord = this.tryEntries[0].completion;
          if (rootRecord.type === "throw")
            throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done)
            throw exception;
          var context = this;
          function handle(loc, caught) {
            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
          }
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2], record = entry.completion;
            if (entry.tryLoc === "root")
              return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally)
                  throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw")
            throw record.arg;
          return record.type === "break" || record.type === "continue" ? this.next = record.arg : record.type === "return" ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : record.type === "normal" && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (entry.finallyLoc === finallyLoc)
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var entry = this.tryEntries[i2];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          }, this.method === "next" && (this.arg = void 0), ContinueSentinel;
        }
      }, exports2;
    }
    module.exports = _regeneratorRuntime3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    init_react();
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();

// app/components/editorjsReact.client.tsx
init_react();
var import_editorjs_react_renderer = __toESM(require_index_min());

// node_modules/react-code-blocks/dist/react-code-blocks.esm.js
init_react();
var import_react5 = __toESM(require_react());

// node_modules/react-code-blocks/node_modules/styled-components/dist/styled-components.browser.esm.js
init_react();
var import_react_is = __toESM(require_react_is());
var import_react = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/@emotion/stylis/dist/stylis.browser.esm.js
init_react();
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (var m = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f = "", p = "", F3 = "", G3 = "", C; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && b2 + n2 + v2 + m !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n2 = v2 = m = 0, B3++, J2++);
      if (b2 + n2 + v2 + m === 0) {
        if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (g2 === 42 && e2.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O, f, I2), C = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2), f = r2.join(""), C !== void 0 && (t2 = (k2 = C.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h2 === 112 && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length))
              switch (u2 === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A2 && (C = H2(1, f, c2, d2, D2, z2, p.length, h2, a2, h2)) !== void 0 && (t2 = (f = C.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e2.charAt(l2);
                    break;
                  }
                default:
                  f.charCodeAt(t2 - 1) !== 58 && (p += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h2 !== 107 && 0 < f.length && (r2 = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c2, d2, D2, z2, p.length, h2, a2, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b2 + n2 + v2 + m === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (n2 + m + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    g2 !== 32 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              n2 + b2 + m === 0 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (n2 + b2 + m + E2 === 0 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    x2 === 112 && e2.charCodeAt(l2 - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n2 + b2 + m === 0 && (u2 = l2);
              break;
            case 44:
              b2 + v2 + n2 + m === 0 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n2 = n2 === g2 ? 0 : n2 === 0 ? g2 : n2);
              break;
            case 91:
              n2 + b2 + v2 === 0 && m++;
              break;
            case 93:
              n2 + b2 + v2 === 0 && m--;
              break;
            case 41:
              n2 + b2 + m === 0 && v2--;
              break;
            case 40:
              if (n2 + b2 + m === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b2 + v2 + n2 + m + u2 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t2 + 2 !== l2 && (e2.charCodeAt(t2 + 2) === 33 && (p += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          b2 === 0 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C = H2(2, p, r2, d2, D2, z2, t2, h2, a2, h2), C !== void 0 && (p = C).length === 0))
        return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia);
    c2 = h2;
    var a2 = h2.length, m = d2.length;
    switch (m) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = m === 0 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (d2.charCodeAt(0) === 58 ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";", m = 2 * c2 + 3 * e2 + 4 * h2;
    if (m === 944) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a2, 1))
      return a2;
    switch (m) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (a2.charCodeAt(c2) === 33 ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d2) === true)
          return (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e2 + h2 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(c2 === 1 ? ":" : "{"), h2 = d2.substring(0, c2 !== 3 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(c2 !== 2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d2 === "function")
          S2[A2++] = d2;
        else if (typeof d2 === "object")
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    d2 !== void 0 && (R2 = null, d2 ? typeof d2 !== "function" ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      h2 !== void 0 && typeof h2 === "string" && (c2 = h2);
    }
    var a2 = M2(O, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), h2 !== void 0 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var stylis_browser_esm_default = stylis_min;

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
init_react();
var unitlessKeys = {
  animationIterationCount: 1,
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
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
init_react();

// node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js
init_react();
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_browser_esm_default = memoize;

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ emotion_memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var emotion_is_prop_valid_browser_esm_default = isPropValid;

// node_modules/react-code-blocks/node_modules/styled-components/dist/styled-components.browser.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function v() {
  return (v = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var g = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var S = function(t2) {
  return t2 !== null && typeof t2 == "object" && (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) === "[object Object]" && !(0, import_react_is.typeOf)(t2);
};
var w = Object.freeze([]);
var E = Object.freeze({});
function b(e2) {
  return typeof e2 == "function";
}
function _(e2) {
  return typeof e2 == "string" && e2 || e2.displayName || e2.name || "Component";
}
function N(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
var A = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var I = typeof window != "undefined" && "HTMLElement" in window;
var P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
var R = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function D() {
  for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1)
    t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return t2.forEach(function(t3) {
    e2 = e2.replace(/%[a-z]/, t3);
  }), e2;
}
function j(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw false ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(D.apply(void 0, [R[e2]].concat(n2)).trim());
}
var T = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
        (o2 <<= 1) < 0 && j(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
      this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || this.groupSizes[e3] === 0)
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
      t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}();
var x = /* @__PURE__ */ new Map();
var k = /* @__PURE__ */ new Map();
var V = 1;
var B = function(e2) {
  if (x.has(e2))
    return x.get(e2);
  for (; k.has(V); )
    V++;
  var t2 = V++;
  return ((0 | t2) < 0 || t2 > 1 << 30) && j(16, "" + t2), x.set(e2, t2), k.set(t2, e2), t2;
};
var z = function(e2) {
  return k.get(e2);
};
var M = function(e2, t2) {
  t2 >= V && (V = t2 + 1), x.set(e2, t2), k.set(t2, e2);
};
var G = "style[" + A + '][data-styled-version="5.3.5"]';
var L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var Y = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(L);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        c2 !== 0 && (M(u2, c2), F(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i2);
    }
  }
};
var q = function() {
  return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
};
var H = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && r3.nodeType === 1 && r3.hasAttribute(A))
        return r3;
    }
  }(n2), s2 = o2 !== void 0 ? o2.nextSibling : null;
  r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.5");
  var i2 = q();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var $ = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4)
          return o2;
      }
      j(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return t3 !== void 0 && typeof t3.cssText == "string" ? t3.cssText : "";
  }, e2;
}();
var W = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}();
var U = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}();
var J = I;
var X = { isServer: !I, useCSSOMInjection: !P };
var Z = function() {
  function e2(e3, t3, n2) {
    e3 === void 0 && (e3 = E), t3 === void 0 && (t3 = {}), this.options = v({}, X, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && I && J && (J = false, function(e4) {
      for (var t4 = document.querySelectorAll(G), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && o2.getAttribute(A) !== "active" && (Y(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return B(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return n2 === void 0 && (n2 = true), new e2(v({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new U(o2) : r2 ? new $(o2) : new W(o2), new T(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (B(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(B(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = z(o2);
        if (s2 !== void 0) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = A + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            i2 !== void 0 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}();
var K = /(a)(d)/gi;
var Q = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function ee(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
var te = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
};
var ne = function(e2) {
  return te(5381, e2);
};
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b(n2) && !N(n2))
      return false;
  }
  return true;
}
var oe = ne("5.3.5");
var se = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = false, this.componentId = t2, this.baseHash = te(oe, t2), this.baseStyle = n2, Z.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = Ne(this.rules, e3, t2, n2).join(""), i2 = ee(te(this.baseHash, s2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var a2 = n2(s2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    else {
      for (var c2 = this.rules.length, u2 = te(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if (typeof h2 == "string")
          l2 += h2, u2 = te(u2, h2 + d2);
        else if (h2) {
          var p = Ne(h2, e3, t2, n2), f = Array.isArray(p) ? p.join("") : p;
          u2 = te(u2, f + d2), l2 += f;
        }
      }
      if (l2) {
        var m = ee(u2 >>> 0);
        if (!t2.hasNameForId(r2, m)) {
          var y2 = n2(l2, "." + m, void 0, r2);
          t2.insertRules(r2, m, y2);
        }
        o2.push(m);
      }
    }
    return o2.join(" ");
  }, e2;
}();
var ie = /^\s*\/\/.*$/gm;
var ae = [":", "[", ".", "#"];
function ce(e2) {
  var t2, n2, r2, o2, s2 = e2 === void 0 ? E : e2, i2 = s2.options, a2 = i2 === void 0 ? E : i2, c2 = s2.plugins, u2 = c2 === void 0 ? w : c2, l2 = new stylis_browser_esm_default(a2), d2 = [], h2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (l3 === 0 && r3.charCodeAt(0) === 64)
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (d3 === 0 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f = function(e3, r3, s3) {
    return r3 === 0 && ae.indexOf(s3[n2.length]) !== -1 || s3.match(o2) ? e3 : "." + t2;
  };
  function m(e3, s3, i3, a3) {
    a3 === void 0 && (a3 = "&");
    var c3 = e3.replace(ie, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    e3 === 2 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f));
  }, h2, function(e3) {
    if (e3 === -2) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || j(15), te(e3, t3.name);
  }, 5381).toString() : "", m;
}
var ue = import_react.default.createContext();
var le = ue.Consumer;
var de = import_react.default.createContext();
var he = (de.Consumer, new Z());
var pe = ce();
function fe() {
  return (0, import_react.useContext)(ue) || he;
}
function me() {
  return (0, import_react.useContext)(de) || pe;
}
function ye(e2) {
  var t2 = (0, import_react.useState)(e2.stylisPlugins), n2 = t2[0], s2 = t2[1], c2 = fe(), u2 = (0, import_react.useMemo)(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = (0, import_react.useMemo)(function() {
    return ce({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return (0, import_react.useEffect)(function() {
    (0, import_shallowequal.default)(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
  }, [e2.stylisPlugins]), import_react.default.createElement(ue.Provider, { value: u2 }, import_react.default.createElement(de.Provider, { value: l2 }, true ? import_react.default.Children.only(e2.children) : e2.children));
}
var ve = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      t3 === void 0 && (t3 = pe);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return e3 === void 0 && (e3 = pe), this.name + e3.hash;
  }, e2;
}();
var ge = /([A-Z])/;
var Se = /([A-Z])/g;
var we = /^ms-/;
var Ee = function(e2) {
  return "-" + e2.toLowerCase();
};
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
var _e = function(e2) {
  return e2 == null || e2 === false || e2 === "";
};
function Ne(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      (s2 = Ne(e2[a2], n2, r2, o2)) !== "" && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (_e(e2))
    return "";
  if (N(e2))
    return "." + e2.styledComponentId;
  if (b(e2)) {
    if (typeof (l2 = e2) != "function" || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return (0, import_react_is.isElement)(u2) && console.warn(_(e2) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ve ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : S(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2)
      t2.hasOwnProperty(i3) && !_e(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || b(t2[i3]) ? s3.push(be(i3) + ":", t2[i3], ";") : S(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(be(i3) + ": " + (r3 = i3, (o3 = t2[i3]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r3 in unitless_browser_esm_default ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ae = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ce(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return b(e2) || S(e2) ? Ae(Ne(g(w, [e2].concat(n2)))) : n2.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : Ae(Ne(g(e2, n2)));
}
var Ie = /invalid hook call/i;
var Pe = /* @__PURE__ */ new Set();
var Oe = function(e2, t2) {
  if (true) {
    var n2 = "The component " + e2 + (t2 ? ' with the id of "' + t2 + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", r2 = console.error;
    try {
      var o2 = true;
      console.error = function(e3) {
        if (Ie.test(e3))
          o2 = false, Pe.delete(n2);
        else {
          for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
            s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }, (0, import_react.useRef)(), o2 && !Pe.has(n2) && (console.warn(n2), Pe.add(n2));
    } catch (e3) {
      Ie.test(e3.message) && Pe.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Re = function(e2, t2, n2) {
  return n2 === void 0 && (n2 = E), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
};
var De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var je = /(^-|-$)/g;
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
var xe = function(e2) {
  return ee(ne(e2) >>> 0);
};
function ke(e2) {
  return typeof e2 == "string" && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var Ve = function(e2) {
  return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
};
var Be = function(e2) {
  return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
};
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? Me(r2, t2) : e2[n2] = t2;
}
function Me(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (Ve(i2))
      for (var a2 in i2)
        Be(a2) && ze(e2, i2[a2], a2);
  }
  return e2;
}
var Ge = import_react.default.createContext();
var Le = Ge.Consumer;
var Ye = {};
function qe(e2, t2, n2) {
  var o2 = N(e2), i2 = !ke(e2), a2 = t2.attrs, c2 = a2 === void 0 ? w : a2, d2 = t2.componentId, h2 = d2 === void 0 ? function(e3, t3) {
    var n3 = typeof e3 != "string" ? "sc" : Te(e3);
    Ye[n3] = (Ye[n3] || 0) + 1;
    var r2 = n3 + "-" + xe("5.3.5" + n3 + Ye[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : d2, p = t2.displayName, f = p === void 0 ? function(e3) {
    return ke(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
  }(e2) : p, g2 = t2.displayName && t2.componentId ? Te(t2.displayName) + "-" + t2.componentId : t2.componentId || h2, S2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, A2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (A2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var C, I2 = new se(n2, g2, o2 ? e2.componentStyle : void 0), P2 = I2.isStatic && c2.length === 0, O = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, d3 = e4.shouldForwardProp, h3 = e4.styledComponentId, p2 = e4.target;
      (0, import_react.useDebugValue)(h3);
      var f2 = function(e5, t5, n4) {
        e5 === void 0 && (e5 = E);
        var r3 = v({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in b(i4) && (i4 = i4(r3)), i4)
            r3[t6] = o4[t6] = t6 === "className" ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Re(t4, (0, import_react.useContext)(Ge), a3) || E, t4, o3), y2 = f2[0], g3 = f2[1], S3 = function(e5, t5, n4, r3) {
        var o4 = fe(), s2 = me(), i4 = t5 ? e5.generateAndInjectStyles(E, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return (0, import_react.useDebugValue)(i4), !t5 && r3 && r3(i4), i4;
      }(i3, r2, y2, true ? e4.warnTooManyClasses : void 0), w2 = n3, _2 = g3.$as || t4.$as || g3.as || t4.as || p2, N2 = ke(_2), A3 = g3 !== t4 ? v({}, t4, {}, g3) : t4, C2 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C2.as = A3[I3] : (d3 ? d3(I3, emotion_is_prop_valid_browser_esm_default, _2) : !N2 || emotion_is_prop_valid_browser_esm_default(I3)) && (C2[I3] = A3[I3]));
      return t4.style && g3.style !== t4.style && (C2.style = v({}, t4.style, {}, g3.style)), C2.className = Array.prototype.concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className).filter(Boolean).join(" "), C2.ref = w2, (0, import_react.createElement)(_2, C2);
    }(C, e3, t3, P2);
  };
  return O.displayName = f, (C = import_react.default.forwardRef(O)).attrs = S2, C.componentStyle = I2, C.displayName = f, C.shouldForwardProp = A2, C.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : w, C.styledComponentId = g2, C.target = o2 ? e2.target : e2, C.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (e4 == null)
        return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++)
        n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (ke(e3) ? e3 : Te(_(e3)));
    return qe(e3, v({}, o3, { attrs: S2, componentId: s2 }), n2);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? Me({}, e2.defaultProps, t3) : t3;
  } }), Oe(f, g2), C.warnTooManyClasses = function(e3, t3) {
    var n3 = {}, r2 = false;
    return function(o3) {
      if (!r2 && (n3[o3] = true, Object.keys(n3).length >= 200)) {
        var s2 = t3 ? ' with the id of "' + t3 + '"' : "";
        console.warn("Over 200 classes were generated for component " + e3 + s2 + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r2 = true, n3 = {};
      }
    };
  }(f, g2), C.toString = function() {
    return "." + C.styledComponentId;
  }, i2 && (0, import_hoist_non_react_statics.default)(C, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C;
}
var He = function(e2) {
  return function e3(t2, r2, o2) {
    if (o2 === void 0 && (o2 = E), !(0, import_react_is.isValidElementType)(r2))
      return j(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ce.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, v({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, v({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(qe, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  He[e2] = He(e2);
});
var $e = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = re(e3), Z.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(Ne(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && Z.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
var Je = function() {
  function e2() {
    var e3 = this;
    this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3)
        return "";
      var n2 = q();
      return "<style " + [n2 && 'nonce="' + n2 + '"', A + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
    }, this.getStyleTags = function() {
      return e3.sealed ? j(2) : e3._emitSheetCSS();
    }, this.getStyleElement = function() {
      var t3;
      if (e3.sealed)
        return j(2);
      var n2 = ((t3 = {})[A] = "", t3["data-styled-version"] = "5.3.5", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o2 = q();
      return o2 && (n2.nonce = o2), [import_react.default.createElement("style", v({}, n2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e3.sealed = true;
    }, this.instance = new Z({ isServer: true }), this.sealed = false;
  }
  var t2 = e2.prototype;
  return t2.collectStyles = function(e3) {
    return this.sealed ? j(2) : import_react.default.createElement(ye, { sheet: this.instance }, e3);
  }, t2.interleaveWithNodeStream = function(e3) {
    return j(3);
  }, e2;
}();
var Xe = function(e2) {
  var t2 = import_react.default.forwardRef(function(t3, n2) {
    var o2 = (0, import_react.useContext)(Ge), i2 = e2.defaultProps, a2 = Re(t3, o2, i2);
    return a2 === void 0 && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + _(e2) + '"'), import_react.default.createElement(e2, v({}, t3, { theme: a2, ref: n2 }));
  });
  return (0, import_hoist_non_react_statics.default)(t2, e2), t2.displayName = "WithTheme(" + _(e2) + ")", t2;
};
typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), typeof window != "undefined" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
var styled_components_browser_esm_default = He;

// node_modules/react-syntax-highlighter/dist/esm/index.js
init_react();

// node_modules/react-syntax-highlighter/dist/esm/highlight.js
init_react();

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
init_react();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/react-syntax-highlighter/dist/esm/highlight.js
init_extends();
var import_react3 = __toESM(require_react());

// node_modules/react-syntax-highlighter/dist/esm/create-element.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/objectSpread.js
init_react();

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
init_react();
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime/helpers/esm/objectSpread.js
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

// node_modules/react-syntax-highlighter/dist/esm/create-element.js
var import_react2 = __toESM(require_react());
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  return classNames.reduce(function(styleObject, className) {
    return _objectSpread({}, styleObject, stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i2) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i2)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
  if (type === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function(className2) {
      return !stylesheet[className2];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : void 0;
    var props = useInlineStyles ? _objectSpread({}, properties, {
      className: className && createClassNameString(className)
    }, {
      style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
    }) : _objectSpread({}, properties, {
      className: createClassNameString(properties.className)
    });
    var children = childrenCreator(node.children);
    return import_react2.default.createElement(TagName, _extends({
      key
    }, props), children);
  }
}

// node_modules/react-syntax-highlighter/dist/esm/highlight.js
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, _ref$numberProps = _ref.numberProps, numberProps = _ref$numberProps === void 0 ? {} : _ref$numberProps;
  return lines.map(function(_2, i2) {
    var number = i2 + startingLineNumber;
    var properties = typeof numberProps === "function" ? numberProps(number) : numberProps;
    return import_react3.default.createElement("span", _extends({
      key: "line-".concat(i2),
      className: "react-syntax-highlighter-line-number"
    }, properties), "".concat(number, "\n"));
  });
}
function LineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle3 = _ref2.codeStyle, _ref2$containerProps = _ref2.containerProps, containerProps = _ref2$containerProps === void 0 ? {} : _ref2$containerProps, numberProps = _ref2.numberProps, startingLineNumber = _ref2.startingLineNumber;
  containerProps.style = containerProps.style || {
    float: "left",
    paddingRight: "10px"
  };
  return import_react3.default.createElement("code", _extends({}, containerProps, {
    style: Object.assign({}, codeStyle3, containerProps.style)
  }), getLineNumbers({
    lines: codeString.replace(/\n$/, "").split("\n"),
    numberProps,
    startingLineNumber
  }));
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineProps = _ref3.lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className;
  var properties = (typeof lineProps === "function" ? lineProps(lineNumber) : lineProps) || {};
  properties.className = properties.className ? className.concat(properties.className) : className;
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i2 = 0; i2 < tree.length; i2++) {
    var node = tree[i2];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }
  return newTree;
}
function wrapLinesInSpan(codeTree, lineProps) {
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  var _loop = function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text, i2) {
        var lineNumber = newTree.length + 1;
        var newChild = {
          type: "text",
          value: "".concat(text, "\n")
        };
        if (i2 === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          newTree.push(createLineElement({
            children: _children,
            lineNumber,
            lineProps
          }));
        } else if (i2 === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: "text",
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            newTree.push(createLineElement({
              children: [newChild],
              lineNumber,
              lineProps,
              className: node.properties.className
            }));
          }
        } else {
          newTree.push(createLineElement({
            children: [newChild],
            lineNumber,
            lineProps,
            className: node.properties.className
          }));
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      newTree.push(createLineElement({
        children,
        lineNumber: newTree.length + 1,
        lineProps
      }));
    }
  }
  return newTree;
}
function defaultRenderer(_ref4) {
  var rows = _ref4.rows, stylesheet = _ref4.stylesheet, useInlineStyles = _ref4.useInlineStyles;
  return rows.map(function(node, i2) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i2)
    });
  });
}
function getCodeTree(_ref5) {
  var astGenerator = _ref5.astGenerator, language = _ref5.language, code = _ref5.code, defaultCodeValue = _ref5.defaultCodeValue;
  if (astGenerator.getLanguage) {
    var hasLanguage = language && astGenerator.getLanguage(language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e2) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref6) {
    var language = _ref6.language, children = _ref6.children, _ref6$style = _ref6.style, style = _ref6$style === void 0 ? defaultStyle : _ref6$style, _ref6$customStyle = _ref6.customStyle, customStyle = _ref6$customStyle === void 0 ? {} : _ref6$customStyle, _ref6$codeTagProps = _ref6.codeTagProps, codeTagProps = _ref6$codeTagProps === void 0 ? {
      style: style['code[class*="language-"]']
    } : _ref6$codeTagProps, _ref6$useInlineStyles = _ref6.useInlineStyles, useInlineStyles = _ref6$useInlineStyles === void 0 ? true : _ref6$useInlineStyles, _ref6$showLineNumbers = _ref6.showLineNumbers, showLineNumbers = _ref6$showLineNumbers === void 0 ? false : _ref6$showLineNumbers, _ref6$startingLineNum = _ref6.startingLineNumber, startingLineNumber = _ref6$startingLineNum === void 0 ? 1 : _ref6$startingLineNum, lineNumberContainerProps = _ref6.lineNumberContainerProps, lineNumberProps = _ref6.lineNumberProps, wrapLines = _ref6.wrapLines, _ref6$lineProps = _ref6.lineProps, lineProps = _ref6$lineProps === void 0 ? {} : _ref6$lineProps, renderer = _ref6.renderer, _ref6$PreTag = _ref6.PreTag, PreTag = _ref6$PreTag === void 0 ? "pre" : _ref6$PreTag, _ref6$CodeTag = _ref6.CodeTag, CodeTag = _ref6$CodeTag === void 0 ? "code" : _ref6$CodeTag, _ref6$code = _ref6.code, code = _ref6$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref6$code, astGenerator = _ref6.astGenerator, rest = _objectWithoutProperties(_ref6, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "startingLineNumber", "lineNumberContainerProps", "lineNumberProps", "wrapLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    astGenerator = astGenerator || defaultAstGenerator;
    var lineNumbers = showLineNumbers ? import_react3.default.createElement(LineNumbers, {
      containerProps: lineNumberContainerProps,
      codeStyle: codeTagProps.style || {},
      numberProps: lineNumberProps,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: "hljs"
    });
    if (!astGenerator) {
      return import_react3.default.createElement(PreTag, preProps, lineNumbers, import_react3.default.createElement(CodeTag, codeTagProps, code));
    }
    wrapLines = renderer && wrapLines === void 0 ? true : wrapLines;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var tree = wrapLines ? wrapLinesInSpan(codeTree, lineProps) : codeTree.value;
    return import_react3.default.createElement(PreTag, preProps, lineNumbers, import_react3.default.createElement(CodeTag, codeTagProps, renderer({
      rows: tree,
      stylesheet: style,
      useInlineStyles
    })));
  };
}

// node_modules/react-syntax-highlighter/dist/esm/async-syntax-highlighter.js
init_react();
var import_regenerator = __toESM(require_regenerator());

// node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
init_react();
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}

// node_modules/react-syntax-highlighter/dist/esm/async-syntax-highlighter.js
init_extends();

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
init_react();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
init_react();
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
init_react();

// node_modules/@babel/runtime/helpers/esm/typeof.js
init_react();
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
init_react();
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/react-syntax-highlighter/dist/esm/async-syntax-highlighter.js
var import_react4 = __toESM(require_react());
var async_syntax_highlighter_default = function(options) {
  var loader2 = options.loader, isLanguageRegistered2 = options.isLanguageRegistered, registerLanguage2 = options.registerLanguage, languageLoaders = options.languageLoaders, noAsyncLoadingLanguages = options.noAsyncLoadingLanguages;
  var ReactAsyncHighlighter = /* @__PURE__ */ function(_React$PureComponent) {
    _inherits(ReactAsyncHighlighter2, _React$PureComponent);
    function ReactAsyncHighlighter2() {
      _classCallCheck(this, ReactAsyncHighlighter2);
      return _possibleConstructorReturn(this, _getPrototypeOf(ReactAsyncHighlighter2).apply(this, arguments));
    }
    _createClass(ReactAsyncHighlighter2, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!ReactAsyncHighlighter2.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;
        if (!ReactAsyncHighlighter2.astGeneratorPromise) {
          ReactAsyncHighlighter2.loadAstGenerator();
        }
        if (!ReactAsyncHighlighter2.astGenerator) {
          ReactAsyncHighlighter2.astGeneratorPromise.then(function() {
            _this.forceUpdate();
          });
        }
        if (!ReactAsyncHighlighter2.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "loadLanguage",
      value: function loadLanguage() {
        var _this2 = this;
        var language = this.props.language;
        if (language === "text") {
          return;
        }
        ReactAsyncHighlighter2.loadLanguage(language).then(function() {
          _this2.forceUpdate();
        });
      }
    }, {
      key: "normalizeLanguage",
      value: function normalizeLanguage3(language) {
        return ReactAsyncHighlighter2.isSupportedLanguage(language) ? language : "text";
      }
    }, {
      key: "render",
      value: function render() {
        return import_react4.default.createElement(ReactAsyncHighlighter2.highlightInstance, _extends({}, this.props, {
          language: this.normalizeLanguage(this.props.language),
          astGenerator: ReactAsyncHighlighter2.astGenerator
        }));
      }
    }], [{
      key: "preload",
      value: function preload() {
        return ReactAsyncHighlighter2.loadAstGenerator();
      }
    }, {
      key: "loadLanguage",
      value: function() {
        var _loadLanguage = _asyncToGenerator(/* @__PURE__ */ import_regenerator.default.mark(function _callee(language) {
          var languageLoader;
          return import_regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  languageLoader = languageLoaders[language];
                  if (!(typeof languageLoader === "function")) {
                    _context.next = 5;
                    break;
                  }
                  return _context.abrupt("return", languageLoader(ReactAsyncHighlighter2.registerLanguage));
                case 5:
                  throw new Error("Language ".concat(language, " not supported"));
                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        return function loadLanguage(_x) {
          return _loadLanguage.apply(this, arguments);
        };
      }()
    }, {
      key: "isSupportedLanguage",
      value: function isSupportedLanguage(language) {
        return ReactAsyncHighlighter2.isRegistered(language) || typeof languageLoaders[language] === "function";
      }
    }, {
      key: "loadAstGenerator",
      value: function loadAstGenerator() {
        ReactAsyncHighlighter2.astGeneratorPromise = loader2().then(function(astGenerator) {
          ReactAsyncHighlighter2.astGenerator = astGenerator;
          if (registerLanguage2) {
            ReactAsyncHighlighter2.languages.forEach(function(language, name) {
              return registerLanguage2(astGenerator, name, language);
            });
          }
        });
        return ReactAsyncHighlighter2.astGeneratorPromise;
      }
    }]);
    return ReactAsyncHighlighter2;
  }(import_react4.default.PureComponent);
  _defineProperty(ReactAsyncHighlighter, "astGenerator", null);
  _defineProperty(ReactAsyncHighlighter, "highlightInstance", highlight_default(null, {}));
  _defineProperty(ReactAsyncHighlighter, "astGeneratorPromise", null);
  _defineProperty(ReactAsyncHighlighter, "languages", /* @__PURE__ */ new Map());
  _defineProperty(ReactAsyncHighlighter, "supportedLanguages", options.supportedLanguages || Object.keys(languageLoaders || {}));
  _defineProperty(ReactAsyncHighlighter, "isRegistered", function(language) {
    if (noAsyncLoadingLanguages) {
      return true;
    }
    if (!registerLanguage2) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (!ReactAsyncHighlighter.astGenerator) {
      return ReactAsyncHighlighter.languages.has(language);
    }
    return isLanguageRegistered2(ReactAsyncHighlighter.astGenerator, language);
  });
  _defineProperty(ReactAsyncHighlighter, "registerLanguage", function(name, language) {
    if (!registerLanguage2) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (ReactAsyncHighlighter.astGenerator) {
      return registerLanguage2(ReactAsyncHighlighter.astGenerator, name, language);
    } else {
      ReactAsyncHighlighter.languages.set(name, language);
    }
  });
  return ReactAsyncHighlighter;
};

// node_modules/react-syntax-highlighter/dist/esm/async-languages/create-language-async-loader.js
init_react();
var import_regenerator2 = __toESM(require_regenerator());
var create_language_async_loader_default = function(name, loader2) {
  return /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(/* @__PURE__ */ import_regenerator2.default.mark(function _callee(registerLanguage2) {
      var module;
      return import_regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return loader2();
            case 2:
              module = _context.sent;
              registerLanguage2(name, module.default || module);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

// node_modules/react-syntax-highlighter/dist/esm/prism-async-light.js
init_react();

// node_modules/react-syntax-highlighter/dist/esm/async-languages/prism.js
init_react();
var prism_default = {
  abap: create_language_async_loader_default("abap", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_abap" */
      "/build/_shared/abap-X4NKQHAE.js"
    );
  }),
  actionscript: create_language_async_loader_default("actionscript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_actionscript" */
      "/build/_shared/actionscript-CORFXCIJ.js"
    );
  }),
  ada: create_language_async_loader_default("ada", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ada" */
      "/build/_shared/ada-FMF2XFAU.js"
    );
  }),
  apacheconf: create_language_async_loader_default("apacheconf", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_apacheconf" */
      "/build/_shared/apacheconf-47NR42VR.js"
    );
  }),
  apl: create_language_async_loader_default("apl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_apl" */
      "/build/_shared/apl-FBDLPZNF.js"
    );
  }),
  applescript: create_language_async_loader_default("applescript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_applescript" */
      "/build/_shared/applescript-YPU57DLX.js"
    );
  }),
  arduino: create_language_async_loader_default("arduino", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_arduino" */
      "/build/_shared/arduino-EIVDAM24.js"
    );
  }),
  arff: create_language_async_loader_default("arff", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_arff" */
      "/build/_shared/arff-M3SIRFNI.js"
    );
  }),
  asciidoc: create_language_async_loader_default("asciidoc", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_asciidoc" */
      "/build/_shared/asciidoc-D3E6QCWT.js"
    );
  }),
  asm6502: create_language_async_loader_default("asm6502", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_asm6502" */
      "/build/_shared/asm6502-77X6SFND.js"
    );
  }),
  aspnet: create_language_async_loader_default("aspnet", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_aspnet" */
      "/build/_shared/aspnet-J2XMF5BB.js"
    );
  }),
  autohotkey: create_language_async_loader_default("autohotkey", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_autohotkey" */
      "/build/_shared/autohotkey-DQM7SKA7.js"
    );
  }),
  autoit: create_language_async_loader_default("autoit", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_autoit" */
      "/build/_shared/autoit-ZVTDW532.js"
    );
  }),
  bash: create_language_async_loader_default("bash", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bash" */
      "/build/_shared/bash-2AGETEIU.js"
    );
  }),
  basic: create_language_async_loader_default("basic", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_basic" */
      "/build/_shared/basic-5T6DYDVL.js"
    );
  }),
  batch: create_language_async_loader_default("batch", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_batch" */
      "/build/_shared/batch-RAAN7FSB.js"
    );
  }),
  bison: create_language_async_loader_default("bison", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bison" */
      "/build/_shared/bison-32MOSIRZ.js"
    );
  }),
  brainfuck: create_language_async_loader_default("brainfuck", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_brainfuck" */
      "/build/_shared/brainfuck-IRQHFO3F.js"
    );
  }),
  bro: create_language_async_loader_default("bro", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bro" */
      "/build/_shared/bro-KIUJ5P7R.js"
    );
  }),
  c: create_language_async_loader_default("c", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_c" */
      "/build/_shared/c-V2ZNY3V4.js"
    );
  }),
  clike: create_language_async_loader_default("clike", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_clike" */
      "/build/_shared/clike-M7P5TNRC.js"
    );
  }),
  clojure: create_language_async_loader_default("clojure", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_clojure" */
      "/build/_shared/clojure-QR4JUSS5.js"
    );
  }),
  coffeescript: create_language_async_loader_default("coffeescript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_coffeescript" */
      "/build/_shared/coffeescript-2A4YZTHZ.js"
    );
  }),
  cpp: create_language_async_loader_default("cpp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cpp" */
      "/build/_shared/cpp-C56GNDD6.js"
    );
  }),
  crystal: create_language_async_loader_default("crystal", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_crystal" */
      "/build/_shared/crystal-FV2J4LDZ.js"
    );
  }),
  csharp: create_language_async_loader_default("csharp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_csharp" */
      "/build/_shared/csharp-3ODTXXEF.js"
    );
  }),
  csp: create_language_async_loader_default("csp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_csp" */
      "/build/_shared/csp-3S36PGPE.js"
    );
  }),
  cssExtras: create_language_async_loader_default("cssExtras", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cssExtras" */
      "/build/_shared/css-extras-KNOKEBXF.js"
    );
  }),
  css: create_language_async_loader_default("css", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_css" */
      "/build/_shared/css-DWEF37DW.js"
    );
  }),
  d: create_language_async_loader_default("d", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_d" */
      "/build/_shared/d-QNISK5GB.js"
    );
  }),
  dart: create_language_async_loader_default("dart", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dart" */
      "/build/_shared/dart-2QDXJEI3.js"
    );
  }),
  diff: create_language_async_loader_default("diff", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_diff" */
      "/build/_shared/diff-7VZJYFAS.js"
    );
  }),
  django: create_language_async_loader_default("django", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_django" */
      "/build/_shared/django-NHEUMYV6.js"
    );
  }),
  docker: create_language_async_loader_default("docker", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_docker" */
      "/build/_shared/docker-TXILCXZO.js"
    );
  }),
  eiffel: create_language_async_loader_default("eiffel", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_eiffel" */
      "/build/_shared/eiffel-JGNZRPIB.js"
    );
  }),
  elixir: create_language_async_loader_default("elixir", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_elixir" */
      "/build/_shared/elixir-GWTWP7HV.js"
    );
  }),
  elm: create_language_async_loader_default("elm", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_elm" */
      "/build/_shared/elm-2IURQCOI.js"
    );
  }),
  erb: create_language_async_loader_default("erb", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_erb" */
      "/build/_shared/erb-BMMRVFYB.js"
    );
  }),
  erlang: create_language_async_loader_default("erlang", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_erlang" */
      "/build/_shared/erlang-IWEAHZSQ.js"
    );
  }),
  flow: create_language_async_loader_default("flow", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_flow" */
      "/build/_shared/flow-Y3XNIZEZ.js"
    );
  }),
  fortran: create_language_async_loader_default("fortran", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_fortran" */
      "/build/_shared/fortran-3E5KRUP7.js"
    );
  }),
  fsharp: create_language_async_loader_default("fsharp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_fsharp" */
      "/build/_shared/fsharp-XE4VGF3O.js"
    );
  }),
  gedcom: create_language_async_loader_default("gedcom", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gedcom" */
      "/build/_shared/gedcom-2MNWB46L.js"
    );
  }),
  gherkin: create_language_async_loader_default("gherkin", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gherkin" */
      "/build/_shared/gherkin-IF432RIV.js"
    );
  }),
  git: create_language_async_loader_default("git", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_git" */
      "/build/_shared/git-JQET62NO.js"
    );
  }),
  glsl: create_language_async_loader_default("glsl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_glsl" */
      "/build/_shared/glsl-PSNJA6Q3.js"
    );
  }),
  go: create_language_async_loader_default("go", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_go" */
      "/build/_shared/go-2IHRV764.js"
    );
  }),
  graphql: create_language_async_loader_default("graphql", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_graphql" */
      "/build/_shared/graphql-55HAPZBC.js"
    );
  }),
  groovy: create_language_async_loader_default("groovy", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_groovy" */
      "/build/_shared/groovy-5I7RD5ID.js"
    );
  }),
  haml: create_language_async_loader_default("haml", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haml" */
      "/build/_shared/haml-2EU6NRGB.js"
    );
  }),
  handlebars: create_language_async_loader_default("handlebars", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_handlebars" */
      "/build/_shared/handlebars-K3PKBCP4.js"
    );
  }),
  haskell: create_language_async_loader_default("haskell", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haskell" */
      "/build/_shared/haskell-SJUBCHED.js"
    );
  }),
  haxe: create_language_async_loader_default("haxe", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haxe" */
      "/build/_shared/haxe-FPDHEPKZ.js"
    );
  }),
  hpkp: create_language_async_loader_default("hpkp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hpkp" */
      "/build/_shared/hpkp-TAHGTJLS.js"
    );
  }),
  hsts: create_language_async_loader_default("hsts", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hsts" */
      "/build/_shared/hsts-MJVLPAZZ.js"
    );
  }),
  http: create_language_async_loader_default("http", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_http" */
      "/build/_shared/http-6LGSJKG4.js"
    );
  }),
  ichigojam: create_language_async_loader_default("ichigojam", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ichigojam" */
      "/build/_shared/ichigojam-ITHGJA4E.js"
    );
  }),
  icon: create_language_async_loader_default("icon", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_icon" */
      "/build/_shared/icon-SST45CJW.js"
    );
  }),
  inform7: create_language_async_loader_default("inform7", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_inform7" */
      "/build/_shared/inform7-QW7CGIZ6.js"
    );
  }),
  ini: create_language_async_loader_default("ini", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ini" */
      "/build/_shared/ini-YXMTK7UT.js"
    );
  }),
  io: create_language_async_loader_default("io", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_io" */
      "/build/_shared/io-RDOV7NZW.js"
    );
  }),
  j: create_language_async_loader_default("j", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_j" */
      "/build/_shared/j-45VM7KHN.js"
    );
  }),
  java: create_language_async_loader_default("java", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_java" */
      "/build/_shared/java-ZZHP6NB2.js"
    );
  }),
  javascript: create_language_async_loader_default("javascript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javascript" */
      "/build/_shared/javascript-WUVPEJBN.js"
    );
  }),
  jolie: create_language_async_loader_default("jolie", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jolie" */
      "/build/_shared/jolie-4DACRGIY.js"
    );
  }),
  json: create_language_async_loader_default("json", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_json" */
      "/build/_shared/json-NIHOW5UA.js"
    );
  }),
  jsx: create_language_async_loader_default("jsx", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsx" */
      "/build/_shared/jsx-KBDGUCDK.js"
    );
  }),
  julia: create_language_async_loader_default("julia", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_julia" */
      "/build/_shared/julia-XGOU2JB7.js"
    );
  }),
  keyman: create_language_async_loader_default("keyman", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_keyman" */
      "/build/_shared/keyman-7MMV6NIZ.js"
    );
  }),
  kotlin: create_language_async_loader_default("kotlin", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_kotlin" */
      "/build/_shared/kotlin-LTF66IIB.js"
    );
  }),
  latex: create_language_async_loader_default("latex", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_latex" */
      "/build/_shared/latex-7H3SKJJK.js"
    );
  }),
  less: create_language_async_loader_default("less", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_less" */
      "/build/_shared/less-QJZ6OY6N.js"
    );
  }),
  liquid: create_language_async_loader_default("liquid", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_liquid" */
      "/build/_shared/liquid-NHHVTUQY.js"
    );
  }),
  lisp: create_language_async_loader_default("lisp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lisp" */
      "/build/_shared/lisp-JWC5ELUG.js"
    );
  }),
  livescript: create_language_async_loader_default("livescript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_livescript" */
      "/build/_shared/livescript-BAQNCAXM.js"
    );
  }),
  lolcode: create_language_async_loader_default("lolcode", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lolcode" */
      "/build/_shared/lolcode-DKNP3O2M.js"
    );
  }),
  lua: create_language_async_loader_default("lua", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lua" */
      "/build/_shared/lua-IGW5Y6JK.js"
    );
  }),
  makefile: create_language_async_loader_default("makefile", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_makefile" */
      "/build/_shared/makefile-IHLOFXZA.js"
    );
  }),
  markdown: create_language_async_loader_default("markdown", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markdown" */
      "/build/_shared/markdown-UHM35CPY.js"
    );
  }),
  markupTemplating: create_language_async_loader_default("markupTemplating", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markupTemplating" */
      "/build/_shared/markup-templating-QLUMFL2J.js"
    );
  }),
  markup: create_language_async_loader_default("markup", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markup" */
      "/build/_shared/markup-O2JDLHPF.js"
    );
  }),
  matlab: create_language_async_loader_default("matlab", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_matlab" */
      "/build/_shared/matlab-HKWAZKUX.js"
    );
  }),
  mel: create_language_async_loader_default("mel", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mel" */
      "/build/_shared/mel-P2AV4ZSE.js"
    );
  }),
  mizar: create_language_async_loader_default("mizar", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mizar" */
      "/build/_shared/mizar-D65JDJO5.js"
    );
  }),
  monkey: create_language_async_loader_default("monkey", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_monkey" */
      "/build/_shared/monkey-7IHRJLNK.js"
    );
  }),
  n4js: create_language_async_loader_default("n4js", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_n4js" */
      "/build/_shared/n4js-NNW2FWRW.js"
    );
  }),
  nasm: create_language_async_loader_default("nasm", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nasm" */
      "/build/_shared/nasm-XOIBSFVY.js"
    );
  }),
  nginx: create_language_async_loader_default("nginx", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nginx" */
      "/build/_shared/nginx-BV5LERXK.js"
    );
  }),
  nim: create_language_async_loader_default("nim", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nim" */
      "/build/_shared/nim-LNAHQHY2.js"
    );
  }),
  nix: create_language_async_loader_default("nix", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nix" */
      "/build/_shared/nix-6STS7H4P.js"
    );
  }),
  nsis: create_language_async_loader_default("nsis", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nsis" */
      "/build/_shared/nsis-KQCUCQ2G.js"
    );
  }),
  objectivec: create_language_async_loader_default("objectivec", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_objectivec" */
      "/build/_shared/objectivec-NFHRWNTF.js"
    );
  }),
  ocaml: create_language_async_loader_default("ocaml", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ocaml" */
      "/build/_shared/ocaml-7TNRTEBT.js"
    );
  }),
  opencl: create_language_async_loader_default("opencl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_opencl" */
      "/build/_shared/opencl-AAITUGTX.js"
    );
  }),
  oz: create_language_async_loader_default("oz", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_oz" */
      "/build/_shared/oz-V2EPLCVZ.js"
    );
  }),
  parigp: create_language_async_loader_default("parigp", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_parigp" */
      "/build/_shared/parigp-WENBWBUQ.js"
    );
  }),
  parser: create_language_async_loader_default("parser", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_parser" */
      "/build/_shared/parser-KAHG4MGZ.js"
    );
  }),
  pascal: create_language_async_loader_default("pascal", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pascal" */
      "/build/_shared/pascal-YFPA5AXD.js"
    );
  }),
  perl: create_language_async_loader_default("perl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_perl" */
      "/build/_shared/perl-J224NFP4.js"
    );
  }),
  phpExtras: create_language_async_loader_default("phpExtras", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_phpExtras" */
      "/build/_shared/php-extras-2CLVZVMC.js"
    );
  }),
  php: create_language_async_loader_default("php", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_php" */
      "/build/_shared/php-2EEAFVEQ.js"
    );
  }),
  plsql: create_language_async_loader_default("plsql", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_plsql" */
      "/build/_shared/plsql-HTKJNNQW.js"
    );
  }),
  powershell: create_language_async_loader_default("powershell", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_powershell" */
      "/build/_shared/powershell-QSJW2ZHV.js"
    );
  }),
  processing: create_language_async_loader_default("processing", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_processing" */
      "/build/_shared/processing-RSKRXAPP.js"
    );
  }),
  prolog: create_language_async_loader_default("prolog", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_prolog" */
      "/build/_shared/prolog-NUGDKTGJ.js"
    );
  }),
  properties: create_language_async_loader_default("properties", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_properties" */
      "/build/_shared/properties-KNZZDCML.js"
    );
  }),
  protobuf: create_language_async_loader_default("protobuf", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_protobuf" */
      "/build/_shared/protobuf-DVMDET3P.js"
    );
  }),
  pug: create_language_async_loader_default("pug", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pug" */
      "/build/_shared/pug-6A3LTIAJ.js"
    );
  }),
  puppet: create_language_async_loader_default("puppet", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_puppet" */
      "/build/_shared/puppet-LEJWWLD2.js"
    );
  }),
  pure: create_language_async_loader_default("pure", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pure" */
      "/build/_shared/pure-52POBVO5.js"
    );
  }),
  python: create_language_async_loader_default("python", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_python" */
      "/build/_shared/python-ZWCH65CD.js"
    );
  }),
  q: create_language_async_loader_default("q", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_q" */
      "/build/_shared/q-UBXCKIZE.js"
    );
  }),
  qore: create_language_async_loader_default("qore", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_qore" */
      "/build/_shared/qore-EHWX5KDM.js"
    );
  }),
  r: create_language_async_loader_default("r", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_r" */
      "/build/_shared/r-QEE6ES6F.js"
    );
  }),
  reason: create_language_async_loader_default("reason", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_reason" */
      "/build/_shared/reason-DCCTVZYE.js"
    );
  }),
  renpy: create_language_async_loader_default("renpy", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_renpy" */
      "/build/_shared/renpy-YVWMEFVU.js"
    );
  }),
  rest: create_language_async_loader_default("rest", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rest" */
      "/build/_shared/rest-NELMRSOY.js"
    );
  }),
  rip: create_language_async_loader_default("rip", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rip" */
      "/build/_shared/rip-IAFKG2QD.js"
    );
  }),
  roboconf: create_language_async_loader_default("roboconf", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_roboconf" */
      "/build/_shared/roboconf-ODZUDDVX.js"
    );
  }),
  ruby: create_language_async_loader_default("ruby", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ruby" */
      "/build/_shared/ruby-JW6FBTMS.js"
    );
  }),
  rust: create_language_async_loader_default("rust", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rust" */
      "/build/_shared/rust-WPYXXVVJ.js"
    );
  }),
  sas: create_language_async_loader_default("sas", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sas" */
      "/build/_shared/sas-PELCNCKB.js"
    );
  }),
  sass: create_language_async_loader_default("sass", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sass" */
      "/build/_shared/sass-XUF7PPP3.js"
    );
  }),
  scala: create_language_async_loader_default("scala", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scala" */
      "/build/_shared/scala-SAXHREJJ.js"
    );
  }),
  scheme: create_language_async_loader_default("scheme", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scheme" */
      "/build/_shared/scheme-EZG5OHRI.js"
    );
  }),
  scss: create_language_async_loader_default("scss", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scss" */
      "/build/_shared/scss-YCOEWT2C.js"
    );
  }),
  smalltalk: create_language_async_loader_default("smalltalk", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_smalltalk" */
      "/build/_shared/smalltalk-4MRGABSQ.js"
    );
  }),
  smarty: create_language_async_loader_default("smarty", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_smarty" */
      "/build/_shared/smarty-2W6AMQ2R.js"
    );
  }),
  soy: create_language_async_loader_default("soy", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_soy" */
      "/build/_shared/soy-JETLJFB2.js"
    );
  }),
  sql: create_language_async_loader_default("sql", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sql" */
      "/build/_shared/sql-BUXQBL5M.js"
    );
  }),
  stylus: create_language_async_loader_default("stylus", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_stylus" */
      "/build/_shared/stylus-B3LVE7FO.js"
    );
  }),
  swift: create_language_async_loader_default("swift", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_swift" */
      "/build/_shared/swift-FYZU7EEP.js"
    );
  }),
  tap: create_language_async_loader_default("tap", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tap" */
      "/build/_shared/tap-HO3T4675.js"
    );
  }),
  tcl: create_language_async_loader_default("tcl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tcl" */
      "/build/_shared/tcl-7ZIJOJ5U.js"
    );
  }),
  textile: create_language_async_loader_default("textile", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_textile" */
      "/build/_shared/textile-BG6TXLDM.js"
    );
  }),
  tsx: create_language_async_loader_default("tsx", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tsx" */
      "/build/_shared/tsx-SI4RRKJJ.js"
    );
  }),
  tt2: create_language_async_loader_default("tt2", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tt2" */
      "/build/_shared/tt2-Z4F5C5PA.js"
    );
  }),
  twig: create_language_async_loader_default("twig", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_twig" */
      "/build/_shared/twig-UVVORUVR.js"
    );
  }),
  typescript: create_language_async_loader_default("typescript", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_typescript" */
      "/build/_shared/typescript-YCGI2FZ7.js"
    );
  }),
  vbnet: create_language_async_loader_default("vbnet", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vbnet" */
      "/build/_shared/vbnet-QZQEMW2Y.js"
    );
  }),
  velocity: create_language_async_loader_default("velocity", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_velocity" */
      "/build/_shared/velocity-GDOR7RRM.js"
    );
  }),
  verilog: create_language_async_loader_default("verilog", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_verilog" */
      "/build/_shared/verilog-EIKA4TTM.js"
    );
  }),
  vhdl: create_language_async_loader_default("vhdl", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vhdl" */
      "/build/_shared/vhdl-UIRXOV4Q.js"
    );
  }),
  vim: create_language_async_loader_default("vim", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vim" */
      "/build/_shared/vim-UDYLOBE3.js"
    );
  }),
  visualBasic: create_language_async_loader_default("visualBasic", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_visualBasic" */
      "/build/_shared/visual-basic-QXGXO6V5.js"
    );
  }),
  wasm: create_language_async_loader_default("wasm", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wasm" */
      "/build/_shared/wasm-O3XSKURK.js"
    );
  }),
  wiki: create_language_async_loader_default("wiki", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wiki" */
      "/build/_shared/wiki-QSJAY4BX.js"
    );
  }),
  xeora: create_language_async_loader_default("xeora", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xeora" */
      "/build/_shared/xeora-N6NQ6GII.js"
    );
  }),
  xojo: create_language_async_loader_default("xojo", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xojo" */
      "/build/_shared/xojo-A45YHE3V.js"
    );
  }),
  xquery: create_language_async_loader_default("xquery", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xquery" */
      "/build/_shared/xquery-QFN22QMV.js"
    );
  }),
  yaml: create_language_async_loader_default("yaml", function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_yaml" */
      "/build/_shared/yaml-NV5PP7NP.js"
    );
  })
};

// node_modules/react-syntax-highlighter/dist/esm/prism-async-light.js
var prism_async_light_default = async_syntax_highlighter_default({
  loader: function loader() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */
      "/build/_shared/core-IYAR3NIT.js"
    ).then(function(module) {
      return module.default || module;
    });
  },
  isLanguageRegistered: function isLanguageRegistered(instance, language) {
    return instance.registered(language);
  },
  languageLoaders: prism_default,
  registerLanguage: function registerLanguage(instance, name, language) {
    return instance.register(language);
  }
});

// node_modules/react-code-blocks/dist/react-code-blocks.esm.js
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}
var DEFAULT_THEME_MODE = "light";
function getTheme(props) {
  return _extends2({
    mode: DEFAULT_THEME_MODE
  }, props === null || props === void 0 ? void 0 : props.theme);
}
function themed(modesOrVariant) {
  var modes = modesOrVariant;
  return function(props) {
    var theme = getTheme(props);
    return modes[theme.mode];
  };
}
var defaultColors = function defaultColors2(theme) {
  var rcbTheme = {
    theme
  };
  return {
    lineNumberColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    lineNumberBgColor: themed({
      light: "#fafafa",
      dark: "#282c34"
    })(rcbTheme),
    backgroundColor: themed({
      light: "#fafafa",
      dark: "#282c34"
    })(rcbTheme),
    textColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    substringColor: themed({
      light: "#e45649",
      dark: "#e06c75"
    })(rcbTheme),
    keywordColor: themed({
      light: "#a626a4",
      dark: "#c678dd"
    })(rcbTheme),
    attributeColor: themed({
      light: "#50a14f",
      dark: "#98c379"
    })(rcbTheme),
    selectorAttributeColor: themed({
      light: "#e45649",
      dark: "#e06c75"
    })(rcbTheme),
    docTagColor: themed({
      light: "#a626a4",
      dark: "#c678dd"
    })(rcbTheme),
    nameColor: themed({
      light: "#e45649",
      dark: "#e06c75"
    })(rcbTheme),
    builtInColor: themed({
      light: "#c18401",
      dark: "#e6c07b"
    })(rcbTheme),
    literalColor: themed({
      light: "#0184bb",
      dark: "#56b6c2"
    })(rcbTheme),
    bulletColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    codeColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    additionColor: themed({
      light: "#50a14f",
      dark: "#98c379"
    })(rcbTheme),
    regexpColor: themed({
      light: "#50a14f",
      dark: "#98c379"
    })(rcbTheme),
    symbolColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    variableColor: themed({
      light: "#986801",
      dark: "#d19a66"
    })(rcbTheme),
    templateVariableColor: themed({
      light: "#986801",
      dark: "#d19a66"
    })(rcbTheme),
    linkColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    selectorClassColor: themed({
      light: "#986801",
      dark: "#d19a66"
    })(rcbTheme),
    typeColor: themed({
      light: "#986801",
      dark: "#d19a66"
    })(rcbTheme),
    stringColor: themed({
      light: "#50a14f",
      dark: "#98c379"
    })(rcbTheme),
    selectorIdColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    quoteColor: themed({
      light: "#a0a1a7",
      dark: "#5c6370"
    })(rcbTheme),
    templateTagColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    deletionColor: themed({
      light: "#e45649",
      dark: "#e06c75"
    })(rcbTheme),
    titleColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    sectionColor: themed({
      light: "#e45649",
      dark: "#e06c75"
    })(rcbTheme),
    commentColor: themed({
      light: "#a0a1a7",
      dark: "#5c6370"
    })(rcbTheme),
    metaKeywordColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    metaColor: themed({
      light: "#4078f2",
      dark: "#61aeee"
    })(rcbTheme),
    functionColor: themed({
      light: "#383a42",
      dark: "#abb2bf"
    })(rcbTheme),
    numberColor: themed({
      light: "#986801",
      dark: "#d19a66"
    })(rcbTheme)
  };
};
var codeFontFamily = "inherit";
var fontSize = "inherit";
var codeContainerStyle = {
  fontSize,
  fontFamily: codeFontFamily,
  lineHeight: 20 / 12,
  padding: 8
};
var lineNumberContainerStyle = function lineNumberContainerStyle2(theme) {
  return {
    fontSize,
    lineHeight: 20 / 14,
    color: theme.lineNumberColor,
    backgroundColor: theme.lineNumberBgColor,
    flexShrink: 0,
    padding: 8,
    textAlign: "right",
    userSelect: "none"
  };
};
var sharedCodeStyle = function sharedCodeStyle2(theme) {
  return {
    key: {
      color: theme.keywordColor,
      fontWeight: "bolder"
    },
    keyword: {
      color: theme.keywordColor,
      fontWeight: "bolder"
    },
    "attr-name": {
      color: theme.attributeColor
    },
    selector: {
      color: theme.selectorTagColor
    },
    comment: {
      color: theme.commentColor,
      fontFamily: codeFontFamily,
      fontStyle: "italic"
    },
    "block-comment": {
      color: theme.commentColor,
      fontFamily: codeFontFamily,
      fontStyle: "italic"
    },
    "function-name": {
      color: theme.sectionColor
    },
    "class-name": {
      color: theme.sectionColor
    },
    doctype: {
      color: theme.docTagColor
    },
    substr: {
      color: theme.substringColor
    },
    namespace: {
      color: theme.nameColor
    },
    builtin: {
      color: theme.builtInColor
    },
    entity: {
      color: theme.literalColor
    },
    bullet: {
      color: theme.bulletColor
    },
    code: {
      color: theme.codeColor
    },
    addition: {
      color: theme.additionColor
    },
    regex: {
      color: theme.regexpColor
    },
    symbol: {
      color: theme.symbolColor
    },
    variable: {
      color: theme.variableColor
    },
    url: {
      color: theme.linkColor
    },
    "selector-attr": {
      color: theme.selectorAttributeColor
    },
    "selector-pseudo": {
      color: theme.selectorPseudoColor
    },
    type: {
      color: theme.typeColor
    },
    string: {
      color: theme.stringColor
    },
    quote: {
      color: theme.quoteColor
    },
    tag: {
      color: theme.templateTagColor
    },
    deletion: {
      color: theme.deletionColor
    },
    title: {
      color: theme.titleColor
    },
    section: {
      color: theme.sectionColor
    },
    "meta-keyword": {
      color: theme.metaKeywordColor
    },
    meta: {
      color: theme.metaColor
    },
    italic: {
      fontStyle: "italic"
    },
    bold: {
      fontWeight: "bolder"
    },
    "function": {
      color: theme.functionColor
    },
    number: {
      color: theme.numberColor
    }
  };
};
var codeStyle = function codeStyle2(theme) {
  return {
    fontSize,
    fontFamily: codeFontFamily,
    background: theme.backgroundColor,
    color: theme.textColor,
    borderRadius: 3,
    display: "flex",
    lineHeight: 20 / 14,
    overflowX: "auto",
    whiteSpace: "pre"
  };
};
var codeBlockStyle = function codeBlockStyle2(theme) {
  return _extends2({
    'pre[class*="language-"]': codeStyle(theme)
  }, sharedCodeStyle(theme));
};
var inlineCodeStyle = function inlineCodeStyle2(theme) {
  return _extends2({
    'pre[class*="language-"]': _extends2({}, codeStyle(theme), {
      padding: "2px 4px",
      display: "inline",
      whiteSpace: "pre-wrap"
    })
  }, sharedCodeStyle(theme));
};
function applyTheme(theme) {
  if (theme === void 0) {
    theme = {
      mode: "light"
    };
  }
  var newTheme = _extends2({}, defaultColors(theme), theme);
  return {
    lineNumberContainerStyle: lineNumberContainerStyle(newTheme),
    codeBlockStyle: codeBlockStyle(newTheme),
    inlineCodeStyle: inlineCodeStyle(newTheme),
    codeContainerStyle
  };
}
var SUPPORTED_LANGUAGE_ALIASES = /* @__PURE__ */ Object.freeze([{
  name: "PHP",
  alias: ["php", "php3", "php4", "php5"],
  value: "php"
}, {
  name: "Java",
  alias: ["java"],
  value: "java"
}, {
  name: "CSharp",
  alias: ["csharp", "c#"],
  value: "cs"
}, {
  name: "Python",
  alias: ["python", "py"],
  value: "python"
}, {
  name: "JavaScript",
  alias: ["javascript", "js"],
  value: "javascript"
}, {
  name: "XML",
  alias: ["xml"],
  value: "xml"
}, {
  name: "HTML",
  alias: ["html", "htm"],
  value: "markup"
}, {
  name: "C++",
  alias: ["c++", "cpp", "clike"],
  value: "cpp"
}, {
  name: "Ruby",
  alias: ["ruby", "rb", "duby"],
  value: "ruby"
}, {
  name: "Objective-C",
  alias: ["objective-c", "objectivec", "obj-c", "objc"],
  value: "objectivec"
}, {
  name: "C",
  alias: ["c"],
  value: "cpp"
}, {
  name: "Swift",
  alias: ["swift"],
  value: "swift"
}, {
  name: "TeX",
  alias: ["tex", "latex"],
  value: "tex"
}, {
  name: "Shell",
  alias: ["shell", "sh", "ksh", "zsh"],
  value: "bash"
}, {
  name: "Scala",
  alias: ["scala"],
  value: "scala"
}, {
  name: "Go",
  alias: ["go"],
  value: "go"
}, {
  name: "ActionScript",
  alias: ["actionscript", "actionscript3", "as"],
  value: "actionscript"
}, {
  name: "ColdFusion",
  alias: ["coldfusion"],
  value: "xml"
}, {
  name: "JavaFX",
  alias: ["javafx", "jfx"],
  value: "java"
}, {
  name: "VbNet",
  alias: ["vbnet", "vb.net"],
  value: "vbnet"
}, {
  name: "JSON",
  alias: ["json"],
  value: "json"
}, {
  name: "MATLAB",
  alias: ["matlab"],
  value: "matlab"
}, {
  name: "Groovy",
  alias: ["groovy"],
  value: "groovy"
}, {
  name: "SQL",
  alias: ["sql", "postgresql", "postgres", "plpgsql", "psql", "postgresql-console", "postgres-console", "tsql", "t-sql", "mysql", "sqlite"],
  value: "sql"
}, {
  name: "R",
  alias: ["r"],
  value: "r"
}, {
  name: "Perl",
  alias: ["perl", "pl"],
  value: "perl"
}, {
  name: "Lua",
  alias: ["lua"],
  value: "lua"
}, {
  name: "Delphi",
  alias: ["delphi", "pas", "pascal", "objectpascal"],
  value: "delphi"
}, {
  name: "XML",
  alias: ["xml"],
  value: "xml"
}, {
  name: "TypeScript",
  alias: ["typescript", "ts", "tsx"],
  value: "typescript"
}, {
  name: "CoffeeScript",
  alias: ["coffeescript", "coffee-script", "coffee"],
  value: "coffeescript"
}, {
  name: "Haskell",
  alias: ["haskell", "hs"],
  value: "haskell"
}, {
  name: "Puppet",
  alias: ["puppet"],
  value: "puppet"
}, {
  name: "Arduino",
  alias: ["arduino"],
  value: "arduino"
}, {
  name: "Fortran",
  alias: ["fortran"],
  value: "fortran"
}, {
  name: "Erlang",
  alias: ["erlang", "erl"],
  value: "erlang"
}, {
  name: "PowerShell",
  alias: ["powershell", "posh", "ps1", "psm1"],
  value: "powershell"
}, {
  name: "Haxe",
  alias: ["haxe", "hx", "hxsl"],
  value: "haxe"
}, {
  name: "Elixir",
  alias: ["elixir", "ex", "exs"],
  value: "elixir"
}, {
  name: "Verilog",
  alias: ["verilog", "v"],
  value: "verilog"
}, {
  name: "Rust",
  alias: ["rust"],
  value: "rust"
}, {
  name: "VHDL",
  alias: ["vhdl"],
  value: "vhdl"
}, {
  name: "Sass",
  alias: ["sass"],
  value: "less"
}, {
  name: "OCaml",
  alias: ["ocaml"],
  value: "ocaml"
}, {
  name: "Dart",
  alias: ["dart"],
  value: "dart"
}, {
  name: "CSS",
  alias: ["css"],
  value: "css"
}, {
  name: "reStructuredText",
  alias: ["restructuredtext", "rst", "rest"],
  value: "rest"
}, {
  name: "ObjectPascal",
  alias: ["objectpascal"],
  value: "delphi"
}, {
  name: "Kotlin",
  alias: ["kotlin"],
  value: "kotlin"
}, {
  name: "D",
  alias: ["d"],
  value: "d"
}, {
  name: "Octave",
  alias: ["octave"],
  value: "matlab"
}, {
  name: "QML",
  alias: ["qbs", "qml"],
  value: "qml"
}, {
  name: "Prolog",
  alias: ["prolog"],
  value: "prolog"
}, {
  name: "FoxPro",
  alias: ["foxpro", "vfp", "clipper", "xbase"],
  value: "vbnet"
}, {
  name: "Scheme",
  alias: ["scheme", "scm"],
  value: "scheme"
}, {
  name: "CUDA",
  alias: ["cuda", "cu"],
  value: "cpp"
}, {
  name: "Julia",
  alias: ["julia", "jl"],
  value: "julia"
}, {
  name: "Racket",
  alias: ["racket", "rkt"],
  value: "lisp"
}, {
  name: "Ada",
  alias: ["ada", "ada95", "ada2005"],
  value: "ada"
}, {
  name: "Tcl",
  alias: ["tcl"],
  value: "tcl"
}, {
  name: "Mathematica",
  alias: ["mathematica", "mma", "nb"],
  value: "mathematica"
}, {
  name: "Autoit",
  alias: ["autoit"],
  value: "autoit"
}, {
  name: "StandardML",
  alias: ["standardmL", "sml", "standardml"],
  value: "sml"
}, {
  name: "Objective-J",
  alias: ["objective-j", "objectivej", "obj-j", "objj"],
  value: "objectivec"
}, {
  name: "Smalltalk",
  alias: ["smalltalk", "squeak", "st"],
  value: "smalltalk"
}, {
  name: "Vala",
  alias: ["vala", "vapi"],
  value: "vala"
}, {
  name: "ABAP",
  alias: ["abap"],
  value: "sql"
}, {
  name: "LiveScript",
  alias: ["livescript", "live-script"],
  value: "livescript"
}, {
  name: "XQuery",
  alias: ["xquery", "xqy", "xq", "xql", "xqm"],
  value: "xquery"
}, {
  name: "PlainText",
  alias: ["text", "plaintext"],
  value: "text"
}, {
  name: "Yaml",
  alias: ["yaml", "yml"],
  value: "yaml"
}, {
  name: "GraphQL",
  alias: ["graphql", "gql"],
  value: "graphql"
}]);
var normalizeLanguage = function normalizeLanguage2(language) {
  if (!language) {
    return "";
  }
  var match = SUPPORTED_LANGUAGE_ALIASES.find(function(val) {
    return val.name === language || val.alias.includes(language);
  });
  return match ? match.value : language || "text";
};
var Code = /* @__PURE__ */ function(_PureComponent) {
  _inheritsLoose(Code2, _PureComponent);
  function Code2() {
    var _this;
    _this = _PureComponent.apply(this, arguments) || this;
    _this._isMounted = false;
    return _this;
  }
  var _proto = Code2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };
  _proto.getLineOpacity = function getLineOpacity(lineNumber) {
    if (!this.props.highlight) {
      return 1;
    }
    var highlight = this.props.highlight.split(",").map(function(num) {
      if (num.indexOf("-") > 0) {
        var _num$split$map$sort = num.split("-").map(Number).sort(), from = _num$split$map$sort[0], to = _num$split$map$sort[1];
        return Array(to + 1).fill(void 0).map(function(_2, index) {
          return index;
        }).slice(from, to + 1);
      }
      return Number(num);
    }).reduce(function(acc, val) {
      return acc.concat(val);
    }, []);
    if (highlight.length === 0) {
      return 1;
    }
    if (highlight.includes(lineNumber)) {
      return 1;
    }
    return 0.3;
  };
  _proto.render = function render() {
    var _this2 = this;
    var _applyTheme = applyTheme(this.props.theme), inlineCodeStyle3 = _applyTheme.inlineCodeStyle;
    var language = normalizeLanguage(this.props.language);
    var props = {
      language,
      PreTag: this.props.preTag,
      style: this.props.codeStyle || inlineCodeStyle3,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber: this.props.startingLineNumber,
      codeTagProps: this.props.codeTagProps
    };
    return import_react5.default.createElement(prism_async_light_default, Object.assign({}, props, {
      wrapLines: this.props.highlight.length > 0,
      customStyle: this.props.customStyle,
      lineProps: function lineProps(lineNumber) {
        return {
          style: _extends2({
            opacity: _this2.getLineOpacity(lineNumber)
          }, _this2.props.lineNumberContainerStyle)
        };
      }
    }), this.props.text);
  };
  return Code2;
}(import_react5.PureComponent);
Code.defaultProps = {
  theme: {},
  showLineNumbers: false,
  startingLineNumber: 1,
  lineNumberContainerStyle: {},
  codeTagProps: {},
  preTag: "span",
  highlight: "",
  customStyle: {}
};
var LANGUAGE_FALLBACK = "text";
var CodeBlock = /* @__PURE__ */ function(_PureComponent) {
  _inheritsLoose(CodeBlock2, _PureComponent);
  function CodeBlock2() {
    var _this;
    _this = _PureComponent.apply(this, arguments) || this;
    _this._isMounted = false;
    _this.handleCopy = function(event) {
      var data = event.nativeEvent.clipboardData;
      if (data) {
        event.preventDefault();
        var selection = window.getSelection();
        if (selection === null) {
          return;
        }
        var selectedText = selection.toString();
        var document2 = "<!doctype html><html><head></head><body><pre>" + selectedText + "</pre></body></html>";
        data.clearData();
        data.setData("text/html", document2);
        data.setData("text/plain", selectedText);
      }
    };
    return _this;
  }
  var _proto = CodeBlock2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };
  _proto.render = function render() {
    var _this$props, _this$props2, _this$props3, _this$props4;
    var _applyTheme = applyTheme(this.props.theme), lineNumberContainerStyle3 = _applyTheme.lineNumberContainerStyle, codeBlockStyle3 = _applyTheme.codeBlockStyle, codeContainerStyle2 = _applyTheme.codeContainerStyle;
    var props = {
      language: this.props.language || LANGUAGE_FALLBACK,
      codeStyle: _extends2({}, codeBlockStyle3, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.codeBlockStyle),
      customStyle: (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.customStyle,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber: this.props.startingLineNumber,
      codeTagProps: {
        style: _extends2({}, codeContainerStyle2, (_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.codeContainerStyle)
      },
      lineNumberContainerStyle: _extends2({}, lineNumberContainerStyle3, (_this$props4 = this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.lineNumberContainerStyle),
      text: this.props.text.toString(),
      highlight: this.props.highlight
    };
    return import_react5.default.createElement(Code, Object.assign({}, props));
  };
  return CodeBlock2;
}(import_react5.PureComponent);
CodeBlock.displayName = "CodeBlock";
CodeBlock.defaultProps = {
  showLineNumbers: true,
  startingLineNumber: 1,
  language: LANGUAGE_FALLBACK,
  theme: {},
  highlight: "",
  lineNumberContainerStyle: {},
  customStyle: {},
  codeBlockStyle: {}
};
var ClipboardListIcon = function ClipboardListIcon2(_ref) {
  var size = _ref.size, color = _ref.color, props = _objectWithoutPropertiesLoose2(_ref, ["size", "color"]);
  return import_react5.default.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 384 512",
    width: size,
    height: size,
    fill: color
  }), import_react5.default.createElement("path", {
    d: "M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"
  }));
};
ClipboardListIcon.displayName = "ClipboardListIcon";
ClipboardListIcon.defaultProps = {
  size: "16pt",
  color: "currentcolor"
};
var ClipboardCheckIcon = function ClipboardCheckIcon2(_ref2) {
  var size = _ref2.size, color = _ref2.color, props = _objectWithoutPropertiesLoose2(_ref2, ["size", "color"]);
  return import_react5.default.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 384 512",
    width: size,
    height: size,
    fill: color
  }), import_react5.default.createElement("path", {
    d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"
  }));
};
ClipboardCheckIcon.displayName = "ClipboardCheckIcon";
ClipboardCheckIcon.defaultProps = {
  size: "16pt",
  color: "currentcolor"
};
function Copy(_ref3) {
  var size = _ref3.size, color = _ref3.color, copied = _ref3.copied, props = _objectWithoutPropertiesLoose2(_ref3, ["size", "color", "copied"]);
  if (copied) {
    return import_react5.default.createElement(ClipboardCheckIcon, Object.assign({}, {
      color,
      size
    }, props));
  }
  return import_react5.default.createElement(ClipboardListIcon, Object.assign({}, {
    color,
    size
  }, props));
}
var isBrowser = function isBrowser2() {
  return Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
};
var useSSR = function useSSR2() {
  var _useState = (0, import_react5.useState)(false), browser = _useState[0], setBrowser = _useState[1];
  (0, import_react5.useEffect)(function() {
    setBrowser(isBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser
  };
};
var getId = function getId2() {
  return Math.random().toString(32).slice(2, 10);
};
var createElement2 = function createElement3(id) {
  var el = document.createElement("div");
  el.setAttribute("id", id);
  return el;
};
var usePortal = function usePortal2(selectId) {
  if (selectId === void 0) {
    selectId = getId();
  }
  var id = "zeit-ui-" + selectId;
  var _useSSR = useSSR(), isBrowser3 = _useSSR.isBrowser;
  var _useState = (0, import_react5.useState)(isBrowser3 ? createElement2(id) : null), elSnapshot = _useState[0], setElSnapshot = _useState[1];
  (0, import_react5.useEffect)(function() {
    var hasElement = document.querySelector("#" + id);
    var el = hasElement || createElement2(id);
    if (!hasElement) {
      document.body.appendChild(el);
    }
    setElSnapshot(el);
  }, []);
  return elSnapshot;
};
var warningStack = {};
var useWarning = function useWarning2(message, component) {
  var tag = component ? " [" + component + "]" : " ";
  var log = "[Zeit UI]" + tag + ": " + message;
  if (typeof console === "undefined")
    return;
  if (warningStack[log])
    return;
  warningStack[log] = true;
  if (true) {
    return console.error(log);
  }
  console.warn(log);
};
var defaultOptions = {
  onError: function onError() {
    return useWarning("Failed to copy.", "use-clipboard");
  }
};
var useClipboard = function useClipboard2(options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  var el = usePortal("clipboard");
  var copyText = function copyText2(el2, text) {
    if (!el2 || !text)
      return;
    var selection = window.getSelection();
    if (!selection)
      return;
    el2.style.whiteSpace = "pre";
    el2.textContent = text;
    var range = window.document.createRange();
    selection.removeAllRanges();
    range.selectNode(el2);
    selection.addRange(range);
    try {
      window.document.execCommand("copy");
    } catch (e2) {
      options.onError && options.onError();
    }
    selection.removeAllRanges();
    if (el2) {
      el2.textContent = "";
    }
  };
  var copy = (0, import_react5.useCallback)(function(text) {
    copyText(el, text);
  }, [el]);
  return {
    copy
  };
};
function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  background: ", ";\n  border-radius: 0.25rem;\n  padding: ", ";\n"]);
  _templateObject2 = function _templateObject22() {
    return data;
  };
  return data;
}
function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0.5em;\n  right: 0.75em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  margin-top: 0.15rem;\n  border-radius: 0.25rem;\n  max-height: 2rem;\n  max-width: 2rem;\n  padding: 0.25rem;\n  &:hover {\n    opacity: ", ";\n  }\n  &:focus {\n    outline: none;\n    opacity: 1;\n  }\n  .icon {\n    width: 1rem;\n    height: 1rem;\n  }\n"]);
  _templateObject = function _templateObject3() {
    return data;
  };
  return data;
}
var Button = /* @__PURE__ */ styled_components_browser_esm_default.button(/* @__PURE__ */ _templateObject(), function(p) {
  return p.theme.backgroundColor;
}, function(p) {
  return p.copied ? 1 : 0.5;
});
var Snippet = /* @__PURE__ */ styled_components_browser_esm_default.div(/* @__PURE__ */ _templateObject2(), function(p) {
  return p.theme.backgroundColor;
}, function(p) {
  return p.codeBlock ? "0.25rem 0.5rem 0.25rem 0.25rem" : "0.25rem";
});
function CopyBlock(_ref) {
  var theme = _ref.theme, text = _ref.text, _ref$codeBlock = _ref.codeBlock, codeBlock = _ref$codeBlock === void 0 ? false : _ref$codeBlock, _ref$customStyle = _ref.customStyle, customStyle = _ref$customStyle === void 0 ? {} : _ref$customStyle, onCopy = _ref.onCopy, rest = _objectWithoutPropertiesLoose2(_ref, ["theme", "text", "codeBlock", "customStyle", "onCopy"]);
  var _useState = (0, import_react5.useState)(false), copied = _useState[0], toggleCopy = _useState[1];
  var _useClipboard = useClipboard(), copy = _useClipboard.copy;
  var handler = function handler2() {
    copy(text);
    onCopy ? onCopy() : toggleCopy(!copied);
  };
  return import_react5.default.createElement(Snippet, Object.assign({}, {
    codeBlock
  }, {
    style: customStyle,
    theme
  }), codeBlock ? import_react5.default.createElement(CodeBlock, Object.assign({
    text,
    theme
  }, rest)) : import_react5.default.createElement(Code, Object.assign({
    text,
    theme
  }, rest)), import_react5.default.createElement(Button, Object.assign({
    type: "button",
    onClick: handler
  }, {
    theme,
    copied
  }), import_react5.default.createElement(Copy, {
    color: copied ? theme.stringColor : theme.textColor,
    copied,
    className: "icon",
    size: "16pt"
  })));
}
var CopyBlockWithTheme = /* @__PURE__ */ Xe(CopyBlock);
function ThemedCopyBlock(props) {
  return import_react5.default.createElement(CopyBlockWithTheme, Object.assign({}, props));
}

// app/components/editorjsReact.client.tsx
var CustomCodeRenderer = ({ data, style, classNames, config }) => {
  let content = null;
  if (typeof data === "string")
    content = data;
  else if (typeof data === "object" && data.code && typeof data.code === "string")
    content = data.text;
  console.log(data);
  return content ? /* @__PURE__ */ React.createElement(ThemedCopyBlock, {
    style,
    wrapLines: true,
    showLineNumbers: true,
    text: data,
    className: "code"
  }) : "";
};
var renderers = {
  code: CustomCodeRenderer
};
function EditorjsReact(props) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "blog-post-html"
  }, /* @__PURE__ */ React.createElement(import_editorjs_react_renderer.default, {
    renderers,
    data: JSON.parse(props.previousData)
  }));
}

// app/routes/blog/$slug.tsx
function PostSlug() {
  let post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog-post-container"
  }, /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement("img", {
    className: "cover-image",
    src: post.coverUrl
  }), /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(EditorjsReact, {
    previousData: post.editorjs
  })));
}
export {
  PostSlug as default
};
/*! For license information please see index.min.js.LICENSE.txt */
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/blog/$slug-PCOZ7DFI.js.map
