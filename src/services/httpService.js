import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080'

class HttpService {
    async save(jsonBody) {
        const res = await axios.post('/board', jsonBody);
        return res.data;
    }
}

export default new HttpService();