import React from 'react';
import { useTranslation } from 'react-i18next';


const Language = ({ data }) => {
	const { t, i18n } = useTranslation();
	const { userLangLevels } = data;
	return (
		<div className="w-full min-h-[64px] flex flex-col gap-[20px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">{t('w142')}</p>
			</div>
			<div className="w-full flex gap-[16px] flex-wrap ">
				{userLangLevels?.map((v, i) => (
					<div
						key={i}
						className="flex items-center bg-[#F4F4F5] justify-center px-[16px] py-[6px] rounded-[6px]"
					>
						<p className="text-[#18181B] text-[14px] font-[600] ">
							{v?.langLevelCaption}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Language;
