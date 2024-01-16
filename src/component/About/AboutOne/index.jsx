import React, { useEffect, useState } from 'react';
import Left from '../../../assets/icons/arrow-left.svg';
import AboutOneImg from '../../../assets/img/aboutone.png';
import AboutOneBig from '../../../assets/img/aboutBig.png';
import Eye from '../../../assets/icons/eye-white.svg';
import Eye2 from '../../../assets/icons/eye-outline.svg';
import Calendar2 from '../../../assets/icons/calendar-outline.svg';
import Calendar from '../../../assets/icons/calendar-white.svg';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import request from '../../../services/api';
import { Loader } from '../../Loader/Loader';
import { useTranslation } from 'react-i18next';



const AboutOne = () => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [slidesPerView, setSlidesPerView] = useState(3);
	const { id } = useParams();
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1720) {
				setSlidesPerView(3);
			} else if (window.innerWidth <= 1720 && window.innerWidth > 720) {
				setSlidesPerView(2);
			} else if (window.innerWidth <= 720) {
				setSlidesPerView(1);
			}
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const getBlogId = async () => {
		setLoading(true);
		try {
			const res = await request.get(`base/blogs/${id}`);
			setData(res?.data?.data);
			setLoading(false);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	const getBlog = async () => {
		try {
			const res = await request.get('base/blogs');
			setBlog(res?.data?.data?.filter((v) => v.isActive));
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		getBlog();
		getBlogId();
	}, [id]);

	return (
		<div className="w-full flex flex-col items-center">
			{loading && <Loader />}
			<Navbar />
			<div className="w-[1280px] flex justify-start mt-[130px] mb-[20px] max-[1300px]:w-[90%]">
				<div
					className="w-fit h-[44px] px-[20px] py-[12px] bg-white flex gap-[10px] border border-solid border-1 border-[#E3E3E7]
						rounded-[12px] items-center cursor-pointer
						"
					onClick={() => navigate('/')}
				>
					<img src={Left} alt="download" width={20} height={20} />
					<p className="text-[#18181B] text-[14px] font-[600] ">
						{t('w153')}
					</p>
				</div>
			</div>
			<div className="w-[1280px] h-[500px] relative max-[1300px]:w-[90%] max-[700px]:h-[300px] rounded-[20px] max-[400px]:h-[200px]">
				<img
					src={data?.blogPhotoUrl || AboutOneBig}
					alt="download"
					width={'100%'}
					height={'100%'}
					style={{ borderRadius: '20px', objectFit: 'cover' }}
				/>
				<div className="flex items-center gap-[8px] absolute bottom-[30px] left-[30px]">
					<img src={Calendar} alt="download" width={20} height={20} />

					<p className="text-[#fff]  mr-[40px] text-[16px] font-[400] leading-[30px] max-[400px]:leading-[20px] max-[400px]:text-[14px]">
						{moment(data?.createdAt)?.format('DD.MM.YYYY') === 'Invalid date'
							? '12.10.2022'
							: moment(data?.createdAt)?.format('DD.MM.YYYY')}
					</p>
					<img src={Eye} alt="download" width={20} height={20} />

					<p className="text-[#fff]  text-[16px] font-[400] leading-[30px] max-[400px]:leading-[20px] max-[400px]:text-[14px]">
						{data?.countView || '128'}
					</p>
				</div>

				<p className="text-[#fff] absolute bottom-[70px] left-[30px] text-[24px] font-[600] leading-[30px] max-[400px]:leading-[20px] max-[400px]:text-[14px]">
					{data?.title || 'Next achievement of Soft IT Group'}
				</p>
			</div>

			<div className="flex gap-[50px] my-[50px] max-[1400px]:flex-col max-[1400px]:text-center max-[1400px]:items-center">
				<div className="flex flex-col gap-[16px] w-[1280px] min-h-[370px] max-[1300px]:w-[90%]  ">
					<div className="flex gap-[16px] min-h-[370px]">
						<p className="max-w-[900px] text-[#18181B]   text-[16px] font-[400] leading-[30px] max-[400px]:leading-[20px] max-[400px]:text-[14px]">
							{data?.content || ''}
						</p>
					</div>
				</div>
			</div>

			<div className="w-full bg-[#F4F4F5] h-[344px] flex items-center justify-center">
				<Swiper
					spaceBetween={10}
					slidesPerView={slidesPerView}
					autoplay={{ delay: 2000 }}
					centeredSlides={true}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{blog?.map((v, i) => (
						<SwiperSlide
							onClick={() => navigate(`/blog/${v?.id}`)}
							style={{
								height: '300px',
								display: 'flex',
								alignItems: 'center',
								margin: '0 30px 0 10px',
								cursor: 'pointer',
							}}
							key={i}
						>
							<div
								className="w-[605px] bg-[#fff] h-[200px] 
						flex flex-col gap-[16px] pl-[200px] items-center p-[27px] max-[1300px]:pl-[120px]
						 max-[1300px]:w-[350px] max-[1300px]:h-[213px]  max-[450px]:w-[330px]  rounded-[16px] relative"
							>
								<div className="w-[100%] overflow-hidden  ">
									<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[20px] font-[500]">
										{v?.title || 'Next achievement of Soft IT Group'}
									</p>
								</div>
								<div className="w-[100%] h-[50px] overflow-hidden ">
									<p
										className="overflow-hidden whitespace-wrap overflow-ellipsis text-[#18181B] leading-[16px] text-[12px]
						 font-[400] opacity-70"
									>
										{v?.content ||
											'The standard chunk of Lorem Ipsum used since the 1500s isreproduced below for those interested.'}
									</p>
								</div>
								<div className="w-[100%] h-[1px] bg-[#18181B] opacity-20 "></div>
								<div className="w-[100%] flex gap-[8px] justify-start items-center">
									<img
										src={Calendar2}
										alt="download"
										width={20}
										height={20}
										style={{ opacity: '0.7' }}
									/>
									<p className="text-[#18181B] text-[14px] font-[400] opacity-70 mr-[40px]">
										{moment(v?.createdAt)?.format('DD.MM.YYYY') ===
										'Invalid date'
											? '12.10.2022'
											: moment(v?.createdAt)?.format('DD.MM.YYYY')}
									</p>
									<img
										src={Eye2}
										alt="download"
										width={20}
										height={20}
										style={{ opacity: '0.7' }}
									/>
									<p className="text-[#18181B] text-[14px] font-[400] opacity-70">
										{v?.countView || '128'}
									</p>
								</div>
								<div className="w-[200px] h-[200px] absolute top-[-16px] left-[-16px] max-[1300px]:w-[120px] max-[1300px]:h-[120px]">
									<img
										src={v?.blogPhotoUrl || AboutOneImg}
										alt="download"
										width={'100%'}
										height={'100%'}
										style={{ borderRadius: '20px', objectFit: 'cover' }}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<Footer />
		</div>
	);
};

export default AboutOne;
