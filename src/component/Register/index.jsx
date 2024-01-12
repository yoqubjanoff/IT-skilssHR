import React, { useState } from 'react';
import { Radio } from 'antd';
import { Button } from '../generics';
import Hr from '../../assets/img/hr1.png';
import Talent from '../../assets/img/talent1.png';
import { useNavigate } from 'react-router-dom';
const Register = () => {
	const [value, setValue] = useState(1);
	const navigate = useNavigate();
	return (
		<div className="h-screen flex justify-center items-center max-[450px]:items-start py-[100px] ">
			<div
				className="w-[673px] h-[391px] flex flex-col items-center border  border-solid
			 border-gray-600 border-opacity-40 p-[32px] rounded-[20px] gap-[40px]   max-[768px]:border-none max-[450px]:w-[360px] max-[450px]:text-center
			  max-[400px]:w-[100%]
			 "
			>
				<p className="font-[Vollkorn] text-[#18181B] text-[24px] font-[600]">
					Talant yoki HR bo’lib qo’shiling
				</p>
				<Radio.Group value={value}>
					<div className="w-full flex justify-between gap-[30px] max-[768px]:flex-col items-center">
						<div
							onClick={() => setValue(1)}
							className={` w-[290px] h-[126px] flex flex-col  p-[16px] gap-[15px] transition-all duration-300  cursor-pointer border   rounded-[12px] border-solid border-gray-600 border-opacity-10
							${value === 1 ? 'bg-[#F4F7FE] border-[#2563EB] border-opacity-100' : ''}
							`}
						>
							<div className="flex justify-between">
								<img
									src={Hr}
									alt="Hr"
									width={38}
									height={42}
									style={{ objectFit: 'cover' }}
								/>
								<Radio
									value={1}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>
							<p className="w-[236px] leading-[20px]  text-[#18181B] text-[18px] font-[600]">
								Men hodim qidirayotgan HR man
							</p>
						</div>
						<div
							onClick={() => setValue(2)}
							className={`w-[290px] h-[126px] p-[16px] flex flex-col gap-[15px] transition-all duration-300  cursor-pointer border   rounded-[12px] border-solid border-gray-600 border-opacity-10
							${value === 2 ? 'bg-[#F4F7FE] border-[#2563EB] border-opacity-100' : ''}
							`}
						>
							<div className="flex justify-between">
								<img src={Talent} alt="Hr" width={38} height={42} />

								<Radio
									value={2}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>
							<p className="w-[236px] leading-[20px] text-[#18181B] text-[18px] font-[600]">
								Men ish qidirayotgan mutaxasisman
							</p>
						</div>
					</div>
				</Radio.Group>
				<div>
					<div className="w-[360px] max-[400px]:w-[300px]">
						<Button
							type="primary"
							radius={'12px'}
							height={'52px'}
							width={'100%'}
							padding={'12px 32px'}
							bgcolor={'#2563EB'}
							onClick={() =>
								value === 1
									? navigate('/register-hr')
									: navigate('/register-talent')
							}
						>
							<p className="text-[#fff] text-[16px] font-[600]">
								{value === 1
									? 'HR sifatida qo’shilish'
									: 'Mutaxasis sifatida qo’shilish'}
							</p>
						</Button>
					</div>

					<div className="w-full flex justify-center gap-[10px] my-[15px]">
						<p className="text-gray-700 text-[14px] font-[500]">
							Akkountingiz bormi
						</p>
						<p
							className="text-blue-500 text-[14px] font-[500]  cursor-pointer hover:underline"
							onClick={() =>
								value === 1
									? navigate('/signin-hr')
									: navigate('/signin-talent')
							}
						>
							Kirish
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
