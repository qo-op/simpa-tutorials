import { createSlice } from "@reduxjs/toolkit";

const ResultPaneSlice = createSlice({
  name: "resultPane",
  initialState: {
    htmlCode: "",
    cssCode: "",
    javaScriptCode: "",
    iframeReady: true,
  },
  reducers: {
    setHtmlCode: (state, action) => {
      state.htmlCode = action.payload;
    },
    setCssCode: (state, action) => {
      state.cssCode = action.payload;
    },
    setJavaScriptCode: (state, action) => {
      state.javaScriptCode = action.payload;
    },
    setIframeReady: (state, action) => {
      state.iframeReady = action.payload;
    },
  },
});

export const { setHtmlCode, setCssCode, setJavaScriptCode, setIframeReady } =
  ResultPaneSlice.actions;

export default ResultPaneSlice.reducer;
