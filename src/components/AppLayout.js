import React from "react";
import AppHeader from "./AppHeader"; // Create AppHeader component separately
import Sidebar from "./Sidebar"; // Create AppSidebar component separately
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import Cars from "./Cars";
import UnReturnedCar from "./UnReturnedCar";
import Users from "./Users";
import Orders from "./Orders";
import './AppLayout.css';
import AdminProfile from "./AdminProfile";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import CarCard from "./CarCard";
import UpdateAdminProfile from "./UpdateAdminProfile";
import ViewBookedDetails from "./ViewBookedDetails";
import DeactivatedCars from "./DeactivatedCars";
import AvailableCars from "./AvailableCars";
import BookedCars from "./BookedCars";


const AppLayout = () => {
  return (
    <div className="app-layout">
      {/* Header */}
      <p>App Header</p>
      <AppHeader />

      {/* Sidebar and Main Content Container */}
      

        {/* Main Content */}
        <div className="app-content ">
      <Router>
        <div >
        <Sidebar/>
        </div>
        <Routes>
          
            <Route index path="/adminHome" element={<AdminHome />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/unReturnedCars" element={<UnReturnedCar />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/adminProfile" element={<AdminProfile />} />
            <Route path="cars/addCar" element={<AddCar/>} />
             <Route path="cars/editCar" element={<EditCar />} />
            <Route path="cars/carCard" element={<CarCard/>} />
            <Route path="adminProfile/updateAdminProfile" element={<UpdateAdminProfile/>} />
             <Route path="unReturnedCars/viewBookedCarDetails" element={<ViewBookedDetails/>} />
             <Route path="deactivatedCars" element={<DeactivatedCars/>} />
             <Route path="availableCars" element={<AvailableCars/>} />
             <Route path="bookedCars" element={<BookedCars/>} />
             <Route path="bookedCars/viewBookedCarDetails" element={<ViewBookedDetails/>} />
        </Routes>
      </Router>
    </div>
      </div>
   
  );
};

export default AppLayout;
