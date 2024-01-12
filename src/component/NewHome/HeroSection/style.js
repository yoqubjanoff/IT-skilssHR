import styled, { keyframes } from 'styled-components';
import Bg from '../../../assets/img/HeaderBGNoise.png';
import BgBlue from '../../../assets/img/HeaderBGBlueCircle.png';
import BgOrange from '../../../assets/img/HeaderBGOrangeCircle.png';
import { Button } from 'antd';

export const AntdButton = styled(Button)`
	display: flex;
	height: var(--size-action-button-size-md, 44px);
	padding: var(--unit-3, 12px) var(--unit-6, 24px);
	justify-content: center;
	align-items: center;
	gap: var(--unit-2, 8px);
	border-radius: 12px;
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: 1078px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 999;

	background: url(${Bg}), #fff 0% 0% / 100px 100px repeat;
	@media (max-width: 1380px) {
		min-height: 1420px;
	}
	@media (max-width: 1000px) {
		min-height: 1520px;
	}
	.sections {
		display: flex;
		align-items: center;
		gap: 20px;
		@media (max-width: 1000px) {
			justify-content: center;
			width: 100%;
		}
		@media (max-width: 405px) {
			flex-direction: column;
		}
	}
	.TitleHero {
		color: var(--Text-colors, #18181b);
		font-family: 'Vollkorn';
		font-size: 66px;
		font-style: normal;
		font-weight: 600;
		line-height: 90px;
		@media (max-width: 1000px) {
			margin-top: 40px;
			font-size: 40px;
			line-height: 40px;
		}
		@media (max-width: 450px) {
			margin-top: 20px;
			font-size: 31px;
			line-height: 40px;
		}
	}
	background-position: center;
	background-size: cover;
	@media (max-width: 1000px) {
		min-height: 800px;
		height: fit-content;
	}
	@media (max-width: 450px) {
		min-height: 975px;
		height: fit-content;
	}
	.slick-arrow {
		display: none !important;
	}
`;
const moveAlongPath = keyframes`
  0% {
    	right: 0px;
		top: 0px;
  }
  50% {
	right: 900px;
	top: 200px;

  }
  100% {
   	right: 0px;
	top: 0px;
  }
`;
const moveAlongPath2 = keyframes`
  0% {
    	right: 0px;
		top: 0px;
  }
  50% {
	right: 30px;
	top: 50px;

  }
  100% {
   	right: 0px;
	top: 0px;
  }
`;
const moveAlongPathOrange = keyframes`
  0% {
    		left: -120px;
	bottom: 20px;
  }
  50% {
	left: 850px;
	bottom: 180px;
	
  }
  100% {
 	left: -120px;
	bottom: 20px;
  }
`;
const moveAlongPathOrange2 = keyframes`
  0% {
    		left: -120px;
	bottom: 20px;
  }
  50% {
	left: -100px;
	bottom: 20px;
	
  }
  100% {
 	left: -120px;
	bottom: 20px;
  }
`;
Wrapper.Blue = styled.div`
	width: 559px;
	height: 559px;
	position: absolute;
	background: url(${BgBlue});
	filter: blur(80px);
	right: 0px;
	background-size: contain;
	animation: ${moveAlongPath} 12s linear infinite;
	@media (max-width: 1360px) {
		animation: ${moveAlongPath2} 12s linear infinite;
	}
	@media (max-width: 450px) {
		width: 279px;
		height: 279px;
	}
`;
Wrapper.Orange = styled.div`
	width: 559px;
	height: 559px;
	position: absolute;
	background-image: url(${BgOrange});
	left: -120px;
	bottom: 20px;
	filter: blur(80px);
	animation: ${moveAlongPathOrange} 12s linear infinite;
	@media (max-width: 1360px) {
		animation: ${moveAlongPathOrange2} 12s linear infinite;
	}
	background-size: contain;
	@media (max-width: 450px) {
		width: 279px;
		left: -20px;
		height: 279px;
	}
`;

Wrapper.Box = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 120px;
	@media (max-width: 1375px) {
		flex-direction: column;
	}
	@media (max-width: 475px) {
		margin-top: 50px;
	}
`;
Wrapper.BoxImg = styled.div`
	width: 630px;
	height: 730px;
	z-index: 2;
	margin-top: 80px;
	@media (max-width: 1375px) {
		height: 530px;
		margin-top: 0px;
	}
	@media (max-width: 1000px) {
		display: none;
	}
`;
Wrapper.Column = styled.div`
	display: flex;
	padding: var(--unit-0, 0px);
	flex-direction: column;
	align-items: flex-start;
	gap: var(--unit-6, 26px);
	width: 932px;
	margin: 0 0 40px 0;
	.middle {
		color: var(--color-text-primary, #17171b);
		text-align: center;
		font-feature-settings: 'salt' on;
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}
	@media (max-width: 1600px) {
		width: 632px;
	}
	@media (max-width: 1375px) {
		width: 932px;
	}
	@media (max-width: 1000px) {
		width: 90%;
		padding: 20px;
		text-align: center;
	}
`;
