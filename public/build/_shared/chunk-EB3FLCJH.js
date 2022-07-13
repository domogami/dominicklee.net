import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/nim.js
var require_nim = __commonJS({
  "node_modules/refractor/lang/nim.js"(exports, module) {
    init_react();
    module.exports = nim;
    nim.displayName = "nim";
    nim.aliases = [];
    function nim(Prism) {
      Prism.languages.nim = {
        comment: /#.*/,
        string: {
          pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
          greedy: true
        },
        number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
        keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
        function: {
          pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
          inside: {
            operator: /\*$/
          }
        },
        ignore: {
          pattern: /`[^`\r\n]+`/,
          inside: {
            punctuation: /`/
          }
        },
        operator: {
          pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
          lookbehind: true
        },
        punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
      };
    }
  }
});

export {
  require_nim
};
//# sourceMappingURL=/build/_shared/chunk-EB3FLCJH.js.map
