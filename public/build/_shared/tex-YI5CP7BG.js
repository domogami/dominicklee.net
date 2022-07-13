import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/tex.js
var require_tex = __commonJS({
  "node_modules/highlight.js/lib/languages/tex.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var COMMAND = {
        className: "tag",
        begin: /\\/,
        relevance: 0,
        contains: [
          {
            className: "name",
            variants: [
              { begin: /[a-zA-Z\u0430-\u044f\u0410-\u042f]+[*]?/ },
              { begin: /[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9]/ }
            ],
            starts: {
              endsWithParent: true,
              relevance: 0,
              contains: [
                {
                  className: "string",
                  variants: [
                    { begin: /\[/, end: /\]/ },
                    { begin: /\{/, end: /\}/ }
                  ]
                },
                {
                  begin: /\s*=\s*/,
                  endsWithParent: true,
                  relevance: 0,
                  contains: [
                    {
                      className: "number",
                      begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                    }
                  ]
                }
              ]
            }
          }
        ]
      };
      return {
        contains: [
          COMMAND,
          {
            className: "formula",
            contains: [COMMAND],
            relevance: 0,
            variants: [
              { begin: /\$\$/, end: /\$\$/ },
              { begin: /\$/, end: /\$/ }
            ]
          },
          hljs.COMMENT("%", "$", {
            relevance: 0
          })
        ]
      };
    };
  }
});
export default require_tex();
//# sourceMappingURL=/build/_shared/tex-YI5CP7BG.js.map
