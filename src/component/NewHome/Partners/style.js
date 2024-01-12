import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
	margin-bottom: 80px;
`;

Wrapper.ImgCompanies = styled.a`
	width: 210px;
	height: 130px;
	display: flex;
	outline: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	img {
		width: 230px;
		height: 150px;
		object-fit: scale-down;
	}
`;

Wrapper.Center = styled.div`
	width: 100%;
	max-width: 1366px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 60px;
	margin: 0 0 50px 0;
	@media (max-width: 1400px) {
		flex-direction: column;
	}
	@media (max-width: 650px) {
		width: 90%;
	}
	@media (max-width: 550px) {
		width: 88%;
	}
	@media (max-width: 450px) {
		width: 86%;
	}
	@media (max-width: 375px) {
		width: 75%;
	}
`;
Wrapper.Slider = styled(Slider)`
	width: 92%;
	margin: 0 auto;

	.carousel-container {
		cursor: pointer;
	}

	.sc-knUktI {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 576px) {
		width: 100%;
	}

	.slick-track {
		display: flex;
		gap: 20px;
	}
`;
Wrapper.BoxCard = styled.div`
	width: 100%;
	min-height: 400px;
	flex-shrink: 0;
	border-radius: var(--unit-0, 0px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	align-items: center;
	background: #eff6ff;
	padding-top: 20px;
`;
Wrapper.CardWhy = styled.div`
	width: 411px;
	height: 185px;
	background: #fff;
	border-radius: 30px;
	position: relative;

	background-image: ${({ url }) => url && `url(${url})`};
	background-repeat: no-repeat;
	background-position: 277px 0;
	padding: 20px 20px 50px 20px;
	display: flex;
	justify-content: start;
	align-items: center;

	p {
		&.Title {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 32px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
		}
		&.Desc {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px; /* 142.857% */
			opacity: 0.6;
		}
	}

	@media (max-width: 1400px) {
		width: 328px;
		background-size: contain;
		background-repeat: no-repeat;
		height: 205px;
		background-position: 210px 0px;
		background-size: 120px;
	}
	@media (max-width: 400px) {
		width: 288px;
		height: 225px;
	}
`;
Wrapper.Column = styled.div`
	width: 254px;
	height: 60px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

Wrapper.Rek1 = styled.div`
	width: 556px;
	height: 468px;
	flex-shrink: 0;
	border-radius: var(--unit-5, 20px);
	background: #22c55e;
	padding: 42px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;
	cursor: pointer;
	@media (max-width: 600px) {
		width: 338px;
	}
`;

Wrapper.Rek2 = styled.div`
	width: 556px;
	height: 468px;
	flex-shrink: 0;
	border-radius: var(--unit-5, 20px);
	background: var(--color-blue-400, #60a5fa);
	padding: 42px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;
	cursor: pointer;
	@media (max-width: 600px) {
		width: 338px;
	}
`;

Wrapper.Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ gap }) => (gap ? gap : '30px')};
	justify-content: ${({ jc }) => jc && jc};
	align-items: ${({ ai }) => ai && ai};
	height: ${({ height }) => height && height};
	width: ${({ width }) => width && width};
	&.rek {
		@media (max-width: 1300px) {
			width: 100%;
			flex-direction: column;
			align-items: center;
			height: fit-content;
		}
	}
	&.why {
		@media (max-width: 1300px) {
			width: 100%;
			flex-direction: column;
			align-items: center;
			height: fit-content;
		}
	}
	p {
		&.TitleR {
			width: 413px;
			color: #fff;
			font-family: 'Vollkorn';
			font-size: 32px;
			font-style: normal;
			font-weight: 800;
			line-height: 44px;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 26px;
			}
		}
		&.DescR {
			width: 311px;
			color: rgba(255, 255, 255, 0.9);
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 28px;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 16px;
			}
		}
		&.DescT {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 25px;
		}
		&.Title1 {
			color: var(--Text-colors, #18181b);
			font-family: 'Vollkorn';
			font-size: 36px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: 1.44px;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 30px;
				margin-top: 40px;
				text-align: center;
			}
		}
		&.Title2 {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 25px; /* 156.25% */
			letter-spacing: 0.64px;
			opacity: 0.7;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 14px;
			}
		}
		&.Title3 {
			color: var(--black-lighter, #24272d);
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 24px; /* 150% */
			letter-spacing: 0.64px;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 14px;
			}
		}
		&.Title4 {
			color: var(--Black, #131517);
			text-align: center;
			font-family: 'Proxima Nova';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: 24px; /* 133.333% */
			letter-spacing: 0.72px;
			@media (max-width: 600px) {
				width: 90%;
				font-size: 16px;
			}
		}
	}
`;
Wrapper.Rek1Image = styled.img`
	width: 375px;
	height: 274px;
	position: absolute;
	bottom: 0;
	right: 0;
	@media (max-width: 600px) {
		width: 273px;
		height: 200px;
	}
`;
Wrapper.Rek2Image = styled.img`
	width: 223px;
	height: 300px;
	position: absolute;
	bottom: 0;
	right: 10px;
	@media (max-width: 600px) {
		width: 150px;
		height: 200px;
	}
`;
Wrapper.IconBox = styled.div`
	width: 52px;
	height: 52px;
	border-radius: var(--unit-4, 16px);
	background: #22c55e;
	display: flex;
	align-items: center;
	justify-content: center;
`;
Wrapper.CardBox = styled.div`
	width: 412px;
	height: 150px;
	border-radius: var(--unit-4, 16px);
	background: #fafafa;
	padding: 30px;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 26px;
	cursor: pointer;
	@media (max-width: 450px) {
		width: 328px;
	}
	p {
		&.Title {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 20px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: 0.8px;
		}
		&.Desc {
			color: var(--Gray---Neutral, #6e7175);
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px; /* 133.333% */
			letter-spacing: 0.72px;
		}
	}
`;
Wrapper.CardIconBox = styled.div`
	display: flex;
	/* transform: rotate(-30deg); */
	padding: 12px;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border-radius: 50px;
	border: 1px solid rgba(24, 24, 27, 0.1);
	box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.02);
	position: absolute;
	top: 10px;
	right: 10px;
`;
Wrapper.WhyImgBox = styled.div`
	width: 505px;
	height: 546px;
	border-radius: var(--unit-5, 20px);
	background: var(--blue-lighter, #f3f7fa);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: end;
	@media (max-width: 575px) {
		width: 320px;
		height: 400px;
		margin: 50px 0;
	}
`;

Wrapper.CupBox = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #22c55e;
`;

Wrapper.GlobalBox = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #ef4444;
`;

Wrapper.CrownBox = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #60a5fa;
`;
Wrapper.CoinBox = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: #fbbf24;
`;
Wrapper.ReneImg = styled.img`
	width: 350px;
	height: 518px;
	flex-shrink: 0;
	@media (max-width: 575px) {
		width: 216px;
		height: 320px;
	}
`;
Wrapper.BorderBox = styled.div`
	display: flex;
	width: 254px;
	padding: var(--unit-4, 16px) 20px var(--unit-4, 16px) var(--unit-6, 24px);
	align-items: center;
	gap: var(--unit-4, 16px);
	border-radius: 12px;
	border: 1px solid #d6dae0;
	height: 72px;
`;
Wrapper.Trusted = styled.div`
	width: 210px;
	height: 61px;
	display: flex;
	padding: var(--unit-0, 15px) var(--unit-0, 34px) var(--unit-0, 14px)
		var(--unit-0, 16px);
	align-items: center;
	justify-content: center;
	gap: var(--unit-0, 0px);
	border-radius: 12px;
	background: #fff;
	box-shadow: 5px 9px 20px 3px rgba(19, 21, 23, 0.1);
	color: var(--Black, #131517);
	text-align: center;
	font-family: 'Mulish';
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px; /* 133.333% */
	letter-spacing: 0.72px;
	gap: 4px;
	position: absolute;
	top: 67px;
	left: -67px;
	@media (max-width: 575px) {
		top: -10px;
		left: -7px;
	}
`;
