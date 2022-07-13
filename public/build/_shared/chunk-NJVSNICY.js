import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/r.js
var require_r = __commonJS({
  "node_modules/refractor/lang/r.js"(exports, module) {
    init_react();
    module.exports = r;
    r.displayName = "r";
    r.aliases = [];
    function r(Prism) {
      Prism.languages.r = {
        comment: /#.*/,
        string: {
          pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "percent-operator": {
          pattern: /%[^%\s]*%/,
          alias: "operator"
        },
        boolean: /\b(?:TRUE|FALSE)\b/,
        ellipsis: /\.\.(?:\.|\d+)/,
        number: [
          /\b(?:NaN|Inf)\b/,
          /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
        ],
        keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
        operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
        punctuation: /[(){}\[\],;]/
      };
    }
  }
});

export {
  require_r
};
//# sourceMappingURL=/build/_shared/chunk-NJVSNICY.js.map
