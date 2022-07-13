import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/csp.js
var require_csp = __commonJS({
  "node_modules/refractor/lang/csp.js"(exports, module) {
    init_react();
    module.exports = csp;
    csp.displayName = "csp";
    csp.aliases = [];
    function csp(Prism) {
      Prism.languages.csp = {
        directive: {
          pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
          alias: "keyword"
        },
        safe: {
          pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
          alias: "selector"
        },
        unsafe: {
          pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/,
          alias: "function"
        }
      };
    }
  }
});

export {
  require_csp
};
//# sourceMappingURL=/build/_shared/chunk-ANISU5IT.js.map
