import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/sas.js
var require_sas = __commonJS({
  "node_modules/refractor/lang/sas.js"(exports, module) {
    init_react();
    module.exports = sas;
    sas.displayName = "sas";
    sas.aliases = [];
    function sas(Prism) {
      Prism.languages.sas = {
        datalines: {
          pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
          alias: "string",
          inside: {
            keyword: {
              pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
              lookbehind: true
            },
            punctuation: /;/
          }
        },
        comment: [
          {
            pattern: /(^\s*|;\s*)\*.*;/m,
            lookbehind: true
          },
          /\/\*[\s\S]+?\*\//
        ],
        datetime: {
          pattern: /'[^']+'(?:dt?|t)\b/i,
          alias: "number"
        },
        string: {
          pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
          greedy: true
        },
        keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
        number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
        operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
        punctuation: /[$%@.(){}\[\];,\\]/
      };
    }
  }
});

export {
  require_sas
};
//# sourceMappingURL=/build/_shared/chunk-AG2RDZSC.js.map
