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
Wrapper.Standart = styled.div`
	display: flex;
	width: 128px;
	padding: 6px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;
	background: rgba(255, 135, 0, 0.06);
	color: #ff8700;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
`;
Wrapper.NotVerify = styled.div`
	display: flex;
	width: 128px;
	padding: 6px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;
	background: rgba(255, 58, 58, 0.06);
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
	color: #ff3a3a;
`;
Wrapper.Detailed = styled.div`
	display: flex;
	width: 128px;
	padding: 6px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 100px;
	background: rgba(55, 166, 126, 0.06);
	color: #37a67e;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
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
