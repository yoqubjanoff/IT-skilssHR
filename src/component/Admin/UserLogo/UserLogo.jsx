import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Wrapper } from '../Courses/style';
import { Button2, CustomTable } from '../../../component/generics';
import request from '../../../services/api';
import { UserStyle } from './UserStyle';
import { LogoColumn } from './header';
import { useGeneralContext } from '../../../context/useContext';
const UserLogo = () => {
	const navigate = useNavigate();
	const [{ loading, logos }, dispatch] = useGeneralContext();
	const getLogos = async () => {
		dispatch({ type: 'setLoading', payload: true });
		try {
			const res = await request.get('admin/logo');
			dispatch({ type: 'setLoading', payload: false });
			dispatch({ type: 'setLogos', payload: res.data?.data });
		} catch (error) {
			dispatch({ type: 'setLoading', payload: false });
		}
	};

	useEffect(() => {
		getLogos();
		dispatch({ type: 'setGetLogos', payload: getLogos });
	}, []);

	return (
		<UserStyle>
			<div>
				<h4>Logo</h4>
			</div>
			<div>
				<div className="headBox">
					<div className="FlexBox">
						<Button2
							bg={'#0B3A48'}
							color={'#000'}
							width={'150px'}
							height={'42px'}
							onClick={() => navigate('/admin/logo/add')}
						>
							Add Logo
						</Button2>
					</div>
				</div>
				<Wrapper.WrapTable>
					<CustomTable
						column={LogoColumn}
						rowData={logos || []}
						loading={loading}
					/>
				</Wrapper.WrapTable>
			</div>
		</UserStyle>
	);
};

export default UserLogo;
