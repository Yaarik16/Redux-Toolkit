import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favotiteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const recipe = action.payload;
      const ifExist = state.some((rec) => rec.id === recipe.id);
      if (ifExist) {
        const index = state.findIndex(item => item.id === recipe.id)
        if (index !== -1) {
          state.splice(index, 1)
        }
      }
      else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favotiteSlice