import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/gherkin.js
var require_gherkin = __commonJS({
  "node_modules/highlight.js/lib/languages/gherkin.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        aliases: ["feature"],
        keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
        contains: [
          {
            className: "symbol",
            begin: "\\*",
            relevance: 0
          },
          {
            className: "meta",
            begin: "@[^@\\s]+"
          },
          {
            begin: "\\|",
            end: "\\|\\w*$",
            contains: [
              {
                className: "string",
                begin: "[^|]+"
              }
            ]
          },
          {
            className: "variable",
            begin: "<",
            end: ">"
          },
          hljs.HASH_COMMENT_MODE,
          {
            className: "string",
            begin: '"""',
            end: '"""'
          },
          hljs.QUOTE_STRING_MODE
        ]
      };
    };
  }
});
export default require_gherkin();
//# sourceMappingURL=/build/_shared/gherkin-SOT3CTWK.js.map
