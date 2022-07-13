import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/leaf.js
var require_leaf = __commonJS({
  "node_modules/highlight.js/lib/languages/leaf.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "function",
            begin: "#+[A-Za-z_0-9]*\\(",
            end: " {",
            returnBegin: true,
            excludeEnd: true,
            contains: [
              {
                className: "keyword",
                begin: "#+"
              },
              {
                className: "title",
                begin: "[A-Za-z_][A-Za-z_0-9]*"
              },
              {
                className: "params",
                begin: "\\(",
                end: "\\)",
                endsParent: true,
                contains: [
                  {
                    className: "string",
                    begin: '"',
                    end: '"'
                  },
                  {
                    className: "variable",
                    begin: "[A-Za-z_][A-Za-z_0-9]*"
                  }
                ]
              }
            ]
          }
        ]
      };
    };
  }
});
export default require_leaf();
//# sourceMappingURL=/build/_shared/leaf-4R6M5FGH.js.map
