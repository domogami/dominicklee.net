import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/jboss-cli.js
var require_jboss_cli = __commonJS({
  "node_modules/highlight.js/lib/languages/jboss-cli.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var PARAM = {
        begin: /[\w-]+ *=/,
        returnBegin: true,
        relevance: 0,
        contains: [{ className: "attr", begin: /[\w-]+/ }]
      };
      var PARAMSBLOCK = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        contains: [PARAM],
        relevance: 0
      };
      var OPERATION = {
        className: "function",
        begin: /:[\w\-.]+/,
        relevance: 0
      };
      var PATH = {
        className: "string",
        begin: /\B(([\/.])[\w\-.\/=]+)+/
      };
      var COMMAND_PARAMS = {
        className: "params",
        begin: /--[\w\-=\/]+/
      };
      return {
        aliases: ["wildfly-cli"],
        lexemes: "[a-z-]+",
        keywords: {
          keyword: "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
          literal: "true false"
        },
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          COMMAND_PARAMS,
          OPERATION,
          PATH,
          PARAMSBLOCK
        ]
      };
    };
  }
});
export default require_jboss_cli();
//# sourceMappingURL=/build/_shared/jboss-cli-TWJENUHP.js.map
