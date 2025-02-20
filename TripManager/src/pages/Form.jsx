import React, { lazy, Suspense, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrips } from "../redux/slice";
const TripForm = lazy(() => import("../components/Form/TripForm"));
import { loadTrips, useTripManager } from "../components/Utilities/TripManager";

function TripFormPage() {

  // Setting up state and hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tripId = searchParams.get("id");
  const trips = useSelector((state) => state.trips.trips);

  // Updates global state when dispacthing
  useEffect(() => {
    const storedTrips = loadTrips();
    dispatch(setTrips(storedTrips));
  }, [dispatch]);

  // Props required for the form
  const handleAddTrip = (name, firstDate, secondDate, location) => {
    const newTrip = useTripManager.addNewTrip(name, firstDate, secondDate, location);
    if (newTrip) {
      setTimeout(() => navigate("/"), 0); // Wait for state update before navigation
    }
  };

  const handleEditTrip = (id, name, firstDate, secondDate, location) => {
    useTripManager.updateTrip(id, name, firstDate, secondDate, location);
    navigate("/");
  };

  const editingTrip = tripId
    ? trips.find((trip) => trip.id === tripId)
    : null;

  return (
    <Suspense fallback={<p>Laddar formulär...</p>}>
      <TripForm
        onAddTrip={handleAddTrip}
        onEditTrip={handleEditTrip}
        editingTrip={editingTrip}
      />
    </Suspense>
  );
}

export default TripFormPage;