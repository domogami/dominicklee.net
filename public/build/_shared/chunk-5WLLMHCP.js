import {
  require_markup_templating
} from "/build/_shared/chunk-TSEJDNGK.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/php.js
var require_php = __commonJS({
  "node_modules/refractor/lang/php.js"(exports, module) {
    init_react();
    var refractorMarkupTemplating = require_markup_templating();
    module.exports = php;
    php.displayName = "php";
    php.aliases = [];
    function php(Prism) {
      Prism.register(refractorMarkupTemplating);
      (function(Prism2) {
        Prism2.languages.php = Prism2.languages.extend("clike", {
          keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
          boolean: {
            pattern: /\b(?:false|true)\b/i,
            alias: "constant"
          },
          constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: true
          }
        });
        Prism2.languages.insertBefore("php", "string", {
          "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: true,
            alias: "comment"
          }
        });
        Prism2.languages.insertBefore("php", "comment", {
          delimiter: {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: "important"
          }
        });
        Prism2.languages.insertBefore("php", "keyword", {
          variable: /\$+(?:\w+\b|(?={))/i,
          package: {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: true,
            inside: {
              punctuation: /\\/
            }
          }
        });
        Prism2.languages.insertBefore("php", "operator", {
          property: {
            pattern: /(->)[\w]+/,
            lookbehind: true
          }
        });
        var string_interpolation = {
          pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
          lookbehind: true,
          inside: {
            rest: Prism2.languages.php
          }
        };
        Prism2.languages.insertBefore("php", "string", {
          "nowdoc-string": {
            pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
            greedy: true,
            alias: "string",
            inside: {
              delimiter: {
                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {
                  punctuation: /^<<<'?|[';]$/
                }
              }
            }
          },
          "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
            greedy: true,
            alias: "string",
            inside: {
              delimiter: {
                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {
                  punctuation: /^<<<"?|[";]$/
                }
              },
              interpolation: string_interpolation
            }
          },
          "single-quoted-string": {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: true,
            alias: "string"
          },
          "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: true,
            alias: "string",
            inside: {
              interpolation: string_interpolation
            }
          }
        });
        delete Prism2.languages.php["string"];
        Prism2.hooks.add("before-tokenize", function(env) {
          if (!/<\?/.test(env.code)) {
            return;
          }
          var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi;
          Prism2.languages["markup-templating"].buildPlaceholders(env, "php", phpPattern);
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          Prism2.languages["markup-templating"].tokenizePlaceholders(env, "php");
        });
      })(Prism);
    }
  }
});

export {
  require_php
};
//# sourceMappingURL=/build/_shared/chunk-5WLLMHCP.js.map
