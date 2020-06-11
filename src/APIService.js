import axios from "axios";
const API_URL = "https://us-central1-coviddeadprediction.cloudfunctions.net";


var ax = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${API_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  }
});


export class APIService {
  constructor() { }

  getPredictDeadCovid(form) {
    return ax.post("/predict", form);
  }

  getHelloWorld() {
    return ax.get("/HelloWorld");
  }

}
