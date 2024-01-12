import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	div {
		&.FlexBox {
			width: 100%;
			display: flex;
			gap: 10px;
			justify-content: space-between;
		}
		&.ColumnBox {
			width: 100%;
			height: 95vh;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 20px;
			height: 100%;
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

	.blogImgRen {
		width: 69px;
		height: 44px;
		border-radius: 6px;
		border: 1px solid #eee;
		object-fit: cover;
	}
`;
Wrapper.Box = styled.div`
	display: flex;
	width: 33px;
	height: 33px;
	padding: 4px 6px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border-radius: 100px;
	border: 1px solid #eee;
	cursor: pointer;
`;

Wrapper.ModalBox = styled.div`
	height: 554px;
	display: flex;
	align-items: center;
	padding: 0 100px;
	text-align: center;
`;
Wrapper.Name = styled.h5`
	&:hover {
		text-decoration: underline;
	}
	cursor: pointer;
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
`;
Wrapper.WrapTable = styled.div`
	width: 100%;
	height: 60vh;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}
`;
Wrapper.SubDirections = styled.div`
	display: flex;
	padding: 4px 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;
	border: 1px solid #eee;
	color: #0d3b3f;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
`;
Wrapper.Count = styled.div`
	display: flex;
	padding: 4px 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;
	border: 1px solid #37a67e;
	color: #37a67e;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
`;
