import React, { useState, useEffect } from 'react';
import { Wrapper, AntSelect } from '../NewHome/SearchEmploye/style';
import Search from '../../assets/icons/search-normal.svg';
import request from '../../services/api/hr-request';
import Card from '../NewHome/SearchEmploye/card';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Setting from '../../assets/icons/setting.svg';
import NotFound from '../../assets/img/Not Found.png';
import { Toast, Button } from '../generics';
// import CardComponent from '../NewHome/Partners/card';
import { Loader } from '../Loader/Loader';
import { Popover } from 'antd';
import { AntSelectFilter } from './style';
import useSearch from '../../services/Search';
import {
	useQueryParam,
	StringParam,
	NumberParam,
	BooleanParam,
} from 'use-query-params';
import { useTranslation } from 'react-i18next';




const Explore = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();
	const { search } = useLocation();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [subDirection, setSubDirection] = useState([]);
	const [subDirectionOption, setSubDirectionOption] = useState([]);
	const [direction, setDirection] = useState([]);
	const [regions, setRegions] = useState([]);
	const [languages, setLanguages] = useState([]);
	const [directionCaption, setDirectionCaption] = useState('');
	const [subDirectionCaption, setSubDirectionCaption] = useState('');
	const [regionCaption, setRegionCaption] = useState('');
	const [languageCaption, setLanguageCaption] = useState('');
	const [salaryCaption, setSalaryCaption] = useState('');
	const [base, setBase] = useState([]);
	const [size, setSize] = useState(12);
	const [pageSize, setPageSize] = useState(0);
	const [baseCount, setBaseCount] = useState([]);
	const [baseCaption, setBaseCaption] = useQueryParam(
		'baseCaption',
		StringParam,
	);
	const [selectedParam, setSelectedParam] = useQueryParam(
		'selected',
		StringParam,
	);
	const [baseId, setBaseId] = useQueryParam('subDirectionId', StringParam);
	const [paramlanguageId, setLanguageId] = useQueryParam(
		'languageId',
		StringParam,
	);
	const [paramregionId, setRegionId] = useQueryParam('regionId', StringParam);
	const [paramMaxSalary, setMaxSalary] = useQueryParam(
		'maxSalary',
		StringParam,
	);
	const query = useSearch();
	const getBase = async () => {
		try {
			const res = await request.get('talent/sub-directions/all');
			setBase(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getBaseCount = async () => {
		try {
			const res = await request.get('base');
			setBaseCount(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getDirection = async () => {
		try {
			const res = await request.get('hr/directions/all');
			setDirection(res?.data?.data);
			setSubDirection(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};

	const getLanguages = async () => {
		try {
			const res = await request.get('hr/languages/all');
			setLanguages(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};
	const getRegions = async () => {
		try {
			const res = await request.get('hr/regions/all');
			setRegions(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};

	const salaryOptions = [
		{
			id: 1000,
			label: '1000 $',
			value: '1000 $',
		},
		{
			id: 2000,
			label: '2000 $',
			value: '2000 $',
		},
		{
			id: 3000,
			label: '3000 $',
			value: '3000 $',
		},
		{
			id: 4000,
			label: '4000 $',
			value: '4000 $',
		},
		{
			id: 5000,
			label: '5000 $',
			value: '5000 $',
		},
	];

	const optionsDirection = direction.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
			sub: v?.subDirections,
		};
	});

	const optionsLanguage = languages.map((v) => {
		return {
			id: v?.id,
			value: v?.id,
			label: v?.caption,
		};
	});

	const getTalents = async () => {
		setLoading(true);
		try {
			const res = await request.get(
				`hr/explore${search ? `${search}&size=${size}` : `?size=${size}`}`,
			);
			setData(res?.data?.data);
			setLoading(false);
			setPageSize(res?.data?.pagination?.totalElements);
		} catch (error) {
			setLoading(false);

			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const getSaved = async () => {
		setLoading(true);
		try {
			const res = await request.get('hr/get-all-saved/talents');
			setData(res?.data?.data);
			setLoading(false);
			setPageSize(res?.data?.pagination?.totalElements);
		} catch (error) {
			setLoading(false);
			Toast({
				message: error?.response?.data?.resultMsg,
				type: 'error',
			});
		}
	};
	const clearFunc = () => {
		setDirectionCaption('');
		setSubDirectionCaption('');
		setRegionCaption('');
		setLanguageCaption('');
		setSalaryCaption('');
		setBaseCaption(null);
		setBaseId(null);
		setSelectedParam(null);
		setBaseId(null);
		setLanguageId(null);
		setRegionId(null);
		setMaxSalary(null);

		setSize(12);
	};

	const SaveFunc = () => {
		setSelectedParam(null);
		subDirectionCaption?.id && setBaseId(subDirectionCaption?.id);
		regionCaption?.id && setRegionId(regionCaption?.id);
		languageCaption?.id && setLanguageId(languageCaption?.id);
		salaryCaption?.id && setMaxSalary(salaryCaption?.id);
	};

	const content = (
		<div className="flex flex-col gap-[16px] w-[340px] h-[552px] max-[450px]:w-[270px]">
			<div className=" w-full flex flex-col  gap-[5px]">
				<p className="text-[#71717A] text-[16px] font-[500]">{t('w120')}</p>

				<AntSelectFilter
					options={optionsDirection}
					style={{ height: '52px' }}
					value={directionCaption?.label}
					onChange={(e, opt) => {
						setDirectionCaption(opt);
						const subs = opt?.sub?.map((v) => {
							return {
								id: v?.id,
								value: v?.caption,
								label: v?.caption,
							};
						});
						setSubDirectionOption([...subs]);
					}}
				/>
			</div>
			<div className=" w-full flex flex-col  gap-[5px]">
				<p className="text-[#71717A] text-[16px] font-[500]">
					{t('w121')}
				</p>
				<AntSelectFilter
					style={{ height: '52px' }}
					options={subDirectionOption}
					onChange={(e, opt) => {
						setSubDirectionCaption(opt);
					}}
					value={subDirectionCaption?.label}
				/>
			</div>
			<div className=" w-full flex flex-col  gap-[5px]">
				<p className="text-[#71717A] text-[16px] font-[500]">
				{t('w122')}
				</p>
				<AntSelectFilter
					onChange={(e, opt) => {
						setRegionCaption(opt);
					}}
					value={regionCaption?.label}
					style={{ height: '52px' }}
					options={regions?.map((v) => {
						return {
							id: v?.id,
							value: v?.caption,
							label: v?.caption,
						};
					})}
				/>
			</div>
			<div className=" w-full flex flex-col  gap-[5px]">
				<p className="text-[#71717A] text-[16px] font-[500]">{t('w123')}</p>
				<AntSelectFilter
					style={{ height: '52px' }}
					onChange={(e, opt) => {
						setLanguageCaption(opt);
					}}
					value={languageCaption?.label}
					options={optionsLanguage}
				/>
			</div>
			<div className=" w-full flex flex-col mb-[10px] gap-[5px]">
				<p className="text-[#71717A] text-[16px] font-[500]">{t('w124')}</p>
				<AntSelectFilter
					options={salaryOptions}
					value={salaryCaption?.label}
					onChange={(e, opt) => {
						setSalaryCaption(opt);
					}}
					style={{ height: '52px' }}
				/>
			</div>
			<div className="flex w-full justify-end gap-[5px]">
				<Button
					type="danger"
					radius={'12px'}
					height={'32px'}
					padding={'6px 18px'}
					bgcolor={'#DC2626'}
					width={'fit-content'}
					onClick={clearFunc}
				>
					<p className="text-[#fff] text-[14px] font-[600]">{t('w125')}</p>
				</Button>
				<Button
					type="default"
					radius={'12px'}
					height={'32px'}
					width={'fit-content'}
					padding={'6px 18px'}
					bgcolor={'#2563EB'}
					onClick={SaveFunc}
				>
					<p className="text-[#fff] text-[14px] font-[600]">{t('w69')}</p>
				</Button>
			</div>
		</div>
	);
	useEffect(() => {
		getDirection();
		getRegions();
		getLanguages();
		getBase();
		getBaseCount();
	}, []);
	useEffect(() => {
		if (!query.get('selected')) {
			getTalents();
		}
	}, [search, size]);
	useEffect(() => {
		if (query.get('selected')) {
			getSaved();
		}
	}, [query.get('selected'), size]);
	return (
		<Wrapper>
			<Navbar />
			<p className="font-[Vollkorn] text-[#18181B] text-[34px] font-[600] max-[450px]:text-[22px] mt-[120px] ">
				{t('w119')}
			</p>
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
					placeholder = {t('w14')}
					style={{ width: '100%', border: 'none', height: '100%' }}
					options={base?.map((v) => {
						return {
							id: v?.id,
							value: v?.caption,
							label: v?.caption,
						};
					})}
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
						setSelectedParam(null);
						setBaseCaption(e);
						setBaseId(opt?.id);
					}}
					value={baseCaption || ''}
				/>

				<Popover content={content} trigger="click" placement="bottomRight">
					<img
						src={Setting}
						alt="Setting"
						width={32}
						height={32}
						style={{ cursor: 'pointer' }}
					/>
				</Popover>
			</Wrapper.SearchBox>
			<p className="category">{t('w15')}...</p>
			<Wrapper.CategoryBox style={{ margin: '0 0 100px 0' }}>
				{baseCount?.map((v, i) => (
					<div
						onClick={() => {
							setSelectedParam(null);
							setBaseCaption(v?.caption);
							setBaseId(v?.id);
						}}
						key={i}
						className="w-fit flex gap-[50px] items-center border border-solid border-1
					 border-[#18181B4D] border-opacity-30 px-[20px] py-[12px] rounded-[15px] cursor-pointer active:scale-[1.01]"
					>
						<p className="text-[#18181B] text-[16px] font-[500] opacity-80 ">
							{v?.caption}
						</p>
						<div className="min-w-[40px] w-fit flex items-center justify-center p-[8px] rounded-[10px] bg-[#22C55E]">
							<p className="text-[#fff] text-[16px] font-[600] ">
								{v?.count || 0}
							</p>
						</div>
					</div>
				))}
			</Wrapper.CategoryBox>
			<div className="w-full flex justify-center mt-[50px] ">
				<div className="max-w-[1800px] flex flex-wrap gap-[20px] justify-center ">
					{loading ? (
						<Loader />
					) : !data?.length ? (
						<div className="w-full flex flex-col gap-[20px] items-center justify-center">
							<img src={NotFound} alt="" />
							<p className="text-[#18181B] text-[24px] font-[700] opacity-20">
								Not found
							</p>
							<p className="text-[#18181B] text-[18px] font-[500]  opacity-20">
								You searched task
							</p>
							<p className="text-[#18181B] text-[18px] font-[500]  opacity-20">
								not found
							</p>
						</div>
					) : (
						data?.map((v, i) => <Card data={v} id={i} key={i} />)
					)}
				</div>
			</div>
			<div className="w-full flex items-center justify-center  my-[60px]">
				{pageSize >= size && (
					<div
						onClick={() => setSize((v) => v + 12)}
						className="w-fit flex items-center justify-center px-[18px] py-[10px] border border-solid border-1
					 border-[#18181B4D] border-opacity-40 rounded-[12px] cursor-pointer active:scale-[1.01]"
					>
						<p className="text-[#18181B] text-[18px] font-[500]">{t('w126')}</p>
					</div>
				)}
			</div>
		</Wrapper>
	);
};

export default Explore;
