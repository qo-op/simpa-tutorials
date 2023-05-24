import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "features/LoadingSlice"
import readyReducer from "features/ReadySlice"
import nextPathReducer from "features/NextPathSlice"
import previousPageButtonReducer from "features/PreviousPageButtonSlice"
import nextPageButtonReducer from "features/NextPageButtonSlice"
import hamburgerButtonReducer from "features/HamburgerButtonSlice"
import contentSplitPaneReducer from "features/ContentSplitPaneSlice"
import navigationTreeReducer from "features/NavigationTreeSlice"
import resultPaneReducer from "features/ResultPaneSlice"
import codeEditorReducer from "features/CodeEditorSlice"

const store = configureStore({
    reducer: {
        "loading": loadingReducer,
        "ready": readyReducer,
        "nextPath": nextPathReducer,
        "previousPageButton": previousPageButtonReducer,
        "nextPageButton": nextPageButtonReducer,
        "hamburgerButton": hamburgerButtonReducer,
        "contentSplitPane": contentSplitPaneReducer,
        "navigationTree": navigationTreeReducer,
        "resultPane": resultPaneReducer,
        "codeEditor": codeEditorReducer,
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;