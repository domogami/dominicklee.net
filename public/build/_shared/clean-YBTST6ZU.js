import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/clean.js
var require_clean = __commonJS({
  "node_modules/highlight.js/lib/languages/clean.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        aliases: ["clean", "icl", "dcl"],
        keywords: {
          keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
          built_in: "Int Real Char Bool",
          literal: "True False"
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          { begin: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>" }
        ]
      };
    };
  }
});
export default require_clean();
//# sourceMappingURL=/build/_shared/clean-YBTST6ZU.js.map
