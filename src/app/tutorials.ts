const tutorials = [
    {
        text: "Introduction to Simpa",
        path: "/",
        folder: "",
    },
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
        text: "How to Use Grid Bag Constraints",
        path: "/grid-bag-constraints/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use Grid Layouts",
        path: "/grid-layout/",
        folder: "CSS Layouts",
    },
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
];

export const tutorialIndexes: { [key: string]: number } = tutorials.reduce((
    accumulator: { [key: string]: number }, tutorial, index
) => {
    accumulator[tutorial.path] = index;
    return accumulator;
}, {});

export default tutorials;