import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/jsx.js
var require_jsx = __commonJS({
  "node_modules/refractor/lang/jsx.js"(exports, module) {
    init_react();
    module.exports = jsx;
    jsx.displayName = "jsx";
    jsx.aliases = [];
    function jsx(Prism) {
      ;
      (function(Prism2) {
        var javascript = Prism2.util.clone(Prism2.languages.javascript);
        Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
        Prism2.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
        Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
        Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
        Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
        Prism2.languages.insertBefore("inside", "attr-name", {
          spread: {
            pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
            inside: {
              punctuation: /\.{3}|[{}.]/,
              "attr-value": /\w+/
            }
          }
        }, Prism2.languages.jsx.tag);
        Prism2.languages.insertBefore("inside", "attr-value", {
          script: {
            pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
            inside: {
              "script-punctuation": {
                pattern: /^=(?={)/,
                alias: "punctuation"
              },
              rest: Prism2.languages.jsx
            },
            alias: "language-javascript"
          }
        }, Prism2.languages.jsx.tag);
        var stringifyToken = function(token) {
          if (!token) {
            return "";
          }
          if (typeof token === "string") {
            return token;
          }
          if (typeof token.content === "string") {
            return token.content;
          }
          return token.content.map(stringifyToken).join("");
        };
        var walkTokens = function(tokens) {
          var openedTags = [];
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            var notTagNorBrace = false;
            if (typeof token !== "string") {
              if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
                if (token.content[0].content[0].content === "</") {
                  if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                    openedTags.pop();
                  }
                } else {
                  if (token.content[token.content.length - 1].content === "/>") {
                  } else {
                    openedTags.push({
                      tagName: stringifyToken(token.content[0].content[1]),
                      openedBraces: 0
                    });
                  }
                }
              } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
                openedTags[openedTags.length - 1].openedBraces++;
              } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
                openedTags[openedTags.length - 1].openedBraces--;
              } else {
                notTagNorBrace = true;
              }
            }
            if (notTagNorBrace || typeof token === "string") {
              if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
                var plainText = stringifyToken(token);
                if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
                  plainText += stringifyToken(tokens[i + 1]);
                  tokens.splice(i + 1, 1);
                }
                if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
                  plainText = stringifyToken(tokens[i - 1]) + plainText;
                  tokens.splice(i - 1, 1);
                  i--;
                }
                tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
              }
            }
            if (token.content && typeof token.content !== "string") {
              walkTokens(token.content);
            }
          }
        };
        Prism2.hooks.add("after-tokenize", function(env) {
          if (env.language !== "jsx" && env.language !== "tsx") {
            return;
          }
          walkTokens(env.tokens);
        });
      })(Prism);
    }
  }
});

export {
  require_jsx
};
//# sourceMappingURL=/build/_shared/chunk-4A7TSMW3.js.map
