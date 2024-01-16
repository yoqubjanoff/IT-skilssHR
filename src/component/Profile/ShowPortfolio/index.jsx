import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { AndImage2 } from '../ShowProfile/style';
import Edit from '../../../assets/icons/edit.svg';
import Left from '../../../assets/icons/arrow-left.svg';
import Link from '../../../assets/icons/link-test.svg';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../services/api';
import { ScrollToTop } from '../../../services/ScrollToTop/ScrollToTop';
import { Loader } from '../../Loader/Loader';
import { Button, Toast } from '../../generics';
import { Input } from 'antd';
import { AndModal, AntSelect } from '../Talent/style';
import { uploadFileTalent } from '../../../services/fileUpload';
import Example from '../../../assets/icons/example-mountain.svg';
import Upload from '../../../assets/icons/upload-award.svg';
import { useTranslation } from 'react-i18next';

const TalentProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	let { id } = useParams();
	const inputRef = useRef(null);
	const { TextArea } = Input;
	ScrollToTop();
	const [portfolio, setPortfolio] = useState({});
	const [loading, setLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [subDirection, setSubDirection] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [data, setData] = useState({
		projectName: '',
		projectUrl: '',
		description: '',
		tags: '',
		photoUrl: '',
		photoDescription: '',
	});

	const [error, setError] = useState({
		projectName: null,
		projectUrl: null,
		description: null,
		tags: null,
		photoUrl: null,
		photoDescription: null,
	});

	const onChange = (e) => {
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
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
		setSelectedItems([]);
		setData({
			...data,
			projectName: '',
			projectUrl: '',
			description: '',
			tags: '',
			photoUrl: '',
			photoDescription: '',
		});
		setError({
			...error,
			projectName: null,
			projectUrl: null,
			description: null,
			tags: null,
			photoUrl: null,
			photoDescription: null,
		});
	};

	const handleError = (callback) => {
		if (
			!data.projectName ||
			!data.projectUrl ||
			!data.photoUrl ||
			!data.description
		) {
			setError({
				...error,
				projectName: !data.projectName && t('w156'),
				projectUrl: !data.projectUrl &&  t('w157'),
				photoUrl: !data.photoUrl && t('w158'),
				description: !data.description && t('w162'),
			});
		} else {
			return callback();
		}
	};
	const saveFunc = async () => {
		try {
			const response = await request.put(
				`talent/profile/successfull-projects`,
				{
					data: {
						...data,
						tags: selectedItems.join(','),
					},
				},
			);
			handleCancel();
			Toast({
				type: 'success',
				message:`${t('w155')} !`,
			});
			getPortfolio();
		} catch (error) {
			Toast({
				title: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const submitFunction = () => {
		handleError(saveFunc);
	};

	const UploadImage = () => {
		inputRef?.current?.click();
	};
	const changeFile = async (e) => {
		if (e?.target?.files[0]) {
			const response = await uploadFileTalent(e?.target?.files[0]);
			setError({
				...error,
				photoUrl: null,
			});
			setData({
				...data,
				photoUrl: response?.fileUrl,
				photoDescription: response?.fileName,
			});
		}
	};

	const options = subDirection?.map((v) => {
		return {
			id: v?.id,
			value: v?.caption,
			label: v?.caption,
		};
	});
	const getDirection = async () => {
		try {
			const res = await request.get('talent/sub-directions/all');
			setSubDirection(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getPortfolio = async () => {
		setLoading(true);
		if (id) {
			try {
				const res = await request.get(
					`talent/profile/successfull-projects/${id}`,
				);
				const newRes = res?.data?.data;
				setPortfolio(newRes);
				setData(newRes);
				setSelectedItems(newRes?.tags?.split(','));
				setLoading(false);
			} catch (error) {
				setLoading(false);

				console.error('Error');
			}
		}
	};
	useEffect(() => {
		getPortfolio();
		getDirection();
		return () => {};
	}, []);
	return (
		<div className="w-full  flex flex-col items-center bg-[#f4f4f5]">
			<Navbar />
			{loading ? (
				<Loader />
			) : (
				<div className="max-w-[1120px] flex flex-col gap-[20px] mt-[120px] mb-[60px] max-[1000px]:p-[20px] max-[550px]:w-full ">
					<AndModal
						open={isModalOpen}
						onOk={handleOk}
						onCancel={handleCancel}
						centered
						maskClosable={false}
						title={t('w147')}
						footer={null}
						className="custom-border-radius-modal"
						style={{ width: '680px' }}
					>
						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#71717A] text-[16px] font-[500]">
							{t('w160')}
							</p>
							<Input
								placeholder={t('w161')}
								style={{ height: '52px', borderRadius: '12px' }}
								name="projectName"
								value={data?.projectName}
								onChange={onChange}
							/>
							{error.projectName && (
								<p className="text-[red] text-[14px] font-[600]">
									{error.projectName}
								</p>
							)}
						</div>

						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#71717A] text-[16px] font-[500]">{t('w162')}</p>
							<TextArea
								rows={6}
								placeholder="Tekstni kiriting"
								style={{ borderRadius: '12px' }}
								name="description"
								value={data?.description}
								onChange={onChange}
							/>
							{error.description && (
								<p className="text-[red] text-[14px] font-[600]">
									{error.description}
								</p>
							)}
						</div>
						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#71717A] text-[16px] font-[500]">{t('w163')}</p>
							<AntSelect
								mode="multiple"
								placeholder="Teglarni kiriting"
								value={selectedItems}
								onChange={setSelectedItems}
								style={{
									width: '100%',
									height: '52px',
									borderRadius: '12px',
								}}
								options={options}
							/>
						</div>

						<div className=" w-full flex items-center gap-[20px]">
							<div className=" w-full flex flex-col  mb-[24px] gap-[5px]">
								<p className="text-[#71717A] text-[16px] font-[500]">
									Rasm (Ixtiyoriy)
								</p>
								<div className=" w-full flex items-center gap-[20px]">
									<Input
										placeholder="Rasm nomi"
										style={{ height: '52px', borderRadius: '12px' }}
										placeholderColor={'#71717A'}
										prefix={
											<img
												src={Example}
												alt="download"
												width={20}
												height={20}
												style={{ margin: '0 10px 0 0' }}
											/>
										}
										value={data?.photoDescription}
										disabled
									/>
									<div className="w-fit flex flex-col gap-[5px]">
										<div
											onClick={UploadImage}
											className="w-fit h-[52px] flex  justify-between items-center gap-[10px] 
						 px-[32px] py-[12px] border border-solid border-1 border-[#E3E3E7] rounded-[12px] cursor-pointer"
										>
											<input
												type="file"
												accept=".png, .jpg, .jpeg"
												className="hidden"
												ref={inputRef}
												onChange={changeFile}
												// value={file}
												id="fileId"
											/>
											<img src={Upload} alt="download" width={24} height={24} />
											<p className="text-[#17171B] text-[16px] font-[400] ">
												{t('w62')}
											</p>
										</div>
									</div>
								</div>
								{error.photoUrl && (
									<p className="text-[red] text-[14px] font-[600]">
										{error.photoUrl}
									</p>
								)}
							</div>
						</div>

						<div className=" w-full flex  gap-[20px]">
							<div className=" w-full flex flex-col  mb-[24px] gap-[5px]">
								<p className="text-[#71717A] text-[16px] font-[500]">
									Linki (Ixtiyoriy)
								</p>

								<Input
									placeholder="https://"
									style={{ height: '52px', borderRadius: '12px' }}
									name="projectUrl"
									placeholderColor={'#71717A'}
									prefix={
										<img
											src={Link}
											alt="download"
											width={20}
											height={20}
											style={{ margin: '0 10px 0 0' }}
										/>
									}
									value={data?.projectUrl}
									onChange={onChange}
								/>
								{error.projectUrl && (
									<p className="text-[red] text-[14px] font-[600]">
										{error.projectUrl}
									</p>
								)}
							</div>
						</div>

						<div className="w-full flex justify-end gap-[16px]">
							<Button
								radius={'12px'}
								height={'44px'}
								width={'110px'}
								padding={'12px 32px'}
								bgcolor={'#fff'}
								margin={'16px 0 0 0'}
								onClick={handleCancel}
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
					<div className="flex justify-between">
						<div
							className="w-[123px] h-[44px] px-[20px] py-[12px] bg-white flex gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center cursor-pointer
						"
							onClick={() => navigate('/talent-profile')}
						>
							<img src={Left} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[14px] font-[600] ">
								{t('w131')}
							</p>
						</div>

						<div className="flex gap-[10px]">
							<div
								onClick={() => {
									setIsModalOpen(true);
									setData(portfolio);
									setSelectedItems(portfolio?.tags?.split(','));
								}}
								className="flex items-center justify-center rounded-[12px] p-[10px]
						 bg-white  border border-solid border-1 border-[#E3E3E7] cursor-pointer
						"
							>
								<img src={Edit} alt="download" width={24} height={24} />
							</div>
						</div>
					</div>

					<div className="w-[972px] flex flex-col gap-[25px] max-[1000px]:w-full ">
						<div
							className="w-[972px] min-h-[200px] bg-white flex gap-[22px] p-[20px] flex-col border border-solid border-1
					 border-[#E3E3E7] rounded-[16px] max-[1000px]:w-full max-[550px]:w-[100%]"
						>
							<p className="text-[#18181B] text-[24px] font-[600] overflow-wrap-break-word">
								{portfolio?.projectName}
							</p>

							<div className="flex gap-[10px] flex-wrap">
								{portfolio?.tags?.length
									? portfolio?.tags?.split(',')?.map((item, i) => (
											<div
												className={`flex justify-center items-center 
										rounded-[6px] gap-[5px] py-[5px] px-[12px] ${
											i % 2 === 0 ? 'bg-[#F0FDF3]' : 'bg-[#EFF6FF]'
										}`}
											>
												<div
													className={`w-[8px] h-[8px] rounded-[50%] ${
														i % 2 === 0 ? 'bg-[#16A34A]' : 'bg-[#2563EB]'
													} `}
												></div>
												<p
													className={`text-[14px] font-[500]  ${
														i % 2 === 0 ? 'text-[#16A34A]' : 'text-[#2563EB]'
													}`}
												>
													{item}
												</p>
											</div>
									  ))
									: null}
							</div>
							<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 overflow-wrap-break-word">
								{portfolio?.description}
							</p>
							<a
								target="_blank"
								href={`https://${portfolio?.projectUrl}`}
								className="w-fit flex justify-center items-center bg-[#F4F4F5] rounded-[6px] gap-[5px] py-[5px] px-[12px] cursor-pointer"
							>
								<p className="text-[#18181B] text-[14px] font-[600] overflow-wrap-break-word">
									{portfolio?.projectUrl}
								</p>

								<img src={Link} alt="download" width={18} height={18} />
							</a>
						</div>

						<div
							className="w-[972px]  p-[25px]  bg-white  gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center flex-wrap  max-[1000px]:w-full max-[550px]:w-[100%]
						"
						>
							<p className="text-[#18181B] text-[18px] font-[600] mb-[30px]">
							{t('w164')}
							</p>
							<div className="flex gap-[20px] flex-wrap justify-center">
								{portfolio?.photoUrl && (
									<AndImage2
										width={440}
										src={portfolio?.photoUrl}
										height={358}
										style={{ cursor: 'pointer', borderRadius: '20px' }}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default TalentProfile;
