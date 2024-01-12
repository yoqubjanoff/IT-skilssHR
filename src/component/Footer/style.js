import styled from 'styled-components';
import Bg from '../../assets/img/footer.png';
export const Wrapper = styled.div`
	width: 100%;
	height: 370px;
	background: url(${Bg});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0 0 0;
	p {
		&.Title {
			color: #18181b;
			font-family: 'Mulish';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			margin: 0 0 10px 0;
			cursor: pointer;
		}

		&.header {
			color: var(--Text-colors, #18181b);
			font-family: 'Mulish';
			font-size: 14px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: 0.7px;
		}

		&.Desc {
			color: rgba(24, 24, 27, 0.7);
			font-family: 'Mulish';
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			cursor: pointer;

			line-height: normal;
		}
	}
`;
Wrapper.Line = styled.div`
	width: 100%;
	height: var(--unit-0, 1px);
	background: #fff;
	margin: 0 0 20px 0;
`;
Wrapper.Wrap = styled.div`
	display: flex;
	width: 1209px;
	justify-content: space-between;
	align-items: flex-start;
	margin: 0 0 70px 0;
	@media only screen and (max-width: 1400px) {
		flex-wrap: wrap;
		width: 100%;
		padding: 0 20px;
	}
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
`;
Wrapper.Box = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ gap }) => (gap ? gap : '30px')};
	justify-content: ${({ jc }) => jc && jc};
	align-items: ${({ ai }) => ai && ai};
	height: ${({ height }) => height && height};
	width: ${({ width }) => (width ? width : 'fit-content')};
	@media only screen and (max-width: 800px) {
		justify-content: center;
		align-items: center;
	}
	&.social {
		@media only screen and (max-width: 400px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 30px;
		}
	}
`;
Wrapper.Wrapper = styled.div`
	width: 1348px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 1400px) {
		width: 100%;
	}
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
`;
Wrapper.Img = styled.img`
	width: 90px;
	height: 52px;
	cursor: pointer;
`;
