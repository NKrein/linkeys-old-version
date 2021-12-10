import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ( { children } ) => {

  const users = [{
    id: '1',
    user: 'camilaManez',
    name: 'Camila Mañez'
  },{
    id: '2',
    user: 'sithCat',
    name: 'Masa oscura'
  },{
    id: '3',
    user: 'nkrein',
    name: 'Nicolás Krein'
  }]

  const value = {
    users
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
