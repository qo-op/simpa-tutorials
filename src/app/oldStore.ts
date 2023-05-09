import { createStore } from "redux";

function counterReducer(state = {
    hamburger: { closed: true },
    navigationTree: { layoutFolderClosed: false },
    contentSplitPane: { dividerLocation: -1 },
    tutorialVisible: true,
}, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'Hamburger/toggle':
            return { ...state, hamburger: { closed: !state.hamburger.closed } };
        case 'NavigationTree/expandOrCollapse':
            switch (action.payload) {
                case "layouts":
                    return { ...state, navigationTree: { layoutFolderClosed: !state.navigationTree.layoutFolderClosed} };
                default:
                    return state;
            }
        case 'HamburgerSplitPane/setDividerLocation':
            return { ...state, contentSplitPane: { dividerLocation: action.payload } };
        default:
            return state;
    }
}

const store = createStore(counterReducer);
export default store;
