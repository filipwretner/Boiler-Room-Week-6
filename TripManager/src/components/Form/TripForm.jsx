import React, { useState, memo } from 'react';
import FormInput from './FormInput';

const TripForm = memo(({ onAddTrip, onEditTrip, editingTrip}) => {
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const name = form.elements.namedItem('name').value;
        const firstDate = form.elements.namedItem('firstDate').value;
        const secondDate = form.elements.namedItem('secondDate').value;
        const location = form.elements.namedItem('location').value;

        if (name === '' || firstDate === '' || secondDate === '' || location === '') {
            setError('Vänligen fyll i alla fält');
            return;
        }

        if (firstDate > secondDate) {
            setError('Startdatum får inte vara senare än slutdatum');
            return;
        }

        setError('');

        if (onEditTrip && editingTrip) {
            onEditTrip(editingTrip.id, name, firstDate, secondDate, location);
        } else {
            onAddTrip(name, firstDate, secondDate, location);
        }

        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <FormInput type="text" name="name" defaultValue={editingTrip ? editingTrip.name : ""} className="form-input" label="Namn: " />
          <FormInput type="date" name="firstDate" defaultValue={editingTrip ? editingTrip.firstDate : ""} className="form-input" label="Från: " />
          <FormInput type="date" name="secondDate" defaultValue={editingTrip ? editingTrip.secondDate : ""} className="form-input" label="Till: " />
          <FormInput type="text" name="location" defaultValue={editingTrip ? editingTrip.location : ""} className="form-input" label="Plats: " />
          <button type="submit" className="form-submit">{editingTrip ? 'Redigera resemål' : 'Lägg till resemål'}</button>
        </form>
      );
});

export default TripForm;