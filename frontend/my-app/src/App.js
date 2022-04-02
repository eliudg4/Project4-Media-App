import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UserPage from './components/UserPage';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />}/>
          <Route path='user-home' element={<UserPage />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
