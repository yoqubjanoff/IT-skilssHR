import React, { useRef } from 'react';
import { Wrapper } from './style';
const Radio = ({ title, onChange, checked, name, value, togle }) => {
	const RadioRef = useRef();

	return (
		<Wrapper
			onClick={() => {
				RadioRef?.current?.click();
			}}
			active={togle}
		>
			<Wrapper.Radio
				type="radio"
				onChange={onChange}
				checked={checked}
				name={name}
				value={value}
				ref={RadioRef}
			/>
			<Wrapper.RadioBox togle={togle}>
				{togle && <Wrapper.RadioValue />}
			</Wrapper.RadioBox>
			{title}
		</Wrapper>
	);
};

export default Radio;
