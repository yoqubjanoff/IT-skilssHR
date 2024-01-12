import styled from 'styled-components';
export const Wrapper = styled.div`
	width: 280px;
	height: 131px;
	border-radius: 14px;
	border: 1px solid #e1e1e1;
	background: #fff;
	padding: 24px;
	display: flex;
	align-items: center;
	div {
		&.FlexBox {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 10px;
		}
		&.Beetwen {
			justify-content: space-between;
		}
		&.ColumnBox1 {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 10px;
			padding: 0;
		}
	}
`;
Wrapper.Title = styled.p`
	color: #000;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	&.Header {
		font-size: 20px;
		font-weight: 500;
	}
`;

Wrapper.Desc = styled.p`
	color: ${({ inc }) => (inc ? '#FF5151' : '#2EBD87')};
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
