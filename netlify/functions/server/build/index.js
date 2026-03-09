var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/components/editor.client
var require_editor = __commonJS({
  "empty-module:~/components/editor.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/editorjsReact.client
var require_editorjsReact = __commonJS({
  "empty-module:~/components/editorjsReact.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/ThemeProvider.js
var import_react3 = require("react");

// app/components/ThemeContext.js
var import_react2 = __toESM(require("react")), initialThemeState = {
  theme: "Dark",
  setTheme: () => null
}, ThemeContext = import_react2.default.createContext(initialThemeState), ThemeContext_default = ThemeContext;

// app/components/ThemeProvider.js
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), ThemeProvider = (props) => {
  let [theme, setTheme] = (0, import_react3.useState)(initialThemeState.theme);
  if (typeof document < "u") {
    let localStorage2 = window.localStorage;
  }
  return (0, import_react3.useEffect)(() => {
    let savedThemeLocal = localStorage.getItem("globalTheme");
    savedThemeLocal && props.setTheme(savedThemeLocal);
  }, []), (0, import_react3.useEffect)(() => {
    localStorage.setItem("globalTheme", props.theme);
  }, [props.theme]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeContext_default.Provider, { value: { theme, setTheme }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `theme--${props.theme}`, children: props.children }, void 0, !1, {
    fileName: "app/components/ThemeProvider.js",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ThemeProvider.js",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}, ThemeProvider_default = ThemeProvider;

// app/root.tsx
var import_react5 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "I'm Dominick Lee" },
  { name: "description", content: "Everything Software Engineering" },
  { name: "keywords", content: "Dominick,Lee" },
  { name: "twitter:image", content: "https://dominicklee.com/awesome.png" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:creator", content: "@domogami" },
  { name: "twitter:site", content: "@dom3lee" },
  { name: "twitter:title", content: "Hey, I'm Dom" },
  { name: "twitter:description", content: "Everything Software Engineering" }
];
function App() {
  let location = (0, import_react4.useLocation)(), [theme, setTheme] = (0, import_react5.useState)(
    () => location.pathname.startsWith("/startpage") ? "Dark" : "Light"
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: `theme--${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: `theme--${theme}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ThemeProvider_default, { theme, setTheme, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, { context: [theme, setTheme] }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 54
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/startpage._index.tsx
var startpage_index_exports = {};
__export(startpage_index_exports, {
  default: () => Index,
  links: () => links
});

// app/styles/app.css
var app_default = "/build/_assets/app-HPBAFXPB.css";

// app/images/Logo_Transparent.svg
var Logo_Transparent_default = "/build/_assets/Logo_Transparent-HXC24UL2.svg";

// app/components/startpageGridItem.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function StartpageGridItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid-item-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: props.title }, void 0, !1, {
      fileName: "app/components/startpageGridItem.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: props.links.map(function(d, idx) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: d.link, children: d.name }, void 0, !1, {
        fileName: "app/components/startpageGridItem.tsx",
        lineNumber: 9,
        columnNumber: 15
      }, this) }, idx, !1, {
        fileName: "app/components/startpageGridItem.tsx",
        lineNumber: 8,
        columnNumber: 13
      }, this);
    }) }, void 0, !1, {
      fileName: "app/components/startpageGridItem.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/startpageGridItem.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/startpage._index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "startpage-hero-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "startpage-hero", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: Logo_Transparent_default }, void 0, !1, {
      fileName: "app/routes/startpage._index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "startpage-grid", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StartpageGridItem, { title: "~/dev", links: [
        {
          name: "office",
          link: "https://dp7q8vw2s4v0r.cloudfront.net/story-editor"
        },
        { name: "garden", link: "https://domogami.github.io/" },
        { name: "dom", link: "https://dominicklee.net" }
      ] }, void 0, !1, {
        fileName: "app/routes/startpage._index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StartpageGridItem, { title: "~/work", links: [
        {
          name: "primevideo",
          link: "https://amazon.com/aiv"
        },
        {
          name: "amazon",
          link: "https://amazon.com"
        },
        {
          name: "sysdesign",
          link: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction"
        }
      ] }, void 0, !1, {
        fileName: "app/routes/startpage._index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StartpageGridItem, { title: "~/code", links: [
        { name: "github", link: "https://github.com" },
        { name: "dots", link: "https://github.com/domogami/.dotfiles" },
        { name: "web", link: "https://github.com/domogami/dominicklee.net" }
      ] }, void 0, !1, {
        fileName: "app/routes/startpage._index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StartpageGridItem, { title: "~/fun", links: [
        { name: "youtube", link: "https://youtube.com" },
        { name: "reddit", link: "https://reddit.com" },
        { name: "jacky", link: "https://jzhao.xyz/posts/networked-thought" }
      ] }, void 0, !1, {
        fileName: "app/routes/startpage._index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/startpage._index.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/startpage._index.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/startpage._index.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/drinks._index.tsx
var drinks_index_exports = {};
__export(drinks_index_exports, {
  default: () => Index2,
  links: () => links2
});

// app/components/ThemeSetter.js
var import_react6 = require("react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ThemeSetter(props) {
  let { theme, setTheme } = (0, import_react6.useContext)(ThemeContext_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "select",
    {
      className: "theme-selector",
      value: props.theme,
      onChange: (e) => {
        setTheme(e.currentTarget.value), props.changeTheme(e.currentTarget.value);
      },
      children: themeOptions.map((option, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: option.value, children: option.value }, idx, !1, {
        fileName: "app/components/ThemeSetter.js",
        lineNumber: 20,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/ThemeSetter.js",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

// app/routes/drinks._index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: app_default }];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "drinks", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeSetter, { className: "drinks-theme-setter" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Beach dog" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/2 oz - Ammaretto" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Malibu Pineapple" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Kalua" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shake with crushed ice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Top with 2 oz of chilled Nitro Pepsi freshly poured" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Death to Bayshore" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 1/2 oz - Peach schnapps" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 1/2 oz - watermellon liquer" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/2 oz - Bourbon" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/2 oz - Simple Syrup" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Blushing Thicket" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "2oz - Rose" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1oz - Blackberry Syrup" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/2 oz Peach Schnapps" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Irish Grasshopper" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Kahlua" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Creme de Menthe" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shake with cubed ice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Pour over 2oz carolans" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "St. Cuthbert" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Peach Schnapps" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Triple Sec" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Apple Brandy" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Dry Gin" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shake with crushed ice and strain" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Almond Cookie" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 1/2 oz - Ammaretto" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "2 oz - Almond milk" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shake over ice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Garnish with a bar spoon of creme de menthe and cinamon" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "No Name" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "2 oz - Orange Juice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Creme de Menthe" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Gin" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "Fruit Salad" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Pineapple Juice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Fresh Orange Juice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Fresh Lime" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Brandy" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Gold Kum" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Malibu" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Dash of orange bitters" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Shake with crushed ice" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Serve with muttled mint as garnish" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "drink-name", children: "La Ventura" }, void 0, !1, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Malibu" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz - Malibu Pineapple" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1/4 oz - Blue Curasao" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 oz Triple Sec" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "1 1/2 oz - Banana Syrup" }, void 0, !1, {
        fileName: "app/routes/drinks._index.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/drinks._index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/drinks._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  default: () => AdminIndex
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "admin-index", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Welcome Back Dom" }, void 0, !1, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/admin/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { children: "New Post" }, void 0, !1, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin._index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/admin.$edit.tsx
var admin_edit_exports = {};
__export(admin_edit_exports, {
  action: () => action,
  default: () => PostSlug,
  loader: () => loader
});
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/post.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, coverUrl = foundSlug.coverUrl, title = foundSlug.title, description = foundSlug.description, editorjs = foundSlug.editorjs;
  return prisma.$disconnect(), { id, slug, coverUrl, title, description, editorjs };
}
async function getPostEdit(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, title = foundSlug.title, coverUrl = foundSlug.coverUrl, description = foundSlug.description, editorjs = foundSlug.editorjs;
  return prisma.$disconnect(), { id, slug, coverUrl, title, description, editorjs };
}
async function createPost(post) {
  return await prisma.$connect(), await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function updatePost(post) {
  return await prisma.$connect(), console.log("updatePost id", post.id), await prisma.posts.update({
    where: {
      id: post.id
    },
    data: {
      title: post.title,
      slug: post.slug,
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function getPosts() {
  await prisma.$connect();
  let allPosts = await prisma.posts.findMany();
  return prisma.$disconnect(), allPosts;
}

// app/routes/admin.$edit.tsx
var import_node = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_editor = __toESM(require_editor());

// app/components/client-only.tsx
var import_react8 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ClientOnly({ children, fallback = null }) {
  let [isHydrated, setIsHydrated] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    setIsHydrated(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: isHydrated ? children() : fallback }, void 0, !1, {
    fileName: "app/components/client-only.tsx",
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

// app/routes/admin.$edit.tsx
var import_react10 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), axios = require("axios").default, loader = async ({ params }) => ((0, import_tiny_invariant.default)(params.edit, "expected params.edit"), getPostEdit(params.edit)), action = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), coverUrl = formData.get("coverUrl"), slug = formData.get("slug"), description = formData.get("description"), editorjs = formData.get("editorjs"), id = formData.get("id");
  console.log("Check the cover image"), console.log(coverUrl);
  let errors = {};
  return title || (errors.title = !0), coverUrl || (errors.coverUrl = !0), slug || (errors.slug = !0), description || (errors.description = !0), editorjs || (errors.editorjs = !0), Object.keys(errors).length ? errors : (await updatePost({ id, title, coverUrl, slug, description, editorjs }), (0, import_node.redirect)("/admin"));
};
function PostSlug() {
  let errors = (0, import_react9.useActionData)(), navigation = (0, import_react9.useNavigation)(), post = (0, import_react9.useLoaderData)(), [savedData, setSavedData] = (0, import_react10.useState)("{}"), [coverUrl, setCoverUrl] = (0, import_react10.useState)(post.coverUrl), [isSelected, setIsSelected] = (0, import_react10.useState)(!1), [selectedFile, setSelectedFile] = (0, import_react10.useState)("");
  async function imageUpload(event) {
    let file = event.target.files[0], responseFromAWS = await axios({
      method: "post",
      url: "/.netlify/functions/uploadImage",
      data: file.name
    });
    console.log(responseFromAWS.data.url), console.log("ATTEMPTING PUT");
    let imageUrl = (await fetch(responseFromAWS.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
    })).url.split("?")[0];
    setCoverUrl(imageUrl), setIsSelected(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react9.Form, { reloadDocument: !0, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "edit-post-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: "Edit Post" }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "cover-preview", src: coverUrl }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "", children: [
      "Post Title: ",
      errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("em", { children: "Title is required" }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 90,
        columnNumber: 43
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "title", defaultValue: post.title }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "", children: [
      "Post Cover: ",
      errors?.coverUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("em", { children: "Cover is required" }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 96,
        columnNumber: 46
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          type: "file",
          name: "cover",
          value: selectedFile,
          onChange: imageUpload
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.$edit.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "", children: [
      " ",
      "Post Slug: ",
      errors?.slug && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("em", { children: "Slug is required" }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 108,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "input",
        {
          defaultValue: post.slug,
          id: "slugInput",
          type: "text",
          name: "slug"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.$edit.tsx",
          lineNumber: 109,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: [
      "Insert Description:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { defaultValue: post.description, name: "description", id: "" }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      " ",
      errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("em", { children: "Description is required" }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 122,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_editor.default,
        {
          previousData: post.editorjs,
          saveOutput: savedData,
          save: (savedData2) => setSavedData(savedData2)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.$edit.tsx",
          lineNumber: 126,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "savePost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", children: navigation.state === "submitting" ? "Saving..." : "Save Post" }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 135,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        defaultValue: post.editorjs,
        name: "editorjs",
        value: savedData,
        className: "hiddenEditorField"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 139,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "input",
      {
        className: "hidden",
        type: "text",
        name: "coverUrl",
        defaultValue: coverUrl
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.$edit.tsx",
        lineNumber: 146,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { className: "hidden", name: "id", value: post.id }, void 0, !1, {
      fileName: "app/routes/admin.$edit.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.$edit.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.$edit.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => Index3,
  loader: () => loader2
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader2 = () => getPosts();
function Index3() {
  let posts = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "blog-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "blog-hero", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: [
        "Welcome to ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 14,
          columnNumber: 22
        }, this),
        "my ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "accent", children: "Blog" }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 15,
          columnNumber: 14
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rectangle-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fancy-rectangle" }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "post-list", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react11.Link, { className: "post", to: post.slug, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", {}, post.slug, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "post-container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: post.coverUrl }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fancy-rectangle" }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "post-text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: post.title }, void 0, !1, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: post.description }, void 0, !1, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => PostSlug2,
  loader: () => loader3
});
var import_react12 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_editorjsReact = __toESM(require_editorjsReact());
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => ((0, import_tiny_invariant2.default)(params.slug, "expected params.slug"), getPost(params.slug));
function PostSlug2() {
  let post = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "blog-post-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: post.title }, void 0, !1, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("img", { className: "cover-image", src: post.coverUrl }, void 0, !1, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_editorjsReact.default, { previousData: post.editorjs }, void 0, !1, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 19,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/admin.new.tsx
var admin_new_exports = {};
__export(admin_new_exports, {
  action: () => action2,
  default: () => NewPost
});
var import_node2 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_editor2 = __toESM(require_editor());
var import_react14 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), axios2 = require("axios").default, action2 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), coverUrl = formData.get("coverUrl"), slug = formData.get("slug"), description = formData.get("description"), editorjs = formData.get("editorjs"), errors = {};
  return title || (errors.title = !0), coverUrl || (errors.coverUrl = !0), slug || (errors.slug = !0), description || (errors.description = !0), editorjs || (errors.editorjs = !0), Object.keys(errors).length ? errors : (await createPost({ title, coverUrl, slug, description, editorjs }), (0, import_node2.redirect)("/admin"));
};
function NewPost() {
  let errors = (0, import_react13.useActionData)(), navigation = (0, import_react13.useNavigation)(), slug = "", handleChange = (e) => {
    slug = e.target.value.replace(/\s/g, "-"), document.getElementById("slugInput").value = slug.toLowerCase();
  }, [savedData, setSavedData] = (0, import_react14.useState)(""), [coverUrl, setCoverUrl] = (0, import_react14.useState)(""), [isSelected, setIsSelected] = (0, import_react14.useState)(!1), [selectedFile, setSelectedFile] = (0, import_react14.useState)("");
  async function imageUpload(event) {
    let file = event.target.files[0], responseFromAWS = await axios2({
      method: "post",
      url: "/.netlify/functions/uploadImage",
      data: file.name
    });
    console.log(responseFromAWS.data.url), console.log("ATTEMPTING PUT");
    let imageUrl = (await fetch(responseFromAWS.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
    })).url.split("?")[0];
    setCoverUrl(imageUrl), setIsSelected(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.Form, { reloadDocument: !0, method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "new-post-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "", children: [
      "Post Title: ",
      errors?.title && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("em", { children: "Title is required" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 84,
        columnNumber: 43
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { onChange: handleChange, type: "text", name: "title" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { className: "cover-preview", src: coverUrl }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "", children: [
      " ",
      "Post Slug: ",
      errors?.slug && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("em", { children: "Slug is required" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 93,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { placeholder: slug, id: "slugInput", type: "text", name: "slug" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "", children: [
      "Post Cover: ",
      errors?.coverUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("em", { children: "Cover is required" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 99,
        columnNumber: 46
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "input",
        {
          type: "file",
          name: "cover",
          value: selectedFile,
          onChange: imageUpload
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.new.tsx",
          lineNumber: 100,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
      "Insert Description:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { defaultValue: "", name: "description", id: "" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      " ",
      errors?.description && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("em", { children: "Description is required" }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 113,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_editor2.default,
        {
          previousData: "{}",
          saveOutput: savedData,
          save: (savedData2) => setSavedData(savedData2)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin.new.tsx",
          lineNumber: 117,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { name: "editorjs", defaultValue: savedData, value: savedData }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "input",
      {
        type: "text",
        name: "coverUrl",
        defaultValue: coverUrl
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.new.tsx",
        lineNumber: 127,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "submit", children: navigation.state === "submitting" ? "Creating..." : "Create Post" }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 135,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.new.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.new.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.new.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/startpage.tsx
var startpage_exports = {};
__export(startpage_exports, {
  default: () => Startpage,
  useDate: () => useDate
});
var import_react15 = require("@remix-run/react"), import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), useDate = () => {
  let locale = "en", [today, setDate] = import_react17.default.useState(/* @__PURE__ */ new Date());
  import_react17.default.useEffect(() => {
    let timer = setInterval(() => {
      setDate(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  let date = `${today.toLocaleDateString(locale, { weekday: "long" })}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long"
  })}

`, hour = today.getHours(), wish = `Good ${hour < 12 && "Morning" || hour < 17 && "Afternoon" || "Evening"} `, time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: !0,
    minute: "numeric"
  });
  return {
    date,
    time,
    wish
  };
};
function Startpage() {
  let [theme, setTheme] = (0, import_react15.useOutletContext)(), todaysDate = useDate();
  return import_react17.default.useEffect(() => {
    typeof window < "u" && !window.localStorage.getItem("globalTheme") && setTheme("Dark");
  }, [setTheme]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "startpage-containter", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: [
      "Welcome Back ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "green-text", children: "Dom" }, void 0, !1, {
        fileName: "app/routes/startpage.tsx",
        lineNumber: 65,
        columnNumber: 22
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/startpage.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/startpage.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { id: "date", children: [
      todaysDate.date,
      " | ",
      todaysDate.time,
      " | ",
      todaysDate.wish,
      " |",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ThemeSetter, { theme, changeTheme: (theme2) => setTheme(theme2) }, void 0, !1, {
        fileName: "app/routes/startpage.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/startpage.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/startpage.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute,
  links: () => links3
});

// app/components/header.tsx
var import_react18 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Header(props) {
  let [menuIsOpen, setMenuIsOpen] = (0, import_react18.useState)(!1), location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "header-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: Logo_Transparent_default, alt: "logo" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: location.pathname === "/" ? "active" : "non-active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "non-active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/#projects", children: " Projects" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        "li",
        {
          className: location.pathname.includes("/blog") ? "active" : "non-active",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/blog", children: " Blog" }, void 0, !1, {
            fileName: "app/components/header.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "non-active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/#contact", children: " Contact" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ThemeSetter, { theme: props.theme, changeTheme: props.changeTheme }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/projectCard.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function ProjectCard(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "project-card-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "project-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: props.image, alt: "project_photo" }, void 0, !1, {
      fileName: "app/components/projectCard.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fancy-divider" }, void 0, !1, {
      fileName: "app/components/projectCard.tsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: props.title }, void 0, !1, {
        fileName: "app/components/projectCard.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: props.description }, void 0, !1, {
        fileName: "app/components/projectCard.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { id: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className: "learn-more", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "circle", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "icon arrow" }, void 0, !1, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 13,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 12,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: props.link, className: "button-text", children: "Learn More" }, void 0, !1, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 15,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/projectCard.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/projectCard.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/projectCard.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/projectCard.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/projectCard.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/images/projects/Startpage.png
var Startpage_default = "/build/_assets/Startpage-TVA5SW5R.png";

// app/images/projects/OldSite.png
var OldSite_default = "/build/_assets/OldSite-QEIDNPTJ.png";

// app/images/projects/Dots.png
var Dots_default = "/build/_assets/Dots-N4BNCDZI.png";

// app/pages/home.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "home", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "text-bar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "accent", children: "Dom" }, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          "Lee"
        ] }, void 0, !0, {
          fileName: "app/pages/home.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "vert-rectangle" }, void 0, !1, {
          fileName: "app/pages/home.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/pages/home.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("img", { src: Logo_Transparent_default }, void 0, !1, {
        fileName: "app/pages/home.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/pages/home.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "projects", id: "projects", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "section-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Projects" }, void 0, !1, {
          fileName: "app/pages/home.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "fancy-rectangle" }, void 0, !1, {
          fileName: "app/pages/home.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/pages/home.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        ProjectCard,
        {
          image: Startpage_default,
          title: "Startpage",
          description: "This website is my default startpage that I set to open when I create a new tab or new browser window. It contains helpful quick links of my most frequently visited sites.",
          link: "/startpage"
        },
        void 0,
        !1,
        {
          fileName: "app/pages/home.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        ProjectCard,
        {
          image: Dots_default,
          title: "Dotfiles",
          description: "As someone who is obsessed with optimizing my workflow, I am always improving my dotfiles. If you'd like to check them out you can follow the installation instructions in the README.md",
          link: "https://github.com/domogami/.dotfiles"
        },
        void 0,
        !1,
        {
          fileName: "app/pages/home.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        ProjectCard,
        {
          image: OldSite_default,
          title: "My Old Website",
          description: "This website was my first ever attempt at making a react js site. It was built using Gatsby and deployed with Netlify. It is responsive and served as my previous portfolio.",
          link: "https://doms-old-site.netlify.app/"
        },
        void 0,
        !1,
        {
          fileName: "app/pages/home.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/pages/home.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/pages/home.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_react19 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: app_default }];
function IndexRoute(props) {
  let [theme, setTheme] = (0, import_react19.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Header, { theme, changeTheme: (theme2) => setTheme(theme2) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Home, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/drinks.tsx
var drinks_exports = {};
__export(drinks_exports, {
  default: () => Drinks,
  links: () => links4
});
var import_react20 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: app_default }];
function Drinks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "drinks-containter", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "drinks-title", children: "Max's Drinks" }, void 0, !1, {
      fileName: "app/routes/drinks.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
      fileName: "app/routes/drinks.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/drinks.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links5,
  loader: () => loader4
});
var import_react21 = require("@remix-run/react");
var import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), links5 = () => [{ rel: "stylesheet", href: app_default }], loader4 = () => getPosts();
function Admin(props) {
  let posts = (0, import_react21.useLoaderData)(), [theme, setTheme] = (0, import_react22.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Header, { changeTheme: (theme2) => setTheme(theme2) }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "admin-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react21.Outlet, {}, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { children: "Posts to edit" }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "fancy-rectangle" }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "post-list", children: posts.map(
        (post) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react21.Link, { className: "post", to: post.slug, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", {}, post.slug, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "post-container", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { src: post.coverUrl }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 39,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "fancy-rectangle" }, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "post-text", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { children: post.title }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 42,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: post.description }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 43,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links6
});
var import_react23 = require("@remix-run/react");
var import_react24 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), links6 = () => [{ rel: "stylesheet", href: app_default }];
function Blog() {
  let [theme, setTheme] = (0, import_react24.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Header, { theme, changeTheme: (theme2) => setTheme(theme2) }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react23.Outlet, {}, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IBENQLCE.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-6M2FJNCD.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-EHW6A4QI.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KKV2DY2T.js", imports: ["/build/_shared/chunk-E7VWQHC6.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LAFZXSND.js", imports: ["/build/_shared/chunk-FHS4G5X7.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-SUMGBDWF.js", "/build/_shared/chunk-AMPOBHT5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-LDJSU6I3.js", imports: ["/build/_shared/chunk-FHS4G5X7.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-SUMGBDWF.js", "/build/_shared/chunk-AMPOBHT5.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.$edit": { id: "routes/admin.$edit", parentId: "routes/admin", path: ":edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.$edit-MWCYFDWO.js", imports: ["/build/_shared/chunk-D3LLRTFO.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-KDG2RYJD.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin._index": { id: "routes/admin._index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-NWE3W6V6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.new": { id: "routes/admin.new", parentId: "routes/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.new-OQ6EJHRJ.js", imports: ["/build/_shared/chunk-D3LLRTFO.js", "/build/_shared/chunk-KDG2RYJD.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-FDM6YJZK.js", imports: ["/build/_shared/chunk-FHS4G5X7.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-SUMGBDWF.js", "/build/_shared/chunk-AMPOBHT5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog.$slug": { id: "routes/blog.$slug", parentId: "routes/blog", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$slug-5CTN7HAT.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-KDG2RYJD.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-SOS3U4HA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/drinks": { id: "routes/drinks", parentId: "root", path: "drinks", index: void 0, caseSensitive: void 0, module: "/build/routes/drinks-ZQYADEM7.js", imports: ["/build/_shared/chunk-AMPOBHT5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/drinks._index": { id: "routes/drinks._index", parentId: "routes/drinks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/drinks._index-UX6DSPSY.js", imports: ["/build/_shared/chunk-SUMGBDWF.js", "/build/_shared/chunk-E7VWQHC6.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/startpage": { id: "routes/startpage", parentId: "root", path: "startpage", index: void 0, caseSensitive: void 0, module: "/build/routes/startpage-2CGUPXRR.js", imports: ["/build/_shared/chunk-SUMGBDWF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/startpage._index": { id: "routes/startpage._index", parentId: "routes/startpage", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/startpage._index-MNKV42DR.js", imports: ["/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-AMPOBHT5.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "2dcc9181", hmr: { runtime: "/build/_shared/chunk-EHW6A4QI.js", timestamp: 1773035515861 }, url: "/build/manifest-2DCC9181.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/startpage._index": {
    id: "routes/startpage._index",
    parentId: "routes/startpage",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: startpage_index_exports
  },
  "routes/drinks._index": {
    id: "routes/drinks._index",
    parentId: "routes/drinks",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: drinks_index_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/admin.$edit": {
    id: "routes/admin.$edit",
    parentId: "routes/admin",
    path: ":edit",
    index: void 0,
    caseSensitive: void 0,
    module: admin_edit_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/admin.new": {
    id: "routes/admin.new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: admin_new_exports
  },
  "routes/startpage": {
    id: "routes/startpage",
    parentId: "root",
    path: "startpage",
    index: void 0,
    caseSensitive: void 0,
    module: startpage_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/drinks": {
    id: "routes/drinks",
    parentId: "root",
    path: "drinks",
    index: void 0,
    caseSensitive: void 0,
    module: drinks_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
