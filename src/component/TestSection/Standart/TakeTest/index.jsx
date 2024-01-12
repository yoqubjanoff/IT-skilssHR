import React, { useState, useEffect, useRef } from 'react';
import { Button, Popup } from '../../../../component/generics';
import { Wrapper, OuterContainer } from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';
import request from '../../../../services/api';
import { Loader } from '../../../../component/Loader/Loader';
import { TimerIcon } from '../../../../component/generics/genericIcons';
import { useSearch } from '../../../../services/Search';
import { useNavigate } from 'react-router-dom';
import {
	useTestContex,
	useGeneralContext,
} from '../../../../context/useContext';
import { useQueryParam, StringParam, NumberParam } from 'use-query-params';

const TestOne = () => {
	const [{ language }] = useGeneralContext();
	const [index, setIndex] = useQueryParam('index', NumberParam);
	const [testParam, setTestParam] = useQueryParam('test', StringParam);
	const [testListId, setTestListId] = useQueryParam('testListId', StringParam);
	const query = useSearch();
	const navigate = useNavigate();
	const [, dispatch] = useTestContex();
	const [loading, setLoading] = useState(false);
	const [time, setTime] = useState('');
	const [maxCount, setMaxCount] = useState(0);
	const optionTwoRef = useRef();
	const optionThreeRef = useRef();
	const optionFourRef = useRef();
	const optionOneRef = useRef();
	const refObject = {
		optionOneRef,
		optionTwoRef,
		optionThreeRef,
		optionFourRef,
	};
	//
	const [testData, setTestData] = useState({
		testId: '',
		questionCaption: '',
		questionType: 'ONE_CHOICE',
		codeExample: '',
		chosenAnswers: [],
		//
		isSelected1: false,
		isSelected2: false,
		isSelected3: false,
		isSelected4: false,
		//
		optionId1: null,
		optionId2: null,
		optionId3: null,
		optionId4: null,
	});
	const {
		testId,
		questionCaption,
		questionType,
		codeExample,
		chosenAnswers,
		isSelected1,
		isSelected2,
		isSelected3,
		isSelected4,
		//
		optionId1,
		optionId2,
		optionId3,
		optionId4,
	} = testData;
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(time || 0);
	const generateTests = async () => {
		if (!query.get('test')) {
			setLoading(true);
			try {
				const res = await request.get(
					`talent/verification-questions/generate?lang=${language || 'en'}`,
				);
				setTime(res?.data?.data?.remainedTime);
				setMinutes(Math.floor(res?.data?.data?.remainedTime / 60000));
				setSeconds(Math.floor(res?.data?.data?.remainedTime % 60));
				setMaxCount(res?.data?.data?.questionIndexes?.length);

				setIndex(query.get('index') || 0);
				setTestParam('standart');
				setTestListId(res?.data?.data?.conductedTestId);
			} catch (error) {
				setLoading(false);
				if (error?.response?.data?.resultCode === 'E401') {
					Popup({
						title: error?.response?.data?.resultMsg || 'Error',
						isConfirmedFunction: () => navigate('/register'),
						type: 'info',
						allowOutsideClick: true,
					});
				} else {
					Popup({
						title: error?.response?.data?.resultMsg || 'Error',
						isConfirmedFunction: () => navigate('/talent-profile'),
						type: 'info',
						allowOutsideClick: true,
					});
				}
			}
		}
	};

	const getQuestionById = async () => {
		if (query.get('testListId')) {
			setLoading(true);
			try {
				const res = await request.get(
					`talent/verification-questions/get-one-test/${query.get(
						'testListId',
					)}?index=${query.get('index')}`,
				);
				const newData = res?.data?.data;
				setTestData({
					...testData,
					//
					testId: newData?.testId,
					questionCaption: newData?.questionCaption,
					questionType: newData?.questionType,
					codeExample: newData?.codeExample,
					chosenAnswers: newData?.chosenAnswers,
					//
					isSelected1: newData?.chosenAnswers?.[0]?.isSelected,
					isSelected2: newData?.chosenAnswers?.[1]?.isSelected,
					isSelected3: newData?.chosenAnswers?.[2]?.isSelected,
					isSelected4: newData?.chosenAnswers?.[3]?.isSelected,
					//
					optionId1: newData?.chosenAnswers?.[0]?.optionCaption,
					optionId2: newData?.chosenAnswers?.[1]?.optionCaption,
					optionId3: newData?.chosenAnswers?.[2]?.optionCaption,
					optionId4: newData?.chosenAnswers?.[3]?.optionCaption,
					//
				});

				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.error('Error');
			}
		}
	};

	const getResult = async () => {
		try {
			const res = await request.get(
				`talent/verification-questions/submit/${query.get('testListId')}`,
			);
			dispatch({
				type: 'setResult',
				payload: res?.data?.data,
			});
			if (res?.data?.data?.isVerified) {
				navigate('/success-test');
			} else {
				navigate('/failed-test');
			}
		} catch (error) {
			console.error('Error');
		}
	};

	const postAnswer = async (submit) => {
		try {
			const res = await request.post('talent/verification-questions/answer', {
				data: {
					testId: testId,
					questionAnswers: [
						{
							id: chosenAnswers?.[0]?.id,
							isSelected: isSelected1,
						},
						{
							id: chosenAnswers?.[1]?.id,
							isSelected: isSelected2,
						},
						{
							id: chosenAnswers?.[2]?.id,
							isSelected: isSelected3,
						},
						{
							id: chosenAnswers?.[3]?.id,
							isSelected: isSelected4,
						},
					],
				},
				transactionTime: '2023-08-14T15:43:01.8152087',
			});
			submit && getResult();
		} catch (error) {
			console.error('Error');
		}
	};

	const onChangeRadio = (e, name) => {
		setTestData({
			...testData,
			isSelected1: false,
			isSelected2: false,
			isSelected3: false,
			isSelected4: false,
			[name]: true,
		});
	};
	const clickedRadio = (name) => {
		refObject[name]?.current?.click();
	};
	const clickedCheckbox = (e, name) => {
		setTestData({
			...testData,
			[name]: e?.target?.checked,
		});
	};

	// Timer

	useEffect(() => {
		let timer;

		if (time > 0) {
			timer = setInterval(() => {
				if (seconds === 1 && minutes === 0) {
					setSeconds(seconds - 1);
					getResult();
				} else if (seconds > 0) {
					setSeconds(seconds - 1);
				} else if (minutes > 0) {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}, 1000);
		}

		// Clear the timer when it reaches 0
		if (minutes === 0 && seconds === 0) {
			clearInterval(timer);
		}

		// Clean up the timer on unmount
		return () => clearInterval(timer);
	}, [minutes, seconds, time]);

	const NextFunction = () => {
		postAnswer();
		setIndex(Number(query.get('index')) + 1);
	};
	const PrevFunction = () => {
		setIndex(Number(query.get('index')) - 1);
	};

	useEffect(() => {
		generateTests();
	}, []);

	useEffect(() => {
		getQuestionById();
	}, [query.get('testListId'), query.get('index')]);
	return (
		<OuterContainer>
			{loading && <Loader />}
			<div className="w-full flex flex-col items-center pt-[30px] gap-[20px]">
				<div className="innerContainer">
					<Wrapper.Flex style={{ marginBottom: '32px' }}>
						<Wrapper.Title style={{ margin: '0 15px 0 0', color: '#2563EB' }}>
							{`${Number(query.get('index')) + 1} / ${maxCount}`}
						</Wrapper.Title>
						<TimerIcon color="#2563EB" />
						<Wrapper.Title style={{ color: '#2563EB' }}>
							{minutes < 10 ? `0${minutes}` : minutes}:
							{seconds < 10 ? `0${seconds}` : seconds}
						</Wrapper.Title>
					</Wrapper.Flex>
					<p className=" text-[#18181B] text-center text-[20px] font-[700] my-[20px]">
						{questionCaption}
					</p>
					<form>
						<div className="flex flex-col items-center ] max-[400px]:w-[350px] max-[700px]:p-[10px] ">
							{/* code example */}
							{codeExample && (
								<MarkdownPreview
									style={{
										borderRadius: '24px',
										marginBottom: '32px',
										width: '100%',
									}}
									source={`
\`\`\`java {2}
${codeExample}

`}
									rehypeRewrite={(node, index, parent) => {
										if (
											node.tagName === 'a' &&
											parent &&
											/^h(1|2|3|4|5|6)/.test(parent.tagName)
										) {
											parent.children = parent.children.slice(1);
										}
									}}
								/>
							)}

							<Wrapper
								active={isSelected1 ? 1 : 0}
								onClick={() => clickedRadio('optionOneRef')}
							>
								{questionType === 'ONE_CHOICE' ? (
									<input
										className="radio"
										type="radio"
										id="option1"
										name="radioSelect"
										value={'isSelected1'}
										ref={optionOneRef}
										checked={isSelected1}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => onChangeRadio(e, 'isSelected1')}
									/>
								) : (
									<input
										className="checkbox"
										type="checkbox"
										id="option1"
										name="radioSelect"
										checked={isSelected1}
										value={'isSelected1'}
										style={{ accentColor: '#2563EB' }}
										ref={optionOneRef}
										onChange={(e) => clickedCheckbox(e, 'isSelected1')}
									/>
								)}

								<p className=" text-[#18181B] w-[90%] text-[16px] font-[700] overflow-wrap-break-word">
									{optionId1 ||
										testData.chosenAnswers?.[0]?.optionCaption ||
										'Loading...'}
								</p>
							</Wrapper>
							<Wrapper
								onClick={() => clickedRadio('optionTwoRef')}
								active={isSelected2 ? 1 : 0}
							>
								{questionType === 'ONE_CHOICE' ? (
									<input
										className="radio"
										type="radio"
										id="option2"
										name="radioSelect"
										value={'isSelected2'}
										ref={optionTwoRef}
										checked={isSelected2}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => onChangeRadio(e, 'isSelected2')}
									/>
								) : (
									<input
										type="checkbox"
										id="option2"
										name="radioSelect"
										value={'isSelected2'}
										checked={isSelected2}
										ref={optionTwoRef}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => clickedCheckbox(e, 'isSelected2')}
									/>
								)}

								<p className=" text-[#18181B] w-[90%] text-[16px] font-[700] overflow-wrap-break-word">
									{optionId2 ||
										testData.chosenAnswers?.[1]?.optionCaption ||
										'Loading...'}
								</p>
							</Wrapper>
							<Wrapper
								onClick={() => clickedRadio('optionThreeRef')}
								active={isSelected3 ? 1 : 0}
							>
								{questionType === 'ONE_CHOICE' ? (
									<input
										className="radio"
										type="radio"
										id="option3"
										name="radioSelect"
										ref={optionThreeRef}
										value={'isSelected3'}
										checked={isSelected3}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => onChangeRadio(e, 'isSelected3')}
									/>
								) : (
									<input
										className="radio"
										type="checkbox"
										id="option3"
										name="radioSelect"
										checked={isSelected3}
										ref={optionThreeRef}
										value={'isSelected3'}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => clickedCheckbox(e, 'isSelected3')}
									/>
								)}

								<p className=" text-[#18181B] w-[90%] text-[16px] font-[700] overflow-wrap-break-word">
									{optionId3 ||
										testData.chosenAnswers?.[2]?.optionCaption ||
										'Loading...'}
								</p>
							</Wrapper>
							<Wrapper
								onClick={() => clickedRadio('optionFourRef')}
								active={isSelected4 ? 1 : 0}
							>
								{questionType === 'ONE_CHOICE' ? (
									<input
										className="radio"
										type="radio"
										id="option4"
										name="radioSelect"
										ref={optionFourRef}
										value={'isSelected4'}
										checked={isSelected4}
										style={{ accentColor: '#2563EB' }}
										onChange={(e) => onChangeRadio(e, 'isSelected4')}
									/>
								) : (
									<input
										className="radio"
										type="checkbox"
										id="option4"
										name="radioSelect"
										checked={isSelected4}
										ref={optionFourRef}
										style={{ accentColor: '#2563EB' }}
										value={'isSelected4'}
										onChange={(e) => clickedCheckbox(e, 'isSelected4')}
									/>
								)}

								<p className=" text-[#18181B] w-[90%] text-[16px] font-[700] overflow-wrap-break-word">
									{optionId4 ||
										testData.chosenAnswers?.[3]?.optionCaption ||
										'Loading...'}
								</p>
							</Wrapper>
						</div>
					</form>
					<Wrapper.Flex style={{ justifyContent: 'end' }}>
						{Number(query.get('index')) !== 0 && (
							<Button
								radius={'12px'}
								height={'52px'}
								width={'130px'}
								padding={'12px 32px'}
								bgcolor={'#fff'}
								margin={'16px 0 0 0'}
								onClick={PrevFunction}
							>
								<p className="text-[#17171B] text-[16px] font-[600]">
									Oldingisi
								</p>
							</Button>
						)}
						{Number(query.get('index')) !== maxCount - 1 &&
							(isSelected1 || isSelected2 || isSelected3 || isSelected4) && (
								<Button
									type="primary"
									radius={'12px'}
									height={'52px'}
									width={'130px'}
									padding={'12px 32px'}
									bgcolor={'#2563EB'}
									margin={'16px 0 0 0'}
									onClick={NextFunction}
								>
									<p className="text-[#fff] text-[16px] font-[600]">
										Keyingisi
									</p>
								</Button>
							)}
						{Number(query.get('index')) === maxCount - 1 && (
							<Button
								type="primary"
								radius={'12px'}
								height={'52px'}
								width={'130px'}
								padding={'12px 32px'}
								bgcolor={'#2563EB'}
								margin={'16px 0 0 0'}
								onClick={() => postAnswer('true')}
							>
								<p className="text-[#fff] text-[16px] font-[600]">
									Natijani ko`rish
								</p>
							</Button>
						)}
					</Wrapper.Flex>
				</div>
			</div>
		</OuterContainer>
	);
};

export default TestOne;
