import React, { useState, useRef, useEffect } from 'react';
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
import TextareaComponent from '../../../../component/generics/Textarea';

const AddBlog = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useBlogContex();
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		title: selected?.title || '',
		content: selected?.content || ``,
		blogPhotoUrl: selected?.blogPhotoUrl || null,
		attachmentId: selected?.attachmentId || '',
		isActive: selected?.isActive || false,
	});

	const [urlFormData, setUrlFormData] = useState();
	const [idOfAttachmentId, setIdOfAttachmentId] = useState('');
	const [fileName, setFileName] = useState('');

	const { isActive, title, content } = state;

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
			const { fileName } = resData?.data?.data;
			const { id } = resData?.data?.data;
			if (resData) {
				Toast({
					type: 'success',
					message: 'Yuklandi!',
				});
			}
			// e.target.value = null;

			setUrlFormData(fileUrl);
			setIdOfAttachmentId(id);
			setFileName(fileName);
		} catch (error) {
			console.log(error);
		}
	};

	const saveQuestion = async () => {
		setLoading(true);
		if (!id) {
			if (title) {
				try {
					const res = await request.post('admin/blog', {
						data: {
							blogPhotoUrl: urlFormData,
							title,
							isActive,
							content,
							attachmentId: idOfAttachmentId,
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});
					setLoading(false);

					navigate('/admin/blog');
					Toast({
						type: 'success',
						message: 'Saved',
					});
					setState({
						...state,
						blogPhotoUrl: null,
						title: '',
						isActive,
						content: '',
						attachmentId: '',
					});
				} catch (error) {
					setLoading(false);
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			} else {
				setLoading(false);

				Popup({
					title: 'Please, fill the inputs',
					type: 'warning',
				});
			}
		} else {
			setFileName(state.attachment);
			if (title) {
				try {
					const res = await request.put(`admin/blog`, {
						data: {
							id: id.slice(1),
							blogPhotoUrl: urlFormData,
							title,
							isActive,
							content,
							attachmentId: idOfAttachmentId,
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});
					setLoading(false);

					navigate(`/admin/blog`);
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
						blogPhotoUrl: null,
						title: '',
						content: '',
						attachmentId: '',
					});
				} catch (error) {
					setLoading(false);
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			} else {
				setLoading(false);

				Popup({
					title: 'Please, fill the inputs',
					type: 'warning',
				});
			}
		}
	};

	const handleTitleChange = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="ColumnBox">
				<p setState className="Header">
					{id ? 'Edit blog' : 'Add blog'}
				</p>
				<div className="TagBoxEnd" style={{ gap: '15px' }}>
					<Wrapper.Flex>
						<Switch
							onClick={(v) => setState({ ...state, isActive: v })}
							checked={isActive ? 1 : 0}
						/>{' '}
						Active
					</Wrapper.Flex>
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
						{id ? 'Edit blogs	' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable urlFormData={urlFormData}>
					<div className="blogTwoInput">
						<div className="flex flex-col gap-[35px]">
							<Input2
								width={'100%'}
								placeholder={'title'}
								header={'Title'}
								color={'#000'}
								hc={'#000'}
								name={'title'}
								onChange={handleTitleChange}
								value={title}
							/>
							<TextareaComponent
								className="textarea"
								name="content"
								header={'Content'}
								onChange={handleTitleChange}
								value={content}
							/>
						</div>

						<div
							className="Wrapper-input-f"
							style={{
								width: '311px',
								height: '178px',
								backgroundImage: `url('${
									urlFormData ? urlFormData : state.blogPhotoUrl
								}')`,
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
								{urlFormData || state.blogPhotoUrl ? (
									<div></div>
								) : (
									'Upload a cover'
								)}
							</label>
							<img src={urlFormData || state.blogPhotoUrl ? '' : BgFile} />
							<p htmlFor>{fileName ? fileName : ''}</p>
						</div>
					</div>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddBlog;
