import React from 'react';
import { Wrapper } from './style';
import { LoadingIcon } from '../../component/generics/genericIcons';

const Loading = () => {
	return (
		<Wrapper>
			<Wrapper.Box>
				<LoadingIcon />
			</Wrapper.Box>
		</Wrapper>
	);
};

export default Loading;
