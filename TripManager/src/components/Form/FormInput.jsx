import React from 'react';

function FormInput({ type, name, defaultValue, className, label }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} defaultValue={defaultValue} className={className} />
    </div>
  );
}

export default FormInput;