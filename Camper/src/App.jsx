import { Route, Routes, Navigate, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';

import './App.css';

const App = () => {
  return (
    <div>
      <nav className='nav'>
        <Link className="nav-link" to="/">Головна</Link>
        <Link className="nav-link" to="/catalog">Каталог</Link>
        <Link className="nav-link" to="/favorites">Улюблені</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;