import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Article from "./components/Article"
import HomePage from './pages/home';
import TechPage from './pages/tech'
import ReviewsPage from './pages/reviews'
import AiPage from './pages/ai'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/ai" element={<AiPage />} />
          <Route path="/:articleUrl" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;