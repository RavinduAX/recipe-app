import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeModal from './components/RecipeModal';
import Favourite from './pages/Favourite';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Register/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>

      {/* <Favourite/> */}
      {/* <RecipeModal/> */}
    </div>
  );
}

export default App;
