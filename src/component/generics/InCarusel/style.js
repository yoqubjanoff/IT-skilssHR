import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 292px;
	background-color: inherit;
	overflow: hidden;
	display: flex;
	gap: 15px;
`;
Wrapper.Wrap = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
	transform: translateX(-163%);
	animation: 18s scroll infinite linear;
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
`;
