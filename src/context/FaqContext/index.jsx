import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const FaqContext = createContext();

export const useFaqContext = () => useContext(FaqContext);

export const FaqContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <FaqContext.Provider value={[state, dispatch]}>
      {children}
    </FaqContext.Provider>
  );
};
