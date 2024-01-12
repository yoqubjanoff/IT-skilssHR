import React, { useState, useEffect, useRef } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	CustomTable,
	Modal2,
	CustomTag,
	Pagination,
	Toast,
	Popup,
} from '../../../component/generics';
import {
	UzLanIcon,
	EngLanIcon,
	RuLanIcon,
	UploadIcon,
} from '../../../component/generics/genericIcons';
import { column } from './header';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import request from '../../../services/api';
import { useTestContex } from '../../../context/useContext';
import Loading from '../../../component/Loading';
import { Replace } from '../../../services/Replace.js';
import { useSearch } from '../../../services/Search';
import axios from 'axios';

const AdminView = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [loading1, setLoading1] = useState(false);
	const query = useSearch();
	const [pagination, setPagination] = useState({});
	const { search, pathname } = useLocation();
	const fileRefUz = useRef();
	const fileRefRu = useRef();
	const fileRefEn = useRef();
	const refObject = {
		fileRefUz,
		fileRefRu,
		fileRefEn,
	};

	const { id, name } = useParams();
	const [file, setFile] = useState({});
	const [fileName, setFileName] = useState({
		UZ: '',
		EN: '',
		RU: '',
	});
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [data, dispatch] = useTestContex();
	const { questions, languageTest } = data;
	const [active, setActive] = useState(languageTest);
	const [activeLan, setActiveLan] = useState('EN');
	const [activeTest, setActiveTest] = useState('STANDARD_TEST');

	const getQuestion = async () => {
		setLoading(true);
		if (search)
			try {
				const res = await request.get(
					`admin/questions/all${
						search || '?'
					}&subDirectionId=${id}&language=${active}`,
				);
				dispatch({
					type: 'setQuestion',
					payload: res.data?.data,
				});
				setPagination(res?.data?.pagination);
				console.log(res?.data?.pagination, 'res?.data?.pagination');

				setLoading(false);
			} catch (error) {
				console.error('Error');
			}
	};
	const fileUz = document.getElementById('fileUz');
	const fileRu = document.getElementById('fileRu');
	const fileEn = document.getElementById('fileEn');
	const setBigTag = (name, ref) => {
		if (refObject[ref]?.current?.value) {
			fileRu.value = '';
			fileEn.value = '';
			fileUz.value = '';
		}
		setActiveLan(name);
		refObject[ref]?.current?.click();
	};
	const changeFile = (e) => {
		if (e?.target?.files[0]) {
			setFile(e?.target?.files[0]);
			setFileName({
				UZ: '',
				EN: '',
				RU: '',
				[activeLan]: e?.target?.files[0]?.name,
			});
		}
	};
	const ConfirmedFunction = () => {
		setOpen2(false);
	};
	const importFunc = async () => {
		if (!file?.size) {
			Toast({
				type: 'error',
				message: 'Choose file !',
			});
		} else {
			setLoading1(true);

			try {
				const token = localStorage.getItem('tokenAdmin');
				const axiosInstance = axios.create({
					baseURL: 'https://api.talent.itic.uz/api',
					// baseURL: 'http://192.168.0.167:8080/api',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'multipart/form-data',
					},
				});

				const response = await axiosInstance.post(
					`/admin/questions/import-excel?language=${activeLan}&subDirectionId=${id}&testType=${activeTest}`,
					{
						excel: file,
						transactionTime: '2023-08-14T15:43:01.8152087',
					},
				);
				setLoading1(false);

				getQuestion();
				setOpen2(false);
				setFileName({
					UZ: '',
					EN: '',
					RU: '',
				});
				setActive(activeLan);
				Toast({
					type: 'success',
					message: 'File imported',
				});
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg || 'Error',
					type: 'warning',
					isConfirmedFunction: ConfirmedFunction,
				});
				setLoading1(false);
			}
		}
	};

	useEffect(() => {
		getQuestion();
		navigate(`${pathname}${Replace('size', 20)}`);
	}, [active, search]);
	useEffect(() => {
		navigate(`${pathname}${Replace('page', 0)}`);
	}, []);
	return (
		<Wrapper>
			{/* Modal for add questiom */}
			<Modal2 open={open ? 1 : 0} width="700px">
				<Wrapper.ModalBox>
					<div className="ColumnBox">
						<h1>Choose test type</h1>
						<Wrapper.TagBox>
							<Wrapper.Tag
								active={activeTest === 'STANDARD_TEST' ? 1 : 0}
								onClick={() => setActiveTest('STANDARD_TEST')}
							>
								Standart test
							</Wrapper.Tag>
							<Wrapper.Tag
								active={activeTest === 'DETAILED_TEST' ? 1 : 0}
								onClick={() => setActiveTest('DETAILED_TEST')}
							>
								Detailed test
							</Wrapper.Tag>
						</Wrapper.TagBox>
						<h1>Choose language</h1>

						<Wrapper.Flex
							style={{ width: '100%', justifyContent: 'center', gap: '6px' }}
						>
							<Wrapper.Tag
								active={activeLan === 'EN' ? 1 : 0}
								onClick={() => setActiveLan('EN')}
								lan={'true'}
							>
								<EngLanIcon />
								English
							</Wrapper.Tag>
							<Wrapper.Tag
								active={activeLan === 'UZ' ? 1 : 0}
								onClick={() => setActiveLan('UZ')}
								lan={'true'}
							>
								<UzLanIcon />
								Uzbek
							</Wrapper.Tag>
							<Wrapper.Tag
								active={activeLan === 'RU' ? 1 : 0}
								onClick={() => setActiveLan('RU')}
								lan={'true'}
							>
								<RuLanIcon />
								Russian
							</Wrapper.Tag>
						</Wrapper.Flex>

						<Wrapper.Flex
							style={{
								width: '100%',
								justifyContent: 'center',
								height: '120px',
							}}
						>
							<Button2
								color="#fff"
								bg={'#0B3A48'}
								width={'161px'}
								height={'52px'}
								onClick={() =>
									navigate(
										`/admin/add-question/:${id}/${name}/${activeLan}/${activeTest}`,
									)
								}
							>
								Add question
							</Button2>
							<Button2
								width={'100px'}
								height={'52px'}
								bg={'#F5F5F5'}
								color="#0B3A48"
								secondary={'true'}
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button2>
						</Wrapper.Flex>
					</div>
				</Wrapper.ModalBox>
			</Modal2>

			{/* Modal for import file */}

			<Modal2 open={open2 ? 1 : 0} width="700px">
				{loading1 && <Loading />}

				<Wrapper.ModalBox style={{ height: '540px' }}>
					<div className="ColumnBox">
						<h1>Choose test type</h1>
						<Wrapper.TagBox>
							<Wrapper.Tag
								active={activeTest === 'STANDARD_TEST' ? 1 : 0}
								onClick={() => setActiveTest('STANDARD_TEST')}
							>
								Standart test
							</Wrapper.Tag>
							<Wrapper.Tag
								active={activeTest === 'DETAILED_TEST' ? 1 : 0}
								onClick={() => setActiveTest('DETAILED_TEST')}
							>
								Detailed test
							</Wrapper.Tag>
						</Wrapper.TagBox>
						<h1>Choose language</h1>

						<Wrapper.Flex
							style={{ width: '100%', justifyContent: 'center', gap: '12px' }}
						>
							<Wrapper.BigTag
								active={activeLan === 'EN' ? 1 : 0}
								onClick={() => setBigTag('EN', 'fileRefEn')}
								lan={'true'}
							>
								<Wrapper.FileInput
									type="file"
									id="fileEn"
									ref={fileRefEn}
									onChange={changeFile}
									accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
								/>
								<Wrapper.Flex>
									<EngLanIcon />
									English
								</Wrapper.Flex>

								<Wrapper.Flex style={{ width: '115px' }}>
									<UploadIcon />
									{fileName?.EN || 'choose a file'}
								</Wrapper.Flex>
							</Wrapper.BigTag>
							<Wrapper.BigTag
								active={activeLan === 'UZ' ? 1 : 0}
								onClick={() => setBigTag('UZ', 'fileRefUz')}
								lan={'true'}
							>
								<Wrapper.FileInput
									type="file"
									id="fileUz"
									ref={fileRefUz}
									onChange={changeFile}
									accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
								/>
								<Wrapper.Flex>
									<UzLanIcon />
									Uzbek
								</Wrapper.Flex>
								<Wrapper.Flex style={{ width: '115px' }}>
									<UploadIcon />
									{fileName?.UZ || 'choose a file'}
								</Wrapper.Flex>
							</Wrapper.BigTag>
							<Wrapper.BigTag
								active={activeLan === 'RU' ? 1 : 0}
								onClick={() => setBigTag('RU', 'fileRefRu')}
								lan={'true'}
							>
								<Wrapper.FileInput
									type="file"
									id="fileRu"
									ref={fileRefRu}
									onChange={changeFile}
									accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
								/>
								<Wrapper.Flex>
									<RuLanIcon />
									Russian
								</Wrapper.Flex>
								<Wrapper.Flex style={{ width: '115px' }}>
									<UploadIcon />
									{fileName?.RU || 'choose a file'}
								</Wrapper.Flex>
							</Wrapper.BigTag>
						</Wrapper.Flex>

						<Wrapper.Flex
							style={{
								width: '100%',
								justifyContent: 'center',
								height: '120px',
							}}
						>
							<Button2
								color="#fff"
								bg={'#0B3A48'}
								width={'161px'}
								height={'52px'}
								onClick={importFunc}
							>
								Import
							</Button2>
							<Button2
								width={'100px'}
								height={'52px'}
								bg={'#F5F5F5'}
								color="#0B3A48"
								secondary={'true'}
								onClick={() => {
									setOpen2(false);
									setFileName({
										UZ: '',
										EN: '',
										RU: '',
									});
									setFile({});
								}}
							>
								Cancel
							</Button2>
						</Wrapper.Flex>
					</div>
				</Wrapper.ModalBox>
			</Modal2>

			<p className="Header">{name || 'Graphic design'}</p>
			<div className="FlexBox">
				<div className="ColumnBox11">
					<div className="TagBox">
						<div className="FlexBox">
							<CustomTag
								title="English"
								active={active === 'EN' ? 1 : 0}
								onClick={() => setActive('EN')}
							/>
							<CustomTag
								title="Uzbek"
								active={active === 'UZ' ? 1 : 0}
								incinc
								onClick={() => setActive('UZ')}
							/>
							<CustomTag
								title="Russian"
								active={active === 'RU' ? 1 : 0}
								onClick={() => setActive('RU')}
							/>
						</div>
						<div className="FlexBox">
							<Button2
								bg={'#fff'}
								width={'131px'}
								color={'#0B3A48'}
								height={'42px'}
								onClick={() => setOpen(true)}
							>
								Add question
							</Button2>
							<Button2
								bg={'#0B3A48'}
								width={'141px'}
								color={'#fff'}
								height={'42px'}
								onClick={() => {
									setOpen2(true);
									setActiveLan(null);
								}}
							>
								Import from excel
							</Button2>
						</div>
					</div>
					<Wrapper.WrapTable>
						<CustomTable
							column={column}
							rowData={questions}
							loading={loading}
						/>
					</Wrapper.WrapTable>
					<div className="BoxStart">
						<Pagination
							current={Number(query.get('page')) || 0}
							SizeAll={pagination?.totalPages}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default AdminView;
