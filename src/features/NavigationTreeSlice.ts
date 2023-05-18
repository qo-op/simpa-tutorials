import { createSlice } from '@reduxjs/toolkit'

const NavigationTreeSlice = createSlice({
    name: "navigationTree",
    initialState: {
        cssLayoutFolderClosed: false,
        cssComponentFolderClosed: false,
        jsComponentFolderClosed: false,
    },
    reducers: {
        expand: (state, action) => {
            switch (action.payload) {
                case "CSS Layouts":
                    state.cssLayoutFolderClosed = false;
                    break;
                case "CSS Components":
                    state.cssComponentFolderClosed = false;
                    break;
                case "JS Components":
                    state.jsComponentFolderClosed = false;
                    break;
            }
        },
        collapse: (state, action) => {
            switch (action.payload) {
                case "CSS Layouts":
                    state.cssLayoutFolderClosed = true;
                    break;
                case "CSS Components":
                    state.cssComponentFolderClosed = true;
                    break;
                case "JS Components":
                    state.jsComponentFolderClosed = true;
                    break;
            }
        },
        toggle: (state, action) => {
            switch (action.payload) {
                case "CSS Layouts":
                    state.cssLayoutFolderClosed = !state.cssLayoutFolderClosed;
                    break;
                case "CSS Components":
                    state.cssComponentFolderClosed = !state.cssComponentFolderClosed;
                    break;
                case "JS Components":
                    state.jsComponentFolderClosed = !state.jsComponentFolderClosed;
                    break;
            }
        }
    }
});

export const { expand, collapse, toggle } = NavigationTreeSlice.actions;

export default NavigationTreeSlice.reducer;
