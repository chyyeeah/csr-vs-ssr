import React from 'react';

var Repo = ({ id, forkCount, url, name, owner }) => {
  return (
    <tr>
      <td>{forkCount}</td>
      <td><a href={url} target="_blank">{name}</a></td>
      <td><a href={owner.profileUrl} target="_blank">{owner.name}</a></td>
    </tr>
  );
};

export default Repo;