import { Wrapper } from './style';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { useFaqContext } from '../../../context/useContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import request from '../../../services/api';
import { Switch, Toast, Popup } from '../../../component/generics';

const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [, dispatch] = useFaqContext();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/FAQ');
			dispatch({
				type: 'setFaqAllData',
				payload: res?.data?.data,
			});
		} catch (error) {
			console.error('Error');
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/FAQ/${data?.id}`);
			getAdmins();
			Toast({
				type: 'success',
				message: 'Deleted !',
			});
		} catch (error) {
			Popup({
				title: error,
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
		navigate(`/admin/faq/edit/${data?.id}`);
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

const RendererStatus = ({ data }) => {
	const statusChange = async (v) => {
		try {
			const res = await request.post('admin/FAQ', {
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
			Swal.fire(error?.response?.data?.resultMsg);
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

const RendererContext = ({ data }) => {
	return (
		<Wrapper.FaqtitleBox>
			<h2 className="faqtitle">{data?.titleUz}</h2>
			<h3 className="faqdesc">{data?.contentUz}</h3>
		</Wrapper.FaqtitleBox>
	);
};
export const column = [
	{
		headerName: 'Title',
		cellRenderer: RendererContext,
		field: 'content',
		flex: 7.5,
	},
	{
		headerName: 'Status',
		cellRenderer: RendererStatus,
		flex: 1.2,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,
		flex: 1.5,
	},
];
