import { LocalStorageManager } from "./LocalStorageManager";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip, editTrip } from '../../redux/slice';

// Loads the trips from LocalStorage
export const loadTrips = () => {
  const storedTrips = LocalStorageManager.load();
  return storedTrips;
};

// Generates a random id for new trips
const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

// Handles the different actions: adding, editing and deleting trips
export const useTripManager = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips.trips);

  const addNewTrip = (name, firstDate, secondDate, location) => {
    const newTrip = { name, firstDate, secondDate, location, id: generateId() };
    dispatch(addTrip(newTrip));
    LocalStorageManager.save([...trips, newTrip]);
    return newTrip;
  };

  const updateTrip = (id, name, firstDate, secondDate, location) => {
    const updatedTrip = { id, name, firstDate, secondDate, location };
    dispatch(editTrip(updatedTrip));
    LocalStorageManager.save(trips.map((trip) => (trip.id === id ? updatedTrip : trip)));
  };

  const deleteChosenTrip = (id) => {
    dispatch(deleteTrip(id));
    const updatedTrips = trips.filter((trip) => trip.id !== id);
    LocalStorageManager.save(updatedTrips);
  };

  return { trips, addNewTrip, updateTrip, deleteChosenTrip, loadTrips };
};
