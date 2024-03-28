import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminService from '../services/AdminService';
import { renderIntoDocument } from 'react-dom/test-utils';

const UpdateAdminProfile = () => {
    const navigate = useNavigate();
    // Initialize admin as an object since you are accessing its properties
    const [admin, setAdmin] = useState({});

    useEffect(() => {
        AdminService.getAdmin().then(
            (resp) => {
                console.log(resp.data);
                setAdmin(resp.data); // Set admin data
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

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin(prevAdmin => ({
            ...prevAdmin,
            [name]: value
        }));
    };
    const UpdateAdmin=()=>{
      AdminService.updateAdmin(admin).then(
        (resp) => {
            console.log(resp.data);
         navigate('/adminProfile')// Set admin data
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

    }

    return (
        <div className="card" style={{ width: '300px',top:"40"}}>
            <div className="card-body">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" value={admin.name || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input readOnly type="email" name="email" className="form-control" value={admin.email || ''} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNo" className="form-control" value={admin.phoneNo || ''} onChange={handleChange} />
                </div>
               <br></br>
                <button className='btn btn-success'style={{marginRight:'10px',pading:'10px'}} onClick={() => UpdateAdmin()}>Update</button>
                <button className='btn btn-danger' onClick={() => navigate('/adminProfile')}>Cancel</button>
            </div>
        </div>
    );
};

export default UpdateAdminProfile;
