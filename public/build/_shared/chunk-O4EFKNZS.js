import {
  require_markup_templating
} from "/build/_shared/chunk-TSEJDNGK.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/smarty.js
var require_smarty = __commonJS({
  "node_modules/refractor/lang/smarty.js"(exports, module) {
    init_react();
    var refractorMarkupTemplating = require_markup_templating();
    module.exports = smarty;
    smarty.displayName = "smarty";
    smarty.aliases = [];
    function smarty(Prism) {
      Prism.register(refractorMarkupTemplating);
      (function(Prism2) {
        Prism2.languages.smarty = {
          comment: /\{\*[\s\S]*?\*\}/,
          delimiter: {
            pattern: /^\{|\}$/i,
            alias: "punctuation"
          },
          string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
          variable: [
            /\$(?!\d)\w+/,
            /#(?!\d)\w+#/,
            {
              pattern: /(\.|->)(?!\d)\w+/,
              lookbehind: true
            },
            {
              pattern: /(\[)(?!\d)\w+(?=\])/,
              lookbehind: true
            }
          ],
          function: [
            {
              pattern: /(\|\s*)@?(?!\d)\w+/,
              lookbehind: true
            },
            /^\/?(?!\d)\w+/,
            /(?!\d)\w+(?=\()/
          ],
          "attr-name": {
            pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
            inside: {
              variable: {
                pattern: /(=\s*)(?!\d)\w+/,
                lookbehind: true
              },
              operator: /=/
            }
          },
          punctuation: [/[\[\]().,:`]|->/],
          operator: [
            /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
            /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
            /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
          ],
          keyword: /\b(?:false|off|on|no|true|yes)\b/
        };
        Prism2.hooks.add("before-tokenize", function(env) {
          var smartyPattern = /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g;
          var smartyLitteralStart = "{literal}";
          var smartyLitteralEnd = "{/literal}";
          var smartyLitteralMode = false;
          Prism2.languages["markup-templating"].buildPlaceholders(env, "smarty", smartyPattern, function(match) {
            if (match === smartyLitteralEnd) {
              smartyLitteralMode = false;
            }
            if (!smartyLitteralMode) {
              if (match === smartyLitteralStart) {
                smartyLitteralMode = true;
              }
              return true;
            }
            return false;
          });
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          Prism2.languages["markup-templating"].tokenizePlaceholders(env, "smarty");
        });
      })(Prism);
    }
  }
});

export {
  require_smarty
};
//# sourceMappingURL=/build/_shared/chunk-O4EFKNZS.js.map
