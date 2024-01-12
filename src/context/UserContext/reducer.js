export const initialState = {
	userData: {
		firstName: '',
		lastName: '',
		birthDate: '',
		regionId: null,
		region: '',
		phoneNumber: '',
		genderType: 'MALE',
		email: '',
		subDirectionId: null,
		subDirection: '',
		directionId: null,
		direction: '',
		password: '',
		copyPassword: '',
	},
	selected: {},
	userList: [],
	directions: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setDirections':
			return { ...state, directions: action.payload };
		case 'setUserList':
			return { ...state, userList: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		case 'sertUserData':
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};
