import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Logo2 } from '../../../assets/icons/logo2.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/Arrow.svg';
import { ReactComponent as Done } from '../../../assets/icons/done.svg';
import { ReactComponent as Mark } from '../../../assets/icons/bookmark.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Dollar } from '../../../assets/icons/dollar.svg';
import { ReactComponent as Cup } from '../../../assets/icons/cup.svg';
import { ReactComponent as Check } from '../../../assets/icons/check-o.svg';
import { ReactComponent as Location } from '../../../assets/icons/location.svg';
import { ReactComponent as Right } from '../../../assets/icons/right-arrow.svg';
import { ReactComponent as Official } from '../../../assets/icons/official.svg';
import { ReactComponent as Telegram } from '../../../assets/icons/telegram.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg';
import { ReactComponent as Ins } from '../../../assets/icons/instagram.svg';
import { ReactComponent as Blend } from '../../../assets/icons/blend.svg';
import { ReactComponent as Brief } from '../../../assets/icons/briefcase.svg';
import { ReactComponent as SolarDiagram } from '../../../assets/icons/solar_diagram.svg';
import { ReactComponent as Statusup } from '../../../assets/icons/statusup.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as Minus } from '../../../assets/icons/minus.svg';
import { ReactComponent as Down } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as Calendar } from '../../../assets/icons/calendar.svg';
import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { ReactComponent as EyeOff } from '../../../assets/icons/eye-off.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Wave } from '../../../assets/icons/wave.svg';
import { ReactComponent as UpArrow } from '../../../assets/icons/uparrow.svg';
import { ReactComponent as DeletIcon } from '../../../assets/icons/deletIcon.svg';
import { ReactComponent as Pensil } from '../../../assets/icons/pensil2.svg';
import { ReactComponent as Download } from '../../../assets/icons/download.svg';
import { ReactComponent as Loading } from '../../../assets/icons/loading.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as TrandingUp } from '../../../assets/icons/trending-up.svg';
import { ReactComponent as PlusUser } from '../../../assets/icons/user-plus.svg';
import { ReactComponent as Blog } from '../../../assets/icons/blog.svg';
import { ReactComponent as Call } from '../../../assets/icons/call.svg';
import { ReactComponent as Topics } from '../../../assets/icons/topics.svg';
import { ReactComponent as UserList } from '../../../assets/icons/user-list.svg';
import { ReactComponent as UserALt } from '../../../assets/icons/users-alt.svg';
import { ReactComponent as Zoom } from '../../../assets/icons/zoom.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Logout } from '../../../assets/icons/log-out.svg';
import { ReactComponent as Pen } from '../../../assets/icons/pen.svg';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import { ReactComponent as UzLan } from '../../../assets/icons/uzLan.svg';
import { ReactComponent as RuLan } from '../../../assets/icons/russian.svg';
import { ReactComponent as EngLan } from '../../../assets/icons/engLan.svg';
import { ReactComponent as Upload } from '../../../assets/icons/upload.svg';
import { ReactComponent as Timer } from '../../../assets/icons/timer.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrowLeft.svg';
import { ReactComponent as Key } from '../../../assets/icons/key.svg';
import { ReactComponent as Error } from '../../../assets/icons/error.svg';
import { ReactComponent as Success } from '../../../assets/icons/Success.svg';
import { ReactComponent as Warn } from '../../../assets/icons/warn.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';
import { ReactComponent as Check2 } from '../../../assets/icons/check2.svg';
import { ReactComponent as Link } from '../../../assets/icons/linkIcon.svg';
import { ReactComponent as More } from '../../../assets/icons/more.svg';
import { ReactComponent as Signin } from '../../../assets/icons/u_signin.svg';
import { ReactComponent as Bag } from '../../../assets/icons/bag.svg';
import { ReactComponent as Location2 } from '../../../assets/icons/location2.svg';
import { ReactComponent as Phone2 } from '../../../assets/icons/phone2.svg';
import { ReactComponent as Toj } from '../../../assets/icons/toj.svg';
import { ReactComponent as GreenUser } from '../../../assets/icons/green_user.svg';
import { ReactComponent as GreenBag } from '../../../assets/icons/green-bag.svg';
import { ReactComponent as Play } from '../../../assets/icons/play.svg';
import { ReactComponent as Eyeoutline } from '../../../assets/icons/eye-outline.svg';

const DoneIcon = styled(Done)`
	width: ${({ width }) => (width ? width : '15px')};
	height: ${({ height }) => (height ? height : '15px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position};
	left: ${({ left }) => left};
	top: ${({ top }) => top};
	z-index: 1;

	path {
		stroke: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;
const ArrowIcon = styled(Arrow)`
	width: ${({ width }) => (width ? width : '15px')};
	height: ${({ height }) => (height ? height : '15px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	transform: ${({ left }) => left && 'rotate(180deg)'};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const LogoIcon = styled(Logo)`
	width: ${({ width }) => (width ? width : '153px')};
	height: ${({ height }) => height && height};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#000'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const LogoIcon2 = styled(Logo2)`
	width: ${({ width }) => (width ? width : '153px')};
	height: ${({ height }) => height && height};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#000'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;
const BookMarkIcon = styled(Mark)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#000'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const SearchIcon = styled(Search)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#000'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const DollarIcon = styled(Dollar)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};

	path {
		stroke: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;
const CupIcon = styled(Cup)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const CheckIcon = styled(Check)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;

const LocationIcon = styled(Location)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;
const RightIcon = styled(Right)`
	width: ${({ width }) => (width ? width : '27px')};
	height: ${({ height }) => (height ? height : '27px')};
	cursor: pointer;
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	right: ${({ right }) => right && right};
	bottom: ${({ bottom }) => bottom && bottom};
	path {
		fill: ${({ color }) => color || '#000'};
	}
	path {
		stroke: ${({ color }) => color || '#000'};
	}
	&:hover {
		path {
			fill: ${({ hovercolor }) => hovercolor && hovercolor};
		}
	}
`;
const LinkedinIcon = styled(Linkedin)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	path {
		stroke: ${({ stroke }) => stroke || '#ffff'};
	}
`;

const PhoneIcon = styled(Phone)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	path {
		stroke: ${({ stroke }) => stroke || '#ffff'};
	}
`;
const FacebookIcon = styled(Facebook)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color || '#fff'};
	}
	path {
		stroke: ${({ stroke }) => stroke || '#ffff'};
	}
`;

const TelegramIcon = styled(Telegram)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const InsIcon = styled(Ins)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const OfficialIcon = styled(Official)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
`;

const BlendIcon = styled(Blend)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const BriefIcon = styled(Brief)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const SolarDiagramIcon = styled(SolarDiagram)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const StatusupIcon = styled(Statusup)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const MenuIcon = styled(Menu)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const MinusIcon = styled(Minus)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const PlusIcon = styled(Plus)`
	width: ${({ width }) => (width ? width : '24px')};
	height: ${({ height }) => (height ? height : '24px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const DownIcon = styled(Down)`
	width: ${({ width }) => (width ? width : '15px')};
	height: ${({ height }) => (height ? height : '15px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const CalendarIcon = styled(Calendar)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const EyeIcon = styled(Eye)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const EyeIconOutline = styled(Eyeoutline)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const EyeOffIcon = styled(EyeOff)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const CloseIcon = styled(Close)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const WaveIcon = styled(Wave)`
	width: ${({ width }) => (width ? width : '76px')};
	height: ${({ height }) => (height ? height : '10.5px')};
	margin: ${({ margin }) => margin && margin};
	margin-bottom: ${({ marginbottom }) => marginbottom && marginbottom};
`;
const LoadingIcon = styled(Loading)`
	width: ${({ width }) => (width ? width : '110px')};
	height: ${({ height }) => (height ? height : '110px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const ArrowUp = styled(UpArrow)`
	width: ${({ width }) => width || '9px'};
	height: ${({ height }) => height || '10px'};
	margin: ${({ margin }) => margin || 0};
	right: ${({ right }) => right || 0};
	path {
		fill: ${({ color }) => color || 'currentColor'};
		stroke: ${({ stroke }) => stroke || '#37A67E'};
	}
	cursor: pointer;
`;
const DeleteIcon = styled(DeletIcon)`
	width: ${({ width }) => width || '20px'};
	height: ${({ height }) => height || '20px'};
	margin: ${({ margin }) => margin || 0};
	margin-bottom: ${({ marginBottom }) => marginBottom || 0};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const PensilIcon = styled(Pensil)`
	width: ${({ width }) => width || '20px'};
	height: ${({ height }) => height || '20px'};
	margin: ${({ margin }) => margin || 0};
	margin-bottom: ${({ marginBottom }) => marginBottom || 0};
	right: ${({ right }) => right || 0};
	cursor: pointer;
`;
const DownLoad = styled(Download)`
	position: absolute;
	top: 50%;
	left: 90%;
	transform: translateY(-50%);
	width: ${({ width }) => width || '20px'};
	height: ${({ height }) => height || '20px'};
	margin: ${({ margin }) => margin || 0};
	margin-bottom: ${({ marginBottom }) => marginBottom || 0};
	right: ${({ right }) => right || 0};
	cursor: pointer;
`;
const UserIcon = styled(User)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: ${({ pointer }) => pointer && 'pointer'};
`;
const TrandingUpIcon = styled(TrandingUp)`
	width: ${({ width }) => (width ? width : '16px')};
	height: ${({ height }) => (height ? height : '16px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	transform: ${({ inc }) => inc && `rotateX(180deg)`};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const PlusUserIcon = styled(PlusUser)`
	width: ${({ width }) => (width ? width : '28px')};
	height: ${({ height }) => (height ? height : '28px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const BlogIcon = styled(Blog)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const CallIcon = styled(Call)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const TopicsIcon = styled(Topics)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const UserListIcon = styled(UserList)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const UserALtIcon = styled(UserALt)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const ZoomIcon = styled(Zoom)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const HomeIcon = styled(Home)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const LogoutIcon = styled(Logout)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const TrashIcon = styled(Trash)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const PenIcon = styled(Pen)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const UzLanIcon = styled(UzLan)`
	width: 32px;
	height: 32px;
	cursor: pointer;
`;
const RuLanIcon = styled(RuLan)`
	width: 32px;
	height: 32px;
	cursor: pointer;
`;
const EngLanIcon = styled(EngLan)`
	width: ${({ width }) => (width ? width : '32px')};
	height: ${({ height }) => (height ? height : '32px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;

const UploadIcon = styled(Upload)`
	width: ${({ width }) => (width ? width : '32px')};
	height: ${({ height }) => (height ? height : '32px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const TimerIcon = styled(Timer)`
	width: ${({ width }) => (width ? width : '25px')};
	height: ${({ height }) => (height ? height : '25px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
	cursor: pointer;
`;
const ArrowLeftIcon = styled(ArrowLeft)`
	width: ${({ width }) => (width ? width : '25px')};
	height: ${({ height }) => (height ? height : '25px')};
	cursor: pointer;
`;

const KeyIcon = styled(Key)`
	width: ${({ width }) => (width ? width : '25px')};
	height: ${({ height }) => (height ? height : '25px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const ErrorIcon = styled(Error)`
	width: 30px;
	height: 30px;
`;

const SuccessIcon = styled(Success)`
	width: 30px;
	height: 30px;
`;

const WarnIcon = styled(Warn)`
	width: 30px;
	height: 30px;
`;
const Check2Icon = styled(Check2)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	cursor: pointer;
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const CommentIcon = styled(Comment)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	cursor: pointer;
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const LinkIcon = styled(Link)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	cursor: pointer;
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const MoreIcon = styled(More)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	cursor: pointer;
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const SigninIcon = styled(Signin)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	cursor: pointer;
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const BagIcon = styled(Bag)`
	width: ${({ width }) => (width ? width : '80px')};
	height: ${({ height }) => (height ? height : '80px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const Phone2Icon = styled(Phone2)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const Location2Icon = styled(Location2)`
	width: ${({ width }) => (width ? width : '20px')};
	height: ${({ height }) => (height ? height : '20px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const TojIcon = styled(Toj)`
	width: ${({ width }) => (width ? width : '30px')};
	height: ${({ height }) => (height ? height : '30px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const GreenUserIcon = styled(GreenUser)`
	width: ${({ width }) => (width ? width : '30px')};
	height: ${({ height }) => (height ? height : '30px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;
const GreenBagIcon = styled(GreenBag)`
	width: ${({ width }) => (width ? width : '30px')};
	height: ${({ height }) => (height ? height : '30px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	top: ${({ top }) => top && top};
	right: ${({ right }) => right && right};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

const PlayIcon = styled(Play)`
	width: ${({ width }) => (width ? width : '30px')};
	height: ${({ height }) => (height ? height : '30px')};
	margin: ${({ margin }) => margin && margin};
	position: ${({ position }) => position && position};
	path {
		fill: ${({ color }) => color && color};
	}
	path {
		stroke: ${({ stroke }) => stroke && stroke};
	}
`;

export {
	GreenUserIcon,
	GreenBagIcon,
	OfficialIcon,
	SearchIcon,
	BookMarkIcon,
	DoneIcon,
	ArrowIcon,
	LogoIcon,
	DollarIcon,
	CupIcon,
	CheckIcon,
	LocationIcon,
	RightIcon,
	LogoIcon2,
	TelegramIcon,
	FacebookIcon,
	PhoneIcon,
	LinkedinIcon,
	InsIcon,
	BlendIcon,
	BriefIcon,
	SolarDiagramIcon,
	StatusupIcon,
	MenuIcon,
	MinusIcon,
	PlusIcon,
	DownIcon,
	CalendarIcon,
	EyeOffIcon,
	EyeIcon,
	CloseIcon,
	WaveIcon,
	ArrowUp,
	DeleteIcon,
	PensilIcon,
	DownLoad,
	LoadingIcon,
	UserIcon,
	TrandingUpIcon,
	PlusUserIcon,
	BlogIcon,
	CallIcon,
	TopicsIcon,
	UserListIcon,
	UserALtIcon,
	ZoomIcon,
	HomeIcon,
	LogoutIcon,
	TrashIcon,
	PenIcon,
	UzLanIcon,
	RuLanIcon,
	EngLanIcon,
	UploadIcon,
	TimerIcon,
	ArrowLeftIcon,
	KeyIcon,
	ErrorIcon,
	SuccessIcon,
	WarnIcon,
	CommentIcon,
	Check2Icon,
	LinkIcon,
	MoreIcon,
	SigninIcon,
	BagIcon,
	Phone2Icon,
	Location2Icon,
	TojIcon,
	PlayIcon,
	EyeIconOutline,
};
