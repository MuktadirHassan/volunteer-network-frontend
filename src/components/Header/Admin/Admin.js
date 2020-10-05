import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import AdminDashBoard from '../AdminDashboard/AdminDashboard';
import Header from '../Header/Header';


const Admin = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <Header></Header>
            <Switch>
                <Route exact path={path}>
                    <AdminDashBoard></AdminDashBoard>
                </Route>
                <Route path={`${path}/addEvent`}>
                    <AddEvent></AddEvent>
                </Route>
        </Switch>
        </>
    );
};

export default Admin;