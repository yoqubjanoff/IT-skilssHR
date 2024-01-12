import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Select3,
	Button2,
	Input2,
	Input,
	CustomTable,
	Modal2,
	Pagination,
	Toast,
	Popup,
} from '../../../component/generics';
import { SearchIcon } from '../../../component/generics/genericIcons';
import { column } from './header';
import { useTestContex } from '../../../context/useContext';
import request from '../../../services/api';
import { Replace } from '../../../services/Replace.js';
import { useSearch } from '../../../services/Search';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminView = () => {
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const { search, pathname } = useLocation();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [searchState, setSearch] = useState(false);
	const [option, setOption] = useState([]);
	const [subOption, setSubOption] = useState([]);
	const [loading, setLoading] = useState(false);

	const [state, setState] = useState({
		timerMinutesForStandardTest: null,
		timerMinutesForDetailedTest: null,
		standardTestQuantity: null,
		detailedTestQuantity: null,
		subDirectionId: null,
		subDirectionCaption: null,
		direction: null,
	});

	const [error, setError] = useState({
		timerMinutesForStandardTest: null,
		timerMinutesForDetailedTest: null,
		standardTestQuantity: null,
		detailedTestQuantity: null,
		subDirectionId: null,
		subDirectionCaption: null,
		direction: null,
	});

	const [data, dispatch] = useTestContex();
	const getOption = async () => {
		try {
			const res = await request.get('admin/directions/all');
			setOption(res.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getTest = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/direction-tests${search || ''}`);
			setPagination(res?.data?.pagination);
			dispatch({
				type: 'setTest',
				payload: res.data?.data,
			});
			setLoading(false);
		} catch (error) {
			console.error('Error');
		}
	};

	const saveTest = async () => {
		if (
			!state?.timerMinutesForStandardTest ||
			!state?.timerMinutesForDetailedTest ||
			!state?.standardTestQuantity ||
			!state?.detailedTestQuantity ||
			!state?.subDirectionId ||
			!state?.direction ||
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
				direction: !state?.direction && 'This field is required !',
			});
		} else {
			console.log(error, 'error');
			try {
				const res = await request.post('admin/direction-tests', {
					data: state,
					transactionTime: '2023-08-14T15:43:01.8152087',
				});

				getTest();
				getOption();
				onCancel();
				Toast({
					type: 'success',
					message: 'Test added',
				});
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};
	const onCancel = () => {
		setOpen(false);
		setError({
			timerMinutesForStandardTest: null,
			timerMinutesForDetailedTest: null,
			standardTestQuantity: null,
			detailedTestQuantity: null,
			subDirectionId: null,
			subDirectionCaption: null,
			direction: null,
		});
		setState({
			...state,
			timerMinutesForStandardTest: null,
			timerMinutesForDetailedTest: null,
			standardTestQuantity: null,
			detailedTestQuantity: null,
			subDirectionId: null,
			subDirectionCaption: null,
		});
	};

	const onChange = (e) => {
		const { name, value } = e?.target;
		setError({
			...error,
			[name]: null,
		});
		setState({
			...state,
			[name]: Number(value),
		});
	};
	const changeDirection = (v) => {
		setSubOption(v?.subDirections?.filter((v) => !v?.isTestAdded));
		setError({
			...error,
			direction: null,
		});
		setState({
			...state,
			direction: v?.caption,
		});
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
			subDirectionCaption: v?.caption,
		});
	};
	const searchFuncChange = async (e) => {
		const { value } = e?.target;
		if (value) {
			setSearch(value);
		} else {
			getTest();
			setSearch('');
		}
	};

	const searchFunc = async (e) => {
		if (searchState)
			try {
				const res = await request.get(
					`admin/direction-tests?search=${searchState}`,
				);
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
	useEffect(() => {
		getTest();
	}, [search]);
	useEffect(() => {
		getOption();
		navigate(`${pathname}${Replace('page', 0)}`);
		navigate(`${pathname}${Replace('size', 20)}`);
	}, []);
	return (
		<Wrapper>
			<Modal2 open={open} width="700px">
				<Wrapper.ModalBox>
					<div className="ModalBox">
						<h1>Add test</h1>
						<Select3
							width={'469px'}
							color={'#000'}
							hc={'#000'}
							header={'Attach direction'}
							br={'1px solid #E1E1E1'}
							title="Select direction"
							options={option}
							onChange={changeDirection}
							error={error?.direction}
						/>
						<Select3
							width={'469px'}
							color={'#000'}
							hc={'#000'}
							header={'Attach sub direction'}
							br={'1px solid #E1E1E1'}
							options={subOption}
							value={state?.subDirectionCaption}
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
								value={state?.timerMinutesForStandardTest || ''}
								error={error?.timerMinutesForStandardTest}
							/>
							<Input2
								width={'230px'}
								header={'Standart test quantity per user'}
								color={'#000'}
								hc={'#000'}
								type="number"
								name="standardTestQuantity"
								value={state?.standardTestQuantity || ''}
								onChange={onChange}
								error={error?.standardTestQuantity}
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
								value={state?.timerMinutesForDetailedTest || ''}
								onChange={onChange}
								error={error?.timerMinutesForDetailedTest}
							/>
							<Input2
								width={'230px'}
								header={'Detailed test quantity per user'}
								color={'#000'}
								hc={'#000'}
								type="number"
								value={state?.detailedTestQuantity || ''}
								name="detailedTestQuantity"
								onChange={onChange}
								error={error?.detailedTestQuantity}
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
								Submit
							</Button2>
							<Button2
								width={'100px'}
								height={'52px'}
								bg={'#F5F5F5'}
								color="#0B3A48"
								onClick={onCancel}
								secondary={'true'}
							>
								Cancel
							</Button2>
						</Wrapper.Flex>
					</div>
				</Wrapper.ModalBox>
			</Modal2>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Test list</p>
					<div className="TagBox">
						<div className="FlexBox">
							<div className="FlexBox">
								{/* <Input
									suffix={<SearchIcon />}
									placeholder={'Search'}
									width={'332px'}
									height="42px"
									color="#000"
									bg={'#fff'}
									// name='search'
									onChange={searchFuncChange}
									br={'100px'}
								/>

								<Button2
									bg={'#0B3A48'}
									width={'101px'}
									height={'42px'}
									onClick={searchFunc}
								>
									Search
								</Button2> */}
							</div>
						</div>
						<div className="FlexBox">
							<Button2
								bg={'#0B3A48'}
								width={'101px'}
								height={'42px'}
								onClick={() => setOpen(true)}
							>
								Add test
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable
							column={column}
							rowData={data?.tests}
							loading={loading}
						/>
					</Wrapper.WrapTable>
					<Pagination
						current={Number(query.get('page')) || 0}
						SizeAll={pagination?.totalPages || 1}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
