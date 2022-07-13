import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/ldif.js
var require_ldif = __commonJS({
  "node_modules/highlight.js/lib/languages/ldif.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        contains: [
          {
            className: "attribute",
            begin: "^dn",
            end: ": ",
            excludeEnd: true,
            starts: { end: "$", relevance: 0 },
            relevance: 10
          },
          {
            className: "attribute",
            begin: "^\\w",
            end: ": ",
            excludeEnd: true,
            starts: { end: "$", relevance: 0 }
          },
          {
            className: "literal",
            begin: "^-",
            end: "$"
          },
          hljs.HASH_COMMENT_MODE
        ]
      };
    };
  }
});
export default require_ldif();
//# sourceMappingURL=/build/_shared/ldif-UCBQGRHR.js.map
