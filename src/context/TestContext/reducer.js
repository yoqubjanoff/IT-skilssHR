export const initialState = {
	tests: [],
	questions: [],
	selectedQuestion: {},
	result: {},
	languageTest: 'EN',
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setLanguage':
			return { ...state, languageTest: action.payload };
		case 'setTest':
			return { ...state, tests: action.payload };
		case 'setQuestion':
			return { ...state, questions: action.payload };
		case 'setSelectedQuestion':
			return { ...state, selectedQuestion: action.payload };
		case 'setResult':
			return { ...state, result: action.payload };
		default:
			return state;
	}
};
