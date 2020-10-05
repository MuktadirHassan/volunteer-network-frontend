import React from 'react';

const RegisteredEventCard = (props) => {
    const { eventTitle, eventDate, description} = props.event;
    const date = new Date(eventDate);
    return (
        <div className="col-md-3">
            <div className="card mb-4 border-0">
                
                <div className="card-footer mt-1 rounded border-0 bg-light">
                    <h5 className="card-title">{eventTitle}</h5>
                    <p className="small">{description}</p>
                    <p className="text-muted small mb-0">{date.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default RegisteredEventCard;