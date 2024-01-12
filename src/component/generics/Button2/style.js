import styled from 'styled-components';

export const Wrapper = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${({ loading }) => (loading ? 0.4 : 1)};
	background-color: inherit;
`;

Wrapper.Wrap = styled.button`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '52px')};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1000px;
	margin: ${({ margin }) => margin && margin};
	border: none;
	background: inherit;
	color: ${({ disable }) => (disable ? '#9D9D9D' : '#0D3B3F')};
	font-size: 14px;
	font-weight: 600;
	padding: ${({ padding }) => padding && padding};
	cursor: ${({ loading, disable }) =>
		loading ? 'wait' : disable ? ' not-allowed' : 'pointer'};
	user-select: none;
	outline: none;
	box-shadow: ${({ secondary }) =>
		!secondary && '0px 13px 50px 0px rgba(28, 41, 60, 0.12)'};
	&:hover {
		box-shadow: ${({ disable }) =>
			!disable && '4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset'};
		color: ${({ disable }) => !disable && '#37A67E'};
	}
	&:active {
		box-shadow: ${({ disable }) =>
			!disable && '6px 7px 8px 0px rgba(24, 40, 63, 0.36) inset'};
		color: ${({ disable }) => !disable && '#37A67E'};
	}
`;

Wrapper.Title = styled.div`
	display: flex;
	width: max-content;
	align-items: center;
`;
