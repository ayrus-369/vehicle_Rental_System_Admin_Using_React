import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import VehicleService from '../services/VehicleService';

const AddCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
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

  const AddCar = () => {
    VehicleService.addVehicle(car).then(
      (resp) => {
        console.log(resp.data);
        setCar(resp.data);
        toast.success('Vehicle Added Successfully');
        navigate('/cars');
      }
    ).catch(
      (err) => {
        console.log(err);
        toast.error("Error Adding Vehicle");
      }
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddCar();
  };

  return (
    <div className="card" style={{ width: "400px" }}>
      <form onSubmit={handleSubmit}>
        {/* Image URL Input */}
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image Url:</label>
          <input
            type="text"
            name="imageUrl"
            value={car.imageUrl}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your image url"
            required
          />
        </div>

        {/* Brand Input */}
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand:</label>
          <input
            type="text"
            value={car.brand}
            name="brand"
            className="form-control"
            onChange={handleChange}
            id="brand"
            placeholder="Ford"
            required
            minLength="2"
          />
        </div>

        {/* Register Number Input */}
        <div className="mb-3">
          <label htmlFor="registerNumber" className="form-label">Register Number:</label>
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

        {/* Mileage Input */}
        <div className="mb-3">
          <label htmlFor="mileage" className="form-label">Mileage:</label>
          <input
            type="number"
            value={car.mileage}
            name="mileage"
            className="form-control"
            id="mileage"
            onChange={handleChange}
            placeholder="80"
            required
            min="0"
          />
        </div>

              {/* No Of Seats Input */}
              <div className="mb-3">
          <label htmlFor="noOfSeats" className="form-label">No Of Seats:</label>
          <input
            type="number"
            value={car.noOfSeats}
            name="noOfSeats"
            className="form-control"
            id="noOfSeats"
            onChange={handleChange}
            placeholder="4"
            required
            min="1"
          />
        </div>

        {/* Air Conditioned Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={car.airConditioned}
            onChange={handleChange}
            name="airConditioned"
            id="airConditioned"
          />
          <label className="form-check-label" htmlFor="airConditioned">
            Air Conditioned
          </label>
        </div>

        {/* Active Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={car.active}
            onChange={handleChange}
            name="active"
            id="active"
          />
          <label className="form-check-label" htmlFor="active">Active</label>
        </div>

        {/* Engaged Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={car.engaged}
            onChange={handleChange}
            name="engaged"
            id="engaged"
          />
          <label className="form-check-label" htmlFor="engaged">Engaged</label>
        </div>

        {/* Available Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={car.available}
            onChange={handleChange}
            name="available"
            id="available"
          />
          <label className="form-check-label" htmlFor="available">Available</label>
        </div>

        {/* Fuel Type Select */}
        <div className="mb-3">
          <label htmlFor="fuelType" className="form-label">Fuel Type:</label>
          <select
            className="form-select"
            value={car.fuelType}
            name="fuelType"
            id="fuelType"
            onChange={handleChange}
          >
            <option value="GASOLINE">GASOLINE</option>
            <option value="DIESEL">DIESEL</option>
            <option value="ELECTRIC">ELECTRIC</option>
            <option value="HYBRID">HYBRID</option>
          </select>
        </div>

        {/* Gear Type Select */}
        <div className="mb-3">
          <label htmlFor="gearType" className="form-label">Gear Type:</label>
          <select
            className="form-select"
            value={car.gearType}
            name="gearType"
            id="gearType"
            onChange={handleChange}
          >
            <option value="MANUAL">MANUAL</option>
            <option value="AUTOMATIC">AUTOMATIC</option>
          </select>
        </div>

        {/* Deposit Input */}
        <div className="mb-3">
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
            min="0"
          />
        </div>

            {/* Rent Per Hour Input */}
            <div className="mb-3">
          <label htmlFor="rentPerHour" className="form-label">Rent Per Hour:</label>
          <input
            type="number"
            value={car.rentPerHour}
            name="rentPerHour"
            className="form-control"
            id="rentPerHour"
            placeholder="120"
            required
            min="1"
            onChange={handleChange}
          />
        </div>

        {/* Location Input */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input
            type="text"
            value={car.location}
            name="location"
            className="form-control"
            id="location"
            placeholder="Chennai"
            required
            minLength="3"
            onChange={handleChange}
          />
        </div>

        {/* Buttons: Save and Cancel */}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success" onClick={AddCar}>
            Save
          </button>
          <button type="button" className="btn btn-danger" onClick={() => navigate('/cars')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;


