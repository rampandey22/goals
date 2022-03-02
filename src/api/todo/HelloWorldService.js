import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'
class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/hello-world`);
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/hello-world-bean`);
    }

    executeHelloWorldPathVariableService(name) {
       
        return axios.get(`${JPA_API_URL}/hello-world/path-variable/${name}`
           
        );
    }

}

export default new HelloWorldService()