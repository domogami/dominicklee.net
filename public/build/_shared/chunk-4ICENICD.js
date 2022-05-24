import {
  ThemeContext_default
} from "/build/_shared/chunk-QDAOBHV5.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/ThemeSetter.js
init_react();
var import_react = __toModule(require_react());
function ThemeSetter() {
  const { theme, setTheme } = (0, import_react.useContext)(ThemeContext_default);
  return /* @__PURE__ */ import_react.default.createElement("select", {
    className: "theme-selector",
    value: theme,
    onChange: (e) => setTheme(e.currentTarget.value)
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

export {
  ThemeSetter
};
//# sourceMappingURL=/build/_shared/chunk-4ICENICD.js.map
