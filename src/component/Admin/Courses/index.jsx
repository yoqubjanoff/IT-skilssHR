import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Wrapper } from './style';
import { Wrapper } from './style';
import {
	Button2,
	CustomTable,
	Input,
	Pagination,
	Popup,
} from '../../../component/generics';
import { column } from './header';
import request from '../../../services/api';
import { useCoursContext } from '../../../context/CoursesContext';
import { SearchIcon } from '../../../component/generics/genericIcons';

const CoursePage = () => {
	const [loading, setLoading] = useState(false);
	const { search } = useLocation();
	const [{ courses }, dispatch] = useCoursContext();
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(0);
	const [pageSize] = useState(10);
	const [totalPages, setTotalPages] = useState(1);

	const getBlogs = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/courses${search || ''}`, {
				params: {
					page: currentPage,
					size: pageSize,
				},
			});

			const paginationData = res?.data?.pagination;

			if (paginationData) {
				setTotalPages(paginationData.totalPages);
			}

			dispatch({
				type: 'setCourses',
				payload: res?.data?.data || [],
			});

			setLoading(false);
		} catch (error) {
			console.error('Error:', error);
			setLoading(false);
			// Show a pop-up notification for the error
			Popup({
				type: 'error',
				message: error.message || 'An error occurred',
			});
		}
	};

	useEffect(() => {
		getBlogs();
	}, [currentPage, pageSize, search]);

	const startIndex = currentPage * pageSize;
	const endIndex = startIndex + pageSize;
	const displayedCourses = courses.slice(startIndex, endIndex);

	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Courses</p>
					<div className="TagBox">
						<div className="FlexBox"></div>

						<div className="FlexBox">
							<Input
								prefix={<SearchIcon />}
								placeholder={'Search'}
								width={'200px'}
								height="42px"
								color="#000"
								bg={'#fff'}
								br={'100px'}
								style={{ borderRadius: '20px' }}
							/>
							<Button2
								bg={'#0B3A48'}
								color={'#000'}
								width={'150px'}
								height={'42px'}
								onClick={() => navigate('/admin/courses/add')}
							>
								Add Courses
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable
							column={column}
							rowData={displayedCourses || []}
							loading={loading}
						/>
					</Wrapper.WrapTable>
					{/* Pagination */}
					{/* <Pagination
						margin="20px 0"
						current={currentPage}
						SizeAll={totalPages}
						setCurrentPage={(page) => {
							setCurrentPage(page);
						}}
					/> */}
				</div>
			</div>
		</Wrapper>
	);
};

export default CoursePage;
