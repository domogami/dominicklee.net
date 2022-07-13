import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/vbscript-html.js
var require_vbscript_html = __commonJS({
  "node_modules/highlight.js/lib/languages/vbscript-html.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        subLanguage: "xml",
        contains: [
          {
            begin: "<%",
            end: "%>",
            subLanguage: "vbscript"
          }
        ]
      };
    };
  }
});
export default require_vbscript_html();
//# sourceMappingURL=/build/_shared/vbscript-html-UQBWTXED.js.map
