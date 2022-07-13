import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/bash.js
var require_bash = __commonJS({
  "node_modules/highlight.js/lib/languages/bash.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var VAR = {
        className: "variable",
        variants: [
          { begin: /\$[\w\d#@][\w\d_]*/ },
          { begin: /\$\{(.*?)}/ }
        ]
      };
      var QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR,
          {
            className: "variable",
            begin: /\$\(/,
            end: /\)/,
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      };
      var ESCAPED_QUOTE = {
        className: "",
        begin: /\\"/
      };
      var APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/
      };
      return {
        aliases: ["sh", "zsh"],
        lexemes: /\b-?[a-z\._]+\b/,
        keywords: {
          keyword: "if then else elif fi for while in do done case esac function",
          literal: "true false",
          built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
          _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        contains: [
          {
            className: "meta",
            begin: /^#![^\n]+sh\s*$/,
            relevance: 10
          },
          {
            className: "function",
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: true,
            contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
            relevance: 0
          },
          hljs.HASH_COMMENT_MODE,
          QUOTE_STRING,
          ESCAPED_QUOTE,
          APOS_STRING,
          VAR
        ]
      };
    };
  }
});
export default require_bash();
//# sourceMappingURL=/build/_shared/bash-CD5F7BW3.js.map
