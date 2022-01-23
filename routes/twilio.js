var express = require('express');
const { response } = require('../app');
var twilioRouter = express.Router();
const config = require('../utils/config')
const client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN)

/* GET home page. */
twilioRouter.post('/', function(req, res, next) {
  const receiver = req.body.number
  res.header('Content-Type', 'application/json')
  const randomFunFacts = ["ff1", "ff2", 'ff3', 'ff4', 'ff5']
  const funFact = randomFunFacts[Math.floor(Math.random() * (4))]
  client.messages.create({
      from: config.TWILIO_PHONE_NUMBER,
      to: receiver,
      body: funFact
  })
  .then(() => {
      response.send(JSON.stringify({ success: true}))
  })
  .catch(() => {
      response.send(JSON.stringify({ success: false }))
  })
});

twilioRouter.options('/', function(req, res, next) {
  const receiver = req.body.number
  const randomFunFacts = ["ff1", "ff2", 'ff3', 'ff4', 'ff5']
  const funFact = randomFunFacts[Math.floor(Math.random() * (4))]
  client.messages.create({
      from: config.TWILIO_PHONE_NUMBER,
      to: receiver,
      body: funFact
  })
  .then(() => {
      response.send(JSON.stringify({ success: true}))
  })
  .catch(() => {
      response.send(JSON.stringify({ success: false }))
  })
});



module.exports = twilioRouter;