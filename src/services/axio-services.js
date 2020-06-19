
import axios from "axios";
 class AxiosService {  
    
    AddData(url,data){
        return axios.post(url+"conversion",data);
    }     
    delete(url,data){
        return axios.delete(url+data);
    }
    getAllData(url){
        return axios.get(url);
    }
}
export default AxiosService;