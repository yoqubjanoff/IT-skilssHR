import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../../../services/api';
import { Button2, Select3, Toast, Popup } from '../../../../component/generics';
import Loading from '../../../../component/Loading';
import { Wrapper } from '../../Courses/style';
import { useGeneralContext } from '../../../../context/useContext';
import BgFile from '../../../../assets/icons/fileUpload.svg';

const CrudLogo = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [svgUrl, setSvgUrl] = useState('');
	const [{ loading, getLogos, selected }, dispatch] = useGeneralContext();

	const TypeData = [
		{
			logoType: 'HEAD',
			caption: 'Head',
			id: 1,
		},
		{
			logoType: 'GENERAL',
			caption: 'General',
			id: 2,
		},
		{
			logoType: 'CARD',
			caption: 'Card',
			id: 3,
		},
	];

	const initialFileUrlLink = '';
	const [fileUrlLink, setFileUrlLink] = useState();
	const [idOfAttachmentId, setIdOfAttachmentId] = useState('');
	const [logoInfo, setLogoInfo] = useState();
	const [isImageUploaded, setIsImageUploaded] = useState(
		Boolean(initialFileUrlLink),
	);

	const [state, setState] = useState({
		logoType: selected?.logoType || '',
		logoPhotoUrl: selected?.logoPhotoUrl || '',
		id: id || '',
		attachmentId: selected?.attachmentId || '',
	});

	const onChangeState = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const getLogo = async () => {
		try {
			const res = await request.get('admin/logo');
			setLogoInfo(res?.data?.data);
		} catch (error) {
			console.error('Error');
		}
	};

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
			const { id } = resData?.data?.data;
			if (resData) {
				Toast({
					type: 'success',
					message: 'Uploaded',
				});

				setIsImageUploaded(true);
			}
			setFileUrlLink(resData?.data?.data?.fileUrl);
			setState({
				...state,
				logoPhotoUrl: resData?.data?.data?.fileUrl,
			});
			setIdOfAttachmentId(id);
		} catch (error) {
			console.error('Error:', error);
			Toast({
				type: 'error',
				message: 'Error',
			});
		}
	};

	const handleSaveLogo = async () => {
		if (!fileUrlLink || !state.logoType) {
			Popup({
				type: 'warning',
				title: 'Please fill the fields !',
			});
		} else if (id) {
			try {
				const response = await request.put('admin/logo', {
					data: {
						attachmentId: idOfAttachmentId,
						logoPhotoUrl: fileUrlLink,
						logoType: state.logoType,
						id,
					},
				});
				if (response.status) {
					Toast({
						type: 'success',
						message: 'Edited !',
					});
					getLogos();
					navigate(-1);
				}
			} catch (error) {
				Popup({
					title: error?.response?.data?.resultMsg,
					type: 'warning',
				});
			}
		} else {
			try {
				const response = await request.post('admin/logo', {
					data: {
						attachmentId: idOfAttachmentId,
						logoPhotoUrl: fileUrlLink,
						logoType: state.logoType,
					},
				});
				if (response.status) {
					Toast({
						type: 'success',
						message: 'Created!',
					});
					getLogos();
					navigate(-1);
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
		getLogo();
	}, []);

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="ColumnBox">
				<p className="Header">{id ? 'Edit logo' : 'Add logo'}</p>
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
								blogPhotoUrl: null,
								title: '',
								content: '',
								attachmentId: '',
							});
							dispatch({ type: 'setSelected', payload: {} });
						}}
					>
						Cancel
					</Button2>
					<Button2
						bg={'#0B3A48'}
						width={'140px'}
						height={'42px'}
						color="#fff"
						onClick={handleSaveLogo}
					>
						{id ? 'Edit' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<Wrapper.Flex>
						<div className="Wrapper-inputs">
							<Wrapper.Flex>
								<Select3
									header={'Choose type'}
									width={'305px'}
									height={'60px'}
									options={TypeData}
									value={state?.logoType}
									onChange={(v) =>
										onChangeState({
											target: {
												name: 'logoType',
												value: v?.logoType || '',
											},
										})
									}
								></Select3>
							</Wrapper.Flex>
						</div>

						<div className="logoInp" style={{ position: 'relative' }}>
							{svgUrl || isImageUploaded ? (
								<img
									src={svgUrl || fileUrlLink}
									alt="Uploaded File"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
										display: svgUrl || isImageUploaded ? 'block' : 'none',
									}}
								/>
							) : (
								<img
									src={BgFile}
									alt="Background File"
									style={{
										width: '60px',
										height: '60px',
										objectFit: 'cover',
										position: 'absolute',
										top: '60px',
										left: '120px',
										display: isImageUploaded ? 'none' : 'block',
									}}
								/>
							)}
							<input
								style={{
									opacity: 0,
									width: '311px',
									height: '178px',
									position: 'absolute',
									top: 0,
									left: 0,
								}}
								type="file"
								accept=".png, .jpg, .jpeg"
								onChange={handleInputChange}
							/>
						</div>
					</Wrapper.Flex>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default CrudLogo;
