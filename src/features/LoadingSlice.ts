import { createSlice } from '@reduxjs/toolkit'

const LoadingSlice = createSlice({
    name: "loading",
    initialState: {
        value: true
    },
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
