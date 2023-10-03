import { createSlice } from "@reduxjs/toolkit";

const cartNav = createSlice({
    initialState:false,
    name :"cartNav",
    reducers:{
    openCat : (state,action) =>{ 
           return state = action.payload;
         }
    },
})
export const {openCat}= cartNav.actions;
export default cartNav.reducer;