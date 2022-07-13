import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/elm.js
var require_elm = __commonJS({
  "node_modules/highlight.js/lib/languages/elm.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var COMMENT = {
        variants: [
          hljs.COMMENT("--", "$"),
          hljs.COMMENT("{-", "-}", {
            contains: ["self"]
          })
        ]
      };
      var CONSTRUCTOR = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      };
      var LIST = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [
          { className: "type", begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?" },
          COMMENT
        ]
      };
      var RECORD = {
        begin: "{",
        end: "}",
        contains: LIST.contains
      };
      var CHARACTER = {
        className: "string",
        begin: "'\\\\?.",
        end: "'",
        illegal: "."
      };
      return {
        keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
        contains: [
          {
            beginKeywords: "port effect module",
            end: "exposing",
            keywords: "port effect module where command subscription exposing",
            contains: [LIST, COMMENT],
            illegal: "\\W\\.|;"
          },
          {
            begin: "import",
            end: "$",
            keywords: "import as exposing",
            contains: [LIST, COMMENT],
            illegal: "\\W\\.|;"
          },
          {
            begin: "type",
            end: "$",
            keywords: "type alias",
            contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
          },
          {
            beginKeywords: "infix infixl infixr",
            end: "$",
            contains: [hljs.C_NUMBER_MODE, COMMENT]
          },
          {
            begin: "port",
            end: "$",
            keywords: "port",
            contains: [COMMENT]
          },
          CHARACTER,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          CONSTRUCTOR,
          hljs.inherit(hljs.TITLE_MODE, { begin: "^[_a-z][\\w']*" }),
          COMMENT,
          { begin: "->|<-" }
        ],
        illegal: /;/
      };
    };
  }
});
export default require_elm();
//# sourceMappingURL=/build/_shared/elm-BZHUORR6.js.map
