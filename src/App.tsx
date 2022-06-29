import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import { AppLayout } from './pages/AppLayout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/*<Route index={true} element={<MainPage />} />*/}
          {/*<Route path="home" element={<MainPage />} />*/}
          {/*<Route path="about" element={<About />} />*/}
          {/*<Route path="car-types" element={<CarTypesPage />} />*/}

          <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There&apos;s nothing here!</p>
                </main>
              }
          />
        </Route>
      </Routes>
  );
}

export default App;
