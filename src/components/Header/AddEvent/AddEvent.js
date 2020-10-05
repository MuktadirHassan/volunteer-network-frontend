import React, { useState } from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';


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
const CustomTextAreaInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="mt-3" htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}/>
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
            <input {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="text-danger">{meta.error}</div>
            ): null}
        </>
    )
}


const AddEvent = () => {
    const [successStat, setSuccessStat] = useState(false);
    
    return (
        <div className="container">
            
            <Formik
                initialValues={{
                    eventTitle: '',
                    eventDescription: '',
                    eventDate: '',
                    eventBanner: '',
                }}
                validationSchema={Yup.object({
                    eventTitle: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(64, 'Must be less than 64 characters')
                        .required('You must enter a Event Title'),
                    eventDescription: Yup.string()
                        .min(4, 'Must be at least 4 characters')
                        .max(256, 'Must be less than 256 characters')
                        .required('You must enter a Event Description'),
                    eventDate: Yup.string()
                        .required('You must select a Event Date'),
                    eventBanner: Yup.string()
                        .url('Enter a valid URL')
                        .required("Event Banner Image Link is required.")

                })}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    const url = 'https://salty-tundra-84217.herokuapp.com/admin/addEvent';
                    fetch(url,{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json',
                                'authToken' : sessionStorage.getItem('authToken')},
                        body: JSON.stringify(values)
                    })
                    .then(res => {
                        resetForm();
                        setSuccessStat(true);
                        setSubmitting(false);
                        setTimeout(() => {
                            setSuccessStat(false);
                        }, 3000);
                    })
                    .catch(error => {
                        console.log(error)
                    });
                }}
            >
                { props => (
                    <Form className="form-row justify-content-center">
                        <div className="col-md-5">
                            <CustomTextInput className="form-control" label="Event Title" name="eventTitle" type="text" placeholder="Food Charity"></CustomTextInput>
                            <CustomTextAreaInput className="form-control" label="Description" name="eventDescription" type="text"></CustomTextAreaInput>
                        </div>
                        <div className="col-md-5">
                            <CustomDateInput className="form-control" label="Select A Date" name="eventDate" type="date"></CustomDateInput>
                            <CustomTextInput className="form-control" label="Banner URL(Direct Link)" name="eventBanner" type="url" placeholder="https://i.ibb.co/LCVTwpk/animal-Shelter.png"></CustomTextInput>
                            <button type="submit" className="btn btn-primary my-4">{props.isSubmitting ? 'Creating a Event...' : 'Create a Event'}</button>
                            {successStat ? <div className="alert alert-success">Event Created Successfully</div> : null}
                        </div>
                    </Form>
                )}
            </Formik>
            
        </div>
    );
};

export default AddEvent;