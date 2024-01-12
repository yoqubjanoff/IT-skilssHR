import React from 'react';
const About = ({ data }) => {
	return (
		<div
			className="w-full min-h-[64px] flex flex-col gap-[10px] bg-white p-[20px] border border-solid border-1 border-[#E3E3E7] 
		rounded-[16px] "
		>
			<div className="w-full flex justify-between items-top">
				<p className="text-[#18181B] text-[16px] font-[600] ">Men haqimda</p>
			</div>
			{data?.aboutMe ? (
				<p className="text-[#18181B] text-[16px] font-[400] leading-[20px] break-all">
					{data?.aboutMe}
				</p>
			) : null}
		</div>
	);
};

export default About;
