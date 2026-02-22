import React from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  { id: 'notice', label: '공지사항', path: '/notice' },
  { id: 'meta', label: '시작하기', path: '/meta' },
  { id: 'support', label: '문의하기', path: '/support' },
];

const HeaderNavbarMenu: React.FC = () => {
  return (
    <>
      <ul className="text-ta-black my-auto hidden sm:flex">
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <Link className="ta-nav-menu-item" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* <button className="border-ourBlue bg-ourBlue mx-2 my-auto hidden h-fit cursor-pointer rounded-lg border-1 px-1.5 py-1 whitespace-nowrap text-white sm:flex">
        한국어
      </button> */}
    </>
  );
};

export default HeaderNavbarMenu;
