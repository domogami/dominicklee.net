import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/brainfuck.js
var require_brainfuck = __commonJS({
  "node_modules/highlight.js/lib/languages/brainfuck.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var LITERAL = {
        className: "literal",
        begin: "[\\+\\-]",
        relevance: 0
      };
      return {
        aliases: ["bf"],
        contains: [
          hljs.COMMENT("[^\\[\\]\\.,\\+\\-<> \r\n]", "[\\[\\]\\.,\\+\\-<> \r\n]", {
            returnEnd: true,
            relevance: 0
          }),
          {
            className: "title",
            begin: "[\\[\\]]",
            relevance: 0
          },
          {
            className: "string",
            begin: "[\\.,]",
            relevance: 0
          },
          {
            begin: /\+\+|\-\-/,
            returnBegin: true,
            contains: [LITERAL]
          },
          LITERAL
        ]
      };
    };
  }
});
export default require_brainfuck();
//# sourceMappingURL=/build/_shared/brainfuck-4ANP3MPM.js.map
