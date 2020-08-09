import axios from 'axios'
import getConfig from '../config'

export class AuthService {

    service: any
    config: any = getConfig.config
    constructor() {
        this.service = axios.create({
            baseURL: this.config.internal.url,
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
        return result
    }
}
