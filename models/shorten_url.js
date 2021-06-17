// basic shortened url information
const shortUrlLength = 5
const preUrl = 'http://localhost:3000/'

// collection of all possible digits
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const allDigits = lowerCaseLetters + upperCaseLetters + numbers
const collection = allDigits.split('')

// generate shortened url
function generateShortUrl () {
  let randomDigits = ''
  let randomIndex
  for (let i = 0; i < shortUrlLength; i++) {
    randomIndex = Math.floor(Math.random() * collection.length)
    randomDigits += collection[randomIndex]
  }
  const shortUrl = preUrl + randomDigits
  return shortUrl
}

// export shortened url function
module.exports = generateShortUrl
