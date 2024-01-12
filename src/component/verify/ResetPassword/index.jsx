import React, { useEffect } from 'react';
import Img from '../../../assets/img/verify-fon.png';
import { Button } from '../../generics';
import Left from '../../../assets/icons/x close.svg';
import LockImg from '../../../assets/img/pochta.png';
import { useNavigate } from 'react-router-dom';
import Gmail from '../../../assets/img/gmail.png';
import { connect } from 'react-redux';

const Forgot = ({ sentEmail }) => {
	const navigate = useNavigate();
	const { email, forgotPassword } = sentEmail;
	useEffect(() => {
		if (!email) navigate('/register');
	}, []);
	return (
		<div
			className="w-full h-screen flex items-center justify-center"
			style={{
				background: `url(${Img})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className="w-[540px] h-[620px] p-[40px] pt-[50px] flex flex-col justify-between items-center bg-white rounded-[32px]">
				<div className="flex flex-col w-full items-center gap-[20px]">
					<div className="w-full flex justify-end">
						<img
							src={Left}
							width={28}
							height={28}
							style={{ cursor: 'pointer' }}
							onClick={() => navigate('/signin')}
						/>
					</div>
					<div className="w-full flex justify-center">
						<img src={LockImg} width={120} height={120} />
					</div>
					<p className="text-[#18181B] text-[32px] font-[800] text-center">
						Emailingizni tekshiring
					</p>
					{forgotPassword ? (
						<p className="text-[#52525B] text-[16px] font-[500] text-center">
							Parolingizni tiklash bo’yicha ko’rsatmalarni
						</p>
					) : (
						<p className="text-[#52525B] text-[16px] font-[500] text-center">
							Profilingizni tasdiqlash uchun linkni
						</p>
					)}

					<div className="w-full flex justify-center">
						<p className="text-[#2563EB] text-[16px] font-[500] text-center">
							{email || ''}
						</p>
						<p className="text-[#52525B] text-[16px] font-[500] text-center">
							ga jo’natdik.
						</p>
					</div>
				</div>
				<a href={`mailto:shohruh@gmail.com`} target="_blank" className="w-full">
					<Button
						type="primary"
						radius={'12px'}
						height={'52px'}
						width={'100%'}
						padding={'12px 32px'}
						bgcolor={'#2563EB'}
						margin={'16px 0 0 0'}
						htmlType="submit"
					>
						<div className="flex gap-[10px]">
							<img src={Gmail} width={24} height={24} />
							<p className="text-[#fff] text-[16px] font-[600]">
								Gmailni ochish
							</p>
						</div>
					</Button>
				</a>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sentEmail: state.generalReducer.sentEmail,
});

export default connect(mapStateToProps, null)(Forgot);
