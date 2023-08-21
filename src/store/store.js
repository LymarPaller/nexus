import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentUserSlice } from "./currentUserReducer";
import { followerSlice } from "./followerReducer";

const rootReducer = combineReducers({
    currentUser : currentUserSlice.reducer,
    followers : followerSlice.reducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store