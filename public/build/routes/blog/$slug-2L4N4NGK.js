import "/build/_shared/chunk-5CI526G5.js";
import {
  useLoaderData
} from "/build/_shared/chunk-IQMZNSEN.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();
function PostSlug() {
  let post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "postDisplay",
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/blog/$slug-2L4N4NGK.js.map
