import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
