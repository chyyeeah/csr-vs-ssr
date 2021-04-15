const parseGithubData = (arrOfRepos) => {
  let repos = [];
  arrOfRepos.forEach(rawRepo => {
    let repo = {};
    repo.id = rawRepo.id;
    repo.name = rawRepo.name;
    repo.url = rawRepo.html_url;
    repo.description = rawRepo.description;
    repo.forkCount = rawRepo.forks;

    repo.owner = {};
    repo.owner.id = rawRepo.owner.id;
    repo.owner.name = rawRepo.owner.login;
    repo.owner.profileUrl = rawRepo.owner.html_url;

    repos.push(repo);
  })

  return repos;
};

module.exports = parseGithubData;