import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/rip.js
var require_rip = __commonJS({
  "node_modules/refractor/lang/rip.js"(exports, module) {
    init_react();
    module.exports = rip;
    rip.displayName = "rip";
    rip.aliases = [];
    function rip(Prism) {
      Prism.languages.rip = {
        comment: /#.*/,
        keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
        builtin: /@|\bSystem\b/,
        boolean: /\b(?:true|false)\b/,
        date: /\b\d{4}-\d{2}-\d{2}\b/,
        time: /\b\d{2}:\d{2}:\d{2}\b/,
        datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
        character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
        regex: {
          pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
          lookbehind: true,
          greedy: true
        },
        symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
        string: {
          pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
        punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
        reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
      };
    }
  }
});

export {
  require_rip
};
//# sourceMappingURL=/build/_shared/chunk-VXO6RTAM.js.map
