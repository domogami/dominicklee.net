import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/scheme.js
var require_scheme = __commonJS({
  "node_modules/refractor/lang/scheme.js"(exports, module) {
    init_react();
    module.exports = scheme;
    scheme.displayName = "scheme";
    scheme.aliases = [];
    function scheme(Prism) {
      Prism.languages.scheme = {
        comment: /;.*/,
        string: {
          pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/,
          greedy: true
        },
        character: {
          pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
          alias: "string"
        },
        keyword: {
          pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
          lookbehind: true
        },
        builtin: {
          pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
          lookbehind: true
        },
        number: {
          pattern: /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
          lookbehind: true
        },
        boolean: /#[tf]/,
        operator: {
          pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
          lookbehind: true
        },
        function: {
          pattern: /(\()[^()'\s]+(?=[()\s)]|$)/,
          lookbehind: true
        },
        punctuation: /[()']/
      };
    }
  }
});

export {
  require_scheme
};
//# sourceMappingURL=/build/_shared/chunk-A7GYAIC6.js.map
