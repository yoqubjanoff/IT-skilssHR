import React, { useState, useEffect, useRef } from 'react';
import Add from '../../../assets/icons/add-circle.svg';
import { AndModal, AndModalDelete, AntSelect } from './style';
import { Button, Toast } from '../../generics';
import { Input } from 'antd';
import request from '../../../services/api';
import Example from '../../../assets/icons/example-mountain.svg';
import Link from '../../../assets/icons/link.svg';
import Upload from '../../../assets/icons/upload-award.svg';
import { uploadFileTalent } from '../../../services/fileUpload';
import { useNavigate } from 'react-router-dom';
import { DeleteIcon, EyeIconOutline } from '../../generics/genericIcons';

const Portfolio = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { TextArea } = Input;
	const inputRef = useRef(null);
	const navigate = useNavigate();
	const [portfolio, setPortfolio] = useState([]);
	const [subDirection, setSubDirection] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);

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
		try {
			const res = await request.get('talent/profile/successfull-projects/all');
			const newRes = res?.data?.data;
			window.scrollTo({ top: 0, behavior: 'smooth' });

			setPortfolio(newRes);
		} catch (error) {
			console.error('Error');
		}
	};
	const [id, setId] = useState(null);
	const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

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

	const saveFunc = async () => {
		try {
			const response = await request.post(
				'talent/profile/successfull-projects',
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
				message: 'Portfolio qo`shildi !',
			});
			getPortfolio();
		} catch (error) {
			Toast({
				title: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
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
				projectName: !data.projectName &&  t('w156'),
				projectUrl: !data.projectUrl && t('w157'),
				photoUrl: !data.photoUrl && t('w158'),
				description: !data.description && t('w159'),
			});
		} else {
			return callback();
		}
	};
	const submitFunction = () => {
		handleError(saveFunc);
	};
	const handleCancelDelete = () => {
		setId(null);
		setIsModalOpenDelete(false);
	};
	const deleteFunc = async () => {
		try {
			const response = await request.delete(
				`talent/profile/successfull-projects/${id}`,
			);
			handleCancelDelete();
			getPortfolio();
			Toast({
				type: 'success',
				message: 'O`chirildi',
			});
		} catch (error) {
			Toast({
				title: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
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
	useEffect(() => {
		getPortfolio();
		getDirection();
	}, []);
	return (
		<div
			className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]
		 max-[380px]:w-[300px]"
		>
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title="Portfolio"
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">{t('w160')}</p>
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
			<AndModalDelete
				open={isModalOpenDelete}
				onCancel={handleCancelDelete}
				centered
				maskClosable={false}
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '350px' }}
				closeIcon={null}
			>
				<p className="text-[#17171B] text-[24px] font-[600] text-center mb-[20px]">
				{t('w129')}
				</p>

				<div className="w-full flex justify-end gap-[16px] max-[500px]:flex-col max-[500px]:items-center">
					<Button
						radius={'12px'}
						height={'44px'}
						width={'195px'}
						padding={'12px 32px'}
						bgcolor={'#fff'}
						margin={'16px 0 0 0'}
						onClick={handleCancelDelete}
					>
						<p className="text-[#17171B] text-[16px] font-[600]">
														{t('w68')}

						</p>
					</Button>
					<Button
						type="primary"
						danger
						radius={'12px'}
						height={'44px'}
						width={'195px'}
						padding={'12px 32px'}
						bgcolor={'#DC2626'}
						margin={'16px 0 0 0'}
						onClick={deleteFunc}
					>
						<p className="text-[#fff] text-[16px] font-[600]">O`chirish</p>
					</Button>
				</div>
			</AndModalDelete>
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">{t('w147')}</p>
				<img
					src={Add}
					alt="download"
					width={22}
					height={22}
					style={{ cursor: 'pointer' }}
					onClick={() => setIsModalOpen(true)}
				/>
			</div>
			{portfolio?.length ? (
				<div className="w-full flex flex-wrap gap-[20px] mt-[20px]">
					{portfolio?.map((v, i) => (
						<div className="w-[300px] group relative flex flex-col gap-[10px] p-[16px] rounded-[20px] border border-solid border-1 border-[#E3E3E7] ">
							<div className="gap-[8px] absolute right-[30px] top-[25px] rounded-[6px] hidden group-hover:flex">
								<EyeIconOutline
									width={'22px'}
									height={'22px'}
									stroke="#2563EB"
									className="cursor-pointer"
									onClick={() => navigate(`/show-portfolio/${v?.id}`)}
								/>
								<DeleteIcon
									width={'22px'}
									height={'22px'}
									stroke="red"
									className="cursor-pointer "
									onClick={() => {
										setId(v?.id);
										setIsModalOpenDelete(true);
									}}
								/>
							</div>

							{v?.photoUrl && (
								<img
									src={v?.photoUrl}
									alt="download"
									style={{
										width: '100%',
										height: '250px',
										objectFit: 'cover',
										borderRadius: '20px',
									}}
								/>
							)}

							<div className="flex gap-[10px] flex-wrap">
								{v?.tags && (
									<div className="flex gap-[10px] flex-wrap items-center">
										{v?.tags?.split(',')?.map((item, i) => (
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
										))}
									</div>
								)}
							</div>
							<p className="text-[#18181B] text-[16px] font-[600] overflow-hidden whitespace-wrap overflow-ellipsis">
								{v?.projectName}
							</p>
							<div className="w-full max-h-[100px] mb-[10px] overflow-hidden">
								<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 overflow-hidden whitespace-wrap overflow-ellipsis">
									{v?.description}
								</p>
							</div>

							<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 overflow-hidden whitespace-wrap overflow-ellipsis">
								{v?.projectUrl}
							</p>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Portfolio;
