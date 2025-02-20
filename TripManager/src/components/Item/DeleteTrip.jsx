import React from "react";
// import './Delete.CSS';

// Creates a button for deleting a trip
function DeleteTrip({ onDelete }) {
  return <button className="btn-delete" onClick={onDelete}>Radera</button>;
}

export default DeleteTrip;