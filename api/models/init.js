const mongoose = require('mongoose');

// Use the promise functionality built into Node
mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds139446.mlab.com:39446/shop-passport`, { useMongoCLient: true })
.then(() => {
  console.log('Successfully connected to database!')
})
.catch(error => {
  // SOmething went wrong!
  console.log('Error connecting to MongoDB database', error)
})

module.exports = mongoose
