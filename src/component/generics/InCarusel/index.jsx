import React from 'react';
import { Wrapper } from './style';

const Carusel = ({ data }) => {
	return (
		<Wrapper>
			<Wrapper.Wrap>
				{data?.map((v, i) => (
					<React.Fragment key={i}>{v.component}</React.Fragment>
				))}
			</Wrapper.Wrap>
			<Wrapper.Wrap>
				{data?.map((v, i) => (
					<React.Fragment key={i}>{v.component}</React.Fragment>
				))}
			</Wrapper.Wrap>
		</Wrapper>
	);
};

export default Carusel;
