import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/css.js
var require_css = __commonJS({
  "node_modules/refractor/lang/css.js"(exports, module) {
    init_react();
    module.exports = css;
    css.displayName = "css";
    css.aliases = [];
    function css(Prism) {
      ;
      (function(Prism2) {
        var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        Prism2.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
              rule: /@[\w-]+/
            }
          },
          url: {
            pattern: RegExp("url\\((?:" + string.source + "|[^\n\r()]*)\\)", "i"),
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/
            }
          },
          selector: RegExp(`[^{}\\s](?:[^{};"']|` + string.source + ")*?(?=\\s*\\{)"),
          string: {
            pattern: string,
            greedy: true
          },
          property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
          important: /!important\b/i,
          function: /[-a-z0-9]+(?=\()/i,
          punctuation: /[(){};:,]/
        };
        Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
        var markup = Prism2.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          Prism2.languages.insertBefore("inside", "attr-value", {
            "style-attr": {
              pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
              inside: {
                "attr-name": {
                  pattern: /^\s*style/i,
                  inside: markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                  pattern: /.+/i,
                  inside: Prism2.languages.css
                }
              },
              alias: "language-css"
            }
          }, markup.tag);
        }
      })(Prism);
    }
  }
});

export {
  require_css
};
//# sourceMappingURL=/build/_shared/chunk-U24OYLWJ.js.map
