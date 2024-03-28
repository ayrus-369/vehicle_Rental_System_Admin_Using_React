import React from 'react';
import BookingService from '../services/BookingService';
import { useState,useEffect } from 'react';
const Orders = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    BookingService.getAllBookings().then((response) => {
      setBookings(response.data);
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
    <div>
      {
        bookings.length===0? <h3 style={{justifyContent:'center',textAlign:'center'}}>No Orders Done Yet !!</h3>:
      <table className="table table-bordered" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Customer Email</th>
            <th>Vehicle</th>
            <th>Vehicle Registration Number</th>
            <th>Booking Date</th>
            <th>Pick Up Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.customerEmail}</td>
              <td>{booking.vehicleName}</td>
              <td>{booking.vehicleRegisterNumber}</td>
              <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
              <td>{new Date(booking.pickupDate).toLocaleDateString()}</td>
              <td>{new Date(booking.dropDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default Orders;
