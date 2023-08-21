import { createSlice } from "@reduxjs/toolkit";

export const followerSlice = createSlice({
    name: 'follower',
    initialState: [],
    reducers: {
        setFollowers: (state, action) => {
            return action.payload;
        }
    }
});

export const { setFollowers } = followerSlice.actions;
export default followerSlice.reducer;