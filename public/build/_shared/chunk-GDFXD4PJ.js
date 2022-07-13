import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/diff.js
var require_diff = __commonJS({
  "node_modules/refractor/lang/diff.js"(exports, module) {
    init_react();
    module.exports = diff;
    diff.displayName = "diff";
    diff.aliases = [];
    function diff(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.diff = {
          coord: [
            /^(?:\*{3}|-{3}|\+{3}).*$/m,
            /^@@.*@@$/m,
            /^\d+.*$/m
          ]
        };
        var PREFIXES = {
          "deleted-sign": "-",
          "deleted-arrow": "<",
          "inserted-sign": "+",
          "inserted-arrow": ">",
          unchanged: " ",
          diff: "!"
        };
        Object.keys(PREFIXES).forEach(function(name) {
          var prefix = PREFIXES[name];
          var alias = [];
          if (!/^\w+$/.test(name)) {
            alias.push(/\w+/.exec(name)[0]);
          }
          if (name === "diff") {
            alias.push("bold");
          }
          Prism2.languages.diff[name] = {
            pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
            alias
          };
        });
        Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
          value: PREFIXES
        });
      })(Prism);
    }
  }
});

export {
  require_diff
};
//# sourceMappingURL=/build/_shared/chunk-GDFXD4PJ.js.map
