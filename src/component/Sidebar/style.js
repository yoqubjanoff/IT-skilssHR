import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 270px;
	height: calc(100vh - 60px);
	border-right: 1px solid #d9d9d9;
	background: #fff;
	display: flex;
	padding: 60px 8px;
	flex-direction: column;
	gap: 5px;
	position: relative;
	div {
		&.FlexBoxClose {
			width: 153px;
			display: flex;
			align-items: center;
			gap: 5px;
			cursor: pointer;
			position: absolute;
			bottom: 45px;
		}
	}
`;
Wrapper.Title = styled.p`
	color: ${({ active }) => (active ? '#37A67E' : '#0d3b3f')};
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 122.523%;
`;
Wrapper.Flex = styled.div`
	width: 255px;
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 12px 40px;
	cursor: ${({ disable }) => (disable ? 'not-allowed' : 'pointer')};
	opacity: ${({ disable }) => (disable ? '0.5' : '1')};
	background: ${({ active }) => active && '#f4f7f4'};
	border-radius: 100px;
	p {
		color: ${({ active }) => active && '#37a67e'};
	}
	svg {
		path {
			fill: ${({ active }) => active && '#37a67e'};
		}
	}
	&:hover {
		background-color: ${({ disable }) => !disable && '#f4f7f4'};
		/* p {
			color: ${({ disable }) => !disable && '#37a67e'};
		} */
		/* svg {
			path {
				fill: ${({ disable }) => !disable && '#37a67e'};
			}
		} */
	}
`;
