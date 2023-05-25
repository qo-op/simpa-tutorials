import { createSlice } from '@reduxjs/toolkit'

const ResultPaneSlice = createSlice({
    name: "resultPane",
    initialState: {
        visible: false,
        htmlCode: "",
        cssCode: "",
        javaScriptCode: "",
    },
    reducers: {
        setVisible: (state, action) => {
            state.visible = action.payload;
        },
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

export const { setVisible, setHtmlCode, setCssCode, setJavaScriptCode } = ResultPaneSlice.actions;

export default ResultPaneSlice.reducer;
