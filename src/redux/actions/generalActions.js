export const sentEmailAction = (payload) => ({
	type: 'SENT_EMAIL',
	payload: { email: payload.email, forgotPassword: payload.forgotPassword },
});
export const getMeFunction = (payload) => ({
	type: 'GET_ME',
	payload: { getMe: payload },
});
export const setUserData = (payload) => ({
	type: 'SET_USER_DATA',
	payload: payload,
});
export const setHrData = (payload) => ({
	type: 'SET_HR_DATA',
	payload: payload,
});
