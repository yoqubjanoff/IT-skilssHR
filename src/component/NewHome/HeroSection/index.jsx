import React from 'react';
import Navbar from '../../Navbar';
import { Wrapper, AntdButton } from './style';
import Astrount from '../../../assets/img/hr-1.png';
import Astrount1 from '../../../assets/img/hr-2.png';
import Astrount2 from '../../../assets/img/h-3.png';
import FrameTalent from '../../../assets/img/frame_talent.png';
import FrameHr from '../../../assets/img/frame_hr.png';
import { PlayIcon } from '../../generics/genericIcons';
import { useNavigate } from 'react-router-dom';
import { Popup } from '../../generics';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useTranslation } from 'react-i18next';
const HeroSection = () => {
	const { t,  } = useTranslation();

	const navigate = useNavigate();
	const showPopupEmail = () => {
		Popup({
			hideConfirmButton: true,
			html: `<iframe
					width="100%"
  height="315"
  src="https://www.youtube.com/embed/TNvDf0KwbKc?autoplay=1"
  className="you_tube_iframe"
  title="Vazir o'rinbosari Rustam Karimjonov TATUga tashrif buyurdi"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
				></iframe>`,
		});
	};
	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
	};
	return (
		<Wrapper>
			<Navbar />
			<Wrapper.Orange />
			<Wrapper.Blue />
			<Wrapper.Box>
				<Wrapper.Column>
					<p className="TitleHero z-10">
						 {t('w1')}
					</p>
					<p className="text-[#18181B] text-[18px] font-[400] leading-[30px] opacity-80 max-w-[710px] z-10">
						{t('w46')}
					</p>
					<div className="sections z-10">
						<AntdButton type="primary" onClick={() => navigate('/register')}>
							<p className="middle" style={{ color: '#fff' }}>
								{t('w3')}
							</p>
						</AntdButton>
						<AntdButton onClick={showPopupEmail}>
							<div
								style={{ display: 'flex', gap: '6px', alignItems: 'center' }}
							>
								<PlayIcon />
								<p className="middle"> {t('w4')}</p>
							</div>
						</AntdButton>
					</div>
					<div
						className="w-full flex my-[20px] gap-[60px] items-center max-[1000px]:justify-center
					 max-[745px]:flex-col max-[745px]:items-center "
					>
						<div className="flex flex-col gap-[10px] z-10">
							<div className="flex gap-[10px] items-center max-[450px]:justify-center">
								<img src={FrameHr} alt="FrameTalent" />
								<p className="text-[#18181B] text-[20px] font-[800]">1K+</p>
							</div>
							<p className="text-[#18181B] text-[14px] font-[500] opacity-80">
								{t('w5')}
							</p>
						</div>
						<div className="flex flex-col gap-[10px] z-10">
							<div className="flex gap-[10px] items-center max-[450px]:justify-center">
								<img src={FrameTalent} alt="FrameTalent" />
								<p className="text-[#18181B] text-[20px] font-[800]">2K+</p>
							</div>
							<p className="text-[#18181B] text-[14px] font-[500] opacity-80">
								{t('w6')}
							</p>
						</div>
					</div>
				</Wrapper.Column>
				<Wrapper.BoxImg>
					<Slider {...settings} autoplaySpeed={4000}>
						<div>
							<img src={Astrount} alt="hero-img" width={607} height={650} />
						</div>
						<div>
							<img src={Astrount1} alt="hero-img" width={607} height={650} />
						</div>
						<div>
							<img src={Astrount2} alt="hero-img" width={607} height={650} />
						</div>
					</Slider>
				</Wrapper.BoxImg>
			</Wrapper.Box>
		</Wrapper>
	);
};

export default HeroSection;
