import React, { memo } from "react";
import EditTrip from "./EditTrip";
import DeleteTrip from "./DeleteTrip";

function TripItem({ name, firstDate, secondDate, location, onDelete, onEdit }) {
  return (
    <div className="trip-item">
      <h3>{name}</h3>
      {firstDate === secondDate ? (
        <p>Datum: {firstDate}</p>
      ) : (
        <>
          <p>Från: {firstDate}</p>
          <p>Till: {secondDate}</p>
        </>
      )}
      <p>Plats: {location}</p>
      <EditTrip onEdit={onEdit} />
      <DeleteTrip onDelete={onDelete} />
    </div>
  );
}

export default memo(TripItem);