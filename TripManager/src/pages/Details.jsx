import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'; // useParams hämtar ID:t ur URL:en
import {useSelector, useDispatch} from 'react-redux';
import {fetchTrips, selectTripById} from '../redux/slice';


function TripDetails() {
    // 3. Hämta parametern "tripId" från webbadressen 
  //    (t.ex. /details/123 => tripId blir "123")
    const { tripId } = useParams();
     // 4. useDispatch ger oss en "dispatch"-funktion 
  //    så vi kan kalla på Redux-actions (t.ex. fetchTrips())
    const dispatch = useDispatch();

    
    // 5. useSelector låter oss läsa data ur Redux-store.
  //    - "selectTripById(state, tripId)" är en funktion 
  //      som letar upp en resa i state beroende på tripId.
    const trip = useSelector((state) => selectTripById(state,tripId));
     // 6. Vi kollar status i Redux-store för att veta om data är laddad 
  //    (ex. "idle", "loading", "succeeded", "failed").
    const status = useSelector ((state) => state.trips.status);

    // 7. useEffect körs när komponenten laddas eller när "status" ändras.
  //    Om status = 'idle', betyder det att vi inte hämtat data än.
  //    Då anropar vi "dispatch(fetchTrips())" för att starta dataladdning.
    useEffect(() => {
        // Om status=idle kan det betyda att vi inte laddat resorna än
        if (status === 'idle') {
            dispatch(fetchTrips());
        }
    }, [status,dispatch]);

    // Visa loading meddelande
    if (status === 'loading') {
        return <p> laddar resa...</p>;
    }
    //om något gått fel
    if(status === 'failed') {
        return <p> kunde inte ladda resan...</p>;
    }
    if (!trip) {
        return <p> Resa saknas eller hittades inte</p>
    }

    return ( 
        <div>
            <h2>Detaljer om resan: {trip.title} </h2>
            <p> Destination: {trip.destination} </p>
            <p>datum: {trip.date}</p>
            <p>pris: {trip.price}</p>
        </div>
    );
}
export default TripDetails;