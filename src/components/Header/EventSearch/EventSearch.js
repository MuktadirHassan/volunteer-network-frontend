import React from 'react';

const EventSearch = () => {
    const styles = {
        maxWidth:'560px'
    }
    return (
        <section className="container text-center py-5 my-5">
            <h1 className="font-weight-bold">WE GROW BY HELPING PEOPLE IN NEED.</h1>
            <form>
                <div className="input-group my-3 mx-auto" style={styles}>
                <input type="text" className="form-control py-4" placeholder="Search..." aria-label="Search"/>
                <div className="input-group-append">
                    <button className="input-group-text">Search</button>
                </div>
                </div>
            </form>
        </section>

    );
};

export default EventSearch;