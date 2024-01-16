import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Edit from '../../../assets/icons/edit.svg';
import Calendar from '../../../assets/icons/calendar.svg';
import Cms from '../../../assets/icons/sms.svg';
import Call from '../../../assets/icons/call.svg';
import Location from '../../../assets/icons/location.svg';
import House from '../../../assets/icons/round-home-work.svg';
import { AndImage, AndModal } from '../Talent/style';
import Profile from '../../../assets/icons/profile-circle.svg';
import { setHrData } from '../../../redux/actions/generalActions';
import request from '../../../services/api/hr-request';
import { connect } from 'react-redux';
import { uploadFileHr } from '../../../services/fileUpload';
import { Input } from 'antd';
import { Button, Toast } from '../../generics';
import Link from '../../../assets/icons/link-test.svg';
import { useTranslation } from 'react-i18next';

const HrProfile = ({ hrData, setHrData }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [loading, setLoading] = useState(false);
	const inputRef = useRef(null);
	const inputRef2 = useRef(null);
	const { t, i18n } = useTranslation();

	const UploadImage = () => {
		inputRef?.current?.click();
	};
	const UploadImage2 = () => {
		inputRef2?.current?.click();
	};
	const [openCalendar, setOpenCalendar] = useState(false);

	const [data, setData] = useState({
		email: '',
		birthDate: '',
		phone: '',
		regionName: '',
		firstName: '',
		id: '',
		profilePhotoIURL: '',
	});
	const [dataCompany, setDataCompany] = useState({
		companyName: '',
		companySite: '',
		companyDescription: '',
		companyEmail: '',
		companyPhone: '',
		companyLogURL: '',
		companyAddress: '',
		stir: '',
	});
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setData({
			email: '',
			birthDate: '',
			phone: '',
			regionName: '',
			firstName: '',
			id: '',
			profilePhotoIURL: '',
		});
		setIsModalOpen(false);
	};
	const handleOk2 = () => {
		setIsModalOpen2(false);
	};
	const handleCancel2 = () => {
		setDataCompany({
			companyName: '',
			companySite: '',
			companyDescription: '',
			companyEmail: '',
			companyPhone: '',
			companyLogURL: '',
			companyAddress: '',
			stir: '',
		});
		setIsModalOpen2(false);
	};
	const [error, setError] = useState({
		email: null,
		birthDate: null,
		phone: null,
		regionName: null,
		firstName: null,
	});
	const [errorCompany, setErrorCompany] = useState({
		companyName: null,
		companyEmail: null,
		companyPhone: null,
		companyLogURL: null,
		companyAddress: null,
	});

	const getMe = async () => {
		try {
			const res = await request.get('hr/profile/me');
			setHrData(res?.data?.data);
			setData(res?.data?.data);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch (error) {
			console.error('Error');
		}
	};
	const onChangeFunction = (e) => {
		const { value, name } = e.target;
		setData({
			...data,
			[name]: value,
		});
		setError({
			...error,
			[name]: null,
		});
	};
	const onChangeFunctionCompany = (e) => {
		const { value, name } = e.target;
		setDataCompany({
			...dataCompany,
			[name]: value,
		});
		setErrorCompany({
			...errorCompany,
			[name]: null,
		});
	};
	const handleError = (callback) => {
		if (!data.phone || !data.firstName || !data.regionName) {
			setError({
				...error,
				phone: !data.phone && t('w132'),
				firstName: !data.firstName && t('w150'),
				regionName: !data.regionName && t('w133'),
			});
		} else {
			return callback();
		}
	};
	const handleErrorCompany = (callback) => {
		if (
			!dataCompany.companyName ||
			!dataCompany.companyEmail ||
			!dataCompany.companyPhone ||
			!dataCompany.companySite ||
			!dataCompany.companyAddress
		) {
			setErrorCompany({
				...errorCompany,
				companyName: !dataCompany.companyName && t('w136'),
				companyEmail:
					!dataCompany.companyEmail && t('w136'),
				companyPhone: !dataCompany.companyPhone && t('w132'),
				companyAddress: !dataCompany.companyAddress && t('w139'),
				companySite: !dataCompany.companySite &&  t('w138'),
			});
		} else {
			return callback();
		}
	};
	const submitFunction = () => {
		handleError(editContact);
	};
	const submitFunctionCompany = () => {
		handleErrorCompany(editContactCompany);
	};
	const editContactCompany = async () => {
		try {
			const response = await request.put('hr/profile/edit', {
				data: {
					...hrData,
					...dataCompany,
				},
			});
			handleCancel2();
			Toast({
				type: 'success',
				message: `${t('w155')} !`,
			});
			getMe();
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const editContact = async () => {
		try {
			const response = await request.put('hr/profile/edit', {
				data: {
					...hrData,
					...data,
				},
			});
			handleCancel();
			Toast({
				type: 'success',
				message: `${t('w155')} !`,
			});
			getMe();
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const changeFile = async (e) => {
		setLoading(true);
		if (e?.target?.files[0]) {
			const response = await uploadFileHr(e?.target?.files[0]);

			setData({
				...data,
				profilePhotoIURL: response?.fileUrl,
			});
			setLoading(false);
		}
	};
	const changeFile2 = async (e) => {
		setLoading(true);
		if (e?.target?.files[0]) {
			const response = await uploadFileHr(e?.target?.files[0]);
			setDataCompany({
				...dataCompany,
				companyLogURL: response?.fileUrl,
			});
			setLoading(false);
		}
	};
	useEffect(() => {
		getMe();
	}, []);
	return (
		<div className="w-full  flex flex-col items-center bg-[#f4f4f5] ">
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title={t('w61')}
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className="w-full flex flex-col items-center p-[10px] gap-[16px]">
					{loading ? (
						'Yuklanmoqda..'
					) : data?.profilePhotoIURL ? (
						<AndImage
							width={84}
							src={data?.profilePhotoIURL}
							height={84}
							style={{
								cursor: 'pointer',
								borderRadius: '50%',
							}}
						/>
					) : (
						<AndImage
							width={84}
							src={Profile}
							height={84}
							style={{
								cursor: 'pointer',
								borderRadius: '50%',
								opacity: '0.5',
							}}
						/>
					)}
					<input
						type="file"
						accept=".png, .jpg, .jpeg"
						className="hidden"
						ref={inputRef}
						onChange={changeFile}
						id="fileId"
					/>
					<p
						className="text-[#2563EB] text-[16px] font-[600] hover:underline cursor-pointer"
						onClick={UploadImage}
					>
						{t('w62')}
					</p>
				</div>

				<div className="w-full flex gap-[20px] mb-[20px]">
					<div className="w-full flex flex-col ">
						<p className="text-[#71717A] text-[16px] font-[500]">{t('w63')}</p>
						<Input
							onChange={onChangeFunction}
							style={{ height: '52px', borderRadius: '12px' }}
							name="firstName"
							value={data?.firstName}
						/>
						{error.firstName && (
							<p className="text-[red] text-[14px] font-[600]">
								{error.firstName}
							</p>
						)}
					</div>
				</div>

				<div className="w-full flex gap-[20px] mb-[20px] ">
					<div className=" w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">{t('w64')}</p>
						<Input
							onChange={onChangeFunction}
							style={{ height: '52px', borderRadius: '12px' }}
							name="phone"
							value={data?.phone}
						/>
						{error.phone && (
							<p className="text-[red] text-[14px] font-[600]">{error.phone}</p>
						)}
					</div>

					<div className="w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">Email</p>
						<Input
							onChange={onChangeFunction}
							style={{ height: '52px', borderRadius: '12px' }}
							name="email"
							disabled
							value={data?.email}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">{t('w66')}</p>
					<Input
						onChange={onChangeFunction}
						style={{ height: '52px', borderRadius: '12px' }}
						name="regionName"
						value={data?.regionName}
					/>
					{error.regionName && (
						<p className="text-[red] text-[14px] font-[600]">
							{error.regionName}
						</p>
					)}
				</div>
				<div className="w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">{t('w67')}</p>
					<Input
						onChange={onChangeFunction}
						style={{ height: '52px', borderRadius: '12px' }}
						name="hrProfession"
						value={data?.hrProfession}
					/>
					{/* {error.regionName && (
						<p className="text-[red] text-[14px] font-[600]">
							{error.regionName}
						</p>
					)} */}
				</div>
				<div className="w-full flex justify-end gap-[16px]">
					<Button
						radius={'12px'}
						height={'44px'}
						width={'110px'}
						padding={'12px 32px'}
						bgcolor={'#fff'}
						margin={'16px 0 0 0'}
						onClick={() => setIsModalOpen(false)}
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
						margin={'16px 0 0 0'}
						onClick={submitFunction}
					>
						<p className="text-[#fff] text-[16px] font-[600]">{t('w69')}</p>
					</Button>
				</div>
			</AndModal>
			<AndModal
				open={isModalOpen2}
				onOk={handleOk2}
				onCancel={handleCancel2}
				centered
				maskClosable={false}
				title="Kompaniya ma’lumotlari"
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className="w-full flex flex-col items-center p-[10px] gap-[16px]">
					{loading ? (
						'Yuklanmoqda..'
					) : dataCompany?.companyLogURL ? (
						<AndImage
							width={84}
							src={dataCompany?.companyLogURL}
							height={84}
							style={{
								cursor: 'pointer',
								borderRadius: '50%',
							}}
						/>
					) : (
						<AndImage
							width={84}
							src={House}
							height={84}
							style={{
								cursor: 'pointer',
								borderRadius: '50%',
								opacity: '0.5',
							}}
						/>
					)}
					<input
						type="file"
						accept=".png, .jpg, .jpeg"
						className="hidden"
						ref={inputRef2}
						onChange={changeFile2}
						id="fileId"
					/>
					<p
						className="text-[#2563EB] text-[16px] font-[600] hover:underline cursor-pointer"
						onClick={UploadImage2}
					>
						{t('w62')}
					</p>
				</div>

				<div className="w-full flex gap-[20px] mb-[20px]">
					<div className="w-full flex flex-col ">
						<p className="text-[#71717A] text-[16px] font-[500]">
							{t('w72')}
						</p>
						<Input
							onChange={onChangeFunctionCompany}
							style={{ height: '52px', borderRadius: '12px' }}
							name="firstName"
							value={dataCompany?.companyName}
						/>
						{errorCompany.companyName && (
							<p className="text-[red] text-[14px] font-[600]">
								{errorCompany.companyName}
							</p>
						)}
					</div>
				</div>

				<div className="w-full flex gap-[20px] mb-[20px] ">
					<div className=" w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">{t('w64')}</p>
						<Input
							onChange={onChangeFunctionCompany}
							style={{ height: '52px', borderRadius: '12px' }}
							name="companyPhone"
							value={dataCompany?.companyPhone}
						/>
						{errorCompany.companyPhone && (
							<p className="text-[red] text-[14px] font-[600]">
								{errorCompany.companyPhone}
							</p>
						)}
					</div>

					<div className="w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">Email</p>
						<Input
							style={{ height: '52px', borderRadius: '12px' }}
							name="companyEmail"
							onChange={onChangeFunctionCompany}
							value={dataCompany?.companyEmail}
						/>
						{errorCompany.companyEmail && (
							<p className="text-[red] text-[14px] font-[600]">
								{errorCompany.companyEmail}
							</p>
						)}
					</div>
				</div>
				<div className="w-full flex gap-[20px] mb-[20px] ">
					<div className=" w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">Website</p>
						<Input
							onChange={onChangeFunctionCompany}
							style={{ height: '52px', borderRadius: '12px' }}
							name="companySite"
							value={dataCompany?.companySite}
						/>
						{errorCompany.companySite && (
							<p className="text-[red] text-[14px] font-[600]">
								{errorCompany.companySite}
							</p>
						)}
					</div>

					<div className="w-full flex flex-col gap-[5px]">
						<p className="text-[#71717A] text-[16px] font-[500]">{t('w76')}</p>
						<Input
							onChange={onChangeFunctionCompany}
							style={{ height: '52px', borderRadius: '12px' }}
							name="stir"
							value={dataCompany?.stir}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">{t('w66')}</p>
					<Input
						onChange={onChangeFunctionCompany}
						style={{ height: '52px', borderRadius: '12px' }}
						name="companyAddress"
						value={dataCompany?.companyAddress}
					/>
					{errorCompany.companyAddress && (
						<p className="text-[red] text-[14px] font-[600]">
							{errorCompany.companyAddress}
						</p>
					)}
				</div>
				<div className="w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">
						{t('w134')}
					</p>
					<Input
						onChange={onChangeFunctionCompany}
						style={{ height: '52px', borderRadius: '12px' }}
						name="companyDescription"
						value={dataCompany?.companyDescription}
					/>
				</div>
				<div className="w-full flex justify-end gap-[16px]">
					<Button
						radius={'12px'}
						height={'44px'}
						width={'110px'}
						padding={'12px 32px'}
						bgcolor={'#fff'}
						margin={'16px 0 0 0'}
						onClick={() => setIsModalOpen2(false)}
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
						margin={'16px 0 0 0'}
						onClick={submitFunctionCompany}
					>
						<p className="text-[#fff] text-[16px] font-[600]">{t('w69')}</p>
					</Button>
				</div>
			</AndModal>
			<Navbar />
			<div className="max-w-[1114px] flex flex-col gap-[30px] my-[50px] items-center mt-[120px]">
				{/* column 1 */}
				<div
					className="w-[1114px] min-h-[226px] bg-white flex gap-[22px] p-[20px] flex-col border border-solid border-1 border-[#E3E3E7] rounded-[16px]
				max-[1200px]:w-[95%]"
				>
					<div
						onClick={() => {
							setIsModalOpen(true);
							setData(hrData);
						}}
						className="flex justify-end gap-[10px] cursor-pointer"
					>
						<img src={Edit} alt="download" width={20} height={20} />
						<p className="text-[#18181B] text-[16px] font-[600] ">{t('w60')}</p>
					</div>
					<div className="w-full h-fit flex justify-between max-[450px]:flex-col max-[450px]:gap-[16px] max-[450px]:items-center">
						<div className="flex items-center gap-[10px] max-[700px]:flex-col">
							{hrData?.profilePhotoIURL ? (
								<AndImage
									width={64}
									src={hrData?.profilePhotoIURL}
									alt="profile photo"
									height={64}
									style={{
										cursor: 'pointer',
										borderRadius: '50%',
									}}
								/>
							) : (
								<AndImage
									width={64}
									src={Profile}
									alt="text"
									height={64}
									style={{
										cursor: 'pointer',
										borderRadius: '50%',
										opacity: '0.5',
									}}
								/>
							)}

							<div className="flex flex-col gap-[10px] ">
								<p className="text-[#18181B] text-[24px] font-[600] max-[700px]:text-center">
									{`${hrData?.firstName} `}
								</p>
								<p className="text-[#18181B] text-[14px] font-[500] max-[700px]:text-center">
									{hrData?.hrProfession && hrData?.hrProfession}
								</p>
							</div>
						</div>
					</div>
					{hrData?.birthDate && (
						<div className="flex gap-[10px]">
							<img src={Calendar} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[16px] font-[600] ">
								Birth date:
							</p>
							<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
								{hrData?.birthDate}
							</p>
						</div>
					)}
					{hrData?.email && (
						<div className="flex gap-[10px]">
							<img src={Cms} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[16px] font-[600] ">Email:</p>
							<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
								{hrData?.email}
							</p>
						</div>
					)}
					{hrData?.phone && (
						<div className="flex gap-[10px]">
							<img src={Call} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[16px] font-[600] ">Phone:</p>
							<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
								{hrData?.phone}
							</p>
						</div>
					)}
					{hrData?.regionName && (
						<div className="flex gap-[10px]">
							<img src={Location} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[16px] font-[600] ">
								Location:
							</p>
							<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
								{hrData?.regionName}
							</p>
						</div>
					)}
				</div>

				<div
					className="w-[1114px] min-h-[226px] bg-white 
				flex gap-[22px] p-[20px] flex-col border border-solid border-1 border-[#E3E3E7] rounded-[16px] max-[1200px]:w-[95%]"
				>
					<div
						onClick={() => {
							setIsModalOpen2(true);
							setDataCompany(hrData);
						}}
						className="flex justify-end gap-[10px] cursor-pointer"
					>
						<img src={Edit} alt="download" width={20} height={20} />
						<p className="text-[#18181B] text-[16px] font-[600] ">{t('w60')}</p>
					</div>

					<div className="w-full h-fit flex justify-between max-[600px]:flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						<div className="flex items-center gap-[10px] max-[700px]:flex-col">
							<div className="w-[64px] h-[64px] mr-[10px]">
								<AndImage
									width={64}
									src={hrData?.companyLogURL || House}
									height={64}
									style={{
										cursor: 'pointer',
										borderRadius: '50%',
										margin: '0 10px 0 0',
										objectFit: 'cover',
									}}
								/>
							</div>

							<div className="flex flex-col gap-[10px]">
								<p className="text-[#18181B] text-[24px] font-[600] break-all">
									{hrData?.companyName}
								</p>
							</div>
						</div>
					</div>

					<div className="flex gap-[20px] items-center  max-[600px]:flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						{hrData?.companySite && (
							<a
								href={`https://${hrData?.companySite}`}
								target="_blank"
								className="w-fit flex justify-center items-center bg-[#F4F4F5] rounded-[6px] gap-[10px] py-[5px] px-[12px] cursor-pointer"
							>
								<p className="text-[#18181B] text-[14px] font-[600] overflow-wrap-break-word">
									{hrData?.companySite}
								</p>

								<img src={Link} alt="download" width={18} height={18} />
							</a>
						)}
					</div>
					<div className="flex gap-[20px] items-center  max-[600px]:flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						{hrData?.companyDescription && (
							<p className="text-[#18181B] text-[16px] font-[500] opacity-60 break-all">
								{hrData?.companyDescription}
							</p>
						)}
					</div>
					<div className="flex gap-[20px] items-center mt-[20px] max-[600px]:flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						{hrData?.companyAddress && (
							<div className="flex gap-[10px]">
								<img src={Location} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">
									Location:
								</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60 break-all">
									{hrData?.companyAddress}
								</p>
							</div>
						)}
					</div>

					<div className="flex gap-[10px] flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						{hrData?.companyEmail && (
							<div className="flex gap-[10px]">
								<img src={Cms} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">Email:</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{hrData?.companyEmail}
								</p>
							</div>
						)}
					</div>
					<div className="flex gap-[10px] flex-col max-[600px]:gap-[20px] max-[600px]:items-center">
						{hrData?.companyPhone && (
							<div className="flex gap-[10px]">
								<img src={Call} alt="download" width={20} height={20} />
								<p className="text-[#18181B] text-[16px] font-[600] ">Phone:</p>
								<p className="text-[#18181B] text-[16px] font-[600] opacity-60">
									{hrData?.companyPhone}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	hrData: state.generalReducer.hrData,
});
const mapDispatchToProps = {
	setHrData,
};
export default connect(mapStateToProps, mapDispatchToProps)(HrProfile);
