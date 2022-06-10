import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// app/components/ThemeSetter.js
init_react();
var import_react = __toESM(require_react());
function ThemeSetter(props) {
  const [theme, setTheme] = (0, import_react.useState)(initialThemeState.theme);
  return /* @__PURE__ */ import_react.default.createElement("select", {
    className: "theme-selector",
    value: theme,
    onChange: (e) => {
      setTheme(e.currentTarget.value);
      props.changeTheme(e.currentTarget.value);
    }
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

export {
  ThemeSetter
};
//# sourceMappingURL=/build/_shared/chunk-EOGCDDYI.js.map
