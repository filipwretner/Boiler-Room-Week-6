import React from 'react';

// Component for the input fields in the form
function FormInput({ type, name, defaultValue, className, label }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} defaultValue={defaultValue} className={className} />
    </div>
  );
}

export default FormInput;