import styled from 'styled-components';
import Noise from '../../../assets/img/BannerNoise.png';

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
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
	margin: 120px 0 0 0;
	p {
		color: var(--Text-colors, #18181b);
		font-family: 'Mulish';
		font-size: 28px;
		font-style: normal;
		font-weight: 600;
		line-height: 50px; /* 178.571% */

		&.Desc {
			color: var(--Text-colors, #18181b);
			text-align: center;
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			opacity: 0.6;
		}
	}
`;

Wrapper.Wrap = styled.div`
	width: 1348px;
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-wrap: wrap;
	@media (max-width: 1375px) {
		width: 90%;
	}
`;

Wrapper.CardBlog = styled.div`
	display: flex;
	width: 322px;
	padding: 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	border-radius: 20px;
	border: 1px solid rgba(24, 24, 27, 0.2);
	padding: 16px;
	height: 428px;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	text-overflow: ellipsis;
	p {
		&.TitleHead {
			color: var(--neutral-900, #18181b);
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: 28px;
		}

		&.TitleBody {
			color: var(--neutral-500, #71717a);
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px;
		}
	}
	@media (max-width: 475px) {
		align-items: center;
	}
`;
Wrapper.TrunCateBox = styled.div`
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
`;
Wrapper.CardCource = styled.a`
	display: flex;
	width: 322px;
	padding: 16px;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	border-radius: 20px;
	border: 1px solid rgba(24, 24, 27, 0.2);
	padding: 16px;
	height: 320px;
	position: relative;
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	p {
		&.TitleHead {
			color: var(--neutral-900, #18181b);
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: 28px;
		}

		&.TitleBody {
			color: var(--neutral-500, #71717a);
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px;
		}
	}
	@media (max-width: 475px) {
		align-items: center;
	}
`;
Wrapper.Badge = styled.div`
	display: flex;
	padding: 2px 8px;
	align-items: center;
	gap: var(--unit-1, 4px);
	border-radius: 6px;
	background: var(--primary-50, #eff6ff);
	color: var(--primary-600, #2563eb);
	font-feature-settings: 'salt' on;
	font-family: 'Mulish';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px; /* 133.333% */
`;

Wrapper.BadgeCircle = styled.div`
	width: 8px;
	border-radius: 8px;
	height: 8px;
	background: #2563eb;
`;

Wrapper.CardBlogImage = styled.img`
	width: 290px;
	height: 172.478px;
	border-radius: 12px;
	object-fit: cover;
	@media (max-width: 475px) {
		width: 99%;
	}
`;
Wrapper.CourceImage = styled.img`
	width: 290px;
	height: 172.478px;
	border-radius: 12px;
	border: 1px solid rgba(24, 24, 27, 0.2);
	object-fit: none;
	@media (max-width: 475px) {
		width: 99%;
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
	@media (max-width: 1375px) {
		width: 90%;
	}
`;
Wrapper.CourseBadge = styled.div`
	display: inline-flex;
	padding: var(--unit-1, 4px) 8px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 9px;
	background: #22c55e;
	color: #fff;
	font-feature-settings: 'salt' on;
	font-family: 'Mulish';
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	position: absolute;
	top: 26px;
	right: 26px;
`;
Wrapper.WrapBlue = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: #eff6ff;

	min-height: 587px;
	@media (max-width: 1375px) {
		min-height: 820px;
	}
`;

Wrapper.WrapBlueBox = styled.div`
	width: 1120px;
	height: 427px;
	flex-shrink: 0;
	border-radius: var(--unit-6, 24px);
	position: relative;
	padding: 64px;
	background: url(${Noise}), #2563eb 0% 0% / 100px 100px repeat;
	@media (max-width: 1375px) {
		width: 500px;
		height: 700px;
		flex-direction: column;
	}
	@media (max-width: 630px) {
		width: 90%;
		height: 760px;

		padding: 60px 30px;
	}
	p {
		&.TitleBlue {
			color: var(--white, #fff);
			font-family: 'Vollkorn';
			font-size: 36px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			letter-spacing: 1.44px;
			@media (max-width: 1375px) {
				font-size: 30px;
			}
			@media (max-width: 375px) {
				font-size: 26px;
			}
		}
		&.DescBlue {
			color: var(--white, #fff);
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 30px; /* 166.667% */
			letter-spacing: 0.72px;
			@media (max-width: 1375px) {
				font-size: 16px;
			}
			@media (max-width: 375px) {
				font-size: 14px;
			}
		}
		&.btn {
			color: var(--color-text-primary, #17171b);
			text-align: center;
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 24px;
		}
	}
`;

Wrapper.WrapBlueImg = styled.img`
	width: 645px;
	height: 477px;
	position: absolute;
	right: -1px;
	bottom: 1px;
	@media (max-width: 1375px) {
		width: 452.556px;
		height: 279.563px;
	}
	@media (max-width: 475px) {
		width: 322.556px;
		height: 249.563px;
	}
	@media (max-width: 375px) {
		width: 282.556px;
		height: 249.563px;
	}
`;
