import React from 'react';
import Repo from './Repo.jsx';

var RepoList = (props) => (
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
      <tbody>
        {props.repos.map(function(repo) {
          return (
            <Repo
              key={repo.id}
              forkCount={repo.forkCount}
              url={repo.url}
              name={repo.name}
              owner={repo.owner}/>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default RepoList;