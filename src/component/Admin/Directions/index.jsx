import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { Button2, CustomTable, Popup } from '../../../component/generics';
import { column } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { useUserContex } from '../../../context/useContext';

const AdminView = () => {
	const [loading, setLoading] = useState(false);
	const { search } = useLocation();
	const [{ directions }, dispatch] = useUserContex();

	const navigate = useNavigate();
	const getDirections = async () => {
		setLoading(true);
		try {
			const res = await request.get('admin/directions/all');
			dispatch({
				type: 'setDirections',
				payload: res?.data?.data,
			});
			setLoading(false);
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
			console.error('Error');
		}
	};
	useEffect(() => {
		getDirections();
	}, [search]);
	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Directions</p>
					<div className="TagBox">
						<div className="FlexBox">
							{/* <Input
								suffix={<SearchIcon />}
								placeholder={'Search'}
								width={'332px'}
								height="42px"
								color="#000"
								bg={'#fff'}
								br={'100px'}
							/>
							<Button2 bg={'#37A67E'} width={'60px'} height={'42px'}>
								<Wrapper.Title last={'true'}>Search</Wrapper.Title>
							</Button2> */}
						</div>

						<div className="FlexBox">
							<Button2
								bg={'#0B3A48'}
								width={'150px'}
								height={'42px'}
								onClick={() => navigate('/admin/direction/add')}
							>
								Add new direction
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable
							column={column}
							rowData={directions}
							loading={loading}
						/>
					</Wrapper.WrapTable>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
