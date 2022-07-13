import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/zephir.js
var require_zephir = __commonJS({
  "node_modules/highlight.js/lib/languages/zephir.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var STRING = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: 'b"',
            end: '"'
          },
          {
            begin: "b'",
            end: "'"
          },
          hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null })
        ]
      };
      var NUMBER = { variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE] };
      return {
        aliases: ["zep"],
        case_insensitive: true,
        keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.HASH_COMMENT_MODE,
          hljs.COMMENT("/\\*", "\\*/", {
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }),
          hljs.COMMENT("__halt_compiler.+?;", false, {
            endsWithParent: true,
            keywords: "__halt_compiler",
            lexemes: hljs.UNDERSCORE_IDENT_RE
          }),
          {
            className: "string",
            begin: `<<<['"]?\\w+['"]?$`,
            end: "^\\w+;",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /[;{]/,
            excludeEnd: true,
            illegal: "\\$|\\[|%",
            contains: [
              hljs.UNDERSCORE_TITLE_MODE,
              {
                className: "params",
                begin: "\\(",
                end: "\\)",
                contains: [
                  "self",
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRING,
                  NUMBER
                ]
              }
            ]
          },
          {
            className: "class",
            beginKeywords: "class interface",
            end: "{",
            excludeEnd: true,
            illegal: /[:\(\$"]/,
            contains: [
              { beginKeywords: "extends implements" },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: "namespace",
            end: ";",
            illegal: /[\.']/,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            beginKeywords: "use",
            end: ";",
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            begin: "=>"
          },
          STRING,
          NUMBER
        ]
      };
    };
  }
});
export default require_zephir();
//# sourceMappingURL=/build/_shared/zephir-WRSPYNMM.js.map
