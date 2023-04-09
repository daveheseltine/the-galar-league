import {Link, NavLink} from 'react-router-dom';


function Header () {
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="col-xl-9 col-12 container-fluid px-3">
        <Link className="navbar-brand" to="">The Galar League</Link>

        <button className="navbar-toggler p-0" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to=""
                end 
                className={({isActive}) => isActive ? "nav-link active" : "nav-link"
              }>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              to="/DragoniteCup"
              className={({isActive}) =>
                isActive ? "nav-link active" : "nav-link"
              }>Dragonite Cup</NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              to="/CaterpieCup"
              className={({isActive}) =>
                isActive ? "nav-link active" : "nav-link"
              }>Caterpie Cup</NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              to="/Rules"
              className={({isActive}) =>
                isActive ? "nav-link active" : "nav-link"
              }>Rules</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
}


export default Header;