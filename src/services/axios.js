import Axios from  'axios';

const AxiosConfig = Axios.create({
    baseURL:'http://191.191.217.168:8085'
});
export default AxiosConfig;