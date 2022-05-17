import axios from 'axios';

// development url http://localhost:5000/api/v1/
// production url https://dm-national-museum-of-scotland.herokuapp.com/api/v1/

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
	axios.defaults.baseURL = 'http://localhost:4000/api/v1';
} else {
	axios.defaults.baseURL = 'https://dmnmse.herokuapp.com/api/v1';
}

axios.defaults.withCredentials = true;

export default axios;
