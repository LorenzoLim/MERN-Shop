if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express()

// Plugins
app.use(bodyParser.json()) // Allow JSON uploads (POST/PUT)

// Routes
app.use([
  require('./routes/products')
])

app.use((error, req, res, next) => {
  res.send({ errpr: error.message });
});

app.use((req, res, next) => {
  res.status(404).send({
    error: `No route found for ${req.method} ${req.url}`
  })
})

app.listen(7000, (error) => {
  if (error) {
    console.log('Server is listening on ');
  } else {
    console.log('Server is listening on http://localhost:7000/')
  }
})
