import axios from 'axios';
const API_URL = 'https://todo-5dhlirm6qa-ue.a.run.app';
export class APIService {

    constructor() {
    }

    getPredictDeadCovid(form) {
        const url = `${API_URL}/predictDeadCovid/`;;
        return axios.post(url, form)
    }

}