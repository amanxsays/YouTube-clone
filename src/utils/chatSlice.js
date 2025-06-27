import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        listOfMessages:[]
    },
    reducers:{
        addComment:(state,action)=>{
            state.listOfMessages.push(action.payload);
            if(state.listOfMessages.length>20) state.listOfMessages.shift();
        }
    }
})

export const{addComment}=chatSlice.actions;
export default chatSlice.reducer;