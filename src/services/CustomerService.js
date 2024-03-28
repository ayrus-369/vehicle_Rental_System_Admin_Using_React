import {axiosInstance} from "./axios-http-client"
class CustomerService{
getAllUsers(){
    return axiosInstance.get('http://localhost:8090/customer');
}
}
export default new CustomerService();