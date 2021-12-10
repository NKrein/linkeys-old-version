import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Door from './pages/Door';
import Home from './pages/Home';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <h1>LinKeys</h1>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/:usr' element={<Door />} />
            <Route path='/admin/*' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
