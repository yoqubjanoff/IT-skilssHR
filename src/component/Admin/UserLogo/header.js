import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from '../Courses/style';
import request from '../../../services/api';
import { Toast, Popup } from '../../../component/generics';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { useGeneralContext } from '../../../context/useContext';

const RendererPhoto = ({ data }) => {
	return (
		<Wrapper.Flex>
			<img className="blogImgRen" src={data?.logoPhotoUrl} alt="" />
		</Wrapper.Flex>
	);
};

const RendererLogo = ({ data }) => {
	return <Wrapper.Flex>{data?.logoType}</Wrapper.Flex>;
};

const ActionRendererLogo = ({ data }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [{ getLogos }, dispatch] = useGeneralContext();

	const deleteF = async () => {
		try {
			const res = await request.delete(`admin/logo/${data?.id}`);
			getLogos();
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

	const editFunc = () => {
		dispatch({
			type: 'setSelected',
			payload: data,
		});
		navigate(`/admin/logo/update/${data?.id}`);
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

export const LogoColumn = [
	{
		headerName: 'Main  direction',
		cellRenderer: RendererPhoto,
		flex: 0.6,
	},
	{
		headerName: 'Type',
		cellRenderer: RendererLogo,
		flex: 0.6,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRendererLogo,
		flex: 0.5,
	},
];
