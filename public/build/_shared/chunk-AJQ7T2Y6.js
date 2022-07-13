import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/graphql.js
var require_graphql = __commonJS({
  "node_modules/refractor/lang/graphql.js"(exports, module) {
    init_react();
    module.exports = graphql;
    graphql.displayName = "graphql";
    graphql.aliases = [];
    function graphql(Prism) {
      Prism.languages.graphql = {
        comment: /#.*/,
        string: {
          pattern: /"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:true|false)\b/,
        variable: /\$[a-z_]\w*/i,
        directive: {
          pattern: /@[a-z_]\w*/i,
          alias: "function"
        },
        "attr-name": {
          pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
          lookbehind: true
        },
        fragment: {
          pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
          lookbehind: true,
          alias: "function"
        },
        keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
        operator: /[!=|]|\.{3}/,
        punctuation: /[!(){}\[\]:=,]/,
        constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
      };
    }
  }
});

export {
  require_graphql
};
//# sourceMappingURL=/build/_shared/chunk-AJQ7T2Y6.js.map
