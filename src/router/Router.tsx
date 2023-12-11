import { HashRouter, Routes, Route } from 'react-router-dom';
import { Warehouses } from '../pages/Warehouses';
import { HomePage } from '../pages/HomePage';
import { Layout } from './Layout/Layout';

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='warehouses'
            element={<Warehouses />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};
