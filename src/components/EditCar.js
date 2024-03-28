import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import VehicleService from '../services/VehicleService';

const EditCar = () => {
 
  const { data, setData } = useContext(DataContext);
  
  const navigate = useNavigate();
 
  const [car, setCar] = useState({
    id:0,
    imageUrl: '',
    brand: '',
    registerNumber: '',
    mileage: '',
    noOfSeats: '',
    airConditioned: false,
    active: false,
    engaged: false,
    available: false,
    fuelType: 'GASOLINE',
    gearType: 'MANUAL',
    deposit: '',
    rentPerHour: '',
    location: ''
  });
  useEffect(()=>{
    console.log(data);
    setCar(data)
  },[])
 

 
// setCar(data);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };
  const updateCar=()=>{
    VehicleService.updateVehicle(car).then(
      (resp)=>{
          console.log(resp.data);
          //accounts = resp.data;
     navigate('cars');
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
          navigate('/cars');
      }
    )

  }
  // useEffect(()=>{
    
  // })

  return (
    <div className="card" style={{width:"400px"}}>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="imageUrl">Image Url:</label>
        <input type="text" name="imageUrl" value={car.imageUrl} onChange={handleChange} className="form-control" placeholder="Enter your image url" required />
        {/* Add validation messages if needed */}
      </div>
      {/* Add other input fields similar to the above with corresponding names and values */}
     
    <div className="mb-3">
      <label htmlFor="brand" class="form-label">Brand: </label>
      <input
      value={car.brand}
        type="text"
      
        name="brand"
        className="form-control"
        onChange={handleChange} 
        id="brand"
        placeholder="Ford"
        required
        minlength="2"
      />
</div>

    <div class="mb-3">
      <label htmlFor="registerNumber" class="form-label">Register Number: </label>
      <input
        type="text"
        value={car.registerNumber}
        name="registerNumber"
        className="form-control"
        id="registerNumber"
        placeholder="TN59001"
        onChange={handleChange} 
        required
        pattern="^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$"
      />
     
    </div>

    <div class="mb-3">
      <label htmlFor="mileage" class="form-label">Mileage: </label>
      <input
        type="text"
        value={car.mileage}
        name="mileage"
        className="form-control"
        id="mileage"
        onChange={handleChange} 
        placeholder="80"
        required
        pattern="^[0-9]*$"
      />
     
    </div>
    
    <div className="mb-3">
      <label htmlFor="mileage" className="form-label">No Of Seats: </label>
      <input
        type="text"
        value={car.noOfSeats}
        name="noOfSeats"
        className="form-control"
        id="noOfSeats"
        onChange={handleChange} 
        placeholder="4"
        required
        pattern="^[0-9]*$"
      />
      </div>


   

    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={car.airConditioned}
        name="airConditioned"
        id="airConditioned"
        onChange={handleChange} 
      />
      <label class="form-check-label" htmlFor="airConditioned">
        AirConditioned
      </label>
    </div>

   

    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={car.active}
        onChange={handleChange} 
        name="active"
      />

      <label class="form-check-label" htmlFor="active"> Active </label>
    </div>


    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={car.engaged}
        onChange={handleChange} 
        id="engaged"
        name="engaged"
      />
      <label class="form-check-label" htmlFor="engaged"> Engaged </label>
    </div>
 
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={car.available}
        onChange={handleChange} 
        id="available"
        name="available"
      />
      <label class="form-check-label" htmlFor="available"> Availabe </label>
    </div>
    
    <label for="fuelType" class="form-label">Fuel Type : </label>
    <select
      className="form-select"
  value={car.fuelType}
      name="fuelType"
      id="fuelType"
      onChange={handleChange} 
  
    >
      <option selected value="GASOLINE">GASOLINE</option>
      <option value="DIESEL">DIESEL</option>
      <option value="ELECTRIC">ELECTRIC</option>
      <option value="HYBRID">HYBRID</option>
    </select>


    <label htmlFor="gearType" className="form-label">Gear Type : </label>
    <select
      className="form-select"
      value={car.gearType}
      name="gearType"
      id="gearType"
      onChange={handleChange} 

    >
      <option selected value="MANUAL">MANUAL</option>
      <option value="AUTOMATIC">AUTOMATIC</option>
    </select>


 
<div class="mb-3">
  <label htmlFor="deposit" className="form-label">Deposit:</label>
  <input
    type="number"
    value={car.deposit}
    onChange={handleChange} 
 
    name="deposit"
    className="form-control"
    id="deposit"

    placeholder="1000"
    required
    min="100"
  
  />
 
</div>


<div class="mb-3">
  <label htmlFor="rentPerHour" class="form-label">Rent Per Hour:</label>
  <input
    type="number"
    value={car.rentPerHour}
    name="rentPerHour"
    class="form-control"
    id="rentPerHour"
    placeholder="120"
    required
    min="100" 
    onChange={handleChange} 
 />
 
</div>


<div className="mb-3">
  <label htmlFor="location" class="form-label">Location:</label>
  <input
    type="text"
    value={car.location}
    name="location"
    class="form-control"
    id="location"
    placeholder="Chennai"
    required
    minlength="3"
    onChange={handleChange} 
 
  />
  
</div>
<Link to='cars'>
      <button type="submit" className="btn btn-success" style={{ marginRight: '10px' }} onClick={()=>updateCar()} >
        Save
      </button>
      </Link>
      <button type="button" onClick={() =>   navigate('/cars')}  className="btn btn-danger">
        Cancel
      </button>
    </form>
    </div>
  );
};

export default EditCar;
