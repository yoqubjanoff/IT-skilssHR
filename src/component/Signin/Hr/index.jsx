import React, { useState } from 'react';
import Google from '../../../assets/icons/google.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import OneID from '../../../assets/icons/One_ID.svg';

import { Button } from '../../generics';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Checkbox } from 'antd';
import Img from '../../../assets/img/regImg.png';
import { useNavigate } from 'react-router-dom';
import request from '../../../services/api/hr-request';
import { Toast } from '../../generics';
const TalentRegister = () => {
	const navigate = useNavigate();

	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { email, password, name } = state;

	const [error, setError] = useState({
		name: false,
		email: false,
		password: false,
	});

	const handleError = (callback) => {
		if (!email || !password) {
			setError({
				...error,
				name: !name && 'Ism kiritilmadi',
				email: !email && 'Email kiritilmadi',
				password: !password && 'Password kiritilmadi',
			});
		} else if (password.length < 8) {
			setError({
				...error,
				password: 'Kamida 8 ta belgi bo’lishi kerak',
			});
		} else {
			return callback();
		}
	};

	const submitFunction = () => {
		handleError(loginFunction);
	};

	const loginFunction = async () => {
		try {
			const response = await request.post('hr/auth/sign-in', {
				data: {
					...state,
				},
			});
			localStorage.setItem('token-hr', response?.data?.data?.accessToken);
			localStorage.removeItem('token');
			Toast({
				message: 'Xush kelibsiz !',
				type: 'success',
			});
			navigate('/hr-profile');
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target?.value,
		});
		setError({
			...error,
			[e.target.name]: false,
		});
	};
	return (
		<div className="w-full h-screen flex max-[768px]:justify-center">
			<div className="w-[50%]  flex flex-col items-center justify-center max-[768px]:w-[100%] p-[10px]">
				<p className=" text-[#18181B] text-center text-[28px] font-[700] ">
					Xush kelibsiz ✨
				</p>

				<p className="leading-[35px] text-center">
					Xush kelibsiz! Iltimos ma’lumotlaringizni
				</p>
				<p className="mb-[32px]">kiriting</p>
				<div className="flex gap-[16px] mb-[24px] max-[400px]:flex-col items-center">
					<div
						className="flex h-[44px] px-[16px] justify-center items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px]  cursor-pointer w-[116px]
					max-[400px]:w-[270px]"
					>
						<img src={Google} height={20} width={20} />
						<p className="text-[#18181B] text-[16px] font-[500]"> Google</p>
					</div>

					<div
						className="flex h-[44px] px-[16px] justify-center items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[116px]
					max-[400px]:w-[270px]"
					>
												<img src={OneID} height={20} width={64} />

					</div>

					<div
						className="flex h-[44px] px-[16px] justify-center items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[116px]
					max-[400px]:w-[270px]"
					>
						<img src={Linkedin} height={20} width={20} />
						<p className="text-[#18181B] text-[16px] font-[500]"> Linkedin</p>
					</div>
				</div>
				<div className="w-[375px] flex items-center gap-[4px] mb-[24px] max-[400px]:w-[90%]">
					<div className="h-[1px] w-full bg-[#D4D4D8]"></div>
					<p className="text-[#18181B] text-[16px] font-[500]"> Yoki</p>
					<div className="h-[1px] w-full bg-[#D4D4D8]"></div>
				</div>

				<div className="w-[375px] flex flex-col gap-[6px] mb-[16px] max-[400px]:w-[90%]">
					<p className="text-[#18181B] text-[16px] font-[500]"> Email</p>

					<Input
						placeholder="Emailingizni kiriting"
						style={{ height: '52px', borderRadius: '12px' }}
						onChange={handleChange}
						value={email}
						name="email"
					/>
					{error.email && (
						<p className="text-[red] text-[14px] font-[600]">{error.email}</p>
					)}
				</div>
				<div className="w-[375px] flex flex-col gap-[8px] mb-[10px] max-[400px]:w-[90%]">
					<p className="text-[#18181B] text-[16px] font-[500]">Parol</p>

					<Input.Password
						placeholder="Parolingizni kiriting"
						style={{
							height: '52px',
							borderRadius: '12px',
						}}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
						onChange={handleChange}
						value={password}
						name="password"
					/>
					{error.password && (
						<p className="text-[red] text-[14px] font-[600]">
							{error.password}
						</p>
					)}
					<div className="flex justify-between">
						<div className="flex gap-[10px] items-center">
							<Checkbox />
							<p className="text-[#18181B] text-[14px] font-[600]">
								Eslab qoling
							</p>
						</div>
						<p
							onClick={() => navigate('/forgot-password-hr')}
							className="text-blue-500 text-[14px] font-[600]  cursor-pointer hover:underline"
						>
							Parolni unutdingizmi?
						</p>
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
						onClick={submitFunction}
					>
						<p className="text-[#fff] text-[16px] font-[600]">Kirish</p>
					</Button>
				</div>
				<div className="w-full flex justify-center gap-[10px] my-[15px]">
					<p className="text-gray-700 text-[14px] font-[600]">
						Akkountingiz yo’qmi?
					</p>
					<p
						onClick={() => navigate('/register')}
						className="text-blue-500 text-[14px] font-[600]  cursor-pointer hover:underline"
					>
						Ro’yxatdan o’tish
					</p>
				</div>
			</div>

			<div
				className="w-[50%] flex flex-col items-center justify-center max-[768px]:hidden"
				style={{
					background: `url(${Img})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></div>
		</div>
	);
};

export default TalentRegister;
