async function generateShortUrl () {
  // basic shortened url information
  const shortUrlLength = 5
  const baseUrl = 'https://obscure-refuge-30848.herokuapp.com/'

  // collection of all possible digits
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const allDigits = lowerCaseLetters + upperCaseLetters + numbers
  const collection = allDigits.split('')

  // add Url model
  const Url = require('./url')

  // generate shortened url
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
