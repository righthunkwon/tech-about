import React from 'react';
import Page from '@/components/common/Page';
import HomeIntroduce1 from '@/domains/home/components/HomeIntroduce1';
import HomeIntroduce2 from '@/domains/home/components/HomeIntroduce2';
import HomeIntroduce3 from '@/domains/home/components/HomeIntroduce3';
import HomeIntroduce4 from '@/domains/home/components/HomeIntroduce4';
import usePageTitle from '@/hooks/usePageTitle';

const HomePage: React.FC = () => {
  usePageTitle('온말');

  return (
    <>
      <Page>
        <HomeIntroduce1 />
        <HomeIntroduce2 />
        <HomeIntroduce3 />
        <HomeIntroduce4 />
      </Page>
    </>
  );
};

export default HomePage;
