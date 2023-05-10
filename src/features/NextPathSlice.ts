import { createSlice } from '@reduxjs/toolkit'

const NextPathSlice = createSlice({
    name: "nextPath",
    initialState: {
        value: "/"
    },
    reducers: {
        setNextPath: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setNextPath } = NextPathSlice.actions;

export default NextPathSlice.reducer;
