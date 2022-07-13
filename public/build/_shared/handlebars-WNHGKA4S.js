import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/handlebars.js
var require_handlebars = __commonJS({
  "node_modules/highlight.js/lib/languages/handlebars.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var BUILT_INS = { "builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield" };
      return {
        aliases: ["hbs", "html.hbs", "html.handlebars"],
        case_insensitive: true,
        subLanguage: "xml",
        contains: [
          hljs.COMMENT("{{!(--)?", "(--)?}}"),
          {
            className: "template-tag",
            begin: /\{\{[#\/]/,
            end: /\}\}/,
            contains: [
              {
                className: "name",
                begin: /[a-zA-Z\.-]+/,
                keywords: BUILT_INS,
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
            begin: /\{\{/,
            end: /\}\}/,
            keywords: BUILT_INS
          }
        ]
      };
    };
  }
});
export default require_handlebars();
//# sourceMappingURL=/build/_shared/handlebars-WNHGKA4S.js.map
