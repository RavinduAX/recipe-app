import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div class="navbar p-wrapper">
      <div class="navbar-start">
        <img src={require('../assets/logo.png')} alt="logo" className="w-20 lg:w-[84px]" />
      </div>
      <div class="navbar-center">
        <a href="/#" class="navbar-item text-sm">HOME</a>
        <a href="/#" class="navbar-item text-sm">FAVOURITE</a>
      </div>
      <div class="navbar-end">
        <UserCircleIcon className="h-7 w-7" />
      </div>
    </div>
  );
};

export default Navbar;
