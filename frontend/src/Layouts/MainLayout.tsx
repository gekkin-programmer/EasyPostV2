import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        {/* The <Outlet /> is a placeholder where the current page's content will be rendered */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;