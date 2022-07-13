import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/bnf.js
var require_bnf = __commonJS({
  "node_modules/highlight.js/lib/languages/bnf.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "attribute",
            begin: /</,
            end: />/
          },
          {
            begin: /::=/,
            starts: {
              end: /$/,
              contains: [
                {
                  begin: /</,
                  end: />/
                },
                hljs.C_LINE_COMMENT_MODE,
                hljs.C_BLOCK_COMMENT_MODE,
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      };
    };
  }
});
export default require_bnf();
//# sourceMappingURL=/build/_shared/bnf-M3CX35UQ.js.map
