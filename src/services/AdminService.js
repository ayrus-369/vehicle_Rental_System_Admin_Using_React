import {axiosInstance} from './axios-http-client';
class AdminService{
 getAdmin(){
    return axiosInstance.get('http://localhost:8090/admin');
 }
 updateAdmin(admin){
   return axiosInstance.put('http://localhost:8090/admin',admin)
 }
}
export default new AdminService();