import { createSlice } from '@reduxjs/toolkit'

const HamburgerSlice = createSlice({
    name: "hamburger",
    initialState: {
        closed: true
    },
    reducers: {
        toggle: (state) => {
            state.closed = !state.closed;
        }
    }
});

export const { toggle } = HamburgerSlice.actions;

export default HamburgerSlice.reducer;
