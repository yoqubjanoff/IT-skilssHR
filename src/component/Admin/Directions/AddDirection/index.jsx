import React, { useState } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	Input2,
	Switch,
	Toast,
	Popup,
} from '../../../../component/generics';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../../services/api';
import { useUserContex } from '../../../../context/useContext';
import { TrashIcon } from '../../../../component/generics/genericIcons';
import Loading from '../../../../component/Loading';

const AddAdmin = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useUserContex();
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		caption: selected?.caption || '',
		timerMinutesForStandardTest: selected?.caption || '',
		isActive: selected?.isActive || false,
		timerMinutesForDetailedTest: selected?.caption || '',
		subDirections: selected?.subDirections || [{ caption: '' }],
	});

	const {
		isActive,
		timerMinutesForStandardTest,
		timerMinutesForDetailedTest,
		caption,
		subDirections,
	} = state;

	const onChangeSubDirection = (e) => {
		const { name, value } = e?.target;
		const newList = subDirections?.map((v, i) => {
			if (name == i) {
				return { ...v, caption: value };
			} else {
				return v;
			}
		});
		setState({ ...state, subDirections: newList });
	};

	const saveQuestion = async () => {
		setLoading(true);
		if (!id) {
			if (caption && subDirections?.filter?.((v) => v?.caption)?.length !== 0) {
					console.log(subDirections, caption);
				try {
					const res = await request.post('admin/directions', {
						data: {
							caption,
							timerMinutesForStandardTest,
							isActive,
							timerMinutesForDetailedTest,
							subDirections: subDirections?.filter?.((v) => v?.caption),
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});
					setLoading(false);

					navigate('/admin/directions');
					Toast({
						type: 'success',
						message: 'Saved',
					});
					setState({
						...state,
						caption: '',
						timerMinutesForStandardTest: '',
						isActive,
						timerMinutesForDetailedTest: '',
						subDirections: [],
					});
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
					setLoading(false);
				}
			} else {
				setLoading(false);
				Popup({
					title: 'Please fill the field !',
					type: 'warning',
				});
			}
		} else {
			if (caption && subDirections?.filter?.((v) => v?.caption)?.length !== 0) {
				try {
					const res = await request.post('admin/directions', {
						data: {
							id: parseInt(id.slice(1)),
							caption,
							timerMinutesForStandardTest,
							isActive,
							timerMinutesForDetailedTest,
							subDirections: subDirections?.filter?.((v) => v?.caption),
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});
					setLoading(false);

					navigate('/admin/directions');
					Toast({
						type: 'success',
						message: 'Edited',
					});
					setState({
						...state,
						caption: '',
						timerMinutesForStandardTest: '',
						// isActive: selected?.caption || '',
						timerMinutesForDetailedTest: '',
						subDirections: [],
					});
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
					setLoading(false);
				}
			} else {
				setLoading(false);
				Popup({
					title: 'Please fill the field !',
					type: 'warning',
				});
			}
		}
	};

	const onChangeState = (e) => {
		const { name, value } = e?.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const delet2 = (id) => {
		const newList = subDirections?.filter((v, i) => i !== id);
		setState({ ...state, subDirections: newList });
	};

	const deleteFunc = (id) => {
		Popup({
			title: 'Do you want to delete ?',
			isConfirmedFunction: () => delet2(id),
			showCancelButton: true,
			type: 'question',
		});
	};

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="ColumnBox4">
				<p className="Header">{id ? 'Edit direction' : 'Add direction'}</p>
				<div className="TagBoxEnd" style={{ gap: '15px' }}>
					<Wrapper.Flex>
						<Switch
							onClick={(v) => setState({ ...state, isActive: v })}
							checked={isActive ? 1 : 0}
						/>{' '}
						Active
					</Wrapper.Flex>
					<Button2
						bg={'#fff'}
						width={'120px'}
						height={'42px'}
						color="#0B3A48"
						secondary={'true'}
						onClick={() => {
							navigate(-1);
							setState({
								...state,
								caption: '',
								timerMinutesForStandardTest: '',
								// isActive: selected?.caption || '',
								timerMinutesForDetailedTest: '',
								subDirections: [],
							});
							dispatch({
								type: 'setSelected',
								payload: {},
							});
						}}
					>
						Cancel
					</Button2>
					<Button2
						bg={'#0B3A48'}
						width={'140px'}
						height={'42px'}
						color="#fff"
						onClick={saveQuestion}
					>
						{id ? 'Edit directions	' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<Input2
						width={'375px'}
						placeholder={'Main direction'}
						header={'Main direction'}
						color={'#000'}
						hc={'#000'}
						name={'caption'}
						onChange={onChangeState}
						value={caption}
					/>

					<Wrapper.Flex
						style={{
							margin: '50px 0 0 0',
							flexDirection: 'column',
							alignItems: 'start',
						}}
					>
						{subDirections?.map(({ caption }, i) => (
							<Input2
								width={'375px'}
								placeholder={'Sub directions'}
								prefix={i !== 0 && <TrashIcon onClick={() => deleteFunc(i)} />}
								header={'Sub direction'}
								key={i}
								color={'#000'}
								hc={'#000'}
								name={i}
								onChange={onChangeSubDirection}
								value={caption}
								margin={'30px 0 0 0'}
							/>
						))}

						<p
							className="AddSub"
							onClick={() => {
								setState({
									...state,
									subDirections: [...subDirections, { caption: '' }],
								});
							}}
						>
							+ Add subdirection
						</p>
					</Wrapper.Flex>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddAdmin;
