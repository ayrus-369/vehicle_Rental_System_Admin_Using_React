import React, { } from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file


const Sidebar = () => {
  return (
 
    <div className="sidebar">
      <nav className="nav flex-column">
        <NavLink className="nav-link" to="/adminHome" activeClassName="active">Home</NavLink>
        
        {/* Dropdown for Car-related links */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Cars
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><NavLink className="dropdown-item" to="/cars" activeClassName="active">All Cars</NavLink></li>
            <li><NavLink className="dropdown-item" to="/availableCars" activeClassName="active">Available Cars</NavLink></li>
            <li><NavLink className="dropdown-item" to="/unReturnedCars" activeClassName="active">Un Returned Cars</NavLink></li>
            <li><NavLink className="dropdown-item" to="/deactivatedCars" activeClassName="active">Deactivated Cars</NavLink></li>
            <li><NavLink className="dropdown-item" to="/bookedCars" activeClassName="active">Booked Cars</NavLink></li>
          </ul>
        </div>
        
        <NavLink className="nav-link" to="/users" activeClassName="active">Users</NavLink>
        <NavLink className="nav-link" to="/orders" activeClassName="active">Orders</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Sidebar;

    

