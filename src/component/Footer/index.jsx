import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import Logo from '../../assets/img/logo.png';
import request from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const [social, setSocial] = useState([]);
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const getSocial = async () => {
		try {
			const res = await request.get('base/social-media');
			setSocial(res?.data?.data);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	useEffect(() => {
		getSocial();
	}, []);
	useEffect(() => {
		const shouldScroll = localStorage.getItem('scrollToBlogs');
		if (shouldScroll === 'true') {
			const element = document.getElementById('blogs');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
			// Reset the flag after scrolling
			localStorage.removeItem('scrollToBlogs');
		}
	}, [localStorage.getItem('scrollToBlogs')]);
	useEffect(() => {
		const shouldScroll = localStorage.getItem('scrollToCourse');
		if (shouldScroll === 'true') {
			const element = document.getElementById('course');
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
			// Reset the flag after scrolling
			localStorage.removeItem('scrollToCourse');
		}
	}, [localStorage.getItem('scrollToCourse')]);
	return (
		<Wrapper>
			<Wrapper.Wrap>
				<div className="w-fit flex gap-[200px] max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-[50px]">
					<Wrapper.Box style={{ flexDirection: 'column' }} gap="12px">
						<p className="Title">{t('w116')}</p>
						<a
							href="https://itskills.uz/"
							className="text-[#18181B] text-[16px] font-[400] cursor-pointer"
						>
							{t('w53')}
						</a>
					</Wrapper.Box>
					<Wrapper.Box style={{ flexDirection: 'column' }} gap="12px">
						<p className="Title">{t('w25')}</p>
						<p
							onClick={() => {
								localStorage.setItem('scrollToBlogs', 'true');
								navigate('/');
							}}
							className="Desc"
						>
							{t('w51')}
						</p>
						<p
							onClick={() => {
								localStorage.setItem('scrollToCourse', 'true');
								navigate('/');
							}}
							className="Desc"
						>
							{t('w52')}
						</p>
					</Wrapper.Box>
					<Wrapper.Box style={{ flexDirection: 'column' }} gap="12px">
						<p className="Title">{t('w47')}</p>
						<p onClick={() => navigate('/about')} className="Desc">
							{t('w29')}
						</p>
						<p onClick={() => navigate('/contact')} className="Desc">
							{t('w30')}
						</p>
						<p className="Desc">{t('w114')}</p>
					</Wrapper.Box>
				</div>
			</Wrapper.Wrap>
			<Wrapper.Line />

			<Wrapper.Wrapper>
				<Wrapper.Box style={{ flexDirection: 'column' }} gap={'10px'}>
					<Wrapper.Img src={Logo} />
					<p className="text-[#18181B] text-[14px] font-[400] ">
						All rights reserved ©{new Date().getFullYear()}
					</p>
				</Wrapper.Box>
				<Wrapper.Box gap="30px" ai="end" className="social">
					{social?.map((v, i) => (
						<a
							key={i}
							href={`https://${v?.link}`}
							target="_blank"
							className="text-[#18181B] text-[16px] font-[600] cursor-pointer"
						>
							{v?.name}
						</a>
					))}
				</Wrapper.Box>
			</Wrapper.Wrapper>
		</Wrapper>
	);
};

export default Footer;
