import {
  ClientOnly,
  EDITOR_JS_TOOLS,
  createReactEditorJS
} from "/build/_shared/chunk-PFLFNBKW.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/editorjs-html/build/edjsHTML.node.js
var require_edjsHTML_node = __commonJS({
  "node_modules/editorjs-html/build/edjsHTML.node.js"(exports, module) {
    "use strict";
    init_react();
    var e = { delimiter: function() {
      return "<br/>";
    }, header: function(e2) {
      var t2 = e2.data;
      return "<h" + t2.level + ">" + t2.text + "</h" + t2.level + ">";
    }, paragraph: function(e2) {
      return "<p>" + e2.data.text + "</p>";
    }, list: function(e2) {
      var t2 = e2.data, r2 = t2.style === "unordered" ? "ul" : "ol", n = function(e3, t3) {
        var r3 = e3.map(function(e4) {
          if (!e4.content && !e4.items)
            return "<li>" + e4 + "</li>";
          var r4 = "";
          return e4.items && (r4 = n(e4.items, t3)), e4.content ? "<li> " + e4.content + " </li>" + r4 : void 0;
        });
        return "<" + t3 + ">" + r3.join("") + "</" + t3 + ">";
      };
      return n(t2.items, r2);
    }, image: function(e2) {
      var t2 = e2.data, r2 = t2.caption ? t2.caption : "Image";
      return '<img src="' + (t2.file && t2.file.url ? t2.file.url : t2.url) + '" alt="' + r2 + '" />';
    }, quote: function(e2) {
      var t2 = e2.data;
      return "<blockquote>" + t2.text + "</blockquote> - " + t2.caption;
    }, code: function(e2) {
      return "<pre><code>" + e2.data.code + "</code></pre>";
    }, embed: function(e2) {
      var t2 = e2.data;
      switch (t2.service) {
        case "vimeo":
          return '<iframe src="' + t2.embed + '" height="' + t2.height + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
        case "youtube":
          return '<iframe width="' + t2.width + '" height="' + t2.height + '" src="' + t2.embed + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        default:
          throw new Error("Only Youtube and Vime Embeds are supported right now.");
      }
    } };
    function t(e2) {
      return new Error('\x1B[31m The Parser function of type "' + e2 + '" is not defined. \n\n  Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m');
    }
    var r = function(n) {
      n === void 0 && (n = {});
      var i = Object.assign({}, e, n);
      return { parse: function(e2) {
        return e2.blocks.map(function(e3) {
          return i[e3.type] ? i[e3.type](e3) : t(e3.type);
        });
      }, parseBlock: function(e2) {
        return i[e2.type] ? i[e2.type](e2) : t(e2.type);
      }, parseStrict: function(e2) {
        var n2 = e2.blocks, o = r(i).validate({ blocks: n2 });
        if (o.length)
          throw new Error("Parser Functions missing for blocks: " + o.toString());
        for (var u = [], a = 0; a < n2.length; a++) {
          if (!i[n2[a].type])
            throw t(n2[a].type);
          u.push(i[n2[a].type](n2[a]));
        }
        return u;
      }, validate: function(e2) {
        var t2 = e2.blocks.map(function(e3) {
          return e3.type;
        }).filter(function(e3, t3, r3) {
          return r3.indexOf(e3) === t3;
        }), r2 = Object.keys(i);
        return t2.filter(function(e3) {
          return !r2.includes(e3);
        });
      } };
    };
    module.exports = r;
  }
});

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();
var import_editorjs_html = __toESM(require_edjsHTML_node());

// app/components/readOnlyEditor.client.tsx
init_react();
var import_react = __toESM(require_react());
var ReactEditorJS = createReactEditorJS();
function Editor(props) {
  const editorCore = import_react.default.useRef(null);
  const handleInitialize = import_react.default.useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(ReactEditorJS, {
    onInitialize: handleInitialize,
    tools: EDITOR_JS_TOOLS,
    defaultValue: JSON.parse(props.previousData),
    readOnly: true
  }));
}

// app/routes/blog/$slug.tsx
function PostSlug() {
  let post = useLoaderData();
  const edjsParser = (0, import_editorjs_html.default)();
  let html = edjsParser.parse(post.editorjs);
  console.log(html);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, html, /* @__PURE__ */ React.createElement("div", {
    className: "blog-post-container"
  }, /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(Editor, {
    previousData: post.editorjs
  }))));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/blog/$slug-L5RBZFQE.js.map
