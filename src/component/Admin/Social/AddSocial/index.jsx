import React, { useState, useRef } from 'react';
import { Wrapper } from './style';
import {
	Button2,
	Input2,
	Popup,
	Switch,
	Toast,
} from '../../../../component/generics';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../../services/api';
import { useBlogContex } from '../../../../context/useContext';
import Loading from '../../../../component/Loading';
import BgFile from '../../../../assets/icons/fileUpload.svg';
import { useEffect } from 'react';

const AddBlog = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useBlogContex();
	const [svgUrl, setSvgUrl] = useState('');

	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		logoFileUrl: selected?.logoFileUrl || null,
		name: selected?.name || null,
		link: selected?.link || null,
	});

	const { logoFileUrl, name, link } = state;

	const handleInputChange = async (e) => {
		const files = e.target.files[0];

		try {
			const formData = new FormData();
			formData.append('file', files);

			const resData = await request.post('admin/file/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			const { fileUrl } = resData?.data?.data;
			const { id } = resData?.data?.data;
			setState({
				...state,
				logoFileUrl: fileUrl,
				attachmentId: id,
			});
			if (resData) {
				Toast({
					type: 'success',
					message: 'Yuklandi!',
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const saveQuestion = async () => {
		setLoading(true);
		if (!id) {
			try {
				const res = await request.post('admin/social-media', {
					data: {
						logoFileUrl,
						name,
						link,
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});
				setLoading(false);

				navigate('/admin/social');
				Toast({
					type: 'success',
					message: 'Saved',
				});
				setState({
					...state,
					logoFileUrl: null,
					name: null,
					link: null,
				});
			} catch (error) {
				setLoading(false);
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		} else {
			try {
				const res = await request.put(`admin/social-media`, {
					data: {
						id: id?.slice(1),
						logoFileUrl,
						name,
						link,
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});
				setLoading(false);

				navigate(`/admin/social`);
				Toast({
					type: 'success',
					message: 'Edited',
				});
				dispatch({
					type: 'setSelected',
					payload: null,
				});
				setState({
					...state,
					logoFileUrl: null,
					name: null,
					link: null,
				});
			} catch (error) {
				setLoading(false);
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};
	const onChangeState = (e) => {
		const { name, value } = e?.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const getFile = async () => {
		if (state?.logoFileUrl) {
			try {
				const res = await request.get(state?.logoFileUrl);
				const blob = new Blob([res?.data], { type: 'image/svg+xml' });
				const url = URL.createObjectURL(blob);
				if (res?.data.search('svg') > 0) {
					setSvgUrl(url);
				} else {
					setSvgUrl(state?.logoFileUrl);
				}
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		}
	};

	useEffect(() => {
		getFile();
	}, [state?.logoFileUrl]);

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="ColumnBox">
				<p setState className="Header">
					{id ? 'Edit partner' : 'Add partner'}
				</p>
				<div className="TagBoxEnd" style={{ gap: '15px' }}>
					<Button2
						bg={'#fff'}
						width={'120px'}
						height={'42px'}
						color="#0B3A48"
						onClick={() => {
							navigate(-1);
							setState({
								...state,
								logoFileUrl: null,
								name: null,
								link: null,
							});
							dispatch({
								type: 'setSelected',
								payload: {},
							});
						}}
					>
						Cancel
					</Button2>
					<Button2
						bg={'#0B3A48'}
						width={'140px'}
						height={'42px'}
						color="#fff"
						onClick={saveQuestion}
					>
						{id ? 'Edit' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<div className="blogTwoInput">
						<div className="inputUpload">
							<Input2
								width={'100%'}
								header={'Name'}
								color={'#000'}
								hc={'#000'}
								name={'name'}
								onChange={onChangeState}
								value={name}
							/>
							<Input2
								width={'100%'}
								header={'Social media link'}
								color={'#000'}
								hc={'#000'}
								name={'link'}
								onChange={onChangeState}
								margin={'40px 0'}
								value={link}
							/>
						</div>
					</div>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddBlog;
