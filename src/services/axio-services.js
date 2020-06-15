
import axios from "axios";
 class AxiosService {  
    getAllData(){
        return axios.get("https://localhost:44302/api/QuantityMeasurment");
    }
}
export default AxiosService;