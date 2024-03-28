import React, {  useEffect, useState } from 'react';
import profileImg from '../assets/profile.png'
import AdminService from '../services/AdminService';
import './AdminProfile.css';
import { useNavigate } from 'react-router-dom';
const AdminProfile= () => {
const [admin,setAdmin]=useState({})

const navigate= useNavigate();
useEffect(() => {

  AdminService.getAdmin().then(
    (resp)=>{
        console.log(resp.data);
        //accounts = resp.data;
        setAdmin(resp.data);
       
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
    <div className="card">
      <img src={profileImg} alt="AdminProfileImage" className="profile-image" />
      <div className="admin-details">
        <h2>{admin.name}</h2>
        <p>Email: {admin.email}</p>
        <p>Phone Number: {admin.phoneNo}</p>
      </div>
      <button className="update-button" onClick={()=>navigate('updateAdminProfile')}>
        Update Details
      </button>
    </div>
  );
};

export default AdminProfile;