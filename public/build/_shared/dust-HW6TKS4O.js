import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/dust.js
var require_dust = __commonJS({
  "node_modules/highlight.js/lib/languages/dust.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var EXPRESSION_KEYWORDS = "if eq ne lt lte gt gte select default math sep";
      return {
        aliases: ["dst"],
        case_insensitive: true,
        subLanguage: "xml",
        contains: [
          {
            className: "template-tag",
            begin: /\{[#\/]/,
            end: /\}/,
            illegal: /;/,
            contains: [
              {
                className: "name",
                begin: /[a-zA-Z\.-]+/,
                starts: {
                  endsWithParent: true,
                  relevance: 0,
                  contains: [
                    hljs.QUOTE_STRING_MODE
                  ]
                }
              }
            ]
          },
          {
            className: "template-variable",
            begin: /\{/,
            end: /\}/,
            illegal: /;/,
            keywords: EXPRESSION_KEYWORDS
          }
        ]
      };
    };
  }
});
export default require_dust();
//# sourceMappingURL=/build/_shared/dust-HW6TKS4O.js.map
