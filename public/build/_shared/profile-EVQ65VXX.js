import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/profile.js
var require_profile = __commonJS({
  "node_modules/highlight.js/lib/languages/profile.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          hljs.C_NUMBER_MODE,
          {
            begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
            end: ":",
            excludeEnd: true
          },
          {
            begin: "(ncalls|tottime|cumtime)",
            end: "$",
            keywords: "ncalls tottime|10 cumtime|10 filename",
            relevance: 10
          },
          {
            begin: "function calls",
            end: "$",
            contains: [hljs.C_NUMBER_MODE],
            relevance: 10
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: "string",
            begin: "\\(",
            end: "\\)$",
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }
        ]
      };
    };
  }
});
export default require_profile();
//# sourceMappingURL=/build/_shared/profile-EVQ65VXX.js.map
