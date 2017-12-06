const mongoose = require('./init')
const passportLocalMongoose = reuire('passport-local-mongoose')

const userSchema = new mongoose.schema({
  firstName: string,
  lastName: string
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email not username
  usernameLowerCase: true, // Treat emails as case-insensitive
  session: false // We'll use JWT
})

const User = mongoose.model('User', {

})

module.exports = User
