import React, { useState, useEffect } from 'react';
// Importera local storage när vi lägger till det

const Home = () => {

    const [trips, setTrips] = useState([]); // m

    return (
        <div>
            <h1>Resor</h1>
            {trips.length === 0 ? (
                <p>Inga resor inplanerade.</p>
            ) : (
                <ul>
                    {trips.map((trip) => (
                        <li key={trip.id}>
                            <h3>{trip.destination}</h3>
                            <p><strong>Datum:</strong> {trip.date}</p>
                            <a href={`/Details/${trip.id}`}>Se detaljer</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;