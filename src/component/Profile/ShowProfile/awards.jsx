import React from 'react';
import Link from '../../../assets/icons/link.svg';
import Sertifikat from '../../../assets/img/sertifikat.png';

const Award = ({ data }) => {
	const { awards } = data;
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">
					Mukofotlar/Sertifikatlar
				</p>
			</div>

			{awards?.map((v, i) => (
				<>
					<div
						key={i}
						className="flex flex-col   gap-[8px] items-start mt-[20px]"
					>
						<div className="flex gap-[10px]">
							<p className="text-[#18181B] text-[18px] font-[600] break-all">
								{v?.caption}
							</p>
						</div>

						{v?.link && (
							<div className="flex gap-[10px]">
								<img src={Link} alt="download" width={22} height={22} />
								<p className="text-[#18181B] text-[16px] font-[500] opacity-70 cursor-pointer break-all">
									{v?.link}
								</p>
							</div>
						)}
					</div>
					<div className="flex py-[20px] group gap-[10px] items-start relative">
						<div className="min-w-[72px] h-[52px] rounded-[8px] bg-[#F4F4F5] flex items-center justify-center">
							<img
								src={v?.proofUrl || Sertifikat}
								alt="download"
								width={72}
								height={52}
							/>
						</div>
						<div className="flex flex-col  gap-[8px] items-start">
							<p className="text-[#18181B] text-[16px] font-[500] opacity-70 break-all">
								{v?.description}
							</p>
						</div>
					</div>
					<div className="w-full h-[1px] bg-[#18181B] opacity-20 my-[16px]"></div>
				</>
			))}
		</div>
	);
};

export default Award;
