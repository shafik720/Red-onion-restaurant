import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Lunch from './Pages/Home/Lunch/Lunch';
import Dinner from './Pages/Home/Dinner/Dinner';
import FoodDisplay from './Pages/FoodDisplay/FoodDisplay';
import Cart from './Pages/FoodDisplay/FoodDisplayTwo/Cart/Cart';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className='main-div'>
      <Header></Header>
      <div className="mainDiv">
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route path='/' element={<Breakfast></Breakfast>}></Route>
            <Route path='/lunch' element={<Lunch></Lunch>}></Route>
            <Route path='/dinner' element={<Dinner></Dinner>}></Route>
          </Route>
          <Route path='/food/:display' element={<FoodDisplay></FoodDisplay>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/cart' element={<RequireAuth><Cart></Cart></RequireAuth>} ></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
