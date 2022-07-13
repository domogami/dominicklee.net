import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/javascript.js
var require_javascript = __commonJS({
  "node_modules/highlight.js/lib/languages/javascript.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
      var KEYWORDS = {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      };
      var NUMBER = {
        className: "number",
        variants: [
          { begin: "\\b(0[bB][01]+)" },
          { begin: "\\b(0[oO][0-7]+)" },
          { begin: hljs.C_NUMBER_RE }
        ],
        relevance: 0
      };
      var SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS,
        contains: []
      };
      var HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "xml"
        }
      };
      var CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: false,
          contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
          ],
          subLanguage: "css"
        }
      };
      var TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
          hljs.BACKSLASH_ESCAPE,
          SUBST
        ]
      };
      SUBST.contains = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        NUMBER,
        hljs.REGEXP_MODE
      ];
      var PARAMS_CONTAINS = SUBST.contains.concat([
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE
      ]);
      return {
        aliases: ["js", "jsx"],
        keywords: KEYWORDS,
        contains: [
          {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          {
            className: "meta",
            begin: /^#!/,
            end: /$/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          TEMPLATE_STRING,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBER,
          {
            begin: /[{,]\s*/,
            relevance: 0,
            contains: [
              {
                begin: IDENT_RE + "\\s*:",
                returnBegin: true,
                relevance: 0,
                contains: [{ className: "attr", begin: IDENT_RE, relevance: 0 }]
              }
            ]
          },
          {
            begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.REGEXP_MODE,
              {
                className: "function",
                begin: "(\\(.*?\\)|" + IDENT_RE + ")\\s*=>",
                returnBegin: true,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      {
                        begin: IDENT_RE
                      },
                      {
                        begin: /\(\s*\)/
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              },
              {
                className: "",
                begin: /\s/,
                end: /\s*/,
                skip: true
              },
              {
                begin: /</,
                end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                subLanguage: "xml",
                contains: [
                  { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: true },
                  {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                    skip: true,
                    contains: [
                      { begin: /<[A-Za-z0-9\\._:-]+\s*\/>/, skip: true },
                      "self"
                    ]
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /\{/,
            excludeEnd: true,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }),
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                contains: PARAMS_CONTAINS
              }
            ],
            illegal: /\[|%/
          },
          {
            begin: /\$[(.]/
          },
          hljs.METHOD_GUARD,
          {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:"\[\]]/,
            contains: [
              { beginKeywords: "extends" },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: "constructor get set",
            end: /\{/,
            excludeEnd: true
          }
        ],
        illegal: /#(?!!)/
      };
    };
  }
});
export default require_javascript();
//# sourceMappingURL=/build/_shared/javascript-J2WZ7555.js.map
