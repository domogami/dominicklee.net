import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/markdown.js
var require_markdown = __commonJS({
  "node_modules/highlight.js/lib/languages/markdown.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        aliases: ["md", "mkdown", "mkd"],
        contains: [
          {
            className: "section",
            variants: [
              { begin: "^#{1,6}", end: "$" },
              { begin: "^.+?\\n[=-]{2,}$" }
            ]
          },
          {
            begin: "<",
            end: ">",
            subLanguage: "xml",
            relevance: 0
          },
          {
            className: "bullet",
            begin: "^\\s*([*+-]|(\\d+\\.))\\s+"
          },
          {
            className: "strong",
            begin: "[*_]{2}.+?[*_]{2}"
          },
          {
            className: "emphasis",
            variants: [
              { begin: "\\*.+?\\*" },
              {
                begin: "_.+?_",
                relevance: 0
              }
            ]
          },
          {
            className: "quote",
            begin: "^>\\s+",
            end: "$"
          },
          {
            className: "code",
            variants: [
              {
                begin: "^```w*s*$",
                end: "^```s*$"
              },
              {
                begin: "`.+?`"
              },
              {
                begin: "^( {4}|	)",
                end: "$",
                relevance: 0
              }
            ]
          },
          {
            begin: "^[-\\*]{3,}",
            end: "$"
          },
          {
            begin: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            returnBegin: true,
            contains: [
              {
                className: "string",
                begin: "\\[",
                end: "\\]",
                excludeBegin: true,
                returnEnd: true,
                relevance: 0
              },
              {
                className: "link",
                begin: "\\]\\(",
                end: "\\)",
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: "symbol",
                begin: "\\]\\[",
                end: "\\]",
                excludeBegin: true,
                excludeEnd: true
              }
            ],
            relevance: 10
          },
          {
            begin: /^\[[^\n]+\]:/,
            returnBegin: true,
            contains: [
              {
                className: "symbol",
                begin: /\[/,
                end: /\]/,
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: "link",
                begin: /:\s*/,
                end: /$/,
                excludeBegin: true
              }
            ]
          }
        ]
      };
    };
  }
});
export default require_markdown();
//# sourceMappingURL=/build/_shared/markdown-CAFN37UD.js.map
