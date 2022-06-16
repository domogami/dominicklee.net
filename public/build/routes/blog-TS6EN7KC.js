import {
  Header
} from "/build/_shared/chunk-J3DYYZZN.js";
import "/build/_shared/chunk-XVPQ3L2I.js";
import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Outlet,
  useOutletContext
} from "/build/_shared/chunk-VBGWNZZV.js";
import "/build/_shared/chunk-2CZ63XE5.js";
import "/build/_shared/chunk-KU3QKX5P.js";
import {
  app_default
} from "/build/_shared/chunk-DSGEGN74.js";
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
//# sourceMappingURL=/build/routes/blog-TS6EN7KC.js.map
