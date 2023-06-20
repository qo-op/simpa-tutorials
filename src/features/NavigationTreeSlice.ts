import { createSlice } from "@reduxjs/toolkit";

const NavigationTreeSlice = createSlice({
  name: "navigationTree",
  initialState: {
    cssLayoutsFolderClosed: false,
    cssComponentsFolderClosed: false,
    jsComponentsFolderClosed: false,
    examplesFolderClosed: false,
  },
  reducers: {
    expand: (state, action) => {
      switch (action.payload) {
        case "CSS Layouts":
          state.cssLayoutsFolderClosed = false;
          break;
        case "CSS Components":
          state.cssComponentsFolderClosed = false;
          break;
        case "JS Components":
          state.jsComponentsFolderClosed = false;
          break;
        case "Examples":
          state.examplesFolderClosed = false;
          break;
      }
    },
    collapse: (state, action) => {
      switch (action.payload) {
        case "CSS Layouts":
          state.cssLayoutsFolderClosed = true;
          break;
        case "CSS Components":
          state.cssComponentsFolderClosed = true;
          break;
        case "JS Components":
          state.jsComponentsFolderClosed = true;
          break;
        case "Examples":
          state.examplesFolderClosed = true;
          break;
      }
    },
    toggle: (state, action) => {
      switch (action.payload) {
        case "CSS Layouts":
          state.cssLayoutsFolderClosed = !state.cssLayoutsFolderClosed;
          break;
        case "CSS Components":
          state.cssComponentsFolderClosed = !state.cssComponentsFolderClosed;
          break;
        case "JS Components":
          state.jsComponentsFolderClosed = !state.jsComponentsFolderClosed;
          break;
        case "Examples":
          state.examplesFolderClosed = !state.examplesFolderClosed;
          break;
      }
    },
  },
});

export const { expand, collapse, toggle } = NavigationTreeSlice.actions;

export default NavigationTreeSlice.reducer;
