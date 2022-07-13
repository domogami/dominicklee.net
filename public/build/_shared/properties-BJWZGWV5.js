import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/properties.js
var require_properties = __commonJS({
  "node_modules/highlight.js/lib/languages/properties.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var WS0 = "[ \\t\\f]*";
      var WS1 = "[ \\t\\f]+";
      var DELIM = "(" + WS0 + "[:=]" + WS0 + "|" + WS1 + ")";
      var KEY_ALPHANUM = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+";
      var KEY_OTHER = "([^\\\\:= \\t\\f\\n]|\\\\.)+";
      var DELIM_AND_VALUE = {
        end: DELIM,
        relevance: 0,
        starts: {
          className: "string",
          end: /$/,
          relevance: 0,
          contains: [
            { begin: "\\\\\\n" }
          ]
        }
      };
      return {
        case_insensitive: true,
        illegal: /\S/,
        contains: [
          hljs.COMMENT("^\\s*[!#]", "$"),
          {
            begin: KEY_ALPHANUM + DELIM,
            returnBegin: true,
            contains: [
              {
                className: "attr",
                begin: KEY_ALPHANUM,
                endsParent: true,
                relevance: 0
              }
            ],
            starts: DELIM_AND_VALUE
          },
          {
            begin: KEY_OTHER + DELIM,
            returnBegin: true,
            relevance: 0,
            contains: [
              {
                className: "meta",
                begin: KEY_OTHER,
                endsParent: true,
                relevance: 0
              }
            ],
            starts: DELIM_AND_VALUE
          },
          {
            className: "attr",
            relevance: 0,
            begin: KEY_OTHER + WS0 + "$"
          }
        ]
      };
    };
  }
});
export default require_properties();
//# sourceMappingURL=/build/_shared/properties-BJWZGWV5.js.map
