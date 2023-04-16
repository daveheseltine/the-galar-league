import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';

const logo = require("../assets/img/pokeball_logo.png");


function Header () {
  const [dropdown, setDropdown] = useState(false);

  return(
    <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0">

      <div className="col-xl-9 col-12 container-fluid px-3" style={{minHeight: "85px"}} >
        <Link className="navbar-brand d-flex"
          to=""
          onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
        >
          <img src={logo} alt="Current Champions" height="40px" className="pe-3 my-auto" />
          <h1 className="my-auto">TGL</h1>
        </Link>

        <i className="navbar-toggler p-0" alt="Menu" onClick={() => setDropdown(!dropdown)} style={{minHeight: "85px"}}>
          <div className="d-flex align-items-center" style={{minHeight: "85px"}}>
            <i className="navbar-toggler-icon"></i>
          </div>
        </i>

        <div className={`collapse navbar-collapse justify-content-end ${dropdown ? "show" : ""}`} >
          <ul className="navbar-nav">
            <li className="nav-item my-auto">
              <NavLink 
                to=""
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Home</NavLink>
            </li>

            <li className="nav-item my-auto" >
              <NavLink 
                to="/DragoniteCup"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Dragonite Cup</NavLink>
            </li>

            <li className="nav-item my-auto">
              <NavLink 
                to="/CaterpieCup"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Caterpie Cup</NavLink>
            </li>

            <li className="nav-item my-auto">
              <NavLink 
                to="/Rules"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => {setDropdown(false); window.scrollTo(0, 0)}}
              >Rules</NavLink>
            </li>

            {/* Spacer: */}
            <div className="mb-2"></div>
          </ul>
        </div>
      </div>
    </nav>  
  );
}


export default Header;