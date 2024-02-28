import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import {
  TbSquareRoundedArrowLeft,
  TbSquareRoundedArrowRightFilled,
} from "react-icons/tb";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`navbar ${isSidebarOpen ? "open" : "closed"}`}>
      <button className="icon" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <TbSquareRoundedArrowLeft />
        ) : (
          <TbSquareRoundedArrowRightFilled />
        )}
      </button>
      {isSidebarOpen && (
        <>
          <div>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/experience">
              Experience
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/history">
              History
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
