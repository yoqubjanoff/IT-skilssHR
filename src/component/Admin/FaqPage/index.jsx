import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	CustomTable,
	Pagination,
	Popup,
} from '../../../component/generics';
import { column } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { useFaqContext } from '../../../context/useContext';
import useSearch from '../../../services/Search';

const AdminView = () => {
	const [loading, setLoading] = useState(false);
	const { search } = useLocation();
	const [{ faqList }, dispatch] = useFaqContext();
	const navigate = useNavigate();
	const [pagination, setPagination] = useState({
		page: 1,
		pageSize: 10,
		totalItems: 0,
	});
	const query = useSearch();
	const getDirections = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/FAQ${search || ''}`);

			dispatch({
				type: 'setFaqAllData',
				payload: res?.data?.data,
			});

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

	useEffect(() => {
		getDirections();
	}, [search, pagination.page]);

	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">FAQ</p>
					<div className="TagBox">
						<div className="FlexBox">
							<Button2
								bg={'#55ff00'}
								width={'150px'}
								height={'42px'}
								onClick={() => navigate('/admin/addfaq/add')}
							>
								Add FAQ
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={faqList} loading={loading} />
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
