import React, { useEffect ,useState} from 'react';
import './AdminHome.css'
import VehicleService from '../services/VehicleService';
import CustomerService from '../services/CustomerService';
const AdminHome = () => {
  const [totalCars, setTotalCars] = useState(0);
  const [carsAvailable, setCarsAvailable] = useState(0);
  const [carsBooked, setCarsBooked] = useState(0);
  const [unReturned, setUnReturned] = useState(0);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  useEffect(() => {
VehicleService.getAllVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
   setTotalCars(resp.data.length)
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
VehicleService.getAllAvailableVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      setCarsAvailable(resp.data.length)
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
VehicleService.getAllUnReturnedVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      setUnReturned(resp.data.length);
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
VehicleService.getAllBookedVehicles()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      setCarsBooked(resp.data.length);
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
CustomerService.getAllUsers()
.then(
  (resp)=>{
      console.log(resp.data);
      //accounts = resp.data;
      setNumberOfUsers(resp.data.length);
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
  

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Total Cars */}
        <div className="col-md-4">
          <div className="info-card">
            <h4>Total Cars</h4>
            <p>{totalCars}</p>
          </div>
        </div>

        {/* Cars Available */}
        <div className="col-md-4">
          <div className="info-card">
            <h4>Cars Available</h4>
            <p>{carsAvailable}</p>
          </div>
        </div>
        
        {/* Cars Booked */}
        <div className="col-md-4">
          <div className="info-card">
            <h4>Cars Booked</h4>
            <p>{carsBooked}</p>
          </div>
        </div>
        
        {/* Un Returned */}
        <div className="col-md-4">
          <div className="info-card">
            <h4>Un Returned</h4>
            <p>{unReturned}</p>
          </div>
        </div>
        
        {/* Number of Users */}
        <div className="col-md-4">
          <div className="info-card">
            <h4>Users</h4>
            <p>{numberOfUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
