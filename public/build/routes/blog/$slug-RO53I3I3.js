import {
  EDITOR_JS_TOOLS,
  createReactEditorJS
} from "/build/_shared/chunk-6E7OJLEH.js";
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
var ReactEditorJS = createReactEditorJS();
function PostSlug() {
  let post = useLoaderData();
  const editorCore = React.useRef(null);
  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ReactEditorJS, {
    onChange: handleSave,
    onInitialize: handleInitialize,
    tools: EDITOR_JS_TOOLS,
    defaultValue: JSON.parse(props.previousData)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "postDisplay",
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/blog/$slug-RO53I3I3.js.map
