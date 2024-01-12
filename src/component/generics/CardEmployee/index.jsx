import React from 'react';
import { Wrapper } from './style';
import {
	CheckIcon,
	LocationIcon,
	DollarIcon,
	BookMarkIcon,
	OfficialIcon,
} from '../../generics/genericIcons/index.jsx';

const Card = ({ bg, name, position, done, location, salary, izb }) => {
	return (
		<Wrapper bg={bg}>
			{!izb && (
				<BookMarkIcon
					style={{ position: 'absolute', top: '20px', right: ' 32px' }}
					color={bg ? '#fff' : undefined}
				/>
			)}

			<Wrapper.Column gap="25px">
				<Wrapper.Flex gap="15px">
					<Wrapper.User />
					<Wrapper.Column gap="5px" width="fit-content">
						<Wrapper.Title bg={bg}>
							<OfficialIcon
								position={'absolute'}
								top={' -7px'}
								right={' -23px'}
							/>
							{name || 'Shaxriyor Oripov'}
						</Wrapper.Title>
						<Wrapper.Desc bg={bg}>{position || 'Ux Ui designer'}</Wrapper.Desc>
					</Wrapper.Column>
				</Wrapper.Flex>

				<Wrapper.Flex gap="5px">
					<CheckIcon color={!bg ? '#0D3B3F' : undefined} />
					<Wrapper.Desc bg={bg}>
						{done || '98% test score: Verified candidate'}
					</Wrapper.Desc>
				</Wrapper.Flex>

				<Wrapper.Flex gap="5px">
					<LocationIcon color={!bg ? '#0D3B3F' : undefined} />
					<Wrapper.Desc bg={bg}>
						{location || 'Tashkent Uzbekistan'}
					</Wrapper.Desc>
				</Wrapper.Flex>

				<Wrapper.Flex gap="5px">
					<DollarIcon color={!bg ? '#0D3B3F' : undefined} />
					<Wrapper.Desc bg={bg}>{salary || '400-500'}</Wrapper.Desc>
				</Wrapper.Flex>
			</Wrapper.Column>
		</Wrapper>
	);
};

export default Card;
