import React, { useContext } from 'react';
import { useEffect,useState } from 'react';
import VehicleService from '../services/VehicleService';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
const BookedCars = () => {
  const [unreturnedBookings, setUnReturned] = useState([]);
  const {data, setData}= useContext(DataContext);
  const navigate= useNavigate()
  useEffect(()=>{
    VehicleService.getAllBookedVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      setUnReturned(resp.data);
  }
)
.catch(
  (err)=>{
      console.log(err);
  }
)
.finally(
  ()=>{
      console.log("Loaded all data from Server");
  }
)

  },[])
  const viewBookedDetails=(car)=>{
    setData(car);
    navigate("viewBookedCarDetails");
    
  }
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        { unreturnedBookings.length==0? <h3 style={{textAlign:'center',justifyContent:'center'}}>No Vehicles Booked !!</h3>:unreturnedBookings.map((car) => (
          <div key={car.id} className="col-md-4 mb-10" style={{ padding: '10px' }}>
            <div className="card">
              <img src={car.imageUrl} className="card-img-top" alt="CarImage" />
              <div className="card-body">
                <h5 className="card-title">{car.brand}</h5>
                <p className="card-text">Register Number: {car.registerNumber}</p>
                <p className="card-text">Available status: {car.available ? 'Available' : 'UnAvailable'}</p>
                <p className="card-text">Location: {car.location}</p>
                <button className="btn btn-primary btn-sm button-spacing" onClick={()=>viewBookedDetails(car)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedCars;
