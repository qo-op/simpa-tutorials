import { createStore } from "redux";

function counterReducer(state = {
    hamburgerClosed: true,
    layouts: "open",
    dividerLocation: -1
}, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'Hamburger/toggle':
            return { ...state, hamburgerClosed: action.payload };
        case 'NavigationTree/expandOrCollapseLayouts':
            return { ...state, layouts: state.layouts === "open" ? "closed" : "open" };
        case 'SplitPane/setDividerLocation':
            return { ...state, dividerLocation: action.payload };
        default:
            return state;
    }
}

const store = createStore(counterReducer);
export default store;