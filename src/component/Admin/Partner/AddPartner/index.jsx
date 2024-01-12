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
	const editorRef = useRef();
	const [state, setState] = useState({
		logoPhotoUrl: selected?.logoPhotoUrl || null,
		attachment: selected?.attachment || null,
		attachmentId: selected?.attachmentId || null,
		companyName: selected?.companyName || null,
		companySideLink: selected?.companySideLink || null,
	});

	const { logoPhotoUrl, companyName, companySideLink } = state;

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
				logoPhotoUrl: fileUrl,
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
				const res = await request.post('admin/partners', {
					data: {
						logoPhotoUrl,
						companyName,
						companySideLink,
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});
				setLoading(false);

				navigate('/admin/partners');
				Toast({
					type: 'success',
					message: 'Saved',
				});
				setState({
					...state,
					logoPhotoUrl: null,
					attachment: null,
					attachmentId: null,
					companyName: null,
					companySideLink: null,
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
				const res = await request.put(`admin/partners`, {
					data: {
						id: id?.slice(1),
						logoPhotoUrl,
						companyName,
						companySideLink,
					},
					transactionTime: '2023-08-14T15:43:01.8152087',
				});
				setLoading(false);

				navigate(`/admin/partners`);
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
					logoPhotoUrl: null,
					attachment: null,
					attachmentId: null,
					companyName: null,
					companySideLink: null,
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
		if (state?.logoPhotoUrl) {
			try {
				const res = await request.get(state?.logoPhotoUrl);
				const blob = new Blob([res?.data], { type: 'image/svg+xml' });
				const url = URL.createObjectURL(blob);
				if (res?.data.search('svg') > 0) {
					setSvgUrl(url);
				} else {
					setSvgUrl(state?.logoPhotoUrl);
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
	}, [state?.logoPhotoUrl]);

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
								logoPhotoUrl: null,
								attachment: null,
								attachmentId: null,
								companyName: null,
								companySideLink: null,
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
						{id ? 'Edit partner	' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<div className="blogTwoInput">
						<div className="inputUpload">
							<Input2
								width={'100%'}
								placeholder={'title'}
								header={'Company Name'}
								color={'#000'}
								hc={'#000'}
								name={'companyName'}
								onChange={onChangeState}
								value={companyName}
							/>
							<Input2
								width={'100%'}
								placeholder={'title'}
								header={'Company Website link'}
								color={'#000'}
								hc={'#000'}
								name={'companySideLink'}
								onChange={onChangeState}
								margin={'40px 0'}
								value={companySideLink}
							/>
						</div>
						<div
							className="Wrapper-input-f"
							style={{
								width: '311px',
								height: '178px',
								backgroundImage: `url('${svgUrl}')`,
								backgroundSize: 'auto',
							}}
						>
							<input
								style={{
									opacity: 0,
								}}
								name={'blogPhotoUrl'}
								type="file"
								id="file"
								onChange={handleInputChange}
							/>
							<label htmlFor="file" style={{ cursor: 'pointer' }}>
								{svgUrl ? <div></div> : 'Upload a cover'}
							</label>
							<img src={svgUrl ? '' : BgFile} />
						</div>
					</div>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddBlog;
