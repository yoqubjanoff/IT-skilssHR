import styled from 'styled-components';
import { Select } from 'antd';
export const AntSelectFilter = styled(Select)`
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
