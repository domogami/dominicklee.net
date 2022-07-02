import {
  Header
} from "/build/_shared/chunk-CFOC4GYU.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-FS5VCY3N.js";
import "/build/_shared/chunk-52ZSK2PT.js";
import {
  app_default
} from "/build/_shared/chunk-L2R5IMVK.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-LPE6EWJY.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog.tsx?browser
init_react();

// app/routes/blog.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Blog() {
  const [theme, setTheme] = useOutletContext();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    theme,
    changeTheme: (theme2) => setTheme(theme2)
  }), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  Blog as default,
  links
};
//# sourceMappingURL=/build/routes/blog-PLZK4WCS.js.map
