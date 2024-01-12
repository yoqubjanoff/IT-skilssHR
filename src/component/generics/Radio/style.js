import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 148px;
	height: 60px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	padding: 0 18px;
	display: flex;
	align-items: center;
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	gap: 10px;
	cursor: pointer;
	user-select: none;
	border: ${({ active }) => (active ? '1px solid rgba(13, 59, 63, 0.10)' : '')};
	box-shadow: ${({ active }) =>
		active
			? ' 4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset'
			: '0px 13px 32px 0px rgba(28, 41, 60, 0.10)'};

	@media (max-width: 375px) {
		width: 140px;
	}
`;
Wrapper.Radio = styled.input`
	display: none;
`;
Wrapper.RadioBox = styled.div`
	width: 19px;
	height: 19px;
	border: 1px solid ${({ togle }) => (togle ? ' #37a67e' : '#e1e1e1')};
	border-radius: 50%;
	position: relative;
`;
Wrapper.RadioValue = styled.div`
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background-color: #37a67e;
	position: absolute;

	top: 2px;
	left: 2px;
`;
