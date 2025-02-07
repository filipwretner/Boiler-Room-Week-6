import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    trips:[],
};

const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers:{
        addTrip: (state,action) => {
            state.trips.push(action.payload);
        }, 
        removeTrip: (state,action) => {
            state.trips = state.trips.filter(trip => trip.id !== action.payload);
        },
    },
});

export const {addTrip, removeTrip} = tripsSlice.actions;
export default tripsSlice.reducer;