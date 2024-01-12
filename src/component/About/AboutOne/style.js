import styled from 'styled-components';
import { Collapse } from 'antd';

export const AntCollapse = styled(Collapse)`
	width: 900px !important;
	margin-bottom: 16px;
	background-color: #fff;
	border-radius: 16px;
	@media (max-width: 910px) {
		width: 90% !important;
	}
`;
