import { Wrapper } from './style';
import { UserIcon } from '../../../../../component/generics/genericIcons';
import moment from 'moment';
const NameRenderer = ({ data }) => {
	return (
		<Wrapper.Flex>
			<Wrapper.BoxImg url={data?.profilePhotoUrl}>
				{!data?.profilePhotoUrl && <UserIcon />}
			</Wrapper.BoxImg>

			<p className="text-[#18181B]  overflow-hidden  overflow-ellipsis text-[16px] font-[600]">
				{data?.firstName}
			</p>
		</Wrapper.Flex>
	);
};
const Passed = ({ data }) => {
	return !data?.isStandardTestPassed && !data?.isDetailedTestPassed ? (
		<Wrapper.NotVerify>Not verified</Wrapper.NotVerify>
	) : !data?.isStandardTestPassed ? (
		<Wrapper.Detailed>Detailed test</Wrapper.Detailed>
	) : (
		<Wrapper.Standart>Standart test</Wrapper.Standart>
	);
};

const RendererPhone = ({ data }) => {
	return <h5>{data?.phoneNumber && '+' + data?.phoneNumber}</h5>;
};

const TimeRender = ({ data }) => {
	return <h5>{moment(data?.createdAt).format('DD.MM.YYYY')}</h5>;
};
const IdRenderer = ({ id }) => {
	return <h5>#{id}</h5>;
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
		flex: 1,
	},
	{
		headerName: 'Registered date',
		cellRenderer: TimeRender,
		flex: 0.4,
	},
	{
		headerName: 'Direction',
		field: 'directionCaption',
		flex: 0.4,
	},
	{
		headerName: 'Sub direction',
		field: 'subDirectionCaption',
		flex: 0.4,
	},
	{
		headerName: 'Passed tests',
		cellRenderer: Passed,
		flex: 1,
	},
	{
		headerName: 'Email address',
		field: 'email',
		flex: 1,
	},
	{
		headerName: 'Phone number',
		field: 'phoneNumber',
		cellRenderer: RendererPhone,

		flex: 1,
	},
];
