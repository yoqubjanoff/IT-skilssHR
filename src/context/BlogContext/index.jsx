import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const BlogContex = createContext();

export const useBlogContex = () => useContext(BlogContex);
export const BlogContexPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <BlogContex.Provider  value={[state, dispatch]}>
      {children}
    </BlogContex.Provider>
  );
};
