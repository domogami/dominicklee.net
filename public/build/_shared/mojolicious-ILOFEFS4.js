import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/mojolicious.js
var require_mojolicious = __commonJS({
  "node_modules/highlight.js/lib/languages/mojolicious.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        subLanguage: "xml",
        contains: [
          {
            className: "meta",
            begin: "^__(END|DATA)__$"
          },
          {
            begin: "^\\s*%{1,2}={0,2}",
            end: "$",
            subLanguage: "perl"
          },
          {
            begin: "<%{1,2}={0,2}",
            end: "={0,1}%>",
            subLanguage: "perl",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
    };
  }
});
export default require_mojolicious();
//# sourceMappingURL=/build/_shared/mojolicious-ILOFEFS4.js.map
