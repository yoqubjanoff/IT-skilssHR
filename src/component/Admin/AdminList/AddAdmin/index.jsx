import React, { useState } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	Input2,
	Select3,
	Toast,
	Popup,
} from '../../../../component/generics';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../../services/api';
import { useUserContex } from '../../../../context/useContext';

const AddAdmin = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useUserContex();
	const { id } = useParams();
	const [state, setState] = useState({
		firstName: selected?.firstName || '',
		email: selected?.email || '',
		lastName: selected?.lastName || '',
		password: selected?.password || '',
		accountRole: selected?.accountRole || '',
	});
	const [error, setError] = useState({
		firstName: null,
		email: null,
		lastName: null,
		password: null,
		accountRole: null,
	});

	const { firstName, email, lastName, password, accountRole } = state;
	const optionRole = [
		{
			id: 1,
			caption: 'OPERATOR',
		},
		{
			id: 2,
			caption: 'ADMIN',
		},
	];
	const getMe = async () => {
		try {
			const res = await request.get('admin/accounts/me');
			localStorage.setItem(
				'adminName',
				res?.data?.data?.firstName + ' ' + res?.data?.data?.lastName,
			);
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const saveUser = async () => {
		if (
			!state?.firstName ||
			!state?.email ||
			!state?.lastName ||
			!state?.password ||
			!state?.accountRole
		) {
			setError({
				...error,
				firstName: !state?.firstName && 'This field is required !',
				email: !state?.email && 'This field is required !',
				lastName: !state?.lastName && 'This field is required !',
				password: !state?.password && 'This field is required !',
				accountRole: !state?.accountRole && 'This field is required !',
			});
		} else {
			if (!id) {
				try {
					const res = await request.post('admin/accounts', {
						data: {
							firstName,
							email,
							lastName,
							password,
							accountRole,
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});

					Toast({
						type: 'success',
						message: 'User Added',
					});

					dispatch({
						type: 'setSelected',
						payload: {},
					});
					setState({
						...state,
						firstName: '',
						email: '',
						lastName: '',
						password: '',
						accountRole: '',
					});
					navigate('/admin/users');
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			} else {
				try {
					const res = await request.put(`admin/accounts/${id}`, {
						data: {
							id: id,
							firstName,
							email,
							lastName,
							password,
							accountRole,
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});

					Toast({
						type: 'success',
						message: 'User Edited',
					});
					setState({
						firstName: '',
						email: '',
						lastName: '',
						password: '',
						accountRole: '',
					});
					dispatch({
						type: 'setSelected',
						payload: {},
					});
					getMe();
					navigate('/admin/users');
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			}
		}
	};

	const onChange = (e) => {
		const { name, value } = e?.target;
		setState({
			...state,
			[name]: value,
		});
		setError({
			...error,
			[name]: null,
		});
	};

	return (
		<Wrapper>
			<div className="ColumnBox">
				<p className="Header">{!id ? 'Add admin' : 'Edit admin'}</p>
				<div className="TagBoxEnd">
					<Button2
						bg={'#fff'}
						width={'120px'}
						height={'42px'}
						secondary={'true'}
						color="#0B3A48"
						onClick={() => {
							navigate(-1);
							setState({
								...state,
								firstName: '',
								email: '',
								lastName: '',
								password: '',
								accountRole: '',
							});
							dispatch({
								type: 'setSelected',
								payload: {},
							});
						}}
					>
						Cancel
					</Button2>
					<Button2
						bg={'#0B3A48'}
						width={'120px'}
						height={'42px'}
						color="#fff"
						onClick={saveUser}
					>
						{id ? 'Edit user' : 'Add new user'}
					</Button2>
				</div>

				<Wrapper.Flex>
					<Input2
						width={'305px'}
						header={'First Name'}
						error={error?.firstName}
						color={'#000'}
						hc={'#000'}
						name={'firstName'}
						onChange={onChange}
						value={firstName}
					/>
					<Input2
						width={'305px'}
						header={'Last Name'}
						error={error?.lastName}
						color={'#000'}
						hc={'#000'}
						name={'lastName'}
						onChange={onChange}
						value={lastName}
					/>
				</Wrapper.Flex>
				<Wrapper.Flex>
					<Input2
						width={'305px'}
						placeholder={'Email address'}
						header={'Email address'}
						color={'#000'}
						hc={'#000'}
						error={error?.email}
						name={'email'}
						onChange={onChange}
						value={email}
					/>
					<Input2
						width={'305px'}
						placeholder={'Password'}
						header={'Password'}
						color={'#000'}
						hc={'#000'}
						name={'password'}
						error={error?.password}
						onChange={onChange}
						value={password}
					/>
				</Wrapper.Flex>
				<Wrapper.Flex>
					<Select3
						width={'305px'}
						header={'Role'}
						color={'#000'}
						hc={'#000'}
						title={'Select Role'}
						br={'1px solid #E1E1E1'}
						options={optionRole}
						value={accountRole}
						error={error?.accountRole}
						onChange={(e) => {
							setState({
								...state,
								accountRole: e?.caption,
							});
							setError({
								...error,
								accountRole: null,
							});
						}}
					/>
				</Wrapper.Flex>
			</div>
		</Wrapper>
	);
};

export default AddAdmin;
