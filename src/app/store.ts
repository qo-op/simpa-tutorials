import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "features/LoadingSlice"
import nextPathReducer from "features/NextPathSlice"
import hamburgerReducer from "features/HamburgerSlice"
import contentSplitPaneReducer from "features/ContentSplitPaneSlice"
import navigationTreeReducer from "features/NavigationTreeSlice"

const store = configureStore({
    reducer: {
        "loading": loadingReducer,
        "nextPath": nextPathReducer,
        "hamburger": hamburgerReducer,
        "contentSplitPane": contentSplitPaneReducer,
        "navigationTree": navigationTreeReducer,
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;