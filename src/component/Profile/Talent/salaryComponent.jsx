import React, { useState, useEffect } from 'react';
import Add from '../../../assets/icons/add-circle.svg';
import { AndModal } from './style';
import { Button, Toast } from '../../generics';
import { Input } from 'antd';
import Edit from '../../../assets/icons/edit.svg';
import { connect } from 'react-redux';
import request from '../../../services/api';

const Salary = ({ data, getMeFunc }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [salary, setSalary] = useState(data?.minSalary);
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const editContact = async () => {
		if (salary) {
			try {
				const response = await request.put('talent/profile/edit', {
					data: {
						...data,
						minSalary: salary,
					},
				});
				setIsModalOpen(false);
				Toast({
					type: 'success',
					message: 'Maosh tasdiqlandi',
				});
				getMeFunc.getMe();
			} catch (error) {
				Toast({
					message: error?.response?.data?.resultMsg,
					type: 'error',
				});
			}
		}
	};
	useEffect(() => {
		setSalary(data?.minSalary);
	}, [data?.minSalary]);
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title="Kutilayotgan maosh"
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
					<Input
						placeholder="2 000 000 UZS"
						style={{ height: '52px', borderRadius: '12px' }}
						value={salary}
						type="number"
						onChange={(e) => setSalary(e.target.value)}
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
						onClick={() => setIsModalOpen(false)}
					>
						<p className="text-[#17171B] text-[16px] font-[600]">
							Bekor qilish
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
						<p className="text-[#fff] text-[16px] font-[600]">Saqlash</p>
					</Button>
				</div>
			</AndModal>

			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">
					{' '}
					Kutilayotgan maosh
				</p>
				{data?.minSalary ? (
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
			{data?.minSalary && (
				<p className="text-[#18181B] text-[16px] font-[600] mt-[20px]">
					{data?.minSalary} UZS
				</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	getMeFunc: state.generalReducer.getMe,
});
export default connect(mapStateToProps, null)(Salary);
