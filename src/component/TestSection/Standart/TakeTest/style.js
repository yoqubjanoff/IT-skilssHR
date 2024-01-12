import styled from 'styled-components';
export const OuterContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	margin: auto;
	.innerContainer {
		max-width: 830px;
	}
	.wmde-markdown {
		user-select: none;

		.copied {
			display: none;
		}
	}
`;
export const Wrapper = styled.div`
	width: 830px;
	min-height: 72px;
	padding: 20px;
	border-radius: 12px;
	background: #fff;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	word-wrap: break-word;
	gap: 10px;
	cursor: pointer;
	transition: 0.4s all;

	border-radius: 12px;
	margin: 0 0 20px 0;
	border: 1px solid ${({ active }) => (active ? '#2563EB' : 'gray')};
	background: ${({ active }) => (active ? '#f4f7fe' : '#fff')};
	@media (max-width: 900px) {
		min-width: 100%;
		width: 100%;
	}
`;

Wrapper.Label = styled.label`
	color: ${({ active }) => (active ? '#37A67E' : 'gray')};
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px;
	cursor: pointer;
`;
Wrapper.Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	justify-content: center;
`;
Wrapper.Title = styled.p`
	color: var(--Text-colors, #18181b);
	font-family: 'Mulish';
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 32px;
`;
