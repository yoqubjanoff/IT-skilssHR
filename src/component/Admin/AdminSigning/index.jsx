import React, { useState } from 'react';
import { Wrapper, Wrap } from './style';
import { LogoIcon } from '../../generics/genericIcons';
import { Input2, Button2, Popup } from '../../generics';
import request from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../Loader/Loader';
const AdminSignig = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({
		password: false,
		email: false,
	});
	const [data, setData] = useState({
		password: '',
		email: '',
	});
	const { password, email } = data;
	const onChangeData = (e) => {
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

	const nextFunction = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (password && email) {
			if (!emailRegex.test(email)) {
				setError({
					...error,
					email: 'Email is wrong !',
				});
			} else {
				!error?.email && !error?.password && handleSubmit();
			}
		} else {
			setError({
				...error,
				password: !password ? 'Password is required !' : false,
				email: !email ? 'Email is required !' : false,
			});
		}
	};
	const getMe = async () => {
		try {
			const res = await request.get('admin/accounts/me');
			console.log(res?.data?.data, 'res');
			setLoading(false);
			localStorage.setItem(
				'adminName',
				res?.data?.data?.firstName + ' ' + res?.data?.data?.lastName,
			);

			navigate('/admin');
		} catch (error) {
			setLoading(false);
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const handleSubmit = async () => {
		setLoading(true);
		try {
			const response = await request.post('admin/auth/sign-in', {
				data: {
					email,
					password,
				},
				transactionTime: '2023-08-01T17:05:24.9085585',
			});
			localStorage.setItem('tokenAdmin', response?.data?.data?.accessToken);
			getMe();
		} catch (error) {
			setLoading(false);
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	return (
		<Wrap>
			{loading && <Loader />}
			<Wrapper>
				<div className="BoxPadding">
					<Wrapper.Column>
						<LogoIcon
							color={'false'}
							width={'100px'}
							onClick={() => navigate('/')}
						/>
						<div className="Box">
							<p>Talent management admin panel</p>
						</div>
						<Wrapper.Flex>
							<Input2
								width={'305px'}
								header={'Enter your email'}
								color={'#000'}
								type={'email'}
								name={'email'}
								hc={'#000'}
								error={error?.email ? error?.email : undefined}
								value={email}
								focused={'true'}
								onChange={onChangeData}
							/>

							<Input2
								width={'305px'}
								header={'Enter your password'}
								color={'#000'}
								type={'password'}
								name={'password'}
								error={error?.password ? error?.password : undefined}
								hc={'#000'}
								value={password}
								focused={'true'}
								onChange={onChangeData}
							/>
						</Wrapper.Flex>
						<Button2 bg={'#0B3A48'} width={'111px'} onClick={nextFunction}>
							Sign in
						</Button2>
					</Wrapper.Column>
				</div>

				<Wrapper.ImgBox>
					<Wrapper.Img />
				</Wrapper.ImgBox>
			</Wrapper>
		</Wrap>
	);
};

export default AdminSignig;
