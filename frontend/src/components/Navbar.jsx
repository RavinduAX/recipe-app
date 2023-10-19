import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-start">
        <img src={require('../assets/logo.png')} alt="logo" className="w-20" />
      </div>
      <div class="navbar-center">
        <a class="navbar-item">HOME</a>
        <a class="navbar-item">FAVOURITE</a>
      </div>
      <div class="navbar-end">
        <a class="navbar-item">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
