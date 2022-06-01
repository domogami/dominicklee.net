import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-LAV75Y4Y.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

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
  }))), /* @__PURE__ */ React.createElement("h1", null, "My Remix Blog"), /* @__PURE__ */ React.createElement("p", null, "Click on the post name to read the post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "postList",
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "postTitle",
    to: post.slug
  }, post.title)))), " ");
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/blog/index-ZSFW5RGM.js.map
