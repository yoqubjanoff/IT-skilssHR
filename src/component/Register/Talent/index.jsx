import React, { useState } from 'react';
import Google from '../../../assets/icons/google.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import { Button } from '../../generics';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import Img from '../../../assets/img/regImg.png';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
import request from '../../../services/api/index';
import { Toast } from '../../generics';
import { connect } from 'react-redux';
import { sentEmailAction } from '../../../redux/actions/generalActions';
const TalentRegister = ({ sentEmailAction }) => {
	const navigate = useNavigate();
	const [state, setState] = useState({
		firstName: '',
		email: '',
		password: '',
	});
	const { email, password, firstName } = state;
	const [error, setError] = useState({
		firstName: false,
		email: false,
		password: false,
	});
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleError = (callback) => {
		if (!firstName || !email || !password) {
			setError({
				...error,
				firstName: !firstName && 'Ism kiritilmadi',
				email: !email && 'Email kiritilmadi',
				password: !password && 'Password kiritilmadi',
			});
		} else if (password.length < 8) {
			setError({
				...error,
				password: 'Kamida 8 ta belgi bo’lishi kerak',
			});
		} else if (!emailRegex.test(email)) {
			setError({
				...error,
				email: 'Email xato kiritildi',
			});
		} else {
			return callback();
		}
	};

	const submitFunction = () => {
		handleError(checkEmail);
	};
	const checkEmail = async () => {
		try {
			const response = await request.get(
				`talent/auth/check-email?email=${email}`,
			);
			if (response.data?.data) {
				setError({
					...error,
					email: 'Email already exists !',
				});
			} else {
				registerFunction();
			}
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'success',
			});
		}
	};
	const registerFunction = async () => {
		try {
			const response = await request.post('talent/auth/sign-up', {
				data: {
					...state,
				},
			});
			sentEmailAction({
				email,
				forgotPassword: false,
			});
			navigate('/reset-verification');
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
	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			axios
				.get(
					`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`,
				)
				.then((response) => {
					console.log(response?.data, 'response');
				})
				.catch((error) => {
					console.log(error, 'error');
				});
		},
		onError: (errorResponse) => console.log(errorResponse),
	});
	// const responseFacebook = (response) => {
	// 	console.log(response);
	// };
	// const componentClicked = (response) => {
	// 	console.log(response);
	// };
	return (
		<div className="w-full h-screen flex max-[768px]:justify-center">
			<div className="w-[50%]  flex flex-col items-center justify-center max-[768px]:w-[100%] p-[10px]">
				<p className=" text-[#18181B] text-center text-[28px] font-[700] ">
					Ro’yxatdan o’tish
				</p>
				{/* <FacebookLogin
					appId="342782235119231"
					autoLoad={true}
					fields="name,email,picture"
					onClick={componentClicked}
					callback={responseFacebook}
				/> */}
				<p className="leading-[35px] text-center">
					Quyidagi tezkor roʻyxatdan oʻtish{' '}
				</p>

				<p className="mb-[32px] text-center">opsiyalaridan foydalaning</p>
				<div className="flex gap-[16px] mb-[24px] max-[400px]:flex-col items-center">
					<div
						className="flex h-[44px] px-[16px] justify-center items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px]  cursor-pointer w-[116px]
					 max-[400px]:w-[270px]"
						onClick={() => login()}
					>
						<img src={Google} height={20} width={20} />
						<p className="text-[#18181B] text-[16px] font-[500] text-center">
							{' '}
							Google
						</p>
					</div>

					<div
						className="flex h-[44px] px-[16px] justify-center items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[116px]
					max-[400px]:w-[270px]"
					>
						<img src={Facebook} height={20} width={20} />
						<p className="text-[#18181B] text-[16px] font-[500]"> Facebook</p>
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
					<p className="text-[#18181B] text-[16px] font-[500]"> Ism</p>

					<Input
						placeholder="Ismingizni kiriting"
						style={{ height: '52px', borderRadius: '12px' }}
						onChange={handleChange}
						value={firstName}
						name="firstName"
					/>
					{error.firstName && (
						<p className="text-[red] text-[14px] font-[600]">
							{error.firstName}
						</p>
					)}
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
						<p className="text-[#fff] text-[16px] font-[600]">
							Ro’yxatdan o’tish
						</p>
					</Button>
				</div>
				<div className="w-full flex justify-center gap-[10px] my-[15px]">
					<p className="text-gray-700 text-[14px] font-[600]">
						Akkountingiz bormi
					</p>
					<p
						onClick={() => navigate('/signin-talent')}
						className="text-blue-500 text-[14px] font-[600]  cursor-pointer hover:underline"
					>
						Kirish
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

const mapDispatchToProps = {
	sentEmailAction,
};

export default connect(null, mapDispatchToProps)(TalentRegister);
