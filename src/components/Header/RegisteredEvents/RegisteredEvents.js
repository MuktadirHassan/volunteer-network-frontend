import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import RegisteredEventCard from '../RegisteredEventCard/RegisteredEventCard';

const RegisteredEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const api = 'https://salty-tundra-84217.herokuapp.com/registeredEvents';
        fetch(api,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'authToken' : sessionStorage.getItem('authToken')}
        })
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(err => console.log(err))        
    },[]);
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        events.length === 0 && <h3 className="text-center mt-4">No registered events</h3>

                    }

                    {
                        events.map(event => <RegisteredEventCard event={event} key={event._id}></RegisteredEventCard>)
                    }
                </div>

            </div>
        </>
    );
};

export default RegisteredEvents;