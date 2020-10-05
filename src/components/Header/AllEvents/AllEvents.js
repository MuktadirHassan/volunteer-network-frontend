import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const api = 'https://salty-tundra-84217.herokuapp.com/events'
        fetch(api)
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(err => console.log(err));
    },[])
    return (
        <div className="container">
            <div className="row">
                {
                    events.map(event => <EventCard event={event} key={event._id} />)
                }
            </div>
            
        </div>
    );
};

export default AllEvents;