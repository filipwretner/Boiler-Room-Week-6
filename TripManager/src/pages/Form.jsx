import React, { lazy, Suspense, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrips } from "../redux/slice";
const TripForm = lazy(() => import("../components/Form/TripForm"));
import { loadTrips, TripManager } from "../components/Utilities/TripManager";

function TripFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tripId = searchParams.get("id");
  const trips = useSelector((state) => state.trips.trips);

  const editingTrip = tripId
    ? trips.find((trip) => trip.id === tripId)
    : null;

  useEffect(() => {
    const storedTrips = loadTrips();
    dispatch(setTrips(storedTrips));
  }, [dispatch]);

  const handleAddTrip = (name, firstDate, secondDate, location) => {
    TripManager.addNewTrip(name, firstDate, secondDate, location);
    navigate("/details/${newTrip.id");
  };

  const handleEditTrip = (id, name, firstDate, secondDate, location) => {
    TripManager.updateTrip(id, name, firstDate, secondDate, location);
    navigate("/details/${id");
  };

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