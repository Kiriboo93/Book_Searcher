import './css/App.css';
import Icon from '@mdi/react';
import { mdiBookHeart } from '@mdi/js';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Genre from './pages/genre/Genre';
import Welcome from './pages/welcome/Welcome';
import Author from './pages/author/Author';
import Years from './pages/years/Years';
import { useContext } from 'react';
import { SearchContext } from './context/SearchContext';
import Book from './pages/book/Book';

function App() {
  /**
   * Context of the aplication.
   */
  const context = useContext(SearchContext);

  /**
   * Clears context when changin page.
   */
  const clearContextQuery = () => {
    context.setBooks([]);
    context.setQuery("");
  }

  return (
    <main>
      <header>
        <a className='nav-title-link' href='/'>
          <Icon className='nav-icon' path={mdiBookHeart} size={2} />
          <span className='nav-title'>Book searcher</span>
          <Icon className='nav-icon' path={mdiBookHeart} size={2} />
        </a>
      </header>
      <BrowserRouter>
        <nav>
          <Link data-testid="genre-link" onClick={clearContextQuery} to="/genre">Search by genre</Link>
          <Link data-testid="author-link" onClick={clearContextQuery} to="/author">Search by author</Link>
          <Link data-testid="years-link" onClick={clearContextQuery} to="/years">Search by year</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/genre" element={<Genre />}></Route>
          <Route path="/author" element={<Author />}></Route>
          <Route path="/years" element={<Years />}></Route>
          <Route path="/bookinfo" element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <div className='footer-content'>
          <span>Powered by Open Library Search API</span>
          <span>© Roberto "Kiriboo" Luquero</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
