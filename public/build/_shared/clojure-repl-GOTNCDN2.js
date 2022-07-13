import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/clojure-repl.js
var require_clojure_repl = __commonJS({
  "node_modules/highlight.js/lib/languages/clojure-repl.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "meta",
            begin: /^([\w.-]+|\s*#_)?=>/,
            starts: {
              end: /$/,
              subLanguage: "clojure"
            }
          }
        ]
      };
    };
  }
});
export default require_clojure_repl();
//# sourceMappingURL=/build/_shared/clojure-repl-GOTNCDN2.js.map
