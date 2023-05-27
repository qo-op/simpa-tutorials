import { createSlice } from '@reduxjs/toolkit'

const ResultPaneSlice = createSlice({
    name: "resultPane",
    initialState: {
        htmlCode: "",
        cssCode: "",
        javaScriptCode: "",
        visible: true,
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
        setVisible: (state, action) => {
            state.visible = action.payload;
        }
    }
});

export const { setHtmlCode, setCssCode, setJavaScriptCode, setVisible } = ResultPaneSlice.actions;

export default ResultPaneSlice.reducer;
