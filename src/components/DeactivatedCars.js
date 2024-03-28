import React, { useContext, useState } from 'react';
import VehicleService from '../services/VehicleService';
import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import { ToastContainer, toast } from 'react-toastify';

const DeactivatedCars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars,setCars]=useState([]);
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
useEffect(()=>{
  
VehicleService.getAllVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      // toast("All Cars Displayed");
   
      // console.log("After toast");
     
      setCars(resp.data);
  }
)
.catch(
  (err)=>{
    console.log(cars);
      console.log(err);
  }
)
.finally(
  ()=>{
      console.log("Loaded all data from Server");
  }
)
},[])

const buttonSpacing={
 
    marginRight: '8px'/* Adjust the spacing as needed */

}
const filteredCars = cars.filter((car) =>
JSON.stringify(car).toLowerCase().includes(searchTerm.toLowerCase())
);
const updateCar=(car)=>{
  setData(car);
  navigate('editCar')


}
const viewCar=(car)=>{
  setData(car);
  navigate('/cars/carCard')


}



  return (
    
    <div className="container mt-4">
      <div className="row mb-3">
     
        <div className="col">
          <input type="text" value={searchTerm} onChange={handleSearch} className="form-control" placeholder="Search Cars" />
        </div>
        
       
      </div>
{cars.length==0 ? <h3 style={{justifyContent:'center', textAlign:'center'}}>No Vehicles Found !!</h3>:<div className="row">
        {filteredCars.filter((car)=>(car.active)==false).map((car) => (
            <div key={car.id} className="col-md-4 mb-10" style={{ padding: '10px' }}>
              <div className="card">
                <img src={car.imageUrl} className="card-img-top" alt="CarImage" />
                <div className="card-body">
                  <h5 className="card-title">{car.brand}</h5>
                  <p className="card-text">Register Number: {car.registerNumber}</p>
                  <p className="card-text">Available status: {car.available ? "Available" : "UnAvailable"}</p>
                  <p className="card-text">Location: {car.location}</p>
                  <button className="btn btn-primary btn-sm "style={buttonSpacing} onClick={()=>viewCar(car)}>View Details</button>
                
                  <button className="btn btn-success btn-sm "style={buttonSpacing} onClick={()=>updateCar(car)}>Update Details</button>

                </div>
              </div>
            </div>
          ))}
      </div> }
      
    </div>
  );
};

export default DeactivatedCars;
