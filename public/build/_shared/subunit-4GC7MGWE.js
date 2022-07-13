import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/subunit.js
var require_subunit = __commonJS({
  "node_modules/highlight.js/lib/languages/subunit.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var DETAILS = {
        className: "string",
        begin: "\\[\n(multipart)?",
        end: "\\]\n"
      };
      var TIME = {
        className: "string",
        begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
      };
      var PROGRESSVALUE = {
        className: "string",
        begin: "(\\+|-)\\d+"
      };
      var KEYWORDS = {
        className: "keyword",
        relevance: 10,
        variants: [
          { begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?" },
          { begin: "^progress(:?)(\\s+)?(pop|push)?" },
          { begin: "^tags:" },
          { begin: "^time:" }
        ]
      };
      return {
        case_insensitive: true,
        contains: [
          DETAILS,
          TIME,
          PROGRESSVALUE,
          KEYWORDS
        ]
      };
    };
  }
});
export default require_subunit();
//# sourceMappingURL=/build/_shared/subunit-4GC7MGWE.js.map
