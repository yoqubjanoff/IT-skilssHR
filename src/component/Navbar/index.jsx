import React, { useEffect, useState } from 'react';
import Uz from '../../assets/icons/uzFlag.svg';
import En from '../../assets/icons/enFlag.svg';
import Ru from '../../assets/icons/ruFlag.svg';
import Logout from '../../assets/icons/logout.svg';
import Setting from '../../assets/icons/setting-2.svg';
import Profile from '../../assets/icons/profile-circle.svg';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import Logo from '../../assets/img/logo.png';
import Close from '../../assets/icons/close-circle-2.svg';
import Menu from '../../assets/icons/menu-line.svg';
import Right from '../../assets/icons/Right 1.svg';
import Safe from '../../assets/icons/security-safe.svg';
import Trash from '../../assets/icons/trash.svg';
import Save from '../../assets/icons/save-black.svg';

import {
	Wrapper,
	Wrap,
	AntdSelect,
	AntdButton,
	AntdDrawer,
	AntdSelectLanguage,
	AntdPopconfirm,
	AndModal,
	AndModalSettings,
	AndModalDelete,
} from './style';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import request from '../../services/api';
import requestHr from '../../services/api/hr-request';
import { setUserData, setHrData } from '../../redux/actions/generalActions';
import { connect } from 'react-redux';
import { Toast, Button } from '../generics';
import { useTranslation } from 'react-i18next';

const Navbar = ({ userData, setUserData, setHrData, hrData }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY == 0) {
				setScrollPosition(true);
			} else {
				setScrollPosition(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const { Option } = AntdSelectLanguage;
	const { t, i18n } = useTranslation();

	const [open, setOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [logo, setLogo] = useState('');
	const navigate = useNavigate();
	const [data, setData] = useState({
		newPassword: '',
		oldPassword: '',
		copyPassword: '',
	});
	const [error, setError] = useState({
		oldPassword: null,
		newPassword: null,
		copyPassword: null,
	});

	const options = [
		{
			value: 'Ish beruvchilarga',
			label: <p>Ish beruvchilarga</p>,
		},
		{
			value: 'Mutaxasislarga',
			label: <p>{t('w116')}</p>,
		},

		{
			value: 'Resurslar',
			label: <p>{t('w25')}</p>,
		},
		{
			value: 'Kompaniya',
			label: <p>Kompaniya</p>,
		},
	];
	const onConfirm = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('token-hr');
		setUserData({});
		setHrData({});
		onClose();
		navigate('/');
		getMe();
		Toast({
			type: 'success',
			message: 'Profildan chiqildi !',
		});
	};
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
	const items = [
		{
			label: (
				<div
					className="flex items-center gap-[5px] cursor-pointer my-[5px]"
					onClick={() => navigate('/hr-profile')}
				>
					<img src={Profile} alt="profile" width={24} height={24} />
					<p className="text-[#18181B] text-[16px] font-[500] ">{t('w81')}</p>
				</div>
			),
			key: '0',
		},
		{
			label: (
				<div
					className="flex items-center gap-[5px] cursor-pointer my-[5px]"
					onClick={() => setOpenSettings(true)}
				>
					<img src={Setting} alt="profile" width={24} height={24} />
					<p className="text-[#18181B] text-[16px] font-[500] ">{t('w82')}</p>
				</div>
			),
			key: '1',
		},
		{
			label: (
				<div
					className="flex items-center gap-[5px] cursor-pointer my-[5px]"
					onClick={() => navigate('/explore?selected=true')}
				>
					<img src={Save} alt="profile" width={24} height={24} />
					<p className="text-[#18181B] text-[16px] font-[500] ">{t('w118')}</p>
				</div>
			),
			key: '11',
		},
		{
			label: (
				<AntdPopconfirm
					title={t('w96')}
					cancelText={t('w97')}
					okText={t('w98')}
					onConfirm={onConfirm}
					arrow={false}
				>
					<div className="flex items-center gap-[5px] cursor-pointer my-[5px]">
						<img src={Logout} alt="profile" width={24} height={24} />
						<p className="text-[#DC2626] text-[16px] font-[500] ">{t('w84')}</p>
					</div>
				</AntdPopconfirm>
			),
			key: '2',
		},
	];
	const itemsResurs = [
		{
			label: (
				<p
					onClick={() => {
						localStorage.setItem('scrollToBlogs', 'true');
						navigate('/');
						setOpen(false);
					}}
					className="text-[#18181B] text-[16px] font-[500] "
				>
					{t('w51')}
				</p>
			),
			key: '10',
		},
		{
			label: (
				<p
					onClick={() => {
						localStorage.setItem('scrollToCourse', 'true');
						navigate('/');
						setOpen(false);
					}}
					className="text-[#18181B] text-[16px] font-[500] "
				>
					{t('w52')}
				</p>
			),
			key: '21',
		},
	];
	const itemsCompany = [
		{
			label: (
				<p
					onClick={() => navigate('/about')}
					className="text-[#18181B] text-[16px] font-[500] "
				>
					{t('w48')}
				</p>
			),
			key: '0',
		},
		{
			label: (
				<p
					onClick={() => navigate('/contact')}
					className="text-[#18181B] text-[16px] font-[500] "
				>
					{t('w30')}
				</p>
			),
			key: '1',
		},
		{
			label: (
				<p className="text-[#18181B] text-[16px] font-[500] ">{t('w114')}</p>
			),
			key: '11',
		},
	];
	const optionsLangue = [
		{
			value: 'UZB',
			label: (
				<div
					className="flex items-center gap-[10px]"
					style={{
						gap: '2px',
						display: 'flex',
						height: '30px',
						alignItems: 'center',
					}}
				>
					<img
						src={Uz}
						alt="UZB"
						width={26}
						height={20}
						style={{ margin: '0 5px 0 0' }}
					/>
					<p className="middle">UZB</p>
				</div>
			),
		},
		{
			value: 'ENG',
			label: (
				<div
					className="flex items-center gap-[10px]"
					style={{
						gap: '2px',
						display: 'flex',
						height: '30px',
						alignItems: 'center',
					}}
				>
					<img
						src={En}
						alt="ENG"
						width={26}
						height={20}
						style={{ margin: '0 5px 0 0' }}
					/>
					<p className="middle">ENG</p>
				</div>
			),
		},

		{
			value: 'RUS',
			label: (
				<div
					className="flex items-center gap-[10px]"
					style={{
						gap: '2px',
						display: 'flex',
						height: '30px',
						alignItems: 'center',
					}}
				>
					<img
						src={Ru}
						alt="RU"
						width={26}
						height={20}
						style={{ margin: '0 5px 0 0' }}
					/>
					<p className="middle">RUS</p>
				</div>
			),
		},
	];

	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1000) {
				onClose();
			}
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const getLogo = async () => {
		try {
			const response = await request.get('base/logo');
			setLogo(
				response?.data?.data.filter((v) => v.logoType == 'HEAD')?.[0]
					?.logoPhotoUrl,
			);
		} catch (error) {
			console.log(error);
			setUserData({});
		}
	};
	const [lan, setLan] = useState('');

	const ChangeLanguage = (e) => {
		if (e === 'UZB') {
			setLan('UZB');
			i18n?.changeLanguage('uz');
		} else if (e === 'RUS') {
			setLan('RUS');
			i18n?.changeLanguage('ru');
		} else if (e === 'ENG') {
			setLan('ENG');
			i18n?.changeLanguage('en');
		}
	};
	useEffect(() => {
		if (i18n.language === 'uz') {
			setLan('UZB');
		} else if (i18n.language === 'ru') {
			setLan('RUS');
		} else if (i18n.language === 'en') {
			setLan('ENG');
		}
	}, []);
	const CustomHeader = () => {
		return (
			<div className="full flex gap-[16px] justify-end">
				<AntdSelectLanguage
					// defaultValue="UZB"
					options={optionsLangue}
					onChange={ChangeLanguage}
					value={lan}
					suffixIcon={''}
					style={{ height: '44px', borderRadius: '12px', width: '93px' }}
				>
					{options?.length &&
						options?.map((o) => {
							return (
								<Option key={o?.label} value={o?.label}>
									{o?.label}
								</Option>
							);
						})}
				</AntdSelectLanguage>
				<img
					src={Close}
					alt="Menu"
					height={42}
					width={42}
					style={{ cursor: 'pointer' }}
					onClick={onClose}
				/>
			</div>
		);
	};
	const getMe = async () => {
		if (localStorage.getItem('token')) {
			try {
				const response = await request.get('talent/profile/me');
				setUserData(response?.data?.data);
			} catch (error) {
				console.log(error);
				setUserData({});
			}
		} else if (localStorage.getItem('token-hr')) {
			try {
				const response = await requestHr.get('hr/profile/me');
				setHrData(response?.data?.data);
			} catch (error) {
				console.log(error);
				setHrData({});
			}
		} else {
			setUserData({});
			setHrData({});
		}
	};
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target?.value,
		});
		setError({
			...error,
			[e.target.name]: false,
		});
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
		setData({
			...data,
			newPassword: '',
			oldPassword: '',
			copyPassword: '',
		});
		setError({
			...error,
			newPassword: null,
			oldPassword: null,
			copyPassword: null,
		});
	};

	const saveFunc = async () => {
		try {
			const response = await request.patch('hr/profile/change-password', {
				data,
			});
			handleCancel();
			Toast({
				type: 'success',
				message: `${t('w155')} !`,
			});
			getMe();
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const handleError = (callback) => {
		if (!data.oldPassword || !data.newPassword || !data.copyPassword) {
			setError({
				...error,
				oldPassword: !data.oldPassword && t('w127'),
				newPassword: !data.newPassword && t('w128'),
				copyPassword: !data.copyPassword && t('w128'),
			});
		} else {
			return callback();
		}
	};
	const submitFunction = () => {
		handleError(saveFunc);
	};

	const [openSettings, setOpenSettings] = useState(false);
	const [openDeleteProfile, setOpenDeleteProfile] = useState(false);

	const deleteProfile = async () => {
		try {
			const response = await request.get('talent/profile/delete');
			Toast({
				type: 'success',
				message: 'Sizning profilingiz o`chirildi !',
			});
			setOpenSettings(false);
			setOpenDeleteProfile(false);
			setOpen(false);
			navigate('/');
			getMe();
		} catch (error) {
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};

	useEffect(() => {
		getMe();
		getLogo();
		return () => {};
	}, []);

	return (
		<Wrap top={scrollPosition}>
			<AndModal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				footer={null}
			>
				<div className="w-full flex flex-col justify-between h-[520px]">
					<div>
						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#18181B] text-[28px] font-[700]">
								{t('w87')}
							</p>

							<p className="text-[#71717A] text-[16px] font-[500]">
								{t('w88')}
							</p>
							<Input.Password
								placeholder={t('w89')}
								style={{
									height: '52px',
									borderRadius: '12px',
								}}
								iconRender={(visible) =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
								onChange={handleChange}
								value={data?.oldPassword}
								name="oldPassword"
							/>
							{error.oldPassword && (
								<p className="text-[red] text-[14px] font-[600]">
									{error.oldPassword}
								</p>
							)}
						</div>
						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#71717A] text-[16px] font-[500]">
								{t('w90')}
							</p>
							<Input.Password
								placeholder={t('w89')}
								style={{
									height: '52px',
									borderRadius: '12px',
								}}
								iconRender={(visible) =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
								onChange={handleChange}
								value={data?.newPassword}
								name="newPassword"
							/>
							{error.newPassword && (
								<p className="text-[red] text-[14px] font-[600]">
									{error.newPassword}
								</p>
							)}
						</div>
						<div className=" w-full flex flex-col mb-[24px] gap-[5px]">
							<p className="text-[#71717A] text-[16px] font-[500]">
								{t('w92')}
							</p>
							<Input.Password
								placeholder={t('w89')}
								style={{
									height: '52px',
									borderRadius: '12px',
								}}
								iconRender={(visible) =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
								onChange={handleChange}
								value={data?.copyPassword}
								name="copyPassword"
							/>
							{error.copyPassword && (
								<p className="text-[red] text-[14px] font-[600]">
									{error.copyPassword}
								</p>
							)}
						</div>
					</div>
					<Button
						type="primary"
						radius={'12px'}
						height={'52px'}
						padding={'12px 32px'}
						bgcolor={'#2563EB'}
						onClick={submitFunction}
					>
						<p className="text-[#fff] text-[16px] font-[600]">{t('w87')}</p>
					</Button>
				</div>
			</AndModal>
			<AntdDrawer
				placement="right"
				onClose={onClose}
				title={<CustomHeader />}
				open={open}
				closeIcon={false}
			>
				<div className="flex flex-col items-center gap-[22px] mt-[30px]">
					<a
						href="https://itskills.uz/"
						className="text-[#18181B] text-[16px] font-[600] cursor-pointer"
					>
						{t('w53')}
					</a>

					<Dropdown
						menu={{
							items: itemsResurs,
						}}
						trigger={['click']}
					>
						<div className="w-fit flex gap-[7px]  cursor-pointer">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[400]">
								{t('w25')}
							</p>
							<DownOutlined size={'small'} />
						</div>
					</Dropdown>
					<Dropdown
						menu={{
							items: itemsCompany,
						}}
						trigger={['click']}
					>
						<div className="w-fit flex gap-[7px]  cursor-pointer">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[400]">
								Kompaniya
							</p>
							<DownOutlined size={'small'} />
						</div>
					</Dropdown>
				</div>

				{hrData?.email ? (
					<div className="flex gap-[5px] items-center justify-center mt-[150px] mb-[80px]">
						{hrData?.profilePhotoUrl ? (
							<img
								src={hrData?.profilePhotoIURL}
								alt="profile"
								width={40}
								height={40}
								style={{ borderRadius: '50%', objectFit: 'cover' }}
							/>
						) : (
							<img
								src={Profile}
								alt="profile"
								width={40}
								height={40}
								style={{ objectFit: 'contain', opacity: '0.5' }}
							/>
						)}

						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<div className="flex items-center gap-[5px] cursor-pointer">
								<div className="w-[150px] overflow-hidden max-[400px]:w-[100px]">
									<p
										style={{ fontWeight: '600' }}
										className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[600]"
									>
										{userData?.firstName || hrData?.firstName}
									</p>
								</div>
								<DownOutlined size={'small'} />
							</div>
						</Dropdown>
					</div>
				) : (
					<div className="flex flex-col items-center gap-[22px] mt-[180px]">
						<AntdButton onClick={() => navigate('/signin')}>
							<p className="middle"> {t('w37')}</p>
						</AntdButton>
						<AntdButton type="primary" onClick={() => navigate('/register')}>
							<p className="middle" style={{ color: '#fff' }}>
								{t('w100')}
							</p>
						</AntdButton>
					</div>
				)}

				<div className="flex justify-center gap-[16px] mt-[30px]">
					<p className="header" style={{ cursor: 'pointer' }}>
						Telegram
					</p>
					<p className="header" style={{ cursor: 'pointer' }}>
						Instagram
					</p>
					<p className="header" style={{ cursor: 'pointer' }}>
						Facebook
					</p>
					<p className="header" style={{ cursor: 'pointer' }}>
						Linkedin
					</p>
				</div>
			</AntdDrawer>
			<AndModalSettings
				open={openSettings}
				onCancel={() => setOpenSettings(false)}
				centered
				footer={null}
				closeIcon={false}
			>
				<div className="flex flex-col gap-[2rem]">
					<div
						onClick={() => setIsModalOpen(true)}
						className="flex justify-between items-center px-[20px]
					 w-[460px] h-[64px] rounded-[16px] bg-[#f1f1f1] cursor-pointer max-[800px]:w-[100%]"
					>
						<div className="flex gap-[1rem] items-center ">
							<div className="flex items-center justify-center w-[42px] h-[42px] bg-[#fff] rounded-[50%]">
								<img src={Safe} width={24} height={24} />
							</div>
							<p className="text-[#212121] text-[16px] font-[600]">
								{t('w87')}
							</p>
						</div>
						<img src={Right} width={24} height={24} />
					</div>
					<div
						onClick={() => setOpenDeleteProfile(true)}
						className="flex justify-between items-center px-[20px] w-[460px] h-[64px]
					 rounded-[16px] bg-[#DC2626] bg-opacity-20 cursor-pointer max-[800px]:w-[100%]"
					>
						<div className="flex gap-[1rem] items-center">
							<div className="flex items-center justify-center w-[42px] h-[42px] bg-[#fff] rounded-[50%]">
								<img src={Trash} width={24} height={24} />
							</div>
							<p className="text-[#212121] text-[16px] font-[600]">
								{t('w81')}
							</p>
						</div>
						<img src={Right} width={24} height={24} />
					</div>
				</div>
			</AndModalSettings>

			<AndModalDelete
				open={openDeleteProfile}
				onCancel={() => setOpenDeleteProfile(false)}
				centered
				footer={null}
				closeIcon={false}
			>
				<div className="flex flex-col gap-[16px]">
					<p className="text-[#212121] text-[24px] font-[600] leading-[36px] text-center">
						{t('w129')}
					</p>
					<p className="text-[#212121] text-[16px] font-[400] opacity-70 text-center">
						{t('w130')}
					</p>

					<div className="flex gap-[16px] max-[450px]:flex-col">
						<Button
							type="default"
							radius={'12px'}
							height={'52px'}
							padding={'12px 24px'}
							bgcolor={'#fff'}
							onClick={() => setOpenDeleteProfile(false)}
						>
							<p className="text-[#17171B] text-[16px] font-[600]">
								{t('w131')}
							</p>
						</Button>
						<Button
							type="danger"
							radius={'12px'}
							height={'52px'}
							padding={'12px 24px'}
							bgcolor={'#DC2626'}
							onClick={deleteProfile}
						>
							<p className="text-[#fff] text-[16px] font-[600]">{t('w117')}</p>
						</Button>
					</div>
				</div>
			</AndModalDelete>

			<Wrapper>
				<Wrapper.Img
					src={Logo}
					onClick={() => navigate('/')}
					style={{ cursor: 'pointer' }}
					className="min-[950px]:hidden"
				/>
				<div className="flex items-center gap-[30px]  max-[950px]:hidden">
					<Wrapper.Img
						src={Logo}
						onClick={() => navigate('/')}
						style={{ cursor: 'pointer' }}
					/>
					<Dropdown
						menu={{
							items: itemsCompany,
						}}
						trigger={['click']}
					>
						<div className="w-fit flex gap-[7px]  cursor-pointer">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[400]">
								{t('w47')}
							</p>
							<DownOutlined size={'small'} />
						</div>
					</Dropdown>
					<Dropdown
						menu={{
							items: itemsResurs,
						}}
						trigger={['click']}
					>
						<div className="w-fit flex gap-[7px]  cursor-pointer">
							<p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[400]">
								{t('w25')}
							</p>
							<DownOutlined size={'small'} />
						</div>
					</Dropdown>

					<a
						href="https://itskills.uz/"
						className="text-[#18181B]  text-[16px] font-[400] cursor-pointer"
					>
						{t('w53')}
					</a>
				</div>
				<div className="flex items-center gap-[10px] ">
					<div className="w-fit h-[40px]  max-[950px]:hidden mr-[20px]">
						<AntdSelectLanguage
							onChange={ChangeLanguage}
							value={lan}
							options={optionsLangue}
							suffixIcon={''}
							style={{ height: '44px', borderRadius: '12px', width: '93px' }}
						>
							{options?.length &&
								options?.map((o) => {
									return (
										<Option key={o?.label} value={o?.label}>
											{o?.label}
										</Option>
									);
								})}
						</AntdSelectLanguage>
					</div>

					<div className="flex h-full w-fit items-center min-[950px]:hidden">
						<img
							src={Menu}
							alt="Menu"
							height={42}
							width={42}
							style={{ cursor: 'pointer' }}
							onClick={showDrawer}
						/>
					</div>
					{userData?.email || hrData?.email ? (
						<div className="flex gap-[5px] items-center max-[950px]:hidden">
							{hrData?.profilePhotoIURL ? (
								<img
									src={hrData?.profilePhotoIURL}
									alt="profile"
									width={40}
									height={40}
									style={{ borderRadius: '50%', objectFit: 'cover' }}
								/>
							) : (
								<img
									src={Profile}
									alt="profile"
									width={40}
									height={40}
									style={{ objectFit: 'contain', opacity: '0.5' }}
								/>
							)}

							<Dropdown
								menu={{
									items,
								}}
								trigger={['click']}
							>
								<div className="flex items-center gap-[5px] cursor-pointer">
									<div className="max-w-[150px] overflow-hidden max-[400px]:max-w-[100px]">
										<p
											style={{ fontWeight: '600' }}
											className="overflow-hidden whitespace-nowrap overflow-ellipsis text-[#18181B] text-[16px] font-[600]"
										>
											{userData?.firstName || hrData?.firstName}
										</p>
									</div>
									<DownOutlined size={'small'} />
								</div>
							</Dropdown>
						</div>
					) : (
						<div className="flex gap-[16px] max-[950px]:hidden">
							<AntdButton onClick={() => navigate('/signin')}>
								<p className="middle"> {t('w37')}</p>
							</AntdButton>
							<AntdButton type="primary" onClick={() => navigate('/register')}>
								<p className="middle" style={{ color: '#fff' }}>
									{t('w38')}
								</p>
							</AntdButton>
						</div>
					)}
				</div>
			</Wrapper>
		</Wrap>
	);
};

const mapDispatchToProps = {
	setUserData,
	setHrData,
};
const mapStateToProps = (state) => ({
	userData: state.generalReducer.userData,
	hrData: state.generalReducer.hrData,
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
