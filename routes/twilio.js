var express = require('express');
const { response } = require('../app');
var twilioRouter = express.Router();
const config = require('../utils/config')
const client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN)

/* GET home page. */
twilioRouter.post('/', function(req, res, next) {
  const receiver = req.body.number
  res.header('Content-Type', 'application/json')
  const randomFunFacts = ["11% of online users have been victims of data theft.", "83% of Americans are using weak passwords. The most commonly used passwords have a pet’s name, their own name, or a family member’s name.", '28% of Americans said they faced identity theft in the past year. The most common problem was fraudulent charges to their credit or debit cards.', 'Only 9% of Americans read privacy policies before accepting them.', '21% of online users are the victim of account hacking.']
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