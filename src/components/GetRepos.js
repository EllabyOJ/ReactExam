export const fetchRepo = async username => {
    const response = await fetch(
      `https://api.github.com/users/EllabyOJ/repos`
    );
    const data = await response.json();
    return data;
  };
  
  export const fetchRepoDetails = async (repoName, username = 'EllabyOJ') => {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`
    );
    const data = await response.json();
    return data;
  };
  