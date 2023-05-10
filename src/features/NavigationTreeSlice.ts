import { createSlice } from '@reduxjs/toolkit'

const NavigationTreeSlice = createSlice({
    name: "navigationTree",
    initialState: {
        layoutFolderClosed: false
    },
    reducers: {
        expand: (state, action) => {
            switch (action.payload) {
                case "Layouts":
                    state.layoutFolderClosed = false;
                    break;
            }
        },
        collapse: (state, action) => {
            switch (action.payload) {
                case "Layouts":
                    state.layoutFolderClosed = true;
                    break;
            }
        }
    }
});

export const { expand, collapse } = NavigationTreeSlice.actions;

export default NavigationTreeSlice.reducer;
