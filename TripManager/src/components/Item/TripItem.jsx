import React, { memo } from "react";
import { Link } from 'react-router-dom';
import EditTrip from "./EditTrip";
import DeleteTrip from "./DeleteTrip";
import "./TripItem.css";

// Creates every item that is displayed in the list
function TripItem({id, name, firstDate, secondDate, location, onDelete, onEdit }) {
  return (
    <div className="trip-item">
    <div className="trip-info">
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
      </div> 
      
      <div className="btn-container">
      <Link to={`/details/${id}`}>
        <button className="btn-details">Detaljer</button>
      </Link>
      <EditTrip onEdit={onEdit} />
      <DeleteTrip onDelete={onDelete} />
      </div>
    </div>
  );
}

export default memo(TripItem);