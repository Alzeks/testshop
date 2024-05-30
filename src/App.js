import SideBar from "./components/Sidebar";
import Main from "./pages/Main";
import PhonePage from './pages/PhonePage'
import TvsPage from './pages/TvsPage'
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar className='sidebar' />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/phones' element={<PhonePage />}></Route>
        <Route path='/tvs' element={<TvsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
