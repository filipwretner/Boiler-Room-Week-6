import { LocalStorageManager } from "./LocalStorageManager";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip, editTrip, setTrips } from '../../redux/slice';

export const loadTrips = () => {
  const storedTrips = LocalStorageManager.load();
  return storedTrips;
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

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
    LocalStorageManager.save(trips.filter((trip) => trip.id !== id));
  };

  return { trips, addNewTrip, updateTrip, deleteChosenTrip, loadTrips };
};
