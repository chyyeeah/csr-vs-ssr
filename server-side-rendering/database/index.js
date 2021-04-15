const Promise = require('bluebird');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(
  `mongodb+srv://wilson-root:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.kjyiw.mongodb.net/fetcher`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  description: String,
  forkCount: Number,
  owner: {
    id: Number,
    name: String,
    profileUrl: String
  }
});

const Repo = mongoose.model('Repo', repoSchema);

const save = (arrOfParsedRepos) => {
  let promisedDbUpdate = [];

  arrOfParsedRepos.forEach(repo => {
    let id = { id: repo.id };
    let data = { ...repo };
    delete data[id];
    promisedDbUpdate.push(Repo.updateOne(id, data, { upsert: true }));
  });

  return Promise.all(promisedDbUpdate);
};

const getTop25 = () => Repo.aggregate([{ $sort: { forkCount: -1 }}]).limit(25);

module.exports.save = save;
module.exports.getTop25 = getTop25;