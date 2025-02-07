import {configureStore} from '@reduxjs/toolkit';
import tripsReducer from "./src/redux/slice";

export const store = configureStore({
    reducer:{
        trips: tripsReducer,
    }
});