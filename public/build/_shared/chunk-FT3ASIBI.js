import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/stylus.js
var require_stylus = __commonJS({
  "node_modules/refractor/lang/stylus.js"(exports, module) {
    init_react();
    module.exports = stylus;
    stylus.displayName = "stylus";
    stylus.aliases = [];
    function stylus(Prism) {
      ;
      (function(Prism2) {
        var inside = {
          url: /url\((["']?).*?\1\)/i,
          string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: true
          },
          interpolation: null,
          func: null,
          important: /\B!(?:important|optional)\b/i,
          keyword: {
            pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
            lookbehind: true
          },
          hexcode: /#[\da-f]{3,6}/i,
          number: /\b\d+(?:\.\d+)?%?/,
          boolean: /\b(?:true|false)\b/,
          operator: [
            /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
          ],
          punctuation: /[{}()\[\];:,]/
        };
        inside["interpolation"] = {
          pattern: /\{[^\r\n}:]+\}/,
          alias: "variable",
          inside: {
            delimiter: {
              pattern: /^{|}$/,
              alias: "punctuation"
            },
            rest: inside
          }
        };
        inside["func"] = {
          pattern: /[\w-]+\([^)]*\).*/,
          inside: {
            function: /^[^(]+/,
            rest: inside
          }
        };
        Prism2.languages.stylus = {
          comment: {
            pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: true
          },
          "atrule-declaration": {
            pattern: /(^\s*)@.+/m,
            lookbehind: true,
            inside: {
              atrule: /^@[\w-]+/,
              rest: inside
            }
          },
          "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
            lookbehind: true,
            inside: {
              variable: /^\S+/,
              rest: inside
            }
          },
          statement: {
            pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
            lookbehind: true,
            inside: {
              keyword: /^\S+/,
              rest: inside
            }
          },
          "property-declaration": {
            pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
            lookbehind: true,
            inside: {
              property: {
                pattern: /^[^\s:]+/,
                inside: {
                  interpolation: inside.interpolation
                }
              },
              rest: inside
            }
          },
          selector: {
            pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
            lookbehind: true,
            inside: {
              interpolation: inside.interpolation,
              punctuation: /[{},]/
            }
          },
          func: inside.func,
          string: inside.string,
          interpolation: inside.interpolation,
          punctuation: /[{}()\[\];:.]/
        };
      })(Prism);
    }
  }
});

export {
  require_stylus
};
//# sourceMappingURL=/build/_shared/chunk-FT3ASIBI.js.map
