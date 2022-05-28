import {
  useLoaderData
} from "/build/_shared/chunk-BPAYWQW6.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

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
  }))), /* @__PURE__ */ React.createElement("h1", null, "My Remix Blog"), /* @__PURE__ */ React.createElement("p", null, "Click on the post name to read the post"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/blog/index-US5VCDR2.js.map
