import React, { useState } from 'react';
import { Wrapper } from './style';
import {
	LogoIcon,
	UserIcon,
	LogoutIcon,
	KeyIcon,
} from '../../component/generics/genericIcons';
import { Popup } from '../../component/generics';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const closeFunc = () => {
		Popup({
			title: 'Do you want to log out ?',
			isConfirmedFunction: () => closed(),
			showCancelButton: true,
			type: 'question',
		});
	};
	const closed = () => {
		setOpen(!open);
		localStorage.removeItem('tokenAdmin');
		localStorage.removeItem('adminName');
		navigate('/admin/sign-in');
	};

	return (
		<Wrapper tabIndex={0} onBlur={() => setOpen(false)}>
			<LogoIcon color={'false'} width={'100px'} onClick={() => navigate('/')} />
			<div className="FlexBoxAdmin" onClick={() => setOpen(!open)}>
				<div className="Box">
					<UserIcon />
				</div>
				<p>{localStorage.getItem('adminName')}</p>
			</div>
			<Wrapper.Column open={open ? 1 : 0}>
				<Wrapper.Element
					first="true"
					onClick={() => {
						// e.stopPropagation();
						// e.nativeEvent.stopImmediatePropagation();
						navigate('/admin/change-password');
						setOpen(false);
					}}
				>
					<KeyIcon />
					Change password
				</Wrapper.Element>
				<Wrapper.Element onClick={closeFunc}>
					<LogoutIcon />
					log out
				</Wrapper.Element>
			</Wrapper.Column>
		</Wrapper>
	);
};

export default Navbar;
