import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const UserContex = createContext();

export const useUserContex = () => useContext(UserContex);

export const UserContexPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <UserContex.Provider value={[state, dispatch]}>
      {children}
    </UserContex.Provider>
  );
};
