import { createSlice } from '@reduxjs/toolkit'

const ReadySlice = createSlice({
    name: "ready",
    initialState: {
        value: true
    },
    reducers: {
        setReady: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setReady } = ReadySlice.actions;

export default ReadySlice.reducer;
