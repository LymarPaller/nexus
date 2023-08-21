import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentUserSlice } from "./currentUserReducer";

const rootReducer = combineReducers({
    currentUser : currentUserSlice.reducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store