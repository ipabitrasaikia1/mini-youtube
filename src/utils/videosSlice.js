import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: []
    },
    reducers: {
        loadVideos: (state, action) => {
            state.videos = action.payload
        },
        unloadVideos: (state, action) => {
            state.videos = []
        }
    }
})

export const {loadVideos, unloadVideos} = videosSlice.actions
export default videosSlice.reducer

