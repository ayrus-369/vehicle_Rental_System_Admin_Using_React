import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminService from '../services/AdminService';

import BookingService from '../services/BookingService';
import DataContext from '../context/DataContext';
const UpdateAdminProfile = () => {
    const navigate = useNavigate();
    // Initialize admin as an object since you are accessing its properties
    const [car, setCar] = useState({});
    const{data,setData}= useContext(DataContext);
    useEffect(() => {
        BookingService.getBookingByVehicleId(data.id).then(
            (resp) => {
        setCar(resp.data[0]);
        console.log(resp.data[0]);
           
            }
        )
        .catch(
            (err) => {
                console.log(err);
            }
        )
        .finally(
            () => {
                console.log("Loaded all data from Server");
            }
        );
    
    
    }, []); // Empty dependency array means this effect runs once on mount

  
  
    return (
        <div className="card" style={{width:'300px'}}>
      
      <div className="card-body">
        <h5 className="card-title">{car.brand}</h5>
        <p className="card-text">Register Number: {car.vehicleRegisterNumber}</p>
        <p className="card-text">customer Email: {car.customerEmail}</p>
        <p className='card-text'>Booking Date: {car.bookingDate}</p>
        <p className="card-text">pick up date: {car.pickupDate}</p>
        <p className="card-text">Drop date: {car.dropDate}</p>
        <p className="card-text">pick up Location: {car.pickUpLocation}</p>
        <p className="card-text"> Drop  Location: {car.dropLocation}</p>

        
      
      </div>
    </div>
    );
};

export default UpdateAdminProfile;
