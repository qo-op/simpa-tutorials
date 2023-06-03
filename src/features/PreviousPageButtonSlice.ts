import { createSlice } from "@reduxjs/toolkit";

const PreviousPageButtonSlice = createSlice({
  name: "previousPageButton",
  initialState: {
    disabled: true,
  },
  reducers: {
    setDisabled: (state, action) => {
      state.disabled = action.payload;
    },
  },
});

export const { setDisabled } = PreviousPageButtonSlice.actions;

export default PreviousPageButtonSlice.reducer;
