import React, { useState, useEffect } from 'react';
import { Wrapper, AntSelect } from './style';
import Search from '../../../assets/icons/search-normal.svg';
import request from '../../../services/api';
import Card from './card';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../Partners/card';
import { useTranslation } from 'react-i18next';

const SearchEmploye = () => {
	const { t } = useTranslation();
	const [subDirection, setSubDirection] = useState([]);
	const navigate = useNavigate();
	const [slidesToShow, setSlidesToShow] = useState(4);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 569) {
				setSlidesToShow(1);
			} else if (window.innerWidth < 1069) {
				setSlidesToShow(2);
			} else if (window.innerWidth < 1300) {
				setSlidesToShow(3);
			}
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '0',
	};

	const getDirection = async () => {
		try {
			const res = await request.get('base');
			// const newRes = res?.data?.data?.filter((v) => v?.count !== '0');
			setSubDirection(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};

	const options = subDirection.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
		};
	});

	useEffect(() => {
		getDirection();
	}, []);
	return (
		<Wrapper>
			<p className="text-[#18181B] text-[28px] font-[600] ">{t('w13')}</p>
			<Wrapper.SearchBox>
				<img
					src={Search}
					alt="Search"
					width={32}
					height={32}
					style={{ opacity: '0.2' }}
				/>
				<AntSelect
					showSearch
					placeholder={t('w14')}
					style={{ width: '100%', border: 'none', height: '100%' }}
					options={options}
					optionFilterProp="children"
					filterOption={(input, option) =>
						(option?.label ?? '').includes(input)
					}
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? '')
							.toLowerCase()
							.localeCompare((optionB?.label ?? '').toLowerCase())
					}
					onSelect={(e, opt) => {
						navigate(
							`/explore/?baseCaption=${opt?.label}&subDirectionId=${opt?.id}`,
						);
					}}
				/>
			</Wrapper.SearchBox>
			<p className="category">{t('w15')}...</p>
			<Wrapper.CategoryBox style={{ margin: '0 0 100px 0' }}>
				{subDirection?.map((v, i) => (
					<CardComponent data={v} key={i} />
				))}
			</Wrapper.CategoryBox>
			<Wrapper.EmployeBox>
				<Wrapper.CategoryBox
					style={{ margin: '50px 0', justifyContent: 'start' }}
				>
					<Wrapper.Box width={'424px'}>
						<p className="emp">{t('w16')}</p>
					</Wrapper.Box>
				</Wrapper.CategoryBox>
				<Wrapper.Slider {...settings}>
					<Card disable />
					<Card disable />
					<Card disable />
					<Card disable />
					<Card disable />
				</Wrapper.Slider>
			</Wrapper.EmployeBox>
		</Wrapper>
	);
};

export default SearchEmploye;
