// eslint-disable-next-line import/default
import React, { lazy } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const TalentPage = lazy(() => import('./pages/TalentPage/index'));

export const routeObject: RouteObject[] = [
	{
		index: true,
		element: <Navigate replace to="talents" />,
	},
	{
		element: <TalentPage />,
		path: 'talents',
	},
];

export const Routes = () => {
	const element = useRoutes(routeObject);
	return element;
};
