import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 350px;
	height: 270px;

	/* margin: ${(m) => m}; */
	height: auto;
	margin: 10px 12px;
	border-radius: 30px;
	background: #fff;
	position: relative;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	@media (max-width: 1200px) {
		width: 230px;
		height: 270px;
		margin: 0 10px;
	}
`;
Wrapper.Img = styled.img`
	width: 100%;
	height: 240px;
	border-radius: 30px;
	object-fit: cover;
`;
Wrapper.Flex = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

Wrapper.Column = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
Wrapper.Box = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 60px 30px;
	position: relative;
	@media (max-width: 1024px) {
		height: 150px;
		padding: 25px;
	}
`;
Wrapper.Title = styled.p`
	color: #043b87;
	font-size: 24px;
	font-weight: 500;
	overflow: hidden;
	font-family: system-ui;
	white-space: nowrap;
	text-overflow: ellipsis;
	@media (max-width: 900px) {
		font-size: 18px;
	}
`;
Wrapper.Desc = styled.p`
	color: #0d3b3f;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	opacity: ${({ opacity }) => opacity && '0.6'};
	@media (max-width: 900px) {
		font-size: 12px;
	}
`;
