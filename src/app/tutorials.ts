const tutorials = [
    {
        text: "Introduction to Simpa",
        path: "/",
    },
    {
        text: "How to Use BorderLayout",
        path: "/border-layout/",
    },
    {
        text: "How to Use BoxLayout",
        path: "/box-layout/",
    },
];

export const tutorialIndexes: { [key: string]: number} = tutorials.reduce((accumulator, tutorial, index) => ({ ... accumulator, [tutorial.path]: index }), {});

export default tutorials;