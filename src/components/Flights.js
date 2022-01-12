import {useEffect, useState} from 'react';
function Flights() {

    let [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(flights => flights.json())
            .then(flights => {
                setFlights(flights.filter(flight => flight.launch_year !== '2020'));
            });
    }, [])

    return (
        <div>
            {
                flights.map(flight =>
                    <div  key={flight.flight_number} className="wrap">
                        <div className="info">
                            <div className="mis">mission : {flight.mission_name}</div>
                            <div> year : {flight.launch_year}</div>
                        </div>
                       <div><img src={flight.links.mission_patch} alt="mission_patch"/></div>

                    </div>)

            }

        </div>
    );
}

export default Flights;