import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/gedcom.js
var require_gedcom = __commonJS({
  "node_modules/refractor/lang/gedcom.js"(exports, module) {
    init_react();
    module.exports = gedcom;
    gedcom.displayName = "gedcom";
    gedcom.aliases = [];
    function gedcom(Prism) {
      Prism.languages.gedcom = {
        "line-value": {
          pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
          lookbehind: true,
          inside: {
            pointer: {
              pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
              alias: "variable"
            }
          }
        },
        tag: {
          pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
          lookbehind: true,
          alias: "string"
        },
        level: {
          pattern: /(^\s*)\d+/m,
          lookbehind: true,
          alias: "number"
        },
        pointer: {
          pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
          alias: "variable"
        }
      };
    }
  }
});

export {
  require_gedcom
};
//# sourceMappingURL=/build/_shared/chunk-X7OWVLD2.js.map
