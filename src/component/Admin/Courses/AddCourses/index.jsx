import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextareaComponent from '../../../../component/generics/Textarea';
import { useCoursContext } from '../../../../context/CoursesContext';
import BgFile from '../../../../assets/icons/fileUpload.svg';
import Loading from '../../../../component/Loading';
import request from '../../../../services/api';
import { Wrapper } from './style';
import {
	Button2,
	Input2,
	Switch,
	Select3,
	Popup,
	Toast,
} from '../../../../component/generics';

const AddCourses = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useCoursContext();
	const { id } = useParams();
	const [subOption, setSubOption] = useState([]);
	const [loading, setLoading] = useState(false);
	const [option, setOption] = useState([]);
	const initialAttachmentId = selected?.attachment?.id || '';
	const initialFileUrlLink = selected?.attachment?.fileURL || '';
	const [state, setState] = useState({
		courseName: selected?.courseName || '',
		courseOwner: selected?.courseOwner || '',
		isActive: selected?.isActive || false,
		description: selected?.description || '',
		redirectUrl: selected?.redirectUrl || '',
		subDirection: selected?.subDirection || null,
		attachmentId: initialAttachmentId,
		subDirections: selected?.subDirections || '',
	});

	const [idOfAttachmentId, setIdOfAttachmentId] = useState('');
	const [fileUrlLink, setFileUrlLink] = useState(initialFileUrlLink);
	const [isImageUploaded, setIsImageUploaded] = useState(
		Boolean(initialFileUrlLink),
	);
	const getOption = async () => {
		try {
			const res = await request.get('admin/directions/all');
			setOption(res.data?.data);
		} catch (error) {
			console.error('Error:', error);
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
			const { fileURL } = resData?.data?.data;
			if (resData) {
				Toast({
					type: 'success',
					message: 'Uploaded',
				});

				setIsImageUploaded(true);
			}
			setFileUrlLink(resData?.data?.data?.fileUrl);
			setIdOfAttachmentId(id);
		} catch (error) {
			console.error('Error:', error);
			Popup({
				type: 'error',
				message: error.message || 'An error occurred',
			});
		}
	};

	const saveQuestion = async () => {
		setLoading(true);
		if (!id) {
			if (state?.courseName && state?.courseOwner) {
				try {
					await request.post('admin/courses', {
						data: {
							attachmentId: idOfAttachmentId,
							courseName: state.courseName,
							courseOwner: state.courseOwner,
							description: state.description,
							redirectUrl: state.redirectUrl,
							isActive: state.isActive,
							subDirectionId: state.subDirection,
						},
					});

					setLoading(false);

					Toast({
						type: 'success',
						message: 'Created',
					});

					setState({
						...state,
						courseName: '',
						courseOwner: '',
						description: '',
						redirectUrl: '',
						subDirection: null,
						attachmentId: '',
					});

					navigate('/admin/courses');
				} catch (error) {
					console.error('Error:', error);
					Toast({
						type: 'error',
						message: 'Upload photo required',
					});
					// Swal.fire(error?.response?.data?.resultMsg);
					setLoading(false);
				}
			} else {
				setLoading(false);
				Toast({
					type: 'error',
					message: 'All fields are required',
				});
			}
		} else {
			if (state.courseName && state.courseOwner && state.subDirection) {
				try {
					const { subDirection, ...putData } = state;

					await request.put(`admin/courses`, {
						data: {
							...putData,
							id: id.slice(1),
							// attachmentId: idOfAttachmentId || initialAttachmentId,
							attachmentId: selected?.attachmentId,
							subDirectionId: state.subDirection,
						},
					});

					setLoading(false);
					Toast({
						type: 'success',
						message: 'Edited',
					});
					setState({
						...state,
						courseName: '',
						courseOwner: '',
						isActive: false,
						description: '',
						redirectUrl: '',
						subDirection: null,
						attachmentId: '',
					});

					// Optionally, you can navigate to another page here if needed.
					navigate(`/admin/courses`);
				} catch (error) {
					console.error('Error:', error);
					setLoading(false);
				}
			} else {
				setLoading(false);
				Toast({
					type: 'error',
					message: 'All fields are required',
				});
			}
		}
	};

	const onChangeState = (e) => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	useEffect(() => {
		getOption();
	}, []);

	useEffect(() => {
		if (state.subDirections) {
			const filteredOptions = option.find(
				(opt) => opt.caption === state.subDirections,
			)?.subDirections;
			setSubOption(filteredOptions || []);
		}
	}, [state.subDirections]);

	return (
		<Wrapper>
			{loading && <Loading />}
			<div className="ColumnBox">
				<p className="Header">{id ? 'Edit blog' : 'Add courses'}</p>
				<div className="TagBoxEnd" style={{ gap: '15px' }}>
					<Wrapper.Flex>
						<Switch
							onClick={(v) => setState({ ...state, isActive: v })}
							checked={state.isActive}
						/>
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
						{id ? 'Edit' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<Wrapper.Flex>
						<div className="Wrapper-inputs">
							<Wrapper.Flex>
								<Input2
									header={'Course name'}
									margin={'46px 0 46px 0'}
									width={'305px'}
									height={'60px'}
									onChange={(e) =>
										onChangeState({
											target: {
												name: 'courseName',
												value: e.target.value,
											},
										})
									}
									value={state?.courseName}
								/>
								<Input2
									header={'Company name'}
									margin={'46px 0 46px 4px'}
									width={'305px'}
									height={'60px'}
									onChange={(e) =>
										onChangeState({
											target: {
												name: 'courseOwner',
												value: e.target.value,
											},
										})
									}
									value={state?.courseOwner}
								/>
							</Wrapper.Flex>
							<Wrapper.Flex>
								<Select3
									header={'Choose direction'}
									width={'305px'}
									height={'60px'}
									options={option}
									value={state?.subDirections}
									// value={selected?.subDirectionId}
									onChange={(v) =>
										onChangeState({
											target: {
												name: 'subDirections',
												value: v?.caption || '',
											},
										})
									}
								></Select3>
								<Select3
									header={'Choose sub-direction'}
									width={'305px'}
									height={'60px'}
									options={subOption}
									value={state?.subDirection?.value}
									onChange={(v) =>
										onChangeState({
											target: {
												name: 'subDirection',
												value: v?.id || null,
											},
										})
									}
								></Select3>
							</Wrapper.Flex>
						</div>

						<div className="Wrapper-input-f" style={{ position: 'relative' }}>
							{isImageUploaded ? (
								<img
									src={fileUrlLink}
									alt="Uploaded File"
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
										display: isImageUploaded ? 'block' : 'none',
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
							{/* )} */}
						</div>
					</Wrapper.Flex>
					<Input2
						header={'Add link'}
						width={'634px'}
						height={'60px'}
						margin={'46px 0 46px 0'}
						onChange={(e) =>
							onChangeState({
								target: {
									name: 'redirectUrl',
									value: e.target.value,
								},
							})
						}
						value={state.redirectUrl}
					/>
					<TextareaComponent
						header={'Description'}
						width={'634px'}
						height={'132px'}
						onChange={(e) =>
							onChangeState({
								target: {
									name: 'description',
									value: e.target.value,
								},
							})
						}
						value={state.description}
					/>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddCourses;
