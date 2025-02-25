import React from 'react';
import {Link} from "react-router";

const Header = () => {
  return (
    <header>
      <h1>SafeRide</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/book-ride">Book a Ride</Link>
      </nav>
    </header>
  );
};

export default Header;
