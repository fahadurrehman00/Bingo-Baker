import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    backgroundImage: "/images/cardbg.png",
    backgroundColor: "",
    border: "#0000",
    gridColor: "red",
    gridBorder: "1px",
    textColor: "red",
  },
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
      state.backgroundColor = "transparent";
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      state.backgroundImage = "none";
    },
    setGridColor: (state, action) => {
      state.gridColor = action.payload;
    },
    setGridBorder: (state, action) => {
      state.gridBorder = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
  },
});

export const {
  setBackgroundImage,
  setBackgroundColor,
  setGridColor,
  setGridBorder,
  setTextColor,
} = backgroundSlice.actions;
export default backgroundSlice.reducer;
