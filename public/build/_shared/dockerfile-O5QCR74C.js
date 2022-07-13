import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/dockerfile.js
var require_dockerfile = __commonJS({
  "node_modules/highlight.js/lib/languages/dockerfile.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      return {
        aliases: ["docker"],
        case_insensitive: true,
        keywords: "from maintainer expose env arg user onbuild stopsignal",
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          {
            beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
            starts: {
              end: /[^\\]$/,
              subLanguage: "bash"
            }
          }
        ],
        illegal: "</"
      };
    };
  }
});
export default require_dockerfile();
//# sourceMappingURL=/build/_shared/dockerfile-O5QCR74C.js.map
