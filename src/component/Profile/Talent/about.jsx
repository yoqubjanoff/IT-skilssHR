import React, { useState } from 'react';
import Add from '../../../assets/icons/add-circle.svg';
import Edit from '../../../assets/icons/edit.svg';
import request from '../../../services/api';
import { Toast } from '../../generics';
import { AndModal } from './style';
import { Input } from 'antd';
import { Button } from '../../generics';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';





const About = ({ data, getMeFunc }) => {
	const { t, i18n } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [aboutMe, setAboutMe] = useState(data?.aboutMe || '');
	const { TextArea } = Input;
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const editContact = async () => {
		try {
			const response = await request.put('talent/profile/edit', {
				data: {
					...data,
					aboutMe,
				},
			});
			setIsModalOpen(false);
			Toast({
				type: 'success',
				message: 'Malumot qushildi',
			});
			getMeFunc.getMe();
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	useEffect(() => {
		setAboutMe(data?.aboutMe);
	}, [data?.aboutMe]);
	return (
		<div className="w-full min-h-[64px] flex flex-col gap-[10px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title={t('w140')}
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<TextArea
					rows={6}
					placeholder="Tekstni kiriting"
					style={{ borderRadius: '12px' }}
					onChange={(e) => setAboutMe(e.target.value)}
					value={aboutMe}
				/>
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
						onClick={editContact}
					>
						<p className="text-[#fff] text-[16px] font-[600]">{t('w69')}</p>
					</Button>
				</div>
			</AndModal>

			<div className="w-full flex justify-between items-top">
				<p className="text-[#18181B] text-[16px] font-[600] ">{t('w140')}</p>

				{data?.aboutMe ? (
					<img
						src={Edit}
						alt="download"
						width={22}
						height={22}
						style={{ cursor: 'pointer' }}
						onClick={() => setIsModalOpen(true)}
					/>
				) : (
					<img
						src={Add}
						alt="download"
						width={22}
						height={22}
						style={{ cursor: 'pointer' }}
						onClick={() => setIsModalOpen(true)}
					/>
				)}
			</div>
			{data?.aboutMe ? (
				<p className="text-[#18181B] text-[16px] font-[400] leading-[20px]">
					{data?.aboutMe}
				</p>
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => ({
	getMeFunc: state.generalReducer.getMe,
});
export default connect(mapStateToProps, null)(About);
