import React, { createContext, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Header/Home/Home';
import Admin from './components/Header/Admin/Admin';
import VolunteerRegistration from './components/Header/VolunteerRegistration/VolunteerRegistration';
import Login from './components/Header/Login/Login';
import PrivateRoute from './components/Header/PrivateRoute/PrivateRoute';
import RegisteredEvents from './components/Header/RegisteredEvents/RegisteredEvents';


export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  
  return (
    <userContext.Provider value={{user,setUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registeredEvents">
            <RegisteredEvents></RegisteredEvents>
          </PrivateRoute>
          <PrivateRoute path="/volunteerRegistration/:id">
            <VolunteerRegistration></VolunteerRegistration>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
