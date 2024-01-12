import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;

	div {
		&.FlexBox {
			display: flex;
			gap: 10px;
		}
		&.ColumnBox11 {
			width: 100%;
			height: 82vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 34px;
			margin: 20px 0 0 0;
			padding: 20px 0;
		}
		&.ColumnBox {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 34px;
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
		&.BoxStart {
			width: 100%;
			display: flex;
			justify-content: start;
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
	color: #0d3b3f;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	overflow: hidden;
	text-overflow: ellipsis;
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

Wrapper.TitleTruncate = styled.div`
	width: 97%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
Wrapper.ModalBox = styled.div`
	height: 444px;
	display: flex;
	align-items: start;
	padding: 10px;
	text-align: center;
	width: 100%;
	justify-content: center;
`;
Wrapper.Tag = styled.div`
	width: 154px;
	height: ${({ lan }) => (lan ? '82px' : '52px')};
	flex-shrink: 0;
	border-radius: 10px;
	background: ${({ active }) => (active ? '#37a67e' : '#fff')};
	color: ${({ active }) => (active ? '#fff' : '#000')};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	cursor: pointer;
	border-radius: 12px;
	border: ${({ lan }) => lan && '1px solid #e1e1e1'};
	transition: all 0.3s;
`;

Wrapper.TagBox = styled.div`
	width: 318px;
	height: 60px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
`;
Wrapper.BigTag = styled.div`
	width: 160px;
	height: 162px;
	border-radius: 12px;
	border: ${({ active }) =>
		active ? '1px solid #37A67E' : '1px solid #e1e1e1'};

	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 25px;
	cursor: pointer;
`;
Wrapper.FileInput = styled.input`
	display: none;
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
