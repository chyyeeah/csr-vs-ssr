require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const github = require('../helpers/github.js');
const parseGithubData = require('../helpers/parseGithubData.js');
const db = require('../database/index.js');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/src/components/App.jsx';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', function (req, res) {
  db.getTop25()
    .then(data => {
      const app = ReactDOMServer.renderToString(<App data={data} />);

      const indexFile = path.resolve('client/dist/index.html');
      fs.readFile(indexFile, 'utf8', (err, file) => {
        if (err) {
          console.error('reading index.html broked', err);
          res.sendStatus(500);
        } else {
          const addClientSideData = file.replace(
            '<script>window.__SERIALIZED_DATA__;</script>',
            `<script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)};</script>`);
          const payload = addClientSideData.replace('<div id="app"></div>', `<div id="app">${app}</div>`);
          res.send(payload);
        }
      });
    })
    .catch(err => res.status(404).send(err));
});

app.use(express.static(path.resolve('client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/repos', function (req, res) {
  db.getTop25()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.post('/repos', function (req, res) {
  const githubHandle = req.body.username;
  github.getReposByUsername(githubHandle)
    .then(rawResults => {
      const arrOfParsedRepos = parseGithubData(rawResults.data);
      db.save(arrOfParsedRepos)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(404).send(`error saving to db: ${err}`));
    })
    .catch(err => {
      res.status(404).send(`error getting repos: ${err}`);
    });
});

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));