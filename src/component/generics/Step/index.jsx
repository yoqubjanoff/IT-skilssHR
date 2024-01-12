import React from 'react';
import { Container, Wrapper } from './style';
import { OfficialIcon } from '../genericIcons/index.jsx';
import Grass from '../../../assets/icons/grass.svg';
import Grass2 from '../../../assets/icons/grassline.svg';

const Step = ({ content, step }) => {
	return (
		<Wrapper>
			{content?.map(
				(v, i) =>
					step === i && (
						<React.Fragment key={i}>
							<Container.Title key={i}>
								{v?.title}{' '}
									{step === 0 && <img src={Grass} alt="Grass" />}
									{step === 0 && <img src={Grass2} alt="GrassTwo" />}
							</Container.Title>
						</React.Fragment>
					),
			)}
			<Container>
				<Container.Proggres index={step} />
				{step === 4 && (
					<OfficialIcon style={{ position: 'absolute', right: '-30px' }} />
				)}
			</Container>
		</Wrapper>
	);
};

export default Step;
