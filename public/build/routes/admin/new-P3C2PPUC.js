import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-LPE6EWJY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/new.tsx?browser
init_react();

// app/routes/admin/new.tsx
init_react();
function NewPost() {
  let errors = useActionData();
  let transition = useTransition();
  let slug = "";
  const handleChange = (e) => {
    let text = e.target.value;
    slug = text.replace(/\s/g, "-");
    document.getElementById("slugInput").value = slug.toLowerCase();
  };
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Title: ", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), " ", /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " ", "Post Slug: ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    placeholder: slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Description:"), " ", (errors == null ? void 0 : errors.description) && /* @__PURE__ */ React.createElement("em", null, "Description is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    id: "",
    rows: 20,
    cols: 30
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/admin/new-P3C2PPUC.js.map
