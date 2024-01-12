import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	Input2,
	Toast,
	Popup,
	CustomTextarea,
} from '../../../component/generics';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../services/api';
import { useTestContex } from '../../../context/useContext';

const AdminView = () => {
	//
	const navigate = useNavigate();
	const [url, setUrl] = useState('');
	useEffect(() => setUrl(window.location.pathname), [window.location.pathname]);
	const { id, name, testType, language } = useParams();
	const [data, dispatch] = useTestContex();
	const { selectedQuestion } = data;
	const [state, setState] = useState({
		questionCaption: selectedQuestion?.questionCaption || null,
		codeExample: selectedQuestion?.codeExample || null,

		optionCaption1:
			selectedQuestion?.questionOptions?.[0]?.optionCaption || null,
		isCorrect1: selectedQuestion?.questionOptions?.[0]?.isCorrect || false,
		optionCaptionId_1: selectedQuestion?.questionOptions?.[0]?.id || null,

		optionCaption2:
			selectedQuestion?.questionOptions?.[1]?.optionCaption || null,
		isCorrect2: selectedQuestion?.questionOptions?.[1]?.isCorrect || false,
		optionCaptionId_2: selectedQuestion?.questionOptions?.[1]?.id || null,

		optionCaption3:
			selectedQuestion?.questionOptions?.[2]?.optionCaption || null,
		isCorrect3: selectedQuestion?.questionOptions?.[2]?.isCorrect || false,
		optionCaptionId_3: selectedQuestion?.questionOptions?.[2]?.id || null,

		optionCaption4:
			selectedQuestion?.questionOptions?.[3]?.optionCaption || null,
		isCorrect4: selectedQuestion?.questionOptions?.[3]?.isCorrect || false,
		optionCaptionId_4: selectedQuestion?.questionOptions?.[3]?.id || null,
	});
	const {
		questionCaption,
		codeExample,

		optionCaption1,
		isCorrect1,
		optionCaptionId_1,

		optionCaption2,
		isCorrect2,
		optionCaptionId_2,

		optionCaption3,
		isCorrect3,
		optionCaptionId_3,

		optionCaption4,
		isCorrect4,
		optionCaptionId_4,
	} = state;

	const onChange = (e) => {
		const { name, value } = e?.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const saveQuestion = async () => {
		if (
			!questionCaption ||
			!optionCaption1 ||
			(!isCorrect1 && !isCorrect4 && !isCorrect3 && !isCorrect2) ||
			!optionCaption2 ||
			!optionCaption3 ||
			!optionCaption4
		) {
			Popup({
				title: 'Please fill the fields !',
				type: 'warning',
			});
		} else {
			try {
				const res = await request.post('admin/questions', {
					data: {
						directionId: parseInt(id.slice(1)),
						questionLanguage: language,
						testType: testType,
						questions: [
							{
								questionCaption,
								codeExample,
								questionOptions: [
									{
										optionCaption: optionCaption1,
										isCorrect: isCorrect1,
									},
									{
										optionCaption: optionCaption2,
										isCorrect: isCorrect2,
									},
									{
										optionCaption: optionCaption3,
										isCorrect: isCorrect3,
									},
									{
										optionCaption: optionCaption4,
										isCorrect: isCorrect4,
									},
								],
							},
						],
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});
				setState({
					questionCaption: null,
					codeExample: null,

					optionCaption1: null,
					isCorrect1: false,

					optionCaption2: null,
					isCorrect2: false,

					optionCaption3: null,
					isCorrect3: false,

					optionCaption4: null,
					isCorrect4: false,
				});
				dispatch({
					type: 'setSelectedQuestion',
					payload: {},
				});
				dispatch({
					type: 'setLanguage',
					payload: language,
				});
				Toast({
					type: 'success',
					message: 'Question added',
				});
				navigate(`/admin/${parseInt(id.slice(1))}/${name}`);
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};
	const editQuestion = async () => {
		if (
			!questionCaption ||
			!optionCaption1 ||
			(!isCorrect1 && !isCorrect4 && !isCorrect3 && !isCorrect2) ||
			!optionCaption2 ||
			!optionCaption3 ||
			!optionCaption4
		) {
			Popup({
				title: 'Please fill the fields !',
				type: 'warning',
			});
		} else {
			try {
				const res = await request.put('admin/questions/edit', {
					data: {
						id: selectedQuestion?.id,
						directionId: parseInt(id.slice(1)),
						questionCaption,
						codeExample,

						questionOptions: [
							{
								id: optionCaptionId_1,
								optionCaption: optionCaption1,
								isCorrect: isCorrect1,
							},
							{
								id: optionCaptionId_2,

								optionCaption: optionCaption2,
								isCorrect: isCorrect2,
							},
							{
								id: optionCaptionId_3,

								optionCaption: optionCaption3,
								isCorrect: isCorrect3,
							},
							{
								id: optionCaptionId_4,

								optionCaption: optionCaption4,
								isCorrect: isCorrect4,
							},
						],
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});

				setState({
					questionCaption: null,
					codeExample: null,

					optionCaption1: null,
					isCorrect1: false,

					optionCaption2: null,
					isCorrect2: false,

					optionCaption3: null,
					isCorrect3: false,

					optionCaption4: null,
					isCorrect4: false,
				});

				dispatch({
					type: 'setSelectedQuestion',
					payload: {},
				});
				Toast({
					type: 'success',
					message: 'Edited',
				});
				navigate(`/admin/${parseInt(id.slice(1))}/${name}`);
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};

	const onChangeRadio = (e) => {
		setState({
			...state,
			isCorrect1: false,

			isCorrect2: false,

			isCorrect3: false,

			isCorrect4: false,
			[e?.target?.value]: true,
		});
	};

	const onCancel = () => {
		navigate(-1);
		setState({
			questionCaption: null,
			codeExample: null,

			optionCaption1: null,
			isCorrect1: false,

			optionCaption2: null,
			isCorrect2: false,

			optionCaption3: null,
			isCorrect3: false,

			optionCaption4: null,
			isCorrect4: false,
		});
		dispatch({
			type: 'setSelectedQuestion',
			payload: {},
		});
	};

	return (
		<Wrapper>
			<div className="ColumnBox">
				<p className="Header">
					{!selectedQuestion?.id ? 'Add question' : 'Edit question'}
				</p>
				<div className="TagBox">
					<div className="FlexBox"></div>
					<div className="FlexBox">
						<Button2
							bg={'#fff'}
							width={'120px'}
							secondary={'true'}
							height={'42px'}
							onClick={onCancel}
						>
							Cancel
						</Button2>

						<Button2
							bg={'#0B3A48'}
							width={'120px'}
							height={'42px'}
							onClick={
								url?.search('edit-question') < 0 ? saveQuestion : editQuestion
							}
						>
							{url?.search('edit-question') > 0 ? 'Save changes' : 'Submit'}
						</Button2>
					</div>
				</div>
				<Input2
					width={'761px'}
					height={'60px'}
					name="questionCaption"
					value={questionCaption}
					header={'Question title'}
					placeholder={'Write title'}
					color="#000"
					placeholderColor={'#5c6e70'}
					hc="#0d3b3f"
					onChange={onChange}
				/>
				<Wrapper.Column>
					<CustomTextarea
						header={'Code example'}
						name="codeExample"
						value={codeExample}
						onChange={onChange}
					/>
				</Wrapper.Column>
				<Wrapper.Column>
					<Wrapper.Flex>
						<input
							type="radio"
							style={{ accentColor: '#37A67E', cursor: 'pointer' }}
							name="contact"
							value="isCorrect1"
							checked={isCorrect1}
							onChange={onChangeRadio}
						/>
						<Wrapper.Header>1. Answer</Wrapper.Header>
					</Wrapper.Flex>
					<CustomTextarea
						header={'Write answer'}
						name="optionCaption1"
						value={optionCaption1}
						onChange={onChange}
					/>
				</Wrapper.Column>

				<Wrapper.Column>
					<Wrapper.Flex>
						<input
							type="radio"
							style={{ accentColor: '#37A67E', cursor: 'pointer' }}
							name="contact"
							value="isCorrect2"
							checked={isCorrect2}
							onChange={onChangeRadio}
						/>
						<Wrapper.Header>2. Answer</Wrapper.Header>
					</Wrapper.Flex>
					<CustomTextarea
						header={'Write answer'}
						name="optionCaption2"
						value={optionCaption2}
						onChange={onChange}
					/>
				</Wrapper.Column>

				<Wrapper.Column>
					<Wrapper.Flex>
						<input
							type="radio"
							style={{ accentColor: '#37A67E', cursor: 'pointer' }}
							name="contact"
							value="isCorrect3"
							checked={isCorrect3}
							onChange={onChangeRadio}
						/>
						<Wrapper.Header>3. Answer</Wrapper.Header>
					</Wrapper.Flex>
					<CustomTextarea
						header={'Write answer'}
						name="optionCaption3"
						value={optionCaption3}
						onChange={onChange}
					/>
				</Wrapper.Column>
				<Wrapper.Column>
					<Wrapper.Flex>
						<input
							type="radio"
							name="contact"
							style={{ accentColor: '#37A67E', cursor: 'pointer' }}
							checked={isCorrect4}
							value="isCorrect4"
							onChange={onChangeRadio}
						/>
						<Wrapper.Header>4. Answer</Wrapper.Header>
					</Wrapper.Flex>
					<CustomTextarea
						header={'Write answer'}
						name="optionCaption4"
						value={optionCaption4}
						onChange={onChange}
					/>
				</Wrapper.Column>
			</div>
		</Wrapper>
	);
};

export default AdminView;
