import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentUserSlice } from "./currentUserReducer";
import { followerSlice } from "./followerReducer";
import { feedsSlice } from "./feedsReducer";
import { searchSlice } from "./searchReducer";

const rootReducer = combineReducers({
    currentUser : currentUserSlice.reducer,
    followers : followerSlice.reducer,
    feeds : feedsSlice.reducer,
    search : searchSlice.reducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store