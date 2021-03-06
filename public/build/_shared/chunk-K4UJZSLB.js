import {
  Logo_Transparent_default
} from "/build/_shared/chunk-XVPQ3L2I.js";
import {
  ThemeSetter
} from "/build/_shared/chunk-FS5VCY3N.js";
import {
  init_react_router_dom,
  useLocation
} from "/build/_shared/chunk-LPE6EWJY.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// app/components/header.tsx
init_react();
var import_react = __toESM(require_react());
init_react_router_dom();
function Header(props) {
  const [menuIsOpen, setMenuIsOpen] = (0, import_react.useState)(false);
  const location = useLocation();
  return /* @__PURE__ */ React.createElement("div", {
    className: "header-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_Transparent_default,
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/" ? "active" : "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#projects"
  }, " Projects")), /* @__PURE__ */ React.createElement("li", {
    className: location.pathname.includes("/blog") ? "active" : "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/blog"
  }, " Blog")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#contact"
  }, " Contact"))), true ? /* @__PURE__ */ React.createElement(ThemeSetter, {
    theme: props.theme,
    changeTheme: props.changeTheme
  }) : /* @__PURE__ */ React.createElement("div", {
    className: `menu-btn${menuIsOpen ? " open" : ""}`,
    onClick: () => setMenuIsOpen(!menuIsOpen)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-btn__burger"
  }))));
}

export {
  Header
};
//# sourceMappingURL=/build/_shared/chunk-K4UJZSLB.js.map
