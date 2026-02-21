import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavbarMenu: React.FC = () => {
  return (
    <>
      <ul className="text-ourTextBlack my-auto hidden sm:flex">
        <li>
          <Link to={'/notice'} className="c-nav-menu-item">
            공지사항
          </Link>
        </li>
        <li>
          <Link to={'/meta'} className="c-nav-menu-item">
            시작하기
            {/* 추후 다국어 기능 개발 시 마우스 오버하면 표준단어/다국어 페이지 보이게 수정필요 */}
          </Link>
        </li>
        {/* <li>
          <Link to={'/download'} className="c-nav-menu-item">
            다운로드
          </Link>
        </li> */}
        <li>
          <Link to={'/support'} className="c-nav-menu-item">
            문의하기
          </Link>
        </li>
      </ul>
      {/* <button className="border-ourBlue bg-ourBlue mx-2 my-auto hidden h-fit cursor-pointer rounded-lg border-1 px-1.5 py-1 whitespace-nowrap text-white sm:flex">
        한국어
      </button> */}
    </>
  );
};

export default HeaderNavbarMenu;
