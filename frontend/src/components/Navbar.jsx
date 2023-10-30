import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Login from "../pages/Login";

const Navbar = () => {
  return (
    <div className="navbar ps-3 pe-5 sm:ps-5 sm:pe-7 md:ps-20 md:pe-[88px] lg:ps-32 lg:pe-[136px]">
      <div className="navbar-start">
        <img src={require('../assets/logo.png')} alt="logo" className="w-20 lg:w-[84px]" />
      </div>
      <div className="navbar-center">
        <a href="/#" className="navbar-item text-sm">HOME</a>
        <a href="/#" className="navbar-item text-sm">FAVOURITE</a>
      </div>
      <div className="navbar-end">
        <label className="btn btn-ghost" htmlFor="loginModal">
          <UserCircleIcon className="h-7 w-7 text-pink-dark"/>
        </label>
      </div>

      <Login/>

    </div>
  );
};

export default Navbar;
