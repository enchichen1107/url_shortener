// basic shortened url information
const shortUrlLength = 5
const preUrl = 'http://localhost:3000/'

// collection of all possible digits
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const allDigits = lowerCaseLetters + upperCaseLetters + numbers
const collection = allDigits.split('')

// generate 5 random digits
function generateFiveDigits (collection) {
  let randomDigits = ''
  let randomIndex
  for (let i = 0; i < shortUrlLength; i++) {
    randomIndex = Math.floor(Math.random() * collection.length)
    randomDigits += collection[randomIndex]
  }
  return randomDigits
}

// combine random digits to short url
const shortUrl = preUrl + generateFiveDigits(collection)

// export short url
module.exports = shortUrl
