import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadding: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    loaddingOn: (state) => {
      state.isLoadding = true;
    },
    loaddingOff: (state) => {
      state.isLoadding = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loaddingOn, loaddingOff } = appSlice.actions;

export default appSlice.reducer;
