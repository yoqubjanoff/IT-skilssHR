import { Wrapper } from './style';
import { TrashIcon, PenIcon } from '../../../component/generics/genericIcons';
import { Toast, Popup } from '../../../component/generics';
import { useUserContex } from '../../../context/useContext';
import { useNavigate } from 'react-router-dom';
import request from '../../../services/api';

const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [, dispatch] = useUserContex();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/accounts/all');
			dispatch({
				type: 'setUserList',
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
			const res = await request.delete(`admin/accounts/${data?.id}`);

			getAdmins();
			Toast({
				type: 'success',
				message: 'Deleted!',
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
			title: 'Do you want to delete ?',
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
		navigate(`/admin/users/edit/${data?.id}`);
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
const RendererName = ({ data }) => {
	return <Wrapper.Flex>{data?.firstName + ' ' + data?.lastName}</Wrapper.Flex>;
};

export const column = [
	{
		headerName: 'Name and Surname',
		cellRenderer: RendererName,
		flex: 1,
	},

	{
		headerName: 'Role',
		// cellRenderer: () => Renderer('Customes support'),
		field: 'accountRole',

		flex: 1,
	},

	{
		headerName: 'Email address',
		// cellRenderer: () => Renderer('nigora4957@gmial.com'),
		field: 'email',

		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,

		flex: 1,
	},
];
