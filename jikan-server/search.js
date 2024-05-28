const router = require("express").Router();

const jikanAPI = require("jikan-api");

const _formatResults = (results) => {
  return results.data.map((result) => {
    return {
      title: `${result.title}`,
      id: `${result.mal_id}`,
    };
  });
};

// GET /search/anime
// accepts a query param as ?q=<title>
router.get("/anime", async (req, res) => {
  try {
    const searchList = await jikanAPI.searchAnime(req.query.q);
    const data = {
      count: searchList.pagination.items.count,
      results: _formatResults(searchList),
    };

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// POST /search/anime/details
router.post("/anime/details", async (req, res) => {
  try {
    const { keyword, counts, selectedId, selectedTitle } = req.body;
    const resultAnime = await jikanAPI.displayAnime(selectedId);
    const date = new Date();
    const timestamp =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " @ " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    const data = {
      keyword,
      counts,
      selectedId,
      selectedTitle,
      timestamp,
    };

    // Insert results into MongoDB
    const db = req.app.locals.db;
    const collection = db.collection("Results");

    await collection.insertOne(data);

    res.json(resultAnime.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;
