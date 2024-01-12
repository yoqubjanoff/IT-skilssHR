import styled from 'styled-components';
import { Collapse } from 'antd';

export const AntCollapse = styled(Collapse)`
	width: 900px !important;
	margin-bottom: 16px;
	background-color: #fff;
	.ant-collapse-header {
		border-radius: 20px !important;
	}
	@media (max-width: 910px) {
		width: 90% !important;
	}
`;
