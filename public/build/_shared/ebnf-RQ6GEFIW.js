import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/ebnf.js
var require_ebnf = __commonJS({
  "node_modules/highlight.js/lib/languages/ebnf.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);
      var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
      };
      var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
      };
      var ruleBodyMode = {
        begin: /=/,
        end: /;/,
        contains: [
          commentMode,
          specialSequenceMode,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      return {
        illegal: /\S/,
        contains: [
          commentMode,
          nonTerminalMode,
          ruleBodyMode
        ]
      };
    };
  }
});
export default require_ebnf();
//# sourceMappingURL=/build/_shared/ebnf-RQ6GEFIW.js.map
