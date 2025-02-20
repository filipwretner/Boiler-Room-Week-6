import React, { memo } from "react";
import TripItem from "../Item/TripItem";
import { useTripManager } from "../Utilities/TripManager";
import './TripList.css'; 

// Component for rendering the list of trips
function TripList({ trips, onEditTrip }) {

  // Makes sure that the trip is deleted
  const { deleteChosenTrip } = useTripManager();

  const handleDeleteTrip = (id) => {
    deleteChosenTrip(id);
  }

  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripItem 
          key={trip.id}
          id={trip.id}
          name={trip.name}
          firstDate={trip.firstDate}
          secondDate={trip.secondDate}
          location={trip.location}
          onDelete={() => handleDeleteTrip(trip.id)}
          onEdit={() => onEditTrip(trip.id)}
        />
      ))}
    </div>
  );
}

export default memo(TripList);
