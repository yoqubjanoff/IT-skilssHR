import React, { useState, useEffect } from 'react';
import { Button } from '../../../generics';
import Img from '../../../../assets/img/ready.png';
import Time from '../../../../assets/img/time.png';
import { useNavigate } from 'react-router-dom';
import Uz from '../../../../assets/icons/uzFlag.svg';
import En from '../../../../assets/icons/enFlag.svg';
import Ru from '../../../../assets/icons/ruFlag.svg';
import request from '../../../../services/api';
import { Radio } from 'antd';
import { AntdSelect2 } from '../../../Navbar/style';
import { useGeneralContext } from '../../../../context/useContext';
import { AndModal } from './style';

const TalentRegister = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState(1);
	const [data, dispatch] = useGeneralContext();
	const [direction, setDirection] = useState([]);
	const [subDirection, setSubDirection] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [val, setVal] = useState('');
	const [val2, setVal2] = useState('');
	const [state, setState] = useState({});
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const getDirection = async () => {
		try {
			const res = await request.get('talent/directions/all');
			setDirection(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const options = direction.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
			subDirections: v?.subDirections,
		};
	});
	let options2 = subDirection.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
		};
	});

	const editContact = async () => {
		try {
			const response = await request.put('talent/profile/edit', {
				data: {
					id: state?.id,
					subDirectionId: val2,
				},
			});
			showModal();
		} catch (error) {
			console.log(error);
		}
	};
	const getMe = async () => {
		try {
			const res = await request.get('talent/profile/me');
			setState(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};

	useEffect(() => {
		options2 = subDirection.map((v) => {
			return {
				id: v?.id,
				value: v?.id,
				label: v?.caption,
			};
		});
	}, [subDirection]);
	useEffect(() => {
		getDirection();
		getMe();
	}, []);

	return (
		<div className="w-full h-screen flex  max-[1400px]:h-[100%] justify-center max-[1400px]:py-[100px]">
			<AndModal
				title={t('w142')}
				open={isModalOpen}
				footer={null}
				onCancel={handleCancel}
				centered={true}
				style={{ width: 'fit-content' }}
			>
				<div className="flex flex-col gap-[16px]">
					<p className="text-gray-700 text-[14px] font-[500] mb-[8px] max-[700px]:text-center">
						Testni boshlash uchun tilni tanlang
					</p>
					<Radio.Group value={value}>
						<div className="max-w-[638px] flex gap-[16px] mb-[24px] max-[700px]:flex-col max-[700px]:gap-[22px] max-[700px]:items-center">
							<div
								onClick={() => {
									setValue(1);
									dispatch({ type: 'setLanguage', payload: 'uz' });
									navigate('/test-standart');
								}}
								className={`w-[240px] flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px]  cursor-pointer 
					${value === 1 ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[700px]:w-[330px] `}
							>
								<div className="flex gap-[15px] items-center">
									<img src={Uz} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500] text-center">
										{' '}
										O’zbekcha
									</p>
								</div>

								<Radio
									value={1}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>

							<div
								onClick={() => {
									setValue(2);
									dispatch({ type: 'setLanguage', payload: 'ru' });
									navigate('/test-standart');
								}}
								className={`flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[240px]
					${value === 2 ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[700px]:w-[330px]`}
							>
								<div className="flex gap-[15px] items-center">
									<img src={Ru} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500]">
										{' '}
										Русский
									</p>
								</div>

								<Radio
									value={2}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>

							<div
								onClick={() => {
									setValue(3);
									dispatch({ type: 'setLanguage', payload: 'en' });
									navigate('/test-detailed');
								}}
								className={`flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[240px]
	${value === 3 ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[700px]:w-[330px]`}
							>
								<div className="flex gap-[15px] items-center">
									<img src={En} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500]">
										{' '}
										English
									</p>
								</div>

								<Radio
									value={3}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>
						</div>
					</Radio.Group>
				</div>
			</AndModal>
			<div
				className="w-[50%]  flex flex-col  justify-center px-[120px] max-[1400px]:w-fit max-[900px]:w-[100%] max-[700px]:items-center
			 max-[700px]:px-[10px]"
			>
				<p className="w-[638px] text-[#18181B] font-[Vollkorn]  text-[44px] font-[800] mb-[32px] max-[1400px]:w-[100%] max-[700px]:text-center">
					IKKINCHI BOSQICH TESTI
				</p>
				<p className="w-[638px] text-[#18181B]  mb-[8px] text-[24px] font-[600]  max-[1400px]:w-[100%] max-[700px]:text-center">
					Shartlar
				</p>
				<p className="text-gray-700 text-[14px] font-[500]  mb-[8px] max-[1400px]:w-[100%] max-[700px]:text-center">
					20 ta savolga 20 daqiqa vaqt ajratilgan bo'lib siz testni belgilangan
					vaqtda tugatishingiz kerak. Testning keyingi bosqichiga o‘tish uchun
					kamida 12 ta savolga to‘g‘ri javob berishingiz kerak bo'ladi.
				</p>

				<p className="w-[638px] text-[#18181B] mt-[20px]  text-[24px] font-[600] mb-[8px] max-[1400px]:w-[100%] max-[700px]:text-center">
					Soha
				</p>
				<p className="text-gray-700 text-[14px] font-[500] mb-[20px] max-[1400px]:w-[100%] max-[700px]:text-center">
					O’z sohangizni tanlang
				</p>

				<div
					className="flex gap-[18px] max-w-[638px] mb-[30px] max-[700px]:flex-col max-[700px]:gap-[22px] max-[700px]:items-center
				max-[700px]:w-[350px] "
				>
					<AntdSelect2
						value={val}
						placeholder="Direction"
						style={{
							width: '90%',
							height: '44px',
							borderRadius: '12px !important',
						}}
						options={options}
						onSelect={(e, opt) => {
							setSubDirection(opt?.subDirections);
							setVal(e);
						}}
					/>
					<AntdSelect2
						value={val2}
						placeholder="Sub-Direction"
						style={{
							width: '90%',
							height: '44px',
							borderRadius: '12px !important',
						}}
						onSelect={(e, opt) => {
							dispatch({ type: 'setDirection', payload: opt });
							setVal2(e);
						}}
						options={options2}
					/>
				</div>

				<div className="w-full flex justify-start gap-[16px] items-center mb-[40px]">
					<img src={Time} height={52} width={52} />
					<p className="max-w-[688px] text-[#18181B]  text-[18px] font-[500]">
						Tayyor turing. Sizga 20 ta savolga javob berish uchun 25 daqiqa
						beriladi
					</p>
				</div>

				<div
					className="flex gap-[18px] max-w-[638px] mb-[30px] max-[700px]:flex-col max-[700px]:gap-[22px] max-[700px]:items-center
				max-[700px]:w-[350px] "
				>
					<Button
						radius={'12px'}
						height={'52px'}
						width={'90%'}
						padding={'12px 32px'}
						bgcolor={'#fff'}
						margin={'16px 0 0 0'}
						onClick={() => navigate('/')}
					>
						<p className="text-[#17171B] text-[16px] font-[600]">
							Keyinroq javob beraman
						</p>
					</Button>
					<Button
						type="primary"
						radius={'12px'}
						height={'52px'}
						width={'90%'}
						padding={'12px 32px'}
						bgcolor={'#2563EB'}
						margin={'16px 0 0 0'}
						onClick={editContact}
						disabled={!data?.direction?.id}
					>
						<p className="text-[#fff] text-[16px] font-[600]">
							Testni hoziroq boshlash
						</p>
					</Button>
				</div>
			</div>

			<div
				className="w-[50%] flex flex-col items-center justify-center max-[1400px]:hidden"
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
