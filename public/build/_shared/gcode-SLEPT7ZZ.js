import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/gcode.js
var require_gcode = __commonJS({
  "node_modules/highlight.js/lib/languages/gcode.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var GCODE_IDENT_RE = "[A-Z_][A-Z0-9_.]*";
      var GCODE_CLOSE_RE = "\\%";
      var GCODE_KEYWORDS = "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR";
      var GCODE_START = {
        className: "meta",
        begin: "([O])([0-9]+)"
      };
      var GCODE_CODE = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.COMMENT(/\(/, /\)/),
        hljs.inherit(hljs.C_NUMBER_MODE, { begin: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + hljs.C_NUMBER_RE }),
        hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }),
        hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }),
        {
          className: "name",
          begin: "([G])([0-9]+\\.?[0-9]?)"
        },
        {
          className: "name",
          begin: "([M])([0-9]+\\.?[0-9]?)"
        },
        {
          className: "attr",
          begin: "(VC|VS|#)",
          end: "(\\d+)"
        },
        {
          className: "attr",
          begin: "(VZOFX|VZOFY|VZOFZ)"
        },
        {
          className: "built_in",
          begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
          end: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"
        },
        {
          className: "symbol",
          variants: [
            {
              begin: "N",
              end: "\\d+",
              illegal: "\\W"
            }
          ]
        }
      ];
      return {
        aliases: ["nc"],
        case_insensitive: true,
        lexemes: GCODE_IDENT_RE,
        keywords: GCODE_KEYWORDS,
        contains: [
          {
            className: "meta",
            begin: GCODE_CLOSE_RE
          },
          GCODE_START
        ].concat(GCODE_CODE)
      };
    };
  }
});
export default require_gcode();
//# sourceMappingURL=/build/_shared/gcode-SLEPT7ZZ.js.map
