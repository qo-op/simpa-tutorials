import { createSlice } from "@reduxjs/toolkit";

const NextPageButtonSlice = createSlice({
  name: "nextPageButton",
  initialState: {
    disabled: true,
  },
  reducers: {
    setDisabled: (state, action) => {
      state.disabled = action.payload;
    },
  },
});

export const { setDisabled } = NextPageButtonSlice.actions;

export default NextPageButtonSlice.reducer;
