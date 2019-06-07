import React, { createContext } from 'react';

const initialState = {
  loading: false,
  guestUsers: [],
  products: [],
  isAuth: localStorage.getItem('session') ? true : false,
  currentProduct: null,
  isContenedor: window.innerWidth < 765
};

const AppContext = createContext();

const reducer = (state, { type, data }) => {
  switch (type) {
    case 'toggleLoading':
      return { ...state, loading: !state.loading };
    case 'setGuestUser':
      const newUser = data;
      const prevUsers = state.guestUsers.filter(user => user.email !== newUser.email);
      return {
        ...state,
        guestUsers: [...prevUsers, newUser],
      };
    case 'setGuestUsers':
      return {
        ...state,
        guestUsers: data,
      };
    case 'singin':
      localStorage.setItem('session', '1');
      return {
        ...state,
        isAuth: true,
      };
    case 'singout':
      localStorage.removeItem('session')
      return {
        ...state,
        currentProduct: null,
        isAuth: false,
      };
    case 'setProducts':
      return {
        ...state,
        products: data,
      };
    case 'setCurrentProduct':
      return {
        ...state,
        currentProduct: data
      }
    default:
      return state;
  }
};

function AppContextProvider(props) {

  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
