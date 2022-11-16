var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// empty-module:~/components/editor.client
var require_editor = __commonJS({
  "empty-module:~/components/editor.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:~/components/editorjsReact.client
var require_editorjsReact = __commonJS({
  "empty-module:~/components/editorjsReact.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_remix2 = __toESM(require_dist());

// app/components/ThemeProvider.js
var import_react2 = require("react");

// app/components/ThemeContext.js
var import_react = __toESM(require("react")), initialThemeState = {
  theme: "Dark",
  setTheme: () => null
}, ThemeContext = import_react.default.createContext(initialThemeState), ThemeContext_default = ThemeContext;

// app/components/ThemeProvider.js
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThemeProvider = (props) => {
  let [theme, setTheme] = (0, import_react2.useState)(initialThemeState.theme);
  if (typeof document < "u") {
    let localStorage2 = window.localStorage;
  }
  return (0, import_react2.useEffect)(() => {
    let savedThemeLocal = localStorage.getItem("globalTheme");
    savedThemeLocal && props.setTheme(savedThemeLocal);
  }, []), (0, import_react2.useEffect)(() => {
    localStorage.setItem("globalTheme", props.theme);
  }, [props.theme]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext_default.Provider, {
    value: { theme, setTheme },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `theme--${props.theme}`,
      children: props.children
    }, void 0, !1, {
      fileName: "app/components/ThemeProvider.js",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/ThemeProvider.js",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}, ThemeProvider_default = ThemeProvider;

// app/root.tsx
var import_react3 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  title: "I'm Dominick Lee",
  description: "Everything Software Engineering",
  keywords: "Dominick,Lee",
  "twitter:image": "https://dominicklee.com/awesome.png",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@domogami",
  "twitter:site": "@dom3lee",
  "twitter:title": "Hey, I'm Dom",
  "twitter:description": "Everything Software Engineering"
});
function App() {
  let [theme, setTheme] = (0, import_react3.useState)("Light");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: `theme--${theme}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: `theme--${theme}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider_default, {
          theme,
          setTheme,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Outlet, {
              context: [theme, setTheme]
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 41,
              columnNumber: 54
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/startpage.tsx
var startpage_exports = {};
__export(startpage_exports, {
  default: () => Startpage,
  useDate: () => useDate
});

// app/components/ThemeSetter.js
var import_react4 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ThemeSetter(props) {
  let { theme, setTheme } = (0, import_react4.useContext)(ThemeContext_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
    className: "theme-selector",
    value: props.theme,
    onChange: (e) => {
      setTheme(e.currentTarget.value), props.changeTheme(e.currentTarget.value);
    },
    children: themeOptions.map((option, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
      value: option.value,
      children: option.value
    }, idx, !1, {
      fileName: "app/components/ThemeSetter.js",
      lineNumber: 20,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/components/ThemeSetter.js",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var themeOptions = [{ value: "Light" }, { value: "Dark" }];

// app/routes/startpage.tsx
var import_react5 = require("@remix-run/react"), import_remix3 = __toESM(require_dist()), import_react6 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), useDate = () => {
  let locale = "en", [today, setDate] = import_react6.default.useState(new Date());
  import_react6.default.useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date());
    }, 6e4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  let date = `${today.toLocaleDateString(locale, { weekday: "long" })}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long"
  })}

`, hour = today.getHours(), wish = `Good ${hour < 12 && "Morning" || hour < 17 && "Afternoon" || "Evening"} `, time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: !0,
    minute: "numeric"
  });
  return {
    date,
    time,
    wish
  };
};
function Startpage() {
  let [theme, setTheme] = (0, import_react5.useOutletContext)(), todaysDate = useDate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "startpage-containter",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: [
          "Welcome Back ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "green-text",
            children: "Dom"
          }, void 0, !1, {
            fileName: "app/routes/startpage.tsx",
            lineNumber: 55,
            columnNumber: 22
          }, this),
          " "
        ]
      }, void 0, !0, {
        fileName: "app/routes/startpage.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix3.Outlet, {}, void 0, !1, {
        fileName: "app/routes/startpage.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        id: "date",
        children: [
          todaysDate.date,
          " | ",
          todaysDate.time,
          " | ",
          todaysDate.wish,
          " |",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeSetter, {
            theme,
            changeTheme: (theme2) => setTheme(theme2)
          }, void 0, !1, {
            fileName: "app/routes/startpage.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/startpage.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/startpage.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/startpage/index.tsx
var startpage_exports2 = {};
__export(startpage_exports2, {
  default: () => Index,
  links: () => links
});

// app/styles/app.css
var app_default = "/build/_assets/app-QARIKEQX.css";

// app/images/Logo_Transparent.svg
var Logo_Transparent_default = "/build/_assets/Logo_Transparent-HXC24UL2.svg";

// app/components/startpageGridItem.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function StartpageGridItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid-item-container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
        children: props.title
      }, void 0, !1, {
        fileName: "app/components/startpageGridItem.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: props.links.map(function(d, idx) {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: d.link,
              children: d.name
            }, void 0, !1, {
              fileName: "app/components/startpageGridItem.tsx",
              lineNumber: 9,
              columnNumber: 15
            }, this)
          }, idx, !1, {
            fileName: "app/components/startpageGridItem.tsx",
            lineNumber: 8,
            columnNumber: 13
          }, this);
        })
      }, void 0, !1, {
        fileName: "app/components/startpageGridItem.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/startpageGridItem.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/startpage/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "startpage-hero-container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "startpage-hero",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: Logo_Transparent_default
        }, void 0, !1, {
          fileName: "app/routes/startpage/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "startpage-grid",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StartpageGridItem, {
              title: "~/dev",
              links: [
                { name: "stack", link: "https://stackoverflow.com/" },
                { name: "google", link: "https://google.com" },
                { name: "dom", link: "localhost:3000/" }
              ]
            }, void 0, !1, {
              fileName: "app/routes/startpage/index.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StartpageGridItem, {
              title: "~/work",
              links: [
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
              ]
            }, void 0, !1, {
              fileName: "app/routes/startpage/index.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StartpageGridItem, {
              title: "~/code",
              links: [
                { name: "github", link: "https://github.com" },
                { name: "dots", link: "https://github.com/domogami/.dotfiles" },
                { name: "web", link: "https://github.com/domogami/dominicklee.net" }
              ]
            }, void 0, !1, {
              fileName: "app/routes/startpage/index.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StartpageGridItem, {
              title: "~/fun",
              links: [
                { name: "youtube", link: "https://youtube.com" },
                { name: "reddit", link: "https://reddit.com" },
                { name: "unixporn", link: "https://reddit.com/r/unixporn" }
              ]
            }, void 0, !1, {
              fileName: "app/routes/startpage/index.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/startpage/index.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/startpage/index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/startpage/index.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/drinks.tsx
var drinks_exports = {};
__export(drinks_exports, {
  default: () => Drinks,
  links: () => links2
});
var import_remix4 = __toESM(require_dist());
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: app_default }];
function Drinks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "drinks-containter",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "drinks-title",
        children: "Max's Drinks"
      }, void 0, !1, {
        fileName: "app/routes/drinks.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/drinks.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/drinks.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/drinks/index.tsx
var drinks_exports2 = {};
__export(drinks_exports2, {
  default: () => Index2,
  links: () => links3
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: app_default }];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "drinks",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeSetter, {
        className: "drinks-theme-setter"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Beach dog"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/2 oz - Ammaretto"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Malibu Pineapple"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Kalua"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Shake with crushed ice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Top with 2 oz of chilled Nitro Pepsi freshly poured"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Death to Bayshore"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 1/2 oz - Peach schnapps"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 1/2 oz - watermellon liquer"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/2 oz - Bourbon"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/2 oz - Simple Syrup"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Blushing Thicket"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "2oz - Rose"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1oz - Blackberry Syrup"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/2 oz Peach Schnapps"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Irish Grasshopper"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Kahlua"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Creme de Menthe"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Shake with cubed ice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Pour over 2oz carolans"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "St. Cuthbert"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Peach Schnapps"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Triple Sec"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Apple Brandy"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Dry Gin"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Shake with crushed ice and strain"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Almond Cookie"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 1/2 oz - Ammaretto"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "2 oz - Almond milk"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Shake over ice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Garnish with a bar spoon of creme de menthe and cinamon"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "No Name"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "2 oz - Orange Juice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Creme de Menthe"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Gin"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "Fruit Salad"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Pineapple Juice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Fresh Orange Juice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Fresh Lime"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Brandy"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Gold Kum"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Malibu"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Dash of orange bitters"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Shake with crushed ice"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "Serve with muttled mint as garnish"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "drink-name",
        children: "La Ventura"
      }, void 0, !1, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Malibu"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz - Malibu Pineapple"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1/4 oz - Blue Curasao"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 oz Triple Sec"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: "1 1/2 oz - Banana Syrup"
          }, void 0, !1, {
            fileName: "app/routes/drinks/index.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/drinks/index.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/drinks/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links4,
  loader: () => loader
});
var import_remix5 = __toESM(require_dist());

// app/components/header.tsx
var import_react7 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Header(props) {
  let [menuIsOpen, setMenuIsOpen] = (0, import_react7.useState)(!1), location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "header-container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "header",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: Logo_Transparent_default,
          alt: "logo"
        }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: location.pathname === "/" ? "active" : "non-active",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/",
                children: "Home"
              }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 15,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "non-active",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/#projects",
                children: " Projects"
              }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 18,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 17,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: location.pathname.includes("/blog") ? "active" : "non-active",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/blog",
                children: " Blog"
              }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 25,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "non-active",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "/#contact",
                children: " Contact"
              }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 28,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/header.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/header.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeSetter, {
          theme: props.theme,
          changeTheme: props.changeTheme
        }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/post.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, coverUrl = foundSlug.coverUrl, title = foundSlug.title, description = foundSlug.description, editorjs = foundSlug.editorjs;
  return prisma.$disconnect(), { id, slug, coverUrl, title, description, editorjs };
}
async function getPostEdit(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, title = foundSlug.title, coverUrl = foundSlug.coverUrl, description = foundSlug.description, editorjs = foundSlug.editorjs;
  return prisma.$disconnect(), { id, slug, coverUrl, title, description, editorjs };
}
async function createPost(post) {
  return await prisma.$connect(), await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function updatePost(post) {
  return await prisma.$connect(), console.log("updatePost id", post.id), await prisma.posts.update({
    where: {
      id: post.id
    },
    data: {
      title: post.title,
      slug: post.slug,
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function getPosts() {
  await prisma.$connect();
  let allPosts = await prisma.posts.findMany();
  return prisma.$disconnect(), allPosts;
}

// app/routes/admin.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: app_default }], loader = () => getPosts();
function Admin(props) {
  let posts = (0, import_remix5.useLoaderData)(), [theme, setTheme] = (0, import_react8.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        changeTheme: (theme2) => setTheme(theme2)
      }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "admin-container",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix5.Outlet, {}, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: "Posts to edit"
          }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "fancy-rectangle"
          }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "post-list",
            children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix5.Link, {
              className: "post",
              to: post.slug,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, post.slug, !1, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "post-container",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: post.coverUrl
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 39,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "fancy-rectangle"
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 40,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "post-text",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                          children: post.title
                        }, void 0, !1, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 42,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: post.description
                        }, void 0, !1, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 43,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 38,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/admin/$edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action,
  default: () => PostSlug,
  loader: () => loader2
});
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_remix6 = __toESM(require_dist());
var import_editor = __toESM(require_editor()), import_remix_utils = require("remix-utils"), import_react9 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), axios = require("axios").default, loader2 = async ({ params }) => ((0, import_tiny_invariant.default)(params.edit, "expected params.edit"), getPostEdit(params.edit)), action = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), coverUrl = formData.get("coverUrl"), slug = formData.get("slug"), description = formData.get("description"), editorjs = formData.get("editorjs"), id = formData.get("id");
  console.log("Check the cover image"), console.log(coverUrl);
  let errors = {};
  return title || (errors.title = !0), coverUrl || (errors.coverUrl = !0), slug || (errors.slug = !0), description || (errors.description = !0), editorjs || (errors.editorjs = !0), Object.keys(errors).length ? errors : (await updatePost({ id, title, coverUrl, slug, description, editorjs }), (0, import_remix6.redirect)("/admin"));
};
function PostSlug() {
  let errors = (0, import_remix6.useActionData)(), transition = (0, import_remix6.useTransition)(), post = (0, import_remix6.useLoaderData)(), [savedData, setSavedData] = (0, import_react9.useState)("{}"), [coverUrl, setCoverUrl] = (0, import_react9.useState)(post.coverUrl), [isSelected, setIsSelected] = (0, import_react9.useState)(!1), [selectedFile, setSelectedFile] = (0, import_react9.useState)("");
  async function imageUpload(event) {
    let file = event.target.files[0], responseFromAWS = await axios({
      method: "post",
      url: "/.netlify/functions/uploadImage",
      data: file.name
    });
    console.log(responseFromAWS.data.url), console.log("ATTEMPTING PUT");
    let imageUrl = (await fetch(responseFromAWS.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
    })).url.split("?")[0];
    setCoverUrl(imageUrl), setIsSelected(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix6.Form, {
    reloadDocument: !0,
    method: "post",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "edit-post-container",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          children: "Edit Post"
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "cover-preview",
          src: coverUrl
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Title: ",
              (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Title is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 90,
                columnNumber: 43
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "title",
                defaultValue: post.title
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/$edit.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 88,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Cover: ",
              (errors == null ? void 0 : errors.coverUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Cover is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 96,
                columnNumber: 46
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "file",
                name: "cover",
                value: selectedFile,
                onChange: imageUpload
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 97,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/$edit.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              " ",
              "Post Slug: ",
              (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Slug is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 108,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                defaultValue: post.slug,
                id: "slugInput",
                type: "text",
                name: "slug"
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 109,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/$edit.tsx",
            lineNumber: 106,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "Insert Description:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                defaultValue: post.description,
                name: "description",
                id: ""
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/$edit.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this),
            " ",
            (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
              children: "Description is required"
            }, void 0, !1, {
              fileName: "app/routes/admin/$edit.tsx",
              lineNumber: 122,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/admin/$edit.tsx",
              lineNumber: 123,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_utils.ClientOnly, {
              children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_editor.default, {
                previousData: post.editorjs,
                saveOutput: savedData,
                save: (savedData2) => setSavedData(savedData2)
              }, void 0, !1, {
                fileName: "app/routes/admin/$edit.tsx",
                lineNumber: 126,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/$edit.tsx",
              lineNumber: 124,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "savePost",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            children: transition.submission ? "Saving..." : "Save Post"
          }, void 0, !1, {
            fileName: "app/routes/admin/$edit.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          defaultValue: post.editorjs,
          name: "editorjs",
          value: savedData,
          className: "hiddenEditorField"
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          htmlFor: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            className: "hidden",
            type: "text",
            name: "coverUrl",
            defaultValue: coverUrl
          }, void 0, !1, {
            fileName: "app/routes/admin/$edit.tsx",
            lineNumber: 146,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 145,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "hidden",
          name: "id",
          value: post.id
        }, void 0, !1, {
          fileName: "app/routes/admin/$edit.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/admin/$edit.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin/$edit.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
var import_remix7 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "admin-index",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        children: "Welcome Back Dom"
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix7.Link, {
        to: "/admin/new",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          children: "New Post"
        }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPost
});
var import_remix8 = __toESM(require_dist());
var import_editor2 = __toESM(require_editor()), import_remix_utils2 = require("remix-utils"), import_react10 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), axios2 = require("axios").default, action2 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), coverUrl = formData.get("coverUrl"), slug = formData.get("slug"), description = formData.get("description"), editorjs = formData.get("editorjs"), errors = {};
  return title || (errors.title = !0), coverUrl || (errors.coverUrl = !0), slug || (errors.slug = !0), description || (errors.description = !0), editorjs || (errors.editorjs = !0), Object.keys(errors).length ? errors : (await createPost({ title, coverUrl, slug, description, editorjs }), (0, import_remix8.redirect)("/admin"));
};
function NewPost() {
  let errors = (0, import_remix8.useActionData)(), transition = (0, import_remix8.useTransition)(), slug = "", handleChange = (e) => {
    slug = e.target.value.replace(/\s/g, "-"), document.getElementById("slugInput").value = slug.toLowerCase();
  }, [savedData, setSavedData] = (0, import_react10.useState)(""), [coverUrl, setCoverUrl] = (0, import_react10.useState)(""), [isSelected, setIsSelected] = (0, import_react10.useState)(!1), [selectedFile, setSelectedFile] = (0, import_react10.useState)("");
  async function imageUpload(event) {
    let file = event.target.files[0], responseFromAWS = await axios2({
      method: "post",
      url: "/.netlify/functions/uploadImage",
      data: file.name
    });
    console.log(responseFromAWS.data.url), console.log("ATTEMPTING PUT");
    let imageUrl = (await fetch(responseFromAWS.data.url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file
    })).url.split("?")[0];
    setCoverUrl(imageUrl), setIsSelected(!0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix8.Form, {
    reloadDocument: !0,
    method: "post",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "new-post-container",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Title: ",
              (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Title is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 84,
                columnNumber: 43
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                onChange: handleChange,
                type: "text",
                name: "title"
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/new.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "cover-preview",
          src: coverUrl
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              " ",
              "Post Slug: ",
              (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Slug is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 93,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                placeholder: slug,
                id: "slugInput",
                type: "text",
                name: "slug"
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 94,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/new.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Cover: ",
              (errors == null ? void 0 : errors.coverUrl) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                children: "Cover is required"
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 99,
                columnNumber: 46
              }, this),
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "file",
                name: "cover",
                value: selectedFile,
                onChange: imageUpload
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/new.tsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "Insert Description:",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                defaultValue: "",
                name: "description",
                id: ""
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 111,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/new.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            " ",
            (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
              children: "Description is required"
            }, void 0, !1, {
              fileName: "app/routes/admin/new.tsx",
              lineNumber: 113,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/admin/new.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_utils2.ClientOnly, {
              children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_editor2.default, {
                previousData: "{}",
                saveOutput: savedData,
                save: (savedData2) => setSavedData(savedData2)
              }, void 0, !1, {
                fileName: "app/routes/admin/new.tsx",
                lineNumber: 117,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/new.tsx",
              lineNumber: 115,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          name: "editorjs",
          defaultValue: savedData,
          value: savedData
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 125,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          htmlFor: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "text",
            name: "coverUrl",
            defaultValue: coverUrl
          }, void 0, !1, {
            fileName: "app/routes/admin/new.tsx",
            lineNumber: 127,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            children: transition.submission ? "Creating..." : "Create Post"
          }, void 0, !1, {
            fileName: "app/routes/admin/new.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/new.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/admin/new.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin/new.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links5
});

// app/components/projectCard.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProjectCard(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "project-card-container",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "project-card",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: props.image,
          alt: "project_photo"
        }, void 0, !1, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "fancy-divider"
        }, void 0, !1, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 6,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              children: props.title
            }, void 0, !1, {
              fileName: "app/components/projectCard.tsx",
              lineNumber: 8,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: props.description
            }, void 0, !1, {
              fileName: "app/components/projectCard.tsx",
              lineNumber: 9,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              id: "container",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "learn-more",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "circle",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "icon arrow"
                    }, void 0, !1, {
                      fileName: "app/components/projectCard.tsx",
                      lineNumber: 13,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/projectCard.tsx",
                    lineNumber: 12,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: props.link,
                    className: "button-text",
                    children: "Learn More"
                  }, void 0, !1, {
                    fileName: "app/components/projectCard.tsx",
                    lineNumber: 15,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/projectCard.tsx",
                lineNumber: 11,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/projectCard.tsx",
              lineNumber: 10,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/projectCard.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/projectCard.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/projectCard.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/images/projects/Startpage.png
var Startpage_default = "/build/_assets/Startpage-TVA5SW5R.png";

// app/images/projects/OldSite.png
var OldSite_default = "/build/_assets/OldSite-QEIDNPTJ.png";

// app/images/projects/Dots.png
var Dots_default = "/build/_assets/Dots-N4BNCDZI.png";

// app/pages/home.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "home",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-bar",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "accent",
                    children: "Dom"
                  }, void 0, !1, {
                    fileName: "app/pages/home.tsx",
                    lineNumber: 14,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/pages/home.tsx",
                    lineNumber: 15,
                    columnNumber: 13
                  }, this),
                  "Lee"
                ]
              }, void 0, !0, {
                fileName: "app/pages/home.tsx",
                lineNumber: 13,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "vert-rectangle"
              }, void 0, !1, {
                fileName: "app/pages/home.tsx",
                lineNumber: 18,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/pages/home.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: Logo_Transparent_default
          }, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/pages/home.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "projects",
        id: "projects",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "section-header",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                children: "Projects"
              }, void 0, !1, {
                fileName: "app/pages/home.tsx",
                lineNumber: 24,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "fancy-rectangle"
              }, void 0, !1, {
                fileName: "app/pages/home.tsx",
                lineNumber: 25,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/pages/home.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, {
            image: Startpage_default,
            title: "Startpage",
            description: "This website is my default startpage that I set to open when I create a new tab or new browser window. It contains helpful quick links of my most frequently visited sites.",
            link: "/startpage"
          }, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, {
            image: Dots_default,
            title: "Dotfiles",
            description: "As someone who is obsessed with optimizing my workflow, I am always improving my dotfiles. If you'd like to check them out you can follow the installation instructions in the README.md",
            link: "https://github.com/domogami/.dotfiles"
          }, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectCard, {
            image: OldSite_default,
            title: "My Old Website",
            description: "This website was my first ever attempt at making a react js site. It was built using Gatsby and deployed with Netlify. It is responsive and served as my previous portfolio.",
            link: "https://dominicklee.net"
          }, void 0, !1, {
            fileName: "app/pages/home.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/pages/home.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/pages/home.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links5 = () => [{ rel: "stylesheet", href: app_default }];
function IndexRoute(props) {
  let [theme, setTheme] = (0, import_react11.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        theme,
        changeTheme: (theme2) => setTheme(theme2)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  links: () => links6
});
var import_remix9 = __toESM(require_dist());
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links6 = () => [{ rel: "stylesheet", href: app_default }];
function Blog() {
  let [theme, setTheme] = (0, import_react12.useOutletContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
        theme,
        changeTheme: (theme2) => setTheme(theme2)
      }, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix9.Outlet, {}, void 0, !1, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug2,
  loader: () => loader3
});
var import_remix10 = __toESM(require_dist()), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_editorjsReact = __toESM(require_editorjsReact()), import_remix_utils3 = require("remix-utils"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ params }) => ((0, import_tiny_invariant2.default)(params.slug, "expected params.slug"), getPost(params.slug));
function PostSlug2() {
  let post = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "blog-post-container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: post.title
      }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        className: "cover-image",
        src: post.coverUrl
      }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_utils3.ClientOnly, {
        children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_editorjsReact.default, {
          previousData: post.editorjs
        }, void 0, !1, {
          fileName: "app/routes/blog/$slug.tsx",
          lineNumber: 19,
          columnNumber: 16
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/blog/$slug.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/blog/$slug.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.tsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => Index3,
  loader: () => loader4
});
var import_remix11 = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = () => getPosts();
function Index3() {
  let posts = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "blog-container",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "blog-hero",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: [
              "Welcome to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/blog/index.tsx",
                lineNumber: 14,
                columnNumber: 22
              }, this),
              "my ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "accent",
                children: "Blog"
              }, void 0, !1, {
                fileName: "app/routes/blog/index.tsx",
                lineNumber: 15,
                columnNumber: 14
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/blog/index.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "rectangle-container",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "fancy-rectangle"
            }, void 0, !1, {
              fileName: "app/routes/blog/index.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/blog/index.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "post-list",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix11.Link, {
          className: "post",
          to: post.slug,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {}, post.slug, !1, {
              fileName: "app/routes/blog/index.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "post-container",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: post.coverUrl
                }, void 0, !1, {
                  fileName: "app/routes/blog/index.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "fancy-rectangle"
                }, void 0, !1, {
                  fileName: "app/routes/blog/index.tsx",
                  lineNumber: 27,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "post-text",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      children: post.title
                    }, void 0, !1, {
                      fileName: "app/routes/blog/index.tsx",
                      lineNumber: 29,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      children: post.description
                    }, void 0, !1, {
                      fileName: "app/routes/blog/index.tsx",
                      lineNumber: 30,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/blog/index.tsx",
                  lineNumber: 28,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/blog/index.tsx",
              lineNumber: 25,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/blog/index.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      " "
    ]
  }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8620e0d6", entry: { module: "/build/entry.client-DJ6IDRJR.js", imports: ["/build/_shared/chunk-O36K2G7M.js", "/build/_shared/chunk-ZNKQAQGY.js", "/build/_shared/chunk-R5FI2U2M.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RCB2GXD2.js", imports: ["/build/_shared/chunk-5AFKH5XM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-DOVIPMQJ.js", imports: ["/build/_shared/chunk-PWQJ7YHT.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-BTSXJHXQ.js", "/build/_shared/chunk-JTIYFR7J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/$edit": { id: "routes/admin/$edit", parentId: "routes/admin", path: ":edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/$edit-ISG75DVY.js", imports: ["/build/_shared/chunk-6G6HLFEA.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-F4VA46NK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-JS2FBTDQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/new": { id: "routes/admin/new", parentId: "routes/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/new-EOW3YGJM.js", imports: ["/build/_shared/chunk-6G6HLFEA.js", "/build/_shared/chunk-F4VA46NK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-SBDQVCSJ.js", imports: ["/build/_shared/chunk-PWQJ7YHT.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-BTSXJHXQ.js", "/build/_shared/chunk-JTIYFR7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "routes/blog", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-6VZK6B63.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-F4VA46NK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-BCTWPN46.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/drinks": { id: "routes/drinks", parentId: "root", path: "drinks", index: void 0, caseSensitive: void 0, module: "/build/routes/drinks-THWWF22N.js", imports: ["/build/_shared/chunk-JTIYFR7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/drinks/index": { id: "routes/drinks/index", parentId: "routes/drinks", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/drinks/index-CDPNF6IN.js", imports: ["/build/_shared/chunk-BTSXJHXQ.js", "/build/_shared/chunk-5AFKH5XM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-TOC5RSFA.js", imports: ["/build/_shared/chunk-PWQJ7YHT.js", "/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-BTSXJHXQ.js", "/build/_shared/chunk-JTIYFR7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/startpage": { id: "routes/startpage", parentId: "root", path: "startpage", index: void 0, caseSensitive: void 0, module: "/build/routes/startpage-ULRSIIHH.js", imports: ["/build/_shared/chunk-BTSXJHXQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/startpage/index": { id: "routes/startpage/index", parentId: "routes/startpage", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/startpage/index-S2TMDRSD.js", imports: ["/build/_shared/chunk-NOWOFYQO.js", "/build/_shared/chunk-JTIYFR7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8620E0D6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
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
    index: !0,
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
    index: !0,
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
    index: !0,
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
    index: !0,
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
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
