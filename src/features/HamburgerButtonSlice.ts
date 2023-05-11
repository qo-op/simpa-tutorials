import { createSlice } from '@reduxjs/toolkit'

const HamburgerButtonSlice = createSlice({
    name: "hamburgerButton",
    initialState: {
        closed: true
    },
    reducers: {
        setClosed: (state, action) => {
            state.closed = action.payload;
        }
    }
});

export const { setClosed } = HamburgerButtonSlice.actions;

export default HamburgerButtonSlice.reducer;
