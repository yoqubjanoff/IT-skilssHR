export const initialState = {
	userData: {
		courseName: '',
		companyName: '',
		chooseDirection: '',
		chooseSubDirection: '',
		uploadCover: '',
		addLink: '',
		description: '',
	},
	selected: {},
	courses: [],
	search: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setCourses':
			return { ...state, courses: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
