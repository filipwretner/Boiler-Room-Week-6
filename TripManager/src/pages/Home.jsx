import React, { useState, memo, Suspense } from 'react';
// Importera local storage när vi lägger till det

const TripList = memo(({trips}) => { // Kan flyttas till egen komponent
    return (
        <ul>
        {trips.map((trip) => (
            <li key={trip.id}>
                <h3>{trip.destination}</h3>
                <p><strong>Datum:</strong> {trip.date}</p>
                <a href={`/Details/${trip.id}`}>Se detaljer</a>
            </li>
        ))}
    </ul>
    );
});

const Home = () => {

    const [trips, setTrips] = useState([]); // Behöver ändras när local storage läggs till

    return (
        <div>
            <h1>Resor</h1>
            {trips.length === 0 ? (
                <p>Inga resor inplanerade.</p>
            ) : (
                <Suspense fallback={<p>Laddar resor...</p>}>
                    <TripList trips={trips} />
                </Suspense>             
            )}
        </div>
    );
};

export default Home;