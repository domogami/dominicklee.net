import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/java.js
var require_java = __commonJS({
  "node_modules/refractor/lang/java.js"(exports, module) {
    init_react();
    module.exports = java;
    java.displayName = "java";
    java.aliases = [];
    function java(Prism) {
      ;
      (function(Prism2) {
        var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/;
        var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
        Prism2.languages.java = Prism2.languages.extend("clike", {
          "class-name": [
            className,
            /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
          ],
          keyword: keywords,
          function: [
            Prism2.languages.clike.function,
            {
              pattern: /(\:\:)[a-z_]\w*/,
              lookbehind: true
            }
          ],
          number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
          operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: true
          }
        });
        Prism2.languages.insertBefore("java", "class-name", {
          annotation: {
            alias: "punctuation",
            pattern: /(^|[^.])@\w+/,
            lookbehind: true
          },
          namespace: {
            pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
            lookbehind: true,
            inside: {
              punctuation: /\./
            }
          },
          generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
              "class-name": className,
              keyword: keywords,
              punctuation: /[<>(),.:]/,
              operator: /[?&|]/
            }
          }
        });
      })(Prism);
    }
  }
});

export {
  require_java
};
//# sourceMappingURL=/build/_shared/chunk-L35VFZGW.js.map
