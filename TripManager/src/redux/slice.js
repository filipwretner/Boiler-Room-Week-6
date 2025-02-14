import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    trips:[],
};

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers:{
        addTrip: (state, action) => {
            state.trips.push(action.payload);
        }, 
        deleteTrip: (state, action) => {
            state.trips = state.trips.filter(trip => trip.id !== action.payload);
        },
        editTrip: (state, action) => {
            const { id, name, firstDate, secondDate, location } = action.payload;
            const trip = state.trips.find((trip) => trip.id === id);

            if (trip) {
              trip.name = name;
              trip.firstDate = firstDate;
              trip.secondDate = secondDate;
              trip.location = location;
            }
        },
        setTrips: (state, action) => {
            state.trips = action.payload;
        }
    },
});

export const {addTrip, deleteTrip, editTrip, setTrips} = tripSlice.actions;
export default tripSlice.reducer;