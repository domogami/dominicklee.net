import {
  ThemeContext_default
} from "/build/_shared/chunk-52MEH5L5.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-X6VKNDRM.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react = __toESM(require_react());
var meta = () => {
  return { title: "I'm Dominick Lee" };
};
function App() {
  const [theme, setTheme] = (0, import_react.useState)(initialThemeState.theme);
  if (typeof window !== "undefined") {
    const localStorage2 = window.localStorage;
  }
  (0, import_react.useEffect)(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme]);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement(ThemeContext_default.Provider, {
    value: { theme, setTheme }
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react.default.createElement(Meta, null), /* @__PURE__ */ import_react.default.createElement(Links, null)), /* @__PURE__ */ import_react.default.createElement("body", {
    className: `theme--${theme}`
  }, /* @__PURE__ */ import_react.default.createElement(Outlet, null), /* @__PURE__ */ import_react.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(Scripts, null), /* @__PURE__ */ import_react.default.createElement(LiveReload, null))));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-GVFE5ZOD.js.map
