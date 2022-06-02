import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// app/components/ThemeSetter.js
init_react();
var import_react2 = __toESM(require_react());

// app/components/ThemeContext.js
init_react();
var import_react = __toESM(require_react());
var initialThemeState = {
  theme: "Dark",
  setTheme: () => null
};
var ThemeContext = import_react.default.createContext(initialThemeState);
var ThemeContext_default = ThemeContext;

// app/components/ThemeSetter.js
function ThemeSetter() {
  const { theme, setTheme } = (0, import_react2.useContext)(ThemeContext_default);
  return /* @__PURE__ */ import_react2.default.createElement("select", {
    className: "theme-selector",
    value: theme,
    onChange: (e) => setTheme(e.currentTarget.value)
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react2.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

export {
  ThemeSetter
};
//# sourceMappingURL=/build/_shared/chunk-WTI2ANFK.js.map
