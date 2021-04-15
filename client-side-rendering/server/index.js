const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const github = require('../helpers/github.js');
const parseGithubData = require('../helpers/parseGithubData.js');
const db = require('../database/index.js');

let app = express();

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/repos', function (req, res) {
  let githubHandle = req.body.username;
  github.getReposByUsername(githubHandle)
    .then(rawResults => {
      let arrOfParsedRepos = parseGithubData(rawResults.data);
      db.save(arrOfParsedRepos)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => {
          res.status(404).send(`error saving to db: ${err}`);
        })
    })
    .catch(err => {
      res.status(404).send(`error getting repos: ${err}`);
    });
});

app.get('/repos', function (req, res) {
  db.getTop25()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));