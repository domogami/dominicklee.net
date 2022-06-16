import "/build/_shared/chunk-6Q7PDDRW.js";
import {
  Outlet
} from "/build/_shared/chunk-VBGWNZZV.js";
import {
  ThemeSetter
} from "/build/_shared/chunk-2CZ63XE5.js";
import "/build/_shared/chunk-KU3QKX5P.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx?browser
init_react();

// app/routes/startpage.tsx
init_react();
var import_react = __toESM(require_react());
var useDate = () => {
  const locale = "en";
  const [today, setDate] = import_react.default.useState(new Date());
  import_react.default.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1e3);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long"
  })}

`;
  const hour = today.getHours();
  const wish = `Good ${hour < 12 && "Morning" || hour < 17 && "Afternoon" || "Evening"} `;
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
  });
  return {
    date,
    time,
    wish
  };
};
function Startpage() {
  let todaysDate = useDate();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "startpage-containter"
  }, /* @__PURE__ */ import_react.default.createElement("h1", null, "Welcome Back ", /* @__PURE__ */ import_react.default.createElement("span", {
    className: "green-text"
  }, "Dom"), " "), /* @__PURE__ */ import_react.default.createElement(Outlet, null), /* @__PURE__ */ import_react.default.createElement("h2", {
    id: "date"
  }, todaysDate.date, " | ", todaysDate.time, " | ", todaysDate.wish, " |", " ", /* @__PURE__ */ import_react.default.createElement(ThemeSetter, null)));
}
export {
  Startpage as default
};
//# sourceMappingURL=/build/routes/startpage-KYF6GO47.js.map