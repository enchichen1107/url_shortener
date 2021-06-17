// init packages
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
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

// set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// preprocess before enter routes
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// show front page
app.get('/', (req, res) => {
  res.render('index')
})

// post data
app.post('/', (req, res) => {
  res.redirect('/')
})

// set port 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
