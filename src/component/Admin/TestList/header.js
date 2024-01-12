import { useState } from 'react';
import { Wrapper } from './style';
import { PenIcon } from '../../../component/generics/genericIcons';
import {
	Modal2,
	Button2,
	Select3,
	Input2,
	Toast,
	Popup,
} from '../../../component/generics/';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import request from '../../../services/api';
import { useTestContex } from '../../../context/useContext';

const TestName = ({ data }) => {
	const navigate = useNavigate();
	return (
		<Wrapper.Name
			onClick={() =>
				navigate(`/admin/${data?.subDirectionId}/${data?.subDirectionCaption}`)
			}
		>
			{data?.subDirectionCaption || null}
		</Wrapper.Name>
	);
};
const ActionRenderer = ({ data }) => {
	const [open1, setOpen1] = useState(false);
	const [option, setOption] = useState([]);
	const [subOption, setSubOption] = useState([]);
	const [, dispatch] = useTestContex();
	const [state, setState] = useState({
		createdAt: '2023-09-14T11:04:50.048+00:00',
		detailedTestQuantity: data?.detailedTestQuantity || null,
		id: data?.id || null,
		standardTestQuantity: data?.standardTestQuantity || null,
		subDirectionCaption: data?.subDirectionCaption || null,
		subDirectionId: data?.subDirectionId || null,
		timerMinutesForDetailedTest: data?.timerMinutesForDetailedTest || null,
		timerMinutesForStandardTest: data?.timerMinutesForStandardTest || null,
	});

	const [error, setError] = useState({
		timerMinutesForStandardTest: null,
		timerMinutesForDetailedTest: null,
		standardTestQuantity: null,
		detailedTestQuantity: null,
		subDirectionId: null,
		subDirectionCaption: null,
	});

	const getOption = async () => {
		try {
			const res = await request.get('admin/directions/all');
			setOption(res.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getTest = async () => {
		try {
			const res = await request.get('admin/direction-tests');

			dispatch({
				type: 'setTest',
				payload: res.data?.data,
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const saveTest = async () => {
		if (
			!state?.timerMinutesForStandardTest ||
			!state?.timerMinutesForDetailedTest ||
			!state?.standardTestQuantity ||
			!state?.detailedTestQuantity ||
			!state?.subDirectionId ||
			!state?.subDirectionCaption
		) {
			setError({
				...error,
				timerMinutesForStandardTest:
					!state?.timerMinutesForStandardTest && 'This field is required !',
				timerMinutesForDetailedTest:
					!state?.timerMinutesForDetailedTest && 'This field is required !',
				standardTestQuantity:
					!state?.standardTestQuantity && 'This field is required !',
				detailedTestQuantity:
					!state?.detailedTestQuantity && 'This field is required !',
				subDirectionId: !state?.subDirectionId && 'This field is required !',
				subDirectionCaption:
					!state?.subDirectionCaption && 'This field is required !',
			});
		} else {
			try {
				const res = await request.put('admin/direction-tests', {
					data: state,
					transactionTime: '2023-08-14T15:43:01.8152087',
				});

				getTest();
				setOpen1(false);
				Toast({
					type: 'success',
					message: 'Edited',
				});
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
				console.error('Error');
			}
		}
	};

	const onChange = (e) => {
		const { name, value } = e?.target;
		setError({
			...error,
			[name]: null,
		});
		setState({
			...state,
			[name]: value,
		});
	};
	const changeDirection = (v) => {
		setSubOption(v?.subDirections?.filter((v) => !v?.isTestAdded));
	};
	const changeSubDirection = (v) => {
		setError({
			...error,
			subDirectionId: null,
			subDirectionCaption: null,
		});
		setState({
			...state,
			subDirectionId: v?.id,
		});
	};

	return (
		<Wrapper.Flex style={{ width: '100%', justifyContent: 'center' }}>
			<Wrapper.Box>
				<PenIcon
					onClick={() => {
						setState({
							...state,
							createdAt: '2023-09-14T11:04:50.048+00:00',
							detailedTestQuantity: data?.detailedTestQuantity || null,
							id: data?.id || null,
							standardTestQuantity: data?.standardTestQuantity || null,
							subDirectionCaption: data?.subDirectionCaption || null,
							subDirectionId: data?.subDirectionId || null,
							timerMinutesForDetailedTest:
								data?.timerMinutesForDetailedTest || null,
							timerMinutesForStandardTest:
								data?.timerMinutesForStandardTest || null,
						});
						getOption();
						setOpen1(true);
					}}
				/>
			</Wrapper.Box>

			<Modal2 open={open1} width="700px">
				<Wrapper.ModalBox>
					<div className="ModalBox">
						<h1>Edit test</h1>
						<Select3
							width={'469px'}
							color={'#000'}
							hc={'#000'}
							header={'Attach direction'}
							br={'1px solid #E1E1E1'}
							title="Select direction"
							options={option}
							onChange={changeDirection}
						/>
						<Select3
							width={'469px'}
							color={'#000'}
							hc={'#000'}
							header={'Attach sub direction'}
							title="Select sub direction"
							br={'1px solid #E1E1E1'}
							value={state?.subDirectionCaption}
							options={subOption}
							onChange={changeSubDirection}
							error={error?.subDirectionCaption}
						/>

						<Wrapper.Flex>
							<Input2
								width={'230px'}
								header={'Standart test timer in minutes'}
								color={'#000'}
								hc={'#000'}
								type="number"
								name="timerMinutesForStandardTest"
								onChange={onChange}
								value={state?.timerMinutesForStandardTest}
								error={error?.timerMinutesForStandardTest}
							/>
							<Input2
								width={'230px'}
								header={'Standart test quantity per user'}
								color={'#000'}
								hc={'#000'}
								type="number"
								name="standardTestQuantity"
								value={state?.standardTestQuantity}
								error={error?.standardTestQuantity}
								onChange={onChange}
							/>
						</Wrapper.Flex>
						<Wrapper.Flex>
							<Input2
								width={'230px'}
								header={'Detailed test timer in minutes'}
								color={'#000'}
								hc={'#000'}
								type="number"
								name="timerMinutesForDetailedTest"
								value={state?.timerMinutesForDetailedTest}
								error={error?.timerMinutesForDetailedTest}
								onChange={onChange}
							/>
							<Input2
								width={'230px'}
								header={'Detailed test quantity per user'}
								color={'#000'}
								hc={'#000'}
								type="number"
								value={state?.detailedTestQuantity}
								error={error?.detailedTestQuantity}
								name="detailedTestQuantity"
								onChange={onChange}
							/>
						</Wrapper.Flex>
						<Wrapper.Flex style={{ justifyContent: 'center' }}>
							<Button2
								color="#fff"
								bg={'#0B3A48'}
								width={'161px'}
								height={'52px'}
								onClick={saveTest}
							>
								Save changes
							</Button2>
							<Button2
								width={'100px'}
								height={'52px'}
								bg={'#F5F5F5'}
								color="#0B3A48"
								secondary={'true'}
								onClick={() => {
									setOpen1(false);
									setError({
										timerMinutesForStandardTest: null,
										timerMinutesForDetailedTest: null,
										standardTestQuantity: null,
										detailedTestQuantity: null,
										subDirectionId: null,
										subDirectionCaption: null,
									});
								}}
							>
								Cancel
							</Button2>
						</Wrapper.Flex>
					</div>
				</Wrapper.ModalBox>
			</Modal2>
		</Wrapper.Flex>
	);
};
const TestNumber = ({ data }) => {
	return <>{data?.totalQuestionQuantity} question</>;
};
const TestTime = ({ data }) => {
	return (
		<>
			{`${data?.timerMinutesForStandardTest}:00 / ${data?.timerMinutesForDetailedTest}:00 `}{' '}
		</>
	);
};
const TestDate = ({ data }) => {
	return <>{moment(data?.createdAt).format('DD.MM.YYYY')}</>;
};
export const column = [
	{
		headerName: 'Direction',
		cellRenderer: TestName,
		flex: 1,
	},
	{
		headerName: 'Number of questions',
		cellRenderer: TestNumber,

		flex: 1,
	},
	{
		headerName: 'Test time standard/detailed',
		cellRenderer: TestTime,

		flex: 1,
	},

	{
		headerName: 'Created date',
		cellRenderer: TestDate,

		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,

		flex: 1,
	},
];
