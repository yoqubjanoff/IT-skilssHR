import React, { useState } from 'react';
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
import { useFaqContext } from '../../../../context/useContext';
import TextareaComponent from '../../../../component/generics/Textarea';

const AddFaq = () => {
	const navigate = useNavigate();
	const [{ selected }, dispatch] = useFaqContext();
	const { id } = useParams();
	const [state, setState] = useState({
		titleUz: selected?.titleUz || '',
		titleRu: selected?.titleRu || '',
		titleEn: selected?.titleEn || '',
		contentUz: selected?.contentUz || '',
		contentEn: selected?.contentEn || '',
		contentRu: selected?.contentRu || '',
		isActive: selected?.isActive || false,
	});

	const {
		titleUz,
		titleRu,
		titleEn,
		contentUz,
		contentEn,
		contentRu,
		isActive,
	} = state;

	const saveQuestion = async () => {
		if (!id) {
			if (
				titleUz &&
				titleRu &&
				titleEn &&
				contentUz &&
				contentEn &&
				contentRu
			) {
				try {
					const res = await request.post('admin/FAQ', {
						data: state,
						transactionTime: '2023-08-14T15:43:01.8152087',
					});

					navigate('/admin/faq');
					Toast({
						type: 'success',
						message: 'Saved',
					});
					setState({});
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			} else {
				Popup({
					title: 'Please fill the field !',
					type: 'warning',
				});
			}
		} else {
			if (
				titleUz &&
				titleRu &&
				titleEn &&
				contentUz &&
				contentEn &&
				contentRu
			) {
				try {
					const res = await request.post('admin/FAQ', {
						data: {
							id,
							...state,
						},
						transactionTime: '2023-08-14T15:43:01.8152087',
					});
					navigate('/admin/faq');
					Toast({
						type: 'success',
						message: 'Edited',
					});

					setState({});
				} catch (error) {
					Popup({
						title: error?.response?.data?.resultMsg,
						type: 'warning',
					});
				}
			} else {
				Popup({
					title: 'Please fill the field !',
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
	const handleTextarea = (e) => {
		const { name, value } = e?.target;
		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<Wrapper>
			<div className="ColumnBox">
				<div className="dflex" style={{ display: 'flex', gap: '12px' }}>
					<p className="Header">{id ? 'Edit FAQ' : 'Add FAQ'}</p>
				</div>
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
						{id ? 'Save Changes	' : 'Submit'}
					</Button2>
				</div>
				<Wrapper.WrapTable>
					<Input2
						width={'761px'}
						header={'Title uz'}
						color={'#000'}
						hc={'#000'}
						name={'titleUz'}
						onChange={onChangeState}
						value={titleUz}
						margin={'17px 0 0 0'}
					/>
					<TextareaComponent
						className="textarea"
						name="contentUz"
						onChange={handleTextarea}
						value={contentUz}
						header={'Content uz'}
					/>

					<Input2
						width={'761px'}
						header={'Title rus'}
						color={'#000'}
						hc={'#000'}
						name={'titleRu'}
						onChange={onChangeState}
						value={titleRu}
					/>
					<TextareaComponent
						className="textarea"
						name="contentRu"
						onChange={handleTextarea}
						value={contentRu}
						header={'Content rus'}
					/>

					<Input2
						width={'761px'}
						header={'Title en'}
						color={'#000'}
						hc={'#000'}
						name={'titleEn'}
						onChange={onChangeState}
						value={titleEn}
					/>
					<TextareaComponent
						className="textarea"
						name="contentEn"
						onChange={handleTextarea}
						value={contentEn}
						header={'Content en'}
					/>
				</Wrapper.WrapTable>
			</div>
		</Wrapper>
	);
};

export default AddFaq;
