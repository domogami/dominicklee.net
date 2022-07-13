import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/dsconfig.js
var require_dsconfig = __commonJS({
  "node_modules/highlight.js/lib/languages/dsconfig.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var QUOTED_PROPERTY = {
        className: "string",
        begin: /"/,
        end: /"/
      };
      var APOS_PROPERTY = {
        className: "string",
        begin: /'/,
        end: /'/
      };
      var UNQUOTED_PROPERTY = {
        className: "string",
        begin: "[\\w-?]+:\\w+",
        end: "\\W",
        relevance: 0
      };
      var VALUELESS_PROPERTY = {
        className: "string",
        begin: "\\w+-?\\w+",
        end: "\\W",
        relevance: 0
      };
      return {
        keywords: "dsconfig",
        contains: [
          {
            className: "keyword",
            begin: "^dsconfig",
            end: "\\s",
            excludeEnd: true,
            relevance: 10
          },
          {
            className: "built_in",
            begin: "(list|create|get|set|delete)-(\\w+)",
            end: "\\s",
            excludeEnd: true,
            illegal: "!@#$%^&*()",
            relevance: 10
          },
          {
            className: "built_in",
            begin: "--(\\w+)",
            end: "\\s",
            excludeEnd: true
          },
          QUOTED_PROPERTY,
          APOS_PROPERTY,
          UNQUOTED_PROPERTY,
          VALUELESS_PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      };
    };
  }
});
export default require_dsconfig();
//# sourceMappingURL=/build/_shared/dsconfig-WSASXDIO.js.map
