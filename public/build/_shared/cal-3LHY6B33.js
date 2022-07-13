import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/cal.js
var require_cal = __commonJS({
  "node_modules/highlight.js/lib/languages/cal.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var KEYWORDS = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var";
      var LITERALS = "false true";
      var COMMENT_MODES = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.COMMENT(/\{/, /\}/, {
          relevance: 0
        }),
        hljs.COMMENT(/\(\*/, /\*\)/, {
          relevance: 10
        })
      ];
      var STRING = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{ begin: /''/ }]
      };
      var CHAR_STRING = {
        className: "string",
        begin: /(#\d+)+/
      };
      var DATE = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
        relevance: 0
      };
      var DBL_QUOTED_VARIABLE = {
        className: "string",
        begin: '"',
        end: '"'
      };
      var PROCEDURE = {
        className: "function",
        beginKeywords: "procedure",
        end: /[:;]/,
        keywords: "procedure|10",
        contains: [
          hljs.TITLE_MODE,
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: [STRING, CHAR_STRING]
          }
        ].concat(COMMENT_MODES)
      };
      var OBJECT = {
        className: "class",
        begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
        returnBegin: true,
        contains: [
          hljs.TITLE_MODE,
          PROCEDURE
        ]
      };
      return {
        case_insensitive: true,
        keywords: { keyword: KEYWORDS, literal: LITERALS },
        illegal: /\/\*/,
        contains: [
          STRING,
          CHAR_STRING,
          DATE,
          DBL_QUOTED_VARIABLE,
          hljs.NUMBER_MODE,
          OBJECT,
          PROCEDURE
        ]
      };
    };
  }
});
export default require_cal();
//# sourceMappingURL=/build/_shared/cal-3LHY6B33.js.map
