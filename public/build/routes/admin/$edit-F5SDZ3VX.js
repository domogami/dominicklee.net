import {
  ClientOnly,
  EDITOR_JS_TOOLS,
  createReactEditorJS
} from "/build/_shared/chunk-PFLFNBKW.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/$edit.tsx?browser
init_react();

// app/routes/admin/$edit.tsx
init_react();

// app/components/editor.client.tsx
init_react();
var import_react = __toESM(require_react());
var ReactEditorJS = createReactEditorJS();
function Editor(props) {
  const editorCore = import_react.default.useRef(null);
  const handleInitialize = import_react.default.useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  const handleSave = import_react.default.useCallback(async () => {
    const savedData = await editorCore.current.save();
    props.save(JSON.stringify(savedData));
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(ReactEditorJS, {
    onChange: handleSave,
    onInitialize: handleInitialize,
    tools: EDITOR_JS_TOOLS,
    defaultValue: JSON.parse(props.previousData)
  }), /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: handleSave,
    type: "button"
  }, "Save Content"));
}

// app/routes/admin/$edit.tsx
var import_react2 = __toESM(require_react());
function PostSlug() {
  let errors = useActionData();
  let transition = useTransition();
  let post = useLoaderData();
  const [savedData, setSavedData] = (0, import_react2.useState)("{}");
  return /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
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
    previousData: post.editorjs,
    saveOutput: savedData,
    save: (savedData2) => setSavedData(savedData2)
  })), /* @__PURE__ */ React.createElement("input", {
    defaultValue: post.editorjs,
    name: "editorjs",
    value: savedData,
    id: ""
  }), /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: post.markdown,
    name: "markdown",
    id: ""
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Updating..." : "Update Post")));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/admin/$edit-F5SDZ3VX.js.map
