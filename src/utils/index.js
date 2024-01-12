import { lazy } from 'react';
const Home = lazy(() => import('../component/NewHome'));
const Contact = lazy(() => import('../component/Contact'));
// const TalentRegistration = lazy(() => import('../component/Register/Talent'));
const HrRegistration = lazy(() => import('../component/Register/Hr'));
// const Registration = lazy(() => import('../component/Register'));
// const SigninTalent = lazy(() => import('../component/Signin/Talent'));
const SigninHr = lazy(() => import('../component/Signin/Hr'));
// const Forgot = lazy(() => import('../component/Signin/Forgot'));
const ForgotHr = lazy(() => import('../component/Signin/ForgotHr'));
// const Recovery = lazy(() => import('../component/Signin/Recovery'));
const ResetVerify = lazy(() => import('../component/verify/ResetPassword'));
const SentVarifation = lazy(() => import('../component/verify/SendEmail'));
// const ReadyProfile = lazy(() => import('../component/ready-to-test/Ready'));
// const ReadyTestStandart = lazy(() =>
// 	import('../component/TestSection/Standart/Ready'),
// );
// const ReadyTestDetailed = lazy(() =>
// 	import('../component/TestSection/Detailed/Ready'),
// );
// const TestDetailed = lazy(() =>
// 	import('../component/TestSection/Detailed/TakeTest'),
// );
// const TestStandart = lazy(() =>
// 	import('../component/TestSection/Standart/TakeTest'),
// );
// const TalentProfile = lazy(() => import('../component/Profile/Talent'));
const HrProfile = lazy(() => import('../component/Profile/Hr'));
const Explore = lazy(() => import('../component/Explore'));
const ShowProfile = lazy(() => import('../component/Profile/ShowProfile'));
const ShowPortfolio = lazy(() => import('../component/Profile/ShowPortfolio'));
const ShowPortfolioForHr = lazy(() =>
	import('../component/Profile/ShowPortfolioforHr'),
);
// const FailedTest = lazy(() => import('../component/ready-to-test/Failed'));
// const SuccessTest = lazy(() => import('../component/ready-to-test/Succes'));
// const VerifyTalent = lazy(() => import('../component/verify/verify-talent'));
const VerifyHr = lazy(() => import('../component/verify/verify-hr'));
const RecoveryHr = lazy(() => import('../component/Signin/RecoveryHr'));
const About = lazy(() => import('../component/About'));
const AdminSigning = lazy(() => import('../component/Admin/AdminSigning'));
const AboutOne = lazy(() => import('../component/About/AboutOne'));

export const Data = [
	{
		id: 1,
		path: '/',
		component: Home,
	},
	{
		id: 3,
		path: '/register',
		component: HrRegistration,
	},

	{
		id: 6,
		path: '/signin',
		component: SigninHr,
	},

	{
		id: 71,
		path: '/forgot-password-hr',
		component: ForgotHr,
	},

	{
		id: 8,
		path: '/reset-hr/:id',
		component: RecoveryHr,
	},
	{
		id: 9,
		path: '/reset-verification',
		component: ResetVerify,
	},
	{
		id: 10,
		path: '/sent-verification',
		component: SentVarifation,
	},

	{
		id: 101,
		path: '/verify-hr/:id',
		component: VerifyHr,
	},

	{
		id: 15,
		path: '/hr-profile',
		component: HrProfile,
	},
	{
		id: 16,
		path: '/explore',
		component: Explore,
	},
	{
		id: 17,
		path: '/show-profile/:id',
		component: ShowProfile,
	},
	{
		id: 18,
		path: '/show-portfolio/:id',
		component: ShowPortfolio,
	},
	{
		id: 18,
		path: '/portfolio/:id',
		component: ShowPortfolioForHr,
	},

	{
		id: 21,
		path: '/about',
		component: About,
	},
	{
		id: 22,
		path: '/contact',
		component: Contact,
	},
	{
		id: 188,
		path: '/admin/sign-in',
		component: AdminSigning,
	},
	{
		id: 198,
		path: '/blog/:id',
		component: AboutOne,
	},
];
