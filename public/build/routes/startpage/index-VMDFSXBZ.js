import {
  Logo_Transparent_default
} from "/build/_shared/chunk-XVPQ3L2I.js";
import {
  app_default
} from "/build/_shared/chunk-AAOAAQ3C.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx?browser
init_react();

// app/routes/startpage/index.tsx
init_react();

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

// app/routes/startpage/index.tsx
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
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/startpage/index-VMDFSXBZ.js.map
