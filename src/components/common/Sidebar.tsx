import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="fixed top-0 z-100 my-auto flex h-15 w-full justify-center border-b border-gray-200 bg-white whitespace-nowrap">
        <nav>
          <ul>
            <li>메뉴1</li>
            <li>메뉴1</li>
            <li>메뉴1</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
