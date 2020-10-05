import React from 'react';
import { useHistory } from 'react-router-dom';
import './EventCard.scss';
const EventCard = (props) => {
    const { _id, eventTitle, eventDate,eventDescription,  eventBanner} = props.event;
    const date = new Date(eventDate);
    const history = useHistory();
    const handleEvent = (_id) => {
        history.push(`/volunteerRegistration/${_id}`);
    }
    return (
        <div className="col-md-3">
            <div className="card mb-4 border-0" onClick={() => handleEvent(_id)}>
                <img src={eventBanner} className="card-img-top" alt="..."/>
                <div className="card-footer mt-1 rounded border-0 bg-light">
                    <h5 className="card-title">{eventTitle}</h5>
                    <p className="small">{eventDescription}</p>
                    <p className="text-muted small mb-0">{date.toLocaleDateString('en-GB')}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;