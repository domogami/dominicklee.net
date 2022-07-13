import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/accesslog.js
var require_accesslog = __commonJS({
  "node_modules/highlight.js/lib/languages/accesslog.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "number",
            begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
          },
          {
            className: "number",
            begin: "\\b\\d+\\b",
            relevance: 0
          },
          {
            className: "string",
            begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
            end: '"',
            keywords: "GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",
            illegal: "\\n",
            relevance: 10
          },
          {
            className: "string",
            begin: /\[/,
            end: /\]/,
            illegal: "\\n"
          },
          {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n"
          }
        ]
      };
    };
  }
});
export default require_accesslog();
//# sourceMappingURL=/build/_shared/accesslog-KUVUN4H4.js.map
