import { useState } from 'react';
import { Wrapper } from './style';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { useBlogContex } from '../../../context/useContext';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import request from '../../../services/api';
import { Toast, Popup } from '../../../component/generics';
import { useEffect } from 'react';
const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [, dispatch] = useBlogContex();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/social-media');
			dispatch({
				type: 'setBlogs',
				payload: res?.data?.data,
			});
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`admin/social-media/${data?.id}`);
			getAdmins();
			Toast({
				type: 'success',
				message: 'Deleted !',
			});
		} catch (error) {
			Swal.fire(error?.response?.data?.resultMsg);
		}
	};

	const deleteFunc = async () => {
		Popup({
			title: 'Do you want to delete this blog ?',
			isConfirmedFunction: () => deleteF(),
			showCancelButton: true,
			type: 'question',
		});
	};
	const editFunc = async () => {
		const res = await request.get(`admin/social-media/${data.id}`);
		dispatch({
			type: 'setSelected',
			payload: res?.data?.data,
		});
		navigate(`/admin/social/edit/:${data?.id}`);
	};
	return (
		<Wrapper.Flex style={{ width: '100%', justifyContent: 'center' }}>
			<Wrapper.Box onClick={deleteFunc}>
				<TrashIcon />
			</Wrapper.Box>
			<Wrapper.Box onClick={editFunc}>
				<PenIcon />
			</Wrapper.Box>
		</Wrapper.Flex>
	);
};

const RendererPhoto = ({ data }) => {
	const [svgUrl, setSvgUrl] = useState('');
	const getFile = async () => {
		if (data?.logoFileUrl) {
			try {
				const res = await request.get(data?.logoFileUrl);
				const blob = new Blob([res?.data], { type: 'image/svg+xml' });
				const url = URL.createObjectURL(blob);
				if (res?.data.search('svg') > 0) {
					setSvgUrl(url);
				} else {
					setSvgUrl(data?.logoFileUrl);
				}
			} catch (error) {
				Swal.fire('error?.response?.data?.resultMsg');
			}
		}
	};

	useEffect(() => {
		getFile();
	}, [data?.logoFileUrl]);
	return (
		<Wrapper.Flex>
			<img className="img-partner" src={svgUrl} />
		</Wrapper.Flex>
	);
};

export const column = [
	{
		headerName: 'Name',
		field: 'name',
		flex: 1,
	},
	{
		headerName: 'Link',
		field: 'link',
		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,
		flex: 0.6,
	},
];
