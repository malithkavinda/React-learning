
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Notfound from './components/Notfound';
import Login from './components/login/Login';

function App() {
  return (
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/users/user/:id' element={<About></About>} ></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
  );
}

export default App;
