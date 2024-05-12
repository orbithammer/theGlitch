import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Article from "./components/Article"
import HomePage from './pages/home';
import TechPage from './pages/tech'
import ReviewsPage from './pages/reviews'
import EntertainmentPage from './pages/entertainment'
import AiPage from './pages/ai'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:pageNumber" element={<HomePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
          <Route path="/ai" element={<AiPage />} />
          <Route path="/article/:articleUrl" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;