import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/step21.js
var require_step21 = __commonJS({
  "node_modules/highlight.js/lib/languages/step21.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var STEP21_IDENT_RE = "[A-Z_][A-Z0-9_.]*";
      var STEP21_KEYWORDS = {
        keyword: "HEADER ENDSEC DATA"
      };
      var STEP21_START = {
        className: "meta",
        begin: "ISO-10303-21;",
        relevance: 10
      };
      var STEP21_CLOSE = {
        className: "meta",
        begin: "END-ISO-10303-21;",
        relevance: 10
      };
      return {
        aliases: ["p21", "step", "stp"],
        case_insensitive: true,
        lexemes: STEP21_IDENT_RE,
        keywords: STEP21_KEYWORDS,
        contains: [
          STEP21_START,
          STEP21_CLOSE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.COMMENT("/\\*\\*!", "\\*/"),
          hljs.C_NUMBER_MODE,
          hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }),
          {
            className: "string",
            begin: "'",
            end: "'"
          },
          {
            className: "symbol",
            variants: [
              {
                begin: "#",
                end: "\\d+",
                illegal: "\\W"
              }
            ]
          }
        ]
      };
    };
  }
});
export default require_step21();
//# sourceMappingURL=/build/_shared/step21-SBNYY2II.js.map
