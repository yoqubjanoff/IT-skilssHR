import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	// Input,
	CustomTable,
	Popup,
} from '../../../component/generics';
// import { SearchIcon } from '../../../component/generics/genericIcons';
import { column } from './header';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { useUserContex } from '../../../context/useContext';

const AdminView = () => {
	const [loading, setLoading] = useState(false);
	const { search } = useLocation();
	const [{ userList }, dispatch] = useUserContex();

	const navigate = useNavigate();
	const getAdmins = async () => {
		setLoading(true);
		try {
			const res = await request.get(`admin/accounts/all${search || ''}`);
			dispatch({
				type: 'setUserList',
				payload: res?.data?.data,
			});
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
		getAdmins();
	}, [search]);
	return (
		<Wrapper>
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Admin list</p>
					<div className="TagBox">
						<div className="FlexBox">
							{/* <CustomTag
								title="Admin"
								active={active === 'second' ? 1 : 0}
								incinc
								onClick={() => setActive('second')}
							/>
							<CustomTag
								title="Customer support"
								active={active === 'three' ? 1 : 0}
								onClick={() => setActive('three')}
							/> */}
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
								width={'120px'}
								height={'42px'}
								onClick={() => navigate('/admin/users/add')}
							>
								Add new user
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable column={column} rowData={userList} loading={loading} />
					</Wrapper.WrapTable>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
