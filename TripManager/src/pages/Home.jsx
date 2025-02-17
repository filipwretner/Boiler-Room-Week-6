import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TripList from "../components/List/TripList";
import Filter from "../components/Utilities/Filter";
import { useDispatch, useSelector } from 'react-redux'; 
import { deleteTrip, setTrips } from "../redux/slice";
import { loadTrips } from "../components/Utilities/TripManager";

function TripListPage() {
  const trips = useSelector((state) => state.trips.trips);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedTrips = loadTrips();

    if (storedTrips.length > 0) {
      dispatch(setTrips(storedTrips));
    }
  }, [dispatch]);

  const handleDeleteTrip = (id) => {
    dispatch(deleteTrip(id));
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