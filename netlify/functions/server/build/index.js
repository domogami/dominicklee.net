var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
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
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
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

// empty-module:~/components/editor.client
var require_editor = __commonJS({
  "empty-module:~/components/editor.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// empty-module:~/components/editorjsReact.client
var require_editorjsReact = __commonJS({
  "empty-module:~/components/editorjsReact.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/components/ThemeProvider.js
init_react();
var import_react2 = __toESM(require("react"));

// app/components/ThemeContext.js
init_react();
var import_react = __toESM(require("react"));
var initialThemeState = {
  theme: "Dark",
  setTheme: () => null
};
var ThemeContext = import_react.default.createContext(initialThemeState);
var ThemeContext_default = ThemeContext;

// app/components/ThemeProvider.js
var ThemeProvider = (props) => {
  const [theme, setTheme] = (0, import_react2.useState)(initialThemeState.theme);
  if (typeof document !== "undefined") {
    const localStorage2 = window.localStorage;
  }
  (0, import_react2.useEffect)(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      props.setTheme(savedThemeLocal);
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    localStorage.setItem("globalTheme", props.theme);
  }, [props.theme]);
  return /* @__PURE__ */ import_react2.default.createElement(ThemeContext_default.Provider, {
    value: { theme, setTheme }
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `theme--${props.theme}`
  }, props.children));
};
var ThemeProvider_default = ThemeProvider;

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/root.tsx
var import_react3 = require("react");
var meta = () => {
  return {
    title: "I'm Dominick Lee",
    description: "Everything Software Engineering",
    keywords: "Dominick,Lee",
    "twitter:image": "https://dominicklee.com/awesome.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@domogami",
    "twitter:site": "@dom3lee",
    "twitter:title": "Hey, I'm Dom",
    "twitter:description": "Everything Software Engineering"
  };
};
function App() {
  const [theme, setTheme] = (0, import_react3.useState)("Light");
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: `theme--${theme}`
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: `theme--${theme}`
  }, /* @__PURE__ */ React.createElement(ThemeProvider_default, {
    theme,
    setTheme
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, {
    context: [theme, setTheme]
  }), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null))));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/uploadImage.tsx
var uploadImage_exports = {};
__export(uploadImage_exports, {
  action: () => action
});
init_react();
var import_node = require("@remix-run/node");
var import_multer = __toESM(require("multer"));
var action = async ({ request }) => {
  const uploadM = (0, import_multer.default)({ dest: "uploads/" });
  uploadM.single("image");
  if (request.method !== "POST") {
    return (0, import_node.json)({ message: "Method not allowed" }, 405);
  }
  console.log(request.body);
  console.log("made it this far");
  console.log("Post Request Below");
  console.log("Request Body Below");
  return {
    success: 1,
    file: {
      url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg"
    }
  };
};

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx
var startpage_exports = {};
__export(startpage_exports, {
  default: () => Startpage,
  useDate: () => useDate
});
init_react();

// app/components/ThemeSetter.js
init_react();
var import_react4 = __toESM(require("react"));
function ThemeSetter(props) {
  const { theme, setTheme } = (0, import_react4.useContext)(ThemeContext_default);
  return /* @__PURE__ */ import_react4.default.createElement("select", {
    className: "theme-selector",
    value: props.theme,
    onChange: (e) => {
      setTheme(e.currentTarget.value);
      props.changeTheme(e.currentTarget.value);
    }
  }, themeOptions.map((option, idx) => /* @__PURE__ */ import_react4.default.createElement("option", {
    value: option.value,
    key: idx
  }, option.value)));
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage.tsx
var import_react5 = require("@remix-run/react");
var import_remix3 = __toESM(require_remix());
var import_react6 = __toESM(require("react"));
var useDate = () => {
  const locale = "en";
  const [today, setDate] = import_react6.default.useState(new Date());
  import_react6.default.useEffect(() => {
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
  const [theme, setTheme] = (0, import_react5.useOutletContext)();
  let todaysDate = useDate();
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "startpage-containter"
  }, /* @__PURE__ */ import_react6.default.createElement("h1", null, "Welcome Back ", /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "green-text"
  }, "Dom"), " "), /* @__PURE__ */ import_react6.default.createElement(import_remix3.Outlet, null), /* @__PURE__ */ import_react6.default.createElement("h2", {
    id: "date"
  }, todaysDate.date, " | ", todaysDate.time, " | ", todaysDate.wish, " |", " ", /* @__PURE__ */ import_react6.default.createElement(ThemeSetter, {
    theme,
    changeTheme: (theme2) => setTheme(theme2)
  })));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx
var startpage_exports2 = {};
__export(startpage_exports2, {
  default: () => Index,
  links: () => links
});
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-FAWUASLH.css";

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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/drinks.tsx
var drinks_exports = {};
__export(drinks_exports, {
  default: () => Drinks,
  links: () => links2
});
init_react();
var import_remix4 = __toESM(require_remix());
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/drinks/index.tsx
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links4,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/components/header.tsx
init_react();
var import_react7 = require("react");
var import_react_router_dom = require("react-router-dom");
function Header(props) {
  const [menuIsOpen, setMenuIsOpen] = (0, import_react7.useState)(false);
  const location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "header-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo_Transparent_default,
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/" ? "active" : "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#projects"
  }, " Projects")), /* @__PURE__ */ React.createElement("li", {
    className: location.pathname === "/blog" ? "active" : "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/blog"
  }, " Blog")), /* @__PURE__ */ React.createElement("li", {
    className: "non-active"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/#contact"
  }, " Contact"))), true ? /* @__PURE__ */ React.createElement(ThemeSetter, {
    theme: props.theme,
    changeTheme: props.changeTheme
  }) : /* @__PURE__ */ React.createElement("div", {
    className: `menu-btn${menuIsOpen ? " open" : ""}`,
    onClick: () => setMenuIsOpen(!menuIsOpen)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "menu-btn__burger"
  }))));
}

// app/post.ts
init_react();
var import_client = require("@prisma/client");
var import_marked = require("marked");
var prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  });
  let id = foundSlug.id;
  let coverUrl = foundSlug.coverUrl;
  let title = foundSlug.title;
  let html = (0, import_marked.marked)(foundSlug.markdown);
  let editorjs = foundSlug.editorjs;
  prisma.$disconnect();
  return { id, slug, coverUrl, title, html, editorjs };
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
  let coverUrl = foundSlug.coverUrl;
  let markdown = foundSlug.markdown;
  let editorjs = foundSlug.editorjs;
  prisma.$disconnect();
  return { id, slug, coverUrl, title, markdown, editorjs };
}
async function createPost(post) {
  await prisma.$connect();
  await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
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
      markdown: post.markdown,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin.tsx
var import_react8 = require("@remix-run/react");
var links4 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
var loader = () => {
  return getPosts();
};
function Admin(props) {
  let posts = (0, import_remix5.useLoaderData)();
  const [theme, setTheme] = (0, import_react8.useOutletContext)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    changeTheme: (theme2) => setTheme(theme2)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "admin-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "adminTitle"
  }, "Admin Dom"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("p", null, "Click on a post to edit the blog post"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: post.slug
  }, post.title)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)))));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/$edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action2,
  default: () => PostSlug,
  loader: () => loader2
});
init_react();
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_remix6 = __toESM(require_remix());
var import_editor = __toESM(require_editor());
var import_remix_utils = require("remix-utils");
var import_react9 = require("react");
var axios = require("axios").default;
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.edit, "expected params.edit");
  return getPostEdit(params.edit);
};
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let coverUrl = formData.get("coverUrl");
  let slug = formData.get("slug");
  let markdown = formData.get("markdown");
  let editorjs = formData.get("editorjs");
  let id = formData.get("id");
  console.log("Check the cover image");
  console.log(coverUrl);
  let errors = {};
  if (!title)
    errors.title = true;
  if (!coverUrl)
    errors.coverUrl = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (!editorjs)
    errors.editorjs = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  await updatePost({ id, title, coverUrl, slug, markdown, editorjs });
  return (0, import_remix6.redirect)("/admin");
};
function PostSlug() {
  let errors = (0, import_remix6.useActionData)();
  let transition = (0, import_remix6.useTransition)();
  let post = (0, import_remix6.useLoaderData)();
  const [savedData, setSavedData] = (0, import_react9.useState)("{}");
  const [coverUrl, setCoverUrl] = (0, import_react9.useState)(post.coverUrl);
  const [isSelected, setIsSelected] = (0, import_react9.useState)(false);
  const [selectedFile, setSelectedFile] = (0, import_react9.useState)("");
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
  return /* @__PURE__ */ React.createElement(import_remix6.Form, {
    reloadDocument: true,
    method: "post"
  }, /* @__PURE__ */ React.createElement("h1", null, "Edit Post"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("input", {
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
  }, "Post Cover: ", (errors == null ? void 0 : errors.coverUrl) && /* @__PURE__ */ React.createElement("em", null, "Cover is required"), " ", /* @__PURE__ */ React.createElement("input", {
    type: "file",
    name: "cover",
    value: selectedFile,
    onChange: imageUpload
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "hiddenBlogID"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "coverUrl",
    defaultValue: coverUrl
  }))), /* @__PURE__ */ React.createElement("img", {
    src: post.coverUrl
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: ""
  }, " ", "Post Slug: ", (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("em", null, "Slug is required"), /* @__PURE__ */ React.createElement("input", {
    defaultValue: post.slug,
    id: "slugInput",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown from editorjs:"), " ", (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("em", null, "Markdown is required"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_remix_utils.ClientOnly, null, () => /* @__PURE__ */ React.createElement(import_editor.default, {
    previousData: post.editorjs,
    saveOutput: savedData,
    save: (savedData2) => setSavedData(savedData2)
  })), /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: post.markdown,
    name: "markdown",
    id: ""
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, transition.submission ? "Updating..." : "Update Post")), /* @__PURE__ */ React.createElement("input", {
    defaultValue: post.editorjs,
    name: "editorjs",
    value: savedData,
    className: "hidenEditorField"
  }));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
init_react();
function AdminIndex() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "adminNewPostLink"
  }, /* @__PURE__ */ React.createElement("button", null, "Save Article"));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => NewPost
});
init_react();
var import_remix7 = __toESM(require_remix());
var action3 = async ({ request }) => {
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
  return (0, import_remix7.redirect)("/admin");
};
function NewPost() {
  let errors = (0, import_remix7.useActionData)();
  let transition = (0, import_remix7.useTransition)();
  let slug = "";
  const handleChange = (e) => {
    let text = e.target.value;
    slug = text.replace(/\s/g, "-");
    document.getElementById("slugInput").value = slug.toLowerCase();
  };
  return /* @__PURE__ */ React.createElement(import_remix7.Form, {
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links5
});
init_react();

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
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-bar"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", {
    className: "accent"
  }, "Dom"), /* @__PURE__ */ React.createElement("br", null), "Lee"), /* @__PURE__ */ React.createElement("div", {
    className: "vert-rectangle"
  })), /* @__PURE__ */ React.createElement("img", {
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

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx
var import_react10 = require("@remix-run/react");
var links5 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function IndexRoute(props) {
  const [theme, setTheme] = (0, import_react10.useOutletContext)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    theme,
    changeTheme: (theme2) => setTheme(theme2)
  }), /* @__PURE__ */ React.createElement(Home, null));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links6
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_react11 = require("@remix-run/react");
var links6 = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Blog() {
  const [theme, setTheme] = (0, import_react11.useOutletContext)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, {
    theme,
    changeTheme: (theme2) => setTheme(theme2)
  }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug2,
  loader: () => loader3
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_editorjsReact = __toESM(require_editorjsReact());
var import_remix_utils2 = require("remix-utils");
var loader3 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug2() {
  let post = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix_utils2.ClientOnly, null, () => /* @__PURE__ */ React.createElement(import_editorjsReact.default, {
    previousData: post.editorjs
  })));
}

// route:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Index3,
  loader: () => loader4
});
init_react();
var import_remix10 = __toESM(require_remix());
var loader4 = () => {
  return getPosts();
};
function Index3() {
  let posts = (0, import_remix10.useLoaderData)();
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
  }))), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "postList",
    key: post.slug
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.coverUrl
  }), /* @__PURE__ */ React.createElement(import_remix10.Link, {
    className: "postTitle",
    to: post.slug
  }, post.title)))), " ");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d06f0b9c", "entry": { "module": "/build/entry.client-QKNVWLXS.js", "imports": ["/build/_shared/chunk-6Q7PDDRW.js", "/build/_shared/chunk-LPE6EWJY.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3REKOFWB.js", "imports": ["/build/_shared/chunk-52ZSK2PT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-RNA7FU7P.js", "imports": ["/build/_shared/chunk-HIDSZJQ5.js", "/build/_shared/chunk-XVPQ3L2I.js", "/build/_shared/chunk-FS5VCY3N.js", "/build/_shared/chunk-DSGEGN74.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/$edit": { "id": "routes/admin/$edit", "parentId": "routes/admin", "path": ":edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/$edit-D3PHGR32.js", "imports": ["/build/_shared/chunk-ITZ5GJUX.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "routes/admin", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-HTW6RWE5.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/new": { "id": "routes/admin/new", "parentId": "routes/admin", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/new-JEWDR3PE.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog-E5T4IGVD.js", "imports": ["/build/_shared/chunk-HIDSZJQ5.js", "/build/_shared/chunk-XVPQ3L2I.js", "/build/_shared/chunk-FS5VCY3N.js", "/build/_shared/chunk-DSGEGN74.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "routes/blog", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-2ON3NH4S.js", "imports": ["/build/_shared/chunk-ITZ5GJUX.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "routes/blog", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-VCVFYH7M.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drinks": { "id": "routes/drinks", "parentId": "root", "path": "drinks", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/drinks-6ENW62H5.js", "imports": ["/build/_shared/chunk-DSGEGN74.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drinks/index": { "id": "routes/drinks/index", "parentId": "routes/drinks", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/drinks/index-5IF2R5RY.js", "imports": ["/build/_shared/chunk-FS5VCY3N.js", "/build/_shared/chunk-52ZSK2PT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZAW6MHK4.js", "imports": ["/build/_shared/chunk-HIDSZJQ5.js", "/build/_shared/chunk-XVPQ3L2I.js", "/build/_shared/chunk-FS5VCY3N.js", "/build/_shared/chunk-DSGEGN74.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/startpage": { "id": "routes/startpage", "parentId": "root", "path": "startpage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/startpage-BI55XU7A.js", "imports": ["/build/_shared/chunk-FS5VCY3N.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/startpage/index": { "id": "routes/startpage/index", "parentId": "routes/startpage", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/startpage/index-JOJFDC4B.js", "imports": ["/build/_shared/chunk-XVPQ3L2I.js", "/build/_shared/chunk-DSGEGN74.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/uploadImage": { "id": "routes/uploadImage", "parentId": "root", "path": "uploadImage", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/uploadImage-MVDLJ74W.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D06F0B9C.js" };

// server-entry-module:@remix-run/dev/server-build
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
  "routes/uploadImage": {
    id: "routes/uploadImage",
    parentId: "root",
    path: "uploadImage",
    index: void 0,
    caseSensitive: void 0,
    module: uploadImage_exports
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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
