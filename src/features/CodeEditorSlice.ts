import { createSlice } from "@reduxjs/toolkit";

const CodeEditorSlice = createSlice({
  name: "codeEditor",
  initialState: {
    htmlCode: "",
    cssCode: "",
    javaScriptCode: "",
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
  },
});

export const { setHtmlCode, setCssCode, setJavaScriptCode } =
  CodeEditorSlice.actions;

export default CodeEditorSlice.reducer;
