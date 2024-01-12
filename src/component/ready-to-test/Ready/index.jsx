import React, { useEffect } from 'react';
import { Button } from '../../generics';
import Img from '../../../assets/img/ready.png';
import Sheets from '../../../assets/img/sheets of documents.png';
import Time from '../../../assets/img/time.png';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
const TalentRegister = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/register');
		}
	}, []);
	return (
		<div className="w-full h-screen flex max-[1200px]:justify-center max-[1200px]:py-[20px]">
			<div className="w-[50%]  flex flex-col justify-center px-[120px] max-[1200px]:w-[100%] max-[1200px]:items-center max-[1200px]:px-[20px]">
				<p className="w-[638px] text-[#18181B] font-[Vollkorn] text-[44px] font-[800] max-[1500px]:w-fit max-[1500px]:text-[32px]">
					Tabriklaymiz! Sizning profilingiz tayyor.
				</p>
				<p className="text-[#18181B] opacity-[0.7]   text-[20px] font-[400] mb-[60px] mt-[30px]">
					HR managerlarga ko’rinadigan profilga ega bo’lish uchun testdan
					o’ting.
				</p>
				<div className="w-full flex justify-start gap-[16px] items-center mb-[40px]">
					<img src={Sheets} height={52} width={52} />
					<p className="max-w-[688px] text-[#18181B]  text-[18px] font-[500]  max-[520px]:text-[14px]">
						Ushbu sayt kiberhujumlarga qarshi himoyasizligingizni tekshiradi va
						uning faoliyatiga zararli yoki kutilmagan kirishlarning ta'sirini
						tekshiradi.
					</p>
				</div>

				<div className="w-full flex justify-start gap-[16px] items-center mb-[40px]">
					<img src={Time} height={52} width={52} />
					<p className="max-w-[688px] text-[#18181B]  text-[18px] font-[500] max-[520px]:text-[14px]">
						Tayyor turing. Sizga 20 ta savolga javob berish uchun 25 daqiqa
						beriladi
					</p>
				</div>

				<div className="w-full flex justify-start gap-[16px] max-[520px]:flex-col items-center">
					<div></div>
					<Button
						radius={'12px'}
						height={'52px'}
						width={'232px'}
						padding={'12px 32px'}
						bgcolor={'#fff'}
						margin={'16px 0 0 0'}
						onClick={() => navigate('/talent-profile')}
					>
						<p className="text-[#17171B] text-[16px] font-[600]">
							Keyinroq javob beraman
						</p>
					</Button>
					<Button
						type="primary"
						radius={'12px'}
						height={'52px'}
						width={'232px'}
						padding={'12px 32px'}
						bgcolor={'#2563EB'}
						margin={'16px 0 0 0'}
						onClick={() => navigate('/ready-test-standart')}
					>
						<p className="text-[#fff] text-[16px] font-[600]">
							Testni hoziroq boshlash
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

export default TalentRegister;
