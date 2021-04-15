import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import axios from 'axios';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';
import hostServer from '../utils/hostServer';

const App = props => {
  const [ repos, setRepos ] = useState([]);

  if (__isBrowser__ && window.__SERIALIZED_DATA__) {
    setRepos(window.__SERIALIZED_DATA__);
    delete window.__SERIALIZED_DATA__;
  } else if (props.data && repos.length < 1) {
    setRepos(props.data);
  }

  useEffect(() => {
    if (repos.length < 1) {
      axios.get('/repos')
      .then(res => {
        console.log(res.data);
        setRepos(res.data);
      })
      .catch(err => console.error(err));
    }
  }, []);

  const updateReposList = () => {
    axios.get('/repos')
      .then(data => {
        setRepos(data);
      })
      .catch(err => console.error(err));
  };

  const search = term => {
    console.log(`${term} was searched`);
    axios.post('/repos', { username: term })
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