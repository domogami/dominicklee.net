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
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement(ThemeProvider_default, null, /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null))));
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
var app_default = "/build/_assets/app-ZOZKF5A5.css";

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
  default: () => Blog
});
init_react();
var import_remix5 = __toModule(require_remix());
function Blog() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Blog"), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}

// route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Index3
});
init_react();
function Index3() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Index Route"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1RoZW1lUHJvdmlkZXIuanMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvVGhlbWVDb250ZXh0LmpzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9UaGVtZVNldHRlci5qcyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL3N0YXJ0cGFnZS9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc3RhcnRwYWdlR3JpZEl0ZW0udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvcm91dGVzL2RyaW5rcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcGFnZXMvaG9tZS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvcHJvamVjdENhcmQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYmxvZy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2RvbS9Eb2N1bWVudHMvR2l0SHViL2RvbWluaWNrbGVlLm5ldC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvc3RhcnRwYWdlL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvZHJpbmtzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9kb20vRG9jdW1lbnRzL0dpdEh1Yi9kb21pbmlja2xlZS5uZXQvYXBwL3JvdXRlcy9ibG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvZG9tL0RvY3VtZW50cy9HaXRIdWIvZG9taW5pY2tsZWUubmV0L2FwcC9yb3V0ZXMvYmxvZy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3N0YXJ0cGFnZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3N0YXJ0cGFnZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInN0YXJ0cGFnZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3N0YXJ0cGFnZS9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3N0YXJ0cGFnZS9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9zdGFydHBhZ2VcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2RyaW5rc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RyaW5rc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImRyaW5rc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2RyaW5rcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RyaW5rcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kcmlua3NcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9ibG9nXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZ1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2dcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9ibG9nL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvVGhlbWVQcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkknbSBEb21pbmljayBMZWVcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgIi8vIFRoZW1lUHJvdmlkZXIuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lQ29udGV4dCwgeyBpbml0aWFsVGhlbWVTdGF0ZSB9IGZyb20gJy4vVGhlbWVDb250ZXh0JztcblxuY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShpbml0aWFsVGhlbWVTdGF0ZS50aGVtZSk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkVGhlbWVMb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnbG9iYWxUaGVtZScpO1xuXG4gICAgaWYgKCEhc2F2ZWRUaGVtZUxvY2FsKSB7XG4gICAgICBzZXRUaGVtZShzYXZlZFRoZW1lTG9jYWwpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dsb2JhbFRoZW1lJywgdGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0aGVtZS0tJHt0aGVtZX1gfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyO1xuIiwgIi8vIFRoZW1lQ29udGV4dC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxUaGVtZVN0YXRlID0ge1xuICB0aGVtZTogJ0RhcmsnLFxuICBzZXRUaGVtZTogKCkgPT4gbnVsbCxcbn07XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoaW5pdGlhbFRoZW1lU3RhdGUpO1xuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0O1xuIiwgImltcG9ydCBUaGVtZVNldHRlciBmcm9tICcuLi9jb21wb25lbnRzL1RoZW1lU2V0dGVyJztcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgdXNlRGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYWxlID0gJ2VuJztcbiAgY29uc3QgW3RvZGF5LCBzZXREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCkpOyAvLyBTYXZlIHRoZSBjdXJyZW50IGRhdGUgdG8gYmUgYWJsZSB0byB0cmlnZ2VyIGFuIHVwZGF0ZVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBDcmVhdGVzIGFuIGludGVydmFsIHdoaWNoIHdpbGwgdXBkYXRlIHRoZSBjdXJyZW50IGRhdGEgZXZlcnkgbWludXRlXG4gICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhIHJlcmVuZGVyIGV2ZXJ5IGNvbXBvbmVudCB0aGF0IHVzZXMgdGhlIHVzZURhdGUgaG9vay5cbiAgICAgIHNldERhdGUobmV3IERhdGUoKSk7XG4gICAgfSwgNjAgKiAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IC8vIFJldHVybiBhIGZ1bnRpb24gdG8gY2xlYXIgdGhlIHRpbWVyIHNvIHRoYXQgaXQgd2lsbCBzdG9wIGJlaW5nIGNhbGxlZCBvbiB1bm1vdW50XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRheSA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICBjb25zdCBkYXRlID0gYCR7ZGF5fSwgJHt0b2RheS5nZXREYXRlKCl9ICR7dG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZSwge1xuICAgIG1vbnRoOiAnbG9uZycsXG4gIH0pfVxcblxcbmA7XG5cbiAgY29uc3QgaG91ciA9IHRvZGF5LmdldEhvdXJzKCk7XG4gIGNvbnN0IHdpc2ggPSBgR29vZCAke1xuICAgIChob3VyIDwgMTIgJiYgJ01vcm5pbmcnKSB8fCAoaG91ciA8IDE3ICYmICdBZnRlcm5vb24nKSB8fCAnRXZlbmluZydcbiAgfSBgO1xuXG4gIGNvbnN0IHRpbWUgPSB0b2RheS50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIGhvdXIxMjogdHJ1ZSxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlLFxuICAgIHRpbWUsXG4gICAgd2lzaCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0cGFnZSgpIHtcbiAgbGV0IHRvZGF5c0RhdGUgPSB1c2VEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydHBhZ2UtY29udGFpbnRlclwiPlxuICAgICAgPGgxPlxuICAgICAgICBXZWxjb21lIEJhY2sgPHNwYW4gY2xhc3NOYW1lPVwiZ3JlZW4tdGV4dFwiPkRvbTwvc3Bhbj57JyAnfVxuICAgICAgPC9oMT5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxoMiBpZD1cImRhdGVcIj5cbiAgICAgICAge3RvZGF5c0RhdGUuZGF0ZX0gfCB7dG9kYXlzRGF0ZS50aW1lfSB8IHt0b2RheXNEYXRlLndpc2h9IHx7JyAnfVxuICAgICAgICA8VGhlbWVTZXR0ZXIgLz5cbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiLy9UaGVtZVNldHRlci5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi9UaGVtZUNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZVNldHRlcigpIHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxzZWxlY3RcbiAgICAgIGNsYXNzTmFtZT1cInRoZW1lLXNlbGVjdG9yXCJcbiAgICAgIHZhbHVlPXt0aGVtZX1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICA+XG4gICAgICB7dGhlbWVPcHRpb25zLm1hcCgob3B0aW9uLCBpZHgpID0+IChcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9uLnZhbHVlfSBrZXk9e2lkeH0+XG4gICAgICAgICAge29wdGlvbi52YWx1ZX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX1cbiAgICA8L3NlbGVjdD5cbiAgKTtcbn1cblxuY29uc3QgdGhlbWVPcHRpb25zID0gW3sgdmFsdWU6ICdMaWdodCcgfSwgeyB2YWx1ZTogJ0RhcmsnIH1dO1xuIiwgImltcG9ydCBzdHlsZXNVcmwgZnJvbSAnfi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgc3RhcnRwYWdlSW1hZ2UgZnJvbSAnfi9pbWFnZXMvTG9nb19UcmFuc3BhcmVudC5zdmcnO1xuaW1wb3J0IFN0YXJ0cGFnZUdyaWRJdGVtIGZyb20gJ34vY29tcG9uZW50cy9zdGFydHBhZ2VHcmlkSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgc2VjdGlvbk9uZSA9IFtcbiAgICB7IG5hbWU6ICdzdGFjaycsIGxpbms6ICdodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tLycgfSxcbiAgICB7IG5hbWU6ICdnb29nbGUnLCBsaW5rOiAnaHR0cHM6Ly9nb29nbGUuY29tJyB9LFxuICAgIHsgbmFtZTogJ2RvbScsIGxpbms6ICdsb2NhbGhvc3Q6MzAwMC8nIH0sXG4gIF07XG4gIGNvbnN0IHNlY3Rpb25Ud28gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2FtYXpvbicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuYW1hem9udW5pdmVyc2l0eS5qb2JzL2NvbW11bml0eWxvZ2luJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzZWF0dGxlJyxcbiAgICAgIGxpbms6ICdodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xc3ZNWDFKdlhDY29qdWxDdjRMUEJCNVlMOXdwaVFzWEQxcl9sNC14U2g0VS9lZGl0P3VzcD1zaGFyaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb21tdXRlJyxcbiAgICAgIGxpbms6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZGlyLy9JbnN0aXR1dGUrRm9yK1N5c3RlbXMrQmlvbG9neSwrNDAxK1RlcnJ5K0F2ZStOLCtTZWF0dGxlLCtXQSs5ODEwOS9ANDcuNjIxOTg1OSwtMTIyLjM0MDYyOTksMTV6L2RhdGE9ITNtMSE0YjEhNG0xMyE0bTEyITFtMCExbTUhMW0xITFzMHg1NDkwMTUwMjQyYWNhYjc1OjB4NWI4ZjRlNGIwZjBiNTM1MCEybTIhMWQtMTIyLjMzNzM5NTYhMmQ0Ny42MjIzOTI2ITJtMyE2ZTAhN2UyIThqMTY1MjY4ODAwMCEzZTAnLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHNlY3Rpb25UaHJlZSA9IFtcbiAgICB7IG5hbWU6ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tJyB9LFxuICAgIHsgbmFtZTogJ2RvdHMnLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2RvbW9nYW1pLy5kb3RmaWxlcycgfSxcbiAgICB7IG5hbWU6ICd3ZWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2RvbW9nYW1pL2RvbWluaWNrbGVlLm5ldCcgfSxcbiAgXTtcbiAgY29uc3Qgc2VjdGlvbkZvdXIgPSBbXG4gICAgeyBuYW1lOiAneW91dHViZScsIGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tJyB9LFxuICAgIHsgbmFtZTogJ3JlZGRpdCcsIGxpbms6ICdodHRwczovL3JlZGRpdC5jb20nIH0sXG4gICAgeyBuYW1lOiAndW5peHBvcm4nLCBsaW5rOiAnaHR0cHM6Ly9yZWRkaXQuY29tL3IvdW5peHBvcm4nIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGFydHBhZ2UtaGVyby1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhcnRwYWdlLWhlcm9cIj5cbiAgICAgICAgPGltZyBzcmM9e3N0YXJ0cGFnZUltYWdlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0cGFnZS1ncmlkXCI+XG4gICAgICAgICAgPFN0YXJ0cGFnZUdyaWRJdGVtIHRpdGxlPVwifi9kZXZcIiBsaW5rcz17c2VjdGlvbk9uZX0gLz5cbiAgICAgICAgICA8U3RhcnRwYWdlR3JpZEl0ZW0gdGl0bGU9XCJ+L3dvcmtcIiBsaW5rcz17c2VjdGlvblR3b30gLz5cbiAgICAgICAgICA8U3RhcnRwYWdlR3JpZEl0ZW0gdGl0bGU9XCJ+L2NvZGVcIiBsaW5rcz17c2VjdGlvblRocmVlfSAvPlxuICAgICAgICAgIDxTdGFydHBhZ2VHcmlkSXRlbSB0aXRsZT1cIn4vZnVuXCIgbGlua3M9e3NlY3Rpb25Gb3VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJ0cGFnZUdyaWRJdGVtKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5saW5rcy5tYXAoZnVuY3Rpb24gKGQsIGlkeCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtkLmxpbmt9PntkLm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9hcHAuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyaW5rcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaW5rcy1jb250YWludGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZHJpbmtzLXRpdGxlXCI+TWF4J3MgRHJpbmtzPC9oMT5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzVXJsIGZyb20gJ34vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IFRoZW1lU2V0dGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGhlbWVTZXR0ZXInO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmlua3NcIj5cbiAgICAgIDxUaGVtZVNldHRlciBjbGFzc05hbWU9XCJkcmlua3MtdGhlbWUtc2V0dGVyXCIgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+QmVhY2ggZG9nPC9oMj5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPjEvMiBveiAtIEFtbWFyZXR0bzwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gTWFsaWJ1IFBpbmVhcHBsZTwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gS2FsdWE8L2xpPlxuICAgICAgICA8bGk+U2hha2Ugd2l0aCBjcnVzaGVkIGljZTwvbGk+XG4gICAgICAgIDxsaT5Ub3Agd2l0aCAyIG96IG9mIGNoaWxsZWQgTml0cm8gUGVwc2kgZnJlc2hseSBwb3VyZWQ8L2xpPlxuICAgICAgPC9vbD5cblxuICAgICAgPGgyIGNsYXNzTmFtZT1cImRyaW5rLW5hbWVcIj5EZWF0aCB0byBCYXlzaG9yZTwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4xIDEvMiBveiAtIFBlYWNoIHNjaG5hcHBzPC9saT5cbiAgICAgICAgPGxpPjEgMS8yIG96IC0gd2F0ZXJtZWxsb24gbGlxdWVyPC9saT5cbiAgICAgICAgPGxpPjEvMiBveiAtIEJvdXJib248L2xpPlxuICAgICAgICA8bGk+MS8yIG96IC0gU2ltcGxlIFN5cnVwPC9saT5cbiAgICAgIDwvb2w+XG5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+Qmx1c2hpbmcgVGhpY2tldDwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4yb3ogLSBSb3NlPC9saT5cbiAgICAgICAgPGxpPjFveiAtIEJsYWNrYmVycnkgU3lydXA8L2xpPlxuICAgICAgICA8bGk+MS8yIG96IFBlYWNoIFNjaG5hcHBzPC9saT5cbiAgICAgIDwvb2w+XG5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+SXJpc2ggR3Jhc3Nob3BwZXI8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MS80IG96IC0gS2FobHVhPC9saT5cbiAgICAgICAgPGxpPjEgb3ogLSBDcmVtZSBkZSBNZW50aGU8L2xpPlxuICAgICAgICA8bGk+U2hha2Ugd2l0aCBjdWJlZCBpY2U8L2xpPlxuICAgICAgICA8bGk+UG91ciBvdmVyIDJveiBjYXJvbGFuczwvbGk+XG4gICAgICA8L29sPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPlN0LiBDdXRoYmVydDwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4xIG96IC0gUGVhY2ggU2NobmFwcHM8L2xpPlxuICAgICAgICA8bGk+MS80IG96IC0gVHJpcGxlIFNlYzwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gQXBwbGUgQnJhbmR5PC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIERyeSBHaW48L2xpPlxuICAgICAgICA8bGk+U2hha2Ugd2l0aCBjcnVzaGVkIGljZSBhbmQgc3RyYWluPC9saT5cbiAgICAgIDwvb2w+XG5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJkcmluay1uYW1lXCI+QWxtb25kIENvb2tpZTwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4xIDEvMiBveiAtIEFtbWFyZXR0bzwvbGk+XG4gICAgICAgIDxsaT4yIG96IC0gQWxtb25kIG1pbGs8L2xpPlxuICAgICAgICA8bGk+U2hha2Ugb3ZlciBpY2U8L2xpPlxuICAgICAgICA8bGk+R2FybmlzaCB3aXRoIGEgYmFyIHNwb29uIG9mIGNyZW1lIGRlIG1lbnRoZSBhbmQgY2luYW1vbjwvbGk+XG4gICAgICA8L29sPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPk5vIE5hbWU8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MiBveiAtIE9yYW5nZSBKdWljZTwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gQ3JlbWUgZGUgTWVudGhlPC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIEdpbjwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImRyaW5rLW5hbWVcIj5GcnVpdCBTYWxhZDwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT4xLzQgb3ogLSBQaW5lYXBwbGUgSnVpY2U8L2xpPlxuICAgICAgICA8bGk+MS80IG96IC0gRnJlc2ggT3JhbmdlIEp1aWNlPC9saT5cbiAgICAgICAgPGxpPjEvNCBveiAtIEZyZXNoIExpbWU8L2xpPlxuICAgICAgICA8bGk+MSBveiAtIEJyYW5keTwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gR29sZCBLdW08L2xpPlxuICAgICAgICA8bGk+MS80IG96IC0gTWFsaWJ1PC9saT5cbiAgICAgICAgPGxpPkRhc2ggb2Ygb3JhbmdlIGJpdHRlcnM8L2xpPlxuICAgICAgICA8bGk+U2hha2Ugd2l0aCBjcnVzaGVkIGljZTwvbGk+XG4gICAgICAgIDxsaT5TZXJ2ZSB3aXRoIG11dHRsZWQgbWludCBhcyBnYXJuaXNoPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiZHJpbmstbmFtZVwiPkxhIFZlbnR1cmE8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+MSBveiAtIE1hbGlidTwvbGk+XG4gICAgICAgIDxsaT4xIG96IC0gTWFsaWJ1IFBpbmVhcHBsZTwvbGk+XG4gICAgICAgIDxsaT4xLzQgb3ogLSBCbHVlIEN1cmFzYW88L2xpPlxuICAgICAgICA8bGk+MSBveiBUcmlwbGUgU2VjPC9saT5cbiAgICAgICAgPGxpPjEgMS8yIG96IC0gQmFuYW5hIFN5cnVwPC9saT5cbiAgICAgIDwvb2w+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHN0eWxlc1VybCBmcm9tICd+L3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnfi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICd+L3BhZ2VzL2hvbWUnO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzVXJsIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhSb3V0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEhvbWUgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgTG9nbyBmcm9tICcuLi9pbWFnZXMvTG9nb19UcmFuc3BhcmVudC5zdmcnO1xuaW1wb3J0IFRoZW1lU2V0dGVyIGZyb20gJy4vVGhlbWVTZXR0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21lbnVJc09wZW4sIHNldE1lbnVJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vbi1hY3RpdmVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI3Byb2plY3RzXCI+IFByb2plY3RzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vbi1hY3RpdmVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiPiBCbG9nPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vbi1hY3RpdmVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvI2NvbnRhY3RcIj4gQ29udGFjdDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7dHJ1ZSA/IChcbiAgICAgICAgICA8VGhlbWVTZXR0ZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtZW51LWJ0biR7bWVudUlzT3BlbiA/ICcgb3BlbicgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudUlzT3BlbighbWVudUlzT3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWJ0bl9fYnVyZ2VyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnfi9jb21wb25lbnRzL3Byb2plY3RDYXJkJztcbmltcG9ydCBoZXhhZ29uIGZyb20gJ34vaW1hZ2VzL2hleGFnb24uc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJ34vaW1hZ2VzL0xvZ29fVHJhbnNwYXJlbnQuc3ZnJztcbmltcG9ydCBzdGFydHBhZ2UgZnJvbSAnfi9pbWFnZXMvcHJvamVjdHMvU3RhcnRwYWdlLnBuZyc7XG5pbXBvcnQgb2xkc2l0ZSBmcm9tICd+L2ltYWdlcy9wcm9qZWN0cy9PbGRTaXRlLnBuZyc7XG5pbXBvcnQgZG90cyBmcm9tICd+L2ltYWdlcy9wcm9qZWN0cy9Eb3RzLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWNjZW50XCI+RG9tPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIExlZVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnQtcmVjdGFuZ2xlXCIgLz5cbiAgICAgICAgPGltZyBzcmM9e2xvZ299IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIiBpZD1cInByb2plY3RzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFuY3ktcmVjdGFuZ2xlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgIGltYWdlPXtzdGFydHBhZ2V9XG4gICAgICAgICAgdGl0bGU9XCJTdGFydHBhZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyB3ZWJzaXRlIGlzIG15IGRlZmF1bHQgc3RhcnRwYWdlIHRoYXQgSSBzZXQgdG8gb3BlbiB3aGVuIEkgY3JlYXRlIGEgbmV3IHRhYiBvciBuZXcgYnJvd3NlciB3aW5kb3cuIEl0IGNvbnRhaW5zIGhlbHBmdWwgcXVpY2sgbGlua3Mgb2YgbXkgbW9zdCBmcmVxdWVudGx5IHZpc2l0ZWQgc2l0ZXMuXCJcbiAgICAgICAgICBsaW5rPVwiL3N0YXJ0cGFnZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgIGltYWdlPXtkb3RzfVxuICAgICAgICAgIHRpdGxlPVwiRG90ZmlsZXNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXMgc29tZW9uZSB3aG8gaXMgb2JzZXNzZWQgd2l0aCBvcHRpbWl6aW5nIG15IHdvcmtmbG93LCBJIGFtIGFsd2F5cyBpbXByb3ZpbmcgbXkgZG90ZmlsZXMuIElmIHlvdSdkIGxpa2UgdG8gY2hlY2sgdGhlbSBvdXQgeW91IGNhbiBmb2xsb3cgdGhlIGluc3RhbGxhdGlvbiBpbnN0cnVjdGlvbnMgaW4gdGhlIFJFQURNRS5tZFwiXG4gICAgICAgICAgbGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb21vZ2FtaS8uZG90ZmlsZXNcIlxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICBpbWFnZT17b2xkc2l0ZX1cbiAgICAgICAgICB0aXRsZT1cIk15IE9sZCBXZWJzaXRlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgd2Vic2l0ZSB3YXMgbXkgZmlyc3QgZXZlciBhdHRlbXB0IGF0IG1ha2luZyBhIHJlYWN0IGpzIHNpdGUuIEl0IHdhcyBidWlsdCB1c2luZyBHYXRzYnkgYW5kIGRlcGxveWVkIHdpdGggTmV0bGlmeS4gSXQgaXMgcmVzcG9uc2l2ZSBhbmQgc2VydmVkIGFzIG15IHByZXZpb3VzIHBvcnRmb2xpby5cIlxuICAgICAgICAgIGxpbms9XCJodHRwczovL2RvbWluaWNrbGVlLm5ldFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJwcm9qZWN0X3Bob3RvXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYW5jeS1kaXZpZGVyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxuICAgICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZWFybi1tb3JlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gYXJyb3dcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMubGlua30gY2xhc3NOYW1lPVwiYnV0dG9uLXRleHRcIj5cbiAgICAgICAgICAgICAgICBMZWFybiBNb3JlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5JbmRleCBSb3V0ZTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4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
