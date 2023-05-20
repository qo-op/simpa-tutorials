const tutorials = [
    {
        text: "Introduction to Simpa",
        path: "/",
        folder: "",
    },
    {
        text: "How to Use BorderLayout",
        path: "/border-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use BoxLayout",
        path: "/box-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use CardLayout",
        path: "/card-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use CenterLayout",
        path: "/center-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use FlowLayout",
        path: "/flow-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use GridBagConstraints",
        path: "/grid-bag-constraints/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use Grid Layout",
        path: "/css-grid-layout/",
        folder: "CSS Layouts",
    },
    {
        text: "How to Use LayeredPane",
        path: "/layered-pane/",
        folder: "CSS Components",
    },
    {
        text: "How to Use ScrollPane",
        path: "/scroll-pane/",
        folder: "CSS Components",
    },
    {
        text: "How to Use ScrollTable",
        path: "/scroll-table/",
        folder: "CSS Components",
    },
    {
        text: "How to Use Tree",
        path: "/tree/",
        folder: "CSS Components",
    },
    {
        text: "How to Use MenuBar",
        path: "/menu-bar/",
        folder: "JS Components",
    },
    {
        text: "How to Use SplitPane",
        path: "/split-pane/",
        folder: "JS Components",
    },
    {
        text: "How to Use TabbedPane",
        path: "/tabbed-pane/",
        folder: "JS Components",
    },
];

export const tutorialIndexes: { [key: string]: number } = tutorials.reduce((
    accumulator: { [key: string]: number }, tutorial, index
) => {
    accumulator[tutorial.path] = index;
    return accumulator;
}, {});

export default tutorials;