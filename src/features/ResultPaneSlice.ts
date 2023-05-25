import { createSlice } from '@reduxjs/toolkit'

const ResultPaneSlice = createSlice({
    name: "resultPane",
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
        }
    }
});

export const { setHtmlCode, setCssCode, setJavaScriptCode } = ResultPaneSlice.actions;

export default ResultPaneSlice.reducer;
