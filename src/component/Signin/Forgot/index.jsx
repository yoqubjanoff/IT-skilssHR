import React, { useState } from 'react';
import Img from '../../../assets/img/verify-fon.png';
import { Input } from 'antd';
import { Button } from '../../generics';
import Left from '../../../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import request from '../../../services/api/index';
import { Toast } from '../../generics';
import { connect } from 'react-redux';
import { sentEmailAction } from '../../../redux/actions/generalActions';
const Forgot = ({ sentEmailAction }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');

	const handleSendEmail = async () => {
		if (email) {
			try {
				const res = await request.get(
					`talent/auth/password-recovery?email=${email}`,
				);
				sentEmailAction({
					email,
					forgotPassword: true,
				});
				navigate('/reset-verification');
			} catch (error) {
				Toast({
					message: error?.response?.data?.resultMsg,
					type: 'error',
				});
			}
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
			<div className="w-[540px] h-[520px] p-[40px] flex flex-col justify-between items-center bg-white rounded-[32px]">
				<div className="flex flex-col gap-[20px]">
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
						Parolni unutdingizmi?
					</p>

					<p className="text-[#52525B] text-[16px] font-[500]">
						Xavotir olmang, biz sizga parolni tiklash bo'yicha ko'rsatmalar
						yuboramiz.
					</p>

					<div className="flex flex-col gap-[10px]">
						<p className="text-[#52525B] text-[16px] font-[600]">Email</p>
						<Input
							placeholder="Emailingizni kiriting"
							style={{ height: '52px', borderRadius: '12px' }}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							name="email"
						/>
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
					onClick={handleSendEmail}
				>
					<p className="text-[#fff] text-[16px] font-[600]">Yuborish</p>
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	sentEmailAction,
};

export default connect(null, mapDispatchToProps)(Forgot);
