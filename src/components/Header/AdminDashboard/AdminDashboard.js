import React, { useEffect, useState } from 'react';

const AdminDashBoard = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(()=>{
        const api = 'https://salty-tundra-84217.herokuapp.com/volunteers';
        fetch(api,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'authToken' : sessionStorage.getItem('authToken')}
        })
        .then(res => res.json())
        .then(data => setVolunteers(data))
        .catch(err => console.log(err))   
    },[])
    return (
        <div className="container">
            <table className="table">
            <thead>
            <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Event Title</th>
            <th scope="col">Event Date</th>
            </tr>
            </thead>
            <tbody>

            { volunteers.map( (volunteer,id) => {
                return (
                        <tr key={id}>
                        <td>{volunteer.fullName}</td>
                        <td>{volunteer.email}</td>
                        <td>{volunteer.eventTitle}</td>
                        <td>{volunteer.eventDate}</td>
                        </tr>     
            )})}
            </tbody>
        </table>
        </div>
    );
};

export default AdminDashBoard;