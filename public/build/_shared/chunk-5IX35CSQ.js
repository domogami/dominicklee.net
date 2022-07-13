import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/twig.js
var require_twig = __commonJS({
  "node_modules/refractor/lang/twig.js"(exports, module) {
    init_react();
    module.exports = twig;
    twig.displayName = "twig";
    twig.aliases = [];
    function twig(Prism) {
      Prism.languages.twig = {
        comment: /\{#[\s\S]*?#\}/,
        tag: {
          pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
          inside: {
            ld: {
              pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
              inside: {
                punctuation: /^(?:\{\{|\{%)-?/,
                keyword: /\w+/
              }
            },
            rd: {
              pattern: /-?(?:%\}|\}\})$/,
              inside: {
                punctuation: /.+/
              }
            },
            string: {
              pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
              inside: {
                punctuation: /^['"]|['"]$/
              }
            },
            keyword: /\b(?:even|if|odd)\b/,
            boolean: /\b(?:true|false|null)\b/,
            number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
            operator: [
              {
                pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                lookbehind: true
              },
              /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
            ],
            property: /\b[a-zA-Z_]\w*\b/,
            punctuation: /[()\[\]{}:.,]/
          }
        },
        other: {
          pattern: /\S(?:[\s\S]*\S)?/,
          inside: Prism.languages.markup
        }
      };
    }
  }
});

export {
  require_twig
};
//# sourceMappingURL=/build/_shared/chunk-5IX35CSQ.js.map
