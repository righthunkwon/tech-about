import React from 'react';
import loading from '@/assets/images/common/loading-spinner.png';

const Loading: React.FC = () => {
  return (
    <>
      <div className="flex h-[calc(100vh)] w-[calc(100vw-15px)]">
        <img
          className="mx-auto my-auto h-5 w-5 animate-spin"
          src={loading}
          alt="로딩 스피너"
        />
      </div>
    </>
  );
};

export default Loading;
