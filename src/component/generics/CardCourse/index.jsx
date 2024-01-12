import React from 'react';
import { Wrapper } from './style';
import { RightIcon } from '../../generics/genericIcons/index.jsx';
import Najot from '../../../assets/img/najot.png';

const Card = ({ header, title, img, m }) => {
	return (
		<Wrapper m={m}>
			<Wrapper.Column>
				<Wrapper.Img src={img || Najot} alt="Image Description" />
				<Wrapper.Box>
					<Wrapper.Title>{header}</Wrapper.Title>
					<Wrapper.Desc>{title}</Wrapper.Desc>
					{/* <Wrapper.Desc opacity={'true'}>{truncate(desc)}</Wrapper.Desc> */}
					<RightIcon
						color="#000"
						position="absolute"
						right="30px"
						bottom="30px"
					/>
				</Wrapper.Box>
			</Wrapper.Column>
		</Wrapper>
	);
};

export default Card;
