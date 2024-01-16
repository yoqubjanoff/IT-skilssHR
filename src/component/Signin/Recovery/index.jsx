import React, { useState } from 'react';
import Img from '../../../assets/img/verify-fon.png';
import { Input } from 'antd';
import { Button } from '../../generics';
import Left from '../../../assets/icons/arrow-left.svg';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../services/api/index';
import { Toast } from '../../generics';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const Forgot = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { id } = useParams();

	const [error, setError] = useState({
		newPassword: false,
		newPasswordConfirmation: false,
	});
	const [state, setState] = useState({
		newPassword: '',
		newPasswordConfirmation: '',
	});
	const { newPassword, newPasswordConfirmation } = state;

	const handleChange = (e) => {
		const { value, name } = e.target;
		setError({
			...error,
			[name]: false,
		});
		setState({
			...state,
			[name]: value,
		});
	};

	const handleNextClick = async () => {
		try {
			const response = await request.post(`talent/auth/reset-password/${id}`, {
				data: {
					newPassword: newPasswordConfirmation,
					newPasswordConfirmation: newPasswordConfirmation,
				},
			});

			localStorage.setItem('token', response?.data?.data?.accessToken);
			localStorage.removeItem('token-hr');

			Toast({
				type: 'success',
				message: 'Password has been reset successfully!',
			});
			navigate('/sent-verification');
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};

	const handleSubmit = () => {
		handleError(handleNextClick);
	};
	const handleError = (callback) => {
		if (!newPassword || !newPasswordConfirmation) {
			setError({
				...error,
				newPassword: !newPassword && t('w152'),
				newPasswordConfirmation:
					!newPasswordConfirmation && t('w152'),
			});
		} else if (newPassword !== newPasswordConfirmation) {
			setError({
				...error,
				newPasswordConfirmation: 'Passwordlar tug`ri kelmayabdi !',
			});
		} else {
			return callback();
		}
	};
	return (
		<div
			className="w-full h-screen flex items-center justify-center"
			style={{
				background: `url(${Img})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className="w-[540px] h-[620px] p-[40px] flex flex-col justify-between items-center bg-white rounded-[32px]">
				<div className="w-full flex flex-col gap-[20px]">
					<div className="w-full flex justify-start">
						<img
							src={Left}
							width={28}
							height={28}
							style={{ cursor: 'pointer' }}
							onClick={() => navigate(-1)}
						/>
					</div>
					<p className="text-[#18181B] text-[28px] font-[800]">
						Parolni tiklash
					</p>

					<p className="text-[#52525B] text-[16px] font-[500]">
						Kamida 8 ta belgidan iborat bo’lishi kerak
					</p>

					<div className="flex flex-col gap-[10px]">
						<p className="text-[#52525B] text-[16px] font-[600]">Parol</p>
						<Input.Password
							placeholder={t('w89')}
							style={{
								height: '52px',
								borderRadius: '12px',
							}}
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
							onChange={handleChange}
							value={newPassword}
							name="newPassword"
						/>
						{error.newPassword && (
							<p className="text-[red] text-[14px] font-[600]">
								{error.newPassword}
							</p>
						)}
					</div>
					<div className="flex flex-col gap-[10px]">
						<p className="text-[#52525B] text-[16px] font-[600]">
						{t('w92')}
						</p>
						<Input.Password
							placeholder={t('w89')}
							style={{
								height: '52px',
								borderRadius: '12px',
							}}
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
							onChange={handleChange}
							value={newPasswordConfirmation}
							name="newPasswordConfirmation"
						/>
						{error.newPasswordConfirmation && (
							<p className="text-[red] text-[14px] font-[600]">
								{error.newPasswordConfirmation}
							</p>
						)}
					</div>
				</div>
				<Button
					type="primary"
					radius={'12px'}
					height={'52px'}
					width={'100%'}
					padding={'12px 32px'}
					bgcolor={'#2563EB'}
					margin={'16px 0 0 0'}
					htmlType="submit"
					onClick={handleSubmit}
				>
					<p className="text-[#fff] text-[16px] font-[600]">Parolni tiklash</p>
				</Button>
			</div>
		</div>
	);
};

export default Forgot;
