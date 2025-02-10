import React, { lazy, Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const TripForm = lazy(() => import("../components/Form/TripForm"));
import { TripManager } from "../components/Utilities/TripManager";

function TripFormPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tripId = searchParams.get("id");
  const editingTrip = tripId
    ? TripManager.getTrips().find((trip) => trip.id === tripId)
    : null;

  const handleAddTrip = (name, firstDate, secondDate, location) => {
    TripManager.add(name, firstDate, secondDate, location);
    navigate("/details/${newTrip.id");
  };

  const handleEditTrip = (id, name, firstDate, secondDate, location) => {
    TripManager.edit(id, name, firstDate, secondDate, location);
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