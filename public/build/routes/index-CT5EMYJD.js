import {
  Logo_Transparent_default,
  app_default
} from "/build/_shared/chunk-DSVRKA52.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/header.tsx
init_react();
var import_react = __toModule(require_react());
function Header() {
  const [menuIsOpen, setMenuIsOpen] = (0, import_react.useState)(false);
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
  }, " Contact"))), false ? /* @__PURE__ */ React.createElement(ThemeSetter, null) : /* @__PURE__ */ React.createElement("div", {
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
  }, "Learn More")))));
}

// app/images/projects/Startpage.png
var Startpage_default = "/build/_assets/Startpage-TVA5SW5R.png";

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
  })));
}

// app/routes/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Home, null));
}
export {
  IndexRoute as default,
  links
};
//# sourceMappingURL=/build/routes/index-CT5EMYJD.js.map
