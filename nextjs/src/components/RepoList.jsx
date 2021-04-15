import React from 'react';
import Repo from './Repo.jsx';

var RepoList = (props) => {
  const repos = props.repos?.length > 0
    ? props.repos.map((repo) => {
        return (
          <Repo
            key={repo.id}
            forkCount={repo.forkCount}
            url={repo.url}
            name={repo.name}
            owner={repo.owner}/>
        );
      })
    : null;

  return (
    <div>
      <h4> Top 25 Repos (# of Forks)! </h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"># of Forks</th>
            <th scope="col">Repo Name</th>
            <th scope="col">Owner</th>
          </tr>
        </thead>
        <tbody>{repos}</tbody>
      </table>
    </div>);
};

export default RepoList;