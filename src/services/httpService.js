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

    // @GetMapping("/board/{id}") 얘랑 통신할 수 있는 메소드 명시
    async findById(id) {
        const res = await axios.get(`/board/${id}`);
        console.log(res);
        return res.data;
    }
}

export default new HttpService();