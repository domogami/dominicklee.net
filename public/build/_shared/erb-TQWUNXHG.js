import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/erb.js
var require_erb = __commonJS({
  "node_modules/highlight.js/lib/languages/erb.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        subLanguage: "xml",
        contains: [
          hljs.COMMENT("<%#", "%>"),
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
    };
  }
});
export default require_erb();
//# sourceMappingURL=/build/_shared/erb-TQWUNXHG.js.map
