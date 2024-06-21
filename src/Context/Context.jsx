import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';

const ClinicContext = createContext('light');

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {...state, dark: !state.dark};
        case 'GET_USERS':
          return {...state, axios: action.payload};
        case 'GET_FAVS':
          return {...state, favs: [...state.favs, action.payload]};
        default:
            throw new Error();
  }
}

const favsList = JSON.parse(localStorage.getItem("favs")) || [];



const initialState = {
    dark: false,
    axios: [],
    favs:favsList
}



const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
      axios(url)
        .then((res) => dispatch({type: 'GET_USERS', payload: res.data})) //?
        .catch((err) => console.log(err));
    }, []);


  

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ClinicContext.Provider value={{ state, dispatch }}>
      {children}
    </ClinicContext.Provider>
  )
}


export const useClinicContext = () => {
    return useContext(ClinicContext);
  };

export default Context