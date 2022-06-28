import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-heart"></i>

        <span>Bookmarks</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
