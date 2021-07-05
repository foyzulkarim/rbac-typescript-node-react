import React, { FC } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import MainLayout from './Layout/MainLayout';

const App: FC = () => (
  <Router>
    <MainLayout />
  </Router>
);

export default App;