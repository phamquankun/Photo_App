import { configureStore } from "@reduxjs/toolkit";
import photoReducer from '../features/Photo/photoSlice'
console.log(photoReducer)
const rootReducer = {
    photos: photoReducer
}
const store = configureStore({
    reducer: rootReducer
})

export default store;