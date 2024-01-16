import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const Portfolio = ({ data }) => {
	const { t, i18n } = useTranslation();
	const { successfullProjects } = data;
	const navigate = useNavigate();
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px] ">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] "> {t('w147')}</p>
			</div>
			{successfullProjects?.length ? (
				<div className="w-full flex flex-wrap gap-[20px] mt-[20px]">
					{successfullProjects?.map((v, i) => (
						<div
							onClick={() => navigate(`/portfolio/${v?.id}`)}
							key={i}
							className="w-[300px] cursor-pointer group relative flex flex-col gap-[10px] p-[16px] rounded-[20px] border border-solid border-1 border-[#E3E3E7] "
						>
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
							<p className="text-[#18181B] text-[16px] font-[600] overflow-hidden break-all overflow-ellipsis">
								{v?.projectName}
							</p>
							<div className="w-full max-h-[100px] mb-[10px] overflow-hidden">
								<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 overflow-hidden break-all overflow-ellipsis">
									{v?.description}
								</p>
							</div>

							<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 overflow-hidden break-all overflow-ellipsis">
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
