import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TripDetails() {
  const { tripId } = useParams(); // Hämta ID från URL:en
  const trips  = useSelector((state) => state.trips.trips);
  
  const trip = trips.find((trip) => trip.id === tripId);

  if (!trip) {
    return <p>Resa med ID {tripId} hittades inte.</p>;
  }

  return (
    <div>
      <h2>Detaljer om resan: {trip.name}</h2>
      <p><strong>Från datum:</strong> {trip.firstDate}</p>
      <p><strong>Till datum:</strong> {trip.secondDate}</p>
      <p><strong>Plats:</strong> {trip.location}</p>
    </div>
  );
}

export default TripDetails;