import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const CourseContext = createContext();

export const useCoursContext = () => useContext(CourseContext);

export const CoursesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CourseContext.Provider value={[state, dispatch]}>
			{children}
		</CourseContext.Provider>
	);
};
