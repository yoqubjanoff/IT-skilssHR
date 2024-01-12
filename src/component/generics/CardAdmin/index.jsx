import React from 'react';
import { Wrapper } from './style';
import { TrandingUpIcon } from '../genericIcons';
const CustomTag = ({ name, number, percent, icon, inc }) => {
	return (
		<Wrapper>
			<div className="FlexBox Beetwen">
				<div className="ColumnBox1">
					<Wrapper.Title>{name}</Wrapper.Title>
					<div className="FlexBox">
						<Wrapper.Title className="Header">{number}</Wrapper.Title>
						<TrandingUpIcon inc={inc} stroke={inc ? '#FF5151' : undefined} />
						<Wrapper.Desc inc={inc}>{percent}</Wrapper.Desc>
					</div>
				</div>

				{icon}
			</div>
		</Wrapper>
	);
};

export default CustomTag;
