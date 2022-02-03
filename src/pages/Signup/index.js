import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import UserForm from '../../commonComponents/UserForm';
import UserWarning from '../../commonComponents/UserWarning';
import { AuthContext } from '../../context/AuthContext';

const SignupContainer = () => {

  const [dataForm, setDataForm] = useState({});
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const { signUp, currentUser, userUpdate, emailVerification } = useContext(AuthContext);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(dataForm.email, dataForm.password).then( () => {
      setError('');
      userUpdate(dataForm.name).then( () => setSuccess('Perfil actualizado.')).catch((err) => {
        setError('Error al cambiar el nombre de perfil');
        console.log('Error al cambiar el nombre de perfil ->', err)
      });
      emailVerification().then(() => setSuccess('Todo correcto. Porfavor verifica tu e-mail.')).catch((err) => {
        setError('Error al mandar verificación de e-mail.');
        console.log('Error al mandar verificación de e-mail ->', err)
      })
      setSuccess('Éxito!');
    }).catch( err => {
      setError(`Error al crear cuenta. (${err.message})`);
    })
  }

  const isInvalid = () => {
    return (dataForm.password === dataForm.repassword) ? false : true;
  }

  return (
    <>
      {success && <Alert variant='success'>{success}</Alert>}
      {error && <Alert variant='warning'>{error}</Alert>}
      {currentUser?
        <UserWarning /> :
        <UserForm handleChange={handleChange} handleSubmit={handleSubmit} title='Registrarme' signUp isInvalid={isInvalid()} />
      }
    </>
  )
}

export default SignupContainer;
