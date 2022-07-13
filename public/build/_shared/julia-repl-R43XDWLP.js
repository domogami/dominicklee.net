import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/julia-repl.js
var require_julia_repl = __commonJS({
  "node_modules/highlight.js/lib/languages/julia-repl.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "meta",
            begin: /^julia>/,
            relevance: 10,
            starts: {
              end: /^(?![ ]{6})/,
              subLanguage: "julia"
            },
            aliases: ["jldoctest"]
          }
        ]
      };
    };
  }
});
export default require_julia_repl();
//# sourceMappingURL=/build/_shared/julia-repl-R43XDWLP.js.map
