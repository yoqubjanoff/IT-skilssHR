import styled from 'styled-components';
export const Wrapper = styled.div`
	display: flex;
	height: 42px;
	padding: 12px 25px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	background: ${({ active }) => (active ? '#37A67E' : '#fff')};
	cursor: pointer;
	box-shadow: 0px 13px 60px 0px rgba(28, 41, 60, 0.1);
`;
Wrapper.Title = styled.div`
	color: ${({ active }) => (active ? '#fff' : '#000')};
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;
