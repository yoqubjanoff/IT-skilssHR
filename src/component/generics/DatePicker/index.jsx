import React, { useState } from 'react';
import Calendar from '../../../assets/icons/calendar.svg';
import { AntDatePicker2 } from '../../Profile/Talent/style';
import { Button } from '../../generics';
import moment from 'moment';

const CustomDatePicker = ({ onChange, value, showAllDate }) => {
	const [openCalendar, setOpenCalendar] = useState(false);
	const onChangeFunction = (date, dateString) => {
		onChange(date, dateString);
	};
	const disabledDate = (current) => {
		return current && current > moment().startOf('day');
	};
	return (
		<div
			className="w-full h-[52px] flex  justify-between items-center gap-[10px] 
						p-[16px] border border-solid border-1 border-[#E3E3E7] rounded-[12px] relative cursor-pointer"
			onClick={() => !openCalendar && setOpenCalendar(true)}
		>
			<p className="text-[#71717A] text-[16px] font-[400] ">
				{value || 'dd-mm-yyyy'}
			</p>
			<AntDatePicker2
				open={openCalendar}
				onChange={onChangeFunction}
				disabledDate={!showAllDate && disabledDate}
				showToday={false}
				renderExtraFooter={() => (
					<div className="w-full flex gap-[10px] h-[50px] items-center justify-center">
						<Button
							radius={'12px'}
							height={'34px'}
							width={'fit-content'}
							padding={'12px 32px'}
							bgcolor={'#fff'}
							onClick={() => setOpenCalendar(false)}
						>
							<p className="text-[#17171B] text-[16px] font-[600]">Yopish</p>
						</Button>
					</div>
				)}
			/>
			<img
				src={Calendar}
				alt="download"
				width={20}
				height={20}
				style={{ cursor: 'pointer' }}
			/>
		</div>
	);
};

export default CustomDatePicker;
