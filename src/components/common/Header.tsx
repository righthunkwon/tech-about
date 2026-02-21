import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/svgs/logo.svg';
import BtnDrawerMenu from '@/assets/svgs/btn-drawer-menu.svg?react';
import HeaderDrawerMenu from '@/components/common/HeaderDrawerMenu';
import HeaderNavbarMenu from '@/components/common/HeaderNavbarMenu';
import BtnClose from '@/assets/svgs/btn-close.svg?react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false); // 메뉴오픈여부
  const location = useLocation(); // 현재 라우터의 위치

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleDrawerMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 z-100 my-auto flex h-15 w-full justify-center border-b border-gray-200 bg-white whitespace-nowrap">
        <nav className="mx-auto flex w-dvw justify-between bg-white text-sm sm:w-[1140px] sm:max-w-[1140px]">
          <div className="flex w-full">
            <Link
              to={'/'}
              className="flex cursor-pointer items-center justify-center gap-1 px-6 py-2 sm:ml-6"
            >
              <img className="h-6 w-6" src={logo} alt="logo" />
              <span className="text-xl font-semibold">tech-about</span>
            </Link>
            <div className="hidden w-full sm:flex"></div>
            <HeaderNavbarMenu />
          </div>
          <button className="sm:hidden" onClick={toggleDrawerMenu}>
            {open ? (
              <BtnClose
                className="mx-4 hover:cursor-pointer"
                width={20}
                height={20}
              />
            ) : (
              <BtnDrawerMenu
                className="mx-4 hover:cursor-pointer"
                width={20}
                height={20}
              />
            )}
          </button>
        </nav>
        <HeaderDrawerMenu open={open} />
      </header>
    </>
  );
};

export default Header;
