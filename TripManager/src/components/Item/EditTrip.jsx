import React from "react";
// import './EditTrip.css'

function EditTrip({ onEdit }) {
  return <button className="btn-edit" onClick={onEdit}>Redigera</button>;
}

export default EditTrip;