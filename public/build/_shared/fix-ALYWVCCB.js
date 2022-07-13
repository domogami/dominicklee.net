import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/fix.js
var require_fix = __commonJS({
  "node_modules/highlight.js/lib/languages/fix.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            begin: /[^\u2401\u0001]+/,
            end: /[\u2401\u0001]/,
            excludeEnd: true,
            returnBegin: true,
            returnEnd: false,
            contains: [
              {
                begin: /([^\u2401\u0001=]+)/,
                end: /=([^\u2401\u0001=]+)/,
                returnEnd: true,
                returnBegin: false,
                className: "attr"
              },
              {
                begin: /=/,
                end: /([\u2401\u0001])/,
                excludeEnd: true,
                excludeBegin: true,
                className: "string"
              }
            ]
          }
        ],
        case_insensitive: true
      };
    };
  }
});
export default require_fix();
//# sourceMappingURL=/build/_shared/fix-ALYWVCCB.js.map
