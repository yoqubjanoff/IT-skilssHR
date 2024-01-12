import React, { useEffect, useState } from 'react';
import ContactImg from '../../assets/img/contact.png';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Loc from '../../assets/icons/location-c.svg';
import Call from '../../assets/icons/call-c.svg';
import Smc from '../../assets/icons/sms-c.svg';
import Link from '../../assets/icons/linkedin-c.svg';
import Telegram from '../../assets/icons/telegram-c.svg';
import Instagram from '../../assets/icons/instagram-c.svg';
import Facebook from '../../assets/icons/facebook-c.svg';
import request from '../../services/api';

const Contact = () => {
	const [contact, setContact] = useState([]);
	const [social, setSocial] = useState([]);

	const getSocial = async () => {
		try {
			const res = await request.get('base/social-media');
			setSocial(res?.data?.data);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const getContact = async () => {
		try {
			const res = await request.get('base/contact-info');
			setContact(res?.data?.data?.[0]);
		} catch (error) {
			console.error('Error');
		}
	};
	useEffect(() => {
		getContact();
		getSocial();
	}, []);
	return (
		<div className="w-full flex flex-col items-center">
			<Navbar />
			<div
				className="w-[1366px] h-[743px] flex border border-solid border-1 border-[#E3E3E7] rounded-[30px] mt-[120px] mb-[120px] 
			max-[1400px]:w-[90%] max-[1400px]:flex-col max-[1400px]:h-[843px] max-[450px]:mt-[90px] "
			>
				<div
					className="w-[50%] h-full flex flex-col gap-[40px] p-[80px] max-[1400px]:w-[100%] max-[1400px]:h-fit
				 max-[1400px]:px-[24px] max-[1400px]:py-[44px] max-[1400px]:gap-[24px]"
				>
					<div className="flex gap-[16px] items-center">
						{contact?.location && (
							<>
								<img
									src={Loc}
									alt="location"
									width={32}
									height={32}
									className="max-[1400px]:w-[24px]"
								/>
								<p className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]">
									{contact?.location}
								</p>
							</>
						)}
					</div>
					<div className="flex gap-[16px] items-center">
						{contact?.phoneNumber && (
							<>
								<img
									src={Call}
									alt="location"
									width={32}
									height={32}
									className="max-[1400px]:w-[24px]"
								/>
								<p className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]">
									{contact?.phoneNumber}
								</p>
							</>
						)}
					</div>
					<div className="flex gap-[16px] items-center">
						<img
							src={Smc}
							alt="location"
							width={32}
							height={32}
							className="max-[1400px]:w-[24px]"
						/>

						<a
							href={`mailto:itskills@email.com`}
							target="_blank"
							className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
						>
							itskills@email.com
						</a>
					</div>
					<div className="flex gap-[16px] items-center">
						<img
							src={Link}
							alt="location"
							width={32}
							height={32}
							className="max-[1400px]:w-[24px]"
						/>
						<a
							href={`https://${
								social?.filter((v) => v.name == 'Linkedin')?.[0]?.link
							}`}
							target="_blank"
							className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
						>
							Linkedin
						</a>
					</div>
					<div className="flex gap-[16px] items-center">
						<img
							src={Telegram}
							alt="location"
							width={32}
							height={32}
							className="max-[1400px]:w-[24px]"
						/>
						<a
							href={`https://${
								social?.filter((v) => v.name == 'Telegram')?.[0]?.link
							}`}
							target="_blank"
							className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
						>
							Telegram
						</a>
					</div>
					<div className="flex gap-[16px] items-center">
						<img
							src={Instagram}
							alt="location"
							width={32}
							height={32}
							className="max-[1400px]:w-[24px]"
						/>
						<a
							href={`https://${
								social?.filter((v) => v.name == 'Instagram')?.[0]?.link
							}`}
							target="_blank"
							className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
						>
							Instagram
						</a>
					</div>
					<div className="flex gap-[16px] items-center">
						<img
							src={Facebook}
							alt="location"
							width={32}
							height={32}
							className="max-[1400px]:w-[24px]"
						/>
						<a
							href={`https://${
								social?.filter((v) => v.name == 'Facebook')?.[0]?.link
							}`}
							target="_blank"
							className="text-[#18181B]  text-[20px] font-[600] max-[1400px]:text-[18px] max-[450px]:text-[14px]"
						>
							Facebook
						</a>
					</div>
				</div>
				<div
					className="w-[50%] h-full max-[1400px]:w-[100%] max-[1400px]:h-[50%] "
					style={{
						background: `url(${ContactImg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
			</div>

			<Footer />
		</div>
	);
};

export default Contact;
