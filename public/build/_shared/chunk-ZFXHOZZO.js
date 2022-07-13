import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/reason.js
var require_reason = __commonJS({
  "node_modules/refractor/lang/reason.js"(exports, module) {
    init_react();
    module.exports = reason;
    reason.displayName = "reason";
    reason.aliases = [];
    function reason(Prism) {
      Prism.languages.reason = Prism.languages.extend("clike", {
        comment: {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true
        },
        string: {
          pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
          greedy: true
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
        operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
      });
      Prism.languages.insertBefore("reason", "class-name", {
        character: {
          pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
          alias: "string"
        },
        constructor: {
          pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
          alias: "variable"
        },
        label: {
          pattern: /\b[a-z]\w*(?=::)/,
          alias: "symbol"
        }
      });
      delete Prism.languages.reason.function;
    }
  }
});

export {
  require_reason
};
//# sourceMappingURL=/build/_shared/chunk-ZFXHOZZO.js.map
