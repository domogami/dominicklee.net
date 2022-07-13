import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/thrift.js
var require_thrift = __commonJS({
  "node_modules/highlight.js/lib/languages/thrift.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var BUILT_IN_TYPES = "bool byte i16 i32 i64 double string binary";
      return {
        keywords: {
          keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
          built_in: BUILT_IN_TYPES,
          literal: "true false"
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: "class",
            beginKeywords: "struct enum service exception",
            end: /\{/,
            illegal: /\n/,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                starts: { endsWithParent: true, excludeEnd: true }
              })
            ]
          },
          {
            begin: "\\b(set|list|map)\\s*<",
            end: ">",
            keywords: BUILT_IN_TYPES,
            contains: ["self"]
          }
        ]
      };
    };
  }
});
export default require_thrift();
//# sourceMappingURL=/build/_shared/thrift-UD67KERC.js.map
