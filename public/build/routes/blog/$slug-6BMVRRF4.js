import {
  ClientOnly,
  EDITOR_JS_TOOLS,
  createReactEditorJS
} from "/build/_shared/chunk-PFLFNBKW.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  useLoaderData
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();

// app/components/readOnlyEditor.client.tsx
init_react();
var import_react = __toESM(require_react());
var ReactEditorJS = createReactEditorJS();
function Editor(props) {
  const editorCore = import_react.default.useRef(null);
  const handleInitialize = import_react.default.useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(ReactEditorJS, {
    onInitialize: handleInitialize,
    tools: EDITOR_JS_TOOLS,
    defaultValue: JSON.parse(props.previousData),
    readOnly: true
  }));
}

// app/routes/blog/$slug.tsx
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
//# sourceMappingURL=/build/routes/blog/$slug-6BMVRRF4.js.map
