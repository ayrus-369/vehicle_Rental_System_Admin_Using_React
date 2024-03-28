import React from 'react';
import CustomerService from '../services/CustomerService';
import { useEffect,useState } from 'react';
const Users= () => {
  const [customers,setCustomers]=useState([]);
  useEffect(() => {
    CustomerService.getAllUsers().then((response) => {
      setCustomers(response.data);
    }).catch(
      (err)=>{
          console.log(err);
      }
    )
    .finally(
      ()=>{
          console.log("Loaded all data from Server");
      }
    )
  }, []);


  return (
    
    <table className="table table-bordered" style={{ marginTop: '20px' }}>
      
      <thead>
      {customers.length===0? <h3 style={{textAlign:'center',justifyContent:'center'}}>No Customers Found !!</h3>:
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Address</th>
        </tr>}
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNo}</td>
            <td>{customer.address}</td>
          </tr>
        ))}
      </tbody>
    </table> 
  );
};

export default Users;
