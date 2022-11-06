import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { fetchRepoDetails } from './GetRepos';
import Spinner from './Spinner';

const Repo = () => {
  const { name, login } = useParams();
  const [repo, setRepo] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepoDetails(name, login).then(data => {
      setRepo(data);
      setLoading(false);
    });
  }, [name, login]);

  return (
    <>
      <Helmet>
        <title>Repo Details</title>
        <meta name='description' content='Github repositories details page ' />
        <link rel='canonical' href='/repo_details' />
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='details-container'>
          <div>
            <div>
                <img src={repo.owner?.avatar_url} alt='' />
              <div className='repo-details-header-right'>
                <h2>Username: {repo.owner?.login}</h2>
                <p>Repo name: {repo.name}</p>
                <p>Description: {repo.description}</p>
              </div>
            </div>
          </div>
          <button
            className='back'
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default Repo;
