import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/kotlin.js
var require_kotlin = __commonJS({
  "node_modules/refractor/lang/kotlin.js"(exports, module) {
    init_react();
    module.exports = kotlin;
    kotlin.displayName = "kotlin";
    kotlin.aliases = [];
    function kotlin(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.kotlin = Prism2.languages.extend("clike", {
          keyword: {
            pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
            lookbehind: true
          },
          function: [
            /\w+(?=\s*\()/,
            {
              pattern: /(\.)\w+(?=\s*\{)/,
              lookbehind: true
            }
          ],
          number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
          operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
        });
        delete Prism2.languages.kotlin["class-name"];
        Prism2.languages.insertBefore("kotlin", "string", {
          "raw-string": {
            pattern: /("""|''')[\s\S]*?\1/,
            alias: "string"
          }
        });
        Prism2.languages.insertBefore("kotlin", "keyword", {
          annotation: {
            pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
            alias: "builtin"
          }
        });
        Prism2.languages.insertBefore("kotlin", "function", {
          label: {
            pattern: /\w+@|@\w+/,
            alias: "symbol"
          }
        });
        var interpolation = [
          {
            pattern: /\$\{[^}]+\}/,
            inside: {
              delimiter: {
                pattern: /^\$\{|\}$/,
                alias: "variable"
              },
              rest: Prism2.languages.kotlin
            }
          },
          {
            pattern: /\$\w+/,
            alias: "variable"
          }
        ];
        Prism2.languages.kotlin["string"].inside = Prism2.languages.kotlin["raw-string"].inside = {
          interpolation
        };
      })(Prism);
    }
  }
});

export {
  require_kotlin
};
//# sourceMappingURL=/build/_shared/chunk-5PBGSR25.js.map
