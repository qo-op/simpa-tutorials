import { createSlice } from "@reduxjs/toolkit";

const ContentSplitPaneSlice = createSlice({
  name: "contentSplitPane",
  initialState: {
    dividerLocation: -1,
    scrollPosition: -1,
    scrollMarginTop: 0,
  },
  reducers: {
    setDividerLocation: (state, action) => {
      state.dividerLocation = action.payload;
    },
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    setScrollMarginTop: (state, action) => {
      state.scrollMarginTop = action.payload;
    },
  },
});

export const { setDividerLocation, setScrollPosition, setScrollMarginTop } =
  ContentSplitPaneSlice.actions;

export default ContentSplitPaneSlice.reducer;
