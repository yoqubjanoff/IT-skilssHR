import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	div {
		&.FlexBox {
			display: flex;
			gap: 10px;
		}
		&.ColumnBox {
			width: 100%;
			height: 90vh;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 20px;
		}
		&.TagBox {
			width: 100%;
			height: 50px;
			border-radius: 100px;
			background: #f4f7f4;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 4px;
			gap: 5px;
		}
		&.Box {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
		}
	}
	p {
		&.Header {
			color: #000;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
	}
`;
Wrapper.Title = styled.p`
	color: ${({ last }) => (last ? '#fff' : ' #0b3a48')};
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
`;
Wrapper.Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	position: relative;
`;
Wrapper.BoxImg = styled.div`
	width: 40px;
	height: 40px;
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

Wrapper.Mini = styled.div`
	width: 4px;
	height: 4px;
	border-radius: 4px;
	background-color: ${({ active }) => (!active ? '#37a67e' : '#ff4848')};
`;

Wrapper.BoxIcon = styled.div`
	position: relative;
	display: flex;
	width: 33px;
	height: 33px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	cursor: pointer;
	border: 1px solid
		${({ type }) =>
			type === 'comment' ? '#EEE' : type === 'close' ? '#FF5151' : '#37A67E'};
`;

Wrapper.Comment = styled.div`
	position: absolute;
	display: ${({ hover }) => (hover ? 'flex' : 'none')};
	width: 356px;
	padding: 20px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	z-index: 1;
	line-height: 20px;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	left: -365px;
	top: 0px;
	color: #000;
`;

Wrapper.WrapTable = styled.div`
	width: 100%;
	height: 95%;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}
`;
Wrapper.Ticket = styled.div`
	display: ${({ open }) => !open && 'none'};
	position: absolute;
	width: 196px;
	height: 60px;
	flex-shrink: 0;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	bottom: -65px;
	left: -65px;
	padding: 20px;
	color: #0d3b3f;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;

	cursor: pointer;
	&:hover {
		box-shadow: 4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset;
		color: #37a67e;
	}
	&:active {
		box-shadow: 6px 7px 8px 0px rgba(24, 40, 63, 0.36) inset;
		color: #37a67e;
	}
`;
Wrapper.TicketTitle = styled.div`
	color: #0d3b3f;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
`;
