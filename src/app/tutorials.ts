export const home = [
  {
    text: "Introduction to Simpa",
    path: "/",
    folder: "",
  },
];

export const cssLayoutsTutorials = [
  {
    text: "How to Use Border Layouts",
    path: "/border-layout/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Box Layouts",
    path: "/box-layout/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Card Layouts",
    path: "/card-layout/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Center Layouts",
    path: "/center-layout/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Flow Layouts",
    path: "/flow-layout/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Grid Constraints",
    path: "/grid-constraints/",
    folder: "CSS Layouts",
  },
  {
    text: "How to Use Grid Layouts",
    path: "/grid-layout/",
    folder: "CSS Layouts",
  },
];

export const cssComponentsTutorials = [
  {
    text: "How to Use Layered Panes",
    path: "/layered-pane/",
    folder: "CSS Components",
  },
  {
    text: "How to Use Scrollable Panes",
    path: "/scroll-pane/",
    folder: "CSS Components",
  },
  {
    text: "How to Use Scrollable Tables",
    path: "/scroll-table/",
    folder: "CSS Components",
  },
  {
    text: "How to Use Trees",
    path: "/tree/",
    folder: "CSS Components",
  },
];

export const jsComponentsTutorials = [
  {
    text: "How to Use Dialogs",
    path: "/dialog/",
    folder: "JS Components",
  },
  {
    text: "How to Use Menu Bars",
    path: "/menu-bar/",
    folder: "JS Components",
  },
  {
    text: "How to Use Split Panes",
    path: "/split-pane/",
    folder: "JS Components",
  },
  {
    text: "How to Use Tabbed Panes",
    path: "/tabbed-pane/",
    folder: "JS Components",
  },
];

export const examples = [
  {
    text: "Border Layout Demo",
    path: "/border-layout-demo/",
    folder: "Examples",
  },
  {
    text: "Box Layout Demo",
    path: "/box-layout-demo/",
    folder: "Examples",
  },
  {
    text: "Card Layout Demo",
    path: "/card-layout-demo/",
    folder: "Examples",
  },
  {
    text: "Flow Layout Demo",
    path: "/flow-layout-demo/",
    folder: "Examples",
  },
  {
    text: "Grid Bag Layout Demo",
    path: "/grid-bag-layout-demo/",
    folder: "Examples",
  },
  {
    text: "Border Demo",
    path: "/border-demo/",
    folder: "Examples",
  },
  {
    text: "Button Demo",
    path: "/button-demo/",
    folder: "Examples",
  },
  {
    text: "Check Box Demo",
    path: "/check-box-demo/",
    folder: "Examples",
  },
  {
    text: "Color Chooser Demo",
    path: "/color-chooser-demo/",
    folder: "Examples",
  },
  {
    text: "Combo Box Demo",
    path: "/combo-box-demo/",
    folder: "Examples",
  },
  {
    text: "Dialog Demo",
    path: "/dialog-demo/",
    folder: "Examples",
  },
  {
    text: "File Chooser Demo",
    path: "/file-chooser-demo/",
    folder: "Examples",
  },
  {
    text: "Glass Pane Demo",
    path: "/glass-pane-demo/",
    folder: "Examples",
  },
  {
    text: "Icon Demo",
    path: "/icon-demo/",
    folder: "Examples",
  },
  {
    text: "Layered Pane Demo",
    path: "/layered-pane-demo/",
    folder: "Examples",
  },
  {
    text: "Menu Demo",
    path: "/menu-demo/",
    folder: "Examples",
  },
  {
    text: "Progress Bar Demo",
    path: "/progress-bar-demo/",
    folder: "Examples",
  },
  {
    text: "Radio Button Demo",
    path: "/radio-button-demo/",
    folder: "Examples",
  },
  {
    text: "Scroll Pane Demo",
    path: "/scroll-pane-demo/",
    folder: "Examples",
  },
  {
    text: "Slider Demo",
    path: "/slider-demo/",
    folder: "Examples",
  },
  {
    text: "Split Pane Demo",
    path: "/split-pane-demo/",
    folder: "Examples",
  },
  {
    text: "Table Demo",
    path: "/table-demo/",
    folder: "Examples",
  },
  {
    text: "Tree Demo",
    path: "/tree-demo/",
    folder: "Examples",
  },
];

const tutorials = home.concat(
  cssLayoutsTutorials,
  cssComponentsTutorials,
  jsComponentsTutorials,
  examples
);

export const tutorialIndexes: { [key: string]: number } = tutorials.reduce(
  (accumulator: { [key: string]: number }, tutorial, index) => {
    accumulator[tutorial.path] = index;
    return accumulator;
  },
  {}
);

export default tutorials;
