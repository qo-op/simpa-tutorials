import { createStore } from "redux";

function counterReducer(state = { count: 0, layouts: "open" }, action: { type: string }) {
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, count: state.count + 1 };
        case 'counter/decremented':
            return { ...state, count: state.count - 1 };
        case 'NavigationTree/expandOrCollapseLayouts':
            return { ...state, layouts: state.layouts === "open" ? "closed" : "open" };
        default:
            return state;
    }
}

export default createStore(counterReducer);