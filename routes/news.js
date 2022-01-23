var express = require('express');
var newsRouter = express.Router();
const axios = require('axios')
const config = require('../utils/config')
const url = `https://newsapi.org/v2/everything?q=Digital+privacy&from=2022-01-23&sortBy=popularity&apiKey=${config.NEWS_API_KEY}`

/* GET home page. */
newsRouter.get('/', async function(req, res, next) {
    const result = await axios.get(url) 
    res.json(result.data)
});

module.exports = newsRouter;
