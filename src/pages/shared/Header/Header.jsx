import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo .png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar px-20 py-6 flex justify-between items-center">
      <div className="logo-wrap">
        <img src={logo} alt="" />
      </div>
      <div className="text-white">
        <Link className="nav-link mr-4 font-bold" to="/">Home</Link>
        <Link className="nav-link mr-4 font-bold" to="/courses">Courses</Link>
        <Link className="nav-link mr-4 font-bold" to="/about">About</Link>
        <Link className="nav-link mr-4 font-bold" to="/blog">Blog</Link>
        <Link className="nav-link mr-4 font-bold" to="/login">LogIn</Link>
      </div>
    </nav>
  );
};

export default Header;
