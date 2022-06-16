import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// app/components/ThemeContext.js
init_react();
var import_react = __toESM(require_react());
var initialTheme = "Dark";
if (typeof document !== "undefined") {
  const localStorage = window.localStorage;
  const savedThemeLocal = localStorage.getItem("globalTheme");
  initialTheme = savedThemeLocal;
}
var initialThemeState = {
  theme: initialTheme,
  setTheme: () => null
};
var ThemeContext = import_react.default.createContext(initialThemeState);
var ThemeContext_default = ThemeContext;

export {
  initialThemeState,
  ThemeContext_default
};
//# sourceMappingURL=/build/_shared/chunk-3ON3R4OH.js.map
