import React from 'react';
import Page from '@/components/common/Page';
import left from '@/assets/svgs/btn-angle-left.svg';
import right from '@/assets/svgs/btn-angle-right.svg';
import usePageTitle from '@/hooks/usePageTitle';

const TEMP_CONTENTS = [
  {
    id: 1,
    title: '개발자는 AI에 대체될 것인가에 대한 고민',
    description:
      'AI가 개발자의 종말을 초래할까요? 이 질문에 대한 시각을 공유합니다.',
    color: 'bg-red-400',
  },
  {
    id: 2,
    title: 'React와 Vue의 생산성 차이',
    description:
      'ERP 시스템 개발에서 두 프레임워크가 가지는 장단점을 분석합니다.',
    color: 'bg-blue-400',
  },
  {
    id: 3,
    title: 'MyBatis를 활용한 쿼리 최적화',
    description: 'MSSQL 환경에서 대용량 데이터를 처리하는 효율적인 방법입니다.',
    color: 'bg-green-400',
  },
];

const HomePage: React.FC = () => {
  usePageTitle('tech-about');

  return (
    <Page>
      <div className="mx-auto w-full max-w-[1140px] px-6 py-6 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="order-first h-80 w-full rounded-2xl bg-red-400 md:order-last md:flex-2/3"></div>

          <div className="flex h-80 flex-1 flex-col px-4 md:flex-1/2">
            <div className="flex-1 md:pr-8 lg:pr-16">
              <h2 className="text-ta-black mb-2 line-clamp-3 pt-6 text-xl leading-tight font-semibold md:mb-4 md:text-3xl">
                개발자는 AI에 대체될 것인가에 대한 고민을 담았습니다.
              </h2>
              <p className="text-ta-black-light line-clamp-3 text-sm md:text-base">
                AI가 개발자의 종말을 초래할까요? 이 질문에 대한 개발자의 시각을
                공유합니다. AI가 개발자의 종말을 초래할까요? 이 질문에 대한
                개발자의 시각을 공유합니다. 이 질문에 대한 개발자의 시각을
                공유합니다.
              </p>
            </div>
            <div className="mt-24 flex gap-3 text-center md:mt-0">
              <button
                className="h-12 w-12 rounded-full bg-gray-100 p-2 hover:cursor-pointer hover:brightness-90"
                // onClick={}
              >
                <img src={left} alt="notion" />
              </button>
              <button className="text-ta-bl h-12 w-12 rounded-full bg-gray-100 p-2 hover:cursor-pointer hover:brightness-90">
                <img src={right} alt="notion" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
