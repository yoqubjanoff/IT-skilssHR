import React from 'react';

const Salary = ({ data }) => {
	return (
		<div className="w-full min-h-[64px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] rounded-[16px]">
			<div className="w-full flex justify-between items-center">
				<p className="text-[#18181B] text-[16px] font-[600] ">
					{' '}
					Kutilayotgan maosh
				</p>
			</div>
			<p className="text-[#18181B] text-[16px] font-[600] mt-[20px]">
				{`${data?.minSalary || 0} UZS`}
			</p>
		</div>
	);
};

export default Salary;
