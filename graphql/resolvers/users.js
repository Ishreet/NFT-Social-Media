const User = require('../../models/User')

modules.exports = {
  Mutation: {
    register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO Validate user data
      // TODO Make sure user doesn't already exist
      // TODO hash the password and create auth token
    },
  },
}
