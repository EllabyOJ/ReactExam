import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page</title>
        <meta
          name='description'
          content='Error Page'
        />
        <link rel='canonical' href='/*' />
      </Helmet>
      <div className='error'>
        <h1>
          Oops! Page Not Found.
        </h1>
        <p>Sorry, this page does not exist</p>
      </div>
    </>
  );
};

export default NotFound;
