const superagent = require("superagent");

// a config file to hold our base URL (or any applicable API keys or authentication)
const config = require("./config.json");
// search by keyword
const searchAnime = async (animeTitle) => {
  try {
    const animeURL = `${config.url}/anime?q=${animeTitle}`;
    const response = await superagent.get(animeURL);

    return response.body;
  } catch (error) {
    return error;
  }
};
// get by id
const displayAnime = async (animeId) => {
  try {
    const animeURL = `${config.url}/anime/${animeId}`;
    const response = await superagent.get(animeURL);

    return response.body;
  } catch (error) {
    return error;
  }
};

// export the functions to be used in the jikan-app CLI
module.exports = {
  searchAnime,
  displayAnime,
};
