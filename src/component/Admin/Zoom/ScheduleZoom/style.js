import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	div {
		&.FlexBoxZoom {
			display: flex;
			gap: 10px;
		}
		&.ColumnBox {
			width: 100%;
			height: 100%;
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
Wrapper.Title = styled.div`
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	width: 112px;
`;
Wrapper.Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
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

Wrapper.InputBox = styled.div`
	width: 353px;
	height: 60px;
	border-radius: 12px;
	border: 1px solid ${({ active }) => (active ? '#37a67e' : '#E1E1E1')};
	background: #fff;
	display: flex;
	align-items: center;
	padding: 16px;
	font-weight: 600;
`;

Wrapper.Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* gap: 5px; */
`;

Wrapper.ButtonBox = styled.div`
	width: 353px;
	height: 60px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	cursor: pointer;
`;
Wrapper.Input = styled.input`
	width: 200px;
	height: 90%;
	background-color: inherit;
	border: none;
	outline: none;
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 29px;
`;
Wrapper.Stack = styled.div`
	width: 1px;
	height: 22px;
	background: #d9d9d9;
	margin: 0 10px 0 0;
`;
Wrapper.Box = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 12px;
	border: 1px solid #e1e1e1;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
Wrapper.WrapTable = styled.div`
	width: 100%;
	height: 685px;
	display: flex;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}
`;
