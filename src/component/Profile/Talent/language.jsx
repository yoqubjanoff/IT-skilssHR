import React, { useState, useEffect } from 'react';
import Add from '../../../assets/icons/add-circle.svg';
import { DeleteIcon } from '../../generics/genericIcons';
import { AndModal, AntSelect, AndModalDelete } from './style';
import { Button, Toast } from '../../generics';
import request from '../../../services/api';
import { connect } from 'react-redux';

const Language = ({ getMeFunc }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
	const [languages, setLanguages] = useState([]);
	const [profilLang, setProfilLang] = useState([]);
	const [id, setId] = useState(null);
	const [data, setData] = useState({
		languageId: null,
		level: '',
		caption: '',
		captionLevel: '',
	});
	const [error, setError] = useState({
		languageId: null,
		level: '',
	});
	const handleOk = () => {
		setIsModalOpen(false);
		setData({
			...data,
			languageId: null,
			level: '',
			caption: '',
			captionLevel: '',
		});
		setError({
			...error,
			languageId: null,
			level: null,
		});
	};
	const handleCancel = () => {
		setIsModalOpen(false);
		setData({
			...data,
			languageId: null,
			level: '',
			caption: '',
			captionLevel: '',
		});
		setError({
			...error,
			languageId: null,
			level: null,
		});
	};

	const handleCancelDelete = () => {
		setId(null);
		setIsModalOpenDelete(false);
	};
	const getlanguages = async () => {
		try {
			const res = await request.get('talent/languages/all');
			const newRes = res?.data?.data;
			setLanguages(newRes);
		} catch (error) {
			console.error('Error');
		}
	};
	const getProfilLang = async () => {
		try {
			const res = await request.get('talent/profile/lang-level/all');
			const newRes = res?.data?.data;
			setProfilLang(newRes);
		} catch (error) {
			console.error('Error');
		}
	};
	const options = languages.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
		};
	});

	const optionsDegre = [
		{
			id: 1,
			value: 'A1_BASIC',
			label: 'A1 Basic',
		},
		{
			id: 2,
			value: 'A2_ELEMENTARY',
			label: 'A2 Elementary',
		},
		{
			id: 3,
			value: 'B1_INTERMEDIATE',
			label: 'B1 Intermediate',
		},
		{
			id: 4,
			value: 'B2_UPPER_INTERMEDIATE',
			label: 'B2 Upper Intermediate',
		},
		{
			id: 5,
			value: 'C1_ADVANCED',
			label: 'C1 Advanced',
		},
		{
			id: 6,
			value: 'C2_PROFICIENT',
			label: 'C1 Proficient',
		},
		{
			id: 7,
			value: 'NATIVE',
			label: 'Native',
		},
	];

	const saveFunc = async () => {
		try {
			const response = await request.post('talent/profile/lang-level', {
				data,
			});
			handleCancel();
			Toast({
				type: 'success',
				message: 'Til qo`shildi !',
			});
			getProfilLang();
			getMeFunc.getMe();
		} catch (error) {
			Toast({
				title: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const deleteFunc = async () => {
		try {
			const response = await request.delete(`talent/profile/lang-level/${id}`);
			handleCancelDelete();
			getProfilLang();
			getMeFunc.getMe();
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
	const handleError = (callback) => {
		if (!data.languageId || !data.level) {
			setError({
				...error,
				languageId: !data.languageId && 'Til kiritilmadi',
				level: !data.level && 'Daraja kiritilmadi',
			});
		} else {
			return callback();
		}
	};
	const submitFunction = () => {
		handleError(saveFunc);
	};

	useEffect(() => {
		getProfilLang();
		getlanguages();
	}, []);

	return (
		<div className="w-full min-h-[64px] flex flex-col gap-[20px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title={t('w142')}
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">{t('w142')}</p>
					<AntSelect
						options={options}
						style={{ height: '52px' }}
						value={data?.caption}
						onSelect={(e, opt) => {
							setData({
								...data,
								languageId: opt?.id,
								caption: e,
							});
							setError({
								...error,
								languageId: null,
							});
						}}
					/>
					{error.languageId && (
						<p className="text-[red] text-[14px] font-[600]">
							{error.languageId}
						</p>
					)}
				</div>
				<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
					<p className="text-[#71717A] text-[16px] font-[500]">Daraja</p>
					<AntSelect
						options={optionsDegre}
						style={{ height: '52px' }}
						value={data?.captionLevel}
						onSelect={(e, opt) => {
							setData({
								...data,
								level: opt?.value,
								captionLevel: e,
							});
							setError({
								...error,
								level: null,
							});
						}}
					/>
					{error.level && (
						<p className="text-[red] text-[14px] font-[600]">{error.level}</p>
					)}
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
				<p className="text-[#18181B] text-[16px] font-[600]">{t('w142')}</p>

				<img
					src={Add}
					alt="download"
					width={22}
					height={22}
					style={{ cursor: 'pointer' }}
					onClick={() => setIsModalOpen(true)}
				/>
			</div>
			{profilLang?.length ? (
				<div className="w-full flex gap-[16px] flex-wrap ">
					{profilLang?.map((v, i) => (
						<div
							key={i}
							className="flex items-center bg-[#F4F4F5] justify-center px-[16px] py-[6px] rounded-[6px] relative group "
						>
							<p className="text-[#18181B] text-[14px] font-[600] ">
								{v?.langLevelCaption}
							</p>

							<DeleteIcon
								width={'36px'}
								height={'16px'}
								stroke="red"
								className="cursor-pointer absolute right-[5px] bg-[#F4F4F5]  rounded-[6px] hidden group-hover:block "
								onClick={() => {
									setId(v?.id);
									setIsModalOpenDelete(true);
								}}
							/>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => ({
	getMeFunc: state.generalReducer.getMe,
});
export default connect(mapStateToProps, null)(Language);
