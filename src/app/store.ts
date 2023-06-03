import { configureStore } from "@reduxjs/toolkit";
import codeEditorReducer from "features/CodeEditorSlice";
import contentSplitPaneReducer from "features/ContentSplitPaneSlice";
import hamburgerButtonReducer from "features/HamburgerButtonSlice";
import loadingReducer from "features/LoadingSlice";
import navigationTreeReducer from "features/NavigationTreeSlice";
import nextPageButtonReducer from "features/NextPageButtonSlice";
import nextPathReducer from "features/NextPathSlice";
import previousPageButtonReducer from "features/PreviousPageButtonSlice";
import readyReducer from "features/ReadySlice";
import resultPaneReducer from "features/ResultPaneSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    ready: readyReducer,
    nextPath: nextPathReducer,
    previousPageButton: previousPageButtonReducer,
    nextPageButton: nextPageButtonReducer,
    hamburgerButton: hamburgerButtonReducer,
    contentSplitPane: contentSplitPaneReducer,
    navigationTree: navigationTreeReducer,
    resultPane: resultPaneReducer,
    codeEditor: codeEditorReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
