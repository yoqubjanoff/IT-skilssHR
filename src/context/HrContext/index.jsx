import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const HrContext = createContext();

export const useHrContext = () => useContext(HrContext);

export const HrContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HrContext.Provider value={[state, dispatch]}>
      {children}
    </HrContext.Provider>
  );
};
