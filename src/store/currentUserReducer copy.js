import { createSlice } from "@reduxjs/toolkit";

export const feedsSlice = createSlice({
    name: 'feeds',
    initialState: [],
    reducers: {
        setFeeds: (state, action) => {
            return action.payload
        }
    }
})

export const { setFeeds } = feedsSlice.actions