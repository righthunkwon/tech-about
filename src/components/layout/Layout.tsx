import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <div className="ta-layout">
        <Header />
        <main className="mx-auto w-full flex-1">{<Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
