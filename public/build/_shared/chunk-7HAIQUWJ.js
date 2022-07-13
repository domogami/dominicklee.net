import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/http.js
var require_http = __commonJS({
  "node_modules/refractor/lang/http.js"(exports, module) {
    init_react();
    module.exports = http;
    http.displayName = "http";
    http.aliases = [];
    function http(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages.http = {
          "request-line": {
            pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
            inside: {
              property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
              "attr-name": /:\w+/
            }
          },
          "response-status": {
            pattern: /^HTTP\/1.[01] \d+.*/m,
            inside: {
              property: {
                pattern: /(^HTTP\/1.[01] )\d+.*/i,
                lookbehind: true
              }
            }
          },
          "header-name": {
            pattern: /^[\w-]+:(?=.)/m,
            alias: "keyword"
          }
        };
        var langs = Prism2.languages;
        var httpLanguages = {
          "application/javascript": langs.javascript,
          "application/json": langs.json || langs.javascript,
          "application/xml": langs.xml,
          "text/xml": langs.xml,
          "text/html": langs.html,
          "text/css": langs.css
        };
        var suffixTypes = {
          "application/json": true,
          "application/xml": true
        };
        function getSuffixPattern(contentType2) {
          var suffix = contentType2.replace(/^[a-z]+\//, "");
          var suffixPattern = "\\w+/(?:[\\w.-]+\\+)+" + suffix + "(?![+\\w.-])";
          return "(?:" + contentType2 + "|" + suffixPattern + ")";
        }
        var options;
        for (var contentType in httpLanguages) {
          if (httpLanguages[contentType]) {
            options = options || {};
            var pattern = suffixTypes[contentType] ? getSuffixPattern(contentType) : contentType;
            options[contentType] = {
              pattern: RegExp("(content-type:\\s*" + pattern + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
              lookbehind: true,
              inside: {
                rest: httpLanguages[contentType]
              }
            };
          }
        }
        if (options) {
          Prism2.languages.insertBefore("http", "header-name", options);
        }
      })(Prism);
    }
  }
});

export {
  require_http
};
//# sourceMappingURL=/build/_shared/chunk-7HAIQUWJ.js.map
