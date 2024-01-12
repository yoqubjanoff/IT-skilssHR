import { Wrapper } from './style';
import { PenIcon, TrashIcon } from '../../../component/generics/genericIcons';
import { Modal2, Button, Toast, Popup } from '../../../component/generics/';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import request from '../../../services/api';
import { useParams } from 'react-router-dom';
import { useTestContex } from '../../../context/useContext';
import moment from 'moment';
const Renderer = (val) => {
	return <h5>{val}</h5>;
};
const RendererName = ({ data }) => {
	return (
		<Wrapper.TitleTruncate>
			<h5>{data?.questionCaption}</h5>
		</Wrapper.TitleTruncate>
	);
};
const ActionRenderer = ({ data }) => {
	const { id, name } = useParams();
	const [, dispatch] = useTestContex();
	const { search } = useLocation();

	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const getQuestion = async () => {
		try {
			const res = await request.get(
				`admin/questions/all${search || '?'}&subDirectionId=${id}&language=${
					data?.questionLanguage || 'EN'
				}`,
			);
			dispatch({
				type: 'setQuestion',
				payload: res.data?.data,
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const editFunc = () => {
		dispatch({
			type: 'setLanguage',
			payload: data?.questionLanguage,
		});
		dispatch({
			type: 'setSelectedQuestion',
			payload: data,
		});
		navigate(`/admin/edit-question/:${data?.directionId}/${name}`);
	};

	const deleteF = async () => {
		try {
			const res = await request.delete(`admin/questions/${data?.id}`);
			getQuestion();
			setOpen(false);
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
			title: 'Do you want to delete this question ?',
			isConfirmedFunction: () => deleteF(),
			showCancelButton: true,
			type: 'question',
		});
	};

	return (
		<Wrapper.Flex style={{ width: '100%', justifyContent: 'center' }}>
			<Modal2 open={open}>
				<Wrapper.Flex style={{ justifyContent: 'center' }}>
					<Button
						width={'100px'}
						height={'52px'}
						bg={'#F5F5F5'}
						color="#0B3A48"
						onClick={() => setOpen(false)}
					>
						No
					</Button>
					<Button
						width={'100px'}
						height={'52px'}
						bg={'#000'}
						color="#fff"
						onClick={deleteFunc}
					>
						Yes
					</Button>
				</Wrapper.Flex>
			</Modal2>

			<Wrapper.Box>
				<PenIcon onClick={editFunc} />
			</Wrapper.Box>
			<Wrapper.Box>
				<TrashIcon onClick={deleteFunc} />
			</Wrapper.Box>
		</Wrapper.Flex>
	);
};
const TestDate = ({ data }) => {
	return <>{moment(data?.createdAt).format('DD.MM.YYYY')}</>;
};
export const column = [
	{
		headerName: 'Question name',
		cellRenderer: RendererName,
		flex: 1.5,
	},
	{
		headerName: 'Question type',
		field: 'forTestType',
		flex: 1,
	},
	{
		headerName: 'number of answers',
		cellRenderer: () => Renderer('4 answers'),

		flex: 1,
	},

	{
		headerName: 'Created date',
		cellRenderer: TestDate,

		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: ActionRenderer,

		flex: 1,
	},
];
