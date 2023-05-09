import { createSlice } from '@reduxjs/toolkit'

const HamburgerSlice = createSlice({
    name: "hamburger",
    initialState: {
        closed: true
    },
    reducers: {
        setClosed: (state, action) => {
            state.closed = action.payload;
        }
    }
});

export const { setClosed } = HamburgerSlice.actions;

export default HamburgerSlice.reducer;
