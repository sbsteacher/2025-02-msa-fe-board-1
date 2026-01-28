import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080'

class HttpService {
    async save(params) {
        const res = await axios.post('/board', params);
        return res.data;
    }

    async findAll() {
        const res = await axios.get('/board'); //axios라이브러리 객체가 통신이 끝나면 통신의 결과 객체를 리턴한다.
        return res.data; //그 객체의 data속성에 서버가 응답한 데이터가 저장되어 있다.
    }
}

export default new HttpService();