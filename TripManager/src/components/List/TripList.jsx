import React, { memo } from "react";
import TripItem from "../Item/TripItem";

function TripList({ trips, onDeleteTrip, onEditTrip }) {
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
          onDelete={() => onDeleteTrip(trip.id)}
          onEdit={() => onEditTrip(trip.id)}
        />
      ))}
    </div>
  );
}

export default memo(TripList);