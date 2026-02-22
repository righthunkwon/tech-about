import React from 'react';

interface props {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<props> = ({ children, className = '' }) => {
  return (
    <>
      <div className={`min-h-[calc(100vh-15px)] max-w-[1140px] ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Page;
