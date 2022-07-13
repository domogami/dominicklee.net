import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/hsts.js
var require_hsts = __commonJS({
  "node_modules/refractor/lang/hsts.js"(exports, module) {
    init_react();
    module.exports = hsts;
    hsts.displayName = "hsts";
    hsts.aliases = [];
    function hsts(Prism) {
      Prism.languages.hsts = {
        directive: {
          pattern: /\b(?:max-age=|includeSubDomains|preload)/,
          alias: "keyword"
        },
        safe: {
          pattern: /\d{8,}/,
          alias: "selector"
        },
        unsafe: {
          pattern: /\d{1,7}/,
          alias: "function"
        }
      };
    }
  }
});

export {
  require_hsts
};
//# sourceMappingURL=/build/_shared/chunk-ZL5OO2OL.js.map
