import styled from 'styled-components';
import Man from '../../../assets/img/admin-hr.png';

export const Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1920px;
	display: flex;
	justify-content: space-between;
	div {
		&.BoxPadding {
			padding: 90px 40px;
		}
		&.Box {
			width: 407px;
			padding: 0;
		}
	}
	p {
		color: #0d3b3f;
		font-size: 42px;
		font-style: normal;
		font-weight: 500;
		line-height: 50px;

		&.Desc {
			color: #fff;
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
			line-height: 122.523%;
		}
	}
`;
Wrapper.Column = styled.div`
	width: 650px;
	display: flex;
	flex-direction: column;
	gap: 50px;
`;

Wrapper.Flex = styled.div`
	width: fit-content;
	display: flex;
	gap: 20px;
`;

Wrapper.ImgBox = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	position: relative;
`;
Wrapper.Img = styled.div`
	background-image: url(${Man});
	width: 100%;
	height: 100vh;
	background-position: center;
	background-size: cover;
	position: absolute;
	bottom: 0;
	z-index: 1;
`;
