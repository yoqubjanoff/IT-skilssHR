import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	width: ${({ width }) => (width ? width : '300px')};
	height: ${({ height }) => (height ? height : 'fit-content')};
	border: 1px solid rgba(0, 0, 0, 0.5);
	padding: 15px;
	transform: ${({ open }) => (open ? ' scale(1)' : ' scale(0)')};
	background-color: white;
	transition: 200ms ease-in-out;
	border-radius: 5px;
	left: 0;
	right: 0;
	top: 15%;
	margin-left: auto;
	margin-right: auto;
	z-index: 10;
`;
Container.Back = styled.div`
	position: absolute;
	height: ${({ open }) => (open ? '100%' : '0')};
	width: ${({ open }) => (open ? '100%' : '0')};
	transition: background-color 300ms ease-in-out;
	z-index: 9;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.5)' : 'inherit')};
`;
