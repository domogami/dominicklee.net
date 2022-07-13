import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/flix.js
var require_flix = __commonJS({
  "node_modules/highlight.js/lib/languages/flix.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var CHAR = {
        className: "string",
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
      };
      var STRING = {
        className: "string",
        variants: [
          {
            begin: '"',
            end: '"'
          }
        ]
      };
      var NAME = {
        className: "title",
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
      };
      var METHOD = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
      };
      return {
        keywords: {
          literal: "true false",
          keyword: "case class def else enum if impl import in lat rel index let match namespace switch type yield with"
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          CHAR,
          STRING,
          METHOD,
          hljs.C_NUMBER_MODE
        ]
      };
    };
  }
});
export default require_flix();
//# sourceMappingURL=/build/_shared/flix-WT3HNDJW.js.map
