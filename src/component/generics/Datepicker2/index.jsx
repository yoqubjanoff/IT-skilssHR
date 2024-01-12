import React, { useState } from 'react';
import { Container, Wrapper, Icon } from './style';
import { CalendarIcon } from '../genericIcons';
// import { Select } from '../index';
const Datepicker = ({ onChange, value, error, title, intervalValue }) => {
	let month = [
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
	// const options = [];
	// for (let i = 1960; i < 2023; i++) {
	// 	options.push({
	// 		id: i,
	// 		name: i,
	// 	});
	// }
	const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const [selected, setSelected] = useState({
		first: {
			year: intervalValue?.[0]
				? parseInt(intervalValue?.[0]?.split('-')?.[0])
				: value
				? parseInt(value?.split('-')?.[0])
				: null,
			month: intervalValue?.[0]
				? parseInt(intervalValue?.[0]?.split('-')?.[1])
				: value
				? parseInt(value?.split('-')?.[1])
				: null,
			day: intervalValue?.[0]
				? parseInt(intervalValue?.[0]?.split('-')?.[2])
				: value
				? parseInt(value?.split('-')?.[2])
				: null,
		},
		second: {
			year: parseInt(intervalValue?.[1]?.split('-')?.[0]) || null,
			month: parseInt(intervalValue?.[1]?.split('-')?.[1]) || null,
			day: parseInt(intervalValue?.[1]?.split('-')?.[2]) || null,
		},
	});
	const { first, second } = selected;
	let date = new Date();
	const [curMonth, setCurMonth] = useState(
		first?.month ? first?.month - 1 : date.getMonth(),
	);
	const [open, setOpen] = useState(false);
	const [curYear, setCurYear] = useState(first?.year || date.getFullYear());
	let lastDateOfMonth = new Date(
		first?.year || curYear,
		first?.month || curMonth + 1,
		0,
	).getDate();
	let firstDateOfMonth = new Date(curYear, curMonth, 1).getDay();
	let lastDateOfLastMonth = new Date(curYear, curMonth, 0).getDate();
	const [selectDate, setSelectDate] = useState({
		year: parseInt(value?.split('-')?.[0]) || date.getFullYear(),
		month: parseInt(value?.split('-')?.[2]) || date.getMonth() + 1,
		day: parseInt(value?.split('-')?.[1]) || date.getDate(),
	});

	let preMonth = [];
	for (let i = firstDateOfMonth; i > 0; i--) {
		preMonth.push(lastDateOfLastMonth - i + 1);
	}
	const nextDate = (e, next) => {
		e?.stopPropagation();

		if (next) {
			if (curMonth >= 11) {
				setCurMonth(0);
				setCurYear(curYear + 1);
			} else {
				setCurMonth(curMonth + 1);
			}
		} else {
			if (curMonth <= 0) {
				setCurMonth(11);
				setCurYear(curYear - 1);
			} else {
				setCurMonth(curMonth - 1);
			}
		}
	};
	const selectFunc = (i) => {
		if (selected?.first?.day && selected?.second?.day) {
			setSelected({
				...selected,
				first: {},
				second: {},
			});
			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					first: {},
					second: {},
				},
			});
		} else if (
			i < selected?.first?.day &&
			curMonth + 1 > selected?.first?.month &&
			curYear >= selected?.first?.year
		) {
			setSelected({
				...selected,
				second: { day: i + 1, month: curMonth + 1, year: curYear },
			});

			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					second: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		} else if (curYear < selected?.first?.year) {
			setSelected({
				...selected,
				first: { day: i + 1, month: curMonth + 1, year: curYear },
			});
			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					first: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		} else if (
			// if
			i < selected?.first?.day &&
			curMonth + 1 < selected?.first?.month
		) {
			setSelected({
				...selected,
				first: { day: i + 1, month: curMonth + 1, year: curYear },
			});
			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					first: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		} else if (i < selected?.first?.day) {
			setSelected({
				...selected,
				first: { day: i + 1, month: curMonth + 1, year: curYear },
			});

			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					first: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		} else if (!selected?.first?.day) {
			setSelected({
				...selected,
				first: { day: i + 1, month: curMonth + 1, year: curYear },
			});
			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					first: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		} else {
			setSelected({
				...selected,
				second: { day: i + 1, month: curMonth + 1, year: curYear },
			});

			setSelectDate({
				...selectDate,
				day: i + 1,
				month: curMonth + 1,
				year: curYear,
			});
			return onChange({
				single: { day: i + 1, month: curMonth + 1, year: curYear },
				multi: {
					...selected,
					second: { day: i + 1, month: curMonth + 1, year: curYear },
				},
			});
		}
	};

	// const selecYear = (year) => {
	// 	setCurYear(year);
	// };
	return (
		<Wrapper
			error={error}
			onClick={() => setOpen(!open)}
			active={value ? 1 : open ? 1 : 0}
		>
			<CalendarIcon color="#000" width={'20px'} height={'20px'} />
			<Wrapper.Header active={value ? 1 : 0}>{title}</Wrapper.Header>
			{/* {value ? `${selectDate.day}.${selectDate.month}.${selectDate.year}` : ''} */}
			<Container open={open ? 1 : 0} onClick={(e) => e?.stopPropagation()}>
				<Container.WrapBox>
					<Container.Column>
						<Container.Wrap>
							<Container.Flex>
								<Container.Title>
									{/* <Select
										options={options}
										value={selectDate?.year}
										onClick={(e) => selecYear(e)}
									/> */}
									{curYear}
								</Container.Title>
							</Container.Flex>
							<Container.Flex
								style={{ justifyContent: 'flex-end', gap: '6px' }}
							>
								<Container.Title>{month[curMonth]}</Container.Title>
								<Icon.Left onClick={(e) => nextDate(e)} />
								<Icon.Right onClick={(e) => nextDate(e, 'next')} />
							</Container.Flex>
						</Container.Wrap>

						<Container.Flex>
							{weekDays?.map((v, i) => (
								<Container.BoxMonth key={i}>
									<Container.Desc>{v}</Container.Desc>
								</Container.BoxMonth>
							))}
						</Container.Flex>
						<Container.FlexBox>
							{preMonth.map(
								(v, i) =>
									i > 0 && (
										<Container.Box
											key={i}
											style={{ opacity: '0.5' }}
											// active={
											// 	(v === first.day &&
											// 		first.month === curMonth &&
											// 		curYear === first.year) ||
											// 	(v === second.day &&
											// 		second.month === curMonth &&
											// 		curYear === second.year)
											// 		? 'true'
											// 		: undefined
											// }
										>
											<Container.Title
											// active={
											// 	(v === first.day &&
											// 		first.month === curMonth &&
											// 		curYear === first.year) ||
											// 	(v === second.day &&
											// 		second.month === curMonth &&
											// 		curYear === second.year)
											// 		? 'true'
											// 		: undefined
											// }
											>
												{v}
											</Container.Title>
										</Container.Box>
									),
							)}
							{new Array(lastDateOfMonth).fill('true').map((v, i) => (
								<Container.Box
									key={i}
									selectable={'true'}
									onClick={() => selectFunc(i, curYear)}
									active={
										(i + 1 === first.day &&
											first.month === curMonth + 1 &&
											curYear === first.year) ||
										(i + 1 === second.day &&
											second.month === curMonth + 1 &&
											curYear === second.year)
											? 'true'
											: undefined
									}
									oraliq={
										(i + 1 > first.day &&
											first.month === curMonth + 1 &&
											curYear === first.year &&
											(i + 1 < second.day || second.month > first.month)) ||
										(i + 1 < second.day &&
											second.month === curMonth + 1 &&
											curYear === second.year &&
											second.month > first.month)
									}
								>
									<Container.Title
										active={
											(i + 1 === first.day &&
												first.month === curMonth + 1 &&
												curYear === first.year) ||
											(i + 1 === second.day &&
												second.month === curMonth + 1 &&
												curYear === second.year)
												? 'true'
												: undefined
										}
										oraliq={
											(i + 1 > first.day &&
												first.month === curMonth + 1 &&
												curYear === first.year &&
												(i + 1 < second.day || second.month > first.month)) ||
											(i + 1 < second.day &&
												second.month === curMonth + 1 &&
												curYear === second.year &&
												second.month > first.month)
										}
									>
										{i + 1}
									</Container.Title>
								</Container.Box>
							))}
						</Container.FlexBox>
					</Container.Column>
				</Container.WrapBox>
			</Container>
			{error && <Wrapper.Error>{error}</Wrapper.Error>}
		</Wrapper>
	);
};

export default Datepicker;
