import Home from './components/Home';
import Navbar from './components/Navbar';
import RepoList from './components/Repos';
import RepoDetails from './components/RepoDetails';
import NotFound from './components/Errorpage';
import RepoPaginate from './components/Paginate';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import SearchRepo from './components/Search';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='repos_list' element={<RepoList />} />
          <Route path='repo_details/:login/:name' element={<RepoDetails />} />
          <Route path='search' element={<SearchRepo />}>
            <Route path=':username' element={<RepoPaginate />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
