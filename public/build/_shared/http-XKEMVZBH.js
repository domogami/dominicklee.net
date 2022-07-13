import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/http.js
var require_http = __commonJS({
  "node_modules/highlight.js/lib/languages/http.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var VERSION = "HTTP/[0-9\\.]+";
      return {
        aliases: ["https"],
        illegal: "\\S",
        contains: [
          {
            begin: "^" + VERSION,
            end: "$",
            contains: [{ className: "number", begin: "\\b\\d{3}\\b" }]
          },
          {
            begin: "^[A-Z]+ (.*?) " + VERSION + "$",
            returnBegin: true,
            end: "$",
            contains: [
              {
                className: "string",
                begin: " ",
                end: " ",
                excludeBegin: true,
                excludeEnd: true
              },
              {
                begin: VERSION
              },
              {
                className: "keyword",
                begin: "[A-Z]+"
              }
            ]
          },
          {
            className: "attribute",
            begin: "^\\w",
            end: ": ",
            excludeEnd: true,
            illegal: "\\n|\\s|=",
            starts: { end: "$", relevance: 0 }
          },
          {
            begin: "\\n\\n",
            starts: { subLanguage: [], endsWithParent: true }
          }
        ]
      };
    };
  }
});
export default require_http();
//# sourceMappingURL=/build/_shared/http-XKEMVZBH.js.map
