import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (

    <aside className="sidebar">

     <div className="sidebar-logo">
        IMS
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          className="sidebar-link"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/products"
         className="sidebar-link"
        >
          Products
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;