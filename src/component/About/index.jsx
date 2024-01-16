import React, { useState, useEffect } from 'react';
import Bg from '../../assets/img/footer.png';
import Image from '../../assets/img/about.png';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { AntCollapse } from './style';
import request from '../../services/api';
import { useTranslation } from 'react-i18next';

const About = () => {
	const [data, setData] = useState([]);
	const { t, i18n } = useTranslation();

	const getFaq = async () => {
		try {
			const res = await request.get(`base/FAQ?lan=${i18n.language || 'uz'}`);
			setData(res?.data?.data);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	useEffect(() => {
		getFaq();
	}, [i18n.language]);

	return (
		<div className="w-full flex flex-col items-center">
			<Navbar />
			<div
				className="w-full h-[370px] flex justify-center items-center "
				style={{
					background: `url(${Bg})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<p className="text-[#18181B] font-[Vollkorn] text-[66px] font-[600] max-[740px]:text-[36px]">
				{t('w149')}
				</p>
			</div>

			<div className="flex gap-[50px] my-[90px] max-[1470px]:flex-col max-[1470px]:text-center max-[1470px]:items-center">
				<div className="flex flex-col gap-[16px] w-[673px] min-h-[370px] max-[740px]:w-[90%] max-[740px]:text-center ">
					<p className="text-[#18181B] font-[Vollkorn] text-[36px] font-[600]">
						{t('w7')}?
					</p>
					<div className="flex gap-[16px] min-h-[370px]">
						<p className="text-[#18181B]  text-[18px] font-[400]">
							{t('w148')}
						</p>
					</div>
				</div>

				<div
					className="w-[673px] h-[370px] rounded-[24px] max-[740px]:w-[90%]"
					style={{
						background: `url(${Image})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
			</div>
			<div className="flex flex-col mb-[100px] w-full items-center">
				{data?.map((v, i) => (
					<AntCollapse
						items={[
							{
								key: i,
								label: (
									<p className="text-[#18181B]  text-[20px] font-[500] ">
										{v?.title}
									</p>
								),
								children: (
									<p className="text-[#18181B]  text-[16px] font-[500] ">
										{v?.content}
									</p>
								),
							},
						]}
						expandIconPosition="end"
					/>
				))}
			</div>

			<Footer />
		</div>
	);
};

export default About;
