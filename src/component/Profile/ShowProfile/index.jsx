import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Avatar from '../../../assets/icons/profile-circle.svg';
import Calendar from '../../../assets/icons/calendar.svg';
import Cms from '../../../assets/icons/sms.svg';
import Call from '../../../assets/icons/call.svg';
import Location from '../../../assets/icons/location.svg';
import { AndImage, AndModalDownload } from './style';
import PortfolioComponent from './portfolio';
import Award from './awards';
import Education from './education';
import Language from './language';
import Salary from './salaryComponent';
// import Skills from './skills';
import Experence from './experence';
import About from './about';
import download from '../../../assets/icons/Icon.svg';
import Left from '../../../assets/icons/arrow-left.svg';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../services/api/hr-request';
import { Loader } from '../../Loader/Loader';
import { Radio } from 'antd';
import { Button } from '../../generics';
import Uz from '../../../assets/icons/uzFlag.svg';
import En from '../../../assets/icons/enFlag.svg';
import Ru from '../../../assets/icons/ruFlag.svg';
import { DownloadResume } from '../../../services/downloadResume/index';
import { useTranslation } from 'react-i18next';





const TalentProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [openDownload, setOpenDownload] = useState(false);
	const showModalDownload = () => {
		setOpenDownload(true);
	};
	const [value, setValue] = useState('uz');

	const handleCancelDownload = () => {
		setOpenDownload(false);
	};
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});
	const getMe = async () => {
		setLoading(true);
		try {
			const res = await request.get(`hr/get/talent/${id}`);
			setData(res?.data?.data);
			setLoading(false);
		} catch (error) {
			console.error('Error');
			setLoading(false);
		}
	};
	const getFile = async () => {
		DownloadResume(value, data, handleCancelDownload);
	};
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		getMe();
	}, []);

	return (
		<div className="w-full  flex flex-col items-center bg-[#f4f4f5] ">
			<AndModalDownload
				open={openDownload}
				footer={null}
				onCancel={handleCancelDownload}
				centered={true}
				style={{ width: 'fit-content' }}
			>
				<div className="flex flex-col gap-[16px]">
					<div className="flex gap-[10px]">
						<p className="text-[#18181B] text-[14px] font-[600] ">
							{t('w141')}
						</p>
						<img
							src={download}
							alt="download"
							width={20}
							height={20}
							style={{ cursor: 'pointer' }}
						/>
					</div>

					<Radio.Group value={value}>
						<div
							className="max-w-[638px] flex gap-[16px] mb-[24px]
						 max-[1000px]:flex-col max-[1000px]:gap-[22px] max-[1000px]:items-center"
						>
							<div
								onClick={() => {
									setValue('uz');
								}}
								className={`w-[240px] flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px]  cursor-pointer 
					${value === 'uz' ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[1000px]:w-[80%] `}
							>
								<div className="flex gap-[15px] items-center">
									<img src={Uz} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500] text-center">
										{' '}
										O’zbekcha
									</p>
								</div>

								<Radio
									value={'uz'}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>

							<div
								onClick={() => {
									setValue('ru');
								}}
								className={`flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[240px]
					${value === 'ru' ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[1000px]:w-[80%]`}
							>
								<div className="flex gap-[15px] items-center">
									<img src={Ru} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500]">
										{' '}
										Русский
									</p>
								</div>

								<Radio
									value={'ru'}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>

							<div
								onClick={() => {
									setValue('en');
								}}
								className={`flex h-[44px] px-[16px] justify-between items-center gap-[5px] border border-solid
					border-[#D4D4D8] shadow-[0px 1px 2px 0px rgba(15, 15, 16, 0.05);] rounded-[12px] cursor-pointer w-[240px]
	${value === 'en' ? 'bg-[#F4F7FE] border-[blue] border-opacity-50' : ''}
					max-[1000px]:w-[80%]`}
							>
								<div className="flex gap-[15px] items-center">
									<img src={En} height={20} width={20} />
									<p className="text-[#18181B] text-[16px] font-[500]">
										{' '}
										English
									</p>
								</div>

								<Radio
									value={'en'}
									style={{ height: 'fit-content', width: 'fit-content' }}
								/>
							</div>
						</div>
					</Radio.Group>
					<div className="w-full flex justify-end gap-[10px]">
						<Button
							radius={'12px'}
							height={'44px'}
							width={'110px'}
							padding={'12px 32px'}
							bgcolor={'#fff'}
							onClick={handleCancelDownload}
						>
							<p className="text-[#17171B] text-[16px] font-[600]">
							{t('w68')}

							</p>
						</Button>
						<Button
							type="primary"
							radius={'12px'}
							height={'44px'}
							width={'110px'}
							padding={'12px 32px'}
							bgcolor={'#2563EB'}
							onClick={getFile}
						>
							<p className="text-[#fff] text-[16px] font-[600]">{t('w62')}</p>
						</Button>
					</div>
				</div>
			</AndModalDownload>
			<Navbar />
			{loading && <Loader />}
			<div className="max-w-[1120px] flex flex-col gap-[20px] mt-[160px] mb-[50px] max-[400px]:w-[95%] ">
				<div className="flex justify-between max-[470px]:flex-col max-[470px]:items-center max-[470px]:gap-[20px]">
					<div
						className="w-[123px] h-[44px] px-[20px] py-[12px] bg-white flex gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center cursor-pointer
						"
						onClick={() => navigate('/explore')}
					>
						<img src={Left} alt="download" width={20} height={20} />
						<p className="text-[#18181B] text-[14px] font-[600] ">{t('w131')}</p>
					</div>

					<div className="flex gap-[10px]">
						{/* <div
							className="flex items-center justify-center rounded-[12px] p-[10px]
						 bg-white  border border-solid border-1 border-[#E3E3E7] cursor-pointer
						"
						>
							<img src={Save} alt="download" width={24} height={24} />
						</div> */}
						<div
							onClick={showModalDownload}
							className="w-[263px] h-[44px] px-[20px] py-[12px] bg-white flex gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center cursor-pointer
						"
						>
							<p className="text-[#18181B] text-[14px] font-[600] ">
								{t('w141')}
							</p>
							<img src={download} alt="download" width={20} height={20} />
						</div>
					</div>
				</div>

				<div className="w-[972px] flex flex-col gap-[25px] max-[1000px]:w-full max-[1000px]:p-[20px] ">
					<div
						className="w-[972px] min-h-[286px] bg-white flex gap-[22px] p-[20px] flex-col border border-solid
					 border-1 border-[#E3E3E7] rounded-[16px] max-[1000px]:w-full "
					>
						<div className="w-full h-fit flex justify-between">
							<div className="flex items-center gap-[10px]">
								<AndImage
									width={64}
									src={data?.profilePhotoUrl || Avatar}
									height={64}
									style={{ cursor: 'pointer', borderRadius: '50%' }}
								/>

								<div className="flex flex-col gap-[10px]">
									<p className="text-[#18181B] text-[24px] font-[600] ">
										{data?.firstName}
									</p>
									<p className="text-[#18181B] text-[14px] font-[500] ">
										{data?.subDirectionCaption || 'UX/UI Designer'}
									</p>
								</div>
							</div>
						</div>
						{data?.birthDate && (
							<div className="flex gap-[10px]">
								<img src={Calendar} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">
									Birth date:
								</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{data?.birthDate}
								</p>
							</div>
						)}
						{data?.email && (
							<div className="flex gap-[10px]">
								<img src={Cms} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">Email:</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{data?.email}
								</p>
							</div>
						)}
						{data?.phoneNumber && (
							<div className="flex gap-[10px]">
								<img src={Call} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">Phone:</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{data?.phoneNumber}
								</p>
							</div>
						)}
						{data?.regionName && (
							<div className="flex gap-[10px]">
								<img src={Location} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">
									Location:
								</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{data?.regionName}
								</p>
							</div>
						)}
					</div>
					<About data={data} />
					<Language data={data} />
					<Education data={data} />
					<Experence data={data} />
					{/* <Skills data={data} /> */}
					<Award data={data} />
					<Salary data={data} />
					<PortfolioComponent data={data} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TalentProfile;
