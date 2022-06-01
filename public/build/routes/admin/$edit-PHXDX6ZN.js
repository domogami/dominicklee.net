import {
  ClientOnly,
  Editor
} from "/build/_shared/chunk-EPG4BXE4.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-LAV75Y4Y.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/$edit.tsx?browser
init_react();

// app/routes/admin/$edit.tsx
init_react();
function PostSlug() {
  let errors = useActionData();
  let transition = useTransition();
  let post = useLoaderData();
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
    className: "hiddenBlogID",
    name: "id",
    value: post.id
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Title: ", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: post.title
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " ", "Post Slug: ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: post.slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(Editor, {
    data: post.editorjs
  })), /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: post.markdown,
    name: "markdown",
    id: "",
    rows: 20,
    cols: 30
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Updating..." : "Update Post")));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/admin/$edit-PHXDX6ZN.js.map
