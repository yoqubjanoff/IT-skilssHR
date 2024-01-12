import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	CustomTable,
	Pagination,
	Input,
	Button2,
} from '../../../component/generics';
import { column } from './header';
import { useLocation, useNavigate } from 'react-router-dom';
import request from '../../../services/api';
import useSearch from '../../../services/Search';
import { SearchIcon } from '../../../component/generics/genericIcons';
import { Replace } from '../../../services/Replace.js';

const CallRequest = () => {
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const [callData, setCallData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchSteta, setSearch] = useState('');
	const navigate = useNavigate();

	const applyFunc = () => {
		if (searchSteta) {
			navigate(`${pathname}${Replace('search', searchSteta)}`);
		} else {
			navigate(`${pathname}${Replace('search', '')}`);
		}
	};

	const resetFunc = () => {
		navigate(`${pathname}${Replace('search', '')}`);

		setSearch('');
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

	const { search, pathname } = useLocation();
	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`/admin/call-request${search || ''}`);
			setPagination(res?.data?.pagination);
			setCallData(res?.data?.data);

			setLoading(false);
		} catch (error) {
			console.error('Error');
		}
	};
	useEffect(() => {
		getBlogs();
	}, [search]);

	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Cases</p>
					<div className="TagBox">
						<div className="FlexBox"></div>

						<div className="FlexBox">
							<Input
								suffix={<SearchIcon />}
								placeholder={'Search '}
								style={{ borderRadius: '20px' }}
								width={'332px'}
								height="42px"
								color="#000"
								bg={'#fff'}
								br={'100px'}
								value={searchSteta}
								onKeyDown={(e) => e?.code === 'Enter' && applyFunc()}
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
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={callData} loading={loading} />
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

export default CallRequest;
