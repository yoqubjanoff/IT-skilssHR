import React, { useState } from 'react';
import { Container } from './style';
import Button from '../Button/index.jsx';
import { ArrowIcon } from '../genericIcons/index.jsx';

const Case = () => {
	const [number, setNumber] = useState(0);
	const [option, setOption] = useState(null);
	const mock = [
		{
			id: 1,
			question:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 1',
			answer: {
				a: 'Lorem ipsum 1 a',
				b: 'Lorem ipsum 1 b',
				c: 'Lorem ipsum 1 c',
				d: 'Lorem ipsum 1 d',
			},
		},
		{
			id: 2,
			question:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 2',
			answer: {
				a: 'Lorem ipsum 2 a',
				b: 'Lorem ipsum 2 b',
				c: 'Lorem ipsum 2 c',
				d: 'Lorem ipsum 2 d',
			},
		},
		{
			id: 3,
			question:
				'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 3',
			answer: {
				a: 'Lorem ipsum 3 a',
				b: 'Lorem ipsum 3 b',
				c: 'Lorem ipsum 3 c',
				d: 'Lorem ipsum 3 d',
			},
		},
	];

	const nextFunction = (next) => {
		if (next) {
			if (number < mock.length - 1) {
				setNumber(number + 1);
			}
		} else if (number !== 0) {
			setNumber(number - 1);
		}
	};

	return (
		<Container>
			<Container.Column>
				<Container.Flex between>
					<Container.Title>
						Question {number + 1} of {mock.length}
					</Container.Title>

					<Container.Wrap>
						<Button
							color="#fff"
							bg={'#41AAD2'}
							width={'147px'}
							height="30px"
							onClick={() => nextFunction()}
						>
							<Container.Flex style={{ padding: '0 13px' }}>
								<ArrowIcon left />
								Back question
							</Container.Flex>
						</Button>
						<Button
							color="#fff"
							bg={'#4BB665'}
							width={'147px'}
							height="30px"
							onClick={() => nextFunction('next')}
						>
							<Container.Flex style={{ padding: '0 13px' }}>
								Next question
								<ArrowIcon />
							</Container.Flex>
						</Button>
					</Container.Wrap>
				</Container.Flex>

				<Container.Title>{mock?.[number]?.question}</Container.Title>
				<Container.Apply>Choose one answer most apply to you</Container.Apply>

				<Container.Column style={{ gap: '0px' }}>
					<Container.CaseWrap onClick={() => setOption('a')}>
						<Container.Flex>
							<Container.Case active={option === 'a' ? 'true' : undefined}>
								a
							</Container.Case>
							<Container.Title>{mock?.[number]?.answer?.a}</Container.Title>
						</Container.Flex>
					</Container.CaseWrap>

					<Container.CaseWrap onClick={() => setOption('b')}>
						<Container.Flex>
							<Container.Case active={option === 'b' ? 'true' : undefined}>
								b
							</Container.Case>
							<Container.Title>{mock?.[number]?.answer?.b}</Container.Title>
						</Container.Flex>
					</Container.CaseWrap>

					<Container.CaseWrap onClick={() => setOption('c')}>
						<Container.Flex>
							<Container.Case active={option === 'c' ? 'true' : undefined}>
								c
							</Container.Case>
							<Container.Title>{mock?.[number]?.answer?.c}</Container.Title>
						</Container.Flex>
					</Container.CaseWrap>

					<Container.CaseWrap last={'true'} onClick={() => setOption('d')}>
						<Container.Flex>
							<Container.Case active={option === 'd' ? 'true' : undefined}>
								d
							</Container.Case>
							<Container.Title>{mock?.[number]?.answer?.d}</Container.Title>
						</Container.Flex>
					</Container.CaseWrap>
				</Container.Column>
			</Container.Column>
		</Container>
	);
};

export default Case;
