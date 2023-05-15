import { createSlice } from '@reduxjs/toolkit'

const ContentSplitPaneSlice = createSlice({
    name: "contentSplitPane",
    initialState: {
        dividerLocation: -1,
    },
    reducers: {
        setDividerLocation: (state, action) => {
            state.dividerLocation = action.payload;
        },
    }
});

export const { setDividerLocation } = ContentSplitPaneSlice.actions;

export default ContentSplitPaneSlice.reducer;
