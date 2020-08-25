import axios from 'axios';
const httpRequest = axios.create({
  baseURL: 'http://localhost:3033/',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
export default httpRequest;
