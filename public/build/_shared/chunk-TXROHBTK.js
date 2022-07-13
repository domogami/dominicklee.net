import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/ini.js
var require_ini = __commonJS({
  "node_modules/refractor/lang/ini.js"(exports, module) {
    init_react();
    module.exports = ini;
    ini.displayName = "ini";
    ini.aliases = [];
    function ini(Prism) {
      Prism.languages.ini = {
        comment: /^[ \t]*[;#].*$/m,
        selector: /^[ \t]*\[.*?\]/m,
        constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
        "attr-value": {
          pattern: /=.*/,
          inside: {
            punctuation: /^[=]/
          }
        }
      };
    }
  }
});

export {
  require_ini
};
//# sourceMappingURL=/build/_shared/chunk-TXROHBTK.js.map
