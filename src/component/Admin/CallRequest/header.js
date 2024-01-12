import { Wrapper } from './style';
import userIcon from '../../../assets/icons/useIcon.svg';

const RendererTitle = ({ data }) => {
	return <Wrapper.Flex>{data?.userName}</Wrapper.Flex>;
};

const RendererDescription = ({ data }) => {
	return <Wrapper.Flex>{data?.comment}</Wrapper.Flex>;
};
const RendererPhone = ({ data }) => {
	return <Wrapper.Flex>{data?.phone}</Wrapper.Flex>;
};

const Renderer = (val) => {
	return <h5>{val}</h5>;
};
const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${day}.${month}.${year}`;
export const column = [
	{
		headerName: 'Name',
		cellRenderer: RendererTitle,
		flex: 0.9,
	},

	{
		headerName: 'Phone number',
		cellRenderer: RendererPhone,
		flex: 0.5,
	},
	{
		headerName: 'Date',
		cellRenderer: () => Renderer(formattedDate),
		flex: 0.4,
	},
	{
		headerName: 'Commnent',
		cellRenderer: RendererDescription,
		flex: 1.5,
	},
	{
		headerName: 'Status',
		field: 'callRequestStatus',
		flex: 0.5,
	},
];
