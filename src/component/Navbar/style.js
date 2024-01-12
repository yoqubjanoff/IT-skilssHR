import styled from 'styled-components';
import { Select, Modal, Button, Drawer, Popconfirm } from 'antd';

export const AndModalDelete = styled(Modal)`
	.ant-modal-content {
		width: 540px;
		padding: 40px;
		flex-direction: column;
		border-radius: 20px;
		z-index: 99;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		@media only screen and (max-width: 800px) {
			width: 95%;
		}
	}
`;

export const AndModalSettings = styled(Modal)`
	.ant-modal-content {
		width: 540px;
		padding: 40px;
		flex-direction: column;
		border-radius: 32px;
		z-index: 99;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		@media only screen and (max-width: 800px) {
			width: 95%;
		}
	}
`;
export const AndModal = styled(Modal)`
	.ant-modal-content {
		width: 540px;
		height: 620px;
		z-index: 99;
		padding: 40px;
		flex-direction: column;
		border-radius: 32px;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		@media only screen and (max-width: 800px) {
			width: 95%;
		}
	}
`;
export const AntdPopconfirm = styled(Popconfirm)``;
export const AntdDrawer = styled(Drawer)``;

export const AntdSelect = styled(Select)`
	border: none !important;
	outline: none;
	&.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
	&.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
		color: var(--Text-colors, #18181b);
		text-align: center;
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}
	&.ant-select-show-arrow {
		path {
			fill: #18181b;
		}
	}
`;

export const AntdSelect2 = styled(Select)`
	.ant-select-selector {
		border-radius: 12px;
	}
`;

export const AntdSelectLanguage = styled(Select)`
	.ant-select-single.ant-select-show-arrow .ant-select-selection-item,
	.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
		color: var(--Text-colors, #18181b);
		text-align: center;
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 24px;
	}

	.ant-select-focused {
		border-color: red;
	}
	.ant-select-selector {
		border-radius: 12px;
	}
	.ant-select-item-option-content {
		border: 1px solid red !important;
	}
`;
export const AntdButton = styled(Button)`
	display: flex;
	height: var(--size-action-button-size-md, 44px);
	padding: var(--unit-3, 12px) var(--unit-6, 24px);
	justify-content: center;
	align-items: center;
	gap: var(--unit-2, 8px);
	border-radius: 12px;
`;
export const Wrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	background: ${({ top }) => (top ? 'rgba(255, 255, 255, 0.05)' : '#fff')};
	backdrop-filter: blur(10px);
	position: fixed;
	top: 0;
	z-index: 999;
`;

export const Wrapper = styled.div`
	width: 1366px;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: inherit;
	@media (max-width: 1120px) {
		padding: 0 20px;
	}
	.sections {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	p {
		color: var(--Text-colors, #18181b);
		text-align: center;
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;

		&.middle {
			color: var(--color-text-primary, #17171b);
			text-align: center;
			font-feature-settings: 'salt' on;
			font-family: 'Mulish';
			font-size: 16px;
			font-style: normal;
			font-weight: 600;
			line-height: 24px;
		}
	}
`;
Wrapper.Img = styled.img`
	width: 90px;
	height: 52px;
	margin-right: 30px;
`;
