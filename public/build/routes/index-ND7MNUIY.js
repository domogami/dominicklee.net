import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-TOVSBS2L.css";

// app/components/header.tsx
init_react();
var import_react = __toModule(require_react());

// app/images/Logo.svg
var Logo_default = "/build/_assets/Logo-OHDM6424.svg";

// app/components/header.tsx
var Header = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: Logo_default,
    alt: "logo"
  }), /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Homie"), /* @__PURE__ */ import_react.default.createElement("li", null, "Projects"), /* @__PURE__ */ import_react.default.createElement("li", null, "Blog"), /* @__PURE__ */ import_react.default.createElement("li", null, "Contact")));
};
var header_default = Header;

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(header_default, null), /* @__PURE__ */ React.createElement("h1", null, "This is an h1j"), /* @__PURE__ */ React.createElement("h2", null, "This is an h2"), /* @__PURE__ */ React.createElement("p", null, "This is a p"));
}
export {
  IndexRoute as default,
  links
};
//# sourceMappingURL=/build/routes/index-ND7MNUIY.js.map
