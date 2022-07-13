import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/ruby.js
var require_ruby = __commonJS({
  "node_modules/refractor/lang/ruby.js"(exports, module) {
    init_react();
    module.exports = ruby;
    ruby.displayName = "ruby";
    ruby.aliases = ["rb"];
    function ruby(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.ruby = Prism2.languages.extend("clike", {
          comment: [
            /#.*/,
            {
              pattern: /^=begin\s[\s\S]*?^=end/m,
              greedy: true
            }
          ],
          keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
        });
        var interpolation = {
          pattern: /#\{[^}]+\}/,
          inside: {
            delimiter: {
              pattern: /^#\{|\}$/,
              alias: "tag"
            },
            rest: Prism2.languages.ruby
          }
        };
        delete Prism2.languages.ruby.function;
        Prism2.languages.insertBefore("ruby", "keyword", {
          regex: [
            {
              pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
              greedy: true,
              inside: {
                interpolation
              }
            },
            {
              pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
              greedy: true,
              inside: {
                interpolation
              }
            },
            {
              pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
              greedy: true,
              inside: {
                interpolation
              }
            },
            {
              pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
              greedy: true,
              inside: {
                interpolation
              }
            },
            {
              pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
              greedy: true,
              inside: {
                interpolation
              }
            },
            {
              pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
              lookbehind: true,
              greedy: true
            }
          ],
          variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
          symbol: {
            pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
            lookbehind: true
          },
          "method-definition": {
            pattern: /(\bdef\s+)[\w.]+/,
            lookbehind: true,
            inside: {
              function: /\w+$/,
              rest: Prism2.languages.ruby
            }
          }
        });
        Prism2.languages.insertBefore("ruby", "number", {
          builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
          constant: /\b[A-Z]\w*(?:[?!]|\b)/
        });
        Prism2.languages.ruby.string = [
          {
            pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: true,
            inside: {
              interpolation
            }
          },
          {
            pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
            greedy: true,
            inside: {
              interpolation
            }
          },
          {
            pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
            greedy: true,
            inside: {
              interpolation
            }
          },
          {
            pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
            greedy: true,
            inside: {
              interpolation
            }
          },
          {
            pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
            greedy: true,
            inside: {
              interpolation
            }
          },
          {
            pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true,
            inside: {
              interpolation
            }
          }
        ];
        Prism2.languages.rb = Prism2.languages.ruby;
      })(Prism);
    }
  }
});

export {
  require_ruby
};
//# sourceMappingURL=/build/_shared/chunk-PKU4CEZT.js.map
