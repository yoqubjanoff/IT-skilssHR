import styled from "styled-components";
import { ReactComponent as Up } from "../../../assets/icons/arrowUp.svg";
import { ReactComponent as Down } from "../../../assets/icons/arrowDown.svg";

export const Container = styled.div`
  width: ${({ width }) => width && width};
  height: ${({ height }) => (height ? height : "40px")};
  position: relative;
  /* border: 1px solid #d9d9d9; */
  display: flex;
  align-items: center;
  transition: all 0.3s;
  user-select: none;
  margin: 0 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => disabled && "#d9d9d9"};
  path {
    fill: ${({ disabled }) => disabled && "#d9d9d9"};
  }
  /* :hover {
    border-color: ${({ disabled }) => !disabled && "#74ade1"};
    & .IconCon {
      border-color: ${({ disabled }) => !disabled && "#74ade1"};
    }
    & svg {
      transition: all 0.3s;
      path {
        fill: ${({ disabled }) => !disabled && "#74ade1"};
      }
    }
  } */

  :active {
    border-color: ${({ disabled }) => !disabled && "#d9d9d9"};
    border-color: ${({ disabled }) => !disabled && "#74ade1"};
    .IconCon {
      border-color: ${({ disabled }) => !disabled && "#74ade1"};
    }
  }
`;

export const Icon = styled.div``;

Icon.Up = styled(Up)``;
Icon.Down = styled(Down)`
  transition: all 0.3s;
  transform: ${({ open }) => open && "rotate(180deg)"};
`;

Container.Icon = styled.div`
  width: 40px;
  height: 100%;
  border-left: ${({ icon }) => icon && "1px solid #d9d9d9"};
  /* border-radius: ${({ icon }) => icon && "0 6px 6px 0"}; */
  position: absolute;
  right: -32px;
  top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
`;

export const Selection = styled.div`
  transition: all 0.3s;
  max-height: ${({ open }) => (open ? "150px" : "0px")};
  transition: all 0.2s;
  background-color: #fff;
  position: absolute;
  user-select: none;
  flex-direction: column;
  width: 100%;
  z-index: 99;
  top: 40px;
  left: -5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  overflow-y: auto;
  cursor: pointer;
  width: max-content;
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
  background-color: ${({ active }) => active && "#f0f0f0"};
  font-weight: ${({ active }) => active && "650"};

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
  background-color: ${({ active }) => active && "#f0f0f0"};
  font-weight: ${({ active }) => active && "650"};
`;
