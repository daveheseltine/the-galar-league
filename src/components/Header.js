import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';


function Header () {
  const [dropdown, setDropdown] = useState(false);

  return(
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark p-0" style={{backgroundColor: "red", borderBottom: "solid 16px"}}>
      <div className="col-xl-9 col-12 container-fluid px-3" style={{minHeight: "85px"}} >
        <Link className="navbar-brand"
          to=""
          onClick={() => setDropdown(false)}
        >The Galar League</Link>

        <a className="navbar-toggler p-0" onClick={() => setDropdown(!dropdown)} style={{border: "none", minHeight: "85px"}}>
          <div className="d-flex align-items-center" style={{minHeight: "85px"}}>
            <i className="navbar-toggler-icon"></i>
          </div>
        </a>

        <div className={`collapse navbar-collapse justify-content-end ${dropdown ? "show" : ""}`} >
          <ul className="navbar-nav">
            <li className="nav-item my-auto">
              <NavLink
                to="" end
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setDropdown(false)}
              >Home</NavLink>
            </li>

            <li className="nav-item my-auto" >
              <NavLink 
                to="/DragoniteCup"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setDropdown(false)}
              >Dragonite Cup</NavLink>
            </li>

            <li className="nav-item my-auto">
              <NavLink 
                to="/CaterpieCup"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setDropdown(false)}
              >Caterpie Cup</NavLink>
            </li>

            <li className="nav-item my-auto">
              <NavLink 
                to="/Rules"
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setDropdown(false)}
              >Rules</NavLink>
            </li>

            <div style={{height: "23px"}}>
            </div>
          </ul>
        </div>
      </div>
    </nav>  
  );
}


export default Header;