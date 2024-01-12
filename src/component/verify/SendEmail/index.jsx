import React, { useEffect } from 'react';
import Img from '../../../assets/img/verify-fon.png';
import { Button } from '../../generics';
import CloseIcon from '../../../assets/icons/x close.svg';
import LockImg from '../../../assets/img/lock.png';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
	const navigate = useNavigate();
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
							src={CloseIcon}
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
						Parolni tiklash
					</p>

					<p className="text-[#52525B] text-[16px] font-[500] text-center">
						Parolingiz muvaffaqiyatli tiklandi.
					</p>
					<p className="text-[#52525B] text-[16px] font-[500] text-center">
						Profilingizga kirish uchun pastdagi tugmani
					</p>
					<p className="text-[#52525B] text-[16px] font-[500]">bosing.</p>
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
					onClick={() => navigate('/talent-profile')}
				>
					<p className="text-[#fff] text-[16px] font-[600]">Kirish</p>
				</Button>
			</div>
		</div>
	);
};

export default Forgot;
