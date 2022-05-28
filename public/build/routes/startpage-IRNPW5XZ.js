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
  const locale = "en";
  const [today, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1e3);
    return () => {
      clearInterval(timer);
    };
  }, []);
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
//# sourceMappingURL=/build/routes/startpage-IRNPW5XZ.js.map
