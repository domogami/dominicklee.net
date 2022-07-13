import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/markdown.js
var require_markdown = __commonJS({
  "node_modules/refractor/lang/markdown.js"(exports, module) {
    init_react();
    module.exports = markdown;
    markdown.displayName = "markdown";
    markdown.aliases = ["md"];
    function markdown(Prism) {
      ;
      (function(Prism2) {
        var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
        function createInline(pattern, starAlternative) {
          pattern = pattern.replace(/<inner>/g, inner);
          if (starAlternative) {
            pattern = pattern + "|" + pattern.replace(/_/g, "\\*");
          }
          return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
        }
        var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
        var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, tableCell);
        var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
        Prism2.languages.markdown = Prism2.languages.extend("markup", {});
        Prism2.languages.insertBefore("markdown", "prolog", {
          blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
          },
          table: {
            pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
            inside: {
              "table-data-rows": {
                pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
                lookbehind: true,
                inside: {
                  "table-data": {
                    pattern: RegExp(tableCell),
                    inside: Prism2.languages.markdown
                  },
                  punctuation: /\|/
                }
              },
              "table-line": {
                pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
                lookbehind: true,
                inside: {
                  punctuation: /\||:?-{3,}:?/
                }
              },
              "table-header-row": {
                pattern: RegExp("^" + tableRow + "$"),
                inside: {
                  "table-header": {
                    pattern: RegExp(tableCell),
                    alias: "important",
                    inside: Prism2.languages.markdown
                  },
                  punctuation: /\|/
                }
              }
            }
          },
          code: [
            {
              pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
              lookbehind: true,
              alias: "keyword"
            },
            {
              pattern: /``.+?``|`[^`\r\n]+`/,
              alias: "keyword"
            },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: true,
              inside: {
                "code-block": {
                  pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                  lookbehind: true
                },
                "code-language": {
                  pattern: /^(```).+/,
                  lookbehind: true
                },
                punctuation: /```/
              }
            }
          ],
          title: [
            {
              pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
              alias: "important",
              inside: {
                punctuation: /==+$|--+$/
              }
            },
            {
              pattern: /(^\s*)#+.+/m,
              lookbehind: true,
              alias: "important",
              inside: {
                punctuation: /^#+|#+$/
              }
            }
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: true,
            alias: "punctuation"
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: true,
            alias: "punctuation"
          },
          "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: {
                pattern: /^(!?\[)[^\]]+/,
                lookbehind: true
              },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
          },
          bold: {
            pattern: createInline(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, true),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^..)[\s\S]+(?=..$)/,
                lookbehind: true,
                inside: {}
              },
              punctuation: /\*\*|__/
            }
          },
          italic: {
            pattern: createInline(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, true),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^.)[\s\S]+(?=.$)/,
                lookbehind: true,
                inside: {}
              },
              punctuation: /[*_]/
            }
          },
          strike: {
            pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                lookbehind: true,
                inside: {}
              },
              punctuation: /~~?/
            }
          },
          url: {
            pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, false),
            lookbehind: true,
            greedy: true,
            inside: {
              variable: {
                pattern: /(\[)[^\]]+(?=\]$)/,
                lookbehind: true
              },
              content: {
                pattern: /(^!?\[)[^\]]+(?=\])/,
                lookbehind: true,
                inside: {}
              },
              string: {
                pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
              }
            }
          }
        });
        ["url", "bold", "italic", "strike"].forEach(function(token) {
          ;
          ["url", "bold", "italic", "strike"].forEach(function(inside) {
            if (token !== inside) {
              Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
            }
          });
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          if (env.language !== "markdown" && env.language !== "md") {
            return;
          }
          function walkTokens(tokens) {
            if (!tokens || typeof tokens === "string") {
              return;
            }
            for (var i = 0, l = tokens.length; i < l; i++) {
              var token = tokens[i];
              if (token.type !== "code") {
                walkTokens(token.content);
                continue;
              }
              var codeLang = token.content[1];
              var codeBlock = token.content[3];
              if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
                var alias = "language-" + codeLang.content.trim().split(/\s+/)[0].toLowerCase();
                if (!codeBlock.alias) {
                  codeBlock.alias = [alias];
                } else if (typeof codeBlock.alias === "string") {
                  codeBlock.alias = [codeBlock.alias, alias];
                } else {
                  codeBlock.alias.push(alias);
                }
              }
            }
          }
          walkTokens(env.tokens);
        });
        Prism2.hooks.add("wrap", function(env) {
          if (env.type !== "code-block") {
            return;
          }
          var codeLang = "";
          for (var i = 0, l = env.classes.length; i < l; i++) {
            var cls = env.classes[i];
            var match = /language-(.+)/.exec(cls);
            if (match) {
              codeLang = match[1];
              break;
            }
          }
          var grammar = Prism2.languages[codeLang];
          if (!grammar) {
            if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
              var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
              env.attributes["id"] = id;
              Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
                var ele = document.getElementById(id);
                if (ele) {
                  ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
                }
              });
            }
          } else {
            var code = env.content.value.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
            env.content = Prism2.highlight(code, grammar, codeLang);
          }
        });
        Prism2.languages.md = Prism2.languages.markdown;
      })(Prism);
    }
  }
});

export {
  require_markdown
};
//# sourceMappingURL=/build/_shared/chunk-JBGQU4B2.js.map
