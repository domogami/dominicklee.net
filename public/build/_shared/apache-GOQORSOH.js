import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/apache.js
var require_apache = __commonJS({
  "node_modules/highlight.js/lib/languages/apache.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var NUMBER = { className: "number", begin: "[\\$%]\\d+" };
      return {
        aliases: ["apacheconf"],
        case_insensitive: true,
        contains: [
          hljs.HASH_COMMENT_MODE,
          { className: "section", begin: "</?", end: ">" },
          {
            className: "attribute",
            begin: /\w+/,
            relevance: 0,
            keywords: {
              nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
              end: /$/,
              relevance: 0,
              keywords: {
                literal: "on off all"
              },
              contains: [
                {
                  className: "meta",
                  begin: "\\s\\[",
                  end: "\\]$"
                },
                {
                  className: "variable",
                  begin: "[\\$%]\\{",
                  end: "\\}",
                  contains: ["self", NUMBER]
                },
                NUMBER,
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ],
        illegal: /\S/
      };
    };
  }
});
export default require_apache();
//# sourceMappingURL=/build/_shared/apache-GOQORSOH.js.map
