import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/json.js
var require_json = __commonJS({
  "node_modules/highlight.js/lib/languages/json.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var LITERALS = { literal: "true false null" };
      var TYPES = [
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE
      ];
      var VALUE_CONTAINER = {
        end: ",",
        endsWithParent: true,
        excludeEnd: true,
        contains: TYPES,
        keywords: LITERALS
      };
      var OBJECT = {
        begin: "{",
        end: "}",
        contains: [
          {
            className: "attr",
            begin: /"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE],
            illegal: "\\n"
          },
          hljs.inherit(VALUE_CONTAINER, { begin: /:/ })
        ],
        illegal: "\\S"
      };
      var ARRAY = {
        begin: "\\[",
        end: "\\]",
        contains: [hljs.inherit(VALUE_CONTAINER)],
        illegal: "\\S"
      };
      TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
      return {
        contains: TYPES,
        keywords: LITERALS,
        illegal: "\\S"
      };
    };
  }
});
export default require_json();
//# sourceMappingURL=/build/_shared/json-5IA5GSIE.js.map
