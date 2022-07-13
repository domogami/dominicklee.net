import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/protobuf.js
var require_protobuf = __commonJS({
  "node_modules/refractor/lang/protobuf.js"(exports, module) {
    init_react();
    module.exports = protobuf;
    protobuf.displayName = "protobuf";
    protobuf.aliases = [];
    function protobuf(Prism) {
      ;
      (function(Prism2) {
        var builtinTypes = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;
        Prism2.languages.protobuf = Prism2.languages.extend("clike", {
          "class-name": {
            pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
            lookbehind: true
          },
          keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/
        });
        Prism2.languages.insertBefore("protobuf", "operator", {
          map: {
            pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
            alias: "class-name",
            inside: {
              punctuation: /[<>.,]/,
              builtin: builtinTypes
            }
          },
          builtin: builtinTypes,
          "positional-class-name": {
            pattern: /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
            alias: "class-name",
            inside: {
              punctuation: /\./
            }
          },
          annotation: {
            pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/,
            lookbehind: true
          }
        });
      })(Prism);
    }
  }
});

export {
  require_protobuf
};
//# sourceMappingURL=/build/_shared/chunk-KQDJBP2G.js.map
