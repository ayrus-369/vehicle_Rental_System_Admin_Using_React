import {axiosInstance} from "./axios-http-client"
class BookingService{
getAllBookings(){
    return axiosInstance.get('http://localhost:8090/booking');
}
getBookingByVehicleId(id){
    return axiosInstance.get('http://localhost:8090/booking/vehicle/' + id);

}
}
export default new BookingService();