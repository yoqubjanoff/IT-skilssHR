import React, { useEffect, useState } from 'react';
import Add from '../../../assets/icons/add-circle.svg';
import Check from '../../../assets/icons/check-blue.svg';
import { AndModal, AntSelect, AndModalDelete } from './style';
import { Button, Toast } from '../../generics';
import request from '../../../services/api';
const Skills = () => {
	const [subDirection, setSubDirection] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
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

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		getDirection();
	}, []);
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<AndModal
				open={isModalOpen}
				onCancel={handleCancel}
				centered
				maskClosable={false}
				title="Qobiliyatlar"
				footer={null}
				className="custom-border-radius-modal"
				style={{ width: '680px' }}
			>
				<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
					{/* <p className="text-[#71717A] text-[16px] font-[500]">Qobilyatlar</p> */}

					<AntSelect
						mode="multiple"
						placeholder="Qobiliyatlarni qidiring"
						value={selectedItems}
						onChange={setSelectedItems}
						style={{
							width: '100%',
							height: '52px',
							borderRadius: '12px',
							marginTop: '30px',
						}}
						options={options}
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
						// onClick={submitFunction}
					>
						<p className="text-[#fff] text-[16px] font-[600]">Saqlash</p>
					</Button>
				</div>
			</AndModal>

			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">Qobiliyatlar</p>
				<img
					src={Add}
					alt="download"
					width={22}
					height={22}
					style={{ cursor: 'pointer' }}
					onClick={() => setIsModalOpen(true)}
				/>
			</div>
			<div className="w-full flex flex-wrap gap-[16px] items-center mt-[20px]">
				<div className="flex justify-center items-center bg-[#EFF6FF] rounded-[6px] gap-[5px] py-[5px] px-[12px] ">
					<img src={Check} alt="check" width={20} height={20} />
					<p className="text-[#2563EB] text-[14px] font-[500] ">Figma</p>
				</div>
				<div className="flex justify-center items-center bg-[#EFF6FF] rounded-[6px] gap-[5px] py-[5px] px-[12px] ">
					<img src={Check} alt="check" width={20} height={20} />
					<p className="text-[#2563EB] text-[14px] font-[500] ">Wireframes</p>
				</div>
				<div className="flex justify-center items-center bg-[#EFF6FF] rounded-[6px] gap-[5px] py-[5px] px-[12px] ">
					<img src={Check} alt="check" width={20} height={20} />
					<p className="text-[#2563EB] text-[14px] font-[500] ">Adobe XD</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
