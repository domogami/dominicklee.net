import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/json.js
var require_json = __commonJS({
  "node_modules/refractor/lang/json.js"(exports, module) {
    init_react();
    module.exports = json;
    json.displayName = "json";
    json.aliases = [];
    function json(Prism) {
      Prism.languages.json = {
        property: {
          pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
          greedy: true
        },
        string: {
          pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
          greedy: true
        },
        comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:true|false)\b/,
        null: {
          pattern: /\bnull\b/,
          alias: "keyword"
        }
      };
    }
  }
});

export {
  require_json
};
//# sourceMappingURL=/build/_shared/chunk-6TIIDPFN.js.map
