import { Link } from 'react-router-dom';

const RepoItem = ({
  repo: {
    owner: { login, avatar_url },
    name,
    language,
    html_url,
    stargazers_count,
    watchers_count,
    forks_count,
  },
}) => {
  return (
    <>
      <div>
        <div>
          <div className='card-body'>
            <div>
              <img className='img-fluid' src={avatar_url} alt='Github avatar' />
            </div>

            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>Language: {language}</p>
            <Link
              to={`/repo_details/${login}/${name}`}
              className='btn btn-dark my-1'
            >
              More Info
            </Link>
            <a
              href={html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              View on Github
            </a>
          </div>
          <div className='card-footer'>
            <span className='badge badge-primary'>
              Stars: {stargazers_count}
            </span>
            <span className='badge badge-secondary'>
              Watchers: {watchers_count}
            </span>
            <span className='badge badge-success'>Forks: {forks_count}</span>
          </div>
        </div>
      </div>
    </>
  );
};


export default RepoItem;
