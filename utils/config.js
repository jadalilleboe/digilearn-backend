require('dotenv').config()

const ACCOUNT_SID = process.env.ACCOUNT_SID
const AUTH_TOKEN =  process.env.AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const NEWS_API_KEY = process.env.NEWS_API_KEY

module.exports = {
    ACCOUNT_SID,
    AUTH_TOKEN,
    TWILIO_PHONE_NUMBER,
    NEWS_API_KEY
}