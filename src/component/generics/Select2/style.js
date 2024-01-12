import styled from 'styled-components';
import { ReactComponent as Up } from '../../../assets/icons/arrowUp.svg';
import { ReactComponent as Down } from '../../../assets/icons/arrowDown.svg';

export const Wrapper = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 15px;
	font-weight: 650;
	color: #000000;
	align-items: flex-start;
	position: relative;
	background: ${({ language }) => language && 'inherit'};
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
export const Container = styled.div`
	width: 100%;
	outline: none;
	height: ${({ height }) => (height ? height : '60px')};
	position: relative;
	display: flex;
	align-items: center;
	transition: all 0.3s;
	user-select: none;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	color: ${({ disabled }) => disabled && '#959595;'};
	/* path {
    fill: ${({ disabled }) => disabled && '#d9d9d9'};
  } */
	border: ${({ br, error }) => (error ? '1px solid #FF0000' : br ? br : null)};
	border-radius: ${({ radius }) => (radius ? radius : '12px')};
	font-size: 14px;
	/* font-weight: 600; */
	padding: 0 19px;
	background-color: #fff;
	background: ${({ language }) => language && 'inherit'};

	:active {
		border-color: ${({ disabled }) => !disabled && '#d9d9d9'};
		border-color: ${({ disabled }) => !disabled && '#74ade1'};
		.IconCon {
			border-color: ${({ disabled }) => !disabled && '#74ade1'};
		}
	}
`;
Container.Header = styled.div`
	color: #0d3b3f;
	font-size: 17px;
	font-style: normal;
	font-family: system-ui;
	font-weight: 500;
`;
Container.Placeholder = styled.div`
	display: flex;
	align-items: center;
	gap: 3px;
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	color: #0d3b3f;
	font-size: 17px;
	font-style: normal;
	font-family: system-ui;
	font-weight: 500;
`;
Container.Value = styled.div`
	color: #0d3b3f;
	font-size: 17px;
	font-style: normal;
	font-family: system-ui;
	font-weight: 500;
`;

export const Icon = styled.div``;

Icon.Up = styled(Up)``;
Icon.Down = styled(Down)`
	transition: all 0.3s;
	transform: ${({ open }) => open && 'rotate(180deg)'};
`;

Container.Icon = styled.div`
	width: 40px;
	height: 100%;
	border-left: ${({ icon }) => icon && '1px solid #d9d9d9'};
	/* border-radius: ${({ icon }) => icon && '0 6px 6px 0'}; */
	position: absolute;
	right: 10px;
	top: 2px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	cursor: pointer;
`;

export const Selection = styled.div`
	transition: all 0.3s;
	max-height: ${({ open }) => (open ? '150px' : '0px')};
	transition: all 0.2s;
	background-color: #fff;
	position: absolute;
	user-select: none;
	flex-direction: column;
	width: 100%;
	z-index: 99;
	top: ${({ height }) => (height ? '41px' : '60px')};
	left: 0px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	outline: none;
	overflow-y: auto;
	cursor: pointer;
	/* width: max-content; */
	&::-webkit-scrollbar {
		background-color: #ccc;
	}

	&::-webkit-scrollbar {
		width: 4px;
		background-color: inherit;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ccc;
	}
	border-radius: 10px;
`;

Selection.Item = styled.div`
	height: 40px;
	transition: height 0.3s;
	z-index: 99;

	user-select: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	cursor: pointer;
	background-color: ${({ active }) => active && '#f0f0f0'};
	font-weight: ${({ active }) => active && '650'};
	color: #0d3b3f;
	font-size: 17px;
	font-style: normal;
	font-family: system-ui;
	font-weight: 500;

	&:hover {
		background-color: #f0f0f0;
		font-weight: 650;
	}
`;

Selection.Item1 = styled.div`
	height: 40px;
	transition: height 0.3s;
	z-index: 99;

	user-select: none;
	display: flex;
	align-items: center;
	padding: 0 10px;
	cursor: pointer;
	background-color: ${({ active }) => active && '#f0f0f0'};
	font-weight: ${({ active }) => active && '650'};
`;
