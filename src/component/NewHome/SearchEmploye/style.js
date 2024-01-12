import styled from 'styled-components';
import { Select } from 'antd';
import Slider from 'react-slick';

export const AntSelect = styled(Select)`
	.ant-select-selector {
		border: none !important;
		box-shadow: none !important;
		border-radius: 30px;
	}
	.ant-select-option {
		border: 1px solid red !important;
	}
	.ant-select-item .ant-select-item-option {
		border: 1px solid red !important;
	}
	.ant-select-selection-placeholder {
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
	@media (max-width: 430px) {
		width: 94%;
		justify-content: center;
	}

	p {
		.pp {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: 1.12px;
		}

		.search {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			letter-spacing: 0.64px;
			opacity: 0.5;
		}
		&.category {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			letter-spacing: 0.64px;
			opacity: 0.8;
		}
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

		@media (max-width: 1550px) {
		}
	}
`;
Wrapper.Category = styled.div`
	display: flex;
	padding: 12px var(--unit-5, 20px);
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	border-radius: 15px;
	border: 1px solid rgba(24, 24, 27, 0.3);
	cursor: pointer;
	/* :hover {
		background: rgba(24, 24, 27, 0.1);
	} */
	p {
		color: var(--Text-colors, #18181b);
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.64px;
		opacity: 0.8;
	}
`;
Wrapper.Count = styled.div`
	display: flex;
	padding: 6px 14px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 10px;
	background: #22c55e;
	p {
		&.counter {
			color: #fff;
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: 0.64px;
		}
	}
`;
Wrapper.SearchBox = styled.div`
	width: 905px;
	height: 72px;
	flex-shrink: 0;
	border-radius: var(--unit-5, 20px);
	border: 1px solid rgba(24, 24, 27, 0.2);
	background: #fff;
	padding: 0 20px;
	display: flex;
	gap: 20px;
	align-items: center;
	margin: 50px;
	@media only screen and (max-width: 950px) {
		width: 90%;
	}
`;
Wrapper.CategoryBox = styled.div`
	display: inline-flex;
	width: 100%;
	padding: var(--unit-0, 0px);
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 20px var(--unit-5, 20px);
	max-width: 1366px;

	flex-wrap: wrap;
	p {
		&.emp {
			color: #121212;
			font-family: 'Vollkorn';
			font-size: 30px;
			font-style: normal;
			font-weight: 500;
			line-height: 37px;
		}
	}
`;

Wrapper.EmployeBox = styled.div`
	display: inline-flex;
	width: 100%;
	padding: var(--unit-0, 0px);
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 20px var(--unit-5, 20px);
	flex-wrap: wrap;
	p {
		&.emp {
			color: #121212;
			font-family: 'Vollkorn';
			font-size: 30px;
			font-style: normal;
			font-weight: 500;
			line-height: 37px;
			@media only screen and (max-width: 600px) {
				text-align: center;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		width: 88%;
	}
	@media only screen and (max-width: 430px) {
		width: 96%;
	}
`;

Wrapper.CategoryBox2 = styled.div`
	width: 1366px;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;
Wrapper.Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ gap }) => (gap ? gap : '30px')};
	justify-content: ${({ jc }) => jc && jc};
	align-items: ${({ ai }) => ai && ai};
	height: ${({ height }) => height && height};
	width: ${({ width }) => width && width};
`;
Wrapper.CardBox = styled.div`
	width: 411px;
	height: 293px;
	flex-shrink: 0;
	border-radius: var(--unit-4, 16px);
	border: 1px solid rgba(24, 24, 27, 0.3);
	background: #fff;
	padding: 30px;
	position: relative;
	cursor: pointer;
	@media only screen and (max-width: 1440px) {
		width: 320px;
	}
	@media only screen and (max-width: 400px) {
		width: 280px;
	}
	p {
		&.Name {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}

		&.Job {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 13px;
			font-style: normal;
			font-weight: 400;
			line-height: 122.523%;
		}
		&.data {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
`;
Wrapper.CardImage = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	object-fit: cover;
`;
