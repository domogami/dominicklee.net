import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/shell.js
var require_shell = __commonJS({
  "node_modules/highlight.js/lib/languages/shell.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        aliases: ["console"],
        contains: [
          {
            className: "meta",
            begin: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
            starts: {
              end: "$",
              subLanguage: "bash"
            }
          }
        ]
      };
    };
  }
});
export default require_shell();
//# sourceMappingURL=/build/_shared/shell-SVCR5UGB.js.map
