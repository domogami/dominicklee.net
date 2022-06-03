import {
  Header
} from "/build/_shared/chunk-UWL2P6FW.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-XJGGZ26L.js";
import "/build/_shared/chunk-O2ARXD2P.js";
import {
  app_default
} from "/build/_shared/chunk-55A55Z6X.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Admin(props) {
  let posts = useLoaderData();
  const [theme, setTheme] = useOutletContext();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    changeTheme: (theme2) => setTheme(theme2)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "admin-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "adminTitle"
  }, "Admin"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("p", null, "Click on a post to edit the blog post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Outlet, null)))));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-GSG6NTI5.js.map
