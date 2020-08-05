import axios from 'axios'
import FormData from 'form-data';
const instance = axios.create({
    baseURL: 'https://node-shopadmin.herokuapp.com/v1',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export class AuthService {

    service: any

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/v1',
            // timeout: 1000,
            headers: { 'access-control-allow-origin': '*' }
        });
    }


    async loginService(data: any) {
        let result = await this.service.post('/login', data);
        return result
    }

    async registerService(data: any) {

        let result = await this.service.post('/registor', data);
        // console.log(result)
        return result
    }
}
