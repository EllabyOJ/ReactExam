import { useEffect, useState } from 'react';
import RepoPaginate from './Paginate';
import { fetchRepo } from './GetRepos';
import Spinner from './Spinner';
import { Helmet } from 'react-helmet-async';

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepo('EllabyOJ').then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Repo list</title>
        <meta name='description' content='My Github repo list page' />
        <link rel='canonical' href='/repos_list' />
      </Helmet>
      {isLoading ? <Spinner /> : <RepoPaginate repos={repos} />}
    </>
  );
};

export default Repos;