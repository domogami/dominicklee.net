import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/lua.js
var require_lua = __commonJS({
  "node_modules/refractor/lang/lua.js"(exports, module) {
    init_react();
    module.exports = lua;
    lua.displayName = "lua";
    lua.aliases = [];
    function lua(Prism) {
      Prism.languages.lua = {
        comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
        string: {
          pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
          greedy: true
        },
        number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
        keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
        function: /(?!\d)\w+(?=\s*(?:[({]))/,
        operator: [
          /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
          {
            pattern: /(^|[^.])\.\.(?!\.)/,
            lookbehind: true
          }
        ],
        punctuation: /[\[\](){},;]|\.+|:+/
      };
    }
  }
});

export {
  require_lua
};
//# sourceMappingURL=/build/_shared/chunk-76C4YWPJ.js.map
