const initialState = {
	sentEmail: {
		email: '',
		forgotPassword: false,
	},
	getMe: {},
	userData: {},
	hrData: {},
};

const generalReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SENT_EMAIL':
			return {
				...state,
				sentEmail: action.payload,
			};
		case 'GET_ME':
			return {
				...state,
				getMe: action.payload,
			};
		case 'SET_USER_DATA':
			return {
				...state,
				userData: action.payload,
			};
		case 'SET_HR_DATA':
			return {
				...state,
				hrData: action.payload,
			};
		default:
			return state;
	}
};

export default generalReducer;
