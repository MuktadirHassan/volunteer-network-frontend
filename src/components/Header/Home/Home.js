import React from 'react';
import Header from '../Header/Header';
import EventSearch from '../EventSearch/EventSearch';
import AllEvents from '../AllEvents/AllEvents';


const Home = () => {

    return (
        <>
            <Header></Header>
            <EventSearch></EventSearch>
            <AllEvents></AllEvents>
        </>
    );
};

export default Home;