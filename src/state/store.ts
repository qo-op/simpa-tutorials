import { createStore } from "redux";

function counterReducer(state = {
    hamburgerClosed: true,
    layouts: "open",
    dividerLocation: -1,
    tutorialVisible: true,
}, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'Hamburger/toggle':
            return { ...state, hamburgerClosed: !state.hamburgerClosed };
        case 'NavigationTree/expandOrCollapse':
            switch (action.payload) {
                case "layouts":
                    return { ...state, layouts: state.layouts === "open" ? "closed" : "open" };
                default:
                    return state;
            }
        case 'HamburgerSplitPane/setDividerLocation':
            return { ...state, dividerLocation: action.payload };
        default:
            return state;
    }
}

const store = createStore(counterReducer);
export default store;