import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { Switch, Toast, Popup } from '../../../component/generics';
import { CourseContext } from '../../../context/CoursesContext';
import request from '../../../services/api';
import { Wrapper } from './style';

const ActionRenderer = ({ data }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [, dispatch] = useContext(CourseContext);

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/courses');
			dispatch({
				type: 'setCourses',
				payload: res?.data?.data,
			});
			console.log('Response:', res);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/courses/${data?.id}`);
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

	const editFunc = () => {
		dispatch({
			type: 'setSelected',
			payload: data,
		});
		console.log(data);
		navigate(`/admin/courses/update/:${data?.id}`);
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
	if (data && data.attachment) {
		return (
			<Wrapper.Flex>
				<img className="blogImgRen" src={data?.attachment?.fileURL} alt="" />
			</Wrapper.Flex>
		);
	} else {
		return null; // Don't display anything when adding a new course
	}
};

const RendererTitle = ({ data }) => {
	return <Wrapper.Flex>{data?.courseName}</Wrapper.Flex>;
};
const RendererLogo = ({ data }) => {
	return <Wrapper.Flex>{data?.logoType}</Wrapper.Flex>;
};

const RendererDescription = ({ data }) => {
	return <Wrapper.Flex>{data?.description}</Wrapper.Flex>;
};

const RendererLink = ({ data }) => {
	return <Wrapper.Flex>{data?.redirectUrl}</Wrapper.Flex>;
};

const RendererStatus = ({ data }) => {
	const navigate = useNavigate();

	const statusChange = async (v) => {
		try {
			const res = await request.patch(
				`admin/courses/update/${data.id}?activate=${v}`,
			);
			Toast({
				type: 'success',
				message: 'Changed',
			});

			if (v === 1) {
				navigate('/');
			}
		} catch (error) {
			Swal.fire(error?.code);
			console.log(error);
		}
	};

	return (
		<Wrapper.Flex>
			<Switch
				onClick={(e) => statusChange(e)}
				checked={data?.isActive ? 1 : 0}
			/>{' '}
			Active
		</Wrapper.Flex>
	);
};

const ActionRendererLogo = ({ data }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [, dispatch] = useContext(CourseContext);

	const getLogos = async () => {
		try {
			const res = await request.get('admin/logo');

			console.log('Response:', res);
		} catch (error) {
			console.error('Error:', error);
		}
	};

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
		// dispatch({
		// 	type: 'setSelected',
		// 	payload: data,
		// });
		console.log(data);
		navigate(`/admin/logo/update/:${data?.id}`);
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

export const column = [
	{
		headerName: 'Image',
		cellRenderer: RendererPhoto,
		flex: 0.6,
	},
	{
		headerName: 'Cource name',
		field: 'courseName',
		flex: 0.6,
	},
	{
		headerName: 'Description',
		cellRenderer: RendererDescription,
		flex: 1.8,
	},
	{
		headerName: 'Link',
		cellRenderer: RendererLink,
		flex: 0.6,
	},
	{
		headerName: 'Status',
		cellRenderer: RendererStatus,
		flex: 0.5,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,
		flex: 0.5,
	},
];

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
