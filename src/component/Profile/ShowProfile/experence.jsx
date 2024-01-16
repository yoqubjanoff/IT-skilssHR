import React from 'react';
import Work from '../../../assets/icons/round-home-work.svg';
import moment from 'moment';
import { useTranslation } from 'react-i18next';


const Experence = ({ data }) => {
	const { t, i18n } = useTranslation();
	const { workExperiences } = data;
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px] ">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">{t('w144')}</p>
			</div>
			{workExperiences?.map((v, i) => (
				<div
					key={i}
					className="flex py-[20px] gap-[10px] items-start group relative"
					style={{ borderTop: `${i !== 0 && '1px solid #E3E3E7'}` }}
				>
					<div className="min-w-[52px] h-[52px] rounded-[8px] bg-[#F4F4F5] flex items-center justify-center">
						<img src={Work} alt="download" width={30} height={30} />
					</div>
					<div className="flex flex-col  gap-[8px] items-start">
						<div className="flex gap-[10px]">
							<p className="text-[#18181B] text-[18px] font-[600] break-all">
								{v?.position}
							</p>
						</div>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-70 break-all">
							{`${v?.companyName} - ${v?.employmentTypeCaption}`}
						</p>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-70">
							{`${moment(v?.startDate).format('yyyy MMM')} - ${
								v?.endDate
									? moment(v?.endDate || null).format('yyyy MMM')
									: moment().format('yyyy MMM')
							}`}
						</p>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-70 break-all">
							{v?.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Experence;
