import {
  Header
} from "/build/_shared/chunk-K4UJZSLB.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-FS5VCY3N.js";
import "/build/_shared/chunk-52ZSK2PT.js";
import {
  app_default
} from "/build/_shared/chunk-QJ2J6WDK.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-LPE6EWJY.js";
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
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement("h3", null, "Posts to edit"), /* @__PURE__ */ React.createElement("div", {
    className: "fancy-rectangle"
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "post-list"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(Link, {
    className: "post",
    to: post.slug
  }, /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }), /* @__PURE__ */ React.createElement("div", {
    className: "post-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.coverUrl
  }), /* @__PURE__ */ React.createElement("div", {
    className: "fancy-rectangle"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "post-text"
  }, /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.description))))))));
}
{
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-5BRI7GEO.js.map
