import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import styles from './App.module.scss'
import Home from './pages/Home/Home';
import Admin from './components/Admin/Admin.jsx'
import Basket from './pages/Basket/Basket';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/reg" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
