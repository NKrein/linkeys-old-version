import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Button } from 'react-bootstrap';
import './style.css';


const UserWarning = () => {

  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <div className='userPanel'>
      <h3>Estas dentro, como {currentUser.displayName}. ¿Qué te gustaría hacer?</h3>
      <Button type='button' variant="outline-warning" onClick={() => logOut()} >Salir</Button>
      <Link to='/admin/dashboard'><Button type='button' variant="outline-dark">Ir al Dashboard</Button></Link>
    </div>
  )
}

export default UserWarning;
