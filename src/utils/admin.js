import { lazy } from 'react';
import {
	BlogIcon,
	CallIcon,
	TopicsIcon,
	UserListIcon,
	UserALtIcon,
	ZoomIcon,
	HomeIcon,
	UserIcon,
} from '../component/generics/genericIcons';
const Home = lazy(() => import('../component/Admin/Home'));
const Talents = lazy(() =>
	import('../component/Admin/Talent/pages/TalentPage'),
);
const TestList = lazy(() => import('../component/Admin/TestList'));
const AdminList = lazy(() => import('../component/Admin/AdminList'));
const TestById = lazy(() => import('../component/Admin/TestById'));
const AddQuestion = lazy(() => import('../component/Admin/AddQuestion'));
const AddAdmin = lazy(() => import('../component/Admin/AdminList/AddAdmin'));
const Directions = lazy(() => import('../component/Admin/Directions'));
const AddDirection = lazy(() =>
	import('../component/Admin/Directions/AddDirection'),
);
const AddBlog = lazy(() => import('../component/Admin/Blog/AddBlog'));
const ChangePassword = lazy(() => import('../component/Admin/ChangePassword'));
const Zoom = lazy(() => import('../component/Admin/Zoom'));
const ScheduleZoom = lazy(() => import('../component/Admin/Zoom/ScheduleZoom'));
const Blog = lazy(() => import('../component/Admin/Blog'));
const FaqPage = lazy(() => import('../component/Admin/FaqPage'));
const AddFaq = lazy(() => import('../component/Admin/FaqPage/AddFaq'));
const CallRequest = lazy(() => import('../component/Admin/CallRequest'));
const CoursePage = lazy(() => import('../component/Admin/Courses'));
const AddCourses = lazy(() => import('../component/Admin/Courses/AddCourses'));
const UserLogo = lazy(() => import('../component/Admin/UserLogo/UserLogo'));
const CrudLogo = lazy(() =>
	import('../component/Admin/UserLogo/CrudLogo/CrudLogo'),
);
const Contact = lazy(() => import('../component/Admin/Contact'));
const Partner = lazy(() => import('../component/Admin/Partner'));
const AddPartner = lazy(() => import('../component/Admin/Partner/AddPartner'));
const AddSocial = lazy(() => import('../component/Admin/Social/AddSocial'));
const Social = lazy(() => import('../component/Admin/Social'));

export const SidebarData = [
	{
		id: 1,
		title: 'Home',
		path: '/admin',
		component: Home,
		icon: <HomeIcon color="#000" />,
	},
	{
		id: 2,
		title: 'Talents',
		path: '/admin/talents',
		component: Talents,
		icon: <UserALtIcon />,
	},
	{
		id: 3,
		title: 'Cases',
		path: '/admin/call',
		component: CallRequest,
		icon: <CallIcon />,
	},
	{
		id: 4,
		title: 'Meeting requests',
		path: '/admin/zoom',
		component: Zoom,
		icon: <ZoomIcon />,
	},
	{
		id: 42,
		title: 'Meeting requests',
		path: '/admin/zoom/schedule',
		component: ScheduleZoom,
		hidden: true,
	},
	{
		id: 5,
		title: 'FAQ',
		path: '/admin/faq',
		component: FaqPage,
		icon: <TopicsIcon />,
	},
	{
		id: 88,
		path: '/admin/addfaq/add',
		component: AddFaq,
		hidden: true,
	},

	{
		id: 49,
		title: 'Courses',
		path: '/admin/courses',
		component: CoursePage,
		icon: <TopicsIcon />,
	},
	{
		id: 81,
		path: '/admin/courses/add',
		component: AddCourses,
		hidden: true,
	},

	{
		id: 59,
		path: '/admin/faq/edit/:id',
		component: AddFaq,
		hidden: true,
	},
	{
		id: 67,
		path: '/admin/courses/update/:id',
		component: AddCourses,
		hidden: true,
	},

	{
		id: 6,
		title: 'Blog',
		path: '/admin/blog',
		component: Blog,
		icon: BlogIcon,
	},
	{
		id: 72,
		path: '/admin/blogs/add',
		component: AddBlog,
		hidden: true,
	},
	{
		id: 73,
		path: '/admin/blog/modify/:id',
		component: AddBlog,
		hidden: true,
	},
	{
		id: 7,
		title: 'Test list',
		path: '/admin/test',
		component: TestList,
		icon: <ZoomIcon />,
	},
	{
		id: 71,
		title: 'Directions',
		path: '/admin/directions',
		component: Directions,
		icon: <TopicsIcon />,
	},
	{
		id: 72,
		path: '/admin/direction/add',
		component: AddDirection,
		hidden: true,
	},
	{
		id: 73,
		path: '/admin/direction/edit/:id',
		component: AddDirection,
		hidden: true,
	},
	{
		id: 9,
		title: 'Admin list',
		path: '/admin/users',
		component: AdminList,
		icon: <UserListIcon />,
	},
	{
		id: 10,
		path: '/admin/:id/:name',
		component: TestById,
		hidden: true,
	},

	{
		id: 11,
		path: '/admin/add-question/:id/:name/:language/:testType',
		component: AddQuestion,
		hidden: true,
	},
	{
		id: 12,
		path: '/admin/edit-question/:id/:name',
		component: AddQuestion,
		hidden: true,
	},
	{
		id: 13,
		path: '/admin/users/add',
		component: AddAdmin,
		hidden: true,
	},
	{
		id: 14,
		path: '/admin/users/edit/:id',
		component: AddAdmin,
		hidden: true,
	},
	{
		id: 15,
		path: '/admin/change-password',
		component: ChangePassword,
		hidden: true,
	},
	{
		id: 16,
		title: 'Logo',
		path: '/admin/logo',
		component: UserLogo,
		hidden: false,
		icon: <UserListIcon />,
	},
	{
		id: 17,
		path: '/admin/logo/update/:id',
		component: CrudLogo,
		hidden: true,
	},
	{
		id: 18,
		path: '/admin/logo/add',
		component: CrudLogo,
		hidden: true,
	},
	{
		id: 181,
		path: '/admin/contact',
		title: 'Contact',
		component: Contact,
		icon: <CallIcon />,
	},
	{
		id: 182,
		path: '/admin/partners',
		title: 'Partner',
		component: Partner,
		icon: <UserIcon />,
	},
	{
		id: 183,
		path: '/admin/partner/add',
		component: AddPartner,
		hidden: true,
	},
	{
		id: 184,
		path: '/admin/partner/edit/:id',
		component: AddPartner,
		hidden: true,
	},
	{
		id: 185,
		path: '/admin/social',
		title: 'Social',
		component: Social,
		icon: <UserIcon />,
	},
	{
		id: 186,
		path: '/admin/social/add',
		component: AddSocial,
		hidden: true,
	},
	{
		id: 187,
		path: '/admin/social/edit/:id',
		component: AddSocial,
		hidden: true,
	},
];
