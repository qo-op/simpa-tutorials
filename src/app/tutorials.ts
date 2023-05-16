const tutorials = [
    {
        text: "Introduction to Simpa",
        path: "/",
        folder: "",
    },
    {
        text: "How to Use BorderLayout",
        path: "/border-layout/",
        folder: "Layouts",
    },
    {
        text: "How to Use BoxLayout",
        path: "/box-layout/",
        folder: "Layouts",
    },
    {
        text: "How to Use CenterLayout",
        path: "/center-layout/",
        folder: "Layouts",
    },
    {
        text: "How to Use CardLayout",
        path: "/card-layout/",
        folder: "Layouts",
    },
    {
        text: "How to Use FlowLayout",
        path: "/flow-layout/",
        folder: "Layouts",
    },
    {
        text: "How to Use GridBagConstraints",
        path: "/grid-bag-constraints/",
        folder: "Layouts",
    },
    {
        text: "How to Use CSS Grid Layout",
        path: "/css-grid-layout/",
        folder: "Layouts",
    },
];

export const tutorialIndexes: { [key: string]: number } = tutorials.reduce((
    accumulator: { [key: string]: number }, tutorial, index
) => {
    accumulator[tutorial.path] = index;
    return accumulator;
}, {});

export default tutorials;