var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/components/ThemeProvider.js
init_react();
var import_react2 = __toModule(require("react"));

// app/components/ThemeContext.js
init_react();
var import_react = __toModule(require("react"));
var initialThemeState = {
  theme: "Dark",
  setTheme: () => null
};
var ThemeContext = import_react.default.createContext(initialThemeState);
var ThemeContext_default = ThemeContext;

// app/components/ThemeProvider.js
var ThemeProvider = ({ children }) => {
  const [theme, setTheme] = (0, import_react2.useState)(initialThemeState.theme);
  if (typeof window !== "undefined") {
    const localStorage2 = window.localStorage;
  }
  (0, import_react2.useEffect)(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    localStorage.setItem("globalTheme", theme);
  }, [theme]);
  return /* @__PURE__ */ import_react2.default.createElement(ThemeContext_default.Provider, {
    value: { theme, setTheme }
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `theme--${theme}`
  }, children));
};
var ThemeProvider_default = ThemeProvider;

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx
var meta = () => {
  return { title: "I'm Dominick Lee" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement(ThemeProvider_default, null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null))));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx
var startpage_exports = {};
__export(startpage_exports, {
  default: () => Startpage,
  useDate: () => useDate
});
init_react();

// app/components/ThemeSetter.js
init_react();
var import_react3 = __toModule(require("react"));
function ThemeSetter() {
  const { theme, setTheme } = (0, import_react3.useContext)(ThemeContext_default);
  return /* @__PURE__ */ import_react3.default.createElement("select", {
    className: "theme-selector",
    value: theme,
    onChange: (e) => setTheme(e.currentTarget.value)
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react3.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx
var import_remix3 = __toModule(require_remix());
var import_react4 = __toModule(require("react"));
var useDate = () => {
  const locale = "en";
  const [today, setDate] = import_react4.default.useState(new Date());
  import_react4.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "startpage-containter"
  }, /* @__PURE__ */ import_react4.default.createElement("h1", null, "Welcome Back ", /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "green-text"
  }, "Dom"), " "), /* @__PURE__ */ import_react4.default.createElement(import_remix3.Outlet, null), /* @__PURE__ */ import_react4.default.createElement("h2", {
    id: "date"
  }, todaysDate.date, " | ", todaysDate.time, " | ", todaysDate.wish, " |", " ", /* @__PURE__ */ import_react4.default.createElement(ThemeSetter, null)));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx
var startpage_exports2 = {};
__export(startpage_exports2, {
  default: () => Index,
  links: () => links
});
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-4LC7CYEM.css";

// app/images/Logo_Transparent.svg
var Logo_Transparent_default = "/build/_assets/Logo_Transparent-HXC24UL2.svg";

// app/components/startpageGridItem.tsx
init_react();
function StartpageGridItem(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid-item-container"
  }, /* @__PURE__ */ React.createElement("h3", null, props.title), /* @__PURE__ */ React.createElement("ul", null, props.links.map(function(d, idx) {
    return /* @__PURE__ */ React.createElement("li", {
      key: idx
    }, /* @__PURE__ */ React.createElement("a", {
      href: d.link
    }, d.name));
  })));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Index() {
  const sectionOne = [
    { name: "stack", link: "https://stackoverflow.com/" },
    { name: "google", link: "https://google.com" },
    { name: "dom", link: "localhost:3000/" }
  ];
  const sectionTwo = [
    {
      name: "amazon",
      link: "https://www.amazonuniversity.jobs/communitylogin"
    },
    {
      name: "seattle",
      link: "https://docs.google.com/spreadsheets/d/1svMX1JvXCcojulCv4LPBB5YL9wpiQsXD1r_l4-xSh4U/edit?usp=sharing"
    },
    {
      name: "commute",
      link: "https://www.google.com/maps/dir//Institute+For+Systems+Biology,+401+Terry+Ave+N,+Seattle,+WA+98109/@47.6219859,-122.3406299,15z/data=!3m1!4b1!4m13!4m12!1m0!1m5!1m1!1s0x5490150242acab75:0x5b8f4e4b0f0b5350!2m2!1d-122.3373956!2d47.6223926!2m3!6e0!7e2!8j1652688000!3e0"
    }
  ];
  const sectionThree = [
    { name: "github", link: "https://github.com" },
    { name: "dots", link: "https://github.com/domogami/.dotfiles" },
    { name: "web", link: "https://github.com/domogami/dominicklee.net" }
  ];
  const sectionFour = [
    { name: "youtube", link: "https://youtube.com" },
    { name: "reddit", link: "https://reddit.com" },
    { name: "unixporn", link: "https://reddit.com/r/unixporn" }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_Transparent_default
  }), /* @__PURE__ */ React.createElement("div", {
    className: "startpage-grid"
  }, /* @__PURE__ */ React.createElement(StartpageGridItem, {
    title: "~/dev",
    links: sectionOne
  }), /* @__PURE__ */ React.createElement(StartpageGridItem, {
    title: "~/work",
    links: sectionTwo
  }), /* @__PURE__ */ React.createElement(StartpageGridItem, {
    title: "~/code",
    links: sectionThree
  }), /* @__PURE__ */ React.createElement(StartpageGridItem, {
    title: "~/fun",
    links: sectionFour
  }))));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/drinks.tsx
var drinks_exports = {};
__export(drinks_exports, {
  default: () => Drinks,
  links: () => links2
});
init_react();
var import_remix4 = __toModule(require_remix());
var links2 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Drinks() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "drinks-containter"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "drinks-title"
  }, "Max's Drinks"), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/drinks/index.tsx
var drinks_exports2 = {};
__export(drinks_exports2, {
  default: () => Index2,
  links: () => links3
});
init_react();
var links3 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "drinks"
  }, /* @__PURE__ */ React.createElement(ThemeSetter, {
    className: "drinks-theme-setter"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Beach dog"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1/2 oz - Ammaretto"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Malibu Pineapple"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Kalua"), /* @__PURE__ */ React.createElement("li", null, "Shake with crushed ice"), /* @__PURE__ */ React.createElement("li", null, "Top with 2 oz of chilled Nitro Pepsi freshly poured")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Death to Bayshore"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1 1/2 oz - Peach schnapps"), /* @__PURE__ */ React.createElement("li", null, "1 1/2 oz - watermellon liquer"), /* @__PURE__ */ React.createElement("li", null, "1/2 oz - Bourbon"), /* @__PURE__ */ React.createElement("li", null, "1/2 oz - Simple Syrup")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Blushing Thicket"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "2oz - Rose"), /* @__PURE__ */ React.createElement("li", null, "1oz - Blackberry Syrup"), /* @__PURE__ */ React.createElement("li", null, "1/2 oz Peach Schnapps")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Irish Grasshopper"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Kahlua"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Creme de Menthe"), /* @__PURE__ */ React.createElement("li", null, "Shake with cubed ice"), /* @__PURE__ */ React.createElement("li", null, "Pour over 2oz carolans")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "St. Cuthbert"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1 oz - Peach Schnapps"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Triple Sec"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Apple Brandy"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Dry Gin"), /* @__PURE__ */ React.createElement("li", null, "Shake with crushed ice and strain")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Almond Cookie"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1 1/2 oz - Ammaretto"), /* @__PURE__ */ React.createElement("li", null, "2 oz - Almond milk"), /* @__PURE__ */ React.createElement("li", null, "Shake over ice"), /* @__PURE__ */ React.createElement("li", null, "Garnish with a bar spoon of creme de menthe and cinamon")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "No Name"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "2 oz - Orange Juice"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Creme de Menthe"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Gin")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "Fruit Salad"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Pineapple Juice"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Fresh Orange Juice"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Fresh Lime"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Brandy"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Gold Kum"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Malibu"), /* @__PURE__ */ React.createElement("li", null, "Dash of orange bitters"), /* @__PURE__ */ React.createElement("li", null, "Shake with crushed ice"), /* @__PURE__ */ React.createElement("li", null, "Serve with muttled mint as garnish")), /* @__PURE__ */ React.createElement("h2", {
    className: "drink-name"
  }, "La Ventura"), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1 oz - Malibu"), /* @__PURE__ */ React.createElement("li", null, "1 oz - Malibu Pineapple"), /* @__PURE__ */ React.createElement("li", null, "1/4 oz - Blue Curasao"), /* @__PURE__ */ React.createElement("li", null, "1 oz Triple Sec"), /* @__PURE__ */ React.createElement("li", null, "1 1/2 oz - Banana Syrup")));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  loader: () => loader
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/post.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var import_marked = __toModule(require("marked"));
var prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  });
  let id = foundSlug.id;
  let title = foundSlug.title;
  let html = (0, import_marked.marked)(foundSlug.markdown);
  prisma.$disconnect();
  return { id, slug, title, html };
}
async function getPostEdit(slug) {
  await prisma.$connect();
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  });
  let id = foundSlug.id;
  let title = foundSlug.title;
  let markdown = foundSlug.markdown;
  prisma.$disconnect();
  return { id, slug, title, markdown };
}
async function createPost(post) {
  await prisma.$connect();
  await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown
    }
  });
  prisma.$disconnect();
  return getPost(post.slug);
}
async function updatePost(post) {
  await prisma.$connect();
  console.log("updatePost id", post.id);
  await prisma.posts.update({
    where: {
      id: post.id
    },
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown
    }
  });
  prisma.$disconnect();
  return getPost(post.slug);
}
async function getPosts() {
  await prisma.$connect();
  const allPosts = await prisma.posts.findMany();
  prisma.$disconnect();
  return allPosts;
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin.tsx
var loader = () => {
  return getPosts();
};
function Admin() {
  let posts = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "adminTitle"
  }, "Admin"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("p", null, "Click on a post to edit the blog post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null))));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/$edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action,
  default: () => PostSlug,
  loader: () => loader2
});
init_react();
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_remix6 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.edit, "expected params.edit");
  return getPostEdit(params.edit);
};
var action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let slug = formData.get("slug");
  let markdown = formData.get("markdown");
  let id = formData.get("id");
  let errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  console.log("calling updatePost with id, title, slug, markdown: ", id, title, slug, markdown);
  await updatePost({ id, title, slug, markdown });
  return (0, import_remix6.redirect)("/admin");
};
function PostSlug() {
  let errors = (0, import_remix6.useActionData)();
  let transition = (0, import_remix6.useTransition)();
  let post = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
  }, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: post.markdown,
    name: "markdown",
    id: "",
    rows: 20,
    cols: 30
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Updating..." : "Update Post")));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
init_react();
var import_remix7 = __toModule(require_remix());
function AdminIndex() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "adminNewPostLink"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "new"
  }, " ", /* @__PURE__ */ React.createElement("button", {
    className: "adminNewPostButton"
  }, "Create a New Post")));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPost
});
init_react();
var import_remix8 = __toModule(require_remix());
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let slug = formData.get("slug");
  let markdown = formData.get("markdown");
  let errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  await createPost({ title, slug, markdown });
  return (0, import_remix8.redirect)("/admin");
};
function NewPost() {
  let errors = (0, import_remix8.useActionData)();
  let transition = (0, import_remix8.useTransition)();
  let slug = "";
  const handleChange = (e) => {
    let text = e.target.value;
    slug = text.replace(/\s/g, "-");
    document.getElementById("slugInput").value = slug.toLowerCase();
  };
  return /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
    htmlFor: "markdown"
  }, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    name: "markdown",
    id: "",
    rows: 20,
    cols: 30
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links4
});
init_react();

// app/components/header.tsx
init_react();
var import_react5 = __toModule(require("react"));
function Header() {
  const [menuIsOpen, setMenuIsOpen] = (0, import_react5.useState)(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "header-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_Transparent_default,
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#projects"
  }, " Projects")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/blog"
  }, " Blog")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#contact"
  }, " Contact"))), true ? /* @__PURE__ */ React.createElement(ThemeSetter, null) : /* @__PURE__ */ React.createElement("div", {
    className: `menu-btn${menuIsOpen ? " open" : ""}`,
    onClick: () => setMenuIsOpen(!menuIsOpen)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-btn__burger"
  }))));
}

// app/pages/home.tsx
init_react();

// app/components/projectCard.tsx
init_react();
function ProjectCard(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "project-card-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "project-card"
  }, /* @__PURE__ */ React.createElement("img", {
    src: props.image,
    alt: "project_photo"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "fancy-divider"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text"
  }, /* @__PURE__ */ React.createElement("h2", null, props.title), /* @__PURE__ */ React.createElement("p", null, props.description), /* @__PURE__ */ React.createElement("div", {
    id: "container"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "learn-more"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "circle",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "icon arrow"
  })), /* @__PURE__ */ React.createElement("a", {
    href: props.link,
    className: "button-text"
  }, "Learn More"))))));
}

// app/images/projects/Startpage.png
var Startpage_default = "/build/_assets/Startpage-TVA5SW5R.png";

// app/images/projects/OldSite.png
var OldSite_default = "/build/_assets/OldSite-QEIDNPTJ.png";

// app/images/projects/Dots.png
var Dots_default = "/build/_assets/Dots-N4BNCDZI.png";

// app/pages/home.tsx
function Home() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "home"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", {
    className: "accent"
  }, "Dom"), /* @__PURE__ */ React.createElement("br", null), "Lee"), /* @__PURE__ */ React.createElement("div", {
    className: "vert-rectangle"
  }), /* @__PURE__ */ React.createElement("img", {
    src: Logo_Transparent_default
  })), /* @__PURE__ */ React.createElement("div", {
    className: "projects",
    id: "projects"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", null, "Projects"), /* @__PURE__ */ React.createElement("div", {
    className: "fancy-rectangle"
  })), /* @__PURE__ */ React.createElement(ProjectCard, {
    image: Startpage_default,
    title: "Startpage",
    description: "This website is my default startpage that I set to open when I create a new tab or new browser window. It contains helpful quick links of my most frequently visited sites.",
    link: "/startpage"
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    image: Dots_default,
    title: "Dotfiles",
    description: "As someone who is obsessed with optimizing my workflow, I am always improving my dotfiles. If you'd like to check them out you can follow the installation instructions in the README.md",
    link: "https://github.com/domogami/.dotfiles"
  }), /* @__PURE__ */ React.createElement(ProjectCard, {
    image: OldSite_default,
    title: "My Old Website",
    description: "This website was my first ever attempt at making a react js site. It was built using Gatsby and deployed with Netlify. It is responsive and served as my previous portfolio.",
    link: "https://dominicklee.net"
  })));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Home, null));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links5
});
init_react();
var import_remix9 = __toModule(require_remix());
var links5 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Blog() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_remix9.Outlet, null));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug2,
  loader: () => loader3
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));
var loader3 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug2() {
  let post = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "postDisplay",
    dangerouslySetInnerHTML: { __html: post.html }
  });
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Index3,
  loader: () => loader4
});
init_react();
var import_remix11 = __toModule(require_remix());
var loader4 = () => {
  return getPosts();
};
function Index3() {
  let posts = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "blog-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "blog-hero"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to ", /* @__PURE__ */ React.createElement("br", null), "my ", /* @__PURE__ */ React.createElement("span", {
    className: "accent"
  }, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "rectangle-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fancy-rectangle"
  }))), /* @__PURE__ */ React.createElement("h1", null, "My Remix Blog"), /* @__PURE__ */ React.createElement("p", null, "Click on the post name to read the post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "postList",
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    className: "postTitle",
    to: post.slug
  }, post.title)))), " ");
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/startpage": {
    id: "routes/startpage",
    parentId: "root",
    path: "startpage",
    index: void 0,
    caseSensitive: void 0,
    module: startpage_exports
  },
  "routes/startpage/index": {
    id: "routes/startpage/index",
    parentId: "routes/startpage",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: startpage_exports2
  },
  "routes/drinks": {
    id: "routes/drinks",
    parentId: "root",
    path: "drinks",
    index: void 0,
    caseSensitive: void 0,
    module: drinks_exports
  },
  "routes/drinks/index": {
    id: "routes/drinks/index",
    parentId: "routes/drinks",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: drinks_exports2
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/$edit": {
    id: "routes/admin/$edit",
    parentId: "routes/admin",
    path: ":edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1RoZW1lUHJvdmlkZXIuanMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvVGhlbWVDb250ZXh0LmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9UaGVtZVNldHRlci5qcyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL3N0YXJ0cGFnZS9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc3RhcnRwYWdlR3JpZEl0ZW0udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL2RyaW5rcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9hZG1pbi50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3Bvc3QudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9hZG1pbi8kZWRpdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9hZG1pbi9uZXcudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2hlYWRlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3BhZ2VzL2hvbWUudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL3Byb2plY3RDYXJkLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL2Jsb2cudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYmxvZy8kc2x1Zy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYWRtaW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9hZG1pbi8kZWRpdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYmxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL2Jsb2cvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9zdGFydHBhZ2VcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zdGFydHBhZ2VcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzdGFydHBhZ2VcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9zdGFydHBhZ2UvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zdGFydHBhZ2UvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc3RhcnRwYWdlXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9kcmlua3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kcmlua3NcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJkcmlua3NcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9kcmlua3MvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kcmlua3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZHJpbmtzXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9hZG1pblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWRtaW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9hZG1pbi8kZWRpdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluLyRlZGl0XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCI6ZWRpdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL25ld1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IFwibmV3XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9LFxuICBcInJvdXRlcy9ibG9nLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFRoZW1lUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1RoZW1lUHJvdmlkZXInO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJJJ20gRG9taW5pY2sgTGVlXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICIvLyBUaGVtZVByb3ZpZGVyLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaGVtZUNvbnRleHQsIHsgaW5pdGlhbFRoZW1lU3RhdGUgfSBmcm9tICcuL1RoZW1lQ29udGV4dCc7XG5cbmNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoaW5pdGlhbFRoZW1lU3RhdGUudGhlbWUpO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZFRoZW1lTG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2xvYmFsVGhlbWUnKTtcblxuICAgIGlmICghIXNhdmVkVGhlbWVMb2NhbCkge1xuICAgICAgc2V0VGhlbWUoc2F2ZWRUaGVtZUxvY2FsKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnbG9iYWxUaGVtZScsIHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCBzZXRUaGVtZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGhlbWUtLSR7dGhlbWV9YH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQcm92aWRlcjtcbiIsICIvLyBUaGVtZUNvbnRleHQuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsVGhlbWVTdGF0ZSA9IHtcbiAgdGhlbWU6ICdEYXJrJyxcbiAgc2V0VGhlbWU6ICgpID0+IG51bGwsXG59O1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGluaXRpYWxUaGVtZVN0YXRlKTtcbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dDtcbiIsICJpbXBvcnQgVGhlbWVTZXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9UaGVtZVNldHRlcic7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IHVzZURhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9ICdlbic7XG4gIGNvbnN0IFt0b2RheSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShuZXcgRGF0ZSgpKTsgLy8gU2F2ZSB0aGUgY3VycmVudCBkYXRlIHRvIGJlIGFibGUgdG8gdHJpZ2dlciBhbiB1cGRhdGVcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gQ3JlYXRlcyBhbiBpbnRlcnZhbCB3aGljaCB3aWxsIHVwZGF0ZSB0aGUgY3VycmVudCBkYXRhIGV2ZXJ5IG1pbnV0ZVxuICAgICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYSByZXJlbmRlciBldmVyeSBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSB1c2VEYXRlIGhvb2suXG4gICAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgIH0sIDYwICogMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpOyAvLyBSZXR1cm4gYSBmdW50aW9uIHRvIGNsZWFyIHRoZSB0aW1lciBzbyB0aGF0IGl0IHdpbGwgc3RvcCBiZWluZyBjYWxsZWQgb24gdW5tb3VudFxuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBkYXkgPSB0b2RheS50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgY29uc3QgZGF0ZSA9IGAke2RheX0sICR7dG9kYXkuZ2V0RGF0ZSgpfSAke3RvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHtcbiAgICBtb250aDogJ2xvbmcnLFxuICB9KX1cXG5cXG5gO1xuXG4gIGNvbnN0IGhvdXIgPSB0b2RheS5nZXRIb3VycygpO1xuICBjb25zdCB3aXNoID0gYEdvb2QgJHtcbiAgICAoaG91ciA8IDEyICYmICdNb3JuaW5nJykgfHwgKGhvdXIgPCAxNyAmJiAnQWZ0ZXJub29uJykgfHwgJ0V2ZW5pbmcnXG4gIH0gYDtcblxuICBjb25zdCB0aW1lID0gdG9kYXkudG9Mb2NhbGVUaW1lU3RyaW5nKGxvY2FsZSwge1xuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBob3VyMTI6IHRydWUsXG4gICAgbWludXRlOiAnbnVtZXJpYycsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZSxcbiAgICB0aW1lLFxuICAgIHdpc2gsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydHBhZ2UoKSB7XG4gIGxldCB0b2RheXNEYXRlID0gdXNlRGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRwYWdlLWNvbnRhaW50ZXJcIj5cbiAgICAgIDxoMT5cbiAgICAgICAgV2VsY29tZSBCYWNrIDxzcGFuIGNsYXNzTmFtZT1cImdyZWVuLXRleHRcIj5Eb208L3NwYW4+eycgJ31cbiAgICAgIDwvaDE+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgICA8aDIgaWQ9XCJkYXRlXCI+XG4gICAgICAgIHt0b2RheXNEYXRlLmRhdGV9IHwge3RvZGF5c0RhdGUudGltZX0gfCB7dG9kYXlzRGF0ZS53aXNofSB8eycgJ31cbiAgICAgICAgPFRoZW1lU2V0dGVyIC8+XG4gICAgICA8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8vVGhlbWVTZXR0ZXIuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4vVGhlbWVDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVTZXR0ZXIoKSB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VsZWN0XG4gICAgICBjbGFzc05hbWU9XCJ0aGVtZS1zZWxlY3RvclwiXG4gICAgICB2YWx1ZT17dGhlbWV9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgPlxuICAgICAge3RoZW1lT3B0aW9ucy5tYXAoKG9wdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbi52YWx1ZX0ga2V5PXtpZHh9PlxuICAgICAgICAgIHtvcHRpb24udmFsdWV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gICk7XG59XG5cbmNvbnN0IHRoZW1lT3B0aW9ucyA9IFt7IHZhbHVlOiAnTGlnaHQnIH0sIHsgdmFsdWU6ICdEYXJrJyB9XTtcbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IHN0YXJ0cGFnZUltYWdlIGZyb20gJ34vaW1hZ2VzL0xvZ29fVHJhbnNwYXJlbnQuc3ZnJztcbmltcG9ydCBTdGFydHBhZ2VHcmlkSXRlbSBmcm9tICd+L2NvbXBvbmVudHMvc3RhcnRwYWdlR3JpZEl0ZW0nO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHNlY3Rpb25PbmUgPSBbXG4gICAgeyBuYW1lOiAnc3RhY2snLCBsaW5rOiAnaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS8nIH0sXG4gICAgeyBuYW1lOiAnZ29vZ2xlJywgbGluazogJ2h0dHBzOi8vZ29vZ2xlLmNvbScgfSxcbiAgICB7IG5hbWU6ICdkb20nLCBsaW5rOiAnbG9jYWxob3N0OjMwMDAvJyB9LFxuICBdO1xuICBjb25zdCBzZWN0aW9uVHdvID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdhbWF6b24nLFxuICAgICAgbGluazogJ2h0dHBzOi8vd3d3LmFtYXpvbnVuaXZlcnNpdHkuam9icy9jb21tdW5pdHlsb2dpbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnc2VhdHRsZScsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMXN2TVgxSnZYQ2NvanVsQ3Y0TFBCQjVZTDl3cGlRc1hEMXJfbDQteFNoNFUvZWRpdD91c3A9c2hhcmluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY29tbXV0ZScsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8vSW5zdGl0dXRlK0ZvcitTeXN0ZW1zK0Jpb2xvZ3ksKzQwMStUZXJyeStBdmUrTiwrU2VhdHRsZSwrV0ErOTgxMDkvQDQ3LjYyMTk4NTksLTEyMi4zNDA2Mjk5LDE1ei9kYXRhPSEzbTEhNGIxITRtMTMhNG0xMiExbTAhMW01ITFtMSExczB4NTQ5MDE1MDI0MmFjYWI3NToweDViOGY0ZTRiMGYwYjUzNTAhMm0yITFkLTEyMi4zMzczOTU2ITJkNDcuNjIyMzkyNiEybTMhNmUwITdlMiE4ajE2NTI2ODgwMDAhM2UwJyxcbiAgICB9LFxuICBdO1xuICBjb25zdCBzZWN0aW9uVGhyZWUgPSBbXG4gICAgeyBuYW1lOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbScgfSxcbiAgICB7IG5hbWU6ICdkb3RzJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kb21vZ2FtaS8uZG90ZmlsZXMnIH0sXG4gICAgeyBuYW1lOiAnd2ViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kb21vZ2FtaS9kb21pbmlja2xlZS5uZXQnIH0sXG4gIF07XG4gIGNvbnN0IHNlY3Rpb25Gb3VyID0gW1xuICAgIHsgbmFtZTogJ3lvdXR1YmUnLCBsaW5rOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScgfSxcbiAgICB7IG5hbWU6ICdyZWRkaXQnLCBsaW5rOiAnaHR0cHM6Ly9yZWRkaXQuY29tJyB9LFxuICAgIHsgbmFtZTogJ3VuaXhwb3JuJywgbGluazogJ2h0dHBzOi8vcmVkZGl0LmNvbS9yL3VuaXhwb3JuJyB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRwYWdlLWhlcm8tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0cGFnZS1oZXJvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtzdGFydHBhZ2VJbWFnZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydHBhZ2UtZ3JpZFwiPlxuICAgICAgICAgIDxTdGFydHBhZ2VHcmlkSXRlbSB0aXRsZT1cIn4vZGV2XCIgbGlua3M9e3NlY3Rpb25PbmV9IC8+XG4gICAgICAgICAgPFN0YXJ0cGFnZUdyaWRJdGVtIHRpdGxlPVwifi93b3JrXCIgbGlua3M9e3NlY3Rpb25Ud299IC8+XG4gICAgICAgICAgPFN0YXJ0cGFnZUdyaWRJdGVtIHRpdGxlPVwifi9jb2RlXCIgbGlua3M9e3NlY3Rpb25UaHJlZX0gLz5cbiAgICAgICAgICA8U3RhcnRwYWdlR3JpZEl0ZW0gdGl0bGU9XCJ+L2Z1blwiIGxpbmtzPXtzZWN0aW9uRm91cn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFydHBhZ2VHcmlkSXRlbShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWNvbnRhaW5lclwiPlxuICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMubGlua3MubWFwKGZ1bmN0aW9uIChkLCBpZHgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17ZC5saW5rfT57ZC5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvYXBwLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmlua3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmlua3MtY29udGFpbnRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImRyaW5rcy10aXRsZVwiPk1heCdzIERyaW5rczwvaDE+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBUaGVtZVNldHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RoZW1lU2V0dGVyJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpbmtzXCI+XG4gICAgICA8VGhlbWVTZXR0ZXIgY2xhc3NOYW1lPVwiZHJpbmtzLXRoZW1lLXNldHRlclwiIC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPkJlYWNoIGRvZzwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4xLzIgb3ogLSBBbW1hcmV0dG88L2xpPlxuICAgICAgICA8bGk+MSBveiAtIE1hbGlidSBQaW5lYXBwbGU8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIEthbHVhPC9saT5cbiAgICAgICAgPGxpPlNoYWtlIHdpdGggY3J1c2hlZCBpY2U8L2xpPlxuICAgICAgICA8bGk+VG9wIHdpdGggMiBveiBvZiBjaGlsbGVkIE5pdHJvIFBlcHNpIGZyZXNobHkgcG91cmVkPC9saT5cbiAgICAgIDwvb2w+XG5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+RGVhdGggdG8gQmF5c2hvcmU8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MSAxLzIgb3ogLSBQZWFjaCBzY2huYXBwczwvbGk+XG4gICAgICAgIDxsaT4xIDEvMiBveiAtIHdhdGVybWVsbG9uIGxpcXVlcjwvbGk+XG4gICAgICAgIDxsaT4xLzIgb3ogLSBCb3VyYm9uPC9saT5cbiAgICAgICAgPGxpPjEvMiBveiAtIFNpbXBsZSBTeXJ1cDwvbGk+XG4gICAgICA8L29sPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPkJsdXNoaW5nIFRoaWNrZXQ8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+Mm96IC0gUm9zZTwvbGk+XG4gICAgICAgIDxsaT4xb3ogLSBCbGFja2JlcnJ5IFN5cnVwPC9saT5cbiAgICAgICAgPGxpPjEvMiBveiBQZWFjaCBTY2huYXBwczwvbGk+XG4gICAgICA8L29sPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPklyaXNoIEdyYXNzaG9wcGVyPC9oMj5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPjEvNCBveiAtIEthaGx1YTwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gQ3JlbWUgZGUgTWVudGhlPC9saT5cbiAgICAgICAgPGxpPlNoYWtlIHdpdGggY3ViZWQgaWNlPC9saT5cbiAgICAgICAgPGxpPlBvdXIgb3ZlciAyb3ogY2Fyb2xhbnM8L2xpPlxuICAgICAgPC9vbD5cblxuICAgICAgPGgyIGNsYXNzTmFtZT1cImRyaW5rLW5hbWVcIj5TdC4gQ3V0aGJlcnQ8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MSBveiAtIFBlYWNoIFNjaG5hcHBzPC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIFRyaXBsZSBTZWM8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIEFwcGxlIEJyYW5keTwvbGk+XG4gICAgICAgIDxsaT4xLzQgb3ogLSBEcnkgR2luPC9saT5cbiAgICAgICAgPGxpPlNoYWtlIHdpdGggY3J1c2hlZCBpY2UgYW5kIHN0cmFpbjwvbGk+XG4gICAgICA8L29sPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPkFsbW9uZCBDb29raWU8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MSAxLzIgb3ogLSBBbW1hcmV0dG88L2xpPlxuICAgICAgICA8bGk+MiBveiAtIEFsbW9uZCBtaWxrPC9saT5cbiAgICAgICAgPGxpPlNoYWtlIG92ZXIgaWNlPC9saT5cbiAgICAgICAgPGxpPkdhcm5pc2ggd2l0aCBhIGJhciBzcG9vbiBvZiBjcmVtZSBkZSBtZW50aGUgYW5kIGNpbmFtb248L2xpPlxuICAgICAgPC9vbD5cblxuICAgICAgPGgyIGNsYXNzTmFtZT1cImRyaW5rLW5hbWVcIj5ObyBOYW1lPC9oMj5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPjIgb3ogLSBPcmFuZ2UgSnVpY2U8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIENyZW1lIGRlIE1lbnRoZTwvbGk+XG4gICAgICAgIDxsaT4xLzQgb3ogLSBHaW48L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+RnJ1aXQgU2FsYWQ8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MS80IG96IC0gUGluZWFwcGxlIEp1aWNlPC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIEZyZXNoIE9yYW5nZSBKdWljZTwvbGk+XG4gICAgICAgIDxsaT4xLzQgb3ogLSBGcmVzaCBMaW1lPC9saT5cbiAgICAgICAgPGxpPjEgb3ogLSBCcmFuZHk8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIEdvbGQgS3VtPC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIE1hbGlidTwvbGk+XG4gICAgICAgIDxsaT5EYXNoIG9mIG9yYW5nZSBiaXR0ZXJzPC9saT5cbiAgICAgICAgPGxpPlNoYWtlIHdpdGggY3J1c2hlZCBpY2U8L2xpPlxuICAgICAgICA8bGk+U2VydmUgd2l0aCBtdXR0bGVkIG1pbnQgYXMgZ2FybmlzaDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImRyaW5rLW5hbWVcIj5MYSBWZW50dXJhPC9oMj5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPjEgb3ogLSBNYWxpYnU8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIE1hbGlidSBQaW5lYXBwbGU8L2xpPlxuICAgICAgICA8bGk+MS80IG96IC0gQmx1ZSBDdXJhc2FvPC9saT5cbiAgICAgICAgPGxpPjEgb3ogVHJpcGxlIFNlYzwvbGk+XG4gICAgICAgIDxsaT4xIDEvMiBveiAtIEJhbmFuYSBTeXJ1cDwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCwgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnfi9wb3N0JztcblxuLy9jcmVhdGUgYSBzdHlsZXNoZWV0IHJlZiBmb3IgdGhlIGFkbWluLmNzcyBmaWxlXG4vLyBleHBvcnQgbGV0IGxpbmtzID0gKCkgPT4ge1xuLy8gICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFkbWluU3R5bGVzIH1dO1xuLy8gfTtcblxuZXhwb3J0IGxldCBsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRQb3N0cygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oKSB7XG4gIGxldCBwb3N0cyA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYWRtaW5UaXRsZVwiPkFkbWluPC9oMT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxwPkNsaWNrIG9uIGEgcG9zdCB0byBlZGl0IHRoZSBibG9nIHBvc3Q8L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICA8TGluayB0bz17cG9zdC5zbHVnfT57cG9zdC50aXRsZX08L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7LyogT3V0bGV0IHJlbmRlcnMgdGhlIC9hZG1pbi9pbmRleC5qc3ggKi99XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdChzbHVnKSB7XG4gIC8vc2V0dXAgb3VyIHByaXNtYSBjb25uZWN0aW9uXG4gIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpO1xuXG4gIC8vIHdlIHdpbGwgZmluZCB0aGUgZmlyc3QgZGF0YWJhc2UgZW50cnkgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2x1Z1xuICBjb25zdCBmb3VuZFNsdWcgPSBhd2FpdCBwcmlzbWEucG9zdHMuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1Zzogc2x1ZyxcbiAgICB9LFxuICB9KTtcbiAgbGV0IGlkID0gZm91bmRTbHVnLmlkO1xuICAvL2xldCdzIGV4dHJhY3QgdGhlIHRpdGxlXG4gIGxldCB0aXRsZSA9IGZvdW5kU2x1Zy50aXRsZTtcbiAgLy8gdXNpbmcgbWFya2VkLCB3ZSBhcmUgZ29pbmcgdG8gY29udmVydCB0aGUgbWFya2Rvd24gaW50byBIVE1MIHNvIHRoZSBibG9nIHBvc3QgY2FuIHJlbmRlciBhcyBlbnRlcmVkIGluIE1hcmtkb3duLlxuICBsZXQgaHRtbCA9IG1hcmtlZChmb3VuZFNsdWcubWFya2Rvd24pO1xuICAvLyB3ZSBuZWVkIHRvIGNsZWFudXAgb3VyIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgcHJpc21hLiRkaXNjb25uZWN0KCk7XG5cbiAgLy8gbGV0J3Mgc2VuZCBiYWNrIHRoZSBzbHVnLCB0aGUgdGl0bGUsIGFuZCBvdXIgbWFya2Rvd24gY29udmVydGVkIHRvIGh0bWxcbiAgcmV0dXJuIHsgaWQsIHNsdWcsIHRpdGxlLCBodG1sIH07XG59XG5cbi8vd2hlbiB3ZSBlZGl0IHRoZSBwb3N0IHdlIHdhbnQgdG8gcmV0dXJuIGRpZmZlcmVudCBkYXRhIGluY2x1ZGluZyB0aGUgSUQgZmllbGRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0RWRpdChzbHVnKSB7XG4gIC8vc2V0dXAgb3VyIHByaXNtYSBjb25uZWN0aW9uXG4gIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpO1xuXG4gIC8vIHdlIHdpbGwgZmluZCB0aGUgZmlyc3QgZGF0YWJhc2UgZW50cnkgdGhhdCBtYXRjaGVzIHRoZSBwYXNzZWQgc2x1Z1xuICBjb25zdCBmb3VuZFNsdWcgPSBhd2FpdCBwcmlzbWEucG9zdHMuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1Zzogc2x1ZyxcbiAgICB9LFxuICB9KTtcbiAgbGV0IGlkID0gZm91bmRTbHVnLmlkO1xuICAvL2xldCdzIGV4dHJhY3QgdGhlIHRpdGxlXG4gIGxldCB0aXRsZSA9IGZvdW5kU2x1Zy50aXRsZTtcbiAgLy8gc2luY2Ugd2UgYXJlIGVkaXRpbmcgYW5kIG5vdCByZW5kZXJpbmcgd2Ugd2FudCB0byBwdWxsIHRoZSBvcmlnaW5hbCBtYXJrZG93biB2YWx1ZSBzdG9yZWQgaW4gdGhlIGRiXG4gIGxldCBtYXJrZG93biA9IGZvdW5kU2x1Zy5tYXJrZG93bjtcbiAgLy8gd2UgbmVlZCB0byBjbGVhbnVwIG91ciBkYXRhYmFzZSBjb25uZWN0aW9uXG4gIHByaXNtYS4kZGlzY29ubmVjdCgpO1xuXG4gIC8vIGxldCdzIHNlbmQgYmFjayB0aGUgc2x1ZywgdGhlIHRpdGxlLCBhbmQgb3VyIG1hcmtkb3duIGNvbnZlcnRlZCB0byBodG1sXG4gIHJldHVybiB7IGlkLCBzbHVnLCB0aXRsZSwgbWFya2Rvd24gfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvc3QocG9zdCkge1xuICAvL1ByaXNtYSBjb25uZWN0aW9uXG4gIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpO1xuICAvLyBwcmlzbWEgY3JlYXRlXG4gIGF3YWl0IHByaXNtYS5wb3N0cy5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxuICAgICAgc2x1ZzogcG9zdC5zbHVnLFxuICAgICAgbWFya2Rvd246IHBvc3QubWFya2Rvd24sXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gY2xlYW51cCBwcmlzbWEgY29ubmVjdGlvblxuICBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgLy8gbGV0J3Mgc2VuZCBiYWNrIHRoZSBzbHVnIHdlIGNyZWF0ZWRcbiAgcmV0dXJuIGdldFBvc3QocG9zdC5zbHVnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBvc3QocG9zdCkge1xuICAvL1ByaXNtYSBjb25uZWN0aW9uXG4gIGF3YWl0IHByaXNtYS4kY29ubmVjdCgpO1xuICAvLyBwcmlzbWEgY3JlYXRlXG4gIGNvbnNvbGUubG9nKCd1cGRhdGVQb3N0IGlkJywgcG9zdC5pZCk7XG4gIGF3YWl0IHByaXNtYS5wb3N0cy51cGRhdGUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogcG9zdC5pZCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxuICAgICAgc2x1ZzogcG9zdC5zbHVnLFxuICAgICAgbWFya2Rvd246IHBvc3QubWFya2Rvd24sXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gY2xlYW51cCBwcmlzbWEgY29ubmVjdGlvblxuICBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgLy8gbGV0J3Mgc2VuZCBiYWNrIHRoZSBzbHVnIHdlIGNyZWF0ZWRcbiAgcmV0dXJuIGdldFBvc3QocG9zdC5zbHVnKTtcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gc2luY2Ugd2Ugd2lsbCBiZSBsb2FkaW5nIGV4dGVybmFsIGRhdGFcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgLy8gYXdhaXQgcHJpc21hIGNvbm5lY3Rpb25cbiAgYXdhaXQgcHJpc21hLiRjb25uZWN0KCk7XG4gIC8vIGxldCdzIGdyYWIgYWxsIHBvc3RzIHVzaW5nIGZpbmRNYW55KClcbiAgLy8gdGhlIHBvc3RzIGluIHByaXNtYS5wb3N0cyBpcyB0aGUgY29sbGVjdGlvbiB3ZSBjcmVhdGVkIGluIE1vbmdvLmRiXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgcHJpc21hLnBvc3RzLmZpbmRNYW55KCk7XG4gIC8vIGxldCdzIGNsZWFudXAgb3VyIGNvbm5lY3Rpb25cbiAgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIC8vIGxldCdzIHNlZSB3aGF0IHdlIGFyZSByZXR1cm5pbmdcbiAgLy8gIGNvbnNvbGUubG9nKGFsbFBvc3RzKVxuICByZXR1cm4gYWxsUG9zdHM7XG59XG4iLCAiaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgeyBnZXRQb3N0RWRpdCB9IGZyb20gJ34vcG9zdCc7XG5pbXBvcnQge1xuICByZWRpcmVjdCxcbiAgRm9ybSxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXBkYXRlUG9zdCB9IGZyb20gJ34vcG9zdCc7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5lZGl0LCAnZXhwZWN0ZWQgcGFyYW1zLmVkaXQnKTtcbiAgcmV0dXJuIGdldFBvc3RFZGl0KHBhcmFtcy5lZGl0KTtcbn07XG5cbmV4cG9ydCBsZXQgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBsZXQgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJyk7XG4gIGxldCBzbHVnID0gZm9ybURhdGEuZ2V0KCdzbHVnJyk7XG4gIGxldCBtYXJrZG93biA9IGZvcm1EYXRhLmdldCgnbWFya2Rvd24nKTtcbiAgbGV0IGlkID0gZm9ybURhdGEuZ2V0KCdpZCcpO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFxuICAgICdjYWxsaW5nIHVwZGF0ZVBvc3Qgd2l0aCBpZCwgdGl0bGUsIHNsdWcsIG1hcmtkb3duOiAnLFxuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIHNsdWcsXG4gICAgbWFya2Rvd25cbiAgKTtcbiAgYXdhaXQgdXBkYXRlUG9zdCh7IGlkLCB0aXRsZSwgc2x1ZywgbWFya2Rvd24gfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvYWRtaW4nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBsZXQgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBsZXQgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgbGV0IHBvc3QgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPHA+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoaWRkZW5CbG9nSURcIiBuYW1lPVwiaWRcIiB2YWx1ZT17cG9zdC5pZH0+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxuICAgICAgICAgIFBvc3QgVGl0bGU6IHtlcnJvcnM/LnRpdGxlICYmIDxlbT5UaXRsZSBpcyByZXF1aXJlZDwvZW0+fXsnICd9XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgZGVmYXVsdFZhbHVlPXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBQb3N0IFNsdWc6IHtlcnJvcnM/LnNsdWcgJiYgPGVtPlNsdWcgaXMgcmVxdWlyZWQ8L2VtPn1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cG9zdC5zbHVnfVxuICAgICAgICAgICAgaWQ9XCJzbHVnSW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOjwvbGFiZWw+eycgJ31cbiAgICAgICAge2Vycm9ycz8ubWFya2Rvd24gJiYgPGVtPk1hcmtkb3duIGlzIHJlcXVpcmVkPC9lbT59XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Bvc3QubWFya2Rvd259XG4gICAgICAgICAgbmFtZT1cIm1hcmtkb3duXCJcbiAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgcm93cz17MjB9XG4gICAgICAgICAgY29scz17MzB9XG4gICAgICAgIC8+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/ICdVcGRhdGluZy4uLicgOiAnVXBkYXRlIFBvc3QnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5JbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluTmV3UG9zdExpbmtcIj5cbiAgICAgIDxMaW5rIHRvPVwibmV3XCI+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRtaW5OZXdQb3N0QnV0dG9uXCI+Q3JlYXRlIGEgTmV3IFBvc3Q8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBpc0Vycm9yUmVzcG9uc2UgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0L2RhdGEnO1xuaW1wb3J0IHsgcmVkaXJlY3QsIEZvcm0sIHVzZUFjdGlvbkRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSAnfi9wb3N0JztcblxuZXhwb3J0IGxldCBhY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGxldCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKTtcbiAgbGV0IHNsdWcgPSBmb3JtRGF0YS5nZXQoJ3NsdWcnKTtcbiAgbGV0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KCdtYXJrZG93bicpO1xuXG4gIGxldCBlcnJvcnMgPSB7fTtcbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZTtcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWU7XG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGF3YWl0IGNyZWF0ZVBvc3QoeyB0aXRsZSwgc2x1ZywgbWFya2Rvd24gfSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvYWRtaW4nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIC8vIHB1bGwgaW4gZXJyb3JzIGZyb20gb3VyIGFjdGlvbiB1c2luZyB0aGUgdXNlQWN0aW9uRGF0YSgpIGhvb2tcbiAgbGV0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgLy8gdHJhbnNpdGlvbiB3aWxsIGFsbG93IHVzIHRvIGNyZWF0ZSBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UgYnkgdXBkYXRpbmcgdGhlIHRleHQgb2YgdGhlIHN1Ym1pdCBidXR0b24gd2hpbGUgY3JlYXRpbmcgdGhlIGJsb2cgcG9zdFxuICBsZXQgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgLy8gd2UgYXJlIGdvaW5nIHRvIGNyZWF0ZSB0aGUgc2x1ZyBmb3IgdGhlIHVzZXJcbiAgbGV0IHNsdWcgPSAnJztcblxuICAvLyBhcyB0aGUgVGl0bGUgaW5wdXQgaXMgdXBkYXRlZCB3ZSB3aWxsIGdlbmVyYXRlIHRoZSBzbHVnIGF1dG9tYXRpY2FsbHkuXG4gIC8vIE15IEZpcnN0IFBvc3Qgc2x1ZyB3b3VsZCBlcXVhbCAnbXktZmlyc3QtcG9zdCcuIFdlIHdpbGwgY29udmVydCB0byBsb3dlciBjYXNlIGFuZCB3ZSB3aWxsIHN0cmlwIHNwYWNlcyBhbmQgcmVwbGFjZSB3aXRoIGh5cGhlbnNcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHVzaW5nIHJlZ2V4IGFuZCByZXBsYWNlLCBsZXQncyBjb252ZXJ0IHNwYWNlcyB0byBkYXNoZXNcbiAgICBzbHVnID0gdGV4dC5yZXBsYWNlKC9cXHMvZywgJy0nKTtcbiAgICAvLyBsZXRzIHNldCB0aGUgdmFsdWUgb2YgdGhlIHNsdWcgdGV4dCBib3ggdG8gYmUgb3VyIG5ldyBzbHVnIGluIGxvd2VyY2FzZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbHVnSW5wdXQnKS52YWx1ZSA9IHNsdWcudG9Mb3dlckNhc2UoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cbiAgICAgICAgICBQb3N0IFRpdGxlOiB7ZXJyb3JzPy50aXRsZSAmJiA8ZW0+VGl0bGUgaXMgcmVxdWlyZWQ8L2VtPn17JyAnfVxuICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIFBvc3QgU2x1Zzoge2Vycm9ycz8uc2x1ZyAmJiA8ZW0+U2x1ZyBpcyByZXF1aXJlZDwvZW0+fVxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj17c2x1Z30gaWQ9XCJzbHVnSW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzbHVnXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hcmtkb3duXCI+TWFya2Rvd246PC9sYWJlbD57JyAnfVxuICAgICAgICB7ZXJyb3JzPy5tYXJrZG93biAmJiA8ZW0+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2VtPn1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWFya2Rvd25cIiBpZD1cIlwiIHJvd3M9ezIwfSBjb2xzPXszMH0gLz5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gJ0NyZWF0aW5nLi4uJyA6ICdDcmVhdGUgUG9zdCd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICd+L2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBIb21lIGZyb20gJ34vcGFnZXMvaG9tZSc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFJvdXRlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8SG9tZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBMb2dvIGZyb20gJy4uL2ltYWdlcy9Mb2dvX1RyYW5zcGFyZW50LnN2Zyc7XG5pbXBvcnQgVGhlbWVTZXR0ZXIgZnJvbSAnLi9UaGVtZVNldHRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbbWVudUlzT3Blbiwgc2V0TWVudUlzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aW1nIHNyYz17TG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm9uLWFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jcHJvamVjdHNcIj4gUHJvamVjdHM8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm9uLWFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9ibG9nXCI+IEJsb2c8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm9uLWFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi8jY29udGFjdFwiPiBDb250YWN0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHt0cnVlID8gKFxuICAgICAgICAgIDxUaGVtZVNldHRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1lbnUtYnRuJHttZW51SXNPcGVuID8gJyBvcGVuJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51SXNPcGVuKCFtZW51SXNPcGVuKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtYnRuX19idXJnZXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvcHJvamVjdENhcmQnO1xuaW1wb3J0IGhleGFnb24gZnJvbSAnfi9pbWFnZXMvaGV4YWdvbi5zdmcnO1xuaW1wb3J0IGxvZ28gZnJvbSAnfi9pbWFnZXMvTG9nb19UcmFuc3BhcmVudC5zdmcnO1xuaW1wb3J0IHN0YXJ0cGFnZSBmcm9tICd+L2ltYWdlcy9wcm9qZWN0cy9TdGFydHBhZ2UucG5nJztcbmltcG9ydCBvbGRzaXRlIGZyb20gJ34vaW1hZ2VzL3Byb2plY3RzL09sZFNpdGUucG5nJztcbmltcG9ydCBkb3RzIGZyb20gJ34vaW1hZ2VzL3Byb2plY3RzL0RvdHMucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY2NlbnRcIj5Eb208L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgTGVlXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydC1yZWN0YW5nbGVcIiAvPlxuICAgICAgICA8aW1nIHNyYz17bG9nb30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0c1wiIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYW5jeS1yZWN0YW5nbGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgaW1hZ2U9e3N0YXJ0cGFnZX1cbiAgICAgICAgICB0aXRsZT1cIlN0YXJ0cGFnZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGlzIHdlYnNpdGUgaXMgbXkgZGVmYXVsdCBzdGFydHBhZ2UgdGhhdCBJIHNldCB0byBvcGVuIHdoZW4gSSBjcmVhdGUgYSBuZXcgdGFiIG9yIG5ldyBicm93c2VyIHdpbmRvdy4gSXQgY29udGFpbnMgaGVscGZ1bCBxdWljayBsaW5rcyBvZiBteSBtb3N0IGZyZXF1ZW50bHkgdmlzaXRlZCBzaXRlcy5cIlxuICAgICAgICAgIGxpbms9XCIvc3RhcnRwYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgaW1hZ2U9e2RvdHN9XG4gICAgICAgICAgdGl0bGU9XCJEb3RmaWxlc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJBcyBzb21lb25lIHdobyBpcyBvYnNlc3NlZCB3aXRoIG9wdGltaXppbmcgbXkgd29ya2Zsb3csIEkgYW0gYWx3YXlzIGltcHJvdmluZyBteSBkb3RmaWxlcy4gSWYgeW91J2QgbGlrZSB0byBjaGVjayB0aGVtIG91dCB5b3UgY2FuIGZvbGxvdyB0aGUgaW5zdGFsbGF0aW9uIGluc3RydWN0aW9ucyBpbiB0aGUgUkVBRE1FLm1kXCJcbiAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL2RvbW9nYW1pLy5kb3RmaWxlc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgIGltYWdlPXtvbGRzaXRlfVxuICAgICAgICAgIHRpdGxlPVwiTXkgT2xkIFdlYnNpdGVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyB3ZWJzaXRlIHdhcyBteSBmaXJzdCBldmVyIGF0dGVtcHQgYXQgbWFraW5nIGEgcmVhY3QganMgc2l0ZS4gSXQgd2FzIGJ1aWx0IHVzaW5nIEdhdHNieSBhbmQgZGVwbG95ZWQgd2l0aCBOZXRsaWZ5LiBJdCBpcyByZXNwb25zaXZlIGFuZCBzZXJ2ZWQgYXMgbXkgcHJldmlvdXMgcG9ydGZvbGlvLlwiXG4gICAgICAgICAgbGluaz1cImh0dHBzOi8vZG9taW5pY2tsZWUubmV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDYXJkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD1cInByb2plY3RfcGhvdG9cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhbmN5LWRpdmlkZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxlYXJuLW1vcmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBhcnJvd1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5saW5rfSBjbGFzc05hbWU9XCJidXR0b24tdGV4dFwiPlxuICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEhlYWRlciBmcm9tICd+L2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvYXBwLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gJ34vcG9zdCc7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCAnZXhwZWN0ZWQgcGFyYW1zLnNsdWcnKTtcbiAgcmV0dXJuIGdldFBvc3QocGFyYW1zLnNsdWcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsdWcoKSB7XG4gIGxldCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInBvc3REaXNwbGF5XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5odG1sIH19XG4gICAgLz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJ34vcG9zdC5qcyc7XG5pbXBvcnQgeyBMaW5rLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBsZXQgbG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9zdHMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBsZXQgcG9zdHMgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWhlcm9cIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGJyIC8+XG4gICAgICAgICAgbXkgPHNwYW4gY2xhc3NOYW1lPVwiYWNjZW50XCI+QmxvZzwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYW5jeS1yZWN0YW5nbGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxPk15IFJlbWl4IEJsb2c8L2gxPlxuICAgICAgPHA+Q2xpY2sgb24gdGhlIHBvc3QgbmFtZSB0byByZWFkIHRoZSBwb3N0PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RMaXN0XCIga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicG9zdFRpdGxlXCIgdG89e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD57JyAnfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFB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
