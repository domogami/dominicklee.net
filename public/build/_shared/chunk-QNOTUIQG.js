import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/textile.js
var require_textile = __commonJS({
  "node_modules/refractor/lang/textile.js"(exports, module) {
    init_react();
    module.exports = textile;
    textile.displayName = "textile";
    textile.aliases = [];
    function textile(Prism) {
      ;
      (function(Prism2) {
        var modifierRegex = /(?:\([^|)]+\)|\[[^\]]+\]|\{[^}]+\})+/.source;
        var modifierTokens = {
          css: {
            pattern: /\{[^}]+\}/,
            inside: {
              rest: Prism2.languages.css
            }
          },
          "class-id": {
            pattern: /(\()[^)]+(?=\))/,
            lookbehind: true,
            alias: "attr-value"
          },
          lang: {
            pattern: /(\[)[^\]]+(?=\])/,
            lookbehind: true,
            alias: "attr-value"
          },
          punctuation: /[\\\/]\d+|\S/
        };
        var textile2 = Prism2.languages.textile = Prism2.languages.extend("markup", {
          phrase: {
            pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
            lookbehind: true,
            inside: {
              "block-tag": {
                pattern: RegExp("^[a-z]\\w*(?:" + modifierRegex + "|[<>=()])*\\."),
                inside: {
                  modifier: {
                    pattern: RegExp("(^[a-z]\\w*)(?:" + modifierRegex + "|[<>=()])+(?=\\.)"),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  tag: /^[a-z]\w*/,
                  punctuation: /\.$/
                }
              },
              list: {
                pattern: RegExp("^[*#]+(?:" + modifierRegex + ")?\\s+.+", "m"),
                inside: {
                  modifier: {
                    pattern: RegExp("(^[*#]+)" + modifierRegex),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /^[*#]+/
                }
              },
              table: {
                pattern: RegExp("^(?:(?:" + modifierRegex + "|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:" + modifierRegex + "|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|", "m"),
                inside: {
                  modifier: {
                    pattern: RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:" + modifierRegex + "|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /\||^\./
                }
              },
              inline: {
                pattern: RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:" + modifierRegex + ")?.+?\\1"),
                inside: {
                  bold: {
                    pattern: RegExp("(^(\\*\\*?)(?:" + modifierRegex + ")?).+?(?=\\2)"),
                    lookbehind: true
                  },
                  italic: {
                    pattern: RegExp("(^(__?)(?:" + modifierRegex + ")?).+?(?=\\2)"),
                    lookbehind: true
                  },
                  cite: {
                    pattern: RegExp("(^\\?\\?(?:" + modifierRegex + ")?).+?(?=\\?\\?)"),
                    lookbehind: true,
                    alias: "string"
                  },
                  code: {
                    pattern: RegExp("(^@(?:" + modifierRegex + ")?).+?(?=@)"),
                    lookbehind: true,
                    alias: "keyword"
                  },
                  inserted: {
                    pattern: RegExp("(^\\+(?:" + modifierRegex + ")?).+?(?=\\+)"),
                    lookbehind: true
                  },
                  deleted: {
                    pattern: RegExp("(^-(?:" + modifierRegex + ")?).+?(?=-)"),
                    lookbehind: true
                  },
                  span: {
                    pattern: RegExp("(^%(?:" + modifierRegex + ")?).+?(?=%)"),
                    lookbehind: true
                  },
                  modifier: {
                    pattern: RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])" + modifierRegex),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  punctuation: /[*_%?@+\-^~]+/
                }
              },
              "link-ref": {
                pattern: /^\[[^\]]+\]\S+$/m,
                inside: {
                  string: {
                    pattern: /(\[)[^\]]+(?=\])/,
                    lookbehind: true
                  },
                  url: {
                    pattern: /(\])\S+$/,
                    lookbehind: true
                  },
                  punctuation: /[\[\]]/
                }
              },
              link: {
                pattern: RegExp('"(?:' + modifierRegex + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                inside: {
                  text: {
                    pattern: RegExp('(^"(?:' + modifierRegex + ')?)[^"]+(?=")'),
                    lookbehind: true
                  },
                  modifier: {
                    pattern: RegExp('(^")' + modifierRegex),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  url: {
                    pattern: /(:).+/,
                    lookbehind: true
                  },
                  punctuation: /[":]/
                }
              },
              image: {
                pattern: RegExp("!(?:" + modifierRegex + "|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
                inside: {
                  source: {
                    pattern: RegExp("(^!(?:" + modifierRegex + "|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
                    lookbehind: true,
                    alias: "url"
                  },
                  modifier: {
                    pattern: RegExp("(^!)(?:" + modifierRegex + "|[<>=()])+"),
                    lookbehind: true,
                    inside: modifierTokens
                  },
                  url: {
                    pattern: /(:).+/,
                    lookbehind: true
                  },
                  punctuation: /[!:]/
                }
              },
              footnote: {
                pattern: /\b\[\d+\]/,
                alias: "comment",
                inside: {
                  punctuation: /\[|\]/
                }
              },
              acronym: {
                pattern: /\b[A-Z\d]+\([^)]+\)/,
                inside: {
                  comment: {
                    pattern: /(\()[^)]+(?=\))/,
                    lookbehind: true
                  },
                  punctuation: /[()]/
                }
              },
              mark: {
                pattern: /\b\((?:TM|R|C)\)/,
                alias: "comment",
                inside: {
                  punctuation: /[()]/
                }
              }
            }
          }
        });
        var phraseInside = textile2["phrase"].inside;
        var nestedPatterns = {
          inline: phraseInside["inline"],
          link: phraseInside["link"],
          image: phraseInside["image"],
          footnote: phraseInside["footnote"],
          acronym: phraseInside["acronym"],
          mark: phraseInside["mark"]
        };
        textile2.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
        var phraseInlineInside = phraseInside["inline"].inside;
        phraseInlineInside["bold"].inside = nestedPatterns;
        phraseInlineInside["italic"].inside = nestedPatterns;
        phraseInlineInside["inserted"].inside = nestedPatterns;
        phraseInlineInside["deleted"].inside = nestedPatterns;
        phraseInlineInside["span"].inside = nestedPatterns;
        var phraseTableInside = phraseInside["table"].inside;
        phraseTableInside["inline"] = nestedPatterns["inline"];
        phraseTableInside["link"] = nestedPatterns["link"];
        phraseTableInside["image"] = nestedPatterns["image"];
        phraseTableInside["footnote"] = nestedPatterns["footnote"];
        phraseTableInside["acronym"] = nestedPatterns["acronym"];
        phraseTableInside["mark"] = nestedPatterns["mark"];
      })(Prism);
    }
  }
});

export {
  require_textile
};
//# sourceMappingURL=/build/_shared/chunk-QNOTUIQG.js.map
