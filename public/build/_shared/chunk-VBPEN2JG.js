import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/apl.js
var require_apl = __commonJS({
  "node_modules/refractor/lang/apl.js"(exports, module) {
    init_react();
    module.exports = apl;
    apl.displayName = "apl";
    apl.aliases = [];
    function apl(Prism) {
      Prism.languages.apl = {
        comment: /(?:⍝|#[! ]).*$/m,
        string: {
          pattern: /'(?:[^'\r\n]|'')*'/,
          greedy: true
        },
        number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
        statement: /:[A-Z][a-z][A-Za-z]*\b/,
        "system-function": {
          pattern: /⎕[A-Z]+/i,
          alias: "function"
        },
        constant: /[⍬⌾#⎕⍞]/,
        function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
        "monadic-operator": {
          pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
          alias: "operator"
        },
        "dyadic-operator": {
          pattern: /[.⍣⍠⍤∘⌸@⌺]/,
          alias: "operator"
        },
        assignment: {
          pattern: /←/,
          alias: "keyword"
        },
        punctuation: /[\[;\]()◇⋄]/,
        dfn: {
          pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
          alias: "builtin"
        }
      };
    }
  }
});

export {
  require_apl
};
//# sourceMappingURL=/build/_shared/chunk-VBPEN2JG.js.map
