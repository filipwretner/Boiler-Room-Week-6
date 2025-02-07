import { LocalStorageManager } from "./LocalStorageManager";

let trips = LocalStorageManager.load();

export const TripManagerUtil = {

    getTrips: () => trips,

    add: () => {
        trips.push({});
        LocalStorageManager.save(trips);
    },

    delete: (id) => {
        trips = trips.filter((trip) => trip.id !== id);
        LocalStorageManager.save(trips);
    },

    // EDIT FUNCTION
};

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}