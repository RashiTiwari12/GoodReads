import './App.css';
import BookDetailPage from './pages/BookDetailPage';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProtectedRoute from './Routes/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<ProtectedRoute Component={BookPage} />} />
        <Route path="/books/detail/:id" element={<ProtectedRoute Component={BookDetailPage} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/about' element={<ProtectedRoute Component={AboutPage} />} />
        <Route path='/contact' element={<ProtectedRoute Component={ContactPage} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
