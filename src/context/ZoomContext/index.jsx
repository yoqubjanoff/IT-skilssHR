import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const ZoomContex = createContext();

export const useZoomContext = () => useContext(ZoomContex);

export const ZoomContexPovider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ZoomContex.Provider value={[state, dispatch]}>
			{children}
		</ZoomContex.Provider>
	);
};
