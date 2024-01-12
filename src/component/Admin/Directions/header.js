import { Wrapper } from './style';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { useUserContex } from '../../../context/useContext';
import { useNavigate } from 'react-router-dom';
import request from '../../../services/api';
import { Switch, Toast, Popup } from '../../../component/generics';


const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [, dispatch] = useUserContex();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/directions/all');
			dispatch({
				type: 'setDirections',
				payload: res?.data?.data,
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/directions/${data?.id}`);
			getAdmins();
			Toast({
				type: 'success',
				message: 'Deleted !',
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const deleteFunc = async () => {
		Popup({
			title: 'Do you want to delete this direction ?',
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
		navigate(`/admin/direction/edit/:${data?.id}`);
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
const RendererMaindirection = ({ data }) => {
	return <Wrapper.Flex>{data?.caption}</Wrapper.Flex>;
};

const RendererSubdirections = ({ data }) => {
	return (
		<Wrapper.Flex>
			{data?.subDirections?.[0] && (
				<Wrapper.SubDirections>
					{data?.subDirections?.[0]?.caption}
				</Wrapper.SubDirections>
			)}
			{data?.subDirections?.[1] && (
				<Wrapper.SubDirections>
					{data?.subDirections?.[1]?.caption}
				</Wrapper.SubDirections>
			)}
			{data?.subDirections?.[2] && (
				<Wrapper.SubDirections>
					{data?.subDirections?.[2]?.caption}
				</Wrapper.SubDirections>
			)}
			{data?.subDirections?.length - 3 >= 1 && (
				<Wrapper.Count>{`+${data?.subDirections?.length - 3}`}</Wrapper.Count>
			)}
		</Wrapper.Flex>
	);
};
const RendererStatus = ({ data }) => {
	const statusChange = async (v) => {
		try {
			const res = await request.post('admin/directions', {
				data: {
					...data,
					isActive: v,
				},
				transactionTime: '2023-08-14T15:43:01.8152087',
			});
			Toast({
				type: 'success',
				message: 'Changed',
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
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

const Renderer = (val) => {
	return <h5>{val}</h5>;
};
export const column = [
	{
		headerName: 'Main  direction',
		cellRenderer: RendererMaindirection,
		flex: 0.6,
	},

	{
		headerName: 'Number of sub directions',
		cellRenderer: RendererSubdirections,
		flex: 1.5,
	},

	{
		headerName: 'Test countdown standart/detailed',
		cellRenderer: () => Renderer('25:00/120:00'),
		flex: 1,
	},
	{
		headerName: 'Status',
		cellRenderer: RendererStatus,
		flex: 0.5,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,
		flex: 1,
	},
];
