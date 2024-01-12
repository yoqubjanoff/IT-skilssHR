import { useState, useRef, useEffect } from 'react';
import { Wrapper } from './style';
import {
	UserIcon,
	CommentIcon,
	Check2Icon,
	CloseIcon,
	MoreIcon,
} from '../../../component/generics/genericIcons';
import { Popup, Toast } from '../../../component/generics/';
import request from '../../../services/api';
import Loading from '../../../component/Loading';
import { useZoomContext } from '../../../context/useContext';
import Accpect from '../../../assets/img/accept.png';
import moment from 'moment';
import { Dropdown } from 'antd';
const NameRenderer = ({ data }) => {
	return (
		<Wrapper.Flex>
			<Wrapper.BoxImg url={data?.userTalent?.profilePhotoURL}>
				{!data?.userTalent?.profilePhotoURL && <UserIcon />}
			</Wrapper.BoxImg>
			{data?.userTalent?.firstName + ' ' + data?.userTalent?.lastName}
		</Wrapper.Flex>
	);
};

const RendererPhone = ({ data }) => {
	return (
		<h5>{data?.userTalent?.phoneNumber && data?.userTalent?.phoneNumber}</h5>
	);
};
const RendererEmail = ({ data }) => {
	return <h5>{data?.userTalent?.email && data?.userTalent?.email}</h5>;
};
const RendererDirection = ({ data }) => {
	return (
		<h5>
			{data?.userTalent?.directionCaption && data?.userTalent?.directionCaption}
		</h5>
	);
};
const RendererSubDirection = ({ data }) => {
	return (
		<h5>
			{data?.userTalent?.subDirectionCaption &&
				data?.userTalent?.subDirectionCaption}
		</h5>
	);
};

const TypeRenderer = ({ data }) => {
	return (
		<Wrapper.Flex>
			<Wrapper.Mini active={!data?.meetingType === 'ONLINE' ? 1 : 0} />
			{data?.meetingType === 'ONLINE' ? 'Online' : 'Offline'}
		</Wrapper.Flex>
	);
};
const IdRenderer = ({ id }) => {
	return <h5>#{id}</h5>;
};

const TimeRenderer = ({ data }) => {
	return (
		<h5>{data?.meetingTime && moment(data?.meetingTime).format('lll')}</h5>
	);
};

const RendererAction = ({ data }) => {
	const [hover, setHover] = useState(false);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [{ getList }] = useZoomContext();
	const myRef = useRef(null);
	const acceptedFunc = async (e) => {
		setLoading(true);
		try {
			const res = await request.post(`admin/zoom-requests/accept/${data?.id}`, {
				data: {
					zoomLink: e,
				},
			});
			Toast({
				type: 'success',
				message: 'Accepted',
			});
			getList();
			setLoading(false);
		} catch (error) {
			setLoading(false);
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const declinedFunc = async (e) => {
		setLoading(true);
		try {
			const res = await request.post(
				`admin/zoom-requests/decline/${data?.id}`,
				{
					data: {
						decliningReason: e,
					},
				},
			);
			getList();
			Toast({
				type: 'success',
				message: 'Declined',
			});
			setLoading(false);
		} catch (error) {
			setLoading(false);
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const showWarning = () => {
		Popup({
			title: 'Please enter the link',
			type: 'warning',
		});
	};
	const clickClose = () => {
		Popup({
			title: 'Are you sure to cancel zoom meeting?',
			type: 'warning',
			showCancelButton: true,
			input: 'textarea',
			placeholder: 'Add note (optional)',
			preConfirm: (value) => declinedFunc(value),
		});
	};
	const clickAccept = () => {
		Popup({
			title: 'Are you sure to accept zoom meeting?',
			showCancelButton: true,
			imageUrl: Accpect,
			type: 'info',
			input: 'text',
			placeholder: 'Paste zoom link here',
			preConfirm: (value) => (value ? acceptedFunc(value) : showWarning()),
		});
	};
	const itemsDropdown = [
		{
			label: (
				<Wrapper.TicketTitle>Remove verification ticket</Wrapper.TicketTitle>
			),
			key: '0',
		},
	];

	useEffect(() => {
		if (open) {
			myRef?.current?.focus();
		}
	}, [open]);

	return (
		<Wrapper.Flex style={{ width: '100%', justifyContent: 'center' }}>
			{loading && <Loading />}
			{data?.requestInfo && (
				<Wrapper.BoxIcon
					type={'comment'}
					onMouseOver={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<Wrapper.Comment hover={hover ? 1 : 0}>
						{data?.requestInfo}
					</Wrapper.Comment>
					<CommentIcon />
				</Wrapper.BoxIcon>
			)}

			{data?.status !== 'DECLINED' &&
				data?.status !== 'ACCEPTED' &&
				data?.status !== 'CONDUCTED' && (
					<Wrapper.BoxIcon type={'close'} onClick={clickClose}>
						<CloseIcon color={'#FF5151'} />
					</Wrapper.BoxIcon>
				)}

			{data?.status === 'NEW' && (
				<Wrapper.BoxIcon onClick={clickAccept}>
					<Check2Icon />
				</Wrapper.BoxIcon>
			)}
			{/* ticket */}

			<Wrapper.Ticket
				open={open ? 1 : 0}
				ref={myRef}
				onClick={(e) => {
					console.log('bosildi');
				}}
				onBlur={() => {
					setOpen(false);
				}}
				tabIndex={0}
				style={{ outline: 'none' }}
			>
				Remove verification ticket
			</Wrapper.Ticket>
			{data?.status !== 'CONDUCTED' && (
				<Dropdown
					menu={{
						items: itemsDropdown,
					}}
					trigger={['click']}
				>
					<MoreIcon />
				</Dropdown>
			)}
		</Wrapper.Flex>
	);
};

export const column = [
	{
		headerName: 'ID',
		width: '60px',
		cellRenderer: IdRenderer,
	},
	{
		headerName: 'Name and Surname',
		cellRenderer: NameRenderer,
		flex: 1.5,
	},
	{
		headerName: 'Meeting type',
		cellRenderer: TypeRenderer,
		flex: 0.5,
	},
	{
		headerName: 'Meeting time',
		cellRenderer: TimeRenderer,
		flex: 1,
	},
	{
		headerName: 'Direction',
		field: 'userTalent?.directionCaption',
		cellRenderer: RendererDirection,

		flex: 1,
	},
	{
		headerName: 'Sub direction',
		field: 'userTalent?.subDirectionCaption',
		cellRenderer: RendererSubDirection,

		flex: 1,
	},

	{
		headerName: 'Email address',
		cellRenderer: RendererEmail,
		flex: 1,
	},
	{
		headerName: 'Phone number',
		field: 'phoneNumber',
		cellRenderer: RendererPhone,
		flex: 1,
	},
	{
		headerName: 'Action',
		cellRenderer: RendererAction,
		hidden: true,
		flex: 1,
	},
];
