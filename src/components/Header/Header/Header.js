import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../assets/logo.png"
const Header = () => {

  const { user } = useContext(userContext);
  
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Volunteer Network Logo" width="200"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registeredEvents" className="nav-link">
                Registered Events
              </Link>
            </li>
            
              { user.uid ? (
                  <>
                  <li className="nav-item ml-2">
                      <Link to="">
                        <button className="btn btn-primary">{user.displayName}</button>
                      </Link>
                  </li>
                  <li className="nav-item ml-1">
                    <Link to="admin/addEvent" className="nav-link">
                      Add Event
                    </Link>
                  </li>
                </>
              ):(
                <li className="nav-item ml-1">
                  <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                  </Link>
                </li>
              )}
            <li className="nav-item ml-2">
              <Link to="/admin">
                <button className="btn btn-secondary">Admin Dashboard</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
