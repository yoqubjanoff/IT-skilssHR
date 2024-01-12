import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #d9d9d9;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
	position: relative;
	p {
		color: #000;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	div {
		&.Box {
			width: 40px;
			height: 40px;
			background: #f1f1f1;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
		}
		&.FlexBoxAdmin {
			width: fit-content;
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;
		}
	}
`;
Wrapper.Column = styled.div`
	position: absolute;
	top: 54px;
	right: 40px;
	width: 200px;
	height: 112px;
	background: #fff;
	display: ${({ open }) => !open && 'none'};
	box-shadow: 15px 4px 24px 0px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	z-index: 100;
`;
Wrapper.Element = styled.div`
	width: 100%;
	height: 56px;
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 0 20px;
	color: #263238;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 122.523%;
	svg {
		path {
			fill: #000;
		}
	}
	&:hover {
		background-color: #37a67e;
		color: #fff;
		svg {
			path {
				fill: #fff;
			}
		}
	}
	border-radius: ${({ first }) =>
		first ? '12px 12px 0px 0px' : '0 0 12px 12px'};
	cursor: pointer;
`;
