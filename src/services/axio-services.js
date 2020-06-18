
import axios from "axios";
 class AxiosService {  
    
    post(url,data){
        return axios.post(url,data);
    }     
    delete(url,data){
        return axios.delete(url,{data});
    }
    getAllData(url){
        return axios.get(url);
    }
}
export default AxiosService;