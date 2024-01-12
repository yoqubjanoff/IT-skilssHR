import styled from 'styled-components';
import { ReactComponent as Up } from '../../../assets/icons/arrowUp.svg';

export const Wrapper = styled.div`
	width: 305px;
	height: 60px;
	flex-shrink: 0;
	border-radius: 12px;
	border: ${({ error, active }) =>
		error
			? '1px solid #FF5959'
			: active
			? '1px solid rgba(13, 59, 63, 0.10)'
			: ''};
	background: #fff;
	box-shadow: ${(bsh) => bsh};
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	display: flex;
	align-items: center;
	padding: 0 20px;
	position: relative;
	user-select: none;
	cursor: pointer;
	box-shadow: ${({ active }) =>
		active
			? ' 4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset'
			: '0px 13px 32px 0px rgba(28, 41, 60, 0.10)'};
`;
Wrapper.Header = styled.div`
	color: ${({ hc }) => (hc ? hc : '#0d3b3f')};
	font-size: ${({ active }) => (active ? '13px' : '16px')};
	font-style: normal;
	font-weight: 600;
	position: absolute;
	top: ${({ active }) => (active ? '-20px' : '22px')};
	left: 20px;
	transition: 0.4s all;
	z-index: 1;
`;
export const Container = styled.div`
	width: ${({ width }) => (width ? width : '305px')};
	user-select: none;
	background-color: #fff;
	border-radius: 14.271px;
	box-shadow: 15.697611808776855px 9.275861740112305px 74.20689392089844px 0px
		rgba(32, 27, 82, 0.12);
	z-index: 10;
	position: absolute;
	top: 60px;
	right: 0px;
	height: ${({ open }) => (open ? '250px' : '0px')};
	overflow: hidden;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
`;
Container.WrapBox = styled.div`
	width: ${({ width }) => (width ? width : '305px')};
	gap: 6px;
	padding: 20px;
`;
Container.Flex = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

Container.Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
Container.Column = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
Container.Title = styled.div`
	color: #000;
	font-size: 14px;
	font-weight: 700;
	user-select: none;
`;

Container.FlexBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	user-select: none;
	gap: 1px;
`;

Container.Box = styled.div`
	width: 32px;
	height: 32px;
	background: ${({ active }) => (active ? '#37A67E' : '#fff')};
	color: ${({ active }) => (active ? '#fff' : '#000')};
	font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	font-weight: 600;

	&:hover {
		background-color: ${({ selectable }) => selectable && '#37A67E'};
		color: ${({ selectable }) => selectable && '#fff'};
		font-weight: ${({ selectable }) => selectable && 'bold'};
	}
	cursor: ${({ selectable }) => selectable && 'pointer'};
`;
Wrapper.Error = styled.div`
	position: absolute;
	color: #f00;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	bottom: -22px;
	left: 0px;
`;
Container.BoxMonth = styled.div`
	width: 55px;
	height: 35px;
	font-weight: bold;
	font-size: 14px;
	user-select: none;

	display: flex;
	align-items: center;
	justify-content: center;
	color: #383838;
`;

export const Icon = styled.div``;

Icon.Right = styled(Up)`
	transform: rotate(90deg);
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;
Icon.Left = styled(Up)`
	transform: rotate(-90deg);
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;
Container.Title = styled.div`
	color: ${({ active }) => (active ? '#fff' : '#0d3b3f')};
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;
Container.Desc = styled.div`
	color: #696969;
	font-size: 10px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;
