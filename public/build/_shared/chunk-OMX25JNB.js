import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/typescript.js
var require_typescript = __commonJS({
  "node_modules/refractor/lang/typescript.js"(exports, module) {
    init_react();
    module.exports = typescript;
    typescript.displayName = "typescript";
    typescript.aliases = ["ts"];
    function typescript(Prism) {
      Prism.languages.typescript = Prism.languages.extend("javascript", {
        keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
      });
      Prism.languages.ts = Prism.languages.typescript;
    }
  }
});

export {
  require_typescript
};
//# sourceMappingURL=/build/_shared/chunk-OMX25JNB.js.map
