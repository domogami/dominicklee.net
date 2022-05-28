import {
  import_react_router_dom
} from "/build/_shared/chunk-XXZOVCAU.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx?browser
init_react();

// app/routes/startpage.tsx
init_react();
var import_react = __toModule(require_react());
function Startpage() {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "startpage-containter"
  }, /* @__PURE__ */ import_react.default.createElement("h1", null, "Welcome Back ", /* @__PURE__ */ import_react.default.createElement("span", {
    className: "green-text"
  }, "Dom"), " "), /* @__PURE__ */ import_react.default.createElement("h2", {
    id: "date"
  }, `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`), /* @__PURE__ */ import_react.default.createElement(import_react_router_dom.Outlet, null));
}
export {
  Startpage as default
};
//# sourceMappingURL=/build/routes/startpage-AA7M4QCG.js.map
