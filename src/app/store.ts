import { configureStore } from '@reduxjs/toolkit'
import previousPathReducer from "features/PreviousPathSlice"
import hamburgerReducer from "features/HamburgerSlice"
import contentSplitPaneReducer from "features/ContentSplitPaneSlice"
import navigationTreeReducer from "features/NavigationTreeSlice"

const store = configureStore({
    reducer: {
        "previousPath": previousPathReducer,
        "hamburger": hamburgerReducer,
        "contentSplitPane": contentSplitPaneReducer,
        "navigationTree": navigationTreeReducer,
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch