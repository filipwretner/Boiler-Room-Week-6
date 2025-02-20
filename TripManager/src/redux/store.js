import {configureStore} from '@reduxjs/toolkit';
import tripReducer from "./slice";

export const store = configureStore({
    reducer:{
        trips: tripReducer,
    }
});