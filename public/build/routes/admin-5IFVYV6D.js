import {
  Header
} from "/build/_shared/chunk-SOYSAA5S.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-S5ARVQLJ.js";
import "/build/_shared/chunk-KQ7FE2N7.js";
import {
  app_default
} from "/build/_shared/chunk-GUUH27HV.js";
import "/build/_shared/chunk-5CI526G5.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-IQMZNSEN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

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
//# sourceMappingURL=/build/routes/admin-5IFVYV6D.js.map
