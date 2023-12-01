import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const liveChat = createSlice({
    name:"liveChat",
    initialState: {
        messages:[]
    },
    reducers: {
        addLiveChat: (state, action) => { 
         state.messages.splice(OFFSET_LIVE_CHAT,1)
         state.messages.unshift(action.payload)
        },
        removeLiveChat : (state, action) => {

        }
    }
})

 export const {addLiveChat, removeLiveChat} = liveChat.actions
export default liveChat.reducer