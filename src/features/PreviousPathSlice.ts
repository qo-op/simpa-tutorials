import { createSlice } from '@reduxjs/toolkit'

const PreviousPathSlice = createSlice({
    name: "previousPath",
    initialState: {
        value: "/"
    },
    reducers: {
        setPreviousPath: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setPreviousPath } = PreviousPathSlice.actions;

export default PreviousPathSlice.reducer;
