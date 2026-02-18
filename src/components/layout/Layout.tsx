import React from 'react';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
