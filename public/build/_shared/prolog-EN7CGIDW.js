import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/prolog.js
var require_prolog = __commonJS({
  "node_modules/highlight.js/lib/languages/prolog.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var ATOM = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      };
      var VAR = {
        className: "symbol",
        variants: [
          { begin: /[A-Z][a-zA-Z0-9_]*/ },
          { begin: /_[A-Za-z0-9_]*/ }
        ],
        relevance: 0
      };
      var PARENTED = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      };
      var LIST = {
        begin: /\[/,
        end: /\]/
      };
      var LINE_COMMENT = {
        className: "comment",
        begin: /%/,
        end: /$/,
        contains: [hljs.PHRASAL_WORDS_MODE]
      };
      var BACKTICK_STRING = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      var CHAR_CODE = {
        className: "string",
        begin: /0\'(\\\'|.)/
      };
      var SPACE_CODE = {
        className: "string",
        begin: /0\'\\s/
      };
      var PRED_OP = {
        begin: /:-/
      };
      var inner = [
        ATOM,
        VAR,
        PARENTED,
        PRED_OP,
        LIST,
        LINE_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        BACKTICK_STRING,
        CHAR_CODE,
        SPACE_CODE,
        hljs.C_NUMBER_MODE
      ];
      PARENTED.contains = inner;
      LIST.contains = inner;
      return {
        contains: inner.concat([
          { begin: /\.$/ }
        ])
      };
    };
  }
});
export default require_prolog();
//# sourceMappingURL=/build/_shared/prolog-EN7CGIDW.js.map
