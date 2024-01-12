export const initialState = {
	userData: {
		title: '',
		content: '',
		blogPhotoUrl: null,
		attachmentId: '',
	},
	selected: {},
	blogList: [],
	blogs: [],
};


export const reducer = (state, action) => {
	switch (action.type) {
		case 'setBlogs':
			return { ...state, blogs: action.payload };
		case 'setBlogList':
			return { ...state, blogList: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		case 'sertBlogData':
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};
