import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/less.js
var require_less = __commonJS({
  "node_modules/highlight.js/lib/languages/less.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var IDENT_RE = "[\\w-]+";
      var INTERP_IDENT_RE = "(" + IDENT_RE + "|@{" + IDENT_RE + "})";
      var RULES = [], VALUE = [];
      var STRING_MODE = function(c) {
        return {
          className: "string",
          begin: "~?" + c + ".*?" + c
        };
      };
      var IDENT_MODE = function(name, begin, relevance) {
        return {
          className: name,
          begin,
          relevance
        };
      };
      var PARENS_MODE = {
        begin: "\\(",
        end: "\\)",
        contains: VALUE,
        relevance: 0
      };
      VALUE.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), hljs.CSS_NUMBER_MODE, {
        begin: "(url|data-uri)\\(",
        starts: { className: "string", end: "[\\)\\n]", excludeEnd: true }
      }, IDENT_MODE("number", "#[0-9A-Fa-f]+\\b"), PARENS_MODE, IDENT_MODE("variable", "@@?" + IDENT_RE, 10), IDENT_MODE("variable", "@{" + IDENT_RE + "}"), IDENT_MODE("built_in", "~?`[^`]*?`"), {
        className: "attribute",
        begin: IDENT_RE + "\\s*:",
        end: ":",
        returnBegin: true,
        excludeEnd: true
      }, {
        className: "meta",
        begin: "!important"
      });
      var VALUE_WITH_RULESETS = VALUE.concat({
        begin: "{",
        end: "}",
        contains: RULES
      });
      var MIXIN_GUARD_MODE = {
        beginKeywords: "when",
        endsWithParent: true,
        contains: [{ beginKeywords: "and not" }].concat(VALUE)
      };
      var RULE_MODE = {
        begin: INTERP_IDENT_RE + "\\s*:",
        returnBegin: true,
        end: "[;}]",
        relevance: 0,
        contains: [
          {
            className: "attribute",
            begin: INTERP_IDENT_RE,
            end: ":",
            excludeEnd: true,
            starts: {
              endsWithParent: true,
              illegal: "[<=$]",
              relevance: 0,
              contains: VALUE
            }
          }
        ]
      };
      var AT_RULE_MODE = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: { end: "[;{}]", returnEnd: true, contains: VALUE, relevance: 0 }
      };
      var VAR_RULE_MODE = {
        className: "variable",
        variants: [
          { begin: "@" + IDENT_RE + "\\s*:", relevance: 15 },
          { begin: "@" + IDENT_RE }
        ],
        starts: { end: "[;}]", returnEnd: true, contains: VALUE_WITH_RULESETS }
      };
      var SELECTOR_MODE = {
        variants: [{
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
        }, {
          begin: INTERP_IDENT_RE,
          end: "{"
        }],
        returnBegin: true,
        returnEnd: true,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          MIXIN_GUARD_MODE,
          IDENT_MODE("keyword", "all\\b"),
          IDENT_MODE("variable", "@{" + IDENT_RE + "}"),
          IDENT_MODE("selector-tag", INTERP_IDENT_RE + "%?", 0),
          IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
          IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
          IDENT_MODE("selector-tag", "&", 0),
          { className: "selector-attr", begin: "\\[", end: "\\]" },
          { className: "selector-pseudo", begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
          { begin: "\\(", end: "\\)", contains: VALUE_WITH_RULESETS },
          { begin: "!important" }
        ]
      };
      RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, RULE_MODE, SELECTOR_MODE);
      return {
        case_insensitive: true,
        illegal: `[=>'/<($"]`,
        contains: RULES
      };
    };
  }
});
export default require_less();
//# sourceMappingURL=/build/_shared/less-G4W7IUQ6.js.map
