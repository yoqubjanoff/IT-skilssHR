import React, { useState } from 'react';
import { Wrapper } from './style';
import { Button2, Input2, Popup, Toast } from '../../../component/generics';
import { useNavigate } from 'react-router-dom';
import { EyeOffIcon, EyeIcon } from '../../../component/generics/genericIcons';
import request from '../../../services/api';
import Loading from '../../../component/Loading';

const AdminView = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [pass1, setPass1] = useState(true);
	const [pass2, setPass2] = useState(true);

	const [data, setData] = useState({
		oldPassword: '',
		newPassword: '',
	});
	const { oldPassword, newPassword } = data;

	const [error, setError] = useState({
		oldPassword: false,
		newPassword: false,
	});

	const onChange = (e) => {
		const { name, value } = e?.target;
		setError({
			...error,
			[name]: false,
		});
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = async () => {
		try {
			const response = await request.patch('admin/accounts/change-password', {
				data: { oldPassword, newPassword },
				transactionTime: '2023-08-01T17:05:24.9085585',
			});
			setLoading(false);
			Toast({
				type: 'success',
				message: 'Password updated',
			});
			navigate('/admin');
		} catch (error) {
			setLoading(false);
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const clickSubmit = async () => {
		setLoading(true);
		if (oldPassword && newPassword) {
			handleSubmit();
		} else if (!oldPassword || !newPassword) {
			setLoading(false);

			setError({
				...error,
				newPassword: newPassword ? false : 'New password is required !',
				oldPassword: oldPassword ? false : 'Old password is required !',
			});
		}
	};

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="FlexBox">
				<div className="ColumnBox">
					<p className="Header">Change password</p>
					<div className="TagBox">
						<div className="FlexBox"></div>

						<div className="FlexBox">
							<Button2
								bg={'#fff'}
								width={'120px'}
								secondary={'true'}
								height={'42px'}
								onClick={() => navigate(-1)}
							>
								Cancel
							</Button2>
							<Button2
								bg={'#0B3A48'}
								width={'120px'}
								height={'42px'}
								onClick={clickSubmit}
							>
								Save changes
							</Button2>
						</div>
					</div>
					<Wrapper.Flex>
						<Input2
							width="305px"
							color="#000"
							header={'Enter current password'}
							hc="#000"
							type={pass1 ? 'password' : undefined}
							prefix={
								!pass1 ? (
									<EyeIcon onClick={() => setPass1(!pass1)} />
								) : (
									<EyeOffIcon onClick={() => setPass1(!pass1)} />
								)
							}
							onChange={onChange}
							value={oldPassword}
							error={error?.oldPassword ? error?.oldPassword : undefined}
							name="oldPassword"
						/>
						<Input2
							width="305px"
							color="#000"
							header={'Enter new password'}
							hc="#000"
							type={pass2 ? 'password' : undefined}
							prefix={
								!pass2 ? (
									<EyeIcon onClick={() => setPass2(!pass2)} />
								) : (
									<EyeOffIcon onClick={() => setPass2(!pass2)} />
								)
							}
							onChange={onChange}
							value={newPassword}
							error={error?.newPassword ? error?.newPassword : undefined}
							name="newPassword"
						/>
					</Wrapper.Flex>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
