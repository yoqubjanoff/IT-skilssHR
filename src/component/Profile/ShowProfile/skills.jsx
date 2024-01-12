import React from 'react';
import Check from '../../../assets/icons/check-blue.svg';

const Skills = () => {
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px] ">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">Qobiliyatlar</p>
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
