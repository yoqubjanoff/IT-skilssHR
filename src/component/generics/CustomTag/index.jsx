import React from 'react';
import { Wrapper } from './style';
const CustomTag = ({ title, active, onClick }) => {
	return (
		<Wrapper active={active} onClick={onClick}>
			<Wrapper.Title active={active}>{title || 'Custom tag'}</Wrapper.Title>
		</Wrapper>
	);
};

export default CustomTag;
