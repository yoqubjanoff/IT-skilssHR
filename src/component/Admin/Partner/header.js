import { useState } from 'react';
import { Wrapper } from './style';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { useBlogContex } from '../../../context/useContext';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import request from '../../../services/api';
import { Toast, Popup } from '../../../component/generics';
import { useEffect } from 'react';
// import Svgs from '../../../assets/icons/111.svg';
const ActionRenderer = ({ data }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [selected, dispatch] = useBlogContex();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/partners');
			dispatch({
				type: 'setBlogs',
				payload: res?.data?.data,
			});
			console.log('Response:', res);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/partners/${data?.id}`);
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
		const res = await request.get(`admin/partners/${data.id}`);
		dispatch({
			type: 'setSelected',
			payload: res?.data?.data,
		});
		navigate(`/admin/partner/edit/:${data?.id}`);
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
	// console.log(data?.logoPhotoUrl, 'data?.logoPhotoUrl');
	const [svgUrl, setSvgUrl] = useState('');
	const getFile = async () => {
		if (data?.logoPhotoUrl) {
			try {
				const res = await request.get(data?.logoPhotoUrl);
				const blob = new Blob([res?.data], { type: 'image/svg+xml' });
				const url = URL.createObjectURL(blob);
				if (res?.data.search('svg') > 0) {
					setSvgUrl(url);
				} else {
					setSvgUrl(data?.logoPhotoUrl);
				}
			} catch (error) {
				Swal.fire('error?.response?.data?.resultMsg');
			}
		}
	};

	useEffect(() => {
		getFile();
	}, [data?.logoPhotoUrl]);
	return (
		<Wrapper.Flex>
			<img className="img-partner" src={svgUrl} />
		</Wrapper.Flex>
	);
};

export const column = [
	{
		headerName: 'Image',
		cellRenderer: RendererPhoto,
		flex: 0.6,
	},

	{
		headerName: 'Company name',
		field: 'companyName',
		flex: 1,
	},
	{
		headerName: 'Web site Link',
		field: 'companySideLink',
		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,
		flex: 0.6,
	},
];
