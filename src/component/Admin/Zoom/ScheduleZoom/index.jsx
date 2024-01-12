import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	Popup,
	Datepicker2,
	Switch,
	Select2,
	Toast,
} from '../../../../component/generics';
import { useNavigate } from 'react-router-dom';
import request from '../../../../services/api';

// import { Replace } from '../../../../services/Replace.js';
import {
	PenIcon,
	CloseIcon,
	Check2Icon,
} from '../../../../component/generics/genericIcons';
import Loading from '../../../../component/Loading';
const ScheduleZoom = () => {
	const [state, setState] = useState({
		id: null,
		isMondayActive: false,
		mondayStartTime: null,
		mondayEndTime: null,
		isTuesdayActive: false,
		tuesdayStartTime: null,
		tuesdayEndTime: null,
		isWednesdayActive: false,
		wednesdayStartTime: null,
		wednesdayEndTime: null,
		isThursdayActive: false,
		thursdayStartTime: null,
		thursdayEndTime: null,
		isFridayActive: false,
		fridayStartTime: null,
		fridayEndTime: null,
		isSaturdayActive: false,
		saturdayStartTime: null,
		saturdayEndTime: null,
		isSundayActive: false,
		sundayStartTime: null,
		sundayEndTime: null,
	});
	const navigate = useNavigate();
	const [holiday, setHoliday] = useState([
		{
			holidayName: '',
			holidayStartDate: '',
			holidayEndDate: '',
			focus: true,
		},
	]);
	const [loading, setLoading] = useState(false);
	const getTime = async () => {
		setLoading(true);
		try {
			const res = await request.get('admin/scheduled-time');
			const data = res?.data?.data;
			setState({
				...state,
				...res?.data?.data,
				mondayStartTime:
					data?.mondayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				mondayEndTime:
					data?.mondayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				tuesdayStartTime:
					data?.tuesdayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				tuesdayEndTime:
					data?.tuesdayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				wednesdayStartTime:
					data?.wednesdayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				wednesdayEndTime:
					data?.wednesdayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				thursdayStartTime:
					data?.thursdayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				thursdayEndTime:
					data?.thursdayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				fridayStartTime:
					data?.fridayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				fridayEndTime:
					data?.fridayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				saturdayStartTime:
					data?.saturdayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				saturdayEndTime:
					data?.saturdayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
				sundayStartTime:
					data?.sundayStartTime?.split(':')?.slice(0, 2)?.join(':') || null,
				sundayEndTime:
					data?.sundayEndTime?.split(':')?.slice(0, 2)?.join(':') || null,
			});
			const newHoliday = res?.data?.data?.holidays?.map((v) => {
				const monthStart = v?.holidayStartDate.split('-')?.[1];
				const dayStart = v?.holidayStartDate.split('-')?.[2];
				const dayEnd = v?.holidayEndDate.split('-')?.[2];
				const monthEnd = v?.holidayEndDate.split('-')?.[1];
				return { ...v, monthStart, monthEnd, dayStart, dayEnd };
			});
			setHoliday([...newHoliday]);
			setLoading(false);
		} catch (error) {
			setLoading(false);

			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const TimeData = [
		{
			id: '09:00',
			caption: '09:00',
		},
		{
			id: '10:00',
			caption: '10:00',
		},
		{
			id: '11:00',
			caption: '11:00',
		},
		{
			id: '12:00',
			caption: '12:00',
		},
		{
			id: '13:00',
			caption: '13:00',
		},
		{
			id: '14:00',
			caption: '14:00',
		},
		{
			id: '15:00',
			caption: '15:00',
		},
		{
			id: '16:00',
			caption: '16:00',
		},
		{
			id: '17:00',
			caption: '17:00',
		},
		{
			id: '18:00',
			caption: '18:00',
		},
		{
			id: '19:00',
			caption: '19:00',
		},
		{
			id: '20:00',
			caption: '20:00',
		},
		{
			id: '21:00',
			caption: '21:00',
		},
		{
			id: '22:00',
			caption: '22:00',
		},
		{
			id: '23:00',
			caption: '23:00',
		},
		{
			id: '00:00',
			caption: '00:00',
		},
		{
			id: '01:00',
			caption: '01:00',
		},
		{
			id: '02:00',
			caption: '02:00',
		},
		{
			id: '03:00',
			caption: '03:00',
		},
		{
			id: '04:00',
			caption: '04:00',
		},
		{
			id: '05:00',
			caption: '05:00',
		},
		{
			id: '06:00',
			caption: '06:00',
		},
		{
			id: '07:00',
			caption: '07:00',
		},
		{
			id: '08:00',
			caption: '08:00',
		},
	];
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const twoMonth = [
		'Jan',
		'Feb',
		'Mar',
		'Aprr',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const checkFocus = (index) => {
		const newData = holiday?.map((v, i) => {
			if (index == i) {
				return {
					...v,
					focus: true,
				};
			} else {
				return v;
			}
		});
		setHoliday(newData);
	};
	const checkDone = (index) => {
		const newData = holiday?.map((v, i) => {
			if (index == i) {
				return {
					...v,
					focus: false,
				};
			} else {
				return v;
			}
		});
		setHoliday(newData);
	};

	const onChangeHolidays = (e) => {
		const { name, value } = e?.target;
		const newList = holiday?.map((v, i) => {
			if (name == i) {
				return { ...v, holidayName: value };
			} else {
				return v;
			}
		});
		setHoliday(newList);
	};
	const selectDate = (date, index) => {
		if (!date?.multi?.first?.day && !date?.multi?.second?.day) {
			const newList = holiday?.map((v, i) => {
				if (index == i) {
					return {
						...v,
						holidayStartDate: null,
						holidayEndDate: null,
						dayStart: null,
						monthStart: null,
						dayEnd: null,
						monthEnd: null,
					};
				} else {
					return v;
				}
			});
			setHoliday(newList);
		} else if (date?.multi?.second?.day) {
			const day = date?.multi?.first?.day;
			const month = date?.multi?.first?.month;
			const year = date?.multi?.first?.year;

			const day1 = date?.multi?.second?.day;
			const month1 = date?.multi?.second?.month;
			const year1 = date?.multi?.second?.year;

			const newList = holiday?.map((v, i) => {
				if (index == i) {
					return {
						...v,
						holidayStartDate: `${year}-${
							month > 9
								? `${month}-${day > 9 ? day : `0${day}`}`
								: `0${month}-${day > 9 ? day : `0${day}`}`
						}`,
						holidayEndDate: `${year1}-${
							month1 > 9
								? `${month1}-${day1 > 9 ? day1 : `0${day1}`}`
								: `0${month1}-${day1 > 9 ? day1 : `0${day1}`}`
						}`,
						dayStart: day,
						monthStart: month,
						dayEnd: day1,
						monthEnd: month1,
					};
				} else {
					return v;
				}
			});
			setHoliday(newList);
		} else {
			const day = date?.multi?.first?.day;
			const month = date?.multi?.first?.month;
			const year = date?.multi?.first?.year;
			const newList = holiday?.map((v, i) => {
				if (index == i) {
					return {
						...v,
						holidayStartDate: `${year}-${
							month > 9
								? `${month}-${day > 9 ? day : `0${day}`}`
								: `0${month}-${day > 9 ? day : `0${day}`}`
						}`,
						holidayEndDate: `${year}-${
							month > 9
								? `${month}-${day > 9 ? day : `0${day}`}`
								: `0${month}-${day > 9 ? day : `0${day}`}`
						}`,
						dayStart: day,
						monthStart: month,
					};
				} else {
					return v;
				}
			});
			setHoliday(newList);
		}
	};

	// close

	const deleteFOne = async (id) => {
		try {
			const res = await request.delete(`admin/scheduled-time/holiday/${id}`);
			getTime();
			Toast({
				type: 'success',
				message: 'Deleted !',
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const deleteF = (index) => {
		const id = holiday?.filter((v, i) => i === index)?.[0]?.id;
		if (id) {
			deleteFOne(id);
		} else {
			const newList = holiday?.filter((v, i) => i !== index);
			setHoliday(newList);
		}
	};

	const closeHoliday = (i) => {
		Popup({
			title: 'Do you want to delete this ?',
			isConfirmedFunction: () => deleteF(i),
			showCancelButton: true,
			type: 'question',
		});
	};

	const saveFunction = async () => {
		setLoading(true);

		try {
			const res = await request.put('/admin/scheduled-time', {
				data: {
					...state,
					holidays: holiday,
				},
				transactionTime: '2023-08-14T15:43:01.8152087',
			});
			setLoading(false);

			navigate('/admin/zoom');
			Toast({
				type: 'success',
				message: 'Saved',
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
			setLoading(false);
		}
	};
	const selectTime = (value, name) => {
		setState({
			...state,
			[name]: value?.caption,
		});
	};
	const changeActive = (value, name) => {
		setState({
			...state,
			[name]: value,
		});
	};

	// const newDate = `${year}-${
	// 	month > 9
	// 		? `${month}-${day > 9 ? day : `0${day}`}`
	// 		: `0${month}-${day > 9 ? day : `0${day}`}`
	// }`;

	useEffect(() => {
		getTime();
	}, []);
	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="FlexBoxZoom">
				<div className="ColumnBox">
					<p className="Header">Schedule Zoom </p>
					<div className="TagBox">
						<div></div>
						<div className="FlexBoxZoom">
							<Button2
								bg={'#0B3A48'}
								width={'101px'}
								height={'42px'}
								onClick={() => navigate(-1)}
								secondary={'true'}
							>
								Cancel
							</Button2>
							<Button2
								bg={'#0B3A48'}
								width={'101px'}
								height={'42px'}
								onClick={saveFunction}
							>
								Save changes
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<div className="ColumnBox">
							{/* Monday */}
							<Wrapper.Flex>
								<Wrapper.Title>Monday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.mondayStartTime}
									onChange={(e) => selectTime(e, 'mondayStartTime')}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.mondayEndTime}
									onChange={(e) => selectTime(e, 'mondayEndTime')}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isMondayActive}
										onClick={(e) => changeActive(e, 'isMondayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>
							{/* Tuesday */}
							<Wrapper.Flex>
								<Wrapper.Title>Tuesday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.tuesdayStartTime}
									onChange={(e) => selectTime(e, 'tuesdayStartTime')}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.tuesdayEndTime}
									onChange={(e) => selectTime(e, 'tuesdayEndTime')}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isTuesdayActive}
										onClick={(e) => changeActive(e, 'isTuesdayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>

							{/* Wednesday */}
							<Wrapper.Flex>
								<Wrapper.Title>Wednesday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.wednesdayStartTime}
									onChange={(e) => selectTime(e, 'wednesdayStartTime')}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.wednesdayEndTime}
									onChange={(e) => selectTime(e, 'wednesdayEndTime')}
									options={TimeData}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isWednesdayActive}
										onClick={(e) => changeActive(e, 'isWednesdayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>

							{/* Thursday */}
							<Wrapper.Flex>
								<Wrapper.Title>Thursday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									options={TimeData}
									value={state?.thursdayStartTime}
									onChange={(e) => selectTime(e, 'thursdayStartTime')}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.thursdayEndTime}
									onChange={(e) => selectTime(e, 'thursdayEndTime')}
									options={TimeData}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isThursdayActive}
										onClick={(e) => changeActive(e, 'isThursdayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>

							{/* Friday */}
							<Wrapper.Flex>
								<Wrapper.Title>Friday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.fridayStartTime}
									onChange={(e) => selectTime(e, 'fridayStartTime')}
									options={TimeData}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									value={state?.fridayEndTime}
									onChange={(e) => selectTime(e, 'fridayEndTime')}
									title={'Choose time'}
									options={TimeData}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isFridayActive}
										onClick={(e) => changeActive(e, 'isFridayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>

							{/* Saturday */}
							<Wrapper.Flex>
								<Wrapper.Title>Saturday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.saturdayStartTime}
									onChange={(e) => selectTime(e, 'saturdayStartTime')}
									options={TimeData}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									value={state?.saturdayEndTime}
									onChange={(e) => selectTime(e, 'saturdayEndTime')}
									title={'Choose time'}
									options={TimeData}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isSaturdayActive}
										onClick={(e) => changeActive(e, 'isSaturdayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>

							{/* Sunday */}
							<Wrapper.Flex>
								<Wrapper.Title>Sunday</Wrapper.Title>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.sundayStartTime}
									options={TimeData}
								/>
								<Select2
									width={'165px'}
									color={'#000'}
									br={'1px solid #E1E1E1'}
									title={'Choose time'}
									value={state?.sundayEndTime}
									options={TimeData}
								/>
								<Wrapper.Box>
									<Switch
										size={'small'}
										checked={state?.isSundayActive}
										onClick={(e) => changeActive(e, 'isSundayActive')}
									/>
								</Wrapper.Box>
							</Wrapper.Flex>
						</div>

						{/*  Holidays*/}
						<div className="ColumnBox">
							<Wrapper.Title>Holidays</Wrapper.Title>

							{holiday?.map((v, i) => (
								<Wrapper.Flex>
									<Wrapper.InputBox>
										<Wrapper.Input
											name={i}
											onChange={(e) => v?.focus && onChangeHolidays(e)}
											value={v?.holidayName}
											placeholder="Enter holiday name"
										/>
										<Wrapper.Stack />

										<Wrapper.Column>
											{v?.dayStart !== v?.dayEnd ? (
												v?.dayEnd ? (
													<Wrapper.Title>{`${v?.dayStart} ${
														twoMonth[v?.monthStart - 1]
													}- ${v?.dayEnd} ${
														twoMonth[v?.monthEnd - 1]
													}`}</Wrapper.Title>
												) : v?.dayStart ? (
													<Wrapper.Title>{`${v?.dayStart} ${
														month[v?.monthStart - 1]
													}`}</Wrapper.Title>
												) : null
											) : v?.dayStart ? (
												<Wrapper.Title>{`${v?.dayStart} ${
													month[v?.monthStart - 1]
												}`}</Wrapper.Title>
											) : null}

											{/* <Wrapper.Title>{v?.dayEnd }</Wrapper.Title> */}
											{/* <Wrapper.Title>
												{v?.holidayEndDate && v?.holidayEndDate}
											</Wrapper.Title> */}
										</Wrapper.Column>
									</Wrapper.InputBox>
									<Wrapper.Box onClick={() => !v?.focus && checkFocus(i)}>
										{v?.focus ? (
											<Datepicker2
												onChange={(e) => selectDate(e, i)}
												value={v?.holidayStartDate}
												intervalValue={[v?.holidayStartDate, v?.holidayEndDate]}
											/>
										) : (
											<PenIcon color="#000" width={'20px'} height={'20px'} />
										)}
									</Wrapper.Box>
									<Wrapper.Box
										onClick={() => (v?.focus ? checkDone(i) : closeHoliday(i))}
									>
										{v?.focus ? (
											<Check2Icon
												stroke="#000"
												width={'20px'}
												height={'20px'}
											/>
										) : (
											<CloseIcon color="#000" width={'20px'} height={'20px'} />
										)}
									</Wrapper.Box>
								</Wrapper.Flex>
							))}

							<Wrapper.ButtonBox
								onClick={() =>
									setHoliday([
										...holiday,
										{
											holidayName: '',
											holidayStartDate: '',
											focus: true,
										},
									])
								}
							>
								+ Add holiday
							</Wrapper.ButtonBox>
						</div>
					</Wrapper.WrapTable>
				</div>
			</div>
		</Wrapper>
	);
};

export default ScheduleZoom;
