import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/hpkp.js
var require_hpkp = __commonJS({
  "node_modules/refractor/lang/hpkp.js"(exports, module) {
    init_react();
    module.exports = hpkp;
    hpkp.displayName = "hpkp";
    hpkp.aliases = [];
    function hpkp(Prism) {
      Prism.languages.hpkp = {
        directive: {
          pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
          alias: "keyword"
        },
        safe: {
          pattern: /\d{7,}/,
          alias: "selector"
        },
        unsafe: {
          pattern: /\d{1,6}/,
          alias: "function"
        }
      };
    }
  }
});

export {
  require_hpkp
};
//# sourceMappingURL=/build/_shared/chunk-EINJXT3I.js.map
