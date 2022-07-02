import {
  Editor,
  require_axios
} from "/build/_shared/chunk-YTTNAVPX.js";
import {
  ClientOnly
} from "/build/_shared/chunk-ITZ5GJUX.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-LPE6EWJY.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/new.tsx?browser
init_react();

// app/routes/admin/new.tsx
init_react();
var import_react = __toESM(require_react());
var axios = require_axios().default;
function NewPost() {
  let errors = useActionData();
  let transition = useTransition();
  let slug = "";
  const handleChange = (e) => {
    let text = e.target.value;
    slug = text.replace(/\s/g, "-");
    document.getElementById("slugInput").value = slug.toLowerCase();
  };
  const [savedData, setSavedData] = (0, import_react.useState)("");
  const [coverUrl, setCoverUrl] = (0, import_react.useState)("");
  const [isSelected, setIsSelected] = (0, import_react.useState)(false);
  const [selectedFile, setSelectedFile] = (0, import_react.useState)("");
  async function imageUpload(event) {
    let file = event.target.files[0];
    const responseFromAWS = await axios({
      method: "post",
      url: "/.netlify/functions/uploadImage",
      data: file.name
    });
    console.log(responseFromAWS.data.url);
    console.log("ATTEMPTING PUT");
    const putResponse = await fetch(responseFromAWS.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
    });
    const imageUrl = putResponse.url.split("?")[0];
    setCoverUrl(imageUrl);
    setIsSelected(true);
  }
  return /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "new-post-container"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Title: ", (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("em", null, "Title is required"), " ", /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "text",
    name: "title"
  }))), /* @__PURE__ */ React.createElement("img", {
    className: "cover-preview",
    src: post.coverUrl
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " ", "Post Slug: ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    placeholder: slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, "Post Cover: ", (errors == null ? void 0 : errors.coverUrl) && /* @__PURE__ */ React.createElement("em", null, "Cover is required"), " ", /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "cover",
    value: selectedFile,
    onChange: imageUpload
  }))), /* @__PURE__ */ React.createElement("p", null, "Insert Description:", /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, /* @__PURE__ */ React.createElement("input", {
    defaultValue: "",
    name: "description",
    id: ""
  })), " ", (errors == null ? void 0 : errors.description) && /* @__PURE__ */ React.createElement("em", null, "Description is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(ClientOnly, null, () => /* @__PURE__ */ React.createElement(Editor, {
    previousData: "{}",
    saveOutput: savedData,
    save: (savedData2) => setSavedData(savedData2)
  }))), /* @__PURE__ */ React.createElement("input", {
    name: "editorjs",
    defaultValue: savedData,
    value: savedData
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "coverUrl",
    defaultValue: coverUrl
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post"))));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/admin/new-VXUNGTR4.js.map
