import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Website Name */}
        <h1 className="logo">
          <Link to="/">Rotaract Club of YCCE</Link>
        </h1>

        {/* Menu */}
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
