import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
