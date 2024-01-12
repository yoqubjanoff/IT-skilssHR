import React from 'react';
import { Button } from '../../generics';
import Img from '../../../assets/img/failed.png';
import { useNavigate } from 'react-router-dom';
import { useTestContex } from '../../../context/useContext';

const SuccessTest = () => {
	const navigate = useNavigate();
	const [{ result }] = useTestContex();

	return (
		<div className="w-full h-screen flex max-[1200px]:justify-center max-[1200px]:py-[20px]">
			<div className="w-[50%]  flex flex-col justify-center px-[120px] max-[1200px]:w-[100%] max-[1200px]:items-center max-[1200px]:px-[20px]">
				<p className="w-[638px] flex text-[#18181B] font-[Vollkorn] text-[44px] font-[800] max-[1600px]:w-fit max-[1500px]:text-[32px]">
					Tabriklaymiz, siz {result?.totalQuestions} ta testdan{' '}
					{result?.correctAnswers} ta topdingiz 🙂
				</p>
				<p className="text-[#18181B] opacity-[0.7]   text-[20px] font-[400] mb-[60px] mt-[30px] max-[1500px]:w-fit">
					Siz verifikatsiya testidan muvaffaqiyatli o’tdingiz. Endi
					profilingizga borib davom etishingiz mumkin
				</p>

				<div className="w-full flex justify-start gap-[16px] max-[520px]:flex-col items-center max-[1200px]:justify-center">
					<Button
						type="primary"
						radius={'12px'}
						height={'52px'}
						width={'232px'}
						padding={'12px 32px'}
						bgcolor={'#2563EB'}
						margin={'16px 0 0 0'}
						onClick={() => navigate('/talent-profile')}
					>
						<p className="text-[#fff] text-[16px] font-[600]">
							Bosh sahifaga o`tish
						</p>
					</Button>
				</div>
			</div>

			<div
				className="w-[50%] flex flex-col items-center justify-center max-[1200px]:hidden"
				style={{
					background: `url(${Img})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></div>
		</div>
	);
};

export default SuccessTest;
