import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/batch.js
var require_batch = __commonJS({
  "node_modules/refractor/lang/batch.js"(exports, module) {
    init_react();
    module.exports = batch;
    batch.displayName = "batch";
    batch.aliases = [];
    function batch(Prism) {
      ;
      (function(Prism2) {
        var variable = /%%?[~:\w]+%?|!\S+!/;
        var parameter = {
          pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
          alias: "attr-name",
          inside: {
            punctuation: /:/
          }
        };
        var string = /"[^"]*"/;
        var number = /(?:\b|-)\d+\b/;
        Prism2.languages.batch = {
          comment: [
            /^::.*/m,
            {
              pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: true
            }
          ],
          label: {
            pattern: /^:.*/m,
            alias: "property"
          },
          command: [
            {
              pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
              lookbehind: true,
              inside: {
                keyword: /^for\b|\b(?:in|do)\b/i,
                string,
                parameter,
                variable,
                number,
                punctuation: /[()',]/
              }
            },
            {
              pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
              lookbehind: true,
              inside: {
                keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                string,
                parameter,
                variable,
                number,
                operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
              }
            },
            {
              pattern: /((?:^|[&()])[ \t]*)else\b/im,
              lookbehind: true,
              inside: {
                keyword: /^else\b/i
              }
            },
            {
              pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: true,
              inside: {
                keyword: /^set\b/i,
                string,
                parameter,
                variable: [variable, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                number,
                operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                punctuation: /[()',]/
              }
            },
            {
              pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
              lookbehind: true,
              inside: {
                keyword: /^\w+\b/i,
                string,
                parameter,
                label: {
                  pattern: /(^\s*):\S+/m,
                  lookbehind: true,
                  alias: "property"
                },
                variable,
                number,
                operator: /\^/
              }
            }
          ],
          operator: /[&@]/,
          punctuation: /[()']/
        };
      })(Prism);
    }
  }
});

export {
  require_batch
};
//# sourceMappingURL=/build/_shared/chunk-ZI2BHP7K.js.map
