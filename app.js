// init packages
const express = require('express')
const app = express()
const port = 3000

// set db connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/url-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// show front page
app.get('/', (req, res) => {
  res.send('hello world')
})

// set port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
