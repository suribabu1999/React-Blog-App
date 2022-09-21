
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/articleListpage';
import Article from './pages/articlePage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import PageNotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <NavBar /> 
      <div id='page-body'>  
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/articles" element={<ArticleList />} />
           <Route path="/articles/:articleId" element={<Article />} />
           <Route path="/about" element = {<AboutPage />} />
           <Route path="/*" element = {<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
