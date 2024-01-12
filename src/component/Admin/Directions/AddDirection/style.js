import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	div {
		&.FlexBox {
			display: flex;
			gap: 10px;
		}

		&.ColumnBox4 {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			gap: 35px;
			padding: 20px;
			overflow-y: scroll;
			height: calc(100vh - 60px);
		}
		&.TagBoxEnd {
			width: 100%;
			height: 50px;
			border-radius: 100px;
			background: #f4f7f4;
			display: flex;
			align-items: center;
			justify-content: end;
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
		&.AddSub {
			color: #37a67e;
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
			line-height: 22px;
			cursor: pointer;
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

Wrapper.Textare = styled.textarea`
	width: 761px;
	height: 120px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	padding: 10px;
	outline: none;
`;
Wrapper.Header = styled.div`
	color: #0d3b3f;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	opacity: 0.43;
`;
Wrapper.Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
Wrapper.Radio = styled.input`
	width: 20px;
	height: 20px;
`;
Wrapper.Subdirection = styled.div`
	min-width: 375px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
Wrapper.WrapTable = styled.div`
	width: 100%;
	height: 95%;
	padding: 30px 0 100px 0;
	display: flex;
	flex-direction: column;
	gap: 15px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}
`;
