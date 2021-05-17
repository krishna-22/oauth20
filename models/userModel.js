const mongoose = require('../index')

const userSchema = {
    name:String,
    googleId: String
}

module.exports = mongoose.model('guser',userSchema)

