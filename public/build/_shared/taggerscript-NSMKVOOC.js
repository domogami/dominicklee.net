import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/taggerscript.js
var require_taggerscript = __commonJS({
  "node_modules/highlight.js/lib/languages/taggerscript.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var COMMENT = {
        className: "comment",
        begin: /\$noop\(/,
        end: /\)/,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self", {
            begin: /\\./
          }]
        }],
        relevance: 10
      };
      var FUNCTION = {
        className: "keyword",
        begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        end: /\(/,
        excludeEnd: true
      };
      var VARIABLE = {
        className: "variable",
        begin: /%[_a-zA-Z0-9:]*/,
        end: "%"
      };
      var ESCAPE_SEQUENCE = {
        className: "symbol",
        begin: /\\./
      };
      return {
        contains: [
          COMMENT,
          FUNCTION,
          VARIABLE,
          ESCAPE_SEQUENCE
        ]
      };
    };
  }
});
export default require_taggerscript();
//# sourceMappingURL=/build/_shared/taggerscript-NSMKVOOC.js.map
