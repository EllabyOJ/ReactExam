import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name='description'
          content='My Github Repositories'
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className='home'>
        <div>
          <div>
            <h2>Repositories</h2>
            <p>
              Welcome to my repo bank.
            </p>
            <div className='buttons'>
              <Link to='/repos_list' className='view'>
                View my Repos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
