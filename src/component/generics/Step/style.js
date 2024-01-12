import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin: 50px 0 20px 0;
	align-items: flex-start;
	text-align: left;
	@media (max-width: 660px) {
		align-items: center;
		gap: 17px;
		margin: 50px 0 0px 0;
	}
`;

export const Container = styled.div`
	height: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 465px;
	height: 3px;
	border-radius: 100px;
	background: #eeeeee;
	@media (max-width: 450px) {
		width: 315px;
	}
`;
Container.Title = styled.div`
	position: relative;
	width: 100%;
	max-width: 526px;
	font-size: 42px;
	font-weight: 500;
	line-height: 50px;
	color: #121212;
	@media (max-width: 660px) {
		position: relative;
		max-width: 300px;
		font-size: 30px;
		line-height: 33px;
		text-align: center;
	}

	img:nth-child(1) {
		position: absolute;
		top: 10px;
		right: 0;
		width: 21.998px;
		height: 31.376px;

		@media (max-width: 660px) {
			display: none;
		}
	}

	img:nth-child(2) {
		width: 105.3px;
		height: 18.854px;
		margin-bottom: 7px;

		@media (max-width: 660px) {
			position: absolute;
			top: 45%;
			right: 30%;
			width: 52.615px;
			height: 12.205px;
		}
	}
`;
Container.Proggres = styled.div`
	background-color: #37a67e;
	width: ${({ index }) => `${index * 25}%`};
	height: 3px;
	transition: all 0.2s;
	border-radius: 10px;
	@keyframes pulse {
		0% {
			background-color: #52c41a;
		}
		50% {
			background-color: #0000ff;
		}
		100% {
			background-color: #0000cc;
		}
	}

	animation: ${({ prog }) => prog && 'pulse 3s infinite'};
`;
