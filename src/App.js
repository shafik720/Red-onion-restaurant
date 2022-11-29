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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='/lunch' element={<Lunch></Lunch>}></Route>
          <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
