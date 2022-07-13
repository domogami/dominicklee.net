import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/git.js
var require_git = __commonJS({
  "node_modules/refractor/lang/git.js"(exports, module) {
    init_react();
    module.exports = git;
    git.displayName = "git";
    git.aliases = [];
    function git(Prism) {
      Prism.languages.git = {
        comment: /^#.*/m,
        deleted: /^[-–].*/m,
        inserted: /^\+.*/m,
        string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
        command: {
          pattern: /^.*\$ git .*$/m,
          inside: {
            parameter: /\s--?\w+/m
          }
        },
        coord: /^@@.*@@$/m,
        commit_sha1: /^commit \w{40}$/m
      };
    }
  }
});

export {
  require_git
};
//# sourceMappingURL=/build/_shared/chunk-I53CFY5I.js.map
