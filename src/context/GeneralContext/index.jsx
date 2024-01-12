import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const GeneralContext = createContext();

export const useGeneralContext = () => useContext(GeneralContext);

export const GeneralContexPovider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GeneralContext.Provider value={[state, dispatch]}>
			{children}
		</GeneralContext.Provider>
	);
};
