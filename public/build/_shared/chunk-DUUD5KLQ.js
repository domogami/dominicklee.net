import {
  require_php
} from "/build/_shared/chunk-5WLLMHCP.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/php-extras.js
var require_php_extras = __commonJS({
  "node_modules/refractor/lang/php-extras.js"(exports, module) {
    init_react();
    var refractorPhp = require_php();
    module.exports = phpExtras;
    phpExtras.displayName = "phpExtras";
    phpExtras.aliases = [];
    function phpExtras(Prism) {
      Prism.register(refractorPhp);
      Prism.languages.insertBefore("php", "variable", {
        this: /\$this\b/,
        global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
        scope: {
          pattern: /\b[\w\\]+::/,
          inside: {
            keyword: /static|self|parent/,
            punctuation: /::|\\/
          }
        }
      });
    }
  }
});

export {
  require_php_extras
};
//# sourceMappingURL=/build/_shared/chunk-DUUD5KLQ.js.map
