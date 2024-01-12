import styled from 'styled-components';
import { Image, Modal, Select, DatePicker } from 'antd';

export const AndModalDownload = styled(Modal)`
	.ant-modal-content {
		border-radius: 24px; /* Adjust the value as needed */
		width: fit-content;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		padding: 24px;
		height: 222px;
		@media only screen and (max-width: 1000px) {
			width: 70%;
			height: fit-content;
		}
		@media only screen and (max-width: 800px) {
			width: 90%;
		}
	}
`;

const { RangePicker } = DatePicker;

export const AndImage = styled(Image)`
	.ant-image {
		border-radius: 50% !important;
		background: red !important;
	}
`;
export const AndModal = styled(Modal)`
	.ant-modal-content {
		border-radius: 24px; /* Adjust the value as needed */
		width: 680px;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		padding: 32px;
		@media only screen and (max-width: 800px) {
			width: 95%;
		}
	}
`;
export const AndModalDelete = styled(Modal)`
	.ant-modal-content {
		border-radius: 24px; /* Adjust the value as needed */
		width: 440px;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
		padding: 32px;
		@media only screen and (max-width: 800px) {
			width: 95%;
		}
	}
`;
export const AntSelect = styled(Select)`
	.ant-select-selector {
		box-shadow: none !important;
		border-radius: 12px;
	}
	.ant-select-option {
		border: 1px solid red !important;
	}
	.ant-select-item .ant-select-item-option {
		border: 1px solid red !important;
	}
	.ant-select-selection-placeholder {
		color: var(--Text-colors, #18181b);
		font-family: 'Mulish';
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.64px;
		opacity: 0.5;
	}
`;

export const AntDatePicker = styled(RangePicker)`
	border: 1px solid black;
	&.ant-picker-range {
		visibility: hidden;
		width: 1px;
		position: absolute;
		top: -16px;
		right: 300px;
		@media only screen and (max-width: 400px) {
			right: 0px;
		}
	}
	&.ant-picker-date-panel {
		width: 600px !important;
	}
	&.ant-picker-footer {
		border: 1px solid red;
	}
`;
export const AntDatePicker2 = styled(DatePicker)`
	border: 1px solid black;
	&.ant-picker {
		visibility: hidden;
		width: 1px;
		position: absolute;
		right: 270px;
	}
`;
