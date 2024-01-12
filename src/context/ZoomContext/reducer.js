export const initialState = {
	zoomList: [],
	getList: () => {},
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setZoomList':
			return { ...state, zoomList: action.payload };
		case 'setGetList':
			return { ...state, getList: action.payload };
		default:
			return state;
	}
};
