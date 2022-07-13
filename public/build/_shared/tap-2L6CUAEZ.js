import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/tap.js
var require_tap = __commonJS({
  "node_modules/highlight.js/lib/languages/tap.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        case_insensitive: true,
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            className: "meta",
            variants: [
              { begin: "^TAP version (\\d+)$" },
              { begin: "^1\\.\\.(\\d+)$" }
            ]
          },
          {
            begin: "(s+)?---$",
            end: "\\.\\.\\.$",
            subLanguage: "yaml",
            relevance: 0
          },
          {
            className: "number",
            begin: " (\\d+) "
          },
          {
            className: "symbol",
            variants: [
              { begin: "^ok" },
              { begin: "^not ok" }
            ]
          }
        ]
      };
    };
  }
});
export default require_tap();
//# sourceMappingURL=/build/_shared/tap-2L6CUAEZ.js.map
