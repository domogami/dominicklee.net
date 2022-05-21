import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-XXZOVCAU.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/ThemeContext.tsx
var require_ThemeContext = __commonJS({
  "app/components/ThemeContext.tsx"() {
    init_react();
  }
});

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/ThemeProvider.tsx
init_react();
var import_react = __toModule(require_react());
var import_ThemeContext = __toModule(require_ThemeContext());
var ThemeProvider = ({ children }) => {
  const [theme, setTheme] = (0, import_react.useState)((void 0).theme);
  const localStorage = window.localStorage;
  (0, import_react.useEffect)(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
    }
  }, []);
  (0, import_react.useEffect)(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme]);
  return /* @__PURE__ */ import_react.default.createElement(import_ThemeContext.default.Provider, {
    value: { theme, setTheme }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: `theme--${theme}`
  }, children));
};
var ThemeProvider_default = ThemeProvider;

// app/components/ThemeSetter.tsx
init_react();
var import_react2 = __toModule(require_react());
var import_ThemeContext2 = __toModule(require_ThemeContext());
function ThemeSetter() {
  const { theme, setTheme } = (0, import_react2.useContext)(import_ThemeContext2.default);
  return /* @__PURE__ */ import_react2.default.createElement("select", {
    value: theme,
    onChange: (e) => setTheme(e.currentTarget.value)
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react2.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "light" }, { value: "dark" }];

// app/root.tsx
var meta = () => {
  return { title: "I'm Dominick Lee" };
};
function App() {
  return /* @__PURE__ */ React.createElement(ThemeProvider_default, null, /* @__PURE__ */ React.createElement(ThemeSetter, null), /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null))));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-KZAJ7YG4.js.map