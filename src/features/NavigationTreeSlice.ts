import { createSlice } from '@reduxjs/toolkit'

const NavigationTreeSlice = createSlice({
    name: "navigationTree",
    initialState: {
        layoutFolderClosed: false
    },
    reducers: {
        expandOrCollapse: (state, action) => {
            switch (action.payload) {
                case "layoutFolder":
                    state.layoutFolderClosed = !state.layoutFolderClosed;
                    break;
            }
        }
    }
});

export const { expandOrCollapse } = NavigationTreeSlice.actions;

export default NavigationTreeSlice.reducer;
