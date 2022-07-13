import {
  require_markup_templating
} from "/build/_shared/chunk-TSEJDNGK.js";
import {
  require_ruby
} from "/build/_shared/chunk-PKU4CEZT.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/erb.js
var require_erb = __commonJS({
  "node_modules/refractor/lang/erb.js"(exports, module) {
    init_react();
    var refractorMarkupTemplating = require_markup_templating();
    var refractorRuby = require_ruby();
    module.exports = erb;
    erb.displayName = "erb";
    erb.aliases = [];
    function erb(Prism) {
      Prism.register(refractorMarkupTemplating);
      Prism.register(refractorRuby);
      (function(Prism2) {
        Prism2.languages.erb = Prism2.languages.extend("ruby", {});
        Prism2.languages.insertBefore("erb", "comment", {
          delimiter: {
            pattern: /^<%=?|%>$/,
            alias: "punctuation"
          }
        });
        Prism2.hooks.add("before-tokenize", function(env) {
          var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm;
          Prism2.languages["markup-templating"].buildPlaceholders(env, "erb", erbPattern);
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          Prism2.languages["markup-templating"].tokenizePlaceholders(env, "erb");
        });
      })(Prism);
    }
  }
});

export {
  require_erb
};
//# sourceMappingURL=/build/_shared/chunk-OFOQTSBG.js.map
