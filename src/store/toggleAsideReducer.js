import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
  name: 'toggle',
  initialState: false,
  reducers: {
    setToggle: (state, action) => {
      return !state;
    }
  }
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
