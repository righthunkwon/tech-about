import React from 'react';

const Button: React.FC = () => {
  return (
    <>
      <button
        // onClick={onClickSave}
        className="bg-ta-blue hover:bg-ta-blue-dark rounded-lg px-4 py-2 text-white hover:cursor-pointer"
      >
        버튼
      </button>{' '}
    </>
  );
};

export default Button;
