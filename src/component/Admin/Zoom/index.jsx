import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import {
	CustomTag,
	Button2,
	Input,
	CustomTable,
	Pagination,
	Popup,
} from '../../../component/generics';
import { SearchIcon } from '../../../component/generics/genericIcons';
import { column } from './header';
import request from '../../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { Replace } from '../../../services/Replace.js';
import { useSearch } from '../../../services/Search';
import { useZoomContext } from '../../../context/useContext';

const AdminView = () => {
	const query = useSearch();
	const [loading, setLoading] = useState(false);
	const [pagination, setPagination] = useState({});
	const [searchSteta, setSearch] = useState('');
	const { search, pathname } = useLocation();
	const [{ zoomList }, dispatch] = useZoomContext();

	const navigate = useNavigate();

	const getTalents = async () => {
		setLoading(true);
		try {
			const res = await request.get(
				`admin/zoom-requests/filter${search || ''}`,
			);
			dispatch({ type: 'setZoomList', payload: res?.data?.data });

			setPagination(res?.data?.pagination);
			setLoading(false);
		} catch (error) {
			setLoading(false);

			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const resetFunc = () => {
		navigate(`${pathname}${Replace('subDirection', '')}`);
		navigate(`${pathname}${Replace('isDetailedTestPassed', '')}`);
		navigate(`${pathname}${Replace('isStandardTestPassed', '')}`);
		navigate(`${pathname}${Replace('search', '')}`);
		navigate(`${pathname}${Replace('status', '')}`);
		setSearch('');
	};
	const applyFunc = () => {
		if (searchSteta) {
			navigate(`${pathname}${Replace('search', searchSteta)}`);
		} else {
			navigate(`${pathname}${Replace('search', '')}`);
		}
	};
	const changeSearch = (e) => {
		const { value } = e?.target;
		if (value) {
			setSearch(value);
		} else {
			navigate(`${pathname}${Replace('search', '')}`);
			setSearch('');
		}
	};

	useEffect(() => {
		getTalents();
	}, [search]);

	useEffect(() => {
		navigate(`${pathname}${Replace('page', 0)}`);
		navigate(`${pathname}${Replace('size', 20)}`);
		dispatch({ type: 'setGetList', payload: getTalents });
	}, []);
	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Meeting requests</p>
					<div className="TagBox">
						<div className="FlexBox">
							<CustomTag
								title="Accepted"
								active={query.get('status') === 'ACCEPTED' ? 1 : 0}
								onClick={() =>
									navigate(`${pathname}${Replace('status', 'ACCEPTED')}`)
								}
							/>
							<CustomTag
								title="Declined"
								active={query.get('status') === 'DECLINED' ? 1 : 0}
								incinc
								onClick={() =>
									navigate(`${pathname}${Replace('status', 'DECLINED')}`)
								}
							/>
							<CustomTag
								title="Conducted"
								active={query.get('status') === 'CONDUCTED' ? 1 : 0}
								onClick={() =>
									navigate(`${pathname}${Replace('status', 'CONDUCTED')}`)
								}
							/>
							<CustomTag
								title="New"
								active={query.get('status') === 'NEW' ? 1 : 0}
								onClick={() =>
									navigate(`${pathname}${Replace('status', 'NEW')}`)
								}
							/>
						</div>
						<div className="FlexBox">
							{/* <Input
								suffix={<SearchIcon />}
								placeholder={'Search '}
								width={'332px'}
								height="42px"
								color="#000"
								bg={'#fff'}
								br={'100px'}
								value={searchSteta}
								onChange={changeSearch}
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
							</Button2> */}
							<Button2
								bg={'#0B3A48'}
								width={'101px'}
								height={'42px'}
								onClick={() => navigate('/admin/zoom/schedule')}
							>
								Meeting Availibility
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={zoomList} loading={loading} />
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
