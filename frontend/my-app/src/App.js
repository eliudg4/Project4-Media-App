import 'bootstrap/dist/css/bootstrap.min.css'
import {  Route, Routes, Navigate, Switch, Router } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UserPage from './components/UserPage';
import { useContext } from 'react';
import { SessionContext } from './context/SessionContext'

function App() {

  const {user} = useContext(SessionContext)
  return (
    <>
      <main>
        <Routes>
            <Route exact path='/register' element={user ? <Navigate to="/home"/> : <Register/>}/>
            <Route exact path = '/' element={user ? <Navigate to="/home"/> : <Login/>}/>
            <Route exact path = '/home' element={user ? <Home /> : <Login />}/>
            <Route exact path = {`/profile/:username`} element={<UserPage />}/>
        </Routes>
      </main>

    </>
  );
}

export default App;
