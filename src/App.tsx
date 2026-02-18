import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomePage from '@/domains/home/HomePage';
import NoticePage from '@/domains/notice/NoticePage';
import NotFoundPage from '@/domains/not-found/NotFoundPage';
import Loading from './components/common/Loading';

const App = () => {
  return (
    <>
      <Header />
      <main className="c-container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
