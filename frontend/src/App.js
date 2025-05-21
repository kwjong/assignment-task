import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import FundList from './components/FundList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Articles
          </NavLink>
          <NavLink to="/funds" className={({ isActive }) => (isActive ? "active" : "")}>
            Funds
          </NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/funds" element={<FundList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
