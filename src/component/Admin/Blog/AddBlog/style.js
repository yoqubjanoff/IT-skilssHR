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
	padding: 50px 50px 100px 50px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: #888;
		height: 40px;
	}

	.blogTwoInput {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 20px;

		.inputUpload {
			max-width: 643px;
			width: 100%;
		}

		& > .Wrapper-input-f {
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column-reverse;
			align-items: center;
			border-radius: 20px;
			border: 2px dashed #e1e1e1;
			background: #fff;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
			max-width: 311px;
			height: 178px;
			margin: 0 7% 0 0;

			label {
				margin-top: 6px;
				color: #0d3b3f;
				font-size: 16px;
				font-weight: 400;
				opacity: 0.4;

				&:hover {
					opacity: 1;
					transition: all 0.2s ease-in-out;
				}


				div {
					width: 200px;
					height: 100px;
				}
			}

			img{
				cursor: pointer;
			}

			p {
				position: absolute;
				left: 10px;
				bottom: -30px;
			}

			@media (max-width: 1500px) {
				margin: 0 0 0 0;
			}
			input[type='file'] {
				display: none;
			}
		}
		& > .fileName {
			margin-left: 1%;
			font-size: 25px;
		}
	}

	.se-wrapper-inner {
		min-height: 370px !important;
	}
`;
