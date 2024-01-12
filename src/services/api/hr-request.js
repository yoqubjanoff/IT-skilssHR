import axios from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		common: {
			Authorization: 'Bearer ' + localStorage.getItem('token-hr'),
		},
	},
	timeout: 30000,
});

request.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token-hr') || null;
		config.headers['Authorization'] = `Bearer ${token}`;
		return config;
	},
	(error) => {
		if (error.response?.status === 401) {
			localStorage.clear();
			window.location.pathname = '/register';
		}

		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(err) => {
		const location = window.location.hash.slice(1);

		if (err?.response?.status === 401 || err?.response?.status === 403) {
			if (
				location !== '/register' &&
				location !== '/signin' &&
				location !== '/' &&
				location?.search('reset') < 0 &&
				location?.search('verify') < 0
			) {
				localStorage.clear();
				window.location.replace('/#/register');
			} else {
				return Promise.reject(err);
			}
		} else {
			return Promise.reject(err);
		}
	},
);

export default request;
