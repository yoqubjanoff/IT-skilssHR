import React from 'react';
import Work from '../../../assets/icons/round-home-work.svg';
import moment from 'moment';

const Education = ({ data }) => {
	const { educationUserTalents } = data;
	return (
		<div className="w-full min-h-[64px] flex flex-col bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px] ">
			<div className="w-full flex  justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">Ta’lim</p>
			</div>

			{educationUserTalents?.map((v, i) => (
				<div
					key={i}
					className="flex py-[20px] gap-[10px] items-start  border-1 border-red-500"
					style={{
						borderBottom: `${
							educationUserTalents?.length > 1 && '1px solid #E3E3E7'
						}`,
					}}
				>
					<div className="min-w-[52px] h-[52px] rounded-[8px] bg-[#F4F4F5] flex items-center justify-center">
						<img src={Work} alt="download" width={30} height={30} />
					</div>
					<div className="flex flex-col  gap-[8px] items-start">
						<div className="flex gap-[10px] items-center">
							<p className="text-[#18181B] text-[18px] font-[600] break-all">
								{v?.educationCenterName}
							</p>
							<p className="text-[#18181B] text-[16px] font-[500] opacity-70">
								{`${moment(v?.startedDate).format('yyyy MMM')} - ${moment(
									v?.endedDate,
								).format('yyyy MMM')}`}
							</p>
						</div>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-70 break-all">
							{v?.direction}
						</p>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-70 break-all">
							{v?.definition}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
