import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/scss.js
var require_scss = __commonJS({
  "node_modules/refractor/lang/scss.js"(exports, module) {
    init_react();
    module.exports = scss;
    scss.displayName = "scss";
    scss.aliases = [];
    function scss(Prism) {
      Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
          pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
          lookbehind: true
        },
        atrule: {
          pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
          inside: {
            rule: /@[\w-]+/
          }
        },
        url: /(?:[-a-z]+-)?url(?=\()/i,
        selector: {
          pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
          inside: {
            parent: {
              pattern: /&/,
              alias: "important"
            },
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
        },
        property: {
          pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
          inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
          }
        }
      });
      Prism.languages.insertBefore("scss", "atrule", {
        keyword: [
          /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
          {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: true
          }
        ]
      });
      Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      });
      Prism.languages.insertBefore("scss", "function", {
        placeholder: {
          pattern: /%[-\w]+/,
          alias: "selector"
        },
        statement: {
          pattern: /\B!(?:default|optional)\b/i,
          alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: {
          pattern: /\bnull\b/,
          alias: "keyword"
        },
        operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
          lookbehind: true
        }
      });
      Prism.languages.scss["atrule"].inside.rest = Prism.languages.scss;
    }
  }
});

export {
  require_scss
};
//# sourceMappingURL=/build/_shared/chunk-D3XNA7EH.js.map
