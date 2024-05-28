# Anime-Search-API

An Express.js server that retrieves anime information from [MyAnimeList](https://myanimelist.net/) via [JikanApi](https://jikan.moe/) and stores search results into MongoDB.

### Built With
* [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## Features
- Search for anime by title and retrieve detailed information through Express.js server endpoints.
- Store search results in a MongoDB database.
- Retrieve search history from the MongoDB database.

## Getting Started
### Prerequisites
1. Setup a [MongoDB Cluster](https://www.mongodb.com/resources/products/fundamentals/clusters) through [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)
2. API testing tool such as Postman.

### Installation
1. Clone the repo:
  ```bash
  git clone https://github.com/willzerrs/Anime-Search-API.git
  ```
2. Install NPM packages:
  ```bash
  cd jikan-api
  npm install
  ```
  ```bash
  cd jikan-server
  npm install
  ```
3. Enter MongoDB cluster information in `jikan-server/config.js`
  ```json
  {
    "cluster": "cluster-uri",
    "db_name": "db-name",
    "appName": "project-name",
    "username": "db-username",
    "password": "db-password"
  }
```

## Usage
Start up the server by navigating to `/jikan-server` in command line and run:
```bash
npm start
```

Then, interact with the server endpoints with Postman:

* Search anime titles using the `/anime` endpoint:
```
http://localhost:8888/search/anime?q=<title>
```
![image](https://github.com/willzerrs/Anime-Search-API/assets/10387582/a16ebf6e-a32a-4df2-96cd-abc001f73af0)

* Get the anime details using the `/search/anime/details` endpoint:
	* _format the JSON body to include:_
 		* `keyword`: search keyword
   		* `counts`: search results
   		* `selectedId`: result id
   		* `selectedTitle`: result title
```
http://localhost:8888/search/anime/details
```
![image](https://github.com/willzerrs/Anime-Search-API/assets/10387582/8f47473d-11e8-415c-98e1-e3594e50cc71)

* Fetch search history from MongoDB using the `/history/search` endpoint:
```
http://localhost:8888/history/search
```
![image](https://github.com/willzerrs/Anime-Search-API/assets/10387582/c9066bd7-f831-42b9-bdb7-6397f0670b34)


