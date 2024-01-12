import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const TestContex = createContext();

export const useTestContex = () => useContext(TestContex);

export const TestContexPovider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TestContex.Provider value={[state, dispatch]}>
			{children}
		</TestContex.Provider>
	);
};
