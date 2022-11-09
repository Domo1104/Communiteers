import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar({volunteerLogIn, handleLogout}) {
    const history = useHistory()

  return (
    <div className="navbar">
      <h3 className="logo" onClick={() => history.push("/")}>
        {" "}
        Communiteers
      </h3>
      <div className="nav-links">
        <NavLink className="link" to="/events">
          Events
        </NavLink>
        <NavLink className="link" to="/volunteer">
          Volunteer
        </NavLink>
        <NavLink className="link" to="/info">
          Info
        </NavLink>
      </div>
      {volunteerLogIn !== null ? (
         <div className="signup-login">
         <NavLink className="link" to="/" onClick={handleLogout}>Logout</NavLink>
     </div>
    
      ) : (
        <div className="signup-login">
        <NavLink className="link" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="link" to="/login">
          Log In
        </NavLink>
      </div>
      )}
    </div>
  );
}

export default NavBar;
