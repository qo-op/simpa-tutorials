import { createSlice } from '@reduxjs/toolkit'

const NavigationTreeSlice = createSlice({
    name: "navigationTree",
    initialState: {
        layoutFolderClosed: false,
        componentFolderClosed: false
    },
    reducers: {
        expand: (state, action) => {
            switch (action.payload) {
                case "Layouts":
                    state.layoutFolderClosed = false;
                    break;
                case "Components":
                    state.componentFolderClosed = false;
                    break;
            }
        },
        collapse: (state, action) => {
            switch (action.payload) {
                case "Layouts":
                    state.layoutFolderClosed = true;
                    break;
                case "Components":
                    state.componentFolderClosed = true;
                    break;
            }
        },
        toggle: (state, action) => {
            switch (action.payload) {
                case "Layouts":
                    state.layoutFolderClosed = !state.layoutFolderClosed;
                    break;
                case "Components":
                    state.componentFolderClosed = !state.componentFolderClosed;
                    break;
            }
        }
    }
});

export const { expand, collapse, toggle } = NavigationTreeSlice.actions;

export default NavigationTreeSlice.reducer;
