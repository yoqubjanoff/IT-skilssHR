import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { Button2, CustomTable, Pagination } from '../../../component/generics';
import { column } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { useBlogContex } from '../../../context/useContext';
import useSearch from '../../../services/Search';

const Partners = () => {
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const [loading, setLoading] = useState(false);
	const { search } = useLocation();
	const [{ blogs }, dispatch] = useBlogContex();
	console.log(blogs, 'blogs');
	const navigate = useNavigate();
	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/social-media${search || ''}`);
			setPagination(res?.data?.pagination);
			dispatch({
				type: 'setBlogs',
				payload: res?.data?.data,
			});
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
					<p className="Header">Social media</p>
					<div className="TagBox">
						<div className="FlexBox" style={{ justifyContent: 'end' }}>
							<Button2
								bg={'#0B3A48'}
								width={'170px'}
								height={'42px'}
								onClick={() => navigate('/admin/social/add')}
							>
								Add new social media
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={blogs} loading={loading} />
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

export default Partners;
