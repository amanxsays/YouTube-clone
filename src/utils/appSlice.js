import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenuOpen: false,
        tag:'All+standups',
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        tagChange:(state,action)=>{
            state.tag=action.payload;
        }
    }
})

export const {toggleMenu,tagChange}=appSlice.actions; 
export default appSlice.reducer;