import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	CustomTable,
	Input,
	Pagination,
} from '../../../component/generics';
import { column } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { SearchIcon } from '../../../component/generics/genericIcons';
import { useBlogContex } from '../../../context/useContext';
import useSearch from '../../../services/Search';

const Blog = () => {
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const [loading, setLoading] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const { search } = useLocation();
	const [{ blogs }, dispatch] = useBlogContex();

	const navigate = useNavigate();
	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/blog${search || ''}`);
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
					<p className="Header">Blogs</p>
					<div className="TagBox">
						<div className="FlexBox">
							{/* <Input
								suffix={<SearchIcon />}
								placeholder={'Search'}
								value={searchValue}
								width={'332px'}
								height="42px"
								color="#000"
								bg={'#fff'}
								br={'100px'}
								onChange={(e) => setSearchValue(e.target.value)}
							/> */}
							<div></div>
							<Button2
								bg={'#0B3A48'}
								width={'150px'}
								height={'42px'}
								onClick={() => navigate('/admin/blogs/add')}
							>
								Add new Blog
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

export default Blog;
