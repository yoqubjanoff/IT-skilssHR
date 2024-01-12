import React from 'react';
import AdminNavbar from '../../component/AdminNavbar';
import Sidebar from '../../component/Sidebar';
import { Wrapper } from './style';
import { Outlet } from 'react-router-dom';

const AdminView = () => {
	return (
		<Wrapper>
			<AdminNavbar />
			<div className="FlexBoxAdmin">
				<Sidebar />
				<Outlet />
			</div>
		</Wrapper>
	);
};

export default AdminView;
