export const initialState = {
	logoHead: '',
	logoCard: '',
	logos: [],
	selected: {},
	loading: false,
	getLogos: () => {},
	icons: [],
	partner: [],
	language: 'uz',
	direction: {},
	email: '',
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setEmail':
			return { ...state, email: action.payload };
		case 'setDirection':
			return { ...state, direction: action.payload };
		case 'setLanguage':
			return { ...state, language: action.payload };
		case 'setPartner':
			return { ...state, partner: action.payload };
		case 'setGetLogos':
			return { ...state, getLogos: action.payload };
		case 'setLoading':
			return { ...state, loading: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		case 'setLogos':
			return { ...state, logos: action.payload };
		case 'setLogoHead':
			return { ...state, logoHead: action.payload };
		case 'setLogoCard':
			return { ...state, logoCard: action.payload };
		case 'setIcons':
			return { ...state, icons: action.payload };
		default:
			return state;
	}
};
