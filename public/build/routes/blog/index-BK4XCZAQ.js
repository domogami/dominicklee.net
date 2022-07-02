import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-LPE6EWJY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/index.tsx?browser
init_react();

// app/routes/blog/index.tsx
init_react();
function Index() {
  let posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-hero"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to ", /* @__PURE__ */ React.createElement("br", null), "my ", /* @__PURE__ */ React.createElement("span", {
    className: "accent"
  }, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "rectangle-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fancy-rectangle"
  }))), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement(Link, {
    className: "postTitle",
    to: post.slug
  }, /* @__PURE__ */ React.createElement("li", {
    className: "postItem",
    key: post.slug
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.coverUrl
  }), post.title)))), " ");
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/blog/index-BK4XCZAQ.js.map
