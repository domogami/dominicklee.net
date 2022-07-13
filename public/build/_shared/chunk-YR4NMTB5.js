import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/prolog.js
var require_prolog = __commonJS({
  "node_modules/refractor/lang/prolog.js"(exports, module) {
    init_react();
    module.exports = prolog;
    prolog.displayName = "prolog";
    prolog.aliases = [];
    function prolog(Prism) {
      Prism.languages.prolog = {
        comment: [/%.+/, /\/\*[\s\S]*?\*\//],
        string: {
          pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
        variable: /\b[A-Z_]\w*/,
        function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
        number: /\b\d+\.?\d*/,
        operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
        punctuation: /[(){}\[\],]/
      };
    }
  }
});

export {
  require_prolog
};
//# sourceMappingURL=/build/_shared/chunk-YR4NMTB5.js.map
