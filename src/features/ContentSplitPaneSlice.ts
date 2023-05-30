import { createSlice } from '@reduxjs/toolkit'

const ContentSplitPaneSlice = createSlice({
    name: "contentSplitPane",
    initialState: {
        dividerLocation: -1,
        scrollPosition: -1,
    },
    reducers: {
        setDividerLocation: (state, action) => {
            state.dividerLocation = action.payload;
        },
        setScrollPosition: (state, action) => {
            state.scrollPosition = action.payload;
        }
    }
});

export const { setDividerLocation, setScrollPosition } = ContentSplitPaneSlice.actions;

export default ContentSplitPaneSlice.reducer;
