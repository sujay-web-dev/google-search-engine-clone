import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider =({children, initialstate, reducer}) => (
    <StateContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);