import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TripList from "../components/List/TripList";
import Filter from "../components/Utilities/Filter";
import { TripManager } from "../components/Utilities/TripManager";

function TripListPage() {
  const [trips, setTrips] = useState(TripManager.getTrips());
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTrips(TripManager.getTrips());
  }, []);

  const handleDeleteTrip = (id) => {
    TripManager.delete(id);
    setTrips([...TripManager.getTrips()]);
  };

  const handleEditTrip = (id) => {
    navigate(`/form?id=${id}`);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Filter filter={filter} onFilterChange={setFilter} placeholder="Sök bland resor..." />
      <TripList
        trips={filteredTrips}
        onDeleteTrip={handleDeleteTrip}
        onEditTrip={handleEditTrip}
      />
    </>
  );
}

export default TripListPage;