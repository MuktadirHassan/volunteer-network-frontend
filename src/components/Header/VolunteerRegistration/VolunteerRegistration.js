import React, { useContext, useEffect, useState } from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import Header from '../Header/Header';
import { userContext } from '../../../App';
import {  useParams } from 'react-router-dom';

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="mt-3" htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ): null}
        </>
    )
}

const CustomDateInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="mt-3" htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props}></input>
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ): null}
        </>
    )
}
const VolunteerRegistration = () => {
    const styles = {
        maxWidth: '450px',
        margin:'auto'
    }
    const [event, setEvent] = useState([]);
    const [successStat, setSuccessStat] = useState(false);
    const { user } = useContext(userContext);
    const { id } = useParams();
    useEffect(() => {
        const api = 'https://salty-tundra-84217.herokuapp.com/events/'+id;
        fetch(api)
        .then((response) => response.json())
        .then(data => setEvent(data))
        .catch((err) => console.log(err));
    },[])
    return (
        <div className="container">
        <Header></Header>
            <Formik
                initialValues={{
                    fullName: user.displayName || '',
                    email: user.email || '',
                    eventDate: '',
                    description: '',
                    eventTitle: event.eventTitle

                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(32, 'Must be less than 32 characters')
                        .required('Enter Your Full Name Please'),
                    email: Yup.string()
                        .email('Enter a valid email address')
                        .max(64, 'Must be less than 64 characters')
                        .required('Email address required'),
                    eventDate: Yup.string()
                        .required('You must select a Event Date'),
                    description: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(64, 'Must be less than 256 characters')
                        .required('You must enter a Event Description'),
                    eventTitle: Yup.string()
                        .max(64, 'Must be less than 256 characters')
                        .required('You must enter a Event Description'),
                })}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    const api = 'https://salty-tundra-84217.herokuapp.com/volunteerRegistration';
                    fetch(api,{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json',
                                    'authToken' : sessionStorage.getItem('authToken')},
                        body: JSON.stringify(values)
                    })
                    .then(res => {
                        resetForm();
                        setSubmitting(false);
                        setSuccessStat(true);
                        setTimeout(() => {
                            setSuccessStat(false);
                        },3000)
                        
                    })
                    .catch(error => {
                        console.log(error)
                    });
                }}
            >
                { props => (
                    <Form style={styles}>
                            <CustomTextInput label='Full Name' placeholder='Full Name' type='text' name='fullName' className="form-control"></CustomTextInput>
                            <CustomTextInput label='Email' placeholder='Email' type='email' name='email' className='form-control'></CustomTextInput>
                            <CustomDateInput label='Date' type='date' name='eventDate' className='form-control'></CustomDateInput>
                            <CustomTextInput label='Description' placeholder='Description'  name='description' type="text" className='form-control'></CustomTextInput>
                            <CustomTextInput label='Event Title' name='eventTitle' className='form-control' value={event.eventTitle}></CustomTextInput>
                            <button type="submit" className="form-control btn btn-primary my-4">{props.isSubmitting ? 'Registering for a Event...' : 'Register for a Event'}</button>
                            {successStat ? <div className="alert alert-success">Registration Success</div> : null}
                                
                    </Form>
                )}
            </Formik>
            
        </div>
    );
};

export default VolunteerRegistration;