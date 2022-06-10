import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  ThemeContext_default
} from "/build/_shared/chunk-ZOBPZVQO.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/ThemeProvider.js
init_react();
var import_react = __toESM(require_react());
var ThemeProvider = (props) => {
  if (typeof document !== "undefined") {
    const localStorage2 = window.localStorage;
  }
  (0, import_react.useEffect)(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      props.setTheme(savedThemeLocal);
      console.log(savedThemeLocal);
      console.log(props.theme);
      console.log("THe theme");
    }
  }, []);
  (0, import_react.useEffect)(() => {
    localStorage.setItem("globalTheme", props.theme);
  }, [props.theme]);
  return /* @__PURE__ */ import_react.default.createElement(ThemeContext_default.Provider, {
    value: { theme, setTheme }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: `theme--${props.theme}`
  }, props.children));
};
var ThemeProvider_default = ThemeProvider;

// app/root.tsx
var import_react2 = __toESM(require_react());
var meta = () => {
  return {
    title: "I'm Dominick Lee",
    description: "Everything Software Engineering",
    keywords: "Dominick,Lee",
    "twitter:image": "https://dominicklee.com/awesome.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@domogami",
    "twitter:site": "@dom3lee",
    "twitter:title": "Hey, I'm Dom",
    "twitter:description": "Everything Software Engineering"
  };
};
function App() {
  const [theme2, setTheme2] = (0, import_react2.useState)("Light");
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: `theme--${theme2}`
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: `theme--${theme2}`
  }, /* @__PURE__ */ React.createElement(ThemeProvider_default, {
    theme: theme2,
    setTheme: setTheme2
  }, /* @__PURE__ */ React.createElement(Outlet, {
    context: [theme2, setTheme2]
  }), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null))));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-XGLXPMR6.js.map
