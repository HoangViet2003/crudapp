import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';

const rootReducer = {
    post: postReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
