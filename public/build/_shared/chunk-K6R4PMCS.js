import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/lisp.js
var require_lisp = __commonJS({
  "node_modules/refractor/lang/lisp.js"(exports, module) {
    init_react();
    module.exports = lisp;
    lisp.displayName = "lisp";
    lisp.aliases = [];
    function lisp(Prism) {
      ;
      (function(Prism2) {
        function simple_form(name) {
          return RegExp("(\\()" + name + "(?=[\\s\\)])");
        }
        function primitive(pattern) {
          return RegExp("([\\s([])" + pattern + "(?=[\\s)])");
        }
        var symbol = "[-+*/_~!@$%^=<>{}\\w]+";
        var marker = "&" + symbol;
        var par = "(\\()";
        var endpar = "(?=\\))";
        var space = "(?=\\s)";
        var language = {
          heading: {
            pattern: /;;;.*/,
            alias: ["comment", "title"]
          },
          comment: /;.*/,
          string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: true,
            inside: {
              argument: /[-A-Z]+(?=[.,\s])/,
              symbol: RegExp("`" + symbol + "'")
            }
          },
          "quoted-symbol": {
            pattern: RegExp("#?'" + symbol),
            alias: ["variable", "symbol"]
          },
          "lisp-property": {
            pattern: RegExp(":" + symbol),
            alias: "property"
          },
          splice: {
            pattern: RegExp(",@?" + symbol),
            alias: ["symbol", "variable"]
          },
          keyword: [
            {
              pattern: RegExp(par + "(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)" + space),
              lookbehind: true
            },
            {
              pattern: RegExp(par + "(?:for|do|collect|return|finally|append|concat|in|by)" + space),
              lookbehind: true
            }
          ],
          declare: {
            pattern: simple_form("declare"),
            lookbehind: true,
            alias: "keyword"
          },
          interactive: {
            pattern: simple_form("interactive"),
            lookbehind: true,
            alias: "keyword"
          },
          boolean: {
            pattern: primitive("(?:t|nil)"),
            lookbehind: true
          },
          number: {
            pattern: primitive("[-+]?\\d+(?:\\.\\d*)?"),
            lookbehind: true
          },
          defvar: {
            pattern: RegExp(par + "def(?:var|const|custom|group)\\s+" + symbol),
            lookbehind: true,
            inside: {
              keyword: /^def[a-z]+/,
              variable: RegExp(symbol)
            }
          },
          defun: {
            pattern: RegExp(par + "(?:cl-)?(?:defun\\*?|defmacro)\\s+" + symbol + "\\s+\\([\\s\\S]*?\\)"),
            lookbehind: true,
            inside: {
              keyword: /^(?:cl-)?def\S+/,
              arguments: null,
              function: {
                pattern: RegExp("(^\\s)" + symbol),
                lookbehind: true
              },
              punctuation: /[()]/
            }
          },
          lambda: {
            pattern: RegExp(par + "lambda\\s+\\((?:&?" + symbol + "\\s*)*\\)"),
            lookbehind: true,
            inside: {
              keyword: /^lambda/,
              arguments: null,
              punctuation: /[()]/
            }
          },
          car: {
            pattern: RegExp(par + symbol),
            lookbehind: true
          },
          punctuation: [
            /(['`,]?\(|[)\[\]])/,
            {
              pattern: /(\s)\.(?=\s)/,
              lookbehind: true
            }
          ]
        };
        var arg = {
          "lisp-marker": RegExp(marker),
          rest: {
            argument: {
              pattern: RegExp(symbol),
              alias: "variable"
            },
            varform: {
              pattern: RegExp(par + symbol + "\\s+\\S[\\s\\S]*" + endpar),
              lookbehind: true,
              inside: {
                string: language.string,
                boolean: language.boolean,
                number: language.number,
                symbol: language.symbol,
                punctuation: /[()]/
              }
            }
          }
        };
        var forms = "\\S+(?:\\s+\\S+)*";
        var arglist = {
          pattern: RegExp(par + "[\\s\\S]*" + endpar),
          lookbehind: true,
          inside: {
            "rest-vars": {
              pattern: RegExp("&(?:rest|body)\\s+" + forms),
              inside: arg
            },
            "other-marker-vars": {
              pattern: RegExp("&(?:optional|aux)\\s+" + forms),
              inside: arg
            },
            keys: {
              pattern: RegExp("&key\\s+" + forms + "(?:\\s+&allow-other-keys)?"),
              inside: arg
            },
            argument: {
              pattern: RegExp(symbol),
              alias: "variable"
            },
            punctuation: /[()]/
          }
        };
        language["lambda"].inside.arguments = arglist;
        language["defun"].inside.arguments = Prism2.util.clone(arglist);
        language["defun"].inside.arguments.inside.sublist = arglist;
        Prism2.languages.lisp = language;
        Prism2.languages.elisp = language;
        Prism2.languages.emacs = language;
        Prism2.languages["emacs-lisp"] = language;
      })(Prism);
    }
  }
});

export {
  require_lisp
};
//# sourceMappingURL=/build/_shared/chunk-K6R4PMCS.js.map
