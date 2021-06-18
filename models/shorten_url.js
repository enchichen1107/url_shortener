// basic shortened url information
const shortUrlLength = 5
const baseUrl = 'http://localhost:3000/'

// collection of all possible digits
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const allDigits = lowerCaseLetters + upperCaseLetters + numbers
const collection = allDigits.split('')

// set db connection
const mongoose = require('mongoose')
const Url = require('./url')
mongoose.connect('mongodb://localhost/url-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// generate shortened url
async function generateShortUrl () {
  let randomDigits = ''
  let randomIndex
  for (let i = 0; i < shortUrlLength; i++) {
    randomIndex = Math.floor(Math.random() * collection.length)
    randomDigits += collection[randomIndex]
  }
  const shortUrl = baseUrl + randomDigits

  // check uniqueness of the shortUrl
  let uniqueShortUrl = ''
  await Url.find({ shortUrl: shortUrl }).lean().then(record => {
    uniqueShortUrl = record.length ? generateShortUrl() : shortUrl
    console.log(`${uniqueShortUrl} is unique!`)
  }).catch(error => console.log(error))
  return uniqueShortUrl
}

// export shortened url function
module.exports = generateShortUrl
