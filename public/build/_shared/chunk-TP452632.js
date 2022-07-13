import {
  require_ruby
} from "/build/_shared/chunk-PKU4CEZT.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/crystal.js
var require_crystal = __commonJS({
  "node_modules/refractor/lang/crystal.js"(exports, module) {
    init_react();
    var refractorRuby = require_ruby();
    module.exports = crystal;
    crystal.displayName = "crystal";
    crystal.aliases = [];
    function crystal(Prism) {
      Prism.register(refractorRuby);
      (function(Prism2) {
        Prism2.languages.crystal = Prism2.languages.extend("ruby", {
          keyword: [
            /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
            {
              pattern: /(\.\s*)(?:is_a|responds_to)\?/,
              lookbehind: true
            }
          ],
          number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
        });
        Prism2.languages.insertBefore("crystal", "string", {
          attribute: {
            pattern: /@\[.+?\]/,
            alias: "attr-name",
            inside: {
              delimiter: {
                pattern: /^@\[|\]$/,
                alias: "tag"
              },
              rest: Prism2.languages.crystal
            }
          },
          expansion: [
            {
              pattern: /\{\{.+?\}\}/,
              inside: {
                delimiter: {
                  pattern: /^\{\{|\}\}$/,
                  alias: "tag"
                },
                rest: Prism2.languages.crystal
              }
            },
            {
              pattern: /\{%.+?%\}/,
              inside: {
                delimiter: {
                  pattern: /^\{%|%\}$/,
                  alias: "tag"
                },
                rest: Prism2.languages.crystal
              }
            }
          ]
        });
      })(Prism);
    }
  }
});

export {
  require_crystal
};
//# sourceMappingURL=/build/_shared/chunk-TP452632.js.map
