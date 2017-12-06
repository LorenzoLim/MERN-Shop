const mongoose = require('mongoose');

// Use the promise functionality built into Node
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/myshop', { useMongoCLient: true })
.then(() => {
  console.log('Successfully connected to database!')
})
.catch(error => {
  // SOmething went wrong!
  console.log('Error connecting to MongoDB database', error)
})

module.exports = mongoose
