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
		&.ModalBox {
			width: fit-content;
			display: flex;
			flex-direction: column;
			gap: 40px;
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
	height: 574px;
	display: flex;
	align-items: center;
	padding: 0 100px;
	text-align: center;
	width: 100%;
	justify-content: center;
`;

Wrapper.Name = styled.h5`
	&:hover {
		text-decoration: underline;
	}
	cursor: pointer;
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
