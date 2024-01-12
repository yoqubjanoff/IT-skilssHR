// import React from 'react';
// import { lazy } from 'react';
// import { RouteObject, Navigate, useRoutes } from 'react-router-dom';

// const AdminLayout = lazy(() => import('./admin-layout'));
// const AdminView = lazy(() => import('../View/Admin'));
// const Talents = lazy(() => import('../View/Admin/Talent/pages/TalentPage'));
// const TestList = lazy(() => import('../View/Admin/TestList'));
// const Directions = lazy(() => import('../View/Admin/Directions'));
// const AdminList = lazy(() => import('../View/Admin/AdminList'));
// const SignIn = lazy(() => import('../View/Signin'));
// const AdminSigning = lazy(() => import('../View/AdminSigning'));
// const AppLayout = lazy(() => import('./app-layout'));
// const UserProfile = lazy(() => import('../View/UserProfile'));
// const Register = lazy(() => import('../View/Register'));

// let tokenAdmin = localStorage.getItem('tokenAdmin');
// let token = localStorage.getItem('token');

// // export enum Routes {
// // 	EMPTY = '',
// // 	MAIN = '/*',
// // 	ADMIN = '/admin',
// // 	HOME = '/home',
// // 	TALENTS = '/talents/*',
// // 	TEST = '/test/*',
// // 	DIRECTIONS = '/directions',
// // 	USERS = '/users/*',
// // 	SIGN_IN = '/admin/sign-in',
// // 	SignIn = '/signin',
// // 	UserProfile = '/userprofile',
// // 	LOGIN_USER = '/register',
// // }
// export const RoutesApp = {
// 	EMPTY: '',
// 	MAIN: '/*',
// 	ADMIN: '/admin',
// 	HOME: '/home',
// 	TALENTS: '/talents/*',
// 	TEST: '/test/*',
// 	DIRECTIONS: '/directions',
// 	USERS: '/users/*',
// 	SIGN_IN: '/admin/sign-in',
// 	SignIn: '/signin',
// 	UserProfile: '/userprofile',
// 	LOGIN_USER: '/register',
// };

// const myRoutes = [
// 	{
// 		path: '/talents',
// 		element: <Talents />,
// 	},
// 	{
// 		path: RoutesApp.ADMIN,
// 		element: <AdminView />,
// 	},
// 	{
// 		path: RoutesApp.TEST,
// 		element: <TestList />,
// 	},
// 	{
// 		path: RoutesApp.DIRECTIONS,
// 		element: <Directions />,
// 	},
// 	{
// 		path: RoutesApp.USERS,
// 		element: <AdminList />,
// 	},
// 	{
// 		path: RoutesApp.SIGN_IN,
// 		element: <Register />,
// 	},
// ];
// export const PrivateRoutes = [
// 	{
// 		index: true,
// 		element: <Navigate to="/admin" replace />,
// 	},
// 	{
// 		path: '/*',
// 		// element: <AdminLayout children={myRoutes} />,
// 		children: [
// 			{
// 				path: '/talents',
// 				element: <Talents />,
// 			},
// 			{
// 				path: RoutesApp.ADMIN,
// 				element: <AdminView />,
// 			},
// 			{
// 				path: RoutesApp.TEST,
// 				element: <TestList />,
// 			},
// 			{
// 				path: RoutesApp.DIRECTIONS,
// 				element: <Directions />,
// 			},
// 			{
// 				path: RoutesApp.USERS,
// 				element: <AdminList />,
// 			},
// 			{
// 				path: RoutesApp.SIGN_IN,
// 				element: <Register />,
// 			},
// 		],
// 	},
// ];

// console.log(PrivateRoutes);

// const PublicRoutesTest = token
// 	? [
// 			{
// 				index: true,
// 				element: <Navigate to="/userprofile" replace />,
// 			},
// 	  ]
// 	: [
// 			{
// 				path: '/*',
// 				element: <AppLayout children={myRoutes} />,
// 			},
// 	  ];

// export const PublicRoutes = [
// 	{
// 		index: true,
// 		element: <Navigate to="/userprofile" replace />,
// 		// element: token ? (
// 		// ) : (
// 		// 	<Navigate to="/signin" replace />
// 		// ),
// 	},
// 	{
// 		path: RoutesApp.SignIn,
// 		element: <SignIn />,
// 	},
// 	{
// 		path: RoutesApp.UserProfile,
// 		element: <UserProfile />,
// 	},
// 	{
// 		path: RoutesApp.LOGIN_USER,
// 		element: <Register />,
// 	},
// ];

// export const GlobalRoutes = () => {
// 	const routes = token ? PublicRoutes : PrivateRoutes;
// 	const element = useRoutes(routes);
// 	return element;
// };
