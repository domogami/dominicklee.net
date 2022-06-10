import {
  Header
} from "/build/_shared/chunk-YTLISXBG.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-VBGWNZZV.js";
import "/build/_shared/chunk-27BH5J57.js";
import "/build/_shared/chunk-ZOBPZVQO.js";
import {
  app_default
} from "/build/_shared/chunk-DSGEGN74.js";
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
  }, "Admin Dom"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("p", null, "Click on a post to edit the blog post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Outlet, null)))));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-XRPVTUEC.js.map
