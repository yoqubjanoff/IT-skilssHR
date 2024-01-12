export const initialState = {
	userData: {
		title: '',
		content: '',
	},
	selected: {},
	faqList: [],
};
export const reducer = (state, action) => {
	switch (action.type) {
		case 'setFaqAllData':
			return { ...state, faqList: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
