import { Toast } from '../component/generics';
import axios from 'axios';

export const uploadFileTalent = async (file) => {
	if (file) {
		try {
			const token = localStorage.getItem('token');
			const axiosInstance = axios.create({
				baseURL: 'https://api.itskills.uz/api/',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			});

			const response = await axiosInstance.post('talent/file/upload', {
				file: file,
				transactionTime: '2023-08-14T15:43:01.8152087',
			});

			Toast({
				type: 'success',
				message: 'Uploaded',
			});
			return response?.data?.data;
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
			return error?.response?.data?.resultMsg;
		}
	}
};
export const uploadFileHr = async (file) => {
	if (file) {
		try {
			const token = localStorage.getItem('token-hr');
			const axiosInstance = axios.create({
				baseURL: 'https://api.itskills.uz/api/',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			});

			const response = await axiosInstance.post('hr/file/upload', {
				file: file,
				transactionTime: '2023-08-14T15:43:01.8152087',
			});

			Toast({
				type: 'success',
				message: 'Uploaded',
			});
			return response?.data?.data;
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
			return error?.response?.data?.resultMsg;
		}
	}
};
