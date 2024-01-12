import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { SearchIcon } from '../../../../../component/generics/genericIcons';
import {
	Select2,
	Button2,
	Input,
	CustomTable,
	Pagination,
	Popup,
} from '../../../../../component/generics';
import { column } from './header';
import request from '../../../../../services/api';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../../../../../services/Search';
import {
	useQueryParam,
	StringParam,
	NumberParam,
	BooleanParam,
} from 'use-query-params';

const AdminView = () => {
	const query = useSearch();
	const [isDetailedTestPassed, setIsDetailedTestPassed] = useQueryParam(
		'isDetailedTestPassed',
		BooleanParam,
	);
	const [isStandardTestPassed, setIsStandardTestPassed] = useQueryParam(
		'isStandardTestPassed',
		BooleanParam,
	);
	const [searchParam, setSearchParam] = useQueryParam('search', StringParam);
	const [size, setSize] = useQueryParam('size', NumberParam);
	const [page, setPage] = useQueryParam('page', NumberParam);
	const [subDirection, setSubDirection] = useQueryParam(
		'subDirection',
		StringParam,
	);

	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [option, setOption] = useState([]);
	const [pagination, setPagination] = useState({});
	const [direction, setDirection] = useState('');
	const [searchSteta, setSearch] = useState('');
	const [passed, setPassed] = useState('');
	const { search } = useLocation();
	const passedOption = [
		{
			id: 1,
			caption: 'All',
			value: 'All',
		},
		{
			id: 2,
			caption: 'Standard Test Passed',
			value: 'isStandardTestPassed',
		},
		{
			id: 3,
			caption: 'Detailed Test Passed',
			value: 'isDetailedTestPassed',
		},
	];

	const getTalents = async () => {
		if (query.get('size')) {
			setLoading(true);
			try {
				const res = await request.get(`admin/user-talents${search || ''}`);
				setData(res?.data?.data);
				setPagination(res?.data?.pagination);
				setLoading(false);
			} catch (error) {
				setLoading(false);

				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};

	const getDirections = async () => {
		try {
			const res = await request.get('admin/directions/sub-directions');
			setOption([
				{
					id: 312,
					caption: 'All',
				},
				...res.data?.data,
			]);
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const changePassed = (v) => {
		if (v?.value === 'All') {
			setIsStandardTestPassed(null);
			setIsDetailedTestPassed(null);
			setPassed('All');
		} else if (v?.value === 'isDetailedTestPassed') {
			setIsDetailedTestPassed('true');
			setIsStandardTestPassed(null);

			setPassed(v?.caption);
		} else if (v?.value === 'isStandardTestPassed') {
			setIsStandardTestPassed('true');
			setIsDetailedTestPassed(null);
			setPassed(v?.caption);
		}
	};

	const changeDirection = (e) => {
		if (e?.caption === 'All') {
			setSubDirection(null);
			setDirection(e?.caption);
		} else {
			setDirection(e?.caption);
			setSubDirection(e?.id);
		}
	};

	const resetFunc = () => {
		setSearchParam(null);
		setIsStandardTestPassed(null);
		setIsDetailedTestPassed(null);
		setSubDirection(null);
		setDirection('Sub direction');
		setSearch('');
		setPassed('Passed test type');
	};
	const applyFunc = () => {
		if (searchSteta) {
			setSearchParam(searchSteta);
		} else {
			setSearchParam(null);
		}
	};
	const changeSearch = (e) => {
		const { value } = e?.target;
		if (value) {
			setSearch(value);
		} else {
			setSearchParam(null);

			setSearch('');
		}
	};

	useEffect(() => {
		setSize(20);
		getTalents();
	}, [search]);

	useEffect(() => {
		getDirections();
		setPage(0);
		resetFunc();
	}, []);
	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Talents page</p>
					<div className="TagBox">
						<div className="FlexBox">
							<Select2
								width={'230px'}
								height={'42px'}
								color={'#000'}
								title={'Passed test type'}
								br={'1px solid #E1E1E1'}
								radius={'100px'}
								options={passedOption || 'Passed test type'}
								onChange={changePassed}
								value={passed}
							/>

							<Select2
								width={'250px'}
								height={'42px'}
								color={'#000'}
								title={'Sub direction'}
								br={'1px solid #E1E1E1'}
								radius={'100px'}
								options={option}
								value={direction || 'Sub direction'}
								onChange={changeDirection}
							/>
						</div>
						<div className="FlexBox">
							<Input
								suffix={<SearchIcon />}
								placeholder={'Search for Name, email, number'}
								width={'332px'}
								height="42px"
								style={{ borderRadius: '20px' }}
								color="#000"
								bg={'#fff'}
								br={'100px'}
								value={searchSteta}
								onChange={changeSearch}
								onKeyDown={(e) => e?.code === 'Enter' && applyFunc()}
							/>
							<Button2
								bg={'#fff'}
								width={'71px'}
								height={'42px'}
								onClick={resetFunc}
							>
								Reset
							</Button2>
							<Button2
								bg={'#0B3A48'}
								width={'101px'}
								height={'42px'}
								onClick={applyFunc}
							>
								Apply filter
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={data} loading={loading} />
					</Wrapper.WrapTable>
					<Pagination
						current={Number(query.get('page')) || 0}
						SizeAll={pagination?.totalPages}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
