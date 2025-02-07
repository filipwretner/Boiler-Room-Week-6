import { LocalStorageManager } from "./LocalStorageManager";

let trips = LocalStorageManager.load();

export const TripManager = {
  getTrips: () => trips,

  add: (name, firstDate, secondDate, location) => {
    trips.push({ name, firstDate, secondDate, location, id: generateId() });
    LocalStorageManager.save(trips);
  },

  delete: (id) => {
    trips = trips.filter((trip) => trip.id !== id);
    LocalStorageManager.save(trips);
  },

  edit: (id, name, firstDate, secondDate, location) => {
    const trip = trips.find((trip) => trip.id === id);

    if (trip) {
      trip.name = name;
      trip.firstDate = firstDate;
      trip.secondDate = secondDate;
      trip.location = location;
      LocalStorageManager.save(trips);
    }
  },
};

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}
