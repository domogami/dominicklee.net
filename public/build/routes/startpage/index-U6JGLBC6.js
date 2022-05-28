import {
  app_default
} from "/build/_shared/chunk-4PGGUHA2.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/dom/Documents/GitHub/dominicklee.net/app/routes/startpage/index.tsx?browser
init_react();

// app/routes/startpage/index.tsx
init_react();

// app/images/hexagon.svg
var hexagon_default = "/build/_assets/hexagon-2TRP3V42.svg";

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
    { name: "local", link: "https://localhost:3000" },
    { name: "test", link: "https://google.com" }
  ];
  const sectionTwo = [
    { name: "test", link: "https://google.com" },
    { name: "test", link: "https://google.com" }
  ];
  const sectionThree = [
    { name: "Github", link: "https://github.com" },
    { name: "test", link: "https://google.com" }
  ];
  const sectionFour = [
    { name: "YouTube", link: "https://youtube.com" },
    { name: "test", link: "https://google.com" }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero"
  }, /* @__PURE__ */ React.createElement("img", {
    src: hexagon_default
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
//# sourceMappingURL=/build/routes/startpage/index-U6JGLBC6.js.map
