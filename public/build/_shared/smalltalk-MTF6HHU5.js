import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/smalltalk.js
var require_smalltalk = __commonJS({
  "node_modules/highlight.js/lib/languages/smalltalk.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var VAR_IDENT_RE = "[a-z][a-zA-Z0-9_]*";
      var CHAR = {
        className: "string",
        begin: "\\$.{1}"
      };
      var SYMBOL = {
        className: "symbol",
        begin: "#" + hljs.UNDERSCORE_IDENT_RE
      };
      return {
        aliases: ["st"],
        keywords: "self super nil true false thisContext",
        contains: [
          hljs.COMMENT('"', '"'),
          hljs.APOS_STRING_MODE,
          {
            className: "type",
            begin: "\\b[A-Z][A-Za-z0-9_]*",
            relevance: 0
          },
          {
            begin: VAR_IDENT_RE + ":",
            relevance: 0
          },
          hljs.C_NUMBER_MODE,
          SYMBOL,
          CHAR,
          {
            begin: "\\|[ ]*" + VAR_IDENT_RE + "([ ]+" + VAR_IDENT_RE + ")*[ ]*\\|",
            returnBegin: true,
            end: /\|/,
            illegal: /\S/,
            contains: [{ begin: "(\\|[ ]*)?" + VAR_IDENT_RE }]
          },
          {
            begin: "\\#\\(",
            end: "\\)",
            contains: [
              hljs.APOS_STRING_MODE,
              CHAR,
              hljs.C_NUMBER_MODE,
              SYMBOL
            ]
          }
        ]
      };
    };
  }
});
export default require_smalltalk();
//# sourceMappingURL=/build/_shared/smalltalk-MTF6HHU5.js.map
