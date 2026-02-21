import usePageTitle from '@/hooks/usePageTitle';
import React from 'react';

const ComponentPage: React.FC = () => {
  usePageTitle('컴포넌트');

  return (
    <>
      <section className="mx-auto text-center">컴포넌트 테스트 페이지</section>
    </>
  );
};

export default ComponentPage;
