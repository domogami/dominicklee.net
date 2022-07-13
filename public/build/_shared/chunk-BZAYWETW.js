import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/elixir.js
var require_elixir = __commonJS({
  "node_modules/refractor/lang/elixir.js"(exports, module) {
    init_react();
    module.exports = elixir;
    elixir.displayName = "elixir";
    elixir.aliases = [];
    function elixir(Prism) {
      Prism.languages.elixir = {
        comment: /#.*/m,
        regex: {
          pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
          greedy: true
        },
        string: [
          {
            pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("""|''')[\s\S]*?\1/,
            greedy: true,
            inside: {}
          },
          {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true,
            inside: {}
          }
        ],
        atom: {
          pattern: /(^|[^:]):\w+/,
          lookbehind: true,
          alias: "symbol"
        },
        "attr-name": /\w+:(?!:)/,
        capture: {
          pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
          lookbehind: true,
          alias: "function"
        },
        argument: {
          pattern: /(^|[^&])&\d+/,
          lookbehind: true,
          alias: "variable"
        },
        attribute: {
          pattern: /@\w+/,
          alias: "variable"
        },
        number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
        keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
        boolean: /\b(?:true|false|nil)\b/,
        operator: [
          /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
          {
            pattern: /([^<])<(?!<)/,
            lookbehind: true
          },
          {
            pattern: /([^>])>(?!>)/,
            lookbehind: true
          }
        ],
        punctuation: /<<|>>|[.,%\[\]{}()]/
      };
      Prism.languages.elixir.string.forEach(function(o) {
        o.inside = {
          interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
              delimiter: {
                pattern: /^#\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.elixir
            }
          }
        };
      });
    }
  }
});

export {
  require_elixir
};
//# sourceMappingURL=/build/_shared/chunk-BZAYWETW.js.map
