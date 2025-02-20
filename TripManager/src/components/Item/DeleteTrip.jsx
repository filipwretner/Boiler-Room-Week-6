import React from "react";
// import './Delete.CSS';

function DeleteTrip({ onDelete }) {
  return <button className="btn-delete" onClick={onDelete}>Radera</button>;
}

export default DeleteTrip;