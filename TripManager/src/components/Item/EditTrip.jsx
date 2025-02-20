import React from "react";
// import './EditTrip.css'

// Creates a button for editing a trip
function EditTrip({ onEdit }) {
  return <button className="btn-edit" onClick={onEdit}>Redigera</button>;
}

export default EditTrip;