import React from 'react';
import { Wrapper } from './style';

const Button = ({
	children,
	width,
	height,
	onClick,
	margin,
	loading,
	secondary,
	disable,
}) => {
	const onClick2 = () => {
		!loading && onClick && onClick();
	};

	return (
		<Wrapper width={width} onClick={onClick2} loading={loading}>
			<Wrapper.Wrap
				width={width}
				secondary={secondary}
				height={height}
				margin={margin}
				loading={loading}
				disable={disable}
			>
				<Wrapper.Title>{children || 'text'}</Wrapper.Title>
			</Wrapper.Wrap>
		</Wrapper>
	);
};

export default Button;
