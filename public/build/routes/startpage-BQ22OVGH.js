import {
  import_react_router_dom
} from "/build/_shared/chunk-XXZOVCAU.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx?browser
init_react();

// app/routes/startpage.tsx
init_react();
function Startpage() {
  const date = new Date();
  let today = date.toLocaleString("en", { weekday: "long" });
  let hour = date.toLocaleString("pl", { hour: "2-digit" });
  let minute = date.toLocaleString("en", { minute: "2-digit" });
  let second = date.toLocaleString("en", { second: "2-digit" });
  let day = date.toLocaleString("en", { day: "2-digit" });
  let month = date.toLocaleString("en", { month: "2-digit" });
  let year = date.toLocaleString("en", { year: "numeric" });
  minute = addZero(minute);
  second = addZero(second);
  function addZero(i) {
    if (i.length < 2)
      i = "0" + i;
    return i;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "startpage-containter"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome Back ", /* @__PURE__ */ React.createElement("span", {
    className: "green-text"
  }, "Dom"), " "), /* @__PURE__ */ React.createElement("h2", {
    id: "date"
  }, `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
}
export {
  Startpage as default
};
//# sourceMappingURL=/build/routes/startpage-BQ22OVGH.js.map
