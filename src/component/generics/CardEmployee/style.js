import styled from 'styled-components';
import User from '../../../assets/img/Avatar.png';

export const Wrapper = styled.div`
	width: ${({ width }) => (width ? width : '400px')};
	background-color: ${({ bg }) => (bg ? '#fff' : '#fff')};
	padding: 32px;
	border-radius: 8px;
	position: relative;
	margin: 0 10px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	@media (max-width: 1200px) {
		width: 270px;
		height: 300px;
	}
	margin: 20px 0;
	transition: 300ms all;
`;

Wrapper.User = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 70px;
	background-image: url(${User});
`;
Wrapper.Flex = styled.div`
	width: ${({ widht }) => (widht ? widht : 'fit-content')};
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-wrap: nowrap;
	gap: ${({ gap }) => gap && gap};
	justify-content: ${({ space }) => space && 'space-between'};
`;
Wrapper.Column = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ gap }) => gap && gap};
	margin: ${({ margin }) => margin && margin};
`;
Wrapper.Title = styled.p`
	color: ${({ bg }) => (bg ? '#fff' : '#1E2F29')};
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	position: relative;
	@media (max-width: 500px) {
		font-size: 18px;
	}
`;
Wrapper.Desc = styled.p`
	color: ${({ bg }) => (bg ? '#fff' : '#1E2F29')};
	font-size: 16px;
	font-weight: 400;
	@media (max-width: 500px) {
		font-size: 13px;
	}
`;
