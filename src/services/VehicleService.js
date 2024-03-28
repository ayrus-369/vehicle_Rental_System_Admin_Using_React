import {axiosInstance} from "./axios-http-client"
class VehicleService{

    getAllVehicles(){
        return axiosInstance.get('http://localhost:8090/vehicle');
    }
    addVehicle(car){
        return axiosInstance.post('http://localhost:8090/vehicle',car);
    }
    getVehicleById(id){
        return axiosInstance.get(`http://localhost:8090/vehicle/get/${id}`);
    }
   getAllAvailableVehicles(){
    return axiosInstance.get('http://localhost:8090/availableVehicles');
   
   }
   getAllUnReturnedVehicles(){
    return axiosInstance.get('http://localhost:8090/unreturnedVehicles/');
   }
   getAllBookedVehicles(){
    return axiosInstance.get('http://localhost:8090/vehicle/booked');
   }
   deleteVehicleById(id){
    return axiosInstance.delete('http://localhost:8090/vehicle/'+id);
   }
    updateVehicle(car){
        return axiosInstance.put(`http://localhost:8090/vehicle`,car);

    }
    
}

export default new VehicleService();