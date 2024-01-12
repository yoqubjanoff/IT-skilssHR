import styled from 'styled-components';

const CardStyle = styled.div`
	padding: 32px;
	margin-bottom: 0.7em;
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 24px 40px 0px rgba(55, 68, 85, 0.3);
	width: 400px;
	@media (max-width: 410px) {
		min-width: 300px;
		width: 300px;
	}
	.headImg {
		justify-content: space-between;
		display: flex;
		align-items: center;
		.imgItem {
			display: flex;
			align-items: center;
			h5 {
				color: var(--text, #0d3b3f);
				font-family: sans-serif;
				font-size: 24px;
				font-style: normal;
				font-weight: 600;
				line-height: 122.523%; /* 29.405px */
			}
			h6 {
				color: var(--text, #0d3b3f);
				font-family: sans-serif;
				font-size: 13px;
				font-style: normal;
				font-weight: 400;
				line-height: 122.523%; /* 15.928px */
			}
		}
	}
	.headCard {
		margin-top: 1.5em;
		.cardItem {
			display: flex;
			align-items: center;
			margin-top: 1.2em;
			h6 {
				color: var(--text, #0d3b3f);
				font-family: sans-serif;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				margin-left: 0.5em;
			}
		}
	}
	.img-talent {
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}
`;

export default CardStyle;
export const Wrapper = styled.div``;
Wrapper.BoxImg = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(0deg, #eee 0%, #eee 100%), url(<path-to-image>),
		lightgray 50% / cover no-repeat;
	background: ${({ url }) => url && `url(${url})`};
	background-position: center;
	background-size: cover;
`;

Wrapper.TitleTruncate = styled.p`
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #0d3b3f;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 122.523%;
	@media (max-width: 410px) {
		font-size: 16px;
	}
`;
