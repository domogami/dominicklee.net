import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/erlang.js
var require_erlang = __commonJS({
  "node_modules/refractor/lang/erlang.js"(exports, module) {
    init_react();
    module.exports = erlang;
    erlang.displayName = "erlang";
    erlang.aliases = [];
    function erlang(Prism) {
      Prism.languages.erlang = {
        comment: /%.+/,
        string: {
          pattern: /"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        "quoted-function": {
          pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
          alias: "function"
        },
        "quoted-atom": {
          pattern: /'(?:\\.|[^\\'\r\n])+'/,
          alias: "atom"
        },
        boolean: /\b(?:true|false)\b/,
        keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
        number: [
          /\$\\?./,
          /\d+#[a-z0-9]+/i,
          /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
        ],
        function: /\b[a-z][\w@]*(?=\()/,
        variable: {
          pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
          lookbehind: true
        },
        operator: [
          /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
          {
            pattern: /(^|[^<])<(?!<)/,
            lookbehind: true
          },
          {
            pattern: /(^|[^>])>(?!>)/,
            lookbehind: true
          }
        ],
        atom: /\b[a-z][\w@]*/,
        punctuation: /[()[\]{}:;,.#|]|<<|>>/
      };
    }
  }
});

export {
  require_erlang
};
//# sourceMappingURL=/build/_shared/chunk-Y4ZCUCJQ.js.map
