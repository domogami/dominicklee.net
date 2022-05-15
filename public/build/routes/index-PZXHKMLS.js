import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-NIMBTWCX.css";

// app/components/header.tsx
init_react();

// app/images/Logo.svg
var Logo_default = "/build/_assets/Logo-OHDM6424.svg";

// app/components/header.tsx
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_default,
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Homie")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, " Projects")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, " Blog")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, " Contact"))));
}

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", {
    className: "accent"
  }, "Dom"), "Lee"), /* @__PURE__ */ React.createElement("h2", null, "This is an h2"), /* @__PURE__ */ React.createElement("p", null, "This is a p"));
}
export {
  IndexRoute as default,
  links
};
//# sourceMappingURL=/build/routes/index-PZXHKMLS.js.map
