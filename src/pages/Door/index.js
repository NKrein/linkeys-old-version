import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../commonComponents/ErrorPage';
import { AuthContext } from '../../context/AuthContext';

const Door = () => {

  const {usr} = useParams();
  const { users } = useContext(AuthContext);
  const [user, setUser] = useState();

useEffect(() => {
  setUser(users.find(element => element.user === usr));
  // eslint-disable-next-line
}, [usr])
  

  return (
    user?
      <div>
        <h2>Puerta principal de {user.name}</h2>
        <p>¿Queres las llaves?</p>
        <p>La encontrarás aquí abajo</p>
      </div>
    :
      <ErrorPage text={'Usuario no existe (No coincide).'} />
  )
}

export default Door;
