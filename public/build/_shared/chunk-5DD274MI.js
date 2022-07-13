import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/processing.js
var require_processing = __commonJS({
  "node_modules/refractor/lang/processing.js"(exports, module) {
    init_react();
    module.exports = processing;
    processing.displayName = "processing";
    processing.aliases = [];
    function processing(Prism) {
      Prism.languages.processing = Prism.languages.extend("clike", {
        keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
        operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
      });
      Prism.languages.insertBefore("processing", "number", {
        constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
        type: {
          pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
          alias: "variable"
        }
      });
      Prism.languages.processing["function"].pattern = /\w+(?=\s*\()/;
      Prism.languages.processing["class-name"].alias = "variable";
    }
  }
});

export {
  require_processing
};
//# sourceMappingURL=/build/_shared/chunk-5DD274MI.js.map
