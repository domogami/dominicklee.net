import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/docker.js
var require_docker = __commonJS({
  "node_modules/refractor/lang/docker.js"(exports, module) {
    init_react();
    module.exports = docker;
    docker.displayName = "docker";
    docker.aliases = ["dockerfile"];
    function docker(Prism) {
      Prism.languages.docker = {
        keyword: {
          pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
          lookbehind: true
        },
        string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        comment: /#.*/,
        punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
      };
      Prism.languages.dockerfile = Prism.languages.docker;
    }
  }
});

export {
  require_docker
};
//# sourceMappingURL=/build/_shared/chunk-QMIOMSSC.js.map
