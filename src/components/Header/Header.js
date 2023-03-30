import {Link, NavLink} from 'react-router-dom';


function Header () {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link className="navbar-brand" to="">The Galar League</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbar">
          <ul class="navbar-nav">
            <li className="nav-item">
              <NavLink 
                to=""
                end 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
              }>Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink 
                to="/Dragonite_Cup"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }>Dragonite Cup</NavLink>
            </li>

            <li className="nav-item">
                <NavLink 
                to="/Caterpie_Cup"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }>Caterpie Cup</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>  
    );
}

export default Header;