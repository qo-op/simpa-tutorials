import { createStore } from "redux";

function counterReducer(state = {
    layouts: "open",
    dividerLocation: null
}, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'NavigationTree/expandOrCollapseLayouts':
            return { ...state, layouts: state.layouts === "open" ? "closed" : "open" };
        case 'SplitPane/setDividerLocation':
            return { ...state, dividerLocation: action.payload };
        default:
            return state;
    }
}

export default createStore(counterReducer);