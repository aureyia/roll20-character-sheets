const axios = require('axios').default;
const gulp = require('gulp');
const writeJson = require('./helpers/writeJson');

const baseURL = 'https://raw.githubusercontent.com/rsek/dataforged/main/roll20/'

const targetFiles = {
  data: [
    "oracles",
    "assets",
    "moves",
    "movegroups"
  ],
  translations: ["translation-assets"]
};

module.exports = gulp.task("fetchDataforged", async () =>  {
  const gitHubRaw = axios.create({
    baseURL,
  }
);
  for (const key in targetFiles) {
    targetFiles[key].forEach(item =>
      gitHubRaw.get(`${item}.json`).then(
        (response) => {
          writeJson(`./app/${key}/${item}.json`, response.data)
        }
      )
    )
  }
})