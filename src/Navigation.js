import { Link, NavLink } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-3">
            <NavLink to="/" className="navbar-brand">
              Jobly App
            </NavLink>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/companies" className="nav-link">
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/jobs" className="nav-link">
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid mx-3">
            <NavLink to="/" className="navbar-brand">
              Jobly App
            </NavLink>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
