import {
  require_typescript
} from "/build/_shared/chunk-OMX25JNB.js";
import {
  require_jsx
} from "/build/_shared/chunk-4A7TSMW3.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/tsx.js
var require_tsx = __commonJS({
  "node_modules/refractor/lang/tsx.js"(exports, module) {
    init_react();
    var refractorJsx = require_jsx();
    var refractorTypescript = require_typescript();
    module.exports = tsx;
    tsx.displayName = "tsx";
    tsx.aliases = [];
    function tsx(Prism) {
      Prism.register(refractorJsx);
      Prism.register(refractorTypescript);
      var typescript = Prism.util.clone(Prism.languages.typescript);
      Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
    }
  }
});

export {
  require_tsx
};
//# sourceMappingURL=/build/_shared/chunk-UPJZ3UQA.js.map
