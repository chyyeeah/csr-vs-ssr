import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';
import hostServer from '../utils/hostServer';

const App = ({ data }) => {
  const [ repos, setRepos ] = useState(data);

  const updateReposList = () => {
    axios.get('http://localhost:3001/repos')
      .then(res => {
        setRepos(res.data);
      })
      .catch(err => console.error(err));
  };

  const search = term => {
    console.log(`${term} was searched`);
    axios.post('http://localhost:3001/repos', { username: term })
      .then(() => updateReposList())
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
};

export default App;