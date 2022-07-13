import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/flow.js
var require_flow = __commonJS({
  "node_modules/refractor/lang/flow.js"(exports, module) {
    init_react();
    module.exports = flow;
    flow.displayName = "flow";
    flow.aliases = [];
    function flow(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.flow = Prism2.languages.extend("javascript", {});
        Prism2.languages.insertBefore("flow", "keyword", {
          type: [
            {
              pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
              alias: "tag"
            }
          ]
        });
        Prism2.languages.flow["function-variable"].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i;
        delete Prism2.languages.flow["parameter"];
        Prism2.languages.insertBefore("flow", "operator", {
          "flow-punctuation": {
            pattern: /\{\||\|\}/,
            alias: "punctuation"
          }
        });
        if (!Array.isArray(Prism2.languages.flow.keyword)) {
          Prism2.languages.flow.keyword = [Prism2.languages.flow.keyword];
        }
        Prism2.languages.flow.keyword.unshift({
          pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
          lookbehind: true
        }, {
          pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
          lookbehind: true
        });
      })(Prism);
    }
  }
});

export {
  require_flow
};
//# sourceMappingURL=/build/_shared/chunk-ZECHVXZB.js.map
