import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/inform7.js
var require_inform7 = __commonJS({
  "node_modules/highlight.js/lib/languages/inform7.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var START_BRACKET = "\\[";
      var END_BRACKET = "\\]";
      return {
        aliases: ["i7"],
        case_insensitive: true,
        keywords: {
          keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
        },
        contains: [
          {
            className: "string",
            begin: '"',
            end: '"',
            relevance: 0,
            contains: [
              {
                className: "subst",
                begin: START_BRACKET,
                end: END_BRACKET
              }
            ]
          },
          {
            className: "section",
            begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
            end: "$"
          },
          {
            begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
            end: ":",
            contains: [
              {
                begin: "\\(This",
                end: "\\)"
              }
            ]
          },
          {
            className: "comment",
            begin: START_BRACKET,
            end: END_BRACKET,
            contains: ["self"]
          }
        ]
      };
    };
  }
});
export default require_inform7();
//# sourceMappingURL=/build/_shared/inform7-IOWJ4UQ7.js.map
