import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Import Layouts and Pages
import MainLayout from './Layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage'; // The login page we created

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes that use the MainLayout (with Navbar and Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* You can add more pages like /about or /contact here */}
          </Route>

          {/* Routes that have their own layout (like the login page) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* <-- ADD */}
          <Route path="/reset-password" element={<ResetPasswordPage />} /> 
          
          {/* Add a 404 Not Found page here later */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;