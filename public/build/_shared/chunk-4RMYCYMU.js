import {
  require_markup_templating
} from "/build/_shared/chunk-TSEJDNGK.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/handlebars.js
var require_handlebars = __commonJS({
  "node_modules/refractor/lang/handlebars.js"(exports, module) {
    init_react();
    var refractorMarkupTemplating = require_markup_templating();
    module.exports = handlebars;
    handlebars.displayName = "handlebars";
    handlebars.aliases = [];
    function handlebars(Prism) {
      Prism.register(refractorMarkupTemplating);
      (function(Prism2) {
        Prism2.languages.handlebars = {
          comment: /\{\{![\s\S]*?\}\}/,
          delimiter: {
            pattern: /^\{\{\{?|\}\}\}?$/i,
            alias: "punctuation"
          },
          string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          boolean: /\b(?:true|false)\b/,
          block: {
            pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
            lookbehind: true,
            alias: "keyword"
          },
          brackets: {
            pattern: /\[[^\]]+\]/,
            inside: {
              punctuation: /\[|\]/,
              variable: /[\s\S]+/
            }
          },
          punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
          variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
        };
        Prism2.hooks.add("before-tokenize", function(env) {
          var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
          Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
        });
      })(Prism);
    }
  }
});

export {
  require_handlebars
};
//# sourceMappingURL=/build/_shared/chunk-4RMYCYMU.js.map
