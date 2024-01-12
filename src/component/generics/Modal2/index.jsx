import React from 'react';
import { Container } from './style';

const GenericModal = ({
	width,
	height,
	title,
	children,
	open,
	onCancel,
	isMaskClosable,
}) => {
	return (
		<div>
			<Container.Back open={open} onClick={!isMaskClosable && onCancel} />
			<Container width={width} height={height} open={open}>
				{children}
			</Container>
		</div>
	);
};

export default GenericModal;
