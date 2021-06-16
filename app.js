// init packages
const express = require('express')
const app = express()
const port = 3000

// show front page
app.get('/', (req, res) => {
  res.send('hello world')
})

// set port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
