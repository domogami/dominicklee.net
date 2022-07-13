import {
  require_c
} from "/build/_shared/chunk-PG5TXKR5.js";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/refractor/lang/objectivec.js
var require_objectivec = __commonJS({
  "node_modules/refractor/lang/objectivec.js"(exports, module) {
    init_react();
    var refractorC = require_c();
    module.exports = objectivec;
    objectivec.displayName = "objectivec";
    objectivec.aliases = [];
    function objectivec(Prism) {
      Prism.register(refractorC);
      Prism.languages.objectivec = Prism.languages.extend("c", {
        keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
      });
      delete Prism.languages.objectivec["class-name"];
    }
  }
});

export {
  require_objectivec
};
//# sourceMappingURL=/build/_shared/chunk-MNIZ5DHY.js.map
