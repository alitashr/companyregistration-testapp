import React from "react";
const StateContext = React.createContext();
const DispatchContext = React.createContext();

const SET_ISLOGGEDIN = "SET_ISLOGGEDIN";
const SET_USERDETAILS = "SET_USERDETAILS";
const SET_COUNTRY = "SET_COUNTRY";

const userDetailsActions = {
  SET_ISLOGGEDIN,
  SET_USERDETAILS,
  SET_COUNTRY
};
const initialUserDetailsState = {
  isLoggedIn: false,
  company: "",
  email: "",
  address: "",
  phone: null,
  country: "",
  age: null,
  about: "",
};
const userDetailsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ISLOGGEDIN:
      return { ...state, isLoggedIn: payload };
    case SET_USERDETAILS:
      return {
        ...state, ...payload
      }
    case SET_COUNTRY:
      return{
        ...state, country: payload
      }
    default:
      return state;
  }
};

function UserDetailsStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(userDetailsReducer, initialUserDetailsState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}
function useUserDetailsState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useUserDetailsState must be used within a UserDetailsStateProvider");
  }
  return context;
}
function useDispatchUserDetails() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useDispatchUserDetails must be used within a UserDetailsStateProvider");
  }
  return context;
}
export { UserDetailsStateProvider, useUserDetailsState, useDispatchUserDetails, userDetailsActions };
