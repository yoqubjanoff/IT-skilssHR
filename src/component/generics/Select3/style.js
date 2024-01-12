import styled from 'styled-components';
import { ReactComponent as Up } from '../../../assets/icons/arrowUp.svg';
import { ReactComponent as Down } from '../../../assets/icons/arrowDown.svg';

export const Wrapper = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 15px;
	height: 60px;
	font-weight: 650;
	border-radius: 12px;
	color: #000000;
	align-items: flex-start;
	position: relative;
	margin: ${({ margin }) => margin && margin};

	box-shadow: ${({ active }) =>
		active
			? '4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset'
			: '0px 13px 32px 0px rgba(28, 41, 60, 0.10)'};
	border: ${({ active }) => (active ? '1px solid rgba(13, 59, 63, 0.10)' : '')};
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
	height: 90%;
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
	border: ${({ error }) => (error ? '1px solid #FF0000' : null)};
	border-radius: ${({ radius }) => (radius ? radius : '12px')};
	font-size: 14px;
	/* font-weight: 600; */
	padding: 0 19px;
	background-color: #fff;
	box-shadow: ${({ active }) =>
		active && '4px 5px 8px 0px rgba(24, 40, 63, 0.2) inset'};
	:active {
		border-color: ${({ disabled }) => !disabled && '#d9d9d9'};
		border-color: ${({ disabled }) => !disabled && '#74ade1'};
		.IconCon {
			border-color: ${({ disabled }) => !disabled && '#74ade1'};
		}
	}
`;
Container.Header = styled.div`
	color: ${({ hc }) => (hc ? hc : '#0d3b3f')};
	font-size: ${({ active }) => (active ? '13px' : '16px')};
	font-style: normal;
	font-weight: 600;
	position: absolute;
	top: ${({ active }) => (active ? '-20px' : '22px')};
	left: 20px;
	transition: 0.4s all;
	z-index: 1;
	cursor: pointer;
`;
Container.Placeholder = styled.div`
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
Container.Value = styled.div`
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
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
	padding: 0 10px;
	cursor: pointer;
	background-color: ${({ active }) => active && '#f0f0f0'};
	font-weight: ${({ active }) => active && '650'};

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
