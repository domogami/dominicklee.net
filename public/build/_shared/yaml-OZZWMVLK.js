import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/yaml.js
var require_yaml = __commonJS({
  "node_modules/highlight.js/lib/languages/yaml.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var LITERALS = "true false yes no null";
      var keyPrefix = "^[ \\-]*";
      var keyName = "[a-zA-Z_][\\w\\-]*";
      var KEY = {
        className: "attr",
        variants: [
          { begin: keyPrefix + keyName + ":" },
          { begin: keyPrefix + '"' + keyName + '":' },
          { begin: keyPrefix + "'" + keyName + "':" }
        ]
      };
      var TEMPLATE_VARIABLES = {
        className: "template-variable",
        variants: [
          { begin: "{{", end: "}}" },
          { begin: "%{", end: "}" }
        ]
      };
      var STRING = {
        className: "string",
        relevance: 0,
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /\S+/ }
        ],
        contains: [
          hljs.BACKSLASH_ESCAPE,
          TEMPLATE_VARIABLES
        ]
      };
      return {
        case_insensitive: true,
        aliases: ["yml", "YAML", "yaml"],
        contains: [
          KEY,
          {
            className: "meta",
            begin: "^---s*$",
            relevance: 10
          },
          {
            className: "string",
            begin: "[\\|>] *$",
            returnEnd: true,
            contains: STRING.contains,
            end: KEY.variants[0].begin
          },
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            className: "type",
            begin: "!" + hljs.UNDERSCORE_IDENT_RE
          },
          {
            className: "type",
            begin: "!!" + hljs.UNDERSCORE_IDENT_RE
          },
          {
            className: "meta",
            begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
          },
          {
            className: "meta",
            begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
          },
          {
            className: "bullet",
            begin: "^ *-",
            relevance: 0
          },
          hljs.HASH_COMMENT_MODE,
          {
            beginKeywords: LITERALS,
            keywords: { literal: LITERALS }
          },
          hljs.C_NUMBER_MODE,
          STRING
        ]
      };
    };
  }
});
export default require_yaml();
//# sourceMappingURL=/build/_shared/yaml-OZZWMVLK.js.map
