import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "features/LoadingSlice"
import nextPathReducer from "features/NextPathSlice"
import previousPageButtonReducer from "features/PreviousPageButtonSlice"
import nextPageButtonReducer from "features/NextPageButtonSlice"
import hamburgerButtonReducer from "features/HamburgerButtonSlice"
import contentSplitPaneReducer from "features/ContentSplitPaneSlice"
import navigationTreeReducer from "features/NavigationTreeSlice"

const store = configureStore({
    reducer: {
        "loading": loadingReducer,
        "nextPath": nextPathReducer,
        "previousPageButton": previousPageButtonReducer,
        "nextPageButton": nextPageButtonReducer,
        "hamburgerButton": hamburgerButtonReducer,
        "contentSplitPane": contentSplitPaneReducer,
        "navigationTree": navigationTreeReducer,
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;