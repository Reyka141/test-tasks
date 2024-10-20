import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';

import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';


const App = () => (
  <Router>
    <Routes>
      <Route 
        path='/'
        element={<MainPage />}
      />
      <Route 
        path='*'
        element={NotFoundPage}
      />
        
    </Routes>
  </Router>
);

export default App;
