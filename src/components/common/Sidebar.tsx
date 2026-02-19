import React from 'react';

interface MenuItem {
  id: string;
  label: string;
  path: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: '1', label: '홈', path: '/home' },
  { id: '2', label: '전체 아티클', path: '/posts' },
  { id: '3', label: '주제', path: '/topics' },
];

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-gray-200 bg-white">
        <nav className="p-4">
          <ul className="space-y-2">
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
