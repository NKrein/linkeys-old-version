import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../../commonComponents/ErrorPage';
import SignupContainer from '../Door/containers/SignupContainer';
import HomeContainer from './containers/HomeContainer';

const Home = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeContainer />} />
      <Route path='/signup' element={<SignupContainer />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Home;
