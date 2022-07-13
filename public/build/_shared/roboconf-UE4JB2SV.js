import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/roboconf.js
var require_roboconf = __commonJS({
  "node_modules/highlight.js/lib/languages/roboconf.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var IDENTIFIER = "[a-zA-Z-_][^\\n{]+\\{";
      var PROPERTY = {
        className: "attribute",
        begin: /[a-zA-Z-_]+/,
        end: /\s*:/,
        excludeEnd: true,
        starts: {
          end: ";",
          relevance: 0,
          contains: [
            {
              className: "variable",
              begin: /\.[a-zA-Z-_]+/
            },
            {
              className: "keyword",
              begin: /\(optional\)/
            }
          ]
        }
      };
      return {
        aliases: ["graph", "instances"],
        case_insensitive: true,
        keywords: "import",
        contains: [
          {
            begin: "^facet " + IDENTIFIER,
            end: "}",
            keywords: "facet",
            contains: [
              PROPERTY,
              hljs.HASH_COMMENT_MODE
            ]
          },
          {
            begin: "^\\s*instance of " + IDENTIFIER,
            end: "}",
            keywords: "name count channels instance-data instance-state instance of",
            illegal: /\S/,
            contains: [
              "self",
              PROPERTY,
              hljs.HASH_COMMENT_MODE
            ]
          },
          {
            begin: "^" + IDENTIFIER,
            end: "}",
            contains: [
              PROPERTY,
              hljs.HASH_COMMENT_MODE
            ]
          },
          hljs.HASH_COMMENT_MODE
        ]
      };
    };
  }
});
export default require_roboconf();
//# sourceMappingURL=/build/_shared/roboconf-UE4JB2SV.js.map
