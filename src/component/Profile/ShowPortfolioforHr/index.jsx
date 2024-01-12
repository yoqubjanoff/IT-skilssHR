import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { AndImage2 } from '../ShowProfile/style';
import Left from '../../../assets/icons/arrow-left.svg';
import Link from '../../../assets/icons/link-test.svg';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../services/api/hr-request';
import { ScrollToTop } from '../../../services/ScrollToTop/ScrollToTop';
import { Loader } from '../../Loader/Loader';
const TalentProfile = () => {
	const navigate = useNavigate();
	let { id } = useParams();
	const [loading, setLoading] = useState(false);
	ScrollToTop();
	const [portfolio, setPortfolio] = useState({});

	const getPortfolio = async () => {
		setLoading(true);
		if (id) {
			try {
				const res = await request.get(
					`hr/get/talent/success-full-project/${id}`,
				);
				const newRes = res?.data?.data;
				setPortfolio(newRes);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.error('Error');
			}
		}
	};
	useEffect(() => {
		getPortfolio();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		return () => {};
	}, []);
	return (
		<div className="w-full  flex flex-col items-center bg-[#f4f4f5]">
			<Navbar />
			{loading ? (
				<Loader />
			) : (
				<div className="max-w-[1120px] flex flex-col gap-[20px] mt-[120px] mb-[60px] max-[1000px]:p-[20px] max-[550px]:w-full ">
					<div className="flex justify-between">
						<div
							className="w-[123px] h-[44px] px-[20px] py-[12px] bg-white flex gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center cursor-pointer
						"
							onClick={() => navigate(-1)}
						>
							<img src={Left} alt="download" width={20} height={20} />
							<p className="text-[#18181B] text-[14px] font-[600] ">Orqaga</p>
						</div>
					</div>

					<div className="w-[972px] flex flex-col gap-[25px] max-[1000px]:w-full ">
						<div
							className="w-[972px] min-h-[200px] bg-white flex gap-[22px] p-[20px] flex-col border border-solid border-1
					 border-[#E3E3E7] rounded-[16px] max-[1000px]:w-full max-[550px]:w-[100%]"
						>
							<p className="text-[#18181B] text-[24px] font-[600] break-all">
								{portfolio?.projectName}
							</p>

							<div className="flex gap-[10px] flex-wrap">
								{portfolio?.tags?.length
									? portfolio?.tags?.split(',')?.map((item, i) => (
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
									  ))
									: null}
							</div>
							<p className="text-[#18181B] text-[16px] font-[500]  opacity-70 break-all">
								{portfolio?.description}
							</p>
							<a
								target="_blank"
								href={`${
									portfolio?.projectUrl?.search('https://') < 0
										? `https://${portfolio?.projectUrl}`
										: `${portfolio?.projectUrl}`
								}`}
								className="w-fit flex justify-center items-center bg-[#F4F4F5] rounded-[6px] gap-[5px] py-[5px] px-[12px] cursor-pointer"
							>
								<p className="text-[#18181B] text-[14px] font-[600] break-all">
									{portfolio?.projectUrl}
								</p>

								<img src={Link} alt="download" width={18} height={18} />
							</a>
						</div>

						<div
							className="w-[972px]  p-[25px]  bg-white  gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center flex-wrap  max-[1000px]:w-full max-[550px]:w-[100%]
						"
						>
							<p className="text-[#18181B] text-[18px] font-[600] mb-[30px]">
								Rasmlar
							</p>
							<div className="flex gap-[20px] flex-wrap justify-center">
								{portfolio?.photoUrl && (
									<AndImage2
										width={440}
										src={portfolio?.photoUrl}
										height={358}
										style={{ cursor: 'pointer', borderRadius: '20px' }}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default TalentProfile;
