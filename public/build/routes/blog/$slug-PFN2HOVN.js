import {
  ClientOnly,
  Editor
} from "/build/_shared/chunk-YFIEYGFG.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();
function PostSlug() {
  let post = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(Editor, {
    previousData: post.editorjs
  })), /* @__PURE__ */ React.createElement("div", {
    className: "postDisplay",
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/blog/$slug-PFN2HOVN.js.map
