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
  }, /* @__PURE__ */ React.createElement("h2", null, props.title), props.links.map(function(d, idx) {
    return /* @__PURE__ */ React.createElement("li", {
      key: idx
    }, /* @__PURE__ */ React.createElement("a", {
      href: d.link
    }, d.name));
  }), /* @__PURE__ */ React.createElement("h1", null, "This is a testtttt"));
}

// app/routes/startpage/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function Index() {
  const sectionOne = [{ "name": "test", "link": "google.com" }];
  return /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "startpage-hero"
  }, /* @__PURE__ */ React.createElement("img", {
    src: hexagon_default
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(StartpageGridItem, {
    title: "general"
  }))));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/startpage/index-6EF6SAH3.js.map
