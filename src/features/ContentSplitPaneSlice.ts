import { createSlice } from "@reduxjs/toolkit";

const ContentSplitPaneSlice = createSlice({
  name: "contentSplitPane",
  initialState: {
    dividerLocation: -1,
    scrollTop: 0,
  },
  reducers: {
    setDividerLocation: (state, action) => {
      state.dividerLocation = action.payload;
    },
    setScrollTop: (state, action) => {
      state.scrollTop = action.payload;
    },
  },
});

export const { setDividerLocation, setScrollTop } =
  ContentSplitPaneSlice.actions;

export default ContentSplitPaneSlice.reducer;
